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
          {focusAreas.map((area, index) => {
            const Icon = iconMap[area.icon] || Layout;

            return (
              <div
                key={area.id}
                className="card card-hover"
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  background:
                    'linear-gradient(145deg, rgba(15, 23, 42, 0.92), rgba(9, 13, 22, 0.96))',
                  border: '1px solid var(--border-color)',
                  transition:
                    'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-7px)';
                  e.currentTarget.style.borderColor =
                    'rgba(59, 130, 246, 0.55)';
                  e.currentTarget.style.boxShadow =
                    '0 16px 40px rgba(0, 0, 0, 0.35), 0 0 28px rgba(59, 130, 246, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor =
                    'var(--border-color)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
              >
                {/* Subtle background glow */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-80px',
                    right: '-80px',
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%',
                    background:
                      'radial-gradient(circle, rgba(59, 130, 246, 0.13), transparent 70%)',
                    pointerEvents: 'none'
                  }}
                />

                {/* Card number */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    right: '1.25rem',
                    fontSize: '0.7rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                    color: 'rgba(148, 163, 184, 0.45)',
                    letterSpacing: '0.08em'
                  }}
                >
                  0{index + 1}
                </div>

                {/* Icon */}
                <div
                  style={{
                    position: 'relative',
                    width: '2.9rem',
                    height: '2.9rem',
                    borderRadius: 'var(--radius-sm)',
                    background:
                      'linear-gradient(135deg, rgba(59, 130, 246, 0.16), rgba(59, 130, 246, 0.05))',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.35rem',
                    transition:
                      'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      'translateY(-2px) scale(1.05)';
                    e.currentTarget.style.background =
                      'rgba(59, 130, 246, 0.2)';
                    e.currentTarget.style.boxShadow =
                      '0 0 20px rgba(59, 130, 246, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      'translateY(0) scale(1)';
                    e.currentTarget.style.background =
                      'linear-gradient(135deg, rgba(59, 130, 246, 0.16), rgba(59, 130, 246, 0.05))';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3
                  style={{
                    position: 'relative',
                    fontSize: '1.25rem',
                    marginBottom: '0.625rem',
                    color: 'var(--text-contrast)',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {area.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    position: 'relative',
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '1.4rem',
                    flex: 1,
                    lineHeight: 1.7
                  }}
                >
                  {area.description}
                </p>

                {/* Technology badges */}
                <div
                  style={{
                    position: 'relative',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.4rem'
                  }}
                >
                  {area.tags.map((tag, idx) => (
                    <div
                      key={idx}
                      style={{
                        transition:
                          'transform 0.2s ease, filter 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform =
                          'translateY(-2px)';
                        e.currentTarget.style.filter =
                          'brightness(1.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform =
                          'translateY(0)';
                        e.currentTarget.style.filter =
                          'brightness(1)';
                      }}
                    >
                      <Badge variant="primary">
                        {tag}
                      </Badge>
                    </div>
                  ))}
                </div>

                {/* Bottom accent line */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '10%',
                    width: '80%',
                    height: '1px',
                    background:
                      'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.45), transparent)',
                    opacity: 0.7
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};