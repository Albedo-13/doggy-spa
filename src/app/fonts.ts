import { Cinzel_Decorative, Cormorant, Tangerine } from 'next/font/google';

export const cormorantSans = Cormorant({
  variable: '--font-cormorant',
  subsets: ['latin'],
});

export const tangerineSans = Tangerine({
  variable: '--font-tangerine',
  subsets: ['latin'],
  weight: ['400'],
});

export const cinzelDecorative = Cinzel_Decorative({
  variable: '--font-cinzel-decorative',
  subsets: ['latin'],
  weight: ['400'],
});
