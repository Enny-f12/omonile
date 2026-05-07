'use client';

import { useEffect, useRef } from 'react';

/* ─── TYPES ──────────────────────────────────────────────────────── */
interface TeamMember {
  name: string;
  initials: string;
  role: string;
  bio: string;
}

interface Partner {
  icon: string;
  name: string;
  description: string;
  badge: string;
  pending?: boolean;
}



/* ─── DATA ───────────────────────────────────────────────────────── */
const team: TeamMember[] = [
  {
    name: 'Christian Ikenna',
    initials: 'CI',
    role: 'CoFounder & CEO, Chrivon Tech Solutions',
    bio: 'Vision-led operator focused on scaling software products for African markets.',
  },
  {
    name: 'B. Eugene Loko',
    initials: 'BL',
    role: 'CoFounder & Principal Data & Product Strategist',
    bio: "A cornerstone of Chrivon's pan-African brain trust with 19 years of experience.",
  },
  {
    name: 'Onaneye Joseph',
    initials: 'OJ',
    role: 'Full-Stack Product Engineer & Tech Entrepreneur',
    bio: 'Full-stack developer focused on building scalable fintech and growth platforms.',
  },
];

const partners: Partner[] = [
  { icon: '💳', name: 'Vetandpay', description: 'Escrow services ensuring secure transactions', badge: 'Active' },
  { icon: '🏛️', name: 'Lagos State Government', description: 'Official state-level partnership for land data', badge: 'Pending', pending: true },
  { icon: '⚖️', name: 'MARC', description: 'Alternative Dispute Resolution services', badge: 'ADR Partner' },
  { icon: '🛡️', name: 'NDPC Compliant', description: 'Nigeria Data Protection Compliance certified', badge: 'Certified' },
];






/* ─── SCROLL ANIMATION HOOK ──────────────────────────────────────── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.style.animationPlayState = 'running'; },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

/* ─── SMALL SHARED COMPONENTS ────────────────────────────────────── */
function SectionLabel({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
      fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700,
      letterSpacing: '0.14em', textTransform: 'uppercase',
      color: light ? 'var(--brand-accent)' : 'var(--brand-primary)',
      marginBottom: '0.85rem',
    }}>
      <span style={{ display: 'block', width: 20, height: 2, background: light ? 'rgba(255,255,255,0.3)' : 'var(--brand-accent)', borderRadius: 2 }} />
      {children}
    </span>
  );
}


