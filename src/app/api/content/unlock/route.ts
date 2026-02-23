import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getRequiredSession } from "../../../../lib/auth/session";
import { getEntitlementForUser } from "../../../../lib/gumroad/entitlementStore";
import { getContentByProductId } from "../../../../lib/sanity/subscriptionContent";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const session = await getRequiredSession();
    const productId = request.nextUrl.searchParams.get("productId")?.trim() || "";

    if (!productId) {
      return NextResponse.json({ ok: false, error: "Missing productId." }, { status: 400 });
    }

    const entitlement = getEntitlementForUser(session.userId, productId);
    if (!entitlement) {
      return NextResponse.json({ ok: false, error: "Not entitled." }, { status: 403 });
    }

    const content = await getContentByProductId(productId);
    if (!content) {
      return NextResponse.json({ ok: false, error: "Content not found." }, { status: 404 });
    }

    return NextResponse.json({
      ok: true,
      content: {
        id: content._id,
        title: content.title,
        slug: content.slug,
        description: content.description,
        thumbnailUrl: content.thumbnailUrl,
        pdfUrl: content.pdfUrl,
        videoUrl: content.videoUrl,
        externalVideoUrl: content.externalVideoUrl,
        order: content.order,
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "UNKNOWN_ERROR";

    if (message === "UNAUTHENTICATED") {
      return NextResponse.json({ ok: false, error: "Authentication required." }, { status: 401 });
    }

    return NextResponse.json(
      {
        ok: false,
        error: "Failed to unlock content.",
        debug: process.env.NODE_ENV !== "production" ? message : undefined,
      },
      { status: 502 }
    );
  }
}
