import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from './Jetpack.png';
import styles from './header.module.scss';

export const Header: React.FC = () => {
  const location = useLocation();
  
  return (
    <section className={styles.header}>
      <Link className={styles.logo} to={'/'}>
        <img src={logo} alt="Logo" />
      </Link>
      <section className={styles.links}>
        <Link
          className={`${styles.link} ${location.pathname === '/' ? styles.underline : ''}`}
          to={'/'}
        >
          Works
        </Link>
        <Link
          className={`${styles.link} ${location.pathname === '/about' ? styles.underline : ''}`}
          to={'/about'}
        >
          About
        </Link>
      </section>
    </section>
  );
}
