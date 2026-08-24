import React from 'react';
import { Calendar, Clock, MapPin, User, ArrowUpRight } from 'lucide-react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

export const EventCard = ({ event }) => {
  const isUpcoming = event.status === 'Upcoming';

  return (
    <Card hover className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Event Cover Image */}
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
          src={event.image}
          alt={event.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          top: '0.75rem',
          left: '0.75rem',
          display: 'flex',
          gap: '0.5rem'
        }}>
          <Badge variant={isUpcoming ? 'primary' : 'secondary'}>
            {event.type}
          </Badge>
          <Badge variant="accent">
            {event.category}
          </Badge>
        </div>
      </div>

      {/* Title & Description */}
      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-contrast)', marginBottom: '0.5rem' }}>
        {event.title}
      </h3>
      <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', flex: 1, lineHeight: 1.5 }}>
        {event.description}
      </p>

      {/* Meta Information */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.375rem',
        fontSize: '0.8125rem',
        color: 'var(--text-secondary)',
        borderTop: '1px solid var(--border-color)',
        paddingTop: '1rem',
        marginBottom: '1.25rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Calendar size={14} style={{ color: 'var(--primary)' }} />
          <span>{event.date} • {event.time}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <MapPin size={14} style={{ color: 'var(--secondary)' }} />
          <span>{event.venue}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <User size={14} style={{ color: 'var(--accent)' }} />
          <span>Speaker: {event.speaker}</span>
        </div>
      </div>

      {/* Button Action */}
      <div>
        {isUpcoming ? (
          <Button variant="primary" size="sm" style={{ width: '100%' }}>
            <span>Register Now</span>
            <ArrowUpRight size={14} />
          </Button>
        ) : (
          <Button variant="secondary" size="sm" style={{ width: '100%' }}>
            <span>View Event Recap</span>
          </Button>
        )}
      </div>
    </Card>
  );
};
