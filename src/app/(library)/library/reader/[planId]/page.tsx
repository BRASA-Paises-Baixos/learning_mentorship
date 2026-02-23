import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "../../../../../components/ui/Button";
import Section from "../../../../../components/ui/Section";
import PurchasedContentViewer from "../../../../../components/library/PurchasedContentViewer";
import {
  getConfiguredGumroadProductUrl,
  getPlanDisplayName,
  getGumroadProductId,
  isSupportedSubscriptionPlan,
} from "../../../../../lib/gumroad/config";

type PageProps = {
  params: Promise<{ planId: string }>;
};

export default async function PlanReaderPage({ params }: PageProps) {
  const { planId } = await params;

  if (!isSupportedSubscriptionPlan(planId)) {
    notFound();
  }

  const planName = getPlanDisplayName(planId);
  const gumroadProductUrl = getConfiguredGumroadProductUrl();
  const gumroadProductId = getGumroadProductId();

  return (
    <Section
      eyebrow="Subscription Reader"
      title={`${planName} plan access`}
      subtitle="Complete Gumroad purchase, then this page loads your purchased PDF/video directly in-platform."
    >
      <div className="space-y-6">
        {gumroadProductId ? (
          <>
            <PurchasedContentViewer productId={gumroadProductId} productUrl={gumroadProductUrl} />
            <div className="rounded-2xl border border-foreground/10 bg-surface-2 p-4 text-xs text-foreground/60">
              Purchase flow: Gumroad checkout -&gt; webhook entitlement -&gt; unlocked Sanity content
              appears here.
            </div>
          </>
        ) : (
          <div className="rounded-3xl border border-warning/50 bg-warning/10 p-6 text-sm text-foreground/80">
            <p className="font-semibold">No Gumroad product configured yet.</p>
            <p className="mt-2">
              Configure your Gumroad product id and add `subscriptionContent` in Sanity for this
              product id.
            </p>
            <div className="mt-4">
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="secondary" size="md">
                  <Link href="/pricing">Back to pricing</Link>
                </Button>
                {gumroadProductUrl ? (
                  <Button asChild variant="primary" size="md">
                    <a href={gumroadProductUrl} target="_blank" rel="noreferrer">
                      Open Gumroad product
                    </a>
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
