import * as initialState from './initialState.js';

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER_NAME': {
      return Object.assign({}, state, {
        name: 'placeholder name to see if this works'
      });
    }
    default:
      return state;
  }
};

export default reducer;