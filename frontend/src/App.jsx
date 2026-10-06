import React, { useState, useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { AppRoutes } from './routes/AppRoutes';
import IntroScreen from './components/intro/IntroScreen';
import TerminalLoader from './components/intro/TerminalLoader';
import './styles/globals.css';
import './styles/components.css';
import './styles/navbar.css';

/* ── Page-level fade loader (used while lazy chunks load) ── */
const PageLoader = () => (
  <div style={{
    display: 'flex', minHeight: '60vh',
    alignItems: 'center', justifyContent: 'center',
  }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
      <div style={{
        width: '2rem', height: '2rem',
        border: '2px solid rgba(59,130,246,0.25)',
        borderTopColor: '#3b82f6',
        borderRadius: '9999px',
        animation: 'spin 0.8s linear infinite',
      }} />
      <span style={{
        fontSize: '0.6875rem', fontFamily: 'monospace',
        color: 'rgba(255,255,255,0.3)',
        letterSpacing: '0.2em', textTransform: 'uppercase',
      }}>Loading</span>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  </div>
);

/* ── Inner app that can read location for admin bypass ── */
const AppInner = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isLoadingRoute = location.pathname === '/loading';

  /* Skip intro entirely for admin and loading routes */
  const [appState, setAppState] = useState(() => {
    if (isAdminRoute || isLoadingRoute) return 'ready';
    return sessionStorage.getItem('di_intro_seen') ? 'ready' : 'intro';
  });

  useEffect(() => {
    if (appState === 'ready') {
      sessionStorage.setItem('di_intro_seen', 'true');
    }
  }, [appState]);

  /* Scroll to top on route change */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      {/* ── Phase 1: Animated Intro Screen ── */}
      {appState === 'intro' && (
        <IntroScreen
          key="intro"
          onExplore={() => setAppState('booting')}
          onSkip={() => setAppState('ready')}
        />
      )}

      {/* ── Phase 2: Terminal Boot Loader ── */}
      {appState === 'booting' && (
        <TerminalLoader key="loader" onComplete={() => setAppState('ready')} />
      )}

      {/* ── Phase 3: Main Application ── */}
      {appState === 'ready' && (
        <motion.div
          key="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
        >
          <React.Suspense fallback={<PageLoader />}>
            <AppRoutes />
          </React.Suspense>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}

export default App;
