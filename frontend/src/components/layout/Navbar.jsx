import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../common/Logo';
import {
  Menu, X, ChevronDown, Shield, Sparkles, BookOpen,
  Trophy, Users, FileText, Mail, Cpu, Layers, GitBranch,
  Terminal, ArrowUpRight, Command,
} from 'lucide-react';
import { clubInfo } from '../../data/mockData';

/* ─── tiny helpers ───────────────────────────────────────────── */
const S = {
  /* pill container wrapper (fixed, centered) */
  wrapper: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999,
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    padding: '0.75rem 1rem', pointerEvents: 'none',
  },
  /* the floating pill */
  pill: {
    pointerEvents: 'auto',
    display: 'flex', flexDirection: 'row', alignItems: 'center',
    justifyContent: 'space-between', gap: '0.5rem',
    width: '100%', maxWidth: '72rem',
    height: '3.75rem',
    borderRadius: '9999px',
    border: '1px solid rgba(255,255,255,0.10)',
    background: 'rgba(11,15,25,0.85)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 0 20px rgba(59,130,246,0.12)',
    padding: '0 0.75rem 0 0',
    transition: 'all 0.3s ease',
  },
  /* logo area */
  logoArea: {
    display: 'flex', alignItems: 'center',
    padding: '0 0.75rem 0 1rem', flexShrink: 0,
  },
  /* desktop nav row */
  desktopNav: {
    display: 'flex', alignItems: 'center', gap: '0.125rem', flex: 1,
    justifyContent: 'center',
  },
  navLink: (active) => ({
    display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
    padding: '0.4rem 0.9rem',
    borderRadius: '9999px',
    fontSize: '0.875rem', fontWeight: 500,
    color: active ? '#3b82f6' : 'rgba(255,255,255,0.75)',
    background: active ? 'rgba(59,130,246,0.12)' : 'transparent',
    textDecoration: 'none',
    border: 'none', cursor: 'pointer',
    transition: 'all 0.15s ease',
    whiteSpace: 'nowrap',
  }),
  /* right actions */
  actions: {
    display: 'flex', alignItems: 'center', gap: '0.375rem', flexShrink: 0,
  },
  iconBtn: {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    width: '2.125rem', height: '2.125rem', borderRadius: '9999px',
    background: 'transparent', border: 'none',
    color: 'rgba(255,255,255,0.6)', cursor: 'pointer',
    transition: 'all 0.15s ease',
  },
  ctaBtn: {
    display: 'inline-flex', alignItems: 'center',
    padding: '0.45rem 1.25rem',
    borderRadius: '9999px', border: 'none',
    background: 'linear-gradient(135deg,#3b82f6,#06b6d4)',
    color: '#fff', fontWeight: 700, fontSize: '0.8125rem',
    cursor: 'pointer', whiteSpace: 'nowrap',
    boxShadow: '0 4px 14px rgba(59,130,246,0.35)',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
  },
  /* badge */
  badge: {
    display: 'inline-flex', alignItems: 'center',
    padding: '0.125rem 0.5rem',
    borderRadius: '9999px',
    fontSize: '0.625rem', fontWeight: 700,
    letterSpacing: '0.05em', textTransform: 'uppercase',
    background: 'rgba(59,130,246,0.15)',
    color: '#60a5fa',
    border: '1px solid rgba(59,130,246,0.3)',
    marginLeft: '0.25rem',
  },
  /* mega dropdown */
  dropdownOverlay: {
    position: 'fixed', inset: 0, zIndex: 998, background: 'transparent',
  },
  dropdown: {
    position: 'absolute',
    top: 'calc(100% + 0.5rem)',
    left: '50%', transform: 'translateX(-50%)',
    zIndex: 1000, width: '62rem', maxWidth: 'calc(100vw - 2rem)',
    borderRadius: '1.75rem',
    border: '1px solid rgba(255,255,255,0.10)',
    background: 'rgba(11,15,25,0.97)',
    backdropFilter: 'blur(24px)',
    boxShadow: '0 24px 60px rgba(0,0,0,0.7), 0 0 30px rgba(59,130,246,0.15)',
    padding: '2rem 2.5rem',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gap: '0',
  },
  dropdownCol: {
    padding: '0 1.5rem',
    borderRight: '1px solid rgba(255,255,255,0.06)',
  },
  dropdownColLast: { padding: '0 0 0 1.5rem' },
  dropdownHead: {
    fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em',
    textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)',
    marginBottom: '1rem',
  },
  dropdownLink: {
    display: 'flex', alignItems: 'center', gap: '0.5rem',
    textDecoration: 'none',
    fontSize: '0.875rem', fontWeight: 500,
    color: 'rgba(255,255,255,0.65)',
    padding: '0.375rem 0',
    transition: 'color 0.15s ease',
  },
  /* mobile sheet */
  backdrop: {
    position: 'fixed', inset: 0, zIndex: 1001,
    background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)',
  },
  drawer: {
    position: 'fixed', top: 0, right: 0, bottom: 0,
    width: 'min(320px, 90vw)', zIndex: 1002,
    background: '#0b0f19',
    borderLeft: '1px solid rgba(255,255,255,0.08)',
    boxShadow: '-20px 0 60px rgba(0,0,0,0.6)',
    display: 'flex', flexDirection: 'column',
    padding: '1.5rem',
    overflowY: 'auto',
  },
  drawerLink: {
    display: 'block', textDecoration: 'none',
    padding: '0.625rem 0',
    fontSize: '1rem', fontWeight: 600,
    color: 'rgba(255,255,255,0.9)',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    transition: 'color 0.15s ease',
  },
};

