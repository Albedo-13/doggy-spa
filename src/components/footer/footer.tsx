import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import styles from './footer.module.scss';
import FooterForm from './footer-form';

const SOCIALS = [
  {
    icon: '/icons/instagram.webp',
    link: 'https://www.instagram.com/',
    alt: 'instagram',
  },
  {
    icon: '/icons/facebook.webp',
    link: 'https://www.facebook.com/',
    alt: 'facebook',
  },
  {
    icon: '/icons/pinterest.webp',
    link: 'https://www.pinterest.com/',
    alt: 'pinterest',
  },
  {
    icon: '/icons/twitter.webp',
    link: 'https://twitter.com/',
    alt: 'twitter',
  },
  {
    icon: '/icons/snapchat.webp',
    link: 'https://www.snapchat.com/',
    alt: 'snapchat',
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr className={styles.line} />
      <div className={styles.footerWrapper}>
        <div>
          <h3 className={styles.header}>Customer Service</h3>
          <ul>
            <li className={styles.listItem}>
              <Link href="/blog">Blog</Link>
            </li>
            <li className={styles.listItem}>Cancellations</li>
            <li className={styles.listItem}>Track Your Animal</li>
            <li className={styles.listItem}>Luxe’s Annual Spa Day 2021</li>
            <li className={styles.listItem}>Payment Options</li>
          </ul>
        </div>
        <div>
          <h3 className={styles.header}>Subscribe to our Newsletter</h3>
          <FooterForm />

          <h3 className={clsx(styles.header, styles.headerSocials)}>
            Connect With Us On Social Media
          </h3>
          <div className={styles.socials}>
            {SOCIALS.map(({ icon, link, alt }) => (
              <Link
                href={link}
                className={styles.social}
                key={icon}
                target="blank"
              >
                <Image
                  src={icon}
                  alt={alt}
                  className={styles.icon}
                  width={30}
                  height={30}
                />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className={styles.header}>Navigation</h3>
          <ul>
            <li className={styles.listItem}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/about-us">About Us</Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/about-us">Contact Us</Link>
            </li>
            <li className={styles.listItem}>FAQs</li>
            <li className={styles.listItem}>Help with navigation</li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.copyrightWrapper}>
          <div className={styles.copyrightText}>
            <p>Cookie Policy</p>
            <p>Cookies Settings</p>
          </div>
          <div>
            <p>Copyright 2021 Luxe Animal Spa, LLC. All rights reserved.</p>
          </div>
          <div className={styles.copyrightText}>
            <p>Terms</p>
            <p>Privacy</p>
            <p>Security</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
