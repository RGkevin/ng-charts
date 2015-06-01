'use strict';

/**
 * @ngdoc function
 * @name ngChartApp.controller:DtCtrl
 * @description
 * # DtCtrl
 * Controller of the ngChartApp
 */
angular.module('ngChartApp')
  .controller('DtCtrl', function ($scope, ws, utility) {

    /**
     * DATA COMPLETENESS PAGE
     */

    /**
     * IM UNSPSC COMPLETENESS
     */
    $scope.im_unspsc_completeness = {
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
    ws.im_unspsc_completeness().then(function (response) {
      $scope.im_unspsc_completeness.count = response.txn_spend_pct;
      $scope.im_unspsc_completeness.series = [{
        name: ' ',
        data: [ ['You: with', response.you_with_pct], ['You: without', response.you_without_pct] ],
        size: '100%',
        innerSize: '68%',
        showInLegend:true,
        dataLabels: {
          enabled: false
        }
      }];
    });

    /**
     * IM MFG INFO COMPLETENESS
     */
    $scope.im_mfg_info_completeness = {
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
    ws.im_mfg_info_completeness().then(function (response) {
      $scope.im_mfg_info_completeness.count = response.txn_spend_pct;
      $scope.im_mfg_info_completeness.series = [{
        name: ' ',
        data: [ ['You: with', response.you_with_pct], ['You: without', response.you_without_pct] ],
        size: '100%',
        innerSize: '68%',
        showInLegend:true,
        dataLabels: {
          enabled: false
        }
      }];
    });

    /**
     * IM PKG CONVERSION COMPLETENESS
     */
    $scope.im_pkg_conversion_completeness = {
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
    ws.im_pkg_conversion_completeness().then(function (response) {
      $scope.im_pkg_conversion_completeness.count = response.txn_spend_pct;
      $scope.im_pkg_conversion_completeness.series = [{
        name: ' ',
        data: [ ['You: with', response.you_with_pct], ['You: without', response.you_without_pct] ],
        size: '100%',
        innerSize: '68%',
        showInLegend:true,
        dataLabels: {
          enabled: false
        }
      }];
    });

    /**
     * IM HCPCS CODE COMPLETENESS
     */
    $scope.im_hcpcs_code_completeness = {
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
    ws.im_hcpcs_code_completeness().then(function (response) {
      $scope.im_hcpcs_code_completeness.count = response.txn_spend_pct;
      $scope.im_hcpcs_code_completeness.series = [{
        name: ' ',
        data: [ ['You: with', response.you_with_pct], ['You: without', response.you_without_pct] ],
        size: '100%',
        innerSize: '68%',
        showInLegend:true,
        dataLabels: {
          enabled: false
        }
      }];
    });

    /**
     * PERCENT OF PRODUCT SPEND WITH DATA INCOMPLETENESS
     */
    $scope.percent_of_product_spend_with_data_incompleteness = {
      dates: [],
      histories: [{
        name: 'Percent of product Spend with data incompleteness',
        data: []
      }, {
        name: 'DM Subscriber AVG',
        data: []
      }, {
        name: 'Membership AVG',
        data: []
      }]
    };
    ws.percent_of_product_spend_with_data_incompleteness().then(function (response) {
      $scope.percent_of_product_spend_with_data_incompleteness = utility.parse_percent_of_product_spend_with_data_incompleteness(response);
    });

  });
