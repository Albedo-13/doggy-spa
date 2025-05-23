import Discount from '@/components/discount/discount';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import HomeWelcome from '@/components/home-welcome/home-welcome';
import Showcase from '@/components/showcase/showcase';
import TrendingSpa from '@/components/trending-spa/trending-spa';

export default function Home() {
  return (
    <>
      <Header />
      <Discount />
      <HomeWelcome />
      <TrendingSpa />
      <Showcase />
      <Footer />
    </>
  );
}
