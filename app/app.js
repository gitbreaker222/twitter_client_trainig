'use strict';
angular.module('testrun_twitter', [
  'main',
  'ionic'
])
  .run(function ($log,
                 $ionicPlatform) {

    var deviceInformation = ionic.Platform.device();

    var isWebView = ionic.Platform.isWebView();
    var isIPad = ionic.Platform.isIPad();
    var isIOS = ionic.Platform.isIOS();
    var isAndroid = ionic.Platform.isAndroid();
    var isWindowsPhone = ionic.Platform.isWindowsPhone();

    var currentPlatform = ionic.Platform.platform();
    var currentPlatformVersion = ionic.Platform.version();

    $log.log(deviceInformation, isWebView, isIPad, isIOS, isAndroid, isWindowsPhone, currentPlatform, currentPlatformVersion);
    $ionicPlatform.ready( function () {
    });

  });
