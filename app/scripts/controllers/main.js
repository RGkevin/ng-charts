'use strict';

/**
 * @ngdoc function
 * @name ngChartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngChartApp
 */
angular.module('ngChartApp')
  .controller('MainCtrl', function ($scope, ws, utility) {

    // overall ranking
    $scope.overall = {
      rank: 0
    };

    // control of spend data
    // rg data summary directive data
    $scope.control_of_spend = {
      rank: 0,
      rows: []
    };

    // data completeness
    // rg data summary directive data
    $scope.data_completeness = {
      rank: 0,
      rows: []
    };

    // data quality
    // rg data summary directive data
    $scope.data_quality = {
      rank: 0,
      rows: []
    };

    /**
     * set control of spend data
     */
    ws.control_of_spend().then(function (response) {

      var parsed_data = utility.parse_control_of_spend( response );

      for (var i = 0; i < parsed_data.length;
           i++
      ) {
        var row = parsed_data[i];

        $scope.control_of_spend.rows.push( row );
      }

    });

    /**
     * set data completeness data
     */
    ws.data_completeness().then(function (response) {
      var parsed_data = utility.parse_data_completeness(response);

      for (var i = 0; i < parsed_data.length;
           i++
      ) {
        var row = parsed_data[i];

        $scope.data_completeness.rows.push( row );
      }

    });

    /**
     * set data quality
     */
    ws.data_quality().then(function (response) {
      var parsed_data = utility.parse_data_quality(response);

      for (var i = 0; i < parsed_data.length;
           i++
      ) {
        var row = parsed_data[i];

        $scope.data_quality.rows.push( row );
      }

    });

    /**
     * set ranks
     */
    ws.ranks().then(function (response) {

      $scope.control_of_spend.rank = response.cs_rank;
      $scope.data_completeness.rank = response.dc_rank;
      $scope.data_quality.rank = response.dq_rank;
      $scope.overall.rank = response.ov_rank;

    });

    // history charts

    $scope.history_charts = {
      monthly_ranks : {
        // monthly ranks
        histories: [{
          name: 'Overall Rank',
          data: []
        }, {
          name: 'Control of Spend Rank',
          data: []
        }, {
          name: 'Data Quality Rank',
          data: []
        }, {
          name: 'Data Completeness Rank',
          data: []
        }],
        dates: []
      },
      // expend impacted dirty data
      expend_impacted_by_dirty_data : {
        dates: [],
        histories: [{
          name: 'DirtyTXN Count',
          data: []
        }, {
          name: 'CleanTXN Count',
          data: []
        }]
      }

    };



    // set monthly ranks data
    ws.monthly_ranks().then(function (response) {

      $scope.history_charts.monthly_ranks = utility.parse_monthly_ranks(response);

      /*var parsed_data = utility.parse_monthly_ranks(response);

      for (var i = 0; i < parsed_data.dates.length; i++) {
        var date = parsed_data.dates[i];
        $scope.history_charts.monthly_ranks.dates.push(date);
      }

      console.log( 'parsed_data.histories', parsed_data.histories );
      for (var i = 0; i < parsed_data.histories.length; i++) {
        var history = parsed_data.histories[i];
        $scope.history_charts.monthly_ranks.histories[i].data = history.data;
      }*/

    });

    // set expend impacted by dirty data
    ws.expend_impacted_dirty_data().then(function (response) {

      $scope.history_charts.expend_impacted_by_dirty_data = utility.parse_expend_impacted_dirty_data(response);

    });

  });
