'use strict';

var secondsToTime = require('./secondsToTime');

module.exports = function () {
  var counter = 0;
  var content = 'WEBVTT\n';

  this.add = function (from, to, lines) {
    ++counter;
    lines = lines.constructor === Array ? lines : [lines];

    content += '\n' + counter + '\n' + secondsToTime(from) + ' --> ' + secondsToTime(to) + '\n';
    lines.forEach(function (line) {
      content += line + '\n';
    });
  };

  this.toString = function () {
    return content;
  };
};
