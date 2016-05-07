let LoadPlayersController = function($scope, FangraphsService) {
  
  let vm = this;

  vm.loadPlayers = loadPlayers;

  console.log(FangraphsService);


  function loadPlayers () {
    console.log('file import called');
    let fileField = document.getElementById('playerImport');
    let fileObj = fileField.files[0];
    console.log(fileObj);
    FangraphsService.uploadFile(fileObj).then( (res) => {
      console.log(res);
    });
  }

};

LoadPlayersController.$inject = ['$scope', 'FangraphsService'];

export default LoadPlayersController;