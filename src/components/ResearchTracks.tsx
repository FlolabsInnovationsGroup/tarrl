import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const tracks = [
  {
    id: "humanoids",
    name: "Humanoids",
    description: "Humanoid robots that move, perceive, and act in the real world."
  },
  {
    id: "quadrupeds",
    name: "Quadrupeds",
    description: "Legged robots for locomotion and terrain adaptation."
  },
  {
    id: "perception",
    name: "Perception & Sensing",
    description: "Vision, touch, and multimodal sensing for embodied agents."
  },
  {
    id: "tooling",
    name: "Tooling & Simulation",
    description: "Simulation environments and tooling for rapid iteration."
  },
  {
    id: "space",
    name: "Space Robotics",
    description: "Robotics for terrestrial testbeds and off-world scenarios."
  }
];

const TrackItem: React.FC<{
  track: (typeof tracks)[number];
  index: number;
  active: boolean;
  setActive: () => void;
}> = ({ track, index, active, setActive }) => {
  return (
    <div
      role="button"
      tabIndex={0}
      onMouseEnter={setActive}
      onFocus={setActive}
      className={`relative cursor-default border-l-2 pl-6 py-5 transition-colors ${
        active ? "border-accent" : "border-hairline"
      }`}
    >
      <div
        className={`absolute -left-[5px] top-7 h-2.5 w-2.5 rounded-full transition-colors ${
          active ? "bg-accent" : "bg-inkSoft/30"
        }`}
      />
      <p className="text-xs font-medium text-inkSoft">
        Track {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="mt-1 font-display text-lg font-medium text-ink">
        {track.name}
      </h3>
      <p className="mt-2 text-base leading-relaxed text-inkSoft">
        {track.description}
      </p>
    </div>
  );
};

export const ResearchTracks: React.FC = () => {
  const [activeId, setActiveId] = useState(tracks[0].id);
  const prefersReducedMotion = usePrefersReducedMotion();

  const activeTrack = tracks.find((t) => t.id === activeId) ?? tracks[0];

  return (
    <section className="relative overflow-hidden bg-canvas py-section">
      <div className="relative mx-auto grid max-w-content gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p
            id="research-tracks"
            className="text-sm font-medium text-inkSoft"
          >
            Research Tracks
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">
            Resources and support to accelerate your robotics research.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-inkSoft">
            Focus areas where we're pushing the boundaries of what's possible in embodied AI and robotics.
          </p>

          <motion.div
            className="mt-10 w-full overflow-hidden rounded-xl3 border border-hairline bg-paper p-8 shadow-card lg:aspect-[4/3]"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={
              prefersReducedMotion ? undefined : { duration: 0.6, ease: "easeOut" }
            }
          >
            <div className="flex h-full flex-col justify-between">
              <div className="space-y-3">
                <p className="text-xs font-medium text-inkSoft">
                  Research Tracks
                </p>
                <motion.p
                  key={activeTrack.id}
                  className="font-display text-3xl font-medium tracking-tight text-ink"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                  animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={
                    prefersReducedMotion
                      ? undefined
                      : { duration: 0.4, ease: "easeOut" }
                  }
                >
                  {activeTrack.name}
                </motion.p>
                <p className="max-w-xs text-base leading-relaxed text-inkSoft">
                  {activeTrack.description}
                </p>
              </div>
              <div className="relative flex h-28 items-center justify-center">
                <svg
                  viewBox="0 0 200 120"
                  className="h-full w-auto"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="track-line" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#2B6BED" />
                      <stop offset="50%" stopColor="#6B4DE6" />
                      <stop offset="100%" stopColor="#E0457B" />
                    </linearGradient>
                  </defs>
                  <rect
                    x="8"
                    y="8"
                    width="184"
                    height="104"
                    rx="16"
                    fill="none"
                    stroke="rgba(0,0,0,0.08)"
                  />
                  <motion.path
                    d="M20 96 C60 20 140 20 180 96"
                    fill="none"
                    stroke="url(#track-line)"
                    strokeWidth="2"
                    initial={prefersReducedMotion ? false : { pathLength: 0 }}
                    animate={prefersReducedMotion ? undefined : { pathLength: 1 }}
                    transition={
                      prefersReducedMotion
                        ? undefined
                        : { duration: 1.4, ease: "easeInOut" }
                    }
                  />
                  <motion.circle
                    cx="20"
                    cy="96"
                    r="4"
                    fill="#1A73E8"
                    initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.7 }}
                    animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
                    transition={
                      prefersReducedMotion
                        ? undefined
                        : { delay: 0.1, duration: 0.4 }
                    }
                  />
                  <motion.circle
                    cx="180"
                    cy="96"
                    r="4"
                    fill="#E0457B"
                    initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.7 }}
                    animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
                    transition={
                      prefersReducedMotion
                        ? undefined
                        : { delay: 0.3, duration: 0.4 }
                    }
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="space-y-1">
          {tracks.map((track, index) => (
            <TrackItem
              key={track.id}
              track={track}
              index={index}
              active={activeId === track.id}
              setActive={() => setActiveId(track.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
