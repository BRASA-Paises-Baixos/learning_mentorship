import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
};

export default function Section({
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`py-16 sm:py-20 ${className}`}>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 sm:px-8 lg:px-12">
        <div className="space-y-4">
          {eyebrow ? (
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-royal">
              {eyebrow}
            </div>
          ) : null}
          <h2 className="font-heading text-3xl font-semibold text-charcoal sm:text-4xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="max-w-2xl text-base leading-relaxed text-charcoal/70">
              {subtitle}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
