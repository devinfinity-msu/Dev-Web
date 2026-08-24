import React from 'react';
import { Bell, UserCheck, Database, Info } from 'lucide-react';

export const AdminHeader = () => {
  return (
    <header style={{
      height: '4rem',
      backgroundColor: 'var(--bg-glass)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-color)',
      padding: '0 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 500
    }}>
      {/* Search / Notice */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--secondary)' }}>
        <Info size={16} />
        <span><strong>Mock Layout Mode:</strong> API & Database integration ready for Express.js + Supabase backend.</span>
      </div>

      {/* Admin User Status */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.375rem',
          padding: '0.35rem 0.75rem',
          borderRadius: 'var(--radius-full)',
          backgroundColor: 'rgba(16, 185, 129, 0.12)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          color: 'var(--success)',
          fontSize: '0.75rem',
          fontWeight: 700
        }}>
          <Database size={12} />
          <span>Mock State Active</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '2.25rem',
            height: '2.25rem',
            borderRadius: 'var(--radius-full)',
            background: 'var(--gradient-accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff'
          }}>
            <UserCheck size={18} />
          </div>
          <div>
            <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-contrast)' }}>
              Web Team Admin
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              CSE, FTE, MSU Baroda
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
