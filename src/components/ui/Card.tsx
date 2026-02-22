import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-foreground/10 bg-surface-2/80 p-6 shadow-sm backdrop-blur",
        className
      )}
    >
      {children}
    </div>
  );
}
