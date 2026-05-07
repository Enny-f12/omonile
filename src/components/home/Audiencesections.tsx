'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react';

/* ─── SHARED CHECK ITEM ─────────────────────────────────────── */
function CheckItem({ label, color }: { label: string; color: string }) {
  return (
    <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <span style={{
        width: '22px', height: '22px', borderRadius: '50%', flexShrink: 0,
        background: `${color}18`, border: `1.5px solid ${color}40`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M2 5l2.5 2.5L8 3" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span style={{
        fontFamily: 'var(--font-body)', fontSize: '0.88rem',
        fontWeight: 500, color: 'inherit',
      }}>
        {label}
      </span>
    </li>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 1 — BUYERS
   Layout: Full-width dark green, image fills right half,
   content left, overlapping pill stats at bottom
══════════════════════════════════════════════════════════════ */
export function ForBuyers() {
  const features = [
    'Lawyer-verified land titles',
    'Instant AI land verification',
    'Escrow payment protection',
    'GIS risk & flood mapping',
    'Access to property lawyers',
    'Federal registry search',
    'Fair market pricing data',
    'Blockchain certificates',
  ];

  return (
    <section style={{ position: 'relative', overflow: 'hidden',background: 'var(--bg-surface-2)' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #e8a84c 0%, #f2c06e 50%, #e8a84c 100%)' }} />
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        minHeight: '580px',
      }} className="audience-layout">

        {/* Left: content */}
        <div style={{
          padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          position: 'relative', zIndex: 2,
        }}>
          {/* Eyebrow */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '0.35rem 0.85rem', borderRadius: '9999px',
            background: 'rgba(232,168,76,0.15)', border: '1px solid rgba(232,168,76,0.3)',
            width: 'fit-content', marginBottom: '1.25rem',
          }}>
            <ShieldCheck size={13} color="#e8a84c" strokeWidth={2.5} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#e8a84c' }}>
              For Buyers
            </span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            color: 'var(--text-primary)', letterSpacing: '-0.03em',
            lineHeight: 1.1, marginBottom: '1rem',
          }}>
            Buy land & property<br />
            <span style={{color: '#b8832a' }}>with zero risk.</span>
          </h2>

          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '0.95rem',
            color: 'var(--text-muted)', lineHeight: 1.7,
            marginBottom: '2rem', maxWidth: '380px',
          }}>
            Never fall victim to land fraud again. Every property is verified by lawyers, surveyors, and AI before you spend a naira.
          </p>

          {/* Feature list 2-col */}
          <ul style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: '0.7rem 1.5rem', listStyle: 'none',
            marginBottom: '2.5rem', color: 'var(--text-secondary)',
          }} className="feature-2col">
            {features.map(f => <CheckItem key={f} label={f} color="#e8a84c" />)}
          </ul>

          {/* CTA */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link href="/listings" style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              padding: '0.85rem 1.75rem', borderRadius: '9999px',
              background: '#e8a84c', color: '#0d3d22',
              fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.9rem',
              textDecoration: 'none',
              boxShadow: '0 6px 24px rgba(232,168,76,0.4)',
              transition: 'all 200ms ease',
            }}
              onMouseEnter={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.transform = 'translateY(-2px)'; a.style.boxShadow = '0 10px 30px rgba(232,168,76,0.5)'; }}
              onMouseLeave={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.transform = 'none'; a.style.boxShadow = '0 6px 24px rgba(232,168,76,0.4)'; }}
            >
              Browse Properties <ArrowRight size={16} />
            </Link>
            <Link href="/verify" style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              padding: '0.85rem 1.75rem', borderRadius: '9999px',
              border: '1.5px solid rgba(255,255,255,0.8)', color: 'rgba(255,255,255, 1)',
              fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.9rem',
              textDecoration: 'none', transition: 'all 200ms ease',
            }}
              onMouseEnter={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.borderColor = 'rgba(255,255,255,0.5)'; a.style.color = 'white'; }}
              onMouseLeave={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.borderColor = 'rgba(255,255,255,0.2)'; a.style.color = 'rgba(255,255,255,0.8)'; }}
            >
              Verify a Property
            </Link>
          </div>
        </div>

        {/* Right: image with overlay stats */}
        <div style={{ position: 'relative', minHeight: '480px' }}>
          <Image
            src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=900&q=85"
            alt="Property buyer"
            fill
            sizes="50vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          {/* Dark overlay */}
         <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to left, var(--bg-surface-2) 0%, transparent 40%)' }} />

          {/* Floating stat cards */}
          <div style={{ position: 'absolute', bottom: '2rem', right: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {[
              { label: 'Properties Verified', value: '1,000+', color: '#000000' },
              { label: 'Fraud Cases Prevented', value: '400+', color: '#000000' },
            ].map(s => (
              <div key={s.label} style={{
                padding: '0.75rem 1.1rem',
                borderRadius: '14px',
                background: '#e8a84c', boxShadow: '0 8px 32px rgba(232,168,76,0.45)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.1)',
                
              }}>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem', color: s.color, margin: 0, lineHeight: 1 }}>{s.value}</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: '#000000', margin: '0.25rem 0 0' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 2 — SELLERS
   Layout: Light warm background, full-bleed image left half,
   features on right, bold typography
══════════════════════════════════════════════════════════════ */
export function ForSellers() {
  const features = [
    'Escrow protects your payment',
    'Listing analytics dashboard',
    'Direct connection to buyers',
    '"Verified" badge builds trust',
    'Reach diaspora Nigerians',
    'Competitive commission rates',
    'Professional photo showcase',
    'Facility manager support',
  ];

  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg-surface-2)' , marginTop: '40px',}}>
      {/* Top accent line */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #e8a84c 0%, #f2c06e 50%, #e8a84c 100%)' }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '580px' }} className="audience-layout">

       

        {/* Right: content */}
        <div style={{
          padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}>
          {/* Eyebrow */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '0.35rem 0.85rem', borderRadius: '9999px',
            background: 'rgba(232,168,76,0.12)', border: '1px solid rgba(232,168,76,0.3)',
            width: 'fit-content', marginBottom: '1.25rem',
          }}>
            <TrendingUp size={13} color="#b8832a" strokeWidth={2.5} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#b8832a' }}>
              For Sellers & Owners
            </span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            color: 'var(--text-primary)', letterSpacing: '-0.03em',
            lineHeight: 1.1, marginBottom: '1rem',
          }}>
            List smarter.<br />
            <span style={{ color: '#b8832a' }}>Sell to the right buyer.</span>
          </h2>

          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '0.95rem',
            color: 'var(--text-muted)', lineHeight: 1.7,
            marginBottom: '2rem', maxWidth: '380px',
          }}>
            Your property deserves a verified audience. Reach serious buyers locally and in the diaspora — with full escrow protection.
          </p>

          <ul style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: '0.7rem 1.5rem', listStyle: 'none',
            marginBottom: '2.5rem', color: 'var(--text-secondary)',
          }} className="feature-2col">
            {features.map(f => <CheckItem key={f} label={f} color="#b8832a" />)}
          </ul>

          <div>
            <Link href="/listings/new" style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              padding: '0.85rem 1.75rem', borderRadius: '9999px',
               background: '#e8a84c', color: '#0d3d22',
              fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.9rem',
              textDecoration: 'none', boxShadow: '0 6px 24px rgba(26,107,60,0.3)',
              transition: 'all 200ms ease',
            }}
              onMouseEnter={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = '#22883f'; a.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = '#1a6b3c'; a.style.transform = 'none'; }}
            >
              List your Property <ArrowRight size={16} />
            </Link>
          </div>
        </div>

         {/* Left: image */}
        <div style={{ position: 'relative', minHeight: '480px' }}>
          <Image
            src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=900&q=85"
            alt="Property seller"
            fill
            sizes="50vw"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to left, var(--bg-surface-2) 0%, transparent 40%)' }} />

          {/* Verified badge floating */}
          <div style={{
            position: 'absolute', bottom: '2.5rem', left: '2rem',
            display: 'flex', alignItems: 'center', gap: '10px',
            padding: '0.85rem 1.25rem', borderRadius: '14px',
            background: '#e8a84c', boxShadow: '0 8px 32px rgba(232,168,76,0.45)',
          }}>
            <ShieldCheck size={22} color="#0f1c14" strokeWidth={2.5} />
            <div>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.9rem', color: '#0f1c14', margin: 0, lineHeight: 1.1 }}>Verified Seller</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', color: 'rgba(15,28,20,0.65)', margin: '0.15rem 0 0' }}>Badge increases views by 3×</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 3 — RENTERS
   Layout: Split dark + light. Left: image. Right: content
   on a very dark background. Feels premium / hospitality
