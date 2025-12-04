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
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-text-secondary">Loading benefits...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            What You Get
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Resources and support to accelerate your robotics research
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => {
            const IconComponent = (Icons as Record<string, LucideIcon>)[benefit.icon || 'Circle'];
            
            return (
              <div
                key={benefit.id}
                className="group text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-accent-primary/10 rounded-full group-hover:bg-accent-primary/20 transition-colors">
                  {IconComponent && (
                    <IconComponent className="w-8 h-8 text-accent-primary" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
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
