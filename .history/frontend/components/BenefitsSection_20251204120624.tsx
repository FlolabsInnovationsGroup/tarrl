'use client';

import { useEffect, useState } from 'react';
import { getBenefits, type Benefit } from '@/lib/strapi';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export default function BenefitsSection() {
  const [benefits, setBenefits] = useState<Benefit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBenefits() {
      try {
        const data = await getBenefits();
        setBenefits(data);
      } catch (error) {
        console.error('Failed to fetch benefits:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchBenefits();
  }, []);

  if (loading) {
    return (
      <section className="py-24 px-6" style={{ background: 'var(--background-primary)', width: '100%' }}>
        <div className="max-w-7xl mx-auto" style={{ width: '100%', maxWidth: '80rem' }}>
          <div className="text-center" style={{ color: 'var(--text-secondary)' }}>Loading benefits...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6" style={{ background: 'var(--background-primary)', width: '100%' }}>
      <div className="max-w-7xl mx-auto" style={{ width: '100%', maxWidth: '80rem' }}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            What You Get
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Resources and support to accelerate your robotics research
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {benefits.map((benefit) => {
            const IconComponent = (Icons as Record<string, LucideIcon>)[benefit.icon || 'Circle'];
            
            return (
              <div
                key={benefit.id}
                className="text-center"
              >
                <div 
                  className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full transition-all duration-300 hover:scale-110"
                  style={{ background: 'rgba(59, 130, 246, 0.1)' }}
                >
                  {IconComponent && (
                    <IconComponent className="w-8 h-8" style={{ color: 'var(--accent-primary)' }} />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                  {benefit.title}
                </h3>
                <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
