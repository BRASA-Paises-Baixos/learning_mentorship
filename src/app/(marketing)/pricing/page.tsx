import PricingSection from "../../../components/sections/PricingSection";
import FAQSection from "../../../components/sections/FAQSection";
import ContactSection from "../../../components/sections/ContactSection";
import { getContentProvider } from "../../../lib/content/provider";
import { getPaymentProvider } from "../../../lib/payments/provider";
import { getRevalidateSeconds } from "../../../lib/revalidate";
import Section from "../../../components/ui/Section";
import Button from "../../../components/ui/Button";
import Link from "next/link";
import { getGumroadProductUrl, isGumroadTestingEnabled } from "../../../lib/gumroad/config";

export const revalidate = getRevalidateSeconds();

export default async function PricingPage() {
  const provider = getContentProvider();
  const paymentProvider = getPaymentProvider();
  const pageContent = await provider.getPricingPageContent();
  const testingEnabled = isGumroadTestingEnabled();
  const applyGateEnabled = process.env.NEXT_PUBLIC_APPLY_GATE_ENABLED !== "false";
  const gumroadProductUrl = getGumroadProductUrl();

  return (
    <div>
      {applyGateEnabled ? (
        <Section
          eyebrow="Application First"
          title="Apply before subscription"
          subtitle="We review mentorship applications first. Accepted applicants then receive subscription and onboarding access."
        >
          <Button asChild variant="primary" size="md">
            <Link href="/apply">Start your application</Link>
          </Button>
        </Section>
      ) : null}
      {testingEnabled ? (
        <Section
          eyebrow="Temporary Testing Mode"
          title="Direct access enabled for Gumroad testing"
          subtitle="This bypasses the Apply gate for development/testing only. Remove NEXT_PUBLIC_ENABLE_GUMROAD_TESTING later."
        >
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="secondary" size="md">
              <a href={gumroadProductUrl} target="_blank" rel="noreferrer">
                Open Gumroad product
              </a>
            </Button>
            <Button asChild variant="secondary" size="md">
              <Link href="/library/reader/studio">Open in-platform reader</Link>
            </Button>
          </div>
        </Section>
      ) : null}
      <PricingSection
        content={pageContent.content.pricing}
        paymentProvider={paymentProvider}
        allowDirectAccess={testingEnabled || !applyGateEnabled}
      />
      <FAQSection content={pageContent.content.faq} />
      <ContactSection content={pageContent.content.contact} />
    </div>
  );
}
