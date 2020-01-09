import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'assets/logo.svg';
import styles from 'components/Header/Header.module.scss';

const Header = () => (
  <div className={styles.header}>
    <Link to="/">
      <img className={styles.logo} src={Logo} alt="Rock, paper, scissors, lizard and spock" />
    </Link>
    <div className={styles.score}>
      <span className={styles.label}>Score</span>
      <span className={styles.points}>12</span>
    </div>
  </div>
);

export default Header;
