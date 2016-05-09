let MainFangraphsController = function($scope, FangraphsService) {
  
  console.log('hello fangraphs');

  let vm = this;

  vm.playerSelected = playerSelected;

  // on page load
  getPlayers();
  getData();

  // function definitions
  function getData () {
    FangraphsService.getData().then( (res) => {
      // console.log(res);
      vm.rows = res.data.data;
      console.log(vm.rows);
      vm.loaded = true;
    });
  }


  // get players for drop down
  function getPlayers() {
    FangraphsService.getPlayers().then( (res) => {
      vm.players = res.data.players;
      console.log('players data: ', vm.players);
    });
  }

  // player selected in dropdown
  function playerSelected(player) {
    console.log('player selected: ', player);
  }

};

MainFangraphsController.$inject = ['$scope', 'FangraphsService'];

export default MainFangraphsController;