"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Users, IdCard, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import BlurFadeIn from "@/components/ui/BlurFadeIn";
import { nightclubBouncersContent } from "@/data/nightclubBouncers";
import { cn } from "@/lib/utils";
import "./NightclubBouncers.css";

const highlights = [
  { icon: IdCard, label: "Door & ID screening" },
  { icon: Users, label: "Crowd & capacity control" },
  { icon: Sparkles, label: "VIP & artist protection" },
  { icon: ShieldCheck, label: "Uniformed ARMOURIXX teams" },
];

export default function NightclubBouncers() {
  const [activeImage, setActiveImage] = useState(0);
  const content = nightclubBouncersContent;
  const featured = content.gallery[activeImage];

  return (
    <section
      id={content.id}
      className="nightclub-bouncers bg-[var(--ink-2)] relative overflow-hidden scroll-mt-28"
      aria-labelledby="nightclub-bouncers-heading"
    >
      <div className="nightclub-bouncers__grid-bg" aria-hidden="true" />
      <div className="nightclub-bouncers__grain" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <BlurFadeIn className="mb-8 sm:mb-10">
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            titleHighlight={content.titleHighlight}
            subtitle={content.subtitle}
          />
        </BlurFadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-10 sm:mb-12">
          <BlurFadeIn className="lg:col-span-7">
            <div className="nightclub-bouncers__hero relative aspect-[16/10] sm:aspect-[16/9] lg:min-h-[420px] rounded-sm overflow-hidden border border-[var(--glass-border)]">
              <Image
                src={featured.src}
                alt={featured.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-opacity duration-700"
                priority
              />
              <div className="nightclub-bouncers__hero-overlay" aria-hidden="true" />
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="nightclub-bouncers__badge">{content.opsCode}</span>
                <span className="nightclub-bouncers__status">
                  <span className="nightclub-bouncers__status-dot" />
                  {content.statusLabel}
                </span>
              </div>
              <div className="absolute bottom-0 inset-x-0 z-10 p-4 sm:p-6">
                <p className="font-[var(--font-display)] text-xl sm:text-2xl text-[var(--cream)] tracking-wide">
                  {featured.caption}
                </p>
                <p className="text-[var(--cream-muted)] text-xs sm:text-sm mt-1 font-[var(--font-body)]">
                  {featured.alt}
                </p>
              </div>
            </div>
          </BlurFadeIn>

          <BlurFadeIn delay={100} className="lg:col-span-5 flex flex-col">
            <div className="nightclub-bouncers__panel h-full flex flex-col">
              <p className="font-[var(--font-display)] text-2xl sm:text-3xl text-[var(--gold-light)] tracking-wide mb-4">
                {content.tagline}
              </p>
              <p className="text-[var(--cream-muted)] text-sm sm:text-base leading-relaxed font-[var(--font-body)] mb-6">
                {content.description}
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6">
                {highlights.map(({ icon: Icon, label }) => (
                  <div key={label} className="nightclub-bouncers__chip">
                    <Icon className="w-4 h-4 text-[var(--gold)] shrink-0" strokeWidth={1.75} />
                    <span>{label}</span>
                  </div>
                ))}
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {content.features.map((feature) => (
                  <li key={feature} className="nightclub-bouncers__feature">
                    <span className="nightclub-bouncers__feature-bullet" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-[var(--gold)] text-[var(--gold)] text-xs font-bold tracking-[0.2em] uppercase rounded-sm hover:bg-[var(--gold)] hover:text-[var(--ink)] transition-all duration-300 w-full sm:w-auto"
              >
                Request Nightlife Security
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </BlurFadeIn>
        </div>

        <BlurFadeIn delay={150}>
          <div className="flex items-center justify-between gap-4 mb-4 sm:mb-5">
            <p className="text-[var(--gold)] text-[10px] tracking-[0.28em] uppercase font-semibold">
              On-Ground Gallery
            </p>
            <p className="text-[var(--cream-muted)]/60 text-[10px] tracking-widest uppercase hidden sm:block">
              Uniformed teams · Club deployments
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {content.gallery.map((image, i) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveImage(i)}
                className={cn(
                  "nightclub-bouncers__thumb group text-left",
                  activeImage === i && "is-active"
                )}
                aria-label={`View ${image.caption}`}
                aria-pressed={activeImage === i}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="nightclub-bouncers__thumb-overlay" />
                </div>
                <p className="mt-2 text-[10px] sm:text-xs text-[var(--cream-muted)] group-hover:text-[var(--cream)] transition-colors font-[var(--font-body)] leading-snug">
                  {image.caption}
                </p>
              </button>
            ))}
          </div>
        </BlurFadeIn>
      </div>
    </section>
  );
}
