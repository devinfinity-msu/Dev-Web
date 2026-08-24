import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enquiryType: 'General Enquiry',
    message: ''
  });

  const [status, setStatus] = useState({ type: null, message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    // Simulate successful submission
    setStatus({
      type: 'success',
      message: 'Thank you for reaching out! Your message has been recorded. Our Web Team will respond shortly.'
    });

    setFormData({
      name: '',
      email: '',
      enquiryType: 'General Enquiry',
      message: ''
    });
  };

  return (
    <Card style={{ padding: '2.5rem' }}>
      <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-contrast)', marginBottom: '1.5rem' }}>
        Send Us a Message
      </h3>

      {status.type && (
        <div style={{
          padding: '1rem 1.25rem',
          borderRadius: 'var(--radius-sm)',
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          fontSize: '0.9375rem',
          backgroundColor: status.type === 'success' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
          border: `1px solid ${status.type === 'success' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
          color: status.type === 'success' ? 'var(--success)' : 'var(--danger)'
        }}>
          {status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
          <span>{status.message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Full Name *</label>
          <input
            type="text"
            required
            placeholder="e.g. Aarav Patel"
            className="form-input"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Email Address *</label>
          <input
            type="email"
            required
            placeholder="e.g. student@msubaroda.ac.in"
            className="form-input"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Enquiry Type *</label>
          <select
            className="form-select"
            value={formData.enquiryType}
            onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
          >
            <option value="General Enquiry">General Enquiry</option>
            <option value="Club Membership">Club Membership & Joining</option>
            <option value="Workshop & Events">Workshop & Event Registration</option>
            <option value="Project Collaboration">Project Collaboration</option>
            <option value="Sponsorship & Speaker">Sponsorship / Speaker Invitation</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Your Message *</label>
          <textarea
            required
            rows={5}
            placeholder="Type your query or feedback here..."
            className="form-textarea"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <Button type="submit" variant="primary" size="lg" style={{ width: '100%', marginTop: '1rem' }}>
          <Send size={18} />
          <span>Send Message</span>
        </Button>
      </form>
    </Card>
  );
};
