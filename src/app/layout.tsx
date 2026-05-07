import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Omonile — Nigeria\'s Verified Property Marketplace',
  description: 'Buy, rent, and verify property in Nigeria with AI, lawyers, surveyors, and escrow protection. End land fraud today.',
  keywords: ['Nigeria property', 'real estate Lagos', 'verified land', 'property marketplace', 'Omonile'],
  openGraph: {
    title: 'Omonile — Nigeria\'s Verified Property Marketplace',
    description: 'End land fraud. Buy, rent, and verify with confidence.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <Navbar/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}