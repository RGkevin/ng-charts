'use strict';

describe('Service: rgConfig', function () {

  // load the service's module
  beforeEach(module('ngChartApp'));

  // instantiate service
  var rgConfig;
  beforeEach(inject(function (_rgConfig_) {
    rgConfig = _rgConfig_;
  }));

  it('should do something', function () {
    expect(!!rgConfig).toBe(true);
  });

});
