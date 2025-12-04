'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Who We Are', href: '#who-we-are' },
    { name: 'Why We Exist', href: '#why-we-exist' },
    { name: 'What We Believe', href: '#what-we-believe' },
    { name: 'Research Tracks', href: '#research-tracks' },
    { name: 'How It Works', href: '#how-it-works' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background-primary/80 backdrop-blur-lg border-b border-background-tertiary/50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold bg-linear-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              TARRL
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-text-secondary hover:text-accent-primary transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#apply"
              className="px-6 py-2 text-sm font-semibold rounded-lg bg-linear-to-r from-accent-primary to-accent-secondary text-white hover:shadow-lg hover:shadow-accent-primary/50 transition-all duration-300"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-text-primary"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm font-medium text-text-secondary hover:text-accent-primary transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#apply"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full px-6 py-2 text-sm font-semibold text-center rounded-lg bg-linear-to-r from-accent-primary to-accent-secondary text-white"
            >
              Apply Now
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
