import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import { CheckCircle2 } from 'lucide-react';

export const SubmitProjectModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Full-Stack',
    techStack: '',
    githubUrl: '',
    demoUrl: '',
    contributors: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Submit Your Web Project">
      {submitted ? (
        <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
          <CheckCircle2 size={48} style={{ color: 'var(--success)', marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-contrast)' }}>
            Project Submitted Successfully!
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
            Our Web Team will review your project submission before adding it to the official Dev Infinity Showcase.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Project Title *</label>
            <input
              type="text"
              required
              placeholder="e.g. Student Resource Portal"
              className="form-input"
              value={formData.title}
              onChange={e => setFormData({ ...formData, title: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Category *</label>
            <select
              className="form-select"
              value={formData.category}
              onChange={e => setFormData({ ...formData, category: e.target.value })}
            >
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Full-Stack">Full-Stack</option>
              <option value="UI/UX">UI/UX</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Short Description *</label>
            <textarea
              required
              rows={3}
              placeholder="What does your project do?"
              className="form-textarea"
              value={formData.description}
              onChange={e => setFormData({ ...formData, description: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Tech Stack (comma separated) *</label>
            <input
              type="text"
              required
              placeholder="React, Node.js, Express, Supabase"
              className="form-input"
              value={formData.techStack}
              onChange={e => setFormData({ ...formData, techStack: e.target.value })}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">GitHub Repository *</label>
              <input
                type="url"
                required
                placeholder="https://github.com/..."
                className="form-input"
                value={formData.githubUrl}
                onChange={e => setFormData({ ...formData, githubUrl: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Live Demo URL (Optional)</label>
              <input
                type="url"
                placeholder="https://..."
                className="form-input"
                value={formData.demoUrl}
                onChange={e => setFormData({ ...formData, demoUrl: e.target.value })}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Contributor Names *</label>
            <input
              type="text"
              required
              placeholder="Your Name (3rd Year CSE), Teammate Name"
              className="form-input"
              value={formData.contributors}
              onChange={e => setFormData({ ...formData, contributors: e.target.value })}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1.5rem' }}>
            <Button variant="secondary" onClick={onClose}>Cancel</Button>
            <Button type="submit" variant="primary">Submit Project</Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
