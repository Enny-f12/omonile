'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Bed, Bath, Maximize2, CheckCircle2, Heart } from 'lucide-react';

export interface Listing {
  id: string;
  title: string;
  price: string;
  address: string;
  location: string;
  beds: number;
  baths: number;
  sqm: number;
  type: string;
  verified: boolean;
  image: string;
}

export function ListingCard({ listing }: { listing: Listing }) {
  const [liked, setLiked] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--bg-surface)',
        border: `1px solid ${hovered ? 'var(--border-default)' : 'var(--border-subtle)'}`,
        borderRadius: '14px',
        overflow: 'hidden',
        boxShadow: hovered ? '0 8px 28px rgba(15,28,20,0.12)' : '0 2px 8px rgba(15,28,20,0.05)',
        transform: hovered ? 'translateY(-3px)' : 'none',
        transition: 'all 250ms ease',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', height: '195px', overflow: 'hidden' }}>
        <Image
          src={listing.image}
          alt={listing.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: 'cover', transform: hovered ? 'scale(1.04)' : 'scale(1)', transition: 'transform 400ms ease' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)' }} />

        {/* Price overlay */}
        <div style={{ position: 'absolute', bottom: '10px', left: '12px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.05rem', color: '#ffffff', margin: 0, letterSpacing: '-0.02em', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
            {listing.price}
          </p>
        </div>

        {/* Verified badge */}
        {listing.verified && (
          <span style={{
            position: 'absolute', top: '10px', right: '46px',
            display: 'inline-flex', alignItems: 'center', gap: '4px',
            padding: '0.22rem 0.6rem', borderRadius: '9999px',
            background: 'rgba(39,174,96,0.18)', border: '1px solid rgba(39,174,96,0.35)',
            backdropFilter: 'blur(8px)', color: '#27ae60',
            fontSize: '0.65rem', fontWeight: 700,
            fontFamily: 'var(--font-body)',
          }}>
            <CheckCircle2 size={10} strokeWidth={2.5} /> Verified
          </span>
        )}

        {/* Heart */}
        <button
          onClick={e => { e.preventDefault(); setLiked(!liked); }}
          style={{
            position: 'absolute', top: '8px', right: '8px',
            width: '30px', height: '30px', borderRadius: '50%',
            background: liked ? '#e8a84c' : 'rgba(255,255,255,0.85)',
            border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backdropFilter: 'blur(6px)', transition: 'all 200ms ease',
          }}
        >
          <Heart size={14} fill={liked ? '#0f1c14' : 'none'} color={liked ? '#0f1c14' : '#3d5045'} strokeWidth={2} />
        </button>
      </div>

      {/* Body */}
      <div style={{ padding: '0.9rem 1rem 1rem' }}>
        {/* Title */}
        <Link href={`/listings/${listing.id}`} style={{ textDecoration: 'none' }}>
          <h3 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem',
            color: '#1a6b3c', letterSpacing: '-0.01em',
            margin: '0 0 0.3rem', lineHeight: 1.25,
            transition: 'color 150ms ease',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = '#22883f')}
            onMouseLeave={e => (e.currentTarget.style.color = '#1a6b3c')}
          >
            {listing.title}
          </h3>
        </Link>

        {/* Address */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '0.75rem' }}>
          <MapPin size={12} color="var(--text-muted)" strokeWidth={2} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            {listing.address}
          </span>
        </div>

        {/* Specs */}
        <div style={{ height: '1px', background: 'var(--border-subtle)', marginBottom: '0.75rem' }} />
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.85rem' }}>
          {listing.beds > 0 && (
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
              <Bed size={13} color="var(--text-muted)" strokeWidth={1.8} /> {listing.beds} Beds
            </span>
          )}
          {listing.baths > 0 && (
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
              <Bath size={13} color="var(--text-muted)" strokeWidth={1.8} /> {listing.baths} Baths
            </span>
          )}
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
            <Maximize2 size={13} color="var(--text-muted)" strokeWidth={1.8} /> {listing.sqm}sqm
          </span>
        </div>

        {/* CTA */}
        <Link
          href={`/listings/${listing.id}`}
          style={{
            display: 'block', textAlign: 'center',
            padding: '0.6rem', borderRadius: '9px',
            background: 'transparent',
            border: '1.5px solid #1a6b3c',
            color: '#1a6b3c',
            fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.82rem',
            textDecoration: 'none', transition: 'all 150ms ease',
          }}
          onMouseEnter={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = '#1a6b3c'; a.style.color = 'white'; }}
          onMouseLeave={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = 'transparent'; a.style.color = '#1a6b3c'; }}
        >
          View property Details
        </Link>
      </div>
    </div>
  );
}