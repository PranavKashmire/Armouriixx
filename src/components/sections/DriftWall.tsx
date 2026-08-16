"use client";

import { useState, useEffect } from "react";
import DriftWall from "@/components/ui/DriftWall";
import SectionHeading from "@/components/ui/SectionHeading";
import BlurFadeIn from "@/components/ui/BlurFadeIn";

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
