'use strict';

/**
 * @ngdoc service
 * @name ngChartApp.utility
 * @description
 * # utility
 * Service in the ngChartApp.
 */
angular.module('ngChartApp')
  .service('utility', function ($filter) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    /**
     * parse control of spend data to match rgDataSummary directive
     * @param data_from_service
     * @returns {Array}
     */
    this.parse_control_of_spend = function (data_from_service) {
      var parsed = [];

      parsed.push({
        label: '% of Special Product Spend:',
        spend: data_from_service.special_prd_spend,
        pct: data_from_service.special_prd_cnt_pct,
        lst: data_from_service.special_prd_spnd_pct_lst
      });

      parsed.push({
        label: '% of Special Product Transactions:',
        spend: data_from_service.special_prd_cnt,
        pct: data_from_service.special_prd_cnt_pct,
        lst: data_from_service.special_prd_cnt_pct_lst
      });

      parsed.push({
        label: '% of Unidentified Spend:',
        spend: data_from_service.undentified_spend,
        pct: data_from_service.undentified_spend_pct,
        lst: data_from_service.undentified_spend_pct_lst
      });

      return parsed;
    };

    /**
     * parse data completeness to match rgDataSummary directive
     * @param data_from_service
     * @returns {Array}
     */
    this.parse_data_completeness = function (data_from_service) {
      var parsed = [];

      parsed.push({
        label: '% IM Records Missing MFG Inf:',
        spend: data_from_service.missing_mfg,
        pct: data_from_service.missing_mfg_pct,
        lst: data_from_service.missing_mfg_pct_lst
      });

      parsed.push({
        label: '% IM Records Missing UNSPSC:',
        spend: data_from_service.missing_unspsc,
        pct: data_from_service.missing_unspsc_pct,
        lst: data_from_service.missing_unspsc_pct_lst
      });

      parsed.push({
        label: '% IM Records with Missing Pkg:',
        spend: data_from_service.missing_pkg,
        pct: data_from_service.missing_pkg_pct,
        lst: data_from_service.missing_pkg_pct_lst
      });

      return parsed;
    };

    this.parse_data_quality = function (data_from_service) {
      var parsed = [];

      parsed.push({
        label: '% TXN w/MFG Cat No Discrepancy:',
        spend: data_from_service.mfg_discrepancy,
        pct: data_from_service.mfg_discrepancy_pct,
        lst: data_from_service.mfg_discrepancy_pct_lst
      });

      parsed.push({
        label: '% IM Records w/UNSPSC Discrepancy:',
        spend: data_from_service.unspsc_discrepancy,
        pct: data_from_service.unspsc_discrepancy_pct,
        lst: data_from_service.hcpcs_discrepancy_pct_lst
      });

      parsed.push({
        label: '% IM Records w/HCPCS Discrepancy:',
        spend: data_from_service.hcpcs_discrepancy,
        pct: data_from_service.hcpcs_discrepancy_pct,
        lst: data_from_service.hcpcs_discrepancy_pct_lst
      });

      return parsed;
    };

    /**
     * parse date
     * 04/01/2015 to Apr-15
     * @param dates
     * @returns {Array}
     */
    function parseDatesChartCategories(dates) {
      var parsed_dates = [];
      // parse dates
      for ( var i = 0; i < dates.length; i++ ) {
        var date = new Date(dates[i]);
        var date_filtered = $filter('date')( date, 'MMM-yy' );

        parsed_dates.push( date_filtered );

      }
      return parsed_dates;
    }

    /**
     * Parse monthly ranks data
     * @param data_from_service
     * @returns {{dates: Array, histories: Array}}
     */
    this.parse_monthly_ranks = function (data_from_service) {
      var parsed = {
        dates: [],
        histories: []
      };

      parsed.dates = parseDatesChartCategories(data_from_service.dt_lst);

      // parse histories "overall rank"
      parsed.histories.push({
        name: 'Overall Rank',
        data: data_from_service.ov_rank_lst
      });
      // parse histories "overall rank"
      parsed.histories.push({
        name: 'Control of Spend Rank',
        data: data_from_service.cs_rank_lst
      });
      // parse histories "overall rank"
      parsed.histories.push({
        name: 'Data Quality Rank',
        data: data_from_service.dq_rank_lst
      });
      // parse histories "overall rank"
      parsed.histories.push({
        name: 'Data Completeness Rank',
        data: data_from_service.dc_rank_lst
      });


      return parsed;
    };

    /**
     * parse dirty data
     * @param data_from_service
     * @returns {{dates: Array, histories: Array}}
     */
    this.parse_expend_impacted_dirty_data = function (data_from_service) {
      var parsed = {
        dates: [],
        histories: []
      };

      parsed.dates = parseDatesChartCategories(data_from_service.dt_lst);

      parsed.histories.push({
        name: 'DirtyTXN Count',
        data: data_from_service.dirty_txn_lst
      }, {
        name: 'CleanTXN Count',
        data: data_from_service.clean_txn_lst
      });

      return parsed;
    };

    /**
     * DATA SOURCE INFORMATION SECTION
     */

    /**
     * Active Item master parse
     * @param data_from_service
     * @returns {{dates: Array, lines: Array}}
     */
    this.parse_active_item_master = function (data_from_service) {
      var parsed = {
        dates: [],
        series: []
      };

      parsed.dates = parseDatesChartCategories(data_from_service.dt_lst);

      parsed.series.push({
        name: ' ',
        showInLegend: false,
        data: data_from_service.total_active_im_lst
      });

      return parsed;
    };

    /**
     * PO TXN spend parse
     * @param data_from_service
     * @returns {{dates: Array, series: Array}}
     */
    this.parse_po_txn_spend = function (data_from_service) {
      var parsed = {
        dates: [],
        series: []
      };

      parsed.dates = parseDatesChartCategories(data_from_service.dt_lst);
      parsed.series.push({
        name: ' ',
        showInLegend: false,
        data: data_from_service.total_txn_lst
      });

      return parsed;
    };

    /**
     * Invoice TXN spend parse
     * @param data_from_service
     * @returns {{dates: Array, series: Array}}
     */
    this.parse_invoice_txn_spend = function (data_from_service) {
      var parsed = {
        dates: [],
        series: []
      };

      parsed.dates = parseDatesChartCategories(data_from_service.dt_lst);
      parsed.series.push({
        name: ' ',
        showInLegend: false,
        data: data_from_service.total_inv_lst
      });

      return parsed;
    };

    /**
     * Special product transaction spend data
     * @param data_from_service
     * @returns {{dates: Array, series: Array}}
     */
    this.parse_special_product_transaction_spend = function (data_from_service) {
      var parsed = {
        dates: [],
        series: []
      };

      parsed.dates = parseDatesChartCategories(data_from_service.dt_lst);
      parsed.series.push({
        name: 'Special Product TXN Spend',
        type: 'column',
        yAxis: 1,
        showInLegend: false,
        data: data_from_service.txn_spend_pct_lst
      });
      parsed.series.push({
        name: 'DM Subscriber AVS',
        type: 'line',
        data: data_from_service.dm_subscriber_avg_pct_lst,
        tooltip: {
          valueSuffix: '%'
        }
      });
      parsed.series.push({
        name: 'Membership AVG',
        type: 'line',
        data: data_from_service.mbr_avg_pct_lst,
        tooltip: {
          valueSuffix: '%'
        }
      });

      return parsed;
    };

    /**
     * transactions impacted
     * @param data_from_service
     * @returns {{series: Array}}
     */
    this.parse_transactions_impacted = function (data_from_service) {
      var parsed = {
        series: []
      };

      parsed.series.push({
        name: data_from_service.lbs_lst[0],
        data: [data_from_service.txn_sat_price]
      });
      parsed.series.push({
        name: data_from_service.lbs_lst[1],
        data: [data_from_service.txn_inv_price]
      });
      parsed.series.push({
        name: data_from_service.lbs_lst[2],
        data: [data_from_service.txn_duplicate]
      });

      return parsed;
    };

  });
