'use client';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background-primary)] via-[var(--texas-blue)]/20 to-[var(--background-primary)]" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
            TARRL
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8" style={{color: 'var(--text-primary)'}}>
            Texas Advanced Robotics Research Lab
          </h2>
          <p className="text-xl md:text-2xl mb-4" style={{color: 'var(--text-secondary)'}}>
            Advance your career. Be at the center of the future.
          </p>
          <p className="text-lg md:text-xl mb-12" style={{color: 'var(--text-tertiary)'}}>
            Remote first. Open to the world.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <button 
              className="px-8 py-4 font-semibold rounded-lg hover:opacity-90 transition-opacity"
              style={{
                background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))',
                color: 'white'
              }}
            >
              Join TARRL
            </button>
            <button 
              className="px-8 py-4 font-semibold rounded-lg transition-all hover:bg-[rgba(59,130,246,0.1)]"
              style={{
                border: '2px solid var(--accent-primary)',
                color: 'var(--accent-primary)'
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Temporary content indicator */}
      <section className="py-24 px-6" style={{background: 'var(--background-secondary)'}}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6" style={{color: 'var(--text-primary)'}}>
            Site Under Construction
          </h2>
          <p className="text-xl" style={{color: 'var(--text-secondary)'}}>
            Full content coming soon. Backend configuration in progress.
          </p>
        </div>
      </section>
    </main>
  );
}
