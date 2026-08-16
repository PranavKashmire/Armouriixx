"use client";

import { useCallback } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { DifferencePillar } from "@/data/armourixxDifference";
import "./DifferenceCard.css";

interface DifferenceCardProps {
  pillar: DifferencePillar;
  total: number;
  imagePosition: "left" | "right";
  isHovered: boolean;
  isDimmed: boolean;
  isVisible: boolean;
  onHover: () => void;
  onHoverEnd: () => void;
  cardRef: (el: HTMLElement | null) => void;
  imageRef: (el: HTMLDivElement | null) => void;
}

export default function DifferenceCard({
  pillar,
  total,
  imagePosition,
  isHovered,
  isDimmed,
  isVisible,
  onHover,
  onHoverEnd,
  cardRef,
  imageRef,
}: DifferenceCardProps) {
  const isHero = pillar.featured === true;
  const isActive = isHovered;

  const setRefs = useCallback(
    (el: HTMLElement | null) => cardRef(el),
    [cardRef]
  );

  const setImageWrapRef = useCallback(
    (el: HTMLDivElement | null) => imageRef(el),
    [imageRef]
  );

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
      onMouseEnter={onHover}
      onMouseLeave={onHoverEnd}
      tabIndex={0}
      aria-label={`${pillar.title} — ${pillar.tagline}`}
    >
      <div className="diff-card__inner">
        <div className="diff-card__frame" aria-hidden="true" />
        <div className="diff-card__corner diff-card__corner--tl" aria-hidden="true" />
        <div className="diff-card__corner diff-card__corner--br" aria-hidden="true" />

        {isHero && (
          <div className="diff-card__hero-label" aria-hidden="true">
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
        </div>

        <div className="diff-card__content">
          <div className="diff-card__content-inner">
            <div className="diff-card__chapter">{pillar.chapter}</div>

            <div className="diff-card__meta">
              <span>{pillar.code}</span>
              <span className="diff-card__proof">{pillar.proof}</span>
            </div>

            <p className="diff-card__tagline">{pillar.tagline}</p>

            <div className="diff-card__number" aria-hidden="true">
              {pillar.number}
              <span> / {String(total).padStart(2, "0")}</span>
            </div>

            <h3 className="diff-card__title">{pillar.title}</h3>
            <p className="diff-card__desc">{pillar.desc}</p>
            <p className="diff-card__story">{pillar.storyHook}</p>

            <div className="diff-card__cta">
              <span>Operational Standard</span>
              <ArrowUpRight className="diff-card__cta-icon w-3.5 h-3.5" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
