'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Eye, MapPin, ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, BookOpen } from 'lucide-react';

interface Property {
  id: string;
  title: string;
  description: string;
  price: string;
  location: string;
  area: string;
  country: string;
  likes: number;
  views: number;
  verified: 'Premium' | 'Dual Registry' | 'AI-Scanned' | 'Lawyer Verified';
  image: string;
}

const PROPERTIES: Property[] = [
  {
    id: '1',
    title: '3-Bedroom Apartment',
    description: 'A chic and fully-furnished 3-bedroom apartment with panoramic city views.',
    price: '₦250,000,000',
    location: 'Lekki Phase 1', area: 'Lagos', country: 'Nigeria',
    likes: 45, views: 234, verified: 'Premium',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
  },
  {
    id: '2',
    title: '5-Bedroom Mansion',
    description: 'Stunning colonial mansion with lush gardens and a private pool in Ikoyi.',
    price: '₦250,000,000',
    location: 'Ikoyi', area: 'Lagos', country: 'Nigeria',
    likes: 32, views: 189, verified: 'Dual Registry',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
  },
  {
    id: '3',
    title: '4-Bedroom Terrace Duplex',
    description: 'Spacious terrace duplex with modern finishes and 24/7 security.',
    price: '₦85,000,000',
    location: 'Ajah', area: 'Lagos', country: 'Nigeria',
    likes: 61, views: 310, verified: 'Lawyer Verified',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80',
  },
  {
    id: '4',
    title: 'Luxury Short-Let Studio',
    description: 'Fully serviced studio apartment perfect for business travelers.',
    price: '₦120,000/night',
    location: 'Victoria Island', area: 'Lagos', country: 'Nigeria',
    likes: 88, views: 542, verified: 'Premium',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
  },
  {
    id: '5',
    title: '600 SQM Land with C of O',
    description: 'Clean dry land in a fast-developing axis with genuine C of O.',
    price: '₦55,000,000',
    location: 'Ibeju-Lekki', area: 'Lagos', country: 'Nigeria',
    likes: 27, views: 198, verified: 'AI-Scanned',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
  },
  {
    id: '6',
    title: '3-Bedroom Semi-Detached',
    description: 'Well-maintained bungalow in a quiet neighbourhood, all rooms en-suite.',
    price: '₦3,500,000/yr',
    location: 'Surulere', area: 'Lagos', country: 'Nigeria',
    likes: 19, views: 143, verified: 'Lawyer Verified',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80',
  },
];

const VERIFIED_STYLES: Record<string, { bg: string; color: string; icon: typeof ShieldCheck }> = {
  'Premium':         { bg: 'rgba(232,168,76,0.22)',  color: '#c49030', icon: ShieldCheck },
  'Dual Registry':   { bg: 'rgba(52,120,246,0.20)',  color: '#2563eb', icon: BookOpen },
  'AI-Scanned':      { bg: 'rgba(139,92,246,0.20)',  color: '#7c3aed', icon: ShieldCheck },
  'Lawyer Verified': { bg: 'rgba(39,174,96,0.20)',   color: '#16a34a', icon: ShieldCheck },
};

