import React, { useLayoutEffect } from 'react';
import styles from 'views/Start/Start.module.scss';
import Roundel from 'components/Roundel';
import PropTypes from 'prop-types';
import { setUserChoiceAction } from 'actions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Start = ({ roundelTypes, userChoice, setUserChoice }) => {
  const history = useHistory();

  useLayoutEffect(() => {
    if (userChoice) {
      history.push('/round');
    }
  });

  return (
    <div className={styles.wrapper}>
      {roundelTypes.map(({ name }) => (
        <Roundel onClick={() => setUserChoice(name)} type={name} key={name} />
      ))}
    </div>
  );
};

Start.propTypes = {
  roundelTypes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      gestureIcon: PropTypes.string.isRequired,
      beatings: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
    }).isRequired
  ).isRequired,
  userChoice: PropTypes.string.isRequired,
  setUserChoice: PropTypes.func.isRequired
};

const mapStateToProps = ({ roundelTypes, userChoice }) => ({ roundelTypes, userChoice });

const mapDispatchToProps = dispatch => ({
  setUserChoice: name => dispatch(setUserChoiceAction(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(Start);
