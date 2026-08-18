import { useCallback, useRef } from "react";

const MAX_TILT = 5;

export function useCinematicTilt(enabled: boolean) {
  const tiltRef = useRef<HTMLDivElement>(null);

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      if (!enabled || !tiltRef.current) return;
      const el = tiltRef.current;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty("--cin-tilt-x", `${x * MAX_TILT}deg`);
      el.style.setProperty("--cin-tilt-y", `${-y * MAX_TILT}deg`);
      el.classList.add("is-tilting");
    },
    [enabled]
  );

  const onPointerLeave = useCallback(() => {
    if (!tiltRef.current) return;
    tiltRef.current.style.removeProperty("--cin-tilt-x");
    tiltRef.current.style.removeProperty("--cin-tilt-y");
    tiltRef.current.classList.remove("is-tilting");
  }, []);

  return { tiltRef, onPointerMove, onPointerLeave };
}
