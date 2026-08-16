"use client";

import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface BlurFadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  once?: boolean;
}

export default function BlurFadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 24,
  once = true,
}: BlurFadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  const dirMap = {
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
    left: `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`,
    none: "none",
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.filter = "blur(6px)";
    el.style.transform = dirMap[direction] === "none" ? "" : dirMap[direction];
    el.style.transition = `opacity 0.7s ease ${delay}ms, filter 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = "1";
            el.style.filter = "blur(0)";
            el.style.transform = "";
            if (once) observer.disconnect();
          } else if (!once) {
            el.style.opacity = "0";
            el.style.filter = "blur(6px)";
            el.style.transform = dirMap[direction] === "none" ? "" : dirMap[direction];
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay, direction, distance, once]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
