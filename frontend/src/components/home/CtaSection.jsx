import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';

export const CtaSection = () => {
  return (
    <section
      style={{
        padding: '5rem 0 6rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <div
          className="cta-main-card"
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(59, 130, 246, 0.32)',
            background:
              'linear-gradient(135deg, rgba(15, 23, 42, 0.96) 0%, rgba(8, 18, 35, 0.98) 50%, rgba(8, 24, 32, 0.96) 100%)',
            padding: '5rem 2rem',
            textAlign: 'center',
            boxShadow:
              '0 25px 70px rgba(0, 0, 0, 0.35), 0 0 60px rgba(37, 99, 235, 0.08)',
            transition:
              'border-color 0.3s ease, box-shadow 0.3s ease'
          }}
        >
          {/* Decorative grid */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.18,
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.12) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.12) 1px, transparent 1px)
              `,
              backgroundSize: '42px 42px',
              maskImage:
                'linear-gradient(to bottom, black, transparent 80%)',
              pointerEvents: 'none'
            }}
          />

          {/* Left glow */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              width: '420px',
              height: '420px',
              borderRadius: '50%',
              left: '-180px',
              top: '-180px',
              background:
                'radial-gradient(circle, rgba(59, 130, 246, 0.2), transparent 70%)',
              filter: 'blur(20px)',
              pointerEvents: 'none'
            }}
          />

          {/* Right glow */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              width: '380px',
              height: '380px',
              borderRadius: '50%',
              right: '-160px',
              bottom: '-180px',
              background:
                'radial-gradient(circle, rgba(6, 182, 212, 0.16), transparent 70%)',
              filter: 'blur(20px)',
              pointerEvents: 'none'
            }}
          />

          {/* Decorative code brackets */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '6%',
              top: '22%',
              fontFamily: 'var(--font-mono)',
              fontSize: '5rem',
              fontWeight: 300,
              color: 'rgba(59, 130, 246, 0.08)',
              lineHeight: 1,
              userSelect: 'none'
            }}
          >
            {'{'}
          </div>

          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              right: '6%',
              bottom: '18%',
              fontFamily: 'var(--font-mono)',
              fontSize: '5rem',
              fontWeight: 300,
              color: 'rgba(6, 182, 212, 0.08)',
              lineHeight: 1,
              userSelect: 'none'
            }}
          >
            {'}'}
          </div>

          {/* Main content */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              maxWidth: '760px',
              margin: '0 auto'
            }}
          >
            {/* Badge */}
            <div
              className="cta-badge"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.45rem 0.9rem',
                borderRadius: 'var(--radius-full)',
                background:
                  'rgba(59, 130, 246, 0.08)',
                border:
                  '1px solid rgba(59, 130, 246, 0.22)',
                color: 'var(--text-contrast)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                marginBottom: '1.5rem',
                boxShadow:
                  '0 0 20px rgba(59, 130, 246, 0.06)'
              }}
            >
              <Sparkles
                size={14}
                style={{ color: 'var(--secondary)' }}
              />

              <span>READY TO BUILD THE FUTURE?</span>
            </div>

            {/* Heading */}
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: '-0.04em',
                marginBottom: '1.25rem',
                color: '#ffffff'
              }}
            >
              Build Something{' '}
              <span
                className="gradient-text"
                style={{
                  filter:
                    'drop-shadow(0 0 20px rgba(37, 150, 255, 0.18))'
                }}
              >
                Extraordinary.
              </span>
            </h2>

            {/* Description */}
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                maxWidth: '650px',
                margin: '0 auto 2.5rem',
                lineHeight: 1.75
              }}
            >
              Whether you are a beginner exploring HTML/CSS or an advanced
              developer mastering React & Node.js, Dev Infinity welcomes all
              students from FTE MSU Baroda.
            </p>

            {/* Buttons */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '0.85rem',
                flexWrap: 'wrap'
              }}
            >
              <Link
                to="/contact"
                className="cta-primary-link"
                style={{
                  textDecoration: 'none'
                }}
              >
                <Button size="lg" variant="primary">
                  <span>Get In Touch</span>
                  <ArrowRight size={18} />
                </Button>
              </Link>

              <Link
                to="/learning"
                className="cta-secondary-link"
                style={{
                  textDecoration: 'none'
                }}
              >
                <Button size="lg" variant="secondary">
                  <Code2 size={17} />
                  <span>Explore Learning Hub</span>
                </Button>
              </Link>
            </div>

            {/* Small bottom message */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                marginTop: '2rem',
                color: 'var(--text-muted)',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)'
                }}
              />
              <span>Open for new builders</span>
            </div>
          </div>

          {/* Component-scoped hover styles */}
          <style>{`
            .cta-main-card:hover {
              border-color: rgba(59, 130, 246, 0.48) !important;
              box-shadow:
                0 28px 80px rgba(0, 0, 0, 0.4),
                0 0 70px rgba(37, 99, 235, 0.11) !important;
            }

            .cta-primary-link,
            .cta-secondary-link {
              transition: transform 0.2s ease;
            }

            .cta-primary-link:hover,
            .cta-secondary-link:hover {
              transform: translateY(-2px);
            }

            .cta-badge {
              transition:
                background 0.2s ease,
                border-color 0.2s ease,
                box-shadow 0.2s ease;
            }

            .cta-main-card:hover .cta-badge {
              background: rgba(59, 130, 246, 0.11);
              border-color: rgba(59, 130, 246, 0.3);
              box-shadow: 0 0 24px rgba(59, 130, 246, 0.08);
            }

            @media (max-width: 600px) {
              .cta-main-card {
                padding: 3.5rem 1.25rem !important;
              }

              .cta-main-card > div[aria-hidden="true"] {
                display: none;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};