// node runs file with strict interpretation
'use strict';

// Express router
var express = require('express');
var router = express.Router();


// Database model
var Player = require('../../models/player');


// upload file
router.post('/load-players', (req, res) => {
  console.log(req);
});


// GET // get all players
router.get('/players', (req, res) => {
  Player.find({}, (err, players) => {
    if (err) {
      return res.status(500).json({message: err.message});
    } else {
      res.json({players: players});
    }
  });
});


// POST // add a new player
router.post('/players', (req, res) => {
  var player = req.body;
  Player.create(player, (err, player) => {
    if (err) {
      return res.status(500).json({err: err.message});
    } else {
      res.json({'player': player, message: 'Player added'});
    }
  });
});


// DELETE // delete a player
router.delete('/players/:_id', (req, res)=> {
  var id = req.params._id;
  var player = req.body;

  Player.findByIdAndRemove(id, function(err, player) {
    if (err) {
      return res.status(500).json({err: err.message});
    } else {
      res.json({message: player.firstName + ' ' + player.lastName + 'has been deleted from API!'});
    }
  });
});

// PUT // update player info
router.put('/players/:_id', (req, res) => {
  var id     = req.params._id;
  var player = req.body;

  if (player && player._id !== id) {
    return res.status(500).json({err: "Ids don't match!"});
  }
  
  // option changes default of false to true to return new data
  Player.findByIdAndUpdate(id, player, {new: true}, function(err, player) {
    if (err) {
      // return causes it to end
      return res.status(500).json({err: err.message});
    }
    res.json({'player': player, message: 'Player updated'});
  });
});


module.exports = router;
