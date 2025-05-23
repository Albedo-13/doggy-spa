'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './header.module.scss';

type HeaderLinkProps = {
  title: string;
  href: string;
};

export default function HeaderLink({ title, href }: HeaderLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href || pathname?.startsWith(`${href}/`);

  return (
    <li className={clsx(styles.listItem, isActive ? styles.active : '')}>
      <Link href={href}>{title}</Link>
    </li>
  );
}
