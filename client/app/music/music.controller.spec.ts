'use strict';

describe('Component: MusicComponent', function () {

  // load the controller's module
  beforeEach(module('yciwyeoApp'));

  var MusicComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    MusicComponent = $componentController('music', {});
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
