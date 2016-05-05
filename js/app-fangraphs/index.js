import angular from 'angular';

// controllers
import MainFangraphsController from './controllers/main.controller';
import LoadPlayersController from './controllers/load-players.controller';


// services
import FangraphsService from './services/fangraphs.service';

angular
  .module('app.fangraphs', [])
  
  // controllers
  .controller('MainFangraphsController', MainFangraphsController)
  .controller('LoadPlayersController', LoadPlayersController)
  
  // services
  .service('FangraphsService', FangraphsService)

;