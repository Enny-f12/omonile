'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BedDouble, ShieldCheck, Lightbulb, Info, ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';

const C = { color: '#1a6b3c', colorBg: 'rgba(26,107,60,0.08)', colorBorder: 'rgba(26,107,60,0.22)' };

const STEPS = [
  {
    number: 1,
    title: 'Search for Your Perfect Stay',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80',
    bullets: [
      'Enter destination (city or LGA)',
      'Select check-in / check-out dates',
      'Choose number of guests',
      'Filter by type: Short-Let or Yearly Rental',
      'Apply filters: Price range, Amenities, Verification status, Instant Book',
    ],
    tip: 'Use the "Facility Manager Verified" filter to see only properties that have been physically inspected and approved.',
  },
  {
    number: 2,
    title: 'Browse & Filter Results',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
    bullets: [
      'Sort by: Price (low/high), Rating, Newest, Distance to landmark',
      'Each card shows: photos, price per night or month, verification badge, star rating, Instant Book availability',
    ],
    sampleCard: true,
  },
  {
    number: 3,
    title: 'Review Property Details',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80',
    bullets: [
      'High-quality photo gallery (swipeable)',
      'Full property description',
      'Verification badge with details',
      'Host info: name, response rate, Superhost status',
      'Amenities: Water, Electricity, AC, WiFi, Security, Parking, Kitchen',
      'House rules, cancellation policy',
      'Guest reviews with ratings',
      'Neighbourhood safety score',
    ],
    callout: {
      title: 'VERIFICATION BADGES FOR RENTALS:',
      rows: [
        { label: '[AI-Scanned]',             desc: 'Basic document check passed' },
        { label: '[Facility Manager Verified]', desc: 'Property physically inspected' },
        { label: '[Premium Verified]',        desc: 'Full inspection + ongoing management' },
      ],
    },
  },
  {
    number: 4,
    title: 'Check Availability & Pricing',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&q=80',
    bullets: [
      'Calendar view: Available (green) / Blocked (gray) / Selected (blue)',
      'Nightly rate: ₦75,000 | Weekly: ₦450,000 (save 14%) | Monthly: ₦1,500,000 (save 33%)',
    ],
    pricingNote: 'Weekends and holidays may be higher. Long stays get discounts.',
  },
  {
    number: 5,
    title: 'Book Your Stay (Instant Book or Request)',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    twoOptions: true,
    requirements: [
      'Property must be Facility Manager Verified',
      'Host has enabled Instant Book',
      'Your account must have completed KYC (NIN or BVN)',
    ],
  },
  {
    number: 6,
    title: 'Provide Guest Details & Pay Securely',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80',
    bullets: [
      'Step 6.1: Enter guest details (Full name, Email, Phone, NIN/BVN, Special requests)',
      'Step 6.2: Review price breakdown',
      'Step 6.3: Select payment method — Card (Visa/Mastercard), Bank Transfer, or Wallet',
    ],
    escrowDiagram: true,
  },
  {
    number: 7,
    title: 'Receive Confirmation & Pre-Arrival Instructions',
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&q=80',
    bullets: [
      'Booking Confirmed! — Booking # + property + dates + total paid',
      'You receive: Confirmation email, SMS notification, In-app notification',
    ],
    timeline: [
      '48 hours before: Check-in instructions sent',
      '24 hours before: Facility manager contact shared',
      '2 hours before: Reminder',
      'At check-in: QR code for verification',
    ],
    actionButtons: ['Add to Calendar', 'Get Directions', 'Contact Host'],
  },
  {
    number: 8,
    title: 'Check-In & Enjoy Your Stay',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80',
    numbered: [
      'Facility manager meets you at the property',
      'Present valid ID for verification',
      'Scan check-in QR code in your app',
      'Receive keys or access code',
      'Property orientation tour (amenities, WiFi, AC, etc.)',
      'Emergency contacts saved',
    ],
    checklist: [
      'Facility manager greeted you',
      'ID verified',
      'Keys or access received',
      'Property matches photos',
      'All amenities working (AC, water, WiFi, etc.)',
      'Emergency contacts saved',
      'You have 24-hour dispute window active',
    ],
  },
  {
    number: 9,
    title: 'Check-Out, Inspection & Deposit Refund',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80',
    bullets: [
      '1. Return keys to facility manager',
      '2. Facility manager inspects property for damage',
      '3. Photos taken of each room (geotagged, timestamped)',
      '4. You confirm check-out in the app',
    ],
    depositOutcome: true,
    timingSummary: true,
  },
];

