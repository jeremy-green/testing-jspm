import qs from 'querystring';
import debug from 'debug';
import sum from './sum';
import $ from 'jquery';
import scrollTo from 'jquery.scrollto';
import { parse } from 'url';

//console.log($, '<=====>', typeof $(window).scrollTo, '<=====>', parse(window.location.href));

var numbers = [1, 2, 3];
var result = sum(numbers);

var outputElement = document.getElementById('output');
outputElement.innerHTML = result;

console.log('querystring', qs);

const qsObj = qs.parse(window.location.search.split('?').pop());
const qsDebug = qsObj.debug;
if (qsDebug) {
  console.log('debug', qsDebug);
  debug.enable(qsDebug);
}
