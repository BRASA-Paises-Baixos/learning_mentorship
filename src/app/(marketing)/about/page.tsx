import AboutSection from "../../../components/sections/AboutSection";
import ImpactSection from "../../../components/sections/ImpactSection";
import MentorshipSection from "../../../components/sections/MentorshipSection";
import MentorsGridSection from "../../../components/sections/MentorsGridSection";
import { getContentProvider } from "../../../lib/content/provider";
import { getRevalidateSeconds } from "../../../lib/revalidate";

export const revalidate = getRevalidateSeconds();

export default async function AboutPage() {
  const provider = getContentProvider();
  const pageContent = await provider.getHomePageContent();

  return (
    <div>
      <AboutSection content={pageContent.content.about} />
      <MentorshipSection content={pageContent.content.mentorship} />
      <MentorsGridSection content={pageContent.content.mentors} />
      <ImpactSection content={pageContent.content.impact} />
    </div>
  );
}
