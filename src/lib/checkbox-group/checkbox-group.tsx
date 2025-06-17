import clsx from 'clsx';
import { ChangeEvent } from 'react';
import { FieldError, Merge } from 'react-hook-form';

import styles from './checkbox-group.module.scss';

type CheckboxGroupProps = {
  options: Array<{ key: string; value: string }>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  className?: string;
  classNameError?: string;
  classNameWrapper?: string;
  block?: boolean;
  error?: Merge<FieldError, (FieldError | undefined)[]> | undefined;
};

export default function CheckboxGroup({
  options = [],
  onChange,
  label,
  className,
  classNameError,
  classNameWrapper,
  block = false,
  error,
  ...props
}: CheckboxGroupProps) {
  return (
    <div className={classNameWrapper || ''} aria-description="checkbox-group">
      {label && <h3 className={styles.title}>{label}</h3>}
      {options.map(({ key, value }) => (
        <label key={key} htmlFor={key} className={styles.label}>
          {value}
          <input
            id={key}
            type="checkbox"
            onChange={onChange}
            className={clsx(
              styles.checkbox,
              block && styles.block,
              className || '',
            )}
            {...props}
          />
          <span className={styles.checkmark}></span>
        </label>
      ))}

      {error && (
        <div className={clsx(styles.error, classNameError || '')}>
          {error?.message}
        </div>
      )}
    </div>
  );
}
