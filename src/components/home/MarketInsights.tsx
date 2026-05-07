'use client';

import { TrendingUp, MapPin, Info, BarChart2 } from 'lucide-react';

const METRICS = [
  { label: 'Average Property Price', sub: 'Lagos', value: '₦85,000,000', trend: '+5%', trendLabel: 'from last quarter', up: true },
  { label: 'Year-over-Year Growth',  sub: 'Lagos avg', value: '+12.5%', trend: 'Lekki +15%', trendLabel: 'highest area', up: true },
  { label: 'Average Rental Yield',   sub: 'Lagos', value: '8.5%', trend: 'VI 10.2%', trendLabel: 'highest area', up: true },
];

const NEIGHBORHOODS = [
  { name: 'Victoria Island', land: '₦150M–₦300M', apt: '₦250M–₦500M', shortlet: '₦75k–₦200k', yoy: '+8%',  safety: 4.8, dot: '#dc2626' },
  { name: 'Ikoyi',           land: '₦200M–₦500M', apt: '₦300M–₦1B',   shortlet: '₦100k–₦300k',yoy: '+10%', safety: 4.9, dot: '#dc2626' },
  { name: 'Lekki Phase 1',   land: '₦30M–₦80M',  apt: '₦150M–₦300M', shortlet: '₦50k–₦150k', yoy: '+15%', safety: 4.6, dot: '#ea580c' },
  { name: 'Ikeja GRA',       land: '₦20M–₦50M',  apt: '₦80M–₦150M',  shortlet: '₦30k–₦80k',  yoy: '+5%',  safety: 4.5, dot: '#ea580c' },
  { name: 'Surulere',        land: '₦10M–₦25M',  apt: '₦40M–₦70M',   shortlet: '₦15k–₦40k',  yoy: '+3%',  safety: 4.2, dot: '#ca8a04' },
];

const LEGEND = [
  { color: '#dc2626', label: 'Highest price appreciation', areas: 'Lekki, VI, Ikoyi' },
  { color: '#ea580c', label: 'Moderate growth',            areas: 'Ikeja, GRA' },
  { color: '#ca8a04', label: 'Stable',                     areas: 'Surulere, Yaba' },
  { color: '#1a6b3c', label: 'Emerging areas',             areas: 'Epe, Ibeju-Lekki' },
];

