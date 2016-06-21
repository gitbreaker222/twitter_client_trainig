'use strict';
angular.module('main')
.controller('ListCtrl', function ($log, $scope, GetTweets) {

  this.data = GetTweets.data;

  this.search = function(searchString){
    GetTweets.get(searchString);
  }

});
