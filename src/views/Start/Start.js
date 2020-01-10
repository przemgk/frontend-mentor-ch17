import React from 'react';
import styles from 'views/Start/Start.module.scss';
import Roundel from 'components/Roundel';

const Start = () => (
  <div className={styles.wrapper}>
    <Roundel type="Scissors" />
    <Roundel type="Lizard" />
    <Roundel type="Paper" />
    <Roundel type="Rock" />
    <Roundel type="Spock" />
  </div>
);

export default Start;
