import Link from "next/link";
import Image from "next/image";
import { Cctv, ArrowRight } from "lucide-react";
import BlurFadeIn from "@/components/ui/BlurFadeIn";
import ShimmerButton from "@/components/ui/ShimmerButton";

const SURVEILLANCE_BG_IMAGE =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop&q=85";

export default function SurveillanceCTA() {
  return (
    <section
      className="relative overflow-hidden py-10 sm:py-12 md:py-14"
      aria-labelledby="surveillance-cta-heading"
    >
      <Image
        src={SURVEILLANCE_BG_IMAGE}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,8,8,0.88) 0%, rgba(0,0,0,0.78) 50%, rgba(8,8,8,0.88) 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 20% 50%, rgba(156, 168, 180, 0.06) 0%, rgba(220, 43, 27, 0.04) 50%, transparent 65%)",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <BlurFadeIn>
          <div
            className="relative rounded-sm border border-[var(--gold)]/25 overflow-hidden bg-[var(--ink)]/75 backdrop-blur-md"
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-60"
              style={{
                background:
                  "linear-gradient(135deg, rgba(220, 43, 27,0.08) 0%, transparent 45%, rgba(220, 43, 27,0.04) 100%)",
              }}
            />
            <div
              className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--gold)]/80 via-[var(--gold)] to-[var(--gold)]/40"
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8 p-6 sm:p-8 md:p-10">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5 min-w-0 flex-1">
                <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-sm border border-[var(--gold)]/30 bg-[var(--ink-3)]/80 flex items-center justify-center">
                  <Cctv
                    className="w-6 h-6 sm:w-7 sm:h-7 text-[var(--gold)]"
                    strokeWidth={1.5}
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--gold)]/75 mb-2 font-[var(--font-body)]">
                    Control Room Operations
                  </p>
                  <h2
                    id="surveillance-cta-heading"
                    className="font-[var(--font-display)] text-2xl sm:text-3xl md:text-4xl text-[var(--cream)] leading-none mb-3 tracking-wide"
                  >
                    Eyes on your assets{" "}
                    <span className="text-gradient-gold">around the clock.</span>
                  </h2>
                  <p className="text-[var(--cream-muted)] text-sm sm:text-base leading-relaxed font-[var(--font-body)] max-w-2xl">
                    AI-assisted CCTV monitoring, manned control rooms, and real-time
                    incident documentation — deployed across India and the UAE.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 shrink-0 lg:pl-4">
                <ShimmerButton
                  href="/services#surveillance-control-room"
                  size="lg"
                  className="w-full sm:w-auto justify-center whitespace-nowrap"
                >
                  24/7 Surveillance
                </ShimmerButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 text-sm text-[var(--cream-muted)] font-bold tracking-widest uppercase hover:text-[var(--gold)] transition-colors duration-300 w-full sm:w-auto"
                >
                  Speak to Command
                  <ArrowRight className="w-4 h-4 text-[var(--gold)]" />
                </Link>
              </div>
            </div>
          </div>
        </BlurFadeIn>
      </div>
    </section>
  );
}
