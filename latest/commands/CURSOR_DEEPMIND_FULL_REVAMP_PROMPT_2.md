# TARRL — FULL Google DeepMind Revamp (Maximal / No-Holds-Barred)

> Paste into Cursor (Agent mode) with the TARRL repo open.
> This is the **aggressive** variant: rebuild the entire visual system to match Google DeepMind as faithfully as possible. **The only thing you may not change is the written copy.** Everything else — theme, color, structure, components, layout, motion — is fair game and should be fully transformed.

---

## 0. Mission

Completely re-skin and re-architect the **TARRL** landing page (React 18 + Vite + TypeScript + Tailwind CSS 3 + Framer Motion) into a **pixel-spirit clone of the Google DeepMind website** (https://deepmind.google/). Go all the way: full **light, airy, white** DeepMind theme; DeepMind's **authentic blue→purple→magenta spectrum** brand gradient; DeepMind's **real component patterns** (mega-menu nav, card grids, peek carousels, news-style grids, large light-weight display type, pill buttons, "Learn more →" links, big rounded media); DeepMind's spacing, radii, shadows, and motion.

**Do not hold back for caution or to "preserve current identity."** Rebuild every component as needed. The current Texas-flag dark theme should be **fully replaced**, not preserved.

---

## 1. The ONE Hard Rule (sacred — never break)

**NEVER change the written content.** Every visible string stays **byte-for-byte identical**: headings, paragraphs, eyebrow/labels, list items, button labels, nav labels, pill text, footer text, `alt` text, the **"TARRL"** wordmark, **"EST. 2025"**, emails, and all link `href` targets. You may move a text node into any new element/layout you build, but you may not alter its characters, casing (use CSS `text-transform` if you want different casing), punctuation, or order. All anchor IDs and `href`s (`#hero`, `#who-we-are`, `#research-tracks`, `#how-it-works`, `#who-this-is-for`, `#apply`, the apply/email links) must keep working.

Everything else is unconstrained. If something looks un-DeepMind, change the design — never the words.

Also keep it shippable: stay on React + Vite + Tailwind + Framer Motion (you may add Google Fonts and extend Tailwind config), keep `npm run build` passing, keep `prefers-reduced-motion` support, and keep WCAG AA contrast on the new light surfaces.

---

## 2. Design Direction — MAXIMAL DeepMind (override all prior/moderate choices)

- **Theme:** Full **light** — white `#FFFFFF` and warm off-white `#F8F8F7` canvas, near-black text, enormous whitespace. Use dark/gradient only for the hero and at most one or two deliberate full-bleed feature bands, exactly like DeepMind.
- **Color:** Adopt DeepMind's **authentic spectrum** as the brand gradient — flowing **blue → indigo/purple → magenta/pink** (optionally a warm orange tail), e.g. `#2B6BED → #6B4DE6 → #B23AC9 → #E0457B` with a possible `#F2994A` glow. Neutrals (white, near-black `#0B0B0B`, warm grays `#5F5F5F`) carry the page. Use a single confident accent for actions/links (pick a saturated DeepMind blue `#1A73E8`-ish or magenta — your choice, used consistently). The old Texas red/blue palette can be **retired**; you don't need to preserve it.
- **Scope:** **Total overhaul.** Rebuild structure and components to DeepMind patterns. Don't merely re-color the existing markup — re-compose it.

---

## 3. DeepMind Design System to Reproduce

### 3.1 Typography
- Display headings: a **Google Sans-style geometric sans**. Use **Manrope** (closest free match) for large headlines — **light-to-medium weight (400–500)**, **large sizes**, **tight tracking**, low line-height (~1.05–1.15). DeepMind headlines are big and airy, NOT heavy/black.
- Body: **Inter**, 16–18px, line-height ~1.6, measure ≤ ~65ch, color warm gray.
- Labels/eyebrows: **sentence case**, small, muted gray, minimal letter-spacing (kill the loud uppercase tracking everywhere).
- Load both fonts in `index.html`.

### 3.2 Layout & spacing
- Centered container ~1200–1280px, generous gutters.
- **Huge** vertical rhythm between sections (clamp ~120–180px).
- Editorial alternating two-column rows (text ↔ big rounded media), full-width card grids, and horizontal carousels with a **peek** of the next slide.
- Big rounded media everywhere (radius ~24–32px), soft shadows, hairline borders.

### 3.3 Components (build these as real DeepMind patterns)
- **Sticky light nav** with **mega-menu flyouts**: white/blurred bar, wordmark left, sentence-case links, dropdown panels showing **icon + label + one-line description** rows grouped in columns, and a **pill CTA**. Reorganize TARRL's existing nav links + Research Tracks into these flyouts (using only existing text).
- **Pill buttons**: solid accent primary (white text), outline/ghost secondary, and **text links with a trailing "→"** that nudges on hover.
- **Cards**: white, ~20–24px radius, hairline border, soft shadow, hover lift + stronger shadow; many media-topped. A thin spectrum-gradient accent line on hover.
- **Peek carousel**: rounded slides at ~80–85% width, partial neighbors visible, "Slide x of n" affordance, refined dots + circular arrow buttons.
- **News/feature grid**: DeepMind's homepage grid of image cards with category/date meta ("May 2026 · Science" middot style). Re-skin TARRL's belief cards / tracks into this idiom.
- **Gradient "orb/blob"** decorative elements behind hero and accent bands (slow drift, reduced-motion aware).
- **Large multi-column light footer** with grouped links, newsletter-style block if it fits existing text, social-row spacing.

### 3.4 Motion (Framer Motion, premium & restrained)
- Gentle fade+rise on scroll-in (8–24px, ~0.5–0.7s ease-out).
- Hover micro-interactions: arrow nudge, card lift, button scale ~1.02.
- Slow gradient orb drift on hero. All gated behind `usePrefersReducedMotion`.

---

## 4. Global Foundations (do first)

1. **`index.html`** — Add Manrope + keep Inter; flip page `background-color` and `<meta theme-color>` to white/off-white; set `<body>` to light bg + dark text.
2. **`tailwind.config.cjs`** — Add neutral + spectrum tokens and font families:
   ```js
   colors: {
     paper: "#FFFFFF", canvas: "#F8F8F7",
     ink: "#0B0B0B", inkSoft: "#5F5F5F", hairline: "rgba(0,0,0,0.08)",
     accent: "#1A73E8",            // pick one confident DeepMind accent
     spec1: "#2B6BED", spec2: "#6B4DE6", spec3: "#B23AC9", spec4: "#E0457B"
   },
   fontFamily: {
     sans: ["Inter","system-ui","sans-serif"],
     display: ["Manrope","Inter","system-ui","sans-serif"]
   },
   borderRadius: { xl2:"1.25rem", xl3:"1.75rem", pill:"999px" },
   boxShadow: {
     card:"0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)",
     cardHover:"0 2px 4px rgba(0,0,0,0.06), 0 16px 40px rgba(0,0,0,0.10)"
   }
   ```
3. **`src/index.css`** — `body` → `bg-canvas text-ink`; **remove/replace** all the old dark gradient helpers (`app-bg-gradient`, `gradient-section*`, dark `backdrop-card`); add `.spectrum-gradient` (`linear-gradient(135deg, #2B6BED, #6B4DE6, #B23AC9, #E0457B)` with extra stops to avoid banding) and `.spectrum-text` (gradient clip on existing words only). Keep `::selection`, `.scrollbar-hide`, reduced-motion block.
4. **`src/App.tsx`** — Replace the dark inline `pageGradient` with the **light canvas**; keep section order; designate Hero (+ optionally ApplyCTA) as the dark/gradient bands; enable ONE nav (`Navbar.tsx`) and drop Hero's internal nav (move links, don't duplicate).

