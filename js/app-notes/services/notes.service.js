let NotesService = function($state, $http, HEROKU) {
  
  // server info
  let apiURL = HEROKU.URL;
  console.log('apiURL:  ', apiURL);

  // service functions
  this.getNotes   = getNotes;
  this.getOneNote = getOneNote;


  // function definitions
  function getNotes () {
    return $http.get(apiURL + 'notes');
  }

  function getOneNote(id) {
    // return $http.get(apiURL + 'notes/' + id);
  }




};

NotesService.$inject = ['$state', '$http', 'HEROKU'];

export default NotesService;