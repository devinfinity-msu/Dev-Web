import React from 'react';

/**
 * Reusable Status/Category Badge Component
 */
export const Badge = ({ variant = 'primary', children, className = '' }) => {
  return (
    <span className={`badge badge-${variant} ${className}`}>
      {children}
    </span>
  );
};
