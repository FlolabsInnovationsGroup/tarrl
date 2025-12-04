'use client';

import { Globe2, Bot, Users, FileText } from 'lucide-react';

export default function HowItWorksSection() {
  const workingModel = [
    {
      icon: Globe2,
      title: 'Remote first participation',
      description: 'You join from wherever you are. Collaboration runs through shared repositories, documentation, and regular online meetings. Time zones are handled through a mix of asynchronous work and scheduled sessions.'
    },
    {
      icon: Bot,
      title: 'Access to robots and infrastructure',
      description: 'You interact with physical robots through teleoperation, streamed sensor data, and digital twins. You can run experiments, evaluate models, and iterate on behaviors without being physically present.'
    },
    {
      icon: Users,
      title: 'Distributed research pods',
      description: 'You work in focused pods aligned to specific tracks, such as humanoids, quadrupeds, perception, tooling, or space robotics. Each pod has clear goals, milestones, and shared documentation.'
    },
    {
      icon: FileText,
      title: 'Open, written culture',
      description: 'Decisions, insights, and results live in shared documents, experiment logs, and code. This lets contributors in different time zones stay aligned and move quickly.'
    }
  ];

  return (
    <section id="how-it-works" className="w-full py-24 px-6 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-text-primary">
            How It Works
          </h2>
          <p className="text-xl text-text-secondary">Remote First</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {workingModel.map((item, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-background-primary border border-background-tertiary hover:border-accent-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 p-4 rounded-xl bg-linear-to-br from-accent-primary/20 to-accent-tertiary/20">
                  <item.icon className="w-8 h-8 text-accent-primary" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary pt-3">{item.title}</h3>
              </div>
              <p className="text-lg text-text-secondary leading-relaxed pl-20">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="p-10 rounded-3xl bg-linear-to-br from-accent-primary/10 via-accent-secondary/10 to-accent-tertiary/10 border-2 border-accent-primary/30 text-center">
            <p className="text-3xl font-bold text-text-primary leading-relaxed mb-4">
              Your location should not limit your impact.
            </p>
            <p className="text-xl text-text-secondary">
              Remote first is not a compromise in this model, it is a force multiplier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
