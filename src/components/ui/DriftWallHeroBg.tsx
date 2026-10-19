"use client";

import { useState, useEffect } from "react";
import DriftWall from "@/components/ui/DriftWall";

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

export default function DriftWallHeroBg() {
  const [config, setConfig] = useState({
    columns: 5,
    tileWidth: 220,
    tileHeight: 148,
    tilt: 14,
    speed: 28,
  });

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setConfig({ columns: 3, tileWidth: 130, tileHeight: 90, tilt: 8, speed: 22 });
      } else if (w < 1024) {
        setConfig({ columns: 4, tileWidth: 170, tileHeight: 115, tilt: 10, speed: 25 });
      } else {
        setConfig({ columns: 5, tileWidth: 220, tileHeight: 148, tilt: 14, speed: 28 });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <DriftWall
        items={driftItems}
        columns={config.columns}
        tileWidth={config.tileWidth}
        tileHeight={config.tileHeight}
        gap={12}
        tilt={config.tilt}
        turn={-12}
        perspective={1200}
        depth={120}
        speed={config.speed}
        direction="up"
        variance={0.45}
        parallax={0.6}
        lift={64}
        fade={0.6}
        dim={0.6}
        overlayColor="transparent"
        radius={8}
        roll={0}
        pauseOnHover={false}
        grayscale={true}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-[95vw] sm:max-w-[900px] h-[320px] sm:h-[500px] bg-black/80 sm:bg-black/75 blur-[80px] sm:blur-[100px] rounded-full" />
      </div>
    </div>
  );
}
