'use client';

import Image from 'next/image';

import { useModal } from '@/hooks/use-modal';

import styles from './modal-sign-up.module.scss';
import SignUpForm from './modal-sign-up-form';

export default function ModalSignUp() {
  const { isModalOpen: isModalSignUpOpen, closeModal: closeModalSignUp } =
    useModal(true);

  return (
    isModalSignUpOpen && (
      <section className={styles.modalSignUp}>
        <div className={styles.cover} onClick={closeModalSignUp}></div>

        <div className={styles.modal}>
          <div
            className={styles.close}
            onClick={closeModalSignUp}
            aria-description="close modal"
          >
            ✖
          </div>
          <div className={styles.content}>
            <div className={styles.left}>
              <h2 className={styles.title}>Sign Up to Bark Newsletter</h2>
              <p className={styles.subtitle}>
                Get 10% Off Your First Spa Treatment
              </p>
              <SignUpForm closeModal={closeModalSignUp} />
              <p className={styles.note}>
                *By completing this form you are signing up to receive our
                emails and can unsubscribe at any time.
              </p>
            </div>
            <Image
              src="/sign-up-animals.webp"
              alt="animals relaxing"
              width={450}
              height={450}
              className={styles.image}
              priority
            />
          </div>
        </div>
      </section>
    )
  );
}
