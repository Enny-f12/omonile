'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck, Users, Building2, Star, BadgeCheck,
  Scale, MapPin, Lock,
  Zap, Heart, Globe, ArrowRight, Quote,
} from 'lucide-react';

/* ─── DATA ──────────────────────────────────────────────────────── */
const team = [
  {
    name: 'Christian Ikenna', initials: 'CI',
    role: 'CoFounder & CEO, Chrivon Tech Solutions',
    bio: 'Vision-led operator focused on scaling software products for African markets.',
    gradient: 'linear-gradient(135deg,#1a6b3c 0%,#27ae60 100%)',
    image: '/assets/founder/christian.jpeg',
  },
  {
    name: 'B. Eugene Loko', initials: 'BL',
    role: 'CoFounder & Principal Data & Product Strategist',
    bio: "A cornerstone of Chrivon's pan-African brain trust with 19 years of experience.",
    gradient: 'linear-gradient(135deg,#e8a84c 0%,#f2c06e 100%)',
    image: '/assets/founder/Bonna.png',
  },
  {
    name: 'Onaneye Joseph', initials: 'OJ',
    role: 'Full-Stack Product Engineer & Tech Entrepreneur',
    bio: 'Full-stack developer focused on building scalable fintech and growth platforms.',
    gradient: 'linear-gradient(135deg,#1a6b3c 0%,#e8a84c 100%)',
    image: '/assets/founder/joseph.jpg',
  },
];

const stats = [
  { Icon: Building2,  num: '2,400+', label: 'Properties Listed'   },
  { Icon: BadgeCheck, num: '1,000+', label: 'Verified Properties' },
  { Icon: Users,      num: '8,500+', label: 'Trusted Users'        },
  { Icon: Star,       num: '4.9/5',  label: 'User Rating'          },
];

const values = [
  { Icon: ShieldCheck, title: 'Trust First',        body: 'Every transaction is verified, every property authenticated, every payment secured.' },
  { Icon: Zap,         title: 'Tech-Powered',       body: 'AI, blockchain, and professional networks working together for bulletproof verification.' },
  { Icon: Heart,       title: 'People-Centric',     body: 'Built for everyday Nigerians who deserve safe and transparent property dealings.' },
  { Icon: Globe,       title: 'Pan-African Vision', body: 'Starting in Nigeria, building toward a continent-wide property trust infrastructure.' },
];

const partners = [
  { Icon: Lock,        name: 'Vetandpay',              desc: 'Escrow services ensuring secure transactions',     badge: 'Active',      pending: false },
  { Icon: MapPin,      name: 'Lagos State Government', desc: 'Official state-level partnership for land data',   badge: 'Pending',     pending: true  },
  { Icon: Scale,       name: 'MARC',                   desc: 'Alternative Dispute Resolution services',         badge: 'ADR Partner', pending: false },
  { Icon: ShieldCheck, name: 'NDPC Compliant',          desc: 'Nigeria Data Protection Compliance certified',   badge: 'Certified',   pending: false },
];



