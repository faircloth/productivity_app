let ManagePlayersController = function($scope, FangraphsService, $state) {
  
  let vm = this;

  vm.deletePlayer = deletePlayer;
  vm.updatePlayer = updatePlayer;
  vm.addPlayer    = addPlayer;
  vm.positions    = ['P', 'C', '1B', '2B', 'SS', '3B', 'OF'];

  // on page load
  getPlayers();

  // function definitions

  // get players for drop down
  function getPlayers() {
    FangraphsService.getPlayers().then( (res) => {
      vm.players = res.data.players;
      vm.loaded = true;
      console.log('players data: ', vm.players);
    });
  }

  function deletePlayer(player) {
    console.log('to delete:  ', player);
    FangraphsService.deletePlayer(player).then( (res) => {
      console.log(res);
      getPlayers();
    });
  }

  function updatePlayer(player) {
    console.log('player to be updated: ', player);
    FangraphsService.updatePlayer(player).then( (res) => {
      console.log(res);
      getPlayers();
    });
  }

  // add player to the database
  function addPlayer(player) {
    FangraphsService.addPlayer(player).then( (res)=> {
      console.log(res);
      getPlayers();
    });
  }

};

ManagePlayersController.$inject = ['$scope', 'FangraphsService', '$state'];

export default ManagePlayersController;