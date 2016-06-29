'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router'
  // TODO: load other modules selected during generation
])
  .config(function ($stateProvider, $urlRouterProvider) {

    // ROUTING with ui.router
    $urlRouterProvider.otherwise('/main/list');
    $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
      .state('main', {
        url: '/main',
        abstract: true,
        templateUrl: 'main/templates/nav-tabs.html',
      })
      .state('main.search', {
        url: '/main',
        views: {
          'searchPage': {
            templateUrl: 'main/templates/search.html',
            controller: 'ListCtrl as list'
          }
        }
      })
      .state('main.list', {
        url: '/list',
        views: {
          'tweetsPage': {
            templateUrl: 'main/templates/list.html',
            controller: 'ListCtrl as list'
          }
        }
      })
      .state('main.listDetail', {
        url: '/list/detail/:id',
        views: {
          'tweetsPage': {
            templateUrl: 'main/templates/list-detail.html',
            controller: 'ListDetailCtrl as detail'
          }
        }
      })
      .state('main.debug', {
        url: '/debug',
        views: {
          'infoPage': {
            templateUrl: 'main/templates/debug.html',
            controller: 'DebugCtrl as ctrl'
          }
        }
      })
      .state('main.info', {
        url: '/info',
        views: {
          'infoPage': {
            templateUrl: 'main/templates/info.html',
            controller: 'InfoCtrl as info'
          }
        }
      });
  });
