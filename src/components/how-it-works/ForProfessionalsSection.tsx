'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Briefcase, 
  CheckCircle2, 
  Lightbulb, 
  Info, 
  Star, 
  UserCheck, 
  CreditCard} from 'lucide-react';

const B = { 
  brand: '#1a6b3c', 
  brandBg: 'rgba(26,107,60,0.08)', 
  brandBorder: 'rgba(26,107,60,0.22)',
  accent: '#e8a84c'
};

/* ── Updated Steps Data with Unsplash Images ── */
const STEPS_CONFIG = [
  { 
    number: 1,
    title: 'Choose Your Professional Role', 
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80',
    imageAlt: 'Professional selecting role',
    desc: 'Select whether you\'re applying as a Lawyer, Surveyor, Facility Manager, or Community Leader.',
    bullets: [
      'Lawyers: Must be licensed by the NBA',
      'Surveyors: Must be registered with SURCON',
      'Facility Managers: Training provided by Omonile',
      'Community Leaders: Verifiable standing',
    ],
    tip: { icon: 'pro', text: 'Each role has specific earning potentials. Surveyors and Lawyers typically handle the high-tier verification requests.' }
  },
  { 
    number: 2,
    title: 'Submit Your Application', 
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80',
    imageAlt: 'Submitting online application',
    desc: 'Complete the online application form (15–20 min). Upload your credentials and professional license.',
    bullets: [
      'Upload: Professional license, NIN, Bank details',
      'References required for Lawyers/Surveyors',
      'Processing time: 3–5 business days',
    ],
  },
  { 
    number: 3,
    title: 'Complete Vetting & Verification', 
    image: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?w=600&q=80',
    imageAlt: 'Identity verification process',
    desc: 'Our team reviews your application and conducts a background check via official databases.',
    bullets: [
      'Background check within 3 working days',
      'Virtual interview for specific tiers',
      'Identity verified against NIN/BVN database',
    ],
  },
  { 
    number: 4,
    title: 'Set Up Your Professional Profile', 
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    imageAlt: 'Editing professional profile dashboard',
    desc: 'Build your profile with your photo, bio, and coverage areas to attract more job requests.',
    bullets: [
      'Set your operating LGAs and coverage area',
      'List specializations and years of experience',
      'Higher completeness = more job assignments',
    ],
  },
  { 
    number: 5,
    title: 'Choose Your Subscription Plan', 
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&q=80',
    imageAlt: 'Subscription plan selection',
    desc: 'Select a plan that matches your workload. Higher plans give access to priority placement.',
    bullets: [
      'Basic: ₦0 — up to 5 jobs/month',
      'Professional: ₦10k/mo — 50 jobs + Badge',
      'Enterprise: ₦100k/yr — Unlimited jobs',
    ],
    callout: {
      title: 'SUBSCRIPTION PERKS:',
      rows: [
        { label: 'Verified Badge', desc: 'Increases trust by 40%' },
        { label: 'Priority', desc: 'Appear first in local searches' },
      ]
    }
  },
  { 
    number: 6,
    title: 'Receive & Accept Job Requests', 
    image: 'https://images.unsplash.com/photo-1512428559087-560ad5e8425d?w=600&q=80',
    imageAlt: 'Notification on smartphone',
    desc: 'Receive instant notifications when a property in your area needs your specific service.',
    bullets: [
      'Accept within 1 hour for high ratings',
      'View location, type, and pay before accepting',
      'Decline without penalty 3x per month',
    ],
  },
  { 
    number: 7,
    title: 'Complete the Job & Submit Report', 
    image: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?w=600&q=80',
    imageAlt: 'Field inspection and reporting',
    desc: 'Carry out your professional duties and submit your digital report via the app.',
    bullets: [
      'Lawyers: 5 working days for title search',
      'Surveyors: 2 working days after inspection',
      'Include GPS data, photos & digital signature',
    ],
    timeline: [
      { label: 'JOB ACCEPTED', detail: 'Day 1', done: true },
      { label: 'FIELD/REGISTRY VISIT', detail: 'In Progress', done: true },
      { label: 'DIGITAL REPORT UPLOAD', detail: 'Awaiting', done: false },
      { label: 'QUALITY REVIEW', detail: 'Pending', done: false },
    ]
  },
  { 
    number: 8,
    title: 'Get Paid & Build Reputation', 
    image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=600&q=80',
    imageAlt: 'Successful payment notification',
    desc: 'Payment is released within 48 hours of approval. Ratings build your visibility.',
    bullets: [
      'Direct bank transfer — ₦5k min withdrawal',
      'Ratings boost your profile visibility',
      'Earn Elite Badge at 4.8+ rating',
    ],
  },
];

