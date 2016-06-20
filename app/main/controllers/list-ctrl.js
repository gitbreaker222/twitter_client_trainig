'use strict';
angular.module('main')
.controller('ListCtrl', function ($log, $scope) {

  $log.log('Hello from your Controller: ListCtrl in module main:. This is your controller:', this);
  $scope.tweets = [
    {
      content: 'you need to checkout #KREATOR german #metal band',
      user: 'tweeterSeppl',
      timestamp: new Date().getTime()
    },
    {
      content: 'girl I LOVE HEAVY METAL \\m/,',
      user: 'tweeterLilli',
      timestamp: new Date().getTime() + 50000000
    },
    {
      content: 'going to see Powerman5000 next saturday :)',
      user: 'tweeterPetruska',
      timestamp: new Date().getTime() + 800000000
    }
  ];
});
