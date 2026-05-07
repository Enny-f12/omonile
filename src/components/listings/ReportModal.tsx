'use client';

import { useState } from 'react';
import { X, AlertTriangle, ArrowRight } from 'lucide-react';

const REASONS = [
  'Fraudulent listing',
  'Property already sold',
  'Incorrect information',
  'Duplicate listing',
  'Scam / Fake seller',
  'Other',
];

interface Props { onClose: () => void; }

export function ReportModal({ onClose }: Props) {
  const [reason, setReason] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const submit = () => {
    if (!reason) return;
    setSubmitted(true);
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 200,
      background: 'rgba(0,0,0,0.5)',
      backdropFilter: 'blur(4px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '1rem',
      animation: 'fadeIn 0.2s ease both',
    }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{
        background: 'var(--bg-surface)',
        borderRadius: '20px',
        padding: '2rem',
        width: '100%', maxWidth: '460px',
        boxShadow: '0 24px 80px rgba(0,0,0,0.25)',
        animation: 'scaleIn 0.25s ease both',
        position: 'relative',
      }}>
        {/* Close */}
        <button onClick={onClose} style={{
          position: 'absolute', top: '1rem', right: '1rem',
          width: '32px', height: '32px', borderRadius: '50%',
          border: '1.5px solid var(--border-default)',
          background: 'var(--bg-surface-2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', color: 'var(--text-muted)',
        }}>
          <X size={15} strokeWidth={2} />
        </button>

        {!submitted ? (
          <>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(232,168,76,0.12)', border: '1px solid rgba(232,168,76,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <AlertTriangle size={18} color="#b8832a" strokeWidth={2} />
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--text-primary)', margin: 0, letterSpacing: '-0.02em' }}>
                Report Listing
              </h2>
            </div>

            {/* Reason */}
            <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>
              Reason For Reporting
            </label>
            <select
              value={reason}
              onChange={e => setReason(e.target.value)}
              style={{
                width: '100%', padding: '0.7rem 1rem', borderRadius: '10px',
                border: '1.5px solid var(--border-default)',
                background: 'var(--bg-surface)', color: reason ? 'var(--text-primary)' : 'var(--text-muted)',
                fontFamily: 'var(--font-body)', fontSize: '0.875rem', outline: 'none', marginBottom: '1.25rem', cursor: 'pointer',
              }}
              onFocus={e => (e.currentTarget.style.borderColor = '#1a6b3c')}
              onBlur={e => (e.currentTarget.style.borderColor = 'var(--border-default)')}
            >
              <option value="">Select a reason</option>
              {REASONS.map(r => <option key={r} value={r}>{r}</option>)}
            </select>

            {/* Details */}
            <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>
              Additional Content <span style={{ fontWeight: 400, color: 'var(--text-muted)' }}>(Optional)</span>
            </label>
            <textarea
              value={details}
              onChange={e => setDetails(e.target.value)}
              placeholder="Please provide more details to help resolve the report"
              rows={4}
              style={{
                width: '100%', padding: '0.75rem 1rem', borderRadius: '10px',
                border: '1.5px solid var(--border-default)',
                background: 'var(--bg-surface)', color: 'var(--text-primary)',
                fontFamily: 'var(--font-body)', fontSize: '0.875rem',
                outline: 'none', resize: 'vertical', marginBottom: '1.25rem',
                transition: 'border-color 150ms ease',
              }}
              onFocus={e => (e.currentTarget.style.borderColor = '#1a6b3c')}
              onBlur={e => (e.currentTarget.style.borderColor = 'var(--border-default)')}
            />

            {/* Note */}
            <div style={{ display: 'flex', gap: '8px', padding: '0.75rem', borderRadius: '10px', background: 'rgba(232,168,76,0.08)', border: '1px solid rgba(232,168,76,0.2)', marginBottom: '1.5rem' }}>
              <AlertTriangle size={15} color="#b8832a" strokeWidth={2} style={{ flexShrink: 0, marginTop: '1px' }} />
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: '#b8832a', margin: 0, lineHeight: 1.5 }}>
                Reports are reviewed by our team within 24 hours
              </p>
            </div>

            {/* Actions */}
            <button
              onClick={submit}
              disabled={!reason}
              style={{
                width: '100%', padding: '0.85rem', borderRadius: '9999px',
                background: reason ? '#1a6b3c' : 'var(--bg-surface-2)',
                border: 'none', color: reason ? 'white' : 'var(--text-muted)',
                fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.9rem',
                cursor: reason ? 'pointer' : 'not-allowed',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px',
                marginBottom: '0.75rem', transition: 'all 150ms ease',
              }}
            >
              Submit Report <ArrowRight size={15} strokeWidth={2.5} />
            </button>
            <button onClick={onClose} style={{ width: '100%', padding: '0.7rem', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              Cancel
            </button>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(26,107,60,0.10)', border: '2px solid rgba(26,107,60,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#1a6b3c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)', margin: '0 0 0.5rem' }}>Report Submitted</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-muted)', margin: '0 0 1.5rem', lineHeight: 1.6 }}>
              Thank you. Our team will review this within 24 hours.
            </p>
            <button onClick={onClose} style={{ padding: '0.75rem 2rem', borderRadius: '9999px', background: '#1a6b3c', border: '1px solid #1a6b3c', color: 'white', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.875rem', cursor: 'pointer' }}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}