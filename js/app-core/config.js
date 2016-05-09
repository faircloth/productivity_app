let config = function($urlRouterProvider, $stateProvider) {
  
  // if route not detected, send to root
  // $urlRouterProvider.otherwise('/');

  // front-end routes
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/app-layout/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      views: {
        navbar: {
          templateUrl: 'templates/app-layout/navbar.tpl.html'
        },
        content: {
          templateUrl: 'templates/home.tpl.html'
        }
      }
    })
    .state('root.notes', {
      url: '/notes',
      views: {
        navbar: {
          templateUrl: 'templates/app-layout/navbar.tpl.html'
        },
        content: {
          controller: 'ViewNotesController as vm',
          templateUrl: 'templates/app-notes/notes.tpl.html'
        }
      }
    })
    .state('root.view-note', {
      url: '/notes/:_id',
      views: {
        navbar: {
          templateUrl: 'templates/app-layout/navbar.tpl.html'
        },
        content: {
          controller: 'ViewOneNoteController as vm',
          templateUrl: 'templates/app-notes/note.tpl.html'
        }
      }
    })
    .state('root.fangraphs', {
      url: '/fangraphs',
      views: {
        navbar: {
          templateUrl: 'templates/app-layout/navbar.tpl.html'
        },
        content: {
          controller: 'MainFangraphsController as vm',
          templateUrl: 'templates/app-fangraphs/main-fangraphs.tpl.html'
        }
      }
    })
    .state('root.load-players', {
      url: '/fangraphs/load-players',
      views: {
        navbar: {
          templateUrl: 'templates/app-layout/navbar.tpl.html'
        },
        content: {
          controller: 'LoadPlayersController as vm',
          templateUrl: 'templates/app-fangraphs/load-players.tpl.html'
        }
      }
    })
    .state('root.manage-players', {
      url: '/fangraphs/manage-players',
      views: {
        navbar: {
          templateUrl: 'templates/app-layout/navbar.tpl.html'
        },
        content: {
          controller: 'ManagePlayersController as vm',
          templateUrl: 'templates/app-fangraphs/manage-players.tpl.html'
        }
      }
    });

};

config.$inject = ['$urlRouterProvider', '$stateProvider'];

export default config;