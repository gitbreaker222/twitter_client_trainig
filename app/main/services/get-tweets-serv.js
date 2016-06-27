'use strict';
angular.module('main')
  .service('GetTweets', function ($log, GetOAuth2Token, $http) {

    var that = this;
    var _hasTweets = function () {
      return !!that.data.tweets.statuses && that.data.tweets.statuses.length > 0;
    };
    var _sendRequest = function (searchStringEncoded) {
      var searchUrlPrefix = 'https://api.twitter.com/1.1/search/tweets.json?q=',
        searchUrlPostfix = '&src=typd';

      return $http({
        method: 'GET',
        url: searchUrlPrefix + searchStringEncoded + searchUrlPostfix
      }).then(function successCallback (response) {
        return response;
      }, function errorCallback (response) {
        $log.log(response);
      });
    };
    var _encodeSearchString = function (searchString) {
      return searchString.replace(/#/g, '%23')
        .replace(/@/g, '%40')
        .replace(/\(/g, '%28')
        .replace(/\)/g, '%29')
        .replace(/:/g, '%3A')
        .replace(/"/g, '%22')
        .replace(/\s/g, '%20');
    };

    this.data = {
      searchString: '',
      tweets: {}
    };

    this.get = function (searchString) {
      var encondedSearchString = _encodeSearchString(searchString);

      return GetOAuth2Token.getToken().then(function () {
        return _sendRequest(encondedSearchString).then(function (result) {
          that.data.tweets = result.data;
        });
      });
    };

    this.getTweet = function (id) {
      var selectedTweet;

      if (!_hasTweets()) {
        return null;
      }

      that.data.tweets.statuses.every(function (tweet) {
        if ((tweet.id + '') === id) {
          selectedTweet = tweet;
          return false;
        }
        return true;
      });

      return selectedTweet;
    };

  });
