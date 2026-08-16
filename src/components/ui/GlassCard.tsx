"use client";

import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  goldBorder?: boolean;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className,
  goldBorder = false,
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-lg p-6 relative overflow-hidden",
        goldBorder ? "border-[var(--gold-dark)]/40" : "border-white/8",
        hover &&
          "transition-all duration-300 hover:border-[var(--gold)]/40 hover:shadow-[0_0_30px_rgba(201,162,39,0.12)] hover:-translate-y-1",
        className
      )}
    >
      {/* Inner subtle glow top-left */}
      <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-[var(--gold)]/5 blur-2xl pointer-events-none" />
      {children}
    </div>
  );
}
