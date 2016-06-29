'use strict';
angular.module('main')
  .controller('ListCtrl', function ($log,
                                    $scope,
                                    $state,
                                    GetTweets,
                                    $cordovaKeyboard,
                                    $cordovaGeolocation) {

    var that = this;

    this.data = GetTweets.data;
    this.hasTweets = GetTweets.hasTweets;
    this.loading = false;

    this.search = function (searchString) {
      that.closeKeyboard();
      $state.go('main.list');

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
        var options = {
          timeout: 7000,
          maximumAge: null,
          enableHighAccuracy: false
        };
        $cordovaGeolocation.getCurrentPosition(options).then(function (location) {
          long = location.coords.longitude;
          lat = location.coords.latitude;
          GetTweets.searchNearGeolocation(long, lat);
        }, function errorCallback (result) {
          $log.log(result); //no user permission?
        });
      } else {
        $log.info('using default fake geo coordinates!');
        GetTweets.searchNearGeolocation(long, lat);
      }
    };

    this.closeKeyboard = function () {
      if (window.cordova) {
        $cordovaKeyboard.close();
      }
    };

    this.clearList = function () {
      that.data.tweets = {};
    };

    if (!GetTweets.hasTweets()) {
      if ($state.current.name === 'main.list') {
        return;
      }
      that.searchNearGeolocation();
    }

  });
