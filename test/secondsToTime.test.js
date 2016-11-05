'use strict';

var test = require('tap').test;
var secondsToTime = require('../src/secondsToTime');

['someString', {someObject: 'someValue'}, ['foo', 'bar'], null, undefined].forEach(function (input) {
  test('It only accepts numbers (not ' + typeof input + ') as input', function (t) {
    t.plan(1);
    t.throws(function () {
      secondsToTime(input);
    });
  });
});

var dataProvider = [
  {name: 'milliseconds', input: 0.2534567, expectedOutput: '00:00:00.253'},
  {name: 'seconds', input: 59.2534567, expectedOutput: '00:00:59.253'},
  {name: 'minutes', input: 90.2541245, expectedOutput: '00:01:30.254'},
  {name: 'hours', input: (60 * 60 * 2) + 1.2341, expectedOutput: '02:00:01.234'},
  {name: 'days', input: (60 * 60 * 25) + 1.2341, expectedOutput: '25:00:01.234'},
  {name: 'weeks', input: (60 * 60 * 24 * 7) + 1.2341, expectedOutput: '168:00:01.234'}
];

dataProvider.forEach(function (testData) {
  test('Converts seconds to timestamps [' + testData.name + ']', function (t) {
    t.plan(1);
    t.equals(secondsToTime(testData.input), testData.expectedOutput, testData.input + ' => ' + testData.expectedOutput);
  });
});

test('It must properly pad timestamps containing number 9 (regression)', function (t) {
  t.plan(1);
  t.equals(secondsToTime(9.026), '00:00:09.026');
});
