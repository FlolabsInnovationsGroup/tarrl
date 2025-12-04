# TARRL Website - Comprehensive Development Plan
**Texas Advanced Robotics Research Lab**  
**Prepared**: December 4, 2025  
**Target Launch**: Week of December 9, 2025  
**Stakeholder Meeting**: Admiral Bobby Ray Inman

---

## Executive Summary

This plan outlines the complete development strategy for the TARRL (Texas Advanced Robotics Research Lab) website, designed to position TARRL as a credible, serious research institute for Embodied AI and robotics. The site targets PhD candidates, PhDs, postdocs, and experienced professionals globally, while leveraging Texas's innovation ecosystem (NASA JSC Houston, SpaceX, Austin tech scene).

**Key Objectives:**
- Present TARRL as a legitimate alternative to traditional university labs and corporate R&D centers
- Attract top-tier talent for remote-first research associate positions
- Connect TARRL to Texas innovation heritage without appearing regional or parochial
- Demonstrate open-source credibility and venture-driven approach
- Create scalable platform for future content expansion

**Audience Considerations:**
- Primary: Admiral Bobby Ray Inman (former NSA Director, CIA Deputy Director, UT Austin grad, former CEO of Microelectronics and Computer Technology Corporation in Austin)
- Secondary: PhD-level researchers, postdocs, experienced AI/robotics professionals
- Tertiary: Funding agencies, academic partners, venture ecosystem

---

## 1. Technical Architecture

### 1.1 Technology Stack

| Component | Technology | Version | Justification |
|-----------|-----------|---------|---------------|
| **Frontend Framework** | Next.js | 15.1.8 | Latest stable, App Router, Server Components, ISR for performance |
| **Content Management** | Strapi | v5.2.2 | Headless CMS, team can update content without developers |
| **Styling** | Tailwind CSS | 4.0 (alpha) | Utility-first, fast development, modern dark mode support |
| **UI Components** | shadcn/ui | Latest | Accessible, customizable, production-ready components |
| **Animations** | Framer Motion | Latest | Smooth, performant animations for modern web feel |
| **Language** | TypeScript | 5.3+ | Type safety, better DX, fewer runtime errors |
| **Package Manager** | pnpm | 8.x | Faster, more efficient than npm/yarn |
| **Backend Hosting** | Railway | - | Strapi + PostgreSQL, $5-10/month, excellent DX |
| **Frontend Hosting** | Vercel | Free tier | Zero-config Next.js deployment, edge network |
| **Database** | PostgreSQL | 14+ | Production-ready, Railway's default for Strapi |

### 1.2 Project Structure

```
/Users/elizabethstein/Projects/TARRL/
├── backend/                      # Strapi CMS
│   ├── src/
│   │   ├── api/                 # Content type controllers
│   │   ├── components/          # Reusable Strapi components
│   │   └── extensions/          # Custom Strapi extensions
│   ├── config/                  # Environment configs
│   ├── public/uploads/          # Media uploads (Railway volume)
│   └── package.json
│
├── frontend/                    # Next.js application
│   ├── app/                     # App Router pages
│   │   ├── page.tsx            # Homepage (single-page scroll)
│   │   ├── layout.tsx          # Root layout with dark mode
│   │   └── globals.css         # Tailwind + custom CSS
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── sections/           # Homepage sections
│   │   │   ├── Hero.tsx
│   │   │   ├── WhoWeAre.tsx
│   │   │   ├── WhyWeExist.tsx
│   │   │   ├── WhatWeBelieve.tsx
│   │   │   ├── WhatYouGet.tsx
│   │   │   ├── ResearchPlayground.tsx
│   │   │   ├── WhoThisIsFor.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   └── CallToAction.tsx
│   │   └── layout/
│   │       ├── Header.tsx
│   │       └── Footer.tsx
│   ├── lib/
│   │   ├── strapi.ts          # Strapi API client
│   │   └── utils.ts           # Helper functions
│   ├── public/
│   │   ├── images/            # Static images (NASA, stock)
│   │   └── icons/             # SVG icons
│   └── package.json
│
├── scripts/                     # Automation scripts
│   ├── seed-strapi.ts          # Populate initial content
│   ├── deploy.sh               # Deployment automation
│   └── backup-db.sh            # Database backup
│
├── docs/                        # Documentation
│   ├── CONTENT_GUIDE.md        # Content editing guide for team
│   ├── DESIGN_SYSTEM.md        # Color, typography, components
│   └── DEPLOYMENT.md           # Deployment procedures
│
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD
│
├── pnpm-workspace.yaml         # Monorepo configuration
├── .gitignore
└── README.md
```

