'use client';

import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './button.module.scss';

type ButtonProps = {
  children: ReactNode;
  size?: 'small' | 'medium' | 'large';
  color?: 'rosey' | 'kisses';
};

export default function Button({
  children,
  size = 'medium',
  color = 'kisses',
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps) {
  return (
    <button
      className={clsx(
        styles.button,
        styles[size],
        styles[color],
        className || ''
      )}
      {...props}
    >
      {children}
    </button>
  );
}
