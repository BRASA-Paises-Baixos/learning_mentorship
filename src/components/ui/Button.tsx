import Link from "next/link";
import type { ComponentProps } from "react";

const variants = {
  primary:
    "bg-royal text-canvas hover:bg-ocean shadow-soft hover:-translate-y-0.5",
  secondary:
    "border border-ocean/30 text-ocean hover:border-ocean hover:bg-ocean/5 hover:-translate-y-0.5",
  ghost: "text-charcoal hover:text-royal",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm",
  lg: "px-6 py-3 text-base",
};

type ButtonProps = ComponentProps<typeof Link> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <Link
      {...props}
      className={`inline-flex items-center justify-center rounded-full font-semibold transition ${variants[variant]} ${sizes[size]} ${className}`}
    />
  );
}
