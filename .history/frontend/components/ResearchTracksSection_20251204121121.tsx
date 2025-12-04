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
      <section className="w-full py-24 px-6 bg-background-secondary">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center text-text-secondary">Loading research tracks...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-24 px-6 bg-background-secondary">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-text-primary">
            Research Playground
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-text-secondary">
            Eight focus areas where we&apos;re pushing the boundaries of what&apos;s possible in robotics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tracks.map((track) => {
            const IconComponent = (Icons as unknown as Record<string, LucideIcon>)[track.icon || 'Circle'];
            
            return (
              <div
                key={track.id}
                className="group relative rounded-lg p-6 bg-background-primary border border-background-tertiary hover:border-accent-primary transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.2)]"
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-lg mb-4 bg-accent-primary/10">
                    {IconComponent && (
                      <IconComponent className="w-6 h-6 text-accent-primary" />
                    )}
                  </div>
                  <h3 className="text-lg font-heading font-semibold mb-2 text-text-primary">
                    {track.name}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {track.shortDescription}
                </p>
                {track.status === 'coming-soon' && (
                  <span className="inline-block mt-4 text-xs px-3 py-1 rounded-full bg-warning/20 text-accent-secondary">
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

