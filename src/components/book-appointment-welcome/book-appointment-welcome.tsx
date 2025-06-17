import Image from 'next/image';

import styles from './book-appointment-welcome.module.scss';

export default function BookAppointmentWelcome() {
  return (
    <section className={styles.bookAppointmentWelcome}>
      <Image
        src="/book-appointment-welcome-dog.webp"
        alt="dog at the reception of procedures"
        fill={true}
        priority={true}
        className={styles.image}
      />
      <h1 className={styles.title}>
        Book An Appointment With Our Groom Specialist Today!
      </h1>
    </section>
  );
}
