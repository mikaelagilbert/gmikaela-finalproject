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

export { loginRequest, addUser, logout };
