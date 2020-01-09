import React from 'react';
import IconScissors from 'assets/icon-scissors.svg';
import styles from 'components/Roundel/Roundel.module.scss';
import cn from 'classnames';

const Roundel = () => {
  const roundelClass = cn(styles.roundel, styles.scissors);

  return (
    <div className={roundelClass}>
      <img className={styles.gesture} src={IconScissors} alt="Scissors" />
      <div className={styles.roundelInner} />
    </div>
  );
};

export default Roundel;
