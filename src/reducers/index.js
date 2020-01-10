import IconScissors from 'assets/icon-scissors.svg';
import IconRock from 'assets/icon-rock.svg';
import IconSpock from 'assets/icon-spock.svg';
import IconPaper from 'assets/icon-paper.svg';
import IconLizard from 'assets/icon-lizard.svg';
import { SET_USER_CHOICE, INCREMENT_SCORE, DECREMENT_SCORE } from 'actions';

const initialState = {
  roundelTypes: [
    { name: 'Scissors', gestureIcon: IconScissors, beatings: ['Paper', 'Lizard'] },
    { name: 'Lizard', gestureIcon: IconLizard, beatings: ['Spock', 'Paper'] },
    { name: 'Paper', gestureIcon: IconPaper, beatings: ['Rock', 'Spock'] },
    { name: 'Rock', gestureIcon: IconRock, beatings: ['Lizard', 'Scissors'] },
    { name: 'Spock', gestureIcon: IconSpock, beatings: ['Scissors', 'Rock'] }
  ],
  score: 0,
  userChoice: '',
  computerChoice: ''
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_CHOICE:
      return { ...state, userChoice: action.payload };
    case INCREMENT_SCORE:
      return { ...state, score: state.score + 1 };
    case DECREMENT_SCORE:
      return { ...state, score: state.score - 1 };
    default:
      return state;
  }
};

export default rootReducer;
