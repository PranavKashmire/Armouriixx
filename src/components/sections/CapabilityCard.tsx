"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCinematicTilt } from "@/hooks/useCinematicTilt";
import type { CoreService } from "@/data/coreServices";
import "./CapabilityCard.css";

interface CapabilityCardProps {
  service: CoreService;
  total: number;
  index: number;
  imagePosition: "left" | "right";
  isHovered: boolean;
  isDimmed: boolean;
  isExpanded: boolean;
  isVisible: boolean;
  onHover: () => void;
  onHoverEnd: () => void;
  onOpen: () => void;
  enableTilt?: boolean;
  imageRef: (el: HTMLDivElement | null) => void;
  cardRef: (el: HTMLElement | null) => void;
}

export default function CapabilityCard({
  service,
  total,
  index,
  imagePosition,
  isHovered,
  isDimmed,
  isExpanded,
  isVisible,
  onHover,
  onHoverEnd,
  onOpen,
  enableTilt = false,
  imageRef,
  cardRef,
}: CapabilityCardProps) {
  const [showAltImage, setShowAltImage] = useState(false);
  const isInteractive = isHovered || isExpanded;
  const isHero = service.featured === true;
  const tiltEnabled = enableTilt && isInteractive;

  const { tiltRef, onPointerMove, onPointerLeave } = useCinematicTilt(tiltEnabled);

  useEffect(() => {
    if (!isInteractive) {
      setShowAltImage(false);
      return;
    }
    const t = window.setTimeout(() => setShowAltImage(true), 350);
    return () => window.clearTimeout(t);
  }, [isInteractive]);

  const setRefs = useCallback(
    (el: HTMLElement | null) => {
      cardRef(el);
    },
    [cardRef]
  );

  const setImageWrapRef = useCallback(
    (el: HTMLDivElement | null) => {
      imageRef(el);
    },
    [imageRef]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen();
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    onPointerMove(e);
    if (e.pointerType === "mouse") onHover();
  };

  const handlePointerLeave = () => {
    onPointerLeave();
    onHoverEnd();
  };

  return (
    <article
      ref={setRefs}
      id={service.id}
      className={cn(
        "cap-card",
        service.gridClass,
        service.minHeight,
        "cap-card--horizontal",
        imagePosition === "right" && "cap-card--image-right",
        isHero && "cap-card--hero",
        isVisible && "is-visible",
        isInteractive && "is-active",
        isDimmed && "is-dimmed",
        isExpanded && "is-expanded"
      )}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={() => onOpen()}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
      aria-label={`${service.title} — ${service.tagline}`}
    >
      <div className="cinema-index-rail" aria-hidden="true">
        <div
          className="cinema-index-rail__fill"
          style={{ animationDelay: `${index * 0.08 + 0.2}s` }}
        />
      </div>

      <div ref={tiltRef} className="cinema-tilt">
        <div className="cap-card__inner">
          <div className="cap-card__frame" aria-hidden="true" />
          <div className="cap-card__corner cap-card__corner--tl" aria-hidden="true" />
          <div className="cap-card__corner cap-card__corner--br" aria-hidden="true" />

          {isHero && (
            <div
              className={cn(
                "cap-card__hero-badge cinema-hero-float",
                isInteractive && "is-active"
              )}
              aria-hidden="true"
            >
              Flagship Operation
            </div>
          )}

          <div className="cap-card__media">
            <div className="cap-card__image-wrap" ref={setImageWrapRef}>
              <div className="cap-card__image-layer is-active">
                <Image
                  src={service.images[0].src}
                  alt={service.images[0].alt}
                  fill
                  sizes={
                    isHero
                      ? "(max-width: 1024px) 100vw, 55vw"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  }
                  className="cap-card__image"
                  priority={isHero}
                  loading={isHero ? "eager" : "lazy"}
                />
              </div>
              {service.images.length > 1 && (
                <div
                  className={cn(
                    "cap-card__image-layer cap-card__image-layer--alt",
                    showAltImage && "is-active"
                  )}
                >
                  <Image
                    src={service.images[1].src}
                    alt={service.images[1].alt}
                    fill
                    sizes={
                      isHero
                        ? "(max-width: 1024px) 100vw, 55vw"
                        : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    }
                    className="cap-card__image"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
            <div className="cap-card__overlay" />
            <div className="cinema-media-fx" aria-hidden="true">
              <div className="cinema-vignette" />
              <div className="cinema-grain" />
              <div className="cinema-scan" />
              <div className="cinema-sheen" />
            </div>
          </div>

          <div className="cap-card__content">
            <div className="cap-card__content-inner">
              <div className="cinema-story-line cinema-reveal cinema-reveal--1">
                <div className="cinema-story-line__bar" />
                <span className="cinema-story-line__label">Operation dossier</span>
              </div>

              <div className="cap-card__chapter cinema-reveal cinema-reveal--1">
                {service.storyChapter}
              </div>

              <div className="cap-card__hud cinema-reveal cinema-reveal--2">
                <span className="cap-card__ops">{service.opsCode}</span>
                <div className="cap-card__status">
                  <span
                    className={cn(
                      "cap-card__status-dot",
                      isInteractive && "cinema-status-pulse"
                    )}
                    aria-hidden="true"
                  />
                  <span className="cap-card__status-label">{service.statusLabel}</span>
                </div>
              </div>

              <p
                className={cn(
                  "cap-card__tagline cinema-reveal cinema-reveal--2",
                  isInteractive && "cinema-tagline-glow"
                )}
              >
                {service.tagline}
              </p>

              <div className="cap-card__number cinema-reveal cinema-reveal--3" aria-hidden="true">
                {service.number}
                <span> / {String(total).padStart(2, "0")}</span>
              </div>

              <h3 className="cap-card__title cinema-reveal cinema-reveal--3">
                {service.title}
              </h3>

              <p className="cap-card__desc cinema-reveal cinema-reveal--4">{service.desc}</p>

              <p className="cap-card__story-hook cinema-reveal cinema-reveal--4">
                {service.storyHook}
              </p>

              <ul className="cap-card__features" aria-label={`${service.title} capabilities`}>
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="cap-card__feature cinema-feature-stagger"
                  >
                    <span className="cap-card__feature-bullet" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="cap-card__cta cinema-reveal cinema-reveal--5">
                <span>Explore Operation</span>
                <ArrowRight className="cap-card__cta-arrow w-3.5 h-3.5" aria-hidden="true" />
              </div>

              {service.images.length > 1 && (
                <div className="cap-card__gallery-hint cinema-reveal cinema-reveal--5" aria-hidden="true">
                  {service.images.length} operational images — tap to open dossier
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
