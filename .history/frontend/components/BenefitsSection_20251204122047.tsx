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
      <section className="w-full py-24 px-6 bg-background-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-text-secondary">Loading benefits...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-24 px-6 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-text-primary">
            What You Get
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Resources and support to accelerate your robotics research
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {benefits.map((benefit) => {
            const IconComponent = (Icons as unknown as Record<string, LucideIcon>)[benefit.icon || 'Circle'];
            
            return (
              <div
                key={benefit.id}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-accent-primary/10 group-hover:bg-accent-primary/20 transition-all duration-300 group-hover:scale-110">
                  {IconComponent && (
                    <IconComponent className="w-8 h-8 text-accent-primary" />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-text-primary">
                  {benefit.title}
                </h3>
                <p className="leading-relaxed text-text-secondary">
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
