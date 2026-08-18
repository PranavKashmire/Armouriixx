"use client";

import BlurFadeIn from "@/components/ui/BlurFadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/siteConfig";
import Link from "next/link";

export default function EngagementPath() {
  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0A0A0B 0%, #0e0e10 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,162,39,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <BlurFadeIn className="mb-8 sm:mb-12 md:mb-16">
          <SectionHeading
            eyebrow="How We Work"
            title="From Assessment"
            titleHighlight="to Command"
            subtitle="A disciplined four-phase engagement model — so you know exactly how ARMOURIXX protects what matters before guards arrive on site."
            className="[&_h2]:text-[clamp(1.75rem,7vw,2.75rem)] sm:[&_h2]:text-4xl"
          />
        </BlurFadeIn>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden space-y-0">
          {siteConfig.engagementSteps.map((step, i) => (
            <BlurFadeIn key={step.step} delay={i * 60}>
              <div className="relative flex gap-4 pb-6 last:pb-0">
                {i < siteConfig.engagementSteps.length - 1 && (
                  <div
                    className="absolute left-[15px] top-8 bottom-0 w-px bg-gradient-to-b from-[var(--gold)]/40 to-transparent"
                    aria-hidden="true"
                  />
                )}
                <div
                  className="relative z-10 shrink-0 w-8 h-8 rounded-full border border-[var(--gold)]/40 bg-[var(--ink-3)] flex items-center justify-center"
                >
                  <span className="font-[var(--font-display)] text-xs text-[var(--gold)]">
                    {step.step}
                  </span>
                </div>
                <div
                  className="flex-1 min-w-0 p-4 rounded-sm border border-[rgba(201,162,39,0.15)] bg-[var(--ink-3)]/60"
                >
                  <span
                    className="text-[8px] font-bold uppercase tracking-[0.2em] text-[var(--gold)]/70 block mb-2"
                  >
                    {step.tag}
                  </span>
                  <h3 className="font-[var(--font-display)] text-base text-[var(--cream)] mb-2 tracking-wide leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-[var(--cream-muted)] text-sm leading-relaxed font-[var(--font-body)]">
                    {step.desc}
                  </p>
                  <div
                    className="mt-3 h-px w-full max-w-[120px]"
                    style={{
                      background: "linear-gradient(90deg, var(--gold), transparent)",
                    }}
                  />
                </div>
              </div>
            </BlurFadeIn>
          ))}
        </div>

        {/* Tablet / desktop: card grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {siteConfig.engagementSteps.map((step, i) => (
            <BlurFadeIn key={step.step} delay={i * 80}>
              <div
                className="group relative h-full p-5 sm:p-6 rounded-sm border border-[rgba(201,162,39,0.12)] bg-[var(--ink-3)]/60 hover:border-[rgba(201,162,39,0.35)] transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4 gap-2">
                  <span
                    className="font-[var(--font-display)] text-2xl text-[rgba(201,162,39,0.25)] group-hover:text-[rgba(201,162,39,0.45)] transition-colors"
                  >
                    {step.step}
                  </span>
                  <span
                    className="text-[8px] font-bold uppercase tracking-[0.2em] text-[var(--gold)]/60 text-right"
                  >
                    {step.tag}
                  </span>
                </div>
                <h3
                  className="font-[var(--font-display)] text-lg sm:text-xl text-[var(--cream)] mb-2 tracking-wide group-hover:text-[var(--gold-light)] transition-colors"
                >
                  {step.title}
                </h3>
                <p className="text-[var(--cream-muted)] text-sm leading-relaxed font-[var(--font-body)]">
                  {step.desc}
                </p>
                <div
                  className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                  style={{
                    background: "linear-gradient(90deg, var(--gold), transparent)",
                  }}
                />
              </div>
            </BlurFadeIn>
          ))}
        </div>

        <BlurFadeIn className="mt-8 sm:mt-10 md:mt-12 text-center px-1" delay={400}>
          <p className="text-[var(--cream-muted)] text-sm sm:text-base mb-4 font-[var(--font-body)] max-w-xl mx-auto leading-relaxed">
            {siteConfig.brandStory.differentiator}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 text-xs sm:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[var(--gold)] hover:gap-3 transition-all duration-300"
          >
            Start Your Security Assessment
            <span>→</span>
          </Link>
        </BlurFadeIn>
      </div>
    </section>
  );
}
