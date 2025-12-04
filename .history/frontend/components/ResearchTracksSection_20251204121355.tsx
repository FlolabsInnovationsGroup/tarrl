'use client';

import { useEffect, useState } from 'react';
import { getResearchTracks, type ResearchTrack } from '@/lib/strapi';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export default function ResearchTracksSection() {
  const [tracks, setTracks] = useState<ResearchTrack[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTracks() {
      try {
        const data = await getResearchTracks();
        setTracks(data);
      } catch (error) {
        console.error('Failed to fetch research tracks:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchTracks();
  }, []);

  if (loading) {
    return (
      <section style={{ width: '100%', padding: '6rem 1.5rem', background: '#1E293B' }}>
        <div style={{ width: '100%', maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', color: '#94A3B8' }}>Loading research tracks...</div>
        </div>
      </section>
    );
  }

  return (
    <section style={{ width: '100%', padding: '6rem 1.5rem', background: '#1E293B' }}>
      <div style={{ width: '100%', maxWidth: '80rem', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(2.25rem, 5vw, 3rem)', fontWeight: 700, marginBottom: '1rem', color: '#F9FAFB' }}>
            Research Playground
          </h2>
          <p style={{ fontSize: '1.25rem', maxWidth: '48rem', margin: '0 auto', color: '#94A3B8' }}>
            Eight focus areas where we&apos;re pushing the boundaries of what&apos;s possible in robotics
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {tracks.map((track) => {
            const IconComponent = (Icons as unknown as Record<string, LucideIcon>)[track.icon || 'Circle'];
            
            return (
              <div
                key={track.id}
                style={{
                  position: 'relative',
                  borderRadius: '0.5rem',
                  padding: '1.5rem',
                  background: '#0A1929',
                  border: '1px solid #334155',
                  transition: 'all 0.3s'
                }}
              >
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'inline-flex', padding: '0.75rem', borderRadius: '0.5rem', marginBottom: '1rem', background: 'rgba(59, 130, 246, 0.1)' }}>
                    {IconComponent && (
                      <IconComponent style={{ width: '1.5rem', height: '1.5rem', color: '#3B82F6' }} />
                    )}
                  </div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem', color: '#F9FAFB' }}>
                    {track.name}
                  </h3>
                </div>
                <p style={{ fontSize: '0.875rem', lineHeight: '1.6', color: '#94A3B8' }}>
                  {track.shortDescription}
                </p>
                {track.status === 'coming-soon' && (
                  <span style={{ display: 'inline-block', marginTop: '1rem', fontSize: '0.75rem', padding: '0.25rem 0.75rem', borderRadius: '9999px', background: 'rgba(245, 158, 11, 0.2)', color: '#8B5CF6' }}>
                    Coming Soon
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

