console.log('random.2.js works as is but we shouldnt use this format');

define(['querystring', 'url'], function (qs, url) {
  var pub = false;
  var prv = true;

  return {
    pub: pub,
    init: function () {
      console.log(
        'API',
        qs.parse(window.location.search.split('?').pop()),
        url.parse(window.location.href)
      );

      return !this.pub;
    }
  }
});
