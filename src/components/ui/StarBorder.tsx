"use client";

import type { CSSProperties, ElementType, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import "./StarBorder.css";

interface StarBorderProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  className?: string;
  color?: string;
  speed?: string;
  thickness?: number;
  children?: React.ReactNode;
}

export default function StarBorder({
  as: Component = "div",
  className = "",
  color = "white",
  speed = "6s",
  thickness = 1,
  children,
  style,
  ...rest
}: StarBorderProps) {
  return (
    <Component
      className={cn("star-border-container", className)}
      style={
        {
          "--star-thickness": `${thickness}px`,
          padding: `${thickness}px`,
          ...style,
        } as CSSProperties
      }
      {...rest}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
        aria-hidden="true"
      />
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
        aria-hidden="true"
      />
      <div className="star-border-inner">{children}</div>
    </Component>
  );
}
