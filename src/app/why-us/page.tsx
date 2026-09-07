"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlurFadeIn from "@/components/ui/BlurFadeIn";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";
import DriftWallHeroBg from "@/components/ui/DriftWallHeroBg";
import StatsBar from "@/components/sections/StatsBar";
import OperationalStandards from "@/components/sections/OperationalStandards";
import GuardTechUSP from "@/components/sections/GuardTechUSP";
import ArmourixxDifference from "@/components/sections/ArmourixxDifference";

export default function WhyUsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 sm:pt-24">
        <section className="pb-[clamp(3rem,8vw,8rem)] pt-4 sm:pt-6 md:pt-8 bg-[var(--ink)] relative overflow-hidden">
          <DriftWallHeroBg />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <BlurFadeIn>
              <p className="text-[var(--gold)] text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase font-semibold mb-4 sm:mb-6">
                Why ARMOURIXX
              </p>
              <h1 className="font-[var(--font-display)] text-[clamp(2.25rem,8vw,7rem)] leading-none mb-4 sm:mb-6">
                Beyond Protection.{" "}
                <span className="text-gradient-gold">We Command Security.</span>
              </h1>
              <p className="text-[var(--cream-muted)] text-base sm:text-lg leading-relaxed max-w-2xl font-[var(--font-body)]">
                We don&apos;t compete on headcount or price. We compete on precision,
                accountability, and the quiet confidence that every operation is trained,
                documented, and ready before your people arrive on site.
              </p>
            </BlurFadeIn>
          </div>
        </section>

        <ArmourixxDifference />
        <GuardTechUSP />
        <Testimonials />
        <OperationalStandards />
        <StatsBar />
        <CTABanner
          headline="Experience the"
          headlineHighlight="ARMOURIXX Standard"
          subcopy="See how our six operational pillars translate into measurable protection — from elite personnel to live command visibility."
          secondaryLabel="View Core Capabilities"
          secondaryHref="/services"
        />
      </main>
      <Footer />
    </>
  );
}
