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

const Roundel = ({ roundelType }) => {
  const roundelClass = cn(styles.roundel, styles[roundelType.toLowerCase()]);

  return types
    .filter(({ name }) => name === roundelType)
    .map(({ name, gestureIcon }) => (
      <div className={roundelClass}>
        <img className={styles.gesture} src={gestureIcon} alt={name} />
        <div className={styles.roundelInner} />
      </div>
    ));
};

Roundel.propTypes = {
  roundelType: PropTypes.oneOf(['Scissors', 'Lizard', 'Paper', 'Rock', 'Spock']).isRequired
};

export default Roundel;
