import type { MentorshipContent } from "../../lib/content/models";
import Section from "../ui/Section";
import Card from "../ui/Card";

export default function MentorshipSection({ content }: { content: MentorshipContent }) {
  return (
    <Section eyebrow={content.eyebrow} title={content.title} subtitle={content.body}>
      <div className="grid gap-6 md:grid-cols-3">
        {content.steps.map((step) => (
          <Card key={step.title} className="bg-surface-2">
            <h3 className="font-heading text-lg font-semibold text-foreground">
              {step.title}
            </h3>
            <p className="mt-3 text-sm text-foreground/70">{step.detail}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
