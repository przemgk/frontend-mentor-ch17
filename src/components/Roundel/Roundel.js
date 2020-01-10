import React from 'react';
import IconScissors from 'assets/icon-scissors.svg';
import IconRock from 'assets/icon-rock.svg';
import IconSpock from 'assets/icon-spock.svg';
import IconPaper from 'assets/icon-paper.svg';
import IconLizard from 'assets/icon-lizard.svg';
import styles from 'components/Roundel/Roundel.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';

const types = [
  { name: 'Scissors', gestureIcon: IconScissors },
  { name: 'Lizard', gestureIcon: IconLizard },
  { name: 'Paper', gestureIcon: IconPaper },
  { name: 'Rock', gestureIcon: IconRock },
  { name: 'Spock', gestureIcon: IconSpock }
];

const Roundel = ({ type, isWinner }) => {
  const roundelClass = cn(styles.roundel, styles[type.toLowerCase()]);

  return types
    .filter(({ name }) => name === type)
    .map(({ name, gestureIcon }) => (
      <div className={roundelClass}>
        <img className={styles.gesture} src={gestureIcon} alt={name} />
        <div className={styles.roundelInner} />
        {isWinner && <div className={styles.winner} />}
      </div>
    ));
};

Roundel.propTypes = {
  type: PropTypes.oneOf(['Scissors', 'Lizard', 'Paper', 'Rock', 'Spock']).isRequired,
  isWinner: PropTypes.bool
};

Roundel.defaultProps = {
  isWinner: false
};

export default Roundel;
