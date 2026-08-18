"use client";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  index?: number; // Optional 2-digit section index e.g. 01, 02
}

// Maps known eyebrow labels → section index (auto-assigned)
const eyebrowIndexMap: Record<string, string> = {
  "Who We Are":             "01",
  "What We Do":             "02",
  "Operations in the Field":"03",
  "Technology Edge":        "04",
  "How We Work":            "06",
};

export default function SectionHeading({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  align = "center",
  className,
  index,
}: SectionHeadingProps) {
  const indexLabel = index
    ? String(index).padStart(2, "0")
    : eyebrow
    ? eyebrowIndexMap[eyebrow]
    : undefined;

  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl",
        isCentered && "mx-auto text-center",
        className
      )}
    >
      {/* ── Creative eyebrow row ── */}
      {eyebrow && (
        <div
          className={cn(
            "flex items-center gap-4 mb-5",
            isCentered && "justify-center"
          )}
        >
          {/* Left arm */}
          <div className="flex items-center gap-2 shrink-0">
            {indexLabel && (
              <>
                {/* Section index number */}
                <span
                  className="font-[var(--font-body)] text-[10px] font-bold tabular-nums"
                  style={{
                    color: "rgba(201,162,39,0.55)",
                    letterSpacing: "0.12em",
                  }}
                >
                  {indexLabel}
                </span>

                {/* Small tick diamond */}
                <svg
                  width="6" height="6" viewBox="0 0 6 6" fill="none"
                  className="shrink-0"
                >
                  <rect
                    x="3" y="0" width="4.24" height="4.24"
                    rx="0.4"
                    transform="rotate(45 3 0)"
                    fill="#C9A227"
                    fillOpacity="0.7"
                  />
                </svg>
              </>
            )}

            {/* Extending line */}
            <div
              className="h-px"
              style={{
                width: indexLabel ? "28px" : "40px",
                background:
                  "linear-gradient(90deg, rgba(201,162,39,0.7), rgba(201,162,39,0.2))",
              }}
            />
          </div>

          {/* Eyebrow label */}
          <span
            className="font-[var(--font-body)] text-[9px] sm:text-[10px] font-semibold uppercase text-center sm:whitespace-nowrap"
            style={{
              color: "var(--gold)",
              letterSpacing: "0.28em",
            }}
          >
            {eyebrow}
          </span>

          {/* Right arm */}
          <div
            className="h-px flex-1 max-w-[40px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(201,162,39,0.2), rgba(201,162,39,0))",
            }}
          />
        </div>
      )}

      {/* ── Main title ── */}
      <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none mb-4 break-words">
        {title}
        {titleHighlight && (
          <>
            {" "}
            <span className="text-gradient-gold">{titleHighlight}</span>
          </>
        )}
      </h2>

      {/* ── Subtitle ── */}
      {subtitle && (
        <p
          className={cn(
            "text-[var(--cream-muted)] text-base md:text-lg leading-relaxed font-[var(--font-body)] max-w-2xl",
            isCentered && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}

      {/* ── Gold divider ── */}
      <div
        className={cn(
          "mt-6 h-px w-16 bg-gradient-to-r from-[var(--gold-dark)] to-[var(--gold-light)]",
          isCentered && "mx-auto"
        )}
      />
    </div>
  );
}
