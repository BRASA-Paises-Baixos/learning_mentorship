import Link from "next/link";
import type { NavigationContent } from "../../lib/content/models";
import Button from "./Button";

export default function Header({ content }: { content: NavigationContent }) {
  return (
    <header className="border-b border-foreground/10 bg-surface/95">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-gutter py-5">
        <div className="flex items-center gap-4">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 font-heading text-lg text-primary">
            {content.brand.monogram}
          </div>
          <div>
            <div className="font-heading text-lg font-semibold text-foreground">
              {content.brand.name}
            </div>
            <div className="text-xs uppercase tracking-[0.22em] text-foreground/50">
              {content.brand.tagline}
            </div>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-foreground/70 md:flex">
          {content.links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild variant={content.cta.variant ?? "primary"} size="sm">
            <Link href={content.cta.href}>{content.cta.label}</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Button asChild variant="secondary" size="sm">
            <Link href="/pricing">Pricing</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
