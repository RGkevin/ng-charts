'use strict';

/**
 * @ngdoc directive
 * @name ngChartApp.directive:rgChartDonut
 * @description
 * # rgChartDonut
 */
angular.module('ngChartApp')
  .directive('rgChartDonut', function ($window) {
    return {
      restrict: 'EA',
      scope: {
        series: '=rgChartDonut'
      },
      link: function postLink(scope, element, attrs) {

        var $chart = new Highcharts.Chart({
          chart: {
            renderTo: element[0],
            type: 'pie'
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
          legend: {
            align: 'right'
          },
          yAxis: {
            title: {
              enabled: false
            }
          },
          plotOptions: {
            pie: {
              shadow: false
            }
          },
          tooltip: {
            formatter: function() {
              return '<b>'+ this.point.name +'</b>: '+ this.y;
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

            for (var i = 0; i < newValue.length; i++) {
              var history = newValue[i];
              if ( $chart.series[ i ] ) {
                $chart.series[ i ].setData( history.data, true );
              }

            }

          }
        });

      }
    };
  });
