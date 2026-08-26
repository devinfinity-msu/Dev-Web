import React from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Code2,
  FileText,
  Trophy,
  ArrowUpRight
} from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { Badge } from '../common/Badge';
import { events, projects, blogs, achievements } from '../../data/mockData';

export const LatestHighlights = () => {
  const upcomingEvent =
    events.find(e => e.status === 'Upcoming') || events[0];

  const latestProject = projects[0];
  const latestBlog = blogs[0];
  const latestAchievement = achievements[0];

  const highlights = [
    {
      id: 'event',
      badgeVariant: 'primary',
      icon: Calendar,
      badgeText: 'Upcoming Event',
      meta: upcomingEvent.date,
      title: upcomingEvent.title,
      description: upcomingEvent.description,
      link: '/events',
      linkText: 'View Event Details'
    },
    {
      id: 'project',
      badgeVariant: 'secondary',
      icon: Code2,
      badgeText: 'Featured Project',
      meta: latestProject.category,
      title: latestProject.title,
      description: latestProject.description,
      link: '/projects',
      linkText: 'Explore Project Showcase'
    },
    {
      id: 'blog',
      badgeVariant: 'accent',
      icon: FileText,
      badgeText: 'Tech Publication',
      meta: latestBlog.readTime,
      title: latestBlog.title,
      description: latestBlog.summary,
      link: '/blog',
      linkText: 'Read Full Article'
    },
    {
      id: 'achievement',
      badgeVariant: 'success',
      icon: Trophy,
      badgeText: 'Recent Milestone',
      meta: latestAchievement.date,
      title: latestAchievement.title,
      description: latestAchievement.description,
      link: '/achievements',
      linkText: 'See All Achievements'
    }
  ];

  return (
    <section
      style={{
        padding: '5rem 0',
        borderTop: '1px solid var(--border-color)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle background glow */}
      <div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(59, 130, 246, 0.05), transparent 70%)',
          top: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          pointerEvents: 'none'
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1
        }}
      >
        <SectionTitle
          subtitle="Activity Feed"
          title="Latest"
          gradientText="Highlights"
          description="Check out what's currently happening across our club's events, codebases, publications, and milestone victories."
        />

        <div
          className="grid-2"
          style={{
            marginTop: '2.5rem'
          }}
        >
          {highlights.map(item => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="card card-hover"
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  transition:
                    'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                {/* Subtle card glow */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-100px',
                    right: '-100px',
                    width: '220px',
                    height: '220px',
                    borderRadius: '50%',
                    background:
                      'radial-gradient(circle, rgba(59, 130, 246, 0.1), transparent 70%)',
                    pointerEvents: 'none'
                  }}
                />

                {/* Top row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    marginBottom: '1.25rem',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  <Badge variant={item.badgeVariant}>
                    <Icon size={12} />
                    <span>{item.badgeText}</span>
                  </Badge>

                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-mono)',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {item.meta}
                  </span>
                </div>

                {/* Icon */}
                <div
                  style={{
                    position: 'relative',
                    width: '2.8rem',
                    height: '2.8rem',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background:
                      'linear-gradient(135deg, rgba(59, 130, 246, 0.14), rgba(59, 130, 246, 0.04))',
                    border: '1px solid rgba(59, 130, 246, 0.25)',
                    color: 'var(--primary)',
                    marginBottom: '1.15rem',
                    transition:
                      'transform 0.25s ease, box-shadow 0.25s ease'
                  }}
                >
                  <Icon size={20} strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    fontSize: '1.3rem',
                    lineHeight: 1.35,
                    color: 'var(--text-contrast)',
                    marginBottom: '0.65rem',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    marginBottom: '1.5rem',
                    flex: 1
                  }}
                >
                  {item.description}
                </p>

                {/* Divider */}
                <div
                  style={{
                    height: '1px',
                    width: '100%',
                    background:
                      'linear-gradient(90deg, var(--border-color), transparent)',
                    marginBottom: '1rem'
                  }}
                />

                {/* Action */}
                <Link
                  to={item.link}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    width: 'fit-content',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    color: 'var(--text-main)',
                    transition:
                      'color 0.2s ease, gap 0.2s ease'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--primary)';
                    e.currentTarget.style.gap = '0.65rem';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--text-main)';
                    e.currentTarget.style.gap = '0.4rem';
                  }}
                >
                  <span>{item.linkText}</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};