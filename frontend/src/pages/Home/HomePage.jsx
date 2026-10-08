import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChevronRight, Code2, Users, Trophy, Activity,
  Layers, Star, Zap, ArrowRight, GitBranch, Terminal,
} from 'lucide-react';
import { clubInfo, quickStats } from '../../data/mockData';
import { PageContainer } from '../../components/layout/PageContainer';
import { HeroTerminalVisual } from '../../components/home/HeroTerminalVisual';

/* ─── Animation variants ──────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

/* ─── Data ────────────────────────────────────────────── */
const STATS = [
  { label: 'Active Members',    value: '250+', icon: Users,    color: '#3b82f6' },
  { label: 'Events & Workshops', value: '35+',  icon: Activity, color: '#06b6d4' },
  { label: 'Projects Shipped',  value: '20+',  icon: Layers,   color: '#8b5cf6' },
  { label: 'Hackathon Wins',    value: '12+',  icon: Trophy,   color: '#f59e0b' },
];

const FEATURES = [
  {
    icon: Code2,
    title: 'Learn by Building',
    desc: 'Stop watching tutorials. Build real, production-ready software in guided project cohorts with peer review.',
    badge: '01',
    color: '#3b82f6',
  },
  {
    icon: Users,
    title: 'Compete & Collaborate',
    desc: 'Join hackathon teams, compete in coding challenges, and grow alongside the best CSE developers at MSU Baroda.',
    badge: '02',
    color: '#06b6d4',
  },
  {
    icon: Trophy,
    title: 'Career Accelerator',
    desc: 'Direct mentorship from alumni, resume reviews, open-source contributions, and interview prep for top companies.',
    badge: '03',
    color: '#8b5cf6',
  },
];

/* ─── AnimatedSection wrapper ─────────────────────────── */
const AnimSection = ({ children, delay = 0, style = {} }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      custom={delay}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      style={style}
    >
      {children}
    </motion.div>
  );
};

/* ─── Stat Card ───────────────────────────────────────── */
const StatCard = ({ icon: Icon, value, label, color, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.03, y: -5 }}
      style={{
        position: 'relative', borderRadius: '1rem',
        background: 'rgba(17,24,39,0.8)',
        border: '1px solid rgba(255,255,255,0.07)',
        padding: '1.5rem', textAlign: 'center',
        overflow: 'hidden', cursor: 'default',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      onHoverStart={e => {
        e.target.style.borderColor = color + '55';
        e.target.style.boxShadow = `0 0 30px ${color}18`;
      }}
      onHoverEnd={e => {
        e.target.style.borderColor = 'rgba(255,255,255,0.07)';
        e.target.style.boxShadow = 'none';
      }}
    >
      {/* Icon */}
      <div style={{
        margin: '0 auto 0.75rem',
        width: '2.75rem', height: '2.75rem', borderRadius: '0.875rem',
        background: color + '18',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Icon size={18} style={{ color }} />
      </div>
      {/* Value */}
      <div style={{
        fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
        fontWeight: 800, lineHeight: 1,
        background: `linear-gradient(135deg, #fff 20%, ${color} 100%)`,
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        marginBottom: '0.375rem',
      }}>
        {value}
      </div>
      <div style={{
        fontSize: '0.6875rem', fontWeight: 700,
        letterSpacing: '0.1em', textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.4)',
      }}>
        {label}
      </div>
      {/* Bottom accent */}
      <motion.div
        initial={{ width: 0 }}
        whileHover={{ width: '66%' }}
        style={{
          position: 'absolute', bottom: 0,
          left: '50%', transform: 'translateX(-50%)',
          height: '2px',
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          borderRadius: '9999px',
          transition: 'width 0.5s ease',
        }}
      />
    </motion.div>
  );
};

/* ─── Feature Card ────────────────────────────────────── */
const FeatureCard = ({ icon: Icon, title, desc, badge, color, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.55 }}
      whileHover={{ y: -8 }}
      style={{
        position: 'relative', borderRadius: '1.25rem',
        background: 'rgba(11,15,25,0.9)',
        border: '1px solid rgba(255,255,255,0.07)',
        padding: '2rem', overflow: 'hidden',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        cursor: 'default',
      }}
      onHoverStart={e => {
        e.target.style.borderColor = color + '55';
        e.target.style.boxShadow = `0 0 40px ${color}14`;
      }}
      onHoverEnd={e => {
        e.target.style.borderColor = 'rgba(255,255,255,0.07)';
        e.target.style.boxShadow = 'none';
      }}
    >
      {/* Top gradient line on hover */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: `linear-gradient(90deg, transparent, ${color}88, transparent)`,
        opacity: 0, transition: 'opacity 0.4s ease',
      }} className="feature-top-line" />

      {/* Corner glow */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '10rem', height: '10rem',
        background: color + '08',
        borderRadius: '9999px', filter: 'blur(50px)',
        pointerEvents: 'none',
      }} />

      {/* Badge number watermark */}
      <div style={{
        position: 'absolute', top: '1.25rem', right: '1.5rem',
        fontSize: '4rem', fontWeight: 900,
        color: 'rgba(255,255,255,0.035)',
        userSelect: 'none', lineHeight: 1,
        fontFamily: 'var(--font-family)',
      }}>
        {badge}
      </div>

      {/* Icon */}
      <div style={{
        width: '3.5rem', height: '3.5rem', borderRadius: '1rem',
        background: color + '15',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '1.5rem',
        transition: 'background 0.3s, box-shadow 0.3s',
      }}>
        <Icon size={22} style={{ color }} />
      </div>

      <h3 style={{
        fontSize: '1.125rem', fontWeight: 700,
        color: '#fff', marginBottom: '0.75rem',
        transition: 'color 0.3s ease',
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: '0.875rem', lineHeight: 1.7,
        color: 'rgba(255,255,255,0.45)',
      }}>
        {desc}
      </p>

      {/* Learn more hint */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '0.25rem',
        marginTop: '1.5rem', fontSize: '0.75rem',
        color: color, fontWeight: 600, opacity: 0,
        transition: 'opacity 0.3s ease',
      }} className="feature-learn-more">
        <Star size={11} />
        <span>Learn more</span>
        <ChevronRight size={11} />
      </div>
    </motion.div>
  );
};

