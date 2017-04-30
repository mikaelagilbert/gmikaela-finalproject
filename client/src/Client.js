/* eslint-disable no-undef */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

function parseJSON(response) {
  return response.json();
}

function submitLoginRequest(email, password, callback) {
  return fetch(`/loginRoute?email=${email}&password=${password}`, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON)
    .then(function(response) {
      callback(response);
    });
}

function addUser(email, password, callback) {
  return fetch(`/newUser?email=${email}&password=${password}`, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON)
    .then(function(response) {
      callback(response);
    });
}

export default {submitLoginRequest, addUser};
