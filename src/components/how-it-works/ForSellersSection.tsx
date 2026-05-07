'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Building2, Lightbulb, Info, Wallet, Clock } from 'lucide-react';

const C = { color: '#b8832a', colorBg: 'rgba(232,168,76,0.09)', colorBorder: 'rgba(232,168,76,0.28)' };

const STEPS = [
  {
    number: 1,
    title: 'Create Your Account & Profile',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80',
    imageAlt: 'User profile creation screen with avatar and verification badge',
    bullets: [
      'Sign up with email or phone',
      'Verify your NIN or BVN',
      'Complete your seller profile',
      'Add business logo (if company)',
      'Set your response preferences',
      'Build trust with buyers',
    ],
    tip: 'Complete your profile 100% — verified sellers get 3x more inquiries than unverified sellers.',
  },
  {
    number: 2,
    title: 'Choose Your Listing Type',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&q=80',
    imageAlt: 'Four property type icons arranged in a grid',
    bullets: [
      'Select what you want to sell:',
      '○ LAND FOR SALE',
      '  — Raw land, plots, acres',
      '○ PROPERTY FOR SALE',
      '  — Houses, flats, duplexes',
      '○ BOTH LAND & PROPERTY',
      '  — Combined listing',
    ],
    callout: {
      title: 'LISTING TYPES EXPLAINED:',
      rows: [
        { label: 'Land for Sale',     desc: 'Vacant land, agricultural land, plots' },
        { label: 'Property for Sale', desc: 'Built properties with structures' },
        { label: 'Both',              desc: 'Land with existing structure or development' },
      ],
    },
  },
  {
    number: 3,
    title: 'Create Your Listing (Step-by-Step Form)',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80',
    imageAlt: 'Form wizard with progress bar, fields, and save draft button',
    bullets: [
      'Multi-step form wizard',
      'Progress indicator',
      'Save draft anytime',
      'Preview before submitting',
      'Auto-save feature',
    ],
    multiSection: {
      sections: [
        {
          label: 'STEP 3.1: LOCATION & DETAILS',
          items: [
            'Full address (street, LGA, city)',
            'Property title (e.g., "3-Bedroom Apartment in Lekki")',
            'Detailed description (min 100 characters)',
            'Size (sqm for buildings, plots for land)',
            'Bedrooms & bathrooms (if applicable)',
          ],
        },
        {
          label: 'STEP 3.2: PRICING & VERIFICATION TIER',
          items: [
            'Set your price (NGN)',
            'Mark as negotiable (optional)',
            'Select verification tier:',
            '— None (Free) = "Unverified" badge',
            '— Standard (₦50k) = "Lawyer Verified" badge',
            '— Premium (₦150k) = "Premium Verified" badge',
            '— Dual Registry (₦200k) = "Dual Registry" badge',
            '— Family Land (₦300k) = "Family Land" badge',
            '— Customary (₦250k) = "Customary" badge',
          ],
        },
        {
          label: 'STEP 3.3: PHOTOS & DOCUMENTS',
          items: [
            'Upload up to 20 high-quality photos',
            'Upload C of O, Deed, Survey Plan (PDF)',
            'Drag and drop to reorder',
            'Add captions to photos',
          ],
        },
      ],
    },
  },
  {
    number: 4,
    title: 'Submit for Verification',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
    imageAlt: 'Shield with checkmark and document upload icon',
    bullets: [
      'Pay verification fee',
      'System assigns professionals:',
      '— Lawyer for registry search',
      '— Surveyor for inspection',
      '— Facility Manager (if rental)',
      'Track progress in real-time',
      'Receive notifications',
    ],
    flowDiagram: {
      title: 'WHAT HAPPENS DURING VERIFICATION:',
      row1: ['AI SCAN\n(1 hour)', 'LAWYER\n(3–5 days)', 'SURVEYOR\n(2–3 days)'],
      row2: ['FEDERAL\n(if dual)', 'FAMILY\n(if family)', 'COMMUNITY\n(if custom)'],
    },
  },
  {
    number: 5,
    title: 'Cooperate with Assigned Professionals',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&q=80',
    imageAlt: 'Three professionals (lawyer, surveyor, facility manager) with checkmarks',
    bullets: [
      'Lawyer will contact you for:',
      '  — Document clarification',
      '  — Registry visit coordination',
      '',
      'Surveyor will schedule:',
      '  — On-site inspection',
      '  — GPS coordinate capture',
      '  — Beacon verification',
      '',
      'Respond promptly to avoid delays',
    ],
    callout: {
      title: 'TYPICAL VERIFICATION TIMELINES:',
      rows: [
        { label: 'Standard Tier',   desc: '3–5 days total' },
        { label: 'Premium Tier',    desc: '7–10 days total' },
        { label: 'Dual Registry',   desc: '10–14 days total' },
        { label: 'Family Land',     desc: '14–21 days total' },
        { label: 'Customary Land',  desc: '14–21 days total' },
      ],
    },
  },
  {
    number: 6,
    title: 'Get Verified & Go Live',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
    imageAlt: 'Property listing card with VERIFIED badge and LIVE status',
    bullets: [
      'Upon successful verification:',
      '— Listing goes LIVE',
      '— Verification badge appears',
      '— Featured in search results',
      '— Buyers see trust indicators',
      '',
      'You receive:',
      '— Verification certificate',
      '— Blockchain record',
      '— Shareable verification link',
    ],
    callout: {
      title: 'VERIFICATION BADGES & WHAT BUYERS SEE:',
      rows: [
        { label: '[AI-Scanned]',       desc: 'Basic trust' },
        { label: '[Lawyer Verified]',  desc: 'High trust (recommended)' },
        { label: '[Premium Verified]', desc: 'Maximum trust (highest conversion)' },
        { label: '[Dual Registry]',    desc: 'For federal corridor properties' },
        { label: '[Family Land]',      desc: 'For communal lands' },
        { label: '[Customary]',        desc: 'For traditional tenure' },
      ],
    },
  },
  {
    number: 7,
    title: 'Receive Offers & Negotiate',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80',
    imageAlt: 'Dashboard with offer notifications and message icon',
    bullets: [
      'Receive notifications for:',
      '— New offers',
      '— Buyer messages',
      '— Viewing requests',
      '',
      'Review offer details:',
      '— Offer amount',
      '— Buyer profile',
      '— Terms and conditions',
      '',
      'Actions: Accept / Counter-offer / Decline / Message buyer',
    ],
    tip: 'Respond within 24 hours to keep buyer interest. Use the in-app chat for transparent record-keeping. Be clear about what\'s included in the price. Document all agreements in the chat.',
  },
  {
    number: 8,
    title: 'Complete Transaction & Get Paid',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
    imageAlt: 'Money transfer between two hands with checkmark and PAID stamp',
    bullets: [
      'Buyer funds escrow',
      'You transfer title documents',
      'Lawyer verifies transfer',
      'Buyer confirms possession',
      'Escrow releases payment to you',
      '',
      'Funds sent to your bank account',
      'Transaction complete!',
    ],
    escrowFlow: true,
  },
];

