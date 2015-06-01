'use strict';

/**
 * @ngdoc directive
 * @name ngChartApp.directive:rgChartBubbles
 * @description
 * # rgChartBubbles
 */
angular.module('ngChartApp')
  .directive('rgChartBubbles', function ($window) {
    return {
      restrict: 'EA',
      scope: {
        series: '=rgChartBubbles'
      },
      link: function postLink(scope, element, attrs) {

        var
          rendered = false,
          unique_prdct_lst = [
            20,
            250,
            6,
            430,
            160,
            445,
            26,
            27,
            25,
            112
          ],
          circle_size_lst = [
            239818,
            194731,
            175000,
            161367,
            156204,
            145345,
            129746,
            126212,
            108475,
            106772
          ],
          metric_lst = [
            240,
            295,
            328,
            356,
            368,
            395,
            443,
            455,
            530,
            538
          ],
          mfg_name_lst = [
            "STRYKER ORTHOPAEDICS VN 83204",
            "MEDLINE INDUSTRIES HOLDINGS LC",
            "ABIOMED, INC.",
            "OWENS AND MINOR INC",
            "ANGIO DYNAMICS INC",
            "SYSCO PHILADELPHIA  FORMERLY PRESTIGE",
            "STRYKER NEUROVASCULAR . VN  931034",
            "EV3 INC SULZER INTRATHERAPEUTICS",
            "DFINE, INC.   VN 930607",
            "BOSTON SCIENTIFIC CORP SCIENT PL 68312"
          ],
          json_chart = [];

        //metric_lst, circle_size_lst, unique_prdct_lst

        function formatDataBubble(xValuesArray, yValuesArray, circleSizeArray, pointNameArray, success)
        {
          var
            arraysHasSameDimension = false,
            data_array = [];
          console.log(xValuesArray.length,yValuesArray.length,circleSizeArray.length,pointNameArray.length);
          arraysHasSameDimension = (xValuesArray.length === yValuesArray.length && xValuesArray.length === circleSizeArray.length && xValuesArray.length === pointNameArray.length);

          if( arraysHasSameDimension )
          {
            for(var i = 0; i < xValuesArray.length; i++)
            {
              var tempPoint = {data: [[xValuesArray[i], circleSizeArray[i], yValuesArray[i]]],name:pointNameArray[i]};
              data_array.push(tempPoint);
            }
            success( data_array );
          }
          else
          {
            console.error('Arrays must have the same dimension.');
            success( arraysHasSameDimension );
          }
        }

        scope.$watch('series', function (newValue) {

          if ( newValue && !rendered && newValue.unique_prdct_lst && newValue.circle_size_lst && newValue.metric_lst && newValue.mfg_name_lst ) {

            formatDataBubble(
              newValue.unique_prdct_lst,
              newValue.circle_size_lst,
              newValue.metric_lst,
              newValue.mfg_name_lst,
              function(success){
                json_chart = success;
              });

            element.highcharts({

              chart: {
                type: 'bubble',
                zoomType: 'xy'
              },
              credits: {
                enabled: false
              },
              exporting: {
                enabled: false
              },
              legend: {
                align: 'right',
                verticalAlign: 'top',
                layout: 'vertical',
                x: 0,
                y: 100
              },

              title: {
                text: ' '
              },

              series: json_chart
            });

            rendered = true;
          }
        });

      }
    };
  });
