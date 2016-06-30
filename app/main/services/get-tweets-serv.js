'use strict';
angular.module('main')
  .service('GetTweets', function ($log, GetOAuth2Token, $http) {

    var that = this;

    this.data = {
      searchString: '',
      tweets: {},
      trendingHashTags: {}
    };

    this.hasTweets = function () {
      return !!that.data.tweets.statuses && that.data.tweets.statuses.length > 0;
    };

    this.searchFor = function (searchString) {
      var encondedSearchString = _encodeSearchString(searchString);

      return GetOAuth2Token.getToken().then(function () {
        return _sendRequest(encondedSearchString).then(function (result) {
          result.data.statuses.forEach(_formatLinks);
          return that.data.tweets = result.data;
        });
      });
    };

    this.searchNearGeolocation = function (long, lat) {
      var searchOptions = {
        long: long,
        lat: lat
      };

      return GetOAuth2Token.getToken().then(function () {
        return _sendGeoRequest(searchOptions).then(function (result) {
          that.data.trendingHashTags = result.data[0];
        });
      });
    };

    this.getTweet = function (id) {
      var selectedTweet;

      if (!that.hasTweets()) {
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

    var _getWOEID = function (lat, long) {
      var searchUrlPrefix = 'https://api.twitter.com/1.1/trends/closest.json?';
      return $http({
        method: 'GET',
        url: searchUrlPrefix + lat + long
      }).then(function successCallback (response) {
        return response;
      }, function errorCallback (response) {
        $log.log(response);
      });
    };

    var _getTrendsPlace = function (WOEID) {
      var searchUrlPrefix = 'https://api.twitter.com/1.1/trends/place.json?',
        id = 'id=' + WOEID.data[0].woeid;
      return $http({
        method: 'GET',
        url: searchUrlPrefix + id
      }).then(function successCallback (response) {
        return response;
      }, function errorCallback (response) {
        $log.log(response);
      });
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

    var _sendGeoRequest = function (searchJson) {
      var lat = 'lat=' + searchJson.lat,
        long = '&long=' + searchJson.long;

      return _getWOEID(lat, long).then(function (WOEID1) {
        return _getTrendsPlace(WOEID1);
      });
    };

    var _encodeSearchString = function (searchString) {
      return encodeURIComponent(searchString);
    };

    var _formatLinks = function (tweet) {
      var urls = tweet.entities.urls;
      tweet.formattedText = tweet.text;

      urls.forEach(function (urlEntity) {
        var url = urlEntity.url;
        var displayUrl = urlEntity.display_url;
        var expandedUrl = urlEntity.expanded_url;

        tweet.formattedText = tweet.formattedText.replace(url, displayUrl.link(expandedUrl));
      });
    };

  });
