import FeatureList from "../../components/marketing/FeatureList";
import Hero from "../../components/marketing/Hero";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import Layout from "../../components/ui/Layout";
import Section from "../../components/ui/Section";
import { getGumroadProductUrl } from "../../lib/gumroad/config";

const libraryPreview = [
  {
    title: "Studio-Grade Design Systems",
    type: "Guide",
    category: "Design",
    detail: "A visual brief on crafting systems that feel deliberate and human.",
  },
  {
    title: "The Product Narrative Map",
    type: "Workshop",
    category: "Strategy",
    detail: "Align teams with a single throughline from idea to launch.",
  },
  {
    title: "Operational Calm",
    type: "Playbook",
    category: "Leadership",
    detail: "Frameworks for clarity, pace, and confident release cycles.",
  },
];

const mentors = [
  {
    name: "Nora Hayes",
    role: "Design Systems",
    detail: "Led multi-brand design libraries across consumer platforms.",
  },
  {
    name: "Arjun Patel",
    role: "Product Strategy",
    detail: "Former GM shipping growth products for global marketplaces.",
  },
  {
    name: "Isla Moreno",
    role: "Leadership",
    detail: "Coached teams in building calm, resilient operating rhythms.",
  },
];

export default function MarketingPage() {
  const gumroadUrl = getGumroadProductUrl();

  return (
    <div>
      <Hero />
      <FeatureList />

      <Section
        eyebrow="Library Preview"
        title="A calm, curated collection"
        subtitle="A handful of focused resources to show the depth of the full library."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {libraryPreview.map((item) => (
            <Card key={item.title} className="bg-white">
              <div className="text-xs uppercase tracking-[0.2em] text-royal">
                {item.type} · {item.category}
              </div>
              <h3 className="mt-3 font-heading text-xl font-semibold text-charcoal">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                {item.detail}
              </p>
            </Card>
          ))}
        </div>
        <div>
          <Button href="/library" variant="secondary" size="md">
            Explore the library
          </Button>
        </div>
      </Section>

      <Section
        eyebrow="Mentors"
        title="Guided by practiced builders"
        subtitle="Each lesson is authored by operators who have shipped real products."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {mentors.map((mentor) => (
            <Card key={mentor.name} className="bg-white">
              <h3 className="font-heading text-xl font-semibold text-charcoal">
                {mentor.name}
              </h3>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-royal">
                {mentor.role}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                {mentor.detail}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <section className="py-20">
        <Layout>
          <div className="relative overflow-hidden rounded-3xl border border-charcoal/10 bg-royal px-8 py-12 text-canvas shadow-soft">
            <div className="absolute -left-20 top-0 h-48 w-48 rounded-full bg-sun/40 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-sky/40 blur-3xl" />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
                  Ready to build with focus?
                </h2>
                <p className="mt-3 max-w-xl text-base text-canvas/80">
                  Join BRASA Netherlands for a calm, intentional learning experience that
                  respects your time and attention.
                </p>
              </div>
              <Button
                href={gumroadUrl}
                variant="secondary"
                size="lg"
                target="_blank"
                rel="noreferrer"
                className="bg-canvas text-charcoal hover:bg-canvas/90"
              >
                Get access
              </Button>
            </div>
          </div>
        </Layout>
      </section>
    </div>
  );
}
