import $ from 'jquery';
import angular from 'angular';

// import app modules
import './app-core/index';
import './app-notes/index';

angular
  .module('app', ['app.core', 'app.notes'])
;


