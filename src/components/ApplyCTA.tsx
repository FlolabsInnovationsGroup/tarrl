import React from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import styles from "./styles/ApplyCTA.module.css";

export const ApplyCTA: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden py-section">
      <div className={`${styles.wrapper} mx-4 sm:mx-6 lg:mx-auto lg:max-w-content`}>
        <div className={styles.flagBg} aria-hidden>
          <div className={styles.flagBlue}>
            <svg
              className={styles.flagStar}
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35"
                fill="white"
              />
            </svg>
          </div>
          <div className={styles.flagWhite} />
          <div className={styles.flagRedStripe} />
        </div>
        <div className={styles.overlay} aria-hidden />

        <div className={`${styles.panel} px-6 py-16 text-center sm:px-12 sm:py-20 lg:py-24`}>
          <p
            id="apply"
            className="text-sm font-medium text-white/80"
          >
            Join TARRL as a Research Associate
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            We are assembling a global network of Research Associate Interns and Fellows.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85">
            PhD candidates, PhDs, postdocs, experienced professionals, and exceptional builders across
            AI, robotics, software, systems, design, and related fields are invited to work on
            ambitious open Embodied AI projects in education, health, travel and hospitality,
            entertainment, and the space sector.
          </p>
          <div className="mx-auto mt-10 grid max-w-xl gap-6 sm:grid-cols-2 sm:gap-8 sm:text-left">
            <div className="flex flex-col items-center gap-3 sm:items-start">
              <img
                src="/you_bring.png"
                alt=""
                decoding="async"
                className="h-12 w-12 object-contain sm:h-14 sm:w-14"
              />
              <p className="text-base leading-relaxed text-white/90">
                <span className="font-bold text-white">You bring</span>
                <br />
                The expertise, curiosity, and drive
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 sm:items-start">
              <img
                src="/we_provide.png"
                alt=""
                decoding="async"
                className="h-12 w-12 object-contain sm:h-14 sm:w-14"
              />
              <p className="text-base leading-relaxed text-white/90">
                <span className="font-bold text-white">We provide</span>
                <br />
                The robots, infrastructure, and mission
              </p>
            </div>
          </div>
          <motion.div
            className="mt-10 flex justify-center"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={
              prefersReducedMotion ? undefined : { duration: 0.55, ease: "easeOut" }
            }
          >
            <a
              href="https://hephaestus.international/internships"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              Apply to Join TARRL
            </a>
          </motion.div>
          <p className="mt-8 text-sm font-medium text-white/70">
            Remote first · Embodied AI · Open-source robotics
          </p>
        </div>
      </div>
    </section>
  );
};
