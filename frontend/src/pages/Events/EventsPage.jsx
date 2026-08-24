import React, { useState } from 'react';
import { PageContainer } from '../../components/layout/PageContainer';
import { SectionTitle } from '../../components/common/SectionTitle';
import { LiveEventCard } from '../../components/events/LiveEventCard';
import { EventFilters } from '../../components/events/EventFilters';
import { EventCard } from '../../components/events/EventCard';
import { EmptyState } from '../../components/common/EmptyState';
import { liveEvent, events } from '../../data/mockData';

export const EventsPage = () => {
  const [filter, setFilter] = useState('All');

  const filteredEvents = events.filter((evt) => {
    if (filter === 'All') return true;
    return evt.category === filter || evt.type === filter;
  });

  const upcomingEvents = filteredEvents.filter((e) => e.status === 'Upcoming');
  const pastEvents = filteredEvents.filter((e) => e.status === 'Past');

  return (
    <PageContainer>
      <div className="container" style={{ paddingTop: '2rem' }}>
        <SectionTitle
          subtitle="Club Activities & Workshops"
          title="Dev Infinity"
          gradientText="Events"
          description="Join interactive web development workshops, 24-hour hackathons, guest speaker tech sessions, and hands-on coding bootcamps."
        />

        {/* Live Event Section */}
        <LiveEventCard liveData={liveEvent} />

        {/* Category Filters Bar */}
        <div style={{ marginTop: '3rem' }}>
          <EventFilters activeFilter={filter} onFilterChange={setFilter} />
        </div>

        {/* Upcoming Events Grid */}
        <div style={{ marginBottom: '4rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-contrast)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>Upcoming Workshops & Hackathons</span>
            <span style={{ fontSize: '0.875rem', color: 'var(--primary)', background: 'rgba(59, 130, 246, 0.1)', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-full)' }}>
              ({upcomingEvents.length})
            </span>
          </h3>

          {upcomingEvents.length > 0 ? (
            <div className="grid-3">
              {upcomingEvents.map((evt) => (
                <EventCard key={evt.id} event={evt} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No Upcoming Events Found"
              description={`There are currently no upcoming events under the "${filter}" category.`}
              actionText="Reset Filter"
              onAction={() => setFilter('All')}
            />
          )}
        </div>

        {/* Past Events Grid */}
        <div style={{ marginBottom: '4rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-contrast)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>Past Events & Recaps</span>
            <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', background: 'rgba(255, 255, 255, 0.05)', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-full)' }}>
              ({pastEvents.length})
            </span>
          </h3>

          {pastEvents.length > 0 ? (
            <div className="grid-3">
              {pastEvents.map((evt) => (
                <EventCard key={evt.id} event={evt} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No Past Events Found"
              description={`No past events match the "${filter}" category.`}
              actionText="Reset Filter"
              onAction={() => setFilter('All')}
            />
          )}
        </div>
      </div>
    </PageContainer>
  );
};
