'use strict';

var express = require('express');
var app = express();
var parser  = require('body-parser');
var port = process.env.PORT || 3000;
var router = require('./api');

require('./database/index');

app.use(parser.json());

// allow access from front-end
app.use( (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
});


// this is serving the entire app folder at the home route
app.use('/', express.static('app'));




// namespacing for api routes
app.use('/api', router);



app.listen(port);
console.log('app running on localhost:' + port);