'use strict';
angular.module('main')
  .controller('ListDetailCtrl', function ($scope,
                                          $state,
                                          GetTweets,
                                          InAppBrowser) {

    var that = this;
    that.tweet = GetTweets.getTweet($state.params.id);

    $scope.openLinkInApp = function (event) {
      if (window.cordova) {
        event.preventDefault();
        var url = 'http://www.emp.de';
        InAppBrowser.open(url);
      }
    };

  });
