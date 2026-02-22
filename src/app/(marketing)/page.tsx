import { getContentProvider } from "../../lib/content/provider";
import { getPaymentProvider } from "../../lib/payments/provider";
import { getRevalidateSeconds } from "../../lib/revalidate";
import HeroSection from "../../components/sections/HeroSection";
import AboutSection from "../../components/sections/AboutSection";
import MentorshipSection from "../../components/sections/MentorshipSection";
import MentorsGridSection from "../../components/sections/MentorsGridSection";
import ProductsSection from "../../components/sections/ProductsSection";
import PricingSection from "../../components/sections/PricingSection";
import FAQSection from "../../components/sections/FAQSection";
import ImpactSection from "../../components/sections/ImpactSection";
import CTASection from "../../components/sections/CTASection";
import ContactSection from "../../components/sections/ContactSection";
import LibraryPreviewSection from "../../components/sections/LibraryPreviewSection";

export const revalidate = getRevalidateSeconds();

export default async function MarketingPage() {
  const provider = getContentProvider();
  const paymentProvider = getPaymentProvider();
  const pageContent = await provider.getHomePageContent();
  const libraryItems = await provider.getLibraryItems();

  return (
    <div>
      <HeroSection content={pageContent.content.hero} />
      <div id="about">
        <AboutSection content={pageContent.content.about} />
      </div>
      <div id="mentorship">
        <MentorshipSection content={pageContent.content.mentorship} />
      </div>
      <LibraryPreviewSection items={libraryItems.slice(0, 3)} />
      <div id="mentors">
        <MentorsGridSection content={pageContent.content.mentors} />
      </div>
      <div id="products">
        <ProductsSection content={pageContent.content.products} />
      </div>
      <div id="pricing">
        <PricingSection content={pageContent.content.pricing} paymentProvider={paymentProvider} />
      </div>
      <div id="faq">
        <FAQSection content={pageContent.content.faq} />
      </div>
      <div id="impact">
        <ImpactSection content={pageContent.content.impact} />
      </div>
      <CTASection content={pageContent.content.cta} />
      <div id="contact">
        <ContactSection content={pageContent.content.contact} />
      </div>
    </div>
  );
}
