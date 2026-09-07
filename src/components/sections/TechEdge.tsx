"use client";

import { useEffect, useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import BlurFadeIn from "@/components/ui/BlurFadeIn";
import GlassCard from "@/components/ui/GlassCard";
import {
  Shield,
  Video,
  Bot,
  Satellite,
  FileText,
  LayoutDashboard,
  Zap,
  ClipboardCheck,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const techNodes = [
  { id: "guard", label: "Field Guard", icon: Shield, desc: "Vetted & deployed" },
  { id: "cam", label: "Body-Worn Camera", icon: Video, desc: "Always recording" },
  { id: "ai", label: "AI Surveillance", icon: Bot, desc: "Threat detection" },
  { id: "gps", label: "GPS Patrol Monitor", icon: Satellite, desc: "Real-time tracking" },
  { id: "report", label: "Digital Reporting", icon: FileText, desc: "Time-stamped docs" },
  { id: "client", label: "Client Dashboard", icon: LayoutDashboard, desc: "Live visibility" },
];

const usps = [
  {
    icon: Video,
    title: "Body-Worn Cameras",
    desc: "Every field guard wears a camera — full accountability and evidence-grade documentation on every shift.",
  },
  {
    icon: Bot,
    title: "AI-Assisted Surveillance",
    desc: "Machine-learning threat detection integrated with live CCTV monitoring and command-center oversight.",
  },
  {
    icon: Satellite,
    title: "GPS Patrol Monitoring",
    desc: "GPS checkpoints across your site verify every patrol scan — guard movements tracked in real time, never assumed.",
  },
  {
    icon: FileText,
    title: "Digital Incident Reporting",
    desc: "Time-stamped, structured reports delivered instantly — no paperwork delays, no lost incident logs.",
  },
  {
    icon: Zap,
    title: "Faster Emergency Coordination",
    desc: "Integrated comms and dispatch protocols cut response coordination time across Maharashtra deployments.",
  },
  {
    icon: ClipboardCheck,
    title: "Post-Incident Review",
    desc: "Complete evidence packages for every incident — client confidence built into the operational standard.",
  },
];

export default function TechEdge() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          svg.querySelectorAll(".beam-line").forEach((line, i) => {
            (line as SVGElement).style.animation = `draw-beam 0.6s ease ${i * 0.3}s forwards`;
          });
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(svg);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-pad bg-[var(--ink-2)] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, var(--gold) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <BlurFadeIn className="mb-16">
          <SectionHeading
            eyebrow="Technology Edge"
            title="Intelligence Behind"
            titleHighlight="Every Patrol"
            subtitle={siteConfig.brandStory.differentiator}
          />
        </BlurFadeIn>

        <BlurFadeIn className="mb-16">
          <div className="relative overflow-x-auto">
            <div className="flex items-center justify-between gap-2 min-w-[600px] relative pb-4">
              <svg
                ref={svgRef}
                className="absolute top-[28px] left-0 w-full h-2 pointer-events-none"
                style={{ overflow: "visible" }}
              >
                {techNodes.slice(0, -1).map((_, i) => {
                  const pct = 100 / (techNodes.length - 1);
                  const x1 = `${pct * i + pct * 0.25}%`;
                  const x2 = `${pct * (i + 1) - pct * 0.25}%`;
                  return (
                    <line
                      key={i}
                      className="beam-line"
                      x1={x1}
                      y1="4"
                      x2={x2}
                      y2="4"
                      stroke="url(#goldGrad)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      style={{ strokeDasharray: 300, strokeDashoffset: 300 }}
                    />
                  );
                })}
                <defs>
                  <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--gold-dark)" />
                    <stop offset="50%" stopColor="var(--gold-light)" />
                    <stop offset="100%" stopColor="var(--gold-dark)" />
                  </linearGradient>
                </defs>
              </svg>

              {techNodes.map((node, i) => {
                const Icon = node.icon;
                return (
                  <div key={node.id} className="flex flex-col items-center gap-3 flex-1 min-w-0">
                    <div className="w-14 h-14 glass-gold rounded-sm flex items-center justify-center border border-[var(--gold)]/30 relative z-10 hover:border-[var(--gold)] hover:scale-110 transition-all duration-300 text-[var(--gold)]">
                      <Icon className="w-6 h-6" />
                      <span className="absolute -top-2 -right-2 w-5 h-5 bg-[var(--gold)] text-[var(--ink)] text-[9px] font-bold rounded-full flex items-center justify-center">
                        {i + 1}
                      </span>
                    </div>
                    <div className="text-center">
                      <p className="text-[var(--cream)] text-xs font-bold tracking-wider uppercase leading-tight">
                        {node.label}
                      </p>
                      <p className="text-[var(--cream-muted)] text-[10px] mt-1">{node.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </BlurFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {usps.map((usp, i) => {
            const Icon = usp.icon;
            return (
              <BlurFadeIn key={i} delay={i * 80}>
                <GlassCard className="flex gap-4 items-start" hover>
                  <div className="w-12 h-12 glass-gold rounded-sm flex items-center justify-center shrink-0 text-[var(--gold)]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-[var(--font-display)] text-lg tracking-wider text-[var(--cream)] mb-2">
                      {usp.title}
                    </h4>
                    <p className="text-[var(--cream-muted)] text-sm leading-relaxed font-[var(--font-body)]">
                      {usp.desc}
                    </p>
                  </div>
                </GlassCard>
              </BlurFadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
