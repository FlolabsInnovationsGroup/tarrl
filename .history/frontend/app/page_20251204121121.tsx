'use client';

import ResearchTracksSection from '@/components/ResearchTracksSection';
import BenefitsSection from '@/components/BenefitsSection';

export default function HomePage() {
  return (
    <main className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background-primary via-texas-blue/20 to-background-primary" />
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
            TARRL
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-8 text-text-primary">
            Texas Advanced Robotics Research Lab
          </h2>
          <p className="text-xl md:text-2xl mb-4 text-text-secondary">
            Advance your career. Be at the center of the future.
          </p>
          <p className="text-lg md:text-xl mb-12 text-text-tertiary">
            Remote first. Open to the world.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <button className="px-8 py-4 font-semibold rounded-lg bg-gradient-to-r from-accent-primary to-accent-secondary text-white hover:opacity-90 transition-opacity">
              Join TARRL
            </button>
            <button className="px-8 py-4 font-semibold rounded-lg border-2 border-accent-primary text-accent-primary hover:bg-accent-primary/10 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Research Tracks Section */}
      <ResearchTracksSection />

      {/* Benefits Section */}
      <BenefitsSection />
    </main>
  );
}
