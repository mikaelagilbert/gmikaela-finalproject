const setUserName = (name) => {
  return {
    type: 'SET_USER_NAME',
    name: name
  };
};

export { setUserName };