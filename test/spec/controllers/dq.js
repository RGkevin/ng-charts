'use strict';

describe('Controller: DqCtrl', function () {

  // load the controller's module
  beforeEach(module('ngChartApp'));

  var DqCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DqCtrl = $controller('DqCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
