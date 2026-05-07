'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Search, SlidersHorizontal } from 'lucide-react';

const FILTERS = [
  { label: 'Land for sale',     value: 'land' },
  { label: 'Property for Sale', value: 'property-sale' },
  { label: 'Short-Let',         value: 'short-let' },
  { label: 'Yearly Rent',       value: 'yearly-rent' },
  { label: 'Verified Only',     value: 'verified' },
];

export function SearchSection() {
  const [query, setQuery]   = useState('');
  const [active, setActive] = useState('land');

  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(3.5rem, 7vw, 5.5rem) 0 clamp(4rem, 8vw, 6rem)' }}>

      {/* ── Background map image ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>

        {/* 👇 REPLACE src WITH YOUR MAP IMAGE PATH */}
        <Image
          src="/assets/home/lagos-map.png"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: 0.25,
            filter: 'grayscale(20%)',
          }}
        />

        

        {/* Green center glow */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 75% 65% at 50% 50%, rgba(26,107,60,0.06) 0%, transparent 70%)',
        }} />

        
      </div>

      {/* ── Content ── */}
      <div style={{
        position: 'relative', zIndex: 1,
        width: '100%', maxWidth: '1280px',
        marginInline: 'auto',
        padding: '0 clamp(1rem, 5vw, 3rem)',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.72rem', fontWeight: 700,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: '#1a6b3c', marginBottom: '0.5rem',
          display: 'flex', alignItems: 'center', gap: '0.5rem',
        }}>
          <span style={{ display: 'inline-block', width: '20px', height: '2px', background: '#e8a84c', borderRadius: '2px' }} />
          Nigeria&apos;s Property Network
        </p>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 'clamp(1.4rem, 2.8vw, 2rem)',
          color: 'var(--text-primary)',
          textAlign: 'center',
          letterSpacing: '-0.02em',
          marginBottom: '1.75rem',
        }}>
          Find your Perfect Property
        </h2>

        {/* Search card */}
        <div style={{
          width: '100%', maxWidth: '720px',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '20px',
          padding: 'clamp(1.25rem, 3vw, 1.75rem)',
          boxShadow: '0 8px 48px rgba(15,28,20,0.12)',
        }}>
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.1rem', flexWrap: 'wrap' }}>
            <div style={{ position: 'relative', flex: 1, minWidth: '200px' }}>
              <Search size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }} />
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search by location, property type, price, or property ID..."
                style={{
                  width: '100%', paddingLeft: '40px', paddingRight: '1rem',
                  paddingTop: '0.75rem', paddingBottom: '0.75rem',
                  borderRadius: '12px',
                  border: '1px solid var(--border-default)',
                  background: 'white',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem', outline: 'none',
                  transition: 'border-color 150ms ease, box-shadow 150ms ease',
                }}
                onFocus={e => {
                  e.currentTarget.style.borderColor = '#1a6b3c';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(26,107,60,0.12)';
                  e.currentTarget.style.background = 'var(--bg-surface)';
                }}
                onBlur={e => {
                  e.currentTarget.style.borderColor = 'var(--border-default)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.background = 'var(--bg-surface-2)';
                }}
              />
            </div>
            <button
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '0.75rem 1.5rem', borderRadius: '9999px',
                background: '#1a6b3c', border: 'none', color: '#ffffff',
                fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.9rem',
                cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0,
                transition: 'background 150ms ease, transform 150ms ease',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#22883f'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#1a6b3c'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; }}
            >
              <SlidersHorizontal size={15} /> Search
            </button>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {FILTERS.map(f => {
              const isActive = active === f.value;
              return (
                <button
                  key={f.value}
                  onClick={() => setActive(f.value)}
                  style={{
                    padding: '0.45rem 1rem', borderRadius: '9999px',
                    border: isActive ? 'none' : '1px solid var(--border-default)',
                    background: isActive ? '#1a6b3c' : 'transparent',
                    color: isActive ? '#ffffff' : 'var(--text-secondary)',
                    fontFamily: 'var(--font-body)',
                    fontWeight: isActive ? 700 : 500, fontSize: '0.82rem',
                    cursor: 'pointer', transition: 'all 200ms ease', whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => { if (!isActive) { (e.currentTarget as HTMLButtonElement).style.borderColor = '#1a6b3c'; (e.currentTarget as HTMLButtonElement).style.color = '#1a6b3c'; } }}
                  onMouseLeave={e => { if (!isActive) { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border-default)'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-secondary)'; } }}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}