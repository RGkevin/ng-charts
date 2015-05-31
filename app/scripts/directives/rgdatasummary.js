'use strict';

/**
 * @ngdoc directive
 * @name ngChartApp.directive:rgDataSummary
 * @description
 * # rgDataSummary
 */
angular.module('ngChartApp')
  .directive('rgDataSummary', ['rgConfig', function (rgConfig) {
    return {
      templateUrl: rgConfig.get_views_path() + 'directivergdatasummary.html',
      scope: {
        title: '@',
        rank: '=',
        label: '@rankLabel',
        rows: '=rgDataSummary'
      },
      restrict: 'EA',
      link: function postLink(scope, element) {



      }
    };
  }]);
