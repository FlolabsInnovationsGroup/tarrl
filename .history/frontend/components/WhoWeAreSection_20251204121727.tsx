'use client';

export default function WhoWeAreSection() {
  return (
    <section className="w-full py-24 px-6 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-text-primary">
            Who We Are (And Are Not)
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            'We are not a traditional university lab.',
            'Not a corporate R&D center.',
            'Not a bootcamp.'
          ].map((text, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-background-primary/50 border border-background-tertiary/50">
              <p className="text-2xl font-semibold text-text-tertiary text-center">{text}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <p className="text-2xl md:text-3xl font-bold text-text-primary leading-relaxed">
            We are Texas Advanced Robotics Research Lab, an open, venture driven Embodied AI institute where curiosity meets courage and AI, robotics, and design collide.
          </p>
          <p className="text-xl text-text-secondary leading-relaxed">
            TARRL is built primarily for PhD candidates, current PhDs and postdocs, and experienced industry professionals who want to go beyond papers, titles, and conference badges and actually ship code, systems, and robots that other people can use.
          </p>
          <p className="text-lg text-text-tertiary leading-relaxed">
            Whether your background is in AI or machine learning, robotics, software engineering, systems architecture, human robot interaction, controls, product design, simulation, or another relevant area, there is space for you to contribute at the Research Associate level.
          </p>
          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="px-8 py-3 rounded-full bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 border border-accent-primary/50">
              <p className="text-lg font-semibold text-accent-primary">Remote first by design</p>
            </div>
            <div className="px-8 py-3 rounded-full bg-gradient-to-r from-accent-tertiary/20 to-accent-primary/20 border border-accent-tertiary/50">
              <p className="text-lg font-semibold text-accent-tertiary">Join from anywhere</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
