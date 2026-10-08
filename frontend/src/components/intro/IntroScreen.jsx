import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { clubInfo } from '../../data/mockData';
import './IntroScreen.css';

const IntroScreen = ({ onExplore, onSkip }) => {
  // Allow user to hit Enter key for immediate launch
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        onExplore();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onExplore]);

  const handleSkip = () => {
    if (onSkip) {
      onSkip();
    } else {
      onExplore();
    }
  };

  return (
    <motion.div
      className="intro-launch-stage"
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
      transition={{ duration: 0.65, ease: 'easeInOut' }}
    >
      {/* Background Ambience */}
      <div className="intro-launch-grid" />
      <div className="intro-launch-aura" />

      {/* ── Central Staged Launch Sequence ── */}
      <div className="intro-launch-content">
        {/* Step 1: Logo Launch */}
        <motion.div
          className="intro-logo-container"
          initial={{ opacity: 0, scale: 0.6, y: -25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="intro-ring-outer" />
          <div className="intro-ring-middle" />
          <div className="intro-logo-core">
            <img
              src="/dev logo.png"
              alt="Dev Infinity Official Logo"
              className="intro-logo-img"
            />
            <div className="intro-logo-scan" />
          </div>
        </motion.div>

        {/* Step 2: Name & Identity Launch */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
        >
          {/* Department badge */}
          <div className="intro-dept-pill">
            <div className="intro-live-dot" />
            <span>CSE DEPT • FTE • MSU BARODA</span>
          </div>

          {/* Main Name */}
          <h1 className="intro-title">
            DEV <span className="intro-title-gradient">INFINITY</span>
          </h1>

          {/* Tagline */}
          <p className="intro-tagline">
            "{clubInfo.tagline}"
          </p>

          {/* Institution Subtitle */}
          <div className="intro-institution">
            Where Ideas Turn Into Innovation • Web Development Society
          </div>
        </motion.div>

        {/* Step 3: Option to Initialize the Portal */}
        <motion.div
          className="intro-action-zone"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: 'easeOut' }}
        >
          <motion.button
            type="button"
            className="intro-initialize-btn"
            onClick={onExplore}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <span>Initialize Portal</span>
            <ArrowRight size={18} />
          </motion.button>

          <div className="intro-sub-links">
            <button
              type="button"
              className="intro-skip-btn"
              onClick={handleSkip}
            >
              Skip directly to website →
            </button>
            <span>•</span>
            <span>Press [Enter]</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IntroScreen;
