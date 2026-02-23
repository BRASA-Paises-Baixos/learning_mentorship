import Link from "next/link";
import type { PricingContent } from "../../lib/content/models";
import { getGumroadProductId, getPlanReaderUrl } from "../../lib/gumroad/config";
import type { PaymentProvider } from "../../lib/payments/types";
import GumroadCheckoutButton from "../payments/GumroadCheckoutButton";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Section from "../ui/Section";

export default function PricingSection({
  content,
  paymentProvider,
  allowDirectAccess = false,
}: {
  content: PricingContent;
  paymentProvider?: PaymentProvider;
  allowDirectAccess?: boolean;
}) {
  const productId = getGumroadProductId();

  return (
    <Section eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle}>
      <div className="grid gap-6 lg:grid-cols-3">
        {content.tiers.map((plan) => (
          <Card
            key={plan.id}
            className={`flex h-full flex-col gap-6 ${
              plan.highlight ? "border-primary/40 bg-primary/5" : "bg-surface-2"
            }`}
          >
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-primary">
                {plan.name}
              </div>
              <div className="mt-4 flex items-end gap-2">
                <div className="font-heading text-4xl font-semibold text-foreground">
                  {plan.price}
                </div>
                <div className="text-sm text-foreground/60">{plan.cadence}</div>
              </div>
              <p className="mt-3 text-sm text-foreground/70">{plan.description}</p>
            </div>
            <div className="space-y-2 text-sm text-foreground/70">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            {allowDirectAccess && paymentProvider ? (
              <GumroadCheckoutButton
                checkoutUrl={paymentProvider.getCheckoutUrl(plan.id)}
                returnUrl={getPlanReaderUrl(plan.id)}
                productId={productId}
                label={`Access ${plan.name}`}
                variant={plan.highlight ? "primary" : "secondary"}
              />
            ) : (
              <Button asChild variant={plan.highlight ? "primary" : "secondary"} size="md">
                <Link href="/apply">Apply for {plan.name}</Link>
              </Button>
            )}
          </Card>
        ))}
      </div>
      {content.footnote ? (
        <p className="text-sm text-foreground/60">{content.footnote}</p>
      ) : null}
    </Section>
  );
}
