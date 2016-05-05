let LoadPlayersController = function($scope, FangraphsService) {
  
  let vm = this;

  vm.loadPlayers = loadPlayers;


  function loadPlayers () {
    console.log('file import called');
    let fileField = document.getElementById('playerImport');
    let fileObj = fileField.files[0];
    console.log(fileObj);
    FangraphsService.uploadFile(fileObj);
  }

};

LoadPlayersController.$inject = ['$scope'];

export default LoadPlayersController;