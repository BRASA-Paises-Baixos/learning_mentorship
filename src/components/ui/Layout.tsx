import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

type LayoutProps = {
  children: ReactNode;
  className?: string;
};

export default function Layout({ children, className }: LayoutProps) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-gutter", className)}>
      {children}
    </div>
  );
}
