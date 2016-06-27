'use strict';

describe('module: main, service: InAppBrowser', function () {

  // load the service's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var InAppBrowser;
  beforeEach(inject(function (_InAppBrowser_) {
    InAppBrowser = _InAppBrowser_;
  }));

  it('should do something', function () {
    expect(!!InAppBrowser).toBe(true);
  });

});
