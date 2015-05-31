'use strict';

describe('Service: ws', function () {

  // load the service's module
  beforeEach(module('ngChartApp'));

  // instantiate service
  var ws;
  beforeEach(inject(function (_ws_) {
    ws = _ws_;
  }));

  it('should do something', function () {
    expect(!!ws).toBe(true);
  });

});
