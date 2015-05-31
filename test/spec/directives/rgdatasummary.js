'use strict';

describe('Directive: rgDataSummary', function () {

  // load the directive's module
  beforeEach(module('ngChartApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<rg-data-summary></rg-data-summary>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the rgDataSummary directive');
  }));
});
