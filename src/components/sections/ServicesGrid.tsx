"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import BlurFadeIn from "@/components/ui/BlurFadeIn";
import AccordionGallery from "@/components/ui/AccordionGallery";

const galleryItems = [
  {
    id: "vip-protection",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&h=1200&fit=crop",
    label: "VIP & Executive Protection",
    alt: "VIP Executive Protection",
  },
  {
    id: "corporate-security-programs",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&h=1200&fit=crop",
    label: "Corporate Security",
    alt: "Corporate Security",
  },
  {
    id: "event-security",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&h=1200&fit=crop",
    label: "Event Security",
    alt: "Event Security",
  },
  {
    id: "surveillance-control-room",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&h=1200&fit=crop",
    label: "Surveillance & Control Room",
    alt: "Surveillance Control Room",
  },
  {
    id: "manned-guarding",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=900&h=1200&fit=crop",
    label: "Manned Guarding",
    alt: "Manned Guarding",
  },
];

const serviceDetails = [
  {
    title: "VIP & Executive Protection",
    desc: "Close protection for CEOs, politicians, celebrities, and diplomats — discreet, professional, and always ahead of the threat.",
    tag: "High-Value Personnel",
  },
  {
    title: "Corporate Security",
    desc: "Manned guarding and access control for offices, business parks, banks, and MNCs.",
    tag: "Office & Commercial",
  },
  {
    title: "Event Security",
    desc: "Crowd management, perimeter control, and VIP escort for concerts, award shows, launches, and weddings.",
    tag: "Crowd & Perimeter",
  },
  {
    title: "Surveillance & Control Room",
    desc: "AI-assisted CCTV monitoring, 24/7 control room operations, and real-time digital incident reporting.",
    tag: "AI-Assisted 24/7",
  },
  {
    title: "Manned Guarding",
    desc: "Trained guards stationed at your premises 24/7 — each equipped with body-worn cameras for full accountability.",
    tag: "Body-Cam Equipped",
  },
];

export default function ServicesGrid() {
  const [galleryHeight, setGalleryHeight] = useState(520);
  const [galleryTrigger, setGalleryTrigger] = useState<"hover" | "click">("hover");
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const isMobile = w < 768;
      setGalleryHeight(
        isMobile ? (w < 640 ? 320 : 380) : w < 1024 ? 420 : 520
      );
      setGalleryTrigger(isMobile ? "click" : "hover");
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const isClickMode = galleryTrigger === "click";

  return (
    <section
      className="relative overflow-hidden py-[clamp(3rem,8vw,8rem)]"
      style={{ background: "linear-gradient(180deg, var(--ink) 0%, var(--slate) 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(220, 43, 27,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <BlurFadeIn className="mb-10 sm:mb-14">
          <SectionHeading
            eyebrow="What We Do"
            title="Security"
            titleHighlight="Solutions"
            subtitle={
              isClickMode
                ? "Six core capabilities across 12 industries — tap to explore each operation."
                : "Six core capabilities across 12 industries — hover to explore each operation."
            }
          />
        </BlurFadeIn>

        <BlurFadeIn delay={150}>
          <AccordionGallery
            items={galleryItems}
            defaultIndex={0}
            activeIndex={activeService}
            onActiveChange={setActiveService}
            accentColor="#DC2B1B"
            overlayColor="#000000"
            textColor="#F5F3EC"
            height={galleryHeight}
            gap={6}
            radius={14}
            expandRatio={0.48}
            duration={0.55}
            ease="power3.out"
            parallax={0.45}
            tilt={7}
            stagger={0.06}
            trigger={galleryTrigger}
            orientation={isClickMode ? "vertical" : "horizontal"}
            showLabels={true}
            grayscale={true}
          />
        </BlurFadeIn>

        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0">
          {serviceDetails.map((s, i) => {
            const isActive = i === activeService;
            return (
            <BlurFadeIn key={i} delay={200 + i * 60}>
              <button
                type="button"
                onClick={() => setActiveService(i)}
                onMouseEnter={() => setActiveService(i)}
                aria-pressed={isActive}
                aria-label={`${s.title} — ${s.tag}`}
                className={`group relative flex flex-col gap-2 px-4 sm:px-5 py-5 sm:py-6 border-t sm:border-t-0 sm:border-l transition-colors duration-400 text-left w-full min-h-[44px] cursor-pointer ${
                  isActive
                    ? "border-[rgba(220, 43, 27,0.55)] bg-[rgba(220, 43, 27,0.07)]"
                    : "border-[rgba(220, 43, 27,0.12)] hover:border-[rgba(220, 43, 27,0.4)]"
                }`}
              >
                <span
                  className="font-[var(--font-display)] text-xs transition-colors duration-300"
                  style={{ color: isActive ? "rgba(220, 43, 27,0.9)" : "rgba(220, 43, 27,0.4)", letterSpacing: "0.2em" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="text-[9px] font-bold uppercase tracking-widest font-[var(--font-body)] transition-colors duration-300"
                  style={{ color: isActive ? "rgba(220, 43, 27,0.95)" : "rgba(220, 43, 27,0.65)" }}
                >
                  {s.tag}
                </span>
                <h3
                  className={`font-[var(--font-display)] text-base sm:text-lg tracking-wide leading-tight transition-colors duration-300 ${
                    isActive ? "text-[var(--gold)]" : "text-[var(--cream)] group-hover:text-[var(--gold)]"
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`font-[var(--font-body)] text-xs leading-relaxed text-[rgba(184,180,168,0.7)] transition-all duration-400 ${
                    isActive
                      ? "max-h-24 opacity-100"
                      : "md:max-h-0 md:overflow-hidden md:opacity-0 md:group-hover:max-h-24 md:group-hover:opacity-100"
                  }`}
                >
                  {s.desc}
                </p>
                <div
                  className={`absolute bottom-0 left-0 h-px transition-all duration-500 hidden md:block ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                  style={{
                    background: "linear-gradient(90deg, #DC2B1B, rgba(220, 43, 27,0))",
                  }}
                />
              </button>
            </BlurFadeIn>
            );
          })}
        </div>

        <BlurFadeIn className="mt-10 sm:mt-12 text-center" delay={600}>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] transition-colors duration-300 hover:text-[var(--gold)] px-2"
            style={{ color: "rgba(184,180,168,0.55)" }}
          >
            View all 12 industries we serve
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </BlurFadeIn>
      </div>
    </section>
  );
}
