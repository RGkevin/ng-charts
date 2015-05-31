'use strict';

/**
 * @ngdoc directive
 * @name ngChartApp.directive:rgChartTimelines
 * @description
 * # rgChartTimelines
 */
angular.module('ngChartApp')
  .directive('rgChartTimelines', function ($window) {
    return {
      restrict: 'EA',
      scope: {
        series: '=rgChartTimelines',
        dates: '='
      },
      link: function postLink(scope, element, attrs) {

        var $chart = null;

        $chart = new $window.Highcharts.Chart({

          chart: {
            renderTo: element[0],
            type: 'spline'
          },
          credits: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          title: {
            text: ''
          },
          xAxis: {
            categories: scope.dates || []
          },
          yAxis: {
            title: {
              enabled: false
            }
          },
          plotOptions: {
            line: {
              dataLabels: {
                enabled: true
              },
              enableMouseTracking: false
            }
          },
          series: scope.series || []

        });

        scope.$watch('series', function (newValue) {
          //console.log( 'new series', newValue );

          /**
           * reset series data
           */
          if ( newValue && newValue.length ) {
            //console.log( 'nueva serie', newValue );

            for (var i = 0; i < newValue.length; i++) {
              var history = newValue[i];
              if ( $chart.series[ i ] ) {
                $chart.series[ i ].setData( history.data, true );
              }

            }

          }
        });

        scope.$watch('dates', function (newValue) {
          //console.log( 'new dates', newValue );
          // reset categories
          if ( newValue && newValue.length ) {
            $chart.xAxis[0].update({categories: newValue}, true);
          }

        });

      }
    };
  });
