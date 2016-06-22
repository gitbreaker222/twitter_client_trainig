'use strict';
angular.module('main')
.controller('ListDetailCtrl', function ($log, $state, GetTweets) {

  var that = this;
  that.tweet = GetTweets.getTweet($state.params.id);

});
