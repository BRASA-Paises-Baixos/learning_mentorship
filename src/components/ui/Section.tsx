import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

type SectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  compact?: boolean;
};

export default function Section({
  eyebrow,
  title,
  subtitle,
  children,
  className,
  compact = false,
}: SectionProps) {
  return (
    <section className={cn(compact ? "section-sm" : "section", className)}>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-gutter">
        <div className="space-y-4">
          {eyebrow ? (
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {eyebrow}
            </div>
          ) : null}
          <h2 className="font-heading text-title font-semibold text-foreground">
            {title}
          </h2>
          {subtitle ? (
            <p className="max-w-2xl text-subtitle text-foreground/70">{subtitle}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
