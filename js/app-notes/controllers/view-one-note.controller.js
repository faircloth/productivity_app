let ViewOneNoteController = function($scope, $stateParams) {
  
  let noteId = $stateParams._id;

  console.log('note id: ', noteId);

};

ViewOneNoteController.$inject = ['$scope', '$stateParams'];

export default ViewOneNoteController;