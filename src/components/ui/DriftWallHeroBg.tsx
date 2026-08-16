"use client";

import { useState, useEffect } from "react";
import DriftWall from "@/components/ui/DriftWall";

const driftItems = [
  { image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop", title: "Guard Patrol" },
  { image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop", title: "Corporate Security" },
  { image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop", title: "CCTV Control Room" },
  { image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop", title: "Event Security" },
  { image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&h=400&fit=crop", title: "Corporate Detail" },
  { image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop", title: "Night Operations" },
  { image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop", title: "Office Security" },
  { image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop", title: "Surveillance Systems" },
  { image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop", title: "VIP Protection" },
  { image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop", title: "Rapid Response" },
  { image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop", title: "High-Rise Security" },
  { image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop", title: "Tech Operations" },
  { image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop", title: "Gate Management" },
  { image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop", title: "Team Coordination" },
  { image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop", title: "Command Center" },
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
