'use strict';

var mongoose = require('mongoose');

// create a new schema
var playerSchema = new mongoose.Schema({
  firstName:  String,
  lastName:   String,
  fgId:       String,
  position:   String
});

// create a model using your schema
var model = mongoose.model('Player', playerSchema);

// export the model - best practice for advanced configuration
module.exports = model;