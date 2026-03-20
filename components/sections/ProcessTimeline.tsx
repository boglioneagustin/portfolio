"use client";

import { useEffect, useRef, useState } from "react";
import type { ProcessStep } from "@/lib/data";

type ProcessTimelineProps = {
  steps: ProcessStep[];
  onActiveIndexChange?: (index: number) => void;
};

export default function ProcessTimeline({ steps, onActiveIndexChange }: ProcessTimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    let rafId = 0;
    let ticking = false;

    const updateActiveStep = () => {
      const threshold = window.innerHeight * 0.5;
      let nextActive = 0;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const top = card.getBoundingClientRect().top;
        if (top <= threshold) {
          nextActive = index;
        }
      });

      setActiveIndex((prev) => (prev === nextActive ? prev : nextActive));
      onActiveIndexChange?.(nextActive);
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      rafId = window.requestAnimationFrame(updateActiveStep);
    };

    updateActiveStep();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.cancelAnimationFrame(rafId);
    };
  }, [onActiveIndexChange]);

  return (
    <div className="mx-auto mt-8 flex max-w-[760px] flex-col gap-6 md:mt-10 md:pb-[6vh]">
      {steps.map((step, index) => {
        const isActive = index === activeIndex;
        const stackOrder = 30 + index;

        return (
          <article
            key={step.id}
            ref={(node) => {
              cardRefs.current[index] = node;
            }}
            className={`process-card reveal-up md:sticky md:top-[112px] lg:top-[120px] ${isActive ? "process-card-active" : "process-card-inactive"}`}
            style={{ transitionDelay: `${Math.min(index * 0.08, 0.24)}s`, zIndex: stackOrder }}
          >
            <div className={`process-step-pill ${isActive ? "is-active" : "is-inactive"}`}>
              <span className="process-step-pill-fill" aria-hidden="true" />
              <span className="process-step-pill-label">
                <span>{step.id}</span>
                <span className="mx-1.5">—</span>
                <span>{step.title}</span>
              </span>
            </div>

            <p className="mt-8 text-[17px] leading-[1.6] text-[#5c5c5f] sm:text-[18px]">{step.description}</p>
          </article>
        );
      })}
    </div>
  );
}

