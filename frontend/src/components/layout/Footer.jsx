import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import { Logo } from '../common/Logo';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../common/Icons';
import { clubInfo } from '../../data/mockData';

export const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#070a11',
      borderTop: '1px solid var(--border-color)',
      paddingTop: '4rem',
      paddingBottom: '2.5rem',
      color: 'var(--text-secondary)'
    }}>
      <div className="container">
        <div className="grid-4" style={{ marginBottom: '3rem' }}>
          {/* Col 1: Club Branding */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <Logo size="lg" linkToHome={false} />
            </div>
            <p style={{ fontSize: '0.9375rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
              Official Web Development Club of CSE Dept, FTE, MSU Baroda. Empowering future developers through innovation and open collaboration.
            </p>
            <div style={{
              display: 'inline-block',
              padding: '0.25rem 0.75rem',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(59, 130, 246, 0.12)',
              border: '1px solid rgba(59, 130, 246, 0.25)',
              fontSize: '0.8125rem',
              fontWeight: 700,
              color: 'var(--primary)'
            }}>
              "{clubInfo.tagline}"
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 style={{ color: 'var(--text-contrast)', fontSize: '1rem', marginBottom: '1rem' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9375rem' }}>
              <li><Link to="/events" style={{ color: 'var(--text-secondary)' }}>Events & Workshops</Link></li>
              <li><Link to="/projects" style={{ color: 'var(--text-secondary)' }}>Student Projects</Link></li>
              <li><Link to="/blog" style={{ color: 'var(--text-secondary)' }}>Technical Blogs</Link></li>
              <li><Link to="/learning" style={{ color: 'var(--text-secondary)' }}>Learning Hub & Roadmaps</Link></li>
              <li><Link to="/achievements" style={{ color: 'var(--text-secondary)' }}>Club Achievements</Link></li>
            </ul>
          </div>

          {/* Col 3: Institutional Details */}
          <div>
            <h4 style={{ color: 'var(--text-contrast)', fontSize: '1rem', marginBottom: '1rem' }}>
              Institution
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <MapPin size={16} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.2rem' }} />
                <span>{clubInfo.location}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Mail size={16} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.2rem' }} />
                <span>{clubInfo.contactEmail}</span>
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                Department of Computer Science & Engineering<br />
                Faculty of Technology and Engineering<br />
                The M. S. University of Baroda
              </div>
            </div>
          </div>

          {/* Col 4: Community & Socials */}
          <div>
            <h4 style={{ color: 'var(--text-contrast)', fontSize: '1rem', marginBottom: '1rem' }}>
              Connect With Us
            </h4>
            <p style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>
              Join our online community to stay updated on upcoming hackathons & workshops.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href={clubInfo.socials.github} target="_blank" rel="noreferrer" style={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-main)'
              }}>
                <GithubIcon size={18} />
              </a>
              <a href={clubInfo.socials.linkedin} target="_blank" rel="noreferrer" style={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-main)'
              }}>
                <LinkedinIcon size={18} />
              </a>
              <a href={clubInfo.socials.instagram} target="_blank" rel="noreferrer" style={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-main)'
              }}>
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--border-color)',
          paddingTop: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          fontSize: '0.8125rem'
        }}>
          <div>
            © {new Date().getFullYear()} {clubInfo.name} — Department of CSE, FTE, MSU Baroda. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <Link to="/contact" style={{ color: 'var(--text-secondary)' }}>Contact Support</Link>
            <Link to="/admin" style={{ color: 'var(--text-secondary)' }}>Admin Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
