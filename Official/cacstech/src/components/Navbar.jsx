import Link from 'next/link';
import React from 'react';
import styles from './Navbar.module.css'; // Importing the CSS module

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
  <li>
    <Link href="/Home" className={styles.childs}>Home</Link>
  </li>
  <li>
    <Link href="/about/page" className={styles.childs}>About</Link>
  </li>
  <li>
    <Link href="/events/page" className={styles.childs}>Events</Link>
  </li>
  <li>
    <Link href="/Team" className={styles.childs}>Team</Link>
  </li>
  <li>
    <Link href="/clubs/page" className={styles.childs}>Clubs</Link>
  </li>
  <li>
    <Link href="/sponsors/page" className={styles.childs}>Sponsors</Link>
  </li>
  <li>
    <Link href="/Contactus" className={styles.childs}>Contact</Link>
  </li>
</ul>

    </nav>
  );
};

export default Navbar;
