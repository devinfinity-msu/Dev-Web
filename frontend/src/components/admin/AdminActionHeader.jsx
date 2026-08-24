import React from 'react';
import { Plus, Search } from 'lucide-react';
import { Button } from '../common/Button';

export const AdminActionHeader = ({ title, subtitle, onAdd, addLabel = "Add New", searchValue, onSearchChange }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '1rem',
      marginBottom: '2rem'
    }}>
      <div>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-contrast)' }}>
          {title}
        </h1>
        {subtitle && <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{subtitle}</p>}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {onSearchChange && (
          <div style={{ position: 'relative', width: '240px' }}>
            <Search size={16} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search items..."
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              className="form-input"
              style={{ paddingLeft: '2.25rem', paddingY: '0.45rem', fontSize: '0.875rem' }}
            />
          </div>
        )}

        {onAdd && (
          <Button variant="primary" size="sm" onClick={onAdd}>
            <Plus size={16} />
            <span>{addLabel}</span>
          </Button>
        )}
      </div>
    </div>
  );
};
