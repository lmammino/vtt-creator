'use strict';

function pad(num) {
  if (num <= 9) {
    return '0' + num;
  }

  return num;
}

module.exports = function (sec) {
  if (typeof sec !== 'number') {
    throw new Error('Invalid type: expected number');
  }

  const seconds = (sec % 60).toFixed(3);
  const minutes = Math.floor(sec / 60) % 60;
  const hours = Math.floor(sec / 60 / 60);

  return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
};
