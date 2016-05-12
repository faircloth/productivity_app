let LoadPlayersController = function($scope, FangraphsService) {
  
  let vm = this;

  // view model functions
  vm.loadPlayers = loadPlayers;
  vm.submitData  = submitData;

  // data
  vm.positions    = ['P', 'C', '1B', '2B', 'SS', '3B', 'OF'];

  console.log(FangraphsService);

  vm.dataArray = [];


  function loadPlayers (position) {
    console.log('file import called');
    let fileField = document.getElementById('playerImport');
    console.log(fileField);
    let content = $scope.csv.content; 
    
    if(content) {
      buildData(content, position);
    } else {
      alert('There was an error importing the data. Please try again.');
    }
  }

  function buildData(content, position) {
    let array = content.split(position + ',');
    array.shift();
    array.forEach( function (player) {
      let playerArray = player.split(',');
      let playerObj = {
        position: position,
        fgId: playerArray[0],
        firstName: playerArray[1],
        lastName: playerArray[2].substring(0, playerArray[2].length - 1)
      };
      vm.dataArray.push(playerObj);
    });

    if (array) {
      vm.loaded = true;
    }

    setTimeout(function() {
      showResult();
    }, 3000);
  }

  function showResult () {
    vm.loaded = true;
    if (vm.dataArray.length > 1) {
      console.log(vm.dataArray);
    } else {
      alert('There was an error. Please try again!');
    }
  }

  function submitData () {
    console.log('data to submit to database: ', vm.dataArray);
    vm.dataArray.forEach(function(player) {
      FangraphsService.addPlayer(player).then( (res) => {
        console.log('server response: ', res);
      });
    });
  }
};

LoadPlayersController.$inject = ['$scope', 'FangraphsService'];

export default LoadPlayersController;