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


module.exports = router;