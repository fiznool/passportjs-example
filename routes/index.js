'use strict';

var ensureAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect('/login');
};

module.exports = function(app, passport) {
  // Login route:
  app.get('/login', function(req, res) {
    res.render('login');
  });

  app.get('/profile', ensureAuthenticated, function(req, res) {
    res.render('profile', {
        user : req.user // get the user out of session and pass to template
    });
  });

  // route for google authentication and login
  app.get('/auth/google',
      passport.authenticate('google', {
        scope : ['profile', 'email']
      }));

  // handle the callback after google has authenticated the user
  app.get('/auth/google/callback',
      passport.authenticate('google', {
          successRedirect : '/profile',
          failureRedirect : '/login'
      }));

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  app.get('/', function(req, res) {
    res.redirect('/profile');
  });
};
