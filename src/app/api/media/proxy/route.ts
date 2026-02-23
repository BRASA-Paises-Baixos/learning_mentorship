import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getRequiredSession } from "../../../../lib/auth/session";
import { getEntitlementForUser } from "../../../../lib/gumroad/entitlementStore";
import { getMediaProxyAllowedHosts } from "../../../../lib/gumroad/config";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function errorResponse(status: number, error: string) {
  return NextResponse.json({ ok: false, error }, { status });
}

function isHostAllowed(hostname: string) {
  const allowedHosts = getMediaProxyAllowedHosts();
  const normalizedHostname = hostname.trim().replace(/\.$/, "").toLowerCase();
  return allowedHosts.includes(normalizedHostname);
}

function buildHeaders(upstreamHeaders: Headers) {
  const headers = new Headers();
  const passthrough = [
    "content-type",
    "content-length",
    "content-range",
    "accept-ranges",
    "content-disposition",
    "last-modified",
    "etag",
  ];

  for (const name of passthrough) {
    const value = upstreamHeaders.get(name);
    if (value) {
      headers.set(name, value);
    }
  }

  headers.set("cache-control", "private, no-store, max-age=0");
  return headers;
}

export async function GET(request: NextRequest) {
  const productId = request.nextUrl.searchParams.get("productId")?.trim() || "";
  const src = request.nextUrl.searchParams.get("src");
  if (!productId) {
    return errorResponse(400, "Missing productId query parameter.");
  }
  if (!src) {
    return errorResponse(400, "Missing src query parameter.");
  }

  let session;
  try {
    session = await getRequiredSession();
  } catch {
    return errorResponse(401, "Authentication required.");
  }

  const entitlement = getEntitlementForUser(session.userId, productId);
  if (!entitlement) {
    return errorResponse(403, "Not entitled.");
  }

  let url: URL;
  try {
    url = new URL(src);
  } catch {
    return errorResponse(400, "Invalid src URL.");
  }

  if (url.protocol !== "https:") {
    return errorResponse(400, "Only https URLs are supported.");
  }

  if (!isHostAllowed(url.hostname)) {
    return errorResponse(403, `Host not allowed: ${url.hostname}`);
  }

  try {
    const headers = new Headers();
    const range = request.headers.get("range");
    if (range) {
      headers.set("range", range);
    }

    const upstream = await fetch(url.toString(), {
      method: "GET",
      headers,
      cache: "no-store",
    });

    if (!upstream.ok || !upstream.body) {
      return errorResponse(502, "Upstream fetch failed.");
    }

    return new NextResponse(upstream.body, {
      status: upstream.status,
      headers: buildHeaders(upstream.headers),
    });
  } catch {
    return errorResponse(502, "Proxy request failed.");
  }
}
