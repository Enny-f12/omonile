'use client';

import { useState } from 'react';
import { RotateCcw, SlidersHorizontal } from 'lucide-react';

const LISTING_TYPES = ['Land for sale', 'Property for Sale', 'Short-Let', 'Yearly Rental'];
const VERIFICATION_OPTIONS = ['All Listings', 'AI-Scanned', 'Lawyer Verified', 'Premium Verified', 'Facility Manager Verified'];
const AMENITIES = ['Water', 'Electricity (prepaid)', '24/7 Security', 'Parking', 'Wifi', 'AC', 'Furnished', 'Kitchen', 'Washing Machine'];
const LGAS = ['Ikeja', 'Lekki', 'Victoria Island', 'Ikoyi', 'Ajah', 'Surulere', 'Yaba', 'Ibeju-Lekki', 'Epe'];
const LISTING_DATES = ['Any time', 'Last 24 hours', 'Last 7 days', 'Last 30 days'];

export function FilterSidebar() {
  const [types, setTypes]       = useState<string[]>(['Property for Sale']);
  const [lga, setLga]           = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [verification, setVerification] = useState('All Listings');
  const [amenities, setAmenities] = useState<string[]>(['Electricity (prepaid)']);
  const [minSize, setMinSize]   = useState('100');
  const [maxSize, setMaxSize]   = useState('10000');
  const [listingDate, setListingDate] = useState('Any time');

  const toggleType = (t: string) =>
    setTypes(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]);
  const toggleAmenity = (a: string) =>
    setAmenities(prev => prev.includes(a) ? prev.filter(x => x !== a) : [...prev, a]);

  const reset = () => {
    setTypes([]); setLga(''); setMinPrice(''); setMaxPrice('');
    setVerification('All Listings'); setAmenities([]);
    setMinSize('100'); setMaxSize('10000'); setListingDate('Any time');
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700,
    letterSpacing: '0.08em', textTransform: 'uppercase',
    color: 'var(--text-muted)', marginBottom: '0.65rem', display: 'block',
  };
  const checkRow: React.CSSProperties = {
    display: 'flex', alignItems: 'center', gap: '0.65rem',
    padding: '0.3rem 0', cursor: 'pointer',
    fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-secondary)',
  };
  const divider: React.CSSProperties = {
    height: '1px', background: 'var(--border-subtle)', margin: '1.1rem 0',
  };

  return (
    <aside className="filter-sidebar" style={{
      width: '220px', flexShrink: 0,
      background: 'var(--bg-surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: '16px',
      padding: '1.25rem',
      height: 'fit-content',
      position: 'sticky', top: '84px',
      boxShadow: 'var(--shadow-sm)',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <SlidersHorizontal size={15} color="#1a6b3c" strokeWidth={2} />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>Filters</span>
        </div>
        <button onClick={reset} style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 700, color: '#1a6b3c' }}>
          <RotateCcw size={11} strokeWidth={2.5} /> RESET ALL
        </button>
      </div>

      {/* Listing Types */}
      <span style={labelStyle}>Listing Types</span>
      {LISTING_TYPES.map(t => (
        <label key={t} style={checkRow}>
          <input type="checkbox" checked={types.includes(t)} onChange={() => toggleType(t)}
            style={{ accentColor: '#1a6b3c', width: '15px', height: '15px', flexShrink: 0 }} />
          {t}
        </label>
      ))}

      <div style={divider} />

      {/* Location */}
      <span style={labelStyle}>Location</span>
      <select
        value={lga}
        onChange={e => setLga(e.target.value)}
        style={{
          width: '100%', padding: '0.6rem 0.85rem', borderRadius: '10px',
          border: '1.5px solid var(--border-default)',
          background: 'var(--bg-surface)', color: lga ? 'var(--text-primary)' : 'var(--text-muted)',
          fontFamily: 'var(--font-body)', fontSize: '0.85rem', outline: 'none', cursor: 'pointer',
        }}
      >
        <option value="">Select LGA</option>
        {LGAS.map(l => <option key={l} value={l}>{l}</option>)}
      </select>

      <div style={divider} />

      {/* Price Range */}
      <span style={labelStyle}>Price Range (NGN)</span>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        {[
          { val: minPrice, set: setMinPrice, ph: 'Min' },
          { val: maxPrice, set: setMaxPrice, ph: 'Max' },
        ].map(({ val, set, ph }) => (
          <input key={ph} type="number" value={val} onChange={e => set(e.target.value)} placeholder={ph}
            style={{
              flex: 1, padding: '0.55rem 0.65rem', borderRadius: '8px',
              border: '1.5px solid var(--border-default)',
              background: 'var(--bg-surface)', color: 'var(--text-primary)',
              fontFamily: 'var(--font-body)', fontSize: '0.8rem', outline: 'none', minWidth: 0,
            }}
            onFocus={e => (e.currentTarget.style.borderColor = '#1a6b3c')}
            onBlur={e => (e.currentTarget.style.borderColor = 'var(--border-default)')}
          />
        ))}
      </div>
      {/* Gold range bar */}
      <div style={{ height: '3px', background: 'var(--border-subtle)', borderRadius: '2px', margin: '0.75rem 0', position: 'relative' }}>
        <div style={{ position: 'absolute', left: '10%', right: '20%', top: 0, bottom: 0, background: '#e8a84c', borderRadius: '2px' }} />
      </div>

      <div style={divider} />

      {/* Verification */}
      <span style={labelStyle}>Verification</span>
      {VERIFICATION_OPTIONS.map(v => (
        <label key={v} style={{ ...checkRow, gap: '0.65rem' }}>
          <input type="radio" name="verification" checked={verification === v} onChange={() => setVerification(v)}
            style={{ accentColor: '#1a6b3c', width: '15px', height: '15px', flexShrink: 0 }} />
          {v}
        </label>
      ))}

      <div style={divider} />

      {/* Amenities */}
      <span style={labelStyle}>Amenities</span>
      {AMENITIES.map(a => (
        <label key={a} style={checkRow}>
          <input type="checkbox" checked={amenities.includes(a)} onChange={() => toggleAmenity(a)}
            style={{ accentColor: '#1a6b3c', width: '15px', height: '15px', flexShrink: 0 }} />
          {a}
        </label>
      ))}

      <div style={divider} />

      {/* Property Size */}
      <span style={labelStyle}>Property Size</span>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: '#e8a84c', fontWeight: 600 }}>Min({minSize})</span>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: '#e8a84c', fontWeight: 600 }}>Max({maxSize})</span>
      </div>
      <div style={{ height: '3px', background: 'var(--border-subtle)', borderRadius: '2px', position: 'relative' }}>
        <div style={{ position: 'absolute', left: '0%', right: '0%', top: 0, bottom: 0, background: '#e8a84c', borderRadius: '2px' }} />
      </div>

      <div style={divider} />

      {/* Listing Date */}
      <span style={labelStyle}>Listing Date</span>
      {LISTING_DATES.map(d => (
        <label key={d} style={{ ...checkRow, gap: '0.65rem' }}>
          <input type="radio" name="listingDate" checked={listingDate === d} onChange={() => setListingDate(d)}
            style={{ accentColor: '#1a6b3c', width: '15px', height: '15px', flexShrink: 0 }} />
          {d}
        </label>
      ))}

      <div style={divider} />

      {/* Apply */}
      <button style={{
        width: '100%', padding: '0.8rem', borderRadius: '9999px',
        background: '#1a6b3c', border: '1px solid #1a6b3c', color: 'white',
        fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.875rem',
        cursor: 'pointer', transition: 'background 150ms ease',
      }}
        onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.background = '#22883f'}
        onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.background = '#1a6b3c'}
      >
        Apply Filters
      </button>
    <style>{`
        @media (max-width: 768px) {
          .filter-sidebar {
            width: 100% !important;
            position: static !important;
          }
        }
      `}</style>
    </aside>
  );
}