'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ui/ThemeToggle';

const NAV_LINKS = [
 { label: 'Browse',          href: '/listings' },
  { label: 'How it Works',      href: '/how-it-works' },
  { label: 'Professionals',          href: '/coming-soon  ' },
  { label: 'Area Guides',             href: '/coming-soon' },
   { label: 'Market Insights', href: '/coming-soon' },
   { label: 'Calculator',          href: '/coming-soon' },

];

export function Navbar() {
  const pathname = usePathname();
  const isHome   = pathname === '/';

  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  const solid     = !isHome || scrolled;
  const textColor = solid ? 'var(--text-secondary)' : 'rgba(255,255,255,0.85)';
  const logoColor = solid ? 'var(--text-primary)'   : '#ffffff';

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: solid ? 'var(--bg-surface)' : 'transparent',
        backdropFilter: solid ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: solid ? 'blur(16px)' : 'none',
        borderBottom: solid ? '1px solid var(--border-subtle)' : '1px solid transparent',
        boxShadow: solid ? '0 1px 8px rgba(15,28,20,0.06)' : 'none',
        transition: 'background 350ms ease, box-shadow 350ms ease, border-color 350ms ease',
      }}>
        <div style={{
          width: '100%', maxWidth: '1280px',
          marginInline: 'auto',
          paddingInline: 'clamp(1rem, 5vw, 3rem)',
          display: 'flex', alignItems: 'center',
          height: '68px', gap: '2rem',
        }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', flexShrink: 0 }}>
            <div style={{
              width: '34px', height: '34px', borderRadius: '9px',
              background: '#1a6b3c',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 2L2 7v9h5v-5h4v5h5V7L9 2z" fill="white" fillOpacity="0.9" />
                <circle cx="9" cy="8.5" r="1.5" fill="#e8a84c" />
              </svg>
            </div>
            <span style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: '1.2rem', letterSpacing: '-0.03em',
              color: logoColor, transition: 'color 350ms ease',
            }}>
              Omonile
              <span style={{ color: '#e8a84c', fontSize: '0.6em', verticalAlign: 'super' }}>.app</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="navbar-desktop" style={{ display: 'flex', alignItems: 'center', gap: '0.15rem', flex: 1, marginLeft: '0.5rem' }}>
            {NAV_LINKS.map(link => (
              <Link
                key={link.label}
                href={link.href}
                className="navbar-link"
                style={{
                  display: 'block', padding: '0.5rem 0.85rem', borderRadius: '9999px',
                  fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.9rem',
                  color: textColor, textDecoration: 'none',
                  transition: 'color 350ms ease, background 150ms ease',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginLeft: 'auto' }}>
            <ThemeToggle />

            <div className="navbar-desktop" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Link href="/coming-soon" className="navbar-btn-outline" style={{ color: solid ? 'var(--text-primary)' : 'white', borderColor: solid ? 'var(--border-default)' : 'rgba(255,255,255,0.35)' }}>
                Log in
              </Link>
              <Link href="/coming-soon" className="navbar-btn-gold">
                Sign Up
              </Link>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="navbar-hamburger"
              aria-label="Toggle menu"
              style={{
                border: solid ? '1px solid var(--border-default)' : '1px solid rgba(255,255,255,0.35)',
                background: solid ? 'var(--bg-surface)' : 'rgba(255,255,255,0.12)',
                color: solid ? 'var(--text-primary)' : 'white',
              }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', top: '68px', left: 0, right: 0, bottom: 0, zIndex: 99,
          background: 'var(--bg-surface)',
          borderTop: '1px solid var(--border-subtle)',
          overflowY: 'auto', padding: '1.5rem',
          animation: 'fadeIn 0.2s ease both',
        }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {NAV_LINKS.map(link => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block', padding: '0.85rem 1rem', borderRadius: '10px',
                  fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1.05rem',
                  color: 'var(--text-primary)', textDecoration: 'none',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
            <Link href="/coming-soon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.8rem', borderRadius: '9999px', border: '1px solid var(--border-default)', background: 'transparent', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)', textDecoration: 'none' }}>
              Log in
            </Link>
            <Link href="/coming-soon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.8rem', borderRadius: '9999px', border: '1px solid #e8a84c', background: '#e8a84c', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.9rem', color: '#0d3d22', textDecoration: 'none' }}>
              Sign Up Free
            </Link>
          </div>
        </div>
      )}

      <style>{`
        .navbar-desktop { display: flex; }
        .navbar-hamburger {
          display: none; width: 40px; height: 40px;
          align-items: center; justify-content: center;
          border-radius: 9999px; cursor: pointer; transition: all 350ms ease;
        }
        .navbar-link:hover { background: rgba(26,107,60,0.07); }
        .navbar-btn-outline {
          padding: 0.55rem 1.25rem; border-radius: 9999px;
          border: 1px solid; background: transparent;
          font-family: var(--font-body); font-weight: 600; font-size: 0.875rem;
          text-decoration: none; display: inline-block; transition: all 200ms ease;
        }
        .navbar-btn-outline:hover { border-color: #1a6b3c !important; color: #1a6b3c !important; }
        .navbar-btn-gold {
          padding: 0.55rem 1.25rem; border-radius: 9999px;
          border: 1px solid #e8a84c; background: #e8a84c;
          font-family: var(--font-body); font-weight: 700; font-size: 0.875rem;
          color: #0d3d22; text-decoration: none; display: inline-block;
          box-shadow: 0 2px 10px rgba(232,168,76,0.30); transition: all 150ms ease;
        }
        .navbar-btn-gold:hover { background: #f2c06e; border-color: #f2c06e; }

        @media (max-width: 768px) {
          .navbar-desktop   { display: none !important; }
          .navbar-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}