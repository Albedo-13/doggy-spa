import BarkChronicles from '@/components/bark-chronicles/bark-chronicles';
import Discount from '@/components/discount/discount';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';

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
