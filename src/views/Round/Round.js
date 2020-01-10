import React from 'react';
import Roundel from 'components/Roundel';
import Button from 'components/Button';
import styles from 'views/Round/Round.module.scss';

const Round = () => (
  <div className={styles.wrapper}>
    <div className={styles.box}>
      <Roundel type="Scissors" isWinner />
      <h2 className={styles.label}>You picked</h2>
    </div>
    <div className={styles.box}>
      <div className={styles.placeholder} />
      <h2 className={styles.label}>The house picked</h2>
    </div>
    <div className={styles.result}>
      <h2 className={styles.resultHeading}>You win</h2>
      <Button isPrimary>Play again</Button>
    </div>
  </div>
);

export default Round;
