import React, { useRef, useState, useEffect } from 'react';
import {
  ArrowRight,
  Globe,
  ExternalLink,
  Users,
  Layout,
  Server,
  Layers,
  Palette,
  Database,
  Code2,
  Sparkles
} from 'lucide-react';
import { GithubIcon } from '../common/Icons';

/**
 * Category Icon Mapper
 */
const getCategoryIcon = (category = '') => {
  const cat = category.toLowerCase();
  if (cat.includes('frontend')) return Layout;
  if (cat.includes('backend')) return Server;
  if (cat.includes('full-stack') || cat.includes('fullstack')) return Layers;
  if (cat.includes('ui') || cat.includes('ux') || cat.includes('design')) return Palette;
  if (cat.includes('data') || cat.includes('db')) return Database;
  return Code2;
};

/**
 * ProjectCard — "Constellation Portal" Glassmorphic Showcase Card
 */
export const ProjectCard = ({ project, index = 0, onClick }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [ripple, setRipple] = useState(null);
  const [isClicking, setIsClicking] = useState(false);

  const formattedIndex = String(index + 1).padStart(2, '0');
  const CategoryIcon = getCategoryIcon(project.category);
  const visibleTech = project.techStack ? project.techStack.slice(0, 4) : [];
  const remainingTechCount = project.techStack ? Math.max(0, project.techStack.length - 4) : 0;
  const liveLink = project.demoUrl || project.liveUrl;

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(card);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    );

    observer.observe(card);

    return () => {
      if (card) observer.unobserve(card);
    };
  }, []);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    if (window.matchMedia('(hover: none), (prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleCardClick = (e) => {
    const card = cardRef.current;
    if (card) {
      const rect = card.getBoundingClientRect();
      const clickX = e ? e.clientX - rect.left : rect.width / 2;
      const clickY = e ? e.clientY - rect.top : rect.height / 2;
      setRipple({ x: clickX, y: clickY, id: Date.now() });
    }

    setIsClicking(true);
    setTimeout(() => {
      setIsClicking(false);
      if (onClick) onClick(project);
    }, 180);
  };

  const handleExternalLink = (e, url) => {
    e.stopPropagation();
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      ref={cardRef}
      className={`project-glass-card ${isVisible ? 'project-glass-card--revealed' : ''} ${isClicking ? 'project-glass-card--clicking' : ''}`}
      style={{ '--reveal-delay': `${Math.min(index * 80, 360)}ms` }}
      onMouseMove={handleMouseMove}
      onClick={handleCardClick}
      tabIndex={0}
      role="article"
      aria-label={`Project: ${project.title}. Category: ${project.category}. Click to view full project case study.`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick();
        }
      }}
    >
      {/* Click Ripple Effect */}
      {ripple && (
        <span
          key={ripple.id}
          className="card-click-ripple"
          style={{ left: ripple.x, top: ripple.y }}
        />
      )}

      {/* Radial Mouse Spotlight Effect */}
      <div className="project-card-spotlight" />

      {/* Restrained Blue-Cyan Border Light Trace */}
      <div className="card-border-trace" aria-hidden="true" />

      {/* Faint Decorative Background Project Number */}
      <div className="project-card-watermark" aria-hidden="true">
        {formattedIndex}
      </div>

      {/* Card Content Stack */}
      <div className="project-glass-card__content">
        {/* Banner Image Area */}
        <div className="project-card-image">
          <img src={project.image} alt={project.title} loading="lazy" />
          <div className="project-card-image__scrim" />

          {/* Featured Ribbon */}
          {project.featured && (
            <div className="card-featured-ribbon">
              <Sparkles size={11} />
              <span>FEATURED</span>
            </div>
          )}

          {/* Status Badge Top-Left */}
          {project.status && (() => {
            const statusKey = project.status.toLowerCase().replace(/\s+/g, '-');
            return (
              <div className={`project-card-status-badge project-card-status-badge--${statusKey}`}>
                <span className={`status-dot status-dot--${statusKey}`} />
                <span>{project.status}</span>
              </div>
            );
          })()}

          {/* Category Badge Top-Right */}
          <span className="project-card-category-badge">{project.category}</span>
        </div>

        {/* Title Header with Category Icon */}
        <div className="project-card-header-row">
          <div className="project-card-cat-icon-badge">
            <CategoryIcon size={18} />
          </div>
          <h3 className="project-card-title">{project.title}</h3>
        </div>

        {/* Short Description (2-line clamp) */}
        <p className="project-card-desc">{project.description}</p>

        {/* Technology Stack Preview (Max 4 visible) */}
        <div className="project-card-tech-section">
          <div className="project-card-tech-list">
            {visibleTech.map((tech, idx) => (
              <span key={idx} className="project-card-tech-chip">
                {tech}
              </span>
            ))}
            {remainingTechCount > 0 && (
              <span className="project-card-tech-chip project-card-tech-chip--more">
                +{remainingTechCount}
              </span>
            )}
          </div>
        </div>

        {/* Contributors Row */}
        {project.contributors && project.contributors.length > 0 && (
          <div className="project-card-contributors-row">
            <Users size={13} className="contributors-icon" />
            <span className="contributors-text">
              {project.contributors.join(', ')}
            </span>
          </div>
        )}

        {/* Footer Actions Row */}
        <div className="project-card-actions-row">
          <div className="project-card-ext-buttons">
            {project.githubUrl && (
              <button
                className="card-ext-btn card-ext-btn--github"
                onClick={(e) => handleExternalLink(e, project.githubUrl)}
                aria-label={`View ${project.title} GitHub repository in new tab`}
              >
                <GithubIcon size={13} />
                <span>GitHub</span>
              </button>
            )}

            {liveLink && (
              <button
                className="card-ext-btn card-ext-btn--live"
                onClick={(e) => handleExternalLink(e, liveLink)}
                aria-label={`View ${project.title} Live Demo in new tab`}
              >
                <ExternalLink size={13} />
                <span>Live Demo</span>
              </button>
            )}
          </div>

          <div className="project-card-explore-wrap">
            <span className="project-explore-indicator">
              <span>Explore Project</span>
              <ArrowRight size={14} className="explore-arrow" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
