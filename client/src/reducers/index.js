// REMOVE-START
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

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

// const coordlist = (state={}, action) => {
//   switch (action.type) {
//     case 'LIST_COORDS':
//       return action.coordinates;
//     default:
//       return state;
//
//   }
// };

const reducers = combineReducers({
  studios,
  coords,
  // coordlist,
  form: formReducer,
});

export default reducers;
