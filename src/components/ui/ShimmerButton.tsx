"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface ShimmerButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
}

export default function ShimmerButton({
  children,
  className,
  href,
  onClick,
  type = "button",
  size = "md",
}: ShimmerButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm min-h-[44px]",
    md: "px-7 py-3.5 text-base min-h-[48px]",
    lg: "px-8 sm:px-10 py-3.5 sm:py-4.5 text-base sm:text-lg min-h-[48px] sm:min-h-[52px]",
  };

  const base = cn(
    "relative inline-flex items-center justify-center gap-2 font-bold tracking-widest uppercase overflow-hidden rounded-sm",
    "shimmer-btn text-[var(--ink)]",
    "transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]",
    sizeClasses[size],
    className
  );

  if (href) {
    const isExternal =
      href.startsWith("tel:") ||
      href.startsWith("mailto:") ||
      href.startsWith("http");

    if (isExternal) {
      return (
        <a href={href} className={base}>
          <span className="relative z-10">{children}</span>
        </a>
      );
    }

    return (
      <Link href={href} className={base}>
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

  return (
    <button type={type} className={base} onClick={onClick}>
      <span className="relative z-10">{children}</span>
    </button>
  );
}
