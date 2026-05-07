'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ThemeToggle } from './ui/ThemeToggle';

const NAV_LINKS = [
  {
    label: 'How It Works',
    href: '/how-it-works',
    children: [
      { label: 'For Buyers',     href: '/how-it-works' },
      { label: 'For Sellers', href: '/how-it-works' },
      { label: 'For Renters', href: '/how-it-works' },
      { label: 'For Professionals',    href: '/how-it-works' },
    ],
  },
  { label: 'Verify a Property', href: '/verify' },
  { label: 'How-it-Works', href: '/how-it-works' },
  { label: 'Listings',     href: '/listings' },
  { label: 'About',             href: '/about' },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome   = pathname === '/';

  const [scrolled, setScrolled]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  // On non-home pages always behave as "scrolled" (solid)
  const solid = !isHome || scrolled;

  const textColor   = solid ? 'var(--text-secondary)' : 'rgba(255,255,255,0.85)';
  const logoColor   = solid ? 'var(--text-primary)'   : '#ffffff';

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
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.15rem', flex: 1, marginLeft: '0.5rem' }} className="hidden-mobile">
            {NAV_LINKS.map(link => (
              <div key={link.label} style={{ position: 'relative' }}>
                {link.children ? (
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    onBlur={() => setTimeout(() => setOpenDropdown(null), 150)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '4px',
                      padding: '0.5rem 0.85rem', borderRadius: '9999px',
                      border: 'none', background: 'transparent',
                      fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.9rem',
                      color: textColor, cursor: 'pointer',
                      transition: 'color 350ms ease, background 150ms ease',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = solid ? 'rgba(26,107,60,0.07)' : 'rgba(255,255,255,0.12)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
                  >
                    {link.label}
                    <ChevronDown size={14} style={{ transition: 'transform 150ms ease', transform: openDropdown === link.label ? 'rotate(180deg)' : 'rotate(0)' }} />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    style={{
                      display: 'block', padding: '0.5rem 0.85rem', borderRadius: '9999px',
                      fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.9rem',
                      color: textColor, textDecoration: 'none',
                      transition: 'color 350ms ease, background 150ms ease',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = solid ? 'rgba(26,107,60,0.07)' : 'rgba(255,255,255,0.12)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Dropdown */}
                {link.children && openDropdown === link.label && (
                  <div style={{
                    position: 'absolute', top: 'calc(100% + 8px)', left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '14px',
                    boxShadow: '0 8px 32px rgba(15,28,20,0.12)',
                    minWidth: '210px', padding: '0.5rem',
                    animation: 'scaleIn 0.2s ease both',
                  }}>
                    {link.children.map(child => (
                      <Link
                        key={child.label}
                        href={child.href}
                        style={{
                          display: 'block', padding: '0.6rem 0.85rem', borderRadius: '8px',
                          fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.875rem',
                          color: 'var(--text-secondary)', textDecoration: 'none',
                          transition: 'all 150ms ease',
                        }}
                        onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(26,107,60,0.07)'; (e.currentTarget as HTMLAnchorElement).style.color = '#1a6b3c'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)'; }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginLeft: 'auto' }}>
            <ThemeToggle />

            <div className="hidden-mobile" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {/* Log in */}
              <Link
                href="/login"
                style={{
                  padding: '0.55rem 1.25rem', borderRadius: '9999px',
                  border: solid ? '1px solid var(--border-default)' : '1px solid rgba(255,255,255,0.35)',
                  background: 'transparent',
                  fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.875rem',
                  color: solid ? 'var(--text-primary)' : 'white',
                  textDecoration: 'none', display: 'inline-block',
                  transition: 'all 200ms ease',
                }}
                onMouseEnter={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.borderColor = '#1a6b3c'; a.style.color = '#1a6b3c'; }}
                onMouseLeave={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.borderColor = solid ? 'var(--border-default)' : 'rgba(255,255,255,0.35)'; a.style.color = solid ? 'var(--text-primary)' : 'white'; }}
              >
                Log in
              </Link>

              {/* Sign Up */}
              <Link
                href="/signup"
                style={{
                  padding: '0.55rem 1.25rem', borderRadius: '9999px',
                  border: '1px solid #e8a84c', background: '#e8a84c',
                  fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.875rem',
                  color: '#0d3d22', textDecoration: 'none', display: 'inline-block',
                  boxShadow: '0 2px 10px rgba(232,168,76,0.30)',
                  transition: 'all 150ms ease',
                }}
                onMouseEnter={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = '#f2c06e'; a.style.borderColor = '#f2c06e'; }}
                onMouseLeave={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = '#e8a84c'; a.style.borderColor = '#e8a84c'; }}
              >
                Sign Up
              </Link>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="show-mobile"
              aria-label="Toggle menu"
              style={{
                display: 'none', width: '40px', height: '40px',
                alignItems: 'center', justifyContent: 'center',
                borderRadius: '9999px',
                border: solid ? '1px solid var(--border-default)' : '1px solid rgba(255,255,255,0.35)',
                background: solid ? 'var(--bg-surface)' : 'rgba(255,255,255,0.12)',
                color: solid ? 'var(--text-primary)' : 'white',
                cursor: 'pointer', transition: 'all 350ms ease',
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
              <div key={link.label}>
                <Link href={link.href || '#'} onClick={() => setMobileOpen(false)} style={{ display: 'block', padding: '0.85rem 1rem', borderRadius: '10px', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1.05rem', color: 'var(--text-primary)', textDecoration: 'none' }}>
                  {link.label}
                </Link>
                {link.children && (
                  <div style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
                    {link.children.map(child => (
                      <Link key={child.label} href={child.href} onClick={() => setMobileOpen(false)} style={{ display: 'block', padding: '0.65rem 1rem', borderRadius: '8px', fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-secondary)', textDecoration: 'none' }}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
            <Link href="/login" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.8rem', borderRadius: '9999px', border: '1px solid var(--border-default)', background: 'transparent', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)', textDecoration: 'none' }}>
              Log in
            </Link>
            <Link href="/signup" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.8rem', borderRadius: '9999px', border: '1px solid #e8a84c', background: '#e8a84c', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.9rem', color: '#0d3d22', textDecoration: 'none' }}>
              Sign Up Free
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile   { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}