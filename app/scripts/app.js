'use strict';

/**
 * @ngdoc overview
 * @name ngChartApp
 * @description
 * # ngChartApp
 *
 * Main module of the application.
 */
angular
  .module('ngChartApp', [
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider , rgConfigProvider) {

    var global_views_path = '/views/';

    // set global views path
    rgConfigProvider.set_views_path( global_views_path );

    $routeProvider
      .when('/', {
        templateUrl: global_views_path + 'main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: global_views_path + 'about.html',
        controller: 'AboutCtrl'
      })
      .when('/dsi', {
        templateUrl: global_views_path + 'dsi.html',
        controller: 'DsiCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
