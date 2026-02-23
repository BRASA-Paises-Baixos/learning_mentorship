import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getRequiredSession } from "../../../../../lib/auth/session";
import { getGumroadProductId, isGumroadTestingEnabled } from "../../../../../lib/gumroad/config";
import { upsertEntitlement } from "../../../../../lib/gumroad/entitlementStore";

type MockPurchaseBody = {
  product_id?: string;
};

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  if (!isGumroadTestingEnabled()) {
    return NextResponse.json({ ok: false, error: "Testing mode is disabled." }, { status: 403 });
  }

  let session;
  try {
    session = await getRequiredSession();
  } catch {
    return NextResponse.json({ ok: false, error: "Authentication required." }, { status: 401 });
  }

  const body = (await request.json().catch(() => ({}))) as MockPurchaseBody;
  const productId = (body.product_id || getGumroadProductId()).trim();
  const userEmail = session.userEmail?.trim().toLowerCase() || "";

  if (!productId) {
    return NextResponse.json({ ok: false, error: "Missing product_id." }, { status: 400 });
  }

  if (!userEmail) {
    return NextResponse.json(
      { ok: false, error: "Session email is required for testing entitlement." },
      { status: 400 }
    );
  }

  upsertEntitlement({
    productId,
    userId: session.userId,
    purchaseEmail: userEmail,
    source: "testing",
  });

  return NextResponse.json({
    ok: true,
    product_id: productId,
    email: userEmail,
  });
}