export function ForProfessionalsSection() {
  return (
    <div>
      {/* ── Header ── */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '0.3rem 0.85rem', borderRadius: '9999px', background: B.brandBg, border: `1px solid ${B.brandBorder}`, marginBottom: '0.85rem' }}>
          <Briefcase size={13} color={B.brand} strokeWidth={2.2} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: B.brand }}>Professional Network</span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.5rem,3vw,2.1rem)', color: 'var(--text-primary)', letterSpacing: '-0.025em', margin: '0 0 0.6rem', lineHeight: 1.15 }}>
          Join, verify, and earn.<br />Grow your practice with Omonile.
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-muted)', maxWidth: '540px', lineHeight: 1.7, margin: 0 }}>
          A complete professional ecosystem for Nigerian property experts to scale their services safely.
        </p>
      </div>

      {/* ── Trust Banner ── */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '1rem 1.25rem', background: B.brandBg, border: `1px solid ${B.brandBorder}`, borderRadius: '12px', marginBottom: '2.5rem' }}>
        <UserCheck size={18} color={B.brand} strokeWidth={2} style={{ flexShrink: 0, marginTop: '1px' }} />
        <div>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.82rem', color: B.brand, margin: '0 0 0.2rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Verified Professional Status</p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.55 }}>All professionals undergo strict vetting. Once approved, you gain access to high-value escrow-protected jobs.</p>
        </div>
      </div>

      {/* ── Steps Rendering ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {STEPS_CONFIG.map((step) => (
          <div key={step.number}>
            <div style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-sm)',
            }}>
              {/* Step Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-surface-2)' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: B.brandBg, border: `1.5px solid ${B.brandBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.82rem', color: B.brand }}>{step.number}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-primary)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {step.title}
                </h3>
              </div>

              {/* Main Content */}
              <div className="step-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
                {/* Left: Professional Photo */}
                <div style={{ position: 'relative', minHeight: '220px', background: 'var(--bg-surface-2)', borderRight: '1px solid var(--border-subtle)' }}>
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    sizes="(max-width:768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(26,107,60,0.2) 0%, transparent 60%)' }} />
                </div>

                {/* Right: Requirements/Action Bullets */}
                <div style={{ padding: '1.25rem 1.5rem' }}>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.5 }}>
                    {step.desc}
                  </p>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {step.bullets.map((b, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <CheckCircle2 size={14} color={B.brand} strokeWidth={2} style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pro Tip for Professionals */}
              {step.tip && (
                <div style={{ display: 'flex', gap: '9px', padding: '0.85rem 1.25rem', borderTop: '1px solid var(--border-subtle)', background: 'rgba(26,107,60,0.04)' }}>
                  <Lightbulb size={15} color={B.brand} strokeWidth={2} style={{ flexShrink: 0, marginTop: '1px' }} />
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.55 }}>
                    <span style={{ fontWeight: 700, color: B.brand }}>PROFESSIONAL TIP: </span>
                    {step.tip.text}
                  </p>
                </div>
              )}

              {/* Callout/Timeline components (Step 5/7) */}
              {step.callout && (
                 <div style={{ borderTop: '1px solid var(--border-subtle)', padding: '1rem 1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '0.75rem' }}>
                    <Info size={13} color={B.brand} strokeWidth={2} />
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: B.brand }}>{step.callout.title}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {step.callout.rows.map((row, i) => (
                      <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'baseline' }}>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 700, color: B.brand, flexShrink: 0, minWidth: '130px' }}>{row.label}</span>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>— {row.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {step.timeline && (
                <div style={{ borderTop: '1px solid var(--border-subtle)', padding: '1rem 1.25rem' }}>
                   {step.timeline.map((t, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: t.done ? B.brand : '#ddd' }} />
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', flex: 1, color: t.done ? 'var(--text-primary)' : 'var(--text-muted)' }}>{t.label}</span>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: B.brand }}>{t.detail}</span>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ── Payout/Fees Summary ── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.5rem', marginTop: '3rem' }}>
        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '16px', padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
            <CreditCard size={18} color={B.brand} />
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', margin: 0 }}>Platform Fee Structure</h4>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { role: 'Lawyers', fee: '15% per verification' },
              { role: 'Surveyors', fee: '15% per inspection' },
              { role: 'Facility Managers', fee: '10% per booking' },
              { role: 'Community Leaders', fee: '10% per case' },
            ].map((f, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{f.role}</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: B.brand }}>{f.fee}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '16px', padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
            <Star size={18} color={B.accent} />
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', margin: 0 }}>Reputation Benefits</h4>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Professionals with a rating of <strong>4.8+</strong> are automatically upgraded to <strong>Elite Status</strong>, appearing first in user searches and receiving priority job notifications.
          </p>
        </div>
      </div>

      {/* ── CTA ── */}
      <div style={{ marginTop: '3rem', padding: '2.5rem', background: `linear-gradient(135deg,#0d3d22,${B.brand})`, borderRadius: '16px', textAlign: 'center' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem' }}>Ready to grow your professional practice?</h3>
        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem' }}>Join Nigeria&apos;s most trusted property verification network.</p>
        <Link href="/professionals/apply" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '1rem 2rem', borderRadius: '9999px', background: B.accent, color: '#0d3d22', fontWeight: 700, textDecoration: 'none' }}>
          Start Application <ArrowRight size={18} />
        </Link>
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