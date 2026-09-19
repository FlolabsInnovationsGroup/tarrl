import React, { useId, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const navigationLinks = [
  { href: "#who-we-are", label: "Who we are" },
  { href: "#research-tracks", label: "Research tracks" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#who-this-is-for", label: "Who is this for" },
  { href: "#apply", label: "Apply now" },
];

const projectLinks = [
  {
    href: "https://www.athleticperformanceintelligence.com/",
    label: "Athletic Performance Intelligence",
    external: true,
  },
  { href: "https://www.caipo.ai/", label: "CAIPO", external: true },
  {
    href: "https://www.youtube.com/@flolabsinnovation",
    label: "Connecting the Dots",
    external: true,
  },
  {
    href: "http://cosmosintelligence.org/",
    label: "Cosmos Intelligence",
    external: true,
  },
  { href: "https://www.flomadtravel.com/", label: "Flo Travel", external: true },
  { href: "https://www.flobrain.ai/", label: "FloBrain", external: true },
  {
    href: "https://www.flolabsinnovations.com/",
    label: "FloLabs Innovations Group",
    external: true,
  },
  {
    href: "https://www.flolabs.international/",
    label: "FloLabs International",
    external: true,
  },
  { href: "https://www.flostudios.ai/", label: "FloStudios", external: true },
  {
    href: "https://hephaestus.international/",
    label: "Hepheastus International",
    external: true,
  },
  {
    href: "https://www.bootcampuniversity.org/",
    label: "Innovation Bootcamp University",
    external: true,
  },
  { href: "https://www.moodchanger.ai/", label: "MoodChanger", external: true },
  {
    href: "https://www.legalethicsventuresinstitute.com/",
    label: "Legal & Ethics Ventures Institute",
    external: true,
  },
  { href: "https://www.robocollective.ai/", label: "RoboCollective", external: true },
  {
    href: "https://www.spaceventuresinstitute.com/",
    label: "Space Ventures Institute",
    external: true,
  },
  { href: "https://tarrl.org/", label: "TARRL", external: true },
];

const companyLinks = [
  {
    href: "https://hephaestus.international/internships",
    label: "Careers",
    external: true,
  },
  { href: "mailto:contact@tarrl.org", label: "Contact Us" },
  {
    href: "https://flolabsrd.notion.site/merch-background",
    label: "Merch",
    external: true,
  },
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

const LinkedInIcon: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const FacebookIcon: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.01 10.13 11.91v-8.41H7.08v-3.5h3.05V9.41c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.68.23 2.68.23v2.95h-1.51c-1.49 0-1.95.92-1.95 1.87v2.25h3.32l-.53 3.5h-2.79v8.41C19.61 23.08 24 18.09 24 12.07z" />
  </svg>
);

const InstagramIcon: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.73 3.73 0 0 1-1.38-.9 3.73 3.73 0 0 1-.9-1.38c-.16-.43-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0-2.16C8.74 0 8.33.01 7.05.07 5.78.13 4.9.34 4.14.64a5.86 5.86 0 0 0-2.12 1.38A5.86 5.86 0 0 0 .64 4.14C.34 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.27 2.15.57 2.91a5.86 5.86 0 0 0 1.38 2.12 5.86 5.86 0 0 0 2.12 1.38c.76.3 1.64.51 2.91.57C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.27 2.91-.57a5.86 5.86 0 0 0 2.12-1.38 5.86 5.86 0 0 0 1.38-2.12c.3-.76.51-1.64.57-2.91.06-1.28.07-1.67.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.27-2.15-.57-2.91a5.86 5.86 0 0 0-1.38-2.12A5.86 5.86 0 0 0 19.86.64c-.76-.3-1.64-.51-2.91-.57C15.67.01 15.26 0 12 0z" />
    <path d="M12 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4z" />
    <circle cx="18.41" cy="5.59" r="1.44" />
  </svg>
);

const TikTokIcon: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const RedditIcon: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
  </svg>
);

const ChevronIcon: React.FC<{ open: boolean }> = ({ open }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="currentColor"
    aria-hidden="true"
    className={`shrink-0 transition-transform duration-200 ${open ? "rotate-90" : ""}`}
  >
    <path d="M4.5 2 9 6 4.5 10V2z" />
  </svg>
);

