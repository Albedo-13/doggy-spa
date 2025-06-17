import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

import styles from './input.module.scss';

type InputProps = {
  className?: string;
  classNameError?: string;
  classNameWrapper?: string;
  block?: boolean;
  error?: FieldError;
};

export default function Input({
  className,
  classNameError,
  classNameWrapper,
  block = false,
  error,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & InputProps) {
  return (
    <div className={clsx(styles.inputWrapper, classNameWrapper || '')} aria-description='input'>
      <input
        className={clsx(styles.input, block && styles.block, className || '')}
        {...props}
      />
      {error && (
        <div className={clsx(styles.error, classNameError || '')}>
          {error?.message}
        </div>
      )}
    </div>
  );
}
