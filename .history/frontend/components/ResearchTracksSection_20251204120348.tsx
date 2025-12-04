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
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-text-secondary">Loading research tracks...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6" style={{ background: 'var(--background-secondary)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Research Playground
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Eight focus areas where we're pushing the boundaries of what's possible in robotics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tracks.map((track) => {
            const IconComponent = (Icons as Record<string, LucideIcon>)[track.icon || 'Circle'];
            
            return (
              <div
                key={track.id}
                className="group relative rounded-lg p-6 transition-all duration-300"
                style={{
                  background: 'var(--background-primary)',
                  border: '1px solid var(--border-primary)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(59, 130, 246, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-primary)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="mb-4">
                  <div 
                    className="inline-flex p-3 rounded-lg mb-4 transition-colors"
                    style={{ background: 'rgba(59, 130, 246, 0.1)' }}
                  >
                    {IconComponent && (
                      <IconComponent className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    {track.name}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {track.shortDescription}
                </p>
                {track.status === 'coming-soon' && (
                  <span 
                    className="inline-block mt-4 text-xs px-3 py-1 rounded-full"
                    style={{
                      background: 'rgba(251, 146, 60, 0.2)',
                      color: 'var(--accent-secondary)',
                    }}
                  >
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
