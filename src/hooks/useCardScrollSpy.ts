import { useEffect, useState, type RefObject } from "react";

export function useCardScrollSpy(
  cardRefs: RefObject<(HTMLElement | null)[]>,
  count: number
) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ratios = new Array(count).fill(0);
    const observers: IntersectionObserver[] = [];

    const cards = cardRefs.current;
    cards.forEach((card, i) => {
      if (!card) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          ratios[i] = entry.intersectionRatio;
          let best = 0;
          let bestRatio = 0;
          for (let j = 0; j < count; j++) {
            if (ratios[j] > bestRatio) {
              bestRatio = ratios[j];
              best = j;
            }
          }
          if (bestRatio > 0.2) setActiveIndex(best);
        },
        {
          threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
          rootMargin: "-18% 0px -18% 0px",
        }
      );

      observer.observe(card);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [cardRefs, count]);

  return activeIndex;
}
