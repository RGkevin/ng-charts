'use strict';

/**
 * @ngdoc service
 * @name ngChartApp.rgConfig
 * @description
 * # rgConfig
 * Provider in the ngChartApp.
 */
angular.module('ngChartApp')
  .provider('rgConfig', function () {

    // Private variables
    var views_path = '/views/';

    // Private constructor
    function Config() {

      this.get_views_path = function () {
        return views_path;
      };
    }

    // Public API for configuration
    this.set_views_path = function (p) {
      views_path = p;
    };

    // Method for instantiating
    this.$get = function () {
      return new Config();
    };
  });
