export const SET_USER_CHOICE = 'SET_USER_CHOICE';
export const CLEAR_USER_CHOICE = 'CLEAR_USER_CHOICE';

export const INCREMENT_SCORE = 'INCREMENT_SCORE';
export const DECREMENT_SCORE = 'DECREMENT_SCORE';

export const setUserChoiceAction = name => ({ type: SET_USER_CHOICE, payload: name });

export const clearUserChoiceAction = () => ({ type: CLEAR_USER_CHOICE });

export const incrementScoreAction = () => ({ type: INCREMENT_SCORE });

export const decrementScoreAction = () => ({ type: DECREMENT_SCORE });