---

## 5. Per-Component Rebuild

Rebuild each to DeepMind patterns; keep all text.

- **`Hero.tsx` + `styles/Hero.module.css`** — Replace the literal Texas-flag wallpaper with a **cinematic spectrum-gradient field + drifting orb + subtle grain/vignette**. Giant `TARRL` wordmark in display font, light weight, optional spectrum-text. Eyebrow/headline/tagline/body restyled to DeepMind scale. Buttons → pills. Stat pills row → clean hairline-divided feature row. Keep `scrollHint` and `issueTag` text, restyle. Update or retire the module CSS `:root` tokens.
- **`Navbar.tsx`** — Light sticky blurred nav with **mega-menu flyouts** (group existing links; surface Research Tracks as a flyout of existing track names + descriptions). Accent pill CTA. Restyle mobile menu to light. Enable in `App.tsx`.
- **`Sections.tsx`** (WhoWeAre / WhyWeExist / WhatWeBelieve) — Light editorial. Strong display headlines; gray body; humanoid/robodog images as big **rounded media blocks**. Verticals + chips → outline pills. Belief cards → **DeepMind white cards** (hairline, shadow, hover lift, spectrum accent line). Space callout → light card.
- **`ResearchTracks.tsx`** — Keep hover-to-activate; left panel as light card; "Track 0X" → meta tags; SVG line recolored to spectrum; active state in accent. Soften uppercase labels.
- **`ImageCarousel.tsx`** — DeepMind **peek carousel**: rounded slides, partial neighbors, light edge fades (replace the `#361259` fades), refined dots (active = accent) + circular arrow buttons. Keep autoplay + reduced-motion + aria.
- **`HowItWorks.tsx`** — Light interactive steps; ghost step number very light gray; light card panel; accent active border. Keep logic + step text.
- **`WhoThisIsFor.tsx`** — Light card rows replacing dark buttons; custom checkbox fills with accent on hover/active; display headline. Keep all six items verbatim.
- **`ApplyCTA.tsx`** — Optional **dark spectrum feature band**: full-bleed gradient, white text, large display headline, accent pill CTA, "You bring / We provide" lines restyled, bottom meta line in middot style. Keep words + `href`.
- **`Footer.tsx`** — Light multi-column footer; remove dark blur overlay; muted links, accent hover, comfortable spacing; optional slim spectrum rule on top. Keep all columns/links/email verbatim.
- **`ParticleNetwork.tsx`** — Unused; ignore unless you wire a background, in which case prefer the gradient orb.

