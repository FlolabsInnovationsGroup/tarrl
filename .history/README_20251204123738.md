# TARRL - Texas Advanced Robotics Research Lab

![TARRL](https://img.shields.io/badge/Status-Production-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-16.0.7-black)
![Tailwind](https://img.shields.io/badge/Tailwind-4.0-38bdf8)

**Official website for TARRL** - Remote-first Embodied AI research institute

🌐 **Live**: [tarrl.org](https://tarrl.org)  
🤖 **Research**: Humanoids • Quadrupeds • Assistive Robotics • Perception • Swarm • Simulation • Tooling • Space

---

## 📋 Quick Links

- **[Developer Guide](./docs/DEVELOPER_GUIDE.md)** - Technical documentation
- **[CMS Guide](./docs/CMS_GUIDE.md)** - Content editing guide
- **[Project Plan](./TARRL_WEBSITE_PLAN.md)** - Original vision

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm 9+
- Git
- Vercel CLI (optional)

### Installation

```bash
# Install dependencies
pnpm install

# Set up environment variables
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

# Start development servers
pnpm dev
```

### Development

```bash
# Start backend (Strapi)
cd backend && pnpm dev

# Start frontend (Next.js)
cd frontend && pnpm dev
```

## Deployment

### Backend (Railway)

```bash
# Deploy Strapi to Railway
cd backend
railway up
```

### Frontend (Vercel)

```bash
# Deploy Next.js to Vercel
cd frontend
vercel deploy --prod
```

## Documentation

- [Development Plan](./TARRL_WEBSITE_PLAN.md)
- [Content Guide](./docs/CONTENT_GUIDE.md) (coming soon)
- [Design System](./docs/DESIGN_SYSTEM.md) (coming soon)
- [Deployment Guide](./docs/DEPLOYMENT.md) (coming soon)

## License

Proprietary - FloLabs © 2025

## Contact

For questions or contributions, contact the TARRL team.
