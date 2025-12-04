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
      <section style={{ width: '100%', padding: '6rem 1.5rem', background: '#0A1929' }}>
        <div style={{ width: '100%', maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', color: '#94A3B8' }}>Loading benefits...</div>
        </div>
      </section>
    );
  }

  return (
    <section style={{ width: '100%', padding: '6rem 1.5rem', background: '#0A1929' }}>
      <div style={{ width: '100%', maxWidth: '80rem', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(2.25rem, 5vw, 3rem)', fontWeight: 700, marginBottom: '1rem', color: '#F9FAFB' }}>
            What You Get
          </h2>
          <p style={{ fontSize: '1.25rem', maxWidth: '48rem', margin: '0 auto', color: '#94A3B8' }}>
            Resources and support to accelerate your robotics research
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
          {benefits.map((benefit) => {
            const IconComponent = (Icons as unknown as Record<string, LucideIcon>)[benefit.icon || 'Circle'];
            
            return (
              <div
                key={benefit.id}
                style={{ textAlign: 'center' }}
              >
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '4rem', height: '4rem', marginBottom: '1.5rem', borderRadius: '9999px', background: 'rgba(59, 130, 246, 0.1)', transition: 'transform 0.3s' }}>
                  {IconComponent && (
                    <IconComponent style={{ width: '2rem', height: '2rem', color: '#3B82F6' }} />
                  )}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem', color: '#F9FAFB' }}>
                  {benefit.title}
                </h3>
                <p style={{ lineHeight: '1.6', color: '#94A3B8' }}>
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
