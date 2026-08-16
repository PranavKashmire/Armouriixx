"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Navigation,
  Video,
  Eye,
  FileCheck,
  ShieldAlert,
  Clock,
  UserCheck,
  MapPin,
  Lock,
  Radio,
} from "lucide-react";

// Real operational standards & security tech items with custom SVG emblems / logos
const standards = [
  {
    title: "GPS Live Tracking",
    subtitle: "Real-Time Patrol Telematics",
    icon: <Navigation className="w-5 h-5 text-[var(--gold)]" />,
    badge: "GPS",
    tag: "TELEMATICS",
  },
  {
    title: "Body-Cam Equipped",
    subtitle: "Full Shift Video Recording",
    icon: <Video className="w-5 h-5 text-[var(--gold)]" />,
    badge: "BODY-CAM",
    tag: "1080P HD",
  },
  {
    title: "AI Threat Analytics",
    subtitle: "Automated Perimeter Detection",
    icon: <Eye className="w-5 h-5 text-[var(--gold)]" />,
    badge: "AI VISION",
    tag: "AI-ASSISTED",
  },
  {
    title: "Digital Reporting",
    subtitle: "Time-Stamped Incident Logs",
    icon: <FileCheck className="w-5 h-5 text-[var(--gold)]" />,
    badge: "EVIDENCE-GRADE",
    tag: "CLOUD LOGS",
  },
  {
    title: "24/7 Command Center",
    subtitle: "Round-the-Clock Patrol Ops",
    icon: <Clock className="w-5 h-5 text-[var(--gold)]" />,
    badge: "ALWAYS ON",
    tag: "DISPATCH READY",
  },
  {
    title: "Rapid Response SLA",
    subtitle: "Sub-15 Min Emergency Arrival",
    icon: <ShieldAlert className="w-5 h-5 text-[var(--gold)]" />,
    badge: "TACTICAL",
    tag: "SUB-15 MIN",
  },
  {
    title: "Background Verified",
    subtitle: "Police Clearance Certified",
    icon: <UserCheck className="w-5 h-5 text-[var(--gold)]" />,
    badge: "VERIFIED",
    tag: "POLICE CLEARANCE",
  },
  {
    title: "PAN Maharashtra",
    subtitle: "Statewide Tactical Network",
    icon: <MapPin className="w-5 h-5 text-[var(--gold)]" />,
    badge: "STATEWIDE",
    tag: "12 REGIONS",
  },
  {
    title: "AES-256 Comms",
    subtitle: "Encrypted Radio Communications",
    icon: <Radio className="w-5 h-5 text-[var(--gold)]" />,
    badge: "ENCRYPTED",
    tag: "TACTICAL MESH",
  },
  {
    title: "ISO 27001 Compliant",
    subtitle: "Certified Data & Asset Protection",
    icon: <Lock className="w-5 h-5 text-[var(--gold)]" />,
    badge: "ISO COMPLIANT",
    tag: "ENTERPRISE DATA",
  },
];

export default function OperationalStandards() {
  const shouldReduceMotion = useReducedMotion();
  const doubled = [...standards, ...standards];

  return (
    <section
      className="relative py-14 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0A0A0B 0%, #121214 100%)" }}
    >
      {/* Top and Bottom Gold Accent Lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent" />

      {/* Section Header */}
      <div className="text-center mb-8 relative z-10 px-6">
        <p className="text-[var(--gold)] text-[10px] font-bold tracking-[0.4em] uppercase mb-2">
          Technology & Protocol Compliance
        </p>
        <h3 className="font-[var(--font-display)] text-2xl md:text-3xl text-[var(--cream)] tracking-wide">
          Our Operational Standards
        </h3>
      </div>

      {/* Left + Right Fade Masks */}
      <div
        className="absolute inset-y-0 left-0 w-24 md:w-40 z-20 pointer-events-none"
        style={{ background: "linear-gradient(90deg, #0A0A0B 0%, transparent 100%)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-24 md:w-40 z-20 pointer-events-none"
        style={{ background: "linear-gradient(270deg, #0A0A0B 0%, transparent 100%)" }}
      />

      {/* Marquee Row — Continuous Right-to-Left Infinite Scroll */}
      <div className="flex overflow-hidden w-full relative z-10 py-2">
        <div
          className={`flex gap-5 shrink-0 ${
            shouldReduceMotion ? "animate-none" : "hover:[animation-play-state:paused]"
          }`}
          style={{
            animation: shouldReduceMotion ? "none" : "marquee 32s linear infinite",
            width: "max-content",
          }}
        >
          {doubled.map((item, i) => (
            <div
              key={`${item.title}-${i}`}
              className="group relative flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 rounded-md glass border border-[var(--glass-border)] shrink-0 hover:border-[var(--gold)]/50 hover:bg-[var(--ink-3)] transition-all duration-300 shadow-md cursor-default w-[240px] sm:w-[280px]"
            >
              {/* Glowing Icon Container */}
              <div className="w-11 h-11 rounded-sm bg-[var(--ink-4)] border border-[var(--gold)]/20 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-[var(--gold)]/60 transition-all duration-300 shadow-inner">
                {item.icon}
              </div>

              {/* Text Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold font-[var(--font-display)] uppercase tracking-wider text-[var(--cream)] group-hover:text-[var(--gold)] transition-colors duration-300 truncate">
                    {item.title}
                  </span>
                </div>
                <p className="text-[10px] text-[var(--cream-muted)]/70 font-[var(--font-body)] truncate">
                  {item.subtitle}
                </p>
              </div>

              {/* Tech Badge Tag */}
              <div className="absolute top-2 right-3">
                <span className="text-[8px] font-bold tracking-widest text-[var(--gold)]/60 uppercase group-hover:text-[var(--gold)] transition-colors duration-300">
                  {item.tag}
                </span>
              </div>

              {/* Bottom Gold Line Sweep on Hover */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-[var(--gold)] via-[var(--gold-light)] to-transparent transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
