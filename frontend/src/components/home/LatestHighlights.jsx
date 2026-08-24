import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Code2, FileText, Trophy, ArrowUpRight } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { Badge } from '../common/Badge';
import { events, projects, blogs, achievements } from '../../data/mockData';

export const LatestHighlights = () => {
  const upcomingEvent = events.find(e => e.status === 'Upcoming') || events[0];
  const latestProject = projects[0];
  const latestBlog = blogs[0];
  const latestAchievement = achievements[0];

  return (
    <section style={{ padding: '4rem 0', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        <SectionTitle
          subtitle="Activity Feed"
          title="Latest"
          gradientText="Highlights"
          description="Check out what's currently happening across our club's events, codebases, publications, and milestone victories."
        />

        <div className="grid-2">
          {/* Highlight 1: Upcoming Event */}
          <div className="card card-hover" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <Badge variant="primary">
                <Calendar size={12} />
                <span>Upcoming Event</span>
              </Badge>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{upcomingEvent.date}</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-contrast)', marginBottom: '0.5rem' }}>
              {upcomingEvent.title}
            </h3>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', flex: 1 }}>
              {upcomingEvent.description}
            </p>
            <Link to="/events" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.875rem', fontWeight: 600 }}>
              <span>View Event Details</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Highlight 2: Latest Project */}
          <div className="card card-hover" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <Badge variant="secondary">
                <Code2 size={12} />
                <span>Featured Project</span>
              </Badge>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{latestProject.category}</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-contrast)', marginBottom: '0.5rem' }}>
              {latestProject.title}
            </h3>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', flex: 1 }}>
              {latestProject.description}
            </p>
            <Link to="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.875rem', fontWeight: 600 }}>
              <span>Explore Project Showcase</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Highlight 3: Latest Blog */}
          <div className="card card-hover" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <Badge variant="accent">
                <FileText size={12} />
                <span>Tech Publication</span>
              </Badge>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{latestBlog.readTime}</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-contrast)', marginBottom: '0.5rem' }}>
              {latestBlog.title}
            </h3>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', flex: 1 }}>
              {latestBlog.summary}
            </p>
            <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.875rem', fontWeight: 600 }}>
              <span>Read Full Article</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Highlight 4: Recent Achievement */}
          <div className="card card-hover" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <Badge variant="success">
                <Trophy size={12} />
                <span>Recent Milestone</span>
              </Badge>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{latestAchievement.date}</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-contrast)', marginBottom: '0.5rem' }}>
              {latestAchievement.title}
            </h3>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', flex: 1 }}>
              {latestAchievement.description}
            </p>
            <Link to="/achievements" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.875rem', fontWeight: 600 }}>
              <span>See All Achievements</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
