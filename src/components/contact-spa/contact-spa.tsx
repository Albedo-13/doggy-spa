import Link from 'next/link';

import styles from './contact-spa.module.scss';
import ContactSpaForm from './contact-spa-form';

export default function ContactSpa() {
  return (
    <section className={styles.contactSpa}>
      <h1 className={styles.title}>Contact</h1>
      <hr className={styles.separator} />
      <p className={styles.text}>
        For customer service inquiries, please email us at{' '}
        <Link
          href={`mailto:${process.env.NEXT_PUBLIC_EMAILTO}`}
          target="_blank"
          className={styles.email}
        >
          {process.env.NEXT_PUBLIC_EMAILTO}.
        </Link>{' '}
        For spa inquiries, please include your animal’s name for faster service.
        For your protection, please do not include your credit card or banking
        information details in your email.
      </p>
      <ContactSpaForm />
    </section>
  );
}