### 1.3 Data Flow Architecture

```
User Browser
    ↓
Next.js Frontend (Vercel) - ISR Caching (1 hour revalidation)
    ↓
Strapi API (Railway) - REST endpoints with API token
    ↓
PostgreSQL (Railway) - Content storage
    ↓
Railway Volume - Media uploads
```

---

## 2. Content Strategy

### 2.1 Site Structure (Single-Page Scroll)

Based on boss's provided copy, the homepage will be a long-scroll single-page site with 9 distinct sections:

| Section | Purpose | Key Elements |
|---------|---------|--------------|
| **1. Hero** | Immediate value prop | "Advance your career. Be at the center of the future." + "Remote first. Open to the world." + Primary/Secondary CTAs |
| **2. Who We Are (And Are Not)** | Positioning | 3 "We are not" statements + What TARRL actually is + FloLabs connection |
| **3. Why We Exist** | Problem statement | Access barriers in robotics/AI + TARRL's solution + Vertical focus areas |
| **4. What We Believe** | Values & philosophy | Open source commitment + No ownership of your work + Collaboration culture |
| **5. What You Get** | Benefits | 6 offerings: Robots, Pipeline, Open source, Prototyping, HRI, Immediate impact |
| **6. Research Playground** | Core work areas | 8 research tracks with descriptions (humanoids, quadrupeds, assistive, perception, swarm, simulation, tooling, space) |
| **7. Who This Is For** | Target audience | PhD candidates, PhDs, postdocs, experienced pros + Remote-first emphasis |
| **8. How It Works** | Operating model | Remote participation + Robot access + Distributed pods + Open written culture |
| **9. Call to Action** | Conversion | "Join TARRL as a Research Associate" + Apply button |

**Navigation**: Sticky header with jump links to each section (smooth scroll)

### 2.2 Strapi Content Types

#### `pages` Collection
```typescript
{
  title: string;
  slug: string;
  seo: {
    title: string;
    description: string;
    ogImage: media;
  };
  hero: {
    title: string;
    subtitle: string;
    description: richtext;
    primaryCTA: { label: string, link: string };
    secondaryCTA: { label: string, link: string };
    backgroundVideo: string | null;
    backgroundImage: media | null;
  };
  sections: dynamicZone[]; // Flexible content blocks
}
```

#### `research_tracks` Collection
```typescript
{
  name: string;
  slug: string;
  order: number;
  icon: string; // Lucide icon name
  shortDescription: string; // 1-2 sentences
  fullDescription: richtext; // From PDF content
  examples: string[]; // Bullet points from PDF
  relatedTracks: relation[];
  status: enum['active', 'planned'];
}
```

#### `benefits` Collection
```typescript
{
  title: string;
  description: richtext;
  icon: string;
  order: number;
}
```

### 2.3 Content Population

All content will be directly sourced from the boss's PDF:

- ✅ Hero copy: Provided
- ✅ Who We Are: Provided (3 "we are not" + positioning)
- ✅ Why We Exist: Provided (access barriers + solution)
- ✅ What We Believe: Provided (open source, no ownership)
- ✅ What You Get: Provided (6 benefits enumerated)
- ✅ Research Playground: Provided (8 tracks with full descriptions)
- ✅ Who This Is For: Provided (target audience description)
- ✅ How It Works: Provided (4 operational elements)
- ✅ CTA: Provided ("Join TARRL as a Research Associate")

**No content creation needed** - just implementation of existing copy.

---

## 3. Design System

### 3.1 Color Palette

**Primary Theme: Dark Mode (Professional, Futuristic, Texas Space Heritage)**

