import React, { useRef, useState, useEffect, useCallback } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

import humanoid1 from "../assets/humanoid/humanoids-1.jpg";
import humanoid5 from "../assets/humanoid/humanoids-5.png";
import humanoid6 from "../assets/humanoid/humanoids-6.jpg";
import robodog1 from "../assets/robodog/robodog-1.png";
import robodog2 from "../assets/robodog/robodog-2.jpeg";

const CAROUSEL_IMAGES = [
  { src: humanoid1, alt: "Humanoid robotics research" },
  { src: humanoid5, alt: "Humanoid robotics lab" },
  { src: humanoid6, alt: "Humanoid embodied AI" },
  { src: robodog1, alt: "Quadruped robodog platform" },
  { src: robodog2, alt: "Robodog research" }
];

const AUTOPLAY_INTERVAL_MS = 5000;
const SLIDE_WIDTH_PERCENT = 82;

export const ImageCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  const scrollToIndex = useCallback(
    (index: number) => {
      const el = scrollRef.current;
      if (!el) return;
      const slide = el.querySelector<HTMLElement>(`[data-slide="${index}"]`);
      if (!slide) return;

      const targetLeft =
        slide.offsetLeft - (el.clientWidth - slide.offsetWidth) / 2;

      el.scrollTo({
        left: targetLeft,
        behavior: prefersReducedMotion ? "auto" : "smooth"
      });
      setActiveIndex(index);
    },
    [prefersReducedMotion]
  );

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const slides = el.querySelectorAll<HTMLElement>("[data-slide]");
      const containerCenter = el.scrollLeft + el.clientWidth / 2;
      let closest = 0;
      let minDist = Infinity;
      slides.forEach((slide, i) => {
        const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
        const dist = Math.abs(containerCenter - slideCenter);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      setActiveIndex(closest);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % CAROUSEL_IMAGES.length;
        scrollToIndex(next);
        return next;
      });
    }, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(id);
  }, [prefersReducedMotion, scrollToIndex]);

  return (
    <section
      id="carousel"
      className="relative w-full bg-paper py-section"
      aria-label="Research imagery carousel"
    >
      <div className="relative mx-auto max-w-content px-4 sm:px-6">
        <div className="relative" aria-live="polite">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-[9%] sm:px-[8%] md:gap-5"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch"
            }}
          >
            {CAROUSEL_IMAGES.map((item, index) => (
              <div
                key={index}
                data-slide={index}
                className="relative flex-shrink-0 flex-grow-0 overflow-hidden rounded-xl3 border border-hairline bg-canvas shadow-card"
                style={{
                  width: `${SLIDE_WIDTH_PERCENT}%`,
                  scrollSnapAlign: "center",
                  scrollSnapStop: "always",
                  aspectRatio: "16 / 9"
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover object-center"
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>
            ))}
          </div>

          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-paper to-transparent sm:w-20"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-paper to-transparent sm:w-20"
            aria-hidden
          />
        </div>

        <div className="mt-8 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => {
              const prev =
                activeIndex === 0 ? CAROUSEL_IMAGES.length - 1 : activeIndex - 1;
              scrollToIndex(prev);
            }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-paper text-inkSoft shadow-card transition-colors hover:border-accent/30 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label="Previous slide"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {CAROUSEL_IMAGES.map((_, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => scrollToIndex(index)}
                  className="flex h-5 w-7 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={isActive ? "true" : undefined}
                >
                <span
                  className={`block h-2 rounded-full transition-all duration-300 ease-out ${
                    isActive ? "w-6 bg-accent" : "w-2 bg-ink/15"
                  }`}
                />
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => {
              const next = (activeIndex + 1) % CAROUSEL_IMAGES.length;
              scrollToIndex(next);
            }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-paper text-inkSoft shadow-card transition-colors hover:border-accent/30 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label="Next slide"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
