import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'assets/logo.svg';
import styles from 'components/Header/Header.module.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Header = ({ score }) => (
  <div className={styles.header}>
    <Link to="/">
      <h1 className={styles.heading}>Rock, paper, scissors, lizard and spock</h1>
      <img className={styles.logo} src={Logo} alt="Rock, paper, scissors, lizard and spock" />
    </Link>
    <div className={styles.score}>
      <span className={styles.label}>Score</span>
      <span className={styles.points}>{score}</span>
    </div>
  </div>
);

Header.propTypes = {
  score: PropTypes.number.isRequired
};

const mapStateToProps = ({ score }) => ({ score });

export default connect(mapStateToProps)(Header);
