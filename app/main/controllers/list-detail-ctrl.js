'use strict';
angular.module('main')
  .controller('ListDetailCtrl', function ($scope,
                                          $state,
                                          GetTweets,
                                          InAppBrowser) {

    var that = this;
    that.tweet = GetTweets.getTweet($state.params.id);

    $scope.openLinkInApp = function (event) {
      var url = event.srcElement.href;
      if (window.cordova) {
        event.preventDefault();
        InAppBrowser.open(url);
      }
    };

  });
