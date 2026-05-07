'use client';

import Link from 'next/link';
import { ArrowRight, Landmark, Home, CalendarDays, KeyRound } from 'lucide-react';
import { useState } from 'react';

const TYPES = [
    {
        icon: Landmark,
        title: 'Land for sale',
        description: 'Verified land titles. No government acquisition. Family consent confirmed.',
        cta: 'Browse Land',
        href: '/listings?type=land',
        accent: '#b8832a',
        accentBg: 'rgba(232,168,76,0.09)',
    },
    {
        icon: Home,
        title: 'Property for Sale',
        description: 'Houses, flats, duplexes. Lawyer-verified titles. Escrow protected.',
        cta: 'Browse Properties',
        href: '/listings?type=property-sale',
        accent: '#b8832a',
        accentBg: 'rgba(232,168,76,0.09)',
    },
    {
        icon: KeyRound,
        title: 'Short-let Rentals',
        description: 'Daily and weekly stays. Facility manager verified. Safe neighborhoods.',
        cta: 'Book a Stay',
        href: '/listings?type=short-let',
        accent: '#b8832a',
        accentBg: 'rgba(232,168,76,0.09)',
    },
    {
        icon: CalendarDays,
        title: 'Yearly Rental',
        description: 'Long-term leases. Escrow protected. Verified properties.',
        cta: 'Find a Home',
        href: '/listings?type=yearly-rent',
        accent: '#b8832a',
        accentBg: 'rgba(232,168,76,0.09)',
    },
];

function TypeCard({ type }: { type: typeof TYPES[0] }) {
    const [hovered, setHovered] = useState(false);
    const Icon = type.icon;

    return (
        <Link
            href={type.href}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: 'flex',
                flexDirection: 'column',
                padding: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                background: 'var(--bg-surface)',
                border: `1.5px solid ${hovered ? type.accent + '40' : 'var(--border-subtle)'}`,
                borderRadius: '16px',
                textDecoration: 'none',
                boxShadow: hovered ? `0 8px 32px ${type.accent}14` : '0 2px 8px rgba(15,28,20,0.05)',
                transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
                transition: 'all 250ms ease',
                cursor: 'pointer',
            }}
        >
            {/* Icon */}
            <div style={{
                width: '44px', height: '44px',
                borderRadius: '12px',
                background: hovered ? type.accentBg : 'var(--bg-surface-2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.1rem',
                transition: 'background 250ms ease',
                flexShrink: 0,
            }}>
                <Icon size={20} color={hovered ? type.accent : 'var(--text-muted)'} strokeWidth={1.8} style={{ transition: 'color 250ms ease' }} />
            </div>

            {/* Title */}
            <h3 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
                color: 'var(--text-primary)',
                letterSpacing: '-0.01em',
                marginBottom: '0.5rem',
                lineHeight: 1.25,
            }}>
                {type.title}
            </h3>

            {/* Description */}
            <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                marginBottom: '1.25rem',
                flex: 1,
            }}>
                {type.description}
            </p>

            {/* CTA link */}
            <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '5px',
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem', fontWeight: 700,
                color: hovered ? type.accent : 'var(--brand-primary)',
                transition: 'color 200ms ease',
            }}>
                {type.cta}
                <ArrowRight
                    size={15}
                    strokeWidth={2.5}
                    style={{
                        transform: hovered ? 'translateX(3px)' : 'translateX(0)',
                        transition: 'transform 200ms ease',
                    }}
                />
            </span>
        </Link>
    );
}

export function PropertyTypes() {
    return (
        <section style={{ padding: 'clamp(2.5rem, 5vw, 4.5rem) 0', background: 'var(--bg-base)' }}>
            <div style={{
                width: '100%', maxWidth: '1280px',
                marginInline: 'auto',
                padding: '0 clamp(1rem, 4vw, 3rem)',
            }}>

                {/* Header */}
                <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.7rem', fontWeight: 700,
                        letterSpacing: '0.12em', textTransform: 'uppercase',
                        color: '#1a6b3c', marginBottom: '0.35rem',
                    }}>
                        <span style={{ display: 'inline-block', width: '18px', height: '2px', background: '#e8a84c', borderRadius: '2px' }} />
                        Explore by category
                    </p>
                    <h2 style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)',
                        color: 'var(--text-primary)',
                        letterSpacing: '-0.02em', margin: 0,
                    }}>
                        Property Types
                    </h2>
                </div>

                {/* 2×2 Grid */}
                <div className="types-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1rem',
                }}>
                    {TYPES.map(type => (
                        <TypeCard key={type.title} type={type} />
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 640px) {
          .types-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}