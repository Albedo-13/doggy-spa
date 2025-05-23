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
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          {NAVIGATION.map(({ title, href }) => (
            <HeaderLink key={href} title={title} href={href} />
          ))}
        </ul>
      </nav>
    </header>
  );
}
