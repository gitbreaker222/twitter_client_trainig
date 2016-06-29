'use strict';
angular.module('main')
  .controller('InfoCtrl', function ($translate) {

    this.translate = function (languageString) {
      var availableTranslations = [
        'en-EN',
        'de-DE'
      ];

      if (availableTranslations.includes(languageString)) {
        $translate.use(languageString);
      }
    };

  });
