import React from "react";
import { motion } from "framer-motion";
import styles from "./styles/Hero.module.css";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Hero: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div id="hero" className={styles.wrapper}>
      <section className={styles.hero}>
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

        <div className={styles.heroOverlay} aria-hidden />

        <div className={styles.heroInner}>
          <motion.div
            className={styles.heroContent}
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: prefersReducedMotion ? 0 : 0.08 }
              }
            }}
          >
            <motion.p className={styles.heroEyebrow} variants={fadeUp}>
              Texas Advanced Robotics Research Lab
            </motion.p>

            <motion.h1 className={styles.heroWordmark} variants={fadeUp}>
              TARRL
            </motion.h1>

            <motion.h2 className={styles.heroHeadline} variants={fadeUp}>
              Advance your career.
              <br />
              Be at the center of the future.
            </motion.h2>

            <motion.p className={styles.heroTagline} variants={fadeUp}>
              Remote first. Open to the world.
            </motion.p>

            <motion.p className={styles.heroBody} variants={fadeUp}>
              An open source Embodied AI lab and venture playground where advanced
              AI, robotics, and human imagination come together to create agents
              and robots that move, perceive, learn, and collaborate in the real
              world.
            </motion.p>

            <motion.div className={styles.heroActions} variants={fadeUp}>
              <a
                className={styles.btnPrimary}
                href="https://hephaestus.international/internships"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply to Join TARRL
              </a>
              <a href="mailto:contact@tarrl.org" className={styles.btnSecondary}>
                Learn More
              </a>
            </motion.div>

            <motion.div className={styles.heroPills} variants={fadeUp}>
              <div className={styles.pill}>
                <div className={styles.pillLabel}>Remote first</div>
                <div className={styles.pillSub}>Join from anywhere</div>
              </div>

              <div className={styles.pill}>
                <div className={styles.pillLabel}>Embodied AI</div>
                <div className={styles.pillSub}>
                  Real robots, real environments
                </div>
              </div>

              <div className={styles.pill}>
                <div className={styles.pillLabel}>Open-source robotics</div>
                <div className={styles.pillSub}>Build in public</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className={styles.issueTag}>
          TARRL.ORG
          <br />
          EST. 2025
          <br />
          REMOTE FIRST
        </div>
      </section>
    </div>
  );
};

export default Hero;
