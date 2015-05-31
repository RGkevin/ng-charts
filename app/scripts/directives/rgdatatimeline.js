'use strict';

/**
 * @ngdoc directive
 * @name ngChartApp.directive:rgDataTimeline
 * @description
 * # rgDataTimeline
 */
angular.module('ngChartApp')
  .directive('rgDataTimeline', ['rgConfig', function (rgConfig) {
    return {
      templateUrl: rgConfig.get_views_path() + 'directivergdatatimeline.html',
      restrict: 'EA',
      scope: {
        title: '@',
        series: '=rgDataTimeline',
        dates: '='
      },
      link: function postLink(scope, element, attrs) {

      }
    };
  }]);
