'use client';

import Button from '@/lib/button/button';
import Input from '@/lib/input/input';

import styles from './modal-sign-up.module.scss';

export default function SignUpForm() {
  const onFormSubmit = () => {};

  return (
    <form className={styles.form}>
      <Input type="text" placeholder="Email" className={styles.input} />
      <Button onClick={onFormSubmit} size="small" className={styles.button}>
        Sign Up
      </Button>
    </form>
  );
}
