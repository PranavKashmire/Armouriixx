"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Flag, Building2, Users, Cpu, Globe, ChevronLeft, ChevronRight } from "lucide-react";
import AccordionGallery from "@/components/ui/AccordionGallery";

/* ─── Data ───────────────────────────────────────────────────── */
const milestones = [
  {
    index: 0,
    year: "2026",
    tag: "The Beginning",
    Icon: Flag,
    title: "ARMOURIXX Security Founded",
    story:
      "Akshay Sanjay Bhote established ARMOURIXX Security in Maharashtra with a bold conviction — that elite protection should be accessible, accountable, and always a step ahead of the threat. What started as a vision became Maharashtra's fastest-growing professional security firm.",
    stat: { value: "Day 1", label: "of a legacy" },
    image: "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=900&q=80",
    alt: "Handshake founding moment",
  },
  {
    index: 1,
    year: "2026",
    tag: "First Mandate",
    Icon: Building2,
    title: "First Enterprise Client Onboarded",
    story:
      "Within weeks of inception, ARMOURIXX secured its first corporate security mandate in Pune — validating the founder's vision. A demanding enterprise environment required immaculate execution, and ARMOURIXX delivered, earning its first long-term retainer.",
    stat: { value: "#1", label: "corporate mandate" },
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80",
    alt: "Corporate office building",
  },
  {
    index: 2,
    year: "2026",
    tag: "Rapid Scale",
    Icon: Users,
    title: "50+ Guards Deployed",
    story:
      "ARMOURIXX rapidly grew its force to 50+ certified, background-verified security personnel — each trained to the firm's non-negotiable operational standards. Every hire undergoes rigorous vetting, physical fitness assessment, and situational awareness training before deployment.",
    stat: { value: "50+", label: "elite guards" },
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80",
    alt: "Security team in formation",
  },
  {
    index: 3,
    year: "2026",
    tag: "Tech Integration",
    Icon: Cpu,
    title: "Body-Cam & GPS Program Launched",
    story:
      "ARMOURIXX became one of Maharashtra's first security firms to fully integrate body-cam and GPS tracking across all field deployments. Real-time monitoring, timestamped reporting, and digital accountability turned every shift into a transparent, auditable operation.",
    stat: { value: "100%", label: "tracked shifts" },
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=900&q=80",
    alt: "Technology monitoring dashboard",
  },
  {
    index: 4,
    year: "Soon",
    tag: "Next Chapter",
    Icon: Globe,
    title: "PAN India Expansion",
    story:
      "The next frontier: ARMOURIXX is positioned to extend its elite security footprint across all major Indian cities. With established operational frameworks, technology infrastructure, and a rapidly growing client portfolio, the PAN India mandate is within reach.",
    stat: { value: "∞", label: "cities to protect" },
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=900&q=80",
    alt: "India map aerial view",
  },
];

const accordionItems = milestones.map((m) => ({
  image: m.image,
  label: m.title,
  alt: m.alt,
}));

const CONTENT_VARIANTS = {
  enter: { opacity: 0, y: 22, filter: "blur(6px)" },
  center: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -14,
    filter: "blur(4px)",
    transition: { duration: 0.28, ease: [0.4, 0, 1, 1] as const },
  },
};

/* ─── Step dot nav ───────────────────────────────────────────── */
function StepNav({
  active,
  count,
  onChange,
}: {
  active: number;
  count: number;
  onChange: (i: number) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onChange(i)}
          aria-label={`Go to milestone ${i + 1}`}
          className="relative flex items-center justify-center h-6 px-1"
        >
          <motion.span
            className="block rounded-full bg-[var(--gold)]"
            animate={{
              width: i === active ? 28 : 8,
              height: 8,
              opacity: i === active ? 1 : 0.3,
              boxShadow: i === active
                ? "0 0 10px rgba(220, 43, 27,0.7)"
                : "none",
            }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          />
        </button>
      ))}
    </div>
  );
}

