'use strict';

describe('module: main, service: GetOAuth2Token', function () {

  // load the service's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var GetOAuth2Token;
  beforeEach(inject(function (_GetOAuth2Token_) {
    GetOAuth2Token = _GetOAuth2Token_;
  }));

  it('should do something', function () {
    expect(!!GetOAuth2Token).toBe(true);
  });

});
