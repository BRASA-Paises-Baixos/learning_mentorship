import LibraryGrid from "../../../components/library/LibraryGrid";
import Section from "../../../components/ui/Section";
import { getContentProvider } from "../../../lib/content/provider";
import { getRevalidateSeconds } from "../../../lib/revalidate";

export const revalidate = getRevalidateSeconds();

export default async function LibraryPage() {
  const provider = getContentProvider();
  const items = await provider.getLibraryItems();

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
