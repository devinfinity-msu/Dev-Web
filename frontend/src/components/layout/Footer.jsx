import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../common/Logo';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../common/Icons';
import { clubInfo } from '../../data/mockData';
import {
  ArrowRight, MapPin, Mail, CheckCircle2,
  Users, Calendar, Code2, Trophy,
  Zap, Globe, BookOpen, Star,
} from 'lucide-react';

/* ════════════════════════════════════════════════════
   DESIGN TOKENS  (matches site dark/blue/cyan theme)
════════════════════════════════════════════════════ */
const C = {
  bg:        '#06080f',
  surface:   '#0b0f19',
  card:      '#0f1624',
  border:    'rgba(255,255,255,0.07)',
  borderHi:  'rgba(59,130,246,0.35)',
  primary:   '#3b82f6',
  secondary: '#06b6d4',
  accent:    '#8b5cf6',
  grad:      'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
  gradAlt:   'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
  text:      'rgba(255,255,255,0.85)',
  muted:     'rgba(255,255,255,0.45)',
  dim:       'rgba(255,255,255,0.25)',
};

/* ── reusable inline-style helpers ──────────────────── */
const flex = (extra = {}) => ({ display: 'flex', ...extra });
const grid = (cols, gap = '1.5rem') => ({
  display: 'grid', gridTemplateColumns: cols, gap,
});

/* ════════════════════════════════════════════════════
   SUB-COMPONENTS
════════════════════════════════════════════════════ */

/* Animated gradient background orbs */
const Orbs = () => (
  <>
    <div style={{
      position: 'absolute', top: '-4rem', left: '10%',
      width: '30rem', height: '20rem', borderRadius: '9999px',
      background: 'radial-gradient(ellipse, rgba(59,130,246,0.10) 0%, transparent 70%)',
      pointerEvents: 'none', filter: 'blur(40px)',
    }} />
    <div style={{
      position: 'absolute', top: '-2rem', right: '5%',
      width: '22rem', height: '14rem', borderRadius: '9999px',
      background: 'radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 70%)',
      pointerEvents: 'none', filter: 'blur(40px)',
    }} />
    <div style={{
      position: 'absolute', bottom: '8rem', left: '50%', transform: 'translateX(-50%)',
      width: '60rem', height: '8rem', borderRadius: '9999px',
      background: 'radial-gradient(ellipse, rgba(6,182,212,0.06) 0%, transparent 70%)',
      pointerEvents: 'none', filter: 'blur(50px)',
    }} />
  </>
);

/* Stat card */
const StatCard = ({ icon: Icon, value, label, color }) => (
  <div style={{
    ...flex({ alignItems: 'center', gap: '0.875rem' }),
    padding: '1.25rem 1.5rem',
    borderRadius: '1rem',
    background: C.card,
    border: `1px solid ${C.border}`,
    transition: 'border-color 0.2s ease',
  }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = color + '55'; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; }}
  >
    <div style={{
      width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem', flexShrink: 0,
      background: color + '18',
      ...flex({ alignItems: 'center', justifyContent: 'center' }),
    }}>
      <Icon size={18} style={{ color }} />
    </div>
    <div>
      <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: '0.75rem', color: C.muted, marginTop: '0.2rem', fontWeight: 500 }}>{label}</div>
    </div>
  </div>
);

/* Social button */
const SocialBtn = ({ href, children, label }) => (
  <a
    href={href} target="_blank" rel="noreferrer" aria-label={label}
    style={{
      width: '2.25rem', height: '2.25rem', borderRadius: '9999px',
      border: `1px solid ${C.border}`,
      background: 'rgba(255,255,255,0.04)',
      color: C.muted,
      ...flex({ alignItems: 'center', justifyContent: 'center' }),
      textDecoration: 'none', transition: 'all 0.15s ease',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = C.primary + '88';
      e.currentTarget.style.color = '#fff';
      e.currentTarget.style.background = C.primary + '18';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = C.border;
      e.currentTarget.style.color = C.muted;
      e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
    }}
  >
    {children}
  </a>
);

/* Link item */
const NavLink = ({ to, href, children }) => {
  const style = {
    display: 'block', textDecoration: 'none',
    fontSize: '0.875rem', color: C.muted,
    padding: '0.3rem 0', lineHeight: 1.5,
    transition: 'color 0.15s ease',
  };
  const on = e => { e.currentTarget.style.color = C.primary; };
  const off = e => { e.currentTarget.style.color = C.muted; };
  if (href) return <a href={href} target="_blank" rel="noreferrer" style={style} onMouseEnter={on} onMouseLeave={off}>{children}</a>;
  return <Link to={to} style={style} onMouseEnter={on} onMouseLeave={off}>{children}</Link>;
};

