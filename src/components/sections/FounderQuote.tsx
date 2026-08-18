"use client";

import BlurFadeIn from "@/components/ui/BlurFadeIn";
import BrandShieldLogo from "@/components/ui/BrandShieldLogo";
import { siteConfig } from "@/data/siteConfig";

export default function FounderQuote() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[var(--ink-2)] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <BlurFadeIn>
          <p
            className="text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--gold)]/70 mb-4 font-[var(--font-body)]"
          >
            Leadership Vision
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-8 lg:gap-10 xl:gap-14 items-start">
            <div className="min-w-0">
              <div className="font-[var(--font-display)] text-5xl sm:text-6xl md:text-7xl text-[var(--gold)]/30 leading-none mb-2 sm:mb-3">
                &ldquo;
              </div>

              <blockquote className="font-[var(--font-display)] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[var(--cream)] leading-tight">
                Security should feel like a command unit —{" "}
                <span className="text-gradient-gold">trained, tracked, and accountable</span>
                — not a guard at a gate who disappears when you need answers.
              </blockquote>
            </div>

            <div className="flex justify-center lg:justify-end lg:pt-6 shrink-0">
              <BrandShieldLogo
                size="xl"
                className="drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
              />
            </div>
          </div>

          <p className="text-[var(--cream-muted)] text-sm leading-relaxed mt-6 sm:mt-8 mb-8 font-[var(--font-body)] max-w-xl">
            {siteConfig.brandStory.differentiator}
          </p>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-sm bg-[var(--ink-4)] border border-[var(--gold)]/40 flex items-center justify-center text-[var(--gold)] font-bold text-xl shadow-lg">
              A
            </div>
            <div className="text-left">
              <p className="text-[var(--cream)] font-bold tracking-wider text-sm uppercase">
                {siteConfig.founder.name}
              </p>
              <p className="text-[var(--gold)] text-xs tracking-widest uppercase mt-0.5 font-medium">
                {siteConfig.founder.title}
              </p>
            </div>
          </div>
        </BlurFadeIn>
      </div>
    </section>
  );
}
