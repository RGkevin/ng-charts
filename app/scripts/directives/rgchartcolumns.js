'use strict';

/**
 * @ngdoc directive
 * @name ngChartApp.directive:rgChartColumns
 * @description
 * # rgChartColumns
 */
angular.module('ngChartApp')
  .directive('rgChartColumns', function ($window) {
    return {
      //template: '<div></div>',
      restrict: 'EA',
      scope: {
        series: '=rgChartColumns'
      },
      link: function postLink(scope, element, attrs) {

        var $chart = new $window.Highcharts.Chart({
          chart: {
            type: 'column',
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
          xAxis: {
            crosshair: true,
            labels: {
              enabled: false
            }
          },
          yAxis: {
            title: {
              enabled: false
            },
            labels: {
              format: '{value}%',
              style: {
                color: $window.Highcharts.getOptions().colors[0]
              }
            },
          },
          /*tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
          },*/
          plotOptions: {
            column: {
              pointPadding: 0.2,
              borderWidth: 0
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
                $chart.series[ i].update({
                  name: history.name,
                  data: history.data
                }, true);
                //$chart.series[ i ].setName( history.name, true );
                //$chart.series[ i ].setData( history.data, true );
              }

            }

          }
        });

      }
    };
  });
