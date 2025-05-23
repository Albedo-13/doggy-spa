import Image from 'next/image';

import TrendingSpaButton from './treding-spa-button';
import styles from './trending-spa.module.scss';

export default function TrendingSpa() {
  return (
    <section className={styles.trendingSpa}>
      <h2 className={styles.title}>Trending Spa Package</h2>
      <div className={styles.wrapper}>
        <Image
          src="/trending-dog.webp"
          alt="trending doggy spa package"
          width={550}
          height={550}
          className={styles.image}
          priority
        />
        <div className={styles.content}>
          <h3 className={styles.name}>
            Doggy Facial and Fur <br /> Cleanse Treatment
            <br />
            <span>$269</span>
          </h3>
          <p className={styles.description}>
            Dogs receive a facial with our vegan, cruelty free face products and
            cleansing of any dirt left hiding in their beautiful fur (comes with
            a take home face products and animal treats).
          </p>
          <TrendingSpaButton />
        </div>
      </div>
    </section>
  );
}
