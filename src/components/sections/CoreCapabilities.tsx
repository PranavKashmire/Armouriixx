"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { coreServices } from "@/data/coreServices";
import CapabilityCard from "@/components/sections/CapabilityCard";
import ServiceLightbox from "@/components/sections/ServiceLightbox";
import { useCardScrollSpy } from "@/hooks/useCardScrollSpy";
import "./CoreCapabilities.css";

export default function CoreCapabilities() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridBgRef = useRef<HTMLDivElement>(null);
  const accentLineRef = useRef<HTMLDivElement>(null);

  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    coreServices.map(() => false)
  );
  const [headingVisible, setHeadingVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const scrollActiveIndex = useCardScrollSpy(cardRefs, coreServices.length);

  const setCardRef = useCallback((index: number) => (el: HTMLElement | null) => {
    cardRefs.current[index] = el;
  }, []);

  const setImageRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    imageRefs.current[index] = el;
  }, []);

  const skipUrlSyncRef = useRef(true);

  const syncHash = useCallback((index: number | null) => {
    if (typeof window === "undefined") return;
    const path = window.location.pathname;
    if (index === null) {
      if (window.location.hash) history.replaceState(null, "", path);
      return;
    }
    const hash = `#${coreServices[index].id}`;
    if (window.location.hash !== hash) {
      history.replaceState(null, "", `${path}${hash}`);
    }
  }, []);

  const openService = useCallback((index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  }, []);

  const closeService = useCallback(() => {
    setExpandedIndex(null);
  }, []);

  useEffect(() => {
    if (skipUrlSyncRef.current) return;
    syncHash(expandedIndex);
  }, [expandedIndex, syncHash]);

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) {
        setExpandedIndex(null);
        return;
      }
      const idx = coreServices.findIndex((s) => s.id === hash);
      if (idx >= 0) setExpandedIndex(idx);
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    requestAnimationFrame(() => {
      skipUrlSyncRef.current = false;
    });
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  useEffect(() => {
    const mqDesktop = window.matchMedia("(min-width: 1024px)");

    const updateDesktop = () => setIsDesktop(mqDesktop.matches);

    updateDesktop();
    mqDesktop.addEventListener("change", updateDesktop);

    return () => {
      mqDesktop.removeEventListener("change", updateDesktop);
    };
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setHeadingVisible(true);
      setVisibleCards(coreServices.map(() => true));
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
          { y: 28, opacity: 0 },
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
            y: 40,
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
                start: "top 80%",
                end: "top 30%",
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
            start: "top 88%",
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
            { y: 40, opacity: 0, clipPath: "inset(6% 4% 6% 4% round 4px)" },
            {
              y: 0,
              opacity: 1,
              clipPath: "inset(0% 0% 0% 0% round 4px)",
              duration: 0.95,
              delay: i * 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                once: true,
              },
            }
          );

          if (imageWrap) {
            const activeImg = imageWrap.querySelector(
              ".cap-card__image-layer.is-active .cap-card__image"
            ) ?? imageWrap.querySelector(".cap-card__image");

            gsap.fromTo(
              activeImg,
              { scale: 1.12 },
              {
                scale: 1,
                duration: 1.4,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 88%",
                  once: true,
                },
              }
            );

            if (!window.matchMedia("(max-width: 1023px)").matches) {
              gsap.to(imageWrap, {
                y: -24,
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1.5,
                },
              });
            }
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

  const handleHover = (index: number) => {
    if (isDesktop) setHoverIndex(index);
  };

  const handleHoverEnd = () => {
    if (isDesktop) setHoverIndex(null);
  };

  return (
    <section
      ref={sectionRef}
      className="core-capabilities section-pad"
      aria-labelledby="core-capabilities-heading"
    >
      <div className="core-capabilities__grid-bg" ref={gridBgRef} aria-hidden="true" />
      <div className="core-capabilities__grain" aria-hidden="true" />
      <div className="core-capabilities__accent-line" ref={accentLineRef} aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <span className="core-capabilities__section-meta">02 / CAPABILITIES</span>
          <span className="core-capabilities__section-meta hidden sm:block">SEC-OPS / MAHARASHTRA</span>
        </div>

        <div
          ref={headingRef}
          className={cn(
            "core-capabilities__heading max-w-4xl mb-12 sm:mb-16 lg:mb-20",
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
              CORE CAPABILITIES
            </span>
          </div>

          <h2
            id="core-capabilities-heading"
            className="font-[var(--font-display)] text-[clamp(2rem,6vw,4.5rem)] leading-[0.95] tracking-wide text-[var(--cream)] mb-5 sm:mb-6"
          >
            Security Built Around{" "}
            <span className="text-gradient-gold">Every Threat.</span>
          </h2>

          <p className="text-[var(--cream-muted)] text-base sm:text-lg leading-relaxed font-[var(--font-body)] max-w-2xl">
            From executive protection to large-scale event security, every operation is
            engineered with precision, intelligence, and complete accountability.
          </p>

          <div
            className="mt-6 h-px w-16 bg-gradient-to-r from-[var(--gold-dark)] to-[var(--gold-light)]"
            aria-hidden="true"
          />
        </div>

        <div
          className="core-capabilities__cards relative"
          onMouseLeave={() => isDesktop && setHoverIndex(null)}
        >
          <div className="cinema-section-timeline" aria-hidden="true">
            <div className="cinema-section-timeline__track" />
            <div className="cinema-section-timeline__dots">
              {coreServices.map((service, i) => (
                <div
                  key={service.id}
                  className={cn(
                    "cinema-section-timeline__dot",
                    visibleCards[i] && "is-revealed",
                    scrollActiveIndex === i && "is-active"
                  )}
                />
              ))}
            </div>
          </div>

          {coreServices.map((service, i) => (
            <CapabilityCard
              key={service.id}
              service={service}
              total={coreServices.length}
              index={i}
              imagePosition={i % 2 === 0 ? "left" : "right"}
              isHovered={hoverIndex === i}
              isDimmed={
                isDesktop &&
                hoverIndex !== null &&
                hoverIndex !== i &&
                expandedIndex === null
              }
              isExpanded={expandedIndex === i}
              isVisible={visibleCards[i]}
              onHover={() => handleHover(i)}
              onHoverEnd={handleHoverEnd}
              onOpen={() => openService(i)}
              enableTilt={isDesktop}
              imageRef={setImageRef(i)}
              cardRef={setCardRef(i)}
            />
          ))}
        </div>
      </div>

      {expandedIndex !== null && (
        <ServiceLightbox
          service={coreServices[expandedIndex]}
          total={coreServices.length}
          onClose={closeService}
        />
      )}
    </section>
  );
}
