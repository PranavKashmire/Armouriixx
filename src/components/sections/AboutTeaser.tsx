import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import BlurFadeIn from "@/components/ui/BlurFadeIn";
import { Shield, Eye, Target } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const pillars = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Discipline",
    desc: "Every operative is vetted, protocol-trained, and deployed against operational benchmarks — not posted at random.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Precision",
    desc: "GPS-tracked patrols, advance planning, and digital incident reporting — zero margin for operational blind spots.",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Protection",
    desc: "From boardrooms to concert stages — we protect lives, assets, and reputations with quiet, uncompromising presence.",
  },
];

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=900&h=1100&fit=crop&q=85";

export default function AboutTeaser() {
  return (
    <section className="section-pad bg-[var(--ink)] relative overflow-hidden">
      <div
        className="absolute right-0 top-0 w-1/2 h-full opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--gold) 0, var(--gold) 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <BlurFadeIn direction="left">
            <div className="relative aspect-[4/5] max-w-lg mx-auto lg:mx-0 w-full">
              <div className="absolute inset-0 rounded-lg overflow-hidden border border-[var(--glass-border)]">
                <Image
                  src={ABOUT_IMAGE}
                  alt="ARMOURIXX security operative on professional patrol"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
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
                  className="absolute bottom-4 left-4 right-4 text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--gold)]/80"
                >
                  Field Operations · Maharashtra
                </p>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-lg border border-[var(--gold)]/20 pointer-events-none" />
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 glass-gold px-4 sm:px-5 py-2 sm:py-3 rounded-sm">
                <p className="font-[var(--font-display)] text-3xl sm:text-4xl text-gradient-gold">50+</p>
                <p className="text-[var(--cream-muted)] text-xs tracking-wider">Elite Guards</p>
              </div>
            </div>
          </BlurFadeIn>

          <BlurFadeIn direction="right" delay={100}>
            <SectionHeading
              eyebrow="Who We Are"
              title="Built on"
              titleHighlight="Trust & Precision"
              align="left"
              className="mb-8"
            />

            <p className="text-[var(--cream-muted)] leading-relaxed mb-5 font-[var(--font-body)]">
              {siteConfig.brandStory.origin}
            </p>

            <p className="text-[var(--cream-muted)] leading-relaxed mb-10 font-[var(--font-body)]">
              {siteConfig.brandStory.promise} Founded by{" "}
              <span className="text-[var(--cream)] font-semibold">
                {siteConfig.founder.name}
              </span>
              , we serve {siteConfig.coverage.toLowerCase()}.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 mb-10">
              {pillars.map((p, i) => (
                <div
                  key={i}
                  className="text-center sm:text-center group flex sm:flex-col items-start sm:items-center gap-4 sm:gap-0"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 glass-gold rounded-sm sm:mb-3 text-[var(--gold)] group-hover:bg-[var(--gold)]/20 transition-colors duration-300 shrink-0">
                    {p.icon}
                  </div>
                  <div className="text-left sm:text-center min-w-0">
                    <h4 className="font-[var(--font-display)] text-base tracking-widest text-[var(--cream)] mb-1 sm:mb-2">
                      {p.title}
                    </h4>
                    <p className="text-[var(--cream-muted)] text-xs leading-relaxed font-[var(--font-body)]">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[var(--gold)] font-semibold text-sm tracking-wider hover:gap-4 transition-all duration-300 uppercase"
            >
              Read Our Origin Story <span>→</span>
            </Link>
          </BlurFadeIn>
        </div>
      </div>
    </section>
  );
}
