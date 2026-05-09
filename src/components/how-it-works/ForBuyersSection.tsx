'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Home, Lightbulb, Info, ShieldCheck } from 'lucide-react';

const C = { color: '#1a6b3c', colorBg: 'rgba(26,107,60,0.08)', colorBorder: 'rgba(26,107,60,0.22)' };

/* ── Step data — content taken directly from wireframe ── */
const STEPS = [
  {
    number: 1,
    title: 'Search for Properties',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80',
    imageAlt: 'Searching for properties on a map',
    bullets: [
      'Browse thousands of listings across Nigeria',
      'Filter by location, price, type and verification status',
      'Filter by verification status',
      'Save favourites for later',
      'Get alerts for new listings',
    ],
    tip: { icon: 'pro', text: 'Use the "Verified Only" filter to see only properties that have already passed lawyer verification.' },
  },
  {
    number: 2,
    title: 'Review Property Details',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
    imageAlt: 'Property detail page with verification badge',
    bullets: [
      'View high-quality photos',
      'Check verification badge',
      'Read full description',
      'See amenities and house rules',
      'View location on map',
      'Read previous buyer reviews',
    ],
    callout: {
      title: 'VERIFICATION BADGES MEANING:',
      rows: [
        { label: '[AI-Scanned]',       desc: 'Basic document check passed' },
        { label: '[Lawyer Verified]',  desc: 'Title search at Land Registry completed' },
        { label: '[Premium Verified]', desc: 'Lawyer + Surveyor inspection completed' },
        { label: '[Dual Registry]',    desc: 'Federal + State registry both checked' },
        { label: '[Family Land]',      desc: 'All family consents obtained' },
        { label: '[Customary]',        desc: 'Community leader validation completed' },
      ],
    },
  },
  {
    number: 3,
    title: 'Request Verification (If Not Already Verified)',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
    imageAlt: 'Shield with checkmark and document',
    bullets: [
      'Click "Request Verification"',
      'Select verification tier:',
      '— Standard (₦50k)',
      '— Premium (₦150k)',
      '— Dual Registry (₦200k)',
      '— Family Land (₦300k)',
      '— Customary (₦250k)',
      'Pay securely via Paystack',
    ],
    callout: {
      title: 'WHAT EACH TIER INCLUDES:',
      rows: [
        { label: 'Standard',        desc: 'AI scan + Lawyer registry search (3–5 days)' },
        { label: 'Premium',         desc: 'Standard + Surveyor physical inspection (7–10 days)' },
        { label: 'Dual Registry',   desc: 'Premium + Federal registry search (10–14 days)' },
        { label: 'Family Land',     desc: 'Dual + Family consent + Community engagement (14–21d)' },
        { label: 'Customary',       desc: 'Premium + Community oral history (14–21 days)' },
      ],
    },
  },
  {
    number: 4,
    title: 'Track Verification Progress',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&q=80',
    imageAlt: 'Vertical timeline with checkmarks and progress bar',
    bullets: [
      'Real-time progress tracker',
      'See each layer completed',
      'Contact assigned professionals',
      'Receive notifications',
      'Estimated completion date',
    ],
    timeline: [
      { label: 'VERIFICATION REQUESTED',   detail: 'April 12',      done: true },
      { label: 'AWAITING LAWYER ASSIGNMENT', detail: '1 hour',       done: true },
      { label: 'LAWYER ASSIGNED',           detail: 'Barrister A.',  done: true },
      { label: 'REGISTRY SEARCH IN PROGRESS', detail: '2–3 days',   done: false },
      { label: 'DUAL FEDERAL SEARCH',       detail: '2–3 days',      done: false },
      { label: 'SURVEYOR INSPECTION',       detail: 'Awaiting',      done: false },
      { label: 'CERTIFICATE GENERATION',    detail: 'Pending',       done: false },
      { label: 'VERIFICATION COMPLETE',     detail: 'April 20 (est)',done: false },
    ],
  },
  {
    number: 5,
    title: 'Receive Verification Certificate',
    image: 'https://i.pinimg.com/1200x/12/dc/14/12dc1444903004f5565645787e804880.jpg',
    imageAlt: 'Digital certificate with QR code and blockchain hash',
    bullets: [
      'Digital certificate with QR code',
      'Blockchain-secured (immutable)',
      'Shows all 6 verification layers',
      'Download as PDF',
      'Share with lawyer or bank',
      'Verify on blockchain anytime',
    ],
    callout: {
      title: 'WHAT THE CERTIFICATE CONTAINS:',
      rows: [
        { label: '', desc: 'Property address and coordinates' },
        { label: '', desc: 'Verification status (CLEAR / ACQUIRED / DISPUTED)' },
        { label: '', desc: 'All 6 layer results with timestamps' },
        { label: '', desc: 'Lawyer, surveyor, and community leader signatures' },
        { label: '', desc: 'Blockchain transaction hash (permanent, tamper-proof)' },
      ],
    },
  },
  {
    number: 6,
    title: 'Make an Offer',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80',
    imageAlt: 'Handshake with money and contract icon',
    bullets: [
      'Click "Make Offer" button',
      'Enter your offer amount',
      'Add terms or conditions',
      'Seller receives notification',
      'Negotiate via in-app chat',
      'Receive counter-offers',
    ],
    tip: { icon: 'negotiation', text: 'Research comparable properties in the area. Be respectful and professional. Use the in-app chat to keep all records in one place — all negotiations are documented for dispute protection.' },
  },
  {
    number: 7,
    title: 'Fund Escrow (Payment Protection)',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
    imageAlt: 'Shield with lock and money transfer between two hands',
    bullets: [
      'Once offer accepted, fund escrow',
      'Money held by Vetandpay (licensed)',
      'Omonile App NEVER holds funds',
      'Pay via card or bank transfer',
      'Funds released ONLY when:',
      '— Verification complete',
      '— Title transferred',
      '— You confirm possession',
    ],
    flowchart: true,
  },
  {
    number: 8,
    title: 'Complete Transaction & Store Documents',
    image: 'https://i.pinimg.com/736x/89/c1/01/89c1014ba28ff30074257a3a2cb576b9.jpg',
    imageAlt: 'Document folder with lock and blockchain icon',
    bullets: [
      'Title deed transferred',
      'Escrow released to seller',
      'All documents stored in vault',
      'Access anytime, anywhere',
      'Share with lawyer or bank',
      'Rate and review the seller',
      'Leave feedback for professionals',
    ],
    callout: {
      title: 'DOCUMENT VAULT FEATURES:',
      rows: [
        { label: '', desc: 'Secure cloud storage (bank-level encryption)' },
        { label: '', desc: 'All documents blockchain-hashed for tamper-proof verification' },
        { label: '', desc: 'Share access with lawyers, banks, or family members' },
        { label: '', desc: 'Never lose your C of O or Deed again' },
        { label: '', desc: 'Accessible on web and mobile' },
      ],
    },
  },
];

