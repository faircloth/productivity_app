import $ from 'jquery';

let ViewNotesController = function($scope, NotesService, $state) {
  
  let vm = this;

  // view model functions
  vm.goToNote = goToNote;


  // on page load
  getNotes();


  


  // **** FUNCTION DEFINITIONS ****


  
  // GET request to get all notes
  function getNotes() {
    NotesService.getNotes().then( (res) => {
      vm.notes = res.data.notes;
    });
  }

  // Go to a single note page
  function goToNote(id) {
    $state.go('root.view-note', {_id: id}); 
  }



};

ViewNotesController.$inject = ['$scope', 'NotesService', '$state'];

export default ViewNotesController;