import { ReactNode } from 'react';

import Button from '@/lib/button/button';

import styles from './showcase-product.module.scss';

type ShowcaseProductButtonProps = {
  children: ReactNode;
};

export default function ShowcaseProductButton({
  children,
}: ShowcaseProductButtonProps) {
  return (
    <Button size="large" className={styles.button}>
      {children}
    </Button>
  );
}
