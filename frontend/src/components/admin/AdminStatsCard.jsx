import React from 'react';

export const AdminStatsCard = ({ title, value, change, icon: Icon, color = 'var(--primary)' }) => {
  return (
    <div className="card" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1.5rem'
    }}>
      <div>
        <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
          {title}
        </div>
        <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-contrast)' }}>
          {value}
        </div>
        {change && (
          <div style={{ fontSize: '0.75rem', color: 'var(--success)', marginTop: '0.25rem', fontWeight: 600 }}>
            {change}
          </div>
        )}
      </div>

      <div style={{
        padding: '0.875rem',
        borderRadius: 'var(--radius-md)',
        background: `rgba(255, 255, 255, 0.05)`,
        border: '1px solid var(--border-color)',
        color: color
      }}>
        {Icon && <Icon size={24} />}
      </div>
    </div>
  );
};
