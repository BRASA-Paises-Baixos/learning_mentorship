import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { findClerkUserByEmail } from "../../../../../lib/auth/clerk";
import { getGumroadProductId, isGumroadTestingEnabled } from "../../../../../lib/gumroad/config";
import { upsertEntitlement } from "../../../../../lib/gumroad/entitlementStore";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type GrantBody = {
  email?: string;
  product_id?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  if (!isGumroadTestingEnabled()) {
    return NextResponse.json({ ok: false, error: "Testing mode is disabled." }, { status: 403 });
  }

  const body = (await request.json().catch(() => ({}))) as GrantBody;
  const email = (body.email || "").trim().toLowerCase();
  const productId = (body.product_id || getGumroadProductId()).trim();

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "Valid email is required." }, { status: 400 });
  }

  if (!productId) {
    return NextResponse.json({ ok: false, error: "Missing product_id." }, { status: 400 });
  }

  const clerkUser = await findClerkUserByEmail(email);
  if (!clerkUser) {
    return NextResponse.json(
      { ok: false, error: "No Clerk user found for this email." },
      { status: 404 }
    );
  }

  upsertEntitlement({
    productId,
    userId: clerkUser.id,
    purchaseEmail: email,
    source: "testing",
  });

  const response = NextResponse.json({
    ok: true,
    message: "Testing entitlement granted.",
    product_id: productId,
    email,
    user_id: clerkUser.id,
  });

  return response;
}
