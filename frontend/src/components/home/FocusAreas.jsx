import React from 'react';
import { Layout, Server, Layers, Palette, Database, Cloud } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { Badge } from '../common/Badge';
import { focusAreas } from '../../data/mockData';

const iconMap = {
  Layout: Layout,
  Server: Server,
  Layers: Layers,
  Palette: Palette,
  Database: Database,
  Cloud: Cloud
};

export const FocusAreas = () => {
  return (
    <section style={{ padding: '4rem 0' }}>
      <div className="container">
        <SectionTitle
          subtitle="Specializations"
          title="What We"
          gradientText="Build"
          description="Dev Infinity focuses exclusively on modern web technology stacks and modern software engineering practices."
          centered
        />

        <div className="grid-3">
          {focusAreas.map((area) => {
            const Icon = iconMap[area.icon] || Layout;
            return (
              <div key={area.id} className="card card-hover" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{
                  width: '2.75rem',
                  height: '2.75rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(59, 130, 246, 0.12)',
                  border: '1px solid rgba(59, 130, 246, 0.25)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}>
                  <Icon size={22} />
                </div>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.625rem', color: 'var(--text-contrast)' }}>
                  {area.title}
                </h3>

                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', flex: 1 }}>
                  {area.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                  {area.tags.map((tag, idx) => (
                    <Badge key={idx} variant="primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
