'use strict';

var secondsToTime = require('./secondsToTime');

module.exports = function () {
  var counter = 0;
  var content = 'WEBVTT\r\n';

  this.add = function (from, to, lines, settings) {
    ++counter;
    lines = lines.constructor === Array ? lines : [lines];

    content += '\r\n' + counter + '\r\n' +
      secondsToTime(from) + ' --> ' + secondsToTime(to) +
      (settings ? ' ' + settings : '') +
      '\r\n';

    lines.forEach(function (line) {
      content += line + '\r\n';
    });
  };

  this.toString = function () {
    return content;
  };
};
