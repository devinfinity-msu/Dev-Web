import React from 'react';
import { Loader2 } from 'lucide-react';

export const Loader = ({ text = "Loading Dev Infinity resources...", size = 28 }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3rem 1rem',
      gap: '1rem',
      color: 'var(--text-secondary)'
    }}>
      <Loader2 size={size} style={{ animation: 'spinSlow 1.5s linear infinite', color: 'var(--primary)' }} />
      <span style={{ fontSize: '0.9375rem' }}>{text}</span>
    </div>
  );
};
