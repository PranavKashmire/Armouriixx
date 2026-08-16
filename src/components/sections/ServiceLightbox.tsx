"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CoreService } from "@/data/coreServices";
import "./ServiceLightbox.css";

interface ServiceLightboxProps {
  service: CoreService;
  total: number;
  onClose: () => void;
}

export default function ServiceLightbox({
  service,
  total,
  onClose,
}: ServiceLightboxProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setActiveImage(0);
    requestAnimationFrame(() => setIsOpen(true));

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [service.id]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft")
        setActiveImage((i) => (i > 0 ? i - 1 : service.images.length - 1));
      if (e.key === "ArrowRight")
        setActiveImage((i) => (i < service.images.length - 1 ? i + 1 : 0));
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, service.images.length]);

  const goPrev = () =>
    setActiveImage((i) => (i > 0 ? i - 1 : service.images.length - 1));
  const goNext = () =>
    setActiveImage((i) => (i < service.images.length - 1 ? i + 1 : 0));

  return (
    <div
      className={cn("cap-lightbox", isOpen && "is-open")}
      role="dialog"
      aria-modal="true"
      aria-label={`${service.title} gallery`}
    >
      <button
        type="button"
        className="cap-lightbox__backdrop"
        onClick={onClose}
        aria-label="Close gallery"
      />

      <div className="cap-lightbox__shell">
        {/* Top bar */}
        <div className="cap-lightbox__topbar">
          <span className="cap-lightbox__counter">
            {activeImage + 1} / {service.images.length}
          </span>
          <button
            type="button"
            className="cap-lightbox__close"
            onClick={onClose}
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Stage with side arrows */}
        <div className="cap-lightbox__stage">
          <button
            type="button"
            className="cap-lightbox__nav cap-lightbox__nav--prev"
            onClick={goPrev}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="cap-lightbox__image-frame">
            {service.images.map((img, i) => (
              <div
                key={img.src}
                className={cn(
                  "cap-lightbox__slide",
                  i === activeImage && "is-active"
                )}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 90vw, 70vw"
                  className="cap-lightbox__image"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            className="cap-lightbox__nav cap-lightbox__nav--next"
            onClick={goNext}
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Title + description */}
        <div className="cap-lightbox__info">
          <div className="cap-lightbox__meta">
            <span>{service.opsCode}</span>
            <span className="cap-lightbox__meta-dot" aria-hidden="true" />
            <span>{service.number} / {String(total).padStart(2, "0")}</span>
          </div>
          <h3 className="cap-lightbox__title">{service.title}</h3>
          <p className="cap-lightbox__desc">{service.fullDesc}</p>

          <ul className="cap-lightbox__features">
            {service.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <Link href="/contact" className="cap-lightbox__cta" onClick={onClose}>
            Request This Service
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Thumbnail strip */}
        <div
          className="cap-lightbox__thumbs"
          role="tablist"
          aria-label="Service images"
        >
          {service.images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              role="tab"
              aria-selected={i === activeImage}
              aria-label={`View image ${i + 1}`}
              className={cn(
                "cap-lightbox__thumb",
                i === activeImage && "is-active"
              )}
              onClick={() => setActiveImage(i)}
            >
              <Image
                src={img.src}
                alt=""
                fill
                sizes="80px"
                className="cap-lightbox__thumb-img"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
