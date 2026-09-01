import React from 'react';
import { Users, Calendar, Code2, Trophy } from 'lucide-react';
import { quickStats } from '../../data/mockData';

const iconMap = {
  Users: Users,
  Calendar: Calendar,
  Code2: Code2,
  Trophy: Trophy
};

export const StatsSection = () => {
  return (
    <section style={{ padding: '2rem 0 4rem 0' }}>
      <div className="container">
        <div className="grid-4">
          {quickStats.map((stat, idx) => {
            const Icon = iconMap[stat.icon] || Code2;

            return (
              <div
                key={idx}
                className="card stats-card"
                style={{
                  textAlign: 'center',
                  padding: '2rem 1.5rem',
                  background: 'var(--bg-glass-card)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(96, 165, 250, 0.12)',
                  transition:
                    'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease'
                }}
              >
                <div
                  className="stats-icon"
                  style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(59, 130, 246, 0.12)',
                    border: '1px solid rgba(59, 130, 246, 0.25)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem auto',
                    transition:
                      'transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease'
                  }}
                >
                  <Icon size={24} />
                </div>

                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: 'var(--text-contrast)',
                    lineHeight: 1
                  }}
                >
                  {stat.value}
                </div>

                <div
                  style={{
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    marginTop: '0.5rem',
                    fontWeight: 500
                  }}
                >
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        <style>{`
          .stats-card {
            position: relative;
            overflow: hidden;
          }

          .stats-card:hover {
            transform: translateY(-5px);
            border-color: rgba(59, 130, 246, 0.55) !important;
            background: rgba(20, 30, 50, 0.72) !important;
            box-shadow:
              0 12px 35px rgba(0, 0, 0, 0.25),
              0 0 30px rgba(37, 99, 235, 0.16),
              inset 0 0 25px rgba(37, 99, 235, 0.04);
          }

          .stats-card:hover .stats-icon {
            background: rgba(59, 130, 246, 0.2) !important;
            border-color: rgba(59, 130, 246, 0.5) !important;
            box-shadow: 0 0 20px rgba(37, 99, 235, 0.2);
            transform: translateY(-2px);
          }
        `}</style>
      </div>
    </section>
  );
};