'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  role: string;
  quote: string;
  name: string;
  location: string;
  rating: number;
  image: string;
  roleColor: string;
  roleBg: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    role: 'Land Buyer',
    quote: 'I almost lost ₦15M to a fraudulent land seller. Omonile App\'s lawyer verification saved me. The property was under government acquisition!',
    name: 'Adebayo O.',
    location: 'Lekki',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=400&q=80',
    roleColor: '#1a6b3c',
    roleBg: 'rgba(26,107,60,0.10)',
  },
  {
    id: 2,
    role: 'Short-Let Guest',
    quote: 'The facility manager inspected the apartment before I booked. Everything matched the photos. Clean, safe, and exactly as described.',
    name: 'Chidinma E.',
    location: 'Guest, Abuja',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80',
    roleColor: '#b8832a',
    roleBg: 'rgba(232,168,76,0.12)',
  },
  {
    id: 3,
    role: 'Property Owner',
    quote: 'My short-let property is fully booked every weekend. The facility manager handles everything — check-in, cleaning, guest communication.',
    name: 'Mr. Oluwole',
    location: 'Victoria Island',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    roleColor: '#1a6b3c',
    roleBg: 'rgba(26,107,60,0.10)',
  },
  {
    id: 4,
    role: 'Verified Lawyer',
    quote: 'The verification workflow is seamless. I get paid within 48 hours of submitting my report. Best decision I made this year.',
    name: 'Barrister Adeyemi',
    location: 'Ikeja',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80',
    roleColor: '#b8832a',
    roleBg: 'rgba(232,168,76,0.12)',
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} width="18" height="18" viewBox="0 0 18 18">
          <polygon
            points="9,1.5 11.09,6.26 16.5,6.91 12.75,10.57 13.68,16 9,13.27 4.32,16 5.25,10.57 1.5,6.91 6.91,6.26"
            fill={i <= rating ? '#e8a84c' : 'var(--border-default)'}
            stroke="none"
          />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = (idx: number, dir: 'left' | 'right') => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 300);
  };

  const prev = () => go((current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length, 'left');
  const next = () => go((current + 1) % TESTIMONIALS.length, 'right');

  // Auto-rotate every 5s
  const startAuto = () => {
    autoRef.current = setInterval(() => {
      setDirection('right');
      setAnimating(true);
      setTimeout(() => {
        setCurrent(c => (c + 1) % TESTIMONIALS.length);
        setAnimating(false);
      }, 300);
    }, 5000);
  };

  useEffect(() => {
    startAuto();
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, []);

  const resetAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current);
    startAuto();
  };

  const t = TESTIMONIALS[current];

  return (
    <section style={{ padding: 'clamp(3rem, 6vw, 5.5rem) 0', background: 'var(--bg-base)', position: 'relative', overflow: 'hidden' }}>

      {/* Nigerian flag color hints — green bars left/right edges */}
      <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '4px', background: 'linear-gradient(to bottom, #1a6b3c, #22883f, #1a6b3c)', opacity: 0.4 }} />
      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '4px', background: 'linear-gradient(to bottom, #1a6b3c, #22883f, #1a6b3c)', opacity: 0.4 }} />

      {/* Soft bg radial */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(26,107,60,0.04) 0%, transparent 70%)' }} />

      <div style={{ width: '100%', maxWidth: '1100px', marginInline: 'auto', padding: '0 clamp(1rem, 4vw, 3rem)', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
          <p style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1a6b3c', marginBottom: '0.6rem' }}>
            <span style={{ display: 'inline-block', width: '18px', height: '2px', background: '#e8a84c', borderRadius: '2px' }} />
            Real Stories
            <span style={{ display: 'inline-block', width: '18px', height: '2px', background: '#e8a84c', borderRadius: '2px' }} />
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: 'var(--text-primary)', letterSpacing: '-0.025em', margin: 0, lineHeight: 1.15 }}>
            Trusted by Nigerians
          </h2>
        </div>

        {/* Card */}
        <div style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '24px',
          boxShadow: '0 12px 48px rgba(15,28,20,0.10)',
          overflow: 'hidden',
          position: 'relative',
        }}>
          {/* Decorative top accent */}
          <div style={{ height: '4px', background: `linear-gradient(90deg, ${t.roleColor}, #e8a84c, ${t.roleColor})`, transition: 'background 400ms ease' }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: '280px 1fr',
            minHeight: '340px',
            opacity: animating ? 0 : 1,
            transform: animating ? `translateX(${direction === 'right' ? '20px' : '-20px'})` : 'translateX(0)',
            transition: 'opacity 300ms ease, transform 300ms ease',
          }} className="testi-grid">

            {/* Left: avatar panel */}
            <div style={{
              background: `linear-gradient(160deg, ${t.roleColor}18 0%, ${t.roleColor}08 100%)`,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              padding: '2.5rem 1.5rem',
              borderRight: '1px solid var(--border-subtle)',
              position: 'relative', overflow: 'hidden',
              transition: 'background 400ms ease',
            }}>
              {/* Big quote mark bg */}
              <span style={{
                position: 'absolute', top: '0.5rem', left: '1rem',
                fontFamily: 'var(--font-display)', fontWeight: 900,
                fontSize: '5rem', lineHeight: 1, color: t.roleColor,
                opacity: 0.12, userSelect: 'none', pointerEvents: 'none',
                fontStyle: 'normal',
              }}>❝</span>

              {/* Avatar */}
              <div style={{
                width: '130px', height: '130px', borderRadius: '50%',
                overflow: 'hidden', flexShrink: 0,
                border: `3px solid ${t.roleColor}40`,
                boxShadow: `0 8px 32px ${t.roleColor}25`,
                marginBottom: '1.25rem', position: 'relative',
              }}>
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  sizes="130px"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>

              {/* Name + location */}
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', margin: '0 0 0.2rem', textAlign: 'center', letterSpacing: '-0.01em' }}>
                {t.name}
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-muted)', margin: '0 0 0.85rem', textAlign: 'center' }}>
                {t.location}
              </p>

              {/* Role badge */}
              <span style={{
                display: 'inline-block', padding: '0.28rem 0.85rem',
                borderRadius: '9999px',
                background: t.roleBg,
                border: `1px solid ${t.roleColor}35`,
                color: t.roleColor,
                fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 700,
                letterSpacing: '0.04em', textTransform: 'uppercase',
                transition: 'all 400ms ease',
              }}>
                {t.role}
              </span>
            </div>

            {/* Right: quote + stars */}
            <div style={{ padding: 'clamp(2rem, 4vw, 3rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              {/* Stars */}
              <div style={{ marginBottom: '1.5rem' }}>
                <Stars rating={t.rating} />
              </div>

              {/* Quote */}
              <blockquote style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: 'clamp(1.05rem, 2.2vw, 1.4rem)',
                color: 'var(--text-primary)',
                lineHeight: 1.55,
                letterSpacing: '-0.015em',
                margin: '0 0 2rem',
                fontStyle: 'normal',
              }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Divider */}
              <div style={{ height: '1px', background: 'var(--border-subtle)', marginBottom: '1.25rem' }} />

              {/* Bottom: nav arrows + dots */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                {/* Dots */}
                <div style={{ display: 'flex', gap: '6px' }}>
                  {TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { go(i, i > current ? 'right' : 'left'); resetAuto(); }}
                      aria-label={`Go to testimonial ${i + 1}`}
                      style={{
                        width: i === current ? '24px' : '8px',
                        height: '8px', borderRadius: '9999px', border: 'none', padding: 0,
                        background: i === current ? '#e8a84c' : 'var(--border-default)',
                        cursor: 'pointer', transition: 'all 300ms ease',
                      }}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    onClick={() => { prev(); resetAuto(); }}
                    aria-label="Previous"
                    style={{
                      width: '40px', height: '40px', borderRadius: '50%',
                      border: '1.5px solid var(--border-default)',
                      background: 'var(--bg-surface-2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      cursor: 'pointer', color: 'var(--text-secondary)',
                      transition: 'all 150ms ease',
                    }}
                    onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = '#1a6b3c'; b.style.borderColor = '#1a6b3c'; b.style.color = 'white'; }}
                    onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = 'var(--bg-surface-2)'; b.style.borderColor = 'var(--border-default)'; b.style.color = 'var(--text-secondary)'; }}
                  >
                    <ChevronLeft size={17} strokeWidth={2} />
                  </button>
                  <button
                    onClick={() => { next(); resetAuto(); }}
                    aria-label="Next"
                    style={{
                      width: '40px', height: '40px', borderRadius: '50%',
                      border: 'none', background: '#1a6b3c',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      cursor: 'pointer', color: 'white',
                      boxShadow: '0 4px 14px rgba(26,107,60,0.30)',
                      transition: 'all 150ms ease',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#22883f'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#1a6b3c'; }}
                  >
                    <ChevronRight size={17} strokeWidth={2} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Counter row */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(2rem, 6vw, 5rem)', marginTop: '2.5rem', flexWrap: 'wrap' }}>
          {[
            { value: '8,500+', label: 'Happy Users' },
            { value: '₦2.4B+', label: 'Transactions Protected' },
            { value: '4.9★', label: 'Average Rating' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', color: '#1a6b3c', letterSpacing: '-0.03em', margin: '0 0 0.2rem', lineHeight: 1 }}>{s.value}</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .testi-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}