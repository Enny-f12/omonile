'use client';

import { useState} from 'react';
import Link from 'next/link';
import { Mail, ArrowRight, CheckCircle2, Bell, Rocket, Heart } from 'lucide-react';

const FEATURES = [
  'Verified property listings across Lagos & Nigeria',
  'AI-powered land fraud detection',
  '6-layer verification with escrow protection',
  'Facility manager inspections for short-lets',
  'Blockchain-backed title certificates',
];

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) { setSubmitted(true); setEmail(''); }
  };

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #0d3d22 0%, #1a6b3c 55%, #0f4a28 100%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: 'clamp(2rem, 6vw, 4rem) clamp(1rem, 5vw, 3rem)',
      position: 'relative', overflow: 'hidden',
      textAlign: 'center',
    }}>

      {/* Decorative rings */}
      <div style={{ position: 'absolute', top: '-120px', right: '-120px', width: '480px', height: '480px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '340px', height: '340px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.06)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '40%', left: '-160px', width: '320px', height: '320px', borderRadius: '50%', border: '1px solid rgba(232,168,76,0.08)', pointerEvents: 'none' }} />

     

      {/* Badge */}
      <span style={{ display: 'inline-block', padding: '0.3rem 1rem', borderRadius: '9999px', background: 'rgba(232,168,76,0.18)', border: '1px solid rgba(232,168,76,0.35)', fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#e8a84c', marginBottom: '1.25rem', marginTop:'1.5rem' }}>
        <Rocket size={13} strokeWidth={2} style={{ display: 'inline', marginRight: '5px', verticalAlign: 'middle' }} /> Launching Soon
      </span>

      {/* Heading */}
      <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.08, margin: '0 0 1rem', maxWidth: '680px' }}>
        Nigeria&apos;s Safest Property<br />
        <span style={{ color: '#e8a84c' }}>Platform is Coming.</span>
      </h1>

      <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.9rem, 1.6vw, 1.05rem)', color: 'rgba(255,255,255,0.65)', maxWidth: '480px', lineHeight: 1.75, margin: '0 0 2.5rem' }}>
        We&apos;re putting the final touches on Omonile App. Be the first to buy, rent, and verify property safely in Nigeria.
      </p>

      {/* Email signup */}
      <div style={{ width: '100%', maxWidth: '440px', marginBottom: '2.5rem' }}>
        {!submitted ? (
          <>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: '0.75rem', letterSpacing: '0.07em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
              <Bell size={13} /> Get notified when we launch
            </p>
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem' }}>
              <div style={{ flex: 1, position: 'relative' }}>
                <Mail size={15} color="rgba(255,255,255,0.35)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem 0.85rem 2.65rem',
                    borderRadius: '9999px',
                    border: '1px solid rgba(255,255,255,0.18)',
                    background: 'rgba(255,255,255,0.09)',
                    backdropFilter: 'blur(8px)',
                    color: '#ffffff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '0.85rem 1.35rem', borderRadius: '9999px',
                  background: '#e8a84c', border: '1px solid #e8a84c',
                  color: '#0d3d22', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.875rem',
                  cursor: 'pointer', flexShrink: 0, transition: 'all 150ms ease',
                  boxShadow: '0 4px 16px rgba(232,168,76,0.35)',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.background = '#f2c06e'}
                onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.background = '#e8a84c'}
              >
                Notify Me <ArrowRight size={15} strokeWidth={2.5} />
              </button>
            </form>
          </>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '1rem 1.5rem', borderRadius: '12px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
            <CheckCircle2 size={20} color="#4ade80" strokeWidth={2} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>
              You&apos;re on the list! We&apos;ll notify you at launch.
            </span>
          </div>
        )}
      </div>

      {/* Features */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '2.5rem', alignItems: 'center' }}>
        {FEATURES.map(f => (
          <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckCircle2 size={13} color="#4ade80" strokeWidth={2.5} style={{ flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)' }}>{f}</span>
          </div>
        ))}
      </div>

      {/* Nav links */}
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '1.5rem' }}>
        {[
          { label: '← Back Home',    href: '/' },
          { label: 'How It Works',   href: '/how-it-works' },
          { label: 'About Us',     href: '/about' },
        ].map(l => (
          <Link key={l.label} href={l.href}
            style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', fontWeight: 600, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 150ms ease' }}
            onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.85)'}
            onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.4)'}
          >
            {l.label}
          </Link>
        ))}
      </div>

      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.2)' }}>
        © {new Date().getFullYear()} Chrivon Tech Solutions Ltd. Made with <Heart size={18} color='#dc2626' fill='#dc2626' strokeWidth={0} style={{ display: 'inline', verticalAlign: 'middle', margin: '0 2px' }} /> in Nigeria.
      </p>
    </main>
  );
}