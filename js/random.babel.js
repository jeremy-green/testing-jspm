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

import querystring from 'querystring';
import url from 'url';

console.log(
  querystring.parse(window.location.search.split('?').pop()),
  url.parse(window.location.href)
);