function PropertyCard({ p }: { p: Property }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(p.likes);
  const [hovered, setHovered] = useState(false);
  const vs = VERIFIED_STYLES[p.verified];
  const Icon = vs.icon;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: '14px',
        overflow: 'hidden',
        aspectRatio: '3/4',
        cursor: 'pointer',
        boxShadow: hovered
          ? '0 16px 48px rgba(0,0,0,0.22)'
          : '0 4px 20px rgba(0,0,0,0.12)',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'all 250ms ease',
      }}
    >
      {/* Image */}
      <Image
        src={p.image}
        alt={p.title}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          transform: hovered ? 'scale(1.04)' : 'scale(1)',
          transition: 'transform 400ms ease',
        }}
      />

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.12) 35%, rgba(0,0,0,0.78) 100%)',
      }} />

      {/* Top: likes + views */}
      <div style={{
        position: 'absolute', top: '10px', right: '10px',
        display: 'flex', gap: '6px',
      }}>
        <button
          onClick={e => { e.preventDefault(); setLiked(!liked); setLikeCount(c => liked ? c - 1 : c + 1); }}
          style={{
            display: 'flex', alignItems: 'center', gap: '4px',
            padding: '0.25rem 0.55rem',
            borderRadius: '9999px',
            background: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(8px)',
            border: 'none', cursor: 'pointer',
            color: liked ? '#e8a84c' : 'white',
            fontSize: '0.7rem', fontWeight: 600,
            fontFamily: 'var(--font-body)',
            transition: 'color 150ms ease',
          }}
        >
          <Heart size={11} fill={liked ? '#e8a84c' : 'none'} strokeWidth={2} />
          {likeCount}
        </button>
        <span style={{
          display: 'flex', alignItems: 'center', gap: '4px',
          padding: '0.25rem 0.55rem',
          borderRadius: '9999px',
          background: 'rgba(0,0,0,0.4)',
          backdropFilter: 'blur(8px)',
          color: 'white', fontSize: '0.7rem', fontWeight: 600,
          fontFamily: 'var(--font-body)',
        }}>
          <Eye size={11} strokeWidth={2} />
          {p.views}
        </span>
      </div>

      {/* Bottom content */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '0.85rem',
      }}>
        {/* Title */}
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 'clamp(0.82rem, 1.4vw, 0.95rem)',
          color: '#ffffff',
          lineHeight: 1.25,
          letterSpacing: '-0.01em',
          marginBottom: '0.3rem',
        }}>
          {p.title}
        </h3>

        {/* Description — hidden on mobile */}
        <p className="card-desc" style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.72rem',
          color: 'rgba(255,255,255,0.65)',
          lineHeight: 1.45,
          marginBottom: '0.65rem',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {p.description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '0.7rem' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '3px',
            padding: '0.18rem 0.5rem',
            borderRadius: '9999px',
            background: vs.bg,
            border: `1px solid ${vs.color}50`,
            color: vs.color,
            fontSize: '0.65rem', fontWeight: 700,
            fontFamily: 'var(--font-body)',
            backdropFilter: 'blur(6px)',
          }}>
            <Icon size={10} strokeWidth={2.5} />
            {p.verified}
          </span>
          {[p.location, p.area].map(tag => (
            <span key={tag} style={{
              display: 'inline-flex', alignItems: 'center', gap: '3px',
              padding: '0.18rem 0.5rem',
              borderRadius: '9999px',
              background: 'rgba(255,255,255,0.13)',
              border: '1px solid rgba(255,255,255,0.22)',
              color: 'rgba(255,255,255,0.88)',
              fontSize: '0.65rem', fontWeight: 500,
              fontFamily: 'var(--font-body)',
              backdropFilter: 'blur(6px)',
            }}>
              <MapPin size={9} strokeWidth={2} />
              {tag}
            </span>
          ))}
        </div>

        {/* Price + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
          <div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6rem', color: 'rgba(255,255,255,0.55)',
              margin: '0 0 0.05rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em',
            }}>
              Price
            </p>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
              color: '#ffffff',
              letterSpacing: '-0.02em', margin: 0,
            }}>
              {p.price}
            </p>
          </div>
          <Link
            href={`/listings/${p.id}`}
            style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '0.5rem 0.85rem',
              borderRadius: '9999px',
              background: '#1a6b3c',
              color: '#ffffff',
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: 'clamp(0.65rem, 1.1vw, 0.75rem)',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              transition: 'background 150ms ease',
              flexShrink: 0,
            }}
            onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = '#22883f'}
            onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = '#1a6b3c'}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export function FeaturedProperties() {
  const [index, setIndex] = useState(0);

  // Visible count changes per breakpoint — handled via CSS grid, carousel uses 3 at a time
  const perPage = 3;
  const total = PROPERTIES.length;
  const canPrev = index > 0;
  const canNext = index + perPage < total;

  const prev = () => { if (canPrev) setIndex(i => i - 1); };
  const next = () => { if (canNext) setIndex(i => i + 1); };

  const visible = PROPERTIES.slice(index, index + perPage);

  return (
    <section style={{ padding: 'clamp(2.5rem, 5vw, 4.5rem) 0', background: 'var(--bg-base)' }}>
      <div style={{
        width: '100%', maxWidth: '1280px',
        marginInline: 'auto',
        padding: '0 clamp(1rem, 4vw, 3rem)',
      }}>

        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between', flexWrap: 'wrap',
          gap: '1rem', marginBottom: '1.5rem',
        }}>
          <div>
            <p style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: '#1a6b3c', marginBottom: '0.3rem',
            }}>
              <span style={{ display: 'inline-block', width: '18px', height: '2px', background: '#e8a84c', borderRadius: '2px' }} />
              Hand-picked for you
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em', margin: 0,
            }}>
              Featured Properties
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.82rem', color: 'var(--text-muted)',
              margin: '0.2rem 0 0',
            }}>
              Hand-picked verified properties you can trust
            </p>
          </div>

          {/* Nav buttons + view all */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button
              onClick={prev}
              disabled={!canPrev}
              aria-label="Previous"
              style={{
                width: '38px', height: '38px', borderRadius: '50%',
                border: '1.5px solid var(--border-default)',
                background: canPrev ? 'var(--bg-surface)' : 'var(--bg-surface-2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: canPrev ? 'pointer' : 'not-allowed',
                color: canPrev ? 'var(--text-secondary)' : 'var(--text-muted)',
                transition: 'all 150ms ease',
              }}
              onMouseEnter={e => { if (canPrev) { const b = e.currentTarget as HTMLButtonElement; b.style.background = '#1a6b3c'; b.style.borderColor = '#1a6b3c'; b.style.color = 'white'; } }}
              onMouseLeave={e => { if (canPrev) { const b = e.currentTarget as HTMLButtonElement; b.style.background = 'var(--bg-surface)'; b.style.borderColor = 'var(--border-default)'; b.style.color = 'var(--text-secondary)'; } }}
            >
              <ChevronLeft size={16} strokeWidth={2} />
            </button>
            <button
              onClick={next}
              disabled={!canNext}
              aria-label="Next"
              style={{
                width: '38px', height: '38px', borderRadius: '50%',
                border: 'none',
                background: canNext ? '#1a6b3c' : 'var(--bg-surface-2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: canNext ? 'pointer' : 'not-allowed',
                color: canNext ? 'white' : 'var(--text-muted)',
                transition: 'all 150ms ease',
                boxShadow: canNext ? '0 4px 12px rgba(26,107,60,0.3)' : 'none',
              }}
              onMouseEnter={e => { if (canNext) (e.currentTarget as HTMLButtonElement).style.background = '#22883f'; }}
              onMouseLeave={e => { if (canNext) (e.currentTarget as HTMLButtonElement).style.background = '#1a6b3c'; }}
            >
              <ChevronRight size={16} strokeWidth={2} />
            </button>
            <Link
              href="/listings"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '5px',
                padding: '0.5rem 1rem',
                borderRadius: '9999px',
                border: '1.5px solid var(--border-default)',
                background: 'transparent',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-body)',
                fontWeight: 600, fontSize: '0.8rem',
                textDecoration: 'none',
                transition: 'all 150ms ease', whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.borderColor = '#1a6b3c'; a.style.color = '#1a6b3c'; }}
              onMouseLeave={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.borderColor = 'var(--border-default)'; a.style.color = 'var(--text-secondary)'; }}
            >
              View all <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* Dot indicators */}
        <div style={{ display: 'flex', gap: '5px', marginBottom: '1.1rem' }}>
          {Array.from({ length: total - perPage + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === index ? '22px' : '6px',
                height: '6px',
                borderRadius: '9999px',
                border: 'none',
                background: i === index ? '#1a6b3c' : 'var(--border-default)',
                cursor: 'pointer', padding: 0,
                transition: 'all 250ms ease',
              }}
            />
          ))}
        </div>

        {/* ── Responsive grid ── */}
        <div className="props-grid" style={{
          display: 'grid',
          gap: '1rem',
        }}>
          {visible.map(p => <PropertyCard key={p.id} p={p} />)}
        </div>

       
      </div>

      <style>{`
        /* Mobile: 2 columns */
        .props-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        /* Tablet: 3 columns */
        @media (min-width: 768px) {
          .props-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        /* Hide description on mobile to keep cards compact */
        @media (max-width: 480px) {
          .card-desc { display: none !important; }
        }
      `}</style>
    </section>
  );
}