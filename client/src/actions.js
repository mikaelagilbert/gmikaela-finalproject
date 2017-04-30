const loginRequest = (email) => {
  return {
    type: 'LOGIN_REQUEST',
    email: email
  };
};

//logout

//add contact

//newUser

const setUserName = (name) => {
  return {
    type: 'SET_USER_NAME',
    name: name
  };
};


export default { setUserName, loginRequest };
