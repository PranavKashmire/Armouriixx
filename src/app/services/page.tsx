"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import BlurFadeIn from "@/components/ui/BlurFadeIn";
import CTABanner from "@/components/sections/CTABanner";
import CoreCapabilities from "@/components/sections/CoreCapabilities";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import DriftWallHeroBg from "@/components/ui/DriftWallHeroBg";

const industries = [
  { icon: "🏢", label: "Corporate & Commercial", id: "corporate", clients: "Corporate offices, business parks, IT companies, financial institutions, banks & NBFCs, MNCs" },
  { icon: "👔", label: "VIP & Executive Protection", id: "vip", clients: "CEOs, HNWIs, celebrities, politicians, diplomats, international delegations, royal families/VVIPs" },
  { icon: "🏨", label: "Hospitality & Luxury", id: "hospitality", clients: "Five-star hotels, luxury resorts, premium clubs, casinos, private villas, serviced apartments" },
  { icon: "🎪", label: "Events & Entertainment", id: "events", clients: "Corporate events, concerts/festivals, award shows, fashion shows, weddings, product launches, exhibitions, sports events" },
  { icon: "🏗️", label: "Real Estate", id: "real-estate", clients: "Residential communities, luxury apartments, commercial complexes, malls, business towers, gated communities" },
  { icon: "🏭", label: "Industrial & Manufacturing", id: "industrial", clients: "Plants, warehouses, logistics parks, distribution centers, oil & gas, construction sites" },
  { icon: "🏥", label: "Healthcare", id: "healthcare", clients: "Hospitals, medical colleges, research centers, pharma companies, diagnostic centers" },
  { icon: "🎓", label: "Education", id: "education", clients: "Universities, international schools, colleges, campuses, student housing" },
  { icon: "🏛️", label: "Government & Public Sector", id: "government", clients: "Government offices, public infrastructure, embassies/consulates, public events, municipal facilities" },
  { icon: "💎", label: "Retail & Luxury Brands", id: "retail", clients: "Luxury retail, malls, jewelry showrooms, boutiques, auto dealerships" },
  { icon: "✈️", label: "Transportation & Logistics", id: "transport", clients: "Airports, seaports, logistics companies, fleet ops, cargo terminals, VIP transportation" },
  { icon: "💻", label: "Technology & Critical Infrastructure", id: "tech", clients: "Data centers, telecom, power plants, renewable energy, smart cities, critical infra" },
];

function IndustryAccordion({ industry }: { industry: typeof industries[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div id={industry.id} className="glass border border-[var(--glass-border)] rounded-lg overflow-hidden transition-all duration-300 hover:border-[var(--gold)]/30">
      <button
        className="w-full flex items-center justify-between p-4 sm:p-5 text-left group min-h-[56px]"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
          <span className="text-xl sm:text-2xl shrink-0">{industry.icon}</span>
          <span className="font-[var(--font-display)] text-base sm:text-xl tracking-wider text-[var(--cream)] group-hover:text-[var(--gold)] transition-colors duration-300 break-words">
            {industry.label}
          </span>
        </div>
        <ChevronDown
          className={cn("w-5 h-5 text-[var(--gold)] transition-transform duration-300", open && "rotate-180")}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 border-t border-[var(--glass-border)]">
          <p className="text-[var(--cream-muted)] text-sm leading-relaxed font-[var(--font-body)] pt-4">
            <span className="text-[var(--gold)] font-semibold">Clients we serve: </span>
            {industry.clients}
          </p>
        </div>
      )}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 sm:pt-24">
        {/* Hero */}
        <section className="pb-[clamp(3rem,8vw,8rem)] pt-4 sm:pt-6 md:pt-8 bg-[var(--ink)] relative overflow-hidden">
          <DriftWallHeroBg />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <BlurFadeIn>
              <p className="text-[var(--gold)] text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase font-semibold mb-4 sm:mb-6">What We Do</p>
              <h1 className="font-[var(--font-display)] text-[clamp(2.25rem,8vw,7rem)] leading-none mb-4 sm:mb-6">
                Elite Security{" "}
                <span className="text-gradient-gold">Services</span>
              </h1>
              <p className="text-[var(--cream-muted)] text-base sm:text-lg leading-relaxed max-w-2xl font-[var(--font-body)]">
                From executive protection to industrial guarding — we deliver precision security
                solutions across 12 industry verticals in Maharashtra.
              </p>
            </BlurFadeIn>
          </div>
        </section>

        <CoreCapabilities />

        {/* Industries */}
        <section className="section-pad bg-[var(--ink)]">
          <div className="max-w-5xl mx-auto px-6">
            <BlurFadeIn className="mb-16">
              <SectionHeading
                eyebrow="Industries We Serve"
                title="12 Sectors,"
                titleHighlight="One Standard"
                subtitle="We apply the same elite standard of protection across every industry we serve."
              />
            </BlurFadeIn>
            <div className="space-y-3">
              {industries.map((ind, i) => (
                <BlurFadeIn key={ind.id} delay={i * 40}>
                  <IndustryAccordion industry={ind} />
                </BlurFadeIn>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
