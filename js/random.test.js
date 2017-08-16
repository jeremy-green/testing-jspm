define([], function () {
  'use strict';

  console.log('random.2.js');

  define(['querystring', 'url'], function (qs, url) {
    var pub = false;
    var prv = true;

    return {
      pub: pub,
      init: function init() {
        console.log('API', qs.parse(window.location.search.split('?').pop()), url.parse(window.location.href));

        return !this.pub;
      }
    };
  });
});
