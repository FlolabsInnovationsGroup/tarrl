import React from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { ScrollHighlight } from "./ScrollHighlight";
import { keepLastWordsTogether } from "../utils/typography";

type WhoListItem =
  | { key: string; text: string }
  | { key: string; content: React.ReactNode };

const items: WhoListItem[] = [
  {
    key: "fields",
    text: "PhD candidates, PhDs, postdocs, or experienced practitioners in AI, robotics, software, systems, design, or closely related fields"
  },
  {
    key: "passion",
    content: (
      <>
        Deep passion for <span className="font-semibold text-ink">robotics</span>,{" "}
        <span className="font-semibold text-ink">AI</span>, and{" "}
        <span className="font-semibold text-ink">embodied intelligence</span>
      </>
    )
  },
  {
    key: "access",
    content: (
      <>
        Want hands on <span className="font-semibold text-ink">access</span> to{" "}
        <span className="font-semibold text-ink">real robots</span> and{" "}
        <span className="font-semibold text-ink">real problems</span> without needing to change
        institutions or countries
      </>
    )
  },
  {
    key: "open-science",
    content: (
      <>
        Care about <span className="font-semibold text-ink">open science</span> and{" "}
        <span className="font-semibold text-ink">open source</span>, not only closed corporate IP
      </>
    )
  },
  {
    key: "remote",
    content: (
      <>
        Thrive in <span className="font-semibold text-ink">remote first</span>,{" "}
        <span className="font-semibold text-ink">globally distributed teams</span>,{" "}
        {keepLastWordsTogether("combining async work with focused live sessions")}
      </>
    )
  },
  {
    key: "careers",
    text: "Want to advance their careers by building visible, credible, high impact projects at the center of where the field is heading"
  }
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

        <h2 className="mt-8 w-full text-pretty text-xl font-medium leading-[1.55] text-ink sm:text-2xl sm:leading-[1.5] lg:text-[1.75rem] lg:leading-[1.45]">
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
          className="mt-14 w-full space-y-5 lg:mt-16"
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
              key={item.key}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex items-start gap-3 text-base leading-relaxed text-inkSoft"
            >
              <span
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                aria-hidden="true"
              />
              <span className="min-w-0 flex-1 text-pretty">
                {"content" in item
                  ? item.content
                  : keepLastWordsTogether(item.text)}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="mt-10 w-full text-pretty text-base leading-relaxed text-inkSoft"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={
            prefersReducedMotion ? undefined : { duration: 0.5, ease: "easeOut" }
          }
        >
          {keepLastWordsTogether(
            "If you see yourself in that mix, you are exactly the kind of person we want to hear from."
          )}
        </motion.p>
      </div>
    </section>
  );
};
