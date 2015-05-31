'use strict';

/**
 * @ngdoc function
 * @name ngChartApp.controller:DsiCtrl
 * @description
 * # DsiCtrl
 * Controller of the ngChartApp
 */
angular.module('ngChartApp')
  .controller('DsiCtrl', ['$scope', 'ws', 'utility', function ($scope, ws, utility) {

    /**
     * Main Counters
     */
    $scope.total_counters = {
      // Active item master
      total_active_im: 0,
      // PO txn spend
      total_txn_amount: 0,
      total_txn_cnt: 0,
      // Invoice TXN spend
      total_inv_amount: 0,
      total_inv_cnt: 0
    };

    /**
     * Main Charts Info
     * ## ACTIVE ITEM MASTER COUNT
     */
    $scope.active_item_master = {
      series: [{
        showInLegend: false,
        name: ' ',
        data: []
      }],
      dates: []
    };

    /**
     * GET data
     * Active Item Master
     */
    ws.active_item_master().then(function (response) {
      $scope.total_counters.total_active_im = response.total_active_im;
      $scope.active_item_master = utility.parse_active_item_master( response );
    });

    /**
     * Main Charts Info
     * ## PO txn spend
     */
    $scope.po_txn_spend = {
      series: [{
        showInLegend: false,
        name: ' ',
        data: []
      }],
      dates: []
    };

    /**
     * GET data
     * PO txn spend
     */
    ws.po_txn_spend().then(function (response) {
      $scope.total_counters.total_txn_amount = response.total_txn_amount;
      $scope.total_counters.total_txn_cnt = response.total_txn_cnt;
      $scope.po_txn_spend = utility.parse_po_txn_spend( response );
    });

    /**
     * Main Charts Info
     * ## Invoice txn spend
     */
    $scope.invoice_txn_spend = {
      series: [{
        showInLegend: false,
        name: ' ',
        data: []
      }],
      dates: []
    };

    /**
     * GET data
     * Invoice TXN spend
     */
    ws.invoice_txn_spend().then(function (response) {
      console.log( 'response', response );
      $scope.total_counters.total_inv_amount = response.total_inv_amount;
      $scope.total_counters.total_inv_cnt = response.total_inv_cnt;
      $scope.invoice_txn_spend = utility.parse_invoice_txn_spend(response);
    });


  }]);
