import React from 'react';
import styles from 'components/Roundel/Roundel.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Roundel = ({ type, isWinner, name, gestureIcon, onClick, big }) => {
  const roundelClass = cn(styles.roundel, styles[type.toLowerCase()], { [styles.big]: big });

  const handleEnterPress = e => e.key === 'Enter' && onClick();

  return (
    <div
      className={roundelClass}
      onClick={onClick}
      role="button"
      tabIndex="0"
      onKeyPress={handleEnterPress}
    >
      <img className={styles.gesture} src={gestureIcon} alt={name} />
      <div className={styles.roundelInner} />
      {isWinner && <div className={styles.winner} />}
    </div>
  );
};

Roundel.propTypes = {
  type: PropTypes.string,
  isWinner: PropTypes.bool,
  name: PropTypes.string,
  gestureIcon: PropTypes.string,
  onClick: PropTypes.func,
  big: PropTypes.bool
};

Roundel.defaultProps = {
  type: '',
  isWinner: false,
  name: '',
  gestureIcon: '',
  onClick: () => {},
  big: false
};

const mapStateToProps = (state, { type }) => {
  const [roundel] = state.roundelTypes.filter(({ name }) => name === type);

  return roundel || {};
};

export default connect(mapStateToProps)(Roundel);
