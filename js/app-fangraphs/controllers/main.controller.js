let MainFangraphsController = function($scope, FangraphsService) {
  
  console.log('hello fangraphs');

  let vm = this;

  // on page load

  getData();

  // function definitions
  function getData () {
    FangraphsService.getData().then( (res) => {
      // console.log(res);
      vm.data = res.data.data;
      console.log(vm.data);
      vm.loaded = true;
    });
  }

};

MainFangraphsController.$inject = ['$scope', 'FangraphsService'];

export default MainFangraphsController;