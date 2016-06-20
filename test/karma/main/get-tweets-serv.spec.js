'use strict';

describe('module: main, service: GetTweets', function () {

  // load the service's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var GetTweets;
  beforeEach(inject(function (_GetTweets_) {
    GetTweets = _GetTweets_;
  }));

  it('should do something', function () {
    expect(!!GetTweets).toBe(true);
  });

});
