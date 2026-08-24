import React from 'react';
import { Trophy, Calendar, Users } from 'lucide-react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

export const AchievementCard = ({ achievement }) => {
  const isClub = achievement.type.includes('Club');

  return (
    <Card hover className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{
        height: '190px',
        borderRadius: 'var(--radius-sm)',
        overflow: 'hidden',
        position: 'relative',
        marginBottom: '1.25rem',
        marginInline: '-1.5rem',
        marginTop: '-1.5rem'
      }}>
        <img
          src={achievement.image}
          alt={achievement.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem' }}>
          <Badge variant={isClub ? 'success' : 'accent'}>
            <Trophy size={12} />
            <span>{achievement.type}</span>
          </Badge>
        </div>
      </div>

      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-contrast)', marginBottom: '0.5rem' }}>
        {achievement.title}
      </h3>

      <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', flex: 1, lineHeight: 1.5 }}>
        {achievement.description}
      </p>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.375rem',
        fontSize: '0.8125rem',
        color: 'var(--text-muted)',
        borderTop: '1px solid var(--border-color)',
        paddingTop: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Users size={14} style={{ color: 'var(--secondary)' }} />
          <span>Members: {achievement.members}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Calendar size={14} style={{ color: 'var(--primary)' }} />
          <span>Accomplished: {achievement.date}</span>
        </div>
      </div>
    </Card>
  );
};
