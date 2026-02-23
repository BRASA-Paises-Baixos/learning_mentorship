import Link from "next/link";
import type { CTAContent } from "../../lib/content/models";
import Button from "../ui/Button";
import Layout from "../ui/Layout";

export default function CTASection({ content }: { content: CTAContent }) {
  return (
    <section className="section">
      <Layout>
        <div className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-primary px-8 py-12 text-primary-foreground shadow-soft">
          <div className="absolute -left-20 top-0 h-48 w-48 rounded-full bg-warning/40 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-info/40 blur-3xl" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
                {content.title}
              </h2>
              <p className="mt-3 max-w-xl text-subtitle text-primary-foreground/80">
                {content.subtitle}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant={content.primaryCta.variant ?? "secondary"} size="lg">
                <Link href={content.primaryCta.href}>{content.primaryCta.label}</Link>
              </Button>
              <Button asChild variant={content.secondaryCta.variant ?? "ghost"} size="lg">
                <Link href={content.secondaryCta.href}>{content.secondaryCta.label}</Link>
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
}
