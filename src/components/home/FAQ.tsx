'use client';

import { useState } from 'react';
import { Plus, Minus, ShieldCheck, Wallet, Sparkles, Briefcase, Scale, Lock, ChevronLeft, ChevronRight } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
  icon: typeof ShieldCheck;
  color: string;
  colorBg: string;
}

const FAQS: FAQItem[] = [
  {
    icon: ShieldCheck,
    color: '#1a6b3c',
    colorBg: 'rgba(26,107,60,0.08)',
    q: 'What is the 6-layer verification?',
    a: 'AI forgery detection + lawyer state registry search + dual federal search + family land consent + surveyor physical inspection + community leader engagement. All layers are mandatory for escrow release.',
  },
  {
    icon: Wallet,
    color: '#b8832a',
    colorBg: 'rgba(232,168,76,0.10)',
    q: 'How does escrow work?',
    a: 'Your payment is held by Vetandpay (licensed) until the property is verified and title is transferred (for sales) or until check-out inspection confirms no damage (for rentals).',
  },
  {
    icon: Sparkles,
    color: '#22883f',
    colorBg: 'rgba(34,136,63,0.08)',
    q: 'Is Omonile App free to use?',
    a: 'Browsing listings is free. Verification services, professional subscriptions, and transaction fees apply. See our pricing page for details.',
  },
  {
    icon: Briefcase,
    color: '#b8832a',
    colorBg: 'rgba(232,168,76,0.10)',
    q: 'How do I become a facility manager?',
    a: 'Apply through our professional portal. You\'ll need background verification, training certification, and insurance. We provide the training.',
  },
  {
    icon: Scale,
    color: '#1a6b3c',
    colorBg: 'rgba(26,107,60,0.08)',
    q: 'What happens if there\'s a dispute?',
    a: 'We offer in-app mediation first. If unresolved, we refer to our ADR partners (MARC, Lagos Multi-Door Courthouse). Resolution within 14 days guaranteed.',
  },
  {
    icon: Lock,
    color: '#22883f',
    colorBg: 'rgba(34,136,63,0.08)',
    q: 'Is my data secure?',
    a: 'Yes. We use bank-level encryption (AES-256), comply with NDPC regulations, and store all verification records on blockchain for immutability.',
  },
];

const PER_PAGE = 3;

function FAQCard({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);
  const Icon = item.icon;

  return (
    <div style={{
      borderRadius: '16px',
      border: `1.5px solid ${open ? item.color + '35' : 'var(--border-subtle)'}`,
      background: open
        ? `linear-gradient(135deg, ${item.colorBg} 0%, var(--bg-surface) 100%)`
        : 'var(--bg-surface)',
      overflow: 'hidden',
      transition: 'all 250ms ease',
      boxShadow: open ? `0 4px 24px ${item.color}10` : 'none',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', display: 'flex', alignItems: 'flex-start',
          gap: '0.85rem', padding: '1.15rem 1.25rem',
          background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
        }}
      >
        <div style={{
          width: '34px', height: '34px', borderRadius: '9px',
          background: open ? item.colorBg : 'var(--bg-surface-2)',
          border: `1px solid ${open ? item.color + '30' : 'var(--border-subtle)'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, transition: 'all 250ms ease',
        }}>
          <Icon size={16} color={open ? item.color : 'var(--text-muted)'} strokeWidth={1.8} />
        </div>

        <span style={{
          flex: 1,
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(0.85rem, 1.3vw, 0.95rem)',
          color: open ? item.color : 'var(--text-primary)',
          lineHeight: 1.3, letterSpacing: '-0.01em',
          transition: 'color 250ms ease', paddingTop: '0.1rem',
        }}>
          {item.q}
        </span>

        <div style={{
          width: '26px', height: '26px', borderRadius: '50%',
          background: open ? item.color : 'var(--bg-surface-2)',
          border: `1px solid ${open ? item.color : 'var(--border-default)'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, transition: 'all 250ms ease', marginTop: '0.1rem',
        }}>
          {open
            ? <Minus size={12} color="white" strokeWidth={2.5} />
            : <Plus size={12} color="var(--text-muted)" strokeWidth={2.5} />
          }
        </div>
      </button>

      {open && (
        <div style={{ padding: '0 1.25rem 1.25rem 3.6rem', animation: 'fadeUp 0.2s ease both' }}>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '0.875rem',
            color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0,
          }}>
            {item.a}
          </p>
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(FAQS.length / PER_PAGE);
  const canPrev = page > 0;
  const canNext = page < totalPages - 1;
  const visible = FAQS.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section style={{ padding: 'clamp(3rem, 6vw, 5.5rem) 0', background: 'var(--bg-base)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(26,107,60,0.04) 0%, transparent 70%)' }} />

      <div style={{ width: '100%', maxWidth: '1280px', marginInline: 'auto', padding: '0 clamp(1rem, 4vw, 3rem)', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
          <div style={{ maxWidth: '520px' }}>
            <p style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1a6b3c', marginBottom: '0.4rem' }}>
              <span style={{ display: 'inline-block', width: '18px', height: '2px', background: '#e8a84c', borderRadius: '2px' }} />
              Got questions?
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.4rem, 2.8vw, 2rem)', color: 'var(--text-primary)', letterSpacing: '-0.025em', margin: '0 0 0.5rem', lineHeight: 1.15 }}>
              Frequently Asked Questions
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
              Find answers to common questions about Omonile&apos;s services, property listings, and the real estate process. We&apos;re here to help every step of the way.
            </p>
          </div>

          {/* Nav arrows + dots */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingTop: '0.25rem' }}>
            {/* Dots */}
            <div style={{ display: 'flex', gap: '5px', marginRight: '0.5rem' }}>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  aria-label={`Page ${i + 1}`}
                  style={{
                    width: i === page ? '22px' : '7px',
                    height: '7px', borderRadius: '9999px',
                    border: 'none', padding: 0,
                    background: i === page ? '#1a6b3c' : 'var(--border-default)',
                    cursor: 'pointer', transition: 'all 280ms ease',
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => canPrev && setPage(p => p - 1)}
              disabled={!canPrev}
              aria-label="Previous"
              style={{
                width: '40px', height: '40px', borderRadius: '50%',
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
              <ChevronLeft size={17} strokeWidth={2} />
            </button>

            <button
              onClick={() => canNext && setPage(p => p + 1)}
              disabled={!canNext}
              aria-label="Next"
              style={{
                width: '40px', height: '40px', borderRadius: '50%',
                border: 'none',
                background: canNext ? '#1a6b3c' : 'var(--bg-surface-2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: canNext ? 'pointer' : 'not-allowed',
                color: canNext ? 'white' : 'var(--text-muted)',
                boxShadow: canNext ? '0 4px 14px rgba(26,107,60,0.30)' : 'none',
                transition: 'all 150ms ease',
              }}
              onMouseEnter={e => { if (canNext) (e.currentTarget as HTMLButtonElement).style.background = '#22883f'; }}
              onMouseLeave={e => { if (canNext) (e.currentTarget as HTMLButtonElement).style.background = '#1a6b3c'; }}
            >
              <ChevronRight size={17} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* 3-col FAQ grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            animation: 'fadeUp 0.3s ease both',
          }}
          key={page}
          className="faq-grid"
        >
          {visible.map((item, i) => (
            <FAQCard key={`${page}-${i}`} item={item} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .faq-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .faq-grid { grid-template-columns: 1fr !important; }
        }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </section>
  );
}