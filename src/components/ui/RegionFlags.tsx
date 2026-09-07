import { cn } from "@/lib/utils";

function IndiaFlag({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 16"
      className={className}
      aria-hidden="true"
      role="img"
    >
      <rect width="24" height="16" rx="1.5" fill="#fff" />
      <rect width="24" height="5.33" fill="#FF9933" />
      <rect y="10.67" width="24" height="5.33" fill="#138808" />
      <circle cx="12" cy="8" r="2.1" fill="#000080" />
      <circle cx="12" cy="8" r="1.55" fill="#fff" />
      <circle cx="12" cy="8" r="0.35" fill="#000080" />
    </svg>
  );
}

function UaeFlag({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 16"
      className={className}
      aria-hidden="true"
      role="img"
    >
      <rect width="24" height="16" rx="1.5" fill="#00732F" />
      <rect y="5.33" width="24" height="5.33" fill="#fff" />
      <rect y="10.67" width="24" height="5.33" fill="#000" />
      <rect width="6" height="16" rx="1.5" fill="#FF0000" />
    </svg>
  );
}

const heroRegions = [
  { id: "ae", label: "United Arab Emirates", code: "UAE", Flag: UaeFlag },
  { id: "in", label: "India", code: "IND", Flag: IndiaFlag },
] as const;

const inlineRegions = [
  { id: "in", label: "India", Flag: IndiaFlag },
  { id: "ae", label: "UAE", Flag: UaeFlag },
] as const;

interface RegionFlagsProps {
  className?: string;
  flagClassName?: string;
  showLabels?: boolean;
  variant?: "inline" | "hero";
}

export default function RegionFlags({
  className,
  flagClassName = "w-4 h-2.5 sm:w-[18px] sm:h-3",
  showLabels = false,
  variant = "inline",
}: RegionFlagsProps) {
  if (variant === "hero") {
    return (
      <div
        className={cn("flex flex-col items-end gap-2 sm:gap-2.5", className)}
        aria-label="Operations in UAE and India"
      >
        {heroRegions.map(({ id, label, code, Flag }) => (
          <div
            key={id}
            className="inline-flex items-center gap-2 sm:gap-2.5 rounded-full border border-white/15 bg-[rgba(10,10,11,0.72)] backdrop-blur-md px-2.5 sm:px-3 py-1.5 sm:py-2 shadow-lg shadow-black/25"
            title={label}
          >
            <span className="inline-flex rounded-[3px] overflow-hidden shrink-0 border border-white/15 shadow-sm w-[22px] h-[14px] sm:w-[26px] sm:h-[17px]">
              <Flag className="w-full h-full block" />
            </span>
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.18em] text-[var(--cream)] pr-0.5">
              {code}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn("flex items-center gap-1.5", className)}
      aria-label="Operations in India and UAE"
      title="India & UAE operations"
    >
      {inlineRegions.map(({ id, label, Flag }) => (
        <div key={id} className="flex items-center gap-1">
          <span className="inline-flex rounded-[2px] overflow-hidden border border-[var(--gold)]/20 shadow-sm">
            <Flag className={flagClassName} />
          </span>
          {showLabels && (
            <span className="text-[7px] sm:text-[8px] font-semibold tracking-[0.14em] uppercase text-[var(--cream-muted)]/70">
              {label}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
