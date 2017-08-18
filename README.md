# vtt-creator

[![npm version](https://badge.fury.io/js/vtt-creator.svg)](http://badge.fury.io/js/vtt-creator)
[![Build Status](https://travis-ci.org/lmammino/vtt-creator.svg?branch=master)](https://travis-ci.org/lmammino/vtt-creator)
[![codecov.io](https://codecov.io/gh/lmammino/vtt-creator/coverage.svg?branch=master)](https://codecov.io/gh/lmammino/vtt-creator)

Very basic and experimental Node.js/JavaScript library to generate VTT open subtitles files


## Install

With NPM:

```bash
npm install --save vtt-creator
```

or with Bower:

With NPM:

```bash
bower install --save vtt-creator
```

## Example

To include Vtt in your Node.js project simply use:

```javascript
var Vtt = require('vtt-creator');
```

or in a fronted app using bower (`Vtt` will be available as a global instance):

```html
<script src="bower_components/vtt-creator/dist/vtt.min.js"></script>
```

Usage:

```javascript
var v = new Vtt();
v.add(1.05, 4, 'Never drink liquid nitrogen.', 'align:middle line:84%');
v.add(5, 9, ['It will perforate your stomach.', 'You could die.']);

console.log(v.toString());
```

the previous snippet will generate:

```plain
WEBVTT

1
00:00:01.050 --> 00:00:04.000 align:middle line:84%
Never drink liquid nitrogen.

2
00:00:05.000 --> 00:00:09.000
It will perforate your stomach.
You could die.

```

## Contributing

Everyone is very welcome to contribute to this project.
You can contribute just by submitting bugs or suggesting improvements by
[opening an issue on GitHub](https://github.com/lmammino/vtt-creator/issues).


## License

Licensed under [MIT License](LICENSE). © Luciano Mammino.
