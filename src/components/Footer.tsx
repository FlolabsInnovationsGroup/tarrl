import React from "react";
import { useTheme } from "../context/ThemeContext";

const navigationLinks = [
  { href: "#who-we-are", label: "Who we are" },
  { href: "#research-tracks", label: "Research tracks" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#who-this-is-for", label: "Who is this for" },
];

const companyLinks = [
  {
    href: "https://hephaestus.international/internships",
    label: "Careers",
    external: true,
  },
  {
    href: "https://flolabsrd.notion.site/merch-background",
    label: "Merch",
    external: true,
  },
];

const checkMoreColumns = [
  [
    { href: "https://www.caipo.ai/", label: "CAIPO", external: true },
    { href: "https://moodchanger.ai/", label: "MoodChanger", external: true },
    // TODO: real URL
    { href: "#", label: "RoboCollective" },
    {
      href: "https://www.athleticperformanceintelligence.com/#cta",
      label: "Athletic Performance",
      external: true,
    },
  ],
  [
    { href: "https://flobrain.vercel.app/", label: "FloBrain", external: true },
    { href: "https://www.flomadtravel.com/", label: "FloTravel", external: true },
    {
      href: "https://www.spaceventuresinstitute.com/",
      label: "Space Ventures Institute",
      external: true,
    },
    {
      href: "https://www.youtube.com/playlist?list=PLwvFs7_Vcdwvn4eiECTY8tAB-M6cB5_B9",
      label: "Connecting the dots",
      external: true,
    },
  ],
  [
    {
      href: "https://hephaestus.international/",
      label: "Hepheastus International",
      external: true,
    },
    { href: "https://www.flostudios.ai/", label: "FloStudio", external: true },
  ],
];

type FooterLinkItem = {
  href: string;
  label: string;
  external?: boolean;
};

const SendIcon: React.FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M22 2 11 13" />
    <path d="M22 2 15 22 11 13 2 9 22 2z" />
  </svg>
);

const YouTubeIcon: React.FC<{ playFill: string }> = ({ playFill }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8z" />
    <path d="M9.75 15.02 15.5 12 9.75 8.98v6.04z" fill={playFill} />
  </svg>
);

const FooterLinkList: React.FC<{
  links: FooterLinkItem[];
  linkClass: string;
}> = ({ links, linkClass }) => (
  <ul className="mt-4 flex flex-col gap-3.5">
    {links.map((link) => (
      <li key={link.label}>
        <a
          href={link.href}
          {...(link.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className={linkClass}
        >
          {link.label}
        </a>
      </li>
    ))}
  </ul>
);

export const Footer: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const styles = {
    footer: isDark ? "bg-[#0B0B0B] text-white" : "bg-paper text-ink",
    heading: isDark
      ? "text-[13px] font-bold uppercase tracking-[0.2em] text-white"
      : "text-[13px] font-bold uppercase tracking-[0.2em] text-ink",
    link: isDark
      ? "text-[15px] text-white underline underline-offset-2 transition-colors hover:text-[#BF0A30] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      : "text-[15px] text-ink underline underline-offset-2 transition-colors hover:text-[#BF0A30] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
    muted: isDark ? "text-[#8A8A8A]" : "text-inkSoft",
    wordmark: isDark ? "text-white" : "text-ink",
    divider: isDark ? "bg-white/25" : "bg-ink/20",
    borderDivider: isDark ? "border-white/[0.12]" : "border-ink/[0.12]",
    input: isDark
      ? "border-white/20 bg-transparent text-white placeholder:text-[#8A8A8A] focus:border-white/40 focus-visible:ring-white/30"
      : "border-ink/20 bg-paper text-ink placeholder:text-inkSoft focus:border-ink/40 focus-visible:ring-ink/20",
    submit: isDark
      ? "bg-[#1A1A1A] text-white hover:bg-[#252525] focus-visible:outline-white"
      : "bg-ink text-white hover:bg-ink/90 focus-visible:outline-ink",
    social: isDark
      ? "text-white hover:text-[#BF0A30] focus-visible:outline-white"
      : "text-ink hover:text-[#BF0A30] focus-visible:outline-ink",
    youtubePlayFill: isDark ? "#0B0B0B" : "#ffffff",
  };

  const handleNewsletterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <footer className={`py-16 transition-colors lg:py-20 ${styles.footer}`}>
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-16 xl:gap-24">
          <div className="flex flex-col gap-10">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <img
                  src="/logo-tarrl.svg"
                  alt=""
                  width={36}
                  height={36}
                  className="h-9 w-9 shrink-0"
                />
                <span
                  className={`text-lg font-bold uppercase tracking-wide ${styles.wordmark}`}
                >
                  TARRL
                </span>
                <span
                  className={`hidden h-4 w-px sm:block ${styles.divider}`}
                  aria-hidden="true"
                />
                <span className={`text-[13px] ${styles.muted}`}>
                  a FloLabs project
                </span>
              </div>
              <p
                className={`mt-5 max-w-[320px] text-[13px] leading-relaxed ${styles.muted}`}
              >
                A brief explanation about the website. A brief explanation about
                the website. A brief explanation about the website. A brief
                explanation about the website.
              </p>
            </div>

            <div>
              <p className={styles.heading}>Newsletter</p>
              <p className={`mt-3 text-[13px] ${styles.muted}`}>
                Receieve the newest FloLabs updates at:
              </p>
              <form
                onSubmit={handleNewsletterSubmit}
                className="mt-4 w-full max-w-sm"
                noValidate
              >
                <div className="relative flex w-full">
                  <label htmlFor="footer-email" className="sr-only">
                    Email address for newsletter
                  </label>
                  <input
                    id="footer-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email..."
                    className={`w-full border py-3 pl-4 pr-12 text-[15px] focus:outline-none focus-visible:ring-2 ${styles.input}`}
                  />
                  <button
                    type="submit"
                    className={`absolute right-0 top-0 flex aspect-square h-full w-11 items-center justify-center transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${styles.submit}`}
                    aria-label="Subscribe to newsletter"
                  >
                    <SendIcon />
                  </button>
                </div>
              </form>
            </div>

            <div>
              <p className={styles.heading}>Social Media</p>
              <div className="mt-4">
                <a
                  href="https://www.youtube.com/@FloLabsInnovation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${styles.social}`}
                  aria-label="YouTube"
                >
                  <YouTubeIcon playFill={styles.youtubePlayFill} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10 lg:gap-12">
            <div className="grid gap-10 sm:grid-cols-2 sm:gap-8">
              <div>
                <p className={styles.heading}>Navigation</p>
                <FooterLinkList links={navigationLinks} linkClass={styles.link} />
              </div>
              <div>
                <p className={styles.heading}>Company</p>
                <FooterLinkList links={companyLinks} linkClass={styles.link} />
              </div>
            </div>

            <div>
              <p className={styles.heading}>Check More</p>
              <div className="mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                {checkMoreColumns.map((column, columnIndex) => (
                  <ul key={columnIndex} className="flex flex-col gap-3.5">
                    {column.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          {...(link.external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className={styles.link}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-16 border-t pt-8 ${styles.borderDivider}`}>
          <p
            className={`text-center text-[13px] tracking-[0.15em] ${styles.muted}`}
          >
            Live long and prosper.
          </p>
        </div>
      </div>
    </footer>
  );
};
