import angular from 'angular';

// controllers
import MainFangraphsController from './controllers/main.controller';
import LoadPlayersController from './controllers/load-players.controller';
import ManagePlayersController from './controllers/manage-players.controller';


// services
import FangraphsService from './services/fangraphs.service';

angular
  .module('app.fangraphs', [])
  
  // controllers
  .controller('MainFangraphsController', MainFangraphsController)
  .controller('LoadPlayersController', LoadPlayersController)
  .controller('ManagePlayersController', ManagePlayersController)
  
  // services
  .service('FangraphsService', FangraphsService)

;