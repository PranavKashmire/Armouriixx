"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import {
  Building2,
  Hotel,
  HeartPulse,
  Landmark,
  Factory,
  Pill,
  ShoppingBag,
  GraduationCap,
  Truck,
  Shield,
  Clapperboard,
  Warehouse,
} from "lucide-react";

const industryIcons = [
  Building2,
  Hotel,
  HeartPulse,
  Landmark,
  Factory,
  Pill,
  Clapperboard,
  ShoppingBag,
  GraduationCap,
  Truck,
  Warehouse,
  Shield,
];

function IndustryCard({
  name,
  tag,
  icon: Icon,
}: {
  name: string;
  tag: string;
  icon: typeof Building2;
}) {
  return (
    <div
      className="group flex-shrink-0 flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-sm border border-[var(--border-subtle)] bg-[var(--ink-3)]/40 hover:border-[var(--border-accent)] transition-all duration-400"
      style={{ width: "clamp(200px, 32vw, 260px)" }}
    >
      <div
        className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0 border border-[var(--border-subtle)] text-[var(--gold)]/70 group-hover:text-[var(--gold-light)] group-hover:border-[var(--border-accent)] transition-colors"
      >
        <Icon className="w-4 h-4" />
      </div>
      <div className="min-w-0">
        <p
          className="font-[var(--font-display)] text-sm text-[var(--cream)] tracking-wide leading-tight truncate"
        >
          {name}
        </p>
        <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[var(--gold)]/50 mt-0.5">
          {tag}
        </p>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  direction,
  startIndex,
  duration = 40,
}: {
  items: Array<{ name: string; tag: string }>;
  direction: "ltr" | "rtl";
  startIndex: number;
  duration?: number;
}) {
  const doubled = [...items, ...items];

  return (
    <div className="industries-marquee-row flex overflow-hidden w-full">
      <div
        className={`industries-marquee-track ${
          direction === "ltr" ? "industries-marquee-ltr" : "industries-marquee-rtl"
        }`}
        style={{ animationDuration: `${duration}s` }}
      >
        {doubled.map((item, i) => (
          <IndustryCard
            key={`${item.name}-${i}`}
            name={item.name}
            tag={item.tag}
            icon={industryIcons[(startIndex + (i % items.length)) % industryIcons.length]}
          />
        ))}
      </div>
    </div>
  );
}

export default function IndustriesMarquee() {
  const shouldReduceMotion = useReducedMotion();
  const industries = siteConfig.industries;
  const rowOne = industries.slice(0, 6);
  const rowTwo = industries.slice(6, 12);

  if (shouldReduceMotion) {
    return (
      <section className="py-14 bg-[var(--ink-2)] border-y border-[var(--glass-border)]">
        <div className="max-w-7xl mx-auto px-6 text-center mb-8">
          <p className="text-[var(--gold)] text-[10px] tracking-[0.4em] uppercase font-bold mb-2">
            Industries We Secure
          </p>
          <p className="text-[var(--cream-muted)] text-sm font-[var(--font-body)] max-w-xl mx-auto">
            Tailored protection programs across 12 verticals — each with distinct threat models and operational protocols.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 max-w-6xl mx-auto px-6">
          {industries.slice(0, 8).map((item, i) => (
            <IndustryCard
              key={item.name}
              name={item.name}
              tag={item.tag}
              icon={industryIcons[i]}
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      className="relative py-14 overflow-hidden"
      style={{ background: "linear-gradient(180deg, var(--slate-2) 0%, var(--ink) 100%)" }}
    >
      <div
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.4) 40%, rgba(212, 175, 55, 0.4) 60%, transparent)",
        }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.4) 40%, rgba(212, 175, 55, 0.4) 60%, transparent)",
        }}
      />

      <motion.div
        className="text-center mb-10 relative z-10 px-6"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p
          className="text-[10px] font-bold uppercase mb-3 font-[var(--font-body)]"
          style={{ color: "var(--gold)", letterSpacing: "0.4em" }}
        >
          Industries We Secure
        </p>
        <h2
          className="font-[var(--font-display)] mb-3"
          style={{ fontSize: "clamp(1.6rem, 4vw, 3rem)", lineHeight: 1.1, color: "var(--cream)" }}
        >
          Built for Every Vertical
        </h2>
        <p
          className="font-[var(--font-body)] text-sm max-w-2xl mx-auto"
          style={{ color: "rgba(184,180,168,0.55)" }}
        >
          From corporate campuses to concert venues — we design security around your industry&apos;s
          specific risks, compliance needs, and operational rhythm.
        </p>
      </motion.div>

      <div
        className="absolute inset-y-0 left-0 w-28 md:w-48 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, #000000 0%, transparent 100%)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-28 md:w-48 z-10 pointer-events-none"
        style={{ background: "linear-gradient(270deg, #000000 0%, transparent 100%)" }}
      />

      <div className="space-y-3 relative z-0">
        {/* Top row — scrolls left → right */}
        <MarqueeRow items={rowOne} direction="ltr" startIndex={0} duration={38} />
        {/* Bottom row — scrolls right → left */}
        <MarqueeRow items={rowTwo} direction="rtl" startIndex={6} duration={44} />
      </div>
    </section>
  );
}
