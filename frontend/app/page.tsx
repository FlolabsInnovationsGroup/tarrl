'use client';

import Header from '@/components/Header';
import ResearchTracksSection from '@/components/ResearchTracksSection';
import BenefitsSection from '@/components/BenefitsSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import WhyWeExistSection from '@/components/WhyWeExistSection';
import WhatWeBelieveSection from '@/components/WhatWeBelieveSection';
import WhoThisIsForSection from '@/components/WhoThisIsForSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import CallToActionSection from '@/components/CallToActionSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen">
        {/* Hero Section */}
        <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background image */}
        <div className="absolute inset-0">
          <img 
            src="/images/hero-robot.jpg" 
            alt="Advanced robotics and AI technology"
            className="w-full h-full object-cover opacity-25"
          />
        </div>
        {/* Animated background gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-background-primary/90 via-texas-blue/20 to-background-primary/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_50%)]" />
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="space-y-8">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 bg-linear-to-r from-accent-primary via-accent-secondary to-accent-tertiary bg-clip-text text-transparent animate-gradient">
              TARRL
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
              Texas Advanced Robotics Research Lab
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-2xl md:text-3xl font-semibold text-text-secondary">
                Advance your career. Be at the center of the future.
              </p>
              <p className="text-xl md:text-2xl text-text-tertiary">
                Remote first. Open to the world.
              </p>
            </div>
            <p className="text-lg md:text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
              An open source Embodied AI lab and venture playground where advanced AI, robotics, and human imagination come together to create agents and robots that move, perceive, learn, and collaborate in the real world.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <button className="px-10 py-4 text-lg font-semibold rounded-xl bg-linear-to-r from-accent-primary to-accent-secondary text-white hover:shadow-2xl hover:shadow-accent-primary/50 transition-all duration-300 hover:scale-105">
                Apply to Join TARRL
              </button>
              <button className="px-10 py-4 text-lg font-semibold rounded-xl border-2 border-accent-primary text-accent-primary hover:bg-accent-primary/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
        </section>

        {/* Who We Are Section */}
        <WhoWeAreSection />

        {/* Why We Exist Section */}
        <WhyWeExistSection />

        {/* What We Believe Section */}
        <WhatWeBelieveSection />

        {/* Benefits Section */}
        <BenefitsSection />

        {/* Research Tracks Section */}
        <ResearchTracksSection />

        {/* Who This Is For Section */}
        <WhoThisIsForSection />

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Call to Action Section */}
        <CallToActionSection />
      </main>
      <Footer />
    </>
  );
}