'use strict';

/**
 * @ngdoc directive
 * @name ngChartApp.directive:rgChartQuarters
 * @description
 * # rgChartQuarters
 */
angular.module('ngChartApp')
  .directive('rgChartQuarters', ['$window', function ($window) {
    return {
      restrict: 'EA',
      scope: {
        data: '=rgChartQuarters'
      },
      link: function postLink(scope, element) {

        var $chart = new $window.Highcharts.Chart({
          chart: {
            renderTo: element[0],
            type: 'line'
          },
          exporting: {
            enabled: false
          },
          title: {
            text: ''
          },
          xAxis: {
            title: {
              enabled: false
            },
            labels: {
              enabled: false
            },
            lineWidth: 0,
            minorGridLineWidth: 0,
            lineColor: 'transparent',
            minorTickLength: 0,
            tickLength: 0
          },
          credits: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          yAxis: {
            title: {
              enabled: false
            },
            labels: {
              enabled: false
            },
            gridLineWidth: 0,
            lineWidth: 0,
            minorGridLineWidth: 0,
            lineColor: 'transparent',
            minorTickLength: 0,
            tickLength: 0
          },
          tooltip: {
            shared: false,
            valueSuffix: ' %'
          },
          series: [{
            name: ' ',
            data: scope.data || []
          }]
        });
      }
    };
  }]);