══════════════════════════════════════════════════════════════ */
export function ForRenters() {
  const features = [
    'Property matches photos exactly',
    'Clean, safe accommodations',
    'Easy online booking',
    '24/7 guest support',
    'Escrow protects your payment',
    'Neighborhood safety scores',
    'Facility manager verified',
    'Real, verified guest reviews',
  ];

  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: '#0c1410', marginTop: '40px' }}>
         
      {/* Subtle green glow top-right */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(26,107,60,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '580px' }} className="audience-layout">

        {/* Left: image */}
        <div style={{ position: 'relative', minHeight: '480px' }}>
          <Image
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&q=85"
            alt="Short-let rental"
            fill
            sizes="50vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to left, #0c1410 0%, transparent 40%)' }} />

          {/* Rating badge */}
          <div style={{
            position: 'absolute', top: '2rem', left: '2rem',
            padding: '0.75rem 1.1rem', borderRadius: '14px',
            background: 'rgba(12,20,16,0.85)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '0.2rem' }}>
              {[1,2,3,4,5].map(i => <svg key={i} width="12" height="12" viewBox="0 0 12 12"><polygon points="6,1 7.5,4.5 11,5 8.5,7.5 9,11 6,9.5 3,11 3.5,7.5 1,5 4.5,4.5" fill="#e8a84c" /></svg>)}
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', color: '#e8a84c', marginLeft: '4px' }}>4.9</span>
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.55)', margin: 0 }}>8,500+ verified guests</p>
          </div>
        </div>

        {/* Right: content */}
        <div style={{
          padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}>
          {/* Eyebrow */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '0.35rem 0.85rem', borderRadius: '9999px',
            background: 'rgba(26,107,60,0.15)', border: '1px solid rgba(26,107,60,0.3)',
            width: 'fit-content', marginBottom: '1.25rem',
          }}>
            <Sparkles size={13} color="#4ade80" strokeWidth={2.5} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4ade80' }}>
              For Renters & Short-Let Guests
            </span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            color: '#ffffff', letterSpacing: '-0.03em',
            lineHeight: 1.1, marginBottom: '1rem',
          }}>
            Book your stay.<br />
            <span style={{ color: '#4ade80' }}>No scams. No surprises.</span>
          </h2>

          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '0.95rem',
            color: 'rgba(255,255,255,0.45)', lineHeight: 1.7,
            marginBottom: '2rem', maxWidth: '380px',
          }}>
            Every property is personally inspected by a facility manager. What you see is exactly what you get.
          </p>

          <ul style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: '0.7rem 1.5rem', listStyle: 'none',
            marginBottom: '2.5rem', color: 'rgba(255,255,255,0.75)',
          }} className="feature-2col">
            {features.map(f => <CheckItem key={f} label={f} color="#4ade80" />)}
          </ul>

          <div>
            <Link href="/listings?type=short-let" style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              padding: '0.85rem 1.75rem', borderRadius: '9999px',
              background: '#1a6b3c', color: '#ffffff',
              fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.9rem',
              textDecoration: 'none', boxShadow: '0 6px 24px rgba(26,107,60,0.4)',
              transition: 'all 200ms ease',
            }}
              onMouseEnter={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = '#22883f'; a.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = '#1a6b3c'; a.style.transform = 'none'; }}
            >
              Book your stay <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .audience-layout {
            grid-template-columns: 1fr !important;
          }
          .feature-2col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}