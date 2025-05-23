import './globals.scss';

import type { Metadata } from 'next';
import { Cormorant, Tangerine } from 'next/font/google';

const cormorantSans = Cormorant({
  variable: '--font-cormorant',
  subsets: ['latin'],
});

const tangerineSans = Tangerine({
  variable: '--font-tangerine',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Doggy Spa',
  description: 'Book your doggy spa appointment today!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorantSans.variable} ${tangerineSans.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <div style={{ height: 200, backgroundColor: 'antiquewhite' }}></div>
      </body>
    </html>
  );
}
