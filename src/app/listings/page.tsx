
import { FilterSidebar } from '@/components/listings/FilterSidebar';
import { ListingCard, type Listing } from '@/components/listings/ListingCard';
import { ChevronLeft, ChevronRight, Grid3X3, List } from 'lucide-react';
import Link from 'next/link';

const LISTINGS: Listing[] = [
  { id: '1', title: '3-Bedroom Apartment', price: '₦120,000,000', address: '32, Admiralty Way, Lekki Phase 1, Lagos', location: 'Lagos, Nigeria', beds: 3, baths: 5, sqm: 450, type: 'sale', verified: true,  image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80' },
  { id: '2', title: '3-Bedroom Apartment', price: '₦120,000,000', address: 'Lagos, Nigeria',                           location: 'Lagos, Nigeria', beds: 3, baths: 5, sqm: 450, type: 'sale', verified: true,  image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80' },
  { id: '3', title: '3-Bedroom Apartment', price: '₦120,000,000', address: 'Lagos, Nigeria',                           location: 'Lagos, Nigeria', beds: 3, baths: 5, sqm: 450, type: 'sale', verified: true,  image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80' },
  { id: '4', title: '3-Bedroom Apartment', price: '₦120,000,000', address: 'Lagos, Nigeria',                           location: 'Lagos, Nigeria', beds: 3, baths: 5, sqm: 450, type: 'sale', verified: true,  image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80' },
  { id: '5', title: '3-Bedroom Apartment', price: '₦120,000,000', address: 'Lagos, Nigeria',                           location: 'Lagos, Nigeria', beds: 3, baths: 5, sqm: 450, type: 'sale', verified: false, image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80' },
  { id: '6', title: '3-Bedroom Apartment', price: '₦120,000,000', address: 'Lagos, Nigeria',                           location: 'Lagos, Nigeria', beds: 3, baths: 5, sqm: 450, type: 'sale', verified: true,  image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80' },
];

export default function ListingsPage() {
  return (
    <>
      
      <main style={{ background: 'var(--bg-base)', minHeight: '100vh', paddingTop: '68px' }}>
        <div style={{ width: '100%', maxWidth: '1280px', marginInline: 'auto', padding: '2rem clamp(1rem, 4vw, 3rem) 4rem' }}>

          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.75rem' }}>
            <Link href="/" style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>›</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: '#1a6b3c', fontWeight: 600 }}>Listings</span>
          </div>

          {/* Page heading */}
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: 'var(--text-primary)', letterSpacing: '-0.025em', margin: '0 0 0.35rem' }}>
            Find Your Perfect Property
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-muted)', margin: '0 0 1.75rem' }}>
            Showing 234 properties
          </p>

          {/* Layout: sidebar + main */}
          <div className="listings-layout" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
            <FilterSidebar />

            {/* Right side */}
            <div style={{ flex: 1, minWidth: 0 }}>
              {/* Sort + view toggle */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Sort by:</span>
                  <select style={{
                    padding: '0.5rem 0.85rem', borderRadius: '9px',
                    border: '1.5px solid var(--border-default)',
                    background: 'var(--bg-surface)', color: 'var(--text-primary)',
                    fontFamily: 'var(--font-body)', fontSize: '0.875rem', outline: 'none', cursor: 'pointer',
                  }}>
                    <option>Newest First</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Most Verified</option>
                  </select>
                </div>
                {/* Grid/List toggle */}
                <div style={{ display: 'flex', gap: '4px' }}>
                  {[Grid3X3, List].map((Icon, i) => (
                    <button key={i} style={{
                      width: '36px', height: '36px', borderRadius: '9999px',
                      border: '1px solid var(--border-default)',
                      background: i === 0 ? '#1a6b3c' : 'var(--bg-surface)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      cursor: 'pointer', color: i === 0 ? 'white' : 'var(--text-muted)',
                      transition: 'all 150ms ease',
                    }}>
                      <Icon size={15} strokeWidth={2} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Cards grid */}
              <div className="listings-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.1rem', marginBottom: '2rem' }}>
                {LISTINGS.map(l => <ListingCard key={l.id} listing={l} />)}
              </div>

              {/* Pagination */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                <button style={{ width: '34px', height: '34px', borderRadius: '8px', border: '1.5px solid var(--border-default)', background: 'var(--bg-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-muted)' }}>
                  <ChevronLeft size={15} strokeWidth={2} />
                </button>
                {[1, 2, 3, '...', 39].map((p, i) => (
                  <button key={i} style={{
                    width: '34px', height: '34px', borderRadius: '9999px',
                    border: p === 1 ? '1px solid #1a6b3c' : '1px solid var(--border-default)',
                    background: p === 1 ? '#1a6b3c' : 'var(--bg-surface)',
                    color: p === 1 ? 'white' : 'var(--text-secondary)',
                    fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: p === 1 ? 700 : 400,
                    cursor: 'pointer', transition: 'all 150ms ease',
                  }}>
                    {p}
                  </button>
                ))}
                <button style={{ width: '34px', height: '34px', borderRadius: '8px', border: '1.5px solid var(--border-default)', background: 'var(--bg-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-muted)' }}>
                  <ChevronRight size={15} strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
    <style>{`
        @media (max-width: 768px) {
          .listings-layout { flex-direction: column !important; }
          .listings-cards  { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .listings-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}