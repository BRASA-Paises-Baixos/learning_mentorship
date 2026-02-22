import Link from "next/link";
import type { HeroContent } from "../../lib/content/models";
import Button from "../ui/Button";
import Layout from "../ui/Layout";

export default function HeroSection({ content }: { content: HeroContent }) {
  return (
    <section className="relative overflow-hidden bg-surface py-section">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(27,79,191,0.18),_transparent_60%)]" />
      <div className="absolute -left-12 top-8 h-52 w-52 rounded-full bg-warning/40 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-success/35 blur-3xl" />
      <Layout className="relative">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-foreground/10 bg-surface-2/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {content.eyebrow}
            </div>
            <div className="space-y-6">
              <h1 className="font-heading text-display font-semibold text-foreground">
                {content.title}
              </h1>
              <p className="max-w-xl text-subtitle text-foreground/70">
                {content.subtitle}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild variant={content.primaryCta.variant ?? "primary"} size="lg">
                <Link href={content.primaryCta.href}>{content.primaryCta.label}</Link>
              </Button>
              <Button asChild variant={content.secondaryCta.variant ?? "secondary"} size="lg">
                <Link href={content.secondaryCta.href}>{content.secondaryCta.label}</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.18em] text-foreground/50">
              {content.stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="text-lg font-semibold text-foreground">{stat.value}</div>
                  <div>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-foreground/10 bg-surface-2/80 p-8 shadow-soft">
            <div className="space-y-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Highlights
                </div>
                <h3 className="mt-3 font-heading text-2xl font-semibold text-foreground">
                  Inside the BRASA library
                </h3>
              </div>
              <div className="space-y-4">
                {content.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-foreground/10 bg-surface/70 px-4 py-3 text-sm text-foreground/70"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
}
