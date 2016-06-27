'use strict';
angular.module('main')
  .controller('ListCtrl', function ($log,
                                    $scope,
                                    GetTweets,
                                    $cordovaKeyboard,
                                    InAppBrowser) {

    var that = this;

    this.data = GetTweets.data;
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

    this.closeKeyboard = function () {
      if (window.cordova) {
        $cordovaKeyboard.close();
      }
    };

    this.clearList = function () {
      this.data.tweets = null;
    };

    $scope.openLinkInApp = function (event) {
      if (window.cordova) {
        event.preventDefault();
        var url = 'http://www.emp.de';
        InAppBrowser.open(url);
      }
    };

  });
