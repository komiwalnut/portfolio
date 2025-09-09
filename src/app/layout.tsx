import React, { Suspense } from 'react';
import './globals.css';
import { Analytics } from "@vercel/analytics/react";
import ScrollProgress from '@/components/features/ScrollProgress';
import FloatingElements from '@/components/features/FloatingElements';
import KeyboardHint from '@/components/features/KeyboardHint';
import ThemeProvider from '@/components/features/ThemeProvider';
import ColorThemeProvider from '@/components/features/ColorThemeProvider';
import SecretGamingProfiles from '@/components/features/SecretGamingProfiles';
import ColorPicker from '@/components/features/ColorPicker';
import { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
};

export const metadata: Metadata = {
  title: 'komiwalnut',
  description: 'Python Developer',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'komiwalnut',
    description: 'Python Developer',
    url: 'https://www.komiwalnut.dev',
    siteName: 'komiwalnut',
    images: [
      {
        url: '/favicon.png',
        width: 1200,
        height: 630,
        alt: 'komiwalnut',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'komiwalnut',
    description: 'Python Developer',
    images: ['/favicon.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="overflow-x-hidden">
        <ThemeProvider />
        <Suspense fallback={null}>
          <ColorThemeProvider />
        </Suspense>
        
        <ScrollProgress />
        <FloatingElements />
        <SecretGamingProfiles />
        <KeyboardHint />
        <Suspense fallback={null}>
          <ColorPicker />
        </Suspense>
        
        <main className="overflow-x-hidden relative w-full">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
