'use strict';

var Note = require('../models/note.js');

var notes = [
  {
    title: 'How to start mongo database',
    topic: 'Mongo'
  },
  {
    title: 'Managing multiple processes',
    topic: 'Terminal'
  }
];

notes.forEach(function(note, index) {
  Note.find({'title': note.title, 'topic': note.topic}, function(err, notes) {
    if (!err && !notes.length) {
      Note.create({title: note.title, topic: note.topic });
    }
  });
});
