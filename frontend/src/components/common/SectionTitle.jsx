import React from 'react';
import { Terminal } from 'lucide-react';

export const SectionTitle = ({
  subtitle,
  title,
  gradientText,
  description,
  centered = false,
  className = ''
}) => {
  return (
    <div className={`section-header ${centered ? 'text-center' : ''} ${className}`}>
      {subtitle && (
        <div className="section-subtitle">
          <Terminal size={14} />
          <span>{subtitle}</span>
        </div>
      )}
      <h2 className="section-title">
        {title} {gradientText && <span className="gradient-text">{gradientText}</span>}
      </h2>
      {description && <p className="section-desc">{description}</p>}
    </div>
  );
};
