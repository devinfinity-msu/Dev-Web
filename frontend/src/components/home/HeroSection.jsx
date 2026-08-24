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
      overflow: 'hidden'
    }}>
      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
        {/* Top Announcement Pill */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.625rem',
          padding: '0.4rem 1rem',
          borderRadius: 'var(--radius-full)',
          background: 'rgba(59, 130, 246, 0.1)',
          border: '1px solid rgba(59, 130, 246, 0.25)',
          marginBottom: '1.75rem',
          fontSize: '0.875rem',
          fontWeight: 600,
          color: 'var(--primary)'
        }}>
          <Sparkles size={16} />
          <span>Official Web Dev Club • CSE, FTE, MSU Baroda</span>
        </div>

        {/* Main Heading */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          marginBottom: '1.25rem',
          maxWidth: '900px',
          marginInline: 'auto'
        }}>
          Where Ideas Turn Into <span className="gradient-text">Innovation.</span>
        </h1>

        {/* Description */}
        <p style={{
          fontSize: '1.25rem',
          color: 'var(--text-secondary)',
          maxWidth: '720px',
          margin: '0 auto 2.5rem auto',
          lineHeight: 1.6
        }}>
          {clubInfo.heroDescription}
        </p>

        {/* Call to Actions */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          <Link to="/events">
            <Button size="lg" variant="primary">
              <span>Explore Events</span>
              <ArrowRight size={18} />
            </Button>
          </Link>

          <Link to="/contact">
            <Button size="lg" variant="secondary">
              <span>Join Dev Infinity</span>
            </Button>
          </Link>
        </div>

        {/* Interactive Code Snippet Mock Visual */}
        <div style={{
          marginTop: '4rem',
          maxWidth: '780px',
          marginInline: 'auto',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-md)',
          textAlign: 'left',
          boxShadow: 'var(--shadow-lg), 0 0 30px rgba(59, 130, 246, 0.08)',
          overflow: 'hidden'
        }}>
          <div style={{
            padding: '0.75rem 1rem',
            background: '#090d16',
            borderBottom: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ef4444' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#f59e0b' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#10b981' }} />
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginLeft: '0.5rem' }}>
              dev-infinity://cse-msu/init.js
            </span>
          </div>
          <pre style={{
            padding: '1.25rem 1.5rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.875rem',
            color: 'var(--text-main)',
            overflowX: 'auto',
            lineHeight: 1.7
          }}>
<code><span style={{ color: 'var(--accent)' }}>const</span> <span style={{ color: 'var(--secondary)' }}>DevInfinity</span> = &#123;
  club: <span style={{ color: '#10b981' }}>"{clubInfo.name}"</span>,
  department: <span style={{ color: '#10b981' }}>"CSE, FTE, MSU Baroda"</span>,
  motto: <span style={{ color: '#10b981' }}>"{clubInfo.tagline}"</span>,
  stack: [<span style={{ color: '#10b981' }}>"React"</span>, <span style={{ color: '#10b981' }}>"Node.js"</span>, <span style={{ color: '#10b981' }}>"Express"</span>, <span style={{ color: '#10b981' }}>"Supabase"</span>],
  mission: () =&gt; <span style={{ color: 'var(--primary)' }}>"Empowering students to build world-class web applications."</span>
&#125;;</code>
          </pre>
        </div>
      </div>
    </section>
  );
};