/* ─── PAGE ───────────────────────────────────────────────────────── */
export default function AboutPage() {
  /* reveal refs */
  const heroRef    = useReveal();
  const storyVRef  = useReveal();
  const storyCRef  = useReveal();
  const teamRef    = useReveal();
  const partnersRef= useReveal();

  return (
    <>
      {/* ── GLOBAL STYLES ─────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap');

        :root {
          --brand-primary:       #1a6b3c;
          --brand-primary-light: #22883f;
          --brand-accent:        #e8a84c;
          --brand-accent-light:  #f2c06e;
          --brand-success:       #27ae60;
          --bg-base:      #f8f6f1;
          --bg-surface:   #ffffff;
          --bg-surface-2: #f0ede6;
          --bg-surface-3: #e8e4db;
          --bg-overlay:   rgba(255,255,255,0.85);
          --text-primary:   #0f1c14;
          --text-secondary: #3d5045;
          --text-muted:     #7a8f7e;
          --border-subtle:  #ddd8ce;
          --border-default: #c8c2b6;
          --border-strong:  #9e9588;
          --shadow-sm: 0 1px 3px rgba(15,28,20,0.08);
          --shadow-md: 0 4px 16px rgba(15,28,20,0.10);
          --shadow-lg: 0 12px 40px rgba(15,28,20,0.14);
          --radius-sm: 6px; --radius-md: 12px; --radius-lg: 20px;
          --radius-xl: 32px; --radius-full: 9999px;
          --font-display: 'Montserrat', sans-serif;
          --font-body:    'DM Sans', sans-serif;
          --t-fast: 150ms cubic-bezier(0.4,0,0.2,1);
          --t-base: 250ms cubic-bezier(0.4,0,0.2,1);
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { -webkit-font-smoothing: antialiased; scroll-behavior: smooth; }
        body {
          font-family: var(--font-body);
          background: var(--bg-base);
          color: var(--text-primary);
          line-height: 1.6;
        }
        h1,h2,h3,h4,h5,h6 {
          font-family: var(--font-display);
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--text-primary);
        }
        img { display: block; max-width: 100%; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: var(--bg-surface-2); }
        ::-webkit-scrollbar-thumb { background: var(--border-strong); border-radius: 999px; }
        ::selection { background: rgba(26,107,60,0.18); color: var(--text-primary); }

        /* animations */
        @keyframes fadeUp  { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:none; } }
        @keyframes scaleIn { from { opacity:0; transform:scale(0.94); }      to { opacity:1; transform:none; } }
        @keyframes floatY  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes pulseGlow {
          0%,100% { box-shadow: 0 0 0 0 rgba(26,107,60,0.3); }
          50%      { box-shadow: 0 0 0 8px rgba(26,107,60,0); }
        }

        .anim-fade-up  { animation: fadeUp  0.6s ease both; animation-play-state: paused; }
        .anim-scale-in { animation: scaleIn 0.4s ease both; animation-play-state: paused; }
        .d1 { animation-delay: 100ms; }
        .d2 { animation-delay: 200ms; }
        .d3 { animation-delay: 300ms; }
        .d4 { animation-delay: 400ms; }
        .d5 { animation-delay: 500ms; }

        .pulse-dot {
          display: inline-block; width: 8px; height: 8px;
          background: var(--brand-success); border-radius: 50%;
          animation: pulseGlow 2s ease-in-out infinite;
        }
        .gradient-text {
          background: linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-accent) 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        /* section wrapper */
        .section { padding: clamp(4rem,8vw,7rem) clamp(1.25rem,5vw,3rem); }
        .inner   { max-width: 1180px; margin: 0 auto; }

        /* buttons */
        .btn-primary {
          font-family: var(--font-body); font-weight: 600; font-size: .9rem;
          background: var(--brand-primary); color: #fff;
          padding: .75rem 1.75rem; border-radius: var(--radius-full);
          border: none; cursor: pointer; transition: all var(--t-base);
          box-shadow: 0 2px 8px rgba(26,107,60,.25);
        }
        .btn-primary:hover { background: var(--brand-primary-light); transform: translateY(-1px); }
        .btn-ghost {
          font-family: var(--font-body); font-weight: 600; font-size: .9rem;
          background: transparent; color: var(--text-secondary);
          padding: .75rem 1.75rem; border-radius: var(--radius-full);
          border: 1.5px solid var(--border-default); cursor: pointer; transition: all var(--t-base);
        }
        .btn-ghost:hover { border-color: var(--brand-primary); color: var(--brand-primary); background: rgba(26,107,60,.04); }
        .btn-accent {
          font-family: var(--font-body); font-weight: 700; font-size: .9rem;
          background: var(--brand-accent); color: var(--text-primary);
          padding: .75rem 1.75rem; border-radius: var(--radius-full);
          border: none; cursor: pointer; transition: all var(--t-base);
          box-shadow: 0 4px 16px rgba(232,168,76,.35);
        }
        .btn-accent:hover { background: var(--brand-accent-light); transform: translateY(-2px); }
        .btn-outline-white {
          font-family: var(--font-body); font-weight: 600; font-size: .9rem;
          background: transparent; color: #fff;
          padding: .75rem 1.75rem; border-radius: var(--radius-full);
          border: 1.5px solid rgba(255,255,255,.4); cursor: pointer; transition: all var(--t-base);
        }
        .btn-outline-white:hover { background: rgba(255,255,255,.12); border-color: rgba(255,255,255,.7); }

        /* ── HERO ── */
        .hero {
          position: relative; overflow: hidden;
          padding: clamp(5rem,12vw,9rem) clamp(1.25rem,5vw,3rem) clamp(4rem,8vw,7rem);
          background:
            radial-gradient(ellipse 70% 60% at 65% 30%, rgba(26,107,60,.09) 0%, transparent 70%),
            radial-gradient(ellipse 50% 40% at 10% 80%, rgba(232,168,76,.07) 0%, transparent 60%),
            var(--bg-base);
        }
        .hero::after {
          content:''; position:absolute; bottom:0; left:0; right:0; height:3px;
          background: linear-gradient(90deg, transparent 0%, var(--brand-accent) 40%, var(--brand-primary) 100%);
        }
        .hero-deco-ring {
          position:absolute; border-radius:50%; border:1px solid rgba(26,107,60,.1);
        }
        .hero-deco-dot {
          position:absolute; border-radius:50%; background:var(--brand-accent);
          opacity:.15; animation: floatY 6s ease-in-out infinite;
        }
        .hero-inner { max-width:1180px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:3rem; align-items:center; }
        .hero-badge {
          display:inline-flex; align-items:center; gap:.5rem;
          background:rgba(26,107,60,.08); border:1px solid rgba(26,107,60,.15);
          color:var(--brand-primary); font-size:.75rem; font-weight:700;
          letter-spacing:.1em; text-transform:uppercase;
          padding:.35rem .9rem; border-radius:var(--radius-full); margin-bottom:1.25rem;
        }
        .hero-title { font-size:clamp(2.4rem,5vw,3.6rem); font-weight:900; line-height:1.05; margin-bottom:1.25rem; }
        .hero-desc  { font-size:1.05rem; color:var(--text-secondary); line-height:1.75; max-width:480px; margin-bottom:2rem; }
        .hero-actions { display:flex; gap:1rem; flex-wrap:wrap; }

        /* floating card */
        .card-stack { position:relative; width:320px; height:340px; }
        .h-card {
          position:absolute; background:var(--bg-surface);
          border-radius:var(--radius-lg); box-shadow:var(--shadow-lg);
          border:1px solid var(--border-subtle); padding:1.5rem; width:240px;
        }
        .h-card-main { top:0; left:50%; transform:translateX(-50%); z-index:3; animation:floatY 5s ease-in-out infinite; }
        .h-card-b1   { top:20px; left:10px; z-index:2; opacity:.6; transform:rotate(-5deg); }
        .h-card-b2   { top:30px; right:0;   z-index:1; opacity:.35; transform:rotate(6deg); }
        .h-card-icon {
          width:42px; height:42px; border-radius:var(--radius-md); margin-bottom:.85rem;
          background:linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-accent) 100%);
          display:grid; place-items:center;
        }
        .h-card-verified { display:inline-flex; align-items:center; gap:.4rem; font-size:.72rem; font-weight:600; color:var(--brand-success); margin-top:.75rem; }

        /* ── STATS ── */
        .stats-bar { background:var(--brand-primary); padding:2.5rem clamp(1.25rem,5vw,3rem); }
        .stats-inner { max-width:1180px; margin:0 auto; display:grid; grid-template-columns:repeat(4,1fr); gap:1rem; text-align:center; }
        .stat-num { font-family:var(--font-display); font-size:clamp(1.8rem,3.5vw,2.6rem); font-weight:900; color:#fff; line-height:1; margin-bottom:.35rem; }
        .stat-accent { color:var(--brand-accent); }
        .stat-lbl { font-size:.8rem; color:rgba(255,255,255,.65); text-transform:uppercase; letter-spacing:.08em; font-weight:500; }

        /* ── STORY ── */
        .story-grid { display:grid; grid-template-columns:1fr 1fr; gap:clamp(2rem,5vw,5rem); align-items:center; }
        .story-frame {
          border-radius:var(--radius-xl); aspect-ratio:4/3; overflow:hidden;
          background:linear-gradient(135deg, var(--bg-surface-2) 0%, var(--bg-surface-3) 100%);
          display:flex; flex-direction:column; align-items:center; justify-content:center; gap:1rem; color:var(--text-muted);
        }
        .story-accent {
          position:absolute; bottom:-1.5rem; right:-1.5rem;
          background:var(--brand-accent); border-radius:var(--radius-md);
          padding:1rem 1.25rem; box-shadow:var(--shadow-md); min-width:160px;
        }
        .story-title { font-size:clamp(1.8rem,3.5vw,2.5rem); font-weight:800; margin-bottom:1.25rem; }
        .story-body  { font-size:1rem; color:var(--text-secondary); line-height:1.8; }
        .story-body p+p { margin-top:1rem; }
        .story-quote {
          margin-top:2rem; padding:1.25rem 1.5rem;
          background:rgba(26,107,60,.06); border-left:3px solid var(--brand-primary);
          border-radius:0 var(--radius-md) var(--radius-md) 0;
          font-style:italic; font-size:1rem; color:var(--text-secondary); line-height:1.7;
        }

        /* ── MISSION ── */
        .mission-section { background:var(--bg-surface-2); border-top:1px solid var(--border-subtle); border-bottom:1px solid var(--border-subtle); }
        .mission-grid { display:grid; grid-template-columns:1fr 2fr; gap:4rem; align-items:start; }
        .mission-stmt { font-size:clamp(1.1rem,2.2vw,1.4rem); color:var(--text-secondary); line-height:1.7; font-weight:300; font-style:italic; }

        /* ── VALUES ── */
        .values-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:1.25rem; margin-top:2.5rem; }
        .val-card {
          background:var(--bg-surface); border:1px solid var(--border-subtle);
          border-radius:var(--radius-lg); padding:1.75rem 1.5rem;
          transition:all var(--t-base); cursor:default; position:relative; overflow:hidden;
        }
        .val-card::before { content:''; position:absolute; inset:0; opacity:0; background:linear-gradient(135deg,rgba(26,107,60,.04) 0%,rgba(232,168,76,.03) 100%); transition:opacity var(--t-base); }
        .val-card:hover { transform:translateY(-4px); box-shadow:var(--shadow-md); border-color:rgba(26,107,60,.2); }
        .val-card:hover::before { opacity:1; }
        .val-icon { width:48px; height:48px; border-radius:var(--radius-md); display:grid; place-items:center; margin-bottom:1.1rem; background:rgba(26,107,60,.1); font-size:1.4rem; transition:all var(--t-base); }
        .val-card:hover .val-icon { background:var(--brand-primary); }

        /* ── TEAM ── */
        .team-header { text-align:center; margin-bottom:3.5rem; }
        .team-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2rem; }
        .team-card { background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-xl); overflow:hidden; transition:all var(--t-base); }
        .team-card:hover { transform:translateY(-6px); box-shadow:var(--shadow-lg); }
        .team-img { aspect-ratio:1/1; background:linear-gradient(135deg, var(--bg-surface-2) 0%, var(--bg-surface-3) 100%); display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden; }
        .team-overlay { position:absolute; inset:0; background:linear-gradient(to top,rgba(15,28,20,.7) 0%,transparent 50%); opacity:0; transition:opacity var(--t-base); }
        .team-card:hover .team-overlay { opacity:1; }
        .avatar { width:80px; height:80px; border-radius:50%; background:linear-gradient(135deg,var(--brand-primary) 0%,var(--brand-accent) 100%); display:flex; align-items:center; justify-content:center; font-family:var(--font-display); font-size:1.8rem; font-weight:900; color:#fff; }
        .team-body { padding:1.5rem; }
        .team-name { font-size:1.05rem; font-weight:700; margin-bottom:.25rem; }
        .team-role { font-size:.78rem; color:var(--brand-primary); font-weight:600; text-transform:uppercase; letter-spacing:.06em; margin-bottom:.75rem; }
        .team-bio  { font-size:.875rem; color:var(--text-muted); line-height:1.6; }

        /* ── PARTNERS ── */
        .partners-section { background:var(--brand-primary); overflow:hidden; position:relative; }
        .partners-section::before { content:''; position:absolute; inset:0; background:radial-gradient(ellipse 60% 50% at 80% 50%,rgba(232,168,76,.12) 0%,transparent 60%); pointer-events:none; }
        .partners-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:1.25rem; }
        .partner-card { background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.12); border-radius:var(--radius-lg); padding:1.75rem 1.5rem; text-align:center; transition:all var(--t-base); }
        .partner-card:hover { background:rgba(255,255,255,.14); border-color:rgba(255,255,255,.25); transform:translateY(-4px); }
        .partner-icon { width:52px; height:52px; border-radius:var(--radius-md); background:rgba(255,255,255,.12); display:grid; place-items:center; margin:0 auto 1rem; font-size:1.5rem; }
        .partner-badge { display:inline-block; margin-top:.6rem; font-size:.68rem; font-weight:700; letter-spacing:.08em; text-transform:uppercase; padding:.2rem .6rem; border-radius:var(--radius-full); background:rgba(232,168,76,.25); color:var(--brand-accent); border:1px solid rgba(232,168,76,.3); }
        .partner-badge-pending { background:rgba(255,255,255,.1); color:rgba(255,255,255,.5); border-color:rgba(255,255,255,.15); }

        /* ── TRUST ── */
        .trust-section { background:var(--bg-surface); }
        .trust-grid { display:grid; grid-template-columns:1fr 1fr; gap:4rem; align-items:center; }
        .trust-items { display:flex; flex-direction:column; gap:1rem; }
        .trust-item { display:flex; align-items:flex-start; gap:1rem; padding:1rem; border-radius:var(--radius-md); border:1px solid var(--border-subtle); transition:all var(--t-fast); }
        .trust-item:hover { border-color:rgba(26,107,60,.25); background:rgba(26,107,60,.03); }
        .trust-icon { width:36px; height:36px; border-radius:var(--radius-sm); background:rgba(26,107,60,.1); color:var(--brand-primary); display:grid; place-items:center; flex-shrink:0; }
        .trust-visual { background:linear-gradient(135deg,var(--bg-surface-2) 0%,var(--bg-surface-3) 100%); border-radius:var(--radius-xl); padding:2.5rem; border:1px solid var(--border-subtle); position:relative; overflow:hidden; }
        .trust-visual::before { content:''; position:absolute; top:-40px; right:-40px; width:200px; height:200px; border-radius:50%; background:radial-gradient(circle,rgba(26,107,60,.08) 0%,transparent 70%); }
        .trust-feats { display:flex; flex-direction:column; gap:1.25rem; }
        .trust-feat { display:flex; align-items:center; gap:1rem; }
        .feat-check { width:32px; height:32px; border-radius:50%; background:rgba(26,107,60,.12); color:var(--brand-primary); display:grid; place-items:center; flex-shrink:0; }

        /* ── CTA ── */
        .cta-section { background:var(--bg-base); padding:clamp(4rem,8vw,7rem) clamp(1.25rem,5vw,3rem); }
        .cta-card { max-width:900px; margin:0 auto; background:linear-gradient(135deg,var(--brand-primary) 0%,var(--brand-primary-light) 100%); border-radius:var(--radius-xl); padding:clamp(3rem,6vw,5rem) clamp(2rem,5vw,4rem); text-align:center; position:relative; overflow:hidden; }
        .cta-card::before { content:''; position:absolute; top:-60px; right:-60px; width:280px; height:280px; border-radius:50%; background:rgba(255,255,255,.05); }
        .cta-card::after  { content:''; position:absolute; bottom:-80px; left:-40px; width:200px; height:200px; border-radius:50%; background:rgba(232,168,76,.12); }
        .cta-inner { position:relative; z-index:1; }
        .cta-actions { display:flex; gap:1rem; justify-content:center; flex-wrap:wrap; }

        /* ── RESPONSIVE ── */
        @media(max-width:900px){
          .hero-inner,.story-grid,.trust-grid,.mission-grid{grid-template-columns:1fr;}
          .hero-visual-col{display:none;}
          .values-grid{grid-template-columns:repeat(2,1fr);}
          .partners-grid{grid-template-columns:repeat(2,1fr);}
          .team-grid{grid-template-columns:repeat(2,1fr);}
          .stats-inner{grid-template-columns:repeat(2,1fr);}
          .story-accent{right:0;}
          .mission-grid{gap:2rem;}
        }
        @media(max-width:600px){
          .values-grid,.partners-grid,.team-grid{grid-template-columns:1fr;}
          .stats-inner{grid-template-columns:1fr 1fr;}
        }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero">
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          <div className="hero-deco-ring" style={{ width: 600, height: 600, top: -200, right: -150 }} />
          <div className="hero-deco-ring" style={{ width: 400, height: 400, top: -80, right: 0, borderColor: 'rgba(232,168,76,0.08)' }} />
          <div className="hero-deco-dot"  style={{ width: 80,  height: 80,  top: '20%',  right: '12%' }} />
          <div className="hero-deco-dot"  style={{ width: 40,  height: 40,  bottom: '25%', right: '20%', background: 'var(--brand-primary)', animationDelay: '2s' }} />
          <div className="hero-deco-dot"  style={{ width: 20,  height: 20,  top: '50%',  right: '35%', animationDelay: '1s' }} />
        </div>

        <div className="hero-inner">
          {/* content */}
          <div ref={heroRef} className="anim-fade-up">
            <div className="hero-badge">
              <span className="pulse-dot" />
              About Omonile App
            </div>
            <h1 className="hero-title">
              Ending Land Fraud<br />
              in <span className="gradient-text">Nigeria</span>
            </h1>
            <p className="hero-desc">
              We&apos;re on a mission to bring trust, transparency, and security to
              Nigeria&apos;s land and property sector — combining technology,
              professional expertise, and blockchain security.
            </p>
            <div className="hero-actions">
              <button className="btn-primary">Verify a Property</button>
              <button className="btn-ghost">Learn More ↓</button>
            </div>
          </div>

          {/* floating card */}
          <div className="hero-visual-col" style={{ display: 'flex', justifyContent: 'center' }} aria-hidden="true">
            <div className="card-stack">
              <div className="h-card h-card-b2">
                <div style={{ height: 10, background: 'var(--bg-surface-2)', borderRadius: 4, marginBottom: 8 }} />
                <div style={{ height: 8,  background: 'var(--bg-surface-2)', borderRadius: 4, width: '70%' }} />
              </div>
              <div className="h-card h-card-b1">
                <div style={{ height: 10, background: 'var(--bg-surface-2)', borderRadius: 4, marginBottom: 8 }} />
                <div style={{ height: 8,  background: 'var(--bg-surface-2)', borderRadius: 4, width: '60%' }} />
              </div>
              <div className="h-card h-card-main">
                <div className="h-card-icon">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '.9rem', fontWeight: 700, marginBottom: '.25rem' }}>Property Verified</p>
                <p style={{ fontSize: '.78rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Block 14, Lekki Phase 1, Lagos State — Title confirmed &amp; blockchain-secured.
                </p>
                <div className="h-card-verified">
                  <span className="pulse-dot" />
                  NDPC Compliant · Blockchain Secured
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* ── STORY ────────────────────────────────────────────── */}
      <section className="section">
        <div className="inner">
          <div className="story-grid">
            <div ref={storyVRef} className="anim-scale-in" style={{ position: 'relative' }}>
              <div className="story-frame">
                <svg width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1} opacity={0.25}>
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <span style={{ fontSize: '.8rem', fontWeight: 500 }}>Nigeria&apos;s Land, Secured</span>
              </div>
              <div className="story-accent">
                <div style={{ fontSize: '.72rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(15,28,20,.6)' }}>Est.</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, lineHeight: 1.1 }}>2025</div>
              </div>
            </div>

            <div ref={storyCRef} className="anim-fade-up d2">
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="story-title">Built to Protect Nigerians from Land Fraud</h2>
              <div className="story-body">
                <p>Omonile App was founded in 2025 by <strong>CHRIVON TECH SOLUTIONS LTD</strong> with a single mission — to bring trust and transparency to Nigeria&apos;s land and property sector.</p>
                <p>After witnessing countless Nigerians lose their life savings to land fraud, we built a platform that combines technology, professional expertise, and blockchain security to make property verification accessible to everyone.</p>
              </div>
              <blockquote className="story-quote">
                &ldquo;Every Nigerian deserves to know the land they&apos;re buying is truly theirs — we built Omonile to make that guarantee a reality.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

     
      {/* ── TEAM ─────────────────────────────────────────────── */}
      <section className="section">
        <div className="inner">
          <div className="team-header">
            <SectionLabel>Our Team</SectionLabel>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.5rem)', fontWeight: 800, marginBottom: '.75rem' }}>The People Behind Omonile</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: 480, margin: '0 auto' }}>Experienced operators, technologists, and strategists united by one mission.</p>
          </div>
          <div ref={teamRef} className="team-grid anim-fade-up">
            {team.map((m) => (
              <div key={m.name} className="team-card">
                <div className="team-img">
                  <div className="avatar">{m.initials}</div>
                  <div className="team-overlay" />
                </div>
                <div className="team-body">
                  <div className="team-name">{m.name}</div>
                  <div className="team-role">{m.role}</div>
                  <div className="team-bio">{m.bio}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ─────────────────────────────────────────── */}
      <section className="section partners-section">
        <div className="inner" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <SectionLabel light>Our Partners</SectionLabel>
            <h2 ref={partnersRef} className="anim-fade-up" style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 800, color: 'white' }}>
              Backed by Institutions You Can Trust
            </h2>
          </div>
          <div className="partners-grid">
            {partners.map((p) => (
              <div key={p.name} className="partner-card">
                <div className="partner-icon">{p.icon}</div>
                <p style={{ fontSize: '.95rem', fontWeight: 700, color: 'white', marginBottom: '.35rem' }}>{p.name}</p>
                <p style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.55)', marginBottom: '.6rem' }}>{p.description}</p>
                <span className={`partner-badge${p.pending ? ' partner-badge-pending' : ''}`}>{p.badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    
    </>
  );
}