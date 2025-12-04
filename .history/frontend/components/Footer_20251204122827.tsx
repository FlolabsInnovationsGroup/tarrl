'use client';

import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 px-6 bg-background-secondary border-t border-background-tertiary">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-linear-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              TARRL
            </h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              Texas Advanced Robotics Research Lab - An open source Embodied AI lab and venture playground.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/tarrl" aria-label="TARRL on GitHub" className="p-2 rounded-lg bg-background-tertiary hover:bg-accent-primary/20 text-text-secondary hover:text-accent-primary transition-all duration-300">
                <Github size={20} />
              </a>
              <a href="https://twitter.com/tarrl" aria-label="TARRL on Twitter" className="p-2 rounded-lg bg-background-tertiary hover:bg-accent-primary/20 text-text-secondary hover:text-accent-primary transition-all duration-300">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com/company/tarrl" aria-label="TARRL on LinkedIn" className="p-2 rounded-lg bg-background-tertiary hover:bg-accent-primary/20 text-text-secondary hover:text-accent-primary transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@tarrl.org" aria-label="Email TARRL" className="p-2 rounded-lg bg-background-tertiary hover:bg-accent-primary/20 text-text-secondary hover:text-accent-primary transition-all duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#who-we-are" className="text-text-secondary hover:text-accent-primary transition-colors">Who We Are</a></li>
              <li><a href="#research-tracks" className="text-text-secondary hover:text-accent-primary transition-colors">Research Tracks</a></li>
              <li><a href="#how-it-works" className="text-text-secondary hover:text-accent-primary transition-colors">How It Works</a></li>
              <li><a href="#apply" className="text-text-secondary hover:text-accent-primary transition-colors">Apply</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">Contact</h4>
            <ul className="space-y-2 text-text-secondary">
              <li>Austin, Texas</li>
              <li>Remote First</li>
              <li><a href="mailto:contact@tarrl.org" className="hover:text-accent-primary transition-colors">contact@tarrl.org</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background-tertiary text-center text-text-tertiary text-sm">
          <p>&copy; {currentYear} TARRL. All rights reserved. Built with passion for Embodied AI.</p>
        </div>
      </div>
    </footer>
  );
}
