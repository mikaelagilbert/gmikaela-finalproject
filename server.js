const express = require('express');
//const fs = require('fs');
const sqlite = require('sql.js');
var usersDb = require('./db/user');

const app = express();

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

var router = new express.Router();

router.get('/dbtest', (req, res) => {
  usersDb.getUser('mikaelagilbert', function (error, result) {
    console.log(error, result);
  });
});

app.get('/user', (req, res) => {

});

app.get('/loginRoute', (req, res) => {
  email = req.query.email;
  password = req.query.password;
  usersDb.getUser(email, function (err, user) {
    usersDb.checkPassword(password, user, function(err, isRight) {
      if (isRight) {
        res.json({response: true});
      } else {
        res.json({response: false});
      }
    });
  });
});

app.get('/newUser', (req, res) => {
  var userData = {
    email: req.query.email,
    password: req.query.password
  };
  usersDb.createUser(userData, function (err) {
    if (err) {
      res.json({response: false});
    } else {
      res.json({response: true});
    }
  }); 
});

app.use('/', router);

app.use('/', function(req, res, next) {
  next();
})

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
