import LibraryGrid from "../../../components/library/LibraryGrid";
import Section from "../../../components/ui/Section";
import { getLibraryItems } from "../../../lib/sanity/queries";

export const revalidate = 60;

export default async function LibraryPage() {
  const items = await getLibraryItems();

  return (
    <Section
      eyebrow="Library"
      title="Explore the BRASA catalog"
      subtitle="Browse guides, playbooks, and lessons built for fast application."
    >
      <LibraryGrid items={items} />
    </Section>
  );
}
