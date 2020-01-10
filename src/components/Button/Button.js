import React from 'react';
import styles from 'components/Button/Button.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Button = ({ isPrimary, children, onClick }) => {
  const buttonClass = cn(styles.button, { [styles.buttonPrimary]: isPrimary });

  return (
    <button onClick={onClick} className={buttonClass} type="button">
      {children}
    </button>
  );
};

Button.propTypes = {
  isPrimary: PropTypes.bool,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Button.defaultProps = {
  isPrimary: false,
  onClick: () => {}
};

export default Button;
