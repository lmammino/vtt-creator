'use strict';

const fs = require('fs');
const path = require('path');
const tap = require('tap');
const Vtt = require('../src/vtt');

tap.test('It must create an empty vtt', t => {
  t.plan(1);
  const expected = fs.readFileSync(path.join(__dirname, 'fixtures', 'empty.vtt'), 'utf8');
  const v = new Vtt();
  t.equals(v.toString(), expected);
});

tap.test('It must create a vtt with content', t => {
  t.plan(1);
  const expected = fs.readFileSync(path.join(__dirname, 'fixtures', 'sample.vtt'), 'utf8');
  const v = new Vtt();
  v.add(1, 4, 'Never drink liquid nitrogen.');
  v.add(5, 9, ['It will perforate your stomach.', 'You could die.']);
  t.equals(v.toString(), expected);
});
