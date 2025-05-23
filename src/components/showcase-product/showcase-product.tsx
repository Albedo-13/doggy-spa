import Image from 'next/image';

import styles from './showcase-product.module.scss';
import ShowcaseProductButton from './showcase-product-button';

type ShowcaseProductProps = {
  title: string;
  items: {
    image: string;
    description: string;
    seller: string;
    price: string;
  }[];
  imageClassName?: string;
  buttonText: string;
};

export default function ShowcaseProduct({
  title,
  items,
  imageClassName,
  buttonText,
}: ShowcaseProductProps) {
  return (
    <section>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.wrapper}>
        {items.map((item) => (
          <div key={item.image} className={styles.item}>
            <Image
              src={item.image}
              alt={item.description}
              width={420}
              height={420}
              className={imageClassName}
            />
            <div className={styles.itemInfo}>
              <p className={styles.description}>{item.description}</p>
              <p className={styles.seller}>{item.seller}</p>
              <p className={styles.price}>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <ShowcaseProductButton>{buttonText}</ShowcaseProductButton>
    </section>
  );
}
