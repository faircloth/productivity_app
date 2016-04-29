import angular from 'angular';

// controllers
import ViewNotesController from './controllers/view-notes.controller';
import ViewOneNoteController from './controllers/view-one-note.controller';

// services
import NotesService from './services/notes.service';

angular
  .module('app.notes', [])
  
  // controllers
  .controller('ViewNotesController', ViewNotesController)
  .controller('ViewOneNoteController', ViewOneNoteController)


  // services
  .service('NotesService', NotesService)

;