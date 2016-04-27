'use strict';

var mongoose = require('mongoose');

// create a new schema
var noteSchema = new mongoose.Schema({
  title:      String,
  topic:      String
});

// create a model using your schema
var model = mongoose.model('Note', noteSchema);

// export the model - best practice for advanced configuration
module.exports = model;