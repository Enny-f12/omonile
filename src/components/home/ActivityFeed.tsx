'use client';

import { useState, useEffect, useCallback } from 'react';
import { Bell, ShieldCheck, Home, Calendar, Users, TrendingUp, RefreshCw, Zap } from 'lucide-react';

type ActivityType = 'verification' | 'booking' | 'listing' | 'saved' | 'inspection' | 'sale';

interface Activity {
  id: string;
  type: ActivityType;
  message: string;
  location?: string;
  amount?: string;
  time: string;
  highlight?: boolean;
}

interface FeedTemplate {
  type: ActivityType;
  message: string;
  location?: string;
  amount?: string;
  highlight?: boolean;
}

const ICON_MAP: Record<ActivityType, typeof Bell> = {
  verification: ShieldCheck,
  booking:      Calendar,
  listing:      Home,
  saved:        TrendingUp,
  inspection:   Users,
  sale:         Zap,
};

// Brand palette only — green + gold, no blue
const COLOR_MAP: Record<ActivityType, { color: string; bg: string }> = {
  verification: { color: '#1a6b3c', bg: 'rgba(26,107,60,0.10)' },
  booking:      { color: '#b8832a', bg: 'rgba(232,168,76,0.12)' },
  listing:      { color: '#22883f', bg: 'rgba(34,136,63,0.10)' },
  saved:        { color: '#e8a84c', bg: 'rgba(232,168,76,0.14)' },
  inspection:   { color: '#1a6b3c', bg: 'rgba(26,107,60,0.08)' },
  sale:         { color: '#b8832a', bg: 'rgba(184,131,42,0.10)' },
};

const FEED_POOL: FeedTemplate[] = [
  { type: 'verification', message: 'Someone verified a property in',           location: 'Lekki Phase 1' },
  { type: 'booking',      message: 'A shortlet was booked in',                 location: 'Victoria Island' },
  { type: 'listing',      message: 'New property listed in',                   location: 'Ikeja' },
  { type: 'saved',        message: 'A Buyer saved ₦5,000,000 using our verification service', highlight: true },
  { type: 'inspection',   message: 'Facility Manager completed inspection in', location: 'Ajah' },
  { type: 'verification', message: 'Land title verified in',                   location: 'Ibeju-Lekki' },
  { type: 'booking',      message: 'Short-let booked for 3 nights in',        location: 'Lekki' },
  { type: 'sale',         message: 'Property sold via escrow in',              location: 'Ikoyi' },
  { type: 'listing',      message: 'New land listing added in',                location: 'Epe' },
  { type: 'saved',        message: 'A buyer avoided fraud saving ₦12,000,000', highlight: true },
  { type: 'inspection',   message: 'Property inspection completed in',         location: 'Surulere' },
  { type: 'verification', message: 'C of O verified for property in',          location: 'Magodo' },
];

const TIMES = ['Just Now', '2 min ago', '5 min ago', '8 min ago', '15 min ago', '22 min ago', '1 hour ago', '2 hours ago', '3 hours ago'];

function makeActivities(): Activity[] {
  return [...FEED_POOL]
    .sort(() => Math.random() - 0.5)
    .slice(0, 5)
    .map((a, i) => ({
      ...a,
      id: `${Date.now()}-${i}`,
      time: TIMES[i] ?? TIMES[TIMES.length - 1],
    }));
}

function formatMessage(a: Activity): string {
  return `${a.message}${a.location ? ' ' + a.location : ''}`;
}

