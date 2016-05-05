let FangraphsService = function($state, HEROKU, $http) {
  
  console.log('fangraphs service');

  // server info
  let apiURL = HEROKU.URL;
  console.log('apiURL:  ', apiURL);

  // service functions
  this.getData    = getData;
  this.uploadFile = uploadFile;


  // function definitions
  function getData () {
    return $http.get(apiURL + 'scrape');
  }

  function uploadFile (file) {
    return $http.post(apiURL + 'load-players');
  }


};

FangraphsService.$inject = ['$state', 'HEROKU', '$http'];

export default FangraphsService;