import type { MentorSectionContent } from "../../lib/content/models";
import Section from "../ui/Section";
import Card from "../ui/Card";

export default function MentorsGridSection({
  content,
}: {
  content: MentorSectionContent;
}) {
  return (
    <Section eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle}>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {content.mentors.map((mentor) => (
          <Card key={mentor.id} className="bg-surface-2">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 text-primary grid place-items-center font-heading text-lg">
                {mentor.name.slice(0, 1)}
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {mentor.name}
                </h3>
                <div className="text-xs uppercase tracking-[0.2em] text-primary">
                  {mentor.role}
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-foreground/70">{mentor.bio}</p>
            <div className="mt-4 text-xs uppercase tracking-[0.18em] text-foreground/50">
              {mentor.focus}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
