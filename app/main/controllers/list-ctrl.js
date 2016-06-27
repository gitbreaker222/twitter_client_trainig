'use strict';
angular.module('main')
  .controller('ListCtrl', function ($log,
                                    $scope,
                                    GetTweets,
                                    $cordovaKeyboard,
                                    $cordovaGeolocation) {

    var that = this;

    this.data = GetTweets.data;
    this.hasTweets = GetTweets.hasTweets;
    this.loading = false;

    this.search = function (searchString) {
      that.closeKeyboard();

      if (searchString === '') {
        that.clearList();
        return;
      }

      that.loading = true;
      GetTweets.searchFor(searchString).then(function () {
        that.loading = false;
      }, function () {
        that.loading = false;
      });
    };

    this.searchNearGeolocation = function () {
      var long = -122.400612831116,
        lat = 37.781157;

      if (window.cordova) {
        $cordovaGeolocation.getCurrentPosition(7000).then(function (location) {
          long = location.coords.longitude;
          lat = location.coords.latitude;
          GetTweets.searchNearGeolocation(long, lat);
        }, function errorCallback (result) {
          $log.log(result); //no user permission?
        });
      } else {
        GetTweets.searchNearGeolocation(long, lat);
      }
    };

    this.closeKeyboard = function () {
      if (window.cordova) {
        $cordovaKeyboard.close();
      }
    };

    this.clearList = function () {
      this.data.tweets = null;
    };

    if (!GetTweets.hasTweets()) {
      that.searchNearGeolocation();
    }

  });
