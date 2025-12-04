# TARRL Developer Guide

**Comprehensive technical documentation for developers**

---

## 📋 Table of Contents

- [Architecture Overview](#architecture-overview)
- [Prerequisites](#prerequisites)
- [Local Development Setup](#local-development-setup)
- [Project Structure Deep Dive](#project-structure-deep-dive)
- [Styling with Tailwind CSS v4](#styling-with-tailwind-css-v4)
- [Content Management](#content-management)
- [Deployment](#deployment)
- [Performance Optimization](#performance-optimization)
- [Troubleshooting](#troubleshooting)

---

## 🏗 Architecture Overview

TARRL is built as a **Jamstack application** with:

- **Frontend**: Next.js 16 (App Router) + Tailwind CSS v4
- **Backend**: Strapi v5 headless CMS
- **Database**: PostgreSQL 14+
- **Deployment**: Vercel (frontend) + Railway (backend)

### Data Flow

```
User Browser
     ↓
Next.js (Vercel) - ISR with 60s revalidation
     ↓
Strapi API (Railway)
     ↓
PostgreSQL (Railway)
```

### Key Features

- **Server-Side Rendering (SSR)** for initial load
- **Incremental Static Regeneration (ISR)** for Strapi content
- **Client-Side Navigation** with Next.js App Router
- **Tailwind CSS v4** with custom theme variables
- **TypeScript** for type safety
- **Responsive Design** with mobile-first approach

---

## ✅ Prerequisites

### Required

- **Node.js**: 18.17.0 or higher
- **npm**: 9.0.0 or higher (or pnpm 8+)
- **Git**: Latest version
- **Code Editor**: VS Code recommended

### Optional but Recommended

- **Vercel CLI**: `npm i -g vercel`
- **PostgreSQL**: For local Strapi development
- **Docker**: For containerized development

---

## 🚀 Local Development Setup

### 1. Clone Repository

```bash
git clone https://github.com/FlomadLabsRD/tarrl.git
cd tarrl
```

### 2. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
```

**Edit `.env.local`**:
```env
NEXT_PUBLIC_STRAPI_URL=https://strapi-production-9c3d.up.railway.app
# Or for local Strapi:
# NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Optional: Local Strapi Setup

If you want to run Strapi locally:

```bash
cd ../backend

# Install dependencies
npm install

# Create .env file
DATABASE_URL=postgresql://user:password@localhost:5432/tarrl
JWT_SECRET=your-secret-key
ADMIN_JWT_SECRET=your-admin-secret

# Start Strapi
npm run develop
```

Access Strapi admin at [http://localhost:1337/admin](http://localhost:1337/admin)

---

## 📁 Project Structure Deep Dive

```
tarrl/
├── frontend/
│   ├── app/
│   │   ├── page.tsx              # Homepage (9 sections)
│   │   ├── layout.tsx            # Root layout (fonts, metadata)
│   │   ├── globals.css           # Tailwind config + custom CSS
│   │   ├── robots.ts             # SEO robots.txt
│   │   ├── sitemap.ts            # SEO sitemap
│   │   └── favicon.ico
│   │
│   ├── components/
│   │   ├── Header.tsx            # Fixed navigation
│   │   ├── Footer.tsx            # Footer with links
│   │   ├── LoadingSpinner.tsx    # Loading state
│   │   ├── WhoWeAreSection.tsx
│   │   ├── WhyWeExistSection.tsx
│   │   ├── WhatWeBelieveSection.tsx
│   │   ├── BenefitsSection.tsx   # Fetches from Strapi
│   │   ├── ResearchTracksSection.tsx  # Fetches from Strapi
│   │   ├── WhoThisIsForSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   └── CallToActionSection.tsx
│   │
│   ├── lib/
│   │   └── strapi.ts             # Strapi API client
│   │
│   ├── public/
│   │   ├── images/               # Static images
│   │   └── og-image.jpg          # Social sharing image
│   │
│   ├── .env.local                # Environment variables (git-ignored)
│   ├── .env.example              # Environment template
│   ├── next.config.ts            # Next.js configuration
│   ├── postcss.config.mjs        # PostCSS + Tailwind config
│   ├── tsconfig.json             # TypeScript configuration
│   └── package.json
│
├── backend/                       # Strapi (Railway deployment)
├── docs/
│   ├── CMS_GUIDE.md              # Content editor guide
│   └── DEVELOPER_GUIDE.md        # This file
├── README.md
└── .github/
    └── workflows/
        └── deploy.yml            # CI/CD automation
```

### Key Files Explained

#### `app/globals.css`
- **Tailwind CSS v4 configuration** using `@import "tailwindcss"`
- **Custom theme** with `@theme` directive
- **CSS layers**: `@layer base` and `@layer utilities`
- **Color variables**: Background, text, accent colors
- **Custom animations**: Gradient animation for hero

**Important**: Uses **Tailwind CSS v4 syntax**, not v3!

#### `app/page.tsx`
- **Single-page application** with 9 scroll sections
- **Section IDs** for smooth scroll navigation
- **Suspense boundaries** for loading states
- **Server Components** for better performance

#### `lib/strapi.ts`
- **Centralized API client** for Strapi
- **Type-safe interfaces** for Research Tracks and Benefits
- **Error handling** and fallbacks
- **Environment-based URL** configuration

---

## 🎨 Styling with Tailwind CSS v4

### Migration from v3 to v4

TARRL uses **Tailwind CSS v4** with significant syntax changes:

| Tailwind v3 (OLD) | Tailwind v4 (NEW) |
|-------------------|-------------------|
| `tailwind.config.js` | No config file - use `globals.css` |
| `@tailwind base;` | `@import "tailwindcss";` |
| `theme: { extend: {} }` | `@theme { ... }` |
| Custom colors in JS | CSS variables in `@theme` |
| `bg-gradient-to-r` | `bg-linear-to-r` |

### Theme Configuration

**In `globals.css`**:

```css
@import "tailwindcss";

@theme {
  /* Colors */
  --color-background-primary: #0A1929;
  --color-accent-primary: #3B82F6;
  
  /* Spacing */
  --spacing-section: 6rem;
  
  /* Fonts */
  --font-family-display: 'Space Grotesk', sans-serif;
}

@layer base {
  /* Global styles */
}

@layer utilities {
  /* Custom utilities */
}
```

### Using Custom Colors

```tsx
<div className="bg-background-primary text-text-primary">
  <h1 className="text-accent-primary">Title</h1>
</div>
```

### Responsive Design

```tsx
<div className="
  w-full               /* Mobile: 100% width */
  md:w-1/2            /* Tablet: 50% width */
  lg:w-1/3            /* Desktop: 33% width */
  px-6                /* Mobile: 24px padding */
  md:px-12            /* Tablet: 48px padding */
">
  Content
</div>
```

### Custom Animations

Defined in `globals.css`:

```css
@keyframes gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.animate-gradient {
  animation: gradient 15s ease infinite;
}
```

---

## 🔌 Content Management

### Strapi Integration

#### Fetching Research Tracks

```typescript
// lib/strapi.ts
export async function getResearchTracks(): Promise<ResearchTrack[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/research-tracks`,
      { next: { revalidate: 60 } } // ISR: revalidate every 60s
    );
    const data = await response.json();
    return data.data.map((item: any) => item.attributes);
  } catch (error) {
    console.error('Error fetching research tracks:', error);
    return fallbackTracks; // Fallback data
  }
}
```

#### Using in Components

```tsx
// components/ResearchTracksSection.tsx
import { getResearchTracks } from '@/lib/strapi';

export default async function ResearchTracksSection() {
  const tracks = await getResearchTracks();
  
  return (
    <section>
      {tracks.map((track) => (
        <div key={track.name}>
          <h3>{track.name}</h3>
          <p>{track.description}</p>
        </div>
      ))}
    </section>
  );
}
```

### ISR (Incremental Static Regeneration)

- **Revalidation**: 60 seconds
- **Purpose**: Fresh content without full rebuild
- **How it works**:
  1. User visits page
  2. Next.js serves cached version
  3. After 60s, Next.js fetches new data in background
  4. Next request gets updated content

### Fallback Data

Always provide fallback data for resilience:

```typescript
const fallbackTracks: ResearchTrack[] = [
  {
    name: "Humanoid Robotics",
    description: "Full-body humanoid research...",
    icon: "User",
    status: "Active"
  },
  // ... more tracks
];
```

---

## 🚀 Deployment

### Vercel (Frontend)

#### Initial Setup

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Link Project**:
   ```bash
   cd frontend
   vercel link
   ```

3. **Configure Environment**:
   ```bash
   vercel env add NEXT_PUBLIC_STRAPI_URL production
   # Enter: https://strapi-production-9c3d.up.railway.app
   ```

4. **Deploy**:
   ```bash
   vercel --prod
   ```

#### Automatic Deployments

After initial setup, Vercel auto-deploys on:
- **Push to `main`**: Production deployment
- **Pull Requests**: Preview deployments

#### Environment Variables

Add in Vercel Dashboard:
- `NEXT_PUBLIC_STRAPI_URL`: Strapi API URL
- `NEXT_PUBLIC_GA_ID`: Google Analytics (optional)

### Railway (Backend - Already Deployed)

Backend is already live. No action needed unless making changes.

**Strapi Admin**: https://strapi-production-9c3d.up.railway.app/admin

---

## ⚡ Performance Optimization

### Image Optimization

Use Next.js `<Image>` component:

```tsx
import Image from 'next/image';

<Image
  src="/images/robot.jpg"
  alt="Humanoid robot"
  width={800}
  height={600}
  priority={false} // true for above-the-fold images
  quality={85}     // 85 is good balance
/>
```

### Font Optimization

Fonts are already optimized in `layout.tsx`:

```tsx
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap', // FOUT prevention
});
```

### Code Splitting

- **Dynamic imports** for heavy components:

```tsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <LoadingSpinner />,
  ssr: false, // Client-side only if needed
});
```

### Lighthouse Scores Target

- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 100
- **SEO**: 100

---

## 🔧 Troubleshooting

### Issue: "Module not found: tailwindcss"

**Solution**:
```bash
npm install -D tailwindcss @tailwindcss/postcss postcss
```

### Issue: Tailwind classes not working

**Solution**:
1. Check `postcss.config.mjs` has `@tailwindcss/postcss`
2. Ensure `globals.css` has `@import "tailwindcss";`
3. Clear cache: `rm -rf .next`
4. Restart dev server

### Issue: Strapi data not showing

**Solution**:
1. Check `NEXT_PUBLIC_STRAPI_URL` in `.env.local`
2. Verify Strapi is running
3. Check browser console for API errors
4. Ensure content is "Published" in Strapi

### Issue: Build fails with TypeScript errors

**Solution**:
```bash
npm run type-check  # See specific errors
npm run lint        # Check linting issues
```

### Issue: Images not loading

**Solution**:
1. Check image is in `/public/images/`
2. Use absolute paths: `/images/robot.jpg`
3. Verify file extension matches import
4. For external images, add domain to `next.config.ts`:

```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'strapi-production-9c3d.up.railway.app',
    },
  ],
},
```

---

## 🧪 Testing

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
npm run lint -- --fix  # Auto-fix issues
```

### Build Test

```bash
npm run build
npm start
```

### Accessibility Testing

- Use [axe DevTools](https://www.deque.com/axe/devtools/)
- Check keyboard navigation
- Test with screen reader (VoiceOver on Mac)

---

## 📚 Additional Resources

- [Next.js 16 Docs](https://nextjs.org/docs)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Strapi v5 Docs](https://docs.strapi.io/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vercel Deployment Docs](https://vercel.com/docs)

---

## 👥 Contributing

1. Create feature branch: `git checkout -b feature/new-feature`
2. Make changes
3. Test locally: `npm run build && npm start`
4. Commit: `git commit -m "Add new feature"`
5. Push: `git push origin feature/new-feature`
6. Create Pull Request

---

**Built with 🤖 by the TARRL team**