```css
/* Primary Colors */
--background-primary: #0A1929;      /* Deep space blue-black */
--background-secondary: #1E293B;    /* Slate gray */
--background-tertiary: #334155;     /* Light slate */

/* Text Colors */
--text-primary: #F9FAFB;            /* Off-white (high contrast) */
--text-secondary: #94A3B8;          /* Gray (body text) */
--text-tertiary: #64748B;           /* Muted gray (captions) */

/* Accent Colors */
--accent-primary: #3B82F6;          /* Electric blue (CTAs, links) */
--accent-secondary: #8B5CF6;        /* Purple (gradients, highlights) */
--accent-tertiary: #06B6D4;         /* Cyan (interactive elements) */

/* Texas Heritage (Subtle Use) */
--texas-blue: #002868;              /* Texas flag blue (backgrounds) */
--texas-star: #BF5700;              /* Burnt orange (minimal accents) */

/* Semantic Colors */
--success: #10B981;                 /* Green (status indicators) */
--warning: #F59E0B;                 /* Amber */
--error: #EF4444;                   /* Red */

/* Gradients */
--gradient-hero: linear-gradient(135deg, #0A1929 0%, #1E3A8A 100%);
--gradient-accent: linear-gradient(90deg, #3B82F6 0%, #8B5CF6 100%);
--gradient-space: radial-gradient(ellipse at top, #1E3A8A 0%, #0A1929 100%);
```

### 3.2 Typography

**Fonts (Google Fonts):**

```css
/* Headings */
font-family-heading: 'Space Grotesk', sans-serif;
/* Modern, geometric, slightly futuristic */
/* Weights: 400, 500, 700 */

/* Body Text */
font-family-body: 'Inter', sans-serif;
/* Excellent readability, widely used in tech */
/* Weights: 400, 500, 600 */

/* Code/Technical (if needed) */
font-family-mono: 'JetBrains Mono', monospace;
```

**Type Scale:**

```css
/* Headings */
--text-6xl: 3.75rem;   /* 60px - Hero title */
--text-5xl: 3rem;      /* 48px - Section titles */
--text-4xl: 2.25rem;   /* 36px - Subsection titles */
--text-3xl: 1.875rem;  /* 30px - Card titles */
--text-2xl: 1.5rem;    /* 24px - Small headings */

/* Body */
--text-xl: 1.25rem;    /* 20px - Large body */
--text-lg: 1.125rem;   /* 18px - Regular body */
--text-base: 1rem;     /* 16px - Default */
--text-sm: 0.875rem;   /* 14px - Small text */
--text-xs: 0.75rem;    /* 12px - Captions */
```

### 3.3 Spacing System

```css
/* Based on 4px grid */
--space-1: 0.25rem;    /* 4px */
--space-2: 0.5rem;     /* 8px */
--space-3: 0.75rem;    /* 12px */
--space-4: 1rem;       /* 16px */
--space-6: 1.5rem;     /* 24px */
--space-8: 2rem;       /* 32px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */
--space-24: 6rem;      /* 96px */
--space-32: 8rem;      /* 128px */
```

### 3.4 Component Patterns

