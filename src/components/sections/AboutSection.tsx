import type { AboutContent } from "../../lib/content/models";
import Section from "../ui/Section";
import Card from "../ui/Card";

export default function AboutSection({ content }: { content: AboutContent }) {
  return (
    <Section eyebrow={content.eyebrow} title={content.title} subtitle={content.body}>
      <div className="grid gap-6 md:grid-cols-3">
        {content.bullets.map((item) => (
          <Card key={item} className="bg-surface-2">
            <p className="text-sm text-foreground/70">{item}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
