'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ShieldCheck, ArrowRight, ChevronLeft, ChevronRight, TrendingUp, Check } from 'lucide-react';

interface Neighborhood {
  id: string;
  name: string;
  lga: string;
  rating: number;
  status: 'Very Safe' | 'Safe' | 'Developing';
  features: string[];
  image: string;
  listings: number;
}

const NEIGHBORHOODS: Neighborhood[] = [
  {
    id: '1',
    name: 'Ikoyi',
    lga: 'Lagos Island',
    rating: 4.9,
    status: 'Very Safe',
    features: ['24/7 Patrol', 'Low crime', 'VIP area'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    listings: 142,
  },
  {
    id: '2',
    name: 'Victoria Island',
    lga: 'Lagos Island',
    rating: 4.8,
    status: 'Very Safe',
    features: ['24/7 Patrol', 'Low crime', 'Business Hub'],
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    listings: 98,
  },
  {
    id: '3',
    name: 'Ajah',
    lga: 'Eti-Osa',
    rating: 3.8,
    status: 'Developing',
    features: ['Growing Area', 'Affordable', 'Developing'],
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80',
    listings: 67,
  },
  {
    id: '4',
    name: 'Lekki Phase 1',
    lga: 'Eti-Osa',
    rating: 4.6,
    status: 'Very Safe',
    features: ['Gated Estate', 'Low crime', 'Top Schools'],
    image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80',
    listings: 211,
  },
  {
    id: '5',
    name: 'Surulere',
    lga: 'Surulere',
    rating: 4.1,
    status: 'Safe',
    features: ['Active Community', 'Affordable', 'Central'],
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80',
    listings: 53,
  },
  {
    id: '6',
    name: 'Ibeju-Lekki',
    lga: 'Ibeju-Lekki',
    rating: 3.5,
    status: 'Developing',
    features: ['High Growth', 'Affordable Land', 'Future Hub'],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    listings: 34,
  },
];

const STATUS_CONFIG = {
  'Very Safe':   { bg: 'rgba(26,107,60,0.12)',  color: '#16a34a', border: 'rgba(26,107,60,0.25)'  },
  'Safe':        { bg: 'rgba(37,99,235,0.12)',  color: '#2563eb', border: 'rgba(37,99,235,0.25)'  },
  'Developing':  { bg: 'rgba(232,168,76,0.15)', color: '#b8832a', border: 'rgba(232,168,76,0.30)' },
};

function NeighborhoodCard({ n }: { n: Neighborhood }) {
  const [hovered, setHovered] = useState(false);
  const sc = STATUS_CONFIG[n.status];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--bg-surface)',
        border: `1px solid ${hovered ? 'var(--border-default)' : 'var(--border-subtle)'}`,
        borderRadius: '18px',
        overflow: 'hidden',
        boxShadow: hovered ? '0 16px 48px rgba(15,28,20,0.13)' : '0 2px 12px rgba(15,28,20,0.06)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 280ms ease',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', height: '180px', overflow: 'hidden', flexShrink: 0 }}>
        <Image
          src={n.image}
          alt={n.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{
            objectFit: 'cover',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform 500ms ease',
          }}
        />
        {/* Subtle bottom fade */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px',
          background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.3))',
        }} />
        {/* Listing count pill */}
        <span style={{
          position: 'absolute', bottom: '10px', right: '10px',
          display: 'inline-flex', alignItems: 'center', gap: '4px',
          padding: '0.22rem 0.6rem',
          borderRadius: '9999px',
          background: 'rgba(0,0,0,0.45)',
          backdropFilter: 'blur(8px)',
          color: 'white', fontSize: '0.68rem', fontWeight: 600,
          fontFamily: 'var(--font-body)',
        }}>
          {n.listings} listings
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: '1.1rem 1.15rem 1.15rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Name row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
          <div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700, fontSize: '1.05rem',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em', margin: 0, lineHeight: 1.2,
            }}>
              {n.name}
            </h3>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem', color: 'var(--text-muted)',
              margin: '0.1rem 0 0',
            }}>
              {n.lga}
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {/* Rating */}
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '4px',
              fontFamily: 'var(--font-display)',
              fontWeight: 700, fontSize: '0.82rem',
              color: 'var(--text-secondary)',
            }}>
              <Star size={13} fill="#e8a84c" color="#e8a84c" strokeWidth={0} />
              {n.rating}
            </span>
            {/* Status badge */}
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '4px',
              padding: '0.22rem 0.65rem',
              borderRadius: '9999px',
              background: sc.bg,
              border: `1px solid ${sc.border}`,
              color: sc.color,
              fontSize: '0.68rem', fontWeight: 700,
              fontFamily: 'var(--font-body)',
              whiteSpace: 'nowrap',
            }}>
              {n.status === 'Developing'
                ? <TrendingUp size={10} strokeWidth={2.5} />
                : <ShieldCheck size={10} strokeWidth={2.5} />
              }
              {n.status}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'var(--border-subtle)', marginBottom: '0.85rem' }} />

        {/* Features */}
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1, marginBottom: '1rem' }}>
          {n.features.map(f => (
            <li key={f} style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              fontFamily: 'var(--font-body)',
              fontSize: '0.82rem', color: 'var(--text-secondary)',
            }}>
              <span style={{
                width: '18px', height: '18px', borderRadius: '50%',
                background: 'rgba(26,107,60,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Check size={10} color="#1a6b3c" strokeWidth={3} />
              </span>
              {f}
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div style={{ height: '1px', background: 'var(--border-subtle)', marginBottom: '0.85rem' }} />

        {/* Browse link */}
        <Link
          href={`/listings?area=${n.name.replace(' ', '-').toLowerCase()}`}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '5px',
            fontFamily: 'var(--font-body)',
            fontSize: '0.82rem', fontWeight: 700,
            color: hovered ? '#1a6b3c' : 'var(--text-secondary)',
            textDecoration: 'none',
            transition: 'color 200ms ease',
          }}
        >
          Browse {n.name}
          <ArrowRight
            size={14} strokeWidth={2.5}
            style={{ transform: hovered ? 'translateX(3px)' : 'translateX(0)', transition: 'transform 200ms ease' }}
          />
        </Link>
      </div>
    </div>
  );
}

