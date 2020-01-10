import React from 'react';
import styles from 'views/Start/Start.module.scss';
import Roundel from 'components/Roundel';

const Start = () => (
  <div className={styles.wrapper}>
    <Roundel roundelType="Scissors" />
    <Roundel roundelType="Lizard" />
    <Roundel roundelType="Paper" />
    <Roundel roundelType="Rock" />
    <Roundel roundelType="Spock" />
  </div>
);

export default Start;
