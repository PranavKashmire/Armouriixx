"use client";

import { useState, useEffect } from "react";
import DriftWall from "@/components/ui/DriftWall";
import SectionHeading from "@/components/ui/SectionHeading";
import BlurFadeIn from "@/components/ui/BlurFadeIn";

const driftItems = [
  { image: "/images/optimized/drift/Close-Up-of-Security-Officer-with-Body-Camera.jpg", title: "Guard Patrol" },
  { image: "/images/optimized/drift/Corporate-and-Commercial-2.jpg", title: "Corporate Security" },
  { image: "/images/optimized/drift/survillenceRoom.jpg", title: "CCTV Control Room" },
  { image: "/images/optimized/drift/event-security.jpg", title: "Event Security" },
  { image: "/images/optimized/drift/Corporate-and-Commercial.jpg", title: "Corporate Detail" },
  { image: "/images/optimized/drift/Nightclub-Security-at-the-Velvet-Rope-1.jpg", title: "Night Operations" },
  { image: "/images/optimized/drift/security-guard-workspace-2.jpg", title: "Office Security" },
  { image: "/images/optimized/drift/male-security-guard-using-radio-transmitter-surveillance-room.jpg", title: "Surveillance Systems" },
  { image: "/images/optimized/drift/Celebrity-Arrival-with-Security-Escort.jpg", title: "VIP Protection" },
  { image: "/images/optimized/drift/Urban-Security-Rapid-Response.jpg", title: "Rapid Response" },
  { image: "/images/optimized/drift/Executive-Protection-at-Glass-Tower.jpg", title: "High-Rise Security" },
  { image: "/images/optimized/drift/Modern-Security-Control-Room-Guard.jpg", title: "Tech Operations" },
  { image: "/images/optimized/drift/Guarding-the-Industrial-Gate-3.jpg", title: "Gate Management" },
  { image: "/images/optimized/drift/Corporate-Security-Formation.jpg", title: "Team Coordination" },
  { image: "/images/optimized/drift/Strategic-Security-Planning-Meeting.jpg", title: "Command Center" },
];

export default function DriftWallSection() {
  const [wallConfig, setWallConfig] = useState({
    columns: 5,
    tileWidth: 220,
    tileHeight: 148,
    tilt: 14,
    speed: 38,
  });

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setWallConfig({ columns: 3, tileWidth: 140, tileHeight: 100, tilt: 8, speed: 28 });
      } else if (w < 1024) {
        setWallConfig({ columns: 4, tileWidth: 180, tileHeight: 120, tilt: 10, speed: 32 });
      } else {
        setWallConfig({ columns: 5, tileWidth: 220, tileHeight: 148, tilt: 14, speed: 38 });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section className="relative w-full min-h-[420px] sm:min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden bg-[var(--ink-2)]">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <DriftWall
          items={driftItems}
          columns={wallConfig.columns}
          tileWidth={wallConfig.tileWidth}
          tileHeight={wallConfig.tileHeight}
          gap={12}
          tilt={wallConfig.tilt}
          turn={-12}
          perspective={1200}
          depth={120}
          speed={wallConfig.speed}
          direction="up"
          variance={0.45}
          parallax={0.6}
          lift={64}
          fade={0.6}
          dim={1.0}
          overlayColor="transparent"
          radius={8}
          roll={0}
          pauseOnHover={false}
          grayscale={false}
        />
        <div className="absolute inset-0 bg-black/55 sm:hidden pointer-events-none z-0" aria-hidden="true" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="w-full max-w-[90vw] sm:max-w-[800px] h-[280px] sm:h-[400px] bg-black/75 blur-[60px] sm:blur-[80px] rounded-full" />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 w-full">
        <BlurFadeIn className="text-center">
          <SectionHeading
            eyebrow="Operations in the Field"
            title="Every Assignment,"
            titleHighlight="Documented"
            subtitle="From corporate deployments to high-profile events — our operations speak for themselves. Every detail, every post, every outcome — recorded and verified."
          />
        </BlurFadeIn>
      </div>
    </section>
  );
}
