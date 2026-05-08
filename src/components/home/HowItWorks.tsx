'use client';

import { Search, ShieldCheck, BadgeCheck } from 'lucide-react';

const STEPS = [
    {
        number: '01',
        icon: Search,
        title: 'Search',
        description: 'Browse thousands of verified properties. Filter by location, price, type, and verification status.',
        color: '#b8832a',
        colorBg: 'rgba(232,168,76,0.10)',
        colorBorder: 'rgba(232,168,76,0.28)',
        colorGlow: 'rgba(232,168,76,0.18)',
    },
    {
        number: '02',
        icon: ShieldCheck,
        title: 'Verify',
        description: 'Our 6-layer verification (AI + lawyer + surveyor + federal + family + community) ensures you never buy fake land.',
        color: '#1a6b3c',
        colorBg: 'rgba(26,107,60,0.09)',
        colorBorder: 'rgba(26,107,60,0.22)',
        colorGlow: 'rgba(26,107,60,0.15)',
    },
    {
        number: '03',
        icon: BadgeCheck,
        title: 'Transact or Book',
        description: 'Pay securely via Vetandpay escrow. Funds released only after verification or check-out inspection.',
        color: '#b8832a',
        colorBg: 'rgba(232,168,76,0.10)',
        colorBorder: 'rgba(232,168,76,0.28)',
        colorGlow: 'rgba(232,168,76,0.18)',
    },
];

export function HowItWorks() {
    return (
        <section
            id="how-it-works"
            style={{
                padding: 'clamp(3rem, 6vw, 5.5rem) 0',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* ── Background image ── */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'url("/assets/mapline.jpg")', 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                zIndex: 0,
            }} />

            {/* ── Overlay — keeps bg subtle and content readable ── */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'var(--bg-base, #fff)',
                opacity: 0.88, // ← tweak between 0.82–0.93 to taste
                zIndex: 1,
            }} />

            {/* ── Ambient glow (on top of overlay) ── */}
            <div style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                background: 'radial-gradient(ellipse 70% 60% at 50% 60%, rgba(26,107,60,0.04) 0%, transparent 70%)',
                zIndex: 2,
            }} />

            {/* ── Content ── */}
            <div style={{
                width: '100%',
                maxWidth: '1000px',
                marginInline: 'auto',
                padding: '0 clamp(1rem, 4vw, 3rem)',
                position: 'relative',
                zIndex: 3,
            }}>

                {/* ── Header ── */}
                <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
                    <p style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.68rem', fontWeight: 700,
                        letterSpacing: '0.14em', textTransform: 'uppercase',
                        color: '#1a6b3c', marginBottom: '0.75rem',
                    }}>
                        <span style={{ display: 'inline-block', width: '24px', height: '2px', background: '#e8a84c', borderRadius: '2px' }} />
                        Simple Process
                        <span style={{ display: 'inline-block', width: '24px', height: '2px', background: '#e8a84c', borderRadius: '2px' }} />
                    </p>
                    <h2 style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 800,
                        fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
                        color: 'var(--text-primary)',
                        letterSpacing: '-0.03em',
                        margin: '0 0 0.6rem',
                        lineHeight: 1.1,
                    }}>
                        How it <span style={{ color: '#1a6b3c' }}>works</span>
                    </h2>
                    <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem', color: 'var(--text-muted)',
                        margin: 0, lineHeight: 1.6,
                    }}>
                        Find, verify, and secure your property — in three simple steps
                    </p>
                </div>

                {/* ── Steps ── */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '0',
                    alignItems: 'start',
                }} className="hiw-grid">

                    {STEPS.map((step, i) => {
                        const Icon = step.icon;
                        const isLast = i === STEPS.length - 1;

                        return (
                            <div key={step.number} style={{ display: 'flex', alignItems: 'start' }}>

                                {/* Step column */}
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                                    {/* Number */}
                                    <span style={{
                                        fontFamily: 'var(--font-display)',
                                        fontWeight: 800,
                                        fontSize: '0.72rem',
                                        color: step.color,
                                        letterSpacing: '0.08em',
                                        marginBottom: '0.55rem',
                                        display: 'block',
                                    }}>
                                        {step.number}
                                    </span>

                                    {/* Icon circle */}
                                    <div style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '50%',
                                        background: step.colorBg,
                                        border: `2px solid ${step.colorBorder}`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: `0 0 0 6px ${step.colorGlow}, 0 8px 24px ${step.color}18`,
                                        marginBottom: '1.5rem',
                                        flexShrink: 0,
                                        position: 'relative',
                                        zIndex: 1,
                                    }}>
                                        <Icon size={24} color={step.color} strokeWidth={1.7} />
                                    </div>

                                    {/* Card */}
                                    <div style={{
                                        width: '100%',
                                        background: 'var(--bg-surface)',
                                        border: `1.5px solid ${step.colorBorder}`,
                                        borderRadius: '16px',
                                        padding: '1.35rem 1.25rem',
                                        textAlign: 'center',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        boxShadow: `0 2px 20px ${step.color}0c`,
                                        marginTop: i === 1 ? '1.75rem' : '0',
                                    }}>
                                        {/* Watermark */}
                                        <span style={{
                                            position: 'absolute',
                                            right: '8px', bottom: '4px',
                                            fontFamily: 'var(--font-display)',
                                            fontWeight: 900, fontSize: '3.8rem',
                                            color: step.color, opacity: 0.055,
                                            lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
                                        }}>
                                            {step.number}
                                        </span>

                                        <h3 style={{
                                            fontFamily: 'var(--font-display)',
                                            fontWeight: 700,
                                            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
                                            color: 'var(--text-primary)',
                                            letterSpacing: '-0.015em',
                                            marginBottom: '0.6rem',
                                            lineHeight: 1.2,
                                        }}>
                                            {step.title}
                                        </h3>
                                        <p style={{
                                            fontFamily: 'var(--font-body)',
                                            fontSize: '0.84rem',
                                            color: 'var(--text-muted)',
                                            lineHeight: 1.65,
                                            margin: 0,
                                        }}>
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Connector line */}
                                {!isLast && (
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        paddingTop: '52px',
                                        width: 'clamp(1rem, 3vw, 2rem)',
                                        flexShrink: 0,
                                    }}>
                                        <div style={{
                                            width: '100%',
                                            height: '2px',
                                            borderRadius: '2px',
                                            background: `linear-gradient(to right, ${step.colorBorder}, ${STEPS[i + 1].colorBorder})`,
                                            position: 'relative',
                                        }}>
                                            <div style={{
                                                position: 'absolute',
                                                right: '-3px', top: '50%',
                                                transform: 'translateY(-50%)',
                                                width: '7px', height: '7px',
                                                borderRadius: '50%',
                                                background: STEPS[i + 1].color,
                                                opacity: 0.55,
                                            }} />
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <style>{`
        @media (max-width: 640px) {
          .hiw-grid {
            grid-template-columns: 1fr !important;
            max-width: 380px;
            margin-inline: auto;
          }
          .hiw-grid > div {
            flex-direction: column !important;
            align-items: center !important;
          }
        }
      `}</style>
        </section>
    );
}