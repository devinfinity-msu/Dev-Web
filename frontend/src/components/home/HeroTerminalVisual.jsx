import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Terminal, Cpu, Code2, GitBranch, Users, Trophy,
  CheckCircle2, Sparkles, Layers, ArrowUpRight, Copy, Check,
} from 'lucide-react';
import { clubInfo } from '../../data/mockData';

export const HeroTerminalVisual = () => {
  const [activeTab, setActiveTab] = useState('terminal');
  const [copied, setCopied] = useState(false);
  const [typingIndex, setTypingIndex] = useState(0);

  const terminalLines = [
    { type: 'cmd', text: 'git clone https://github.com/devinfinity-msu/web' },
    { type: 'out', text: 'Cloning into \'dev-infinity-msu\'... Done [OK]' },
    { type: 'cmd', text: 'cd dev-infinity && npm install' },
    { type: 'out', text: 'Installed 250+ packages in 1.2s' },
    { type: 'cmd', text: 'npm run dev:infinity' },
    { type: 'success', text: '✓ Dev Infinity v2026 ready at http://localhost:5173' },
    { type: 'highlight', text: '🚀 Welcome CSE FTE MSU Baroda developers!' },
  ];

  const techStack = [
    { name: 'React 19', category: 'Frontend', color: '#61dafb' },
    { name: 'Node.js', category: 'Backend', color: '#22c55e' },
    { name: 'TypeScript', category: 'Language', color: '#3178c6' },
    { name: 'Python & AI', category: 'ML / Data', color: '#f59e0b' },
    { name: 'Supabase', category: 'Database', color: '#3ecf8e' },
    { name: 'Tailwind CSS', category: 'Styling', color: '#06b6d4' },
    { name: 'Docker & Cloud', category: 'DevOps', color: '#3b82f6' },
    { name: 'Three.js / WebGL', category: '3D Graphics', color: '#8b5cf6' },
  ];

  // Auto-advance terminal typing lines
  useEffect(() => {
    if (typingIndex < terminalLines.length) {
      const timeout = setTimeout(() => {
        setTypingIndex((prev) => prev + 1);
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [typingIndex, terminalLines.length]);

  const handleCopyCommand = () => {
    navigator.clipboard.writeText('git clone https://github.com/devinfinity-msu/web');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>

      {/* Background ambient radial glows */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 70%)',
        borderRadius: '9999px', filter: 'blur(50px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '320px', height: '320px',
        background: 'radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 70%)',
        borderRadius: '9999px', filter: 'blur(35px)', pointerEvents: 'none',
      }} />

      {/* Main Glassmorphic Terminal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'relative', zIndex: 2,
          width: 'clamp(320px, 44vw, 540px)',
          borderRadius: '1.25rem',
          border: '1px solid rgba(59, 130, 246, 0.25)',
          background: 'rgba(11, 15, 25, 0.88)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          boxShadow: '0 0 50px rgba(59, 130, 246, 0.15), 0 25px 70px rgba(0, 0, 0, 0.7)',
          overflow: 'hidden',
        }}
      >
        {/* ── Window Title Bar ── */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0.875rem 1.25rem',
          background: 'rgba(255, 255, 255, 0.03)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
        }}>
          {/* Left Window Control Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <div style={{ width: '11px', height: '11px', borderRadius: '9999px', background: '#ef4444', opacity: 0.85 }} />
            <div style={{ width: '11px', height: '11px', borderRadius: '9999px', background: '#f59e0b', opacity: 0.85 }} />
            <div style={{ width: '11px', height: '11px', borderRadius: '9999px', background: '#22c55e', opacity: 0.85 }} />
          </div>

          {/* Interactive Navigation Tabs */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.25rem',
            background: 'rgba(0, 0, 0, 0.3)',
            padding: '0.2rem', borderRadius: '9999px',
            border: '1px solid rgba(255,255,255,0.06)',
          }}>
            {[
              { id: 'terminal', label: 'Terminal', icon: Terminal },
              { id: 'stack',    label: 'Tech Stack', icon: Cpu },
              { id: 'config',   label: 'Config',     icon: Code2 },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                  padding: '0.25rem 0.65rem', borderRadius: '9999px',
                  border: 'none', cursor: 'pointer',
                  fontSize: '0.7188rem', fontWeight: 600,
                  color: activeTab === id ? '#ffffff' : 'rgba(255,255,255,0.45)',
                  background: activeTab === id ? 'rgba(59, 130, 246, 0.3)' : 'transparent',
                  transition: 'all 0.15s ease',
                }}
              >
                <Icon size={12} style={{ color: activeTab === id ? '#38bdf8' : 'currentColor' }} />
                {label}
              </button>
            ))}
          </div>

          {/* Live System Indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
            <span style={{
              width: '7px', height: '7px', borderRadius: '9999px',
              background: '#22c55e', boxShadow: '0 0 8px #22c55e',
            }} />
            <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#22c55e', letterSpacing: '0.05em' }}>
              ONLINE
            </span>
          </div>
        </div>

        {/* ── Window Content Body ── */}
        <div style={{ padding: '1.25rem 1.5rem', minHeight: '230px' }}>
          <AnimatePresence mode="wait">

            {/* TAB 1: TERMINAL OUTPUT */}
            {activeTab === 'terminal' && (
              <motion.div
                key="tab-terminal"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.8125rem', lineHeight: 1.65 }}
              >
                {terminalLines.slice(0, typingIndex).map((line, idx) => (
                  <div key={idx} style={{ marginBottom: '0.35rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    {line.type === 'cmd' && (
                      <>
                        <span style={{ color: '#22c55e', fontWeight: 700 }}>$</span>
                        <span style={{ color: '#e2e8f0' }}>{line.text}</span>
                      </>
                    )}
                    {line.type === 'out' && (
                      <span style={{ color: 'rgba(255,255,255,0.45)', paddingLeft: '1rem' }}>
                        {line.text}
                      </span>
                    )}
                    {line.type === 'success' && (
                      <span style={{ color: '#38bdf8', fontWeight: 600 }}>
                        {line.text}
                      </span>
                    )}
                    {line.type === 'highlight' && (
                      <span style={{
                        color: '#f59e0b', fontWeight: 700,
                        background: 'rgba(245, 158, 11, 0.1)',
                        padding: '0.15rem 0.5rem', borderRadius: '0.375rem',
                        border: '1px solid rgba(245, 158, 11, 0.25)',
                        display: 'inline-block', marginTop: '0.25rem',
                      }}>
                        {line.text}
                      </span>
                    )}
                  </div>
                ))}

                {/* Blinking CLI Cursor */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem' }}>
                  <span style={{ color: '#22c55e', fontWeight: 700 }}>$</span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    style={{ display: 'inline-block', width: '8px', height: '16px', background: '#38bdf8' }}
                  />
                </div>

                {/* Action Bar */}
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  marginTop: '1.25rem', paddingTop: '0.875rem',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <span style={{ fontSize: '0.7188rem', color: 'rgba(255,255,255,0.4)' }}>
                    CSE FTE MSU Official Club
                  </span>
                  <button
                    onClick={handleCopyCommand}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                      padding: '0.25rem 0.65rem', borderRadius: '0.375rem',
                      border: '1px solid rgba(255,255,255,0.1)',
                      background: 'rgba(255,255,255,0.05)',
                      color: copied ? '#22c55e' : 'rgba(255,255,255,0.7)',
                      fontSize: '0.6875rem', cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {copied ? <Check size={11} /> : <Copy size={11} />}
                    {copied ? 'Copied!' : 'Copy Repo'}
                  </button>
                </div>
              </motion.div>
            )}

            {/* TAB 2: TECH STACK PILLS */}
            {activeTab === 'stack' && (
              <motion.div
                key="tab-stack"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
              >
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.75rem' }}>
                  Technologies we build with & teach in student cohorts:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {techStack.map((tech, i) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.04 }}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                        padding: '0.35rem 0.75rem', borderRadius: '9999px',
                        background: 'rgba(255,255,255,0.04)',
                        border: `1px solid ${tech.color}44`,
                        fontSize: '0.7813rem', fontWeight: 600, color: '#ffffff',
                      }}
                    >
                      <span style={{ width: '6px', height: '6px', borderRadius: '9999px', background: tech.color }} />
                      {tech.name}
                      <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', fontWeight: 400 }}>
                        • {tech.category}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* TAB 3: CLUB CONFIG */}
            {activeTab === 'config' && (
              <motion.div
                key="tab-config"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.7813rem', color: '#38bdf8' }}
              >
                <pre style={{ margin: 0, lineHeight: 1.6, color: '#e2e8f0' }}>
                  {`{
  "club": "Dev Infinity",
  "motto": "${clubInfo.tagline}",
  "department": "CSE, FTE, MSU Baroda",
  "activeMembers": 250,
  "eventsHosted": 35,
  "projectsShipped": 20,
  "status": "BUILDING_THE_FUTURE"
}`}
                </pre>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </motion.div>

      {/* Floating Badge 1: Top Right */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '-1rem', right: '-0.5rem', zIndex: 3,
          background: 'rgba(11, 15, 25, 0.92)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(59, 130, 246, 0.35)',
          borderRadius: '9999px',
          padding: '0.45rem 0.95rem',
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(59, 130, 246, 0.2)',
        }}
      >
        <Users size={14} style={{ color: '#38bdf8' }} />
        <span style={{ fontSize: '0.7813rem', fontWeight: 700, color: '#ffffff' }}>
          250+ Active Members
        </span>
      </motion.div>

      {/* Floating Badge 2: Bottom Left */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{
          position: 'absolute', bottom: '-1rem', left: '-0.5rem', zIndex: 3,
          background: 'rgba(11, 15, 25, 0.92)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(6, 182, 212, 0.35)',
          borderRadius: '9999px',
          padding: '0.45rem 0.95rem',
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(6, 182, 212, 0.2)',
        }}
      >
        <GitBranch size={14} style={{ color: '#06b6d4' }} />
        <span style={{ fontSize: '0.7813rem', fontWeight: 700, color: '#ffffff' }}>
          20+ Open Repos
        </span>
      </motion.div>

    </div>
  );
};

export default HeroTerminalVisual;
