import React from 'react';
import { ExternalLink, BookOpen, Map, Code, FileText } from 'lucide-react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

export const ResourceCard = ({ resource }) => {
  return (
    <Card hover style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{
          padding: '0.625rem',
          borderRadius: 'var(--radius-sm)',
          background: 'rgba(59, 130, 246, 0.12)',
          color: 'var(--primary)'
        }}>
          <BookOpen size={20} />
        </div>

        <div>
          <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-contrast)', marginBottom: '0.25rem' }}>
            {resource.title}
          </h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem' }}>
            <span style={{ color: 'var(--text-muted)' }}>Type: {resource.type}</span>
            <Badge variant="primary">{resource.tag}</Badge>
          </div>
        </div>
      </div>

      <a href={resource.link} target="_blank" rel="noreferrer" style={{
        padding: '0.5rem',
        borderRadius: 'var(--radius-xs)',
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-color)',
        color: 'var(--text-main)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <ExternalLink size={16} />
      </a>
    </Card>
  );
};
