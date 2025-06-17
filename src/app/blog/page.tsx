import { Metadata } from 'next';

import BarkChronicles from '@/components/bark-chronicles/bark-chronicles';
import Discount from '@/components/discount/discount';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';

export const metadata: Metadata = {
  title: 'Doggy Spa - Blog',
  description: 'The Bark Chronicles. Where To Read All About The Bark!',
};

export default function Blog() {
  return (
    <>
      <Header />
      <Discount />
      <BarkChronicles />
      <Footer />
    </>
  );
}
