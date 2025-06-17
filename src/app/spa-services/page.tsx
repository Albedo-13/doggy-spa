import { Metadata } from 'next';

import Discount from '@/components/discount/discount';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import SpaList from '@/components/spa-list/spa-list';

export const metadata: Metadata = {
  title: 'Doggy Spa - Spa Services',
  description: 'Animals spa services',
};

export default function SpaServices() {
  return (
    <>
      <Header />
      <Discount />
      <SpaList />
      <Footer />
    </>
  );
}
