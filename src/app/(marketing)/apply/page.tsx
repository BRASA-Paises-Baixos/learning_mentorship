import Link from "next/link";
import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import Section from "../../../components/ui/Section";
import { getContentProvider } from "../../../lib/content/provider";
import { getRevalidateSeconds } from "../../../lib/revalidate";

export const revalidate = getRevalidateSeconds();

export default async function ApplyPage() {
  const provider = getContentProvider();
  const siteShell = await provider.getSiteShellContent();
  const contact = (await provider.getHomePageContent()).content.contact;

  return (
    <Section
      eyebrow="Mentorship Application"
      title="Apply first, subscribe after acceptance"
      subtitle="Every applicant is reviewed for fit so cohorts stay focused and high support. If accepted, you will receive the subscription link."
    >
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="bg-surface-2">
          <h3 className="font-heading text-lg font-semibold text-foreground">1. Apply</h3>
          <p className="mt-3 text-sm text-foreground/70">
            Share your goals, product stage, and preferred mentorship track.
          </p>
        </Card>
        <Card className="bg-surface-2">
          <h3 className="font-heading text-lg font-semibold text-foreground">2. Review</h3>
          <p className="mt-3 text-sm text-foreground/70">
            We review applications and respond within {contact.responseTime}.
          </p>
        </Card>
        <Card className="bg-surface-2">
          <h3 className="font-heading text-lg font-semibold text-foreground">3. Subscribe</h3>
          <p className="mt-3 text-sm text-foreground/70">
            Accepted applicants receive onboarding + subscription details.
          </p>
        </Card>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button asChild variant={siteShell.navigation.cta.variant ?? "primary"} size="md">
          <Link href="/contact">Start application</Link>
        </Button>
        <Button asChild variant="secondary" size="md">
          <a href={`mailto:${contact.email}`}>Email {contact.email}</a>
        </Button>
      </div>
    </Section>
  );
}
