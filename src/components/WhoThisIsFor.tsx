import React from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { ScrollHighlight } from "./ScrollHighlight";

const items = [
  "PhD candidates, PhDs, postdocs, or experienced practitioners in AI, robotics, software, systems, design, or closely related fields",
  "Deep passion for robotics, AI, and embodied intelligence",
  "Want hands on access to real robots and real problems without needing to change institutions or countries",
  "Care about open science and open source, not only closed corporate IP",
  "Thrive in remote first, globally distributed teams, combining async work with focused live sessions",
  "Want to advance their careers by building visible, credible, high impact projects at the center of where the field is heading"
];

export const WhoThisIsFor: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative bg-canvas py-section">
      <div className="relative mx-auto max-w-content px-4 sm:px-6">
        <p
          id="who-this-is-for"
          className="text-sm font-medium text-inkSoft"
        >
          Who This Is For
        </p>

        <h2 className="mt-8 w-full max-w-5xl text-xl font-medium leading-[1.55] text-ink sm:text-2xl sm:leading-[1.5] lg:text-[1.75rem] lg:leading-[1.45]">
          TARRL Research Associate roles are{" "}
          <ScrollHighlight prefersReducedMotion={prefersReducedMotion}>
            internship
          </ScrollHighlight>{" "}
          style positions designed primarily for PhD level and experienced candidates, with an{" "}
          <ScrollHighlight prefersReducedMotion={prefersReducedMotion}>
            open door
          </ScrollHighlight>{" "}
          for exceptional and highly motivated applicants from other paths.
        </h2>

        <motion.div
          className="mt-14 space-y-3 lg:mt-16"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {items.map((item) => (
            <motion.div
              key={item}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 }
              }}
              className="group flex w-full items-start gap-4 rounded-xl3 border border-hairline bg-paper px-5 py-4 text-left text-base leading-relaxed text-ink shadow-card transition-shadow hover:shadow-cardHover"
            >
              <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-md border-2 border-hairline bg-canvas transition-colors group-hover:border-accent group-hover:bg-accent">
                <svg
                  viewBox="0 0 16 16"
                  className="h-3 w-3 text-white opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <polyline
                    points="3 8.5 6.5 12 13 4.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>{item}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="mt-10 max-w-prose text-base leading-relaxed text-inkSoft"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={
            prefersReducedMotion ? undefined : { duration: 0.5, ease: "easeOut" }
          }
        >
          If you see yourself in that mix, you are exactly the kind of person we want to hear from.
        </motion.p>
      </div>
    </section>
  );
};
