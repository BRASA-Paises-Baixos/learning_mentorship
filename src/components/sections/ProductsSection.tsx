import type { ProductSectionContent } from "../../lib/content/models";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Link from "next/link";

export default function ProductsSection({ content }: { content: ProductSectionContent }) {
  return (
    <Section eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle}>
      <div className="grid gap-6 lg:grid-cols-3">
        {content.products.map((product) => (
          <Card
            key={product.id}
            className={product.highlight ? "border-primary/40 bg-primary/5" : "bg-surface-2"}
          >
            <div className="text-xs uppercase tracking-[0.2em] text-primary">
              {product.format}
            </div>
            <h3 className="mt-3 font-heading text-xl font-semibold text-foreground">
              {product.title}
            </h3>
            <p className="mt-3 text-sm text-foreground/70">{product.description}</p>
            <div className="mt-4 text-sm font-semibold text-foreground">{product.price}</div>
            <div className="mt-6">
              <Button asChild variant={product.highlight ? "primary" : "secondary"} size="md">
                <Link href="/pricing">{product.ctaLabel}</Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
