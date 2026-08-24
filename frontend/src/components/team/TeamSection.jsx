import React from 'react';
import { MemberCard } from './MemberCard';

export const TeamSection = ({ title, description, members }) => {
  if (!members || members.length === 0) return null;

  return (
    <div style={{ marginBottom: '4rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-contrast)', marginBottom: '0.375rem' }}>
          {title}
        </h3>
        {description && <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>{description}</p>}
      </div>

      <div className="grid-3">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};
