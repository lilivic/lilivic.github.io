'use strict';

describe('Controller: GridCtrl', function () {

  // load the controller's module
  beforeEach(module('lilivicApp'));

  var GridCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    GridCtrl = $controller('GridCtrl', {
      // place here mocked dependencies
    });
  }));

  //it('should attach a list of awesomeThings to the scope', function () {
  //  expect(GridCtrl.awesomeThings.length).toBe(3);
  //});
});
