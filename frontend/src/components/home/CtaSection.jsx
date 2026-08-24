import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';

export const CtaSection = () => {
  return (
    <section style={{ padding: '5rem 0' }}>
      <div className="container">
        <div style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(6, 182, 212, 0.1) 100%)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          borderRadius: 'var(--radius-lg)',
          padding: '4rem 2rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-glow)'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 0.875rem',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(255, 255, 255, 0.08)',
            color: 'var(--text-contrast)',
            fontSize: '0.8125rem',
            fontWeight: 700,
            marginBottom: '1.5rem'
          }}>
            <Sparkles size={14} style={{ color: 'var(--secondary)' }} />
            <span>Ready to Build the Future of Web?</span>
          </div>

          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: '#ffffff' }}>
            Join Dev Infinity Today.
          </h2>

          <p style={{
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            maxWidth: '640px',
            margin: '0 auto 2.5rem auto'
          }}>
            Whether you are a beginner exploring HTML/CSS or an advanced developer mastering React & Node.js, Dev Infinity welcomes all students from FTE MSU Baroda.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact">
              <Button size="lg" variant="primary">
                <span>Get In Touch</span>
                <ArrowRight size={18} />
              </Button>
            </Link>

            <Link to="/learning">
              <Button size="lg" variant="secondary">
                <span>Explore Learning Hub</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
