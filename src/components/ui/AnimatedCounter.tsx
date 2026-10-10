"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: string;
  className?: string;
  delay?: number;
}

export function AnimatedCounter({ value, className, delay = 0 }: AnimatedCounterProps) {
  const [displayed, setDisplayed] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  // Extract numeric part and suffix
  const match = value.match(/^([₹$]?)(\d+(?:\.\d+)?)(.*)/);
  const prefix = match?.[1] ?? "";
  const numericStr = match?.[2] ?? "";
  const suffix = match?.[3] ?? "";
  const target = parseFloat(numericStr);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          if (prefersReduced || isNaN(target)) {
            setDisplayed(value);
            return;
          }
          const duration = 1500;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start - delay;
            if (elapsed < 0) {
              requestAnimationFrame(animate);
              return;
            }
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = target * eased;
            const decimals = numericStr.includes(".") ? 1 : 0;
            setDisplayed(current.toFixed(decimals));
            if (progress < 1) requestAnimationFrame(animate);
            else setDisplayed(numericStr);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, value, hasAnimated, delay, numericStr]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)} aria-label={value}>
      {prefix}{displayed}{suffix}
    </span>
  );
}
