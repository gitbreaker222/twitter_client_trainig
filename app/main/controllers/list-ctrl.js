'use strict';
angular.module('main')
.controller('ListCtrl', function ($log, $scope, GetTweets) {

  $scope.searchString = "";
  $scope.tweets = GetTweets.tweets;

  $scope.search = function(searchString){
    console.log(searchString)
  }

});
