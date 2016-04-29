// angular modules
import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';

// import app modules
import config from './config';
import HEROKU from './heroku.constant';


// instantiate angular app
angular
  .module('app.core', ['ui.router', 'ngCookies'])
  .constant('HEROKU', HEROKU)
  .config(config)
;