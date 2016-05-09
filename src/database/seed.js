'use strict';

var Note   = require('../models/note.js');
var Player = require('../models/player.js');

var notes = [
  {
    title: 'How to start mongo database',
    topic: 'Mongo',
    content: 'Steps written out'
  },
  {
    title: 'Managing multiple processes',
    topic: 'Terminal',
    content: 'write out the steps'
  }
];


var players = [
  {
    firstName: 'Jake',
    lastName: 'Arrieta',
    fullName: 'Jake Arrieta',
    fgId: '4153',
    position: 'P'
  },
  // {
  //   firstName: 'Addison',
  //   lastName: 'Russell',
  //   fgId: '14106',
  //   position: 'SS'
  // },
  {
    firstName: 'Chris',
    lastName: 'Archer',
    fullName: 'Chris Archer',
    fgId: '6345',
    position: 'P'
  },
];

notes.forEach(function(note, index) {
  Note.find({'title': note.title, 'topic': note.topic, 'content': note.content}, function(err, notes) {
    if (!err && !notes.length) {
      Note.create({title: note.title, topic: note.topic, content: note.content });
    }
  });
});


players.forEach(function(player, index) {
  Player.find({'fgId': player.fgId}, function(err, players) {
    if (!err && !players.length) {
      Player.create(
        {
          firstName: player.firstName, 
          lastName: player.lastName,
          fgId: player.fgId,
          position: player.position
        }
      );
    }
  });
});