const COMPARE = [
  { label: 'Duration',       shortlet: '1–30 days', yearly: '6–24 months' },
  { label: 'Payment',        shortlet: 'Upfront (full amount)', yearly: 'First month + deposit' },
  { label: 'Service fee',    shortlet: '10%', yearly: '5% (first month)' },
  { label: 'Cancellation',   shortlet: 'Flexible/Moderate', yearly: 'Per lease terms' },
  { label: 'Verification',   shortlet: 'Facility Manager', yearly: 'Facility Manager' },
  { label: 'Check-in',       shortlet: 'Facility manager', yearly: 'Facility manager' },
  { label: 'Deposit refund', shortlet: 'Within 7 days after check-out', yearly: 'End of lease' },
  { label: 'Best for',       shortlet: 'Vacation, business', yearly: 'Relocation, long-term' },
];

const SUMMARY = [
  { n: 1, label: 'Search',        time: '2 min' },
  { n: 2, label: 'Browse',        time: '5 min' },
  { n: 3, label: 'Review',        time: '10 min' },
  { n: 4, label: 'Check Dates',   time: '2 min' },
  { n: 5, label: 'Book',          time: '3 min' },
  { n: 6, label: 'Pay',           time: '5 min' },
  { n: 7, label: 'Confirmation',  time: 'instant' },
  { n: 8, label: 'Check-In',      time: '15 min' },
  { n: 9, label: 'Check-Out',     time: '15 min' },
];

