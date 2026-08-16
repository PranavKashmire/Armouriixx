"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import BlurFadeIn from "@/components/ui/BlurFadeIn";
import { siteConfig } from "@/data/siteConfig";

export default function StatsBar() {
  const stats = siteConfig.stats;

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#0A0A0B" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,162,39,0.05) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(201,162,39,0.5) 20%, rgba(232,196,104,0.8) 50%, rgba(201,162,39,0.5) 80%, transparent 100%)",
        }}
      />

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(201,162,39,0.5) 20%, rgba(232,196,104,0.8) 50%, rgba(201,162,39,0.5) 80%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <BlurFadeIn key={i} delay={i * 100} direction="up">
              <div className="relative flex flex-col items-center justify-center text-center py-8 sm:py-10 px-2 sm:px-4 lg:px-8 group overflow-hidden">
                {i < stats.length - 1 && (
                  <div
                    className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px"
                    style={{
                      height: "60%",
                      background:
                        "linear-gradient(180deg, transparent 0%, rgba(201,162,39,0.4) 30%, rgba(201,162,39,0.4) 70%, transparent 100%)",
                    }}
                  />
                )}

                <div
                  className="font-[var(--font-display)] leading-none mb-2 sm:mb-3 transition-all duration-500 w-full"
                  style={{
                    fontSize: "clamp(2rem, 8vw, 4.5rem)",
                    background:
                      "linear-gradient(135deg, #B4881F 0%, #E8C468 45%, #C9A227 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: "-0.02em",
                  }}
                >
                  <AnimatedCounter
                    target={s.value}
                    suffix={s.suffix}
                    duration={2500}
                  />
                </div>

                <p
                  className="font-[var(--font-display)] uppercase mb-1.5 transition-colors duration-300 group-hover:text-[var(--gold)]"
                  style={{
                    fontSize: "clamp(0.6rem, 1vw, 0.78rem)",
                    color: "var(--cream)",
                    letterSpacing: "0.22em",
                  }}
                >
                  {s.label}
                </p>

                <p
                  className="font-[var(--font-body)] text-xs leading-relaxed max-w-[140px]"
                  style={{ color: "rgba(184,180,168,0.55)" }}
                >
                  {s.sub}
                </p>

                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px transition-all duration-500 group-hover:w-12"
                  style={{
                    width: 0,
                    background:
                      "linear-gradient(90deg, transparent, #C9A227, transparent)",
                  }}
                />
              </div>
            </BlurFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
