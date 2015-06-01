'use strict';

/**
 * @ngdoc directive
 * @name ngChartApp.directive:rgChartBarsAndLines
 * @description
 * # rgChartBarsAndLines
 */
angular.module('ngChartApp')
  .directive('rgChartBarsAndLines', function ($window) {
    return {
      restrict: 'EA',
      scope: {
        series: '=rgChartBarsAndLines',
        dates: '='
      },
      link: function postLink(scope, element, attrs) {
        //element.text('this is the rgChartBarsAndLines directive');
        var $chart = new $window.Highcharts.Chart({
          chart: {
            zoomType: 'xy',
            renderTo: element[0]
          },
          title: {
            text: ' '
          },
          credits: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          xAxis: [{
            categories: scope.dates || [],
            crosshair: true
          }],
          yAxis: [{ // Primary yAxis
            labels: {
              format: '{value}%',
              style: {
                color: $window.Highcharts.getOptions().colors[1]
              }
            },
            title: {
              enabled: false
            }
          }, { // Secondary yAxis
            title: {
              enabled: false
            },
            labels: {
              format: '{value}',
              style: {
                color: $window.Highcharts.getOptions().colors[0]
              }
            },
            opposite: true
          }],
          tooltip: {
            shared: true
          },
          series: scope.series || []
        });

        scope.$watch('series', function (newValue) {
          //console.log( 'new series', newValue );

          /**
           * reset series data
           */
          if ( newValue && newValue.length ) {

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
