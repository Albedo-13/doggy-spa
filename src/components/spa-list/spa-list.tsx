import styles from './spa-list.module.scss';

const SERVICES = [
  {
    name: 'Dog or Cat Full Spa Treatment',
    price: '$549',
    description:
      'Bath, massage, full grooming of hair and nails (comes with a take home bath kit and animal treats).',
  },
  {
    name: 'Dog or Cat Body Massage',
    price: '$149',
    description:
      'Massaging of the paws, thighs, head and of course, behind the ears (comes with animal treats).',
  },
  {
    name: 'Doggy Facial and Fur Cleanse Treatment',
    price: '$269',
    description:
      'Dogs receive a facial with our vegan, cruelty free face products and cleansing of any dirt left hiding in their beautiful fur (comes with a take home face products and animal treats).',
  },
  {
    name: 'Cat Facial and Fur Cleanse Treatment',
    price: '$219',
    description:
      'Cat receives a facial with our vegan, cruelty free face products and cleansing of any dirt left hidding in their fur (comes with a take home face products and animal treats).',
  },
  {
    name: 'Cat and Dog Swim Spa Retreat',
    price: '$999',
    description:
      'Take your animal on an amazing journey retreat in the woods with a scratch proof tent, feline repellant protector and sticks galore (for dogs, of course). There is a sauna that is for the animal owners and a smaller bath for your pets (comes with a cute animal raincoat and boots).',
  },
];

export default function SpaList() {
  return (
    <section className={styles.spaList}>
      <h1 className={styles.title}>Spa Services</h1>
      <hr className={styles.separator} />
      {SERVICES.map((service) => (
        <div key={service.name} className={styles.service}>
          <h2 className={styles.name}>{service.name}</h2>
          <p>{service.price}</p>
          <p className={styles.description}>{service.description}</p>
        </div>
      ))}
      <hr className={styles.separator} />
    </section>
  );
}