const BONUS_STEPS = [
  {
    id: 'A',
    title: 'Set Availability Calendar',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&q=80',
    bullets: ['Block unavailable dates', 'Set minimum stay', 'Configure seasonal pricing', 'Sync with iCal/Google'],
  },
  {
    id: 'B',
    title: 'Set Pricing & Rules',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
    bullets: ['Daily, weekly, monthly rates', 'Security deposit amount', 'Cleaning fee', 'House rules', 'Cancellation policy'],
  },
  {
    id: 'C',
    title: 'Facility Manager Inspection',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80',
    bullets: ['Mandatory before listing', 'Physical inspection', 'Photo verification', 'Amenities checklist', 'Neighborhood safety check'],
  },
];

const SUMMARY = [
  { n: 1, label: 'Create Account', time: '5 min' },
  { n: 2, label: 'Choose Listing Type', time: '1 min' },
  { n: 3, label: 'Create Listing', time: '15 min' },
  { n: 4, label: 'Submit for Verification', time: '2 min' },
  { n: 5, label: 'Cooperate with Pros', time: 'varies' },
  { n: 6, label: 'Get Verified & Go Live', time: 'varies' },
  { n: 7, label: 'Receive Offers & Negotiate', time: 'varies' },
  { n: 8, label: 'Complete & Get Paid', time: '1 day' },
];

