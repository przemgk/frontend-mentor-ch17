import IconScissors from 'assets/icon-scissors.svg';
import IconRock from 'assets/icon-rock.svg';
import IconSpock from 'assets/icon-spock.svg';
import IconPaper from 'assets/icon-paper.svg';
import IconLizard from 'assets/icon-lizard.svg';
import { SET_USER_CHOICE, INCREMENT_SCORE, DECREMENT_SCORE, CLEAR_USER_CHOICE } from 'actions';

const initialState = {
  roundelTypes: [
    { name: 'Scissors', gestureIcon: IconScissors, beatings: ['Paper', 'Lizard'] },
    { name: 'Lizard', gestureIcon: IconLizard, beatings: ['Spock', 'Paper'] },
    { name: 'Paper', gestureIcon: IconPaper, beatings: ['Rock', 'Spock'] },
    { name: 'Rock', gestureIcon: IconRock, beatings: ['Lizard', 'Scissors'] },
    { name: 'Spock', gestureIcon: IconSpock, beatings: ['Scissors', 'Rock'] }
  ],
  score: sessionStorage.getItem('score') || 0,
  userChoice: ''
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_CHOICE:
      return { ...state, userChoice: action.payload };
    case INCREMENT_SCORE: {
      const score = state.score - 1;

      sessionStorage.setItem('score', score);

      return { ...state, score };
    }
    case DECREMENT_SCORE: {
      const score = state.score - 1;

      sessionStorage.setItem('score', score);

      return { ...state, score };
    }
    case CLEAR_USER_CHOICE:
      return { ...state, userChoice: '' };
    default:
      return state;
  }
};

export default rootReducer;
