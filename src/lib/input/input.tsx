import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';

import styles from './input.module.scss';

type InputProps = {
  className?: string;
};

export default function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & InputProps) {
  return <input className={clsx(styles.input, className || '')} {...props} />;
}
