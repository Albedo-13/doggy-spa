import BookAppointmentForm from './book-appointment-form/book-appointment-form';
import BookAppointmentMap from './book-appointment-map/book-appointment-map';
import styles from './book-appointment-service.module.scss';

export default function BookAppointmentService() {
  return (
    <div className={styles.bookAppointmentService}>
      <h2 className={styles.title}>Enter your information here</h2>
      <div className={styles.wrapper}>
        <BookAppointmentForm />
        <BookAppointmentMap />
      </div>
    </div>
  );
}
