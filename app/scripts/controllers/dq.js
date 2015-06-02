'use strict';

/**
 * @ngdoc function
 * @name ngChartApp.controller:DqCtrl
 * @description
 * # DqCtrl
 * Controller of the ngChartApp
 */
angular.module('ngChartApp')
  .controller('DqCtrl', function ($scope, ws, utility) {

    /**
     * PERCENT OF IM PRODUCTS WITH INCORRECT MFG. CATALOG NUMBER
     */
    $scope.percent_of_product_with_incorrect_mfg = {
      dates: [],
      histories: [{
        name: 'Percent of IM products w/ incorrect MFG Catalog No',
        data: []
      },{
        name: 'DM Subscriber AVG',
        data: []
      }, {
        name: 'Membership AVG',
        data: []
      }]
    };
    ws.percent_of_product_with_incorrect_mfg().then(function (response) {
      $scope.percent_of_product_with_incorrect_mfg = utility.parse_percent_of_product_with_incorrect_mfg(response);
    });

    /**
     * PERCENT OF TXN PRODUCT SPEND WITH INCORRECT MFG. CATALOG NUMBER
     */
    $scope.percent_of_txn_product_spend = {
      series: [{
        data: [],
        type: 'column',
        name: 'Percent of TXN products w/ incorrect MFG Catalog No',
        tooltip: {
          valueSuffix: '%'
        }
      },{
        data: [],
        name: 'DM Subscriber AVG',
        type: 'line',
        tooltip: {
          valueSuffix: '%'
        }
      },{
        data: [],
        type: 'line',
        name: 'Membership AVG',
        tooltip: {
          valueSuffix: '%'
        }
      }],
      dates: []
    };
    ws.percent_of_txn_product_spend().then(function (response) {
      $scope.percent_of_txn_product_spend = utility.parse_percent_of_txn_product_spend(response);
    });

    /**
     * IM PRODUCT UNSPSC DISCREPANCY
     */
    $scope.im_product_unspsc_discrepancy = {
      count: 0,
      series: [{
        name: ' ',
        data: [],
        size: '100%',
        innerSize: '68%',
        showInLegend:true,
        dataLabels: {
          enabled: false
        }
      }]
    };
    ws.im_product_unspsc_discrepancy().then(function (response) {
      $scope.im_product_unspsc_discrepancy.count = response.txn_spend_pct;
      $scope.im_product_unspsc_discrepancy.series = [{
        name: ' ',
        data: [ ['You: With', response.you_with_pct], ['You: Without', response.you_without_pct] ],
        size: '100%',
        innerSize: '68%',
        showInLegend:true,
        dataLabels: {
          enabled: false
        }
      }];
    });

    /**
     * IM PRODUCT HCPCS DISCREPANCY
     */
    $scope.im_product_hcpcs_discrepancy = {
      count: 0,
      series: [{
        name: ' ',
        data: [],
        size: '100%',
        innerSize: '68%',
        showInLegend:true,
        dataLabels: {
          enabled: false
        }
      }]
    };
    ws.im_product_hcpcs_discrepancy().then(function (response) {
      $scope.im_product_hcpcs_discrepancy.count = response.txn_spend_pct;
      $scope.im_product_hcpcs_discrepancy.series = [{
        name: ' ',
        data: [ ['You: With', response.you_with_pct], ['You: Without', response.you_without_pct] ],
        size: '100%',
        innerSize: '68%',
        showInLegend:true,
        dataLabels: {
          enabled: false
        }
      }];
    });

    /**
     * PERCENT OF INTRODUCTION RATE OF POOR DATA QUALITY INTO THE ITEM MASTER
     */
    $scope.percent_of_introduction = {
      dates: [],
      histories: [{
        name: 'Percent of product Spend with data incompleteness',
        data: []
      }]
    };
    ws.percent_of_introduction().then(function (response) {
      $scope.percent_of_introduction = utility.parse_percent_of_introduction(response);
    });

  });
