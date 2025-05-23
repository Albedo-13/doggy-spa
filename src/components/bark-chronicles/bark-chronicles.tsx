import Image from 'next/image';

import styles from './bark-chronicles.module.scss';

export default function BarkChronicles() {
  return (
    <section className={styles.barkChronicles}>
      <h1 className={styles.title}>The Bark Chronicles</h1>
      <h2 className={styles.subtitle}>Where To Read All About The Bark!</h2>
      <p className={styles.description}>
        Rex, The Dog Who Never Stops Playing ... Ever
      </p>
      <div className={styles.block}>
        <Image
          src="/blog-dog-1.webp"
          alt="rex dog playing with a rope"
          width={610}
          height={550}
          className={styles.image}
          priority
        />
        <p className={styles.text}>
          Sometimes it is difficult to get dogs interested in the toys you buy
          for them. .. Luckily for Rex, everything he sees is a potential toy
          for him! Never let him around your valuables or any socks. He will
          steal them and you will never see them again...
        </p>
      </div>
      <div className={styles.block}>
        <p className={styles.text}>
          One day, we started noticing Rex was ripping apart all of our sheets
          when he was bored except for this blanket over here. Rex decided to
          spare this ugly white blanket that my grandmother gave me from her war
          days. We never threw it away because we felt bad. Seeing Rex sleep on
          this blanket made us happy. At least someone was using this blanket,
          even if we had to rebuy brand new sheets because we have such an
          amazing dog.
          <br />
          <br />
          We love you Rex.
        </p>
        <Image
          src="/blog-dog-2.webp"
          alt="rex dog in a blanket"
          width={610}
          height={550}
          className={styles.image}
          priority
        />
      </div>
    </section>
  );
}
