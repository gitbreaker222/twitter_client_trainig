'use strict';
angular.module('main')
  .service('GetTweets', function () {
    
    this.data = {
      searchString: '',
      tweets: []
    };

    this.get = function (searchString) {
      this.data.tweets = [
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
      ]
    }

  });
