"use client";

import Image from "next/image";

export interface HeroCarouselItem {
  image: string;
  alt: string;
}

interface HeroMobileCarouselProps {
  items: HeroCarouselItem[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export default function HeroMobileCarousel({
  items,
  activeIndex,
  onSelect,
}: HeroMobileCarouselProps) {
  const safeIndex = Math.min(Math.max(activeIndex, 0), items.length - 1);
  const item = items[safeIndex];

  return (
    <div className="w-full">
      <div
        className="relative w-full overflow-hidden rounded-[20px] border border-[rgba(220, 43, 27,0.18)] bg-[#0b0d12] shadow-[0_24px_48px_-16px_rgba(0,0,0,0.65)]"
        style={{ aspectRatio: "3 / 4", maxHeight: "min(72vh, 520px)" }}
      >
        <Image
          key={item.image}
          src={item.image}
          alt={item.alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={safeIndex === 0}
        />
      </div>

      <div
        className="flex justify-center items-center gap-2 mt-3"
        role="tablist"
        aria-label="Hero slides"
      >
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={safeIndex === i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => onSelect(i)}
            className={`rounded-full transition-all duration-300 shrink-0 ${
              safeIndex === i
                ? "w-6 h-1.5 bg-[var(--gold)]"
                : "w-1.5 h-1.5 bg-[var(--gold)]/35"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
