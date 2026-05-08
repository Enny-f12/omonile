'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Added Stats Icons here
import { Scale, Ruler, Wrench, ArrowRight, ChevronDown, ChevronUp, Map, Settings, Star } from 'lucide-react';

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const steps = 50;
        const inc = target / steps;
        let cur = 0;
        const t = setInterval(() => {
          cur = Math.min(cur + inc, target);
          setCount(Math.floor(cur));
          if (cur >= target) clearInterval(t);
        }, 1800 / steps);
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{count}+</span>;
}

// Updated STATS with Lucide Icons
const STATS = [
  { icon: Scale, value: 50, label: 'Lawyers', color: '#2563eb' },
  { icon: Map, value: 30, label: 'Surveyors', color: '#1a6b3c' },
  { icon: Settings, value: 100, label: 'Facility Managers', color: '#b8832a' },
  { icon: Star, value: 20, label: 'Community Leaders', color: '#7c3aed' },
];

const PROFESSIONALS = [
  {
    id: 'lawyer', Icon: Scale,
    title: 'For Lawyers',
    headline: "Earn from Nigeria's growing property market",
    description: "Get paid for title searches and document verification. Join Nigeria's fastest-growing property verification network.",
    perks: ['Flexible work schedule', 'Direct client connections', 'Earn per case'],
    cta: 'Apply as Lawyer',
    href: '/professionals/apply?role=lawyer',
    color: '#b8832a', colorBg: 'rgba(232,168,76,0.08)',
    colorBorder: 'rgba(232,168,76,0.25)', colorActive: '#9a6d22',
    image: 'https://i.pinimg.com/1200x/5d/37/9c/5d379c60f389adb6af6507754685d267.jpg',
    imagePos: 'center top',
  },
  {
    id: 'surveyor', Icon: Ruler,
    title: 'For Surveyors',
    headline: 'GPS-powered inspections, fair pay per job',
    description: 'Earn from physical inspections and charting. GPS-tagged reports. Fair compensation for every job.',
    perks: ['GPS-tagged digital reports', 'Earn per inspection completed', 'Nationwide job listings'],
    cta: 'Apply as Surveyor',
    href: '/professionals/apply?role=surveyor',
    color: '#1a6b3c', colorBg: 'rgba(26,107,60,0.08)',
    colorBorder: 'rgba(26,107,60,0.22)', colorActive: '#15582f',
    image: 'https://i.pinimg.com/1200x/4a/f6/46/4af64673cbdaa9ba7433b1684624d54e.jpg',
    imagePos: 'center center',
  },
  {
    id: 'facility', Icon: Wrench,
    title: 'For Facility Managers',
    headline: 'Manage properties, earn commissions',
    description: 'Inspect properties, manage check-ins, earn commissions. Full training provided by Omonile.',
    perks: ['Full onboarding & training', 'Check-in management tools', 'Commission on every booking'],
    cta: 'Apply as Facility Manager',
    href: '/professionals/apply?role=facility-manager',
    color: '#b8832a', colorBg: 'rgba(232,168,76,0.08)',
    colorBorder: 'rgba(232,168,76,0.25)', colorActive: '#9a6d22',
    image: 'https://i.pinimg.com/1200x/75/fe/af/75feaf12e2056b62ed98c0c1ff2931a2.jpg',
    imagePos: 'center top',
  },
];