**Card Component** (for research tracks, benefits):
- Dark background (#1E293B)
- Subtle border (1px, #334155)
- Hover: lift effect (translate-y: -4px)
- Subtle shadow on hover
- Icon at top (Lucide icons, --accent-primary color)
- Title (--text-2xl, Space Grotesk)
- Description (--text-base, Inter, --text-secondary)
- Smooth transition (200ms)

**Button Component**:
- Primary: Gradient background (--gradient-accent), white text, rounded-lg
- Secondary: Transparent background, border, --accent-primary text
- Hover: Slight scale (1.02) + increased shadow
- Padding: 0.75rem 1.5rem
- Font: Inter 500

**Section Layout**:
- Max width: 1280px (centered)
- Padding: 4rem mobile, 6rem tablet, 8rem desktop
- Vertical rhythm: --space-24 between sections
- Scroll margin: 80px (for sticky header)

---

## 4. Imagery & Assets Strategy

### 4.1 Visual Theme: **Texas + Space + Innovation**

**Concept**: Blend Texas's aerospace heritage (NASA JSC Houston, SpaceX Starbase) with cutting-edge robotics, avoiding regional clichés while maintaining subtle Texas identity.

### 4.2 Hero Section Imagery

**Primary Recommendation: NASA Valkyrie Humanoid Robot**

| Asset | Source | License | Purpose |
|-------|--------|---------|---------|
| NASA Valkyrie Robot | Wikimedia Commons ([File:Valkyrie-robot-3.jpg](https://commons.wikimedia.org/wiki/File:Valkyrie-robot-3.jpg)) | Public Domain (NASA) | Hero background or feature image |
| NASA Robonaut | NASA Image Library | Public Domain | Alternative robot imagery |
| Space/Stars Background | NASA Image Library | Public Domain | Hero background layer |
| Starfield Animation | Custom (Framer Motion) | N/A | Animated particle background |

**Implementation**:
- **Option A**: Full-screen subtle starfield animation (Framer Motion particles) with NASA Valkyrie robot overlay (50% opacity, blended)
- **Option B**: Dark gradient background (--gradient-space) with subtle Texas star constellation pattern
- **Option C**: Video background (looping NASA JSC robotics footage if available, otherwise animated gradient)

**Download Links**:
- Valkyrie High-Res: https://commons.wikimedia.org/wiki/File:Valkyrie-robot-3.jpg (3000x4000px)
- NASA Image Library: https://images.nasa.gov (search: "robonaut", "humanoid", "JSC")

### 4.3 Research Track Icons

**Approach**: Icon-based (not photo-heavy) for clean, professional look

| Research Track | Lucide Icon | Color Accent |
|----------------|-------------|--------------|
| Humanoids & Embodied AI | `User` or `Bot` | --accent-primary |
| Quadrupeds & Mobile Robots | `Footprints` | --accent-secondary |
| Assistive Robotics | `Heart` | --success |
| Perception & Vision-Language | `Eye` | --accent-tertiary |
| Swarm & Multi-Agent | `Network` | --accent-primary |
| Simulation & Digital Twins | `Boxes` | --accent-secondary |
| Open Tooling & Middleware | `Code` | --accent-primary |
| Space Robotics | `Rocket` | --texas-blue |

**Source**: [Lucide Icons](https://lucide.dev) (MIT License, free, customizable)

### 4.4 Supporting Imagery (Stock Photos)

**Unsplash Search Terms** (all free, high-quality):
- "space station" (for space robotics section)
- "laboratory" (for research environment feel)
- "circuit board" (for tech texture backgrounds)
- "constellation" (for subtle Texas star references)
- "industrial robot arm" (for industrial applications)
- "VR headset" (for teleoperation section)
- "collaboration" (for team/remote-first messaging)

**Pexels Alternatives**:
- Same search terms as above
- Focus on dark, moody, professional imagery
- Avoid overly colorful or cheerful photos (this is serious research)

### 4.5 Texas Identity (Subtle Integration)

**DO:**
- Use NASA JSC imagery (Houston connection)
- Reference SpaceX Starbase (Boca Chica, Texas)
- Subtle 5-point star shape in background patterns
- Austin tech scene references (if imagery needed)
- Texas flag blue (#002868) as subtle accent color

**DO NOT:**
- Overlay robots on bluebonnet fields (too cheesy)
- Use cowboy/Western imagery
- Overemphasize Texas to the exclusion of "remote-first, global" messaging
- Use literal Texas map shapes

**Balance**: Texas connection should enhance credibility (NASA, SpaceX ecosystem) without limiting perception to regional-only operation.

### 4.6 Asset Checklist

**Required for Launch:**
- [ ] Hero background (starfield OR NASA robot OR gradient)
- [ ] 8 Lucide icons for research tracks (already available via CDN)
- [ ] NASA Valkyrie image (download from Wikimedia)
- [ ] 2-3 supporting stock photos (Unsplash: space, lab, tech)
- [ ] FloLabs logo (for footer)
- [ ] Favicon (TARRL logo or abstract T/star icon)

**Nice-to-Have (Phase 2):**
- [ ] Custom research track illustrations
- [ ] Team member photos (when hires are made)
- [ ] Lab/equipment photos (when physical space exists)
- [ ] Video testimonials from research associates

---

## 5. Development Timeline

### Phase 1: Foundation (Days 1-2)
**Duration**: 2 days  
**Goal**: Infrastructure and basic structure

**Tasks**:
- [x] Initialize git repository
- [ ] Set up pnpm workspace configuration
- [ ] Deploy Strapi on Railway using official template
- [ ] Configure PostgreSQL database
- [ ] Set up environment variables (API keys, CORS)
- [ ] Create Strapi content types (pages, research_tracks, benefits)
- [ ] Initialize Next.js 15 with App Router
- [ ] Install dependencies: Tailwind, shadcn/ui, Framer Motion
- [ ] Configure dark mode theme
- [ ] Set up basic project structure (components, lib, app folders)

**Deliverable**: Backend and frontend running locally, Railway Strapi accessible

### Phase 2: Design System & Components (Days 3-4)
**Duration**: 2 days  
**Goal**: Build reusable components and design system

**Tasks**:
- [ ] Implement color palette and typography in Tailwind config
- [ ] Set up Google Fonts (Space Grotesk, Inter)
- [ ] Create shadcn/ui components (Button, Card, Container)
- [ ] Build layout components (Header with smooth scroll nav, Footer)
- [ ] Create section components:
  - [ ] Hero (with animated background)
  - [ ] WhoWeAre (3-column grid)
  - [ ] WhyWeExist (problem/solution)
  - [ ] WhatWeBelieve (values list)
  - [ ] WhatYouGet (6 benefit cards)
  - [ ] ResearchPlayground (8 research track cards)
  - [ ] WhoThisIsFor (target audience)
  - [ ] HowItWorks (4 operational points)
  - [ ] CallToAction (apply form or button)
- [ ] Implement Framer Motion scroll animations
- [ ] Mobile responsive design for all components

**Deliverable**: Complete component library, responsive design system

### Phase 3: Content Integration (Day 5)
**Duration**: 1 day  
**Goal**: Populate Strapi and connect to Next.js

**Tasks**:
- [ ] Input boss's PDF copy into Strapi (all 9 sections)
- [ ] Upload research track descriptions
- [ ] Configure benefit cards content
- [ ] Set up media library with downloaded images
- [ ] Create Strapi API client in Next.js
- [ ] Fetch content dynamically in homepage
- [ ] Implement ISR (revalidate every 1 hour)
- [ ] Add SEO metadata (title, description, OG image)
- [ ] Test content updates in Strapi reflect on frontend

**Deliverable**: Fully populated site with real content from Strapi

### Phase 4: Imagery & Polish (Day 6)
**Duration**: 1 day  
**Goal**: Visual assets and final polish

**Tasks**:
- [ ] Download NASA Valkyrie images from Wikimedia
- [ ] Curate 3-5 supporting images from Unsplash/Pexels
- [ ] Optimize images (next/image, WebP format)
- [ ] Implement hero background (starfield OR robot image)
- [ ] Add Lucide icons to research track cards
- [ ] Create favicon and OG image
- [ ] Polish animations and transitions
- [ ] Cross-browser testing (Chrome, Firefox, Safari)
- [ ] Performance optimization (Lighthouse score >90)
- [ ] Accessibility audit (WCAG AA compliance)

**Deliverable**: Visually polished, performant website

### Phase 5: Deployment & Testing (Day 7)
**Duration**: 1 day  
**Goal**: Production deployment and final QA

**Tasks**:
- [ ] Deploy Next.js to Vercel
- [ ] Configure environment variables on Vercel
- [ ] Point tarrl.org domain to Vercel
- [ ] Set up DNS (A records, CNAME)
- [ ] Test production build (no errors)
- [ ] Set up Strapi CORS for Vercel domain
- [ ] Create API tokens for production
- [ ] End-to-end testing on production
- [ ] Mobile testing on real devices
- [ ] Share preview link with boss for feedback
- [ ] Implement any last-minute copy edits
- [ ] Create backup of Strapi database

**Deliverable**: Live website at tarrl.org, ready for Admiral Inman meeting

### Phase 6: Documentation & Handoff (Ongoing)
**Duration**: Throughout project  
**Goal**: Enable team to manage content independently

**Tasks**:
- [ ] Write CONTENT_GUIDE.md (how to update Strapi)
- [ ] Document deployment process (DEPLOYMENT.md)
- [ ] Create DESIGN_SYSTEM.md reference
- [ ] Record video walkthrough of Strapi admin (optional)
- [ ] Set up monitoring (Vercel Analytics, Sentry errors)
- [ ] Create GitHub Actions workflow for automated deploys
- [ ] Add team members to Railway and Vercel projects

**Deliverable**: Comprehensive documentation for long-term maintenance

**Total Timeline**: 7 days (with buffer for iterations)

---

## 6. Deployment Strategy

### 6.1 Strapi Backend (Railway)

**Setup Process**:

1. **Deploy from Railway Template**:
   ```bash
   # Navigate to Railway dashboard
   # Click "New Project" → "Deploy from Template"
   # Search for "Strapi" → Select official template
   # This auto-provisions:
   #   - Strapi service (Node.js)
   #   - PostgreSQL database
   #   - Private networking
   ```

2. **Configure Environment Variables**:
   ```bash
   # Railway auto-generates these, but verify:
   APP_KEYS=toBeModified1,toBeModified2
   API_TOKEN_SALT=tobemodified
   ADMIN_JWT_SECRET=tobemodified
   TRANSFER_TOKEN_SALT=tobemodified
   JWT_SECRET=tobemodified
   
   # Set CORS for Next.js:
   # In Strapi: config/middlewares.ts
   origin: [
     'http://localhost:3000',
     'https://tarrl.org',
     'https://www.tarrl.org',
     'https://*.vercel.app'  # For preview deploys
   ]
   ```

3. **Eject Template (Optional)**:
   - Click "Eject" in Railway service settings to fork repo
   - Push to your GitHub for version control
   - Railway will auto-deploy on git push

4. **Custom Domain (Optional)**:
   - In Railway: Settings → Custom Domain
   - Add: `cms.tarrl.org` or `api.tarrl.org`
   - Or use default Railway subdomain (e.g., `tarrl-strapi.up.railway.app`)

**Estimated Monthly Cost**: $5-10 (Railway Hobby Plan)

### 6.2 Next.js Frontend (Vercel)

**Setup Process**:

1. **Connect GitHub Repository**:
   ```bash
   # In Vercel dashboard:
   # Import Git Repository → Select tarrl-project/frontend
   # Framework Preset: Next.js
   # Root Directory: frontend/
   ```

2. **Configure Environment Variables**:
   ```bash
   # Vercel Project Settings → Environment Variables
   
   # Public (exposed to browser):
   NEXT_PUBLIC_STRAPI_API_URL=https://your-railway-strapi.up.railway.app/api
   NEXT_PUBLIC_SITE_URL=https://tarrl.org
   
   # Secret (server-side only):
   STRAPI_API_TOKEN=your-generated-token-from-strapi
   ```

3. **Configure Custom Domain**:
   ```bash
   # Vercel: Settings → Domains
   # Add: tarrl.org AND www.tarrl.org
   # Vercel provides DNS instructions:
   
   # DNS Records (at domain registrar):
   A     @         76.76.21.21
   CNAME www       cname.vercel-dns.com
   ```

4. **Auto-Deploy Settings**:
   - Production branch: `main`
   - Preview branches: All branches (for PR reviews)
   - Build command: `pnpm build`
   - Output directory: `.next`

**Monthly Cost**: $0 (Vercel Hobby Plan includes everything needed)

### 6.3 CI/CD Automation

**GitHub Actions Workflow** (`.github/workflows/deploy.yml`):

```yaml
name: Deploy TARRL
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'pnpm'
      
      # Frontend tests & build
      - run: cd frontend && pnpm install
      - run: cd frontend && pnpm lint
      - run: cd frontend && pnpm build
      
      # Auto-deploy to Vercel (handled by Vercel GitHub integration)
      # Railway auto-deploys on git push (if ejected template)
```

### 6.4 Monitoring & Analytics

**Vercel Analytics** (Built-in, Free):
- Real User Monitoring (RUM)
- Core Web Vitals tracking
- Page load times
- Enable in Vercel dashboard

**Optional: Sentry Error Tracking**:
```bash
# Install in frontend:
pnpm add @sentry/nextjs

# Configure in sentry.client.config.ts:
Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 0.1,
});
```

**Strapi Monitoring**:
- Railway provides built-in metrics (CPU, memory, network)
- Access via Railway dashboard

---

## 7. Success Metrics

### 7.1 Launch Criteria (For Admiral Inman Meeting)

- ✅ Site live at tarrl.org (no 404s, no placeholder content)
- ✅ All 9 sections populated with boss's provided copy
- ✅ Mobile responsive (test on iPhone, Android)
- ✅ Lighthouse Performance Score >85
- ✅ Lighthouse Accessibility Score >90
- ✅ All images optimized (< 200KB each, WebP format)
- ✅ Smooth scroll navigation works
- ✅ All CTAs link to application form or email
- ✅ Footer includes FloLabs ecosystem link
- ✅ SEO metadata complete (title, description, OG image)
- ✅ No console errors in browser

### 7.2 Post-Launch Goals (First 30 Days)

**Traffic Metrics**:
- 200+ unique visitors (organic + shared links)
- 2+ minutes average time on page
- <40% bounce rate
- 3+ pages per session (if multi-page future expansion)

**Engagement Metrics**:
- 10+ "Apply to Join TARRL" CTA clicks
- 5+ email inquiries from prospective research associates
- 2+ social media shares (LinkedIn, Twitter)

**Technical Metrics**:
- 99.9% uptime (Vercel + Railway reliability)
- <2 second page load time (desktop)
- <3 second page load time (mobile)
- Zero critical errors in Sentry (if implemented)

**Content Management**:
- Boss or team member successfully updates Strapi content without developer help
- At least 1 new research track added via Strapi
- Media library organized and functional

---

## 8. Risk Mitigation & Contingencies

### 8.1 Identified Risks

| Risk | Probability | Impact | Mitigation Strategy |
|------|-------------|--------|---------------------|
| **Domain DNS not propagated by meeting** | Low | High | Set up DNS 48 hours before meeting; use Vercel subdomain as backup |
| **Strapi backend downtime during demo** | Low | Medium | Railway has 99.9% uptime SLA; create static export of site as backup |
| **Boss requests major copy changes last minute** | Medium | Medium | Strapi allows instant updates; keep staging environment for testing |
| **Images not loading (NASA or stock)** | Low | Low | Download and self-host all images; don't rely on external CDNs |
| **Animations too slow on mobile** | Medium | Low | Test on low-end devices; disable animations on mobile if needed |
| **Admiral Inman expects different positioning** | Low | High | Boss is presenting, they know the messaging; our job is execution |

### 8.2 Backup Plan

**If Strapi/Railway has issues**:
- Export all content to JSON
- Switch Next.js to fetch from static JSON files
- Deploy to Vercel with static content (loses CMS functionality but site stays live)

**If Design Direction Changes**:
- Component-based architecture allows quick swaps
- Color palette in central Tailwind config (change once, applies everywhere)
- Copy stored in Strapi (update without code changes)

**If Timeline Slips**:
- Priority 1: Homepage with all 9 sections (core requirement)
- Priority 2: Mobile responsiveness
- Priority 3: Animations and polish
- Can launch without animations if time-constrained

---

## 9. Future Expansion Roadmap (Post-Launch)

### Phase 2: Multi-Page Expansion (2-4 weeks post-launch)

**New Pages**:
- `/research` - Detailed research track pages
- `/team` - Leadership and research associate profiles
- `/projects` - Case studies and active projects
- `/news` - Blog/announcements
- `/about` - Extended origin story and FloLabs connection

**New Features**:
- Application form (Typeform or custom)
- Newsletter signup (Mailchimp or ConvertKit)
- Research publications repository
- GitHub integration (show TARRL repos)
- Interactive research timeline

### Phase 3: Community Features (2-3 months post-launch)

- Member portal (Strapi User & Permissions plugin)
- Project collaboration workspace
- Public research notes/wiki
- Event calendar (workshops, hackathons)
- Partner showcase (with logos and descriptions)

### Phase 4: Advanced Integrations (6+ months)

- Video embed support (lab tours, research demos)
- 3D robot model viewer (Three.js)
- Real-time teleoperation dashboard (if applicable)
- GitHub sponsor integration
- Academic publication tracking (Google Scholar API)

---

## 10. Questions for Stakeholder Review

Before proceeding with development, please confirm:

1. **Content Approval**:
   - [ ] Is the boss's PDF copy final, or will there be edits?
   - [ ] Should we create an application form, or link to email?
   - [ ] Is there a FloLabs logo for the footer?

2. **Design Direction**:
   - [ ] Preference for hero imagery: NASA robot, starfield animation, or gradient?
   - [ ] Any brand colors from FloLabs we should incorporate?
   - [ ] Should Texas identity be subtle or prominent?

3. **Technical Decisions**:
   - [ ] Do you have Railway and Vercel accounts set up?
   - [ ] Who should have admin access to Strapi CMS?
   - [ ] Do you have access to update tarrl.org DNS records?

4. **Timeline**:
   - [ ] Is the week of December 9 realistic for launch, or is there flexibility?
   - [ ] When exactly is the Admiral Inman meeting? (To set hard deadline)
   - [ ] Should we prioritize speed or polish if trade-offs are needed?

5. **Future Plans**:
   - [ ] Will there be a team page soon (need to plan for it)?
   - [ ] Are research projects ready to showcase, or TBD?
   - [ ] Should we plan for blog/news functionality in Phase 1?

---

## 11. Next Steps (Upon Approval)

1. **Schedule Kickoff Call** (30 min):
   - Walk through this plan
   - Answer questions
   - Confirm design direction
   - Set communication cadence

2. **Get Access**:
   - Railway account credentials or invitation
   - Vercel account credentials or invitation
   - Domain registrar access for DNS updates
   - FloLabs logo and brand assets

3. **Begin Development**:
   - Initialize repository
   - Set up Railway Strapi
   - Deploy Next.js skeleton to Vercel
   - Daily check-ins on progress

4. **Content Workshop** (1 hour):
   - Show Strapi admin panel
   - Input PDF content together
   - Train team on content updates

5. **Pre-Launch Review** (2 days before meeting):
   - Walkthrough of live site
   - Collect final feedback
   - Make any last adjustments
   - Confirm everything is ready for Admiral Inman

---

## Appendix A: Technical References

**Next.js 15 Documentation**:
- App Router: https://nextjs.org/docs/app
- Image Optimization: https://nextjs.org/docs/app/building-your-application/optimizing/images
- ISR: https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration

**Strapi v5 Documentation**:
- Content Types: https://docs.strapi.io/dev-docs/backend-customization/models
- API Tokens: https://docs.strapi.io/user-docs/settings/api-tokens
- Media Library: https://docs.strapi.io/user-docs/media-library

**Railway**:
- Strapi Template: https://railway.app/template/strapi
- PostgreSQL: https://docs.railway.app/databases/postgresql

**Vercel**:
- Next.js Deployment: https://vercel.com/docs/frameworks/nextjs
- Custom Domains: https://vercel.com/docs/projects/domains

**Design Resources**:
- shadcn/ui: https://ui.shadcn.com
- Lucide Icons: https://lucide.dev
- Framer Motion: https://www.framer.com/motion
- Tailwind CSS: https://tailwindcss.com

---

## Appendix B: Imagery Asset List

**NASA Public Domain Images** (Confirmed License-Free):
- NASA Valkyrie Robot: https://commons.wikimedia.org/wiki/File:Valkyrie-robot-3.jpg
- NASA Robonaut: https://images.nasa.gov (search "robonaut")
- JSC Robotics Lab: https://images.nasa.gov (search "johnson space center robotics")
- Space backgrounds: https://images.nasa.gov (search "stars" "nebula" "space")

**Free Stock Photo Sources**:
- Unsplash: https://unsplash.com (search: "robotics", "laboratory", "space", "technology")
- Pexels: https://pexels.com (same search terms)
- Pixabay: https://pixabay.com (alternative source)

**Icon Library**:
- Lucide Icons: https://lucide.dev (MIT License, free commercial use)

---

**End of Plan Document**

---

This comprehensive plan is ready for stakeholder review and execution. Please review and provide feedback on any sections that need adjustment before we begin development.
