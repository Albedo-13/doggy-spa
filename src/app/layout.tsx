import './globals.scss';

import type { Metadata } from 'next';
import { Cinzel_Decorative, Cormorant, Tangerine } from 'next/font/google';

import RootContext from './providers';

const cormorantSans = Cormorant({
  variable: '--font-cormorant',
  subsets: ['latin'],
});

const tangerineSans = Tangerine({
  variable: '--font-tangerine',
  subsets: ['latin'],
  weight: ['400'],
});

const cinzelDecorative = Cinzel_Decorative({
  variable: '--font-cinzel-decorative',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Doggy Spa',
  description: 'Book your doggy spa day!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorantSans.variable} ${tangerineSans.variable} ${cinzelDecorative.variable} antialiased`}
        suppressHydrationWarning
      >
        <RootContext>{children}</RootContext>
        <div style={{ height: 200, backgroundColor: 'antiquewhite' }}></div>
      </body>
    </html>
  );
}
