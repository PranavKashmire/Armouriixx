import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import BlurFadeIn from "@/components/ui/BlurFadeIn";
import { Shield, Eye, Target } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const pillars = [
  {
    icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Discipline",
    image: "/images/optimized/Corporate-Security-Formation.jpg",
    desc: "Every operative is vetted, protocol-trained, and deployed against operational benchmarks — not posted at random.",
  },
  {
    icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Precision",
    image: "/images/optimized/manned.jpg",
    desc: "GPS-tracked patrols, advance planning, and digital incident reporting — zero margin for operational blind spots.",
  },
  {
    icon: <Eye className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Protection",
    image: "/images/optimized/crowd.jpg",
    desc: "From boardrooms to concert stages — we protect lives, assets, and reputations with quiet, uncompromising presence.",
  },
];

const ABOUT_IMAGE =
  "/images/optimized/Armourixx-Multi-Sector-Security-Guard-1.jpg";

export default function AboutTeaser() {
  return (
    <section className="section-pad bg-[var(--ink)] relative overflow-hidden">
      <div
        className="absolute right-0 top-0 w-1/2 h-full opacity-[0.03] pointer-events-none hidden sm:block"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--gold) 0, var(--gold) 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          <BlurFadeIn direction="left" className="order-1 lg:order-1">
            <div className="relative w-full max-w-md mx-auto lg:max-w-lg lg:mx-0">
              <div
                className="relative w-full overflow-hidden rounded-lg border border-[var(--glass-border)] aspect-[4/3] sm:aspect-[4/5] max-h-[min(52vh,380px)] sm:max-h-none"
              >
                <Image
                  src={ABOUT_IMAGE}
                  alt="ARMOURIXX multi-sector security guard"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 480px"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 40%, rgba(10,10,11,0.85) 100%)",
                  }}
                />
                <p
                  className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[var(--gold)]/80 text-center sm:text-left"
                >
                  Field Operations · Maharashtra
                </p>
              </div>
              <div
                className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full rounded-lg border border-[var(--gold)]/20 pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute top-3 right-3 sm:-top-4 sm:-right-4 glass-gold px-3 py-2 sm:px-5 sm:py-3 rounded-sm"
              >
                <p className="font-[var(--font-display)] text-2xl sm:text-4xl text-gradient-gold leading-none">
                  50+
                </p>
                <p className="text-[var(--cream-muted)] text-[10px] sm:text-xs tracking-wider">
                  Elite Guards
                </p>
              </div>
            </div>
          </BlurFadeIn>

          <BlurFadeIn direction="right" delay={100} className="order-2 lg:order-2 min-w-0">
            <SectionHeading
              eyebrow="Who We Are"
              title="Built on"
              titleHighlight="Trust & Precision"
              align="left"
              className="mb-6 sm:mb-8 max-sm:mx-auto max-sm:text-center [&_h2]:text-[clamp(1.75rem,7vw,2.75rem)] sm:[&_h2]:text-4xl"
            />

            <p className="text-[var(--cream-muted)] text-sm sm:text-base leading-relaxed mb-4 sm:mb-5 font-[var(--font-body)] max-sm:text-center">
              {siteConfig.brandStory.origin}
            </p>

            <p className="text-[var(--cream-muted)] text-sm sm:text-base leading-relaxed mb-6 sm:mb-10 font-[var(--font-body)] max-sm:text-center">
              {siteConfig.brandStory.promise} Founded by{" "}
              <span className="text-[var(--cream)] font-semibold">
                {siteConfig.founder.name}
              </span>
              , we serve {siteConfig.coverage.toLowerCase()}.
            </p>

            <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-3 mb-6 sm:mb-10">
              {pillars.map((p, i) => (
                <div
                  key={i}
                  className="flex flex-col overflow-hidden rounded-sm border border-[var(--glass-border)] bg-[var(--ink-3)]/40"
                >
                  <div className="relative w-full aspect-[16/10] sm:aspect-[4/3]">
                    <Image
                      src={p.image}
                      alt={`ARMOURIXX ${p.title.toLowerCase()}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 200px"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 glass-gold rounded-sm text-[var(--gold)]">
                      {p.icon}
                    </div>
                  </div>
                  <div className="text-left sm:text-center min-w-0 flex-1 p-4 sm:p-3">
                    <h4 className="font-[var(--font-display)] text-sm sm:text-base tracking-widest text-[var(--cream)] mb-1 sm:mb-2">
                      {p.title}
                    </h4>
                    <p className="text-[var(--cream-muted)] text-xs leading-relaxed font-[var(--font-body)]">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-sm:flex max-sm:justify-center">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] text-[var(--gold)] font-semibold text-sm tracking-wider hover:gap-4 transition-all duration-300 uppercase"
              >
                Read Our Origin Story <span>→</span>
              </Link>
            </div>
          </BlurFadeIn>
        </div>
      </div>
    </section>
  );
}
