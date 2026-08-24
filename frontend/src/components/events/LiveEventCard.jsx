import React from 'react';
import { Radio, Clock, MapPin, User, ExternalLink, AlertCircle } from 'lucide-react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

export const LiveEventCard = ({ liveData }) => {
  if (!liveData || !liveData.isLive) {
    return (
      <div style={{
        background: 'var(--bg-card)',
        border: '1px border var(--border-color)',
        borderRadius: 'var(--radius-lg)',
        padding: '2.5rem 1.5rem',
        textAlign: 'center',
        margin: '2rem 0'
      }}>
        <div style={{
          display: 'inline-flex',
          padding: '0.75rem',
          borderRadius: 'var(--radius-full)',
          background: 'rgba(255, 255, 255, 0.04)',
          color: 'var(--text-muted)',
          marginBottom: '1rem'
        }}>
          <Radio size={28} />
        </div>
        <h3 style={{ fontSize: '1.25rem', color: 'var(--text-contrast)', marginBottom: '0.5rem' }}>
          No Live Event Right Now
        </h3>
        <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto' }}>
          Check our upcoming schedule below to register for the next Dev Infinity workshop or hackathon!
        </p>
      </div>
    );
  }

  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(17, 24, 39, 0.95) 100%)',
      border: '1px solid rgba(239, 68, 68, 0.4)',
      borderRadius: 'var(--radius-lg)',
      padding: '2rem',
      margin: '2rem 0',
      boxShadow: '0 0 30px rgba(239, 68, 68, 0.15)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          <span style={{
            display: 'inline-block',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: '#ef4444',
            boxShadow: '0 0 10px #ef4444',
            animation: 'pulseGlow 1.2s ease-in-out infinite'
          }} />
          <Badge variant="warning">
            <span>LIVE NOW</span>
          </Badge>
          <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
            {liveData.attendeesCount} Participants Joined
          </span>
        </div>
        <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{liveData.date}</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem', color: '#ffffff' }}>
            {liveData.title}
          </h2>
          <div style={{
            background: 'rgba(0, 0, 0, 0.3)',
            padding: '0.75rem 1rem',
            borderRadius: 'var(--radius-sm)',
            borderLeft: '3px solid var(--danger)',
            fontSize: '0.9375rem',
            color: 'var(--text-main)',
            marginBottom: '1.25rem'
          }}>
            <strong>Current Session:</strong> {liveData.currentActivity}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <User size={16} style={{ color: 'var(--primary)' }} />
              <span>Speaker / Mentor: <strong>{liveData.speaker}</strong></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={16} style={{ color: 'var(--secondary)' }} />
              <span>Time: {liveData.time}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={16} style={{ color: 'var(--accent)' }} />
              <span>Venue: {liveData.venue}</span>
            </div>
          </div>

          <a href={liveData.joinUrl} target="_blank" rel="noreferrer">
            <Button size="lg" variant="primary" style={{ background: 'var(--danger)', boxShadow: '0 4px 15px rgba(239, 68, 68, 0.3)' }}>
              <Radio size={18} />
              <span>Join Live Stream / Session</span>
            </Button>
          </a>
        </div>

        {/* Live Banner Image */}
        <div style={{
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
          border: '1px solid var(--border-color)',
          maxHeight: '260px'
        }}>
          <img
            src={liveData.banner}
            alt={liveData.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};
