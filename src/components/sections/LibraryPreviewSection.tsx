import Link from "next/link";
import type { LibraryItem } from "../../lib/content/models";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Button from "../ui/Button";

export default function LibraryPreviewSection({ items }: { items: LibraryItem[] }) {
  return (
    <Section
      eyebrow="Library Preview"
      title="A calm, curated collection"
      subtitle="A handful of focused resources to show the depth of the full library."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <Card key={item.id} className="bg-surface-2">
            <div className="text-xs uppercase tracking-[0.2em] text-primary">
              {item.type} · {item.category}
            </div>
            <h3 className="mt-3 font-heading text-xl font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="mt-3 text-sm text-foreground/70">
              {item.description}
            </p>
          </Card>
        ))}
      </div>
      <div>
        <Button asChild variant="secondary" size="md">
          <Link href="/library">Explore the library</Link>
        </Button>
      </div>
    </Section>
  );
}
