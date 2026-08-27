import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Rocket,
  X,
  FileText,
  LayoutGrid,
  Edit3,
  Code2,
  Link,
  Users,
  Send,
  Sparkles,
  CheckCircle2,
  Loader2,
  UploadCloud,
  Image as ImageIcon,
  Trash2,
  RefreshCw,
} from 'lucide-react';
import { GithubIcon } from '../common/Icons';

export const SubmitProjectModal = ({ isOpen, onClose, onSubmitProject }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Full-Stack',
    description: '',
    techStack: '',
    githubUrl: '',
    demoUrl: '',
    contributors: '',
  });

  const [imagePreview, setImagePreview] = useState('');
  const [imageName, setImageName] = useState('');
  const [imageSize, setImageSize] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const modalRef = useRef(null);
  const previousFocusRef = useRef(null);
  const fileInputRef = useRef(null);

  // Store element that had focus prior to modal open
  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement;
    }
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setSubmitted(false);
      setErrors({});
      onClose();
    }, 220);
  }, [isClosing, onClose]);

  // Handle ESC key, focus trap, and body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    if (modalRef.current) {
      modalRef.current.focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll(
          'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleKeyDown);

      if (previousFocusRef.current && typeof previousFocusRef.current.focus === 'function') {
        previousFocusRef.current.focus();
      }
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  const handleFileProcess = (file) => {
    if (!file) return;

    const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        image: 'Please select a valid image file (JPEG, PNG, or WebP).',
      }));
      return;
    }

    const maxSizeBytes = 5 * 1024 * 1024; // 5 MB
    if (file.size > maxSizeBytes) {
      setErrors((prev) => ({
        ...prev,
        image: 'Image size exceeds 5 MB. Please select a smaller file.',
      }));
      return;
    }

    // Clear previous image error
    setErrors((prev) => {
      const next = { ...prev };
      delete next.image;
      return next;
    });

    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target.result);
      setImageName(file.name);
      setImageSize((file.size / (1024 * 1024)).toFixed(2) + ' MB');
    };
    reader.onerror = () => {
      setErrors((prev) => ({
        ...prev,
        image: 'Failed to read the image file. Please try again.',
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileProcess(file);
    }
  };

  const handleRemoveImage = (e) => {
    e.stopPropagation();
    setImagePreview('');
    setImageName('');
    setImageSize('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleChangeImageClick = (e) => {
    e.stopPropagation();
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileProcess(file);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Project Title is required.';
    if (!imagePreview) newErrors.image = 'Project Image is required.';
    if (!formData.description.trim()) newErrors.description = 'Short Description is required.';
    if (!formData.techStack.trim()) newErrors.techStack = 'Tech Stack is required.';
    if (!formData.githubUrl.trim()) {
      newErrors.githubUrl = 'GitHub Repository URL is required.';
    } else if (!formData.githubUrl.startsWith('http')) {
      newErrors.githubUrl = 'Must be a valid URL starting with http:// or https://';
    }
    if (formData.demoUrl && !formData.demoUrl.startsWith('http')) {
      newErrors.demoUrl = 'Must be a valid URL starting with http:// or https://';
    }
    if (!formData.contributors.trim()) newErrors.contributors = 'Contributor Names are required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const techStackArray = formData.techStack
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);

    const contributorsArray = formData.contributors
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);

    const newProject = {
      id: `proj-${Date.now()}`,
      featured: false,
      title: formData.title.trim(),
      image: imagePreview,
      category: formData.category,
      description: formData.description.trim(),
      techStack: techStackArray,
      contributors: contributorsArray,
      githubUrl: formData.githubUrl.trim(),
      demoUrl: formData.demoUrl.trim() || undefined,
      status: 'Completed',
      longDescription: formData.description.trim(),
      features: [],
      challenge: '',
      solution: '',
    };

    setIsSubmitting(true);
    setTimeout(() => {
      // Pass the new project to parent state handler if available
      if (typeof onSubmitProject === 'function') {
        onSubmitProject(newProject);
      }

      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        title: '',
        category: 'Full-Stack',
        description: '',
        techStack: '',
        githubUrl: '',
        demoUrl: '',
        contributors: '',
      });
      setImagePreview('');
      setImageName('');
      setImageSize('');
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }

      // Auto close after success message
      setTimeout(() => {
        handleClose();
      }, 2500);
    }, 1200);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div
      className={`submit-project-backdrop ${isClosing ? 'submit-project-backdrop--closing' : ''}`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="submit-project-title"
    >
      <div
        className={`submit-project-modal ${isClosing ? 'submit-project-modal--closing' : ''}`}
        ref={modalRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Animated Light Sweep Beam */}
        <div className="submit-border-beam" aria-hidden="true" />

        {/* Close Button */}
        <button
          type="button"
          className="submit-project-close"
          onClick={handleClose}
          aria-label="Close submit project modal"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="submit-project-header">
          <div className="submit-project-icon-badge">
            <Rocket size={22} className="submit-project-rocket-icon" />
          </div>
          <div className="submit-project-header-text">
            <h2 id="submit-project-title" className="submit-project-heading">
              Submit Your Web Project
            </h2>
            <p className="submit-project-subtitle">
              Share your amazing project with the Dev Infinity community.
            </p>
          </div>
        </div>

        {/* Form Body or Success Confirmation */}
        {submitted ? (
          <div className="submit-project-success-box">
            <div className="submit-success-icon-wrap">
              <CheckCircle2 size={48} className="submit-success-icon" />
            </div>
            <h3 className="submit-success-title">Project Submitted Successfully!</h3>
            <p className="submit-success-desc">
              Our Web Team will review your project submission before adding it to the official Dev Infinity Showcase.
            </p>
          </div>
        ) : (
          <form className="submit-project-form" onSubmit={handleSubmit} noValidate>
            {/* Field 1: Title */}
            <div className="submit-project-field">
              <label className="submit-project-label" htmlFor="submit-project-title-input">
                <FileText size={15} className="submit-field-icon" />
                <span>Project Title</span>
                <span className="submit-required-star">*</span>
              </label>
              <input
                id="submit-project-title-input"
                type="text"
                required
                placeholder="e.g. Student Resource Portal"
                className={`submit-project-input ${errors.title ? 'submit-project-input--error' : ''}`}
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
              {errors.title && <span className="submit-field-error">{errors.title}</span>}
            </div>

            {/* Field 2: Project Image Upload */}
            <div className="submit-project-field">
              <label className="submit-project-label" htmlFor="project-image-upload">
                <ImageIcon size={15} className="submit-field-icon" />
                <span>Project Banner Image</span>
                <span className="submit-required-star">*</span>
              </label>

              {/* Hidden File Input */}
              <input
                ref={fileInputRef}
                type="file"
                id="project-image-upload"
                accept="image/jpeg,image/png,image/webp"
                className="submit-project-file-input"
                style={{ display: 'none' }}
                onChange={handleFileInputChange}
              />

              {!imagePreview ? (
                <div
                  className={`submit-image-dropzone ${isDragging ? 'submit-image-dropzone--active' : ''} ${errors.image ? 'submit-image-dropzone--error' : ''}`}
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  role="button"
                  tabIndex={0}
                  aria-label="Upload project image banner. Accepts JPEG, PNG, WEBP up to 5 megabytes."
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      fileInputRef.current?.click();
                    }
                  }}
                >
                  <div className="submit-image-dropzone-content">
                    <div className="submit-image-icon-circle">
                      <UploadCloud size={24} className="submit-image-upload-icon" />
                    </div>
                    <div className="submit-image-text-wrap">
                      <span className="submit-image-primary-text">
                        <span className="submit-image-highlight">Click to upload</span> or drag & drop
                      </span>
                      <span className="submit-image-subtext">
                        JPEG, PNG, or WebP (Max 5 MB)
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="submit-image-preview-card">
                  <div className="submit-image-preview-wrapper">
                    <img
                      src={imagePreview}
                      alt="Project banner preview"
                      className="submit-image-preview-img"
                    />
                    <div className="submit-image-preview-overlay" />
                    <div className="submit-image-preview-meta">
                      <span className="submit-image-name">{imageName || 'Selected Banner'}</span>
                      {imageSize && <span className="submit-image-size">{imageSize}</span>}
                    </div>
                  </div>
                  <div className="submit-image-preview-actions">
                    <button
                      type="button"
                      className="submit-image-action-btn submit-image-action-btn--change"
                      onClick={handleChangeImageClick}
                      aria-label="Select a different image"
                    >
                      <RefreshCw size={14} />
                      <span>Change Image</span>
                    </button>
                    <button
                      type="button"
                      className="submit-image-action-btn submit-image-action-btn--remove"
                      onClick={handleRemoveImage}
                      aria-label="Remove selected image"
                    >
                      <Trash2 size={14} />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              )}
              {errors.image && <span className="submit-field-error">{errors.image}</span>}
            </div>

            {/* Field 3: Category */}
            <div className="submit-project-field">
              <label className="submit-project-label" htmlFor="submit-project-category-select">
                <LayoutGrid size={15} className="submit-field-icon" />
                <span>Category</span>
                <span className="submit-required-star">*</span>
              </label>
              <select
                id="submit-project-category-select"
                className="submit-project-select"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              >
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Full-Stack">Full-Stack</option>
                <option value="UI/UX">UI/UX</option>
              </select>
            </div>

            {/* Field 4: Short Description */}
            <div className="submit-project-field">
              <label className="submit-project-label" htmlFor="submit-project-desc-textarea">
                <Edit3 size={15} className="submit-field-icon" />
                <span>Short Description</span>
                <span className="submit-required-star">*</span>
              </label>
              <textarea
                id="submit-project-desc-textarea"
                required
                rows={3}
                placeholder="What does your project do?"
                className={`submit-project-textarea ${errors.description ? 'submit-project-input--error' : ''}`}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
              {errors.description && <span className="submit-field-error">{errors.description}</span>}
            </div>

            {/* Field 5: Tech Stack */}
            <div className="submit-project-field">
              <label className="submit-project-label" htmlFor="submit-project-tech-input">
                <Code2 size={15} className="submit-field-icon" />
                <span>Tech Stack (comma separated)</span>
                <span className="submit-required-star">*</span>
              </label>
              <input
                id="submit-project-tech-input"
                type="text"
                required
                placeholder="React, Node.js, Express, Supabase"
                className={`submit-project-input ${errors.techStack ? 'submit-project-input--error' : ''}`}
                value={formData.techStack}
                onChange={(e) => setFormData({ ...formData, techStack: e.target.value })}
              />
              {errors.techStack && <span className="submit-field-error">{errors.techStack}</span>}
            </div>

            {/* Field 6: Contributors */}
            <div className="submit-project-field">
              <label className="submit-project-label" htmlFor="submit-project-contrib-input">
                <Users size={15} className="submit-field-icon" />
                <span>Contributor Names (comma separated)</span>
                <span className="submit-required-star">*</span>
              </label>
              <input
                id="submit-project-contrib-input"
                type="text"
                required
                placeholder="Your Name (3rd Year CSE), Teammate Name"
                className={`submit-project-input ${errors.contributors ? 'submit-project-input--error' : ''}`}
                value={formData.contributors}
                onChange={(e) => setFormData({ ...formData, contributors: e.target.value })}
              />
              {errors.contributors && <span className="submit-field-error">{errors.contributors}</span>}
            </div>

            {/* Two Column Grid for Desktop: GitHub & Live Demo */}
            <div className="submit-project-two-cols">
              {/* Field 7: GitHub Repository */}
              <div className="submit-project-field">
                <label className="submit-project-label" htmlFor="submit-project-github-input">
                  <GithubIcon size={15} className="submit-field-icon" />
                  <span>GitHub Repository URL</span>
                  <span className="submit-required-star">*</span>
                </label>
                <input
                  id="submit-project-github-input"
                  type="url"
                  required
                  placeholder="https://github.com/..."
                  className={`submit-project-input ${errors.githubUrl ? 'submit-project-input--error' : ''}`}
                  value={formData.githubUrl}
                  onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                />
                {errors.githubUrl && <span className="submit-field-error">{errors.githubUrl}</span>}
              </div>

              {/* Field 8: Live Demo URL */}
              <div className="submit-project-field">
                <label className="submit-project-label" htmlFor="submit-project-demo-input">
                  <Link size={15} className="submit-field-icon" />
                  <span>Live Demo URL (Optional)</span>
                </label>
                <input
                  id="submit-project-demo-input"
                  type="url"
                  placeholder="https://..."
                  className={`submit-project-input ${errors.demoUrl ? 'submit-project-input--error' : ''}`}
                  value={formData.demoUrl}
                  onChange={(e) => setFormData({ ...formData, demoUrl: e.target.value })}
                />
                {errors.demoUrl && <span className="submit-field-error">{errors.demoUrl}</span>}
              </div>
            </div>

            {/* Footer */}
            <div className="submit-project-footer">
              {/* Left Decorative Illustration */}
              <div className="submit-project-illustration" aria-hidden="true">
                <div className="submit-illus-window">
                  <Code2 size={16} className="submit-illus-code-icon" />
                  <span className="submit-illus-dots" />
                </div>
                <Sparkles size={12} className="submit-illus-sparkle submit-illus-sparkle--1" />
                <Sparkles size={10} className="submit-illus-sparkle submit-illus-sparkle--2" />
              </div>

              {/* Action Buttons */}
              <div className="submit-project-actions">
                <button
                  type="button"
                  className="submit-btn-cancel"
                  onClick={handleClose}
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="submit-btn-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="submit-spinner" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Project</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
