import React, { useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { ScrollHighlightBlock } from "./ScrollHighlight";
import { keepLastWordsTogether } from "../utils/typography";

import humanoidPng from "../assets/humanoid-png/humanoids-1.png";
import robodogPng from "../assets/robodog-png/robodog-1.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

const staggerChildren = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const sectionPad = "py-section";

export const WhoWeAre: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const lines = [
    "We are not a traditional university lab.",
    "Not a corporate R&D center.",
    "Not a bootcamp."
  ];

  return (
    <section className={`relative bg-paper ${sectionPad}`}>
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="min-w-0">
            <p
              id="who-we-are"
              className="text-sm font-medium text-inkSoft"
            >
              Who We Are (And Are Not)
            </p>

            <motion.div
              className="mt-6 space-y-3"
              initial={prefersReducedMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={staggerChildren}
            >
              {lines.map((line) => (
                <motion.p
                  key={line}
                  className="font-display text-2xl font-medium leading-tight tracking-tight text-ink sm:text-3xl md:text-4xl"
                  variants={fadeInUp}
                >
                  {keepLastWordsTogether(line)}
                </motion.p>
              ))}
            </motion.div>

            <motion.div
              className="mt-8 max-w-prose space-y-4 text-pretty text-base leading-relaxed text-inkSoft"
              initial={prefersReducedMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeInUp}
            >
              <p>
                {keepLastWordsTogether(
                  "We are Texas Advanced Robotics Research Lab, an open, venture driven Embodied AI institute where curiosity meets courage and AI, robotics, and design collide."
                )}
              </p>
              <p>
                {keepLastWordsTogether(
                  "TARRL is built primarily for PhD candidates, current PhDs and postdocs, and experienced industry professionals who want to go beyond papers, titles, and conference badges and actually ship code, systems, and robots that other people can use."
                )}
              </p>
              <p>
                {keepLastWordsTogether(
                  "Whether your background is in AI or machine learning, robotics, software engineering, systems architecture, human robot interaction, controls, product design, simulation, or another relevant area, there is space for you to contribute at the Research Associate level."
                )}
              </p>
            </motion.div>

            <motion.div
              className="mt-10 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2"
              initial={prefersReducedMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={staggerChildren}
            >
              <motion.span
                variants={fadeInUp}
                className="inline-flex items-center gap-2 text-sm font-medium text-inkSoft"
              >
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                Remote first by design
              </motion.span>
              <motion.span
                variants={fadeInUp}
                className="inline-flex items-center gap-2 text-sm font-medium text-inkSoft"
              >
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                Join from anywhere
              </motion.span>
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center lg:justify-end min-w-0"
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeInUp}
          >
            <img
                src={humanoidPng}
                alt="Humanoid robotics"
                className="max-h-[280px] w-auto max-w-full object-contain sm:max-h-[360px] lg:max-h-[420px]"
                loading="lazy"
                decoding="async"
              />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const WhyWeExist: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const problems = [
    "Real robots sit behind funding cycles, closed labs, or corporate NDAs",
    "Labs and infrastructure are expensive",
    "Open datasets are fragmented",
    "Brilliant ideas often stop at the simulation or paper stage"
  ];

  const verticals = [
    "Education",
    "Health and human performance",
    "Travel and hospitality",
    "Entertainment and experiential media",
    "The space sector"
  ];

  return (
    <section className={`relative bg-canvas ${sectionPad}`}>
      <div className="relative mx-auto max-w-content px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <p
              id="why-we-exist"
              className="text-sm font-medium text-inkSoft"
            >
              Why We Exist
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">
              In advanced robotics and AI, access is often a maze
            </h2>
            <motion.ul
              className="mt-8 space-y-4 text-base leading-relaxed text-inkSoft"
              initial={prefersReducedMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={staggerChildren}
            >
              {problems.map((item) => (
                <motion.li key={item} className="flex gap-3" variants={fadeInUp}>
                  <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-accent" aria-hidden="true" />
                    <span>{keepLastWordsTogether(item)}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.p
              className="mt-8 max-w-prose text-base leading-relaxed text-inkSoft"
              initial={prefersReducedMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeInUp}
            >
              Breaking into serious Embodied AI work should not depend on your zip code, your
              passport, or a single advisor.
            </motion.p>

            <motion.p
              className="mt-4 max-w-prose text-base leading-relaxed text-inkSoft"
              initial={prefersReducedMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeInUp}
            >
              TARRL exists to widen the doors, connect top minds to real robots and realistic
              environments, ignite hands-on collaboration, and make the work real, open, and
              reproducible for everyone on the team.
            </motion.p>
          </div>

          <div className="flex flex-col gap-8 min-w-0">
            <motion.div
              className="flex justify-center min-w-0"
              initial={prefersReducedMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeInUp}
            >
              <div className="w-full overflow-hidden rounded-xl3 border border-hairline bg-paper shadow-card">
                <img
                  src={robodogPng}
                  alt="Robotic dog platform"
                  className="max-h-[200px] w-full max-w-full object-contain p-6 sm:max-h-[260px] md:max-h-[300px]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </motion.div>
            <div>
              <p className="text-sm font-medium text-inkSoft">
                Our Verticals
              </p>
              <motion.ul
                className="mt-4 grid gap-x-6 gap-y-3 text-base leading-relaxed text-inkSoft sm:grid-cols-2"
                initial={prefersReducedMotion ? false : "hidden"}
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={staggerChildren}
              >
                {verticals.map((vertical) => (
                  <motion.li key={vertical} className="flex gap-3" variants={fadeInUp}>
                    <span
                      className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    <span>{keepLastWordsTogether(vertical)}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>

          <ScrollHighlightBlock
            prefersReducedMotion={prefersReducedMotion}
            color="#1A73E8"
            className="w-full lg:col-span-2"
          >
            Through our connection to the Texas innovation and space ecosystem, including NASA
            related activity, SpaceX and other space leaders, and collaboration with Texas A&M,
            TARRL is well positioned to explore how Embodied AI and robotics can support space
            industry challenges, from terrestrial testbeds to off world scenarios.
          </ScrollHighlightBlock>
        </div>
      </div>
    </section>
  );
};

export const WhatWeBelieve: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const scrollRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const beliefs = [
    {
      title: "Turn ideas into reality",
      body: "Turn your research ideas into running code, robots, and experiments.",
      icon: "/turn_ideas_into_reality.png"
    },
    {
      title: "Open source stacks",
      body: "Prototype open source stacks that others can build on and cite.",
      icon: "/stack.png"
    },
    {
      title: "Ambitious concepts",
      body: "Explore ambitious concepts that do not fit neatly into a single grant or corporate roadmap.",
      icon: "/concept.png"
    },
    {
      title: "Global community",
      body: "Work with a global, remote first community of serious builders who care about impact and rigor.",
      icon: "/global.png"
    }
  ];

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

  const scrollByCard = useCallback(
    (direction: "prev" | "next") => {
      const el = scrollRef.current;
      if (!el) return;
      const card = el.querySelector<HTMLElement>("[data-belief-card]");
      const gap = parseFloat(getComputedStyle(el).columnGap || getComputedStyle(el).gap) || 32;
      const amount = card ? card.offsetWidth + gap : el.clientWidth * 0.85;
      el.scrollBy({
        left: direction === "next" ? amount : -amount,
        behavior: prefersReducedMotion ? "auto" : "smooth"
      });
    },
    [prefersReducedMotion]
  );

  return (
    <section className="relative overflow-hidden bg-[#0B0B0B] py-section text-white">
      <video
        ref={videoRef}
        autoPlay={!prefersReducedMotion}
        muted
        loop
        playsInline
        preload="auto"
        src="/tarrl-bg-1080.mp4"
        poster={prefersReducedMotion ? "/tarrl-bg-poster.jpg" : undefined}
        aria-hidden="true"
        onLoadedData={startVideo}
        onCanPlay={startVideo}
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-center"
      >
        <source src="/tarrl-bg-1080.mp4" type="video/mp4" />
        <source src="/tarrl-bg-1080.webm" type="video/webm" />
      </video>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[#0B0B0B]/55 bg-gradient-to-b from-[#0B0B0B]/65 via-[#0B0B0B]/45 to-[#0B0B0B]/70"
      />

      <div className="relative z-10 mx-auto w-full max-w-content px-4 sm:px-6">
        <div className="mb-14 lg:mb-20">
          <p
            id="what-we-believe"
            className="text-sm font-medium text-[#9AA0A6]"
          >
            What We Believe
          </p>
          <h2 className="mt-3 w-full text-pretty font-display text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl">
            We are not here to give you one more credential and send you back to business as usual.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#9AA0A6] lg:max-w-3xl xl:max-w-4xl">
            We exist to put you closer to the center of what comes next in Embodied AI.
          </p>
        </div>

        <div className="relative">
          <motion.div
            ref={scrollRef}
            className="flex w-full snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth pb-2 scrollbar-hide sm:gap-10 lg:grid lg:snap-none lg:grid-cols-4 lg:overflow-visible lg:pb-0"
            style={{ WebkitOverflowScrolling: "touch" }}
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerChildren}
          >
            {beliefs.map((belief) => (
              <motion.article
                key={belief.title}
                data-belief-card
                variants={fadeInUp}
                className="group flex w-[min(78vw,320px)] shrink-0 snap-start flex-col transition-transform duration-300 hover:-translate-y-0.5 lg:w-full lg:shrink"
              >
                <img
                  src={belief.icon}
                  alt=""
                  decoding="async"
                  className="mb-6 h-14 w-14 object-contain sm:h-16 sm:w-16"
                />
                <h3 className="max-w-[16rem] font-display text-lg font-bold leading-snug text-white sm:text-xl">
                  {keepLastWordsTogether(belief.title)}
                </h3>
                <p className="mt-3 max-w-[16rem] text-[0.9375rem] leading-[1.5] text-[#9AA0A6] sm:text-base">
                  {keepLastWordsTogether(belief.body)}
                </p>
              </motion.article>
            ))}
          </motion.div>

          <div className="mt-8 lg:hidden">
            <div className="inline-flex items-center rounded-full border border-white/[0.12] bg-[#0E0E0E]/80 p-1 backdrop-blur-sm">
              <button
                type="button"
                onClick={() => scrollByCard("prev")}
                className="flex h-10 w-10 items-center justify-center rounded-full text-[#9AA0A6] transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4D8BFF]"
                aria-label="Scroll beliefs left"
              >
                <span className="text-xl leading-none" aria-hidden="true">
                  ‹
                </span>
              </button>
              <button
                type="button"
                onClick={() => scrollByCard("next")}
                className="flex h-10 w-10 items-center justify-center rounded-full text-[#9AA0A6] transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4D8BFF]"
                aria-label="Scroll beliefs right"
              >
                <span className="text-xl leading-none" aria-hidden="true">
                  ›
                </span>
              </button>
            </div>
          </div>
        </div>

        <motion.p
          className="mt-14 w-full text-pretty text-base leading-relaxed text-[#9AA0A6] sm:text-[1.0625rem] lg:mt-16 lg:text-lg lg:leading-relaxed"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          No one owns your mind here. We build in the open, share credit, and let the work and
          results speak for themselves.
        </motion.p>
      </div>
    </section>
  );
};
