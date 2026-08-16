import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlurFadeIn from "@/components/ui/BlurFadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";
import { Shield } from "lucide-react";
import DriftWallHeroBg from "@/components/ui/DriftWallHeroBg";

export const metadata: Metadata = {
  title: "About Us — Our Origin & Promise",
  description:
    "The ARMOURIXX story — founded by Akshay Sanjay Bhote in 2026 to deliver intelligence-led security across Maharashtra with discipline, precision, and full accountability.",
};

import ThreePillars from "@/components/sections/ThreePillars";
import MissionVision from "@/components/sections/MissionVision";
import MilestonesTimeline from "@/components/sections/MilestonesTimeline";



export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 sm:pt-24">
        {/* Hero */}
        <section className="pb-[clamp(3rem,8vw,8rem)] pt-4 sm:pt-6 md:pt-8 bg-[var(--ink)] relative overflow-hidden">
          <DriftWallHeroBg />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <BlurFadeIn>
              <p className="text-[var(--gold)] text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase font-semibold mb-4 sm:mb-6">About ARMOURIXX</p>
              <h1 className="font-[var(--font-display)] text-[clamp(2.25rem,8vw,6rem)] leading-none mb-4 sm:mb-6">
                Protection Is More Than Our Profession —{" "}
                <span className="text-gradient-gold">It&apos;s Our Promise.</span>
              </h1>
              <p className="text-[var(--cream-muted)] text-base sm:text-lg leading-relaxed max-w-2xl font-[var(--font-body)]">
                ARMOURIXX Security was founded with a singular conviction: that elite security
                should be accessible, accountable, and always ahead of the threat.
              </p>
            </BlurFadeIn>
          </div>
        </section>

        {/* Three Pillars Carousel */}
        <ThreePillars />

        {/* Mission / Vision — immersive animated section */}
        <MissionVision />

        {/* Founder */}
        <section className="section-pad bg-[var(--ink-2)] relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Shield className="w-[280px] sm:w-[400px] md:w-[600px] h-[280px] sm:h-[400px] md:h-[600px] text-[var(--gold)] opacity-[0.025]" fill="currentColor" />
          </div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <BlurFadeIn>
              <SectionHeading eyebrow="Founder's Note" title="From the" titleHighlight="MD's Desk" className="mb-10 sm:mb-16" />
            </BlurFadeIn>
            <BlurFadeIn delay={100}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 items-center">
                <div className="md:col-span-1 flex flex-col items-center">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-sm bg-[var(--ink-4)] border-2 border-[var(--gold)]/30 flex items-center justify-center text-[var(--gold)] font-bold text-4xl sm:text-5xl mb-4 sm:mb-6 font-[var(--font-display)]">
                    A {/* TODO: Replace with founder portrait */}
                  </div>
                  <p className="text-[var(--cream)] font-bold tracking-wider text-sm uppercase text-center">Akshay Sanjay Bhote</p>
                  <p className="text-[var(--gold)] text-xs tracking-widest uppercase mt-1 text-center">Founder &amp; Managing Director</p>
                </div>
                <div className="md:col-span-2">
                  <blockquote className="font-[var(--font-display)] text-2xl sm:text-3xl md:text-4xl text-[var(--cream)] leading-tight mb-6 sm:mb-8 relative">
                    <span className="text-[var(--gold)] text-4xl sm:text-6xl leading-none absolute -top-3 sm:-top-4 -left-2 sm:-left-3 opacity-30">&ldquo;</span>
                    At ARMOURIXX Security, protection is more than our profession —{" "}
                    <span className="text-gradient-gold">it&apos;s our promise.</span>
                  </blockquote>
                  <p className="text-[var(--cream-muted)] leading-relaxed font-[var(--font-body)] mb-4">
                    I founded ARMOURIXX Security with the belief that modern security demands more than presence —
                    it demands intelligence, technology, and an uncompromising commitment to our clients&apos; safety.
                  </p>
                  <p className="text-[var(--cream-muted)] leading-relaxed font-[var(--font-body)]">
                    Every decision we make, every guard we deploy, every technology we integrate — is in service of
                    one goal: to ensure our clients can operate with absolute confidence.
                  </p>
                </div>
              </div>
            </BlurFadeIn>
          </div>
        </section>

        {/* Milestones & Growth — immersive accordion timeline */}
        <MilestonesTimeline />

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
