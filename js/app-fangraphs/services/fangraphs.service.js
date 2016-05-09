let FangraphsService = function($state, HEROKU, $http) {
  
  console.log('fangraphs service');

  // server info
  let apiURL = HEROKU.URL;
  console.log('apiURL:  ', apiURL);

  // service functions
  this.getData    = getData;
  this.uploadFile = uploadFile;
  this.getPlayers = getPlayers;
  this.addPlayer  = addPlayer;


  // function definitions
  function getData (player) {
    return $http.post(apiURL + 'scrape', player);
  }

  function uploadFile (file) {
    return $http.post(apiURL + 'load-players');
  }

  function getPlayers() {
    return $http.get(apiURL + 'players');
  }

  function addPlayer(player) {
    let playerObj = {
      firstName:  player.firstName,
      lastName:   player.lastName,
      fgId:       player.fgId,
      position:   player.position
    };
    console.log('player object:', playerObj);
    return $http.post(apiURL + 'players', playerObj);
  }


};

FangraphsService.$inject = ['$state', 'HEROKU', '$http'];

export default FangraphsService;