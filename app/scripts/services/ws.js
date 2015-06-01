'use strict';

/**
 * @ngdoc service
 * @name ngChartApp.ws
 * @description
 * # ws
 * Service in the ngChartApp.
 */
angular.module('ngChartApp')
  .service('ws', ['$timeout', '$q', function ($timeout, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    /**
     * get summary ranks
     * @returns {*}
     */
    this.ranks = function () {
      var deferred = $q.defer();

      var data = {
        "http_status": 200,
        "ov_rank": 206,
        "dq_rank": 255,
        "dc_rank": 248,
        "cs_rank": 108
      };

      var a = $timeout(function () {
        deferred.resolve(data);
      }, 3000);

      return deferred.promise;
    };


    /**
     * get control of spend data
     * @returns {*}
     */
    this.control_of_spend = function () {
      var deferred = $q.defer();
      var data = {
        "http_status":200,
        "special_prd_spend":0,
        "special_prd_cnt":0,
        "undentified_spend":1047624.34,
        "special_prd_spend_pct":0,
        "special_prd_cnt_pct":0,
        "undentified_spend_pct":0,
        "special_prd_spnd_pct_lst": [80,65,10,90],
        "special_prd_cnt_pct_lst": [80,65,10,90],
        "undentified_spend_pct_lst": [80,65,10,90]
      };

      var a = $timeout(function () {
        deferred.resolve(data);
      }, 3000);

      return deferred.promise;
    };

    /**
     * get data completes
     * @returns {*}
     */
    this.data_completeness = function () {
      var deferred = $q.defer();

      var data = {
        "http_status":200,
        "missing_mfg":0,
        "missing_unspsc":32153,
        "missing_pkg":8956,
        "missing_mfg_pct":0,
        "missing_unspsc_pct":.25,
        "missing_pkg_pct":.25,
        "missing_mfg_pct_lst":[0,0,0,0],
        "missing_unspsc_pct_lst":[1,0,0,0],
        "missing_pkg_pct_lst":[1,0,0,0]
      };

      var a = $timeout(function () {
        deferred.resolve(data);
      }, 3000);

      return deferred.promise;
    };

    /**
     * get data quality
     * @returns {*}
     */
    this.data_quality = function () {
      var deferred = $q.defer();

      var data = {
        "http_status":200,
        "mfg_discrepancy":5428,
        "unspsc_discrepancy":0,
        "hcpcs_discrepancy":0,
        "mfg_discrepancy_pct":0,
        "unspsc_discrepancy_pct":0,
        "hcpcs_discrepancy_pct":0,
        "mfg_discrepancy_pct_lst":[0,0,0,0],
        "unspsc_discrepancy_pct_lst":[0,0,0,0],
        "hcpcs_discrepancy_pct_lst":[0,0,0,0]
      };

      var a = $timeout(function () {
        deferred.resolve(data);
      }, 3000);

      return deferred.promise;
    };

    /**
     * get monthly ranks history data
     * @returns {*}
     */
    this.monthly_ranks = function () {
      var deferred = $q.defer();

      var data = {
        "http_status":200,
        "ov_rank_lst":[44,1,1,1,1,61,1,18,1,1,1,1],
        "dq_rank_lst":[44,1,1,31,41,1,1,1,61,1,1,1],
        "dc_rank_lst":[44,1,1,1,1,1,1,1,1,1,1,1],
        "cs_rank_lst":[44,1,1,1,71,1,71,1,1,51,1,1],
        "dt_lst":["04/01/2014","05/01/2014","06/01/2014","07/01/2014","08/01/2014","09/01/2014","10/01/2014","11/01/2014","12/01/2014","01/01/2015","02/01/2015","03/01/2015"]
      };
      var a = $timeout(function () {
        deferred.resolve(data);
      }, 3000);

      return deferred.promise;
    };

    /**
     * get expend impacted dirty data
     * @returns {*}
     */
    this.expend_impacted_dirty_data = function () {
      var deferred = $q.defer();

      var data = {
        "http_status":200,
        "dirty_txn_lst":[40,20,50,60,70,30,10,70,90,80,50,30],
        "clean_txn_lst":[0,0,0,0,0,0,0,0,0,0,0,0],
        "dt_lst":["04/01/2014","05/01/2014","06/01/2014","07/01/2014","08/01/2014","09/01/2014","10/01/2014","11/01/2014","12/01/2014","01/01/2015","02/01/2015","03/01/2015"]
      };
      var a = $timeout(function () {
        deferred.resolve(data);
      }, 3000);

      return deferred.promise;
    };

    /*
     * DATA SOURCE INFORMATION
     */

    /**
     * Active item master count data
     * @returns {*}
     */
    this.active_item_master = function () {
      var deferred = $q.defer();

      var data = {
        "http_status":200,
        "total_active_im":353683,
        "total_active_im_lst":[32153,32153,32153,32153,32153,32153,32153,30153,32153,32153,32153],
        "dt_lst": ["04/01/2014","05/01/2014","06/01/2014","07/01/2014","08/01/2014","09/01/2014","10/01/2014","11/01/2014","12/01/2014","01/01/2015","02/01/2015"]
      };
      var a = $timeout(function () {
        deferred.resolve( data );
      }, 3000);

      return deferred.promise;
    };

    /**
     * PO txn spend data
     * @returns {*}
     */
    this.po_txn_spend = function () {
      var deferred = $q.defer();

      var data = {
        "http_status":200,
        "total_txn_amount":45,
        "total_txn_cnt":140,
        "total_txn_lst":[0,0,0,0,0,0,0,0,0,0,0,0],
        "dt_lst":["04/01/2014","05/01/2014","06/01/2014","07/01/2014","08/01/2014","09/01/2014","10/01/2014","11/01/2014","12/01/2014","01/01/2015","02/01/2015","03/01/2015"]
      };
      var a = $timeout(function () {
        deferred.resolve(data);
      }, 3000);

      return deferred.promise;
    };

    /**
     * Invoice TXN spend data
     * @returns {*}
     */
    this.invoice_txn_spend = function () {
      var deferred = $q.defer();

      var data = {
        "http_status":200,
        "total_inv_amount":20,
        "total_inv_cnt":50,
        "total_inv_lst":[0,0,0,30,0,10,0,0,0,0,0,0],
        "dt_lst":["04/01/2014","05/01/2014","06/01/2014","07/01/2014","08/01/2014","09/01/2014","10/01/2014","11/01/2014","12/01/2014","01/01/2015","02/01/2015","03/01/2015"]
      };
      var a = $timeout(function () {
        deferred.resolve(data);
      }, 3000);

      return deferred.promise;
    };

    /**
     * CONTROL OF SPEND data
     */

    /**
     * SPEND TRANSACTION MIX BY SOURCE
     * @returns {*}
     */
    this.spend_transaction_mix = function () {
      var deferred = $q.defer();

      var data = {
        "http_status":200,
        "im_txn":2000,
        "special_txn":1000,
        "txn_spend_pct":50
      };
      var a = $timeout(function () {
        deferred.resolve(data);
      }, 3000);

      return deferred.promise;
    };

    /**
     * SPECIAL PRODUCT TRANSACTION SPEND
     * @returns {*}
     */
    this.special_product_transaction_spend = function () {
      var deferred = $q.defer();

      var data = {
        "http_status":200,
        "txn_spend_pct_lst":[12,15,30,40,50,12,23,56,78,12,11,90],
        "dm_subscriber_avg_pct_lst":[30,30,30,30,31,30,30,30,30,30,30,30],
        "mbr_avg_pct_lst":[12,12,12,12,12,12,12,10,12,12,12,12],
        "dt_lst":["04/01/2014","05/01/2014","06/01/2014","07/01/2014","08/01/2014","09/01/2014","10/01/2014","11/01/2014","12/01/2014","01/01/2015","02/01/2015","03/01/2015"]
      };
      var a = $timeout(function () {
        deferred.resolve(data);
      }, 3000);

      return deferred.promise;
    };

    /**
     * TRANSACTIONS IMPACTED BY DATA ISSUES
     * @returns {*}
     */
    this.transactions_impacted = function () {
      var deferred = $q.defer();

      var data = {
        "http_status":200,
        "txn_sat_price":30,
        "txn_inv_price":55,
        "txn_duplicate":10,
        "lbs_lst":['% of TXN Price > SAT Price','% of TXN / Invoice TXN Price Errors','% of TXN Duplicate Record']
      };
      var a = $timeout(function () {
        deferred.resolve(data);
      }, 3000);

      return deferred.promise;
    };

    /**
     * UNIDENTIFIED SPEND BY SUPPLIER
     * @returns {*}
     */
    this.unidentified_spend_by_supplier = function () {
      var deferred = $q.defer();

      var data = {
        "http_status":200,
        "mfg_name_lst":['WOODHULL LLC','1558754 PRESIDIO NETWORKED SOLUTIONS','ADVANCED DATA RECOVERY SYSTEMS','427880 PHILIPS HEALTHCARE','ZONES','1522576 CDW GOVERNMENT','INC,HILL ROM','GE HEALTHCARE','COCHLEAR AMERICAS','APG OFFICE FURNISHINGS'],
        "unique_prdct_lst":[112,40,11,35,1,179,7,8,10,98],
        "circle_size_lst":[4,13,19,22,31,35,36,39,41,42],
        "metric_lst":[3088715,1016047,683290,594959,428130,375538,363750,336365,321953,312376],
      };
      var a = $timeout(function () {
        deferred.resolve(data);
      }, 3000);

      return deferred.promise;
    };

  }]);
