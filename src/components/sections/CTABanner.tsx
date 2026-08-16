import ShimmerButton from "@/components/ui/ShimmerButton";
import BlurFadeIn from "@/components/ui/BlurFadeIn";
import { Shield } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

type CTABannerProps = {
  headline?: string;
  headlineHighlight?: string;
  subcopy?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CTABanner({
  headline = "Ready to Secure",
  headlineHighlight = "What Matters Most?",
  subcopy = `Talk to our command team. We'll assess your risk profile and design a protection plan built on ${siteConfig.motto.split(" · ")[0].toLowerCase()}, documentation, and elite deployment.`,
  primaryLabel = "Request a Consultation",
  primaryHref = "/contact",
  secondaryLabel = "Explore Services",
  secondaryHref = "/services",
}: CTABannerProps) {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--ink-2)] via-[#0e0c03] to-[var(--ink-2)]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(201,162,39,0.08) 0%, transparent 70%)",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/50 to-transparent" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <BlurFadeIn>
          <p
            className="text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--gold)]/70 mb-4 font-[var(--font-body)]"
          >
            {siteConfig.tagline}
          </p>
          <Shield
            className="w-12 h-12 sm:w-16 sm:h-16 text-[var(--gold)] mx-auto mb-6 sm:mb-8 opacity-80"
            fill="currentColor"
            strokeWidth={0.5}
            stroke="var(--gold-dark)"
          />
          <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[var(--cream)] mb-4 sm:mb-6 leading-none">
            {headline}{" "}
            <span className="text-gradient-gold">{headlineHighlight}</span>
          </h2>
          <p className="text-[var(--cream-muted)] text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed font-[var(--font-body)]">
            {subcopy}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <ShimmerButton href={primaryHref} size="lg" className="w-full sm:w-auto justify-center">
              {primaryLabel}
            </ShimmerButton>
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-sm text-[var(--cream-muted)] font-bold tracking-widest uppercase hover:text-[var(--cream)] transition-colors duration-300 w-full sm:w-auto"
            >
              {secondaryLabel} →
            </Link>
          </div>
        </BlurFadeIn>
      </div>
    </section>
  );
}
