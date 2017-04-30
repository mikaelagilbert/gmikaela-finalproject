var mongo = require ('./mongo');
var uuid = require('node-uuid');
var bcrypt = require('bcrypt');

module.exports = {
  createUser: function (userData, callback) {
    var user = new mongo.User(userData);
    user.save(function (error) {
      callback(error);
    });
  },

  deleteUser: function (userId, callback) {
    var user = mongo.User.find(userId);
    user.remove(function(e) {
      if (e) throw e;
      console.log('User successfully deleted');
    });
  },

  checkPassword: function (possiblePass, user, callback) {
    console.log('possiblePass: ' + possiblePass)
    console.log('real password: ' + password)
    bcrypt.compare(possiblePass, user.password, function (err, isRight) {
      if (err) return callback(err);
      callback(null, isRight);
    });
  },

  addContact: function (userId, callback) {
    var user = mongo.User.find(userId);

  },

  getUser: function (email, callback) {
    console.log('inside userDb.getUser')
    var user = mongo.User.findOne({email: email}, callback);
  }
};