/* ─── SolutionsDropdown ─────────────────────────────────────── */
function SolutionsDropdown({ onClose }) {
  const col1Links = [
    { icon: <Sparkles size={14} />, label: 'Projects Showcase', to: '/projects' },
    { icon: <BookOpen size={14} />, label: 'Learning Hub', to: '/learning' },
    { icon: <Trophy size={14} />, label: 'Achievements', to: '/achievements' },
    { icon: <Cpu size={14} />, label: 'Events & Hackathons', to: '/events' },
  ];
  const col2Links = [
    { icon: <Users size={14} />, label: 'Team & Faculty', to: '/team' },
    { icon: <FileText size={14} />, label: 'Tech Blogs', to: '/blog' },
    { icon: <Mail size={14} />, label: 'Contact Support', to: '/contact' },
    { icon: <Shield size={14} />, label: 'Admin Portal', to: '/admin' },
  ];

  return (
    <div style={S.dropdown}>
      {/* col 1 */}
      <div style={{ paddingRight: '1.5rem', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ marginBottom: '0.75rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: '2.25rem', height: '2.25rem', borderRadius: '0.75rem',
            background: 'rgba(59,130,246,0.15)', marginBottom: '0.75rem',
          }}>
            <Cpu size={16} style={{ color: '#3b82f6' }} />
          </div>
          <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#fff', marginBottom: '0.25rem' }}>
            Dev Infrastructure
          </div>
          <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>
            Build & deploy student projects at CSE FTE MSU Baroda.
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginTop: '0.75rem' }}>
          {[['Layers', 'Full Stack'], ['GitBranch', 'Web3 & AI'], ['Terminal', 'CLI Docs']].map(([, label]) => (
            <Link key={label} to="/projects" onClick={onClose} style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
              padding: '0.25rem 0.625rem', borderRadius: '9999px',
              border: '1px solid rgba(255,255,255,0.12)',
              fontSize: '0.6875rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)',
              textDecoration: 'none', transition: 'all 0.15s ease',
            }}>{label}</Link>
          ))}
        </div>
      </div>

      {/* col 2 */}
      <div style={{ padding: '0 1.5rem', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={S.dropdownHead}>Explore Portals</div>
        {col1Links.map(({ icon, label, to }) => (
          <Link key={to} to={to} onClick={onClose} style={S.dropdownLink}>
            <span style={{ color: '#3b82f6', display: 'flex' }}>{icon}</span>
            {label}
          </Link>
        ))}
      </div>

      {/* col 3 */}
      <div style={{ padding: '0 1.5rem', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={S.dropdownHead}>Community</div>
        {col2Links.map(({ icon, label, to }) => (
          <Link key={to} to={to} onClick={onClose} style={S.dropdownLink}>
            <span style={{ color: '#06b6d4', display: 'flex' }}>{icon}</span>
            {label}
          </Link>
        ))}
      </div>

      {/* col 4 — featured card */}
      <div style={S.dropdownColLast}>
        <div style={S.dropdownHead}>Featured</div>
        <Link to="/events" onClick={onClose} style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          textDecoration: 'none', borderRadius: '1rem',
          border: '1px solid rgba(59,130,246,0.25)',
          background: 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(11,15,25,0.8))',
          padding: '1rem', height: '100%', minHeight: '9rem',
          transition: 'border-color 0.2s ease',
        }}>
          <div>
            <div style={{
              display: 'inline-block', padding: '0.15rem 0.5rem',
              borderRadius: '9999px', border: '1px solid rgba(59,130,246,0.4)',
              fontSize: '0.625rem', fontWeight: 700, color: '#3b82f6',
              textTransform: 'uppercase', letterSpacing: '0.06em',
              marginBottom: '0.625rem',
            }}>🏆 Flagship Event</div>
            <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#fff', marginBottom: '0.375rem', lineHeight: 1.4 }}>
              Dev Infinity CodeSprint 2026
            </div>
            <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
              CSE FTE MSU Baroda annual hackathon — build, compete & win.
            </div>
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.25rem',
            fontSize: '0.75rem', fontWeight: 700, color: '#3b82f6', marginTop: '0.75rem',
          }}>
            Explore events <ArrowUpRight size={12} />
          </div>
        </Link>
      </div>
    </div>
  );
}

