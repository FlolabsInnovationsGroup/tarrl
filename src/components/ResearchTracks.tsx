import React, { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { keepLastWordsTogether } from "../utils/typography";

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
        active ? "border-accent" : "border-white/15"
      }`}
    >
      <div
        className={`absolute -left-[5px] top-7 h-2.5 w-2.5 rounded-full transition-colors ${
          active ? "bg-accent" : "bg-white/30"
        }`}
      />
      <p className="text-xs font-medium text-[#9AA0A6]">
        Track {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="mt-1 font-display text-lg font-medium text-white">
        {keepLastWordsTogether(track.name)}
      </h3>
      <p className="mt-2 text-pretty text-base leading-relaxed text-[#9AA0A6]">
        {keepLastWordsTogether(track.description)}
      </p>
    </div>
  );
};

export const ResearchTracks: React.FC = () => {
  const [activeId, setActiveId] = useState(tracks[0].id);
  const prefersReducedMotion = usePrefersReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeTrack = tracks.find((t) => t.id === activeId) ?? tracks[0];

  const startVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion) return;
    void video.play().catch(() => {});
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const video = videoRef.current;
    if (!video) return;

    startVideo();

    const section = video.closest("section");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) startVideo();
        else video.pause();
      },
      { threshold: 0, rootMargin: "100px 0px" }
    );

    if (section) observer.observe(section);

    const onVisible = () => {
      if (document.visibilityState === "visible") startVideo();
    };
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisible);
      video.pause();
    };
  }, [prefersReducedMotion, startVideo]);

  return (
    <section className="relative overflow-hidden bg-[#0B0B0B] py-section text-white">
      <video
        ref={videoRef}
        autoPlay={!prefersReducedMotion}
        muted
        loop
        playsInline
        preload="auto"
        src="/research-tracks-bg.mp4"
        aria-hidden="true"
        onLoadedData={startVideo}
        onCanPlay={startVideo}
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-center"
      >
        <source src="/research-tracks-bg.mp4" type="video/mp4" />
      </video>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[#0B0B0B]/55 bg-gradient-to-b from-[#0B0B0B]/65 via-[#0B0B0B]/45 to-[#0B0B0B]/70"
      />

      <div className="relative z-10 mx-auto grid max-w-content gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16">
        <div className="min-w-0 lg:sticky lg:top-28 lg:self-start">
          <p
            id="research-tracks"
            className="text-sm font-medium text-[#9AA0A6]"
          >
            Research Tracks
          </p>
          <h2 className="mt-3 text-pretty font-display text-2xl font-medium leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            {keepLastWordsTogether(
              "Resources and support to accelerate your robotics research."
            )}
          </h2>
          <p className="mt-4 w-full max-w-prose text-pretty text-base leading-relaxed text-[#9AA0A6]">
            {keepLastWordsTogether(
              "Focus areas where we're pushing the boundaries of what's possible in embodied AI and robotics."
            )}
          </p>

          <motion.div
            className="mt-10 w-full min-w-0 rounded-xl3 border border-white/10 bg-[#161616]/85 p-5 shadow-card backdrop-blur-sm sm:p-8"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={
              prefersReducedMotion ? undefined : { duration: 0.6, ease: "easeOut" }
            }
          >
            <div className="space-y-3">
              <p className="text-xs font-medium text-[#9AA0A6]">Research Tracks</p>
              <motion.p
                key={activeTrack.id}
                className="text-pretty font-display text-2xl font-medium tracking-tight text-white sm:text-3xl"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                transition={
                  prefersReducedMotion
                    ? undefined
                    : { duration: 0.4, ease: "easeOut" }
                }
              >
                {keepLastWordsTogether(activeTrack.name)}
              </motion.p>
              <p className="w-full text-pretty text-base leading-relaxed text-[#9AA0A6]">
                {keepLastWordsTogether(activeTrack.description)}
              </p>
            </div>
          </motion.div>
        </div>

        <div className="min-w-0 space-y-1">
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
