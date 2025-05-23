import Discount from '@/components/discount/discount';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import InfoDog from '@/components/info-dog/info-dog';

type DogProps = {
  params: Promise<{ id: string }>;
};

export default async function Dog({ params }: DogProps) {
  const { id } = await params;
  console.log(id);

  return (
    <>
      <Header />
      <Discount />
      <InfoDog id={id} />
      <Footer />
    </>
  );
}
