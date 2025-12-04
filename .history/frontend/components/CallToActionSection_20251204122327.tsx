'use client';

export default function CallToActionSection() {
  return (
    <section className="w-full py-32 px-6 bg-linear-to-br from-background-primary via-texas-blue/20 to-background-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.15),transparent_50%)]" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          <h2 className="text-6xl md:text-7xl font-bold text-text-primary leading-tight">
            Join TARRL as a Research Associate
          </h2>
          <p className="text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            We are assembling a global network of Research Associate Interns and Fellows.
          </p>
          <p className="text-xl text-text-tertiary max-w-4xl mx-auto leading-relaxed">
            PhD candidates, PhDs, postdocs, experienced professionals, and exceptional builders across AI, robotics, software, systems, design, and related fields are invited to work on ambitious open Embodied AI projects in education, health, travel and hospitality, entertainment, and the space sector.
          </p>

          <div className="grid md:grid-cols-2 gap-8 pt-8 max-w-3xl mx-auto">
            <div className="p-8 rounded-2xl bg-background-secondary border border-accent-primary/30">
              <p className="text-2xl font-bold text-accent-primary mb-2">You bring</p>
              <p className="text-lg text-text-secondary">The expertise, curiosity, and drive</p>
            </div>
            <div className="p-8 rounded-2xl bg-background-secondary border border-accent-secondary/30">
              <p className="text-2xl font-bold text-accent-secondary mb-2">We provide</p>
              <p className="text-lg text-text-secondary">The robots, infrastructure, and mission</p>
            </div>
          </div>

          <div className="pt-12">
            <button className="px-16 py-6 text-2xl font-bold rounded-2xl bg-linear-to-r from-accent-primary via-accent-secondary to-accent-tertiary text-white hover:shadow-2xl hover:shadow-accent-primary/50 transition-all duration-300 hover:scale-105">
              Apply to Join TARRL
            </button>
          </div>

          <div className="pt-8 flex flex-wrap justify-center gap-6">
            <span className="px-6 py-2 rounded-full bg-background-secondary border border-accent-primary/50 text-accent-primary font-semibold">
              Remote first
            </span>
            <span className="px-6 py-2 rounded-full bg-background-secondary border border-accent-secondary/50 text-accent-secondary font-semibold">
              Embodied AI
            </span>
            <span className="px-6 py-2 rounded-full bg-background-secondary border border-accent-tertiary/50 text-accent-tertiary font-semibold">
              Open source robotics
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
