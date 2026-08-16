"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

export default function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2000,
  className,
  decimals = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let lastUpdate = 0;
    // Set a fixed premium duration if not explicitly passed differently
    const animDuration = Math.max(duration, 2500);

    const animate = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
        lastUpdate = timestamp;
      }
      
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / animDuration, 1);
      
      // Tick interval: starts very fast (25ms), progressively slows down to 150ms
      const currentInterval = 25 + Math.pow(progress, 3) * 125;
      
      if (timestamp - lastUpdate >= currentInterval || progress === 1) {
        if (progress === 1) {
          setCount(target);
        } else {
          // Deviation phase: full chaos for first 40%, then converge
          const convergenceProgress = Math.max(0, (progress - 0.4) / 0.6);
          // Smooth deceleration of chaos
          const easeConvergence = 1 - Math.pow(1 - convergenceProgress, 3);
          
          // Determine how wide the random range is
          const baseMaxDev = Math.max(target * 1.5, 50);
          const currentDev = baseMaxDev * (1 - easeConvergence);
          
          let randomVal = target + (Math.random() - 0.5) * 2 * currentDev;
          // Keep numbers positive and somewhat realistic
          randomVal = Math.max(0, randomVal);
          
          setCount(parseFloat(randomVal.toFixed(decimals)));
        }
        lastUpdate = timestamp;
      }
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, target, duration, decimals]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}