export function ProfessionalNetwork() {
  const [active, setActive] = useState('lawyer');
  const prof = PROFESSIONALS.find(p => p.id === active)!;

  return (
    <section style={{ padding: 'clamp(3rem, 6vw, 5.5rem) 0', background: 'var(--bg-base)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(26,107,60,0.04) 0%, transparent 70%)' }} />

      <div style={{ width: '100%', maxWidth: '1280px', marginInline: 'auto', padding: '0 clamp(1rem, 4vw, 3rem)', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
          <p style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1a6b3c', marginBottom: '0.6rem' }}>
            <span style={{ display: 'inline-block', width: '18px', height: '2px', background: '#e8a84c', borderRadius: '2px' }} />
            Professional Network
            <span style={{ display: 'inline-block', width: '18px', height: '2px', background: '#e8a84c', borderRadius: '2px' }} />
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: 'var(--text-primary)', letterSpacing: '-0.025em', margin: '0 0 0.65rem', lineHeight: 1.15 }}>
            Join Our Professional Network
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-muted)', margin: '0 auto', maxWidth: '500px', lineHeight: 1.65 }}>
            Lawyers, surveyors, and facility managers — grow your business with Omonile App
          </p>
        </div>

        {/* Main: accordion + photo panel */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(1.5rem, 3vw, 2.5rem)', alignItems: 'start', marginBottom: '2.5rem' }} className="prof-layout">

          {/* Left: accordion */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {PROFESSIONALS.map(p => {
              const isActive = active === p.id;
              return (
                <div
                  key={p.id}
                  onClick={() => setActive(p.id)}
                  style={{
                    borderRadius: '16px',
                    border: `1.5px solid ${isActive ? p.colorBorder : 'var(--border-subtle)'}`,
                    background: isActive ? p.colorBg : 'var(--bg-surface)',
                    cursor: 'pointer',
                    transition: 'all 250ms ease',
                    overflow: 'hidden',
                    boxShadow: isActive ? `0 4px 24px ${p.color}14` : 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                      <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: isActive ? `${p.color}18` : 'var(--bg-surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background 250ms ease' }}>
                        <p.Icon size={18} color={isActive ? p.color : 'var(--text-muted)'} strokeWidth={1.8} />
                      </div>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: isActive ? p.color : 'var(--text-primary)', transition: 'color 250ms ease', letterSpacing: '-0.01em' }}>
                        {p.title}
                      </span>
                    </div>
                    {isActive
                      ? <ChevronUp size={16} color={p.color} strokeWidth={2} />
                      : <ChevronDown size={16} color="var(--text-muted)" strokeWidth={2} />
                    }
                  </div>
                  {isActive && (
                    <div style={{ padding: '0 1.25rem 1.25rem', animation: 'fadeUp 0.2s ease both' }}>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1rem' }}>
                        {p.description}
                      </p>
                      <Link
                        href={p.href}
                        onClick={e => e.stopPropagation()}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '0.6rem 1.25rem', borderRadius: '9999px', background: p.color, color: '#ffffff', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.82rem', textDecoration: 'none', transition: 'all 150ms ease', boxShadow: `0 4px 16px ${p.color}30` }}
                        onMouseEnter={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = p.colorActive; a.style.transform = 'translateY(-1px)'; }}
                        onMouseLeave={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = p.color; a.style.transform = 'none'; }}
                      >
                        {p.cta} <ArrowRight size={14} strokeWidth={2.5} />
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: photo card */}
          <div style={{ borderRadius: '20px', overflow: 'hidden', border: `1.5px solid ${prof.colorBorder}`, boxShadow: `0 12px 48px ${prof.color}20`, transition: 'border-color 300ms ease, box-shadow 300ms ease', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', height: '260px', overflow: 'hidden', flexShrink: 0 }}>
              <Image
                key={prof.id}
                src={prof.image}
                alt={prof.title}
                fill
                sizes="(max-width: 768px) 100vw, 70vw"
                style={{ objectFit: 'cover', objectPosition: prof.imagePos }}
              />
              <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.12) 40%, ${prof.color}dd 100%)` }} />
              <div style={{ position: 'absolute', top: '1rem', left: '1rem', display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '0.3rem 0.75rem', borderRadius: '9999px', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.15)' }}>
                <prof.Icon size={12} color="white" strokeWidth={2} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'white' }}>{prof.title}</span>
              </div>
              <div style={{ position: 'absolute', bottom: '1.1rem', left: '1.25rem', right: '1.25rem' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.2, margin: 0, textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                  {prof.headline}
                </h3>
              </div>
            </div>

            <div style={{ flex: 1, background: 'var(--bg-surface)', padding: '1.25rem 1.35rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                {prof.perks.map(perk => (
                  <div key={perk} style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                    <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: `${prof.color}12`, border: `1.5px solid ${prof.colorBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="9" height="9" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke={prof.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{perk}</span>
                  </div>
                ))}
              </div>
              <Link
                href={prof.href}
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '7px', padding: '0.8rem 1.5rem', borderRadius: '10px', background: prof.color, color: '#ffffff', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none', boxShadow: `0 4px 16px ${prof.color}30`, transition: 'all 200ms ease' }}
                onMouseEnter={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = prof.colorActive; a.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = prof.color; a.style.transform = 'none'; }}
              >
                {prof.cta} <ArrowRight size={15} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>

        {/* Updated Stats bar with Lucide Icons */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--border-subtle)', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }} className="prof-stats">
          {STATS.map(s => {
            const StatIcon = s.icon;
            return (
              <div key={s.label} style={{ background: 'var(--bg-surface)', padding: 'clamp(1rem, 2vw, 1.5rem)', textAlign: 'center', transition: 'background 150ms ease' }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = 'var(--bg-surface-2)'}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = 'var(--bg-surface)'}
              >
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
                   <div style={{ padding: '8px', borderRadius: '10px', background: `${s.color}10` }}>
                    <StatIcon size={24} color={s.color} strokeWidth={1.5} />
                   </div>
                </div>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', color: s.color, letterSpacing: '-0.03em', margin: '0 0 0.2rem', lineHeight: 1 }}>
                  <Counter target={s.value} />
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0, fontWeight: 500 }}>{s.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .prof-layout { grid-template-columns: 1fr !important; }
          .prof-stats  { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 420px) {
          .prof-stats { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}