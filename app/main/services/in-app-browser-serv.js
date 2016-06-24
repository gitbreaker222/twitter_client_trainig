'use strict';
angular.module('main')
  .service('InAppBrowser', function ($window) {

    this.open = function () {
      $window.webview.openWebView(null, null, {
        iconColor: ' #ffff00',
        backgroundColor: '#f00000',
        isPDF: false,
        url: 'http://mwaysolutions.com',
        urlEncoding: false,
        visibleAddress: false,
        editableAddress: false,
        navigationAtTop: false,
        icons: {
          backward: true,
          forward: true,
          refresh: true
        }
      });
    };

  });
