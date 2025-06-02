'use client';

import { InputHTMLAttributes, useState } from 'react';

import styles from './input-search.module.scss';

type InputSearchProps = {
  options: {
    name: string;
  }[];
  loading: boolean;
  linkPropName: string;
};

export default function InputSearch({
  options,
  loading,
  linkPropName,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & InputSearchProps) {
  const [isOpen, setIsOpen] = useState(false);

  const isEmptyResults = isOpen && !loading && options?.length === 0;
  const isLoading = isOpen && loading;
  const isResultsFound = isOpen && !loading && options?.length > 0;

  return (
    <div className={styles.searchWrapper}>
      <input
        {...props}
        placeholder="Dog name..."
        className={styles.input}
        autoComplete="off"
        onChange={(e) => {
          props.onChange?.(e);
          if (e.target.value.length >= 3) {
            setIsOpen(true);
          } else {
            setIsOpen(false);
          }
        }}
      />
      {isEmptyResults && (
        <div className={styles.options}>
          <div className={styles.option}>No results</div>
        </div>
      )}
      {isLoading && (
        <div className={styles.options}>
          <div className={styles.option}>Loading...</div>
        </div>
      )}
      {isResultsFound && (
        <div className={styles.options}>
          {(options || []).map((option) => (
            <a
              key={option[linkPropName as keyof typeof option]}
              className={styles.option}
              href={`/info/${option[linkPropName as keyof typeof option]}`}
            >
              {option[linkPropName as keyof typeof option]}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
