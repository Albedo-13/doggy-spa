'use client';

import Button from '@/lib/button/button';
import Input from '@/lib/input/input';

import styles from './footer.module.scss';

export default function FooterForm() {
  const onFormSubmit = () => {};

  return (
    <form className={styles.form}>
      <Input type="text" placeholder='Email' className={styles.input} />
      <Button onClick={onFormSubmit}>Submit</Button>
    </form>
  );
}
