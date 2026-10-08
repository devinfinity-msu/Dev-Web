import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Cpu, Activity, ArrowRight } from 'lucide-react';
import './TerminalLoader.css';

const HUD_BOOT_LOGS = [
  { tag: 'SYS', badge: 'hud-badge-core', text: 'INITIALIZING DEVINFINITY_QUANTUM_HUD v2.4...' },
  { tag: 'IO', badge: 'hud-badge-info', text: 'MOUNTING VIRTUAL GRAPHICS PIPELINE & THREE.JS CANVAS... [OK]' },
  { tag: 'NET', badge: 'hud-badge-sync', text: 'CONNECTING TO CSE KALABHAVAN APEX NODE... [ESTABLISHED]' },
  { tag: 'SEC', badge: 'hud-badge-ok', text: 'VERIFYING PEER-TO-PEER ENCRYPTION CERTIFICATES... [VERIFIED]' },
  { tag: 'MOD', badge: 'hud-badge-info', text: 'PRE-FETCHING CLUB DIRECTORY, HACKATHONS & REPOSITORIES... [OK]' },
  { tag: 'NEUR', badge: 'hud-badge-sync', text: 'STREAMING TELEMETRY & QUANTUM COMPONENT MATRICES... [ACTIVE]' },
  { tag: 'READY', badge: 'hud-badge-ok', text: 'ALL SYSTEMS NOMINAL. ENGAGING HOLOGRAPHIC ECOSYSTEM...' },
];

const TerminalLoader = ({ onComplete }) => {
  const [logs, setLogs] = useState([]);
  const [progress, setProgress] = useState(0);
  const [memoryHex, setMemoryHex] = useState('0x3FA9');
  const [cpuUsage, setCpuUsage] = useState(42);
  const [done, setDone] = useState(false);

  const handleComplete = useCallback(() => {
    if (!done) {
      setDone(true);
      setTimeout(onComplete, 600);
    }
  }, [done, onComplete]);

  useEffect(() => {
    let currentLog = 0;

    const logInterval = setInterval(() => {
      if (currentLog >= HUD_BOOT_LOGS.length) {
        clearInterval(logInterval);
        return;
      }
      setLogs((prev) => [...prev, HUD_BOOT_LOGS[currentLog]]);
      currentLog++;
    }, 320);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          handleComplete();
          return 100;
        }
        const jump = Math.floor(Math.random() * 12) + 6;
        return Math.min(prev + jump, 100);
      });
    }, 140);

    const telemetryInterval = setInterval(() => {
      setMemoryHex(
        `0x${Math.floor(Math.random() * 16777215)
          .toString(16)
          .toUpperCase()
          .padStart(6, '0')}`
      );
      setCpuUsage(Math.floor(35 + Math.random() * 30));
    }, 100);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
      clearInterval(telemetryInterval);
    };
  }, [handleComplete]);

  return (
    <motion.div
      className="hud-terminal-overlay"
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
      transition={{ duration: 0.65, ease: 'easeInOut' }}
    >
      {/* Background Cyber Accents */}
      <div className="hud-term-grid" />
      <div className="hud-term-scanline" />

      {/* Cyberdeck HUD Window */}
      <div className="hud-term-container">
        {/* Header */}
        <div className="hud-term-header">
          <div className="hud-term-dots">
            <div className="hud-term-dot" style={{ background: '#ef4444' }} />
            <div className="hud-term-dot" style={{ background: '#f59e0b' }} />
            <div className="hud-term-dot" style={{ background: '#10b981' }} />
          </div>

          <div className="hud-term-brand">
            <Terminal size={14} color="#06b6d4" />
            <span>DEVINFINITY_HUD // COCKPIT_BOOT_v2.4</span>
          </div>

          <div className="hud-term-telemetry">
            <span>MEM: {memoryHex}</span>
            <span style={{ color: '#10b981' }}>ONLINE</span>
          </div>
        </div>

        {/* Main Body */}
        <div className="hud-term-body">
          {/* Boot Logs */}
          <div className="hud-term-logs">
            {logs.map((log, index) => (
              <motion.div
                key={index}
                className="hud-term-line"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  color:
                    index === HUD_BOOT_LOGS.length - 1
                      ? '#38bdf8'
                      : 'rgba(255, 255, 255, 0.7)',
                  textShadow:
                    index === HUD_BOOT_LOGS.length - 1
                      ? '0 0 12px rgba(56, 189, 248, 0.7)'
                      : 'none',
                }}
              >
                <span className={`hud-badge-tag ${log.badge}`}>[{log.tag}]</span>
                <span>{log.text}</span>
              </motion.div>
            ))}

            {/* Glowing Blinking Cursor */}
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.7 }}
              style={{
                width: '8px',
                height: '1.1rem',
                background: '#06b6d4',
                boxShadow: '0 0 10px #06b6d4',
                marginTop: '0.2rem',
              }}
            />
          </div>

          {/* Right Telemetry Radar & Gauges */}
          <div className="hud-term-widgets">
            {/* Mini Radar */}
            <div>
              <div style={{ textAlign: 'center', fontSize: '0.625rem', color: 'rgba(6, 182, 212, 0.7)', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>
                RADAR // NODE_LATTICE
              </div>
              <div className="hud-radar-mini">
                <div className="hud-radar-sweep" />
                <div style={{ width: '4px', height: '4px', background: '#38bdf8', borderRadius: '50%', boxShadow: '0 0 8px #38bdf8' }} />
              </div>
            </div>

            {/* Hardware Telemetry */}
            <div className="hud-meter-box">
              <div className="hud-meter-row">
                <span>CPU WORKLOAD</span>
                <span style={{ color: '#06b6d4' }}>{cpuUsage}%</span>
              </div>
              <div className="hud-meter-fill" style={{ width: `${cpuUsage}%` }} />

              <div className="hud-meter-row" style={{ marginTop: '0.6rem' }}>
                <span>ENCRYPTION</span>
                <span style={{ color: '#10b981' }}>256-BIT</span>
              </div>
              <div className="hud-meter-fill" style={{ width: '92%', background: 'linear-gradient(90deg, #10b981, #06b6d4)' }} />
            </div>
          </div>
        </div>

        {/* Footer Progress & Quick Skip */}
        <div className="hud-term-footer">
          <div className="hud-term-bar-row">
            <span>[ SYSTEM SYNCHRONIZATION ]</span>
            <span style={{ color: '#06b6d4' }}>{progress}%</span>
          </div>

          <div className="hud-term-track">
            <motion.div
              className="hud-term-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="hud-term-actions">
            <button
              type="button"
              className="hud-term-skip"
              onClick={handleComplete}
            >
              <span>Instant Launch →</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TerminalLoader;
