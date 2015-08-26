'use strict';

var express = require('express'),
    path = require('path'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session');
/**
 * Express configuration
 */
module.exports = function(passport) {
  var app = express();

  app.use(morgan('dev')); // log every request to the console
  app.use(cookieParser()); // read cookies (needed for auth)
  app.use(bodyParser.urlencoded({  // get information from html forms
    extended: true
  }));

  // Serve up CSS and images
  app.use(express.static(path.join(__dirname, '../public')));

  // view engine setup
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'jade');

  // Use passport
  app.use(session({
    secret: 'shhhhhhhh',
    resave: false,
    saveUninitialized: true
  }));
  app.use(passport.initialize());
  app.use(passport.session()); // persistent login sessions

  return app;
};
