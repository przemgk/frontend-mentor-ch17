import React from 'react';
import ImageRules from 'assets/image-rules.svg';
import styles from 'components/Modal/Modal.module.scss';
import IconClose from 'assets/icon-close.svg';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Modal = ({ closeModalFn, isVisible }) => {
  const modalClass = cn(styles.wrapper, { [styles.isOpen]: isVisible });

  return (
    <div className={modalClass}>
      <h2 className={styles.heading}>Rules</h2>
      <img className={styles.rules} src={ImageRules} alt="Game rules" />

      <button className={styles.closeButton} type="button" onClick={closeModalFn}>
        <img className={styles.closeButtonIcon} src={IconClose} alt="Close modal" />
      </button>
    </div>
  );
};

Modal.propTypes = {
  closeModalFn: PropTypes.func,
  isVisible: PropTypes.bool.isRequired
};

Modal.defaultProps = {
  closeModalFn: () => {}
};

export default Modal;
