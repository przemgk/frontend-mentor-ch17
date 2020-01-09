import React from 'react';
import ImageRules from 'assets/image-rules.svg';
import styles from 'components/Modal/Modal.module.scss';
import IconClose from 'assets/icon-close.svg';

const Modal = () => (
  <div className={styles.wrapper}>
    <h2 className={styles.heading}>Rules</h2>
    <img className={styles.rules} src={ImageRules} alt="Game rules" />

    <div className={styles.closeButton}>
      <img className={styles.closeButtonIcon} src={IconClose} alt="Close modal" />
    </div>
  </div>
);

export default Modal;
