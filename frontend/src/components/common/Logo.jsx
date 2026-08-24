import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Dev Infinity Official Brand Logo Component
 * Renders the official circular logo emblem from 'dev logo.png'.
 */
export const Logo = ({
  size = 'md',
  showText = true,
  showSubtext = true,
  className = '',
  linkToHome = true
}) => {
  // Dimensions mapping
  const dimensions = {
    sm: { imgSize: '2.5rem', titleSize: '1rem', subSize: '0.625rem' },
    md: { imgSize: '3rem', titleSize: '1.1875rem', subSize: '0.6875rem' },
    lg: { imgSize: '4rem', titleSize: '1.5rem', subSize: '0.8125rem' },
    xl: { imgSize: '5.5rem', titleSize: '2.25rem', subSize: '0.9375rem' }
  }[size] || { imgSize: '3rem', titleSize: '1.1875rem', subSize: '0.6875rem' };

  const content = (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }} className={className}>
      {/* Official Circular Logo Emblem */}
      <div style={{
        width: dimensions.imgSize,
        height: dimensions.imgSize,
        borderRadius: '50%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#04061a',
        boxShadow: '0 0 16px rgba(6, 182, 212, 0.3)',
        flexShrink: 0
      }}>
        <img
          src="/dev logo.png"
          alt="Dev Infinity Official Logo"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </div>

      {/* Brand Name Typography */}
      {showText && (
        <div>
          <div style={{
            fontSize: dimensions.titleSize,
            fontWeight: 900,
            color: 'var(--text-contrast)',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            fontFamily: 'var(--font-family)'
          }}>
            DEV <span style={{
              background: 'linear-gradient(135deg, #f59e0b 0%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>INFINITY</span>
          </div>

          {showSubtext && (
            <div style={{
              fontSize: dimensions.subSize,
              color: 'var(--text-secondary)',
              fontWeight: 600,
              letterSpacing: '0.04em',
              marginTop: '0.15rem'
            }}>
              CSE • FTE • MSU Baroda
            </div>
          )}
        </div>
      )}
    </div>
  );

  if (linkToHome) {
    return (
      <Link to="/" style={{ textDecoration: 'none' }}>
        {content}
      </Link>
    );
  }

  return content;
};
