import Link from "next/link";
import type { ContactContent } from "../../lib/content/models";
import Section from "../ui/Section";
import Card from "../ui/Card";

export default function ContactSection({ content }: { content: ContactContent }) {
  return (
    <Section eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle}>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="bg-surface-2">
          <div className="text-xs uppercase tracking-[0.2em] text-primary">Contact</div>
          <div className="mt-4 text-2xl font-semibold text-foreground">{content.email}</div>
          <div className="mt-2 text-sm text-foreground/60">
            Response time: {content.responseTime}
          </div>
          <div className="mt-6 text-sm text-foreground/70">{content.location}</div>
        </Card>
        <Card className="bg-surface-2">
          <div className="text-xs uppercase tracking-[0.2em] text-primary">Follow</div>
          <div className="mt-4 flex flex-wrap gap-3">
            {content.socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full border border-foreground/10 px-4 py-2 text-sm text-foreground/70 transition hover:border-foreground/30 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}
