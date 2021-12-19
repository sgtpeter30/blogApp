const mongoose = require('mongoose');
const passport = require('passport');
require('../models/User');

const User = mongoose.model('users');

const user = {
  userLogin: (req, res, next) => {
    console.log(req.body);
    passport.authenticate('local', function (err, user, info) {
      console.log(user);
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.sendStatus(403);
      }

      req.logIn(user, function (err) {
        if (err) {
          return next(err);
        }
        return res.send(user);
      });
    })(req, res, next);
  },
  userLogout: (req, res) => {
    req.logout();
    const resp = {
      loggedOut: true,
    };
    res.send(JSON.stringify(resp));
  },
  userRegister: (req, res) => {
    User.register(
      new User({
        username: req.body.username,
      }),
      req.body.password,
      function (err, user) {
        if (err) {
          console.log(err);
          return res.sendStatus(500);
        } else {
          passport.authenticate('local')(req, res, function () {
            res.sendStatus(201);
          });
        }
      },
    );
  },
  currentUser: (req, res) => {
    res.send({ currentUser: req.user || null });
  },
};

module.exports = user;
