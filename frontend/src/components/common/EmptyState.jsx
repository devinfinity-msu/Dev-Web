import React from 'react';
import { FolderX } from 'lucide-react';
import { Button } from './Button';

export const EmptyState = ({
  title = "No Items Found",
  description = "No matching items found for your search or selected filter.",
  actionText,
  onAction
}) => {
  return (
    <div style={{
      textAlign: 'center',
      padding: '4rem 1.5rem',
      background: 'var(--bg-card)',
      border: '1px solid var(--border-color)',
      borderRadius: 'var(--radius-md)',
      maxWidth: '480px',
      margin: '2rem auto'
    }}>
      <FolderX size={42} style={{ color: 'var(--text-muted)', marginBottom: '1rem' }} />
      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-contrast)' }}>{title}</h3>
      <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{description}</p>
      {actionText && onAction && (
        <Button variant="secondary" size="sm" onClick={onAction}>
          {actionText}
        </Button>
      )}
    </div>
  );
};
