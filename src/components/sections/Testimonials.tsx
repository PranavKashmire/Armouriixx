"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import BlurFadeIn from "@/components/ui/BlurFadeIn";
import GlassCard from "@/components/ui/GlassCard";

const testimonials = [
  {
    name: "Corporate Security Lead",
    role: "IT Campus, Pune",
    stars: 5,
    quote:
      "For the first time, we had GPS-tracked patrols and digital incident logs on every shift. ARMOURIXX didn't just post guards — they gave us a command view of our security.",
    highlight: "Command Visibility",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&q=80",
  },
  {
    name: "Events Director",
    role: "Live Concert, Mumbai",
    stars: 5,
    quote:
      "5,000 attendees, zero incidents. Their crowd management was surgical — briefing, perimeter, VIP lanes, and exit control were executed like a planned operation.",
    highlight: "Zero Incidents",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1000&q=80",
  },
  {
    name: "Private Principal",
    role: "Executive Protection Client",
    stars: 5,
    quote:
      "Discreet, disciplined, and always ahead of the schedule. The close protection team integrates seamlessly — you feel protected, never surveilled.",
    highlight: "Discreet & Precise",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1000&q=80",
  },
  {
    name: "Hospitality GM",
    role: "Luxury Resort Operations",
    stars: 5,
    quote:
      "Guests never notice the security team — which is exactly what luxury hospitality demands. Seamless integration with our front-of-house operations.",
    highlight: "Invisible Presence",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1000&q=80",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAuto = () => {
    intervalRef.current = setInterval(() => {
      setActive((p) => (p + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    startAuto();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goTo = (i: number) => {
    setActive(i);
    if (intervalRef.current) clearInterval(intervalRef.current);
    startAuto();
  };

  const prev = () => goTo((active - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((active + 1) % testimonials.length);

  const t = testimonials[active];

  return (
    <section className="py-10 sm:py-12 md:py-16 bg-[var(--ink)] relative overflow-hidden">
      {/* Left image column — straight edge, fade into content (no slant line on photo) */}
      <div
        className="absolute top-0 left-0 h-full w-[34%] max-w-[420px] z-0 pointer-events-none hidden md:block"
        aria-hidden="true"
      >
        <div className="absolute inset-0 overflow-hidden">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out ${
                idx === active ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url('${item.image}')`,
                willChange: "opacity",
              }}
            />
          ))}
          {/* Fade image into dark content area */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(10,10,11,0.15) 0%, rgba(10,10,11,0.55) 55%, rgba(10,10,11,0.98) 100%)",
            }}
          />
        </div>

        {/* Vertical gold hairline at panel edge — on the dark side, not over the photo */}
        <div
          className="absolute top-[10%] bottom-[10%] right-0 w-px pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(212, 175, 55, 0.5) 25%, rgba(196, 30, 30, 0.4) 50%, rgba(212, 175, 55, 0.5) 75%, transparent 100%)",
          }}
        />
      </div>

      <div className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 font-[var(--font-display)] text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] leading-none text-[var(--gold)]/3 select-none pointer-events-none z-0 hidden sm:block">
        {(active + 1).toString().padStart(2, "0")}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="md:pl-[36%] lg:pl-[32%]">
          <BlurFadeIn className="mb-8">
            <SectionHeading
              eyebrow="Client Experiences"
              title="Proof in"
              titleHighlight="the Field"
              subtitle="Representative outcomes from corporate, events, hospitality, and private protection deployments across Maharashtra."
            />
          </BlurFadeIn>

          <div className="max-w-3xl">
            <GlassCard goldBorder className="p-5 sm:p-6 md:p-8 mb-5 sm:mb-6 relative">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[var(--gold)] fill-[var(--gold)]" />
                ))}
              </div>

              <span className="inline-block px-3 py-1 glass-gold text-[var(--gold)] text-xs tracking-widest uppercase font-bold rounded-sm mb-4">
                {t.highlight}
              </span>

              <blockquote className="font-[var(--font-display)] text-lg sm:text-xl md:text-2xl text-[var(--cream)] leading-tight mb-5 sm:mb-6 relative">
                <span className="text-[var(--gold)] text-4xl leading-none absolute -top-2 -left-2 opacity-40">
                  &ldquo;
                </span>
                {t.quote}
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-sm bg-[var(--ink-4)] border border-[var(--glass-border)] flex items-center justify-center text-[var(--gold)] font-bold text-lg shadow-inner">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-[var(--cream)] font-semibold text-sm">{t.name}</p>
                  <p className="text-[var(--cream-muted)] text-xs tracking-wide">{t.role}</p>
                </div>
              </div>
            </GlassCard>

            <p className="text-[var(--cream-muted)]/50 text-[10px] tracking-wider uppercase mb-4 font-[var(--font-body)]">
              Client details anonymized for privacy · Outcomes verified through operational logs
            </p>

            <div className="flex flex-col-reverse sm:flex-row items-center sm:items-center justify-between gap-4">
              <div className="flex gap-2 justify-center sm:justify-start">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`transition-all duration-300 rounded-full ${
                      i === active
                        ? "w-8 h-2 bg-[var(--gold)]"
                        : "w-2 h-2 bg-[var(--cream-muted)]/40 hover:bg-[var(--cream-muted)]"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-3 justify-center sm:justify-end">
                <button
                  onClick={prev}
                  className="w-10 h-10 glass rounded-sm flex items-center justify-center text-[var(--cream-muted)] hover:text-[var(--gold)] hover:border-[var(--gold)]/40 transition-all duration-200"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 glass rounded-sm flex items-center justify-center text-[var(--cream-muted)] hover:text-[var(--gold)] hover:border-[var(--gold)]/40 transition-all duration-200"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
