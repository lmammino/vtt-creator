'use strict';

var secondsToTime = require('./secondsToTime');

module.exports = function () {
  var content = 'WEBVTT\n\n';

  this.add = function (from, to, lines) {
    lines = lines.constructor === Array ? lines : [lines];

    content += '\n' + secondsToTime(from) + ' --> ' + secondsToTime(to) + '\n\n';
    lines.forEach(function (line) {
      content += line + '\n';
    });
    content += '\n';
  };

  this.toString = function () {
    return content;
  };
};
