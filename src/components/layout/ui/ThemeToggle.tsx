'use client';

import { useTheme } from '@/providers/ThemeProvider';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        borderRadius: 'var(--radius-full)',
        border: '1.5px solid var(--border-default)',
        background: 'var(--bg-surface)',
        color: 'var(--text-secondary)',
        cursor: 'pointer',
        transition: 'all var(--transition-base)',
        flexShrink: 0,
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--brand-primary)';
        (e.currentTarget as HTMLButtonElement).style.color = 'var(--brand-primary)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border-default)';
        (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-secondary)';
      }}
    >
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}