import angular from 'angular';

// controllers
import MainFangraphsController from './controllers/main.controller';


// services
import FangraphsService from './services/fangraphs.service';

angular
  .module('app.fangraphs', [])
  
  // controllers
  .controller('MainFangraphsController', MainFangraphsController)
  
  // services
  .service('FangraphsService', FangraphsService)

;