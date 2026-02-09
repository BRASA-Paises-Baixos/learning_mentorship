import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-charcoal/10 bg-white/80 p-6 shadow-sm backdrop-blur ${className}`}
    >
      {children}
    </div>
  );
}
