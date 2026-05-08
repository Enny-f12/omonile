'use client';

import Link from 'next/link';
import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

const FOOTER_LINKS = {
  Explore: [
    { label: 'Buy Land',       href: '/' },
    { label: 'Buy Property',   href: '/' },
    { label: 'Shortlet',       href: '/' },
    { label: 'Rentals',        href: '/' },
    { label: 'Yearly Rentals', href: '/' },
  ],
  Professionals: [
    { label: 'For Lawyers',           href: '/' },
    { label: 'For Surveyors',         href: '/' },
    { label: 'For Facility Managers', href: '/' },
    { label: 'For Community Leaders', href: '/' },
    { label: 'For Cleaning Partners', href: '/' },
  ],
  Company: [
    { label: 'About us',    href: '/about' },
    { label: 'How it works',href: '/how-it-works' },
     { label: 'Area Guides',href: '/' },
      { label: 'Market Insights',href: '/' },
       { label: 'Referral',href: '/' },
  ],
  Support: [
    { label: 'Help Center',      href: '/' },
    { label: 'Contact Us',       href: '/' },
    { label: 'Terms of service', href: '/' },
    { label: 'Privacy Policy',   href: '/' },
    { label: 'FAQ',              href: '' },
  ],
};

function SocialIcon({ label, href, children }: { label: string; href: string; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '38px', height: '38px', borderRadius: '50%',
        border: `1.5px solid ${hovered ? '#1a6b3c' : 'var(--border-default)'}`,
        background: hovered ? '#1a6b3c' : 'transparent',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: hovered ? 'white' : 'var(--text-muted)',
        transition: 'all 150ms ease',
        textDecoration: 'none', flexShrink: 0,
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
        {children}
      </svg>
    </a>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <li>
      <Link
        href={href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          color: hovered ? '#1a6b3c' : 'var(--text-muted)',
          fontSize: '0.875rem', fontWeight: 400,
          textDecoration: 'none',
          transition: 'color 150ms ease',
          display: 'inline-block',
        }}
      >
        {label}
      </Link>
    </li>
  );
}

export function Footer() {
  const [email, setEmail]       = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setEmail(''); }
  };

  return (
    <footer style={{
      background: 'var(--bg-surface)',
      borderTop: '1px solid var(--border-subtle)',
    }}>
      {/* ── Main content ── */}
      <div style={{
        width: '100%',
        maxWidth: '1280px',
        marginInline: 'auto',
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 5vw, 3rem) 0',
      }}>
        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(200px, 1.5fr) repeat(4, minmax(100px, 1fr))',
          gap: 'clamp(1.5rem, 3vw, 2.5rem)',
          marginBottom: '3rem',
        }} className="footer-grid">

          {/* Brand + newsletter */}
          <div>
            {/* Logo */}
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', marginBottom: '1rem' }}>
              <div style={{
                width: '34px', height: '34px', borderRadius: '8px',
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
                fontSize: '1.2rem', letterSpacing: '-0.03em', color: 'var(--text-primary)',
              }}>
                Omonile<span style={{ color: '#e8a84c', fontSize: '0.58em', verticalAlign: 'super' }}>.app</span>
              </span>
            </Link>

            <p style={{
              color: 'var(--text-muted)', fontSize: '0.875rem',
              lineHeight: 1.7, marginBottom: '1.75rem', maxWidth: '230px',
            }}>
              Nigeria&apos;s first complete verified property ecosystem. Buy, rent, and verify with confidence.
            </p>

            {/* Newsletter */}
            <p style={{
              fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em',
              textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '0.6rem',
            }}>
              Stay updated
            </p>
            <form onSubmit={handleSubmit} style={{ position: 'relative', maxWidth: '270px' }}>
              <Mail size={15} style={{ position: 'absolute', left: '13px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }} />
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                style={{
                  width: '100%',
                  padding: '0 48px 0 38px',
                  height: '42px',
                  borderRadius: '9999px',
                  border: '1.5px solid var(--border-default)',
                  background: 'var(--bg-surface-2)',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  outline: 'none',
                  transition: 'border-color 150ms ease',
                }}
                onFocus={e => (e.currentTarget.style.borderColor = '#1a6b3c')}
                onBlur={e => (e.currentTarget.style.borderColor = 'var(--border-default)')}
              />
              <button
                type="submit"
                aria-label="Subscribe"
                style={{
                  position: 'absolute', right: '6px', top: '50%',
                  transform: 'translateY(-50%)',
                  width: '30px', height: '30px', borderRadius: '50%',
                  background: '#1a6b3c', border: 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <Send size={13} color="white" />
              </button>
            </form>
            {submitted && (
              <p style={{ marginTop: '0.5rem', fontSize: '0.78rem', color: '#27ae60' }}>
                ✓ You&apos;re on the list!
              </p>
            )}
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 style={{
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: '0.9rem', color: 'var(--text-primary)',
                marginBottom: '1.1rem', letterSpacing: '-0.01em',
              }}>
                {title}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {links.map(link => (
                  <FooterLink key={link.label} href={link.href} label={link.label} />
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'center', justifyContent: 'space-between',
          gap: '1rem',
          paddingTop: '1.25rem', paddingBottom: '1.75rem',
          borderTop: '1px solid var(--border-subtle)',
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', margin: 0 }}>
            ©{new Date().getFullYear()} CHRIVON TECH SOLUTIONS LTD. All rights reserved. Made with ❤️ in Nigeria
          </p>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <SocialIcon label="Facebook" href="#">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </SocialIcon>
            <SocialIcon label="LinkedIn" href="#">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </SocialIcon>
            <SocialIcon label="Twitter / X" href="#">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25z" />
            </SocialIcon>
            <SocialIcon label="YouTube" href="#">
              <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" style={{ opacity: 0.25 }} />
            </SocialIcon>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}