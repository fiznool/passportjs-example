'use strict';

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = function(passport) {
  // Setup simple user serialization
  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

  // Configure Google OAuth2 strategy
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: '/auth/google/callback'

  }, function(accessToken, refreshToken, profile, done) {
    // In real life, we'd upsert the user in our DB,
    // and return this user's profile instead.
    done(null, profile);
  }));
};
