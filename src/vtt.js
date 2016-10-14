'use strict';

const secondsToTime = require('./secondsToTime');

module.exports = function () {
  let content = 'WEBVTT\n\n';

  this.add = function (from, to, lines) {
    lines = lines.constructor === Array ? lines : [lines];

    content += '\n' + secondsToTime(from) + ' --> ' + secondsToTime(to) + '\n\n';
    lines.forEach(line => {
      content += line + '\n';
    });
    content += '\n';
  };

  this.toString = function () {
    return content;
  };
};
