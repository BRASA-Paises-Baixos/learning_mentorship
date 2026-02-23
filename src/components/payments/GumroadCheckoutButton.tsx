"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import Button from "../ui/Button";

type GumroadCheckoutButtonProps = {
  checkoutUrl: string;
  returnUrl: string;
  productId: string;
  label: string;
  variant: "primary" | "secondary" | "ghost";
};

export default function GumroadCheckoutButton({
  checkoutUrl,
  returnUrl,
  productId,
  label,
  variant,
}: GumroadCheckoutButtonProps) {
  const timerRef = useRef<number | null>(null);
  const [checking, setChecking] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);
  const allowTestingBypass =
    process.env.NEXT_PUBLIC_ENABLE_GUMROAD_TESTING === "true" ||
    process.env.NEXT_PUBLIC_ENABLE_GUMROAD_TESTING === "1";

  const checkAccess = useCallback(async () => {
    try {
      const response = await fetch(
        `/api/content/unlock?productId=${encodeURIComponent(productId)}`,
        {
          method: "GET",
          credentials: "include",
          cache: "no-store",
        }
      );
      const json = (await response.json()) as { ok?: boolean; unlocked?: boolean };
      const granted = response.ok && Boolean(json.ok);
      setHasAccess(granted);
      return granted;
    } catch {
      setHasAccess(false);
      return false;
    } finally {
      setChecking(false);
    }
  }, [productId]);

  function clearTimer() {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  function onCheckoutClick() {
    const checkoutTab = window.open(checkoutUrl, "_blank", "noopener,noreferrer");

    if (!checkoutTab) {
      // Avoid same-tab redirect when popup APIs return null; user can retry manually.
      return;
    }

    timerRef.current = window.setInterval(async () => {
      if (checkoutTab.closed) {
        clearTimer();
        if (allowTestingBypass) {
          try {
            await fetch("/api/gumroad/testing/mock-purchase", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              credentials: "include",
              body: JSON.stringify({
                product_id: productId,
              }),
            });
          } catch {
            // Ignore grant errors here and let standard access checks handle state.
          }
        }
        window.location.href = `${returnUrl}?post_purchase=1`;
      }
    }, 700);
  }

  useEffect(() => {
    checkAccess();
  }, [checkAccess]);

  useEffect(() => {
    const hasPostPurchaseFlag = new URLSearchParams(window.location.search).has("post_purchase");
    if (!hasPostPurchaseFlag) {
      return;
    }

    let cancelled = false;
    let attempts = 0;
    const maxAttempts = 24;

    const poll = window.setInterval(async () => {
      attempts += 1;
      const granted = await checkAccess();
      if (cancelled) return;

      if (granted) {
        window.clearInterval(poll);
        window.location.href = returnUrl;
        return;
      }

      if (attempts >= maxAttempts) {
        window.clearInterval(poll);
      }
    }, 5000);

    return () => {
      cancelled = true;
      window.clearInterval(poll);
    };
  }, [allowTestingBypass, checkAccess, productId, returnUrl]);

  if (hasAccess) {
    return (
      <Button asChild variant={variant} size="md">
        <Link href={returnUrl}>Open Content</Link>
      </Button>
    );
  }

  return (
    <Button type="button" variant={variant} size="md" onClick={onCheckoutClick} disabled={checking}>
      {checking ? "Checking..." : label}
    </Button>
  );
}
