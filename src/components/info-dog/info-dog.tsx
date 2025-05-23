import styles from './info-dog.module.scss';
import InfoDogForm from './info-dog-form';

type InfoDogProps = {
  id: string;
};

export default function InfoDog({ id }: InfoDogProps) {
  return (
    <section className={styles.infoDog}>
      <h1 className={styles.title}>Info dog</h1>
      <InfoDogForm />
      {!id ? 'воспользуйтесь поиском' : `нашли ${id}`}
      
    </section>
  );
}
