var mongo = require ('./mongo');
var mongoose = require('mongoose');
var uuid = require('node-uuid');
var bcrypt = require('bcrypt');

// var userSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   name: String,
//   company: String,
//   job_title: String,
//   contacts: Array,
//   created_at: Date,
//   updated_at: Date
// });


// userSchema.pre('save', function(next) {
//   console.log('inside userSchema.pre')
//   var user = this;
//   console.log(user.password)
//   bcrypt.genSalt(10, function(err, salt) {
//     if (err) return next(err);

//     bcrypt.hash(user.password, salt, function(err, hash) {
//       if (err) return next(err);

//       user.password = hash;
//       next();
//     });
//   });
// });


//var User = mongoose.model('User', userSchema);

module.exports = {

  createUser: function (userData, callback) {
    console.log(userData)
    var user = new mongo.User(userData);
    console.log(user)
    user.save(function (error) {
      console.log('user.save error:' + error)
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
