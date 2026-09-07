"use client";

import BlurFadeIn from "@/components/ui/BlurFadeIn";

const paragraphs = [
  "Piyush Pawar is the Co-Founder and Director of ARMOURIXX Security. He holds a Bachelor\u2019s degree in Business Administration \u2013 International Business from Kingston University, London.",
  "Over the last four years, Piyush has been actively involved in running and managing business operations in Dubai, primarily in the manpower and facility management sector. He currently manages a workforce of more than 70 personnel, giving him strong on-ground experience in manpower deployment, workforce planning, client coordination and day-to-day operations.",
  "Working closely with both clients and teams on site has given him a practical understanding of what businesses expect from a professional service provider \u2014 reliability, discipline, accountability and consistent service.",
  "He brings the same experience and approach to ARMOURIXX Security. As Co-Founder and Director, Piyush is closely involved in the company\u2019s operations, business development and client relationships, with a focus on building a security company that is professional, dependable and well managed.",
  "His vision for ARMOURIXX is straightforward: to create a security company that clients can rely on, where personnel are properly trained, operations are closely monitored, and commitments made to clients are delivered on the ground",
];

export default function CoFounderNote() {
  return (
    <BlurFadeIn delay={200}>
      <div className="mt-16 sm:mt-20 pt-16 sm:pt-20 border-t border-[var(--glass-border)] relative">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/50 to-transparent"
          aria-hidden="true"
        />

        <div className="flex items-center gap-3 mb-8 sm:mb-10">
          <div
            className="h-px flex-1 max-w-[48px] bg-gradient-to-r from-[var(--gold)]/60 to-transparent"
            aria-hidden="true"
          />
          <p className="text-[var(--gold)] text-[9px] sm:text-[10px] font-semibold tracking-[0.28em] uppercase font-[var(--font-body)]">
            Leadership
          </p>
          <div
            className="h-px flex-1 bg-gradient-to-l from-[var(--gold)]/20 to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 items-start">
          <div className="md:col-span-2 order-2 md:order-1">
            <blockquote className="font-[var(--font-display)] text-xl sm:text-2xl md:text-3xl text-[var(--cream)] leading-tight mb-6 sm:mb-8 relative">
              <span className="text-[var(--gold)] text-3xl sm:text-5xl leading-none absolute -top-2 sm:-top-3 -left-1 sm:-left-2 opacity-30">
                &ldquo;
              </span>
              A security company clients can rely on — where personnel are trained, operations are monitored, and{" "}
              <span className="text-gradient-gold">commitments are delivered on the ground.</span>
            </blockquote>

            <div className="space-y-4">
              {paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-[var(--cream-muted)] text-sm sm:text-base leading-relaxed font-[var(--font-body)]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="md:col-span-1 order-1 md:order-2 flex flex-col items-center md:items-end">
            <div className="w-full max-w-[280px] md:max-w-none">
              <div className="relative p-[1px] rounded-sm bg-gradient-to-br from-[var(--gold)]/40 via-[var(--gold)]/10 to-transparent">
                <div className="rounded-sm bg-[var(--ink-3)] border border-[var(--glass-border)] p-6 sm:p-8 flex flex-col items-center text-center">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-sm bg-[var(--ink-4)] border-2 border-[var(--gold)]/30 flex items-center justify-center text-[var(--gold)] font-bold text-4xl sm:text-5xl mb-5 font-[var(--font-display)] shadow-[inset_0_0_24px_rgba(220, 43, 27,0.06)]">
                    P
                  </div>
                  <p className="text-[var(--cream)] font-bold tracking-wider text-sm uppercase">
                    Piyush Pawar
                  </p>
                  <p className="text-[var(--gold)] text-[10px] sm:text-xs tracking-[0.2em] uppercase mt-2 leading-relaxed">
                    Co-Founder &amp; Director
                  </p>
                  <p className="text-[var(--cream-muted)]/60 text-[9px] tracking-[0.16em] uppercase mt-1">
                    ARMOURIXX Security
                  </p>

                  <div className="w-full mt-6 pt-5 border-t border-[var(--glass-border)] space-y-2.5 text-left">
                    <div className="flex items-start gap-2">
                      <span className="text-[var(--gold)]/50 text-[8px] tracking-widest uppercase shrink-0 mt-0.5">
                        Edu
                      </span>
                      <p className="text-[10px] text-[var(--cream-muted)]/80 leading-snug font-[var(--font-body)]">
                        BBA — International Business, Kingston University, London
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[var(--gold)]/50 text-[8px] tracking-widest uppercase shrink-0 mt-0.5">
                        Ops
                      </span>
                      <p className="text-[10px] text-[var(--cream-muted)]/80 leading-snug font-[var(--font-body)]">
                        70+ personnel · Dubai operations · Manpower &amp; facility management
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlurFadeIn>
  );
}
