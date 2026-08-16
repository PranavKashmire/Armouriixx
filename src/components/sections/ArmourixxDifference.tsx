"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { armourixxDifference } from "@/data/armourixxDifference";
import DifferenceCard from "@/components/sections/DifferenceCard";
import "./ArmourixxDifference.css";

export default function ArmourixxDifference() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridBgRef = useRef<HTMLDivElement>(null);
  const accentLineRef = useRef<HTMLDivElement>(null);

  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    armourixxDifference.map(() => false)
  );
  const [headingVisible, setHeadingVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const setCardRef = useCallback((index: number) => (el: HTMLElement | null) => {
    cardRefs.current[index] = el;
  }, []);

  const setImageRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    imageRefs.current[index] = el;
  }, []);

  useEffect(() => {
    const mqDesktop = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mqDesktop.matches);
    update();
    mqDesktop.addEventListener("change", update);
    return () => mqDesktop.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setHeadingVisible(true);
      setVisibleCards(armourixxDifference.map(() => true));
      return;
    }

    let ctx: { revert: () => void } | undefined;
    let killed = false;

    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (killed) return;

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const section = sectionRef.current;
        const heading = headingRef.current;
        const gridBg = gridBgRef.current;
        const accentLine = accentLineRef.current;

        if (!section || !heading) return;

        ScrollTrigger.create({
          trigger: section,
          start: "top 75%",
          once: true,
          onEnter: () => setHeadingVisible(true),
        });

        gsap.fromTo(
          heading,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              once: true,
            },
          }
        );

        if (gridBg) {
          gsap.to(gridBg, {
            y: 32,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          });
        }

        if (accentLine) {
          gsap.fromTo(
            accentLine,
            { width: "0%" },
            {
              width: "100%",
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top 82%",
                end: "top 35%",
                scrub: 1,
              },
            }
          );
        }

        cardRefs.current.forEach((card, i) => {
          if (!card) return;

          const imageWrap = imageRefs.current[i];

          ScrollTrigger.create({
            trigger: card,
            start: "top 90%",
            once: true,
            onEnter: () => {
              setVisibleCards((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            },
          });

          gsap.fromTo(
            card,
            { y: 28, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.85,
              delay: i * 0.09,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                once: true,
              },
            }
          );

          if (imageWrap) {
            const img = imageWrap.querySelector(".diff-card__image");
            if (img) {
              gsap.fromTo(
                img,
                { scale: 1.1 },
                {
                  scale: 1,
                  duration: 1.3,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                    once: true,
                  },
                }
              );
            }

            gsap.to(imageWrap, {
              y: -18,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.4,
              },
            });
          }
        });
      }, sectionRef);

      ScrollTrigger.refresh();
    };

    init();

    return () => {
      killed = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="armourixx-difference section-pad"
      aria-labelledby="armourixx-difference-heading"
    >
      <div className="armourixx-difference__grid-bg" ref={gridBgRef} aria-hidden="true" />
      <div className="armourixx-difference__grain" aria-hidden="true" />
      <div className="armourixx-difference__accent-line" ref={accentLineRef} aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <span className="armourixx-difference__section-meta">03 / ADVANTAGE</span>
          <span className="armourixx-difference__section-meta hidden sm:block">WHY ARMOURIXX</span>
        </div>

        <div
          ref={headingRef}
          className={cn(
            "armourixx-difference__heading max-w-3xl mb-12 sm:mb-16 lg:mb-20",
            headingVisible && "is-visible"
          )}
        >
          <div className="flex items-center gap-3 mb-5">
            <div
              className="h-px w-10"
              style={{
                background: "linear-gradient(90deg, rgba(201,162,39,0.7), rgba(201,162,39,0.2))",
              }}
            />
            <span
              className="font-[var(--font-body)] text-[9px] sm:text-[10px] font-semibold uppercase"
              style={{ color: "var(--gold)", letterSpacing: "0.28em" }}
            >
              OUR ADVANTAGE
            </span>
          </div>

          <h2
            id="armourixx-difference-heading"
            className="font-[var(--font-display)] text-[clamp(2rem,6vw,4.25rem)] leading-[0.95] tracking-wide text-[var(--cream)]"
          >
            The{" "}
            <span className="text-gradient-gold">ARMOURIXX Difference</span>
          </h2>

          <p className="armourixx-difference__intro">
            We don&apos;t compete on price or headcount. We compete on precision, accountability,
            and the quiet confidence that every operation is documented, trained, and ready.
          </p>

          <div
            className="mt-6 h-px w-16 bg-gradient-to-r from-[var(--gold-dark)] to-[var(--gold-light)]"
            aria-hidden="true"
          />
        </div>

        <div
          className="armourixx-difference__cards"
          onMouseLeave={() => isDesktop && setHoverIndex(null)}
        >
          {armourixxDifference.map((pillar, i) => (
            <DifferenceCard
              key={pillar.id}
              pillar={pillar}
              total={armourixxDifference.length}
              imagePosition={i % 2 === 0 ? "left" : "right"}
              isHovered={hoverIndex === i}
              isDimmed={isDesktop && hoverIndex !== null && hoverIndex !== i}
              isVisible={visibleCards[i]}
              onHover={() => isDesktop && setHoverIndex(i)}
              onHoverEnd={() => isDesktop && setHoverIndex(null)}
              cardRef={setCardRef(i)}
              imageRef={setImageRef(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
