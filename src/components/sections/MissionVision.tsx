"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Target, Eye, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import BlurFadeIn from "@/components/ui/BlurFadeIn";

/* ── Typed-text hook ─────────────────────────────────────────────── */
function useTypewriter(text: string, speed = 38, startDelay = 0, trigger = true) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (!trigger) return;
    setDisplayed("");
    setDone(false);
    let i = 0;
    const to = setTimeout(() => {
      const id = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) { clearInterval(id); setDone(true); }
      }, speed);
      return () => clearInterval(id);
    }, startDelay);
    return () => clearTimeout(to);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, speed, startDelay, trigger]);
  return { displayed, done };
}

/* ── Floating particle canvas ────────────────────────────────────── */
function ParticleField({ count = 40 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.6 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,162,39,${p.alpha})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [count]);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

/* ── Animated bullet item ────────────────────────────────────────── */
function BulletItem({ text, delay }: { text: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className="flex items-start gap-4 group"
      initial={{ opacity: 0, x: -28 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border border-[var(--gold)]/40 flex items-center justify-center group-hover:bg-[var(--gold)]/10 transition-colors duration-300">
        <CheckCircle2 className="w-3 h-3 text-[var(--gold)]" />
      </span>
      <p className="text-[var(--cream-muted)] text-sm md:text-base leading-relaxed font-[var(--font-body)] group-hover:text-[var(--cream)] transition-colors duration-300">
        {text}
      </p>
    </motion.div>
  );
}

/* ── Tilt-tracked image panel ────────────────────────────────────── */
function TiltImage({ src, alt, flip = false }: { src: string; alt: string; flip?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 120, damping: 20 });
  const sry = useSpring(ry, { stiffness: 120, damping: 20 });
  const rotateX = useTransform(srx, (v) => `${v}deg`);
  const rotateY = useTransform(sry, (v) => `${v}deg`);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rx.set(-py * 10);
    ry.set(px * 10);
  };
  const onLeave = () => { rx.set(0); ry.set(0); };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="w-full h-full"
      style={{ perspective: "800px" }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full h-full rounded-lg overflow-hidden"
      >
        <div className="absolute inset-0 bg-cover bg-center scale-105" style={{ backgroundImage: `url('${src}')` }} />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/20 via-transparent to-[var(--ink)]/60 mix-blend-multiply" />
        <div className={`absolute inset-0 bg-gradient-to-${flip ? "r" : "l"} from-[var(--ink)] via-[var(--ink)]/20 to-transparent`} />
        <div className="absolute inset-0 rounded-lg border border-[var(--gold)]/20 pointer-events-none" />
        <div className="scan-line opacity-50" />
        <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[var(--gold)]/60" />
        <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[var(--gold)]/60" />
        <span className="sr-only">{alt}</span>
      </motion.div>
    </div>
  );
}



/* ── Gold Divider ────────────────────────────────────────────────── */
function GoldDivider() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref} className="flex items-center gap-4 my-8 md:my-12">
      <motion.div
        className="h-px flex-1 bg-gradient-to-r from-transparent to-[var(--gold)]/50"
        initial={{ scaleX: 0, originX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: 0 }}
      />
      <motion.div
        className="w-3 h-3 border border-[var(--gold)] bg-[var(--gold)]/20"
        initial={{ scale: 0, rotate: 0 }}
        animate={inView ? { scale: 1, rotate: 45 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
      />
      <motion.div
        className="h-px flex-1 bg-gradient-to-l from-transparent to-[var(--gold)]/50"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: 1 }}
      />
    </div>
  );
}

/* ── Section Card ────────────────────────────────────────────────── */
interface SectionCardProps {
  tag: string;
  Icon: React.ElementType;
  headline: string;
  typed: string;
  typeDelay?: number;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
  flip?: boolean;
  bgClass?: string;
}

