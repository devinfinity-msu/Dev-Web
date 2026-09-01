import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Target, ArrowRight } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { Button } from '../common/Button';
import { clubInfo } from '../../data/mockData';

export const AboutPreview = () => {
  return (
    <section
      className="about-preview-section"
      style={{
        padding: '4rem 0',
        borderTop: '1px solid var(--border-color)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '600px',
          height: '400px',
          left: '-250px',
          top: '100px',
          background:
            'radial-gradient(circle, rgba(37, 99, 235, 0.07) 0%, transparent 70%)',
          filter: 'blur(30px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* LEFT CONTENT */}
          <div>
            <SectionTitle
              subtitle="About Dev Infinity"
              title="Driven by Passion for"
              gradientText="Web Development."
              description="Dev Infinity is the official student web dev community operating under the Department of Computer Science & Engineering, Faculty of Technology and Engineering, The M. S. University of Baroda."
            />

            {/* Feature Cards */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                marginBottom: '2rem',
              }}
            >
              {/* Institutional Excellence */}
              <div className="about-feature-card">
                <div className="about-feature-icon about-feature-icon-cyan">
                  <GraduationCap size={20} />
                </div>

                <div style={{ flex: 1 }}>
                  <h4 className="about-feature-title">
                    Institutional Excellence (MSU Baroda)
                  </h4>

                  <p className="about-feature-description">
                    Fostering technical talent, peer mentoring, and hands-on
                    software development culture within FTE Kalabhavan campus.
                  </p>
                </div>
              </div>

              {/* Core Mission */}
              <div className="about-feature-card">
                <div className="about-feature-icon about-feature-icon-purple">
                  <Target size={20} />
                </div>

                <div style={{ flex: 1 }}>
                  <h4 className="about-feature-title">
                    Our Core Mission
                  </h4>

                  <p className="about-feature-description">
                    To bridge the gap between academic theory and real-world
                    web production through hackathons, workshops, and open-source
                    contributions.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link
              to="/team"
              className="about-team-link"
              style={{ display: 'inline-block', textDecoration: 'none' }}
            >
              <Button variant="secondary">
                <span>Meet Our Team</span>
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>

          {/* RIGHT CARD */}
          <div
            className="about-join-card"
            style={{
              padding: '2.5rem',
              background: 'var(--gradient-card)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            {/* Small decorative glow */}
            <div
              aria-hidden="true"
              className="about-card-glow"
            />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="about-join-label">
                WHY DEV INFINITY?
              </div>

              <h3
                style={{
                  fontSize: '1.5rem',
                  marginBottom: '1.5rem',
                  color: 'var(--text-contrast)',
                  letterSpacing: '-0.02em',
                }}
              >
                Why Join Dev Infinity?
              </h3>

              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  fontSize: '0.9375rem',
                  margin: 0,
                  padding: 0,
                }}
              >
                <li className="about-benefit-item">
                  <span className="about-check">✓</span>
                  <span>
                    Learn React, Node.js, Express & Database architecture
                  </span>
                </li>

                <li className="about-benefit-item">
                  <span className="about-check">✓</span>
                  <span>
                    Collaborate on real university and open-source projects
                  </span>
                </li>

                <li className="about-benefit-item">
                  <span className="about-check">✓</span>
                  <span>
                    Participate in exclusive hackathons & coding bootcamps
                  </span>
                </li>

                <li className="about-benefit-item">
                  <span className="about-check">✓</span>
                  <span>
                    Earn certificates & showcase portfolio to top tech
                    recruiters
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Component-scoped styles */}
        <style>{`
          /* LEFT FEATURE CARDS */

          .about-feature-card {
            display: flex;
            gap: 1rem;
            align-items: flex-start;
            padding: 1rem;
            border-radius: 14px;
            border: 1px solid transparent;
            background: transparent;
            transition:
              transform 0.25s ease,
              background 0.25s ease,
              border-color 0.25s ease,
              box-shadow 0.25s ease;
          }

          .about-feature-card:hover {
            transform: translateY(-3px);
            background: rgba(255, 255, 255, 0.025);
            border-color: rgba(59, 130, 246, 0.22);
            box-shadow:
              0 10px 30px rgba(0, 0, 0, 0.16),
              0 0 24px rgba(37, 99, 235, 0.06);
          }

          .about-feature-icon {
            flex-shrink: 0;
            width: 44px;
            height: 44px;
            padding: 0;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition:
              transform 0.25s ease,
              box-shadow 0.25s ease,
              background 0.25s ease;
          }

          .about-feature-card:hover .about-feature-icon {
            transform: translateY(-2px);
          }

          .about-feature-icon-cyan {
            background: rgba(6, 182, 212, 0.12);
            color: var(--secondary);
            border: 1px solid rgba(6, 182, 212, 0.28);
          }

          .about-feature-icon-purple {
            background: rgba(139, 92, 246, 0.12);
            color: var(--accent);
            border: 1px solid rgba(139, 92, 246, 0.28);
          }

          .about-feature-card:hover .about-feature-icon-cyan {
            background: rgba(6, 182, 212, 0.18);
            box-shadow: 0 0 20px rgba(6, 182, 212, 0.15);
          }

          .about-feature-card:hover .about-feature-icon-purple {
            background: rgba(139, 92, 246, 0.18);
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.15);
          }

          .about-feature-title {
            font-size: 1.0625rem;
            color: var(--text-contrast);
            margin: 0 0 0.3rem 0;
            transition: color 0.2s ease;
          }

          .about-feature-card:hover .about-feature-title {
            color: #ffffff;
          }

          .about-feature-description {
            font-size: 0.9375rem;
            color: var(--text-secondary);
            margin: 0;
            line-height: 1.6;
          }


          /* RIGHT JOIN CARD */

          .about-join-card {
            position: relative;
            overflow: hidden;
            border-radius: 16px;
            transition:
              transform 0.25s ease,
              border-color 0.25s ease,
              box-shadow 0.25s ease;
          }

          .about-join-card:hover {
            transform: translateY(-4px);
            border-color: rgba(59, 130, 246, 0.3) !important;
            box-shadow:
              0 18px 45px rgba(0, 0, 0, 0.25),
              0 0 35px rgba(37, 99, 235, 0.08) !important;
          }

          .about-card-glow {
            position: absolute;
            width: 260px;
            height: 220px;
            top: -130px;
            right: -80px;
            background: radial-gradient(
              circle,
              rgba(37, 99, 235, 0.14) 0%,
              transparent 70%
            );
            filter: blur(12px);
            pointer-events: none;
          }

          .about-join-label {
            display: inline-flex;
            align-items: center;
            padding: 5px 10px;
            margin-bottom: 0.75rem;
            border-radius: 999px;
            border: 1px solid rgba(59, 130, 246, 0.2);
            background: rgba(59, 130, 246, 0.06);
            color: var(--primary);
            font-size: 0.68rem;
            font-weight: 700;
            letter-spacing: 0.1em;
          }


          /* BENEFITS */

          .about-benefit-item {
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
            color: var(--text-secondary);
            line-height: 1.5;
            transition:
              transform 0.2s ease,
              color 0.2s ease;
          }

          .about-benefit-item:hover {
            transform: translateX(4px);
            color: var(--text-contrast);
          }

          .about-check {
            flex-shrink: 0;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 1px;
            border-radius: 50%;
            background: rgba(37, 99, 235, 0.1);
            color: var(--primary);
            font-size: 0.85rem;
            font-weight: 800;
            transition:
              background 0.2s ease,
              box-shadow 0.2s ease;
          }

          .about-benefit-item:hover .about-check {
            background: rgba(37, 99, 235, 0.18);
            box-shadow: 0 0 14px rgba(37, 99, 235, 0.16);
          }


          /* TEAM BUTTON */

          .about-team-link {
            transition: transform 0.2s ease;
          }

          .about-team-link:hover {
            transform: translateY(-2px);
          }


          /* MOBILE */

          @media (max-width: 600px) {
            .about-feature-card {
              padding: 0.9rem;
            }

            .about-join-card {
              padding: 1.75rem !important;
            }

            .about-benefit-item {
              font-size: 0.9rem;
            }
          }
        `}</style>
      </div>
    </section>
  );
};