'use client';

import Link from 'next/link';
import { Shield, ArrowRight, CheckCircle2, Users, Building2, Star } from 'lucide-react';

const STATS = [
  { icon: Shield,       label: 'Escrow',  sub: 'Secured by Vetandpay' },
  { icon: Building2,    label: '2,400+',  sub: 'Properties Listed' },
  { icon: CheckCircle2, label: '1,000+',  sub: 'Verified Properties' },
  { icon: Users,        label: '8,500+',  sub: 'Trusted Users' },
  { icon: Star,         label: '4.9 / 5', sub: 'User Rating' },
];

// Fixed light-mode palette for stats bar
const T = {
  surface:  '#ffffff',
  surface2: '#f0ede6',
  border:   '#ddd8ce',
  text:     '#0f1c14',
  muted:    '#7a8f7e',
  brand:    '#1a6b3c',
};

export function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* ── Background ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {/* New image — luxury Nigerian-style villa aerial */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=85)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }} />
        {/* Multi-layer scrim for depth */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(8,16,12,0.55) 0%, rgba(8,16,12,0.35) 45%, rgba(8,16,12,0.65) 100%)',
        }} />
        {/* Green top-left glow */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 55% at 8% 15%, rgba(26,107,60,0.28) 0%, transparent 60%)',
        }} />
        {/* Gold bottom-right subtle */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 40% 35% at 90% 85%, rgba(232,168,76,0.10) 0%, transparent 60%)',
        }} />
        {/* Bottom fade to page */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px',
          background: 'linear-gradient(to bottom, transparent, #f8f6f1)',
        }} />
      </div>

      {/* ── Main content ── */}
      <div style={{
        position: 'relative', zIndex: 1, flex: 1,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center',
        width: '100%', maxWidth: '1280px',
        marginInline: 'auto',
        padding: 'calc(68px + clamp(2.5rem, 6vw, 5rem)) clamp(1rem, 5vw, 3rem) clamp(4rem, 8vw, 7rem)',
      }}>

        {/* Eyebrow */}
        <div
          className="animate-fade-up"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '0.4rem 1.1rem',
            borderRadius: '9999px',
            background: 'rgba(255,255,255,0.10)',
            border: '1px solid rgba(255,255,255,0.22)',
            backdropFilter: 'blur(10px)',
            marginBottom: '1.5rem',
          }}
        >
          <Shield size={13} color="#e8a84c" strokeWidth={2.5} />
          <span style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '0.7rem', fontWeight: 700,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.92)',
          }}>
            Nigeria&apos;s Most Secure Property Network
          </span>
        </div>

        {/* Headline — white */}
        <h1
          className="animate-fade-up delay-100"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            color: '#ffffff',
            maxWidth: '900px',
            margin: '0 0 0.08em',
          }}
        >
          End Land Fraud in Nigeria.
        </h1>

        {/* Headline — gold */}
        <h1
          className="animate-fade-up delay-200"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(1.9rem, 4.2vw, 3.4rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: '#e8a84c',
            maxWidth: '900px',
            margin: '0 0 1.5rem',
          }}
        >
          Buy, Rent, and Verify with Confidence.
        </h1>

        {/* Sub */}
        <p
          className="animate-fade-up delay-300"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: 'rgba(255,255,255,0.65)',
            fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
            lineHeight: 1.75,
            maxWidth: '600px',
            margin: '0 0 2.25rem',
          }}
        >
          Nigeria&apos;s first complete property ecosystem. Whether you&apos;re buying land,
          renting a short-let apartment, or listing your property — verify everything
          with AI, lawyers, surveyors, and facility managers. Payments secured by escrow.
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-up delay-400"
          style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2rem' }}
        >
          {/* Primary — gold */}
          <Link
            href="/listings"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '0.9rem 2.1rem',
              borderRadius: '9999px',
              background: '#e8a84c',
              color: '#0d3d22',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 800, fontSize: '0.95rem',
              textDecoration: 'none',
              boxShadow: '0 6px 24px rgba(232,168,76,0.45)',
              transition: 'all 220ms ease',
            }}
            onMouseEnter={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = '#f2c06e'; a.style.transform = 'translateY(-2px)'; a.style.boxShadow = '0 10px 32px rgba(232,168,76,0.55)'; }}
            onMouseLeave={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = '#e8a84c'; a.style.transform = 'none'; a.style.boxShadow = '0 6px 24px rgba(232,168,76,0.45)'; }}
          >
            Browse Properties <ArrowRight size={17} />
          </Link>

          {/* Secondary — white ghost */}
          <Link
            href="/listings/new"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '0.9rem 2.1rem',
              borderRadius: '9999px',
              background: 'rgba(255,255,255,0.10)',
              border: '1.5px solid rgba(255,255,255,0.38)',
              backdropFilter: 'blur(8px)',
              color: '#ffffff',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700, fontSize: '0.95rem',
              textDecoration: 'none',
              transition: 'all 220ms ease',
            }}
            onMouseEnter={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = 'rgba(255,255,255,0.18)'; a.style.borderColor = 'rgba(255,255,255,0.6)'; }}
            onMouseLeave={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = 'rgba(255,255,255,0.10)'; a.style.borderColor = 'rgba(255,255,255,0.38)'; }}
          >
            List Properties <ArrowRight size={17} />
          </Link>
        </div>

        {/* Trust chips */}
        <div
          className="animate-fade-up delay-500"
          style={{ display: 'flex', alignItems: 'center', gap: '1.75rem', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          {['No upfront fees', 'Verified listings only', 'Escrow protected'].map(t => (
            <span key={t} style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.82rem', color: 'rgba(255,255,255,0.58)',
            }}>
              <CheckCircle2 size={13} color="#27ae60" strokeWidth={2.5} />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── Stats bar — always light ── */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          width: '100%', maxWidth: '1280px',
          marginInline: 'auto',
          padding: '0 clamp(1rem, 5vw, 3rem) clamp(2.5rem, 5vw, 4rem)',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '1px',
            background: T.border,
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 12px 40px rgba(15,28,20,0.13)',
          }}>
            {STATS.map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                style={{
                  background: T.surface,
                  padding: 'clamp(0.85rem, 2vw, 1.25rem) clamp(0.75rem, 1.5vw, 1.1rem)',
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  transition: 'background 150ms ease', cursor: 'default',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = T.surface2}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = T.surface}
              >
                <div style={{
                  width: '38px', height: '38px', borderRadius: '10px',
                  background: 'rgba(26,107,60,0.09)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Icon size={17} color={T.brand} strokeWidth={1.8} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <p style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(0.85rem, 1.3vw, 0.97rem)',
                    color: T.text, lineHeight: 1.2, margin: 0,
                  }}>
                    {label}
                  </p>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.72rem', color: T.muted,
                    margin: 0, lineHeight: 1.4,
                  }}>
                    {sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}