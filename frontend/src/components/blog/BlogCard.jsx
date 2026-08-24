import React from 'react';
import { Clock, Calendar, ArrowUpRight } from 'lucide-react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

export const BlogCard = ({ blog }) => {
  return (
    <Card hover className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Blog Cover */}
      <div style={{
        height: '180px',
        borderRadius: 'var(--radius-sm)',
        overflow: 'hidden',
        position: 'relative',
        marginBottom: '1.25rem',
        marginInline: '-1.5rem',
        marginTop: '-1.5rem'
      }}>
        <img
          src={blog.coverImage}
          alt={blog.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem' }}>
          <Badge variant="secondary">{blog.category}</Badge>
        </div>
      </div>

      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-contrast)', marginBottom: '0.5rem' }}>
        {blog.title}
      </h3>

      <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', flex: 1, lineHeight: 1.5 }}>
        {blog.summary}
      </p>

      {/* Author & Reading Time */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTop: '1px solid var(--border-color)',
        paddingTop: '1rem',
        fontSize: '0.8125rem',
        color: 'var(--text-muted)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img
            src={blog.author.avatar}
            alt={blog.author.name}
            style={{ width: '1.75rem', height: '1.75rem', borderRadius: '50%' }}
          />
          <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>{blog.author.name}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          <Clock size={14} />
          <span>{blog.readTime}</span>
        </div>
      </div>
    </Card>
  );
};
