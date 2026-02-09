import Link from "next/link";
import Button from "./Button";
import { getGumroadProductUrl } from "../../lib/gumroad/config";

export default function Header() {
  const gumroadUrl = getGumroadProductUrl();

  return (
    <header className="border-b border-charcoal/10 bg-canvas/95">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 sm:px-8 lg:px-12">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-royal/10 text-royal grid place-items-center font-heading text-lg">
            A
          </div>
          <div>
            <div className="font-heading text-lg font-semibold">BRASA Netherlands</div>
            <div className="text-xs uppercase tracking-[0.22em] text-charcoal/50">
              Mentorship Platform
            </div>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-charcoal/70 md:flex">
          <Link href="/" className="transition hover:text-charcoal">
            Landing
          </Link>
          <Link href="/library" className="transition hover:text-charcoal">
            Library
          </Link>
          <Link href="/pricing" className="transition hover:text-charcoal">
            Pricing
          </Link>
        </nav>
        <div className="hidden md:block">
          <Button href={gumroadUrl} variant="primary" size="sm" target="_blank" rel="noreferrer">
            Get Access
          </Button>
        </div>
        <div className="md:hidden">
          <Button href="/pricing" variant="secondary" size="sm">
            Pricing
          </Button>
        </div>
      </div>
    </header>
  );
}
