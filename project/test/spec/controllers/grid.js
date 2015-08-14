'use strict';

describe('Controller: GridCtrl', function () {

  // load the controller's module
  beforeEach(module('lilivicApp'));

  var GridCtrl;

  // Initialize the controller and a mock scope
  //beforeEach(inject(function ($controller, $rootScope) {
  beforeEach(inject(function ($controller) {
    GridCtrl = $controller('GridCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should do nothing for now...', function () {
    //  expect(GridCtrl.awesomeThings.length).toBe(3);
  });
});
