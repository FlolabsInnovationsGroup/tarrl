import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { ThemeToggle } from "./ThemeToggle";

const headerLinks = [
  { href: "#who-we-are", label: "Who We Are" },
  { href: "#research-tracks", label: "Research Tracks" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#who-this-is-for", label: "Who This Is For" }
];

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const linkClass =
    "rounded-lg px-3 py-2 text-inkSoft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-paper/80 backdrop-blur-xl backdrop-saturate-150">
      <nav className="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-3 md:px-6 md:py-3.5">
        <a
          href="#hero"
          className="flex shrink-0 items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <img
            src="/logo-tarrl.svg"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7"
          />
          <span className="font-display text-lg font-medium tracking-tight text-ink">
            TARRL
          </span>
        </a>

        <button
          type="button"
          className="flex items-center gap-2 rounded-pill border border-hairline px-3.5 py-2 text-sm font-medium text-inkSoft md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span>Menu</span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          <div className="flex items-center gap-1 text-sm font-medium">
            {headerLinks.map((link) => (
              <a key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </a>
            ))}
          </div>
          <ThemeToggle />
          <motion.a
            href="https://hephaestus.international/internships"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 rounded-pill bg-accent px-5 py-2.5 text-sm font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            whileHover={{ scale: prefersReducedMotion ? 1 : 1.02 }}
            whileTap={{ scale: prefersReducedMotion ? 1 : 0.98 }}
          >
            Apply Now
          </motion.a>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, height: 0 }}
            className="border-t border-hairline bg-paper px-4 pb-6 pt-4 md:hidden"
          >
            <div className="flex flex-col gap-1 text-sm font-medium">
              <div className="mb-2 flex justify-end px-3 py-1">
                <ThemeToggle />
              </div>
              {headerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-inkSoft"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://hephaestus.international/internships"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-pill bg-accent px-5 py-3 text-center text-white"
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
