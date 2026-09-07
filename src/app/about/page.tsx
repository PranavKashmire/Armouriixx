import type { Metadata } from "next";
import Image from "next/image";
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
import CoFounderNote from "@/components/sections/CoFounderNote";

const founderPortrait = encodeURI("/images/IMG_4490 (1).jpeg");

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
        <section className="section-pad bg-[var(--ink-2)] relative overflow-x-clip">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Shield className="w-[280px] sm:w-[400px] md:w-[600px] h-[280px] sm:h-[400px] md:h-[600px] text-[var(--gold)] opacity-[0.025]" fill="currentColor" />
          </div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <BlurFadeIn>
              <SectionHeading eyebrow="Founder's Note" title="From the" titleHighlight="MD's Desk" className="mb-10 sm:mb-16" />
            </BlurFadeIn>
            <BlurFadeIn delay={100}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 items-stretch">
                <div className="md:col-span-1 flex flex-col w-full h-full relative overflow-visible">
                  <div className="w-full md:w-[160%] md:-ml-[60%] flex flex-col h-full">
                    <div className="relative w-full h-full min-h-[16rem] sm:min-h-[18rem] md:min-h-0 flex-1 rounded-sm bg-[var(--ink-4)] border-2 border-[var(--gold)]/30 overflow-hidden">
                      <Image
                        src={founderPortrait}
                        alt="Mr. Akshay Bhote, Founder & Director"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 40vw"
                        priority
                      />
                    </div>
                    <div className="pt-4 sm:pt-6 shrink-0 text-center w-full">
                      <p className="text-[var(--cream)] font-bold tracking-wider text-sm uppercase">Akshay Bhote</p>
                      <p className="text-[var(--gold)] text-xs tracking-widest uppercase mt-1">Founder &amp; Director</p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 space-y-4">
                  <p className="text-[var(--cream-muted)] leading-relaxed font-[var(--font-body)]">
                    Mr. Akshay Bhote is the Founder &amp; Director of Ridha&apos;s Group, a professional
                    facility management company providing reliable and quality services across residential,
                    commercial, and corporate sectors.
                  </p>
                  <p className="text-[var(--cream-muted)] leading-relaxed font-[var(--font-body)]">
                    He completed his Interior Design qualification from MMCC, Deccan, Pune (2015–2017). In
                    2019, he founded Ridha&apos;s Group with a small team of three members, driven by a clear
                    vision to provide professional facility management services with quality, trust, and
                    customer satisfaction.
                  </p>
                  <p className="text-[var(--cream-muted)] leading-relaxed font-[var(--font-body)]">
                    The company&apos;s journey began with Sonak Toyota Showroom, which marked the start of its
                    growth. Today, through dedication, consistent service, and a customer-first approach,
                    Ridha&apos;s Group has earned the trust of clients across various industries.
                  </p>
                  <p className="text-[var(--cream-muted)] leading-relaxed font-[var(--font-body)]">
                    Under Mr. Bhote&apos;s leadership, Ridha&apos;s Group has grown to a team of 150+ trained
                    professionals, managing 12+ active sites and serving 50+ clients. The company provides
                    complete facility management solutions, including Housekeeping, Security Services,
                    Technical Maintenance, Soft Services, Integrated Facility Management (IFM), and Manpower
                    Solutions.
                  </p>
                  <p className="text-[var(--cream-muted)] leading-relaxed font-[var(--font-body)]">
                    Headquartered in Sus, Pune &amp; Bavdhan Pune with an international presence in Dubai,
                    UAE, Ridha&apos;s Group is ISO Certified, MSME Registered, and recognised under the Startup
                    India initiative.
                  </p>
                  <p className="text-[var(--cream-muted)] leading-relaxed font-[var(--font-body)]">
                    Mr. Bhote&apos;s vision is to build Ridha&apos;s Group into a globally trusted facility
                    management company by delivering quality services, maintaining high professional standards,
                    and creating long-term value for clients.
                  </p>
                  <blockquote className="border-l-2 border-[var(--gold)]/50 pl-4 sm:pl-5 py-1">
                    <p className="text-[var(--cream)] leading-relaxed font-[var(--font-body)] italic">
                      &ldquo;Our success is built on trust, quality, and commitment. Every client is important
                      to us, and every project is delivered with complete responsibility.&rdquo;
                    </p>
                    <cite className="block mt-3 text-[var(--gold)] text-xs sm:text-sm font-semibold tracking-wider not-italic uppercase">
                      — Mr. Akshay Bhote, Founder &amp; Director
                    </cite>
                  </blockquote>
                </div>
              </div>
            </BlurFadeIn>

            <CoFounderNote />
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
