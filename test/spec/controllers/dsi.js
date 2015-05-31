'use strict';

describe('Controller: DsiCtrl', function () {

  // load the controller's module
  beforeEach(module('ngChartApp'));

  var DsiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DsiCtrl = $controller('DsiCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
