'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

import styles from './header.module.scss';
import HeaderLink from './header-link';

const NAVIGATION = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Info',
    href: '/info',
  },
  {
    title: 'Spa Services',
    href: '/spa-services',
  },
  {
    title: 'Book Appointment',
    href: '/book-appointment',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'About Us',
    href: '/about-us',
  },
  {
    title: 'Contact Us',
    href: '/contact-us',
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(() => !isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={clsx(styles.list, isMenuOpen ? styles.listOpen : '')}>
          {NAVIGATION.map(({ title, href }) => (
            <HeaderLink
              key={href}
              title={title}
              href={href}
              onClick={closeMenu}
            />
          ))}
        </ul>
        <Image
          src="/icons/burger-menu.webp"
          alt="menu"
          width={24}
          height={24}
          onClick={toggleMenu}
          className={styles.burger}
        />
      </nav>
    </header>
  );
}
