'use strict';

var fs = require('fs');
var path = require('path');
var tap = require('tap');
var vtt = require('../src/vtt');

tap.test('It must create an empty vtt', function(t) {
  t.plan(1);
  var expected = fs.readFileSync(path.join(__dirname, 'fixtures', 'empty.vtt'), 'utf8');
  var v = new vtt();
  t.equals(v.toString(), expected);
});  

tap.test('It must create a vtt with content', function(t) {
  t.plan(1);
  var expected = fs.readFileSync(path.join(__dirname, 'fixtures', 'sample.vtt'), 'utf8');
  var v = new vtt();
  v.add(1, 4, 'Never drink liquid nitrogen.');
  v.add(5, 9, ['It will perforate your stomach.', 'You could die.']);
  t.equals(v.toString(), expected);
});