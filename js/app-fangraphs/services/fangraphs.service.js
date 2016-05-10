let FangraphsService = function($state, HEROKU, $http) {
  
  console.log('fangraphs service');

  // server info
  let apiURL = HEROKU.URL;
  console.log('apiURL:  ', apiURL);

  // service functions
  this.getData      = getData;
  this.uploadFile   = uploadFile;
  this.getPlayers   = getPlayers;
  this.addPlayer    = addPlayer;
  this.deletePlayer = deletePlayer;
  this.updatePlayer = updatePlayer;


  // function definitions
  function getData (player) {
    return $http.post(apiURL + 'scrape', player);
  }

  function uploadFile (fileObj) {
    console.log('service', fileObj);
    let formData = new FormData();
    formData.append('fileimport', fileObj);
    console.log('service', formData);
    // HEROKU.CONFIG.headers['Content-Type'] = undefined;
    // setTimeout( ()=> {
    //   return console.log(formData);
    // }, 5000);
    // return $http.post(apiURL + 'load-players', formData);
  }

  function getPlayers() {
    return $http.get(apiURL + 'players');
  }

  function addPlayer(player) {
    let playerObj = {
      firstName:  player.firstName,
      lastName:   player.lastName,
      fullName:   player.firstName + ' ' + player.lastName,
      fgId:       player.fgId,
      position:   player.position
    };
    console.log('player object:', playerObj);
    return $http.post(apiURL + 'players', playerObj);
  }

  function deletePlayer(player) {
    console.log('player to delete:  ', player);
    return $http.delete(apiURL + 'players/' + player._id);
  }

  function updatePlayer(player) {
    return $http.put(apiURL + 'players/' + player._id, player);
  }


};

FangraphsService.$inject = ['$state', 'HEROKU', '$http'];

export default FangraphsService;