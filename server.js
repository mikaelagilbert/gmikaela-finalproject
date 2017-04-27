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
  console.log('router working');
  usersDb.getUser('mikaelagilbert', function (error, result) {
    console.log(error, result);
  });
});

app.get('/user', (req, res) => {
  //should get username from req.body.username once you implement login
  //var username = req.session.username;
  var globalusername = 'mikaelagilbert';

  usersDb.getUser({username: globalusername}, function (error, result) {
    res.json({name: globalusername});
  });
});

app.use('/', router);

app.use('/', function(req, res, next) {
  console.log('on the backend!');
  next();
})




app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