const FooterLinkList: React.FC<{
  links: FooterLinkItem[];
  linkClass: string;
  className?: string;
}> = ({ links, linkClass, className = "mt-4 flex flex-col gap-3.5" }) => (
  <ul className={className}>
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

const FooterCollapsibleSection: React.FC<{
  title: string;
  links: FooterLinkItem[];
  linkClass: string;
  headingClass: string;
  sectionBorderClass: string;
  toggleFocusClass: string;
}> = ({
  title,
  links,
  linkClass,
  headingClass,
  sectionBorderClass,
  toggleFocusClass,
}) => {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className={`lg:border-b-0 ${sectionBorderClass}`}>
      <button
        type="button"
        className={`flex w-full items-center justify-between gap-4 py-4 text-left lg:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${toggleFocusClass}`}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <span className={headingClass}>{title}</span>
        <ChevronIcon open={open} />
      </button>

      <p className={`hidden lg:block ${headingClass}`}>{title}</p>

      <div
        id={panelId}
        className={open ? "block pb-4 lg:pb-0" : "hidden lg:block"}
      >
        <FooterLinkList
          links={links}
          linkClass={linkClass}
          className="flex flex-col gap-3.5 pb-1 lg:mt-4 lg:pb-0"
        />
      </div>
    </div>
  );
};

export const Footer: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const styles = {
    footer: isDark ? "bg-[#0B0B0B] text-white" : "bg-paper text-ink",
    heading: isDark
      ? "text-[13px] font-bold uppercase tracking-[0.2em] text-white"
      : "text-[13px] font-bold uppercase tracking-[0.2em] text-ink",
    link: isDark
      ? "text-[15px] text-white transition-colors hover:text-[#BF0A30] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      : "text-[15px] text-ink transition-colors hover:text-[#BF0A30] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
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
    toggleFocus: isDark
      ? "focus-visible:outline-white"
      : "focus-visible:outline-ink",
  };

  const handleNewsletterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const renderNewsletterBlock = (inputId: string) => (
    <div>
      <p className={styles.heading}>Newsletter</p>
      <p className={`mt-3 text-[13px] ${styles.muted}`}>
        Receive the newest FloLabs updates at:
      </p>
      <form
        onSubmit={handleNewsletterSubmit}
        className="mt-4 w-full max-w-sm"
        noValidate
      >
        <div className="relative flex w-full">
          <label htmlFor={inputId} className="sr-only">
            Email address for newsletter
          </label>
          <input
            id={inputId}
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
  );

  const socialBlock = (
    <div>
      <p className={styles.heading}>Social Media</p>
      <div className="mt-4 flex flex-wrap items-center gap-4">
        <a
          href="https://www.youtube.com/@flolabsinnovation"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${styles.social}`}
          aria-label="YouTube"
        >
          <YouTubeIcon playFill={styles.youtubePlayFill} />
        </a>
        <a
          href="https://www.linkedin.com/company/flolabs-innovation/"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${styles.social}`}
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://www.facebook.com/people/Flo-Labs-RD/61572285432918/"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${styles.social}`}
          aria-label="Facebook"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://www.instagram.com/flolabsinnovations/"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${styles.social}`}
          aria-label="Instagram"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://www.tiktok.com/@flomadlabs"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${styles.social}`}
          aria-label="TikTok"
        >
          <TikTokIcon />
        </a>
        <a
          href="https://www.reddit.com/user/FloLabs_Innovations/"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${styles.social}`}
          aria-label="Reddit"
        >
          <RedditIcon />
        </a>
      </div>
    </div>
  );

  return (
    <footer className={`py-16 transition-colors lg:py-20 ${styles.footer}`}>
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,380px)_repeat(3,minmax(0,1fr))] lg:gap-8 xl:gap-12">
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
                  by FloLabs Innovations Group
                </span>
              </div>
              <p className={`mt-5 max-w-sm text-[15px] leading-relaxed ${styles.muted}`}>
                Texas Advanced Robotics Research Lab is an open, venture-driven
                Embodied AI institute where advanced AI, robotics, and human
                imagination come together to build agents and robots for the real
                world.
              </p>
            </div>

            {renderNewsletterBlock("footer-email")}
            {socialBlock}
          </div>

          <div>
            <FooterCollapsibleSection
              title="Navigation"
              links={navigationLinks}
              linkClass={styles.link}
              headingClass={styles.heading}
              sectionBorderClass={`border-b lg:border-b-0 ${styles.borderDivider}`}
              toggleFocusClass={styles.toggleFocus}
            />
          </div>

          <div>
            <FooterCollapsibleSection
              title="Projects"
              links={projectLinks}
              linkClass={styles.link}
              headingClass={styles.heading}
              sectionBorderClass={`border-b lg:border-b-0 ${styles.borderDivider}`}
              toggleFocusClass={styles.toggleFocus}
            />
          </div>

          <div>
            <FooterCollapsibleSection
              title="Company"
              links={companyLinks}
              linkClass={styles.link}
              headingClass={styles.heading}
              sectionBorderClass={`border-b lg:border-b-0 ${styles.borderDivider}`}
              toggleFocusClass={styles.toggleFocus}
            />
          </div>
        </div>

        <div className={`mt-16 border-t pt-8 ${styles.borderDivider}`}>
          <p
            className={`text-center text-[13px] tracking-[0.15em] ${styles.muted}`}
          >
            Live Long and Prosper
          </p>
        </div>
      </div>
    </footer>
  );
};
