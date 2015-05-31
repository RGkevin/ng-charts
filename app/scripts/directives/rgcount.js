'use strict';

/**
 * @ngdoc directive
 * @name ngChartApp.directive:rgCount
 * @description
 * # rgCount
 */
angular.module('ngChartApp')
  .directive('rgCount', ['$window', function ($window) {
    return {
      restrict: 'EA',
      scope: {
        value: '=rgCount',
        suffix: '@',
        prefix: '@'
      },
      link: function postLink(scope, element) {

        var value = scope.value || 0,
          options = {
            suffix: scope.suffix || '',
            prefix: scope.prefix || ''
          },
          $counter = new $window.CountUp( element[0], 0, value, 0, 1.5, options );

        scope.$watch( 'value', function (newValue, oldValue) {
          $counter.update(parseInt(newValue || 0));
          $counter.start();
        });

      }
    };
  }]);
