import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Activity,
  ArrowRight,
  Cpu,
  Radio,
  ShieldAlert,
  Terminal,
  Zap,
  Layers,
  Sparkles
} from 'lucide-react';
import { clubInfo } from '../../data/mockData';
import './LoadingPage.css';

const PHASES = [
  { threshold: 0, text: 'PHASE 01 // CALIBRATING HOLOGRAPHIC PROJECTION MATRICES' },
  { threshold: 25, text: 'PHASE 02 // SYNCHRONIZING CSE DEPARTMENT KNOWLEDGE GRAPH' },
  { threshold: 50, text: 'PHASE 03 // STREAMING INNOVATION PROTOCOLS & EVENT CORES' },
  { threshold: 75, text: 'PHASE 04 // FINALIZING QUANTUM INTERFACE CHANNELS' },
  { threshold: 100, text: 'SYSTEM READY // HOLOGRAPHIC HUD ENGAGED — WELCOME' },
];

export const LoadingPage = () => {
  const [progress, setProgress] = useState(0);
  const [hexStream, setHexStream] = useState('0x4F8A');
  const [bandwidth, setBandwidth] = useState('4.8 GB/S');
  const navigate = useNavigate();

  useEffect(() => {
    // Progress increment timer
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => navigate('/'), 600);
          return 100;
        }
        const delta = Math.floor(Math.random() * 8) + 6;
        return Math.min(prev + delta, 100);
      });
    }, 180);

    // Live telemetry ticker
    const hexTimer = setInterval(() => {
      setHexStream(
        `0x${Math.floor(Math.random() * 65535)
          .toString(16)
          .toUpperCase()
          .padStart(4, '0')}`
      );
      setBandwidth(`${(4.2 + Math.random() * 1.6).toFixed(1)} GB/S`);
    }, 120);

    return () => {
      clearInterval(timer);
      clearInterval(hexTimer);
    };
  }, [navigate]);

  // Current diagnostic phase message
  const currentPhase = [...PHASES]
    .reverse()
    .find((p) => progress >= p.threshold)?.text;

  return (
    <div className="hud-loading-screen">
      {/* Background Overlays */}
      <div className="hud-grid-overlay" />
      <div className="hud-scanline" />
      <div className="hud-beam-sweep" />

      {/* Tactical Corner Brackets */}
      <div className="hud-corner-bracket hud-corner-tl" />
      <div className="hud-corner-bracket hud-corner-tr" />
      <div className="hud-corner-bracket hud-corner-bl" />
      <div className="hud-corner-bracket hud-corner-br" />

      {/* ── Top System Header ── */}
      <header className="hud-header">
        <div className="hud-header-left">
          <div className="hud-pulse-dot" />
          <div>
            <div className="hud-header-title">DEV INFINITY // QUANTUM_OS</div>
            <div className="hud-header-sub">CSE DEPT • FTE • MSU BARODA</div>
          </div>
        </div>

        <div className="hud-header-right">
          <span className="hud-node-badge">NODE: VADODARA_01</span>
          <span>LATENCY: 12ms</span>
          <span>MEM: {hexStream}</span>
        </div>
      </header>

      {/* ── Central Holographic HUD Stage ── */}
      <main className="hud-center-stage">
        {/* Left Telemetry Box */}
        <aside className="hud-telemetry-side">
          <div className="hud-telemetry-card">
            <div className="hud-telemetry-label">CORE ARCHITECTURE</div>
            <div className="hud-telemetry-value">QUANTUM_V1</div>
            <div style={{ fontSize: '0.625rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.25rem' }}>
              16/16 CORES ACTIVE
            </div>
          </div>

          <div className="hud-telemetry-card">
            <div className="hud-telemetry-label">TELEMETRY LINK</div>
            <div className="hud-telemetry-value">{bandwidth}</div>
            <div className="hud-equalizer">
              {[40, 75, 55, 90, 60, 85, 45, 95, 70, 50].map((h, i) => (
                <div
                  key={i}
                  className="hud-eq-bar"
                  style={{
                    height: `${h}%`,
                    animationDelay: `${i * 0.12}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </aside>

        {/* Central Reactor & Identity */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="hud-reactor-wrapper">
            {/* SVG Holographic HUD Reticle Rings */}
            <svg
              className="hud-reticle-svg"
              viewBox="0 0 300 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Segmented Ring */}
              <circle
                className="hud-ring-outer"
                cx="150"
                cy="150"
                r="138"
                stroke="rgba(6, 182, 212, 0.45)"
                strokeWidth="1.5"
                strokeDasharray="16 12 6 12"
              />
              <circle
                className="hud-ring-outer"
                cx="150"
                cy="150"
                r="144"
                stroke="rgba(59, 130, 246, 0.25)"
                strokeWidth="1"
                strokeDasharray="4 8"
              />

              {/* Angle Tick Marks */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                <line
                  key={deg}
                  x1="150"
                  y1="6"
                  x2="150"
                  y2="16"
                  stroke="rgba(6, 182, 212, 0.8)"
                  strokeWidth="2"
                  transform={`rotate(${deg} 150 150)`}
                />
              ))}

              {/* Middle Counter-Rotating Ring */}
              <circle
                className="hud-ring-middle"
                cx="150"
                cy="150"
                r="112"
                stroke="rgba(14, 165, 233, 0.6)"
                strokeWidth="2"
                strokeDasharray="32 18 10 18"
              />

              {/* Inner Glowing Ring */}
              <circle
                className="hud-ring-inner"
                cx="150"
                cy="150"
                r="88"
                stroke="rgba(59, 130, 246, 0.75)"
                strokeWidth="1.5"
                strokeDasharray="8 6"
              />

              {/* Radar Crosshair lines */}
              <line
                x1="45"
                y1="150"
                x2="70"
                y2="150"
                stroke="rgba(6, 182, 212, 0.6)"
                strokeWidth="1.5"
              />
              <line
                x1="230"
                y1="150"
                x2="255"
                y2="150"
                stroke="rgba(6, 182, 212, 0.6)"
                strokeWidth="1.5"
              />
              <line
                x1="150"
                y1="45"
                x2="150"
                y2="70"
                stroke="rgba(6, 182, 212, 0.6)"
                strokeWidth="1.5"
              />
              <line
                x1="150"
                y1="230"
                x2="150"
                y2="255"
                stroke="rgba(6, 182, 212, 0.6)"
                strokeWidth="1.5"
              />
            </svg>

            {/* Central Holographic Core Sphere */}
            <div className="hud-core-sphere">
              <img
                src="/dev logo.png"
                alt="Dev Infinity Official Logo"
                className="hud-core-logo"
              />
              <div className="hud-logo-scanner" />
            </div>
          </div>

          {/* Identity Typography */}
          <div className="hud-identity">
            <h1 className="hud-title">
              DEV <span className="hud-title-gradient">INFINITY</span>
            </h1>

            <div className="hud-dept-badge">
              <Zap size={13} color="#06b6d4" />
              <span>DEPARTMENT OF CSE • FTE • MSU BARODA</span>
            </div>

            <div className="hud-tagline">"{clubInfo.tagline}"</div>
          </div>
        </div>

        {/* Right Telemetry Box */}
        <aside className="hud-telemetry-side">
          <div className="hud-telemetry-card">
            <div className="hud-telemetry-label">SECURITY PROTOCOL</div>
            <div className="hud-telemetry-value">AES-256-GCM</div>
            <div style={{ fontSize: '0.625rem', color: '#10b981', marginTop: '0.25rem' }}>
              ENCRYPTED CHANNEL
            </div>
          </div>

          <div className="hud-telemetry-card">
            <div className="hud-telemetry-label">ECOSYSTEM STATUS</div>
            <div className="hud-telemetry-value">STABLE // SYNCED</div>
            <div className="hud-equalizer">
              {[60, 45, 80, 50, 95, 40, 75, 60, 90, 70].map((h, i) => (
                <div
                  key={i}
                  className="hud-eq-bar"
                  style={{
                    height: `${h}%`,
                    animationDelay: `${i * 0.15}s`,
                    background: 'linear-gradient(to top, rgba(59, 130, 246, 0.3), #38bdf8)',
                  }}
                />
              ))}
            </div>
          </div>
        </aside>
      </main>

      {/* ── Lower Deck: Progress & Diagnostics ── */}
      <footer className="hud-lower-deck">
        {/* Phase Status */}
        <div className="hud-phase-status">
          <Activity size={14} className="hud-pulse-dot" style={{ width: 14, height: 14, background: 'transparent' }} />
          <span>{currentPhase}</span>
        </div>

        {/* Progress Bar Frame */}
        <div className="hud-progress-frame">
          <div className="hud-progress-meta">
            <span>[ SYSTEM SYNCHRONIZATION ]</span>
            <span className="hud-progress-pct">{progress}%</span>
          </div>

          <div className="hud-progress-track">
            <div
              className="hud-progress-fill"
              style={{ width: `${progress}%` }}
            >
              <div className="hud-progress-spark" />
            </div>
          </div>

          {/* Micro Segment Ticks */}
          <div className="hud-segments-grid">
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className={`hud-segment-tick ${progress >= (i + 1) * 4.16 ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="hud-actions">
          <button
            type="button"
            className="hud-bypass-btn"
            onClick={() => navigate('/')}
          >
            <span>Bypass Sequence</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default LoadingPage;