const LISTING_FEES = [
  { item: 'Free listing (Unverified badge)',         fee: '₦0' },
  { item: 'Verified listing (with badge)',            fee: '₦10,000' },
  { item: 'Featured listing (boosted visibility)',    fee: '₦2,500/week' },
];
const VERIFICATION_FEES = [
  { item: 'Standard (AI + Lawyer)',                   fee: '₦50,000' },
  { item: 'Premium (Standard + Surveyor)',             fee: '₦150,000' },
  { item: 'Dual Registry (Premium + Federal)',         fee: '₦200,000' },
  { item: 'Family Land (Dual + Family consent)',       fee: '₦300,000' },
  { item: 'Customary (Premium + Community)',           fee: '₦250,000' },
];
const TRANSACTION_FEES = [
  { item: 'Land/Property Sale',     fee: '1.5% of sale' },
  { item: 'Short-Let Booking',      fee: '10% of booking' },
  { item: 'Yearly Rental Booking',  fee: '5% of first month' },
];

export function ForSellersSection() {
  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '0.3rem 0.85rem', borderRadius: '9999px', background: C.colorBg, border: `1px solid ${C.colorBorder}`, marginBottom: '0.85rem' }}>
          <Building2 size={13} color={C.color} strokeWidth={2.2} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.color }}>For Sellers & Property Owners</span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.5rem,3vw,2.1rem)', color: 'var(--text-primary)', letterSpacing: '-0.025em', margin: '0 0 0.6rem', lineHeight: 1.15 }}>
          List your property. Get verified.<br />Attract serious buyers and renters.
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-muted)', maxWidth: '540px', lineHeight: 1.7, margin: 0 }}>
          A complete step-by-step guide to selling land or property safely on Omonile App.
        </p>
      </div>

      {/* Escrow trust banner */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '1rem 1.25rem', background: C.colorBg, border: `1px solid ${C.colorBorder}`, borderRadius: '12px', marginBottom: '2.5rem' }}>
        <Wallet size={18} color={C.color} strokeWidth={2} style={{ flexShrink: 0, marginTop: '1px' }} />
        <div>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.82rem', color: C.color, margin: '0 0 0.2rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>You get paid only after verification and title transfer</p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.55 }}>Funds are held by Vetandpay and released ONLY after buyer confirms possession and verification certificate is issued.</p>
        </div>
      </div>

      {/* Steps */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {STEPS.map((step) => (
          <div key={step.number} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
            {/* Step header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', padding: '0.9rem 1.25rem', borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-surface-2)' }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '8px', background: C.colorBg, border: `1.5px solid ${C.colorBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.8rem', color: C.color }}>{step.number}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-primary)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                {step.title}
              </h3>
            </div>

            {/* Image + bullets */}
            <div className="step-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
              <div style={{ position: 'relative', minHeight: '220px', background: 'var(--bg-surface-2)', borderRight: '1px solid var(--border-subtle)' }}>
                <Image src={step.image} alt={step.imageAlt} fill sizes="(max-width:640px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${C.colorBg} 0%, transparent 60%)` }} />
                <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '6px', background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(6px)' }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.62rem', fontWeight: 600, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Illustration #{step.number}</span>
                </div>
              </div>
              <div style={{ padding: '1.25rem 1.5rem' }}>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {step.bullets.map((b, i) => (
                    b === '' ? <li key={i} style={{ height: '0.35rem' }} /> :
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      {!b.startsWith('—') && !b.startsWith('  ') && !b.startsWith('○') && (
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: C.color, flexShrink: 0, marginTop: '7px' }} />
                      )}
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: (b.startsWith('—') || b.startsWith('  ') || b.startsWith('○')) ? 'var(--text-muted)' : 'var(--text-secondary)', lineHeight: 1.5, paddingLeft: (b.startsWith('—') || b.startsWith('  ') || b.startsWith('○')) ? '14px' : '0' }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pro tip */}
            {step.tip && (
              <div style={{ display: 'flex', gap: '9px', padding: '0.85rem 1.25rem', borderTop: '1px solid var(--border-subtle)', background: `${C.colorBg}` }}>
                <Lightbulb size={15} color={C.color} strokeWidth={2} style={{ flexShrink: 0, marginTop: '1px' }} />
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.55 }}>
                  <span style={{ fontWeight: 700, color: C.color }}>PRO TIP: </span>{step.tip}
                </p>
              </div>
            )}

            {/* Callout */}
            {step.callout && (
              <div style={{ borderTop: '1px solid var(--border-subtle)', padding: '1rem 1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '0.75rem' }}>
                  <Info size={13} color={C.color} strokeWidth={2} />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.color }}>{step.callout.title}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {step.callout.rows.map((row, i) => (
                    <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'baseline' }}>
                      {row.label && <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 700, color: C.color, flexShrink: 0, minWidth: '140px' }}>{row.label}</span>}
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>— {row.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Multi-section (Step 3) */}
            {step.multiSection && (
              <div style={{ borderTop: '1px solid var(--border-subtle)', padding: '1rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {step.multiSection.sections.map((sec, si) => (
                  <div key={si}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '0.5rem' }}>
                      <Info size={13} color={C.color} strokeWidth={2} />
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.color }}>{sec.label}</span>
                    </div>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                      {sec.items.map((item, ii) => (
                        <li key={ii} style={{ display: 'flex', alignItems: 'flex-start', gap: '7px' }}>
                          {!item.startsWith('—') && <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: C.color, flexShrink: 0, marginTop: '8px' }} />}
                          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: item.startsWith('—') ? 'var(--text-muted)' : 'var(--text-secondary)', paddingLeft: item.startsWith('—') ? '12px' : '0', lineHeight: 1.5 }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Flow diagram (Step 4) */}
            {step.flowDiagram && (
              <div style={{ borderTop: '1px solid var(--border-subtle)', padding: '1.25rem 1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '1rem' }}>
                  <Clock size={13} color={C.color} strokeWidth={2} />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.color }}>{step.flowDiagram.title}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {step.flowDiagram.row1.map((node, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ padding: '0.5rem 0.85rem', borderRadius: '8px', background: C.colorBg, border: `1px solid ${C.colorBorder}`, textAlign: 'center' }}>
                          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 700, color: C.color, margin: 0, whiteSpace: 'pre-line' }}>{node}</p>
                        </div>
                        {i < step.flowDiagram!.row1.length - 1 && <span style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>→</span>}
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
                    {step.flowDiagram.row1.map((_, i) => <span key={i} style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>↓</span>)}
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {step.flowDiagram.row2.map((node, i) => (
                      <div key={i} style={{ padding: '0.5rem 0.85rem', borderRadius: '8px', background: 'var(--bg-surface-2)', border: '1px solid var(--border-subtle)', textAlign: 'center' }}>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-muted)', margin: 0, whiteSpace: 'pre-line' }}>{node}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Escrow payment flow (Step 8) */}
            {step.escrowFlow && (
              <div style={{ borderTop: '1px solid var(--border-subtle)', padding: '1.25rem 1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '1rem' }}>
                  <Wallet size={13} color={C.color} strokeWidth={2} />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.color }}>ESCROW PAYMENT FLOW:</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.15rem', textAlign: 'center' }}>
                  {[
                    { label: 'BUYER',                            sub: '', highlight: false },
                    { label: '↓',                                sub: '', highlight: false, arrow: true },
                    { label: 'VETANDPAY ESCROW',                 sub: 'Funds Held Securely', highlight: true },
                    { label: '↓',                                sub: '', highlight: false, arrow: true },
                    { label: 'VERIFICATION COMPLETE?',           sub: '', highlight: false },
                    { label: 'NO → Funds Returned to Buyer',     sub: '', highlight: false, warn: true },
                    { label: 'YES ↓',                            sub: '', highlight: false, arrow: true },
                    { label: 'TITLE TRANSFERRED?',               sub: '', highlight: false },
                    { label: 'NO → Lawyer Mediates',             sub: '', highlight: false, warn: true },
                    { label: 'YES ↓',                            sub: '', highlight: false, arrow: true },
                    { label: 'BUYER CONFIRMS POSSESSION',         sub: '', highlight: false },
                    { label: '↓',                                sub: '', highlight: false, arrow: true },
                    { label: 'FUNDS RELEASED TO YOU',            sub: 'minus platform fee', highlight: true },
                  ].map((item, i) => (
                    item.arrow ? (
                      <div key={i} style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.2 }}>{item.label}</div>
                    ) : (
                      <div key={i} style={{ padding: '0.4rem 1rem', borderRadius: '8px', background: item.highlight ? C.colorBg : item.warn ? 'rgba(220,38,38,0.06)' : 'var(--bg-surface-2)', border: `1px solid ${item.highlight ? C.colorBorder : item.warn ? 'rgba(220,38,38,0.2)' : 'var(--border-subtle)'}`, marginBottom: '0.1rem', minWidth: '200px', maxWidth: '320px', width: '100%' }}>
                        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', color: item.highlight ? C.color : item.warn ? '#dc2626' : 'var(--text-secondary)', margin: 0, letterSpacing: '0.04em' }}>{item.label}</p>
                        {item.sub && <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--text-muted)', margin: 0 }}>{item.sub}</p>}
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bonus: Rental & Short-Let Sellers */}
      <div style={{ marginTop: '2.5rem', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '16px', overflow: 'hidden' }}>
        <div style={{ padding: '1rem 1.5rem', background: C.colorBg, borderBottom: `1px solid ${C.colorBorder}` }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.color, margin: '0 0 0.15rem' }}>Bonus</p>
          <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', margin: '0 0 0.15rem' }}>Rental & Short-Let Sellers (Additional Steps)</h4>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>For property owners listing rentals or short-lets only</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1px', background: 'var(--border-subtle)' }}>
          {BONUS_STEPS.map(b => (
            <div key={b.id} style={{ background: 'var(--bg-surface)', overflow: 'hidden' }}>
              <div style={{ position: 'relative', height: '140px' }}>
                <Image src={b.image} alt={b.title} fill sizes="300px" style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.55) 100%)' }} />
                <div style={{ position: 'absolute', bottom: '0.75rem', left: '0.85rem' }}>
                  <span style={{ display: 'inline-block', padding: '0.15rem 0.55rem', borderRadius: '6px', background: C.colorBg, border: `1px solid ${C.colorBorder}`, fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 700, color: C.color }}>Step {b.id}</span>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: '#fff', margin: '0.25rem 0 0', lineHeight: 1.2 }}>{b.title}</p>
                </div>
              </div>
              <ul style={{ listStyle: 'none', padding: '1rem 1.1rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {b.bullets.map((bl, i) => (
                  <li key={i} style={{ display: 'flex', gap: '7px', alignItems: 'flex-start' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: C.color, flexShrink: 0, marginTop: '8px' }} />
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>{bl}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Summary table */}
      <div style={{ marginTop: '2rem', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '16px', overflow: 'hidden' }}>
        <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid var(--border-subtle)', background: C.colorBg }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: C.color, margin: 0, textTransform: 'uppercase', letterSpacing: '0.04em' }}>For Sellers — Quick Summary: 8 Steps at a Glance</p>
        </div>
        <div style={{ overflowX: 'auto', padding: '1.25rem 1.5rem' }}>
          <div style={{ display: 'flex', gap: '0', alignItems: 'flex-start', minWidth: '600px' }}>
            {SUMMARY.map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <div style={{ width: '34px', height: '34px', borderRadius: '8px', background: C.colorBg, border: `1.5px solid ${C.colorBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.45rem' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.8rem', color: C.color }}>{s.n}</span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 0.1rem', lineHeight: 1.3 }}>{s.label}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.62rem', color: 'var(--text-muted)', margin: 0 }}>⏱ {s.time}</p>
                </div>
                {i < SUMMARY.length - 1 && <div style={{ width: '20px', flexShrink: 0, textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem', paddingBottom: '16px' }}>›</div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fees tables */}
      <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="fees-grid">
        <div>
          <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '14px', overflow: 'hidden', marginBottom: '1rem' }}>
            <div style={{ padding: '0.8rem 1.25rem', borderBottom: '1px solid var(--border-subtle)', background: C.colorBg }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: C.color, margin: 0 }}>Listing Fees (One-time)</p>
            </div>
            {LISTING_FEES.map((f, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.7rem 1.25rem', borderTop: i > 0 ? '1px solid var(--border-subtle)' : 'none' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{f.item}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.82rem', color: C.color }}>{f.fee}</span>
              </div>
            ))}
          </div>
          <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '14px', overflow: 'hidden' }}>
            <div style={{ padding: '0.8rem 1.25rem', borderBottom: '1px solid var(--border-subtle)', background: C.colorBg }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: C.color, margin: 0 }}>Transaction Fees (Deducted at closing)</p>
            </div>
            {TRANSACTION_FEES.map((f, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.7rem 1.25rem', borderTop: i > 0 ? '1px solid var(--border-subtle)' : 'none' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{f.item}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.82rem', color: C.color }}>{f.fee}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '14px', overflow: 'hidden', marginBottom: '1rem' }}>
            <div style={{ padding: '0.8rem 1.25rem', borderBottom: '1px solid var(--border-subtle)', background: C.colorBg }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: C.color, margin: 0 }}>Verification Fees (Pay once, get verified)</p>
            </div>
            {VERIFICATION_FEES.map((f, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.7rem 1.25rem', borderTop: i > 0 ? '1px solid var(--border-subtle)' : 'none' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{f.item}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.82rem', color: C.color }}>{f.fee}</span>
              </div>
            ))}
          </div>
          {/* Example */}
          <div style={{ background: C.colorBg, border: `1px solid ${C.colorBorder}`, borderRadius: '14px', padding: '1rem 1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '0.75rem' }}>
              <Info size={13} color={C.color} strokeWidth={2} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: C.color }}>Example: Selling ₦50M with Premium verification</span>
            </div>
            {[
              { label: 'Sale Price', val: '₦50,000,000' },
              { label: 'Premium Verification Fee', val: '(₦150,000)' },
              { label: 'Transaction Fee (1.5%)', val: '(₦750,000)' },
            ].map((r, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.3rem 0', borderBottom: i < 2 ? '1px solid rgba(232,168,76,0.15)' : 'none' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{r.label}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{r.val}</span>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '0.5rem', marginTop: '0.25rem', borderTop: `2px solid ${C.colorBorder}` }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>YOU RECEIVE:</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.95rem', color: C.color }}>₦49,100,000</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ marginTop: '2rem', padding: '2rem 2.5rem', background: `linear-gradient(135deg, #7a5520, ${C.color})`, borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.25rem' }}>
        <div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', margin: '0 0 0.3rem' }}>Ready to sell with confidence?</p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem', color: '#fff', margin: '0 0 0.5rem', letterSpacing: '-0.02em' }}>List Your Property Now</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
            {['Seller\'s Guide to Verification Tiers', 'How to Take Professional Property Photos', 'Pricing Your Property Competitively', 'FAQ for Sellers'].map(r => (
              <p key={r} style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', margin: 0 }}>→ {r}</p>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <Link href="/listings/sale/new" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '7px', padding: '0.85rem 1.75rem', borderRadius: '9999px', border: '1px solid #fff', background: '#fff', color: '#7a5520', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
            List Your Property Now <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '7px', padding: '0.7rem 1.5rem', borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.35)', background: 'transparent', color: 'white', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none' }}>
            Speak with a Listing Expert
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .step-inner { grid-template-columns: 1fr !important; }
          .step-inner > div:first-child { min-height: 180px !important; border-right: none !important; border-bottom: 1px solid var(--border-subtle); }
          .fees-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}