export function ActivityFeed() {
  const [activities, setActivities] = useState<Activity[]>(() => makeActivities());
  const [refreshing, setRefreshing] = useState(false);
  const [pulse, setPulse] = useState(false);

  const refresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setActivities(makeActivities());
      setRefreshing(false);
      setPulse(true);
      setTimeout(() => setPulse(false), 600);
    }, 800);
  }, []);

  // Auto-refresh every 30s
  useEffect(() => {
    const t = setInterval(refresh, 30000);
    return () => clearInterval(t);
  }, [refresh]);

  // Trickle a new activity every 8s
  useEffect(() => {
    const t = setInterval(() => {
      const template = FEED_POOL[Math.floor(Math.random() * FEED_POOL.length)];
      const newItem: Activity = { ...template, id: `${Date.now()}`, time: 'Just Now' };
      setActivities(prev => [newItem, ...prev.slice(0, 4)]);
    }, 8000);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 0', background: 'var(--bg-surface-2)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'var(--border-subtle)' }} />

      <div style={{ width: '100%', maxWidth: '1280px', marginInline: 'auto', padding: '0 clamp(1rem, 4vw, 3rem)' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '0.22rem 0.65rem', borderRadius: '9999px', background: 'rgba(26,107,60,0.10)', border: '1px solid rgba(26,107,60,0.22)' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#1a6b3c', animation: 'pulse-dot 1.8s ease-in-out infinite' }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1a6b3c' }}>Live</span>
              </span>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', margin: 0 }}>
                Activity Feed
              </p>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.3rem, 2.5vw, 1.85rem)', color: 'var(--text-primary)', letterSpacing: '-0.025em', margin: '0 0 0.3rem', lineHeight: 1.15 }}>
              Real-Time Activity Feed
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-muted)', margin: 0 }}>
              Recent activity on Omonile App
            </p>
          </div>

          <button
            onClick={refresh}
            disabled={refreshing}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              padding: '0.7rem 1.5rem', borderRadius: '9999px',
              background: '#e8a84c', border: 'none', color: '#0f1c14',
              fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.875rem',
              cursor: refreshing ? 'not-allowed' : 'pointer',
              opacity: refreshing ? 0.7 : 1,
              boxShadow: '0 4px 16px rgba(232,168,76,0.30)',
              transition: 'all 200ms ease', flexShrink: 0,
            }}
            onMouseEnter={e => { if (!refreshing) { (e.currentTarget as HTMLButtonElement).style.background = '#d4943a'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)'; } }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#e8a84c'; (e.currentTarget as HTMLButtonElement).style.transform = 'none'; }}
          >
            <RefreshCw size={15} strokeWidth={2.5} style={{ animation: refreshing ? 'spin 0.8s linear infinite' : 'none' }} />
            {refreshing ? 'Refreshing…' : 'Refresh Feed'}
          </button>
        </div>

        {/* Grid */}
        <div
          className="feed-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0.85rem',
            opacity: pulse ? 0.6 : 1,
            transition: 'opacity 300ms ease',
          }}
        >
          {activities.map((a, i) => {
            const Icon = ICON_MAP[a.type];
            const colors = COLOR_MAP[a.type];
            const isHighlight = !!a.highlight;
            const isWide = i === 3;

            return (
              <div
                key={a.id}
                style={{
                  gridColumn: isWide ? 'span 2' : 'span 1',
                  borderRadius: '14px',
                  border: `1px solid ${isHighlight ? 'rgba(26,107,60,0.30)' : 'var(--border-subtle)'}`,
                  background: isHighlight
                    ? 'linear-gradient(135deg, #1a6b3c 0%, #0d3d22 100%)'
                    : 'var(--bg-surface)',
                  padding: 'clamp(1rem, 2vw, 1.35rem)',
                  display: 'flex', flexDirection: 'column', gap: '0.75rem',
                  boxShadow: isHighlight ? '0 8px 32px rgba(26,107,60,0.20)' : '0 2px 8px rgba(15,28,20,0.05)',
                  transition: 'transform 200ms ease, box-shadow 200ms ease',
                  animation: `fadeUp 0.4s ease ${i * 0.06}s both`,
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = isHighlight ? '0 12px 40px rgba(26,107,60,0.28)' : '0 6px 20px rgba(15,28,20,0.09)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'none'; (e.currentTarget as HTMLDivElement).style.boxShadow = isHighlight ? '0 8px 32px rgba(26,107,60,0.20)' : '0 2px 8px rgba(15,28,20,0.05)'; }}
              >
                {/* Icon + time */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: isHighlight ? 'rgba(255,255,255,0.12)' : colors.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={17} color={isHighlight ? 'rgba(255,255,255,0.9)' : colors.color} strokeWidth={1.8} />
                  </div>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, color: isHighlight ? 'rgba(255,255,255,0.6)' : colors.color }}>
                    {a.time}
                  </span>
                </div>

                {/* Message */}
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: isHighlight ? 'clamp(0.95rem, 1.8vw, 1.1rem)' : '0.9rem',
                  fontWeight: isHighlight ? 700 : 400,
                  color: isHighlight ? '#ffffff' : 'var(--text-secondary)',
                  lineHeight: 1.5, margin: 0,
                }}>
                  {formatMessage(a)}
                </p>

                {isHighlight && <div style={{ height: '1px', background: 'rgba(255,255,255,0.12)' }} />}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.8); }
        }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 768px) {
          .feed-grid { grid-template-columns: 1fr !important; }
          .feed-grid > div { grid-column: span 1 !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .feed-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}