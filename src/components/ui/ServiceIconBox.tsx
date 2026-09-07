import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface ServiceIconBoxProps {
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
}

export default function ServiceIconBox({
  icon: Icon,
  className,
  iconClassName,
}: ServiceIconBoxProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center shrink-0 rounded-sm border border-[var(--border-subtle)] bg-[var(--ink-4)]/90 text-[var(--steel)] transition-all duration-300 group-hover:border-[var(--border-accent)] group-hover:text-[var(--gold)] group-hover:bg-[var(--ink-3)] group-hover:shadow-[0_0_20px_rgba(220,43,27,0.08)]",
        className
      )}
      aria-hidden="true"
    >
      <Icon className={cn("w-4 h-4", iconClassName)} strokeWidth={1.75} />
    </div>
  );
}
