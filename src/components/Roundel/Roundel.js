import React from 'react';
import styles from 'components/Roundel/Roundel.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Roundel = ({ type, isWinner, name, gestureIcon, onClick }) => {
  const roundelClass = cn(styles.roundel, styles[type.toLowerCase()]);

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
  type: PropTypes.oneOf(['Scissors', 'Lizard', 'Paper', 'Rock', 'Spock']).isRequired,
  isWinner: PropTypes.bool,
  name: PropTypes.string.isRequired,
  gestureIcon: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Roundel.defaultProps = {
  isWinner: false,
  onClick: () => {}
};

const mapStateToProps = (state, { type }) => {
  const [roundel] = state.roundelTypes.filter(({ name }) => name === type);

  return roundel;
};

export default connect(mapStateToProps)(Roundel);
