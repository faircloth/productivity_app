// node runs file with strict interpretation
'use strict';

var express = require('express');
var router = express.Router();
var Note = require('../models/note');

// API routes

// GET // Request all notes
router.get('/notes', (req, res) => {
  Note.find({}, function(err, notes) {
    if (err) {
      return res.status(500).json({message: err.message});
    } 
    else {
      res.json({notes: notes});
    }
  });
});


// GET // Request a specific note
router.get('/notes/:_id', (req, res) => {
  var id = req.params._id;

  Note.findOne({'_id': id}, function(err, note) {
    if (err) {
      return res.status(500).json({message: err.message});
    } else {
      res.json( {note: note});
    }
  });
});

// POST // Create a new note

// router.post('/notes', (req, res) => {
//   console.log('A new note will be created');
// });


// export the router
module.exports = router;
