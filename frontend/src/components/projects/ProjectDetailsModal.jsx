import React, { useEffect, useRef } from 'react';
import {
  ArrowLeft,
  Users,
  ExternalLink,
  CheckCircle2,
  Code2,
  Layers,
  Sparkles,
  Tag,
  Clock,
  Target,
  Lightbulb,
  ChevronRight
} from 'lucide-react';
import { GithubIcon } from '../common/Icons';

/**
 * ProjectDetailsView — Spacious Glass Case-Study Project View
 */
export const ProjectDetailsView = ({ project, onBack }) => {
  const backBtnRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (backBtnRef.current) {
      backBtnRef.current.focus();
    }
  }, [project]);

  if (!project) return null;

  const statusClass = project.status
    ? project.status.toLowerCase().replace(/\s+/g, '-')
    : 'completed';

  const liveLink = project.demoUrl || project.liveUrl;
  const hasDemo = Boolean(liveLink && liveLink.trim() !== '' && liveLink !== '#');

  return (
    <div className="project-details-page">
      {/* ── Top Bar with Back Button ── */}
      <div className="details-top-bar">
        <button
          ref={backBtnRef}
          className="details-back-btn"
          onClick={onBack}
          aria-label="Back to Projects list"
        >
          <ArrowLeft size={18} />
          <span>Back to Projects</span>
        </button>
      </div>

      {/* ── Case-Study Hero Banner ── */}
      <div className="details-hero-banner">
        <div className="details-banner-image-wrap">
          <img
            src={project.image}
            alt={project.title}
            className="details-banner-image"
          />
          <div className="details-banner-overlay" />

          {/* Floating Badges */}
          <div className="details-banner-badges">
            <span className="details-category-pill">{project.category}</span>
            {project.status && (
              <span className={`details-status-badge details-status-badge--${statusClass}`}>
                <span className={`status-dot status-dot--${statusClass}`} />
                <span>{project.status}</span>
              </span>
            )}
          </div>
        </div>

        {/* Hero Title & Description */}
        <div className="details-hero-content">
          <h1 className="details-title">{project.title}</h1>
          <p className="details-short-desc">{project.description}</p>
        </div>
      </div>

      {/* ── Development Path Indicator ── */}
      <div className="details-dev-path-bar">
        <span className="dev-path-label">DEVELOPMENT PATH</span>
        <div className="dev-path-steps">
          <span className="dev-step">IDEA</span>
          <ChevronRight size={14} className="dev-step-sep" />
          <span className="dev-step">DESIGN</span>
          <ChevronRight size={14} className="dev-step-sep" />
          <span className="dev-step">DEVELOP</span>
          <ChevronRight size={14} className="dev-step-sep" />
          <span className="dev-step dev-step--deploy">DEPLOY</span>
        </div>
      </div>

      {/* ── Case-Study Main Information Sections ── */}
      <div className="details-content-grid">
        <div className="details-main-column">
          {/* Overview Section */}
          <section className="details-section">
            <h2 className="details-section-title">
              <Layers size={18} className="details-section-icon" />
              <span>Overview</span>
            </h2>
            <div className="details-card-box">
              <p className="details-overview-text">
                {project.longDescription || project.description}
              </p>
            </div>
          </section>

          {/* Challenge Section */}
          {project.challenge && (
            <section className="details-section">
              <h2 className="details-section-title">
                <Target size={18} className="details-section-icon" />
                <span>The Challenge</span>
              </h2>
              <div className="details-card-box">
                <p className="details-overview-text">{project.challenge}</p>
              </div>
            </section>
          )}

          {/* Solution Section */}
          {project.solution && (
            <section className="details-section">
              <h2 className="details-section-title">
                <Lightbulb size={18} className="details-section-icon" />
                <span>The Solution</span>
              </h2>
              <div className="details-card-box">
                <p className="details-overview-text">{project.solution}</p>
              </div>
            </section>
          )}

          {/* Key Features Section */}
          {project.features && project.features.length > 0 && (
            <section className="details-section">
              <h2 className="details-section-title">
                <Sparkles size={18} className="details-section-icon" />
                <span>Key Features</span>
              </h2>
              <div className="details-card-box">
                <ul className="details-features-list">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="details-feature-item">
                      <CheckCircle2 size={16} className="details-check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}
        </div>

        {/* ── Sidebar Metadata & Actions Section ── */}
        <aside className="details-sidebar-column">
          {/* Actions Block */}
          <div className="details-card-box details-sidebar-actions">
            <h3 className="details-metadata-title">Project Links</h3>
            <div className="details-actions-stack">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="details-action-btn details-action-btn--github"
                >
                  <GithubIcon size={16} />
                  <span>GitHub Repository</span>
                </a>
              )}

              {hasDemo && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="details-action-btn details-action-btn--demo"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>

          {/* Tech Stack Block */}
          {project.techStack && (
            <div className="details-card-box">
              <h3 className="details-metadata-title">Technology Stack</h3>
              <div className="details-tech-chips">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="details-tech-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Metadata Card */}
          <div className="details-card-box details-metadata-card">
            <h3 className="details-metadata-title">Project Metadata</h3>

            <div className="details-meta-item">
              <div className="details-meta-label">
                <Tag size={14} />
                <span>CATEGORY</span>
              </div>
              <div className="details-meta-value">{project.category}</div>
            </div>

            <div className="details-meta-item">
              <div className="details-meta-label">
                <Clock size={14} />
                <span>STATUS</span>
              </div>
              <div className="details-meta-value">{project.status}</div>
            </div>

            {project.contributors && project.contributors.length > 0 && (
              <div className="details-meta-item">
                <div className="details-meta-label">
                  <Users size={14} />
                  <span>CONTRIBUTORS</span>
                </div>
                <div className="details-meta-value">
                  {project.contributors.join(', ')}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};

// Backwards-compatible export alias
export const ProjectDetailsModal = ({ project, onClose }) => {
  return <ProjectDetailsView project={project} onBack={onClose} />;
};