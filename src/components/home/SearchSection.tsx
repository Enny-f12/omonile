'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Search} from 'lucide-react';

const FILTERS = [
  { label: 'Land for sale', value: 'land' },
  { label: 'Property for Sale', value: 'property-sale' },
  { label: 'Short-Let', value: 'short-let' },
  { label: 'Yearly Rent', value: 'yearly-rent' },
  { label: 'Verified Only', value: 'verified' },
];

export function SearchSection() {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState('land');

  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(3.5rem, 7vw, 5.5rem) 0' }}>
      {/* ── Background map ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="/assets/home/lagos-map.png"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: 0.15,
            filter: 'grayscale(100%)',
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 75% 65% at 50% 50%, rgba(26,107,60,0.08) 0%, transparent 70%)',
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
          borderRadius: '24px',
          padding: 'clamp(1rem, 3vw, 1.5rem)',
          boxShadow: '0 8px 48px rgba(0,0,0,0.15)',
        }}>
          
          {/* Input + Button Row: Removed flexWrap so they stay side-by-side */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
            <div style={{ position: 'relative', flex: 1, minWidth: 0 }}>
              <Search size={16} style={{ 
                position: 'absolute', left: '12px', top: '50%', 
                transform: 'translateY(-50%)', color: 'var(--text-muted)', 
                pointerEvents: 'none', zIndex: 2 
              }} />
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Location, ID..."
                className="search-input"
                style={{
                  width: '100%',
                  padding: '0.75rem 0.75rem 0.75rem 36px',
                  borderRadius: '14px',
                  // Transparent on Dark Mode: uses var to adapt
                  background: 'var(--bg-surface-2)',
                  border: '1px solid var(--border-default)',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  outline: 'none',
                  transition: 'all 200ms ease',
                }}
              />
            </div>
            
            <button
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '0 1.25rem', borderRadius: '14px',
                background: '#1a6b3c', border: 'none', color: '#ffffff',
                fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.85rem',
                cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0,
                transition: 'all 150ms ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#22883f'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#1a6b3c'; }}
            >
              <Search size={14} /> 
              <span className="search-text">Search</span>
            </button>
          </div>

          {/* Filters Grid */}
          <div style={{ 
            display: 'flex', gap: '6px', flexWrap: 'wrap', 
            justifyContent: 'center' 
          }}>
            {FILTERS.map(f => {
              const isActive = active === f.value;
              return (
                <button
                  key={f.value}
                  onClick={() => setActive(f.value)}
                  style={{
                    padding: '0.4rem 0.85rem', borderRadius: '9999px',
                    border: isActive ? '1px solid #1a6b3c' : '1px solid var(--border-subtle)',
                    background: isActive ? '#1a6b3c' : 'var(--bg-surface-2)',
                    color: isActive ? '#ffffff' : 'var(--text-secondary)',
                    fontFamily: 'var(--font-body)',
                    fontWeight: isActive ? 700 : 500, fontSize: '0.75rem',
                    cursor: 'pointer', transition: 'all 150ms ease', whiteSpace: 'nowrap',
                  }}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        /* Focus state for the input */
        .search-input:focus {
          border-color: #1a6b3c !important;
          background: var(--bg-surface) !important;
          box-shadow: 0 0 0 3px rgba(26,107,60,0.15);
        }

        /* Responsive handling for the button text */
        @media (max-width: 400px) {
           .search-text { display: none; } /* Show only icon on tiny screens */
           .search-input { font-size: 0.8rem !important; }
        }
      `}</style>
    </section>
  );
}