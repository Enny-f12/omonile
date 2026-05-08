'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin, Bed, Bath, Maximize2, CheckCircle2, Download, Link2,
  MessageCircle, Phone, Mail, Heart, AlertTriangle, Flag, ShieldCheck,
  Droplets, DoorOpen, Zap, Wifi, WashingMachine, Wind, Car, Lock,
  Share2, ChevronRight,
} from 'lucide-react';
import { ReportModal } from './ReportModal';

/* ─── DATA ──────────────────────────────────────────────────────── */
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
    { Icon: Droplets,       label: 'Water' },
    { Icon: DoorOpen,       label: 'Private Entrance' },
    { Icon: Zap,            label: 'Electricity' },
    { Icon: Wifi,           label: 'Wifi' },
    { Icon: WashingMachine, label: 'Washing Machine' },
    { Icon: Wind,           label: 'AC' },
    { Icon: Car,            label: 'Parking' },
    { Icon: Lock,           label: '24/7 Security' },
  ],
  verificationReport: [
    { layer: 'AI Forgery Detection',  detail: 'Score: 96%',            result: 'Passed'   },
    { layer: 'Lawyer State Registry', detail: 'No encumbrances',       result: 'Clear'    },
    { layer: 'Dual Federal Search',   detail: 'No Federal Interest',   result: 'Clear'    },
    { layer: 'Family Land',           detail: 'NO Family Land',        result: 'N/A'      },
    { layer: 'Surveyor Inspection',   detail: 'Coordinates Confirmed', result: 'Verified' },
    { layer: 'Community Engagement',  detail: 'No Dispute',            result: 'Verified' },
  ],
  images: [
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=85',
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=300&q=80',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=300&q=80',
    'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=300&q=80',
  ],
  seller: {
    name: 'Adeyemi Properties LTD', since: 'Jan 2024',
    responseRate: '98%', responseTime: '<2hrs', verified: true,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  reviews: [
    { text: "I almost lost ₦15M to a fraudulent land seller. Omonile App's lawyer verification saved me. The property was under government acquisition!", author: 'Adebayo O., Lekki' },
    { text: "I almost lost ₦15M to a fraudulent land seller. Omonile App's lawyer verification saved me. The property was under government acquisition!", author: 'Chidi Adams' },
  ],
  rating: 5, reviewCount: 12,
};

const RESULT_COLOR: Record<string, string> = {
  Passed: '#1a6b3c', Clear: '#1a6b3c', Verified: '#1a6b3c', 'N/A': '#b8832a', Pending: '#dc2626',
};

