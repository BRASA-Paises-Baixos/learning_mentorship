import { getContentProvider } from "../../lib/content/provider";
import { getRevalidateSeconds } from "../../lib/revalidate";
import HeroSection from "../../components/sections/HeroSection";
import AboutSection from "../../components/sections/AboutSection";
import MentorshipSection from "../../components/sections/MentorshipSection";
import ProductsSection from "../../components/sections/ProductsSection";
import CTASection from "../../components/sections/CTASection";
import LibraryPreviewSection from "../../components/sections/LibraryPreviewSection";

export const revalidate = getRevalidateSeconds();

export default async function MarketingPage() {
  const provider = getContentProvider();
  const pageContent = await provider.getHomePageContent();
  const libraryItems = await provider.getLibraryItems();

  return (
    <div>
      <HeroSection content={pageContent.content.hero} />
      <AboutSection content={pageContent.content.about} />
      <MentorshipSection content={pageContent.content.mentorship} />
      <LibraryPreviewSection items={libraryItems.slice(0, 3)} />
      <ProductsSection content={pageContent.content.products} />
      <CTASection content={pageContent.content.cta} />
    </div>
  );
}
