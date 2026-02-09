import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-canvas/95">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-charcoal/70 sm:px-8 lg:px-12 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-heading text-base font-semibold text-charcoal">
            BRASA Netherlands
          </div>
          <div className="mt-2 max-w-md text-charcoal/60">
            Artful learning for modern builders. Thoughtful guidance, curated resources,
            and calm, focused experiences.
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/" className="transition hover:text-charcoal">
            Landing
          </Link>
          <Link href="/library" className="transition hover:text-charcoal">
            Library
          </Link>
          <Link href="/pricing" className="transition hover:text-charcoal">
            Pricing
          </Link>
        </div>
      </div>
    </footer>
  );
}
