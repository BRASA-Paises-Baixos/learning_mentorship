import PricingSection from "../../../components/sections/PricingSection";
import FAQSection from "../../../components/sections/FAQSection";
import ContactSection from "../../../components/sections/ContactSection";
import { getContentProvider } from "../../../lib/content/provider";
import { getPaymentProvider } from "../../../lib/payments/provider";
import { getRevalidateSeconds } from "../../../lib/revalidate";
import GumroadEmbed from "../../../components/payments/GumroadEmbed";
import Layout from "../../../components/ui/Layout";

export const revalidate = getRevalidateSeconds();

export default async function PricingPage() {
  const provider = getContentProvider();
  const paymentProvider = getPaymentProvider();
  const pageContent = await provider.getPricingPageContent();

  return (
    <div>
      <PricingSection content={pageContent.content.pricing} paymentProvider={paymentProvider} />
      <section className="section-sm">
        <Layout>
          <GumroadEmbed productId="brasa-membership" provider={paymentProvider} />
        </Layout>
      </section>
      <FAQSection content={pageContent.content.faq} />
      <ContactSection content={pageContent.content.contact} />
    </div>
  );
}
