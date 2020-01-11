import React from 'react';
import Button from 'components/Button';
import styles from 'components/Footer/Footer.module.scss';
import PropTypes from 'prop-types';

const Footer = ({ openModalFn }) => (
  <div className={styles.footer}>
    <Button onClick={openModalFn}>Rules</Button>
  </div>
);

Footer.propTypes = {
  openModalFn: PropTypes.func
};

Footer.defaultProps = {
  openModalFn: () => {}
};

export default Footer;
