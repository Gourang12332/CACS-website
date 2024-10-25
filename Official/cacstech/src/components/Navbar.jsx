import Link from 'next/link';
import React from 'react';
import styles from './Navbar.module.css'; // Importing the CSS module

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {['/Home', '/about/page', '/events/page', '/Team', '/clubs/page', '/sponsors/page', '/Contactus'].map((path, index) => (
          <li key={index}>
            <Link href={path} className={styles.childs}>
              {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
