"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Intersection Observer 기반 진입 감지 훅.
 * once: true(기본) → 한 번 진입하면 disconnect (성능 최적화)
 */
export function useInView(options?: IntersectionObserverInit & { once?: boolean }) {
  const { once = true, ...obsOptions } = options ?? {};
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold: 0.15, ...obsOptions }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [once]);

  return { ref, inView };
}
