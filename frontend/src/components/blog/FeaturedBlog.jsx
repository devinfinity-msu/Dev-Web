import React from 'react';
import { Clock, Calendar, ArrowRight, User } from 'lucide-react';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

export const FeaturedBlog = ({ blog }) => {
  if (!blog) return null;

  return (
    <div style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border-hover)',
      borderRadius: 'var(--radius-lg)',
      padding: '2rem',
      marginBottom: '3rem',
      boxShadow: 'var(--shadow-md)'
    }} className="animate-fade-in">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center' }}>
        <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '260px' }}>
          <img
            src={blog.coverImage}
            alt={blog.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <div>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', alignItems: 'center' }}>
            <Badge variant="accent">FEATURED ARTICLE</Badge>
            <Badge variant="primary">{blog.category}</Badge>
          </div>

          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-contrast)' }}>
            {blog.title}
          </h2>

          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            {blog.summary}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <img
              src={blog.author.avatar}
              alt={blog.author.name}
              style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', objectFit: 'cover' }}
            />
            <div>
              <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-contrast)' }}>
                {blog.author.name}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {blog.author.role} • {blog.publishedDate} • {blog.readTime}
              </div>
            </div>
          </div>

          <Button variant="primary">
            <span>Read Featured Post</span>
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};
