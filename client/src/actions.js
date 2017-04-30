const loginRequest = (email) => {
  return {
    type: 'LOGIN_REQUEST',
    email: email
  };
};

const addUser = (email) => {
  return {
    type: 'LOGIN_REQUEST',
    email: email
  };
};

const logout = () => {
  return {
    type: 'LOGOUT'
  };
};

//add contact


export default { loginRequest, addUser, logout };
