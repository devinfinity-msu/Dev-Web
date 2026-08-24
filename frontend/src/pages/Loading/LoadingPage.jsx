import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { clubInfo } from '../../data/mockData';
import { Button } from '../../components/common/Button';
import './LoadingPage.css';

export const LoadingPage = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => navigate('/'), 600);
          return 100;
        }
        return prev + 20;
      });
    }, 250);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="loading-screen bg-grid-pattern">
      {/* Official Circular Logo Emblem Box */}
      <div style={{
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        overflow: 'hidden',
        boxShadow: '0 0 40px rgba(6, 182, 212, 0.4)',
        marginBottom: '1.5rem',
        animation: 'pulseGlow 2s ease-in-out infinite',
        backgroundColor: '#04061a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <img
          src="/dev logo.png"
          alt="Dev Infinity Official Circular Logo"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </div>

      <h1 className="loading-title">
        DEV <span className="gradient-text">INFINITY</span>
      </h1>

      <div className="loading-dept">
        Department of CSE • FTE • MSU Baroda
      </div>

      <div className="loading-tagline">
        "{clubInfo.tagline}"
      </div>

      <div className="loading-bar-container">
        <div className="loading-bar-fill" style={{ width: `${progress}%` }} />
      </div>

      <div style={{ marginTop: '1.5rem', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
        Initializing web components ({progress}%)
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Button variant="secondary" size="sm" onClick={() => navigate('/')}>
          <span>Skip Loading</span>
          <ArrowRight size={14} />
        </Button>
      </div>
    </div>
  );
};
