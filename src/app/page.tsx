import Discount from '@/components/discount/discount';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import HomeWelcome from '@/components/home-welcome/home-welcome';
import ModalSignUp from '@/components/modal-sign-up/modal-sign-up';
import Showcase from '@/components/showcase/showcase';
import TrendingSpa from '@/components/trending-spa/trending-spa';

// TODO: лого в хедер

export default function Home() {
  return (
    <>
      <ModalSignUp />
      
      <Header />
      <Discount />
      <HomeWelcome />
      <TrendingSpa />
      <Showcase />
      <Footer />
    </>
  );
}
