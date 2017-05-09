(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./utils/DOMHelper'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.DOMHelper);
        global.colorDragger = mod.exports;
    }
})(this, function (exports, _DOMHelper) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ColorDragger = undefined;

    var _DOMHelper2 = _interopRequireDefault(_DOMHelper);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var ColorDragger = exports.ColorDragger = function () {
        function ColorDragger() {
            _classCallCheck(this, ColorDragger);

            this.draggable = _DOMHelper2.default.select('.draggable');
            this.background = _DOMHelper2.default.select('.container');
            // this.draggable = document.querySelector('.draggable');
            // this.background = document.querySelector('.container');
            this.active = false;

            this.hue = 193;
            this.sat = 67;
            this.lit = 28;

            this.mouseX = 0;
            this.mouseY = 0;

            this.direction = null;

            this.background.style.backgroundColor = 'hsl(' + this.hue + ',' + this.sat + '%,' + this.lit + '%)';

            this.events();
        }

        _createClass(ColorDragger, [{
            key: 'events',
            value: function events() {
                _DOMHelper2.default.listenEvents(this.draggable, ['mousedown', 'touchstart'], this.onChangeStart.bind(this));
                _DOMHelper2.default.listenEvents(this.draggable, ['mousemove', 'touchmove'], this.onChange.bind(this));
                _DOMHelper2.default.listenEvents(this.draggable, ['touchend', 'mouseleave', 'mouseup'], this.onChangeEnd.bind(this));
            }
        }, {
            key: 'setHue',
            value: function setHue(option) {
                if (option.hasOwnProperty('increment')) {
                    this.hue = this.hue > 360 ? 0 : ++this.hue;
                    console.log(this.hue);
                } else if (option.hasOwnProperty('decrement')) {
                    this.hue = this.hue < 0 ? 360 : --this.hue;
                    console.log(this.hue);
                }
            }
        }, {
            key: 'setLightness',
            value: function setLightness(option) {
                if (option.hasOwnProperty('increment')) {
                    this.lit = this.lit > 100 ? 0 : ++this.lit;
                    console.log(this.lit);
                } else if (option.hasOwnProperty('decrement')) {
                    this.lit = this.lit < 0 ? 100 : --this.lit;
                    console.log(this.lit);
                }
            }
        }, {
            key: 'onChangeStart',
            value: function onChangeStart(event) {
                this.active = true;
                this.mouseX = event.offsetX;
                this.mouseY = event.offsetY;
            }
        }, {
            key: 'onChangeEnd',
            value: function onChangeEnd(event) {
                this.active = false;
                this.direction = null;
            }
        }, {
            key: 'onChange',
            value: function onChange(event) {
                // Disable browser refresh default behavior
                event.preventDefault();

                if (this.active) {
                    var startY = this.mouseY;
                    var startX = this.mouseX;
                    var currentY = event.offsetY;
                    var currentX = event.offsetX;

                    if (this.direction === null) {
                        this.direction = startY !== currentY ? 'vertical' : 'horizontal';
                    } else if (this.direction === 'vertical') {
                        // Up
                        if (startY < currentY) {
                            var decrement = startY - currentY;
                            this.setLightness({ decrement: decrement });
                        }
                        // Down
                        else {
                                var increment = currentY - startY;
                                this.setLightness({ increment: increment });
                            }

                        this.background.style.backgroundColor = 'hsl(' + this.hue + ',' + this.sat + '%,' + this.lit + '%)';
                    } else if (this.direction === 'horizontal') {
                        // Left
                        if (startX > currentX) {
                            var _decrement = startX - currentX;
                            this.setHue({ decrement: _decrement });
                        }
                        // Right
                        else {
                                var _increment = currentX - startX;
                                this.setHue({ increment: _increment });
                            }

                        this.background.style.backgroundColor = 'hsl(' + this.hue + ',' + this.sat + '%,' + this.lit + '%)';
                    }

                    this.mouseY = currentY;
                    this.mouseX = currentX;
                }
            }
        }]);

        return ColorDragger;
    }();
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(require('./color-dragger'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.colorDragger);
    global.index = mod.exports;
  }
})(this, function (_colorDragger) {
  'use strict';

  window.ColorDragger = _colorDragger.ColorDragger;
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.DOMHelper = mod.exports;
    }
})(this, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var DOMHelper = function () {
        function DOMHelper() {
            _classCallCheck(this, DOMHelper);
        }

        _createClass(DOMHelper, null, [{
            key: "select",
            value: function select(selector) {
                return document.querySelector(selector);
            }
        }, {
            key: "listenEvents",
            value: function listenEvents(selector, events, callback) {
                if (!Array.isArray(events)) {
                    events = [events];
                }

                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var event = _step.value;

                        selector.addEventListener(event, callback);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }]);

        return DOMHelper;
    }();

    exports.default = DOMHelper;
});

/***/ })
/******/ ]);
});