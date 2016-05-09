let ManagePlayersController = function($scope, FangraphsService) {
  
  let vm = this;

  vm.deletePlayer = deletePlayer;

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
    });
  }

};

ManagePlayersController.$inject = ['$scope', 'FangraphsService'];

export default ManagePlayersController;