/* ─── STYLE INJECTION (client-only, no SSR mismatch) ───────────── */
function useStyles() {
  const injected = useRef(false);
  useEffect(() => {
    if (injected.current) return;
    injected.current = true;
    const css = `
      /* ── Layout ── */
      .ld-page { width:100%; max-width:1280px; margin-inline:auto; padding:2rem clamp(1rem,4vw,3rem) 4rem; }
      .ld-grid  { display:grid; grid-template-columns:1fr 340px; gap:2rem; align-items:start; }

      /* ── Thumbnails ── */
      .ld-thumbs { display:grid; grid-template-columns:repeat(3,1fr); gap:0.6rem; margin-bottom:1.5rem; }
      .ld-thumb  { position:relative; height:95px; border-radius:10px; overflow:hidden; cursor:pointer; border:2px solid transparent; transition:border-color 150ms ease; }
      .ld-thumb.active { border-color:#1a6b3c; }

      /* ── Specs row ── */
      .ld-specs { display:flex; gap:0.75rem; flex-wrap:wrap; margin-bottom:1.5rem; }
      .ld-spec-cell {
        display:flex; flex-direction:column; align-items:center; gap:4px;
        padding:0.65rem 1rem; border-radius:10px;
        border:1px solid var(--border-subtle); background:var(--bg-surface);
        min-width:80px; flex:1;
      }

      /* ── Description grid ── */
      .ld-desc-grid  { display:grid; grid-template-columns:1fr 1fr; gap:0.5rem 1.5rem; margin-bottom:1.5rem; }
      .ld-amen-grid  { display:grid; grid-template-columns:1fr 1fr; gap:0.5rem; margin-bottom:2rem; }

      /* ── Verification report table ── */
      .ld-vr-row {
        display:grid; grid-template-columns:300px 1fr 90px;
        gap:2rem; align-items:center;
        padding:0.85rem 1.25rem;
      }

      /* ── Contact buttons ── */
      .ld-contact-grid { display:grid; grid-template-columns:1fr 1fr; gap:0.5rem; }
      .ld-icon-btn {
        padding:0.6rem; border-radius:9999px;
        border:1px solid var(--border-default); background:var(--bg-surface);
        display:flex; align-items:center; justify-content:center; gap:6px;
        font-family:var(--font-body); font-weight:600; font-size:0.82rem;
        color:var(--text-secondary); cursor:pointer; transition:all 180ms ease;
        white-space:nowrap;
      }
      .ld-icon-btn:hover { border-color:#1a6b3c; color:#1a6b3c; }

      /* ── Social share btns ── */
      .ld-social-btn {
        width:36px; height:36px; border-radius:50%;
        border:1.5px solid var(--border-default); background:transparent;
        display:flex; align-items:center; justify-content:center;
        cursor:pointer; color:var(--text-muted); transition:all 150ms ease;
      }
      .ld-social-btn:hover { background:#1a6b3c; border-color:#1a6b3c; color:white; }

      /* ── CTA buttons ── */
      .ld-btn-gold {
        width:100%; padding:0.85rem; border-radius:9999px;
        background:#e8a84c; border:1px solid #e8a84c; color:#0d3d22;
        font-family:var(--font-body); font-weight:800; font-size:0.9rem;
        cursor:pointer; margin-bottom:0.6rem;
        transition:background 180ms ease, transform 180ms ease;
        box-shadow:0 4px 16px rgba(232,168,76,0.3);
      }
      .ld-btn-gold:hover { background:#f2c06e; transform:translateY(-1px); }
      .ld-btn-outline {
        width:100%; padding:0.65rem; border-radius:9999px;
        background:none; border:1px solid var(--border-default); color:var(--text-secondary);
        font-family:var(--font-body); font-weight:600; font-size:0.85rem;
        cursor:pointer; display:flex; align-items:center; justify-content:center; gap:6px;
        transition:all 180ms ease;
      }
      .ld-btn-outline:hover { border-color:#1a6b3c; color:#1a6b3c; }



      /* ── Breadcrumb ── */
      .ld-bread { display:flex; align-items:center; gap:6px; margin-bottom:1.25rem; flex-wrap:wrap; }

      /* ─── TABLET  (≤ 960px) ─── */
      @media(max-width:960px){
        .ld-grid { grid-template-columns:1fr; }
        .ld-sidebar { order:2; }
        /* sidebar no longer sticky on mobile — lives below content */
        .ld-sidebar-inner { position:static !important; top:auto !important; }
        /* hide desktop sidebar price card — shown inline on mobile */
        .ld-price-card-desktop { display:block; }
        /* verification report: collapse 3-col into rows */
        .ld-vr-row { grid-template-columns:1fr auto; gap:0.5rem; padding:0.75rem 1rem; }
        .ld-vr-detail { display:none; }
      }

      /* ─── MOBILE  (≤ 640px) ─── */
      @media(max-width:640px){
        .ld-thumbs { grid-template-columns:repeat(3,1fr); gap:0.4rem; }
        .ld-thumb { height:72px; }
        .ld-desc-grid { grid-template-columns:1fr; }
        .ld-amen-grid { grid-template-columns:1fr 1fr; }
        .ld-specs { gap:0.5rem; }
        .ld-spec-cell { min-width:68px; padding:0.55rem 0.65rem; }
        .ld-contact-grid { grid-template-columns:1fr 1fr; }
        .ld-vr-row { padding:0.65rem 0.85rem; }
        /* report download btns stack */
        .ld-report-actions { flex-direction:column !important; }
        .ld-report-actions button { width:100%; justify-content:center; }
      }

      /* ─── VERY SMALL (≤ 380px) ─── */
      @media(max-width:380px){
        .ld-amen-grid { grid-template-columns:1fr; }
        .ld-specs { flex-direction:column; }
        .ld-spec-cell { flex-direction:row; min-width:auto; width:100%; justify-content:flex-start; gap:0.5rem; }
      }
    `;
    const el = document.createElement('style');
    el.setAttribute('data-ld', '1');
    el.textContent = css;
    document.head.appendChild(el);
  }, []);
}

