'use client';

import { Lock, DollarSign, Database, FileX } from 'lucide-react';

export default function WhyWeExistSection() {
  const barriers = [
    {
      icon: Lock,
      text: 'Real robots sit behind funding cycles, closed labs, or corporate NDAs'
    },
    {
      icon: DollarSign,
      text: 'Labs and infrastructure are expensive'
    },
    {
      icon: Database,
      text: 'Open datasets are fragmented'
    },
    {
      icon: FileX,
      text: 'Brilliant ideas often stop at the simulation or paper stage'
    }
  ];

  const verticals = [
    'Education',
    'Health and human performance',
    'Travel and hospitality',
    'Entertainment and experiential media',
    'The space sector'
  ];

  return (
    <section className="w-full py-24 px-6 bg-background-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-text-primary">
            Why We Exist
          </h2>
          <p className="text-2xl text-text-secondary max-w-3xl mx-auto">
            In advanced robotics and AI, access is often a maze.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {barriers.map((barrier, idx) => (
            <div key={idx} className="flex items-start gap-4 p-6 rounded-xl bg-background-secondary/50 border border-background-tertiary/30 hover:border-accent-primary/50 transition-all duration-300">
              <div className="shrink-0 p-3 rounded-lg bg-accent-primary/10">
                <barrier.icon className="w-6 h-6 text-accent-primary" />
              </div>
              <p className="text-lg text-text-secondary">{barrier.text}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-2xl font-bold text-center text-text-primary leading-relaxed">
            Breaking into serious Embodied AI work should not depend on your zip code, your passport, or a single advisor.
          </p>
          <p className="text-xl text-center text-text-secondary leading-relaxed">
            TARRL exists to widen the doors, connect top minds to real robots and realistic environments, ignite hands on collaboration, and make the work real, open, and reproducible for everyone on the team.
          </p>

          <div className="pt-8">
            <h3 className="text-3xl font-bold text-center text-text-primary mb-8">
              Our Verticals
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {verticals.map((vertical, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-linear-to-br from-background-secondary to-background-tertiary border border-accent-primary/20 text-center hover:border-accent-primary/50 transition-all duration-300 hover:scale-105">
                  <p className="text-lg font-semibold text-text-primary">{vertical}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8 p-8 rounded-2xl bg-gradient-to-r from-texas-blue/20 to-accent-primary/10 border border-accent-primary/30">
            <p className="text-lg text-text-secondary leading-relaxed">
              Through our connection to the Texas innovation and space ecosystem, including NASA related activity, SpaceX and other space leaders, and collaboration with Texas A&M, TARRL is well positioned to explore how Embodied AI and robotics can support space industry challenges, from terrestrial testbeds to off world scenarios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
