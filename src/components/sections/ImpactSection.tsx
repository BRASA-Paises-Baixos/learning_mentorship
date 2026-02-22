import type { ImpactContent } from "../../lib/content/models";
import Section from "../ui/Section";
import Card from "../ui/Card";

export default function ImpactSection({ content }: { content: ImpactContent }) {
  return (
    <Section eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle}>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-4 sm:grid-cols-3">
          {content.metrics.map((metric) => (
            <Card key={metric.label} className="bg-surface-2">
              <div className="text-3xl font-semibold text-foreground">
                {metric.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-primary">
                {metric.label}
              </div>
              <p className="mt-3 text-sm text-foreground/70">{metric.detail}</p>
            </Card>
          ))}
        </div>
        <Card className="bg-surface-2">
          <div className="text-xs uppercase tracking-[0.2em] text-primary">Initiatives</div>
          <ul className="mt-4 space-y-3 text-sm text-foreground/70">
            {content.initiatives.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-warning" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}
