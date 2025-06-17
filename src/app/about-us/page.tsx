import { Metadata } from 'next';

import AboutSpa from '@/components/about-spa/about-spa';
import Discount from '@/components/discount/discount';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';

export const metadata: Metadata = {
  title: 'Doggy Spa - About Us',
  description: 'About Us. Our owners love dogs and cats only',
};

export default function AboutUs() {
  return (
    <>
      <Header />
      <Discount />
      <AboutSpa />
      <Footer />
    </>
  );
}
