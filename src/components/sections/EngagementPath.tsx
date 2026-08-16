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
        <BlurFadeIn className="mb-12 sm:mb-16">
          <SectionHeading
            eyebrow="How We Work"
            title="From Assessment"
            titleHighlight="to Command"
            subtitle="A disciplined four-phase engagement model — so you know exactly how ARMOURIXX protects what matters before guards arrive on site."
          />
        </BlurFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {siteConfig.engagementSteps.map((step, i) => (
            <BlurFadeIn key={step.step} delay={i * 80}>
              <div
                className="group relative h-full p-5 sm:p-6 rounded-sm border border-[rgba(201,162,39,0.12)] bg-[var(--ink-3)]/60 hover:border-[rgba(201,162,39,0.35)] transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="font-[var(--font-display)] text-2xl text-[rgba(201,162,39,0.25)] group-hover:text-[rgba(201,162,39,0.45)] transition-colors"
                  >
                    {step.step}
                  </span>
                  <span
                    className="text-[8px] font-bold uppercase tracking-[0.2em] text-[var(--gold)]/60"
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

        <BlurFadeIn className="mt-10 sm:mt-12 text-center" delay={400}>
          <p className="text-[var(--cream-muted)] text-sm mb-4 font-[var(--font-body)] max-w-xl mx-auto">
            {siteConfig.brandStory.differentiator}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold)] hover:gap-3 transition-all duration-300"
          >
            Start Your Security Assessment
            <span>→</span>
          </Link>
        </BlurFadeIn>
      </div>
    </section>
  );
}
