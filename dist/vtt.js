/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	window.Vtt = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var secondsToTime = __webpack_require__(2);
	
	module.exports = function () {
	  var counter = 0;
	  var content = 'WEBVTT\r\n';
	
	  this.add = function (from, to, lines) {
	    ++counter;
	    lines = lines.constructor === Array ? lines : [lines];
	
	    content += '\r\n' + counter + '\r\n' + secondsToTime(from) + ' --> ' + secondsToTime(to) + '\r\n';
	    lines.forEach(function (line) {
	      content += line + '\r\n';
	    });
	  };
	
	  this.toString = function () {
	    return content;
	  };
	};


/***/ },
/* 2 */
/***/ function(module, exports) {

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
	
	  var seconds = (sec % 60).toFixed(3);
	  var minutes = Math.floor(sec / 60) % 60;
	  var hours = Math.floor(sec / 60 / 60);
	
	  return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
	};


/***/ }
/******/ ]);
//# sourceMappingURL=vtt.js.map