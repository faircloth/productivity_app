let FangraphsService = function($state, HEROKU, $http) {
  
  console.log('fangraphs service');

  // server info
  let apiURL = HEROKU.URL;
  console.log('apiURL:  ', apiURL);

  // service functions
  this.getData   = getData;


  // function definitions
  function getData () {
    return $http.get(apiURL + 'scrape');
  }


};

FangraphsService.$inject = ['$state', 'HEROKU', '$http'];

export default FangraphsService;