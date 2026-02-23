import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getRequiredSession } from "../../../../lib/auth/session";
import { getGumroadProductId } from "../../../../lib/gumroad/config";
import { getEntitlementForUser } from "../../../../lib/gumroad/entitlementStore";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const session = await getRequiredSession();
    const productId = request.nextUrl.searchParams.get("product_id")?.trim() || getGumroadProductId();

    if (!productId) {
      return NextResponse.json({ ok: false, error: "Missing product_id." }, { status: 400 });
    }

    const entitlement = getEntitlementForUser(session.userId, productId);
    return NextResponse.json({
      ok: true,
      product_id: productId,
      unlocked: Boolean(entitlement),
      entitlement_source: entitlement?.source ?? null,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "UNKNOWN_ERROR";

    if (message === "UNAUTHENTICATED") {
      return NextResponse.json({ ok: false, error: "Authentication required." }, { status: 401 });
    }

    return NextResponse.json({ ok: false, error: "Failed to load purchased content." }, { status: 502 });
  }
}
