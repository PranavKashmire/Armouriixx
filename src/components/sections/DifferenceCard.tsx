"use client";

import { useCallback } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCinematicTilt } from "@/hooks/useCinematicTilt";
import type { DifferencePillar } from "@/data/armourixxDifference";
import "./DifferenceCard.css";

interface DifferenceCardProps {
  pillar: DifferencePillar;
  total: number;
  index: number;
  imagePosition: "left" | "right";
  isHovered: boolean;
  isDimmed: boolean;
  isVisible: boolean;
  onHover: () => void;
  onHoverEnd: () => void;
  onActivate?: () => void;
  enableTilt?: boolean;
  cardRef: (el: HTMLElement | null) => void;
  imageRef: (el: HTMLDivElement | null) => void;
}

export default function DifferenceCard({
  pillar,
  total,
  index,
  imagePosition,
  isHovered,
  isDimmed,
  isVisible,
  onHover,
  onHoverEnd,
  onActivate,
  enableTilt = false,
  cardRef,
  imageRef,
}: DifferenceCardProps) {
  const isHero = pillar.featured === true;
  const isActive = isHovered;
  const tiltEnabled = enableTilt && isActive;

  const { tiltRef, onPointerMove, onPointerLeave } = useCinematicTilt(tiltEnabled);

  const setRefs = useCallback(
    (el: HTMLElement | null) => cardRef(el),
    [cardRef]
  );

  const setImageWrapRef = useCallback(
    (el: HTMLDivElement | null) => imageRef(el),
    [imageRef]
  );

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    onPointerMove(e);
    if (e.pointerType === "mouse") onHover();
  };

  const handlePointerLeave = () => {
    onPointerLeave();
    onHoverEnd();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onActivate?.();
    }
  };

  return (
    <article
      ref={setRefs}
      id={pillar.id}
      className={cn(
        "diff-card",
        pillar.gridClass,
        pillar.minHeight,
        "diff-card--horizontal",
        imagePosition === "right" && "diff-card--image-right",
        isHero && "diff-card--hero",
        isVisible && "is-visible",
        isActive && "is-active",
        isDimmed && "is-dimmed"
      )}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={() => onActivate?.()}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-expanded={isActive}
      aria-label={`${pillar.title} — ${pillar.tagline}`}
    >
      <div className="cinema-index-rail" aria-hidden="true">
        <div
          className="cinema-index-rail__fill"
          style={{ animationDelay: `${index * 0.08 + 0.2}s` }}
        />
      </div>

      <div ref={tiltRef} className="cinema-tilt">
        <div className="diff-card__inner">
          <div className="diff-card__frame" aria-hidden="true" />
          <div className="diff-card__corner diff-card__corner--tl" aria-hidden="true" />
          <div className="diff-card__corner diff-card__corner--br" aria-hidden="true" />

          {isHero && (
            <div
              className={cn(
                "diff-card__hero-label cinema-hero-float",
                isActive && "is-active"
              )}
              aria-hidden="true"
            >
              Core Advantage
            </div>
          )}

          <div className="diff-card__media">
            <div className="diff-card__image-wrap" ref={setImageWrapRef}>
              <Image
                src={pillar.image}
                alt={pillar.imageAlt}
                fill
                sizes={
                  isHero
                    ? "(max-width: 1024px) 100vw, 55vw"
                    : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                }
                className="diff-card__image"
                priority={isHero}
              />
            </div>
            <div className="diff-card__overlay" />
            <div className="cinema-media-fx" aria-hidden="true">
              <div className="cinema-vignette" />
              <div className="cinema-grain" />
              <div className="cinema-scan" />
              <div className="cinema-sheen" />
            </div>
          </div>

          <div className="diff-card__content">
            <div className="diff-card__content-inner">
              <div className="cinema-story-line cinema-reveal cinema-reveal--1">
                <div className="cinema-story-line__bar" />
                <span className="cinema-story-line__label">Advantage brief</span>
              </div>

              <div className="diff-card__chapter cinema-reveal cinema-reveal--1">
                {pillar.chapter}
              </div>

              <div className="diff-card__meta cinema-reveal cinema-reveal--2">
                <span>{pillar.code}</span>
                <span className="diff-card__proof">{pillar.proof}</span>
              </div>

              <p
                className={cn(
                  "diff-card__tagline cinema-reveal cinema-reveal--2",
                  isActive && "cinema-tagline-glow"
                )}
              >
                {pillar.tagline}
              </p>

              <div className="diff-card__number cinema-reveal cinema-reveal--3" aria-hidden="true">
                {pillar.number}
                <span> / {String(total).padStart(2, "0")}</span>
              </div>

              <h3 className="diff-card__title cinema-reveal cinema-reveal--3">
                {pillar.title}
              </h3>
              <p className="diff-card__desc cinema-reveal cinema-reveal--4">{pillar.desc}</p>
              <p className="diff-card__story cinema-reveal cinema-reveal--4">{pillar.storyHook}</p>

              <div className="diff-card__cta cinema-reveal cinema-reveal--5">
                <span>Operational Standard</span>
                <ArrowUpRight className="diff-card__cta-icon w-3.5 h-3.5" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
