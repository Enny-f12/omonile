'use client';

import { useState } from 'react';
import { Copy, Check, Share2, TrendingUp, Users, ArrowRight, Wallet } from 'lucide-react';

const LEADERBOARD = [
  { rank: 1, name: 'Adebayo O.', initials: 'AO', referrals: 12, earnings: '₦120,000', color: '#e8a84c' },
  { rank: 2, name: 'Chidinma E.', initials: 'CE', referrals: 8, earnings: '₦80,000', color: '#1a6b3c' },
  { rank: 3, name: 'Mr. Oluwole', initials: 'MO', referrals: 5, earnings: '₦50,000', color: '#22883f' },
];



const STEPS = [
  { n: '01', label: 'Share your unique referral link with friends' },
  { n: '02', label: 'Friend signs up and verifies or books a property' },
  { n: '03', label: 'You earn ₦10,000 — they save ₦5,000' },
];

export function ReferralProgram() {
  const [copied, setCopied] = useState(false);
  const referralLink = 'https://omonile.app/r/adebayo234';

  const copy = () => {
    navigator.clipboard.writeText(referralLink).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section style={{ padding: 'clamp(2rem, 6vw, 5.5rem) 0', background: 'var(--bg-surface-2)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(232,168,76,0.06) 0%, transparent 70%)' }} />

      <div style={{ width: '100%', maxWidth: '1100px', marginInline: 'auto', padding: '0 clamp(1rem, 4vw, 3rem)', position: 'relative', zIndex: 1 }}>

        {/* ── Hero banner ── */}
        <div style={{
          background: 'linear-gradient(135deg, #0d3d22 0%, #1a6b3c 60%, #0f4a28 100%)',
          borderRadius: '20px', padding: 'clamp(1.5rem, 4vw, 3rem)',
          textAlign: 'center', marginBottom: '2rem',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '220px', height: '220px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.06)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-80px', left: '-40px', width: '260px', height: '260px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.04)', pointerEvents: 'none' }} />

          <span style={{ display: 'inline-block', padding: '0.28rem 0.85rem', borderRadius: '9999px', background: 'rgba(232,168,76,0.18)', border: '1px solid rgba(232,168,76,0.35)', color: '#e8a84c', fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            ⏱ Limited time offer
          </span>

          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(1.4rem, 3.5vw, 2.8rem)', color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 0.85rem' }}>
            Earn <span style={{ color: '#e8a84c' }}>₦10,000</span> for Every Friend You Refer
          </h2>
          
          <div className="steps-container">
            {STEPS.map((s, i) => (
              <div key={s.n} className="step-wrapper">
                <div className="step-item">
                  <span className="step-number">{s.n}</span>
                  <p className="step-label">{s.label}</p>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="step-arrow-box">
                    <ArrowRight className="step-arrow-icon" size={16} color="rgba(232,168,76,0.4)" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Main grid: Share + Analytics ── */}
        <div className="referral-grid">
          {/* Share card */}
          <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '16px', padding: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', letterSpacing: '-0.01em', margin: '0 0 0.3rem' }}>Share Your Link</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0 0 1.25rem' }}>Copy your unique code or share directly to your circles</p>

            <div className="share-input-group">
              <div className="link-display-box">
                <Share2 size={14} color="var(--text-muted)" strokeWidth={2} style={{ flexShrink: 0 }} />
                <span className="link-text">{referralLink}</span>
              </div>
              <button onClick={copy} className="copy-action-btn" style={{ background: copied ? '#1a6b3c' : '#e8a84c', color: copied ? 'white' : '#0f1c14' }}>
                {copied ? <Check size={14} strokeWidth={2.5} /> : <Copy size={14} strokeWidth={2} />}
                {copied ? 'Copied!' : 'Copy Link'}
              </button>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
              {[
                { label: 'WhatsApp', color: '#25d366', href: `https://wa.me/?text=Join%20Omonile%20App%20${referralLink}` },
                { label: 'Facebook', color: '#1877f2', href: `https://facebook.com/sharer?u=${referralLink}` },
                { label: 'Twitter',  color: '#1da1f2', href: `https://twitter.com/intent/tweet?url=${referralLink}` },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="social-pill-btn" onMouseEnter={e => { e.currentTarget.style.borderColor = s.color; e.currentTarget.style.color = s.color; }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-default)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Analytics card */}
          <div style={{ background: 'linear-gradient(135deg, #1a6b3c 0%, #0d3d22 100%)', borderRadius: '16px', padding: '1.5rem', boxShadow: '0 8px 32px rgba(26,107,60,0.22)' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', margin: '0 0 1rem' }}>Referral Analytics</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', margin: '0 0 0.2rem' }}>Your Earnings</p>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', color: '#e8a84c', margin: 0 }}>₦25,000</p>
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', margin: '0 0 0.2rem' }}>Friends Referred</p>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', color: '#ffffff', margin: 0 }}>03</p>
              </div>
            </div>
            <button className="withdraw-btn">
              <Wallet size={15} strokeWidth={2.5} /> Withdraw Earnings
            </button>
          </div>
        </div>

        

        {/* ── Leaderboard ── */}
        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ padding: '1.1rem 1.5rem', borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Users size={16} color="#e8a84c" strokeWidth={2} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)', margin: 0 }}>Top Referrers of the Month</h3>
          </div>
          {LEADERBOARD.map((u, i) => (
            <div key={u.rank} className="leaderboard-item" style={{ borderTop: i > 0 ? '1px solid var(--border-subtle)' : 'none' }}>
              <span className="rank-num" style={{ color: u.rank === 1 ? '#e8a84c' : 'var(--text-muted)' }}>{u.rank}</span>
              <div className="avatar-circle" style={{ background: `${u.color}18`, border: `2px solid ${u.color}40` }}>
                <span style={{ color: u.color }}>{u.initials}</span>
              </div>
              <div className="user-info">
                <p className="user-name">{u.name}</p>
                <p className="user-stats">{u.referrals} referrals this month</p>
              </div>
              <div className="user-earnings">
                <p className="earn-val">{u.earnings}</p>
                <p className="earn-label">earned</p>
              </div>
            </div>
          ))}
        </div>

        
      </div>

      <style>{`
        .steps-container { display: flex; justify-content: center; align-items: center; gap: 0; margin-top: 2rem; flex-wrap: wrap; }
        .step-wrapper { display: flex; align-items: center; }
        .step-item { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; max-width: 160px; padding: 0 1rem; }
        .step-number { width: 36px; height: 36px; border-radius: 50%; background: rgba(232,168,76,0.18); border: 1.5px solid rgba(232,168,76,0.35); display: flex; align-items: center; justify-content: center; font-family: var(--font-display); font-weight: 800; font-size: 0.75rem; color: #e8a84c; }
        .step-label { font-family: var(--font-body); font-size: 0.8rem; color: rgba(255,255,255,0.7); margin: 0; text-align: center; line-height: 1.45; }
        .step-arrow-box { flex-shrink: 0; margin-bottom: 1.2rem; }

        .referral-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin-bottom: 1.25rem; }

        .share-input-group { display: flex; gap: 0.5rem; }
        .link-display-box { flex: 1; display: flex; align-items: center; gap: 8px; padding: 0.65rem 1rem; border-radius: 10px; border: 1.5px solid var(--border-default); background: var(--bg-surface-2); min-width: 0; }
        .link-text { font-family: var(--font-body); font-size: 0.8rem; color: var(--text-muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        
        .copy-action-btn { display: inline-flex; align-items: center; gap: 6px; padding: 0.65rem 1.1rem; border-radius: 10px; border: none; font-family: var(--font-body); font-weight: 700; font-size: 0.8rem; cursor: pointer; transition: all 200ms ease; flex-shrink: 0; }
        
        .social-pill-btn { display: inline-flex; align-items: center; gap: 5px; padding: 0.45rem 0.85rem; border-radius: 8px; border: 1.5px solid var(--border-default); background: transparent; color: var(--text-secondary); font-family: var(--font-body); font-weight: 600; font-size: 0.75rem; text-decoration: none; transition: all 150ms ease; }

        .withdraw-btn { width: 100%; display: flex; align-items: center; justify-content: center; gap: 7px; padding: 0.8rem; border-radius: 10px; background: #e8a84c; border: none; color: #0d3d22; font-family: var(--font-body); font-weight: 800; font-size: 0.85rem; text-transform: uppercase; cursor: pointer; transition: all 150ms ease; box-shadow: 0 4px 16px rgba(232,168,76,0.35); }

        .leaderboard-item { display: flex; align-items: center; gap: 1rem; padding: 1rem 1.5rem; transition: background 150ms ease; }
        .leaderboard-item:hover { background: var(--bg-surface-2); }
        .rank-num { font-family: var(--font-display); font-weight: 800; font-size: 0.95rem; width: 20px; flex-shrink: 0; }
        .avatar-circle { width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .avatar-circle span { font-family: var(--font-display); font-weight: 800; font-size: 0.68rem; }
        .user-info { flex: 1; min-width: 0; }
        .user-name { font-family: var(--font-body); font-weight: 600; font-size: 0.9rem; color: var(--text-primary); margin: 0 0 0.1rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .user-stats { font-family: var(--font-body); font-size: 0.72rem; color: var(--text-muted); margin: 0; }
        .user-earnings { text-align: right; flex-shrink: 0; }
        .earn-val { font-family: var(--font-display); font-weight: 700; font-size: 0.95rem; color: #1a6b3c; margin: 0 0 0.1rem; }
        .earn-label { font-family: var(--font-body); font-size: 0.72rem; color: var(--text-muted); margin: 0; }

        @media (max-width: 768px) {
          .referral-grid { grid-template-columns: 1fr !important; }
          .steps-container { flex-direction: column; gap: 1.5rem; }
          .step-wrapper { flex-direction: column; }
          .step-arrow-icon { transform: rotate(90deg); margin-top: 0.5rem; }
        }

        @media (max-width: 480px) {
          .share-input-group { flex-direction: column; }
          .copy-action-btn { width: 100%; justify-content: center; }
          .link-display-box { width: 100%; }
          .leaderboard-item { padding: 0.8rem 1rem; gap: 0.75rem; }
          .referral-grid { max-width:300px; display: flex; flex-direction: column; margin-left: auto; margin-right: auto; gap:1.5rem; }
        }
      `}</style>
    </section>
  );
}