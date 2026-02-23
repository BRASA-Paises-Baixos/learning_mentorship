"use client";

import { useCallback, useEffect, useState } from "react";

type PurchasedResponse = {
  ok: boolean;
  error?: string;
  content?: {
    id: string;
    title: string;
    slug: string;
    description?: string;
    thumbnailUrl?: string;
    pdfUrl?: string;
    videoUrl?: string;
    externalVideoUrl?: string;
    order?: number;
  };
};

export default function PurchasedContentViewer({
  productId,
  productUrl,
}: {
  productId: string;
  productUrl?: string;
}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasAccess, setHasAccess] = useState(false);
  const [content, setContent] = useState<PurchasedResponse["content"]>(null);
  const [email, setEmail] = useState("");
  const [granting, setGranting] = useState(false);
  const [checkingAccess, setCheckingAccess] = useState(false);

  const allowTestingBypass =
    process.env.NEXT_PUBLIC_ENABLE_GUMROAD_TESTING === "true" ||
    process.env.NEXT_PUBLIC_ENABLE_GUMROAD_TESTING === "1";

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!(event.ctrlKey || event.metaKey)) return;
      const key = event.key.toLowerCase();
      if (key === "s" || key === "p") {
        event.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const loadPurchasedContent = useCallback(async () => {
    const response = await fetch(`/api/content/unlock?productId=${encodeURIComponent(productId)}`, {
      method: "GET",
      credentials: "include",
      cache: "no-store",
    });

    const json = (await response.json()) as PurchasedResponse;
    if (!response.ok || !json.ok) {
      throw new Error(json.error || "No purchased content found.");
    }

    return json.content || null;
  }, [productId]);

  useEffect(() => {
    let active = true;

    async function run() {
      setLoading(true);
      setError(null);

      try {
        const unlockedContent = await loadPurchasedContent();
        if (!active) return;
        setContent(unlockedContent);
        setHasAccess(true);
      } catch (err) {
        if (!active) return;
        const message = err instanceof Error ? err.message : "Failed to load purchased content.";
        setError(message);
        setHasAccess(false);
        setContent(null);
      } finally {
        if (active) setLoading(false);
      }
    }

    run();

    return () => {
      active = false;
    };
  }, [loadPurchasedContent]);

  async function grantTestingAccess() {
    setGranting(true);
    try {
      const response = await fetch("/api/gumroad/testing/grant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email,
          product_id: productId,
        }),
      });

      const json = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !json.ok) {
        setError(json.error || "Failed to grant testing access.");
        return;
      }

      // Ensure newly set auth/entitlement cookies are applied before re-fetching content.
      window.location.reload();
    } catch {
      setError("Failed to grant testing access.");
    } finally {
      setGranting(false);
      setLoading(false);
    }
  }

  async function checkAccessNow() {
    setCheckingAccess(true);
    try {
      const unlockedContent = await loadPurchasedContent();
      setContent(unlockedContent);
      setHasAccess(true);
      setError(null);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to load purchased content.";
      setError(message);
    } finally {
      setCheckingAccess(false);
    }
  }

  useEffect(() => {
    if (!error || !error.toLowerCase().includes("entitlement")) {
      return;
    }

    let cancelled = false;
    let attempts = 0;
    const maxAttempts = 24; // ~2 minutes at 5s intervals

    const timer = setInterval(async () => {
      if (cancelled) return;
      attempts += 1;

      try {
        const unlockedContent = await loadPurchasedContent();
        if (cancelled) return;
        setContent(unlockedContent);
        setHasAccess(true);
        setError(null);
        clearInterval(timer);
      } catch {
        if (attempts >= maxAttempts) {
          clearInterval(timer);
        }
      }
    }, 5000);

    return () => {
      cancelled = true;
      clearInterval(timer);
    };
  }, [error, loadPurchasedContent]);

  if (loading) {
    return (
      <div className="rounded-2xl border border-foreground/10 bg-surface-2 p-4 text-sm text-foreground/70">
        Loading purchased content...
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-4 rounded-2xl border border-warning/40 bg-warning/10 p-4 text-sm text-foreground/80">
        <div>{error}</div>
        {!allowTestingBypass && productUrl ? (
          <div className="flex flex-wrap gap-3">
            <a
              href={productUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              Purchase on Gumroad
            </a>
            <button
              type="button"
              onClick={checkAccessNow}
              disabled={checkingAccess}
              className="rounded-xl border border-foreground/20 bg-surface px-4 py-2 text-sm text-foreground disabled:opacity-60"
            >
              {checkingAccess ? "Checking access..." : "I completed purchase"}
            </button>
          </div>
        ) : null}
        {allowTestingBypass ? (
          <div className="space-y-3 rounded-xl border border-foreground/10 bg-surface-2 p-3">
            <div className="text-xs uppercase tracking-[0.2em] text-primary">
              Testing access
            </div>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your Gmail"
              className="w-full rounded-xl border border-foreground/20 bg-surface px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
            />
            <button
              type="button"
              disabled={!email || granting}
              onClick={grantTestingAccess}
              className="rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:opacity-60"
            >
              {granting ? "Granting access..." : "Get instant testing access"}
            </button>
          </div>
        ) : null}
      </div>
    );
  }

  if (!hasAccess) {
    return (
      <div className="rounded-2xl border border-foreground/10 bg-surface-2 p-4 text-sm text-foreground/70">
        Access check passed, but no unlocked content is configured for this plan yet.
      </div>
    );
  }

  const proxiedPdfUrl = content?.pdfUrl
    ? `/api/media/proxy?productId=${encodeURIComponent(productId)}&src=${encodeURIComponent(content.pdfUrl)}`
    : null;
  const proxiedVideoUrl = content?.videoUrl
    ? `/api/media/proxy?productId=${encodeURIComponent(productId)}&src=${encodeURIComponent(content.videoUrl)}`
    : null;
  const hardenedPdfUrl = proxiedPdfUrl
    ? `${proxiedPdfUrl}${proxiedPdfUrl.includes("#") ? "&" : "#"}toolbar=0&navpanes=0&scrollbar=0`
    : null;

  return (
    <div className="space-y-6">
      {proxiedPdfUrl ? (
        <div className="h-[70vh] min-h-[520px] overflow-hidden rounded-3xl border border-foreground/10 bg-surface-2">
          <iframe
            src={hardenedPdfUrl || proxiedPdfUrl}
            title="Purchased PDF"
            className="h-full w-full border-0"
            onContextMenu={(event) => event.preventDefault()}
          />
        </div>
      ) : (
        <div className="rounded-2xl border border-foreground/10 bg-surface-2 p-4 text-sm text-foreground/70">
          No PDF found in this purchase.
        </div>
      )}

      {proxiedVideoUrl ? (
        <div className="overflow-hidden rounded-3xl border border-foreground/10 bg-surface-2 p-4">
          <div className="mb-3 text-xs uppercase tracking-[0.2em] text-primary">Video lesson</div>
          <video
            src={proxiedVideoUrl}
            controls
            controlsList="nodownload noplaybackrate noremoteplayback"
            disablePictureInPicture
            disableRemotePlayback
            className="h-auto w-full rounded-2xl"
            onContextMenu={(event) => event.preventDefault()}
            onDragStart={(event) => event.preventDefault()}
          />
        </div>
      ) : content?.externalVideoUrl ? (
        <div className="overflow-hidden rounded-3xl border border-foreground/10 bg-surface-2 p-4">
          <div className="mb-3 text-xs uppercase tracking-[0.2em] text-primary">Video lesson</div>
          <a
            href={content.externalVideoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Open video
          </a>
        </div>
      ) : null}
    </div>
  );
}
