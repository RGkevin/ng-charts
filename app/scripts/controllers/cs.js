'use strict';

/**
 * @ngdoc function
 * @name ngChartApp.controller:CsCtrl
 * @description
 * # CsCtrl
 * Controller of the ngChartApp
 */
angular.module('ngChartApp')
  .controller('CsCtrl', function ($scope, ws) {

    /**
     * Spend transaction mix data
     * @type {*[]}
     */
    $scope.spend_transaction_mix = {
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
    ws.spend_transaction_mix().then(function (response) {
      $scope.spend_transaction_mix.count = response.txn_spend_pct;
      $scope.spend_transaction_mix.series = [{
        name: ' ',
        data: [ ['Special TXN', response.special_txn], ['IM TXN', response.im_txn] ],
        size: '100%',
        innerSize: '68%',
        showInLegend:true,
        dataLabels: {
          enabled: false
        }
      }];
    });

  });
