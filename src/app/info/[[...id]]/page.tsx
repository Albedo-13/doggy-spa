import Discount from '@/components/discount/discount';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import InfoDog from '@/components/info-dog/info-dog';

type InfoProps = {
  params: Promise<{ id: string }>;
};

export default async function Info({ params }: InfoProps) {
  const { id } = await params;

  return (
    <>
      <Header />
      <Discount />
      <InfoDog id={id} />
      <Footer />
    </>
  );
}
