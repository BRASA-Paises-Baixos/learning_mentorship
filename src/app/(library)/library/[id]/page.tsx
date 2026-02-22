import { notFound } from "next/navigation";
import ContentDetail from "../../../../components/library/ContentDetail";
import Section from "../../../../components/ui/Section";
import { getContentProvider } from "../../../../lib/content/provider";
import { getRevalidateSeconds } from "../../../../lib/revalidate";

export const revalidate = getRevalidateSeconds();

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ContentDetailPage({ params }: PageProps) {
  const { id } = await params;
  const provider = getContentProvider();
  const item = await provider.getLibraryItemBySlug(id);

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
