'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import {
  Shield, ArrowRight, CheckCircle2, Users, Building2, Star,
  Scale, Ruler, Wrench, Clock, BadgeCheck, Banknote, MapPin, Lock
} from 'lucide-react';

const BADGES = [
  { icon: Lock,         label: 'Secured by Vetandpay',    sub: 'Escrow Protected' },
  { icon: Building2,    label: '2,400+ Properties',       sub: 'Listed & Active' },
  { icon: BadgeCheck,   label: '1,000+ Verified',         sub: 'Properties Inspected' },
  { icon: Users,        label: '8,500+ Users',            sub: 'Trusted Community' },
  { icon: Star,         label: '4.9 / 5 Rating',          sub: 'User Satisfaction' },
  { icon: MapPin,       label: 'Lagos State Pending',     sub: 'Govt. Accreditation' },
  { icon: Shield,       label: 'NDPC Compliant',          sub: 'Data Privacy Certified' },
  { icon: Banknote,     label: '100% Money-Back',         sub: 'Guarantee on Fraud' },
  { icon: Scale,        label: '50+ Lawyers',             sub: 'Verified & Vetted' },
  { icon: Ruler,        label: '30+ Surveyors',           sub: 'Verified & Active' },
  { icon: Wrench,       label: '100+ Facility Mgrs',      sub: 'Verified On-Platform' },
  { icon: Clock,        label: '< 48hr Response',         sub: 'Average Resolution' },
];

const BADGES_LOOP = [...BADGES, ...BADGES];