function SafetyBar({ score }: { score: number }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <div style={{ width: '48px', height: '5px', borderRadius: '3px', background: 'var(--border-subtle)', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${(score / 5) * 100}%`, background: '#1a6b3c', borderRadius: '3px' }} />
      </div>
      <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, color: '#1a6b3c' }}>{score}</span>
    </div>
  );
}

export function MarketInsights() {
  return (
    <section style={{ padding: 'clamp(3rem, 6vw, 5.5rem) 0', background: 'var(--bg-base)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(26,107,60,0.04) 0%, transparent 70%)' }} />

      <div style={{ width: '100%', maxWidth: '1280px', marginInline: 'auto', padding: '0 clamp(1rem, 4vw, 3rem)', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <p style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1a6b3c', marginBottom: '0.4rem' }}>
            <span style={{ display: 'inline-block', width: '18px', height: '2px', background: '#e8a84c', borderRadius: '2px' }} />
            Market Data
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.4rem, 2.8vw, 2rem)', color: 'var(--text-primary)', letterSpacing: '-0.025em', margin: '0 0 0.4rem', lineHeight: 1.15 }}>
            Lagos Property Market Insights
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-muted)', margin: 0 }}>
            Real-time market trends based on verified transactions on Omonile App
          </p>
        </div>

        {/* Metric cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2rem' }} className="insights-metrics">
          {METRICS.map((m, i) => (
            <div key={i} style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '16px', padding: 'clamp(1.1rem, 2vw, 1.5rem)',
              boxShadow: 'var(--shadow-sm)',
              position: 'relative', overflow: 'hidden',
            }}>
              {/* Accent top strip */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: i === 0 ? '#1a6b3c' : i === 1 ? '#e8a84c' : '#22883f' }} />
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-muted)', margin: '0 0 0.15rem', fontWeight: 500 }}>{m.label}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', color: 'var(--text-muted)', margin: 0, opacity: 0.7 }}>{m.sub}</p>
                </div>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(26,107,60,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <BarChart2 size={16} color="#1a6b3c" strokeWidth={1.8} />
                </div>
              </div>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--text-primary)', letterSpacing: '-0.03em', margin: '0 0 0.5rem', lineHeight: 1 }}>
                {m.value}
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '0.22rem 0.65rem', borderRadius: '9999px', background: 'rgba(26,107,60,0.08)', border: '1px solid rgba(26,107,60,0.18)' }}>
                <TrendingUp size={12} color="#1a6b3c" strokeWidth={2.5} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 700, color: '#1a6b3c' }}>{m.trend}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>{m.trendLabel}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Table + legend layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 240px', gap: '1.25rem', alignItems: 'start' }} className="insights-table-layout">

          {/* Neighborhood table */}
          <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={15} color="#1a6b3c" strokeWidth={2} />
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)', margin: 0 }}>Neighborhood Comparison</h3>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'var(--bg-surface-2)' }}>
                    {['Neighborhood', 'Land / Plot', '3-Bed Apartment', 'Short-Let / Night', 'YoY Growth', 'Safety'].map(h => (
                      <th key={h} style={{ padding: '0.7rem 1rem', textAlign: 'left', fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.05em', textTransform: 'uppercase', whiteSpace: 'nowrap', borderRight: '1px solid var(--border-subtle)' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {NEIGHBORHOODS.map((n) => (
                    <tr key={n.name} style={{ borderTop: '1px solid var(--border-subtle)', transition: 'background 150ms ease' }}
                      onMouseEnter={e => (e.currentTarget as HTMLTableRowElement).style.background = 'var(--bg-surface-2)'}
                      onMouseLeave={e => (e.currentTarget as HTMLTableRowElement).style.background = 'transparent'}
                    >
                      <td style={{ padding: '0.85rem 1rem', borderRight: '1px solid var(--border-subtle)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: n.dot, flexShrink: 0 }} />
                          <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>{n.name}</span>
                        </div>
                      </td>
                      <td style={{ padding: '0.85rem 1rem', fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap', borderRight: '1px solid var(--border-subtle)' }}>{n.land}</td>
                      <td style={{ padding: '0.85rem 1rem', fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap', borderRight: '1px solid var(--border-subtle)' }}>{n.apt}</td>
                      <td style={{ padding: '0.85rem 1rem', fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap', borderRight: '1px solid var(--border-subtle)' }}>{n.shortlet}</td>
                      <td style={{ padding: '0.85rem 1rem', borderRight: '1px solid var(--border-subtle)' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '0.2rem 0.55rem', borderRadius: '9999px', background: 'rgba(26,107,60,0.08)', border: '1px solid rgba(26,107,60,0.18)', fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 700, color: '#1a6b3c', whiteSpace: 'nowrap' }}>
                          <TrendingUp size={10} strokeWidth={2.5} />{n.yoy}
                        </span>
                      </td>
                      <td style={{ padding: '0.85rem 1rem' }}>
                        <SafetyBar score={n.safety} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Legend */}
          <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '16px', padding: '1.25rem', boxShadow: 'var(--shadow-sm)' }}>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-primary)', margin: '0 0 1rem', letterSpacing: '-0.01em' }}>Area Color Guide</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {LEGEND.map(l => (
                <div key={l.label} style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: l.color, flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)', margin: '0 0 0.1rem' }}>{l.label}</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--text-muted)', margin: 0 }}>{l.areas}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Data disclaimer */}
            <div style={{ marginTop: '1.5rem', padding: '0.85rem', borderRadius: '10px', background: 'var(--bg-surface-2)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', gap: '6px', marginBottom: '0.4rem' }}>
                <Info size={13} color="var(--text-muted)" strokeWidth={2} style={{ flexShrink: 0, marginTop: '1px' }} />
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 700, color: 'var(--text-muted)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Data Source</p>
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.55 }}>
                Based on verified transactions on Omonile App. Anonymized & aggregated. Updated monthly.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .insights-metrics { grid-template-columns: 1fr !important; }
          .insights-table-layout { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 640px) and (max-width: 900px) {
          .insights-metrics { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}