import * as initialState from './initialState.js';


const reducer = (state, action) => {
  switch (action.type) {  

    //case

    case 'SET_USER_NAME': {
      return Object.assign({}, state, {
        name: 'placeholder name to see if this works'
      });
    }

    case 'LOGIN_REQUEST': {
      console.log('hit login request in reducer')
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