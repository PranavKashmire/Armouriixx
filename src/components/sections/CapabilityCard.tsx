"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CoreService } from "@/data/coreServices";
import "./CapabilityCard.css";

interface CapabilityCardProps {
  service: CoreService;
  total: number;
  imagePosition: "left" | "right";
  isHovered: boolean;
  isDimmed: boolean;
  isExpanded: boolean;
  isVisible: boolean;
  onHover: () => void;
  onHoverEnd: () => void;
  onOpen: () => void;
  imageRef: (el: HTMLDivElement | null) => void;
  cardRef: (el: HTMLElement | null) => void;
}

export default function CapabilityCard({
  service,
  total,
  imagePosition,
  isHovered,
  isDimmed,
  isExpanded,
  isVisible,
  onHover,
  onHoverEnd,
  onOpen,
  imageRef,
  cardRef,
}: CapabilityCardProps) {
  const [showAltImage, setShowAltImage] = useState(false);
  const isInteractive = isHovered || isExpanded;
  const isHero = service.featured === true;

  useEffect(() => {
    if (!isHovered) {
      setShowAltImage(false);
      return;
    }
    const t = window.setTimeout(() => setShowAltImage(true), 400);
    return () => window.clearTimeout(t);
  }, [isHovered]);

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
      onMouseEnter={onHover}
      onMouseLeave={onHoverEnd}
      onClick={() => onOpen()}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
      aria-label={`${service.title} — ${service.tagline}`}
    >
      <div className="cap-card__inner">
        <div className="cap-card__frame" aria-hidden="true" />
        <div className="cap-card__corner cap-card__corner--tl" aria-hidden="true" />
        <div className="cap-card__corner cap-card__corner--br" aria-hidden="true" />

        {isHero && (
          <div className="cap-card__hero-badge" aria-hidden="true">
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
        </div>

        <div className="cap-card__content">
          <div className="cap-card__content-inner">
            <div className="cap-card__chapter">{service.storyChapter}</div>

            <div className="cap-card__hud">
              <span className="cap-card__ops">{service.opsCode}</span>
              <div className="cap-card__status">
                <span className="cap-card__status-dot" aria-hidden="true" />
                <span className="cap-card__status-label">{service.statusLabel}</span>
              </div>
            </div>

            <p className="cap-card__tagline">{service.tagline}</p>

            <div className="cap-card__number" aria-hidden="true">
              {service.number}
              <span> / {String(total).padStart(2, "0")}</span>
            </div>

            <h3 className="cap-card__title">{service.title}</h3>

            <p className="cap-card__desc">{service.desc}</p>

            <p className="cap-card__story-hook">{service.storyHook}</p>

            <ul className="cap-card__features" aria-label={`${service.title} capabilities`}>
              {service.features.map((feature) => (
                <li key={feature} className="cap-card__feature">
                  <span className="cap-card__feature-bullet" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="cap-card__cta">
              <span>Explore Operation</span>
              <ArrowRight className="cap-card__cta-arrow w-3.5 h-3.5" aria-hidden="true" />
            </div>

            {service.images.length > 1 && (
              <div className="cap-card__gallery-hint" aria-hidden="true">
                {service.images.length} operational images
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
