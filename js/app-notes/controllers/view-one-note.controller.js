let ViewOneNoteController = function($scope, $stateParams, NotesService) {
  
  let noteId = $stateParams._id;

  let vm = this;


  // view model functions


  // on page load
  getNote(noteId);

  // *** FUNCTION DEFINITIONS ***
  function getNote (id) {
    NotesService.getOneNote(id).then( (res) => {
      vm.note = res.data.note;
      console.log(vm.note);
    });
  }

};

ViewOneNoteController.$inject = ['$scope', '$stateParams', 'NotesService'];

export default ViewOneNoteController;