import React from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

export const MemberCard = ({ member }) => {
  return (
    <Card hover className="animate-fade-in" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
      <div style={{
        width: '5.5rem',
        height: '5.5rem',
        borderRadius: '50%',
        overflow: 'hidden',
        margin: '0 auto 1.25rem auto',
        border: '2px solid var(--primary)',
        boxShadow: '0 0 16px var(--primary-glow)'
      }}>
        <img
          src={member.avatar}
          alt={member.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-contrast)', marginBottom: '0.25rem' }}>
        {member.name}
      </h3>

      <div style={{ marginBottom: '0.75rem' }}>
        <Badge variant="primary">{member.role}</Badge>
      </div>

      <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
        <div>{member.year}</div>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{member.branch}</div>
      </div>

      {/* Social Links */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem' }}>
        {member.github && (
          <a href={member.github} target="_blank" rel="noreferrer" style={{
            padding: '0.4rem',
            borderRadius: 'var(--radius-xs)',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-main)',
            display: 'flex'
          }}>
            <GithubIcon size={16} />
          </a>
        )}
        {member.linkedin && (
          <a href={member.linkedin} target="_blank" rel="noreferrer" style={{
            padding: '0.4rem',
            borderRadius: 'var(--radius-xs)',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-main)',
            display: 'flex'
          }}>
            <LinkedinIcon size={16} />
          </a>
        )}
      </div>
    </Card>
  );
};
