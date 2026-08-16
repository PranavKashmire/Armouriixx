"use client";

import { Shield } from "lucide-react";
import BlurFadeIn from "@/components/ui/BlurFadeIn";
import { siteConfig } from "@/data/siteConfig";

export default function FounderQuote() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[var(--ink-2)] relative overflow-hidden">
      <div
        className="absolute top-0 right-0 h-full w-[34%] max-w-[420px] z-0 pointer-events-none hidden md:block"
        aria-hidden="true"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1000&q=80')",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(270deg, rgba(14,14,16,0.15) 0%, rgba(14,14,16,0.55) 55%, rgba(14,14,16,0.98) 100%)",
            }}
          />
        </div>

        <div
          className="absolute top-[10%] bottom-[10%] left-0 w-px pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(201,162,39,0.45) 25%, rgba(201,162,39,0.55) 50%, rgba(201,162,39,0.45) 75%, transparent 100%)",
          }}
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <Shield
          className="w-[280px] sm:w-[400px] md:w-[500px] h-[280px] sm:h-[400px] md:h-[500px] text-[var(--gold)] opacity-[0.02]"
          fill="currentColor"
        />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="md:pr-[36%] lg:pr-[32%] max-w-3xl">
          <BlurFadeIn>
            <p
              className="text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--gold)]/70 mb-4 font-[var(--font-body)]"
            >
              Leadership Vision
            </p>
            <div className="font-[var(--font-display)] text-5xl sm:text-6xl md:text-7xl text-[var(--gold)]/30 leading-none mb-2 sm:mb-3">
              &ldquo;
            </div>

            <blockquote className="font-[var(--font-display)] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[var(--cream)] leading-tight mb-6 sm:mb-8">
              Security should feel like a command unit —{" "}
              <span className="text-gradient-gold">trained, tracked, and accountable</span>
              — not a guard at a gate who disappears when you need answers.
            </blockquote>

            <p className="text-[var(--cream-muted)] text-sm leading-relaxed mb-8 font-[var(--font-body)] max-w-xl">
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
      </div>
    </section>
  );
}
