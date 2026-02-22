import Link from "next/link";
import type { FooterContent } from "../../lib/content/models";

export default function Footer({ content }: { content: FooterContent }) {
  return (
    <footer className="border-t border-foreground/10 bg-surface/95">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-gutter py-10 text-sm text-foreground/70 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-heading text-base font-semibold text-foreground">BRASA</div>
          <div className="mt-2 max-w-md text-foreground/60">{content.summary}</div>
          <div className="mt-3 text-xs uppercase tracking-[0.2em] text-foreground/40">
            {content.legal}
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          {content.links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
