import Button from "../ui/Button";
import Layout from "../ui/Layout";
import { getGumroadProductUrl } from "../../lib/gumroad/config";

export default function Hero() {
  const gumroadUrl = getGumroadProductUrl();

  return (
    <section className="relative overflow-hidden bg-canvas py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(27,79,191,0.18),_transparent_60%)]" />
      <div className="absolute -left-12 top-8 h-52 w-52 rounded-full bg-sun/45 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-leaf/45 blur-3xl" />
      <Layout className="relative">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-charcoal/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-royal">
              Curated learning library
            </div>
            <div className="space-y-6">
              <h1 className="font-heading text-4xl font-semibold leading-tight text-charcoal sm:text-5xl">
                Learn with the calm precision of an atelier.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-charcoal/70">
                BRASA Netherlands is a curated collection of guidebooks, video series, and
                practical frameworks created by mentors who have built lasting products.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button
                href={gumroadUrl}
                variant="primary"
                size="lg"
                target="_blank"
                rel="noreferrer"
              >
                Get full access
              </Button>
              <Button href="/pricing" variant="secondary" size="lg">
                View pricing
              </Button>
            </div>
            <div className="text-sm text-charcoal/60">
              Updated monthly · Designed for focused builders · Works on any device
            </div>
          </div>
          <div className="rounded-3xl border border-charcoal/10 bg-white/80 p-8 shadow-soft">
            <div className="space-y-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-royal">
                  Preview
                </div>
                <h3 className="mt-3 font-heading text-2xl font-semibold text-charcoal">
                  Highlights from the library
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  "Design systems that feel handcrafted",
                  "Product narratives that align teams",
                  "Mentor notes on shipping calm, confident releases",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-charcoal/10 bg-canvas/70 px-4 py-3 text-sm text-charcoal/70"
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
