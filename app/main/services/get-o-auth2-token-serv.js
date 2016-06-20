'use strict';
angular.module('main')
.service('GetOAuth2Token', ['$log', '$window', '$http'], function ($log, $window, $http) {

  $log.log('Hello from your Service: GetOAuth2Token in module main');
  var consumerKey = encodeURIComponent('x0q5QXSD6FY6LchRRM8W21vTv');
  var consumerSecret = encodeURIComponent('As97m4JAShgfsKTKopkIzKoeE3bwNaCMcyrXhvMkXFnN7TweXz');
  this.getToken = function () {
    var tokenCredentials = $window.btoa(consumerKey + ':' + consumerSecret);
    return $http({
      method: 'POST',
      url: 'https://api.twitter.com/oauth2/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Authorization': 'Basic ' + tokenCredentials
      },
      data: 'grant_type=client_credentials'
    })
      .then(function (result) {
        if (result.data && result.data.access_token) {
          $http.defaults.headers.common.Authorization = 'Bearer ' + result.data.access_token;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

});
