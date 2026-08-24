import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Target, Users2, ArrowRight } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { Button } from '../common/Button';
import { clubInfo } from '../../data/mockData';

export const AboutPreview = () => {
  return (
    <section style={{ padding: '4rem 0', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'center'
        }}>
          <div>
            <SectionTitle
              subtitle="About Dev Infinity"
              title="Driven by Passion for"
              gradientText="Web Development."
              description="Dev Infinity is the official student web dev community operating under the Department of Computer Science & Engineering, Faculty of Technology and Engineering, The M. S. University of Baroda."
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  padding: '0.625rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(6, 182, 212, 0.15)',
                  color: 'var(--secondary)',
                  border: '1px solid rgba(6, 182, 212, 0.3)'
                }}>
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.0625rem', color: 'var(--text-contrast)', marginBottom: '0.25rem' }}>
                    Institutional Excellence (MSU Baroda)
                  </h4>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                    Fostering technical talent, peer mentoring, and hands-on software development culture within FTE Kalabhavan campus.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  padding: '0.625rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(139, 92, 246, 0.15)',
                  color: 'var(--accent)',
                  border: '1px solid rgba(139, 92, 246, 0.3)'
                }}>
                  <Target size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.0625rem', color: 'var(--text-contrast)', marginBottom: '0.25rem' }}>
                    Our Core Mission
                  </h4>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                    To bridge the gap between academic theory and real-world web production through hackathons, workshops, and open-source contributions.
                  </p>
                </div>
              </div>
            </div>

            <Link to="/team">
              <Button variant="secondary">
                <span>Meet Our Team</span>
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>

          {/* Right Card Illustration */}
          <div className="card" style={{
            padding: '2.5rem',
            background: 'var(--gradient-card)',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-md)'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-contrast)' }}>
              Why Join Dev Infinity?
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9375rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: 'var(--primary)', fontWeight: 800 }}>✓</span>
                Learn React, Node.js, Express & Database architecture
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: 'var(--primary)', fontWeight: 800 }}>✓</span>
                Collaborate on real university and open-source projects
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: 'var(--primary)', fontWeight: 800 }}>✓</span>
                Participate in exclusive hackathons & coding bootcamps
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: 'var(--primary)', fontWeight: 800 }}>✓</span>
                Earn certificates & showcase portfolio to top tech recruiters
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
