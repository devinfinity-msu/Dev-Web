import React, { useState } from 'react';
import { Award, FileSpreadsheet, ShieldCheck, Download, RefreshCw } from 'lucide-react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

export const CertificateGeneratorMock = () => {
  const [template, setTemplate] = useState('workshop-excellence');
  const [participantName, setParticipantName] = useState('Aarav Patel');
  const [eventName, setEventName] = useState('React & Modern Web Architecture 2026');
  const [certId, setCertId] = useState('DEVINF-2026-8941');
  const [generatedCount, setGeneratedCount] = useState(0);

  const generateId = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setCertId(`DEVINF-2026-${randomNum}`);
  };

  const handleSingleGenerate = () => {
    generateId();
    setGeneratedCount(prev => prev + 1);
  };

  const handleBulkGenerate = () => {
    alert("Simulated bulk generation for 45 registered event participants! Ready for backend PDF pipeline.");
    setGeneratedCount(prev => prev + 45);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
      {/* Generator Form Controls */}
      <Card style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', background: 'rgba(139, 92, 246, 0.15)', color: 'var(--accent)' }}>
            <Award size={22} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-contrast)' }}>
              Certificate Engine Preview
            </h3>
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
              Backend generation pipeline will connect here.
            </p>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Certificate Template</label>
          <select className="form-select" value={template} onChange={e => setTemplate(e.target.value)}>
            <option value="workshop-excellence">Workshop Certificate of Excellence</option>
            <option value="hackathon-winner">Hackathon Top Winner Certificate</option>
            <option value="bootcamp-completion">Web Bootcamp Completion</option>
            <option value="speaker-appreciation">Guest Speaker Appreciation</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Participant Full Name</label>
          <input
            type="text"
            className="form-input"
            value={participantName}
            onChange={e => setParticipantName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Event / Workshop Title</label>
          <input
            type="text"
            className="form-input"
            value={eventName}
            onChange={e => setEventName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Generated Certificate ID</label>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input type="text" readOnly className="form-input" value={certId} style={{ fontFamily: 'var(--font-mono)' }} />
            <Button variant="secondary" size="sm" onClick={generateId}>
              <RefreshCw size={14} />
            </Button>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
          <Button variant="primary" size="sm" onClick={handleSingleGenerate} style={{ flex: 1 }}>
            <Award size={16} />
            <span>Generate Certificate</span>
          </Button>
          <Button variant="secondary" size="sm" onClick={handleBulkGenerate} style={{ flex: 1 }}>
            <FileSpreadsheet size={16} />
            <span>Bulk CSV Gen</span>
          </Button>
        </div>
      </Card>

      {/* Live Certificate Preview Mock */}
      <Card style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <Badge variant="success">
              <ShieldCheck size={12} />
              <span>VERIFIED PREVIEW</span>
            </Badge>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Status: Valid</span>
          </div>

          {/* Mock Certificate Canvas Box */}
          <div style={{
            background: '#090d16',
            border: '2px dashed rgba(59, 130, 246, 0.4)',
            borderRadius: 'var(--radius-md)',
            padding: '2rem 1.5rem',
            textAlign: 'center',
            position: 'relative'
          }}>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary)', fontWeight: 800 }}>
              Dev Infinity • CSE FTE MSU Baroda
            </div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '0.75rem 0 0.5rem 0', color: '#ffffff' }}>
              Certificate of Achievement
            </h4>
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>This certifies that</p>
            <div style={{ fontSize: '1.375rem', fontWeight: 800, color: 'var(--secondary)', margin: '0.5rem 0' }}>
              {participantName}
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
              has successfully participated in <strong>{eventName}</strong>
            </p>
            <div style={{ marginTop: '1.25rem', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
              Certificate ID: {certId} • Issued: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>

        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <Button variant="outline" size="sm" style={{ width: '100%' }}>
            <Download size={14} />
            <span>Download Mock Certificate PDF</span>
          </Button>
        </div>
      </Card>
    </div>
  );
};