/* ─── STYLE INJECTION ───────────────────────────────────────────── */
function useStyles() {
  const done = useRef(false);
  useEffect(() => {
    if (done.current) return;
    done.current = true;
    const css = `
      @keyframes ab-float { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-8px)} }
      @keyframes ab-pulse  { 0%,100%{box-shadow:0 0 0 0 rgba(39,174,96,0.35)} 50%{box-shadow:0 0 0 7px rgba(39,174,96,0)} }

      .ab-dot { display:inline-block; width:8px; height:8px; border-radius:50%; background:#27ae60; animation:ab-pulse 2s ease-in-out infinite; flex-shrink:0; }

      .ab-section { padding:clamp(4rem,8vw,7rem) clamp(1.25rem,5vw,3rem); }
      .ab-inner   { max-width:1180px; margin:0 auto; }

      .ab-label { display:inline-flex; align-items:center; gap:0.5rem; font-family:var(--font-body); font-size:0.7rem; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; color:#1a6b3c; margin-bottom:0.85rem; }
      .ab-label::before { content:''; display:block; width:18px; height:2px; border-radius:2px; background:#e8a84c; }
      .ab-label-light { color:#e8a84c; }
      .ab-grad { background:linear-gradient(135deg,#1a6b3c 0%,#e8a84c 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }

      /* HERO */
      .ab-hero {
        position:relative; overflow:hidden;
        padding:clamp(6rem,12vw,9rem) clamp(1.25rem,5vw,3rem) clamp(4rem,8vw,6rem);
        background: radial-gradient(ellipse 70% 55% at 60% 30%,rgba(26,107,60,0.09) 0%,transparent 65%), radial-gradient(ellipse 45% 40% at 5% 85%,rgba(232,168,76,0.07) 0%,transparent 55%), var(--bg-base);
        border-bottom:1px solid var(--border-subtle);
      }
      .ab-hero::after { content:''; position:absolute; bottom:0; left:0; right:0; height:3px; background:linear-gradient(90deg,transparent,#e8a84c 40%,#1a6b3c 100%); }
      .ab-hero-grid { max-width:1180px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:3rem; align-items:center; }
      .ab-hero-badge { display:inline-flex; align-items:center; gap:0.5rem; background:rgba(26,107,60,0.1); border:1px solid rgba(26,107,60,0.18); color:#1a6b3c; font-size:0.72rem; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; padding:0.35rem 0.9rem; border-radius:9999px; margin-bottom:1.25rem; }
      .ab-hero-title { font-family:var(--font-display); font-size:clamp(2.2rem,5vw,3.6rem); font-weight:900; line-height:1.06; letter-spacing:-0.03em; color:var(--text-primary); margin:0 0 1.25rem; }
      .ab-hero-desc  { font-size:1.05rem; color:var(--text-secondary); line-height:1.75; max-width:480px; margin:0 0 2rem; }
      .ab-hero-btns  { display:flex; gap:0.85rem; flex-wrap:wrap; }

      /* Floating card */
      .ab-card-stack { position:relative; width:280px; height:300px; margin:auto; }
      .ab-fcard { position:absolute; background:var(--bg-surface); border-radius:20px; box-shadow:var(--shadow-lg); border:1px solid var(--border-subtle); padding:1.5rem; width:220px; }
      .ab-fcard-main { top:0; left:50%; z-index:3; animation:ab-float 5s ease-in-out infinite; }
      .ab-fcard-b1   { top:20px; left:5px; z-index:2; opacity:0.45; transform:rotate(-5deg); }
      .ab-fcard-b2   { top:28px; right:0;  z-index:1; opacity:0.28; transform:rotate(6deg); }
      .ab-fcard-icon { width:40px; height:40px; border-radius:10px; margin-bottom:0.8rem; background:linear-gradient(135deg,#1a6b3c,#e8a84c); display:flex; align-items:center; justify-content:center; color:white; }

      /* STATS */
      .ab-stats { background:#1a6b3c; padding:2.5rem clamp(1.25rem,5vw,3rem); }
      .ab-stats-grid { max-width:1180px; margin:0 auto; display:grid; grid-template-columns:repeat(4,1fr); gap:1rem; text-align:center; }
      .ab-stat-icon { display:flex; justify-content:center; margin-bottom:0.4rem; color:rgba(255,255,255,0.5); }
      .ab-stat-num  { font-family:var(--font-display); font-size:clamp(1.8rem,3.5vw,2.4rem); font-weight:900; color:#e8a84c; line-height:1; margin-bottom:0.3rem; }
      .ab-stat-lbl  { font-size:0.78rem; color:rgba(255,255,255,0.65); text-transform:uppercase; letter-spacing:0.08em; }

      /* STORY */
      .ab-story-grid { display:grid; grid-template-columns:1fr 1fr; gap:clamp(2.5rem,5vw,5rem); align-items:center; }
      .ab-story-visual { border-radius:24px; overflow:hidden; position:relative; background:linear-gradient(135deg,var(--bg-surface-2),var(--bg-surface-3)); aspect-ratio:4/3; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:1rem; color:var(--text-muted); border:1px solid var(--border-subtle); }
      .ab-story-accent { position:absolute; bottom:-1.25rem; right:-1.25rem; background:#e8a84c; border-radius:12px; padding:1rem 1.25rem; box-shadow:var(--shadow-md); z-index:2; }
      .ab-story-title { font-family:var(--font-display); font-size:clamp(1.8rem,3.5vw,2.4rem); font-weight:800; color:var(--text-primary); margin:0 0 1.25rem; letter-spacing:-0.02em; }
      .ab-story-body  { font-size:1rem; color:var(--text-secondary); line-height:1.8; }
      .ab-story-body p+p { margin-top:1rem; }
      .ab-quote { margin-top:2rem; padding:1.25rem 1.5rem; background:rgba(26,107,60,0.07); border-left:3px solid #1a6b3c; border-radius:0 12px 12px 0; display:flex; gap:0.75rem; align-items:flex-start; }
      .ab-quote-icon { color:#1a6b3c; flex-shrink:0; margin-top:2px; }
      .ab-quote-text { font-style:italic; font-size:0.97rem; color:var(--text-secondary); line-height:1.7; }

      /* VALUES */
      .ab-values-bg { background:var(--bg-surface-2); border-top:1px solid var(--border-subtle); border-bottom:1px solid var(--border-subtle); }
      .ab-values-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:1.25rem; margin-top:2.5rem; }
      .ab-val-card { background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:20px; padding:1.75rem 1.5rem; transition:transform 250ms ease, box-shadow 250ms ease, border-color 250ms ease; }
      .ab-val-card:hover { transform:translateY(-5px); box-shadow:var(--shadow-md); border-color:rgba(26,107,60,0.2); }
      .ab-val-icon { width:46px; height:46px; border-radius:12px; display:flex; align-items:center; justify-content:center; margin-bottom:1rem; background:rgba(26,107,60,0.1); color:#1a6b3c; transition:background 250ms, color 250ms; }
      .ab-val-card:hover .ab-val-icon { background:#1a6b3c; color:#fff; }
      .ab-val-title { font-family:var(--font-display); font-size:0.97rem; font-weight:700; color:var(--text-primary); margin:0 0 0.5rem; }
      .ab-val-body  { font-size:0.85rem; color:var(--text-muted); line-height:1.65; margin:0; }

      /* TEAM */
      .ab-team-hd   { text-align:center; margin-bottom:3.5rem; }
      .ab-team-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2rem; }
      .ab-team-card { background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:24px; overflow:hidden; transition:transform 260ms ease, box-shadow 260ms ease; }
      .ab-team-card:hover { transform:translateY(-6px); box-shadow:var(--shadow-lg); }
      .ab-team-img  { aspect-ratio:1/1; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden; background:linear-gradient(135deg,var(--bg-surface-2),var(--bg-surface-3)); }
      .ab-team-overlay { position:absolute; inset:0; background:linear-gradient(to top,rgba(15,28,20,0.55) 0%,transparent 50%); opacity:0; transition:opacity 250ms ease; }
      .ab-team-card:hover .ab-team-overlay { opacity:1; }
      .ab-avatar { width:80px; height:80px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-family:var(--font-display); font-size:1.75rem; font-weight:900; color:#fff; position:relative; z-index:1; }
      .ab-team-body { padding:1.5rem; }
      .ab-team-name { font-family:var(--font-display); font-size:1.05rem; font-weight:700; color:var(--text-primary); margin:0 0 0.25rem; }
      .ab-team-role { font-size:0.75rem; color:#1a6b3c; font-weight:600; text-transform:uppercase; letter-spacing:0.06em; margin:0 0 0.75rem; }
      .ab-team-bio  { font-size:0.875rem; color:var(--text-muted); line-height:1.6; margin:0; }

      /* PARTNERS */
      .ab-partners-bg { background:#1a6b3c; position:relative; overflow:hidden; }
      .ab-partners-bg::before { content:''; position:absolute; inset:0; pointer-events:none; background:radial-gradient(ellipse 60% 50% at 80% 50%,rgba(232,168,76,0.12) 0%,transparent 60%); }
      .ab-partners-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:1.25rem; }
      .ab-partner-card { background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); border-radius:20px; padding:1.75rem 1.5rem; text-align:center; transition:background 220ms, border-color 220ms, transform 220ms; }
      .ab-partner-card:hover { background:rgba(255,255,255,0.14); border-color:rgba(255,255,255,0.25); transform:translateY(-4px); }
      .ab-partner-icon { width:50px; height:50px; border-radius:12px; background:rgba(255,255,255,0.12); display:flex; align-items:center; justify-content:center; margin:0 auto 1rem; color:white; }
      .ab-partner-name { font-family:var(--font-display); font-size:0.95rem; font-weight:700; color:white; margin:0 0 0.35rem; }
      .ab-partner-desc { font-size:0.8rem; color:rgba(255,255,255,0.55); margin:0 0 0.6rem; line-height:1.5; }
      .ab-partner-badge { display:inline-block; font-size:0.68rem; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; padding:0.2rem 0.6rem; border-radius:9999px; background:rgba(232,168,76,0.25); color:#e8a84c; border:1px solid rgba(232,168,76,0.3); }
      .ab-partner-badge-pending { background:rgba(255,255,255,0.08); color:rgba(255,255,255,0.45); border-color:rgba(255,255,255,0.15); }

      /* TRUST */
      .ab-trust-bg   { background:var(--bg-surface); }
      .ab-trust-grid { display:grid; grid-template-columns:1fr 1fr; gap:4rem; align-items:center; }
      .ab-trust-items { display:flex; flex-direction:column; gap:0.85rem; }
      .ab-trust-item { display:flex; align-items:flex-start; gap:1rem; padding:1rem 1.1rem; border-radius:12px; border:1px solid var(--border-subtle); transition:border-color 180ms, background 180ms; }
      .ab-trust-item:hover { border-color:rgba(26,107,60,0.25); background:rgba(26,107,60,0.03); }
      .ab-trust-ico { width:34px; height:34px; border-radius:8px; flex-shrink:0; background:rgba(26,107,60,0.1); color:#1a6b3c; display:flex; align-items:center; justify-content:center; }
      .ab-trust-visual { background:linear-gradient(135deg,var(--bg-surface-2),var(--bg-surface-3)); border-radius:24px; padding:2.5rem; border:1px solid var(--border-subtle); position:relative; overflow:hidden; }
      .ab-trust-visual::before { content:''; position:absolute; top:-40px; right:-40px; width:180px; height:180px; border-radius:50%; background:radial-gradient(circle,rgba(26,107,60,0.08),transparent 70%); }
      .ab-shield-big { width:72px; height:72px; border-radius:20px; margin:0 auto 1.5rem; background:linear-gradient(135deg,#1a6b3c,#e8a84c); display:flex; align-items:center; justify-content:center; color:white; box-shadow:0 8px 28px rgba(26,107,60,0.3); }
      .ab-trust-feats { display:flex; flex-direction:column; gap:0.85rem; }
      .ab-trust-feat  { display:flex; align-items:center; gap:0.75rem; }
      .ab-feat-check  { width:26px; height:26px; border-radius:50%; flex-shrink:0; background:rgba(26,107,60,0.12); color:#1a6b3c; display:flex; align-items:center; justify-content:center; }

      /* CTA */
      .ab-cta-wrap { padding:clamp(4rem,8vw,7rem) clamp(1.25rem,5vw,3rem); background:var(--bg-base); }
      .ab-cta-card { max-width:900px; margin:0 auto; position:relative; overflow:hidden; border-radius:32px; padding:clamp(3rem,6vw,5rem) clamp(2rem,5vw,4rem); text-align:center; background:linear-gradient(135deg,#1a6b3c 0%,#22883f 100%); }
      .ab-cta-card::before { content:''; position:absolute; top:-60px; right:-60px; width:260px; height:260px; border-radius:50%; background:rgba(255,255,255,0.05); }
      .ab-cta-card::after  { content:''; position:absolute; bottom:-80px; left:-40px; width:200px; height:200px; border-radius:50%; background:rgba(232,168,76,0.12); }
      .ab-cta-inner   { position:relative; z-index:1; }
      .ab-cta-actions { display:flex; gap:1rem; justify-content:center; flex-wrap:wrap; }

      /* BUTTONS */
      .ab-btn-primary { font-family:var(--font-body); font-weight:600; font-size:0.9rem; background:#1a6b3c; color:#fff; padding:0.78rem 1.8rem; border-radius:9999px; border:none; cursor:pointer; transition:background 220ms, transform 220ms; box-shadow:0 2px 10px rgba(26,107,60,0.25); display:inline-flex; align-items:center; gap:0.5rem; text-decoration:none; }
      .ab-btn-primary:hover { background:#22883f; transform:translateY(-1px); }
      .ab-btn-ghost   { font-family:var(--font-body); font-weight:600; font-size:0.9rem; background:transparent; color:var(--text-secondary); padding:0.78rem 1.8rem; border-radius:9999px; border:1.5px solid var(--border-default); cursor:pointer; transition:all 220ms; display:inline-flex; align-items:center; gap:0.5rem; text-decoration:none; }
      .ab-btn-ghost:hover   { border-color:#1a6b3c; color:#1a6b3c; }
      .ab-btn-gold    { font-family:var(--font-body); font-weight:700; font-size:0.9rem; background:#e8a84c; color:#0f1c14; padding:0.78rem 1.8rem; border-radius:9999px; border:none; cursor:pointer; transition:all 220ms; display:inline-flex; align-items:center; gap:0.5rem; text-decoration:none; box-shadow:0 4px 16px rgba(232,168,76,0.4); }
      .ab-btn-gold:hover    { background:#f2c06e; transform:translateY(-2px); }
      .ab-btn-white   { font-family:var(--font-body); font-weight:600; font-size:0.9rem; background:transparent; color:#fff; padding:0.78rem 1.8rem; border-radius:9999px; border:1.5px solid rgba(255,255,255,0.4); cursor:pointer; transition:all 220ms; display:inline-flex; align-items:center; gap:0.5rem; text-decoration:none; }
      .ab-btn-white:hover   { background:rgba(255,255,255,0.12); border-color:rgba(255,255,255,0.7); }

      /* RESPONSIVE */
      @media(max-width:960px){
        .ab-hero-grid, .ab-story-grid, .ab-trust-grid { grid-template-columns:1fr; }
        .ab-hero-visual { display:none; }
        .ab-values-grid { grid-template-columns:repeat(2,1fr); }
        .ab-partners-grid { grid-template-columns:repeat(2,1fr); }
        .ab-team-grid { grid-template-columns:repeat(2,1fr); }
        .ab-stats-grid { grid-template-columns:repeat(2,1fr); }
        .ab-trust-grid { gap:2.5rem; }
        .ab-story-accent { right:0; bottom:-1rem; }
      }
      @media(max-width:600px){
        .ab-values-grid { grid-template-columns:1fr; }
        .ab-team-grid   { grid-template-columns:1fr; }
        .ab-partners-grid { grid-template-columns:1fr 1fr; }
        .ab-stats-grid  { grid-template-columns:1fr 1fr; }
        .ab-hero-btns   { flex-direction:column; }
        .ab-cta-actions { flex-direction:column; align-items:center; }
      }
    `;
    const el = document.createElement('style');
    el.setAttribute('data-about', '1');
    el.textContent = css;
    document.head.appendChild(el);
  }, []);
}

