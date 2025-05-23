import ShowcaseProduct from '../showcase-product/showcase-product';
import styles from './showcase.module.scss';

const COLLARS = [
  {
    image: '/showcase/collar-1.webp',
    description: 'Leather Dog Collars with Gold Name Tag',
    seller: 'Luxe Animal Spa',
    price: 'CA $325.00',
  },
  {
    image: '/showcase/collar-2.webp',
    description: 'Pink & White Diamond Encrusted Dog Collar',
    seller: 'Luxe Animal Spa',
    price: 'CA $1225.00',
  },
  {
    image: '/showcase/collar-3.webp',
    description: 'Large 3000kt Silver Diamond Collar',
    seller: 'Luxe Animal Spa',
    price: 'CA $1500.00',
  },
];

const CARRYONS = [
  {
    image: '/showcase/carry-on-1.webp',
    description: 'Leather Dog Collars with Gold Name Tag',
    seller: 'Luxe Animal Spa',
    price: 'CA $325.00',
  },
  {
    image: '/showcase/carry-on-2.webp',
    description: 'Pink & White Diamond Encrusted Dog Collar',
    seller: 'Luxe Animal Spa',
    price: 'CA $1225.00',
  },
  {
    image: '/showcase/carry-on-3.webp',
    description: 'Large 3000kt Silver Diamond Collar',
    seller: 'Luxe Animal Spa',
    price: 'CA $1500.00',
  },
];

export default function Showcase() {
  return (
    <section className={styles.showcase}>
      <ShowcaseProduct
        title="Dog Collars"
        items={COLLARS}
        imageClassName={styles.imageCollars}
        buttonText="See More Dog Collars"
      />
      <ShowcaseProduct
        title="Animal Carry Ons"
        items={CARRYONS}
        imageClassName={styles.imageCarryOns}
        buttonText="See More Carry Ons"
      />
    </section>
  );
}
