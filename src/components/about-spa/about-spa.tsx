import Image from 'next/image';

import styles from './about-spa.module.scss';

export default function AboutSpa() {
  return (
    <section className={styles.aboutSpa}>
      <h1 className={styles.title}>About Us</h1>
      <h2 className={styles.subtitle}>Our Owners Love Dogs and Cats Only</h2>
      <div className={styles.block}>
        <Image
          src="/about-dog-1.webp"
          alt="comb the dog"
          width={460}
          height={460}
          className={styles.image}
          priority
        />
        <p className={styles.text}>
          Here at Luxe Animal Spa we aim to provide you with the best service
          possible for both you and your pet! We pride ourselves in offering a
          true first-class experience.
          <br />
          <br />
          Our grooming equipment is top quality. We use only the most trusted
          brands in the industry which provides a beautiful, calming, and safe
          salon experience for your pets.
        </p>
      </div>
      <div className={styles.block}>
        <p className={styles.text}>
          All animals deserve a special spa pampering treatment, but mostly cats
          and dogs. Luxe Animal Spa offers the best spa treatments to leave your
          pets feeling amazing!
          <br />
          <br />
          We are the first in Canada to offer spa treatments for cats and dogs.
          This is unheard of in many places so come, bring your amazing cat or
          dog and let us make their spa experience something they will never
          forget!
        </p>
        <Image
          src="/about-cat-2.webp"
          alt="wash the cat"
          width={460}
          height={460}
          className={styles.image}
          priority
        />
      </div>
    </section>
  );
}
