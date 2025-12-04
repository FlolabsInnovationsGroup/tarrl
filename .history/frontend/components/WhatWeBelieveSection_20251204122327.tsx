'use client';

import { Code, Users, Rocket, Globe } from 'lucide-react';

export default function WhatWeBelieveSection() {
  const beliefs = [
    {
      icon: Code,
      title: 'Turn ideas into reality',
      description: 'Turn your research ideas into running code, robots, and experiments.'
    },
    {
      icon: Globe,
      title: 'Open source stacks',
      description: 'Prototype open source stacks that others can build on and cite.'
    },
    {
      icon: Rocket,
      title: 'Ambitious concepts',
      description: 'Explore ambitious concepts that do not fit neatly into a single grant or corporate roadmap.'
    },
    {
      icon: Users,
      title: 'Global community',
      description: 'Work with a global, remote first community of serious builders who care about impact and rigor.'
    }
  ];

  return (
    <section className="w-full py-24 px-6 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-text-primary">
            What We Believe
          </h2>
          <p className="text-2xl text-text-secondary max-w-3xl mx-auto">
            We are not here to give you one more credential and send you back to business as usual.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-3xl font-bold text-center text-accent-primary mb-8 leading-relaxed">
            We exist to put you closer to the center of what comes next in Embodied AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {beliefs.map((belief, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-background-primary border border-background-tertiary hover:border-accent-primary/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="shrink-0 p-4 rounded-xl bg-linear-to-br from-accent-primary/20 to-accent-secondary/20">
                  <belief.icon className="w-8 h-8 text-accent-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-3">{belief.title}</h3>
                  <p className="text-lg text-text-secondary leading-relaxed">{belief.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="p-10 rounded-3xl bg-linear-to-br from-accent-primary/10 via-accent-secondary/10 to-accent-tertiary/10 border-2 border-accent-primary/30">
            <p className="text-2xl font-bold text-center text-text-primary leading-relaxed">
              No one owns your mind here. We build in the open, share credit, and let the work and results speak for themselves.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
