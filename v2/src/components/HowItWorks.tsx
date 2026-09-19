import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import humanoidPng from "../assets/humanoid-png/humanoids-2.png";
import { keepLastWordsTogether } from "../utils/typography";

const steps = [
  {
    id: "remote",
    title: "Remote first participation",
    body: "You join from wherever you are. Collaboration runs through shared repositories, documentation, and regular online meetings. Time zones are handled through a mix of asynchronous work and scheduled sessions."
  },
  {
    id: "access",
    title: "Access to robots and infrastructure",
    body: "You interact with physical robots through teleoperation, streamed sensor data, and digital twins. You can run experiments, evaluate models, and iterate on behaviors without being physically present."
  },
  {
    id: "pods",
    title: "Distributed research pods",
    body: "You work in focused pods aligned to specific tracks, such as humanoids, quadrupeds, perception, tooling, or space robotics. Each pod has clear goals, milestones, and shared documentation."
  },
  {
    id: "culture",
    title: "Open, written culture",
    body: "Decisions, insights, and results live in shared documents, experiment logs, and code. This lets contributors in different time zones stay aligned and move quickly."
  }
];

const StepItem: React.FC<{
  step: (typeof steps)[number];
  index: number;
  active: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}> = ({ step, index, active, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className={`relative border-l-2 pl-6 py-5 transition-colors ${
        active ? "border-[#BF0A30]" : "border-hairline"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={`absolute -left-[5px] top-7 h-2.5 w-2.5 rounded-full transition-colors ${
          active ? "bg-[#BF0A30]" : "bg-inkSoft/30"
        }`}
      />
      <p className="text-xs font-medium text-inkSoft">
        Step {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="mt-1 font-display text-lg font-medium text-ink">
        {keepLastWordsTogether(step.title)}
      </h3>
      <p className="mt-2 text-base leading-relaxed text-inkSoft">
        {keepLastWordsTogether(step.body)}
      </p>
    </div>
  );
};

export const HowItWorks: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const activeId = steps[activeIndex]?.id ?? steps[0].id;
  const stepNumber = String(activeIndex + 1).padStart(2, "0");

  return (
    <section className="relative overflow-hidden bg-paper py-section">
      <div className="relative mx-auto grid max-w-content gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p
            id="how-it-works"
            className="text-sm font-medium text-inkSoft"
          >
            How It Works
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">
            {keepLastWordsTogether(
              "Remote first is not a compromise in this model, it is a force multiplier."
            )}
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-inkSoft">
            {keepLastWordsTogether("Your location should not limit your impact.")}
          </p>
          <motion.div
            className="mt-10 overflow-hidden rounded-xl3 border border-hairline bg-canvas shadow-card"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={
              prefersReducedMotion ? undefined : { duration: 0.6, ease: "easeOut" }
            }
          >
            <div className="relative flex min-h-[10rem] items-center justify-center p-8">
              <motion.div
                key={stepNumber}
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 flex select-none items-center justify-center font-display text-[5rem] font-medium tracking-tight text-inkSoft opacity-[0.18] md:text-[7rem]"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                animate={prefersReducedMotion ? undefined : { opacity: 0.18, y: 0 }}
                transition={
                  prefersReducedMotion
                    ? undefined
                    : { duration: 0.55, ease: "easeOut" }
                }
              >
                {stepNumber}
              </motion.div>
              <div className="relative z-10 grid w-full grid-cols-3 gap-2 px-2 text-center text-xs font-medium text-ink sm:px-4">
                <span>Remote First</span>
                <span>Embodied AI</span>
                <span>Open-source robotics</span>
              </div>
            </div>
          </motion.div>
          <div className="mt-8 hidden justify-center lg:flex">
            <img
              src={humanoidPng}
              alt=""
              className="max-h-[260px] w-auto object-contain"
            />
          </div>
        </div>

        <div className="space-y-1">
          {steps.map((step, index) => (
            <StepItem
              key={step.id}
              step={step}
              index={index}
              active={activeId === step.id}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => {}}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