/* ─── Progress bar ───────────────────────────────────────────── */
function ProgressBar({ active, total, autoMs }: { active: number; total: number; autoMs: number }) {
  return (
    <div className="w-full h-px bg-white/10 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-[var(--gold-dark)] via-[var(--gold)] to-[var(--gold-light)] rounded-full"
        animate={{ width: `${((active + 1) / total) * 100}%` }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

/* ─── Main export ────────────────────────────────────────────── */
export default function MilestonesTimeline() {
  const [active, setActive] = useState(0);
  const [isUserControlled, setIsUserControlled] = useState(false);
  const [galleryHeight, setGalleryHeight] = useState(420);
  const [galleryTrigger, setGalleryTrigger] = useState<"hover" | "click">("hover");
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const AUTO_MS = 5500;

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const isMobile = w < 768;
      setGalleryHeight(
        isMobile ? (w < 640 ? 320 : 380) : w < 1024 ? 360 : 420
      );
      setGalleryTrigger(isMobile ? "click" : "hover");
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const isClickMode = galleryTrigger === "click";

  // Two-way change handler — shared by accordion clicks, list buttons, arrows
  const handleChange = useCallback((i: number) => {
    setActive(i);
    setIsUserControlled(true);
  }, []);

  // Auto-advance: pauses for 8s after any user interaction
  useEffect(() => {
    if (!isUserControlled) {
      const id = setInterval(() => {
        setActive((p) => (p + 1) % milestones.length);
      }, AUTO_MS);
      return () => clearInterval(id);
    }
    const resume = setTimeout(() => setIsUserControlled(false), 8000);
    return () => clearTimeout(resume);
  }, [isUserControlled]);

  const prev = () => handleChange(Math.max(active - 1, 0));
  const next = () => handleChange(Math.min(active + 1, milestones.length - 1));
  const m = milestones[active];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[var(--ink)] overflow-hidden"
      style={{ paddingTop: "clamp(4rem,10vw,8rem)", paddingBottom: "clamp(4rem,10vw,8rem)" }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[var(--gold)]/4 blur-[130px] rounded-full" />
      </div>
      <div className="scan-line" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* ── Heading ──────────────────────────────────────────── */}
        <motion.div
          className="mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[var(--gold)] text-[0.65rem] tracking-[0.5em] uppercase font-semibold mb-4">
            Our Journey
          </p>
          <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,8vw,7rem)] leading-none text-[var(--cream)]">
            MILESTONES <span className="text-gradient-gold">&amp; GROWTH</span>
          </h2>
          <p className="mt-4 text-[var(--cream-muted)] max-w-lg font-[var(--font-body)] text-base leading-relaxed">
            Every chapter of ARMOURIXX&apos;s story is built on relentless execution, uncompromising
            standards, and a clear vision of where we are headed next.
            {isClickMode ? " Tap a milestone to explore each chapter." : " Hover to explore each chapter."}
          </p>
        </motion.div>

        {/* ── Accordion Gallery (fully controlled) ─────────────── */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <AccordionGallery
            items={accordionItems}
            activeIndex={active}
            onActiveChange={handleChange}
            accentColor="#DC2B1B"
            overlayColor="#000000"
            textColor="#F5F3EC"
            height={galleryHeight}
            gap={8}
            radius={8}
            expandRatio={0.5}
            duration={0.55}
            ease="power3.out"
            parallax={0.6}
            tilt={6}
            stagger={0.06}
            trigger={galleryTrigger}
            orientation={isClickMode ? "vertical" : "horizontal"}
            showLabels
            grayscale
          />
        </motion.div>

        {/* ── Progress bar ──────────────────────────────────────── */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <ProgressBar active={active} total={milestones.length} autoMs={AUTO_MS} />
        </motion.div>

        {/* ── Content + sidebar ────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_320px] gap-8 sm:gap-10 md:gap-16 items-start">

          {/* Story panel — single AnimatePresence for clean exit/enter */}
          <div className="relative min-h-[240px] sm:min-h-[300px] order-2 md:order-1">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                variants={CONTENT_VARIANTS}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex flex-col gap-5"
              >
                {/* Eyebrow */}
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-9 h-9 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/30 flex items-center justify-center"
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.05, ease: "backOut" }}
                  >
                    <m.Icon className="w-4 h-4 text-[var(--gold)]" />
                  </motion.div>
                  <p className="text-[var(--gold)] text-[0.65rem] tracking-[0.45em] uppercase font-semibold">
                    {m.tag} · {m.year}
                  </p>
                </div>

                {/* Title */}
                <h3 className="font-[var(--font-display)] text-[clamp(2rem,4vw,3.5rem)] leading-none text-[var(--cream)]">
                  {m.title}
                </h3>

                {/* Gold rule */}
                <motion.div
                  className="w-16 h-0.5 bg-gradient-to-r from-[var(--gold)] to-[var(--gold-dark)]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  style={{ originX: 0 }}
                />

                {/* Story */}
                <p className="text-[var(--cream-muted)] text-base md:text-lg leading-relaxed font-[var(--font-body)] max-w-xl">
                  {m.story}
                </p>

                {/* Stat */}
                <motion.div
                  className="flex flex-col items-start pt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.35 }}
                >
                  <span className="font-[var(--font-display)] text-[clamp(2.5rem,5vw,4rem)] leading-none text-gradient-gold tracking-widest">
                    {m.stat.value}
                  </span>
                  <span className="text-[var(--cream-muted)] text-xs tracking-[0.3em] uppercase font-semibold mt-1">
                    {m.stat.label}
                  </span>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right sidebar — milestone list + nav */}
          <motion.div
            className="flex flex-col gap-4 sm:gap-6 order-1 md:order-2"
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Milestone list */}
            <div className="flex flex-col gap-1">
              {milestones.map((item, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={item.index}
                    type="button"
                    onClick={() => handleChange(i)}
                    onMouseEnter={() => {
                      if (!isClickMode) handleChange(i);
                    }}
                    className="group relative flex items-center gap-4 text-left w-full py-3 px-4 rounded-sm transition-colors duration-300 overflow-hidden min-h-[44px]"
                  >
                    {/* Active background fill */}
                    <motion.span
                      className="absolute inset-0 rounded-sm bg-[var(--gold)]/5 border border-[var(--gold)]/25"
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Glow dot */}
                    <motion.span
                      className="relative flex-shrink-0 w-2 h-2 rounded-full"
                      animate={{
                        backgroundColor: isActive ? "#DC2B1B" : "rgba(255,255,255,0.2)",
                        boxShadow: isActive ? "0 0 8px rgba(220, 43, 27,0.9)" : "none",
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Text */}
                    <span className="relative flex-1 min-w-0">
                      <motion.span
                        className="block text-[0.6rem] tracking-[0.3em] uppercase font-semibold mb-0.5"
                        animate={{ color: isActive ? "#DC2B1B" : "#B8B4A8" }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.year} · {item.tag}
                      </motion.span>
                      <motion.span
                        className="block text-sm font-[var(--font-display)] tracking-wide leading-tight truncate"
                        animate={{ color: isActive ? "#F5F3EC" : "#B8B4A8" }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.title}
                      </motion.span>
                    </span>

                    {/* Right gold bar */}
                    <motion.span
                      className="relative flex-shrink-0 w-0.5 rounded-full bg-[var(--gold)]"
                      animate={{
                        height: isActive ? 32 : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </button>
                );
              })}
            </div>

            {/* Prev / Next + dots */}
            <div className="flex items-center gap-3 pt-2 border-t border-white/5">
              <button
                onClick={prev}
                disabled={active === 0}
                className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 group ${
                  active === 0
                    ? "border-white/10 text-white/20 cursor-not-allowed"
                    : "border-[var(--gold)]/30 text-[var(--cream)] hover:bg-[var(--gold)]/10 hover:border-[var(--gold)]"
                }`}
                aria-label="Previous milestone"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex-1">
                <StepNav active={active} count={milestones.length} onChange={handleChange} />
              </div>

              <button
                onClick={next}
                disabled={active === milestones.length - 1}
                className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 group ${
                  active === milestones.length - 1
                    ? "border-white/10 text-white/20 cursor-not-allowed"
                    : "border-[var(--gold)]/30 text-[var(--cream)] hover:bg-[var(--gold)]/10 hover:border-[var(--gold)]"
                }`}
                aria-label="Next milestone"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
