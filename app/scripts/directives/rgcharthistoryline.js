'use strict';

/**
 * @ngdoc directive
 * @name ngChartApp.directive:rgChartHistoryLine
 * @description
 * # rgChartHistoryLine
 */
angular.module('ngChartApp')
  .directive('rgChartHistoryLine', ['$window', 'rgConfig', function ($window, rgConfig) {
    return {
      templateUrl: rgConfig.get_views_path() + 'directivergcharthistoryline.html',
      restrict: 'EA',
      scope: {
        title: '@',
        series: '=rgChartHistoryLine',
        dates: '='
      },
      link: function postLink(scope, element, attrs) {
        //element.text('this is the rgChartHistoryLine directive');
        var $chart = null;
        var $chat_element = element.find( '.data-source-resume-chart' )[0];

        $chart = new $window.Highcharts.Chart({
          chart: {
            renderTo: $chat_element,
            type: 'line'
          },
          credits: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          title: {
            text: (scope.title || '')
          },
          xAxis: {
            categories: scope.dates || []
          },
          yAxis: {
            title: {
              enabled: false
            }
          },
          /*plotOptions: {
            line: {
              dataLabels: {
                enabled: true
              },
              enableMouseTracking: false
            }
          },*/
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
  }]);
