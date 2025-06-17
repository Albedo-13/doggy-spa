import { Metadata } from 'next';

import BookAppointmentService from '@/components/book-appointment-service/book-appointment-service';
import BookAppointmentWelcome from '@/components/book-appointment-welcome/book-appointment-welcome';
import Discount from '@/components/discount/discount';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';

export const metadata: Metadata = {
  title: 'Doggy Spa - Book Appointment',
  description: 'Book An Appointment With Our Groom Specialist Today!',
};

export default function BookAppointment() {
  return (
    <>
      <Header />
      <Discount />
      <BookAppointmentWelcome />
      <BookAppointmentService />
      <Footer />
    </>
  );
}
