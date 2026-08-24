import React from 'react';
import { ExternalLink, Users } from 'lucide-react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { GithubIcon } from '../common/Icons';

export const ProjectCard = ({ project }) => {
  return (
    <Card hover className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Project Banner Image */}
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
          src={project.image}
          alt={project.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem' }}>
          <Badge variant="primary">
            {project.category}
          </Badge>
        </div>
      </div>

      {/* Title & Description */}
      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-contrast)', marginBottom: '0.5rem' }}>
        {project.title}
      </h3>
      <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', flex: 1, lineHeight: 1.5 }}>
        {project.description}
      </p>

      {/* Tech Stack Tags */}
      <div style={{ marginBottom: '1.25rem' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          Tech Stack
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
          {project.techStack.map((tech, idx) => (
            <span key={idx} style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              padding: '0.2rem 0.5rem',
              borderRadius: 'var(--radius-xs)',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-main)',
              fontFamily: 'var(--font-mono)'
            }}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Contributors */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '0.8125rem',
        color: 'var(--text-secondary)',
        marginBottom: '1.25rem',
        borderTop: '1px solid var(--border-color)',
        paddingTop: '0.75rem'
      }}>
        <Users size={14} style={{ color: 'var(--secondary)' }} />
        <span>Built by: {project.contributors.join(', ')}</span>
      </div>

      {/* GitHub & Live Demo Buttons */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
        <a href={project.githubUrl} target="_blank" rel="noreferrer">
          <Button variant="secondary" size="sm" style={{ width: '100%' }}>
            <GithubIcon size={14} />
            <span>GitHub</span>
          </Button>
        </a>
        <a href={project.demoUrl} target="_blank" rel="noreferrer">
          <Button variant="primary" size="sm" style={{ width: '100%' }}>
            <ExternalLink size={14} />
            <span>Live Demo</span>
          </Button>
        </a>
      </div>
    </Card>
  );
};