/* ═══════════════════════════════════════════════════════
   HOMEPAGE
═══════════════════════════════════════════════════════ */
export const HomePage = () => {
  return (
    <PageContainer>
      <div style={{
        display: 'flex', flexDirection: 'column',
        gap: 'clamp(4rem, 8vw, 7rem)',
        maxWidth: '80rem', margin: '0 auto',
        padding: '2rem 1.5rem 4rem',
      }}>

      {/* ══ HERO SECTION ══════════════════════════════ */}
      <section style={{
        minHeight: '75vh',
        display: 'flex', flexWrap: 'wrap',
        alignItems: 'center', justifyContent: 'space-between',
        gap: '2.5rem',
      }}>
        {/* Left: Text */}
        <div style={{ flex: '1 1 320px', minWidth: 0, position: 'relative', zIndex: 1 }}>

          {/* Version badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.25rem 0.875rem', borderRadius: '9999px',
              border: '1px solid rgba(59,130,246,0.3)',
              background: 'rgba(59,130,246,0.07)',
              fontSize: '0.6875rem', fontWeight: 700,
              letterSpacing: '0.08em', color: '#3b82f6',
              marginBottom: '1.5rem',
              fontFamily: 'var(--font-mono)',
            }}
          >
            <Zap size={11} />
            OFFICIAL WEB DEV CLUB · CSE · MSU BARODA
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            style={{
              fontSize: 'clamp(2.75rem, 7vw, 5.5rem)',
              fontWeight: 800, lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: '#f3f4f6',
              marginBottom: '1.25rem',
            }}
          >
            {clubInfo.heroHeading.split(' ').slice(0, 2).join(' ')}<br />
            <span style={{
              background: 'linear-gradient(135deg, #3b82f6 10%, #06b6d4 90%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 24px rgba(59,130,246,0.5))',
            }}>
              Into Innovation.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            style={{
              fontSize: '1.0625rem', lineHeight: 1.7,
              color: 'rgba(255,255,255,0.5)',
              maxWidth: '28rem', marginBottom: '2rem',
            }}
          >
            {clubInfo.heroDescription}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', marginBottom: '2.5rem' }}
          >
            <Link
              to="/events"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.75rem 1.625rem', borderRadius: '9999px',
                background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                color: '#fff', fontWeight: 700, fontSize: '0.9375rem',
                textDecoration: 'none',
                boxShadow: '0 0 22px rgba(59,130,246,0.38)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 38px rgba(59,130,246,0.55)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 0 22px rgba(59,130,246,0.38)'; }}
            >
              Start Your Journey <ChevronRight size={16} />
            </Link>

            <Link
              to="/projects"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.75rem 1.625rem', borderRadius: '9999px',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.04)',
                color: 'rgba(255,255,255,0.8)', fontWeight: 600, fontSize: '0.9375rem',
                textDecoration: 'none',
                transition: 'border-color 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
            >
              Explore Projects
            </Link>
          </motion.div>

          {/* Terminal snippet */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            style={{
              background: '#0a0d16',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '0.75rem',
              padding: '1rem 1.25rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8125rem',
              maxWidth: '28rem',
              boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
            }}
          >
            {/* Window dots */}
            <div style={{ display: 'flex', gap: '0.375rem', marginBottom: '0.75rem' }}>
              {['#ef4444', '#f59e0b', '#22c55e'].map((c, i) => (
                <div key={i} style={{ width: '10px', height: '10px', borderRadius: '9999px', background: c, opacity: 0.75 }} />
              ))}
            </div>
            {[
              ['$', 'git clone', 'https://github.com/devinfinity-msu', '#60a5fa'],
              ['$', 'cd', 'dev-infinity', '#60a5fa'],
              ['$', 'npm run', 'innovate', '#3b82f6'],
            ].map(([prompt, cmd, arg, argColor], i) => (
              <p key={i} style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '0.25rem' }}>
                <span style={{ color: '#22c55e' }}>{prompt}</span>{' '}
                {cmd}{' '}
                <span style={{ color: argColor }}>{arg}</span>
              </p>
            ))}
            <p style={{ color: '#22c55e', marginTop: '0.5rem', fontWeight: 600 }}>
              ✓ Welcome to Dev Infinity. Let's build.
            </p>
          </motion.div>
        </div>

        {/* Right: Interactive Terminal & Tech Stack Visual */}
        <div style={{ flex: '1 1 360px', minWidth: 0, display: 'flex', justifyContent: 'center' }}>
          <HeroTerminalVisual />
        </div>
      </section>

      {/* ══ STATS SECTION ═════════════════════════════ */}
      <section>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
        }}>
          {STATS.map((s, i) => (
            <StatCard key={s.label} {...s} index={i} />
          ))}
        </div>
      </section>

      {/* ══ WHY JOIN SECTION ══════════════════════════ */}
      <section>
        <AnimSection delay={0} style={{ textAlign: 'center', maxWidth: '40rem', margin: '0 auto 3rem' }}>
          <span style={{
            display: 'inline-block',
            padding: '0.25rem 0.875rem', borderRadius: '9999px',
            border: '1px solid rgba(59,130,246,0.3)',
            background: 'rgba(59,130,246,0.06)',
            fontSize: '0.6875rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: '#3b82f6', marginBottom: '1.25rem',
            fontFamily: 'var(--font-mono)',
          }}>
            Why Join Dev Infinity?
          </span>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            fontWeight: 800, color: '#f3f4f6',
            letterSpacing: '-0.02em', lineHeight: 1.2,
            marginBottom: '1rem',
          }}>
            The ecosystem you need to{' '}
            <span style={{
              background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              level up.
            </span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, fontSize: '1rem' }}>
            We provide the tools, community, and real-world experience to scale your skills from basic syntax to production-ready architecture.
          </p>
        </AnimSection>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}>
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>
      </section>

      {/* ══ CTA STRIP ════════════════════════════════ */}
      <AnimSection delay={0.1}>
        <div style={{
          borderRadius: '1.5rem',
          border: '1px solid rgba(59,130,246,0.2)',
          background: 'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(6,182,212,0.07) 50%, rgba(139,92,246,0.08) 100%)',
          padding: 'clamp(2rem, 5vw, 3.5rem)',
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'center', justifyContent: 'space-between',
          gap: '1.5rem',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Glow */}
          <div style={{ position: 'absolute', top: '-4rem', right: '-4rem', width: '20rem', height: '20rem', background: 'radial-gradient(circle, rgba(59,130,246,0.12), transparent 70%)', borderRadius: '9999px', pointerEvents: 'none' }} />

          <div style={{ maxWidth: '32rem' }}>
            <div style={{
              fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: '#3b82f6', marginBottom: '0.75rem',
              fontFamily: 'var(--font-mono)',
            }}>
              🏆 DEV INFINITY CODESPRINT 2026
            </div>
            <h3 style={{
              fontSize: 'clamp(1.375rem, 3vw, 2rem)',
              fontWeight: 800, color: '#fff',
              letterSpacing: '-0.02em', lineHeight: 1.25,
              marginBottom: '0.625rem',
            }}>
              Annual Hackathon — Build, Compete & Win
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
              MSU Baroda's flagship dev event. 24 hours, real problems, real prizes. Open to all CSE FTE students.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flexShrink: 0 }}>
            <Link to="/events" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.875rem 1.75rem', borderRadius: '9999px',
              background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
              color: '#fff', fontWeight: 700, fontSize: '0.9375rem',
              textDecoration: 'none',
              boxShadow: '0 4px 18px rgba(59,130,246,0.4)',
              transition: 'transform 0.2s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; }}
            >
              View All Events <ArrowRight size={15} />
            </Link>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
              padding: '0.875rem 1.75rem', borderRadius: '9999px',
              border: '1px solid rgba(255,255,255,0.12)',
              background: 'rgba(255,255,255,0.04)',
              color: 'rgba(255,255,255,0.7)', fontWeight: 600, fontSize: '0.9375rem',
              textDecoration: 'none',
              transition: 'border-color 0.2s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </AnimSection>

      {/* Hover styles for feature cards */}
      <style>{`
        .feature-card:hover .feature-top-line { opacity: 1 !important; }
        .feature-card:hover .feature-learn-more { opacity: 0.8 !important; }
        .feature-card:hover h3 { color: var(--primary) !important; }
      `}</style>
      </div>
    </PageContainer>
  );
};

export default HomePage;
