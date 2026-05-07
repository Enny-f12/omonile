'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Copy, Check, Share2, TrendingUp, Users, Clock, ArrowRight, Wallet } from 'lucide-react';

const LEADERBOARD = [
  { rank: 1, name: 'Adebayo O.',  initials: 'AO', referrals: 12, earnings: '₦120,000', color: '#e8a84c' },
  { rank: 2, name: 'Chidinma E.', initials: 'CE', referrals: 8,  earnings: '₦80,000',  color: '#1a6b3c' },
  { rank: 3, name: 'Mr. Oluwole', initials: 'MO', referrals: 5,  earnings: '₦50,000',  color: '#22883f' },
];

const REWARDS = [
  { action: 'Verifies a property',                    you: '₦10,000', friend: '₦5,000 off verification fee' },
  { action: 'Books a short-let (min. 2 nights)',       you: '₦10,000', friend: '₦5,000 off booking' },
  { action: 'Lists a property for sale',               you: '₦10,000', friend: 'Free verification (up to ₦50,000)' },
  { action: 'Signs a yearly rental lease',             you: '₦10,000', friend: '₦5,000 off first month' },
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
    <section style={{ padding: 'clamp(3rem, 6vw, 5.5rem) 0', background: 'var(--bg-surface-2)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(232,168,76,0.06) 0%, transparent 70%)' }} />

      <div style={{ width: '100%', maxWidth: '1100px', marginInline: 'auto', padding: '0 clamp(1rem, 4vw, 3rem)', position: 'relative', zIndex: 1 }}>

        {/* ── Hero banner ── */}
        <div style={{
          background: 'linear-gradient(135deg, #0d3d22 0%, #1a6b3c 60%, #0f4a28 100%)',
          borderRadius: '20px', padding: 'clamp(2rem, 4vw, 3rem)',
          textAlign: 'center', marginBottom: '2rem',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Decorative rings */}
          <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '220px', height: '220px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.06)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-80px', left: '-40px', width: '260px', height: '260px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.04)', pointerEvents: 'none' }} />

          {/* Limited time badge */}
          <span style={{ display: 'inline-block', padding: '0.28rem 0.85rem', borderRadius: '9999px', background: 'rgba(232,168,76,0.18)', border: '1px solid rgba(232,168,76,0.35)', color: '#e8a84c', fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            ⏱ Limited time offer
          </span>

          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 0.85rem' }}>
            Earn <span style={{ color: '#e8a84c' }}>₦10,000</span> for Every Friend You Refer
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', margin: '0 auto', maxWidth: '480px', lineHeight: 1.65 }}>
            Share Omonile App and earn rewards when they verify or book a property.
          </p>

          {/* Steps row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0', marginTop: '2rem', flexWrap: 'wrap' }}>
            {STEPS.map((s, i) => (
              <div key={s.n} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', maxWidth: '160px', padding: '0 1rem' }}>
                  <span style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(232,168,76,0.18)', border: '1.5px solid rgba(232,168,76,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.75rem', color: '#e8a84c' }}>{s.n}</span>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', margin: 0, textAlign: 'center', lineHeight: 1.45 }}>{s.label}</p>
                </div>
                {i < STEPS.length - 1 && (
                  <ArrowRight size={16} color="rgba(232,168,76,0.4)" style={{ flexShrink: 0, marginBottom: '1rem' }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Main grid: share + analytics ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }} className="referral-grid">

          {/* Share card */}
          <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '16px', padding: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', letterSpacing: '-0.01em', margin: '0 0 0.3rem' }}>Share Your Link</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0 0 1.25rem' }}>Copy your unique code or share directly to your circles</p>

            {/* Link input + copy */}
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px', padding: '0.65rem 1rem', borderRadius: '10px', border: '1.5px solid var(--border-default)', background: 'var(--bg-surface-2)' }}>
                <Share2 size={14} color="var(--text-muted)" strokeWidth={2} style={{ flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{referralLink}</span>
              </div>
              <button
                onClick={copy}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '0.65rem 1.1rem', borderRadius: '10px',
                  background: copied ? '#1a6b3c' : '#e8a84c',
                  border: 'none', color: copied ? 'white' : '#0f1c14',
                  fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.8rem',
                  cursor: 'pointer', transition: 'all 200ms ease', flexShrink: 0,
                }}
              >
                {copied ? <Check size={14} strokeWidth={2.5} /> : <Copy size={14} strokeWidth={2} />}
                {copied ? 'Copied!' : 'Copy Link'}
              </button>
            </div>

            {/* Share buttons */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {[
                { label: '📱 WhatsApp', color: '#25d366', href: `https://wa.me/?text=Join%20Omonile%20App%20${referralLink}` },
                { label: '👥 Facebook', color: '#1877f2', href: `https://facebook.com/sharer?u=${referralLink}` },
                { label: '🐦 Twitter',  color: '#1da1f2', href: `https://twitter.com/intent/tweet?url=${referralLink}` },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '5px',
                    padding: '0.45rem 0.85rem', borderRadius: '8px',
                    border: '1.5px solid var(--border-default)',
                    background: 'transparent', color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.75rem',
                    textDecoration: 'none', transition: 'all 150ms ease',
                  }}
                  onMouseEnter={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.borderColor = s.color; a.style.color = s.color; }}
                  onMouseLeave={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.borderColor = 'var(--border-default)'; a.style.color = 'var(--text-secondary)'; }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Analytics card */}
          <div style={{ background: 'linear-gradient(135deg, #1a6b3c 0%, #0d3d22 100%)', borderRadius: '16px', padding: '1.5rem', boxShadow: '0 8px 32px rgba(26,107,60,0.22)' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', margin: '0 0 1rem' }}>Referral Analytics</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', color: 'rgba(255,255,255,0.5)', margin: '0 0 0.2rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Your Earnings</p>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', color: '#e8a84c', letterSpacing: '-0.03em', margin: 0, lineHeight: 1 }}>₦25,000</p>
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', color: 'rgba(255,255,255,0.5)', margin: '0 0 0.2rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Friends Referred</p>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', color: '#ffffff', letterSpacing: '-0.03em', margin: 0, lineHeight: 1 }}>03</p>
              </div>
            </div>

            <div style={{ height: '1px', background: 'rgba(255,255,255,0.10)', marginBottom: '1rem' }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.4rem' }}>
              <Clock size={13} color="rgba(255,255,255,0.45)" strokeWidth={2} />
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', color: 'rgba(255,255,255,0.45)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Pending Rewards</p>
            </div>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.4rem', color: '#ffffff', letterSpacing: '-0.03em', margin: '0 0 1.25rem', lineHeight: 1 }}>₦15,000</p>

            <button style={{
              width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px',
              padding: '0.8rem', borderRadius: '10px',
              background: '#e8a84c', border: 'none', color: '#0d3d22',
              fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: '0.85rem',
              letterSpacing: '0.04em', textTransform: 'uppercase',
              cursor: 'pointer', transition: 'all 150ms ease',
              boxShadow: '0 4px 16px rgba(232,168,76,0.35)',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#f2c06e'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#e8a84c'; }}
            >
              <Wallet size={15} strokeWidth={2.5} /> Withdraw Earnings
            </button>
          </div>
        </div>

        {/* ── Reward table ── */}
        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '16px', overflow: 'hidden', marginBottom: '1.25rem', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ padding: '1.1rem 1.5rem', borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <TrendingUp size={16} color="#1a6b3c" strokeWidth={2} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)', margin: 0, letterSpacing: '-0.01em' }}>Reward Structure</h3>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--bg-surface-2)' }}>
                  {["Friend's Action", 'You Earn', 'Friend Saves'].map(h => (
                    <th key={h} style={{ padding: '0.75rem 1.5rem', textAlign: 'left', fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {REWARDS.map((r, i) => (
                  <tr key={i} style={{ borderTop: '1px solid var(--border-subtle)' }}>
                    <td style={{ padding: '0.9rem 1.5rem', fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{r.action}</td>
                    <td style={{ padding: '0.9rem 1.5rem', fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: '#1a6b3c', whiteSpace: 'nowrap' }}>{r.you}</td>
                    <td style={{ padding: '0.9rem 1.5rem', fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{r.friend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Leaderboard ── */}
        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ padding: '1.1rem 1.5rem', borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Users size={16} color="#e8a84c" strokeWidth={2} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)', margin: 0, letterSpacing: '-0.01em' }}>Top Referrers of this month</h3>
          </div>
          {LEADERBOARD.map((u, i) => (
            <div key={u.rank} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.5rem', borderTop: i > 0 ? '1px solid var(--border-subtle)' : 'none', transition: 'background 150ms ease' }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = 'var(--bg-surface-2)'}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = 'transparent'}
            >
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.95rem', color: u.rank === 1 ? '#e8a84c' : 'var(--text-muted)', width: '20px', flexShrink: 0 }}>{u.rank}</span>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: `${u.color}18`, border: `2px solid ${u.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.68rem', color: u.color }}>{u.initials}</span>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)', margin: '0 0 0.1rem' }}>{u.name}</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--text-muted)', margin: 0 }}>{u.referrals} referrals this month</p>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: '#1a6b3c', margin: '0 0 0.1rem' }}>{u.earnings}</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--text-muted)', margin: 0 }}>earned</p>
              </div>
            </div>
          ))}
        </div>

        {/* T&C */}
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '1.25rem', lineHeight: 1.6 }}>
          Rewards paid after friend completes first transaction. Max 50 referrals per user. Link expires after 30 days of inactivity.{' '}
          <Link href="/referral-terms" style={{ color: '#1a6b3c', fontWeight: 600 }}>Full terms →</Link>
        </p>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .referral-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}