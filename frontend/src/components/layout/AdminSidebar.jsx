import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Calendar,
  Code2,
  FileText,
  BookOpen,
  Trophy,
  Users,
  Award,
  MessageSquare,
  ArrowLeft
} from 'lucide-react';
import { Logo } from '../common/Logo';

export const AdminSidebar = () => {
  const location = useLocation();

  const adminNavItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Events', path: '/admin/events', icon: Calendar },
    { name: 'Projects', path: '/admin/projects', icon: Code2 },
    { name: 'Blogs', path: '/admin/blogs', icon: FileText },
    { name: 'Learning Resources', path: '/admin/resources', icon: BookOpen },
    { name: 'Achievements', path: '/admin/achievements', icon: Trophy },
    { name: 'Team Members', path: '/admin/team', icon: Users },
    { name: 'Certificates', path: '/admin/certificates', icon: Award },
    { name: 'Contact Messages', path: '/admin/messages', icon: MessageSquare }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <aside style={{
      width: '260px',
      backgroundColor: '#090d16',
      borderRight: '1px solid var(--border-color)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0
    }}>
      {/* Admin Branding Header */}
      <div style={{
        padding: '1.25rem 1.5rem',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <Logo size="sm" linkToHome={false} />
      </div>

      {/* Admin Navigation */}
      <nav style={{ padding: '1rem 0.75rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--text-muted)', padding: '0.5rem 0.75rem', textTransform: 'uppercase' }}>
          Management
        </div>
        {adminNavItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.625rem 0.875rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: active ? '#ffffff' : 'var(--text-secondary)',
                backgroundColor: active ? 'var(--primary)' : 'transparent',
                boxShadow: active ? '0 4px 12px var(--primary-glow)' : 'none',
                textDecoration: 'none',
                transition: 'all 0.15s ease'
              }}
            >
              <Icon size={18} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Back to Public Site */}
      <div style={{ padding: '1rem 0.75rem', borderTop: '1px solid var(--border-color)' }}>
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.625rem 0.875rem',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.875rem',
            fontWeight: 600,
            color: 'var(--text-secondary)',
            border: '1px solid var(--border-color)',
            textDecoration: 'none'
          }}
        >
          <ArrowLeft size={16} />
          <span>Exit to Main Site</span>
        </Link>
      </div>
    </aside>
  );
};
