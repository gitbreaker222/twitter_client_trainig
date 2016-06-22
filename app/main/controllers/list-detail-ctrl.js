'use strict';
angular.module('main')
.controller('ListDetailCtrl', function ($log, $state, GetTweets) {

  var tweet = GetTweets.getTweet($state.params.id);

});
