'use client';

import { useState } from 'react';
import { Home, Building2, BedDouble, Briefcase } from 'lucide-react';
import { ForBuyersSection }       from './ForBuyersSection';
import { ForSellersSection }      from './ForSellersSection';
import { ForRentersSection }      from './ForRentersSection';
import { ForProfessionalsSection} from './ForProfessionalsSection';

const TABS = [
  { id: 'buyers',        label: 'For Buyers',       Icon: Home      },
  { id: 'sellers',       label: 'For Sellers',       Icon: Building2 },
  { id: 'renters',       label: 'For Renters',       Icon: BedDouble },
  { id: 'professionals', label: 'For Professionals', Icon: Briefcase },
];

export function HowItWorksPage() {
  const [active, setActive] = useState('buyers');

  return (
    <main style={{ background: 'var(--bg-base)', minHeight: '100vh', paddingTop: '68px' }}>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #0d3d22 0%, #1a6b3c 100%)',
        padding: 'clamp(3rem,6vw,5.5rem) clamp(1rem,5vw,3rem)',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position:'absolute', top:'-90px', right:'-90px', width:'320px', height:'320px', borderRadius:'50%', border:'1px solid rgba(255,255,255,0.06)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:'-60px', left:'-50px', width:'240px', height:'240px', borderRadius:'50%', border:'1px solid rgba(255,255,255,0.05)', pointerEvents:'none' }} />
        <div style={{ position:'relative', zIndex:1 }}>
          <span style={{ display:'inline-block', padding:'0.3rem 1rem', borderRadius:'9999px', background:'rgba(232,168,76,0.18)', border:'1px solid rgba(232,168,76,0.35)', fontFamily:'var(--font-body)', fontSize:'0.68rem', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'#e8a84c', marginBottom:'1rem' }}>
            Step-by-step guide
          </span>
          <h1 style={{ fontFamily:'var(--font-display)', fontWeight:900, fontSize:'clamp(1.8rem,4.5vw,3.2rem)', color:'#ffffff', letterSpacing:'-0.03em', lineHeight:1.1, margin:'0 0 1rem' }}>
            How Omonile App Works
          </h1>
          <p style={{ fontFamily:'var(--font-body)', fontSize:'clamp(0.9rem,1.6vw,1.05rem)', color:'rgba(255,255,255,0.65)', maxWidth:'520px', margin:'0 auto', lineHeight:1.75 }}>
            Whether you&apos;re buying, selling, renting, or joining as a professional — every step is clear, safe, and transparent.
          </p>
        </div>
      </div>

      {/* Sticky tab nav */}
      <div style={{
        background:'var(--bg-surface)',
        borderBottom:'1px solid var(--border-subtle)',
        position:'sticky', top:'68px', zIndex:50,
        boxShadow:'0 2px 8px rgba(15,28,20,0.05)',
      }}>
        <div style={{ width:'100%', maxWidth:'1100px', marginInline:'auto', padding:'0 clamp(1rem,5vw,3rem)', display:'flex', overflowX:'auto' }}>
          {TABS.map(tab => {
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                style={{
                  display:'flex', alignItems:'center', gap:'7px',
                  padding:'1rem 1.35rem',
                  border:'none', borderBottom:`2.5px solid ${isActive ? '#1a6b3c' : 'transparent'}`,
                  background:'transparent',
                  fontFamily:'var(--font-body)', fontWeight: isActive ? 700 : 500, fontSize:'0.875rem',
                  color: isActive ? '#1a6b3c' : 'var(--text-muted)',
                  cursor:'pointer', transition:'all 200ms ease', whiteSpace:'nowrap',
                }}
              >
                <tab.Icon size={16} strokeWidth={isActive ? 2.2 : 1.8} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Section */}
      <div style={{ width:'100%', maxWidth:'1100px', marginInline:'auto', padding:'clamp(2.5rem,5vw,4rem) clamp(1rem,5vw,3rem)' }}>
        {active === 'buyers'        && <ForBuyersSection />}
        {active === 'sellers'       && <ForSellersSection />}
        {active === 'renters'       && <ForRentersSection />}
        {active === 'professionals' && <ForProfessionalsSection />}
      </div>
    </main>
  );
}