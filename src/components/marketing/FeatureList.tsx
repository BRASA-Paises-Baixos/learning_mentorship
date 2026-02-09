import Card from "../ui/Card";
import Layout from "../ui/Layout";

const features = [
  {
    title: "Guides built like studio briefs",
    detail:
      "Each piece is concise, visual, and meant to be applied within a workweek.",
  },
  {
    title: "Mentor-led, human insight",
    detail:
      "Learn from builders who have shipped real products and led teams in motion.",
  },
  {
    title: "Deliberate release cadence",
    detail:
      "Quarterly drops and studio notes keep the library fresh without the noise.",
  },
];

export default function FeatureList() {
  return (
    <section className="py-16">
      <Layout>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-white">
              <h3 className="font-heading text-xl font-semibold text-charcoal">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                {feature.detail}
              </p>
            </Card>
          ))}
        </div>
      </Layout>
    </section>
  );
}
