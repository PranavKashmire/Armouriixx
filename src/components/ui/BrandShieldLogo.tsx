import { Shield } from "lucide-react";
import { cn } from "@/lib/utils";

interface BrandShieldLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeMap = {
  sm: {
    shield: "w-7 h-7 sm:w-8 sm:h-8",
    text: "text-[8px] sm:text-[9px]",
  },
  md: {
    shield: "w-10 h-10",
    text: "text-[10px]",
  },
  lg: {
    shield: "w-24 h-24 sm:w-28 sm:h-28",
    text: "text-lg sm:text-xl",
  },
  xl: {
    shield: "w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 xl:w-64 xl:h-64",
    text: "text-2xl sm:text-3xl lg:text-4xl",
  },
};

/** Navbar shield mark — gold Lucide shield with AXS lettering */
export default function BrandShieldLogo({ size = "sm", className }: BrandShieldLogoProps) {
  const s = sizeMap[size];

  return (
    <div className={cn("relative shrink-0", className)} aria-hidden="true">
      <Shield
        className={cn(s.shield, "text-[var(--gold)]")}
        fill="currentColor"
        strokeWidth={0.5}
        stroke="var(--gold-dark)"
      />
      <span
        className={cn(
          "absolute inset-0 flex items-center justify-center font-bold text-[var(--ink)] tracking-tight",
          s.text
        )}
      >
        AXS
      </span>
    </div>
  );
}
