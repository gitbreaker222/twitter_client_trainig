'use strict';
angular.module('main')
.controller('ListCtrl', function ($log, $scope, GetTweets) {

  $scope.tweets = GetTweets.tweets;
  
});
