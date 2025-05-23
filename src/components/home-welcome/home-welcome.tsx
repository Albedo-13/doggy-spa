import Image from 'next/image';

import styles from './home-welcome.module.scss';
import HomeWelcomeButton from './home-welcome-button';

export default function HomeWelcome() {
  return (
    <section className={styles.homeWelcome}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1 className={styles.title}>Your dog running amok in the dirt?</h1>
          <h2 className={styles.subtitle}>
            Book your doggy
            <br /> spa day!
          </h2>
          <HomeWelcomeButton />
        </div>
        <Image
          src="/home-welcome-dog.webp"
          alt="Happy washed dog stares at user"
          width={900}
          height={750}
          className={styles.image}
          priority
        />
      </div>
    </section>
  );
}