export function NeighborhoodSafety() {
  const [index, setIndex] = useState(0);
  const perPage = 3;
  const total = NEIGHBORHOODS.length;
  const canPrev = index > 0;
  const canNext = index + perPage < total;

  return (
    <section style={{ padding: 'clamp(2.5rem, 5vw, 4.5rem) 0', background: 'var(--bg-surface-2)' }}>
      <div style={{
        width: '100%', maxWidth: '1280px',
        marginInline: 'auto',
        padding: '0 clamp(1rem, 4vw, 3rem)',
      }}>

        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'flex-start',
          justifyContent: 'space-between', flexWrap: 'wrap',
          gap: '1rem', marginBottom: '1.75rem',
        }}>
          <div style={{ flex: 1, minWidth: '260px' }}>
            <p style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: '#1a6b3c', marginBottom: '0.35rem',
            }}>
              <span style={{ display: 'inline-block', width: '18px', height: '2px', background: '#e8a84c', borderRadius: '2px' }} />
              Community Data
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em', margin: '0 0 0.4rem',
            }}>
              Know your Neighborhood Safety
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem', color: 'var(--text-muted)',
              margin: 0, maxWidth: '480px', lineHeight: 1.6,
            }}>
              Real-time safety analytics and community-verified ratings for Lagos neighborhoods.
              Driven by verified patrol data and localized safety reports.
            </p>
          </div>

          {/* Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingTop: '0.25rem' }}>
            <button
              onClick={() => canPrev && setIndex(i => i - 1)}
              disabled={!canPrev}
              aria-label="Previous"
              style={{
                width: '40px', height: '40px', borderRadius: '50%',
                border: '1.5px solid var(--border-default)',
                background: canPrev ? 'var(--bg-surface)' : 'var(--bg-surface-3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: canPrev ? 'pointer' : 'not-allowed',
                color: canPrev ? 'var(--text-secondary)' : 'var(--text-muted)',
                transition: 'all 150ms ease',
              }}
              onMouseEnter={e => { if (canPrev) { const b = e.currentTarget as HTMLButtonElement; b.style.background = '#1a6b3c'; b.style.borderColor = '#1a6b3c'; b.style.color = 'white'; } }}
              onMouseLeave={e => { if (canPrev) { const b = e.currentTarget as HTMLButtonElement; b.style.background = 'var(--bg-surface)'; b.style.borderColor = 'var(--border-default)'; b.style.color = 'var(--text-secondary)'; } }}
            >
              <ChevronLeft size={17} strokeWidth={2} />
            </button>
            <button
              onClick={() => canNext && setIndex(i => i + 1)}
              disabled={!canNext}
              aria-label="Next"
              style={{
                width: '40px', height: '40px', borderRadius: '50%',
                border: 'none',
                background: canNext ? '#1a6b3c' : 'var(--bg-surface-3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: canNext ? 'pointer' : 'not-allowed',
                color: canNext ? 'white' : 'var(--text-muted)',
                transition: 'all 150ms ease',
                boxShadow: canNext ? '0 4px 14px rgba(26,107,60,0.3)' : 'none',
              }}
              onMouseEnter={e => { if (canNext) (e.currentTarget as HTMLButtonElement).style.background = '#22883f'; }}
              onMouseLeave={e => { if (canNext) (e.currentTarget as HTMLButtonElement).style.background = '#1a6b3c'; }}
            >
              <ChevronRight size={17} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.1rem',
        }}
          className="neighborhood-grid"
        >
          {NEIGHBORHOODS.slice(index, index + perPage).map(n => (
            <NeighborhoodCard key={n.id} n={n} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .neighborhood-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .neighborhood-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}