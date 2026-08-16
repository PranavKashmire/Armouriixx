"use client";

import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  maxTilt?: number;
  glare?: boolean;
}

export default function TiltCard({
  children,
  className,
  id,
  maxTilt = 8,
  glare = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotateX = ((y - cy) / cy) * -maxTilt;
      const rotateY = ((x - cx) / cx) * maxTilt;

      el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      el.style.transition = "transform 0.1s linear";

      if (glareRef.current) {
        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;
        glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(201,162,39,0.12) 0%, transparent 60%)`;
      }
    };

    const handleMouseLeave = () => {
      el.style.transform = "perspective(800px) rotateX(0) rotateY(0) scale(1)";
      el.style.transition = "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)";
      if (glareRef.current) {
        glareRef.current.style.background = "transparent";
      }
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [maxTilt]);

  return (
    <div ref={ref} id={id} className={cn("relative overflow-hidden", className)}>
      {children}
      {glare && (
        <div
          ref={glareRef}
          className="absolute inset-0 pointer-events-none rounded-inherit z-10 transition-all duration-150"
        />
      )}
    </div>
  );
}
