"use client";

import { ShieldCheck, Video, MapPinned, Radio, Satellite, ScanLine } from "lucide-react";
import BlurFadeIn from "@/components/ui/BlurFadeIn";
import { siteConfig } from "@/data/siteConfig";
import "./GuardTechUSP.css";

const pillarIcons = [ShieldCheck, Video, MapPinned] as const;

const techBadges = [
  { icon: Video, label: "Body-worn cameras" },
  { icon: Satellite, label: "GPS live tracking" },
  { icon: MapPinned, label: "Site checkpoints" },
  { icon: Radio, label: "Encrypted comms" },
  { icon: ScanLine, label: "Patrol verification" },
];

export default function GuardTechUSP() {
  const { guardTechUSP } = siteConfig;

  return (
    <section
      className="guard-tech-usp relative overflow-hidden"
      aria-labelledby="guard-tech-usp-heading"
    >
      <div className="guard-tech-usp__grid-bg" aria-hidden="true" />
      <div className="guard-tech-usp__glow" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="guard-tech-usp__shell">
          <div className="guard-tech-usp__accent-bar" aria-hidden="true" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <BlurFadeIn className="lg:col-span-5">
              <p className="guard-tech-usp__eyebrow">{guardTechUSP.eyebrow}</p>
              <h2
                id="guard-tech-usp-heading"
                className="font-[var(--font-display)] text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] tracking-wide text-[var(--cream)] mb-4"
              >
                {guardTechUSP.title}{" "}
                <span className="text-gradient-gold block sm:inline">
                  {guardTechUSP.titleHighlight}
                </span>
              </h2>
              <p className="text-[var(--cream-muted)] text-sm sm:text-base leading-relaxed font-[var(--font-body)] mb-6">
                {guardTechUSP.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {techBadges.map(({ icon: Icon, label }) => (
                  <span key={label} className="guard-tech-usp__badge">
                    <Icon className="w-3.5 h-3.5 text-[var(--gold)] shrink-0" strokeWidth={1.75} />
                    {label}
                  </span>
                ))}
              </div>
            </BlurFadeIn>

            <BlurFadeIn delay={120} className="lg:col-span-7">
              <div className="guard-tech-usp__flow">
                {guardTechUSP.pillars.map((pillar, i) => {
                  const Icon = pillarIcons[i];
                  return (
                    <div key={pillar.title} className="guard-tech-usp__pillar">
                      <div className="guard-tech-usp__pillar-icon">
                        <Icon className="w-5 h-5 text-[var(--gold)]" strokeWidth={1.75} />
                        <span className="guard-tech-usp__pillar-index">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <h3 className="font-[var(--font-display)] text-lg sm:text-xl tracking-wider text-[var(--cream)]">
                            {pillar.title}
                          </h3>
                          <span className="guard-tech-usp__pillar-tag">{pillar.tag}</span>
                        </div>
                        <p className="text-[var(--cream-muted)] text-xs sm:text-sm leading-relaxed font-[var(--font-body)]">
                          {pillar.desc}
                        </p>
                      </div>
                      {i < guardTechUSP.pillars.length - 1 && (
                        <div className="guard-tech-usp__connector" aria-hidden="true" />
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="guard-tech-usp__command mt-5 sm:mt-6">
                <span className="guard-tech-usp__command-dot" aria-hidden="true" />
                <p className="text-[10px] sm:text-xs tracking-[0.18em] uppercase text-[var(--cream-muted)] font-[var(--font-body)]">
                  Command view: body-cam feeds + checkpoint scans + live GPS — every guard, every shift, every site.
                </p>
              </div>
            </BlurFadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