/* ═══════════════════════════ PAGE ══════════════════════════════════ */
export default function AboutPage() {
  useStyles();

  return (
    <>
      {/* ══ HERO ═══════════════════════════════════════════════════ */}
      <section className="ab-hero">
        <div className="ab-hero-grid">

          <div>
            <div className="ab-hero-badge">
              <span className="ab-dot" /> About Omonile App
            </div>
            <h1 className="ab-hero-title">
              Ending Land Fraud<br />in{' '}
              <span className="ab-grad">Nigeria</span>
            </h1>
            <p className="ab-hero-desc">
              We&apos;re on a mission to bring trust, transparency, and security to
              Nigeria&apos;s land and property sector — combining technology,
              professional expertise, and blockchain-anchored records.
            </p>
            <div className="ab-hero-btns">
              <Link href="/listings" className="ab-btn-primary">Browse Properties <ArrowRight size={16} /></Link>
              <Link href="/verify"   className="ab-btn-ghost">Verify a Property</Link>
            </div>
          </div>

          <div className="ab-hero-visual" style={{ display:'flex', justifyContent:'center' }} aria-hidden="true">
            <div className="ab-card-stack">
              <div className="ab-fcard ab-fcard-b2">
                <div style={{ height:10, background:'var(--bg-surface-2)', borderRadius:4, marginBottom:8 }} />
                <div style={{ height:8,  background:'var(--bg-surface-2)', borderRadius:4, width:'60%' }} />
              </div>
              <div className="ab-fcard ab-fcard-b1">
                <div style={{ height:10, background:'var(--bg-surface-2)', borderRadius:4, marginBottom:8 }} />
                <div style={{ height:8,  background:'var(--bg-surface-2)', borderRadius:4, width:'50%' }} />
              </div>
              <div className="ab-fcard ab-fcard-main">
                <div className="ab-fcard-icon"><ShieldCheck size={20} /></div>
                <p style={{ fontFamily:'var(--font-display)', fontSize:'0.9rem', fontWeight:700, color:'var(--text-primary)', margin:'0 0 0.25rem' }}>Property Verified</p>
                <p style={{ fontSize:'0.78rem', color:'var(--text-muted)', lineHeight:1.5, margin:0 }}>Block 14, Lekki Phase 1 — Title confirmed &amp; blockchain-secured.</p>
                <div style={{ display:'flex', alignItems:'center', gap:6, marginTop:'0.65rem', fontSize:'0.7rem', fontWeight:600, color:'#27ae60' }}>
                  <span className="ab-dot" /> NDPC Compliant · Blockchain Secured
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS ═══════════════════════════════════════════════════ */}
      <div className="ab-stats">
        <div className="ab-stats-grid">
          {stats.map(({ Icon, num, label }) => (
            <div key={label}>
              <div className="ab-stat-icon"><Icon size={18} /></div>
              <div className="ab-stat-num">{num}</div>
              <div className="ab-stat-lbl">{label}</div>
            </div>
          ))}
        </div>
      </div>

     {/* ══ STORY ═══════════════════════════════════════════════════ */}
      <section className="ab-section">
        <div className="ab-inner">
          <div className="ab-story-grid">

            <div style={{ position: 'relative' }}>
              
              <div className="ab-story-visual" style={{ padding: 0, overflow: 'hidden', background: 'none' }}>
                
                <Image
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80"
                  alt="Nigerian property — Nigeria's Land, Secured"
                  fill
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    borderRadius: 'inherit',
                  }}
                />
                {/* subtle dark overlay so the caption stays readable */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10,26,15,0.55) 0%, transparent 50%)',
                  borderRadius: 'inherit',
                  pointerEvents: 'none',
                }} />
                <span style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  color: '#fff',
                  whiteSpace: 'nowrap',
                  letterSpacing: '0.03em',
                  textShadow: '0 1px 4px rgba(0,0,0,0.4)',
                }}>
                  Nigeria&apos;s Land, Secured
                </span>
              </div>

              <div className="ab-story-accent">
                <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(15,28,20,0.55)' }}>Est.</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, lineHeight: 1.1, color: '#0f1c14' }}>2025</div>
              </div>
            </div>

            <div>
              <span className="ab-label">Our Story</span>
              <h2 className="ab-story-title">Built to Protect Nigerians from Land Fraud</h2>
              <div className="ab-story-body">
                <p>Omonile App was founded in 2025 by <strong>CHRIVON TECH SOLUTIONS LTD</strong> with a single mission — to bring trust and transparency to Nigeria&apos;s land and property sector.</p>
                <p>After witnessing countless Nigerians lose their life savings to land fraud, we built a platform combining technology, professional expertise, and blockchain security to make property verification accessible to everyone.</p>
              </div>
              <blockquote className="ab-quote">
                <Quote size={18} className="ab-quote-icon" />
                <span className="ab-quote-text">Every Nigerian deserves to know the land they&apos;re buying is truly theirs — we built Omonile to make that guarantee a reality.</span>
              </blockquote>
            </div>

          </div>
        </div>
      </section>

      {/* ══ VALUES ══════════════════════════════════════════════════ */}
      <section className="ab-section ab-values-bg">
        <div className="ab-inner">
          <div style={{ maxWidth:560 }}>
            <span className="ab-label">Our Mission &amp; Values</span>
            <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.8rem,3.5vw,2.4rem)', fontWeight:800, color:'var(--text-primary)', letterSpacing:'-0.02em', margin:'0 0 0.75rem' }}>Why We Exist</h2>
            <p style={{ fontSize:'1rem', color:'var(--text-secondary)', lineHeight:1.75, fontStyle:'italic', margin:0 }}>
              To democratise access to verified, secure, and legally-sound property transactions in Nigeria — empowering millions to build generational wealth on land they can trust.
            </p>
          </div>
          <div className="ab-values-grid">
            {values.map(({ Icon, title, body }) => (
              <div key={title} className="ab-val-card">
                <div className="ab-val-icon"><Icon size={20} /></div>
                <p className="ab-val-title">{title}</p>
                <p className="ab-val-body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TEAM ════════════════════════════════════════════════════ */}
      <section className="ab-section">
        <div className="ab-inner">
          <div className="ab-team-hd">
            <span className="ab-label">Our Team</span>
           
            <h2 style={{ color:'var(--text-muted)', maxWidth:800, margin:'0 auto', fontSize:'2rem' }}>Experienced operators, technologists, and strategists united by one mission.</h2>
          </div>
          <div className="ab-team-grid">
            {team.map(({ name, initials, role, bio, gradient, image }) => (
              <div key={name} className="ab-team-card">
                <div className="ab-team-img">
                  {image ? (
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width:600px) 100vw, (max-width:960px) 50vw, 33vw"
                      style={{ objectFit:'cover', objectPosition:'center top' }}
                    />
                  ) : (
                    <div className="ab-avatar" style={{ background:gradient }}>{initials}</div>
                  )}
                  <div className="ab-team-overlay" />
                </div>
                <div className="ab-team-body">
                  <p className="ab-team-name">{name}</p>
                  <p className="ab-team-role">{role}</p>
                  <p className="ab-team-bio">{bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PARTNERS ════════════════════════════════════════════════ */}
      <section className="ab-section ab-partners-bg">
        <div className="ab-inner" style={{ position:'relative', zIndex:1 }}>
          <div style={{ textAlign:'center', marginBottom:'3rem' }}>
            <span className="ab-label ab-label-light">Our Partners</span>
            <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.6rem,3vw,2.2rem)', fontWeight:800, color:'white', margin:0 }}>
              Backed by Institutions You Can Trust
            </h2>
          </div>
          <div className="ab-partners-grid">
            {partners.map(({ Icon, name, desc, badge, pending }) => (
              <div key={name} className="ab-partner-card">
                <div className="ab-partner-icon"><Icon size={22} /></div>
                <p className="ab-partner-name">{name}</p>
                <p className="ab-partner-desc">{desc}</p>
                <span className={`ab-partner-badge${pending ? ' ab-partner-badge-pending' : ''}`}>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* ══ CTA ═════════════════════════════════════════════════════ */}
      <div className="ab-cta-wrap">
        <div className="ab-cta-card">
          <div className="ab-cta-inner">
            <p style={{ fontFamily:'var(--font-display)', fontSize:'0.72rem', fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:'rgba(255,255,255,0.6)', margin:'0 0 1rem' }}>Join the Movement</p>
            <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.9rem,4vw,3rem)', fontWeight:900, color:'white', margin:'0 0 1rem', letterSpacing:'-0.03em' }}>Ready to Secure Your Property?</h2>
            <p style={{ fontSize:'1.05rem', color:'rgba(255,255,255,0.7)', maxWidth:520, margin:'0 auto 2.5rem', lineHeight:1.7 }}>
              Join 8,500+ Nigerians who now buy, sell, and rent with total confidence on Omonile.
            </p>
            <div className="ab-cta-actions">
              <Link href="/signup"   className="ab-btn-gold">Get Started Free <ArrowRight size={16} /></Link>
              <Link href="/listings" className="ab-btn-white">Browse Properties</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}