/* ═══════════════════════════ COMPONENT ════════════════════════════ */
export function ListingDetailClient({ }: { id: string }) {
  useStyles();
  const [showReport, setShowReport] = useState(false);
  const [activeImg,  setActiveImg]  = useState(0);
  const listing   = VERIFIED_LISTING;
  const isVerified = listing.verified;

  return (
    <div className="ld-page">

      {/* Breadcrumb */}
      <div className="ld-bread">
        <Link href="/" style={{ fontFamily:'var(--font-body)', fontSize:'0.82rem', color:'var(--text-muted)', textDecoration:'none' }}>Home</Link>
        <ChevronRight size={12} color="var(--text-muted)" />
        <Link href="/listings" style={{ fontFamily:'var(--font-body)', fontSize:'0.82rem', color:'var(--text-muted)', textDecoration:'none' }}>Listings</Link>
        <ChevronRight size={12} color="var(--text-muted)" />
        <span style={{ fontFamily:'var(--font-body)', fontSize:'0.82rem', color:'#1a6b3c', fontWeight:600 }}>{listing.title}</span>
      </div>

      <div className="ld-grid">

        {/* ══ LEFT COLUMN ══════════════════════════════════════════ */}
        <div>

          {/* Main image */}
          <div style={{ position:'relative', height:'clamp(220px, 45vw, 400px)', borderRadius:16, overflow:'hidden', marginBottom:'0.75rem' }}>
            <Image src={listing.images[activeImg]} alt={listing.title} fill sizes="(max-width:960px) 100vw, 60vw" style={{ objectFit:'cover' }} priority />
          </div>

          {/* Thumbnails */}
          <div className="ld-thumbs">
            {listing.images.slice(1).map((img, i) => (
              <div key={i} className={`ld-thumb${activeImg === i + 1 ? ' active' : ''}`} onClick={() => setActiveImg(i + 1)}>
                <Image src={img} alt="" fill sizes="(max-width:640px) 30vw, 20vw" style={{ objectFit:'cover' }} />
              </div>
            ))}
          </div>

          {/* Title */}
          <h1 style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:'clamp(1.25rem,3vw,1.75rem)', color:'var(--text-primary)', letterSpacing:'-0.025em', margin:'0 0 0.4rem' }}>
            {listing.title}
          </h1>

          {/* Address */}
          <div style={{ display:'flex', alignItems:'flex-start', gap:5, marginBottom:'0.75rem' }}>
            <MapPin size={14} color="var(--text-muted)" strokeWidth={2} style={{ flexShrink:0, marginTop:2 }} />
            <span style={{ fontFamily:'var(--font-body)', fontSize:'0.875rem', color:'var(--text-muted)', lineHeight:1.5 }}>{listing.address}</span>
          </div>

          {/* Verification tags */}
          <div style={{ display:'flex', flexWrap:'wrap', gap:5, marginBottom:'1rem' }}>
            {listing.verifications.map(v => (
              <span key={v} style={{ display:'inline-flex', alignItems:'center', gap:4, padding:'0.22rem 0.65rem', borderRadius:9999, background:'rgba(26,107,60,0.08)', border:'1px solid rgba(26,107,60,0.2)', color:'#1a6b3c', fontFamily:'var(--font-body)', fontSize:'0.7rem', fontWeight:600 }}>
                <CheckCircle2 size={10} strokeWidth={2.5} /> {v}
              </span>
            ))}
          </div>

          {/* Price */}
          <p style={{ fontFamily:'var(--font-display)', fontWeight:900, fontSize:'clamp(1.5rem,4vw,2.2rem)', color:'var(--text-primary)', letterSpacing:'-0.03em', margin:'0 0 1rem' }}>
            {listing.price}
          </p>

          {/* Specs */}
          <div className="ld-specs">
            {[
              { icon: <Bed size={16} strokeWidth={1.8} />,       label: 'Bedroom',  val: listing.beds },
              { icon: <Bath size={16} strokeWidth={1.8} />,      label: 'Bathroom', val: listing.baths },
              { icon: <Maximize2 size={16} strokeWidth={1.8} />, label: 'Size',     val: `${listing.sqm} sqm` },
              { icon: <ShieldCheck size={16} strokeWidth={1.8} />, label: 'Type',   val: listing.type },
            ].map(s => (
              <div key={s.label} className="ld-spec-cell">
                <span style={{ color:'var(--text-muted)' }}>{s.icon}</span>
                <span style={{ fontFamily:'var(--font-body)', fontSize:'0.68rem', color:'var(--text-muted)', textTransform:'uppercase', letterSpacing:'0.04em' }}>{s.label}</span>
                <span style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'0.88rem', color:'var(--text-primary)' }}>{s.val}</span>
              </div>
            ))}
          </div>

          {/* Description */}
          <h3 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1rem', color:'var(--text-primary)', margin:'0 0 0.85rem' }}>Description</h3>
          <div className="ld-desc-grid">
            {listing.description.map(d => (
              <div key={d} style={{ display:'flex', alignItems:'flex-start', gap:7 }}>
                <CheckCircle2 size={14} color="#1a6b3c" strokeWidth={2.5} style={{ flexShrink:0, marginTop:2 }} />
                <span style={{ fontFamily:'var(--font-body)', fontSize:'0.85rem', color:'var(--text-secondary)', lineHeight:1.5 }}>{d}</span>
              </div>
            ))}
          </div>

          {/* Amenities */}
          <h3 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1rem', color:'var(--text-primary)', margin:'0 0 0.85rem' }}>Amenities</h3>
          <div className="ld-amen-grid">
            {listing.amenities.map(a => (
              <div key={a.label} style={{ display:'flex', alignItems:'center', gap:8, fontFamily:'var(--font-body)', fontSize:'0.875rem', color:'var(--text-secondary)' }}>
                <span style={{ width:28, height:28, borderRadius:7, background:'rgba(26,107,60,0.08)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  <a.Icon size={14} color="#1a6b3c" strokeWidth={1.8} />
                </span>
                {a.label}
              </div>
            ))}
          </div>

          {/* Verification Report */}
          <div style={{ background:'var(--bg-surface)', border:'1px solid var(--border-subtle)', borderRadius:14, overflow:'hidden', marginBottom:'1.5rem' }}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'1rem 1.25rem', borderBottom:'1px solid var(--border-subtle)', flexWrap:'wrap', gap:'0.5rem' }}>
              <h3 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1rem', color:'var(--text-primary)', margin:0 }}>Verification Report</h3>
              <span style={{ padding:'0.28rem 0.85rem', borderRadius:9999, background:'rgba(26,107,60,0.10)', border:'1px solid rgba(26,107,60,0.25)', color:'#1a6b3c', fontFamily:'var(--font-body)', fontSize:'0.72rem', fontWeight:800, letterSpacing:'0.04em' }}>
                STATUS: CLEAR
              </span>
            </div>
            {listing.verificationReport.map((row, i) => (
              <div key={i} className="ld-vr-row" style={{ borderTop: i > 0 ? '1px solid var(--border-subtle)' : 'none' }}>
                <span style={{ fontFamily:'var(--font-body)', fontSize:'0.85rem', color:'var(--text-secondary)', fontWeight:500 }}>{row.layer}</span>
                <span className="ld-vr-detail" style={{ fontFamily:'var(--font-body)', fontSize:'0.82rem', color:'var(--text-muted)' }}>{row.detail}</span>
                <span style={{ fontFamily:'var(--font-body)', fontSize:'0.82rem', fontWeight:700, color: RESULT_COLOR[row.result] ?? 'var(--text-muted)', whiteSpace:'nowrap', textAlign:'right' }}>{row.result}</span>
              </div>
            ))}
            <div className="ld-report-actions" style={{ display:'flex', gap:'0.75rem', padding:'1rem 1.25rem', borderTop:'1px solid var(--border-subtle)', flexWrap:'wrap' }}>
              <button style={{ display:'inline-flex', alignItems:'center', gap:6, padding:'0.6rem 1.1rem', borderRadius:9999, background:'#1a6b3c', border:'1px solid #1a6b3c', color:'white', fontFamily:'var(--font-body)', fontWeight:700, fontSize:'0.8rem', cursor:'pointer' }}>
                <Download size={14} strokeWidth={2} /> Download Full Report (PDF)
              </button>
              <button style={{ display:'inline-flex', alignItems:'center', gap:6, padding:'0.6rem 1.1rem', borderRadius:9999, background:'var(--bg-surface)', border:'1px solid var(--border-default)', color:'var(--text-secondary)', fontFamily:'var(--font-body)', fontWeight:600, fontSize:'0.8rem', cursor:'pointer' }}>
                <Link2 size={14} strokeWidth={2} /> View on Blockchain
              </button>
            </div>
          </div>

          {/* Reviews */}
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'1rem', flexWrap:'wrap', gap:'0.5rem' }}>
            <div>
              <h3 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1rem', color:'var(--text-primary)', margin:'0 0 0.3rem' }}>Reviews</h3>
              <div style={{ display:'flex', alignItems:'center', gap:6 }}>
                <div style={{ display:'flex', gap:2 }}>
                  {[1,2,3,4,5].map(i => <svg key={i} width="14" height="14" viewBox="0 0 14 14"><polygon points="7,1 8.8,5 13,5.5 10,8.3 10.9,12.5 7,10.4 3.1,12.5 4,8.3 1,5.5 5.2,5" fill="#e8a84c"/></svg>)}
                </div>
                <span style={{ fontFamily:'var(--font-body)', fontSize:'0.82rem', color:'var(--text-muted)' }}>({listing.reviewCount} reviews)</span>
              </div>
            </div>
            <button style={{ fontFamily:'var(--font-body)', fontSize:'0.82rem', fontWeight:600, color:'#1a6b3c', background:'none', border:'none', cursor:'pointer' }}>Write a Review</button>
          </div>
          {listing.reviews.map((r, i) => (
            <div key={i} style={{ background:'var(--bg-surface)', border:'1px solid var(--border-subtle)', borderRadius:12, padding:'1rem 1.1rem', marginBottom:'0.75rem' }}>
              <p style={{ fontFamily:'var(--font-body)', fontSize:'0.875rem', color:'var(--text-secondary)', lineHeight:1.65, margin:'0 0 0.6rem' }}>{r.text}</p>
              <p style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'0.85rem', color:'var(--text-primary)', margin:0 }}>{r.author}</p>
            </div>
          ))}
          <button style={{ fontFamily:'var(--font-body)', fontSize:'0.82rem', fontWeight:600, color:'#1a6b3c', background:'none', border:'none', cursor:'pointer', padding:'0.25rem 0' }}>Read all →</button>

          {/* Extra bottom padding so mobile sticky bar doesn't cover last review */}
          <div style={{ height:'1rem' }} />
        </div>

        {/* ══ RIGHT COLUMN — SIDEBAR ════════════════════════════════ */}
        <div className="ld-sidebar">
          <div className="ld-sidebar-inner" style={{ position:'sticky', top:'84px', display:'flex', flexDirection:'column', gap:'1rem' }}>

            {/* Seller card */}
            <div style={{ background:'var(--bg-surface)', border:'1px solid var(--border-subtle)', borderRadius:16, padding:'1.25rem', boxShadow:'var(--shadow-sm)' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'0.85rem', marginBottom:'0.75rem' }}>
                <div style={{ width:48, height:48, borderRadius:'50%', overflow:'hidden', flexShrink:0, position:'relative' }}>
                  <Image src={listing.seller.avatar} alt={listing.seller.name} fill sizes="48px" style={{ objectFit:'cover' }} />
                </div>
                <div>
                  <p style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'0.9rem', color:'var(--text-primary)', margin:'0 0 0.15rem' }}>{listing.seller.name}</p>
                  <p style={{ fontFamily:'var(--font-body)', fontSize:'0.72rem', color:'var(--text-muted)', margin:0 }}>Member since: {listing.seller.since}</p>
                  <span style={{ display:'inline-flex', alignItems:'center', gap:4, padding:'0.18rem 0.55rem', borderRadius:9999, background:'rgba(26,107,60,0.10)', border:'1px solid rgba(26,107,60,0.22)', color:'#1a6b3c', fontFamily:'var(--font-body)', fontSize:'0.65rem', fontWeight:700, marginTop:'0.2rem' }}>
                    <CheckCircle2 size={10} strokeWidth={2.5} /> VERIFIED SELLER
                  </span>
                </div>
              </div>

              <div style={{ display:'flex', justifyContent:'space-between', padding:'0.75rem 0', borderTop:'1px solid var(--border-subtle)', borderBottom:'1px solid var(--border-subtle)', marginBottom:'0.85rem' }}>
                <div>
                  <p style={{ fontFamily:'var(--font-body)', fontSize:'0.7rem', color:'var(--text-muted)', margin:'0 0 0.1rem' }}>Response rate</p>
                  <p style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'0.9rem', color:'var(--text-primary)', margin:0 }}>{listing.seller.responseRate}</p>
                </div>
                <div style={{ textAlign:'right' }}>
                  <p style={{ fontFamily:'var(--font-body)', fontSize:'0.7rem', color:'var(--text-muted)', margin:'0 0 0.1rem' }}>Avg Response Time</p>
                  <p style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'0.9rem', color:'var(--text-primary)', margin:0 }}>{listing.seller.responseTime}</p>
                </div>
              </div>

              <div style={{ display:'flex', flexDirection:'column', gap:'0.5rem' }}>
                <button className="ld-icon-btn" style={{ width:'100%' }}>
                  <MessageCircle size={15} strokeWidth={2} /> Message Seller
                </button>
                <div className="ld-contact-grid">
                  <button className="ld-icon-btn"><Phone size={14} strokeWidth={2} /> Call</button>
                  <button className="ld-icon-btn"><Mail size={14} strokeWidth={2} /> Email</button>
                </div>
              </div>
            </div>

            {/* Price/CTA card — DESKTOP ONLY (hidden on mobile, replaced by sticky bar) */}
            <div className="ld-price-card-desktop">
              {isVerified ? (
                <div style={{ background:'var(--bg-surface)', border:'1px solid var(--border-subtle)', borderRadius:16, padding:'1.25rem', boxShadow:'var(--shadow-sm)' }}>
                  <h4 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'0.9rem', color:'var(--text-primary)', margin:'0 0 0.85rem' }}>Price Breakdown</h4>
                  {[
                    { label:'Property Price', val: listing.price },
                    { label:'Service Fee (1.5%)', val: listing.serviceFee },
                  ].map(r => (
                    <div key={r.label} style={{ display:'flex', justifyContent:'space-between', marginBottom:'0.5rem' }}>
                      <span style={{ fontFamily:'var(--font-body)', fontSize:'0.82rem', color:'var(--text-muted)' }}>{r.label}</span>
                      <span style={{ fontFamily:'var(--font-body)', fontSize:'0.82rem', color:'var(--text-secondary)', fontWeight:500 }}>{r.val}</span>
                    </div>
                  ))}
                  <div style={{ display:'flex', justifyContent:'space-between', borderTop:'1px solid var(--border-subtle)', paddingTop:'0.65rem', marginBottom:'1rem' }}>
                    <span style={{ fontFamily:'var(--font-body)', fontSize:'0.9rem', fontWeight:700, color:'var(--text-primary)' }}>Total</span>
                    <span style={{ fontFamily:'var(--font-display)', fontSize:'1rem', fontWeight:800, color:'#1a6b3c' }}>{listing.total}</span>
                  </div>
                  <button className="ld-btn-gold">Make Offer</button>
                  <button style={{ width:'100%', padding:'0.65rem', background:'none', border:'none', display:'flex', alignItems:'center', justifyContent:'center', gap:6, fontFamily:'var(--font-body)', fontSize:'0.82rem', color:'#dc2626', cursor:'pointer' }}>
                    <Heart size={14} strokeWidth={2} fill="#dc2626" /> Save to favourite
                  </button>
                </div>
              ) : (
                <div style={{ background:'var(--bg-surface)', border:'1px solid var(--border-subtle)', borderRadius:16, padding:'1.25rem', boxShadow:'var(--shadow-sm)' }}>
                  <p style={{ fontFamily:'var(--font-body)', fontSize:'0.72rem', color:'var(--text-muted)', margin:'0 0 0.3rem' }}>Asking Price</p>
                  <p style={{ fontFamily:'var(--font-display)', fontWeight:900, fontSize:'1.4rem', color:'var(--text-primary)', letterSpacing:'-0.03em', margin:'0 0 1rem' }}>{listing.price}</p>
                  <div style={{ display:'flex', gap:8, padding:'0.85rem', borderRadius:10, background:'rgba(232,168,76,0.08)', border:'1px solid rgba(232,168,76,0.25)', marginBottom:'1rem' }}>
                    <AlertTriangle size={16} color="#b8832a" strokeWidth={2} style={{ flexShrink:0, marginTop:1 }} />
                    <div>
                      <p style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'0.85rem', color:'#b8832a', margin:'0 0 0.2rem' }}>Verification Pending</p>
                      <p style={{ fontFamily:'var(--font-body)', fontSize:'0.78rem', color:'#b8832a', margin:0, lineHeight:1.5 }}>Request verification for ₦50,000 to confirm title.</p>
                    </div>
                  </div>
                  <button className="ld-btn-gold">Request Verification</button>
                </div>
              )}
            </div>

            {/* Share + Report */}
            <div style={{ background:'var(--bg-surface)', border:'1px solid var(--border-subtle)', borderRadius:16, padding:'1.1rem 1.25rem', display:'flex', flexDirection:'column', alignItems:'center' }}>
              <p style={{ fontFamily:'var(--font-body)', fontSize:'0.72rem', fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--text-muted)', margin:'0 0 0.75rem', display:'flex', alignItems:'center', gap:6 }}>
                <Share2 size={13} /> Share This Property
              </p>
              <div style={{ display:'flex', gap:'0.5rem', marginBottom:'1rem' }}>
                {[
                  { label:'fb', path: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /> },
                  { label:'in', path: <><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></> },
                  { label:'wa', path: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z M12 2a10 10 0 100 20A10 10 0 0012 2z" /> },
                ].map(s => (
                  <button key={s.label} className="ld-social-btn">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">{s.path}</svg>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setShowReport(true)}
                style={{ display:'flex', alignItems:'center', gap:6, background:'none', border:'none', cursor:'pointer', fontFamily:'var(--font-body)', fontSize:'0.82rem', fontWeight:700, color:'#dc2626', padding:'0.25rem 0' }}
              >
                <Flag size={14} strokeWidth={2} /> REPORT LISTING
              </button>
            </div>

            {/* Map */}
            <div style={{ background:'var(--bg-surface)', border:'1px solid var(--border-subtle)', borderRadius:16, overflow:'hidden' }}>
              <div style={{ padding:'0.85rem 1.1rem', borderBottom:'1px solid var(--border-subtle)' }}>
                <h4 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'0.9rem', color:'var(--text-primary)', margin:0, display:'flex', alignItems:'center', gap:6 }}>
                  <MapPin size={14} color="#1a6b3c" /> Location
                </h4>
              </div>
              <div style={{ position:'relative', height:180, overflow:'hidden' }}>
                <Image
                  src="/assets/listing/map.png"
                  alt="Property location map"
                  fill sizes="340px"
                  style={{ objectFit:'cover', objectPosition:'center' }}
                />
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.18) 100%)' }} />
                <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)' }}>
                  <div style={{ width:36, height:36, borderRadius:'50%', background:'#1a6b3c', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 4px 16px rgba(26,107,60,0.5)', border:'3px solid white' }}>
                    <MapPin size={18} color="white" strokeWidth={2.5} />
                  </div>
                </div>
              </div>
            </div>

          </div>{/* /sidebar-inner */}
        </div>{/* /sidebar */}
      </div>{/* /grid */}


      {showReport && <ReportModal onClose={() => setShowReport(false)} />}
    </div>
  );
}