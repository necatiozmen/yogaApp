// REMOVE-START
import { combineReducers } from 'redux';

const studios = (state=[], action) => {
  switch (action.type) {
    case 'LIST_STUDIOS':
      return action.studios;
    default:
      return state;
  }
};

const coords = (state={}, action) => {
  switch (action.type) {
    case 'SET_COORDS':
      return action.coords;
    default:
      return state;
  }
};

const reducers = combineReducers({
  studios,
  coords,
});

export default reducers;
