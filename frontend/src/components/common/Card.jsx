import React from 'react';

/**
 * Reusable Glassmorphic Card Container
 */
export const Card = ({ children, className = '', hover = true, onClick, style }) => {
  return (
    <div
      className={`card ${hover ? 'card-hover' : ''} ${className}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
};
