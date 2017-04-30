const loginRequest = (email) => {
  return {
    type: 'LOGIN_REQUEST',
    email: email
  };
};

const addUser = (email) => {
  return {
    type: 'ADD_USER',
    email: email
  };
};

const logout = () => {
  return {
    type: 'LOGOUT'
  };
};

//add contact


export { loginRequest, addUser, logout };
