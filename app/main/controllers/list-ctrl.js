'use strict';
angular.module('main')
  .controller('ListCtrl', function ($log, $scope, GetTweets, $cordovaKeyboard) {

    var that = this;

    this.data = GetTweets.data;
    this.loading = false;

    this.search = function (searchString) {
      that.closeKeyboard();

      if(searchString === ''){
        this.data.tweets = null;
        return;
      }

      that.loading = true;
      GetTweets.get(searchString).then(function () {
        that.loading = false;
      }, function () {
        that.loading = false;
      });
    };

    this.closeKeyboard = function () {
      if (window.cordova) {
        $cordovaKeyboard.close();
      }
    };

  });
