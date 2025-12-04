'use client';

import ResearchTracksSection from '@/components/ResearchTracksSection';
import BenefitsSection from '@/components/BenefitsSection';

export default function HomePage() {
  return (
    <main style={{ width: '100%', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ 
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {/* Background gradient */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, #0A1929, rgba(0, 40, 104, 0.2), #0A1929)'
        }} />
        
        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 1.5rem',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: 'clamp(3.75rem, 10vw, 6rem)',
            fontWeight: 700,
            marginBottom: '1.5rem',
            background: 'linear-gradient(to right, #3B82F6, #8B5CF6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            TARRL
          </h1>
          <h2 style={{
            fontSize: 'clamp(1.875rem, 5vw, 3rem)',
            fontWeight: 700,
            marginBottom: '2rem',
            color: '#F9FAFB'
          }}>
            Texas Advanced Robotics Research Lab
          </h2>
          <p style={{
            fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
            marginBottom: '1rem',
            color: '#94A3B8'
          }}>
            Advance your career. Be at the center of the future.
          </p>
          <p style={{
            fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
            marginBottom: '3rem',
            color: '#64748B'
          }}>
            Remote first. Open to the world.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              padding: '1rem 2rem',
              fontWeight: 600,
              borderRadius: '0.5rem',
              background: 'linear-gradient(to right, #3B82F6, #8B5CF6)',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              transition: 'opacity 0.3s'
            }}>
              Join TARRL
            </button>
            <button style={{
              padding: '1rem 2rem',
              fontWeight: 600,
              borderRadius: '0.5rem',
              border: '2px solid #3B82F6',
              color: '#3B82F6',
              background: 'transparent',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}>
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
