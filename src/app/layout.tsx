import './globals.scss';

import type { Metadata } from 'next';

import { cinzelDecorative, cormorantSans, tangerineSans } from './fonts';
import RootContext from './providers';

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
      </body>
    </html>
  );
}
