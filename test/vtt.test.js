'use strict';

var fs = require('fs');
var path = require('path');
var test = require('tap').test;
var Vtt = require('../src/vtt');

test('It must create an empty vtt', function (t) {
  t.plan(1);
  var expected = fs.readFileSync(path.join(__dirname, 'fixtures', 'empty.vtt'), 'utf8');
  var v = new Vtt();
  t.equals(v.toString(), expected);
});

test('It must create a vtt with content', function (t) {
  t.plan(1);
  var expected = fs.readFileSync(path.join(__dirname, 'fixtures', 'sample.vtt'), 'utf8');
  var v = new Vtt();
  v.add(1, 4, 'Never drink liquid nitrogen.');
  v.add(5, 9, ['It will perforate your stomach.', 'You could die.']);
  t.equals(v.toString(), expected);
});

test('It must create a vtt with settings', function (t) {
  t.plan(1);
  var expected = fs.readFileSync(path.join(__dirname, 'fixtures', 'sample-settings.vtt'), 'utf8');
  var v = new Vtt();
  v.add(1.05, 4, 'Never drink liquid nitrogen.', 'position:10%,line-left align:left size:35%');
  v.add(5, 9, ['It will perforate your stomach.', 'You could die.'], 'position:90% align:right size:35%');
  t.equals(v.toString(), expected);
});
