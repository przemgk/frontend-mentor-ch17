import React, { useEffect, useRef, useState } from 'react';
import Roundel from 'components/Roundel';
import Button from 'components/Button';
import styles from 'views/Round/Round.module.scss';
import { connect } from 'react-redux';
import { incrementScoreAction, decrementScoreAction, clearUserChoiceAction } from 'actions';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const randComputerChoice = roundelTypes => {
  const randomIndex = Math.floor(Math.random() * roundelTypes.length);

  return roundelTypes[randomIndex];
};

const whoWin = (computerChoice, userChoice) => {
  let result = 'you win';

  if (computerChoice.name === userChoice) {
    result = 'draw';
  }

  computerChoice.beatings.forEach(name => {
    if (name === userChoice) {
      result = 'computer win';
    }
  });

  return result;
};

const Round = ({ userChoice, roundelTypes, incrementScore, decrementScore, clearUserChoice }) => {
  const [counter, setCounter] = useState(3);
  const placeholderRef = useRef(null);
  const history = useHistory();

  let computerChoice;
  let roundResult;

  if (counter === 0) {
    computerChoice = randComputerChoice(roundelTypes);
    roundResult = whoWin(computerChoice, userChoice);
  }

  useEffect(() => {
    if (!userChoice) {
      history.push('/');
    }
  });

  useEffect(() => {
    let counterTimeout;

    if (counter > 0) {
      placeholderRef.current.textContent = counter;
      counterTimeout = setTimeout(() => setCounter(counter - 1), 1000);
    }

    return () => {
      clearTimeout(counterTimeout);
    };
  }, [counter]);

  useEffect(() => {
    if (userChoice && roundResult === 'you win') {
      incrementScore();
    } else if (userChoice && roundResult === 'computer win') {
      decrementScore();
    }
  }, [decrementScore, incrementScore, roundResult, userChoice]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <Roundel type={userChoice} isWinner={roundResult === 'you win'} />
        <h2 className={styles.label}>You picked</h2>
      </div>
      <div className={styles.box}>
        {!counter ? (
          <Roundel type={computerChoice.name} isWinner={roundResult === 'computer win'} />
        ) : (
          <div ref={placeholderRef} className={styles.placeholder} />
        )}
        <h2 className={styles.label}>The house picked</h2>
      </div>
      {!counter && (
        <div className={styles.result}>
          <h2 className={styles.resultHeading}>{roundResult}</h2>
          <Button onClick={() => clearUserChoice()} isPrimary>
            Play again
          </Button>
        </div>
      )}
    </div>
  );
};

Round.propTypes = {
  userChoice: PropTypes.string.isRequired,
  roundelTypes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      gestureIcon: PropTypes.string.isRequired,
      beatings: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
    }).isRequired
  ).isRequired,
  incrementScore: PropTypes.func,
  decrementScore: PropTypes.func,
  clearUserChoice: PropTypes.func
};

Round.defaultProps = {
  incrementScore: () => {},
  decrementScore: () => {},
  clearUserChoice: () => {}
};

const mapStateToProps = ({ userChoice, roundelTypes }) => ({ userChoice, roundelTypes });

const mapDispatchToProps = dispatch => ({
  incrementScore: () => dispatch(incrementScoreAction()),
  decrementScore: () => dispatch(decrementScoreAction()),
  clearUserChoice: () => dispatch(clearUserChoiceAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Round);
