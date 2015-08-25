'use strict';

var express = require('express'),
    passport = require('passport');

// Configure passport and express
var app = express();
require('./config/passport')(passport);
require('./config/express')(app, passport);

// Setup routes
require('./routes')(app, passport);

// Start server
var server = app.listen(3000, function () {
  console.log('Server listening on port %s', server.address().port);
});
