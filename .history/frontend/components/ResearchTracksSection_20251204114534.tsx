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
    <section className="py-24 px-6 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Research Playground
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Eight focus areas where we're pushing the boundaries of what's possible in robotics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tracks.map((track) => {
            const IconComponent = (Icons as Record<string, LucideIcon>)[track.icon || 'Circle'];
            
            return (
              <div
                key={track.id}
                className="group relative bg-background-primary border border-border-primary rounded-lg p-6 hover:border-accent-primary transition-all duration-300 hover:shadow-lg hover:shadow-accent-primary/10"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-accent-primary/10 rounded-lg group-hover:bg-accent-primary/20 transition-colors">
                    {IconComponent && (
                      <IconComponent className="w-6 h-6 text-accent-primary" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      {track.name}
                    </h3>
                  </div>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {track.shortDescription}
                </p>
                {track.status === 'coming-soon' && (
                  <span className="inline-block mt-4 text-xs px-3 py-1 bg-accent-secondary/20 text-accent-secondary rounded-full">
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
