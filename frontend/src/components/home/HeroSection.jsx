import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Sparkles, Terminal } from 'lucide-react';
import { Button } from '../common/Button';
import { clubInfo } from '../../data/mockData';

export const HeroSection = () => {
  return (
    <section style={{
      position: 'relative',
      padding: '4rem 0 5rem 0',
      overflow: 'hidden',
      isolation: 'isolate'
    }}>
      <div
  aria-hidden="true"
  style={{
    position: 'absolute',
    width: '850px',
    height: '550px',
    left: '50%',
    top: '80px',
    transform: 'translateX(-50%)',
    background:
      'radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, rgba(6, 182, 212, 0.05) 35%, transparent 70%)',
    filter: 'blur(20px)',
    pointerEvents: 'none',
    zIndex: 0,
  }}
/>
      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
        {/* Top Announcement Pill */}
        <div
  style={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 14px',
    borderRadius: '999px',
    border: '1px solid rgba(59, 130, 246, 0.3)',
    background: 'rgba(59, 130, 246, 0.06)',
    color: 'var(--text-secondary)',
    fontSize: '0.8rem',
    fontWeight: 500,
    letterSpacing: '0.02em',
    marginBottom: '28px',
    backdropFilter: 'blur(8px)',
  }}
>
  <Sparkles size={14} />
  <span>Official Web Dev Club • CSE, FTE, MSU Baroda</span>
</div>

        {/* Main Heading */}
        <h1
  style={{
    fontSize: 'clamp(2.35rem, 4.5vw, 3.9rem)',
    fontWeight: 800,
    lineHeight: 1.08,
    letterSpacing: '-0.035em',
    margin: '0 auto',
    maxWidth: '1200px',
  }}
>
  Where Ideas Turn Into{' '}
  <span
    className="gradient-text"
    style={{
      filter: 'drop-shadow(0 0 18px rgba(37, 150, 255, 0.18))',
    }}
  >
    Innovation.
  </span>
</h1>

        {/* Description */}
        <p
  style={{
    fontSize: '1.1rem',
    color: 'var(--text-secondary)',
    maxWidth: '680px',
    margin: '0 auto 2.5rem auto',
    lineHeight: 1.7,
    letterSpacing: '0.01em',
  }}
>
  {clubInfo.heroDescription}
</p>

        {/* Call to Actions */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '14px',
          flexWrap: 'wrap'
        }}>
          <Link
    to="/events"
    style={{
      textDecoration: 'none',
    }}
  >
    <div className="hero-primary-button">
      <span>Explore Events</span>
      <ArrowRight size={18} />
    </div>
  </Link>

  <Link
    to="/contact"
    style={{
      textDecoration: 'none',
    }}
  >
    <div className="hero-secondary-button">
      <span>Join Dev Infinity</span>
    </div>
  </Link>
        </div>

        <div
  className="hero-code-window"
  style={{
    marginTop: '4rem',
    maxWidth: '780px',
    marginInline: 'auto',
    background: 'rgba(13, 18, 30, 0.88)',
    border: '1px solid rgba(96, 165, 250, 0.16)',
    borderRadius: '16px',
    textAlign: 'left',
    boxShadow:
      '0 20px 60px rgba(0, 0, 0, 0.28), 0 0 40px rgba(37, 99, 235, 0.07)',
    overflow: 'hidden',
    backdropFilter: 'blur(12px)',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
  }}
>
          <div
  style={{
    padding: '0.8rem 1rem',
    background: 'rgba(8, 12, 22, 0.9)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  }}
>
            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ef4444' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#f59e0b' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#10b981' }} />
            <span
  style={{
    fontSize: '0.7rem',
    fontFamily: 'var(--font-mono)',
    color: 'var(--text-muted)',
    marginLeft: '0.5rem',
    letterSpacing: '0.02em',
  }}
>
              dev-infinity://cse-msu/init.js
            </span>
          </div>
          <pre
  style={{
    padding: '1.4rem 1.5rem',
    margin: 0,
    fontFamily: 'var(--font-mono)',
    fontSize: '0.82rem',
    color: 'var(--text-main)',
    overflowX: 'auto',
    lineHeight: 1.8,
  }}
>
<code>
  <span style={{ color: 'var(--accent)' }}>const</span>{' '}
  <span style={{ color: 'var(--secondary)' }}>DevInfinity</span> = {'{'}
  {'\n  '}
  club:{' '}
  <span style={{ color: '#10b981' }}>"{clubInfo.name}"</span>,
  {'\n  '}
  department:{' '}
  <span style={{ color: '#10b981' }}>"CSE, FTE, MSU Baroda"</span>,
  {'\n  '}
  motto:{' '}
  <span style={{ color: '#10b981' }}>"{clubInfo.tagline}"</span>,
  {'\n  '}
  stack: [
  <span style={{ color: '#10b981' }}>"React"</span>,{' '}
  <span style={{ color: '#10b981' }}>"Node.js"</span>,{' '}
  <span style={{ color: '#10b981' }}>"Express"</span>,{' '}
  <span style={{ color: '#10b981' }}>"Supabase"</span>
  ],
  {'\n  '}
  mission: () =&gt;{' '}
  <span style={{ color: 'var(--primary)' }}>
    "Empowering students to build world-class web applications."
  </span>
  {'\n'}
  {'}'};
</code>
          </pre>
        </div>
      </div>
      <style>{`
  .hero-primary-button,
  .hero-secondary-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    min-height: 48px;
    padding: 0 22px;
    border-radius: 12px;
    font-size: 0.95rem;
    font-weight: 600;
    letter-spacing: 0.01em;
    cursor: pointer;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease,
      border-color 0.2s ease,
      background 0.2s ease;
  }

  .hero-code-window:hover {
  transform: translateY(-3px);
  box-shadow:
    0 24px 65px rgba(0, 0, 0, 0.32),
    0 0 45px rgba(37, 99, 235, 0.1);
}

  .hero-primary-button {
    color: white;
    background: linear-gradient(135deg, #2563eb, #06b6d4);
    box-shadow: 0 8px 28px rgba(37, 99, 235, 0.22);
  }

  .hero-primary-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(37, 99, 235, 0.32);
  }

  .hero-primary-button svg {
    transition: transform 0.2s ease;
  }

  .hero-primary-button:hover svg {
    transform: translateX(4px);
  }

  .hero-secondary-button {
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.14);
  }

  .hero-secondary-button:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(59, 130, 246, 0.4);
  }

  @media (max-width: 480px) {
    .hero-primary-button,
    .hero-secondary-button {
      width: 100%;
    }
  }
`}</style>
    </section>
  );
};
