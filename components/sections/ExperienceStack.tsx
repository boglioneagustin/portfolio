 "use client";

import { useEffect, useRef, useState } from "react";

type TextCard = {
  title: string;
  text: string;
  entries?: never;
};

type CareerCard = {
  title: string;
  text?: never;
  entries: [string, string][];
};

export type AboutStackCard = TextCard | CareerCard;

type ExperienceStackProps = {
  cards: AboutStackCard[];
};

export default function ExperienceStack({ cards }: ExperienceStackProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    let rafId = 0;
    let ticking = false;

    const updateActiveCard = () => {
      const anchor = window.innerWidth >= 768 ? 140 : window.innerHeight * 0.36;
      let nextActive = 0;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        if (rect.top <= anchor) {
          nextActive = index;
        }
      });

      setActiveIndex((prev) => (prev === nextActive ? prev : nextActive));
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      rafId = window.requestAnimationFrame(updateActiveCard);
    };

    updateActiveCard();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="about-cards-column mx-auto mt-12 max-w-[760px] lg:mt-0">
      {cards.map((card, index) => {
        const labelIsOrange = index === activeIndex;
        const delay = Math.min(index * 0.08, 0.24);
        const stackOrder = 20 + index;
        const careerEntries = "entries" in card && Array.isArray(card.entries) ? card.entries : null;

        return (
          <article
            key={card.title}
            ref={(node) => {
              cardRefs.current[index] = node;
            }}
            className="about-card-surface about-card-reveal about-card-hover md:sticky md:top-[96px] lg:top-[104px]"
            style={{ transitionDelay: `${delay}s`, zIndex: stackOrder }}
          >
            <p className="mb-5 flex items-center gap-3">
              <span
                className={`inline-block h-2.5 w-2.5 rounded-full transition-colors duration-[220ms] ease-in-out ${
                  labelIsOrange ? "bg-[#ef4f2b]" : "bg-[#b7b7bf]"
                }`}
              />
              <span
                className={`experience-card-title transition-colors duration-[220ms] ease-in-out ${
                  labelIsOrange ? "text-[#ef4f2b]" : "text-[#8f8f97]"
                }`}
              >
                {card.title}
              </span>
            </p>

            {careerEntries ? (
              <div className="space-y-0">
                {careerEntries.map(([role, date]) => (
                  <div
                    key={role}
                    className="flex items-start justify-between gap-6 border-b border-black/[0.05] py-3.5 last:border-b-0 last:pb-0"
                  >
                    <p className="max-w-[460px] text-[22px] font-normal leading-[1.2] tracking-[0] text-[#27272a] xl:text-[24px]">{role}</p>
                    <p className="whitespace-nowrap text-[22px] font-medium leading-[1.2] tracking-[0] text-[#3d4350] xl:text-[24px]">{date}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="experience-card-body">{card.text}</p>
            )}
          </article>
        );
      })}
    </div>
  );
}
