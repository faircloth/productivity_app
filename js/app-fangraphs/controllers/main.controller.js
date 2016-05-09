let MainFangraphsController = function($scope, FangraphsService) {
  
  console.log('hello fangraphs');

  let vm = this;

  vm.submitPlayer = submitPlayer;
  vm.addPlayer    = addPlayer;
  vm.positions    = ['P', 'C', '1B', '2B', 'SS', '3B', 'OF'];

  // on page load
  getPlayers();
  // getData();

  // function definitions
  function getData () {
    FangraphsService.getData().then( (res) => {
      // console.log(res);
      vm.rows = res.data.data;
      console.log(vm.rows);
      vm.loaded = true;
    });
  }

  // add player to the database
  function addPlayer(player) {
    FangraphsService.addPlayer(player);
  }


  // get players for drop down
  function getPlayers() {
    FangraphsService.getPlayers().then( (res) => {
      vm.players = res.data.players;
      console.log('players data: ', vm.players);
    });
  }

  // submit player selected to get Data
  function submitPlayer(player) {
    console.log('player to get:  ', player);
  }

};

MainFangraphsController.$inject = ['$scope', 'FangraphsService'];

export default MainFangraphsController;