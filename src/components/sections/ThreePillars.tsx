"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Target, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import BlurFadeIn from "@/components/ui/BlurFadeIn";
import StarBorder from "@/components/ui/StarBorder";

const pillars = [
  {
    id: "discipline",
    title: "Discipline",
    icon: Shield,
    desc: "Every guard undergoes rigorous background checks, training, and certification. Our operational protocols are strict, repeatable, and non-negotiable.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80",
  },
  {
    id: "precision",
    title: "Precision",
    icon: Target,
    desc: "GPS-tracked deployments, time-stamped digital reporting, and AI-assisted surveillance ensure zero blind spots and maximum accountability.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&q=80",
  },
  {
    id: "protection",
    title: "Protection",
    icon: Eye,
    desc: "We protect lives, assets, and reputations — whether it's a boardroom, an event venue, a luxury resort, or a critical infrastructure site.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
  },
];

export default function ThreePillars() {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragWidth, setDragWidth] = useState(0);
  const [cardWidth, setCardWidth] = useState(900);

  useEffect(() => {
    const updateDimensions = () => {
      const vw = window.innerWidth;
      const gutter = vw < 640 ? 32 : vw < 1024 ? 48 : 48;

      if (vw < 640) {
        setCardWidth(vw - gutter);
      } else if (vw < 1024) {
        setCardWidth(Math.min(600, vw - gutter));
      } else {
        setCardWidth(Math.min(900, vw - gutter * 2));
      }

      if (trackRef.current && containerRef.current) {
        setDragWidth(
          Math.max(0, trackRef.current.scrollWidth - containerRef.current.offsetWidth)
        );
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [active]);

  const next = () => setActive((p) => Math.min(p + 1, pillars.length - 1));
  const prev = () => setActive((p) => Math.max(p - 1, 0));
  const gap = 24;

  return (
    <section className="py-16 sm:py-24 bg-[var(--ink)] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] sm:h-[400px] bg-[var(--gold)]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mb-10 sm:mb-16">
        <BlurFadeIn>
          <SectionHeading
            eyebrow="Our Foundation"
            title="Three"
            titleHighlight="Pillars"
            subtitle="Everything we do is built on these three principles — non-negotiable, always active."
            className="mb-0"
          />
        </BlurFadeIn>
      </div>

      <div className="relative w-full overflow-x-hidden" ref={containerRef}>
        <motion.div
          ref={trackRef}
          className="flex gap-6 sm:gap-8 px-4 sm:px-6 lg:px-[max(1rem,calc(50vw-450px))]"
          initial={false}
          animate={{ x: -active * (cardWidth + gap) }}
          transition={{ type: "spring", stiffness: 200, damping: 30, mass: 1 }}
          drag="x"
          dragConstraints={{ right: 0, left: -dragWidth }}
          dragElastic={0.08}
          onDragEnd={(_, { offset, velocity }) => {
            const swipe = Math.abs(offset.x) * velocity.x;
            if (swipe < -8000 || offset.x < -cardWidth / 4) next();
            else if (swipe > 8000 || offset.x > cardWidth / 4) prev();
          }}
        >
          {pillars.map((pillar, idx) => {
            const isActive = active === idx;
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.id}
                className={`relative shrink-0 transition-all duration-700 ease-out ${
                  isActive
                    ? "opacity-100 scale-100"
                    : "opacity-50 sm:opacity-40 scale-[0.98] hover:opacity-70 cursor-pointer"
                }`}
                style={{ width: cardWidth }}
                onClick={() => !isActive && setActive(idx)}
              >
                <StarBorder
                  as="div"
                  className="star-border-block"
                  color="#DC2B1B"
                  speed={isActive ? "5s" : "7s"}
                  thickness={isActive ? 3 : 2}
                >
                  <div
                    className={`flex flex-col md:flex-row overflow-hidden glass transition-all duration-700 ease-out ${
                      isActive ? "shadow-[0_20px_40px_rgba(0,0,0,0.4)]" : ""
                    }`}
                  >
                    <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center relative z-10 bg-[var(--ink-2)] md:border-r border-white/5 border-b md:border-b-0">
                      <motion.div
                        initial={false}
                        animate={{ height: isActive ? "100%" : "0%" }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        className="absolute top-0 left-0 w-1 bg-gradient-to-b from-[var(--gold)]/60 to-[var(--gold-dark)]/10"
                      />

                      <motion.div
                        initial={false}
                        animate={{
                          scale: isActive ? 1 : 0.9,
                          rotate: isActive ? 0 : -10,
                        }}
                        transition={{ duration: 0.6, ease: "backOut" }}
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-5 sm:mb-8 transition-colors duration-500 ${
                          isActive
                            ? "bg-[var(--gold)]/10 text-[var(--gold)] shadow-[0_0_20px_rgba(220, 43, 27,0.3)]"
                            : "bg-white/5 text-[var(--cream-muted)]"
                        }`}
                      >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </motion.div>

                      <motion.h3
                        initial={false}
                        animate={{ x: isActive ? 0 : -10, opacity: isActive ? 1 : 0.7 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: isActive ? 0.1 : 0 }}
                        className="font-[var(--font-display)] text-3xl sm:text-4xl md:text-5xl text-[var(--cream)] tracking-widest mb-3 sm:mb-4"
                      >
                        {pillar.title}
                      </motion.h3>

                      <motion.p
                        initial={false}
                        animate={{ x: isActive ? 0 : -10, opacity: isActive ? 1 : 0.6 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: isActive ? 0.2 : 0 }}
                        className="text-[var(--cream-muted)] text-sm sm:text-base md:text-lg leading-relaxed font-[var(--font-body)]"
                      >
                        {pillar.desc}
                      </motion.p>
                    </div>

                    <div className="w-full md:w-1/2 h-[200px] sm:h-[250px] md:h-auto md:min-h-[280px] relative overflow-hidden bg-[var(--ink-4)]">
                      <motion.div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${pillar.image}')` }}
                        initial={false}
                        animate={{
                          scale: isActive ? 1.05 : 1.2,
                          filter: isActive ? "grayscale(0%) blur(0px)" : "grayscale(50%) blur(2px)",
                        }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-[var(--ink-2)] via-[var(--ink-2)]/20 to-transparent opacity-80" />
                    </div>
                  </div>
                </StarBorder>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 sm:mt-12 flex items-center justify-center gap-4 sm:gap-6">
        <button
          type="button"
          onClick={prev}
          disabled={active === 0}
          className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border transition-all duration-300 group shrink-0 ${
            active === 0
              ? "border-white/10 text-white/20 cursor-not-allowed"
              : "border-[var(--gold)]/30 text-[var(--cream)] hover:bg-[var(--gold)]/10 hover:border-[var(--gold)]"
          }`}
          aria-label="Previous Pillar"
        >
          <ChevronLeft className={`w-5 h-5 ${active !== 0 ? "group-hover:-translate-x-1 transition-transform" : ""}`} />
        </button>

        <div className="flex gap-2 sm:gap-3">
          {pillars.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActive(idx)}
              className="relative w-8 sm:w-10 h-2 bg-white/10 rounded-full overflow-hidden hover:bg-white/20 transition-colors"
              aria-label={`Go to pillar ${idx + 1}`}
            >
              {active === idx && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 bg-[var(--gold)] rounded-full shadow-[0_0_10px_rgba(220, 43, 27,0.5)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          disabled={active === pillars.length - 1}
          className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border transition-all duration-300 group shrink-0 ${
            active === pillars.length - 1
              ? "border-white/10 text-white/20 cursor-not-allowed"
              : "border-[var(--gold)]/30 text-[var(--cream)] hover:bg-[var(--gold)]/10 hover:border-[var(--gold)]"
          }`}
          aria-label="Next Pillar"
        >
          <ChevronRight className={`w-5 h-5 ${active !== pillars.length - 1 ? "group-hover:translate-x-1 transition-transform" : ""}`} />
        </button>
      </div>
    </section>
  );
}
