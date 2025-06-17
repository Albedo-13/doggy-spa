import { Metadata } from 'next';

import ContactSpa from '@/components/contact-spa/contact-spa';
import Discount from '@/components/discount/discount';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';

export const metadata: Metadata = {
  title: 'Doggy Spa - Contact Us',
  description: 'For customer service inquiries, please email us with form',
};

export default function ContactUs() {
  return (
    <>
      <Header />
      <Discount />
      <ContactSpa />
      <Footer />
    </>
  );
}