export function Hero() {
  const styleInjected = useRef(false);

  useEffect(() => {
    if (styleInjected.current) return;
    styleInjected.current = true;

    const css = `
      @keyframes omonile-marquee {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .omonile-marquee-track {
        display: flex;
        width: max-content;
        animation: omonile-marquee 38s linear infinite;
      }
      .omonile-marquee-track:hover {
        animation-play-state: paused;
      }
      .omonile-cta-gold {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 0.9rem 2.1rem;
        border-radius: 9999px;
        background: #e8a84c;
        color: #0d3d22;
        font-family: 'DM Sans', sans-serif;
        font-weight: 800;
        font-size: 0.95rem;
        text-decoration: none;
        box-shadow: 0 6px 24px rgba(232,168,76,0.45);
        transition: background 220ms ease, transform 220ms ease, box-shadow 220ms ease;
      }
      .omonile-cta-gold:hover {
        background: #f2c06e;
        transform: translateY(-2px);
        box-shadow: 0 10px 32px rgba(232,168,76,0.55);
      }
      .omonile-cta-ghost {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 0.9rem 2.1rem;
        border-radius: 9999px;
        background: rgba(255,255,255,0.10);
        border: 1.5px solid rgba(255,255,255,0.38);
        backdrop-filter: blur(8px);
        color: #ffffff;
        font-family: 'DM Sans', sans-serif;
        font-weight: 700;
        font-size: 0.95rem;
        text-decoration: none;
        transition: background 220ms ease, border-color 220ms ease;
      }
      .omonile-cta-ghost:hover {
        background: rgba(255,255,255,0.18);
        border-color: rgba(255,255,255,0.6);
      }
        .omonile-cta-outline {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 0.9rem 2.1rem;
        border-radius: 9999px;
        background: rgba(255,255,255,0.10);
        border: 1.5px solid rgba(255,255,255,1);
        backdrop-filter: blur(8px);
        color: #000000;
        font-family: 'DM Sans', sans-serif;
        font-weight: 700;
        font-size: 0.95rem;
        text-decoration: none;
        transition: background 220ms ease, border-color 220ms ease;
      }
      .omonile-cta-outline:hover {
        background: rgba(255,255,255,0.18);
        border-color: rgba(255,255,255,0.6);
      }
      .omonile-badge-cell {
        background: #ffffff;
        transition: background 150ms ease;
        cursor: default;
      }
      .omonile-badge-cell:hover {
        background: #f0ede6;
      }
      @media (prefers-reduced-motion: reduce) {
        .omonile-marquee-track { animation: none; }
      }
    `;

    const el = document.createElement('style');
    el.setAttribute('data-omonile-hero', '1');
    el.textContent = css;
    document.head.appendChild(el);
  }, []);

  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* ── Background ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1920&q=90)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(165deg, rgba(6,14,10,0.72) 0%, rgba(6,14,10,0.45) 50%, rgba(6,14,10,0.70) 100%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 65% 60% at 5% 10%, rgba(26,107,60,0.35) 0%, transparent 65%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 45% 40% at 92% 88%, rgba(232,168,76,0.14) 0%, transparent 60%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 55%, rgba(4,10,7,0.55) 100%)',
        }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '220px',
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
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '0.4rem 1.1rem',
          borderRadius: '9999px',
          background: 'rgba(255,255,255,0.10)',
          border: '1px solid rgba(255,255,255,0.22)',
          backdropFilter: 'blur(10px)',
          marginBottom: '1.5rem',
        }}>
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

        <h1 style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 900,
          fontSize: 'clamp(2.2rem, 5vw, 4rem)',
          lineHeight: 1.08,
          letterSpacing: '-0.03em',
          color: '#ffffff',
          maxWidth: '900px',
          margin: '0 0 0.08em',
        }}>
          End Land Fraud in Nigeria.
        </h1>

        <h1 style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 900,
          fontSize: 'clamp(1.9rem, 4.2vw, 3.4rem)',
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          color: '#e8a84c',
          maxWidth: '900px',
          margin: '0 0 1.5rem',
        }}>
          Buy, Rent, and Verify with Confidence.
        </h1>

        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          color: 'rgba(255,255,255,0.65)',
          fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
          lineHeight: 1.75,
          maxWidth: '600px',
          margin: '0 0 2.25rem',
        }}>
          Nigeria&apos;s first complete property ecosystem. Whether you&apos;re buying land,
          renting a short-let apartment, or listing your property — verify everything
          with AI, lawyers, surveyors, and facility managers. Payments secured by escrow.
        </p>

        {/* CTAs — className-only hover, no inline event handlers → no hydration mismatch */}
        <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2rem' }}>
          <Link href="/listings" className="omonile-cta-gold">
            Browse Properties <ArrowRight size={17} />
          </Link>
          <Link href="/listings/new" className="omonile-cta-ghost">
            List Properties <ArrowRight size={17} />
          </Link>
          <Link href="/listings/new" className="omonile-cta-ghost">
            I am a professional <ArrowRight size={17} />
          </Link>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
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

      {/* ── Scrolling Trust Badges ── */}
      <div style={{ position: 'relative', zIndex: 1, width: '100%', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: 'clamp(40px, 8vw, 100px)',
          background: 'linear-gradient(to right, #ffffff, transparent)',
          zIndex: 2, pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0,
          width: 'clamp(40px, 8vw, 100px)',
          background: 'linear-gradient(to left, #ffffff, transparent)',
          zIndex: 2, pointerEvents: 'none',
        }} />

        <div style={{
          width: '100%',
          background: '#ffffff',
          borderTop: '1px solid #ddd8ce',
          padding: 'clamp(0.75rem, 1.5vw, 1rem) 0',
        }}>
          <div className="omonile-marquee-track">
            {BADGES_LOOP.map(({ icon: Icon, label, sub }, i) => (
              <div
                key={`${label}-${i}`}
                className="omonile-badge-cell"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0 clamp(1.25rem, 2.5vw, 2rem)',
                  borderRight: '1px solid #ddd8ce',
                  flexShrink: 0,
                  whiteSpace: 'nowrap',
                }}
              >
                <div style={{
                  width: '34px', height: '34px', borderRadius: '9px',
                  background: 'rgba(26,107,60,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Icon size={15} color="#1a6b3c" strokeWidth={1.8} />
                </div>
                <div>
                  <p style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(0.75rem, 1.1vw, 0.85rem)',
                    color: '#0f1c14',
                    margin: 0, lineHeight: 1.2,
                  }}>
                    {label}
                  </p>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.68rem',
                    color: '#7a8f7e',
                    margin: 0, lineHeight: 1.3,
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