const SUMMARY = [
  { n: 1, label: 'Search',       time: '5 min' },
  { n: 2, label: 'Review',       time: '10 min' },
  { n: 3, label: 'Request Verification', time: '5 min' },
  { n: 4, label: 'Track Progress', time: '2 min' },
  { n: 5, label: 'Certificate',  time: '1 min' },
  { n: 6, label: 'Make Offer',   time: '5 min' },
  { n: 7, label: 'Fund Escrow',  time: '5 min' },
  { n: 8, label: 'Complete & Store', time: '10 min' },
];

export function ForBuyersSection() {
  return (
    <div>
      {/* ── Header ── */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '0.3rem 0.85rem', borderRadius: '9999px', background: C.colorBg, border: `1px solid ${C.colorBorder}`, marginBottom: '0.85rem' }}>
          <Home size={13} color={C.color} strokeWidth={2.2} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.color }}>For Land & Property Buyers</span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.5rem,3vw,2.1rem)', color: 'var(--text-primary)', letterSpacing: '-0.025em', margin: '0 0 0.6rem', lineHeight: 1.15 }}>
          Buy with confidence.<br />Never fall victim to land fraud again.
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-muted)', maxWidth: '540px', lineHeight: 1.7, margin: 0 }}>
          A complete step-by-step guide to buying land or property safely on Omonile App.
        </p>
      </div>

      {/* ── Escrow trust banner ── */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '1rem 1.25rem', background: C.colorBg, border: `1px solid ${C.colorBorder}`, borderRadius: '12px', marginBottom: '2.5rem' }}>
        <ShieldCheck size={18} color={C.color} strokeWidth={2} style={{ flexShrink: 0, marginTop: '1px' }} />
        <div>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.82rem', color: C.color, margin: '0 0 0.2rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Your payment is always protected by escrow</p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.55 }}>Funds are held by Vetandpay and released ONLY after verification certificate is issued and title is transferred.</p>
        </div>
      </div>

      {/* ── Steps ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {STEPS.map((step) => (
          <div key={step.number}>
            {/* Step card */}
            <div style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-sm)',
            }}>
              {/* Step header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-surface-2)' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: C.colorBg, border: `1.5px solid ${C.colorBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.82rem', color: C.color }}>{step.number}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-primary)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {step.title}
                </h3>
              </div>

              {/* Main content: image + bullets */}
              <div className="step-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
                {/* Left: illustration */}
                <div style={{ position: 'relative', minHeight: '220px', background: 'var(--bg-surface-2)', borderRight: '1px solid var(--border-subtle)' }}>
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    sizes="(max-width:768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(26,107,60,0.15) 0%, transparent 60%)' }} />
                 
                </div>

                {/* Right: bullet points */}
                <div style={{ padding: '1.25rem 1.5rem' }}>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {step.bullets.map((b, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        {!b.startsWith('—') && (
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: C.color, flexShrink: 0, marginTop: '7px' }} />
                        )}
                        <span style={{
                          fontFamily: 'var(--font-body)', fontSize: '0.875rem',
                          color: b.startsWith('—') ? 'var(--text-muted)' : 'var(--text-secondary)',
                          lineHeight: 1.5,
                          paddingLeft: b.startsWith('—') ? '14px' : '0',
                        }}>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pro tip */}
              {step.tip && (
                <div style={{ display: 'flex', gap: '9px', padding: '0.85rem 1.25rem', borderTop: '1px solid var(--border-subtle)', background: 'rgba(26,107,60,0.04)' }}>
                  <Lightbulb size={15} color={C.color} strokeWidth={2} style={{ flexShrink: 0, marginTop: '1px' }} />
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.55 }}>
                    <span style={{ fontWeight: 700, color: C.color }}>
                      {step.tip.icon === 'pro' ? 'PRO TIP: ' : 'NEGOTIATION TIPS: '}
                    </span>
                    {step.tip.text}
                  </p>
                </div>
              )}

              {/* Callout box */}
              {step.callout && (
                <div style={{ borderTop: '1px solid var(--border-subtle)', padding: '1rem 1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '0.75rem' }}>
                    <Info size={13} color={C.color} strokeWidth={2} />
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.color }}>{step.callout.title}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {step.callout.rows.map((row, i) => (
                      <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'baseline' }}>
                        {row.label && <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 700, color: C.color, flexShrink: 0, minWidth: '130px' }}>{row.label}</span>}
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                          {row.label ? '— ' : '• '}{row.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Timeline (Step 4) */}
              {step.timeline && (
                <div style={{ borderTop: '1px solid var(--border-subtle)', padding: '1rem 1.25rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {step.timeline.map((t, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: t.done ? C.color : 'var(--border-default)', flexShrink: 0, border: t.done ? 'none' : `2px solid var(--border-strong)` }} />
                        <div style={{ flex: 1, height: '1px', background: 'var(--border-subtle)' }} />
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: t.done ? 700 : 400, color: t.done ? 'var(--text-primary)' : 'var(--text-muted)', letterSpacing: '0.04em', whiteSpace: 'nowrap', minWidth: '160px' }}>{t.label}</span>
                        <div style={{ flex: 1, height: '1px', background: 'var(--border-subtle)' }} />
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: t.done ? C.color : 'var(--text-muted)', whiteSpace: 'nowrap', minWidth: '80px', textAlign: 'right' }}>{t.detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Flowchart (Step 7 — Escrow) */}
              {step.flowchart && (
                <div style={{ borderTop: '1px solid var(--border-subtle)', padding: '1.25rem 1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '1rem' }}>
                    <ShieldCheck size={13} color={C.color} strokeWidth={2} />
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.color }}>HOW ESCROW PROTECTS YOU:</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0', textAlign: 'center' }}>
                    {[
                      { label: 'YOUR MONEY', sub: '' },
                      { label: '↓', sub: '' },
                      { label: 'VETANDPAY ESCROW', sub: 'Held securely' },
                      { label: '↓', sub: '' },
                      { label: 'VERIFICATION CERTIFICATE?', sub: '' },
                    ].map((item, i) => (
                      <div key={i} style={{ padding: item.label === '↓' ? '0.1rem 0' : '0.45rem 1.25rem', background: item.label === '↓' ? 'transparent' : C.colorBg, border: item.label === '↓' ? 'none' : `1px solid ${C.colorBorder}`, borderRadius: item.label === '↓' ? 0 : '8px', marginBottom: '0.1rem', minWidth: item.label === '↓' ? 'auto' : '180px' }}>
                        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: item.label === '↓' ? '1rem' : '0.78rem', color: item.label === '↓' ? 'var(--text-muted)' : C.color, margin: 0, letterSpacing: '0.04em' }}>{item.label}</p>
                        {item.sub && <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--text-muted)', margin: 0 }}>{item.sub}</p>}
                      </div>
                    ))}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', width: '100%', maxWidth: '400px', marginTop: '0.5rem' }}>
                      {[{ label: '[YES]', result: 'RELEASED TO SELLER', color: C.color }, { label: '[NO]', result: 'MONEY RETURNED TO YOU', color: '#dc2626' }].map(b => (
                        <div key={b.label} style={{ textAlign: 'center', padding: '0.75rem', background: `${b.color}10`, border: `1px solid ${b.color}30`, borderRadius: '10px' }}>
                          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.8rem', color: b.color, margin: '0 0 0.2rem' }}>{b.label}</p>
                          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.35 }}>{b.result}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ── Summary table ── */}
      <div style={{ marginTop: '3rem', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '16px', overflow: 'hidden' }}>
        <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid var(--border-subtle)', background: C.colorBg }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: C.color, margin: 0, letterSpacing: '0.04em', textTransform: 'uppercase' }}>For Buyers — Quick Summary: 8 Steps at a Glance</p>
        </div>
        <div style={{ overflowX: 'auto', padding: '1.25rem 1.5rem' }}>
          <div style={{ display: 'flex', gap: '0', alignItems: 'flex-start', minWidth: '600px' }}>
            {SUMMARY.map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: C.colorBg, border: `1.5px solid ${C.colorBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.5rem', flexShrink: 0 }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.82rem', color: C.color }}>{s.n}</span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 0.15rem', lineHeight: 1.3 }}>{s.label}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: 'var(--text-muted)', margin: 0 }}>⏱ {s.time}</p>
                </div>
                {i < SUMMARY.length - 1 && (
                  <div style={{ width: '24px', flexShrink: 0, textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem', paddingBottom: '20px' }}>›</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div style={{ marginTop: '2rem', padding: '2rem 2.5rem', background: 'linear-gradient(135deg,#0d3d22,#1a6b3c)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.25rem' }}>
        <div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', margin: '0 0 0.3rem' }}>Ready to buy with confidence?</p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem', color: '#fff', margin: '0 0 0.3rem', letterSpacing: '-0.02em' }}>Browse Verified Properties</h3>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', margin: 0 }}>Still have questions? Visit our FAQ page or speak with a property expert.</p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link href="/listings" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '0.85rem 1.75rem', borderRadius: '9999px', border: '1px solid #e8a84c', background: '#e8a84c', color: '#0d3d22', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', flexShrink: 0 }}>
            Browse Verified Properties <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
          <Link href="/coming-soon" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '0.85rem 1.5rem', borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.35)', background: 'transparent', color: 'white', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none' }}>
            Speak With a Property Expert
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .step-inner { grid-template-columns: 1fr !important; }
          .step-inner > div:first-child { min-height: 180px !important; border-right: none !important; border-bottom: 1px solid var(--border-subtle); }
        }
      `}</style>
    </div>
  );
}