function SectionCard({
  tag,
  Icon,
  headline,
  typed,
  typeDelay = 0,
  bullets,
  imageSrc,
  imageAlt,
  flip = false,
  bgClass = "bg-[var(--ink)]",
}: SectionCardProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { displayed } = useTypewriter(typed, 32, typeDelay, inView);

  const imgPanel = (
    <motion.div
      className="relative w-full h-[260px] sm:h-[340px] md:h-full min-h-[260px] sm:min-h-[340px] md:min-h-[520px]"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    >
      <TiltImage src={imageSrc} alt={imageAlt} flip={flip} />
    </motion.div>
  );

  const contentPanel = (
    <motion.div
      className="flex flex-col justify-center py-8 md:py-16"
      initial={{ opacity: 0, x: flip ? 40 : -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.p
        className="text-[var(--gold)] text-[0.65rem] tracking-[0.45em] uppercase font-semibold mb-5 flex items-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Icon className="w-3.5 h-3.5" />
        {tag}
      </motion.p>

      <motion.h2
        className="font-[var(--font-display)] text-[clamp(3rem,6vw,5.5rem)] leading-none text-[var(--cream)] mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        {headline}
      </motion.h2>

      <p className="font-[var(--font-body)] text-base md:text-lg text-[var(--cream-muted)] leading-relaxed mb-8 min-h-[3rem]">
        {displayed}
        <span
          className="inline-block w-0.5 h-4 bg-[var(--gold)] ml-0.5 animate-pulse align-middle"
          style={{ opacity: displayed.length < typed.length ? 1 : 0 }}
        />
      </p>

      <div className="flex flex-col gap-4">
        {bullets.map((b, i) => (
          <BulletItem key={i} text={b} delay={0.3 + i * 0.12} />
        ))}
      </div>
    </motion.div>
  );

  return (
    <section ref={ref} className={`relative overflow-hidden ${bgClass}`}>
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <ParticleField count={30} />
      </div>
      <div
        className={`absolute ${flip ? "right-0" : "left-0"} top-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] md:w-[600px] h-[300px] sm:h-[500px] md:h-[600px] rounded-full bg-[var(--gold)]/5 blur-[120px] pointer-events-none`}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-[clamp(3rem,8vw,8rem)] relative z-10">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-20 items-center ${
            flip ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1" : ""
          }`}
        >
          {imgPanel}
          {contentPanel}
        </div>
      </div>
    </section>
  );
}



/* ── Main export ─────────────────────────────────────────────────── */
export default function MissionVision() {
  return (
    <div className="relative">
      {/* ── Section heading ────────────────────────────────────────── */}
      <div className="bg-[var(--ink)] pt-10 sm:pt-12 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <BlurFadeIn>
            <SectionHeading
              eyebrow="Our Purpose"
              title="Mission &"
              titleHighlight="Vision"
              subtitle="Every decision we make, every guard we deploy, every technology we integrate — is in service of one goal: to ensure our clients can operate with absolute confidence."
              align="center"
            />
          </BlurFadeIn>
        </div>
      </div>

      {/* MISSION */}
      <SectionCard
        tag="Our Mission"
        Icon={Target}
        headline="PURPOSE-DRIVEN PROTECTION"
        typed="To provide elite, dependable, professional security solutions that protect lives, assets, and reputations — through integrity, vigilance, and operational excellence."
        typeDelay={300}
        bullets={[
          "Deploy only verified, trained, and certified security professionals.",
          "Protect lives, assets, and reputations with uncompromising vigilance.",
          "Integrate real-time GPS tracking and body-cam accountability on every shift.",
        ]}
        imageSrc="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80"
        imageAlt="Security professionals in formation"
        bgClass="bg-[var(--ink)]"
        flip={false}
      />

      {/* Gold divider */}
      <div className="bg-[var(--ink)] px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <GoldDivider />
        </div>
      </div>

      {/* VISION */}
      <SectionCard
        tag="Our Vision"
        Icon={Eye}
        headline="SETTING NEW BENCHMARKS"
        typed="To become the most trusted and respected security service provider in India — setting new standards in quality, professionalism, and client satisfaction across every domain we protect."
        typeDelay={200}
        bullets={[
          "Scale elite security operations PAN India from our Maharashtra foundation.",
          "Build technology-first infrastructure: AI surveillance, predictive threat detection.",
          "Earn the trust of governments, enterprises, and citizens across every sector.",
        ]}
        imageSrc="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&q=80"
        imageAlt="Security command centre with live monitoring"
        bgClass="bg-[var(--ink)]"
        flip={true}
      />

    </div>
  );
}
