'use strict';

describe('Controller: DtCtrl', function () {

  // load the controller's module
  beforeEach(module('ngChartApp'));

  var DtCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DtCtrl = $controller('DtCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