---

## 6. Execution Order

1. Foundations: `index.html`, `tailwind.config.cjs`, `src/index.css`, `src/App.tsx`.
2. Nav + Hero (dark feature top).
3. Light sections: `Sections.tsx`, `ResearchTracks.tsx`, `HowItWorks.tsx`, `WhoThisIsFor.tsx`.
4. Carousel.
5. ApplyCTA (dark band) + Footer.
6. Polish: spacing rhythm, hover/motion, focus rings, responsive (360px → desktop), AA contrast.

Verify `npm run dev` after each file; text must stay identical.

---

## 7. Definition of Done

- [ ] **Zero copy changes** — diff shows only markup/class/style/asset edits; every visible string unchanged (wordmark, eyebrows, paragraphs, list items, buttons, nav, "EST. 2025", emails, footer).
- [ ] All `href`s + anchor IDs intact and working.
- [ ] Reads as a **faithful DeepMind clone**: full light/airy canvas, big light-weight display type, generous whitespace, rounded media, white hairline cards with soft shadows, mega-menu nav, pill buttons, "Learn more →" links, peek carousel, 1–2 dark spectrum bands.
- [ ] DeepMind **spectrum gradient** + single confident accent applied consistently; old Texas dark theme fully gone.
- [ ] All interactions intact: nav (incl. mobile + flyouts), Research Tracks & How It Works hover, carousel autoplay/dots/arrows, reduced-motion.
- [ ] AA contrast on light surfaces; focus rings; `alt` text intact.
- [ ] Responsive 360px → desktop, no horizontal overflow.
- [ ] `npm run build` passes, no type errors.

**Final reminder:** Total visual overhaul — change anything and everything about the look. The words are the only thing that stays.
