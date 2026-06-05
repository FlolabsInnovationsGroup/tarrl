/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "var(--color-paper)",
        canvas: "var(--color-canvas)",
        ink: "var(--color-ink)",
        inkSoft: "var(--color-ink-soft)",
        hairline: "var(--color-hairline)",
        accent: "#1A73E8",
        spec1: "#2B6BED",
        spec2: "#6B4DE6",
        spec3: "#B23AC9",
        spec4: "#E0457B"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"]
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
        pill: "999px"
      },
      boxShadow: {
        card: "var(--shadow-card)",
        cardHover: "var(--shadow-card-hover)"
      },
      maxWidth: {
        content: "1280px"
      },
      spacing: {
        section: "clamp(7.5rem, 12vw, 11.25rem)"
      }
    }
  },
  plugins: []
};
