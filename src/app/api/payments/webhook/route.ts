import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { findClerkUserByEmail } from "../../../../lib/auth/clerk";
import { getGumroadProductId } from "../../../../lib/gumroad/config";
import { revokeEntitlement, upsertEntitlement } from "../../../../lib/gumroad/entitlementStore";

type WebhookPayload = {
  product_id?: string;
  email?: string;
  refunded?: boolean | string;
  disputed?: boolean | string;
  chargebacked?: boolean | string;
};

function asBoolean(value: unknown) {
  if (typeof value === "boolean") {
    return value;
  }
  if (typeof value === "string") {
    return value.toLowerCase() === "true";
  }
  return false;
}

function normalizeString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function getSharedSecretFromRequest(request: NextRequest) {
  return (
    request.nextUrl.searchParams.get("secret") ||
    request.headers.get("x-webhook-secret") ||
    ""
  ).trim();
}

function toPayload(source: Record<string, unknown>): WebhookPayload {
  const purchase =
    source.purchase && typeof source.purchase === "object"
      ? (source.purchase as Record<string, unknown>)
      : null;

  return {
    product_id: normalizeString(source.product_id) || normalizeString(purchase?.product_id),
    email: normalizeString(source.email) || normalizeString(purchase?.email),
    refunded: source.refunded ?? purchase?.refunded,
    disputed: source.disputed ?? purchase?.disputed,
    chargebacked: source.chargebacked ?? purchase?.chargebacked,
  };
}

async function parsePayload(request: NextRequest): Promise<WebhookPayload> {
  const contentType = request.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    const body = await request.json();
    if (!body || typeof body !== "object") {
      return {};
    }
    return toPayload(body as Record<string, unknown>);
  }

  const formData = await request.formData();
  const source: Record<string, unknown> = {};
  for (const [key, value] of formData.entries()) {
    source[key] = typeof value === "string" ? value : "";
  }
  return toPayload(source);
}

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const expectedSecret = process.env.GUMROAD_WEBHOOK_SHARED_SECRET?.trim();
    if (expectedSecret) {
      const providedSecret = getSharedSecretFromRequest(request);
      if (!providedSecret || providedSecret !== expectedSecret) {
        return NextResponse.json({ ok: false, error: "Invalid webhook secret." }, { status: 401 });
      }
    }

    const payload = await parsePayload(request);

    if (!payload.product_id && !payload.email) {
      return NextResponse.json({ ok: true, action: "ping_acknowledged" });
    }

    const configuredProductId = getGumroadProductId();
    const productId = payload.product_id?.trim() || configuredProductId;
    const email = payload.email?.trim().toLowerCase() || "";

    if (!productId || !email) {
      return NextResponse.json(
        { ok: false, error: "Missing product_id or email in webhook payload." },
        { status: 400 }
      );
    }

    const blocked =
      asBoolean(payload.refunded) ||
      asBoolean(payload.disputed) ||
      asBoolean(payload.chargebacked);

    const clerkUser = await findClerkUserByEmail(email);
    if (!clerkUser) {
      return NextResponse.json({
        ok: true,
        action: "user_not_found",
        product_id: productId,
        email,
      });
    }

    if (blocked) {
      revokeEntitlement({ productId, userId: clerkUser.id });
      if (configuredProductId && configuredProductId !== productId) {
        revokeEntitlement({ productId: configuredProductId, userId: clerkUser.id });
      }
      return NextResponse.json({ ok: true, action: "revoked", product_id: productId, email });
    }

    upsertEntitlement({
      productId,
      userId: clerkUser.id,
      purchaseEmail: email,
      source: "webhook",
    });

    if (configuredProductId && configuredProductId !== productId) {
      upsertEntitlement({
        productId: configuredProductId,
        userId: clerkUser.id,
        purchaseEmail: email,
        source: "webhook",
      });
    }

    return NextResponse.json({ ok: true, action: "granted", product_id: productId, email });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Failed to process payment webhook." },
      { status: 500 }
    );
  }
}
