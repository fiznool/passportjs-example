'use strict';

var passport = require('passport');

// Configure passport and express
require('./config/passport')(passport);
var app = require('./config/express')(passport);

// Setup routes
require('./routes')(app, passport);

// Start server
var server = app.listen(3000, function () {
  console.log('Server listening on port %s', server.address().port);
});