/* ════════════════════════════════════════════════════
   MAIN FOOTER
════════════════════════════════════════════════════ */
export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const onSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 6000);
  };

  return (
    <footer style={{
      position: 'relative', overflow: 'hidden',
      background: C.bg,
      borderTop: `1px solid ${C.border}`,
      fontFamily: 'var(--font-family)',
    }}>
      <Orbs />

      {/* ══════════════════════════════════════════
          SECTION 1 — JOIN CTA BANNER (full-width)
      ══════════════════════════════════════════ */}
      <div style={{
        position: 'relative', zIndex: 1,
        background: `linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(6,182,212,0.08) 50%, rgba(139,92,246,0.10) 100%)`,
        borderBottom: `1px solid ${C.border}`,
        padding: '3.5rem 1.5rem',
        textAlign: 'center',
      }}>
        {/* decorative top line */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          marginBottom: '1.5rem',
        }}>
          <div style={{ height: '1px', width: '3rem', background: C.grad }} />
          <span style={{
            fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: C.primary,
          }}>
            ✦ Official CSE Club • MSU Baroda ✦
          </span>
          <div style={{ height: '1px', width: '3rem', background: C.grad }} />
        </div>

        <h2 style={{
          fontSize: 'clamp(1.75rem, 4vw, 3rem)',
          fontWeight: 800, color: '#fff',
          letterSpacing: '-0.03em', lineHeight: 1.2,
          marginBottom: '1rem', maxWidth: '42rem', margin: '0 auto 1rem',
        }}>
          Build with us. <span style={{ background: C.grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Grow together.</span>
        </h2>

        <p style={{
          color: C.muted, maxWidth: '36rem', margin: '0 auto 2rem',
          fontSize: '1rem', lineHeight: 1.6,
        }}>
          Join the premier student developer community at FTE, MSU Baroda — workshops, hackathons, open-source & more.
        </p>

        <div style={{ ...flex({ justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }) }}>
          <Link to="/contact" style={{
            ...flex({ alignItems: 'center', gap: '0.5rem' }),
            padding: '0.75rem 1.75rem', borderRadius: '9999px',
            background: C.grad, color: '#fff',
            fontWeight: 700, fontSize: '0.9375rem', textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(59,130,246,0.35)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(59,130,246,0.45)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(59,130,246,0.35)'; }}
          >
            <Zap size={15} /> Join Dev Infinity
          </Link>
          <Link to="/projects" style={{
            ...flex({ alignItems: 'center', gap: '0.5rem' }),
            padding: '0.75rem 1.75rem', borderRadius: '9999px',
            border: `1px solid ${C.border}`, color: C.text,
            fontWeight: 600, fontSize: '0.9375rem', textDecoration: 'none',
            background: 'rgba(255,255,255,0.04)',
            transition: 'border-color 0.2s ease',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = C.borderHi; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; }}
          >
            <Globe size={15} /> Explore Projects
          </Link>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          SECTION 2 — STATS ROW
      ══════════════════════════════════════════ */}
      <div style={{ position: 'relative', zIndex: 1, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '2.25rem 1.5rem' }}>
          <div style={{ ...grid('repeat(4,1fr)', '1rem') }} className="footer-stats-grid">
            <StatCard icon={Users}    value="250+" label="Active Members"    color={C.primary} />
            <StatCard icon={Calendar} value="35+"  label="Events & Workshops" color={C.secondary} />
            <StatCard icon={Code2}    value="20+"  label="Projects Shipped"   color={C.accent} />
            <StatCard icon={Trophy}   value="12+"  label="Hackathon Wins"     color="#f59e0b" />
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          SECTION 3 — NEWSLETTER STRIP
      ══════════════════════════════════════════ */}
      <div style={{
        position: 'relative', zIndex: 1,
        borderBottom: `1px solid ${C.border}`,
        background: C.surface,
      }}>
        <div style={{
          maxWidth: '80rem', margin: '0 auto', padding: '2rem 1.5rem',
          ...flex({ alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }),
        }}>
          <div style={{ ...flex({ alignItems: 'center', gap: '1rem' }) }}>
            <div style={{
              width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem', flexShrink: 0,
              background: C.primary + '20',
              ...flex({ alignItems: 'center', justifyContent: 'center' }),
            }}>
              <Star size={16} style={{ color: C.primary }} />
            </div>
            <div>
              <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#fff', marginBottom: '0.125rem' }}>
                Stay in the loop
              </div>
              <div style={{ fontSize: '0.8125rem', color: C.muted }}>
                Tech insights, project showcases & workshop updates — weekly.
              </div>
            </div>
          </div>

          <form onSubmit={onSubscribe} style={{ ...flex({ alignItems: 'center', gap: '0.5rem' }), width: '100%', maxWidth: '26rem', flexShrink: 0 }}>
            {subscribed ? (
              <div style={{
                ...flex({ alignItems: 'center', gap: '0.5rem' }),
                height: '2.75rem', width: '100%', padding: '0 1rem', borderRadius: '9999px',
                background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)',
                color: '#34d399', fontSize: '0.875rem', fontWeight: 600,
              }}>
                <CheckCircle2 size={15} /> Thanks! You're in 🎉
              </div>
            ) : (
              <>
                <input
                  type="email" required value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  style={{
                    flex: 1, height: '2.75rem', padding: '0 1rem', borderRadius: '9999px',
                    border: `1px solid ${C.border}`, background: 'rgba(255,255,255,0.05)',
                    color: '#fff', fontSize: '0.875rem', outline: 'none',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={e => { e.target.style.borderColor = C.primary + '80'; }}
                  onBlur={e => { e.target.style.borderColor = C.border; }}
                />
                <button type="submit" style={{
                  ...flex({ alignItems: 'center', gap: '0.375rem' }),
                  height: '2.75rem', padding: '0 1.25rem', borderRadius: '9999px', border: 'none',
                  background: C.grad, color: '#fff', fontWeight: 700, fontSize: '0.875rem',
                  cursor: 'pointer', flexShrink: 0,
                  boxShadow: '0 4px 14px rgba(59,130,246,0.3)',
                  transition: 'opacity 0.2s',
                }}>
                  Subscribe <ArrowRight size={13} />
                </button>
              </>
            )}
          </form>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          SECTION 4 — MAIN BODY (brand + nav)
      ══════════════════════════════════════════ */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '3.5rem 1.5rem 2.5rem' }}>
          <div style={{ ...grid('2fr 1fr 1fr 1fr', '3rem') }} className="footer-main-grid">

            {/* ── Brand Column ── */}
            <div>
              <div style={{ marginBottom: '1.25rem' }}>
                <Logo size="md" linkToHome showSubtext />
              </div>

              <p style={{
                fontSize: '0.875rem', lineHeight: 1.7, color: C.muted,
                marginBottom: '1.5rem', maxWidth: '20rem',
              }}>
                The official Web Development Club of the Department of Computer Science &amp; Engineering, FTE, The M.S. University of Baroda. Empowering students to <em>Build. Innovate. Inspire.</em>
              </p>

              {/* info rows */}
              {[
                { Icon: MapPin, text: clubInfo.location },
                { Icon: Mail,   text: clubInfo.contactEmail },
              ].map(({ Icon, text }) => (
                <div key={text} style={{
                  ...flex({ alignItems: 'flex-start', gap: '0.5rem' }),
                  fontSize: '0.8125rem', color: C.muted, marginBottom: '0.625rem', lineHeight: 1.5,
                }}>
                  <Icon size={13} style={{ color: C.primary, flexShrink: 0, marginTop: '0.15rem' }} />
                  <span>{text}</span>
                </div>
              ))}

              {/* tech stack tags */}
              <div style={{ ...flex({ flexWrap: 'wrap', gap: '0.375rem' }), marginTop: '1.25rem' }}>
                {['React', 'Node.js', 'Express', 'Supabase', 'Vite'].map(t => (
                  <span key={t} style={{
                    padding: '0.2rem 0.625rem', borderRadius: '9999px',
                    fontSize: '0.6875rem', fontWeight: 600,
                    border: `1px solid ${C.border}`, color: C.dim,
                    background: 'rgba(255,255,255,0.03)',
                  }}>{t}</span>
                ))}
              </div>

              {/* socials */}
              <div style={{ ...flex({ gap: '0.5rem' }), marginTop: '1.5rem' }}>
                <SocialBtn href={clubInfo.socials.github} label="GitHub"><GithubIcon size={14} /></SocialBtn>
                <SocialBtn href={clubInfo.socials.linkedin} label="LinkedIn"><LinkedinIcon size={14} /></SocialBtn>
                <SocialBtn href={clubInfo.socials.instagram} label="Instagram"><InstagramIcon size={14} /></SocialBtn>
              </div>
            </div>

            {/* ── Quick Links ── */}
            <div>
              <div style={{
                fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: '#fff', marginBottom: '1.25rem',
                paddingBottom: '0.75rem', borderBottom: `1px solid ${C.border}`,
              }}>Quick Links</div>
              {[
                { label: 'Home', to: '/' },
                { label: 'Events & Workshops', to: '/events' },
                { label: 'Student Projects', to: '/projects' },
                { label: 'Technical Blogs', to: '/blog' },
                { label: 'Achievements', to: '/achievements' },
              ].map(l => <NavLink key={l.to} to={l.to}>{l.label}</NavLink>)}
            </div>

            {/* ── Hubs ── */}
            <div>
              <div style={{
                fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: '#fff', marginBottom: '1.25rem',
                paddingBottom: '0.75rem', borderBottom: `1px solid ${C.border}`,
              }}>Hubs & Portals</div>
              {[
                { label: 'Learning Hub', to: '/learning' },
                { label: 'Member Directory', to: '/team' },
                { label: 'Dev Resources', to: '/learning' },
                { label: 'Contact Support', to: '/contact' },
                { label: 'Admin Portal', to: '/admin' },
              ].map(l => <NavLink key={l.label} to={l.to}>{l.label}</NavLink>)}
            </div>

            {/* ── Institution ── */}
            <div>
              <div style={{
                fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: '#fff', marginBottom: '1.25rem',
                paddingBottom: '0.75rem', borderBottom: `1px solid ${C.border}`,
              }}>Institution</div>
              {[
                { label: 'Dept. of CSE, FTE', to: '/team' },
                { label: 'Faculty Advisors', to: '/team' },
                { label: 'MSU Baroda Official', href: 'https://www.msubaroda.ac.in' },
                { label: 'GitHub Organisation', href: clubInfo.socials.github },
                { label: 'LinkedIn Page', href: clubInfo.socials.linkedin },
              ].map(l => <NavLink key={l.label} to={l.to} href={l.href}>{l.label}</NavLink>)}

              {/* Tagline card */}
              <div style={{
                marginTop: '1.75rem', padding: '1rem',
                borderRadius: '0.875rem',
                background: `linear-gradient(135deg, rgba(59,130,246,0.10), rgba(139,92,246,0.08))`,
                border: `1px solid ${C.border}`,
              }}>
                <div style={{ ...flex({ alignItems: 'center', gap: '0.375rem' }), marginBottom: '0.375rem' }}>
                  <BookOpen size={12} style={{ color: C.secondary }} />
                  <span style={{ fontSize: '0.6875rem', color: C.secondary, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Our Motto
                  </span>
                </div>
                <div style={{ fontSize: '0.9375rem', fontWeight: 800, color: '#fff', lineHeight: 1.3 }}>
                  "{clubInfo.tagline}"
                </div>
                <div style={{ fontSize: '0.75rem', color: C.muted, marginTop: '0.25rem' }}>
                  — Dev Infinity, CSE FTE MSU Baroda
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          SECTION 5 — BOTTOM BAR
      ══════════════════════════════════════════ */}
      <div style={{
        position: 'relative', zIndex: 1,
        borderTop: `1px solid ${C.border}`,
      }}>
        <div style={{
          maxWidth: '80rem', margin: '0 auto', padding: '1.25rem 1.5rem',
          ...flex({ alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }),
        }}>
          <div style={{ fontSize: '0.75rem', color: C.dim }}>
            © {new Date().getFullYear()} {clubInfo.name} — Dept. of CSE, Faculty of Technology & Engineering, MSU Baroda. All rights reserved.
          </div>
          <div style={{ ...flex({ gap: '1.5rem' }) }}>
            {[
              { label: 'Privacy', to: '/contact' },
              { label: 'Contact', to: '/contact' },
              { label: 'Admin', to: '/admin' },
            ].map(({ label, to }) => (
              <Link key={label} to={to} style={{
                fontSize: '0.75rem', color: C.dim, textDecoration: 'none',
                transition: 'color 0.15s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.color = C.primary; }}
                onMouseLeave={e => { e.currentTarget.style.color = C.dim; }}
              >{label}</Link>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          SECTION 6 — WATERMARK
      ══════════════════════════════════════════ */}
      <div style={{
        position: 'relative', zIndex: 1,
        overflow: 'hidden', lineHeight: 0,
        pointerEvents: 'none', userSelect: 'none',
        opacity: 0.055,
      }}>
        <svg
          viewBox="0 0 2400 130"
          style={{ width: '100%', display: 'block' }}
          aria-hidden="true" preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="wmGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <text
            x="50%" y="115"
            textAnchor="middle" dominantBaseline="alphabetic"
            textLength="95%" lengthAdjust="spacing"
            fill="url(#wmGrad)"
            fontSize="168" fontWeight="900"
            fontFamily="var(--font-family, system-ui)"
            letterSpacing="-8"
          >
            DEV INFINITY
          </text>
        </svg>
      </div>

      {/* Responsive grid breakpoints */}
      <style>{`
        .footer-stats-grid { grid-template-columns: repeat(4,1fr) !important; }
        .footer-main-grid  { grid-template-columns: 2fr 1fr 1fr 1fr !important; }

        @media (max-width: 1024px) {
          .footer-stats-grid { grid-template-columns: repeat(2,1fr) !important; }
          .footer-main-grid  { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .footer-stats-grid { grid-template-columns: repeat(2,1fr) !important; }
          .footer-main-grid  { grid-template-columns: 1fr !important; }
        }
        footer a { text-decoration: none !important; }
      `}</style>
    </footer>
  );
};

export default Footer;
