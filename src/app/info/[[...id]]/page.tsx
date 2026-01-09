import { Metadata } from 'next';

import Discount from '@/components/discount/discount';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import InfoDog from '@/components/info-dog/info-dog';

export const metadata: Metadata = {
  title: 'Doggy Spa - Info',
  description: 'Search dog by name',
};

type InfoProps = {
  params: Promise<{ id: string }>;
};

export default async function Info({ params }: InfoProps) {
  const { id } = await params;

  return (
    <>
      <Header />
      <Discount />
      <InfoDog id={id[0]} />
      <Footer />
    </>
  );
}
