import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import Layout from "../../../components/ui/Layout";
import Section from "../../../components/ui/Section";
import { getGumroadProductUrl } from "../../../lib/gumroad/config";

const plans = [
  {
    name: "Studio",
    price: "$24",
    cadence: "per month",
    description: "Ideal for solo builders who want calm, curated guidance.",
    features: [
      "Full access to the library",
      "Monthly studio notes",
      "Audio + video lessons",
    ],
    highlight: false,
  },
  {
       name: "BRASA",
    price: "$49",
    cadence: "per month",
    description: "For teams and leads who want a shared learning rhythm.",
    features: [
      "Everything in Studio",
      "Team discussion guides",
      "Priority access to new releases",
    ],
    highlight: true,
  },
  {
    name: "Salon",
    price: "$120",
    cadence: "per month",
    description: "Private cohort support for product + design leaders.",
    features: [
      "Quarterly mentor sessions",
      "Custom learning path",
      "Live office hours",
    ],
    highlight: false,
  },
];

export default function PricingPage() {
  const gumroadUrl = getGumroadProductUrl();

  return (
    <div>
      <Section
        eyebrow="Pricing"
        title="Choose a calm path to mastery"
        subtitle="Mock pricing UI for the MVP. Hook up Gumroad when ready."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex h-full flex-col gap-6 ${
                plan.highlight ? "border-royal/40 bg-royal/5" : "bg-white"
              }`}
            >
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-royal">
                  {plan.name}
                </div>
                <div className="mt-4 flex items-end gap-2">
                  <div className="font-heading text-4xl font-semibold text-charcoal">
                    {plan.price}
                  </div>
                  <div className="text-sm text-charcoal/60">{plan.cadence}</div>
                </div>
                <p className="mt-3 text-sm text-charcoal/70">{plan.description}</p>
              </div>
              <div className="space-y-2 text-sm text-charcoal/70">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Button
                href={gumroadUrl}
                variant={plan.highlight ? "primary" : "secondary"}
                size="md"
                target="_blank"
                rel="noreferrer"
              >
                Choose {plan.name}
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <section className="pb-20">
        <Layout>
          <div className="rounded-3xl border border-charcoal/10 bg-canvas/80 p-8 text-center">
            <h2 className="font-heading text-2xl font-semibold text-charcoal">
              Need a custom plan?
            </h2>
            <p className="mt-3 text-sm text-charcoal/70">
              We can tailor content access for larger teams or cohort experiences.
            </p>
            <div className="mt-6 flex justify-center">
              <Button href="/" variant="secondary" size="md">
                Talk to us
              </Button>
            </div>
          </div>
        </Layout>
      </section>
    </div>
  );
}
