import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Home, ArrowLeft } from 'lucide-react';
import { PageContainer } from '../../components/layout/PageContainer';
import { Button } from '../../components/common/Button';

export const NotFoundPage = () => {
  return (
    <PageContainer>
      <div className="container" style={{
        textAlign: 'center',
        padding: '6rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          padding: '1.25rem',
          borderRadius: 'var(--radius-full)',
          background: 'rgba(239, 68, 68, 0.12)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          color: 'var(--danger)',
          marginBottom: '1.5rem'
        }}>
          <AlertCircle size={48} />
        </div>

        <h1 style={{ fontSize: '4rem', fontWeight: 800, color: 'var(--text-contrast)', lineHeight: 1, marginBottom: '0.5rem' }}>
          404
        </h1>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-main)' }}>
          Page Not Found
        </h2>

        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto 2.5rem auto' }}>
          The requested route does not exist or has been relocated within the Dev Infinity web application architecture.
        </p>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/">
            <Button variant="primary" size="lg">
              <Home size={18} />
              <span>Return to Home</span>
            </Button>
          </Link>
        </div>
      </div>
    </PageContainer>
  );
};
