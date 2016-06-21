'use strict';
angular.module('main')
  .service('GetTweets', function (GetOAuth2Token, $http) {

    var _sendRequest = function (searchStringEncoded) {
      var searchUrlPrefix = 'https://api.twitter.com/1.1/search/tweets.json?q=',
        searchUrlPostfix = '&src=typd';

      return $http({
        method: 'GET',
        url: searchUrlPrefix + searchStringEncoded + searchUrlPostfix
      }).then(function successCallback(response) {
        return response
      }, function errorCallback(response) {
        console.log(response)
      });
    };
    var that = this;

    this.data = {
      searchString: '',
      tweets: {},
      testTeweets: {}
    };


    this.get = function (searchString) {
      var encondedSearchString = '%23kreator';

      return GetOAuth2Token.getToken().then(function () {
        return _sendRequest(encondedSearchString).then(function (result) {
          that.data.tweets = result.data;
        });
      });
    };

  });
