"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AnimationController() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const frame = window.requestAnimationFrame(() => {
      root.classList.add("animations-ready");
    });

    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".reveal-up:not([data-visible='true']), .reveal-fade:not([data-visible='true']), .reveal-text:not([data-visible='true']), .about-card-reveal:not([data-visible='true'])",
      ),
    );
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const markVisible = (node: HTMLElement) => {
      node.classList.add("is-visible");
      node.setAttribute("data-visible", "true");
    };

    if (reducedMotion) {
      nodes.forEach(markVisible);
      return;
    }

    // Keep first paint fast on route changes and avoid blank flashes.
    nodes.slice(0, 8).forEach(markVisible);

    const failSafe = window.setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>(".reveal-up, .reveal-fade, .reveal-text, .about-card-reveal")
        .forEach(markVisible);
    }, 900);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            markVisible(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
    );

    nodes.forEach((node) => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.88) {
        markVisible(node);
      } else {
        observer.observe(node);
      }
    });

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(failSafe);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
