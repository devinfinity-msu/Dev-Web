import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';
import { Logo } from '../common/Logo';

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Learning Hub', path: '/learning' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 900,
      backgroundColor: 'var(--bg-glass)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-color)',
      transition: 'all 0.25s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '4.5rem'
      }}>
        {/* Official Brand Logo */}
        <Logo size="md" />

        {/* Desktop Navigation Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="desktop-menu">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                padding: '0.5rem 0.875rem',
                borderRadius: 'var(--radius-xs)',
                fontSize: '0.90rem',
                fontWeight: 600,
                color: isActive(link.path) ? 'var(--primary)' : 'var(--text-secondary)',
                backgroundColor: isActive(link.path) ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                transition: 'all 0.2s ease',
                textDecoration: 'none'
              }}
            >
              {link.name}
            </Link>
          ))}

          {/* Admin Panel Quick Link */}
          <Link
            to="/admin"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.375rem',
              padding: '0.45rem 0.875rem',
              borderRadius: 'var(--radius-xs)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              border: '1px solid var(--border-color)',
              marginLeft: '0.5rem',
              transition: 'all 0.2s ease'
            }}
          >
            <Shield size={14} />
            <span>Admin</span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          className="mobile-toggle"
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--text-contrast)',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div style={{
          backgroundColor: 'var(--bg-card)',
          borderBottom: '1px solid var(--border-color)',
          padding: '1rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }} className="mobile-drawer">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              style={{
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.9375rem',
                fontWeight: 600,
                color: isActive(link.path) ? 'var(--primary)' : 'var(--text-main)',
                backgroundColor: isActive(link.path) ? 'rgba(59, 130, 246, 0.12)' : 'transparent',
                textDecoration: 'none'
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/admin"
            onClick={() => setMobileOpen(false)}
            style={{
              padding: '0.75rem 1rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.9375rem',
              fontWeight: 600,
              color: 'var(--secondary)',
              border: '1px solid var(--border-color)',
              marginTop: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <Shield size={16} />
            <span>Admin Layout Preview</span>
          </Link>
        </div>
      )}

      {/* Inline Style Override for Responsive Visibility */}
      <style>{`
        @media (max-width: 960px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        @media (min-width: 961px) {
          .mobile-toggle { display: none !important; }
          .mobile-drawer { display: none !important; }
        }
      `}</style>
    </nav>
  );
};
