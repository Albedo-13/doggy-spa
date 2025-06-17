import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

import styles from './input-area.module.scss';

type InputAreaProps = {
  className?: string;
  classNameError?: string;
  classNameWrapper?: string;
  block?: boolean;
  error?: FieldError;
};

export default function InputArea({
  className,
  classNameError,
  classNameWrapper,
  block = false,
  error,
  ...props
}: InputHTMLAttributes<HTMLTextAreaElement> & InputAreaProps) {
  return (
    <div className={classNameWrapper} aria-description="textarea">
      <textarea
        className={clsx(
          styles.inputArea,
          block && styles.block,
          className || ''
        )}
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
