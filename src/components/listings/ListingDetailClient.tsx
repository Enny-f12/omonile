'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Bed, Bath, Maximize2, CheckCircle2, Download, Link2, MessageCircle, Phone, Mail, Heart, AlertTriangle, Flag, ShieldCheck, Droplets, DoorOpen, Zap, Wifi, WashingMachine, Wind, Car, Lock } from 'lucide-react';
import { ReportModal } from './ReportModal';

const VERIFIED_LISTING = {
  id: '1', verified: true,
  title: '3-Bedroom Apartment',
  address: '32, Admiralty Way, Lekki Phase 1, Lagos, Nigeria',
  price: '₦250,000,000',
  serviceFee: '₦3,750,000',
  total: '₦253,750,000',
  beds: 3, baths: 3, sqm: 200, type: 'Sale',
  verifications: ['Premium verified', 'Lawyer verified', 'Surveyor Inspected', 'Blockchain Certified'],
  description: [
    'Spacious living room with natural light', '24/7 security and CCTV',
    'Modern kitchen with fitted cabinets', 'Covered parking for 2 cars',
    'Master bedroom with ensuite and walk-in closet', 'Backup generator and borehole',
  ],
  amenities: [
    { Icon: Droplets,     label: 'Water' },
    { Icon: DoorOpen,     label: 'Private Entrance' },
    { Icon: Zap,          label: 'Electricity' },
    { Icon: Wifi,         label: 'Wifi' },
    { Icon: WashingMachine, label: 'Washing Machine' },
    { Icon: Wind,         label: 'AC' },
    { Icon: Car,          label: 'Parking' },
    { Icon: Lock,         label: '24/7 Security' },
  ],
  verificationReport: [
    { layer: 'AI Forgery Detection',  detail: 'Score: 96%',              result: 'Passed' },
    { layer: 'Lawyer State Registry', detail: 'No encumbrances',         result: 'Clear' },
    { layer: 'Dual Federal Search',   detail: 'No Federal Interest',      result: 'Clear' },
    { layer: 'Family Land',           detail: 'NO Family Land',           result: 'N/A' },
    { layer: 'Surveyor Inspection',   detail: 'Coordinates Confirmed',    result: 'Verified' },
    { layer: 'Community Engagement',  detail: 'No Dispute',               result: 'Verified' },
  ],
  images: [
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=85',
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=300&q=80',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=300&q=80',
    'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=300&q=80',
  ],
  seller: { name: 'Adeyemi Properties LTD', since: 'Jan 2024', responseRate: '98%', responseTime: '<2hrs', verified: true, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80' },
  reviews: [
    { text: 'I almost lost ₦15M to a fraudulent land seller. Omonile App\'s lawyer verification saved me. The property was under government acquisition!', author: 'Adebayo O., Lekki' },
    { text: 'I almost lost ₦15M to a fraudulent land seller. Omonile App\'s lawyer verification saved me. The property was under government acquisition!', author: 'Chidi Adams' },
  ],
  rating: 5, reviewCount: 12,
};

const RESULT_COLOR: Record<string, string> = {
  Passed: '#1a6b3c', Clear: '#1a6b3c', Verified: '#1a6b3c', 'N/A': '#b8832a', Pending: '#dc2626',
};

export function ListingDetailClient({ id }: { id: string }) {
  const [showReport, setShowReport] = useState(false);
  const [liked, setLiked]           = useState(false);
  const [activeImg, setActiveImg]   = useState(0);

  const listing = VERIFIED_LISTING;
  const isVerified = listing.verified;

  return (
    <div style={{ width: '100%', maxWidth: '1280px', marginInline: 'auto', padding: '2rem clamp(1rem, 4vw, 3rem) 4rem' }}>

      {/* Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '1.25rem' }}>
        <Link href="/" style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link>
        <span style={{ color: 'var(--text-muted)' }}>›</span>
        <Link href="/listings" style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-muted)', textDecoration: 'none' }}>Listings</Link>
        <span style={{ color: 'var(--text-muted)' }}>›</span>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: '#1a6b3c', fontWeight: 600 }}>{listing.title}</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '2rem', alignItems: 'start' }} className="listing-layout">

        {/* ── LEFT COLUMN ── */}
        <div>
          {/* Main image */}
          <div style={{ position: 'relative', height: '380px', borderRadius: '16px', overflow: 'hidden', marginBottom: '0.75rem' }}>
            <Image src={listing.images[activeImg]} alt={listing.title} fill sizes="60vw" style={{ objectFit: 'cover' }} />
          </div>
          {/* Thumbnails */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.6rem', marginBottom: '1.5rem' }}>
            {listing.images.slice(1).map((img, i) => (
              <div key={i} onClick={() => setActiveImg(i + 1)} style={{
                position: 'relative', height: '95px', borderRadius: '10px', overflow: 'hidden', cursor: 'pointer',
                border: `2px solid ${activeImg === i + 1 ? '#1a6b3c' : 'transparent'}`, transition: 'border-color 150ms ease',
              }}>
                <Image src={img} alt="" fill sizes="20vw" style={{ objectFit: 'cover' }} />
              </div>
            ))}
          </div>

          {/* Title + info */}
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)', color: 'var(--text-primary)', letterSpacing: '-0.025em', margin: '0 0 0.4rem' }}>
            {listing.title}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '0.75rem' }}>
            <MapPin size={14} color="var(--text-muted)" strokeWidth={2} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-muted)' }}>{listing.address}</span>
          </div>

          {/* Verification tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '1rem' }}>
            {listing.verifications.map(v => (
              <span key={v} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '0.22rem 0.65rem', borderRadius: '9999px', background: 'rgba(26,107,60,0.08)', border: '1px solid rgba(26,107,60,0.2)', color: '#1a6b3c', fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 600 }}>
                <CheckCircle2 size={10} strokeWidth={2.5} /> {v}
              </span>
            ))}
          </div>

          {/* Price */}
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: 'var(--text-primary)', letterSpacing: '-0.03em', margin: '0 0 1rem' }}>
            {listing.price}
          </p>

          {/* Specs */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            {[
              { icon: <Bed size={16} strokeWidth={1.8} />, label: 'Bedroom', val: listing.beds },
              { icon: <Bath size={16} strokeWidth={1.8} />, label: 'Bathroom', val: listing.baths },
              { icon: <Maximize2 size={16} strokeWidth={1.8} />, label: 'Size', val: `${listing.sqm} sqm` },
              { icon: <ShieldCheck size={16} strokeWidth={1.8} />, label: 'Type', val: listing.type },
            ].map(s => (
              <div key={s.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', padding: '0.65rem 1rem', borderRadius: '10px', border: '1px solid var(--border-subtle)', background: 'var(--bg-surface)', minWidth: '80px' }}>
                <span style={{ color: 'var(--text-muted)' }}>{s.icon}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{s.label}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.88rem', color: 'var(--text-primary)' }}>{s.val}</span>
              </div>
            ))}
          </div>

          {/* Description */}
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', margin: '0 0 0.85rem' }}>Description</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem 1.5rem', marginBottom: '1.5rem' }}>
            {listing.description.map(d => (
              <div key={d} style={{ display: 'flex', alignItems: 'flex-start', gap: '7px' }}>
                <CheckCircle2 size={14} color="#1a6b3c" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{d}</span>
              </div>
            ))}
          </div>

          {/* Amenities */}
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', margin: '0 0 0.85rem' }}>Amenities</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '2rem' }}>
            {listing.amenities.map(a => (
              <div key={a.label} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                <span style={{ width: '28px', height: '28px', borderRadius: '7px', background: 'rgba(26,107,60,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <a.Icon size={14} color="#1a6b3c" strokeWidth={1.8} />
                </span>
                {a.label}
              </div>
            ))}
          </div>

          {/* Verification Report */}
          <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '14px', overflow: 'hidden', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-subtle)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', margin: 0 }}>Verification Report</h3>
              <span style={{ padding: '0.28rem 0.85rem', borderRadius: '9999px', background: 'rgba(26,107,60,0.10)', border: '1px solid rgba(26,107,60,0.25)', color: '#1a6b3c', fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.04em' }}>
                STATUS: CLEAR
              </span>
            </div>
            {listing.verificationReport.map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '300px 1fr 90px', gap: '2rem', alignItems: 'center', padding: '0.85rem 1.25rem', borderTop: i > 0 ? '1px solid var(--border-subtle)' : 'none' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{row.layer}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-muted)' }}>{row.detail}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', fontWeight: 700, color: RESULT_COLOR[row.result] ?? 'var(--text-muted)', whiteSpace: 'nowrap', textAlign: 'right' }}>{row.result}</span>
              </div>
            ))}
            {/* Download buttons */}
            <div style={{ display: 'flex', gap: '0.75rem', padding: '1rem 1.25rem', borderTop: '1px solid var(--border-subtle)', flexWrap: 'wrap' }}>
              <button style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '0.6rem 1.1rem', borderRadius: '9999px', background: '#1a6b3c', border: '1px solid #1a6b3c', color: 'white', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer' }}>
                <Download size={14} strokeWidth={2} /> Download Full Report (PDF)
              </button>
              <button style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '0.6rem 1.1rem', borderRadius: '9999px', background: 'var(--bg-surface)', border: '1px solid var(--border-default)', color: 'var(--text-secondary)', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.8rem', cursor: 'pointer' }}>
                <Link2 size={14} strokeWidth={2} /> View on Blockchain
              </button>
            </div>
          </div>

          {/* Reviews */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', margin: '0 0 0.3rem' }}>Reviews</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ display: 'flex', gap: '2px' }}>
                  {[1,2,3,4,5].map(i => <svg key={i} width="14" height="14" viewBox="0 0 14 14"><polygon points="7,1 8.8,5 13,5.5 10,8.3 10.9,12.5 7,10.4 3.1,12.5 4,8.3 1,5.5 5.2,5" fill="#e8a84c"/></svg>)}
                </div>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-muted)' }}>({listing.reviewCount} reviews)</span>
              </div>
            </div>
            <button style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', fontWeight: 600, color: '#1a6b3c', background: 'none', border: 'none', cursor: 'pointer' }}>Write a Review</button>
          </div>
          {listing.reviews.map((r, i) => (
            <div key={i} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '1rem 1.1rem', marginBottom: '0.75rem' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: '0 0 0.6rem' }}>{r.text}</p>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-primary)', margin: 0 }}>{r.author}</p>
            </div>
          ))}
          <button style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', fontWeight: 600, color: '#1a6b3c', background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem 0' }}>Read all →</button>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div style={{ position: 'sticky', top: '84px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>

          {/* Seller card */}
          <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '16px', padding: '1.25rem', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.75rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
                <Image src={listing.seller.avatar} alt={listing.seller.name} fill sizes="48px" style={{ objectFit: 'cover' }} />
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)', margin: '0 0 0.15rem' }}>{listing.seller.name}</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--text-muted)', margin: 0 }}>Member since: {listing.seller.since}</p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '0.18rem 0.55rem', borderRadius: '9999px', background: 'rgba(26,107,60,0.10)', border: '1px solid rgba(26,107,60,0.22)', color: '#1a6b3c', fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 700, marginTop: '0.2rem' }}>
                  <CheckCircle2 size={10} strokeWidth={2.5} /> VERIFIED SELLER
                </span>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', marginBottom: '0.85rem' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--text-muted)', margin: '0 0 0.1rem' }}>Response rate:</p>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)', margin: 0 }}>{listing.seller.responseRate}</p>
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--text-muted)', margin: '0 0 0.1rem' }}>Average Response Time:</p>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)', margin: 0 }}>{listing.seller.responseTime}</p>
              </div>
            </div>
            {/* Contact buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <button style={{ width: '100%', padding: '0.65rem', borderRadius: '9999px', border: '1px solid var(--border-default)', background: 'var(--bg-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-secondary)', cursor: 'pointer' }}>
                <MessageCircle size={15} strokeWidth={2} /> Message Seller
              </button>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                {[{ icon: <Phone size={14} strokeWidth={2} />, label: 'Call' }, { icon: <Mail size={14} strokeWidth={2} />, label: 'Email' }].map(b => (
                  <button key={b.label} style={{ padding: '0.6rem', borderRadius: '9999px', border: '1px solid var(--border-default)', background: 'var(--bg-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.82rem', color: 'var(--text-secondary)', cursor: 'pointer' }}>
                    {b.icon} {b.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Price + CTA — VERIFIED */}
          {isVerified ? (
            <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '16px', padding: '1.25rem', boxShadow: 'var(--shadow-sm)' }}>
              <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)', margin: '0 0 0.85rem' }}>Price Breakdown</h4>
              {[
                { label: 'Property Price', val: listing.price },
                { label: 'Service Fee (1.5%)', val: listing.serviceFee },
              ].map(r => (
                <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-muted)' }}>{r.label}</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{r.val}</span>
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.65rem', marginBottom: '1rem' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>Total</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, color: '#1a6b3c' }}>{listing.total}</span>
              </div>
              <button style={{ width: '100%', padding: '0.85rem', borderRadius: '9999px', background: '#e8a84c', border: '1px solid #e8a84c', color: '#0d3d22', fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: '0.9rem', cursor: 'pointer', marginBottom: '0.6rem', transition: 'all 150ms ease', boxShadow: '0 4px 16px rgba(232,168,76,0.3)' }}
                onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.background = '#f2c06e'}
                onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.background = '#e8a84c'}
              >
                Make Offer
              </button>
              <button style={{ width: '100%', padding: '0.65rem', background: 'none', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: '#dc2626', cursor: 'pointer' }}>
                <Heart size={14} strokeWidth={2} fill="#dc2626" /> Save to favorite
              </button>
            </div>
          ) : (
            /* UNVERIFIED — show verification pending */
            <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '16px', padding: '1.25rem', boxShadow: 'var(--shadow-sm)' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--text-muted)', margin: '0 0 0.3rem' }}>Asking Price</p>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.4rem', color: 'var(--text-primary)', letterSpacing: '-0.03em', margin: '0 0 1rem' }}>{listing.price}</p>
              <div style={{ display: 'flex', gap: '8px', padding: '0.85rem', borderRadius: '10px', background: 'rgba(232,168,76,0.08)', border: '1px solid rgba(232,168,76,0.25)', marginBottom: '1rem' }}>
                <AlertTriangle size={16} color="#b8832a" strokeWidth={2} style={{ flexShrink: 0, marginTop: '1px' }} />
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: '#b8832a', margin: '0 0 0.2rem' }}>Verification Pending</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: '#b8832a', margin: 0, lineHeight: 1.5 }}>This property is not yet verified. Request verification for ₦50,000 to confirm title.</p>
                </div>
              </div>
              <button style={{ width: '100%', padding: '0.85rem', borderRadius: '9999px', background: '#e8a84c', border: '1px solid #e8a84c', color: '#0d3d22', fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: '0.9rem', cursor: 'pointer', marginBottom: '0.75rem' }}>
                Request Verification
              </button>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.55 }}>
                Note: Verification requests are processed within 7–10 working days by certified land surveyors
              </p>
            </div>
          )}

          {/* Share + Report */}
          <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '16px', padding: '1.1rem 1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', margin: '0 0 0.75rem' }}>Share This Property</p>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              {[
                { label: 'fb', path: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /> },
                { label: 'in', path: <><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></> },
                { label: 'yt', path: <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/> },
              ].map(s => (
                <button key={s.label} style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1.5px solid var(--border-default)', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-muted)', transition: 'all 150ms ease' }}
                  onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = '#1a6b3c'; b.style.borderColor = '#1a6b3c'; b.style.color = 'white'; }}
                  onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = 'transparent'; b.style.borderColor = 'var(--border-default)'; b.style.color = 'var(--text-muted)'; }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">{s.path}</svg>
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowReport(true)}
              style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: '0.82rem', fontWeight: 700, color: '#dc2626', padding: '0.25rem 0' }}
            >
              <Flag size={14} strokeWidth={2} /> REPORT LISTING
            </button>
          </div>

          {/* Location map placeholder */}
          <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '16px', overflow: 'hidden' }}>
            <div style={{ padding: '0.85rem 1.1rem', borderBottom: '1px solid var(--border-subtle)' }}>
              <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)', margin: 0 }}>Location</h4>
            </div>
            <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
              <Image
                src="/assets/listing/map.png"
                alt="Property location map"
                fill
                sizes="340px"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.18) 100%)' }} />
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#1a6b3c', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(26,107,60,0.5)', border: '3px solid white' }}>
                  <MapPin size={18} color="white" strokeWidth={2.5} fill="white" fillOpacity={0.3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showReport && <ReportModal onClose={() => setShowReport(false)} />}

      <style>{`
        @media (max-width: 900px) {
          .listing-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}