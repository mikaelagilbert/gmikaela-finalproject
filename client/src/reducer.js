import * as initialState from './initialState.js';


const reducer = (state, action) => {
  switch (action.type) {  

    case 'LOGIN_REQUEST': {
      console.log('hit login request in reducer')
      return Object.assign({}, state, {
        loggedIn: true,
        currentUser: action.email
      });
    }

    case 'ADD_USER': {
      return Object.assign({}, state, {
        loggedIn: true,
        currentUser: action.email
      });
    }

    case 'LOGOUT': {
      return Object.assign({}, state, {
        loggedIn: false,
        currentUser: ''
      });
    }

    default:
    return state;
  }
};

export default reducer;