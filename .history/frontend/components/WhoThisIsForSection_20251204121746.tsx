'use client';

import { GraduationCap, Brain, Globe, Code, Heart, Zap } from 'lucide-react';

export default function WhoThisIsForSection() {
  const targetAudience = [
    {
      icon: GraduationCap,
      text: 'PhD candidates, PhDs, postdocs, or experienced practitioners in AI, robotics, software, systems, design, or closely related fields'
    },
    {
      icon: Brain,
      text: 'Deep passion for robotics, AI, and embodied intelligence'
    },
    {
      icon: Globe,
      text: 'Want hands on access to real robots and real problems without needing to change institutions or countries'
    },
    {
      icon: Code,
      text: 'Care about open science and open source, not only closed corporate IP'
    },
    {
      icon: Heart,
      text: 'Thrive in remote first, globally distributed teams, combining async work with focused live sessions'
    },
    {
      icon: Zap,
      text: 'Want to advance their careers by building visible, credible, high impact projects at the center of where the field is heading'
    }
  ];

  return (
    <section className="w-full py-24 px-6 bg-background-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-text-primary">
            Who This Is For
          </h2>
          <p className="text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            TARRL Research Associate roles are internship style positions designed primarily for PhD level and experienced candidates, with an open door for exceptional and highly motivated applicants from other paths.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6 mb-16">
          {targetAudience.map((item, idx) => (
            <div key={idx} className="flex items-start gap-6 p-6 rounded-xl bg-background-secondary border border-background-tertiary hover:border-accent-primary/50 transition-all duration-300">
              <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20">
                <item.icon className="w-6 h-6 text-accent-primary" />
              </div>
              <p className="text-lg text-text-secondary leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="p-10 rounded-3xl bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border-2 border-accent-primary/40 text-center">
            <p className="text-3xl font-bold text-text-primary leading-relaxed">
              If you see yourself in that mix, you are exactly the kind of person we want to hear from.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
