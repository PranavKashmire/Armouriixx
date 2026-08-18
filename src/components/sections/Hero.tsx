"use client";

import { useEffect, useRef, useState } from "react";
import { Shield, Crosshair, Camera } from "lucide-react";
import ShimmerButton from "@/components/ui/ShimmerButton";
import Link from "next/link";
import dynamic from "next/dynamic";

const DepthCarousel = dynamic(() => import("@/components/ui/DepthCarousel"), { ssr: false });
const LightPillar = dynamic(() => import("@/components/ui/LightPillar"), { ssr: false });
const TrueFocus = dynamic(() => import("@/components/ui/TrueFocus"), { ssr: false });
const HeroMobileCarousel = dynamic(() => import("@/components/sections/HeroMobileCarousel"), {
  ssr: false,
});

const floatingChips = [
  { icon: <Crosshair className="w-4 h-4 shrink-0" />, label: "24/7 Rapid Response" },
  { icon: <Shield className="w-4 h-4 shrink-0" />, label: "GPS-Tracked Patrols" },
  { icon: <Camera className="w-4 h-4 shrink-0" />, label: "Body-Cam Verified" },
];

const img = (filename: string) => encodeURI(`/images/${filename}`);

const carouselItems = [
  {
    image: img("ChatGPT Image Aug 16, 2026, 04_52_23 PM.png"),
    alt: "ARMOURIXX security operative — elite protection at luxury premises",
  },
  {
    image: img("Armed Security Guards.jpg"),
    alt: "Armed security guards — professional field deployment",
  },
  {
    image: img("Retrato de guardia de seguridad masculino con estación de radio _ Foto Premium.jpg"),
    alt: "Security guard with radio — on-site communications and patrol readiness",
  },
  {
    image: img("How Does a Security Guard Company in Ventura___.jpg"),
    alt: "Professional security team — comprehensive protection programs",
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const targetX = useRef(50);
  const targetY = useRef(50);
  const currentX = useRef(50);
  const currentY = useRef(50);
  const rafRef = useRef<number>(0);
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [isTouch, setIsTouch] = useState(false);
  const [carouselSize, setCarouselSize] = useState({ width: 272, height: 368 });

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);

    const CARD_SCALE = 0.8; // 20% smaller than previous hero card sizes

    const updateCarouselSize = () => {
      const vw = window.innerWidth;
      if (vw < 640) {
        const cardW = vw - 32;
        const cardH = Math.round(cardW * 1.28);
        setCarouselSize({ width: cardW, height: cardH });
      } else if (vw < 1024) {
        const cardW = Math.round(Math.min(400, vw - 80) * CARD_SCALE);
        const cardH = Math.round(cardW * 1.35);
        setCarouselSize({ width: cardW, height: cardH });
      } else {
        const cardW = Math.round(Math.min(520, Math.round(vw * 0.36)) * CARD_SCALE);
        const cardH = Math.round(cardW * 1.32);
        setCarouselSize({ width: cardW, height: cardH });
      }
    };

    updateCarouselSize();
    window.addEventListener("resize", updateCarouselSize);
    return () => window.removeEventListener("resize", updateCarouselSize);
  }, []);

  useEffect(() => {
    if (isTouch) return;

    const el = containerRef.current;
    const mask = maskRef.current;
    if (!el || !mask) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      targetX.current = ((e.clientX - rect.left) / rect.width) * 100;
      targetY.current = ((e.clientY - rect.top) / rect.height) * 100;
    };

    const animate = () => {
      currentX.current += (targetX.current - currentX.current) * 0.08;
      currentY.current += (targetY.current - currentY.current) * 0.08;
      mask.style.setProperty("--mask-x", `${currentX.current}%`);
      mask.style.setProperty("--mask-y", `${currentY.current}%`);
      rafRef.current = requestAnimationFrame(animate);
    };

    el.addEventListener("mousemove", handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isTouch]);

  useEffect(() => {
    const loadGSAP = async () => {
      if (typeof window === "undefined") return;
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      }).to(containerRef.current, { opacity: 0.4, scale: 1.03, duration: 1 }, 0);
    };
    loadGSAP();
  }, []);

  const carouselProps = {
    items: carouselItems,
    cardWidth: carouselSize.width,
    cardHeight: carouselSize.height,
    radius: 20,
    tint: "#0A0A0B",
    depth: Math.round(carouselSize.width * 0.55),
    spread: Math.round(carouselSize.width * 0.18),
    tilt: 20,
    tiltDirection: "right" as const,
    perspective: 1600,
    visibleCards: carouselSize.width >= 320 ? 3 : 2,
    falloff: 0.16,
    blur: 4,
    duration: 1200,
    ease: "power3.inOut",
    autoplay: false,
    loop: false,
    showControls: false,
    showIndicators: true,
    forceIndex: activeWordIndex,
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[var(--ink)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0B] via-[#111108] to-[#0A0A0B]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 80%, rgba(180,136,31,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 z-0 pointer-events-none hidden sm:block">
          <LightPillar
            topColor="#fff527"
            bottomColor="#EAB308"
            intensity={0.8}
            rotationSpeed={1.8}
            glowAmount={0.001}
            pillarWidth={3.0}
            pillarHeight={0.5}
            noiseIntensity={0.5}
            pillarRotation={68}
            interactive={false}
            mixBlendMode="normal"
            quality="medium"
          />
        </div>
        <div className="scan-line hidden sm:block" aria-hidden="true" />
        <div
          className="absolute inset-0 opacity-[0.04] hidden md:block"
          style={{
            backgroundImage:
              "linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {!isTouch && (
          <div
            ref={maskRef}
            className="cursor-mask absolute inset-0 opacity-40 pointer-events-none hidden md:block"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 60% 50%, rgba(201,162,39,0.2) 0%, transparent 70%)",
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/20" />
      </div>

      <div className="relative z-10 w-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-12 sm:pb-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-x-8 lg:gap-x-10 xl:gap-x-12 gap-y-2 sm:gap-y-6 lg:gap-y-8 items-start">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 lg:col-start-1 lg:row-start-1">
              <div className="hidden sm:block h-px w-6 sm:w-8 bg-[var(--gold)] shrink-0" />
              <span className="text-[var(--gold)] text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.4em] uppercase font-semibold font-[var(--font-body)] text-center sm:text-left leading-snug">
                Private Security &amp; Protection Agency
              </span>
              <div className="hidden sm:block h-px w-6 sm:w-8 bg-[var(--gold)] shrink-0" />
            </div>

            <div
              className="hidden lg:flex lg:col-start-2 lg:row-start-1 lg:row-span-3 self-start justify-center w-full"
              style={{ height: carouselSize.height }}
            >
              <DepthCarousel {...carouselProps} verticalAlign="top" />
            </div>

            <div className="lg:col-start-1 lg:row-start-2 min-w-0">
              <h1 className="sr-only">Elite Protection. Unmatched Presence.</h1>
              <div className="overflow-visible flex justify-center sm:justify-start sm:-ml-2 -mb-1" aria-hidden="true">
                <TrueFocus
                  sentence="Elite Protection Unmatched Presence"
                  manualMode={false}
                  blurAmount={3}
                  borderColor="#C9A227"
                  glowColor="rgba(201,162,39,0.75)"
                  animationDuration={1.4}
                  pauseBetweenAnimations={1.2}
                  onWordChange={setActiveWordIndex}
                  className="hero-true-focus max-sm:justify-center"
                />
              </div>

              {/* Mobile / tablet — plain image carousel (no 3D; reliable on all browsers) */}
              <div className="lg:hidden w-full mt-1 sm:mt-4">
                <HeroMobileCarousel
                  items={carouselItems}
                  activeIndex={activeWordIndex}
                  onSelect={setActiveWordIndex}
                />
              </div>
            </div>

            <div className="lg:col-start-1 lg:row-start-3 flex flex-col min-w-0">
              <p className="text-[var(--cream-muted)] text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-10 max-w-xl font-[var(--font-body)] mt-4 sm:mt-0 lg:mt-2">
                World-class security solutions for individuals, enterprises, and high-profile
                clients — built on Discipline, Precision, and Protection.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
                <ShimmerButton href="/contact" size="lg" className="w-full sm:w-auto justify-center">
                  Request Protection
                </ShimmerButton>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 border border-white/20 text-[var(--cream)] text-sm font-bold tracking-widest uppercase rounded-sm hover:border-[var(--gold)]/60 hover:text-[var(--gold)] transition-all duration-300 w-full sm:w-auto"
                >
                  Our Services
                  <span className="text-[var(--gold)]">→</span>
                </Link>
              </div>
            </div>
          </div>

          <div
            className="w-full grid grid-cols-1 sm:grid-cols-3 rounded-sm overflow-hidden mt-6 sm:mt-8 border border-[var(--gold)]/30"
            style={{ background: "rgba(20, 16, 6, 0.85)", backdropFilter: "blur(16px)" }}
          >
            {floatingChips.map((chip, i) => (
              <div
                key={i}
                className="flex items-center justify-center relative py-4 sm:py-5 px-4 border-b sm:border-b-0 border-[var(--gold)]/15 last:border-b-0"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-[var(--gold)] shrink-0">{chip.icon}</span>
                  <span className="text-sm sm:text-base text-[var(--cream)] font-semibold text-center sm:text-left">
                    {chip.label}
                  </span>
                </div>
                {i < floatingChips.length - 1 && (
                  <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 bg-gradient-to-b from-transparent via-[var(--gold)] to-transparent opacity-60" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
