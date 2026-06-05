import React from "react";
import { motion } from "framer-motion";

const HIGHLIGHT_TRANSITION = { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };

type ScrollHighlightProps = {
  children: React.ReactNode;
  prefersReducedMotion: boolean;
  color?: string;
  textColorHidden?: string;
};

export const ScrollHighlight: React.FC<ScrollHighlightProps> = ({
  children,
  prefersReducedMotion,
  color = "#bf0a30",
  textColorHidden = "var(--color-ink)"
}) => {
  if (prefersReducedMotion) {
    return (
      <span className="relative inline whitespace-nowrap">
        <span
          aria-hidden="true"
          className="absolute inset-y-0 -left-0.5 -right-0.5 rounded-sm"
          style={{ backgroundColor: color }}
        />
        <span className="relative z-[1] px-1 text-white">{children}</span>
      </span>
    );
  }

  return (
    <motion.span
      className="relative inline whitespace-nowrap"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.85 }}
    >
      <motion.span
        aria-hidden="true"
        className="absolute inset-y-0 -left-0.5 -right-0.5 rounded-sm"
        style={{ backgroundColor: color, transformOrigin: "left center" }}
        variants={{
          hidden: { scaleX: 0 },
          visible: { scaleX: 1 }
        }}
        transition={HIGHLIGHT_TRANSITION}
      />
      <motion.span
        className="relative z-[1] px-1"
        variants={{
          hidden: { color: textColorHidden },
          visible: { color: "#ffffff" }
        }}
        transition={HIGHLIGHT_TRANSITION}
      >
        {children}
      </motion.span>
    </motion.span>
  );
};

type ScrollHighlightBlockProps = {
  children: React.ReactNode;
  prefersReducedMotion: boolean;
  className?: string;
  color?: string;
  textColorHidden?: string;
};

export const ScrollHighlightBlock: React.FC<ScrollHighlightBlockProps> = ({
  children,
  prefersReducedMotion,
  className = "",
  color = "#bf0a30",
  textColorHidden = "var(--color-ink-soft)"
}) => {
  if (prefersReducedMotion) {
    return (
      <div className={`relative ${className}`}>
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-sm"
          style={{ backgroundColor: color }}
        />
        <p className="relative z-[1] px-4 py-5 text-base leading-relaxed text-white">{children}</p>
      </div>
    );
  }

  return (
    <motion.div
      className={`relative ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 rounded-sm"
        style={{ backgroundColor: color, transformOrigin: "left center" }}
        variants={{
          hidden: { scaleX: 0 },
          visible: { scaleX: 1 }
        }}
        transition={HIGHLIGHT_TRANSITION}
      />
      <motion.p
        className="relative z-[1] px-4 py-5 text-base leading-relaxed"
        variants={{
          hidden: { color: textColorHidden },
          visible: { color: "#ffffff" }
        }}
        transition={HIGHLIGHT_TRANSITION}
      >
        {children}
      </motion.p>
    </motion.div>
  );
};
