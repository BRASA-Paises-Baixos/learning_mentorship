import { notFound } from "next/navigation";
import ContentDetail from "../../../../components/library/ContentDetail";
import Section from "../../../../components/ui/Section";
import { getLibraryItemBySlug } from "../../../../lib/sanity/queries";

export const revalidate = 60;

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ContentDetailPage({ params }: PageProps) {
  const { id } = await params;
  const item = await getLibraryItemBySlug(id);

  if (!item) {
    notFound();
  }

  return (
    <Section
      eyebrow="Library Detail"
      title="Deep dive"
      subtitle="A closer look at this module, with preview assets and viewer placeholder."
    >
      <ContentDetail item={item} />
    </Section>
  );
}
