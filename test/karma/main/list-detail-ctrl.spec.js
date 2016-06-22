'use strict';

describe('module: main, controller: ListDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var ListDetailCtrl;
  beforeEach(inject(function ($controller) {
    ListDetailCtrl = $controller('ListDetailCtrl');
  }));

  it('should do something', function () {
    expect(!!ListDetailCtrl).toBe(true);
  });

});
