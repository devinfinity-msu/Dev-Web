import React from 'react';
import { Mail, MapPin, GraduationCap } from 'lucide-react';
import { Card } from '../common/Card';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../common/Icons';
import { clubInfo } from '../../data/mockData';

export const ContactInfo = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <Card>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-contrast)', marginBottom: '1.25rem' }}>
          Contact Information
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '0.9375rem' }}>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <div style={{ padding: '0.5rem', borderRadius: 'var(--radius-xs)', background: 'rgba(59, 130, 246, 0.15)', color: 'var(--primary)', flexShrink: 0 }}>
              <Mail size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Official Email</div>
              <div style={{ color: 'var(--text-contrast)', fontWeight: 600 }}>{clubInfo.contactEmail}</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <div style={{ padding: '0.5rem', borderRadius: 'var(--radius-xs)', background: 'rgba(6, 182, 212, 0.15)', color: 'var(--secondary)', flexShrink: 0 }}>
              <MapPin size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Location & Campus</div>
              <div style={{ color: 'var(--text-contrast)', fontWeight: 600 }}>{clubInfo.location}</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <div style={{ padding: '0.5rem', borderRadius: 'var(--radius-xs)', background: 'rgba(139, 92, 246, 0.15)', color: 'var(--accent)', flexShrink: 0 }}>
              <GraduationCap size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Faculty Coordinator</div>
              <div style={{ color: 'var(--text-contrast)', fontWeight: 600 }}>{clubInfo.facultyCoordinator.name}</div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>{clubInfo.facultyCoordinator.designation}</div>
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-contrast)', marginBottom: '1rem' }}>
          Official Channels & Socials
        </h4>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <a href={clubInfo.socials.github} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm" style={{ flex: 1, minWidth: '100px' }}>
            <GithubIcon size={16} />
            <span>GitHub</span>
          </a>
          <a href={clubInfo.socials.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm" style={{ flex: 1, minWidth: '100px' }}>
            <LinkedinIcon size={16} />
            <span>LinkedIn</span>
          </a>
          <a href={clubInfo.socials.instagram} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm" style={{ flex: 1, minWidth: '100px' }}>
            <InstagramIcon size={16} />
            <span>Instagram</span>
          </a>
        </div>
      </Card>
    </div>
  );
};
