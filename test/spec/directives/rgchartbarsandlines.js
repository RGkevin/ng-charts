'use strict';

describe('Directive: rgChartBarsAndLines', function () {

  // load the directive's module
  beforeEach(module('ngChartApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<rg-chart-bars-and-lines></rg-chart-bars-and-lines>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the rgChartBarsAndLines directive');
  }));
});
