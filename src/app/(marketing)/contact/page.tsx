import ContactSection from "../../../components/sections/ContactSection";
import FAQSection from "../../../components/sections/FAQSection";
import { getContentProvider } from "../../../lib/content/provider";
import { getRevalidateSeconds } from "../../../lib/revalidate";

export const revalidate = getRevalidateSeconds();

export default async function ContactPage() {
  const provider = getContentProvider();
  const pageContent = await provider.getHomePageContent();

  return (
    <div>
      <ContactSection content={pageContent.content.contact} />
      <FAQSection content={pageContent.content.faq} />
    </div>
  );
}
