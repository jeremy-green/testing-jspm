define(['querystring', 'url'], function (_querystring, _url) {
  'use strict';

  var _querystring2 = _interopRequireDefault(_querystring);

  var _url2 = _interopRequireDefault(_url);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  console.log('random.js');
  /*
  Promise.all([
    System.import('npm:querystring@0.2.0'),
    System.import('url')
  ])
  .then(modules => console.log(modules));
  */

  /*
  define(['querystring', 'url'], function (qs, url) {
    console.log(
      qs.parse(window.location.search.split('?').pop()),
      url.parse(window.location.href)
    );
  });
  */

  console.log(_querystring2.default.parse(window.location.search.split('?').pop()), _url2.default.parse(window.location.href));
});
