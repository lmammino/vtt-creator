# vtt-creator

[![npm version](https://badge.fury.io/js/vtt-creator.svg)](http://badge.fury.io/js/vtt-creator)
[![Build Status](https://travis-ci.org/lmammino/vtt-creator.svg?branch=master)](https://travis-ci.org/lmammino/vtt-creator)
[![codecov.io](https://codecov.io/gh/lmammino/vtt-creator/coverage.svg?branch=master)](https://codecov.io/gh/lmammino/vtt-creator)

Very basic and experimental Node.js/JavaScript library to generate VTT open subtitles files


## Install

```bash
npm install --save vtt-creator
```

## Example

The following code:

```javascript
var vtt = require('vtt-creator');

var v = new vtt();
v.add(1, 4, 'Never drink liquid nitrogen.');
v.add(5, 9, ['It will perforate your stomach.', 'You could die.']);

console.log(v.toString());
```

Will generate:

```plain
WEBVTT

1
00:00:01.000 --> 00:00:04.000
Never drink liquid nitrogen.

2
00:00:05.000 --> 00:00:09.000
It will perforate your stomach.
You could die.

```

## Contributing

Everyone is very welcome to contribute to this project.
You can contribute just by submitting bugs or suggesting improvements by
[opening an issue on GitHub](https://github.com/lmammino/wtt-creator/issues).


## License

Licensed under [MIT License](LICENSE). © Luciano Mammino.
