import React from 'react';
import { Map, Code, Server, Wrench } from 'lucide-react';
import { ResourceCard } from './ResourceCard';

const iconMap = {
  Map: Map,
  Code: Code,
  Server: Server,
  Wrench: Wrench
};

export const ResourceCategory = ({ category }) => {
  const Icon = iconMap[category.icon] || Code;

  return (
    <div style={{ marginBottom: '3rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
        <div style={{
          padding: '0.5rem',
          borderRadius: 'var(--radius-sm)',
          background: 'rgba(6, 182, 212, 0.15)',
          color: 'var(--secondary)'
        }}>
          <Icon size={20} />
        </div>
        <h3 style={{ fontSize: '1.375rem', fontWeight: 800, color: 'var(--text-contrast)' }}>
          {category.category}
        </h3>
      </div>
      <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
        {category.description}
      </p>

      <div className="grid-2">
        {category.items.map((item) => (
          <ResourceCard key={item.id} resource={item} />
        ))}
      </div>
    </div>
  );
};
