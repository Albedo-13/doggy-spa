'use client';

import { UseFormReset } from 'react-hook-form';

import Button from '@/lib/button/button';
import { BookAppointmentFormInputs } from '@/types/forms';

import styles from './modal-confirmation.module.scss';

type ModalConfirmationProps = {
  isModalOpen: boolean;
  closeModal: VoidFunction;
  data: BookAppointmentFormInputs;
  reset: UseFormReset<BookAppointmentFormInputs>;
};

export default function ModalConfirmation({
  isModalOpen,
  closeModal,
  data,
  reset,
}: ModalConfirmationProps) {
  const onBookClick = () => {
    localStorage.setItem('doggy-spa-booked-appointment', JSON.stringify(data));
    closeModal();
    reset();
  };

  return (
    isModalOpen && (
      <section className={styles.modalConfirmation}>
        <div className={styles.cover} onClick={closeModal}></div>

        <div className={styles.modal}>
          <div
            className={styles.close}
            onClick={closeModal}
            aria-label="close modal"
          >
            ✖
          </div>
          <h3 className={styles.title}>
            Please check your data before booking
          </h3>
          <div className={styles.content}>
            <p>
              Name: {data.firstName} {data.lastName}
            </p>
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
            <p>
              Date:{' '}
              {data.calendar instanceof Date
                ? data.calendar.toLocaleDateString()
                : data.calendar}
            </p>
            <p>Time: {data.timeslots.join(', ')}</p>
            <p>Card number: {data.cardNumber}</p>
            <p>Expiry date: {data.expiryDate}</p>
            <p>cvv: {data.cvv}</p>
            <p>Card name: {data.cardName}</p>
            {data.comment && <p>Message: {data.comment}</p>}
          </div>
          <Button
            className={styles.button}
            type="button"
            size="small"
            onClick={onBookClick}
          >
            Book now
          </Button>
        </div>
      </section>
    )
  );
}
