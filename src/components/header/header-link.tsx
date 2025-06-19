'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './header.module.scss';

type HeaderLinkProps = {
  title: string;
  href: string;
  onClick: VoidFunction;
};

export default function HeaderLink({ title, href, onClick }: HeaderLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href || pathname?.startsWith(`${href}/`);

  return (
    <li
      onClick={onClick}
      className={clsx(styles.listItem, isActive ? styles.active : '')}
    >
      <Link href={href}>{title}</Link>
    </li>
  );
}