function StepCard({ step }: { step: typeof STEPS[0] }) {
  return (
    <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.85rem 1.25rem', borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-surface-2)' }}>
        <div style={{ width: '28px', height: '28px', borderRadius: '7px', background: C.colorBg, border: `1.5px solid ${C.colorBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.75rem', color: C.color }}>{step.number}</span>
        </div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.78rem', color: 'var(--text-primary)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{step.title}</h3>
      </div>

      {/* Image + content */}
      <div className="step-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div style={{ position: 'relative', minHeight: '200px', borderRight: '1px solid var(--border-subtle)' }}>
          <Image src={step.image} alt={step.title} fill sizes="(max-width:640px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${C.colorBg} 0%, transparent 60%)` }} />
          <div style={{ position: 'absolute', top: '0.65rem', left: '0.65rem', padding: '0.15rem 0.5rem', borderRadius: '5px', background: 'rgba(0,0,0,0.42)', backdropFilter: 'blur(6px)' }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', fontWeight: 600, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Step {step.number}</span>
          </div>
        </div>
        <div style={{ padding: '1.1rem 1.35rem' }}>
          {/* Standard bullets */}
          {step.bullets && (
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              {step.bullets.map((b, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '7px' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: C.color, flexShrink: 0, marginTop: '8px' }} />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.845rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{b}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Numbered steps (Step 8 check-in) */}
          {step.numbered && (
            <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem', counterReset: 'step-counter' }}>
              {step.numbered.map((b, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: C.colorBg, border: `1.5px solid ${C.colorBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.62rem', color: C.color }}>{i + 1}</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.845rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{b}</span>
                </li>
              ))}
            </ol>
          )}

          {/* Two options (Step 5) */}
          {step.twoOptions && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                { label: 'OPTION A: INSTANT BOOK', color: C.color, colorBg: C.colorBg, colorBorder: C.colorBorder, items: ['Available on verified properties only', 'Immediate confirmation', 'No host approval needed', 'Best for last-minute stays'] },
                { label: 'OPTION B: REQUEST TO BOOK', color: '#b8832a', colorBg: 'rgba(232,168,76,0.09)', colorBorder: 'rgba(232,168,76,0.28)', items: ['Host must approve within 24 hours', 'You can send a message', 'Best for longer stays', 'Ask questions before booking'] },
              ].map(opt => (
                <div key={opt.label} style={{ padding: '0.75rem', borderRadius: '10px', background: opt.colorBg, border: `1px solid ${opt.colorBorder}` }}>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: opt.color, margin: '0 0 0.4rem' }}>{opt.label}</p>
                  {opt.items.map((item, i) => (
                    <p key={i} style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text-secondary)', margin: '0 0 0.2rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <CheckCircle2 size={11} color={opt.color} strokeWidth={2.5} /> {item}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* Sample card (Step 2) */}
          {step.sampleCard && (
            <div style={{ border: '1px solid var(--border-default)', borderRadius: '10px', overflow: 'hidden', marginTop: '0.25rem' }}>
              <div style={{ height: '60px', background: 'var(--bg-surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>[PHOTO]</span>
              </div>
              <div style={{ padding: '0.65rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-primary)' }}>Cozy 2-Bedroom, Victoria Island</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: '#e8a84c' }}>★ 4.9 (23)</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                  {['Facility Manager Verified', 'Instant Book', '24/7 Security', 'Free WiFi'].map(t => (
                    <span key={t} style={{ padding: '0.1rem 0.45rem', borderRadius: '9999px', background: C.colorBg, border: `1px solid ${C.colorBorder}`, fontFamily: 'var(--font-body)', fontSize: '0.6rem', fontWeight: 600, color: C.color }}>{t}</span>
                  ))}
                </div>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-primary)', margin: '0 0 0.35rem' }}>₦75,000 per night</p>
                <div style={{ padding: '0.35rem', borderRadius: '6px', border: `1px solid ${C.colorBorder}`, textAlign: 'center', fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 700, color: C.color }}>VIEW DETAILS</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Pro tip */}
      {step.tip && (
        <div style={{ display: 'flex', gap: '8px', padding: '0.75rem 1.25rem', borderTop: '1px solid var(--border-subtle)', background: C.colorBg }}>
          <Lightbulb size={14} color={C.color} strokeWidth={2} style={{ flexShrink: 0, marginTop: '1px' }} />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
            <span style={{ fontWeight: 700, color: C.color }}>PRO TIP: </span>{step.tip}
          </p>
        </div>
      )}

      {/* Callout */}
      {step.callout && (
        <div style={{ borderTop: '1px solid var(--border-subtle)', padding: '0.85rem 1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.55rem' }}>
            <Info size={12} color={C.color} strokeWidth={2} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.color }}>{step.callout.title}</span>
          </div>
          {step.callout.rows.map((row, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.65rem', marginBottom: '0.3rem', alignItems: 'baseline' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.76rem', fontWeight: 700, color: C.color, flexShrink: 0, minWidth: '170px' }}>{row.label}</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>— {row.desc}</span>
            </div>
          ))}
        </div>
      )}

      {/* Instant Book requirements (Step 5) */}
      {step.requirements && (
        <div style={{ borderTop: '1px solid var(--border-subtle)', padding: '0.75rem 1.25rem', background: 'var(--bg-surface-2)' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--text-muted)', margin: '0 0 0.45rem' }}>INSTANT BOOK REQUIREMENTS:</p>
          {step.requirements.map((r, i) => (
            <p key={i} style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text-secondary)', margin: '0 0 0.2rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--text-muted)', flexShrink: 0 }} /> {r}
            </p>
          ))}
        </div>
      )}

      {/* Pricing note (Step 4) */}
      {step.pricingNote && (
        <div style={{ borderTop: '1px solid var(--border-subtle)', padding: '0.75rem 1.25rem', background: 'var(--bg-surface-2)' }}>
          <div style={{ display: 'flex', gap: '7px', alignItems: 'flex-start' }}>
            <Info size={13} color={C.color} strokeWidth={2} style={{ flexShrink: 0, marginTop: '1px' }} />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}><strong>SEASONAL NOTES:</strong> {step.pricingNote}</p>
          </div>
          {/* Price breakdown */}
          <div style={{ marginTop: '0.75rem', padding: '0.85rem', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '10px' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.07em', margin: '0 0 0.45rem' }}>Sample: Short-Let, 5 nights at ₦75,000/night</p>
            {[
              { l: '₦75,000 × 5 nights', v: '₦375,000' },
              { l: 'Cleaning fee',         v: '₦15,000' },
              { l: 'Service fee (10%)',    v: '₦39,000' },
              { l: 'TOTAL RENTAL PAYMENT', v: '₦429,000', bold: true },
              { l: 'SECURITY DEPOSIT (refundable)', v: '₦50,000', sub: true },
            ].map((r, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.25rem 0', borderTop: i > 2 ? `1px solid var(--border-subtle)` : 'none', marginTop: i === 3 ? '0.25rem' : '0' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: r.bold ? 'var(--text-primary)' : r.sub ? 'var(--text-muted)' : 'var(--text-secondary)', fontWeight: r.bold ? 700 : 400 }}>{r.l}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: r.bold ? 800 : 500, fontSize: '0.82rem', color: r.bold ? C.color : 'var(--text-secondary)' }}>{r.v}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Escrow diagram (Step 6) */}
      {step.escrowDiagram && (
        <div style={{ borderTop: '1px solid var(--border-subtle)', padding: '1rem 1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.75rem' }}>
            <ShieldCheck size={13} color={C.color} strokeWidth={2} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.color }}>HOW YOUR TWO-TIER ESCROW WORKS:</span>
          </div>
          {/* Flow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
            {['YOUR MONEY', '→', 'VETANDPAY ESCROW', '→', 'TWO SEPARATE HOLDS'].map((n, i) => (
              n === '→' ?
                <span key={i} style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>→</span> :
                <span key={i} style={{ padding: '0.3rem 0.65rem', borderRadius: '7px', background: C.colorBg, border: `1px solid ${C.colorBorder}`, fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 700, color: C.color }}>{n}</span>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginTop: '0.5rem' }}>
            {[
              { label: 'RENTAL PAYMENT', sub: '₦429,000', outcome: 'Released to host 24–48h after check-in', ok: true },
              { label: 'SECURITY DEPOSIT', sub: '₦50,000', outcome: 'Refunded within 7 days after check-out', ok: true },
              { label: 'DISPUTE WINDOW', sub: '24 hours', outcome: 'File dispute within 24h of check-in to extend hold', ok: false },
            ].map(b => (
              <div key={b.label} style={{ padding: '0.65rem', borderRadius: '8px', background: b.ok ? C.colorBg : 'rgba(232,168,76,0.09)', border: `1px solid ${b.ok ? C.colorBorder : 'rgba(232,168,76,0.28)'}`, textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.7rem', color: b.ok ? C.color : '#b8832a', margin: '0 0 0.15rem', letterSpacing: '0.04em' }}>{b.label}</p>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.85rem', color: 'var(--text-primary)', margin: '0 0 0.35rem' }}>{b.sub}</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.4 }}>{b.outcome}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pre-arrival timeline (Step 7) */}
      {step.timeline && (
        <div style={{ borderTop: '1px solid var(--border-subtle)', padding: '0.85rem 1.25rem' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.color, margin: '0 0 0.5rem' }}>PRE-ARRIVAL TIMELINE:</p>
          {step.timeline.map((t, i) => (
            <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '0.3rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: i < 2 ? C.color : 'var(--border-default)', border: i >= 2 ? `2px solid var(--border-strong)` : 'none', flexShrink: 0 }} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{t}</span>
            </div>
          ))}
          {step.actionButtons && (
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
              {step.actionButtons.map(b => (
                <span key={b} style={{ padding: '0.3rem 0.75rem', borderRadius: '9999px', border: `1.5px solid ${C.colorBorder}`, fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, color: C.color, background: 'transparent' }}>{b}</span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Check-In checklist (Step 8) */}
      {step.checklist && (
        <div style={{ borderTop: '1px solid var(--border-subtle)', padding: '0.85rem 1.25rem', background: 'var(--bg-surface-2)' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.color, margin: '0 0 0.5rem' }}>CHECKLIST FOR CHECK-IN:</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.25rem' }}>
            {step.checklist.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '14px', height: '14px', borderRadius: '3px', border: '1.5px solid var(--border-default)', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.76rem', color: 'var(--text-secondary)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Deposit outcome (Step 9) */}
      {step.depositOutcome && (
        <div style={{ borderTop: '1px solid var(--border-subtle)', padding: '0.85rem 1.25rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          <div style={{ padding: '0.85rem', borderRadius: '10px', background: 'rgba(26,107,60,0.07)', border: `1px solid ${C.colorBorder}` }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 700, color: C.color, textTransform: 'uppercase', letterSpacing: '0.07em', margin: '0 0 0.45rem' }}>IF NO DAMAGE:</p>
            {['Security deposit refunded to your payment method', 'Refund processed within 7 days', 'Receipt sent to your email'].map((t, i) => (
              <p key={i} style={{ display: 'flex', gap: '5px', alignItems: 'flex-start', fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text-secondary)', margin: '0 0 0.25rem' }}>
                <CheckCircle2 size={12} color={C.color} strokeWidth={2.5} style={{ flexShrink: 0, marginTop: '1px' }} />{t}
              </p>
            ))}
          </div>
          <div style={{ padding: '0.85rem', borderRadius: '10px', background: 'rgba(232,168,76,0.08)', border: '1px solid rgba(232,168,76,0.28)' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 700, color: '#b8832a', textTransform: 'uppercase', letterSpacing: '0.07em', margin: '0 0 0.45rem' }}>IF DAMAGE FOUND:</p>
            {['Damage reported by facility manager', 'Host files claim within 48 hours', 'Platform mediates (3 days)', 'ADR referral if unresolved (7 days)', 'Fair deduction from security deposit', 'Remaining deposit refunded to you'].map((t, i) => (
              <p key={i} style={{ display: 'flex', gap: '5px', alignItems: 'flex-start', fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-secondary)', margin: '0 0 0.22rem' }}>
                <AlertTriangle size={11} color="#b8832a" strokeWidth={2} style={{ flexShrink: 0, marginTop: '2px' }} />{t}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Timing summary (Step 9) */}
      {step.timingSummary && (
        <div style={{ borderTop: '1px solid var(--border-subtle)', padding: '0.75rem 1.25rem', background: 'var(--bg-surface-2)' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', margin: '0 0 0.4rem' }}>TIMING SUMMARY:</p>
          {[
            ['Rental payment taken', 'At booking (held in escrow)'],
            ['Rental payment released', '24–48 hours AFTER check-in'],
            ['Dispute window', 'First 24 hours after check-in'],
            ['Security deposit refund', 'Within 7 days AFTER check-out'],
          ].map(([l, v], i) => (
            <div key={i} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.2rem' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-muted)', minWidth: '175px' }}>• {l}:</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{v}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function ForRentersSection() {
  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '0.3rem 0.85rem', borderRadius: '9999px', background: C.colorBg, border: `1px solid ${C.colorBorder}`, marginBottom: '0.75rem' }}>
          <BedDouble size={13} color={C.color} strokeWidth={2.2} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.color }}>For Renters & Short-Let Guests</span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.4rem,3vw,2rem)', color: 'var(--text-primary)', letterSpacing: '-0.025em', margin: '0 0 0.5rem', lineHeight: 1.15 }}>
          Book with confidence.<br />Every property is inspected by a facility manager.
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-muted)', maxWidth: '520px', lineHeight: 1.7, margin: 0 }}>
          A step-by-step guide to booking verified short-let and yearly rental properties on Omonile App.
        </p>
      </div>

      {/* Two-tier escrow banner */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '1rem 1.25rem', background: C.colorBg, border: `1px solid ${C.colorBorder}`, borderRadius: '12px', marginBottom: '2rem' }}>
        <ShieldCheck size={18} color={C.color} strokeWidth={2} style={{ flexShrink: 0, marginTop: '1px' }} />
        <div>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', color: C.color, margin: '0 0 0.15rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Your payment is always protected by two-tier escrow</p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.83rem', color: 'var(--text-secondary)', margin: '0 0 0.4rem', lineHeight: 1.5 }}>
            <strong>RENTAL PAYMENT:</strong> Held by Vetandpay. Released to host 24–48 hours AFTER you check in. You have 24 hours to report issues.
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.83rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
            <strong>SECURITY DEPOSIT:</strong> Held separately. Refunded within 7 days AFTER check-out if no damage is found.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {STEPS.map(step => <StepCard key={step.number} step={step} />)}
      </div>

      {/* Summary */}
      <div style={{ marginTop: '2.5rem', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '16px', overflow: 'hidden' }}>
        <div style={{ padding: '0.85rem 1.5rem', borderBottom: '1px solid var(--border-subtle)', background: C.colorBg }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: C.color, margin: 0, textTransform: 'uppercase', letterSpacing: '0.04em' }}>For Renters — 9 Steps at a Glance</p>
        </div>
        <div style={{ overflowX: 'auto', padding: '1rem 1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', minWidth: '640px' }}>
            {SUMMARY.map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <div style={{ width: '30px', height: '30px', borderRadius: '7px', background: C.colorBg, border: `1.5px solid ${C.colorBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.35rem' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.75rem', color: C.color }}>{s.n}</span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 0.1rem', lineHeight: 1.3 }}>{s.label}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', color: 'var(--text-muted)', margin: 0 }}>⏱ {s.time}</p>
                </div>
                {i < SUMMARY.length - 1 && <div style={{ width: '18px', flexShrink: 0, textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.75rem', paddingBottom: '14px' }}>›</div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison table */}
      <div style={{ marginTop: '1.5rem', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '16px', overflow: 'hidden' }}>
        <div style={{ padding: '0.85rem 1.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)', margin: 0 }}>Quick Comparison: Short-Let vs. Yearly Rental</p>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ padding: '0.65rem 1.25rem', textAlign: 'left', fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.05em', textTransform: 'uppercase', background: 'var(--bg-surface-2)', borderRight: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}></th>
                {['SHORT-LET', 'YEARLY RENTAL'].map(h => (
                  <th key={h} style={{ padding: '0.65rem 1.25rem', textAlign: 'left', fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 700, color: C.color, background: 'var(--bg-surface-2)', borderRight: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARE.map((row, i) => (
                <tr key={i}>
                  <td style={{ padding: '0.65rem 1.25rem', fontFamily: 'var(--font-body)', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', borderRight: '1px solid var(--border-subtle)', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-surface-2)' }}>{row.label}</td>
                  <td style={{ padding: '0.65rem 1.25rem', fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-secondary)', borderRight: '1px solid var(--border-subtle)', borderTop: '1px solid var(--border-subtle)' }}>{row.shortlet}</td>
                  <td style={{ padding: '0.65rem 1.25rem', fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-subtle)' }}>{row.yearly}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CTA */}
      <div style={{ marginTop: '2rem', padding: '2rem 2.5rem', background: 'linear-gradient(135deg,#0d3d22,#1a6b3c)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.25rem' }}>
        <div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', margin: '0 0 0.3rem' }}>Ready to book with confidence?</p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: '#fff', margin: '0 0 0.3rem', letterSpacing: '-0.02em' }}>Search Verified Properties</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
            {["Renter's Guide to Short-Let Stays", 'Yearly Rental Checklist', 'Understanding Cancellation Policies', 'FAQ for Renters'].map(r => (
              <p key={r} style={{ fontFamily: 'var(--font-body)', fontSize: '0.77rem', color: 'rgba(255,255,255,0.55)', margin: 0 }}>→ {r}</p>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          <Link href="/listings?type=short-let" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '7px', padding: '0.85rem 1.75rem', borderRadius: '9999px', border: '1px solid #e8a84c', background: '#e8a84c', color: '#0d3d22', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
            Search Verified Properties <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '7px', padding: '0.7rem 1.5rem', borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.35)', background: 'transparent', color: 'white', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none' }}>
            Speak with an Expert
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .step-inner { grid-template-columns: 1fr !important; }
          .step-inner > div:first-child { min-height: 170px !important; border-right: none !important; border-bottom: 1px solid var(--border-subtle); }
        }
      `}</style>
    </div>
  );
}