/* ─── Navbar ────────────────────────────────────────────────── */
export const Navbar = () => {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const dropdownRef = useRef(null);

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  useEffect(() => setDropdownOpen(false), [location.pathname]);
  useEffect(() => setMobileOpen(false), [location.pathname]);

  const mainLinks = [
    { label: 'Home', to: '/' },
    { label: 'Events', to: '/events' },
    { label: 'Projects', to: '/projects' },
    { label: 'Blog', to: '/blog' },
    { label: 'Learning', to: '/learning' },
    { label: 'Achievements', to: '/achievements' },
    { label: 'Team', to: '/team' },
  ];

  const mobileLinks = [
    { label: 'Home', to: '/' },
    { label: 'Events & Workshops', to: '/events' },
    { label: 'Projects Showcase', to: '/projects' },
    { label: 'Learning Hub', to: '/learning' },
    { label: 'Achievements', to: '/achievements' },
    { label: 'Tech Blogs', to: '/blog' },
    { label: 'Team & Faculty', to: '/team' },
    { label: 'Contact', to: '/contact' },
    { label: 'Admin Portal', to: '/admin' },
  ];

  return (
    <>
      <div style={S.wrapper}>
        <div style={S.pill} ref={dropdownRef}>

          {/* ── Logo ── */}
          <div style={S.logoArea}>
            <Logo size="sm" showSubtext={false} />
          </div>

          {/* ── Desktop Nav ── */}
          <nav style={{ ...S.desktopNav }} className="navbar-desktop">
            {mainLinks.map(({ label, to, badge }) => (
              <Link key={to} to={to} style={S.navLink(isActive(to))}>
                {label}
                {badge && <span style={S.badge}>{badge}</span>}
              </Link>
            ))}

          </nav>

          {/* ── Right Actions ── */}
          <div style={S.actions}>
            {/* Icon shortcuts — hidden on small */}
            <div className="navbar-icons">
              <Link to="/admin" title="Admin Panel">
                <button style={{ ...S.iconBtn, color: '#3b82f6' }}>
                  <Shield size={16} />
                </button>
              </Link>
            </div>

            {/* CTA — hidden on small */}
            <div className="navbar-cta">
              <Link to="/contact" style={S.ctaBtn}>
                Get Started
              </Link>
            </div>

            {/* Hamburger — shown on small */}
            <button
              className="navbar-hamburger"
              onClick={() => setMobileOpen(true)}
              style={{
                ...S.iconBtn,
                width: '2.5rem', height: '2.5rem',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      {mobileOpen && (
        <>
          <div style={S.backdrop} onClick={() => setMobileOpen(false)} />
          <div style={S.drawer}>
            {/* drawer header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <Logo size="sm" showSubtext />
              <button
                onClick={() => setMobileOpen(false)}
                style={{ ...S.iconBtn, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <X size={16} />
              </button>
            </div>

            {/* links */}
            {mobileLinks.map(({ label, to }) => (
              <Link key={to} to={to} style={S.drawerLink}>
                {label}
              </Link>
            ))}

            {/* Solutions accordion */}
            <button
              onClick={() => setMobileExpanded(v => !v)}
              style={{
                ...S.drawerLink, display: 'flex', alignItems: 'center',
                justifyContent: 'space-between', background: 'transparent',
                border: 'none', borderBottom: '1px solid rgba(255,255,255,0.06)',
                cursor: 'pointer', width: '100%',
              }}
            >
              <span>Solutions Hub</span>
              <ChevronDown size={14} style={{ transform: mobileExpanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>

            {/* CTA */}
            <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
              <Link to="/contact" style={{
                ...S.ctaBtn, width: '100%',
                justifyContent: 'center', borderRadius: '0.75rem',
                padding: '0.875rem',
              }}>
                Get Started — Join Dev Infinity
              </Link>
            </div>
          </div>
        </>
      )}

      {/* ── Responsive CSS ── */}
      <style>{`
        .navbar-desktop { display: flex !important; }
        .navbar-icons   { display: flex !important; gap: 0.25rem; align-items: center; }
        .navbar-cta     { display: flex !important; }
        .navbar-hamburger { display: none !important; }

        @media (max-width: 1023px) {
          .navbar-desktop { display: none !important; }
          .navbar-icons   { display: none !important; }
          .navbar-cta     { display: none !important; }
          .navbar-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
