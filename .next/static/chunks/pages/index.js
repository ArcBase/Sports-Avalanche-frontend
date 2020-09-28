_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/enquire.js/src/MediaQuery.js":
/*!***************************************************!*\
  !*** ./node_modules/enquire.js/src/MediaQuery.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var QueryHandler = __webpack_require__(/*! ./QueryHandler */ "./node_modules/enquire.js/src/QueryHandler.js");
var each = __webpack_require__(/*! ./Util */ "./node_modules/enquire.js/src/Util.js").each;

/**
 * Represents a single media query, manages it's state and registered handlers for this query
 *
 * @constructor
 * @param {string} query the media query string
 * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design
 */
function MediaQuery(query, isUnconditional) {
    this.query = query;
    this.isUnconditional = isUnconditional;
    this.handlers = [];
    this.mql = window.matchMedia(query);

    var self = this;
    this.listener = function(mql) {
        // Chrome passes an MediaQueryListEvent object, while other browsers pass MediaQueryList directly
        self.mql = mql.currentTarget || mql;
        self.assess();
    };
    this.mql.addListener(this.listener);
}

MediaQuery.prototype = {

    constuctor : MediaQuery,

    /**
     * add a handler for this query, triggering if already active
     *
     * @param {object} handler
     * @param {function} handler.match callback for when query is activated
     * @param {function} [handler.unmatch] callback for when query is deactivated
     * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
     * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
     */
    addHandler : function(handler) {
        var qh = new QueryHandler(handler);
        this.handlers.push(qh);

        this.matches() && qh.on();
    },

    /**
     * removes the given handler from the collection, and calls it's destroy methods
     *
     * @param {object || function} handler the handler to remove
     */
    removeHandler : function(handler) {
        var handlers = this.handlers;
        each(handlers, function(h, i) {
            if(h.equals(handler)) {
                h.destroy();
                return !handlers.splice(i,1); //remove from array and exit each early
            }
        });
    },

    /**
     * Determine whether the media query should be considered a match
     *
     * @return {Boolean} true if media query can be considered a match, false otherwise
     */
    matches : function() {
        return this.mql.matches || this.isUnconditional;
    },

    /**
     * Clears all handlers and unbinds events
     */
    clear : function() {
        each(this.handlers, function(handler) {
            handler.destroy();
        });
        this.mql.removeListener(this.listener);
        this.handlers.length = 0; //clear array
    },

    /*
        * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
        */
    assess : function() {
        var action = this.matches() ? 'on' : 'off';

        each(this.handlers, function(handler) {
            handler[action]();
        });
    }
};

module.exports = MediaQuery;


/***/ }),

/***/ "./node_modules/enquire.js/src/MediaQueryDispatch.js":
/*!***********************************************************!*\
  !*** ./node_modules/enquire.js/src/MediaQueryDispatch.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MediaQuery = __webpack_require__(/*! ./MediaQuery */ "./node_modules/enquire.js/src/MediaQuery.js");
var Util = __webpack_require__(/*! ./Util */ "./node_modules/enquire.js/src/Util.js");
var each = Util.each;
var isFunction = Util.isFunction;
var isArray = Util.isArray;

/**
 * Allows for registration of query handlers.
 * Manages the query handler's state and is responsible for wiring up browser events
 *
 * @constructor
 */
function MediaQueryDispatch () {
    if(!window.matchMedia) {
        throw new Error('matchMedia not present, legacy browsers require a polyfill');
    }

    this.queries = {};
    this.browserIsIncapable = !window.matchMedia('only all').matches;
}

MediaQueryDispatch.prototype = {

    constructor : MediaQueryDispatch,

    /**
     * Registers a handler for the given media query
     *
     * @param {string} q the media query
     * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
     * @param {function} options.match fired when query matched
     * @param {function} [options.unmatch] fired when a query is no longer matched
     * @param {function} [options.setup] fired when handler first triggered
     * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
     * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
     */
    register : function(q, options, shouldDegrade) {
        var queries         = this.queries,
            isUnconditional = shouldDegrade && this.browserIsIncapable;

        if(!queries[q]) {
            queries[q] = new MediaQuery(q, isUnconditional);
        }

        //normalise to object in an array
        if(isFunction(options)) {
            options = { match : options };
        }
        if(!isArray(options)) {
            options = [options];
        }
        each(options, function(handler) {
            if (isFunction(handler)) {
                handler = { match : handler };
            }
            queries[q].addHandler(handler);
        });

        return this;
    },

    /**
     * unregisters a query and all it's handlers, or a specific handler for a query
     *
     * @param {string} q the media query to target
     * @param {object || function} [handler] specific handler to unregister
     */
    unregister : function(q, handler) {
        var query = this.queries[q];

        if(query) {
            if(handler) {
                query.removeHandler(handler);
            }
            else {
                query.clear();
                delete this.queries[q];
            }
        }

        return this;
    }
};

module.exports = MediaQueryDispatch;


/***/ }),

/***/ "./node_modules/enquire.js/src/QueryHandler.js":
/*!*****************************************************!*\
  !*** ./node_modules/enquire.js/src/QueryHandler.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Delegate to handle a media query being matched and unmatched.
 *
 * @param {object} options
 * @param {function} options.match callback for when the media query is matched
 * @param {function} [options.unmatch] callback for when the media query is unmatched
 * @param {function} [options.setup] one-time callback triggered the first time a query is matched
 * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
 * @constructor
 */
function QueryHandler(options) {
    this.options = options;
    !options.deferSetup && this.setup();
}

QueryHandler.prototype = {

    constructor : QueryHandler,

    /**
     * coordinates setup of the handler
     *
     * @function
     */
    setup : function() {
        if(this.options.setup) {
            this.options.setup();
        }
        this.initialised = true;
    },

    /**
     * coordinates setup and triggering of the handler
     *
     * @function
     */
    on : function() {
        !this.initialised && this.setup();
        this.options.match && this.options.match();
    },

    /**
     * coordinates the unmatch event for the handler
     *
     * @function
     */
    off : function() {
        this.options.unmatch && this.options.unmatch();
    },

    /**
     * called when a handler is to be destroyed.
     * delegates to the destroy or unmatch callbacks, depending on availability.
     *
     * @function
     */
    destroy : function() {
        this.options.destroy ? this.options.destroy() : this.off();
    },

    /**
     * determines equality by reference.
     * if object is supplied compare options, if function, compare match callback
     *
     * @function
     * @param {object || function} [target] the target for comparison
     */
    equals : function(target) {
        return this.options === target || this.options.match === target;
    }

};

module.exports = QueryHandler;


/***/ }),

/***/ "./node_modules/enquire.js/src/Util.js":
/*!*********************************************!*\
  !*** ./node_modules/enquire.js/src/Util.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helper function for iterating over a collection
 *
 * @param collection
 * @param fn
 */
function each(collection, fn) {
    var i      = 0,
        length = collection.length,
        cont;

    for(i; i < length; i++) {
        cont = fn(collection[i], i);
        if(cont === false) {
            break; //allow early exit
        }
    }
}

/**
 * Helper function for determining whether target object is an array
 *
 * @param target the object under test
 * @return {Boolean} true if array, false otherwise
 */
function isArray(target) {
    return Object.prototype.toString.apply(target) === '[object Array]';
}

/**
 * Helper function for determining whether target object is a function
 *
 * @param target the object under test
 * @return {Boolean} true if function, false otherwise
 */
function isFunction(target) {
    return typeof target === 'function';
}

module.exports = {
    isFunction : isFunction,
    isArray : isArray,
    each : each
};


/***/ }),

/***/ "./node_modules/enquire.js/src/index.js":
/*!**********************************************!*\
  !*** ./node_modules/enquire.js/src/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MediaQueryDispatch = __webpack_require__(/*! ./MediaQueryDispatch */ "./node_modules/enquire.js/src/MediaQueryDispatch.js");
module.exports = new MediaQueryDispatch();


/***/ }),

/***/ "./node_modules/json2mq/index.js":
/*!***************************************!*\
  !*** ./node_modules/json2mq/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var camel2hyphen = __webpack_require__(/*! string-convert/camel2hyphen */ "./node_modules/string-convert/camel2hyphen.js");

var isDimension = function (feature) {
  var re = /[height|width]$/;
  return re.test(feature);
};

var obj2mq = function (obj) {
  var mq = '';
  var features = Object.keys(obj);
  features.forEach(function (feature, index) {
    var value = obj[feature];
    feature = camel2hyphen(feature);
    // Add px to dimension features
    if (isDimension(feature) && typeof value === 'number') {
      value = value + 'px';
    }
    if (value === true) {
      mq += feature;
    } else if (value === false) {
      mq += 'not ' + feature;
    } else {
      mq += '(' + feature + ': ' + value + ')';
    }
    if (index < features.length-1) {
      mq += ' and '
    }
  });
  return mq;
};

var json2mq = function (query) {
  var mq = '';
  if (typeof query === 'string') {
    return query;
  }
  // Handling array of media queries
  if (query instanceof Array) {
    query.forEach(function (q, index) {
      mq += obj2mq(q);
      if (index < query.length-1) {
        mq += ', '
      }
    });
    return mq;
  }
  // Handling single media query
  return obj2mq(query);
};

module.exports = json2mq;

/***/ }),

/***/ "./node_modules/lodash.debounce/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.debounce/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object-assign.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);module.exports=assign;module.exports.default=module.exports;
//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5CD%5CDownloads%5CTheebz%5CProjects%5CAvalanche%5Cavalanchenext%5Cpages%5Cindex.js!./":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5CD%5CDownloads%5CTheebz%5CProjects%5CAvalanche%5Cavalanchenext%5Cpages%5Cindex.js ***!
  \************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(/*! ./pages/index.js */ "./pages/index.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-slick/lib/arrows.js":
/*!************************************************!*\
  !*** ./node_modules/react-slick/lib/arrows.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NextArrow = exports.PrevArrow = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _innerSliderUtils = __webpack_require__(/*! ./utils/innerSliderUtils */ "./node_modules/react-slick/lib/utils/innerSliderUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PrevArrow = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(PrevArrow, _React$PureComponent);

  var _super = _createSuper(PrevArrow);

  function PrevArrow() {
    _classCallCheck(this, PrevArrow);

    return _super.apply(this, arguments);
  }

  _createClass(PrevArrow, [{
    key: "clickHandler",
    value: function clickHandler(options, e) {
      if (e) {
        e.preventDefault();
      }

      this.props.clickHandler(options, e);
    }
  }, {
    key: "render",
    value: function render() {
      var prevClasses = {
        "slick-arrow": true,
        "slick-prev": true
      };
      var prevHandler = this.clickHandler.bind(this, {
        message: "previous"
      });

      if (!this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow)) {
        prevClasses["slick-disabled"] = true;
        prevHandler = null;
      }

      var prevArrowProps = {
        key: "0",
        "data-role": "none",
        className: (0, _classnames["default"])(prevClasses),
        style: {
          display: "block"
        },
        onClick: prevHandler
      };
      var customProps = {
        currentSlide: this.props.currentSlide,
        slideCount: this.props.slideCount
      };
      var prevArrow;

      if (this.props.prevArrow) {
        prevArrow = /*#__PURE__*/_react["default"].cloneElement(this.props.prevArrow, _objectSpread(_objectSpread({}, prevArrowProps), customProps));
      } else {
        prevArrow = /*#__PURE__*/_react["default"].createElement("button", _extends({
          key: "0",
          type: "button"
        }, prevArrowProps), " ", "Previous");
      }

      return prevArrow;
    }
  }]);

  return PrevArrow;
}(_react["default"].PureComponent);

exports.PrevArrow = PrevArrow;

var NextArrow = /*#__PURE__*/function (_React$PureComponent2) {
  _inherits(NextArrow, _React$PureComponent2);

  var _super2 = _createSuper(NextArrow);

  function NextArrow() {
    _classCallCheck(this, NextArrow);

    return _super2.apply(this, arguments);
  }

  _createClass(NextArrow, [{
    key: "clickHandler",
    value: function clickHandler(options, e) {
      if (e) {
        e.preventDefault();
      }

      this.props.clickHandler(options, e);
    }
  }, {
    key: "render",
    value: function render() {
      var nextClasses = {
        "slick-arrow": true,
        "slick-next": true
      };
      var nextHandler = this.clickHandler.bind(this, {
        message: "next"
      });

      if (!(0, _innerSliderUtils.canGoNext)(this.props)) {
        nextClasses["slick-disabled"] = true;
        nextHandler = null;
      }

      var nextArrowProps = {
        key: "1",
        "data-role": "none",
        className: (0, _classnames["default"])(nextClasses),
        style: {
          display: "block"
        },
        onClick: nextHandler
      };
      var customProps = {
        currentSlide: this.props.currentSlide,
        slideCount: this.props.slideCount
      };
      var nextArrow;

      if (this.props.nextArrow) {
        nextArrow = /*#__PURE__*/_react["default"].cloneElement(this.props.nextArrow, _objectSpread(_objectSpread({}, nextArrowProps), customProps));
      } else {
        nextArrow = /*#__PURE__*/_react["default"].createElement("button", _extends({
          key: "1",
          type: "button"
        }, nextArrowProps), " ", "Next");
      }

      return nextArrow;
    }
  }]);

  return NextArrow;
}(_react["default"].PureComponent);

exports.NextArrow = NextArrow;

/***/ }),

/***/ "./node_modules/react-slick/lib/default-props.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-slick/lib/default-props.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defaultProps = {
  accessibility: true,
  adaptiveHeight: false,
  afterChange: null,
  appendDots: function appendDots(dots) {
    return /*#__PURE__*/_react["default"].createElement("ul", {
      style: {
        display: "block"
      }
    }, dots);
  },
  arrows: true,
  autoplay: false,
  autoplaySpeed: 3000,
  beforeChange: null,
  centerMode: false,
  centerPadding: "50px",
  className: "",
  cssEase: "ease",
  customPaging: function customPaging(i) {
    return /*#__PURE__*/_react["default"].createElement("button", null, i + 1);
  },
  dots: false,
  dotsClass: "slick-dots",
  draggable: true,
  easing: "linear",
  edgeFriction: 0.35,
  fade: false,
  focusOnSelect: false,
  infinite: true,
  initialSlide: 0,
  lazyLoad: null,
  nextArrow: null,
  onEdge: null,
  onInit: null,
  onLazyLoadError: null,
  onReInit: null,
  pauseOnDotsHover: false,
  pauseOnFocus: false,
  pauseOnHover: true,
  prevArrow: null,
  responsive: null,
  rows: 1,
  rtl: false,
  slide: "div",
  slidesPerRow: 1,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 500,
  swipe: true,
  swipeEvent: null,
  swipeToSlide: false,
  touchMove: true,
  touchThreshold: 5,
  useCSS: true,
  useTransform: true,
  variableWidth: false,
  vertical: false,
  waitForAnimate: true
};
var _default = defaultProps;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-slick/lib/dots.js":
/*!**********************************************!*\
  !*** ./node_modules/react-slick/lib/dots.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dots = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _innerSliderUtils = __webpack_require__(/*! ./utils/innerSliderUtils */ "./node_modules/react-slick/lib/utils/innerSliderUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var getDotCount = function getDotCount(spec) {
  var dots;

  if (spec.infinite) {
    dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
  } else {
    dots = Math.ceil((spec.slideCount - spec.slidesToShow) / spec.slidesToScroll) + 1;
  }

  return dots;
};

var Dots = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Dots, _React$PureComponent);

  var _super = _createSuper(Dots);

  function Dots() {
    _classCallCheck(this, Dots);

    return _super.apply(this, arguments);
  }

  _createClass(Dots, [{
    key: "clickHandler",
    value: function clickHandler(options, e) {
      // In Autoplay the focus stays on clicked button even after transition
      // to next slide. That only goes away by click somewhere outside
      e.preventDefault();
      this.props.clickHandler(options);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onMouseEnter = _this$props.onMouseEnter,
          onMouseOver = _this$props.onMouseOver,
          onMouseLeave = _this$props.onMouseLeave,
          infinite = _this$props.infinite,
          slidesToScroll = _this$props.slidesToScroll,
          slidesToShow = _this$props.slidesToShow,
          slideCount = _this$props.slideCount,
          currentSlide = _this$props.currentSlide;
      var dotCount = getDotCount({
        slideCount: slideCount,
        slidesToScroll: slidesToScroll,
        slidesToShow: slidesToShow,
        infinite: infinite
      });
      var mouseEvents = {
        onMouseEnter: onMouseEnter,
        onMouseOver: onMouseOver,
        onMouseLeave: onMouseLeave
      };
      var dots = [];

      for (var i = 0; i < dotCount; i++) {
        var _rightBound = (i + 1) * slidesToScroll - 1;

        var rightBound = infinite ? _rightBound : (0, _innerSliderUtils.clamp)(_rightBound, 0, slideCount - 1);

        var _leftBound = rightBound - (slidesToScroll - 1);

        var leftBound = infinite ? _leftBound : (0, _innerSliderUtils.clamp)(_leftBound, 0, slideCount - 1);
        var className = (0, _classnames["default"])({
          "slick-active": infinite ? currentSlide >= leftBound && currentSlide <= rightBound : currentSlide === leftBound
        });
        var dotOptions = {
          message: "dots",
          index: i,
          slidesToScroll: slidesToScroll,
          currentSlide: currentSlide
        };
        var onClick = this.clickHandler.bind(this, dotOptions);
        dots = dots.concat( /*#__PURE__*/_react["default"].createElement("li", {
          key: i,
          className: className
        }, /*#__PURE__*/_react["default"].cloneElement(this.props.customPaging(i), {
          onClick: onClick
        })));
      }

      return /*#__PURE__*/_react["default"].cloneElement(this.props.appendDots(dots), _objectSpread({
        className: this.props.dotsClass
      }, mouseEvents));
    }
  }]);

  return Dots;
}(_react["default"].PureComponent);

exports.Dots = Dots;

/***/ }),

/***/ "./node_modules/react-slick/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-slick/lib/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slider = _interopRequireDefault(__webpack_require__(/*! ./slider */ "./node_modules/react-slick/lib/slider.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _slider["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-slick/lib/initial-state.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-slick/lib/initial-state.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var initialState = {
  animating: false,
  autoplaying: null,
  currentDirection: 0,
  currentLeft: null,
  currentSlide: 0,
  direction: 1,
  dragging: false,
  edgeDragged: false,
  initialized: false,
  lazyLoadedList: [],
  listHeight: null,
  listWidth: null,
  scrolling: false,
  slideCount: null,
  slideHeight: null,
  slideWidth: null,
  swipeLeft: null,
  swiped: false,
  // used by swipeEvent. differentites between touch and swipe.
  swiping: false,
  touchObject: {
    startX: 0,
    startY: 0,
    curX: 0,
    curY: 0
  },
  trackStyle: {},
  trackWidth: 0,
  targetSlide: 0
};
var _default = initialState;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-slick/lib/inner-slider.js":
/*!******************************************************!*\
  !*** ./node_modules/react-slick/lib/inner-slider.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InnerSlider = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _initialState = _interopRequireDefault(__webpack_require__(/*! ./initial-state */ "./node_modules/react-slick/lib/initial-state.js"));

var _lodash = _interopRequireDefault(__webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _innerSliderUtils = __webpack_require__(/*! ./utils/innerSliderUtils */ "./node_modules/react-slick/lib/utils/innerSliderUtils.js");

var _track = __webpack_require__(/*! ./track */ "./node_modules/react-slick/lib/track.js");

var _dots = __webpack_require__(/*! ./dots */ "./node_modules/react-slick/lib/dots.js");

var _arrows = __webpack_require__(/*! ./arrows */ "./node_modules/react-slick/lib/arrows.js");

var _resizeObserverPolyfill = _interopRequireDefault(__webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InnerSlider = /*#__PURE__*/function (_React$Component) {
  _inherits(InnerSlider, _React$Component);

  var _super = _createSuper(InnerSlider);

  function InnerSlider(props) {
    var _this;

    _classCallCheck(this, InnerSlider);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "listRefHandler", function (ref) {
      return _this.list = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "trackRefHandler", function (ref) {
      return _this.track = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "adaptHeight", function () {
      if (_this.props.adaptiveHeight && _this.list) {
        var elem = _this.list.querySelector("[data-index=\"".concat(_this.state.currentSlide, "\"]"));

        _this.list.style.height = (0, _innerSliderUtils.getHeight)(elem) + "px";
      }
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      _this.props.onInit && _this.props.onInit();

      if (_this.props.lazyLoad) {
        var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)(_objectSpread(_objectSpread({}, _this.props), _this.state));

        if (slidesToLoad.length > 0) {
          _this.setState(function (prevState) {
            return {
              lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
            };
          });

          if (_this.props.onLazyLoad) {
            _this.props.onLazyLoad(slidesToLoad);
          }
        }
      }

      var spec = _objectSpread({
        listRef: _this.list,
        trackRef: _this.track
      }, _this.props);

      _this.updateState(spec, true, function () {
        _this.adaptHeight();

        _this.props.autoplay && _this.autoPlay("update");
      });

      if (_this.props.lazyLoad === "progressive") {
        _this.lazyLoadTimer = setInterval(_this.progressiveLazyLoad, 1000);
      }

      _this.ro = new _resizeObserverPolyfill["default"](function () {
        if (_this.state.animating) {
          _this.onWindowResized(false); // don't set trackStyle hence don't break animation


          _this.callbackTimers.push(setTimeout(function () {
            return _this.onWindowResized();
          }, _this.props.speed));
        } else {
          _this.onWindowResized();
        }
      });

      _this.ro.observe(_this.list);

      Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function (slide) {
        slide.onfocus = _this.props.pauseOnFocus ? _this.onSlideFocus : null;
        slide.onblur = _this.props.pauseOnFocus ? _this.onSlideBlur : null;
      });

      if (window.addEventListener) {
        window.addEventListener("resize", _this.onWindowResized);
      } else {
        window.attachEvent("onresize", _this.onWindowResized);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      if (_this.animationEndCallback) {
        clearTimeout(_this.animationEndCallback);
      }

      if (_this.lazyLoadTimer) {
        clearInterval(_this.lazyLoadTimer);
      }

      if (_this.callbackTimers.length) {
        _this.callbackTimers.forEach(function (timer) {
          return clearTimeout(timer);
        });

        _this.callbackTimers = [];
      }

      if (window.addEventListener) {
        window.removeEventListener("resize", _this.onWindowResized);
      } else {
        window.detachEvent("onresize", _this.onWindowResized);
      }

      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
      }

      _this.ro.disconnect();
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function (prevProps) {
      _this.checkImagesLoad();

      _this.props.onReInit && _this.props.onReInit();

      if (_this.props.lazyLoad) {
        var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)(_objectSpread(_objectSpread({}, _this.props), _this.state));

        if (slidesToLoad.length > 0) {
          _this.setState(function (prevState) {
            return {
              lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
            };
          });

          if (_this.props.onLazyLoad) {
            _this.props.onLazyLoad(slidesToLoad);
          }
        }
      } // if (this.props.onLazyLoad) {
      //   this.props.onLazyLoad([leftMostSlide])
      // }


      _this.adaptHeight();

      var spec = _objectSpread(_objectSpread({
        listRef: _this.list,
        trackRef: _this.track
      }, _this.props), _this.state);

      var setTrackStyle = _this.didPropsChange(prevProps);

      setTrackStyle && _this.updateState(spec, setTrackStyle, function () {
        if (_this.state.currentSlide >= _react["default"].Children.count(_this.props.children)) {
          _this.changeSlide({
            message: "index",
            index: _react["default"].Children.count(_this.props.children) - _this.props.slidesToShow,
            currentSlide: _this.state.currentSlide
          });
        }

        if (_this.props.autoplay) {
          _this.autoPlay("update");
        } else {
          _this.pause("paused");
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onWindowResized", function (setTrackStyle) {
      if (_this.debouncedResize) _this.debouncedResize.cancel();
      _this.debouncedResize = (0, _lodash["default"])(function () {
        return _this.resizeWindow(setTrackStyle);
      }, 50);

      _this.debouncedResize();
    });

    _defineProperty(_assertThisInitialized(_this), "resizeWindow", function () {
      var setTrackStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var isTrackMounted = Boolean(_this.track && _this.track.node); // prevent warning: setting state on unmounted component (server side rendering)

      if (!isTrackMounted) return;

      var spec = _objectSpread(_objectSpread({
        listRef: _this.list,
        trackRef: _this.track
      }, _this.props), _this.state);

      _this.updateState(spec, setTrackStyle, function () {
        if (_this.props.autoplay) _this.autoPlay("update");else _this.pause("paused");
      }); // animating state should be cleared while resizing, otherwise autoplay stops working


      _this.setState({
        animating: false
      });

      clearTimeout(_this.animationEndCallback);
      delete _this.animationEndCallback;
    });

    _defineProperty(_assertThisInitialized(_this), "updateState", function (spec, setTrackStyle, callback) {
      var updatedState = (0, _innerSliderUtils.initializedState)(spec);
      spec = _objectSpread(_objectSpread(_objectSpread({}, spec), updatedState), {}, {
        slideIndex: updatedState.currentSlide
      });
      var targetLeft = (0, _innerSliderUtils.getTrackLeft)(spec);
      spec = _objectSpread(_objectSpread({}, spec), {}, {
        left: targetLeft
      });
      var trackStyle = (0, _innerSliderUtils.getTrackCSS)(spec);

      if (setTrackStyle || _react["default"].Children.count(_this.props.children) !== _react["default"].Children.count(spec.children)) {
        updatedState["trackStyle"] = trackStyle;
      }

      _this.setState(updatedState, callback);
    });

    _defineProperty(_assertThisInitialized(_this), "ssrInit", function () {
      if (_this.props.variableWidth) {
        var _trackWidth = 0,
            _trackLeft = 0;
        var childrenWidths = [];
        var preClones = (0, _innerSliderUtils.getPreClones)(_objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
          slideCount: _this.props.children.length
        }));
        var postClones = (0, _innerSliderUtils.getPostClones)(_objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
          slideCount: _this.props.children.length
        }));

        _this.props.children.forEach(function (child) {
          childrenWidths.push(child.props.style.width);
          _trackWidth += child.props.style.width;
        });

        for (var i = 0; i < preClones; i++) {
          _trackLeft += childrenWidths[childrenWidths.length - 1 - i];
          _trackWidth += childrenWidths[childrenWidths.length - 1 - i];
        }

        for (var _i = 0; _i < postClones; _i++) {
          _trackWidth += childrenWidths[_i];
        }

        for (var _i2 = 0; _i2 < _this.state.currentSlide; _i2++) {
          _trackLeft += childrenWidths[_i2];
        }

        var _trackStyle = {
          width: _trackWidth + "px",
          left: -_trackLeft + "px"
        };

        if (_this.props.centerMode) {
          var currentWidth = "".concat(childrenWidths[_this.state.currentSlide], "px");
          _trackStyle.left = "calc(".concat(_trackStyle.left, " + (100% - ").concat(currentWidth, ") / 2 ) ");
        }

        return {
          trackStyle: _trackStyle
        };
      }

      var childrenCount = _react["default"].Children.count(_this.props.children);

      var spec = _objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
        slideCount: childrenCount
      });

      var slideCount = (0, _innerSliderUtils.getPreClones)(spec) + (0, _innerSliderUtils.getPostClones)(spec) + childrenCount;
      var trackWidth = 100 / _this.props.slidesToShow * slideCount;
      var slideWidth = 100 / slideCount;
      var trackLeft = -slideWidth * ((0, _innerSliderUtils.getPreClones)(spec) + _this.state.currentSlide) * trackWidth / 100;

      if (_this.props.centerMode) {
        trackLeft += (100 - slideWidth * trackWidth / 100) / 2;
      }

      var trackStyle = {
        width: trackWidth + "%",
        left: trackLeft + "%"
      };
      return {
        slideWidth: slideWidth + "%",
        trackStyle: trackStyle
      };
    });

    _defineProperty(_assertThisInitialized(_this), "checkImagesLoad", function () {
      var images = _this.list.querySelectorAll(".slick-slide img");

      var imagesCount = images.length,
          loadedCount = 0;
      Array.prototype.forEach.call(images, function (image) {
        var handler = function handler() {
          return ++loadedCount && loadedCount >= imagesCount && _this.onWindowResized();
        };

        if (!image.onclick) {
          image.onclick = function () {
            return image.parentNode.focus();
          };
        } else {
          var prevClickHandler = image.onclick;

          image.onclick = function () {
            prevClickHandler();
            image.parentNode.focus();
          };
        }

        if (!image.onload) {
          if (_this.props.lazyLoad) {
            image.onload = function () {
              _this.adaptHeight();

              _this.callbackTimers.push(setTimeout(_this.onWindowResized, _this.props.speed));
            };
          } else {
            image.onload = handler;

            image.onerror = function () {
              handler();
              _this.props.onLazyLoadError && _this.props.onLazyLoadError();
            };
          }
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "progressiveLazyLoad", function () {
      var slidesToLoad = [];

      var spec = _objectSpread(_objectSpread({}, _this.props), _this.state);

      for (var index = _this.state.currentSlide; index < _this.state.slideCount + (0, _innerSliderUtils.getPostClones)(spec); index++) {
        if (_this.state.lazyLoadedList.indexOf(index) < 0) {
          slidesToLoad.push(index);
          break;
        }
      }

      for (var _index = _this.state.currentSlide - 1; _index >= -(0, _innerSliderUtils.getPreClones)(spec); _index--) {
        if (_this.state.lazyLoadedList.indexOf(_index) < 0) {
          slidesToLoad.push(_index);
          break;
        }
      }

      if (slidesToLoad.length > 0) {
        _this.setState(function (state) {
          return {
            lazyLoadedList: state.lazyLoadedList.concat(slidesToLoad)
          };
        });

        if (_this.props.onLazyLoad) {
          _this.props.onLazyLoad(slidesToLoad);
        }
      } else {
        if (_this.lazyLoadTimer) {
          clearInterval(_this.lazyLoadTimer);
          delete _this.lazyLoadTimer;
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "slideHandler", function (index) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var _this$props = _this.props,
          asNavFor = _this$props.asNavFor,
          beforeChange = _this$props.beforeChange,
          onLazyLoad = _this$props.onLazyLoad,
          speed = _this$props.speed,
          afterChange = _this$props.afterChange; // capture currentslide before state is updated

      var currentSlide = _this.state.currentSlide;

      var _slideHandler = (0, _innerSliderUtils.slideHandler)(_objectSpread(_objectSpread(_objectSpread({
        index: index
      }, _this.props), _this.state), {}, {
        trackRef: _this.track,
        useCSS: _this.props.useCSS && !dontAnimate
      })),
          state = _slideHandler.state,
          nextState = _slideHandler.nextState;

      if (!state) return;
      beforeChange && beforeChange(currentSlide, state.currentSlide);
      var slidesToLoad = state.lazyLoadedList.filter(function (value) {
        return _this.state.lazyLoadedList.indexOf(value) < 0;
      });
      onLazyLoad && slidesToLoad.length > 0 && onLazyLoad(slidesToLoad);

      if (!_this.props.waitForAnimate && _this.animationEndCallback) {
        clearTimeout(_this.animationEndCallback);
        afterChange && afterChange(currentSlide);
        delete _this.animationEndCallback;
      }

      _this.setState(state, function () {
        // asNavForIndex check is to avoid recursive calls of slideHandler in waitForAnimate=false mode
        if (asNavFor && _this.asNavForIndex !== index) {
          _this.asNavForIndex = index;
          asNavFor.innerSlider.slideHandler(index);
        }

        if (!nextState) return;
        _this.animationEndCallback = setTimeout(function () {
          var animating = nextState.animating,
              firstBatch = _objectWithoutProperties(nextState, ["animating"]);

          _this.setState(firstBatch, function () {
            _this.callbackTimers.push(setTimeout(function () {
              return _this.setState({
                animating: animating
              });
            }, 10));

            afterChange && afterChange(state.currentSlide);
            delete _this.animationEndCallback;
          });
        }, speed);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeSlide", function (options) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var spec = _objectSpread(_objectSpread({}, _this.props), _this.state);

      var targetSlide = (0, _innerSliderUtils.changeSlide)(spec, options);
      if (targetSlide !== 0 && !targetSlide) return;

      if (dontAnimate === true) {
        _this.slideHandler(targetSlide, dontAnimate);
      } else {
        _this.slideHandler(targetSlide);
      }

      _this.props.autoplay && _this.autoPlay("update");

      if (_this.props.focusOnSelect) {
        var nodes = _this.list.querySelectorAll(".slick-current");

        nodes[0] && nodes[0].focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "clickHandler", function (e) {
      if (_this.clickable === false) {
        e.stopPropagation();
        e.preventDefault();
      }

      _this.clickable = true;
    });

    _defineProperty(_assertThisInitialized(_this), "keyHandler", function (e) {
      var dir = (0, _innerSliderUtils.keyHandler)(e, _this.props.accessibility, _this.props.rtl);
      dir !== "" && _this.changeSlide({
        message: dir
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectHandler", function (options) {
      _this.changeSlide(options);
    });

    _defineProperty(_assertThisInitialized(_this), "disableBodyScroll", function () {
      var preventDefault = function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault) e.preventDefault();
        e.returnValue = false;
      };

      window.ontouchmove = preventDefault;
    });

    _defineProperty(_assertThisInitialized(_this), "enableBodyScroll", function () {
      window.ontouchmove = null;
    });

    _defineProperty(_assertThisInitialized(_this), "swipeStart", function (e) {
      if (_this.props.verticalSwiping) {
        _this.disableBodyScroll();
      }

      var state = (0, _innerSliderUtils.swipeStart)(e, _this.props.swipe, _this.props.draggable);
      state !== "" && _this.setState(state);
    });

    _defineProperty(_assertThisInitialized(_this), "swipeMove", function (e) {
      var state = (0, _innerSliderUtils.swipeMove)(e, _objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
        trackRef: _this.track,
        listRef: _this.list,
        slideIndex: _this.state.currentSlide
      }));
      if (!state) return;

      if (state["swiping"]) {
        _this.clickable = false;
      }

      _this.setState(state);
    });

    _defineProperty(_assertThisInitialized(_this), "swipeEnd", function (e) {
      var state = (0, _innerSliderUtils.swipeEnd)(e, _objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
        trackRef: _this.track,
        listRef: _this.list,
        slideIndex: _this.state.currentSlide
      }));
      if (!state) return;
      var triggerSlideHandler = state["triggerSlideHandler"];
      delete state["triggerSlideHandler"];

      _this.setState(state);

      if (triggerSlideHandler === undefined) return;

      _this.slideHandler(triggerSlideHandler);

      if (_this.props.verticalSwiping) {
        _this.enableBodyScroll();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "touchEnd", function (e) {
      _this.swipeEnd(e);

      _this.clickable = true;
    });

    _defineProperty(_assertThisInitialized(_this), "slickPrev", function () {
      // this and fellow methods are wrapped in setTimeout
      // to make sure initialize setState has happened before
      // any of such methods are called
      _this.callbackTimers.push(setTimeout(function () {
        return _this.changeSlide({
          message: "previous"
        });
      }, 0));
    });

    _defineProperty(_assertThisInitialized(_this), "slickNext", function () {
      _this.callbackTimers.push(setTimeout(function () {
        return _this.changeSlide({
          message: "next"
        });
      }, 0));
    });

    _defineProperty(_assertThisInitialized(_this), "slickGoTo", function (slide) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      slide = Number(slide);
      if (isNaN(slide)) return "";

      _this.callbackTimers.push(setTimeout(function () {
        return _this.changeSlide({
          message: "index",
          index: slide,
          currentSlide: _this.state.currentSlide
        }, dontAnimate);
      }, 0));
    });

    _defineProperty(_assertThisInitialized(_this), "play", function () {
      var nextIndex;

      if (_this.props.rtl) {
        nextIndex = _this.state.currentSlide - _this.props.slidesToScroll;
      } else {
        if ((0, _innerSliderUtils.canGoNext)(_objectSpread(_objectSpread({}, _this.props), _this.state))) {
          nextIndex = _this.state.currentSlide + _this.props.slidesToScroll;
        } else {
          return false;
        }
      }

      _this.slideHandler(nextIndex);
    });

    _defineProperty(_assertThisInitialized(_this), "autoPlay", function (playType) {
      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
      }

      var autoplaying = _this.state.autoplaying;

      if (playType === "update") {
        if (autoplaying === "hovered" || autoplaying === "focused" || autoplaying === "paused") {
          return;
        }
      } else if (playType === "leave") {
        if (autoplaying === "paused" || autoplaying === "focused") {
          return;
        }
      } else if (playType === "blur") {
        if (autoplaying === "paused" || autoplaying === "hovered") {
          return;
        }
      }

      _this.autoplayTimer = setInterval(_this.play, _this.props.autoplaySpeed + 50);

      _this.setState({
        autoplaying: "playing"
      });
    });

    _defineProperty(_assertThisInitialized(_this), "pause", function (pauseType) {
      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
        _this.autoplayTimer = null;
      }

      var autoplaying = _this.state.autoplaying;

      if (pauseType === "paused") {
        _this.setState({
          autoplaying: "paused"
        });
      } else if (pauseType === "focused") {
        if (autoplaying === "hovered" || autoplaying === "playing") {
          _this.setState({
            autoplaying: "focused"
          });
        }
      } else {
        // pauseType  is 'hovered'
        if (autoplaying === "playing") {
          _this.setState({
            autoplaying: "hovered"
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onDotsOver", function () {
      return _this.props.autoplay && _this.pause("hovered");
    });

    _defineProperty(_assertThisInitialized(_this), "onDotsLeave", function () {
      return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
    });

    _defineProperty(_assertThisInitialized(_this), "onTrackOver", function () {
      return _this.props.autoplay && _this.pause("hovered");
    });

    _defineProperty(_assertThisInitialized(_this), "onTrackLeave", function () {
      return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
    });

    _defineProperty(_assertThisInitialized(_this), "onSlideFocus", function () {
      return _this.props.autoplay && _this.pause("focused");
    });

    _defineProperty(_assertThisInitialized(_this), "onSlideBlur", function () {
      return _this.props.autoplay && _this.state.autoplaying === "focused" && _this.autoPlay("blur");
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      var className = (0, _classnames["default"])("slick-slider", _this.props.className, {
        "slick-vertical": _this.props.vertical,
        "slick-initialized": true
      });

      var spec = _objectSpread(_objectSpread({}, _this.props), _this.state);

      var trackProps = (0, _innerSliderUtils.extractObject)(spec, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]);
      var pauseOnHover = _this.props.pauseOnHover;
      trackProps = _objectSpread(_objectSpread({}, trackProps), {}, {
        onMouseEnter: pauseOnHover ? _this.onTrackOver : null,
        onMouseLeave: pauseOnHover ? _this.onTrackLeave : null,
        onMouseOver: pauseOnHover ? _this.onTrackOver : null,
        focusOnSelect: _this.props.focusOnSelect && _this.clickable ? _this.selectHandler : null
      });
      var dots;

      if (_this.props.dots === true && _this.state.slideCount >= _this.props.slidesToShow) {
        var dotProps = (0, _innerSliderUtils.extractObject)(spec, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]);
        var pauseOnDotsHover = _this.props.pauseOnDotsHover;
        dotProps = _objectSpread(_objectSpread({}, dotProps), {}, {
          clickHandler: _this.changeSlide,
          onMouseEnter: pauseOnDotsHover ? _this.onDotsLeave : null,
          onMouseOver: pauseOnDotsHover ? _this.onDotsOver : null,
          onMouseLeave: pauseOnDotsHover ? _this.onDotsLeave : null
        });
        dots = /*#__PURE__*/_react["default"].createElement(_dots.Dots, dotProps);
      }

      var prevArrow, nextArrow;
      var arrowProps = (0, _innerSliderUtils.extractObject)(spec, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
      arrowProps.clickHandler = _this.changeSlide;

      if (_this.props.arrows) {
        prevArrow = /*#__PURE__*/_react["default"].createElement(_arrows.PrevArrow, arrowProps);
        nextArrow = /*#__PURE__*/_react["default"].createElement(_arrows.NextArrow, arrowProps);
      }

      var verticalHeightStyle = null;

      if (_this.props.vertical) {
        verticalHeightStyle = {
          height: _this.state.listHeight
        };
      }

      var centerPaddingStyle = null;

      if (_this.props.vertical === false) {
        if (_this.props.centerMode === true) {
          centerPaddingStyle = {
            padding: "0px " + _this.props.centerPadding
          };
        }
      } else {
        if (_this.props.centerMode === true) {
          centerPaddingStyle = {
            padding: _this.props.centerPadding + " 0px"
          };
        }
      }

      var listStyle = _objectSpread(_objectSpread({}, verticalHeightStyle), centerPaddingStyle);

      var touchMove = _this.props.touchMove;
      var listProps = {
        className: "slick-list",
        style: listStyle,
        onClick: _this.clickHandler,
        onMouseDown: touchMove ? _this.swipeStart : null,
        onMouseMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
        onMouseUp: touchMove ? _this.swipeEnd : null,
        onMouseLeave: _this.state.dragging && touchMove ? _this.swipeEnd : null,
        onTouchStart: touchMove ? _this.swipeStart : null,
        onTouchMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
        onTouchEnd: touchMove ? _this.touchEnd : null,
        onTouchCancel: _this.state.dragging && touchMove ? _this.swipeEnd : null,
        onKeyDown: _this.props.accessibility ? _this.keyHandler : null
      };
      var innerSliderProps = {
        className: className,
        dir: "ltr",
        style: _this.props.style
      };

      if (_this.props.unslick) {
        listProps = {
          className: "slick-list"
        };
        innerSliderProps = {
          className: className
        };
      }

      return /*#__PURE__*/_react["default"].createElement("div", innerSliderProps, !_this.props.unslick ? prevArrow : "", /*#__PURE__*/_react["default"].createElement("div", _extends({
        ref: _this.listRefHandler
      }, listProps), /*#__PURE__*/_react["default"].createElement(_track.Track, _extends({
        ref: _this.trackRefHandler
      }, trackProps), _this.props.children)), !_this.props.unslick ? nextArrow : "", !_this.props.unslick ? dots : "");
    });

    _this.list = null;
    _this.track = null;
    _this.state = _objectSpread(_objectSpread({}, _initialState["default"]), {}, {
      currentSlide: _this.props.initialSlide,
      slideCount: _react["default"].Children.count(_this.props.children)
    });
    _this.callbackTimers = [];
    _this.clickable = true;
    _this.debouncedResize = null;

    var ssrState = _this.ssrInit();

    _this.state = _objectSpread(_objectSpread({}, _this.state), ssrState);
    return _this;
  }

  _createClass(InnerSlider, [{
    key: "didPropsChange",
    value: function didPropsChange(prevProps) {
      var setTrackStyle = false;

      for (var _i3 = 0, _Object$keys = Object.keys(this.props); _i3 < _Object$keys.length; _i3++) {
        var key = _Object$keys[_i3];

        if (!prevProps.hasOwnProperty(key)) {
          setTrackStyle = true;
          break;
        }

        if (_typeof(prevProps[key]) === "object" || typeof prevProps[key] === "function") {
          continue;
        }

        if (prevProps[key] !== this.props[key]) {
          setTrackStyle = true;
          break;
        }
      }

      return setTrackStyle || _react["default"].Children.count(this.props.children) !== _react["default"].Children.count(prevProps.children);
    }
  }]);

  return InnerSlider;
}(_react["default"].Component);

exports.InnerSlider = InnerSlider;

/***/ }),

/***/ "./node_modules/react-slick/lib/slider.js":
/*!************************************************!*\
  !*** ./node_modules/react-slick/lib/slider.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _innerSlider = __webpack_require__(/*! ./inner-slider */ "./node_modules/react-slick/lib/inner-slider.js");

var _json2mq = _interopRequireDefault(__webpack_require__(/*! json2mq */ "./node_modules/json2mq/index.js"));

var _defaultProps = _interopRequireDefault(__webpack_require__(/*! ./default-props */ "./node_modules/react-slick/lib/default-props.js"));

var _innerSliderUtils = __webpack_require__(/*! ./utils/innerSliderUtils */ "./node_modules/react-slick/lib/utils/innerSliderUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var enquire = (0, _innerSliderUtils.canUseDOM)() && __webpack_require__(/*! enquire.js */ "./node_modules/enquire.js/src/index.js");

var Slider = /*#__PURE__*/function (_React$Component) {
  _inherits(Slider, _React$Component);

  var _super = _createSuper(Slider);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "innerSliderRefHandler", function (ref) {
      return _this.innerSlider = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "slickPrev", function () {
      return _this.innerSlider.slickPrev();
    });

    _defineProperty(_assertThisInitialized(_this), "slickNext", function () {
      return _this.innerSlider.slickNext();
    });

    _defineProperty(_assertThisInitialized(_this), "slickGoTo", function (slide) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return _this.innerSlider.slickGoTo(slide, dontAnimate);
    });

    _defineProperty(_assertThisInitialized(_this), "slickPause", function () {
      return _this.innerSlider.pause("paused");
    });

    _defineProperty(_assertThisInitialized(_this), "slickPlay", function () {
      return _this.innerSlider.autoPlay("play");
    });

    _this.state = {
      breakpoint: null
    };
    _this._responsiveMediaHandlers = [];
    return _this;
  }

  _createClass(Slider, [{
    key: "media",
    value: function media(query, handler) {
      // javascript handler for  css media query
      enquire.register(query, handler);

      this._responsiveMediaHandlers.push({
        query: query,
        handler: handler
      });
    } // handles responsive breakpoints

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // performance monitoring
      //if (process.env.NODE_ENV !== 'production') {
      //const { whyDidYouUpdate } = require('why-did-you-update')
      //whyDidYouUpdate(React)
      //}
      if (this.props.responsive) {
        var breakpoints = this.props.responsive.map(function (breakpt) {
          return breakpt.breakpoint;
        }); // sort them in increasing order of their numerical value

        breakpoints.sort(function (x, y) {
          return x - y;
        });
        breakpoints.forEach(function (breakpoint, index) {
          // media query for each breakpoint
          var bQuery;

          if (index === 0) {
            bQuery = (0, _json2mq["default"])({
              minWidth: 0,
              maxWidth: breakpoint
            });
          } else {
            bQuery = (0, _json2mq["default"])({
              minWidth: breakpoints[index - 1] + 1,
              maxWidth: breakpoint
            });
          } // when not using server side rendering


          (0, _innerSliderUtils.canUseDOM)() && _this2.media(bQuery, function () {
            _this2.setState({
              breakpoint: breakpoint
            });
          });
        }); // Register media query for full screen. Need to support resize from small to large
        // convert javascript object to media query string

        var query = (0, _json2mq["default"])({
          minWidth: breakpoints.slice(-1)[0]
        });
        (0, _innerSliderUtils.canUseDOM)() && this.media(query, function () {
          _this2.setState({
            breakpoint: null
          });
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._responsiveMediaHandlers.forEach(function (obj) {
        enquire.unregister(obj.query, obj.handler);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var settings;
      var newProps;

      if (this.state.breakpoint) {
        newProps = this.props.responsive.filter(function (resp) {
          return resp.breakpoint === _this3.state.breakpoint;
        });
        settings = newProps[0].settings === "unslick" ? "unslick" : _objectSpread(_objectSpread(_objectSpread({}, _defaultProps["default"]), this.props), newProps[0].settings);
      } else {
        settings = _objectSpread(_objectSpread({}, _defaultProps["default"]), this.props);
      } // force scrolling by one if centerMode is on


      if (settings.centerMode) {
        if (settings.slidesToScroll > 1 && "development" !== "production") {
          console.warn("slidesToScroll should be equal to 1 in centerMode, you are using ".concat(settings.slidesToScroll));
        }

        settings.slidesToScroll = 1;
      } // force showing one slide and scrolling by one if the fade mode is on


      if (settings.fade) {
        if (settings.slidesToShow > 1 && "development" !== "production") {
          console.warn("slidesToShow should be equal to 1 when fade is true, you're using ".concat(settings.slidesToShow));
        }

        if (settings.slidesToScroll > 1 && "development" !== "production") {
          console.warn("slidesToScroll should be equal to 1 when fade is true, you're using ".concat(settings.slidesToScroll));
        }

        settings.slidesToShow = 1;
        settings.slidesToScroll = 1;
      } // makes sure that children is an array, even when there is only 1 child


      var children = _react["default"].Children.toArray(this.props.children); // Children may contain false or null, so we should filter them
      // children may also contain string filled with spaces (in certain cases where we use jsx strings)


      children = children.filter(function (child) {
        if (typeof child === "string") {
          return !!child.trim();
        }

        return !!child;
      }); // rows and slidesPerRow logic is handled here

      if (settings.variableWidth && (settings.rows > 1 || settings.slidesPerRow > 1)) {
        console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1");
        settings.variableWidth = false;
      }

      var newChildren = [];
      var currentWidth = null;

      for (var i = 0; i < children.length; i += settings.rows * settings.slidesPerRow) {
        var newSlide = [];

        for (var j = i; j < i + settings.rows * settings.slidesPerRow; j += settings.slidesPerRow) {
          var row = [];

          for (var k = j; k < j + settings.slidesPerRow; k += 1) {
            if (settings.variableWidth && children[k].props.style) {
              currentWidth = children[k].props.style.width;
            }

            if (k >= children.length) break;
            row.push( /*#__PURE__*/_react["default"].cloneElement(children[k], {
              key: 100 * i + 10 * j + k,
              tabIndex: -1,
              style: {
                width: "".concat(100 / settings.slidesPerRow, "%"),
                display: "inline-block"
              }
            }));
          }

          newSlide.push( /*#__PURE__*/_react["default"].createElement("div", {
            key: 10 * i + j
          }, row));
        }

        if (settings.variableWidth) {
          newChildren.push( /*#__PURE__*/_react["default"].createElement("div", {
            key: i,
            style: {
              width: currentWidth
            }
          }, newSlide));
        } else {
          newChildren.push( /*#__PURE__*/_react["default"].createElement("div", {
            key: i
          }, newSlide));
        }
      }

      if (settings === "unslick") {
        var className = "regular slider " + (this.props.className || "");
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: className
        }, children);
      } else if (newChildren.length <= settings.slidesToShow) {
        settings.unslick = true;
      }

      return /*#__PURE__*/_react["default"].createElement(_innerSlider.InnerSlider, _extends({
        style: this.props.style,
        ref: this.innerSliderRefHandler
      }, settings), newChildren);
    }
  }]);

  return Slider;
}(_react["default"].Component);

exports["default"] = Slider;

/***/ }),

/***/ "./node_modules/react-slick/lib/track.js":
/*!***********************************************!*\
  !*** ./node_modules/react-slick/lib/track.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Track = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _innerSliderUtils = __webpack_require__(/*! ./utils/innerSliderUtils */ "./node_modules/react-slick/lib/utils/innerSliderUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// given specifications/props for a slide, fetch all the classes that need to be applied to the slide
var getSlideClasses = function getSlideClasses(spec) {
  var slickActive, slickCenter, slickCloned;
  var centerOffset, index;

  if (spec.rtl) {
    index = spec.slideCount - 1 - spec.index;
  } else {
    index = spec.index;
  }

  slickCloned = index < 0 || index >= spec.slideCount;

  if (spec.centerMode) {
    centerOffset = Math.floor(spec.slidesToShow / 2);
    slickCenter = (index - spec.currentSlide) % spec.slideCount === 0;

    if (index > spec.currentSlide - centerOffset - 1 && index <= spec.currentSlide + centerOffset) {
      slickActive = true;
    }
  } else {
    slickActive = spec.currentSlide <= index && index < spec.currentSlide + spec.slidesToShow;
  }

  var focusedSlide;

  if (spec.targetSlide < 0) {
    focusedSlide = spec.targetSlide + spec.slideCount;
  } else if (spec.targetSlide >= spec.slideCount) {
    focusedSlide = spec.targetSlide - spec.slideCount;
  } else {
    focusedSlide = spec.targetSlide;
  }

  var slickCurrent = index === focusedSlide;
  return {
    "slick-slide": true,
    "slick-active": slickActive,
    "slick-center": slickCenter,
    "slick-cloned": slickCloned,
    "slick-current": slickCurrent // dubious in case of RTL

  };
};

var getSlideStyle = function getSlideStyle(spec) {
  var style = {};

  if (spec.variableWidth === undefined || spec.variableWidth === false) {
    style.width = spec.slideWidth;
  }

  if (spec.fade) {
    style.position = "relative";

    if (spec.vertical) {
      style.top = -spec.index * parseInt(spec.slideHeight);
    } else {
      style.left = -spec.index * parseInt(spec.slideWidth);
    }

    style.opacity = spec.currentSlide === spec.index ? 1 : 0;

    if (spec.useCSS) {
      style.transition = "opacity " + spec.speed + "ms " + spec.cssEase + ", " + "visibility " + spec.speed + "ms " + spec.cssEase;
    }
  }

  return style;
};

var getKey = function getKey(child, fallbackKey) {
  return child.key || fallbackKey;
};

var renderSlides = function renderSlides(spec) {
  var key;
  var slides = [];
  var preCloneSlides = [];
  var postCloneSlides = [];

  var childrenCount = _react["default"].Children.count(spec.children);

  var startIndex = (0, _innerSliderUtils.lazyStartIndex)(spec);
  var endIndex = (0, _innerSliderUtils.lazyEndIndex)(spec);

  _react["default"].Children.forEach(spec.children, function (elem, index) {
    var child;
    var childOnClickOptions = {
      message: "children",
      index: index,
      slidesToScroll: spec.slidesToScroll,
      currentSlide: spec.currentSlide
    }; // in case of lazyLoad, whether or not we want to fetch the slide

    if (!spec.lazyLoad || spec.lazyLoad && spec.lazyLoadedList.indexOf(index) >= 0) {
      child = elem;
    } else {
      child = /*#__PURE__*/_react["default"].createElement("div", null);
    }

    var childStyle = getSlideStyle(_objectSpread(_objectSpread({}, spec), {}, {
      index: index
    }));
    var slideClass = child.props.className || "";
    var slideClasses = getSlideClasses(_objectSpread(_objectSpread({}, spec), {}, {
      index: index
    })); // push a cloned element of the desired slide

    slides.push( /*#__PURE__*/_react["default"].cloneElement(child, {
      key: "original" + getKey(child, index),
      "data-index": index,
      className: (0, _classnames["default"])(slideClasses, slideClass),
      tabIndex: "-1",
      "aria-hidden": !slideClasses["slick-active"],
      style: _objectSpread(_objectSpread({
        outline: "none"
      }, child.props.style || {}), childStyle),
      onClick: function onClick(e) {
        child.props && child.props.onClick && child.props.onClick(e);

        if (spec.focusOnSelect) {
          spec.focusOnSelect(childOnClickOptions);
        }
      }
    })); // if slide needs to be precloned or postcloned

    if (spec.infinite && spec.fade === false) {
      var preCloneNo = childrenCount - index;

      if (preCloneNo <= (0, _innerSliderUtils.getPreClones)(spec) && childrenCount !== spec.slidesToShow) {
        key = -preCloneNo;

        if (key >= startIndex) {
          child = elem;
        }

        slideClasses = getSlideClasses(_objectSpread(_objectSpread({}, spec), {}, {
          index: key
        }));
        preCloneSlides.push( /*#__PURE__*/_react["default"].cloneElement(child, {
          key: "precloned" + getKey(child, key),
          "data-index": key,
          tabIndex: "-1",
          className: (0, _classnames["default"])(slideClasses, slideClass),
          "aria-hidden": !slideClasses["slick-active"],
          style: _objectSpread(_objectSpread({}, child.props.style || {}), childStyle),
          onClick: function onClick(e) {
            child.props && child.props.onClick && child.props.onClick(e);

            if (spec.focusOnSelect) {
              spec.focusOnSelect(childOnClickOptions);
            }
          }
        }));
      }

      if (childrenCount !== spec.slidesToShow) {
        key = childrenCount + index;

        if (key < endIndex) {
          child = elem;
        }

        slideClasses = getSlideClasses(_objectSpread(_objectSpread({}, spec), {}, {
          index: key
        }));
        postCloneSlides.push( /*#__PURE__*/_react["default"].cloneElement(child, {
          key: "postcloned" + getKey(child, key),
          "data-index": key,
          tabIndex: "-1",
          className: (0, _classnames["default"])(slideClasses, slideClass),
          "aria-hidden": !slideClasses["slick-active"],
          style: _objectSpread(_objectSpread({}, child.props.style || {}), childStyle),
          onClick: function onClick(e) {
            child.props && child.props.onClick && child.props.onClick(e);

            if (spec.focusOnSelect) {
              spec.focusOnSelect(childOnClickOptions);
            }
          }
        }));
      }
    }
  });

  if (spec.rtl) {
    return preCloneSlides.concat(slides, postCloneSlides).reverse();
  } else {
    return preCloneSlides.concat(slides, postCloneSlides);
  }
};

var Track = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Track, _React$PureComponent);

  var _super = _createSuper(Track);

  function Track() {
    var _this;

    _classCallCheck(this, Track);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "node", null);

    _defineProperty(_assertThisInitialized(_this), "handleRef", function (ref) {
      _this.node = ref;
    });

    return _this;
  }

  _createClass(Track, [{
    key: "render",
    value: function render() {
      var slides = renderSlides(this.props);
      var _this$props = this.props,
          onMouseEnter = _this$props.onMouseEnter,
          onMouseOver = _this$props.onMouseOver,
          onMouseLeave = _this$props.onMouseLeave;
      var mouseEvents = {
        onMouseEnter: onMouseEnter,
        onMouseOver: onMouseOver,
        onMouseLeave: onMouseLeave
      };
      return /*#__PURE__*/_react["default"].createElement("div", _extends({
        ref: this.handleRef,
        className: "slick-track",
        style: this.props.trackStyle
      }, mouseEvents), slides);
    }
  }]);

  return Track;
}(_react["default"].PureComponent);

exports.Track = Track;

/***/ }),

/***/ "./node_modules/react-slick/lib/utils/innerSliderUtils.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-slick/lib/utils/innerSliderUtils.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clamp = clamp;
exports.canUseDOM = exports.slidesOnLeft = exports.slidesOnRight = exports.siblingDirection = exports.getTotalSlides = exports.getPostClones = exports.getPreClones = exports.getTrackLeft = exports.getTrackAnimateCSS = exports.getTrackCSS = exports.checkSpecKeys = exports.getSlideCount = exports.checkNavigable = exports.getNavigableIndexes = exports.swipeEnd = exports.swipeMove = exports.swipeStart = exports.keyHandler = exports.changeSlide = exports.slideHandler = exports.initializedState = exports.extractObject = exports.canGoNext = exports.getSwipeDirection = exports.getHeight = exports.getWidth = exports.lazySlidesOnRight = exports.lazySlidesOnLeft = exports.lazyEndIndex = exports.lazyStartIndex = exports.getRequiredLazySlides = exports.getOnDemandLazySlides = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function clamp(number, lowerBound, upperBound) {
  return Math.max(lowerBound, Math.min(number, upperBound));
}

var getOnDemandLazySlides = function getOnDemandLazySlides(spec) {
  var onDemandSlides = [];
  var startIndex = lazyStartIndex(spec);
  var endIndex = lazyEndIndex(spec);

  for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
    if (spec.lazyLoadedList.indexOf(slideIndex) < 0) {
      onDemandSlides.push(slideIndex);
    }
  }

  return onDemandSlides;
}; // return list of slides that need to be present


exports.getOnDemandLazySlides = getOnDemandLazySlides;

var getRequiredLazySlides = function getRequiredLazySlides(spec) {
  var requiredSlides = [];
  var startIndex = lazyStartIndex(spec);
  var endIndex = lazyEndIndex(spec);

  for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
    requiredSlides.push(slideIndex);
  }

  return requiredSlides;
}; // startIndex that needs to be present


exports.getRequiredLazySlides = getRequiredLazySlides;

var lazyStartIndex = function lazyStartIndex(spec) {
  return spec.currentSlide - lazySlidesOnLeft(spec);
};

exports.lazyStartIndex = lazyStartIndex;

var lazyEndIndex = function lazyEndIndex(spec) {
  return spec.currentSlide + lazySlidesOnRight(spec);
};

exports.lazyEndIndex = lazyEndIndex;

var lazySlidesOnLeft = function lazySlidesOnLeft(spec) {
  return spec.centerMode ? Math.floor(spec.slidesToShow / 2) + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : 0;
};

exports.lazySlidesOnLeft = lazySlidesOnLeft;

var lazySlidesOnRight = function lazySlidesOnRight(spec) {
  return spec.centerMode ? Math.floor((spec.slidesToShow - 1) / 2) + 1 + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : spec.slidesToShow;
}; // get width of an element


exports.lazySlidesOnRight = lazySlidesOnRight;

var getWidth = function getWidth(elem) {
  return elem && elem.offsetWidth || 0;
};

exports.getWidth = getWidth;

var getHeight = function getHeight(elem) {
  return elem && elem.offsetHeight || 0;
};

exports.getHeight = getHeight;

var getSwipeDirection = function getSwipeDirection(touchObject) {
  var verticalSwiping = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var xDist, yDist, r, swipeAngle;
  xDist = touchObject.startX - touchObject.curX;
  yDist = touchObject.startY - touchObject.curY;
  r = Math.atan2(yDist, xDist);
  swipeAngle = Math.round(r * 180 / Math.PI);

  if (swipeAngle < 0) {
    swipeAngle = 360 - Math.abs(swipeAngle);
  }

  if (swipeAngle <= 45 && swipeAngle >= 0 || swipeAngle <= 360 && swipeAngle >= 315) {
    return "left";
  }

  if (swipeAngle >= 135 && swipeAngle <= 225) {
    return "right";
  }

  if (verticalSwiping === true) {
    if (swipeAngle >= 35 && swipeAngle <= 135) {
      return "up";
    } else {
      return "down";
    }
  }

  return "vertical";
}; // whether or not we can go next


exports.getSwipeDirection = getSwipeDirection;

var canGoNext = function canGoNext(spec) {
  var canGo = true;

  if (!spec.infinite) {
    if (spec.centerMode && spec.currentSlide >= spec.slideCount - 1) {
      canGo = false;
    } else if (spec.slideCount <= spec.slidesToShow || spec.currentSlide >= spec.slideCount - spec.slidesToShow) {
      canGo = false;
    }
  }

  return canGo;
}; // given an object and a list of keys, return new object with given keys


exports.canGoNext = canGoNext;

var extractObject = function extractObject(spec, keys) {
  var newObject = {};
  keys.forEach(function (key) {
    return newObject[key] = spec[key];
  });
  return newObject;
}; // get initialized state


exports.extractObject = extractObject;

var initializedState = function initializedState(spec) {
  // spec also contains listRef, trackRef
  var slideCount = _react["default"].Children.count(spec.children);

  var listNode = spec.listRef;
  var listWidth = Math.ceil(getWidth(listNode));
  var trackNode = spec.trackRef && spec.trackRef.node;
  var trackWidth = Math.ceil(getWidth(trackNode));
  var slideWidth;

  if (!spec.vertical) {
    var centerPaddingAdj = spec.centerMode && parseInt(spec.centerPadding) * 2;

    if (typeof spec.centerPadding === "string" && spec.centerPadding.slice(-1) === "%") {
      centerPaddingAdj *= listWidth / 100;
    }

    slideWidth = Math.ceil((listWidth - centerPaddingAdj) / spec.slidesToShow);
  } else {
    slideWidth = listWidth;
  }

  var slideHeight = listNode && getHeight(listNode.querySelector('[data-index="0"]'));
  var listHeight = slideHeight * spec.slidesToShow;
  var currentSlide = spec.currentSlide === undefined ? spec.initialSlide : spec.currentSlide;

  if (spec.rtl && spec.currentSlide === undefined) {
    currentSlide = slideCount - 1 - spec.initialSlide;
  }

  var lazyLoadedList = spec.lazyLoadedList || [];
  var slidesToLoad = getOnDemandLazySlides(_objectSpread(_objectSpread({}, spec), {}, {
    currentSlide: currentSlide,
    lazyLoadedList: lazyLoadedList
  }));
  lazyLoadedList.concat(slidesToLoad);
  var state = {
    slideCount: slideCount,
    slideWidth: slideWidth,
    listWidth: listWidth,
    trackWidth: trackWidth,
    currentSlide: currentSlide,
    slideHeight: slideHeight,
    listHeight: listHeight,
    lazyLoadedList: lazyLoadedList
  };

  if (spec.autoplaying === null && spec.autoplay) {
    state["autoplaying"] = "playing";
  }

  return state;
};

exports.initializedState = initializedState;

var slideHandler = function slideHandler(spec) {
  var waitForAnimate = spec.waitForAnimate,
      animating = spec.animating,
      fade = spec.fade,
      infinite = spec.infinite,
      index = spec.index,
      slideCount = spec.slideCount,
      lazyLoadedList = spec.lazyLoadedList,
      lazyLoad = spec.lazyLoad,
      currentSlide = spec.currentSlide,
      centerMode = spec.centerMode,
      slidesToScroll = spec.slidesToScroll,
      slidesToShow = spec.slidesToShow,
      useCSS = spec.useCSS;
  if (waitForAnimate && animating) return {};
  var animationSlide = index,
      finalSlide,
      animationLeft,
      finalLeft;
  var state = {},
      nextState = {};
  var targetSlide = infinite ? index : clamp(index, 0, slideCount - 1);

  if (fade) {
    if (!infinite && (index < 0 || index >= slideCount)) return {};

    if (index < 0) {
      animationSlide = index + slideCount;
    } else if (index >= slideCount) {
      animationSlide = index - slideCount;
    }

    if (lazyLoad && lazyLoadedList.indexOf(animationSlide) < 0) {
      lazyLoadedList.push(animationSlide);
    }

    state = {
      animating: true,
      currentSlide: animationSlide,
      lazyLoadedList: lazyLoadedList,
      targetSlide: animationSlide
    };
    nextState = {
      animating: false,
      targetSlide: animationSlide
    };
  } else {
    finalSlide = animationSlide;

    if (animationSlide < 0) {
      finalSlide = animationSlide + slideCount;
      if (!infinite) finalSlide = 0;else if (slideCount % slidesToScroll !== 0) finalSlide = slideCount - slideCount % slidesToScroll;
    } else if (!canGoNext(spec) && animationSlide > currentSlide) {
      animationSlide = finalSlide = currentSlide;
    } else if (centerMode && animationSlide >= slideCount) {
      animationSlide = infinite ? slideCount : slideCount - 1;
      finalSlide = infinite ? 0 : slideCount - 1;
    } else if (animationSlide >= slideCount) {
      finalSlide = animationSlide - slideCount;
      if (!infinite) finalSlide = slideCount - slidesToShow;else if (slideCount % slidesToScroll !== 0) finalSlide = 0;
    }

    if (!infinite && animationSlide + slidesToShow >= slideCount) {
      finalSlide = slideCount - slidesToShow;
    }

    animationLeft = getTrackLeft(_objectSpread(_objectSpread({}, spec), {}, {
      slideIndex: animationSlide
    }));
    finalLeft = getTrackLeft(_objectSpread(_objectSpread({}, spec), {}, {
      slideIndex: finalSlide
    }));

    if (!infinite) {
      if (animationLeft === finalLeft) animationSlide = finalSlide;
      animationLeft = finalLeft;
    }

    lazyLoad && lazyLoadedList.concat(getOnDemandLazySlides(_objectSpread(_objectSpread({}, spec), {}, {
      currentSlide: animationSlide
    })));

    if (!useCSS) {
      state = {
        currentSlide: finalSlide,
        trackStyle: getTrackCSS(_objectSpread(_objectSpread({}, spec), {}, {
          left: finalLeft
        })),
        lazyLoadedList: lazyLoadedList,
        targetSlide: targetSlide
      };
    } else {
      state = {
        animating: true,
        currentSlide: finalSlide,
        trackStyle: getTrackAnimateCSS(_objectSpread(_objectSpread({}, spec), {}, {
          left: animationLeft
        })),
        lazyLoadedList: lazyLoadedList,
        targetSlide: targetSlide
      };
      nextState = {
        animating: false,
        currentSlide: finalSlide,
        trackStyle: getTrackCSS(_objectSpread(_objectSpread({}, spec), {}, {
          left: finalLeft
        })),
        swipeLeft: null,
        targetSlide: targetSlide
      };
    }
  }

  return {
    state: state,
    nextState: nextState
  };
};

exports.slideHandler = slideHandler;

var changeSlide = function changeSlide(spec, options) {
  var indexOffset, previousInt, slideOffset, unevenOffset, targetSlide;
  var slidesToScroll = spec.slidesToScroll,
      slidesToShow = spec.slidesToShow,
      slideCount = spec.slideCount,
      currentSlide = spec.currentSlide,
      previousTargetSlide = spec.targetSlide,
      lazyLoad = spec.lazyLoad,
      infinite = spec.infinite;
  unevenOffset = slideCount % slidesToScroll !== 0;
  indexOffset = unevenOffset ? 0 : (slideCount - currentSlide) % slidesToScroll;

  if (options.message === "previous") {
    slideOffset = indexOffset === 0 ? slidesToScroll : slidesToShow - indexOffset;
    targetSlide = currentSlide - slideOffset;

    if (lazyLoad && !infinite) {
      previousInt = currentSlide - slideOffset;
      targetSlide = previousInt === -1 ? slideCount - 1 : previousInt;
    }

    if (!infinite) {
      targetSlide = previousTargetSlide - slidesToScroll;
    }
  } else if (options.message === "next") {
    slideOffset = indexOffset === 0 ? slidesToScroll : indexOffset;
    targetSlide = currentSlide + slideOffset;

    if (lazyLoad && !infinite) {
      targetSlide = (currentSlide + slidesToScroll) % slideCount + indexOffset;
    }

    if (!infinite) {
      targetSlide = previousTargetSlide + slidesToScroll;
    }
  } else if (options.message === "dots") {
    // Click on dots
    targetSlide = options.index * options.slidesToScroll;
  } else if (options.message === "children") {
    // Click on the slides
    targetSlide = options.index;

    if (infinite) {
      var direction = siblingDirection(_objectSpread(_objectSpread({}, spec), {}, {
        targetSlide: targetSlide
      }));

      if (targetSlide > options.currentSlide && direction === "left") {
        targetSlide = targetSlide - slideCount;
      } else if (targetSlide < options.currentSlide && direction === "right") {
        targetSlide = targetSlide + slideCount;
      }
    }
  } else if (options.message === "index") {
    targetSlide = Number(options.index);
  }

  return targetSlide;
};

exports.changeSlide = changeSlide;

var keyHandler = function keyHandler(e, accessibility, rtl) {
  if (e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !accessibility) return "";
  if (e.keyCode === 37) return rtl ? "next" : "previous";
  if (e.keyCode === 39) return rtl ? "previous" : "next";
  return "";
};

exports.keyHandler = keyHandler;

var swipeStart = function swipeStart(e, swipe, draggable) {
  e.target.tagName === "IMG" && e.preventDefault();
  if (!swipe || !draggable && e.type.indexOf("mouse") !== -1) return "";
  return {
    dragging: true,
    touchObject: {
      startX: e.touches ? e.touches[0].pageX : e.clientX,
      startY: e.touches ? e.touches[0].pageY : e.clientY,
      curX: e.touches ? e.touches[0].pageX : e.clientX,
      curY: e.touches ? e.touches[0].pageY : e.clientY
    }
  };
};

exports.swipeStart = swipeStart;

var swipeMove = function swipeMove(e, spec) {
  // spec also contains, trackRef and slideIndex
  var scrolling = spec.scrolling,
      animating = spec.animating,
      vertical = spec.vertical,
      swipeToSlide = spec.swipeToSlide,
      verticalSwiping = spec.verticalSwiping,
      rtl = spec.rtl,
      currentSlide = spec.currentSlide,
      edgeFriction = spec.edgeFriction,
      edgeDragged = spec.edgeDragged,
      onEdge = spec.onEdge,
      swiped = spec.swiped,
      swiping = spec.swiping,
      slideCount = spec.slideCount,
      slidesToScroll = spec.slidesToScroll,
      infinite = spec.infinite,
      touchObject = spec.touchObject,
      swipeEvent = spec.swipeEvent,
      listHeight = spec.listHeight,
      listWidth = spec.listWidth;
  if (scrolling) return;
  if (animating) return e.preventDefault();
  if (vertical && swipeToSlide && verticalSwiping) e.preventDefault();
  var swipeLeft,
      state = {};
  var curLeft = getTrackLeft(spec);
  touchObject.curX = e.touches ? e.touches[0].pageX : e.clientX;
  touchObject.curY = e.touches ? e.touches[0].pageY : e.clientY;
  touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));
  var verticalSwipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curY - touchObject.startY, 2)));

  if (!verticalSwiping && !swiping && verticalSwipeLength > 10) {
    return {
      scrolling: true
    };
  }

  if (verticalSwiping) touchObject.swipeLength = verticalSwipeLength;
  var positionOffset = (!rtl ? 1 : -1) * (touchObject.curX > touchObject.startX ? 1 : -1);
  if (verticalSwiping) positionOffset = touchObject.curY > touchObject.startY ? 1 : -1;
  var dotCount = Math.ceil(slideCount / slidesToScroll);
  var swipeDirection = getSwipeDirection(spec.touchObject, verticalSwiping);
  var touchSwipeLength = touchObject.swipeLength;

  if (!infinite) {
    if (currentSlide === 0 && swipeDirection === "right" || currentSlide + 1 >= dotCount && swipeDirection === "left" || !canGoNext(spec) && swipeDirection === "left") {
      touchSwipeLength = touchObject.swipeLength * edgeFriction;

      if (edgeDragged === false && onEdge) {
        onEdge(swipeDirection);
        state["edgeDragged"] = true;
      }
    }
  }

  if (!swiped && swipeEvent) {
    swipeEvent(swipeDirection);
    state["swiped"] = true;
  }

  if (!vertical) {
    if (!rtl) {
      swipeLeft = curLeft + touchSwipeLength * positionOffset;
    } else {
      swipeLeft = curLeft - touchSwipeLength * positionOffset;
    }
  } else {
    swipeLeft = curLeft + touchSwipeLength * (listHeight / listWidth) * positionOffset;
  }

  if (verticalSwiping) {
    swipeLeft = curLeft + touchSwipeLength * positionOffset;
  }

  state = _objectSpread(_objectSpread({}, state), {}, {
    touchObject: touchObject,
    swipeLeft: swipeLeft,
    trackStyle: getTrackCSS(_objectSpread(_objectSpread({}, spec), {}, {
      left: swipeLeft
    }))
  });

  if (Math.abs(touchObject.curX - touchObject.startX) < Math.abs(touchObject.curY - touchObject.startY) * 0.8) {
    return state;
  }

  if (touchObject.swipeLength > 10) {
    state["swiping"] = true;
    e.preventDefault();
  }

  return state;
};

exports.swipeMove = swipeMove;

var swipeEnd = function swipeEnd(e, spec) {
  var dragging = spec.dragging,
      swipe = spec.swipe,
      touchObject = spec.touchObject,
      listWidth = spec.listWidth,
      touchThreshold = spec.touchThreshold,
      verticalSwiping = spec.verticalSwiping,
      listHeight = spec.listHeight,
      swipeToSlide = spec.swipeToSlide,
      scrolling = spec.scrolling,
      onSwipe = spec.onSwipe,
      targetSlide = spec.targetSlide,
      currentSlide = spec.currentSlide,
      infinite = spec.infinite;

  if (!dragging) {
    if (swipe) e.preventDefault();
    return {};
  }

  var minSwipe = verticalSwiping ? listHeight / touchThreshold : listWidth / touchThreshold;
  var swipeDirection = getSwipeDirection(touchObject, verticalSwiping); // reset the state of touch related state variables.

  var state = {
    dragging: false,
    edgeDragged: false,
    scrolling: false,
    swiping: false,
    swiped: false,
    swipeLeft: null,
    touchObject: {}
  };

  if (scrolling) {
    return state;
  }

  if (!touchObject.swipeLength) {
    return state;
  }

  if (touchObject.swipeLength > minSwipe) {
    e.preventDefault();

    if (onSwipe) {
      onSwipe(swipeDirection);
    }

    var slideCount, newSlide;
    var activeSlide = infinite ? currentSlide : targetSlide;

    switch (swipeDirection) {
      case "left":
      case "up":
        newSlide = activeSlide + getSlideCount(spec);
        slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
        state["currentDirection"] = 0;
        break;

      case "right":
      case "down":
        newSlide = activeSlide - getSlideCount(spec);
        slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
        state["currentDirection"] = 1;
        break;

      default:
        slideCount = activeSlide;
    }

    state["triggerSlideHandler"] = slideCount;
  } else {
    // Adjust the track back to it's original position.
    var currentLeft = getTrackLeft(spec);
    state["trackStyle"] = getTrackAnimateCSS(_objectSpread(_objectSpread({}, spec), {}, {
      left: currentLeft
    }));
  }

  return state;
};

exports.swipeEnd = swipeEnd;

var getNavigableIndexes = function getNavigableIndexes(spec) {
  var max = spec.infinite ? spec.slideCount * 2 : spec.slideCount;
  var breakpoint = spec.infinite ? spec.slidesToShow * -1 : 0;
  var counter = spec.infinite ? spec.slidesToShow * -1 : 0;
  var indexes = [];

  while (breakpoint < max) {
    indexes.push(breakpoint);
    breakpoint = counter + spec.slidesToScroll;
    counter += Math.min(spec.slidesToScroll, spec.slidesToShow);
  }

  return indexes;
};

exports.getNavigableIndexes = getNavigableIndexes;

var checkNavigable = function checkNavigable(spec, index) {
  var navigables = getNavigableIndexes(spec);
  var prevNavigable = 0;

  if (index > navigables[navigables.length - 1]) {
    index = navigables[navigables.length - 1];
  } else {
    for (var n in navigables) {
      if (index < navigables[n]) {
        index = prevNavigable;
        break;
      }

      prevNavigable = navigables[n];
    }
  }

  return index;
};

exports.checkNavigable = checkNavigable;

var getSlideCount = function getSlideCount(spec) {
  var centerOffset = spec.centerMode ? spec.slideWidth * Math.floor(spec.slidesToShow / 2) : 0;

  if (spec.swipeToSlide) {
    var swipedSlide;
    var slickList = spec.listRef;
    var slides = slickList.querySelectorAll(".slick-slide");
    Array.from(slides).every(function (slide) {
      if (!spec.vertical) {
        if (slide.offsetLeft - centerOffset + getWidth(slide) / 2 > spec.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      } else {
        if (slide.offsetTop + getHeight(slide) / 2 > spec.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      }

      return true;
    });

    if (!swipedSlide) {
      return 0;
    }

    var currentIndex = spec.rtl === true ? spec.slideCount - spec.currentSlide : spec.currentSlide;
    var slidesTraversed = Math.abs(swipedSlide.dataset.index - currentIndex) || 1;
    return slidesTraversed;
  } else {
    return spec.slidesToScroll;
  }
};

exports.getSlideCount = getSlideCount;

var checkSpecKeys = function checkSpecKeys(spec, keysArray) {
  return keysArray.reduce(function (value, key) {
    return value && spec.hasOwnProperty(key);
  }, true) ? null : console.error("Keys Missing:", spec);
};

exports.checkSpecKeys = checkSpecKeys;

var getTrackCSS = function getTrackCSS(spec) {
  checkSpecKeys(spec, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
  var trackWidth, trackHeight;
  var trackChildren = spec.slideCount + 2 * spec.slidesToShow;

  if (!spec.vertical) {
    trackWidth = getTotalSlides(spec) * spec.slideWidth;
  } else {
    trackHeight = trackChildren * spec.slideHeight;
  }

  var style = {
    opacity: 1,
    transition: "",
    WebkitTransition: ""
  };

  if (spec.useTransform) {
    var WebkitTransform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
    var transform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
    var msTransform = !spec.vertical ? "translateX(" + spec.left + "px)" : "translateY(" + spec.left + "px)";
    style = _objectSpread(_objectSpread({}, style), {}, {
      WebkitTransform: WebkitTransform,
      transform: transform,
      msTransform: msTransform
    });
  } else {
    if (spec.vertical) {
      style["top"] = spec.left;
    } else {
      style["left"] = spec.left;
    }
  }

  if (spec.fade) style = {
    opacity: 1
  };
  if (trackWidth) style.width = trackWidth;
  if (trackHeight) style.height = trackHeight; // Fallback for IE8

  if (window && !window.addEventListener && window.attachEvent) {
    if (!spec.vertical) {
      style.marginLeft = spec.left + "px";
    } else {
      style.marginTop = spec.left + "px";
    }
  }

  return style;
};

exports.getTrackCSS = getTrackCSS;

var getTrackAnimateCSS = function getTrackAnimateCSS(spec) {
  checkSpecKeys(spec, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
  var style = getTrackCSS(spec); // useCSS is true by default so it can be undefined

  if (spec.useTransform) {
    style.WebkitTransition = "-webkit-transform " + spec.speed + "ms " + spec.cssEase;
    style.transition = "transform " + spec.speed + "ms " + spec.cssEase;
  } else {
    if (spec.vertical) {
      style.transition = "top " + spec.speed + "ms " + spec.cssEase;
    } else {
      style.transition = "left " + spec.speed + "ms " + spec.cssEase;
    }
  }

  return style;
};

exports.getTrackAnimateCSS = getTrackAnimateCSS;

var getTrackLeft = function getTrackLeft(spec) {
  if (spec.unslick) {
    return 0;
  }

  checkSpecKeys(spec, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
  var slideIndex = spec.slideIndex,
      trackRef = spec.trackRef,
      infinite = spec.infinite,
      centerMode = spec.centerMode,
      slideCount = spec.slideCount,
      slidesToShow = spec.slidesToShow,
      slidesToScroll = spec.slidesToScroll,
      slideWidth = spec.slideWidth,
      listWidth = spec.listWidth,
      variableWidth = spec.variableWidth,
      slideHeight = spec.slideHeight,
      fade = spec.fade,
      vertical = spec.vertical;
  var slideOffset = 0;
  var targetLeft;
  var targetSlide;
  var verticalOffset = 0;

  if (fade || spec.slideCount === 1) {
    return 0;
  }

  var slidesToOffset = 0;

  if (infinite) {
    slidesToOffset = -getPreClones(spec); // bring active slide to the beginning of visual area
    // if next scroll doesn't have enough children, just reach till the end of original slides instead of shifting slidesToScroll children

    if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
      slidesToOffset = -(slideIndex > slideCount ? slidesToShow - (slideIndex - slideCount) : slideCount % slidesToScroll);
    } // shift current slide to center of the frame


    if (centerMode) {
      slidesToOffset += parseInt(slidesToShow / 2);
    }
  } else {
    if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
      slidesToOffset = slidesToShow - slideCount % slidesToScroll;
    }

    if (centerMode) {
      slidesToOffset = parseInt(slidesToShow / 2);
    }
  }

  slideOffset = slidesToOffset * slideWidth;
  verticalOffset = slidesToOffset * slideHeight;

  if (!vertical) {
    targetLeft = slideIndex * slideWidth * -1 + slideOffset;
  } else {
    targetLeft = slideIndex * slideHeight * -1 + verticalOffset;
  }

  if (variableWidth === true) {
    var targetSlideIndex;
    var trackElem = trackRef && trackRef.node;
    targetSlideIndex = slideIndex + getPreClones(spec);
    targetSlide = trackElem && trackElem.childNodes[targetSlideIndex];
    targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;

    if (centerMode === true) {
      targetSlideIndex = infinite ? slideIndex + getPreClones(spec) : slideIndex;
      targetSlide = trackElem && trackElem.children[targetSlideIndex];
      targetLeft = 0;

      for (var slide = 0; slide < targetSlideIndex; slide++) {
        targetLeft -= trackElem && trackElem.children[slide] && trackElem.children[slide].offsetWidth;
      }

      targetLeft -= parseInt(spec.centerPadding);
      targetLeft += targetSlide && (listWidth - targetSlide.offsetWidth) / 2;
    }
  }

  return targetLeft;
};

exports.getTrackLeft = getTrackLeft;

var getPreClones = function getPreClones(spec) {
  if (spec.unslick || !spec.infinite) {
    return 0;
  }

  if (spec.variableWidth) {
    return spec.slideCount;
  }

  return spec.slidesToShow + (spec.centerMode ? 1 : 0);
};

exports.getPreClones = getPreClones;

var getPostClones = function getPostClones(spec) {
  if (spec.unslick || !spec.infinite) {
    return 0;
  }

  return spec.slideCount;
};

exports.getPostClones = getPostClones;

var getTotalSlides = function getTotalSlides(spec) {
  return spec.slideCount === 1 ? 1 : getPreClones(spec) + spec.slideCount + getPostClones(spec);
};

exports.getTotalSlides = getTotalSlides;

var siblingDirection = function siblingDirection(spec) {
  if (spec.targetSlide > spec.currentSlide) {
    if (spec.targetSlide > spec.currentSlide + slidesOnRight(spec)) {
      return "left";
    }

    return "right";
  } else {
    if (spec.targetSlide < spec.currentSlide - slidesOnLeft(spec)) {
      return "right";
    }

    return "left";
  }
};

exports.siblingDirection = siblingDirection;

var slidesOnRight = function slidesOnRight(_ref) {
  var slidesToShow = _ref.slidesToShow,
      centerMode = _ref.centerMode,
      rtl = _ref.rtl,
      centerPadding = _ref.centerPadding;

  // returns no of slides on the right of active slide
  if (centerMode) {
    var right = (slidesToShow - 1) / 2 + 1;
    if (parseInt(centerPadding) > 0) right += 1;
    if (rtl && slidesToShow % 2 === 0) right += 1;
    return right;
  }

  if (rtl) {
    return 0;
  }

  return slidesToShow - 1;
};

exports.slidesOnRight = slidesOnRight;

var slidesOnLeft = function slidesOnLeft(_ref2) {
  var slidesToShow = _ref2.slidesToShow,
      centerMode = _ref2.centerMode,
      rtl = _ref2.rtl,
      centerPadding = _ref2.centerPadding;

  // returns no of slides on the left of active slide
  if (centerMode) {
    var left = (slidesToShow - 1) / 2 + 1;
    if (parseInt(centerPadding) > 0) left += 1;
    if (!rtl && slidesToShow % 2 === 0) left += 1;
    return left;
  }

  if (rtl) {
    return slidesToShow - 1;
  }

  return 0;
};

exports.slidesOnLeft = slidesOnLeft;

var canUseDOM = function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
};

exports.canUseDOM = canUseDOM;

/***/ }),

/***/ "./node_modules/react-spring/web.js":
/*!******************************************!*\
  !*** ./node_modules/react-spring/web.js ***!
  \******************************************/
/*! exports provided: apply, config, update, animated, a, interpolate, Globals, useSpring, useTrail, useTransition, useChain, useSprings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return apply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animated", function() { return extendedAnimated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return extendedAnimated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return interpolate$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSpring", function() { return useSpring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTrail", function() { return useTrail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTransition", function() { return useTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useChain", function() { return useChain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSprings", function() { return useSprings; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




const is = {
  arr: Array.isArray,
  obj: a => Object.prototype.toString.call(a) === '[object Object]',
  fun: a => typeof a === 'function',
  str: a => typeof a === 'string',
  num: a => typeof a === 'number',
  und: a => a === void 0,
  nul: a => a === null,
  set: a => a instanceof Set,
  map: a => a instanceof Map,

  equ(a, b) {
    if (typeof a !== typeof b) return false;
    if (is.str(a) || is.num(a)) return a === b;
    if (is.obj(a) && is.obj(b) && Object.keys(a).length + Object.keys(b).length === 0) return true;
    let i;

    for (i in a) if (!(i in b)) return false;

    for (i in b) if (a[i] !== b[i]) return false;

    return is.und(i) ? a === b : true;
  }

};
function merge(target, lowercase) {
  if (lowercase === void 0) {
    lowercase = true;
  }

  return object => (is.arr(object) ? object : Object.keys(object)).reduce((acc, element) => {
    const key = lowercase ? element[0].toLowerCase() + element.substring(1) : element;
    acc[key] = target(key);
    return acc;
  }, target);
}
function useForceUpdate() {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        f = _useState[1];

  const forceUpdate = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => f(v => !v), []);
  return forceUpdate;
}
function withDefault(value, defaultValue) {
  return is.und(value) || is.nul(value) ? defaultValue : value;
}
function toArray(a) {
  return !is.und(a) ? is.arr(a) ? a : [a] : [];
}
function callProp(obj) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return is.fun(obj) ? obj(...args) : obj;
}

function getForwardProps(props) {
  const to = props.to,
        from = props.from,
        config = props.config,
        onStart = props.onStart,
        onRest = props.onRest,
        onFrame = props.onFrame,
        children = props.children,
        reset = props.reset,
        reverse = props.reverse,
        force = props.force,
        immediate = props.immediate,
        delay = props.delay,
        attach = props.attach,
        destroyed = props.destroyed,
        interpolateTo = props.interpolateTo,
        ref = props.ref,
        lazy = props.lazy,
        forward = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);

  return forward;
}

function interpolateTo(props) {
  const forward = getForwardProps(props);
  if (is.und(forward)) return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    to: forward
  }, props);
  const rest = Object.keys(props).reduce((a, k) => !is.und(forward[k]) ? a : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, a, {
    [k]: props[k]
  }), {});
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    to: forward
  }, rest);
}
function handleRef(ref, forward) {
  if (forward) {
    // If it's a function, assume it's a ref callback
    if (is.fun(forward)) forward(ref);else if (is.obj(forward)) {
      forward.current = ref;
    }
  }

  return ref;
}

class Animated {
  constructor() {
    this.payload = void 0;
    this.children = [];
  }

  getAnimatedValue() {
    return this.getValue();
  }

  getPayload() {
    return this.payload || this;
  }

  attach() {}

  detach() {}

  getChildren() {
    return this.children;
  }

  addChild(child) {
    if (this.children.length === 0) this.attach();
    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
    if (this.children.length === 0) this.detach();
  }

}
class AnimatedArray extends Animated {
  constructor() {
    super(...arguments);
    this.payload = [];

    this.attach = () => this.payload.forEach(p => p instanceof Animated && p.addChild(this));

    this.detach = () => this.payload.forEach(p => p instanceof Animated && p.removeChild(this));
  }

}
class AnimatedObject extends Animated {
  constructor() {
    super(...arguments);
    this.payload = {};

    this.attach = () => Object.values(this.payload).forEach(s => s instanceof Animated && s.addChild(this));

    this.detach = () => Object.values(this.payload).forEach(s => s instanceof Animated && s.removeChild(this));
  }

  getValue(animated) {
    if (animated === void 0) {
      animated = false;
    }

    const payload = {};

    for (const key in this.payload) {
      const value = this.payload[key];
      if (animated && !(value instanceof Animated)) continue;
      payload[key] = value instanceof Animated ? value[animated ? 'getAnimatedValue' : 'getValue']() : value;
    }

    return payload;
  }

  getAnimatedValue() {
    return this.getValue(true);
  }

}

let applyAnimatedValues;
function injectApplyAnimatedValues(fn, transform) {
  applyAnimatedValues = {
    fn,
    transform
  };
}
let colorNames;
function injectColorNames(names) {
  colorNames = names;
}
let requestFrame = cb => typeof window !== 'undefined' ? window.requestAnimationFrame(cb) : -1;
let cancelFrame = id => {
  typeof window !== 'undefined' && window.cancelAnimationFrame(id);
};
function injectFrame(raf, caf) {
  requestFrame = raf;
  cancelFrame = caf;
}
let interpolation;
function injectStringInterpolator(fn) {
  interpolation = fn;
}
let now = () => Date.now();
function injectNow(nowFn) {
  now = nowFn;
}
let defaultElement;
function injectDefaultElement(el) {
  defaultElement = el;
}
let animatedApi = node => node.current;
function injectAnimatedApi(fn) {
  animatedApi = fn;
}
let createAnimatedStyle;
function injectCreateAnimatedStyle(factory) {
  createAnimatedStyle = factory;
}
let manualFrameloop;
function injectManualFrameloop(callback) {
  manualFrameloop = callback;
}

var Globals = /*#__PURE__*/Object.freeze({
  get applyAnimatedValues () { return applyAnimatedValues; },
  injectApplyAnimatedValues: injectApplyAnimatedValues,
  get colorNames () { return colorNames; },
  injectColorNames: injectColorNames,
  get requestFrame () { return requestFrame; },
  get cancelFrame () { return cancelFrame; },
  injectFrame: injectFrame,
  get interpolation () { return interpolation; },
  injectStringInterpolator: injectStringInterpolator,
  get now () { return now; },
  injectNow: injectNow,
  get defaultElement () { return defaultElement; },
  injectDefaultElement: injectDefaultElement,
  get animatedApi () { return animatedApi; },
  injectAnimatedApi: injectAnimatedApi,
  get createAnimatedStyle () { return createAnimatedStyle; },
  injectCreateAnimatedStyle: injectCreateAnimatedStyle,
  get manualFrameloop () { return manualFrameloop; },
  injectManualFrameloop: injectManualFrameloop
});

/**
 * Wraps the `style` property with `AnimatedStyle`.
 */

class AnimatedProps extends AnimatedObject {
  constructor(props, callback) {
    super();
    this.update = void 0;
    this.payload = !props.style ? props : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      style: createAnimatedStyle(props.style)
    });
    this.update = callback;
    this.attach();
  }

}

const isFunctionComponent = val => is.fun(val) && !(val.prototype instanceof react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

const createAnimatedComponent = Component => {
  const AnimatedComponent = Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => {
    const forceUpdate = useForceUpdate();
    const mounted = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(true);
    const propsAnimated = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
    const node = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
    const attachProps = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(props => {
      const oldPropsAnimated = propsAnimated.current;

      const callback = () => {
        let didUpdate = false;

        if (node.current) {
          didUpdate = applyAnimatedValues.fn(node.current, propsAnimated.current.getAnimatedValue());
        }

        if (!node.current || didUpdate === false) {
          // If no referenced node has been found, or the update target didn't have a
          // native-responder, then forceUpdate the animation ...
          forceUpdate();
        }
      };

      propsAnimated.current = new AnimatedProps(props, callback);
      oldPropsAnimated && oldPropsAnimated.detach();
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => () => {
      mounted.current = false;
      propsAnimated.current && propsAnimated.current.detach();
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"])(ref, () => animatedApi(node, mounted, forceUpdate));
    attachProps(props);

    const _getValue = propsAnimated.current.getValue(),
          scrollTop = _getValue.scrollTop,
          scrollLeft = _getValue.scrollLeft,
          animatedProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_getValue, ["scrollTop", "scrollLeft"]); // Functions cannot have refs, see:
    // See: https://github.com/react-spring/react-spring/issues/569


    const refFn = isFunctionComponent(Component) ? undefined : childRef => node.current = handleRef(childRef, ref);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, animatedProps, {
      ref: refFn
    }));
  });
  return AnimatedComponent;
};

let active = false;
const controllers = new Set();

const update = () => {
  if (!active) return false;
  let time = now();

  for (let controller of controllers) {
    let isActive = false;

    for (let configIdx = 0; configIdx < controller.configs.length; configIdx++) {
      let config = controller.configs[configIdx];
      let endOfAnimation, lastTime;

      for (let valIdx = 0; valIdx < config.animatedValues.length; valIdx++) {
        let animation = config.animatedValues[valIdx]; // If an animation is done, skip, until all of them conclude

        if (animation.done) continue;
        let from = config.fromValues[valIdx];
        let to = config.toValues[valIdx];
        let position = animation.lastPosition;
        let isAnimated = to instanceof Animated;
        let velocity = Array.isArray(config.initialVelocity) ? config.initialVelocity[valIdx] : config.initialVelocity;
        if (isAnimated) to = to.getValue(); // Conclude animation if it's either immediate, or from-values match end-state

        if (config.immediate) {
          animation.setValue(to);
          animation.done = true;
          continue;
        } // Break animation when string values are involved


        if (typeof from === 'string' || typeof to === 'string') {
          animation.setValue(to);
          animation.done = true;
          continue;
        }

        if (config.duration !== void 0) {
          /** Duration easing */
          position = from + config.easing((time - animation.startTime) / config.duration) * (to - from);
          endOfAnimation = time >= animation.startTime + config.duration;
        } else if (config.decay) {
          /** Decay easing */
          position = from + velocity / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (time - animation.startTime)));
          endOfAnimation = Math.abs(animation.lastPosition - position) < 0.1;
          if (endOfAnimation) to = position;
        } else {
          /** Spring easing */
          lastTime = animation.lastTime !== void 0 ? animation.lastTime : time;
          velocity = animation.lastVelocity !== void 0 ? animation.lastVelocity : config.initialVelocity; // If we lost a lot of frames just jump to the end.

          if (time > lastTime + 64) lastTime = time; // http://gafferongames.com/game-physics/fix-your-timestep/

          let numSteps = Math.floor(time - lastTime);

          for (let i = 0; i < numSteps; ++i) {
            let force = -config.tension * (position - to);
            let damping = -config.friction * velocity;
            let acceleration = (force + damping) / config.mass;
            velocity = velocity + acceleration * 1 / 1000;
            position = position + velocity * 1 / 1000;
          } // Conditions for stopping the spring animation


          let isOvershooting = config.clamp && config.tension !== 0 ? from < to ? position > to : position < to : false;
          let isVelocity = Math.abs(velocity) <= config.precision;
          let isDisplacement = config.tension !== 0 ? Math.abs(to - position) <= config.precision : true;
          endOfAnimation = isOvershooting || isVelocity && isDisplacement;
          animation.lastVelocity = velocity;
          animation.lastTime = time;
        } // Trails aren't done until their parents conclude


        if (isAnimated && !config.toValues[valIdx].done) endOfAnimation = false;

        if (endOfAnimation) {
          // Ensure that we end up with a round value
          if (animation.value !== to) position = to;
          animation.done = true;
        } else isActive = true;

        animation.setValue(position);
        animation.lastPosition = position;
      } // Keep track of updated values only when necessary


      if (controller.props.onFrame) controller.values[config.name] = config.interpolation.getValue();
    } // Update callbacks in the end of the frame


    if (controller.props.onFrame) controller.props.onFrame(controller.values); // Either call onEnd or next frame

    if (!isActive) {
      controllers.delete(controller);
      controller.stop(true);
    }
  } // Loop over as long as there are controllers ...


  if (controllers.size) {
    if (manualFrameloop) manualFrameloop();else requestFrame(update);
  } else {
    active = false;
  }

  return active;
};

const start = controller => {
  if (!controllers.has(controller)) controllers.add(controller);

  if (!active) {
    active = true;
    if (manualFrameloop) requestFrame(manualFrameloop);else requestFrame(update);
  }
};

const stop = controller => {
  if (controllers.has(controller)) controllers.delete(controller);
};

function createInterpolator(range, output, extrapolate) {
  if (typeof range === 'function') {
    return range;
  }

  if (Array.isArray(range)) {
    return createInterpolator({
      range,
      output: output,
      extrapolate
    });
  }

  if (interpolation && typeof range.output[0] === 'string') {
    return interpolation(range);
  }

  const config = range;
  const outputRange = config.output;
  const inputRange = config.range || [0, 1];
  const extrapolateLeft = config.extrapolateLeft || config.extrapolate || 'extend';
  const extrapolateRight = config.extrapolateRight || config.extrapolate || 'extend';

  const easing = config.easing || (t => t);

  return input => {
    const range = findRange(input, inputRange);
    return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, config.map);
  };
}

function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  let result = map ? map(input) : input; // Extrapolate

  if (result < inputMin) {
    if (extrapolateLeft === 'identity') return result;else if (extrapolateLeft === 'clamp') result = inputMin;
  }

  if (result > inputMax) {
    if (extrapolateRight === 'identity') return result;else if (extrapolateRight === 'clamp') result = inputMax;
  }

  if (outputMin === outputMax) return outputMin;
  if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax; // Input Range

  if (inputMin === -Infinity) result = -result;else if (inputMax === Infinity) result = result - inputMin;else result = (result - inputMin) / (inputMax - inputMin); // Easing

  result = easing(result); // Output Range

  if (outputMin === -Infinity) result = -result;else if (outputMax === Infinity) result = result + outputMin;else result = result * (outputMax - outputMin) + outputMin;
  return result;
}

function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i) if (inputRange[i] >= input) break;

  return i - 1;
}

class AnimatedInterpolation extends AnimatedArray {
  constructor(parents, range, output, extrapolate) {
    super();
    this.calc = void 0;
    this.payload = parents instanceof AnimatedArray && !(parents instanceof AnimatedInterpolation) ? parents.getPayload() : Array.isArray(parents) ? parents : [parents];
    this.calc = createInterpolator(range, output, extrapolate);
  }

  getValue() {
    return this.calc(...this.payload.map(value => value.getValue()));
  }

  updateConfig(range, output, extrapolate) {
    this.calc = createInterpolator(range, output, extrapolate);
  }

  interpolate(range, output, extrapolate) {
    return new AnimatedInterpolation(this, range, output, extrapolate);
  }

}

const interpolate$1 = (parents, range, output) => parents && new AnimatedInterpolation(parents, range, output);

const config = {
  default: {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  },
  molasses: {
    tension: 280,
    friction: 120
  }
};

/** API
 *  useChain(references, timeSteps, timeFrame)
 */

function useChain(refs, timeSteps, timeFrame) {
  if (timeFrame === void 0) {
    timeFrame = 1000;
  }

  const previous = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (is.equ(refs, previous.current)) refs.forEach((_ref) => {
      let current = _ref.current;
      return current && current.start();
    });else if (timeSteps) {
      refs.forEach((_ref2, index) => {
        let current = _ref2.current;

        if (current) {
          const ctrls = current.controllers;

          if (ctrls.length) {
            const t = timeFrame * timeSteps[index];
            ctrls.forEach(ctrl => {
              ctrl.queue = ctrl.queue.map(e => Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e, {
                delay: e.delay + t
              }));
              ctrl.start();
            });
          }
        }
      });
    } else refs.reduce((q, _ref3, rI) => {
      let current = _ref3.current;
      return q = q.then(() => current.start());
    }, Promise.resolve());
    previous.current = refs;
  });
}

/**
 * Animated works by building a directed acyclic graph of dependencies
 * transparently when you render your Animated components.
 *
 *               new Animated.Value(0)
 *     .interpolate()        .interpolate()    new Animated.Value(1)
 *         opacity               translateY      scale
 *          style                         transform
 *         View#234                         style
 *                                         View#123
 *
 * A) Top Down phase
 * When an AnimatedValue is updated, we recursively go down through this
 * graph in order to find leaf nodes: the views that we flag as needing
 * an update.
 *
 * B) Bottom Up phase
 * When a view is flagged as needing an update, we recursively go back up
 * in order to build the new value that it needs. The reason why we need
 * this two-phases process is to deal with composite props such as
 * transform which can receive values from multiple parents.
 */
function addAnimatedStyles(node, styles) {
  if ('update' in node) {
    styles.add(node);
  } else {
    node.getChildren().forEach(child => addAnimatedStyles(child, styles));
  }
}

class AnimatedValue extends Animated {
  constructor(_value) {
    var _this;

    super();
    _this = this;
    this.animatedStyles = new Set();
    this.value = void 0;
    this.startPosition = void 0;
    this.lastPosition = void 0;
    this.lastVelocity = void 0;
    this.startTime = void 0;
    this.lastTime = void 0;
    this.done = false;

    this.setValue = function (value, flush) {
      if (flush === void 0) {
        flush = true;
      }

      _this.value = value;
      if (flush) _this.flush();
    };

    this.value = _value;
    this.startPosition = _value;
    this.lastPosition = _value;
  }

  flush() {
    if (this.animatedStyles.size === 0) {
      addAnimatedStyles(this, this.animatedStyles);
    }

    this.animatedStyles.forEach(animatedStyle => animatedStyle.update());
  }

  clearStyles() {
    this.animatedStyles.clear();
  }

  getValue() {
    return this.value;
  }

  interpolate(range, output, extrapolate) {
    return new AnimatedInterpolation(this, range, output, extrapolate);
  }

}

class AnimatedValueArray extends AnimatedArray {
  constructor(values) {
    super();
    this.payload = values.map(n => new AnimatedValue(n));
  }

  setValue(value, flush) {
    if (flush === void 0) {
      flush = true;
    }

    if (Array.isArray(value)) {
      if (value.length === this.payload.length) {
        value.forEach((v, i) => this.payload[i].setValue(v, flush));
      }
    } else {
      this.payload.forEach(p => p.setValue(value, flush));
    }
  }

  getValue() {
    return this.payload.map(v => v.getValue());
  }

  interpolate(range, output) {
    return new AnimatedInterpolation(this, range, output);
  }

}

let G = 0;

class Controller {
  constructor() {
    this.id = void 0;
    this.idle = true;
    this.hasChanged = false;
    this.guid = 0;
    this.local = 0;
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.values = {};
    this.configs = [];
    this.listeners = [];
    this.queue = [];
    this.localQueue = void 0;

    this.getValues = () => this.interpolations;

    this.id = G++;
  }
  /** update(props)
   *  This function filters input props and creates an array of tasks which are executed in .start()
   *  Each task is allowed to carry a delay, which means it can execute asnychroneously */


  update(args) {
    //this._id = n + this.id
    if (!args) return this; // Extract delay and the to-prop from props

    const _ref = interpolateTo(args),
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0 : _ref$delay,
          to = _ref.to,
          props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["delay", "to"]);

    if (is.arr(to) || is.fun(to)) {
      // If config is either a function or an array queue it up as is
      this.queue.push(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        delay,
        to
      }));
    } else if (to) {
      // Otherwise go through each key since it could be delayed individually
      let ops = {};
      Object.entries(to).forEach((_ref2) => {
        let k = _ref2[0],
            v = _ref2[1];

        // Fetch delay and create an entry, consisting of the to-props, the delay, and basic props
        const entry = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          to: {
            [k]: v
          },
          delay: callProp(delay, k)
        }, props);

        const previous = ops[entry.delay] && ops[entry.delay].to;
        ops[entry.delay] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ops[entry.delay], entry, {
          to: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, previous, entry.to)
        });
      });
      this.queue = Object.values(ops);
    } // Sort queue, so that async calls go last


    this.queue = this.queue.sort((a, b) => a.delay - b.delay); // Diff the reduced props immediately (they'll contain the from-prop and some config)

    this.diff(props);
    return this;
  }
  /** start(onEnd)
   *  This function either executes a queue, if present, or starts the frameloop, which animates */


  start(onEnd) {
    // If a queue is present we must excecute it
    if (this.queue.length) {
      this.idle = false; // Updates can interrupt trailing queues, in that case we just merge values

      if (this.localQueue) {
        this.localQueue.forEach((_ref3) => {
          let _ref3$from = _ref3.from,
              from = _ref3$from === void 0 ? {} : _ref3$from,
              _ref3$to = _ref3.to,
              to = _ref3$to === void 0 ? {} : _ref3$to;
          if (is.obj(from)) this.merged = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, from, this.merged);
          if (is.obj(to)) this.merged = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.merged, to);
        });
      } // The guid helps us tracking frames, a new queue over an old one means an override
      // We discard async calls in that caseÍ


      const local = this.local = ++this.guid;
      const queue = this.localQueue = this.queue;
      this.queue = []; // Go through each entry and execute it

      queue.forEach((_ref4, index) => {
        let delay = _ref4.delay,
            props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref4, ["delay"]);

        const cb = finished => {
          if (index === queue.length - 1 && local === this.guid && finished) {
            this.idle = true;
            if (this.props.onRest) this.props.onRest(this.merged);
          }

          if (onEnd) onEnd();
        }; // Entries can be delayed, ansyc or immediate


        let async = is.arr(props.to) || is.fun(props.to);

        if (delay) {
          setTimeout(() => {
            if (local === this.guid) {
              if (async) this.runAsync(props, cb);else this.diff(props).start(cb);
            }
          }, delay);
        } else if (async) this.runAsync(props, cb);else this.diff(props).start(cb);
      });
    } // Otherwise we kick of the frameloop
    else {
        if (is.fun(onEnd)) this.listeners.push(onEnd);
        if (this.props.onStart) this.props.onStart();
        start(this);
      }

    return this;
  }

  stop(finished) {
    this.listeners.forEach(onEnd => onEnd(finished));
    this.listeners = [];
    return this;
  }
  /** Pause sets onEnd listeners free, but also removes the controller from the frameloop */


  pause(finished) {
    this.stop(true);
    if (finished) stop(this);
    return this;
  }

  runAsync(_ref5, onEnd) {
    var _this = this;

    let delay = _ref5.delay,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref5, ["delay"]);

    const local = this.local; // If "to" is either a function or an array it will be processed async, therefor "to" should be empty right now
    // If the view relies on certain values "from" has to be present

    let queue = Promise.resolve(undefined);

    if (is.arr(props.to)) {
      for (let i = 0; i < props.to.length; i++) {
        const index = i;

        const fresh = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, interpolateTo(props.to[index]));

        if (is.arr(fresh.config)) fresh.config = fresh.config[index];
        queue = queue.then(() => {
          //this.stop()
          if (local === this.guid) return new Promise(r => this.diff(fresh).start(r));
        });
      }
    } else if (is.fun(props.to)) {
      let index = 0;
      let last;
      queue = queue.then(() => props.to( // next(props)
      p => {
        const fresh = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, interpolateTo(p));

        if (is.arr(fresh.config)) fresh.config = fresh.config[index];
        index++; //this.stop()

        if (local === this.guid) return last = new Promise(r => this.diff(fresh).start(r));
        return;
      }, // cancel()
      function (finished) {
        if (finished === void 0) {
          finished = true;
        }

        return _this.stop(finished);
      }).then(() => last));
    }

    queue.then(onEnd);
  }

  diff(props) {
    this.props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, props);
    let _this$props = this.props,
        _this$props$from = _this$props.from,
        from = _this$props$from === void 0 ? {} : _this$props$from,
        _this$props$to = _this$props.to,
        to = _this$props$to === void 0 ? {} : _this$props$to,
        _this$props$config = _this$props.config,
        config = _this$props$config === void 0 ? {} : _this$props$config,
        reverse = _this$props.reverse,
        attach = _this$props.attach,
        reset = _this$props.reset,
        immediate = _this$props.immediate; // Reverse values when requested

    if (reverse) {
      var _ref6 = [to, from];
      from = _ref6[0];
      to = _ref6[1];
    } // This will collect all props that were ever set, reset merged props when necessary


    this.merged = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, from, this.merged, to);
    this.hasChanged = false; // Attachment handling, trailed springs can "attach" themselves to a previous spring

    let target = attach && attach(this); // Reduces input { name: value } pairs into animated values

    this.animations = Object.entries(this.merged).reduce((acc, _ref7) => {
      let name = _ref7[0],
          value = _ref7[1];
      // Issue cached entries, except on reset
      let entry = acc[name] || {}; // Figure out what the value is supposed to be

      const isNumber = is.num(value);
      const isString = is.str(value) && !value.startsWith('#') && !/\d/.test(value) && !colorNames[value];
      const isArray = is.arr(value);
      const isInterpolation = !isNumber && !isArray && !isString;
      let fromValue = !is.und(from[name]) ? from[name] : value;
      let toValue = isNumber || isArray ? value : isString ? value : 1;
      let toConfig = callProp(config, name);
      if (target) toValue = target.animations[name].parent;
      let parent = entry.parent,
          interpolation$$1 = entry.interpolation,
          toValues = toArray(target ? toValue.getPayload() : toValue),
          animatedValues;
      let newValue = value;
      if (isInterpolation) newValue = interpolation({
        range: [0, 1],
        output: [value, value]
      })(1);
      let currentValue = interpolation$$1 && interpolation$$1.getValue(); // Change detection flags

      const isFirst = is.und(parent);
      const isActive = !isFirst && entry.animatedValues.some(v => !v.done);
      const currentValueDiffersFromGoal = !is.equ(newValue, currentValue);
      const hasNewGoal = !is.equ(newValue, entry.previous);
      const hasNewConfig = !is.equ(toConfig, entry.config); // Change animation props when props indicate a new goal (new value differs from previous one)
      // and current values differ from it. Config changes trigger a new update as well (though probably shouldn't?)

      if (reset || hasNewGoal && currentValueDiffersFromGoal || hasNewConfig) {
        // Convert regular values into animated values, ALWAYS re-use if possible
        if (isNumber || isString) parent = interpolation$$1 = entry.parent || new AnimatedValue(fromValue);else if (isArray) parent = interpolation$$1 = entry.parent || new AnimatedValueArray(fromValue);else if (isInterpolation) {
          let prev = entry.interpolation && entry.interpolation.calc(entry.parent.value);
          prev = prev !== void 0 && !reset ? prev : fromValue;

          if (entry.parent) {
            parent = entry.parent;
            parent.setValue(0, false);
          } else parent = new AnimatedValue(0);

          const range = {
            output: [prev, value]
          };

          if (entry.interpolation) {
            interpolation$$1 = entry.interpolation;
            entry.interpolation.updateConfig(range);
          } else interpolation$$1 = parent.interpolate(range);
        }
        toValues = toArray(target ? toValue.getPayload() : toValue);
        animatedValues = toArray(parent.getPayload());
        if (reset && !isInterpolation) parent.setValue(fromValue, false);
        this.hasChanged = true; // Reset animated values

        animatedValues.forEach(value => {
          value.startPosition = value.value;
          value.lastPosition = value.value;
          value.lastVelocity = isActive ? value.lastVelocity : undefined;
          value.lastTime = isActive ? value.lastTime : undefined;
          value.startTime = now();
          value.done = false;
          value.animatedStyles.clear();
        }); // Set immediate values

        if (callProp(immediate, name)) {
          parent.setValue(isInterpolation ? toValue : value, false);
        }

        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, acc, {
          [name]: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, entry, {
            name,
            parent,
            interpolation: interpolation$$1,
            animatedValues,
            toValues,
            previous: newValue,
            config: toConfig,
            fromValues: toArray(parent.getValue()),
            immediate: callProp(immediate, name),
            initialVelocity: withDefault(toConfig.velocity, 0),
            clamp: withDefault(toConfig.clamp, false),
            precision: withDefault(toConfig.precision, 0.01),
            tension: withDefault(toConfig.tension, 170),
            friction: withDefault(toConfig.friction, 26),
            mass: withDefault(toConfig.mass, 1),
            duration: toConfig.duration,
            easing: withDefault(toConfig.easing, t => t),
            decay: toConfig.decay
          })
        });
      } else {
        if (!currentValueDiffersFromGoal) {
          // So ... the current target value (newValue) appears to be different from the previous value,
          // which normally constitutes an update, but the actual value (currentValue) matches the target!
          // In order to resolve this without causing an animation update we silently flag the animation as done,
          // which it technically is. Interpolations also needs a config update with their target set to 1.
          if (isInterpolation) {
            parent.setValue(1, false);
            interpolation$$1.updateConfig({
              output: [newValue, newValue]
            });
          }

          parent.done = true;
          this.hasChanged = true;
          return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, acc, {
            [name]: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, acc[name], {
              previous: newValue
            })
          });
        }

        return acc;
      }
    }, this.animations);

    if (this.hasChanged) {
      // Make animations available to frameloop
      this.configs = Object.values(this.animations);
      this.values = {};
      this.interpolations = {};

      for (let key in this.animations) {
        this.interpolations[key] = this.animations[key].interpolation;
        this.values[key] = this.animations[key].interpolation.getValue();
      }
    }

    return this;
  }

  destroy() {
    this.stop();
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.values = {};
    this.configs = [];
    this.local = 0;
  }

}

/** API
 * const props = useSprings(number, [{ ... }, { ... }, ...])
 * const [props, set] = useSprings(number, (i, controller) => ({ ... }))
 */

const useSprings = (length, props) => {
  const mounted = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(false);
  const ctrl = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  const isFn = is.fun(props); // The controller maintains the animation values, starts and stops animations

  const _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => {
    // Remove old controllers
    if (ctrl.current) {
      ctrl.current.map(c => c.destroy());
      ctrl.current = undefined;
    }

    let ref;
    return [new Array(length).fill().map((_, i) => {
      const ctrl = new Controller();
      const newProps = isFn ? callProp(props, i, ctrl) : props[i];
      if (i === 0) ref = newProps.ref;
      ctrl.update(newProps);
      if (!ref) ctrl.start();
      return ctrl;
    }), ref];
  }, [length]),
        controllers = _useMemo[0],
        ref = _useMemo[1];

  ctrl.current = controllers; // The hooks reference api gets defined here ...

  const api = Object(react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"])(ref, () => ({
    start: () => Promise.all(ctrl.current.map(c => new Promise(r => c.start(r)))),
    stop: finished => ctrl.current.forEach(c => c.stop(finished)),

    get controllers() {
      return ctrl.current;
    }

  })); // This function updates the controllers

  const updateCtrl = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => updateProps => ctrl.current.map((c, i) => {
    c.update(isFn ? callProp(updateProps, i, c) : updateProps[i]);
    if (!ref) c.start();
  }), [length]); // Update controller if props aren't functional

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (mounted.current) {
      if (!isFn) updateCtrl(props);
    } else if (!ref) ctrl.current.forEach(c => c.start());
  }); // Update mounted flag and destroy controller on unmount

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => (mounted.current = true, () => ctrl.current.forEach(c => c.destroy())), []); // Return animated props, or, anim-props + the update-setter above

  const propValues = ctrl.current.map(c => c.getValues());
  return isFn ? [propValues, updateCtrl, finished => ctrl.current.forEach(c => c.pause(finished))] : propValues;
};

/** API
 * const props = useSpring({ ... })
 * const [props, set] = useSpring(() => ({ ... }))
 */

const useSpring = props => {
  const isFn = is.fun(props);

  const _useSprings = useSprings(1, isFn ? props : [props]),
        result = _useSprings[0],
        set = _useSprings[1],
        pause = _useSprings[2];

  return isFn ? [result[0], set, pause] : result;
};

/** API
 * const trails = useTrail(number, { ... })
 * const [trails, set] = useTrail(number, () => ({ ... }))
 */

const useTrail = (length, props) => {
  const mounted = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(false);
  const isFn = is.fun(props);
  const updateProps = callProp(props);
  const instances = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  const _useSprings = useSprings(length, (i, ctrl) => {
    if (i === 0) instances.current = [];
    instances.current.push(ctrl);
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, updateProps, {
      config: callProp(updateProps.config, i),
      attach: i > 0 && (() => instances.current[i - 1])
    });
  }),
        result = _useSprings[0],
        set = _useSprings[1],
        pause = _useSprings[2]; // Set up function to update controller


  const updateCtrl = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => props => set((i, ctrl) => {
    const last = props.reverse ? i === 0 : length - 1 === i;
    const attachIdx = props.reverse ? i + 1 : i - 1;
    const attachController = instances.current[attachIdx];
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      config: callProp(props.config || updateProps.config, i),
      attach: attachController && (() => attachController)
    });
  }), [length, updateProps.reverse]); // Update controller if props aren't functional

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => void (mounted.current && !isFn && updateCtrl(props))); // Update mounted flag and destroy controller on unmount

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => void (mounted.current = true), []);
  return isFn ? [result, updateCtrl, pause] : result;
};

/** API
 * const transitions = useTransition(items, itemKeys, { ... })
 * const [transitions, update] = useTransition(items, itemKeys, () => ({ ... }))
 */

let guid = 0;
const ENTER = 'enter';
const LEAVE = 'leave';
const UPDATE = 'update';

const mapKeys = (items, keys) => (typeof keys === 'function' ? items.map(keys) : toArray(keys)).map(String);

const get = props => {
  let items = props.items,
      _props$keys = props.keys,
      keys = _props$keys === void 0 ? item => item : _props$keys,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["items", "keys"]);

  items = toArray(items !== void 0 ? items : null);
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    items,
    keys: mapKeys(items, keys)
  }, rest);
};

function useTransition(input, keyTransform, config) {
  const props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    items: input,
    keys: keyTransform || (i => i)
  }, config);

  const _get = get(props),
        _get$lazy = _get.lazy,
        lazy = _get$lazy === void 0 ? false : _get$lazy,
        _get$unique = _get.unique,
        _get$reset = _get.reset,
        reset = _get$reset === void 0 ? false : _get$reset,
        enter = _get.enter,
        leave = _get.leave,
        update = _get.update,
        onDestroyed = _get.onDestroyed,
        keys = _get.keys,
        items = _get.items,
        onFrame = _get.onFrame,
        _onRest = _get.onRest,
        onStart = _get.onStart,
        ref = _get.ref,
        extra = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_get, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]);

  const forceUpdate = useForceUpdate();
  const mounted = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(false);
  const state = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])({
    mounted: false,
    first: true,
    deleted: [],
    current: {},
    transitions: [],
    prevProps: {},
    paused: !!props.ref,
    instances: !mounted.current && new Map(),
    forceUpdate
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"])(props.ref, () => ({
    start: () => Promise.all(Array.from(state.current.instances).map((_ref) => {
      let c = _ref[1];
      return new Promise(r => c.start(r));
    })),
    stop: finished => Array.from(state.current.instances).forEach((_ref2) => {
      let c = _ref2[1];
      return c.stop(finished);
    }),

    get controllers() {
      return Array.from(state.current.instances).map((_ref3) => {
        let c = _ref3[1];
        return c;
      });
    }

  })); // Update state

  state.current = diffItems(state.current, props);

  if (state.current.changed) {
    // Update state
    state.current.transitions.forEach(transition => {
      const slot = transition.slot,
            from = transition.from,
            to = transition.to,
            config = transition.config,
            trail = transition.trail,
            key = transition.key,
            item = transition.item;
      if (!state.current.instances.has(key)) state.current.instances.set(key, new Controller()); // update the map object

      const ctrl = state.current.instances.get(key);

      const newProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, extra, {
        to,
        from,
        config,
        ref,
        onRest: values => {
          if (state.current.mounted) {
            if (transition.destroyed) {
              // If no ref is given delete destroyed items immediately
              if (!ref && !lazy) cleanUp(state, key);
              if (onDestroyed) onDestroyed(item);
            } // A transition comes to rest once all its springs conclude


            const curInstances = Array.from(state.current.instances);
            const active = curInstances.some((_ref4) => {
              let c = _ref4[1];
              return !c.idle;
            });
            if (!active && (ref || lazy) && state.current.deleted.length > 0) cleanUp(state);
            if (_onRest) _onRest(item, slot, values);
          }
        },
        onStart: onStart && (() => onStart(item, slot)),
        onFrame: onFrame && (values => onFrame(item, slot, values)),
        delay: trail,
        reset: reset && slot === ENTER // Update controller

      });

      ctrl.update(newProps);
      if (!state.current.paused) ctrl.start();
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    state.current.mounted = mounted.current = true;
    return () => {
      state.current.mounted = mounted.current = false;
      Array.from(state.current.instances).map((_ref5) => {
        let c = _ref5[1];
        return c.destroy();
      });
      state.current.instances.clear();
    };
  }, []);
  return state.current.transitions.map((_ref6) => {
    let item = _ref6.item,
        slot = _ref6.slot,
        key = _ref6.key;
    return {
      item,
      key,
      state: slot,
      props: state.current.instances.get(key).getValues()
    };
  });
}

function cleanUp(state, filterKey) {
  const deleted = state.current.deleted;

  for (let _ref7 of deleted) {
    let key = _ref7.key;

    const filter = t => t.key !== key;

    if (is.und(filterKey) || filterKey === key) {
      state.current.instances.delete(key);
      state.current.transitions = state.current.transitions.filter(filter);
      state.current.deleted = state.current.deleted.filter(filter);
    }
  }

  state.current.forceUpdate();
}

function diffItems(_ref8, props) {
  let first = _ref8.first,
      prevProps = _ref8.prevProps,
      state = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref8, ["first", "prevProps"]);

  let _get2 = get(props),
      items = _get2.items,
      keys = _get2.keys,
      initial = _get2.initial,
      from = _get2.from,
      enter = _get2.enter,
      leave = _get2.leave,
      update = _get2.update,
      _get2$trail = _get2.trail,
      trail = _get2$trail === void 0 ? 0 : _get2$trail,
      unique = _get2.unique,
      config = _get2.config,
      _get2$order = _get2.order,
      order = _get2$order === void 0 ? [ENTER, LEAVE, UPDATE] : _get2$order;

  let _get3 = get(prevProps),
      _keys = _get3.keys,
      _items = _get3.items;

  let current = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.current);

  let deleted = [...state.deleted]; // Compare next keys with current keys

  let currentKeys = Object.keys(current);
  let currentSet = new Set(currentKeys);
  let nextSet = new Set(keys);
  let added = keys.filter(item => !currentSet.has(item));
  let removed = state.transitions.filter(item => !item.destroyed && !nextSet.has(item.originalKey)).map(i => i.originalKey);
  let updated = keys.filter(item => currentSet.has(item));
  let delay = -trail;

  while (order.length) {
    const changeType = order.shift();

    switch (changeType) {
      case ENTER:
        {
          added.forEach((key, index) => {
            // In unique mode, remove fading out transitions if their key comes in again
            if (unique && deleted.find(d => d.originalKey === key)) deleted = deleted.filter(t => t.originalKey !== key);
            const keyIndex = keys.indexOf(key);
            const item = items[keyIndex];
            const slot = first && initial !== void 0 ? 'initial' : ENTER;
            current[key] = {
              slot,
              originalKey: key,
              key: unique ? String(key) : guid++,
              item,
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              from: callProp(first ? initial !== void 0 ? initial || {} : from : from, item),
              to: callProp(enter, item)
            };
          });
          break;
        }

      case LEAVE:
        {
          removed.forEach(key => {
            const keyIndex = _keys.indexOf(key);

            const item = _items[keyIndex];
            const slot = LEAVE;
            deleted.unshift(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, current[key], {
              slot,
              destroyed: true,
              left: _keys[Math.max(0, keyIndex - 1)],
              right: _keys[Math.min(_keys.length, keyIndex + 1)],
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              to: callProp(leave, item)
            }));
            delete current[key];
          });
          break;
        }

      case UPDATE:
        {
          updated.forEach(key => {
            const keyIndex = keys.indexOf(key);
            const item = items[keyIndex];
            const slot = UPDATE;
            current[key] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, current[key], {
              item,
              slot,
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              to: callProp(update, item)
            });
          });
          break;
        }
    }
  }

  let out = keys.map(key => current[key]); // This tries to restore order for deleted items by finding their last known siblings
  // only using the left sibling to keep order placement consistent for all deleted items

  deleted.forEach((_ref9) => {
    let left = _ref9.left,
        right = _ref9.right,
        item = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref9, ["left", "right"]);

    let pos; // Was it the element on the left, if yes, move there ...

    if ((pos = out.findIndex(t => t.originalKey === left)) !== -1) pos += 1; // And if nothing else helps, move it to the start ¯\_(ツ)_/¯

    pos = Math.max(0, pos);
    out = [...out.slice(0, pos), item, ...out.slice(pos)];
  });
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
    changed: added.length || removed.length || updated.length,
    first: first && added.length === 0,
    transitions: out,
    current,
    deleted,
    prevProps: props
  });
}

class AnimatedStyle extends AnimatedObject {
  constructor(style) {
    if (style === void 0) {
      style = {};
    }

    super();

    if (style.transform && !(style.transform instanceof Animated)) {
      style = applyAnimatedValues.transform(style);
    }

    this.payload = style;
  }

}

// http://www.w3.org/TR/css3-color/#svg-color
const colors = {
  transparent: 0x00000000,
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff
};

// const INTEGER = '[-+]?\\d+';
const NUMBER = '[-+]?\\d*\\.?\\d+';
const PERCENTAGE = NUMBER + '%';

function call() {
  for (var _len = arguments.length, parts = new Array(_len), _key = 0; _key < _len; _key++) {
    parts[_key] = arguments[_key];
  }

  return '\\(\\s*(' + parts.join(')\\s*,\\s*(') + ')\\s*\\)';
}

const rgb = new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER));
const rgba = new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER));
const hsl = new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE));
const hsla = new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
const hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex6 = /^#([0-9a-fA-F]{6})$/;
const hex8 = /^#([0-9a-fA-F]{8})$/;

/*
https://github.com/react-community/normalize-css-color

BSD 3-Clause License

Copyright (c) 2016, React Community
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function normalizeColor(color) {
  let match;

  if (typeof color === 'number') {
    return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
  } // Ordered based on occurrences on Facebook codebase


  if (match = hex6.exec(color)) return parseInt(match[1] + 'ff', 16) >>> 0;
  if (colors.hasOwnProperty(color)) return colors[color];

  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    0x000000ff) >>> // a
    0;
  }

  if (match = rgba.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    parse1(match[4])) >>> // a
    0;
  }

  if (match = hex3.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    'ff', // a
    16) >>> 0;
  } // https://drafts.csswg.org/css-color-4/#hex-notation


  if (match = hex8.exec(color)) return parseInt(match[1], 16) >>> 0;

  if (match = hex4.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    match[4] + match[4], // a
    16) >>> 0;
  }

  if (match = hsl.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | 0x000000ff) >>> // a
    0;
  }

  if (match = hsla.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | parse1(match[4])) >>> // a
    0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslToRgb(h, s, l) {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}

function parse255(str) {
  const int = parseInt(str, 10);
  if (int < 0) return 0;
  if (int > 255) return 255;
  return int;
}

function parse360(str) {
  const int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}

function parse1(str) {
  const num = parseFloat(str);
  if (num < 0) return 0;
  if (num > 1) return 255;
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  const int = parseFloat(str);
  if (int < 0) return 0;
  if (int > 100) return 1;
  return int / 100;
}

function colorToRgba(input) {
  let int32Color = normalizeColor(input);
  if (int32Color === null) return input;
  int32Color = int32Color || 0;
  let r = (int32Color & 0xff000000) >>> 24;
  let g = (int32Color & 0x00ff0000) >>> 16;
  let b = (int32Color & 0x0000ff00) >>> 8;
  let a = (int32Color & 0x000000ff) / 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
} // Problem: https://github.com/animatedjs/animated/pull/102
// Solution: https://stackoverflow.com/questions/638565/parsing-scientific-notation-sensibly/658662


const stringShapeRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g; // Covers rgb, rgba, hsl, hsla
// Taken from https://gist.github.com/olmokramer/82ccce673f86db7cda5e

const colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi; // Covers color names (transparent, blue, etc.)

const colorNamesRegex = new RegExp(`(${Object.keys(colors).join('|')})`, 'g');
/**
 * Supports string shapes by extracting numbers so new values can be computed,
 * and recombines those values into new strings of the same shape.  Supports
 * things like:
 *
 *   rgba(123, 42, 99, 0.36)           // colors
 *   -45deg                            // values with units
 *   0 2px 2px 0px rgba(0, 0, 0, 0.12) // box shadows
 */

const createStringInterpolator = config => {
  // Replace colors with rgba
  const outputRange = config.output.map(rangeValue => rangeValue.replace(colorRegex, colorToRgba)).map(rangeValue => rangeValue.replace(colorNamesRegex, colorToRgba));
  const outputRanges = outputRange[0].match(stringShapeRegex).map(() => []);
  outputRange.forEach(value => {
    value.match(stringShapeRegex).forEach((number, i) => outputRanges[i].push(+number));
  });
  const interpolations = outputRange[0].match(stringShapeRegex).map((_value, i) => createInterpolator(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, config, {
    output: outputRanges[i]
  })));
  return input => {
    let i = 0;
    return outputRange[0] // 'rgba(0, 100, 200, 0)'
    // ->
    // 'rgba(${interpolations[0](input)}, ${interpolations[1](input)}, ...'
    .replace(stringShapeRegex, () => interpolations[i++](input)) // rgba requires that the r,g,b are integers.... so we want to round them, but we *dont* want to
    // round the opacity (4th column).
    .replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (_, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`);
  };
};

let isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

const prefixKey = (prefix, key) => prefix + key.charAt(0).toUpperCase() + key.substring(1);

const prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
  prefixes.forEach(prefix => acc[prefixKey(prefix, prop)] = acc[prop]);
  return acc;
}, isUnitlessNumber);

function dangerousStyleValue(name, value, isCustomProperty) {
  if (value == null || typeof value === 'boolean' || value === '') return '';
  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers

  return ('' + value).trim();
}

const attributeCache = {};
injectCreateAnimatedStyle(style => new AnimatedStyle(style));
injectDefaultElement('div');
injectStringInterpolator(createStringInterpolator);
injectColorNames(colors);
injectApplyAnimatedValues((instance, props) => {
  if (instance.nodeType && instance.setAttribute !== undefined) {
    const style = props.style,
          children = props.children,
          scrollTop = props.scrollTop,
          scrollLeft = props.scrollLeft,
          attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["style", "children", "scrollTop", "scrollLeft"]);

    const filter = instance.nodeName === 'filter' || instance.parentNode && instance.parentNode.nodeName === 'filter';
    if (scrollTop !== void 0) instance.scrollTop = scrollTop;
    if (scrollLeft !== void 0) instance.scrollLeft = scrollLeft; // Set textContent, if children is an animatable value

    if (children !== void 0) instance.textContent = children; // Set styles ...

    for (let styleName in style) {
      if (!style.hasOwnProperty(styleName)) continue;
      var isCustomProperty = styleName.indexOf('--') === 0;
      var styleValue = dangerousStyleValue(styleName, style[styleName], isCustomProperty);
      if (styleName === 'float') styleName = 'cssFloat';
      if (isCustomProperty) instance.style.setProperty(styleName, styleValue);else instance.style[styleName] = styleValue;
    } // Set attributes ...


    for (let name in attributes) {
      // Attributes are written in dash case
      const dashCase = filter ? name : attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, n => '-' + n.toLowerCase()));
      if (typeof instance.getAttribute(dashCase) !== 'undefined') instance.setAttribute(dashCase, attributes[name]);
    }

    return;
  } else return false;
}, style => style);

const domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
// Extend animated with all the available THREE elements
const apply = merge(createAnimatedComponent, false);
const extendedAnimated = apply(domElements);




/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var ReactVersion = '16.13.1';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  suspense: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
function describeComponentFrame (name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\n    in ' + (name || 'Unknown') + sourceInfo;
}

var Resolved = 1;
function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return "Profiler";

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';

      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type.render);

      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);

          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }

          break;
        }
    }
  }

  return null;
}

var ReactDebugCurrentFrame = {};
var currentlyValidatingElement = null;
function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

    if (!hasExistingStack) {
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      var stack = ReactDebugCurrentFrame.getStackAddendum();

      if (stack !== '') {
        format += '%s';
        args = args.concat([stack]);
      }
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];

function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;

  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}
/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {

      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is deprecated and will be removed in ' + 'a future major release. Consider converting children to ' + 'an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';

      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }

      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum );
        }
      }
    }
  }

  return subtreeCount;
}
/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}
/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;
  func.call(context, child, bookKeeping.count++);
}
/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */


function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }

  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;
  var mappedChild = func.call(context, child, bookKeeping.count++);

  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }

    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';

  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }

  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}
/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */


function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  setCurrentlyValidatingElement(element);

  {
    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }

  setCurrentlyValidatingElement(null);
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var name = getComponentName(type);
    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      setCurrentlyValidatingElement(element);
      checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
      setCurrentlyValidatingElement(null);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true;

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    setCurrentlyValidatingElement(fragment);
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        break;
      }
    }

    if (fragment.ref !== null) {
      error('Invalid attribute `ref` supplied to `React.Fragment`.');
    }

    setCurrentlyValidatingElement(null);
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    var testMap = new Map([[frozenObject, null]]);
    var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.

    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["default"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/string-convert/camel2hyphen.js":
/*!*****************************************************!*\
  !*** ./node_modules/string-convert/camel2hyphen.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var camel2hyphen = function (str) {
  return str
          .replace(/[A-Z]/g, function (match) {
            return '-' + match.toLowerCase();
          })
          .toLowerCase();
};

module.exports = camel2hyphen;

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return theMain; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var _page_sections_briefSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page_sections/briefSection */ "./pages/page_sections/briefSection.js");
/* harmony import */ var _page_sections_meetTheTeam__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page_sections/meetTheTeam */ "./pages/page_sections/meetTheTeam.js");
var _jsxFileName = "C:\\Users\\D\\Downloads\\Theebz\\Projects\\Avalanche\\avalanchenext\\pages\\index.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Header() {
  _s();

  var props = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({
    opacity: 2,
    from: {
      opacity: 0
    }
  });
  return __jsx(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div, {
    style: props,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: "openingHead",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, "Welcome to sports Avalanche"), __jsx("p", {
    className: "openingText",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"), __jsx("button", {
    className: "custom-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, "Get Started"));
}

_s(Header, "2eLh5p/G96FiNolTD5G7yAACzvw=", false, function () {
  return [react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"]];
});

_c = Header;
var slides = [{
  id: 0,
  url: "photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i"
}, {
  id: 1,
  url: "photo-1544572571-ab94fd872ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1534&q=80"
}, {
  id: 2,
  url: "reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG?ixlib=rb-1.2.1&w=1534&q=80"
}, {
  id: 3,
  url: "photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80"
}]; // const ImageTransition = () => {
//   const [index, set] = useState(0);
//   const transitions = useTransition(slides[index], (item) => item.id, {
//     from: { opacity: 0 },
//     enter: { opacity: 1 },
//     leave: { opacity: 0 },
//     config: config.molasses,
//   });
//   useEffect(
//     () => void setInterval(() => set((state) => (state + 1) % 4), 2000),
//     []
//   );
//   return transitions.map(({ item, props, key }) => (
//     <animated.div
//       key={key}
//       class="bg"
//       style={{
//         ...props,
//         backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)`,
//       }}
//     />
//   ));
// };

function theMain() {
  _s2();

  var props = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({
    opacity: 2,
    from: {
      opacity: 0
    }
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "headerBox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "shiftBox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "page-grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx(Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "centerText-section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "centerText-field",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "centerText-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: "centerText-container-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, "Who are we"))))), __jsx(_page_sections_meetTheTeam__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "fitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "page-grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "h3text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, "Lorem Ipsum"), __jsx("p", {
    className: "pText",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore")), __jsx("div", {
    className: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }))), "s", __jsx("div", {
    className: "fitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 8
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "centerText-section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "centerText-field",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "centerText-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: "centerText-container-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }, "Who are we"))))), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div, {
    style: props,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, __jsx(_page_sections_briefSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "fitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "page-grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "h3text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }, "Lorem Ipsum"), __jsx("p", {
    className: "pText",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore")))), __jsx("div", {
    className: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "signUp-section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "signUp-field",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "signUp-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "signUp-container-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 15
    }
  }, "Start Selling Online for Free"), __jsx("a", {
    href: "/vendor-signup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 15
    }
  }, __jsx("button", {
    className: "signUp-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 17
    }
  }, "Get started for free")))))), __jsx("div", {
    className: "fitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "page-grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "h3text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }
  }, "Lorem Ipsum"), __jsx("p", {
    className: "pText",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore")), __jsx("div", {
    className: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 11
    }
  }))));
}

_s2(theMain, "2eLh5p/G96FiNolTD5G7yAACzvw=", false, function () {
  return [react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"]];
});

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/page_sections/briefSection.js":
/*!*********************************************!*\
  !*** ./pages/page_sections/briefSection.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\D\\Downloads\\Theebz\\Projects\\Avalanche\\avalanchenext\\pages\\page_sections\\briefSection.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
var icon1 = 'https://prismic-io.s3.amazonaws.com/www-static/4083b409-5e65-4403-86a8-7ed8f501a0d8_icon-task-list-multiple.svg';
var icon2 = 'https://prismic-io.s3.amazonaws.com/www-static/1c791b14-833f-4190-a865-a55e11055fc0_icon-certified-certificate.svg';
var icon3 = 'https://prismic-io.s3.amazonaws.com/www-static/1c791b14-833f-4190-a865-a55e11055fc0_icon-certified-certificate.svg';
var icon4 = 'https://prismic-io.s3.amazonaws.com/www-static/1c791b14-833f-4190-a865-a55e11055fc0_icon-certified-certificate.svg';

var BriefingSection = function BriefingSection() {
  var brieftText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt quis';
  return __jsx("ul", {
    className: "displayBoxes-box",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 10
    }
  }, __jsx("li", {
    className: "displayBoxes-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "displayBoxes-text-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "displayBoxes-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: icon1,
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 19
    }
  })), __jsx("p", {
    className: "displayBoxes-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, "Lorem"), __jsx("p", {
    className: "displayBoxes-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, brieftText))), __jsx("li", {
    className: "displayBoxes-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "displayBoxes-text-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "displayBoxes-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: icon2,
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 19
    }
  })), __jsx("p", {
    className: "displayBoxes-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, "Lorem"), __jsx("p", {
    className: "displayBoxes-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, brieftText))), __jsx("li", {
    className: "displayBoxes-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "displayBoxes-text-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "displayBoxes-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: icon3,
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 19
    }
  })), __jsx("p", {
    className: "displayBoxes-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, "Lorem"), __jsx("p", {
    className: "displayBoxes-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, brieftText))), __jsx("li", {
    className: "displayBoxes-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "displayBoxes-text-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "displayBoxes-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: icon4,
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 19
    }
  })), __jsx("p", {
    className: "displayBoxes-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, "Lorem"), __jsx("p", {
    className: "displayBoxes-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, brieftText))));
};

_c = BriefingSection;
/* harmony default export */ __webpack_exports__["default"] = (BriefingSection);

var _c;

$RefreshReg$(_c, "BriefingSection");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/page_sections/meetTheTeam.js":
/*!********************************************!*\
  !*** ./pages/page_sections/meetTheTeam.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Team; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "C:\\Users\\D\\Downloads\\Theebz\\Projects\\Avalanche\\avalanchenext\\pages\\page_sections\\meetTheTeam.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



1;
var icon1 = 'https://prismic-io.s3.amazonaws.com/www-static/4083b409-5e65-4403-86a8-7ed8f501a0d8_icon-task-list-multiple.svg';
var icon2 = 'https://prismic-io.s3.amazonaws.com/www-static/1c791b14-833f-4190-a865-a55e11055fc0_icon-certified-certificate.svg';
var icon3 = 'https://prismic-io.s3.amazonaws.com/www-static/1c791b14-833f-4190-a865-a55e11055fc0_icon-certified-certificate.svg';
var icon4 = 'https://prismic-io.s3.amazonaws.com/www-static/1c791b14-833f-4190-a865-a55e11055fc0_icon-certified-certificate.svg';
var brieftText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis';
var image1 = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';

var Team = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Team, _React$Component);

  var _super = _createSuper(Team);

  function Team() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Team);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Team, [{
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("div", {
        className: "team-container-fit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "team-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "team-list-box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "team-box-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 22
        }
      }, __jsx("div", {
        className: "team-user-avatar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 24
        }
      }, __jsx("img", {
        src: image1,
        className: "team-user-avatar-image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 26
        }
      })), __jsx("div", {
        className: "team-text-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 24
        }
      }, __jsx("p", {
        className: "team-text-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 26
        }
      }, "Director"), __jsx("p", {
        className: "team-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 26
        }
      })))), __jsx("div", {
        className: "team-list-box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 18
        }
      }, __jsx("div", {
        className: "team-box-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 22
        }
      }, __jsx("div", {
        className: "team-user-avatar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 24
        }
      }, __jsx("img", {
        src: image1,
        className: "team-user-avatar-image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 26
        }
      })), __jsx("div", {
        className: "team-text-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 24
        }
      }, __jsx("p", {
        className: "team-text-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 26
        }
      }, "McTheebz")))), __jsx("div", {
        className: "team-list-box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 18
        }
      }, __jsx("div", {
        className: "team-box-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 22
        }
      }, __jsx("div", {
        className: "team-user-avatar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 24
        }
      }, __jsx("img", {
        src: image1,
        className: "team-user-avatar-image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 26
        }
      })), __jsx("div", {
        className: "team-text-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 24
        }
      }, __jsx("p", {
        className: "team-text-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 26
        }
      }, "McTheebz")))), __jsx("div", {
        className: "team-list-box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 18
        }
      }, __jsx("div", {
        className: "team-box-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 22
        }
      }, __jsx("div", {
        className: "team-user-avatar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 24
        }
      }, __jsx("img", {
        src: image1,
        className: "team-user-avatar-image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 26
        }
      })), __jsx("div", {
        className: "team-text-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 24
        }
      }, __jsx("p", {
        className: "team-text-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 26
        }
      }, "McTheebz")))))));
    }
  }]);

  return Team;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

},[["./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5CD%5CDownloads%5CTheebz%5CProjects%5CAvalanche%5Cavalanchenext%5Cpages%5Cindex.js!./","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZW5xdWlyZS5qcy9zcmMvTWVkaWFRdWVyeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2VucXVpcmUuanMvc3JjL01lZGlhUXVlcnlEaXNwYXRjaC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2VucXVpcmUuanMvc3JjL1F1ZXJ5SGFuZGxlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2VucXVpcmUuanMvc3JjL1V0aWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9lbnF1aXJlLmpzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2pzb24ybXEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2guZGVib3VuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtY2xpZW50LXBhZ2VzLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNsaWNrL2xpYi9hcnJvd3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zbGljay9saWIvZGVmYXVsdC1wcm9wcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNsaWNrL2xpYi9kb3RzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2xpY2svbGliL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2xpY2svbGliL2luaXRpYWwtc3RhdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zbGljay9saWIvaW5uZXItc2xpZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2xpY2svbGliL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNsaWNrL2xpYi90cmFjay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNsaWNrL2xpYi91dGlscy9pbm5lclNsaWRlclV0aWxzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ByaW5nL3dlYi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVzaXplLW9ic2VydmVyLXBvbHlmaWxsL2Rpc3QvUmVzaXplT2JzZXJ2ZXIuZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zdHJpbmctY29udmVydC9jYW1lbDJoeXBoZW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8od2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3BhZ2Vfc2VjdGlvbnMvYnJpZWZTZWN0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9wYWdlX3NlY3Rpb25zL21lZXRUaGVUZWFtLmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsInByb3BzIiwidXNlU3ByaW5nIiwib3BhY2l0eSIsImZyb20iLCJzbGlkZXMiLCJpZCIsInVybCIsInRoZU1haW4iLCJpY29uMSIsImljb24yIiwiaWNvbjMiLCJpY29uNCIsIkJyaWVmaW5nU2VjdGlvbiIsImJyaWVmdFRleHQiLCJpbWFnZTEiLCJUZWFtIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBZTtBQUNmO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUE4QztBQUMvQjtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsa0JBQWtCLCtEQUFjO0FBQ2hDLEM7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDYTtBQUM3QztBQUNmLGVBQWUsbUVBQU87QUFDdEI7QUFDQTs7QUFFQSxTQUFTLHNFQUFxQjtBQUM5QixDOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxxRUFBcUUsV0FBVztBQUNoRjtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdDQUF3QyxZQUFZO0FBQ3BEO0FBQ0E7QUFDQSwwREFBMEQsV0FBVztBQUNyRTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1RUFBdUU7O0FBRXZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsMkVBQTJFLFdBQVc7QUFDdEY7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFlBQVk7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx5Q0FBeUM7QUFDekM7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5QiwwQkFBMEI7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFF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TztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1R0FBNkI7O0FBRS9DO0FBQ0E7QUFDQSxzQkFBc0Isa0ZBQVEsR0FBRztBQUNqQztBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLGtGQUFRO0FBQzlCO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxTQUFTOztBQUVUO0FBQ0EsMkJBQTJCLGtGQUFRLEdBQUc7QUFDdEMsY0FBYyxrRkFBUSxHQUFHO0FBQ3pCLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxLQUFLOzs7QUFHTCw4REFBOEQ7O0FBRTlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0EsMkNBQTJDO0FBQzNDLDBDQUEwQyxrRkFBUSxHQUFHO0FBQ3JELHdDQUF3QyxrRkFBUSxHQUFHO0FBQ25ELFNBQVM7QUFDVCxPQUFPO0FBQ1A7OztBQUdBO0FBQ0E7QUFDQSxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQSxvQkFBb0IsdUdBQTZCOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTs7O0FBR1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0EsV0FBVztBQUNYLFNBQVMsMENBQTBDO0FBQ25ELE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLHVHQUE2Qjs7QUFFN0MsNkJBQTZCO0FBQzdCOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQSxzQkFBc0Isa0ZBQVEsR0FBRzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isa0ZBQVEsR0FBRzs7QUFFakM7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixrRkFBUSxHQUFHO0FBQzVCO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMLGtCQUFrQixrRkFBUSxHQUFHO0FBQzdCLDRCQUE0Qjs7QUFFNUIsd0NBQXdDLG1CQUFtQixjQUFjOztBQUV6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AseUVBQXlFOztBQUV6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRDs7QUFFQTtBQUNBO0FBQ0EsMkdBQTJHLGdHQUFnRztBQUMzTTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsRUFBRTs7QUFFWDtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxrRkFBUSxHQUFHO0FBQzFCLGtCQUFrQixrRkFBUSxHQUFHO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLGtGQUFRLEdBQUc7QUFDNUIsb0JBQW9CLGtGQUFRLEdBQUc7QUFDL0I7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0NBQXNDLE1BQU0sR0FBRyxNQUFNO0FBQ3JELGdFQUFnRSxNQUFNO0FBQ3RFOztBQUVBO0FBQ0Esa0JBQWtCLG9EQUFNO0FBQ3hCLGVBQWUsb0RBQU07QUFDckIsNkJBQTZCOztBQUU3QixtQkFBbUIscURBQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBLDZCQUE2Qjs7QUFFN0IsY0FBYyxpRUFBbUI7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRyxHQUFHOztBQUVOLHFCQUFxQixxREFBTztBQUM1QjtBQUNBO0FBQ0EsR0FBRyxhQUFhOztBQUVoQixFQUFFLHVEQUFTO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHLEVBQUU7O0FBRUwsRUFBRSx1REFBUyxtRkFBbUY7O0FBRTlGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixNQUFNO0FBQ2xDLDBDQUEwQyxNQUFNO0FBQ2hEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxNQUFNO0FBQzFDLGtEQUFrRCxNQUFNO0FBQ3hEOztBQUVBO0FBQ0Esa0JBQWtCLG9EQUFNO0FBQ3hCO0FBQ0E7QUFDQSxvQkFBb0Isb0RBQU07O0FBRTFCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsa0ZBQVEsR0FBRztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsK0JBQStCOzs7QUFHL0IscUJBQXFCLHFEQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsa0ZBQVEsR0FBRztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUcsa0NBQWtDOztBQUVyQyxFQUFFLHVEQUFTLDZEQUE2RDs7QUFFeEUsRUFBRSx1REFBUztBQUNYO0FBQ0E7O0FBRUE7QUFDQSx1REFBdUQsTUFBTTtBQUM3RCx3RUFBd0UsTUFBTTtBQUM5RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsdUdBQTZCOztBQUUxQztBQUNBLFNBQVMsa0ZBQVE7QUFDakI7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLGdCQUFnQixrRkFBUTtBQUN4QjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix1R0FBNkI7O0FBRTdDO0FBQ0Esa0JBQWtCLG9EQUFNO0FBQ3hCLGdCQUFnQixvREFBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUsaUVBQW1CO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLEdBQUcsR0FBRzs7QUFFTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdHQUFnRzs7QUFFaEc7O0FBRUEsdUJBQXVCLGtGQUFRLEdBQUc7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOzs7QUFHYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLEVBQUUsdURBQVM7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyx1R0FBNkI7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixrRkFBUSxHQUFHOztBQUUzQixtQ0FBbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUU7QUFDdkU7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsa0ZBQVEsR0FBRztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixrRkFBUSxHQUFHO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBDQUEwQztBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHVHQUE2Qjs7QUFFNUMsWUFBWTs7QUFFWiw0RUFBNEU7O0FBRTVFO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsU0FBUyxrRkFBUSxHQUFHO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxz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Q0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQSx5Q0FBeUM7QUFDekM7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLEVB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QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxrQkFBa0I7QUFDakMsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxrQkFBa0I7QUFDakMsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFD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QjtBQUN0QztBQUNBLGVBQWUseUJBQXlCO0FBQ3hDO0FBQ0EsZUFBZSxlQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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S0FDRSxNQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFLRTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQURGLENBREYsQ0FERixFQWFFO0FBQUssYUFBUyxFQUFDLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLG1FQUNFO0FBQUssYUFBUyxFQUFDLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLDZCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsQ0FERixDQURGLENBREYsQ0FERixFQVVFLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLENBYkYsRUEwQkU7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBRUU7QUFBRyxhQUFTLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRUQUZGLENBREYsRUFXRTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssV0FBRyxFQUFFQSxNQUFWO0FBQ0EsaUJBQVMsRUFBQyx3QkFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsQ0FERixFQU1FO0FBQUssaUJBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBRyxpQkFBUyxFQUFDLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FORixDQURKLENBdkNULEVBc0RTO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLGlCQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxXQUFHLEVBQUVBLE1BQVY7QUFDQSxpQkFBUyxFQUFDLHdCQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQURGLEVBTUU7QUFBSyxpQkFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFHLGlCQUFTLEVBQUMsbUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixDQU5GLENBREosQ0F0RFQsQ0FEQSxDQUZGLENBREY7QUE4RUQ7Ozs7RUFqRitCRSw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufSIsImltcG9ydCBzZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9zZXRQcm90b3R5cGVPZlwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuLi8uLi9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn0iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE3IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpICYmIGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCJ2YXIgUXVlcnlIYW5kbGVyID0gcmVxdWlyZSgnLi9RdWVyeUhhbmRsZXInKTtcbnZhciBlYWNoID0gcmVxdWlyZSgnLi9VdGlsJykuZWFjaDtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgc2luZ2xlIG1lZGlhIHF1ZXJ5LCBtYW5hZ2VzIGl0J3Mgc3RhdGUgYW5kIHJlZ2lzdGVyZWQgaGFuZGxlcnMgZm9yIHRoaXMgcXVlcnlcbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSB0aGUgbWVkaWEgcXVlcnkgc3RyaW5nXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc1VuY29uZGl0aW9uYWw9ZmFsc2VdIHdoZXRoZXIgdGhlIG1lZGlhIHF1ZXJ5IHNob3VsZCBydW4gcmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoZSBjb25kaXRpb25zIGFyZSBtZXQuIFByaW1hcmlseSBmb3IgaGVscGluZyBvbGRlciBicm93c2VycyBkZWFsIHdpdGggbW9iaWxlLWZpcnN0IGRlc2lnblxuICovXG5mdW5jdGlvbiBNZWRpYVF1ZXJ5KHF1ZXJ5LCBpc1VuY29uZGl0aW9uYWwpIHtcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgdGhpcy5pc1VuY29uZGl0aW9uYWwgPSBpc1VuY29uZGl0aW9uYWw7XG4gICAgdGhpcy5oYW5kbGVycyA9IFtdO1xuICAgIHRoaXMubXFsID0gd2luZG93Lm1hdGNoTWVkaWEocXVlcnkpO1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHRoaXMubGlzdGVuZXIgPSBmdW5jdGlvbihtcWwpIHtcbiAgICAgICAgLy8gQ2hyb21lIHBhc3NlcyBhbiBNZWRpYVF1ZXJ5TGlzdEV2ZW50IG9iamVjdCwgd2hpbGUgb3RoZXIgYnJvd3NlcnMgcGFzcyBNZWRpYVF1ZXJ5TGlzdCBkaXJlY3RseVxuICAgICAgICBzZWxmLm1xbCA9IG1xbC5jdXJyZW50VGFyZ2V0IHx8IG1xbDtcbiAgICAgICAgc2VsZi5hc3Nlc3MoKTtcbiAgICB9O1xuICAgIHRoaXMubXFsLmFkZExpc3RlbmVyKHRoaXMubGlzdGVuZXIpO1xufVxuXG5NZWRpYVF1ZXJ5LnByb3RvdHlwZSA9IHtcblxuICAgIGNvbnN0dWN0b3IgOiBNZWRpYVF1ZXJ5LFxuXG4gICAgLyoqXG4gICAgICogYWRkIGEgaGFuZGxlciBmb3IgdGhpcyBxdWVyeSwgdHJpZ2dlcmluZyBpZiBhbHJlYWR5IGFjdGl2ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGhhbmRsZXJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyLm1hdGNoIGNhbGxiYWNrIGZvciB3aGVuIHF1ZXJ5IGlzIGFjdGl2YXRlZFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtoYW5kbGVyLnVubWF0Y2hdIGNhbGxiYWNrIGZvciB3aGVuIHF1ZXJ5IGlzIGRlYWN0aXZhdGVkXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW2hhbmRsZXIuc2V0dXBdIGNhbGxiYWNrIGZvciBpbW1lZGlhdGUgZXhlY3V0aW9uIHdoZW4gYSBxdWVyeSBoYW5kbGVyIGlzIHJlZ2lzdGVyZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtoYW5kbGVyLmRlZmVyU2V0dXA9ZmFsc2VdIHNob3VsZCB0aGUgc2V0dXAgY2FsbGJhY2sgYmUgZGVmZXJyZWQgdW50aWwgdGhlIGZpcnN0IHRpbWUgdGhlIGhhbmRsZXIgaXMgbWF0Y2hlZD9cbiAgICAgKi9cbiAgICBhZGRIYW5kbGVyIDogZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgICB2YXIgcWggPSBuZXcgUXVlcnlIYW5kbGVyKGhhbmRsZXIpO1xuICAgICAgICB0aGlzLmhhbmRsZXJzLnB1c2gocWgpO1xuXG4gICAgICAgIHRoaXMubWF0Y2hlcygpICYmIHFoLm9uKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIHJlbW92ZXMgdGhlIGdpdmVuIGhhbmRsZXIgZnJvbSB0aGUgY29sbGVjdGlvbiwgYW5kIGNhbGxzIGl0J3MgZGVzdHJveSBtZXRob2RzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdCB8fCBmdW5jdGlvbn0gaGFuZGxlciB0aGUgaGFuZGxlciB0byByZW1vdmVcbiAgICAgKi9cbiAgICByZW1vdmVIYW5kbGVyIDogZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgICB2YXIgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzO1xuICAgICAgICBlYWNoKGhhbmRsZXJzLCBmdW5jdGlvbihoLCBpKSB7XG4gICAgICAgICAgICBpZihoLmVxdWFscyhoYW5kbGVyKSkge1xuICAgICAgICAgICAgICAgIGguZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiAhaGFuZGxlcnMuc3BsaWNlKGksMSk7IC8vcmVtb3ZlIGZyb20gYXJyYXkgYW5kIGV4aXQgZWFjaCBlYXJseVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIG1lZGlhIHF1ZXJ5IHNob3VsZCBiZSBjb25zaWRlcmVkIGEgbWF0Y2hcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgbWVkaWEgcXVlcnkgY2FuIGJlIGNvbnNpZGVyZWQgYSBtYXRjaCwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICovXG4gICAgbWF0Y2hlcyA6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tcWwubWF0Y2hlcyB8fCB0aGlzLmlzVW5jb25kaXRpb25hbDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBoYW5kbGVycyBhbmQgdW5iaW5kcyBldmVudHNcbiAgICAgKi9cbiAgICBjbGVhciA6IGZ1bmN0aW9uKCkge1xuICAgICAgICBlYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGhhbmRsZXIuZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5tcWwucmVtb3ZlTGlzdGVuZXIodGhpcy5saXN0ZW5lcik7XG4gICAgICAgIHRoaXMuaGFuZGxlcnMubGVuZ3RoID0gMDsgLy9jbGVhciBhcnJheVxuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICAqIEFzc2Vzc2VzIHRoZSBxdWVyeSwgdHVybmluZyBvbiBhbGwgaGFuZGxlcnMgaWYgaXQgbWF0Y2hlcywgdHVybmluZyB0aGVtIG9mZiBpZiBpdCBkb2Vzbid0IG1hdGNoXG4gICAgICAgICovXG4gICAgYXNzZXNzIDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhY3Rpb24gPSB0aGlzLm1hdGNoZXMoKSA/ICdvbicgOiAnb2ZmJztcblxuICAgICAgICBlYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGhhbmRsZXJbYWN0aW9uXSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1lZGlhUXVlcnk7XG4iLCJ2YXIgTWVkaWFRdWVyeSA9IHJlcXVpcmUoJy4vTWVkaWFRdWVyeScpO1xudmFyIFV0aWwgPSByZXF1aXJlKCcuL1V0aWwnKTtcbnZhciBlYWNoID0gVXRpbC5lYWNoO1xudmFyIGlzRnVuY3Rpb24gPSBVdGlsLmlzRnVuY3Rpb247XG52YXIgaXNBcnJheSA9IFV0aWwuaXNBcnJheTtcblxuLyoqXG4gKiBBbGxvd3MgZm9yIHJlZ2lzdHJhdGlvbiBvZiBxdWVyeSBoYW5kbGVycy5cbiAqIE1hbmFnZXMgdGhlIHF1ZXJ5IGhhbmRsZXIncyBzdGF0ZSBhbmQgaXMgcmVzcG9uc2libGUgZm9yIHdpcmluZyB1cCBicm93c2VyIGV2ZW50c1xuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBNZWRpYVF1ZXJ5RGlzcGF0Y2ggKCkge1xuICAgIGlmKCF3aW5kb3cubWF0Y2hNZWRpYSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21hdGNoTWVkaWEgbm90IHByZXNlbnQsIGxlZ2FjeSBicm93c2VycyByZXF1aXJlIGEgcG9seWZpbGwnKTtcbiAgICB9XG5cbiAgICB0aGlzLnF1ZXJpZXMgPSB7fTtcbiAgICB0aGlzLmJyb3dzZXJJc0luY2FwYWJsZSA9ICF3aW5kb3cubWF0Y2hNZWRpYSgnb25seSBhbGwnKS5tYXRjaGVzO1xufVxuXG5NZWRpYVF1ZXJ5RGlzcGF0Y2gucHJvdG90eXBlID0ge1xuXG4gICAgY29uc3RydWN0b3IgOiBNZWRpYVF1ZXJ5RGlzcGF0Y2gsXG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgYSBoYW5kbGVyIGZvciB0aGUgZ2l2ZW4gbWVkaWEgcXVlcnlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBxIHRoZSBtZWRpYSBxdWVyeVxuICAgICAqIEBwYXJhbSB7b2JqZWN0IHx8IEFycmF5IHx8IEZ1bmN0aW9ufSBvcHRpb25zIGVpdGhlciBhIHNpbmdsZSBxdWVyeSBoYW5kbGVyIG9iamVjdCwgYSBmdW5jdGlvbiwgb3IgYW4gYXJyYXkgb2YgcXVlcnkgaGFuZGxlcnNcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLm1hdGNoIGZpcmVkIHdoZW4gcXVlcnkgbWF0Y2hlZFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLnVubWF0Y2hdIGZpcmVkIHdoZW4gYSBxdWVyeSBpcyBubyBsb25nZXIgbWF0Y2hlZFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLnNldHVwXSBmaXJlZCB3aGVuIGhhbmRsZXIgZmlyc3QgdHJpZ2dlcmVkXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5kZWZlclNldHVwPWZhbHNlXSB3aGV0aGVyIHNldHVwIHNob3VsZCBiZSBydW4gaW1tZWRpYXRlbHkgb3IgZGVmZXJyZWQgdW50aWwgcXVlcnkgaXMgZmlyc3QgbWF0Y2hlZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Nob3VsZERlZ3JhZGU9ZmFsc2VdIHdoZXRoZXIgdGhpcyBwYXJ0aWN1bGFyIG1lZGlhIHF1ZXJ5IHNob3VsZCBhbHdheXMgcnVuIG9uIGluY2FwYWJsZSBicm93c2Vyc1xuICAgICAqL1xuICAgIHJlZ2lzdGVyIDogZnVuY3Rpb24ocSwgb3B0aW9ucywgc2hvdWxkRGVncmFkZSkge1xuICAgICAgICB2YXIgcXVlcmllcyAgICAgICAgID0gdGhpcy5xdWVyaWVzLFxuICAgICAgICAgICAgaXNVbmNvbmRpdGlvbmFsID0gc2hvdWxkRGVncmFkZSAmJiB0aGlzLmJyb3dzZXJJc0luY2FwYWJsZTtcblxuICAgICAgICBpZighcXVlcmllc1txXSkge1xuICAgICAgICAgICAgcXVlcmllc1txXSA9IG5ldyBNZWRpYVF1ZXJ5KHEsIGlzVW5jb25kaXRpb25hbCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL25vcm1hbGlzZSB0byBvYmplY3QgaW4gYW4gYXJyYXlcbiAgICAgICAgaWYoaXNGdW5jdGlvbihvcHRpb25zKSkge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHsgbWF0Y2ggOiBvcHRpb25zIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYoIWlzQXJyYXkob3B0aW9ucykpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBbb3B0aW9uc107XG4gICAgICAgIH1cbiAgICAgICAgZWFjaChvcHRpb25zLCBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgICAgICBpZiAoaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIgPSB7IG1hdGNoIDogaGFuZGxlciB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcXVlcmllc1txXS5hZGRIYW5kbGVyKGhhbmRsZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogdW5yZWdpc3RlcnMgYSBxdWVyeSBhbmQgYWxsIGl0J3MgaGFuZGxlcnMsIG9yIGEgc3BlY2lmaWMgaGFuZGxlciBmb3IgYSBxdWVyeVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHEgdGhlIG1lZGlhIHF1ZXJ5IHRvIHRhcmdldFxuICAgICAqIEBwYXJhbSB7b2JqZWN0IHx8IGZ1bmN0aW9ufSBbaGFuZGxlcl0gc3BlY2lmaWMgaGFuZGxlciB0byB1bnJlZ2lzdGVyXG4gICAgICovXG4gICAgdW5yZWdpc3RlciA6IGZ1bmN0aW9uKHEsIGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIHF1ZXJ5ID0gdGhpcy5xdWVyaWVzW3FdO1xuXG4gICAgICAgIGlmKHF1ZXJ5KSB7XG4gICAgICAgICAgICBpZihoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcXVlcnkucmVtb3ZlSGFuZGxlcihoYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHF1ZXJ5LmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucXVlcmllc1txXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTWVkaWFRdWVyeURpc3BhdGNoO1xuIiwiLyoqXG4gKiBEZWxlZ2F0ZSB0byBoYW5kbGUgYSBtZWRpYSBxdWVyeSBiZWluZyBtYXRjaGVkIGFuZCB1bm1hdGNoZWQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMubWF0Y2ggY2FsbGJhY2sgZm9yIHdoZW4gdGhlIG1lZGlhIHF1ZXJ5IGlzIG1hdGNoZWRcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLnVubWF0Y2hdIGNhbGxiYWNrIGZvciB3aGVuIHRoZSBtZWRpYSBxdWVyeSBpcyB1bm1hdGNoZWRcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLnNldHVwXSBvbmUtdGltZSBjYWxsYmFjayB0cmlnZ2VyZWQgdGhlIGZpcnN0IHRpbWUgYSBxdWVyeSBpcyBtYXRjaGVkXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmRlZmVyU2V0dXA9ZmFsc2VdIHNob3VsZCB0aGUgc2V0dXAgY2FsbGJhY2sgYmUgcnVuIGltbWVkaWF0ZWx5LCByYXRoZXIgdGhhbiBmaXJzdCB0aW1lIHF1ZXJ5IGlzIG1hdGNoZWQ/XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gUXVlcnlIYW5kbGVyKG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICFvcHRpb25zLmRlZmVyU2V0dXAgJiYgdGhpcy5zZXR1cCgpO1xufVxuXG5RdWVyeUhhbmRsZXIucHJvdG90eXBlID0ge1xuXG4gICAgY29uc3RydWN0b3IgOiBRdWVyeUhhbmRsZXIsXG5cbiAgICAvKipcbiAgICAgKiBjb29yZGluYXRlcyBzZXR1cCBvZiB0aGUgaGFuZGxlclxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICovXG4gICAgc2V0dXAgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYodGhpcy5vcHRpb25zLnNldHVwKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuc2V0dXAoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogY29vcmRpbmF0ZXMgc2V0dXAgYW5kIHRyaWdnZXJpbmcgb2YgdGhlIGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqL1xuICAgIG9uIDogZnVuY3Rpb24oKSB7XG4gICAgICAgICF0aGlzLmluaXRpYWxpc2VkICYmIHRoaXMuc2V0dXAoKTtcbiAgICAgICAgdGhpcy5vcHRpb25zLm1hdGNoICYmIHRoaXMub3B0aW9ucy5tYXRjaCgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBjb29yZGluYXRlcyB0aGUgdW5tYXRjaCBldmVudCBmb3IgdGhlIGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqL1xuICAgIG9mZiA6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMudW5tYXRjaCAmJiB0aGlzLm9wdGlvbnMudW5tYXRjaCgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBjYWxsZWQgd2hlbiBhIGhhbmRsZXIgaXMgdG8gYmUgZGVzdHJveWVkLlxuICAgICAqIGRlbGVnYXRlcyB0byB0aGUgZGVzdHJveSBvciB1bm1hdGNoIGNhbGxiYWNrcywgZGVwZW5kaW5nIG9uIGF2YWlsYWJpbGl0eS5cbiAgICAgKlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqL1xuICAgIGRlc3Ryb3kgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmRlc3Ryb3kgPyB0aGlzLm9wdGlvbnMuZGVzdHJveSgpIDogdGhpcy5vZmYoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogZGV0ZXJtaW5lcyBlcXVhbGl0eSBieSByZWZlcmVuY2UuXG4gICAgICogaWYgb2JqZWN0IGlzIHN1cHBsaWVkIGNvbXBhcmUgb3B0aW9ucywgaWYgZnVuY3Rpb24sIGNvbXBhcmUgbWF0Y2ggY2FsbGJhY2tcbiAgICAgKlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7b2JqZWN0IHx8IGZ1bmN0aW9ufSBbdGFyZ2V0XSB0aGUgdGFyZ2V0IGZvciBjb21wYXJpc29uXG4gICAgICovXG4gICAgZXF1YWxzIDogZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMgPT09IHRhcmdldCB8fCB0aGlzLm9wdGlvbnMubWF0Y2ggPT09IHRhcmdldDtcbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUXVlcnlIYW5kbGVyO1xuIiwiLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGl0ZXJhdGluZyBvdmVyIGEgY29sbGVjdGlvblxuICpcbiAqIEBwYXJhbSBjb2xsZWN0aW9uXG4gKiBAcGFyYW0gZm5cbiAqL1xuZnVuY3Rpb24gZWFjaChjb2xsZWN0aW9uLCBmbikge1xuICAgIHZhciBpICAgICAgPSAwLFxuICAgICAgICBsZW5ndGggPSBjb2xsZWN0aW9uLmxlbmd0aCxcbiAgICAgICAgY29udDtcblxuICAgIGZvcihpOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29udCA9IGZuKGNvbGxlY3Rpb25baV0sIGkpO1xuICAgICAgICBpZihjb250ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgYnJlYWs7IC8vYWxsb3cgZWFybHkgZXhpdFxuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3IgZGV0ZXJtaW5pbmcgd2hldGhlciB0YXJnZXQgb2JqZWN0IGlzIGFuIGFycmF5XG4gKlxuICogQHBhcmFtIHRhcmdldCB0aGUgb2JqZWN0IHVuZGVyIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYXJyYXksIGZhbHNlIG90aGVyd2lzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmFwcGx5KHRhcmdldCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBkZXRlcm1pbmluZyB3aGV0aGVyIHRhcmdldCBvYmplY3QgaXMgYSBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB0YXJnZXQgdGhlIG9iamVjdCB1bmRlciB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGZ1bmN0aW9uLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih0YXJnZXQpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgaXNGdW5jdGlvbiA6IGlzRnVuY3Rpb24sXG4gICAgaXNBcnJheSA6IGlzQXJyYXksXG4gICAgZWFjaCA6IGVhY2hcbn07XG4iLCJ2YXIgTWVkaWFRdWVyeURpc3BhdGNoID0gcmVxdWlyZSgnLi9NZWRpYVF1ZXJ5RGlzcGF0Y2gnKTtcbm1vZHVsZS5leHBvcnRzID0gbmV3IE1lZGlhUXVlcnlEaXNwYXRjaCgpO1xuIiwidmFyIGNhbWVsMmh5cGhlbiA9IHJlcXVpcmUoJ3N0cmluZy1jb252ZXJ0L2NhbWVsMmh5cGhlbicpO1xuXG52YXIgaXNEaW1lbnNpb24gPSBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICB2YXIgcmUgPSAvW2hlaWdodHx3aWR0aF0kLztcbiAgcmV0dXJuIHJlLnRlc3QoZmVhdHVyZSk7XG59O1xuXG52YXIgb2JqMm1xID0gZnVuY3Rpb24gKG9iaikge1xuICB2YXIgbXEgPSAnJztcbiAgdmFyIGZlYXR1cmVzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgZmVhdHVyZXMuZm9yRWFjaChmdW5jdGlvbiAoZmVhdHVyZSwgaW5kZXgpIHtcbiAgICB2YXIgdmFsdWUgPSBvYmpbZmVhdHVyZV07XG4gICAgZmVhdHVyZSA9IGNhbWVsMmh5cGhlbihmZWF0dXJlKTtcbiAgICAvLyBBZGQgcHggdG8gZGltZW5zaW9uIGZlYXR1cmVzXG4gICAgaWYgKGlzRGltZW5zaW9uKGZlYXR1cmUpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUgKyAncHgnO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT09IHRydWUpIHtcbiAgICAgIG1xICs9IGZlYXR1cmU7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgIG1xICs9ICdub3QgJyArIGZlYXR1cmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1xICs9ICcoJyArIGZlYXR1cmUgKyAnOiAnICsgdmFsdWUgKyAnKSc7XG4gICAgfVxuICAgIGlmIChpbmRleCA8IGZlYXR1cmVzLmxlbmd0aC0xKSB7XG4gICAgICBtcSArPSAnIGFuZCAnXG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG1xO1xufTtcblxudmFyIGpzb24ybXEgPSBmdW5jdGlvbiAocXVlcnkpIHtcbiAgdmFyIG1xID0gJyc7XG4gIGlmICh0eXBlb2YgcXVlcnkgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG4gIC8vIEhhbmRsaW5nIGFycmF5IG9mIG1lZGlhIHF1ZXJpZXNcbiAgaWYgKHF1ZXJ5IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICBxdWVyeS5mb3JFYWNoKGZ1bmN0aW9uIChxLCBpbmRleCkge1xuICAgICAgbXEgKz0gb2JqMm1xKHEpO1xuICAgICAgaWYgKGluZGV4IDwgcXVlcnkubGVuZ3RoLTEpIHtcbiAgICAgICAgbXEgKz0gJywgJ1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBtcTtcbiAgfVxuICAvLyBIYW5kbGluZyBzaW5nbGUgbWVkaWEgcXVlcnlcbiAgcmV0dXJuIG9iajJtcShxdWVyeSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGpzb24ybXE7IiwiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLiAqL1xudmFyIHJlVHJpbSA9IC9eXFxzK3xcXHMrJC9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmFkIHNpZ25lZCBoZXhhZGVjaW1hbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCYWRIZXggPSAvXlstK10weFswLTlhLWZdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJpbmFyeSBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCaW5hcnkgPSAvXjBiWzAxXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvY3RhbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNPY3RhbCA9IC9eMG9bMC03XSskL2k7XG5cbi8qKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB3aXRob3V0IGEgZGVwZW5kZW5jeSBvbiBgcm9vdGAuICovXG52YXIgZnJlZVBhcnNlSW50ID0gcGFyc2VJbnQ7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBHZXRzIHRoZSB0aW1lc3RhbXAgb2YgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBoYXZlIGVsYXBzZWQgc2luY2VcbiAqIHRoZSBVbml4IGVwb2NoICgxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lc3RhbXAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gTG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgaW52b2NhdGlvbi5cbiAqL1xudmFyIG5vdyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG8gaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uXG4gKiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYCBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGVcbiAqIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWRcbiAqIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgXG4gKiBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4LlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHNlbmRNYWlsYCB3aGVuIGNsaWNrZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIEVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHMuXG4gKiB2YXIgZGVib3VuY2VkID0gXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7ICdtYXhXYWl0JzogMTAwMCB9KTtcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgZGVib3VuY2VkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIGRlYm91bmNlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgZGVib3VuY2VkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RBcmdzLFxuICAgICAgbGFzdFRoaXMsXG4gICAgICBtYXhXYWl0LFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZXJJZCxcbiAgICAgIGxhc3RDYWxsVGltZSxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB0b051bWJlcih3YWl0KSB8fCAwO1xuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4aW5nID0gJ21heFdhaXQnIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IG5hdGl2ZU1heCh0b051bWJlcihvcHRpb25zLm1heFdhaXQpIHx8IDAsIHdhaXQpIDogbWF4V2FpdDtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBsYXN0QXJncyxcbiAgICAgICAgdGhpc0FyZyA9IGxhc3RUaGlzO1xuXG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gbGVhZGluZ0VkZ2UodGltZSkge1xuICAgIC8vIFJlc2V0IGFueSBgbWF4V2FpdGAgdGltZXIuXG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1haW5pbmdXYWl0KHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lLFxuICAgICAgICByZXN1bHQgPSB3YWl0IC0gdGltZVNpbmNlTGFzdENhbGw7XG5cbiAgICByZXR1cm4gbWF4aW5nID8gbmF0aXZlTWluKHJlc3VsdCwgbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZva2UpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSW52b2tlKHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lO1xuXG4gICAgLy8gRWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwsIGFjdGl2aXR5IGhhcyBzdG9wcGVkIGFuZCB3ZSdyZSBhdCB0aGVcbiAgICAvLyB0cmFpbGluZyBlZGdlLCB0aGUgc3lzdGVtIHRpbWUgaGFzIGdvbmUgYmFja3dhcmRzIGFuZCB3ZSdyZSB0cmVhdGluZ1xuICAgIC8vIGl0IGFzIHRoZSB0cmFpbGluZyBlZGdlLCBvciB3ZSd2ZSBoaXQgdGhlIGBtYXhXYWl0YCBsaW1pdC5cbiAgICByZXR1cm4gKGxhc3RDYWxsVGltZSA9PT0gdW5kZWZpbmVkIHx8ICh0aW1lU2luY2VMYXN0Q2FsbCA+PSB3YWl0KSB8fFxuICAgICAgKHRpbWVTaW5jZUxhc3RDYWxsIDwgMCkgfHwgKG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVyRXhwaXJlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgIGlmIChzaG91bGRJbnZva2UodGltZSkpIHtcbiAgICAgIHJldHVybiB0cmFpbGluZ0VkZ2UodGltZSk7XG4gICAgfVxuICAgIC8vIFJlc3RhcnQgdGhlIHRpbWVyLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgcmVtYWluaW5nV2FpdCh0aW1lKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFpbGluZ0VkZ2UodGltZSkge1xuICAgIHRpbWVySWQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBPbmx5IGludm9rZSBpZiB3ZSBoYXZlIGBsYXN0QXJnc2Agd2hpY2ggbWVhbnMgYGZ1bmNgIGhhcyBiZWVuXG4gICAgLy8gZGVib3VuY2VkIGF0IGxlYXN0IG9uY2UuXG4gICAgaWYgKHRyYWlsaW5nICYmIGxhc3RBcmdzKSB7XG4gICAgICByZXR1cm4gaW52b2tlRnVuYyh0aW1lKTtcbiAgICB9XG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG4gICAgbGFzdEludm9rZVRpbWUgPSAwO1xuICAgIGxhc3RBcmdzID0gbGFzdENhbGxUaW1lID0gbGFzdFRoaXMgPSB0aW1lcklkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgcmV0dXJuIHRpbWVySWQgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IHRyYWlsaW5nRWRnZShub3coKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKSxcbiAgICAgICAgaXNJbnZva2luZyA9IHNob3VsZEludm9rZSh0aW1lKTtcblxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lO1xuXG4gICAgaWYgKGlzSW52b2tpbmcpIHtcbiAgICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdFZGdlKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW5nKSB7XG4gICAgICAgIC8vIEhhbmRsZSBpbnZvY2F0aW9ucyBpbiBhIHRpZ2h0IGxvb3AuXG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYm91bmNlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIGFzc2lnbj1PYmplY3QuYXNzaWduLmJpbmQoT2JqZWN0KTttb2R1bGUuZXhwb3J0cz1hc3NpZ247bW9kdWxlLmV4cG9ydHMuZGVmYXVsdD1tb2R1bGUuZXhwb3J0cztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9iamVjdC1hc3NpZ24uanMubWFwIiwiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9cIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxEXFxcXERvd25sb2Fkc1xcXFxUaGVlYnpcXFxcUHJvamVjdHNcXFxcQXZhbGFuY2hlXFxcXGF2YWxhbmNoZW5leHRcXFxccGFnZXNcXFxcaW5kZXguanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcihcbiAgICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICtcbiAgICAgICAgICAgICAgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yICYmICEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAnICtcbiAgICAgICAgICAgIGxvY2F0aW9uICsgJyBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJyArIHR5cGVvZiBlcnJvciArICcuICcgK1xuICAgICAgICAgICAgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArXG4gICAgICAgICAgICAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLidcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnRmFpbGVkICcgKyBsb2NhdGlvbiArICcgdHlwZTogJyArIGVycm9yLm1lc3NhZ2UgKyAoc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlc2V0cyB3YXJuaW5nIGNhY2hlIHdoZW4gdGVzdGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5OZXh0QXJyb3cgPSBleHBvcnRzLlByZXZBcnJvdyA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfaW5uZXJTbGlkZXJVdGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzL2lubmVyU2xpZGVyVXRpbHNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG52YXIgUHJldkFycm93ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUHJldkFycm93LCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihQcmV2QXJyb3cpO1xuXG4gIGZ1bmN0aW9uIFByZXZBcnJvdygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJldkFycm93KTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQcmV2QXJyb3csIFt7XG4gICAga2V5OiBcImNsaWNrSGFuZGxlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGlja0hhbmRsZXIob3B0aW9ucywgZSkge1xuICAgICAgaWYgKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnByb3BzLmNsaWNrSGFuZGxlcihvcHRpb25zLCBlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBwcmV2Q2xhc3NlcyA9IHtcbiAgICAgICAgXCJzbGljay1hcnJvd1wiOiB0cnVlLFxuICAgICAgICBcInNsaWNrLXByZXZcIjogdHJ1ZVxuICAgICAgfTtcbiAgICAgIHZhciBwcmV2SGFuZGxlciA9IHRoaXMuY2xpY2tIYW5kbGVyLmJpbmQodGhpcywge1xuICAgICAgICBtZXNzYWdlOiBcInByZXZpb3VzXCJcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXRoaXMucHJvcHMuaW5maW5pdGUgJiYgKHRoaXMucHJvcHMuY3VycmVudFNsaWRlID09PSAwIHx8IHRoaXMucHJvcHMuc2xpZGVDb3VudCA8PSB0aGlzLnByb3BzLnNsaWRlc1RvU2hvdykpIHtcbiAgICAgICAgcHJldkNsYXNzZXNbXCJzbGljay1kaXNhYmxlZFwiXSA9IHRydWU7XG4gICAgICAgIHByZXZIYW5kbGVyID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHByZXZBcnJvd1Byb3BzID0ge1xuICAgICAgICBrZXk6IFwiMFwiLFxuICAgICAgICBcImRhdGEtcm9sZVwiOiBcIm5vbmVcIixcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShwcmV2Q2xhc3NlcyksXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiXG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2s6IHByZXZIYW5kbGVyXG4gICAgICB9O1xuICAgICAgdmFyIGN1c3RvbVByb3BzID0ge1xuICAgICAgICBjdXJyZW50U2xpZGU6IHRoaXMucHJvcHMuY3VycmVudFNsaWRlLFxuICAgICAgICBzbGlkZUNvdW50OiB0aGlzLnByb3BzLnNsaWRlQ291bnRcbiAgICAgIH07XG4gICAgICB2YXIgcHJldkFycm93O1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5wcmV2QXJyb3cpIHtcbiAgICAgICAgcHJldkFycm93ID0gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY2xvbmVFbGVtZW50KHRoaXMucHJvcHMucHJldkFycm93LCBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHByZXZBcnJvd1Byb3BzKSwgY3VzdG9tUHJvcHMpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByZXZBcnJvdyA9IC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgX2V4dGVuZHMoe1xuICAgICAgICAgIGtleTogXCIwXCIsXG4gICAgICAgICAgdHlwZTogXCJidXR0b25cIlxuICAgICAgICB9LCBwcmV2QXJyb3dQcm9wcyksIFwiIFwiLCBcIlByZXZpb3VzXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldkFycm93O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQcmV2QXJyb3c7XG59KF9yZWFjdFtcImRlZmF1bHRcIl0uUHVyZUNvbXBvbmVudCk7XG5cbmV4cG9ydHMuUHJldkFycm93ID0gUHJldkFycm93O1xuXG52YXIgTmV4dEFycm93ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudDIpIHtcbiAgX2luaGVyaXRzKE5leHRBcnJvdywgX1JlYWN0JFB1cmVDb21wb25lbnQyKTtcblxuICB2YXIgX3N1cGVyMiA9IF9jcmVhdGVTdXBlcihOZXh0QXJyb3cpO1xuXG4gIGZ1bmN0aW9uIE5leHRBcnJvdygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTmV4dEFycm93KTtcblxuICAgIHJldHVybiBfc3VwZXIyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTmV4dEFycm93LCBbe1xuICAgIGtleTogXCJjbGlja0hhbmRsZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xpY2tIYW5kbGVyKG9wdGlvbnMsIGUpIHtcbiAgICAgIGlmIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wcm9wcy5jbGlja0hhbmRsZXIob3B0aW9ucywgZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgbmV4dENsYXNzZXMgPSB7XG4gICAgICAgIFwic2xpY2stYXJyb3dcIjogdHJ1ZSxcbiAgICAgICAgXCJzbGljay1uZXh0XCI6IHRydWVcbiAgICAgIH07XG4gICAgICB2YXIgbmV4dEhhbmRsZXIgPSB0aGlzLmNsaWNrSGFuZGxlci5iaW5kKHRoaXMsIHtcbiAgICAgICAgbWVzc2FnZTogXCJuZXh0XCJcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoISgwLCBfaW5uZXJTbGlkZXJVdGlscy5jYW5Hb05leHQpKHRoaXMucHJvcHMpKSB7XG4gICAgICAgIG5leHRDbGFzc2VzW1wic2xpY2stZGlzYWJsZWRcIl0gPSB0cnVlO1xuICAgICAgICBuZXh0SGFuZGxlciA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciBuZXh0QXJyb3dQcm9wcyA9IHtcbiAgICAgICAga2V5OiBcIjFcIixcbiAgICAgICAgXCJkYXRhLXJvbGVcIjogXCJub25lXCIsXG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkobmV4dENsYXNzZXMpLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxuICAgICAgICB9LFxuICAgICAgICBvbkNsaWNrOiBuZXh0SGFuZGxlclxuICAgICAgfTtcbiAgICAgIHZhciBjdXN0b21Qcm9wcyA9IHtcbiAgICAgICAgY3VycmVudFNsaWRlOiB0aGlzLnByb3BzLmN1cnJlbnRTbGlkZSxcbiAgICAgICAgc2xpZGVDb3VudDogdGhpcy5wcm9wcy5zbGlkZUNvdW50XG4gICAgICB9O1xuICAgICAgdmFyIG5leHRBcnJvdztcblxuICAgICAgaWYgKHRoaXMucHJvcHMubmV4dEFycm93KSB7XG4gICAgICAgIG5leHRBcnJvdyA9IC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNsb25lRWxlbWVudCh0aGlzLnByb3BzLm5leHRBcnJvdywgX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBuZXh0QXJyb3dQcm9wcyksIGN1c3RvbVByb3BzKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0QXJyb3cgPSAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIF9leHRlbmRzKHtcbiAgICAgICAgICBrZXk6IFwiMVwiLFxuICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCJcbiAgICAgICAgfSwgbmV4dEFycm93UHJvcHMpLCBcIiBcIiwgXCJOZXh0XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV4dEFycm93O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBOZXh0QXJyb3c7XG59KF9yZWFjdFtcImRlZmF1bHRcIl0uUHVyZUNvbXBvbmVudCk7XG5cbmV4cG9ydHMuTmV4dEFycm93ID0gTmV4dEFycm93OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBhY2Nlc3NpYmlsaXR5OiB0cnVlLFxuICBhZGFwdGl2ZUhlaWdodDogZmFsc2UsXG4gIGFmdGVyQ2hhbmdlOiBudWxsLFxuICBhcHBlbmREb3RzOiBmdW5jdGlvbiBhcHBlbmREb3RzKGRvdHMpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInVsXCIsIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxuICAgICAgfVxuICAgIH0sIGRvdHMpO1xuICB9LFxuICBhcnJvd3M6IHRydWUsXG4gIGF1dG9wbGF5OiBmYWxzZSxcbiAgYXV0b3BsYXlTcGVlZDogMzAwMCxcbiAgYmVmb3JlQ2hhbmdlOiBudWxsLFxuICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgY2VudGVyUGFkZGluZzogXCI1MHB4XCIsXG4gIGNsYXNzTmFtZTogXCJcIixcbiAgY3NzRWFzZTogXCJlYXNlXCIsXG4gIGN1c3RvbVBhZ2luZzogZnVuY3Rpb24gY3VzdG9tUGFnaW5nKGkpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBudWxsLCBpICsgMSk7XG4gIH0sXG4gIGRvdHM6IGZhbHNlLFxuICBkb3RzQ2xhc3M6IFwic2xpY2stZG90c1wiLFxuICBkcmFnZ2FibGU6IHRydWUsXG4gIGVhc2luZzogXCJsaW5lYXJcIixcbiAgZWRnZUZyaWN0aW9uOiAwLjM1LFxuICBmYWRlOiBmYWxzZSxcbiAgZm9jdXNPblNlbGVjdDogZmFsc2UsXG4gIGluZmluaXRlOiB0cnVlLFxuICBpbml0aWFsU2xpZGU6IDAsXG4gIGxhenlMb2FkOiBudWxsLFxuICBuZXh0QXJyb3c6IG51bGwsXG4gIG9uRWRnZTogbnVsbCxcbiAgb25Jbml0OiBudWxsLFxuICBvbkxhenlMb2FkRXJyb3I6IG51bGwsXG4gIG9uUmVJbml0OiBudWxsLFxuICBwYXVzZU9uRG90c0hvdmVyOiBmYWxzZSxcbiAgcGF1c2VPbkZvY3VzOiBmYWxzZSxcbiAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICBwcmV2QXJyb3c6IG51bGwsXG4gIHJlc3BvbnNpdmU6IG51bGwsXG4gIHJvd3M6IDEsXG4gIHJ0bDogZmFsc2UsXG4gIHNsaWRlOiBcImRpdlwiLFxuICBzbGlkZXNQZXJSb3c6IDEsXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICBzbGlkZXNUb1Nob3c6IDEsXG4gIHNwZWVkOiA1MDAsXG4gIHN3aXBlOiB0cnVlLFxuICBzd2lwZUV2ZW50OiBudWxsLFxuICBzd2lwZVRvU2xpZGU6IGZhbHNlLFxuICB0b3VjaE1vdmU6IHRydWUsXG4gIHRvdWNoVGhyZXNob2xkOiA1LFxuICB1c2VDU1M6IHRydWUsXG4gIHVzZVRyYW5zZm9ybTogdHJ1ZSxcbiAgdmFyaWFibGVXaWR0aDogZmFsc2UsXG4gIHZlcnRpY2FsOiBmYWxzZSxcbiAgd2FpdEZvckFuaW1hdGU6IHRydWVcbn07XG52YXIgX2RlZmF1bHQgPSBkZWZhdWx0UHJvcHM7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5Eb3RzID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9pbm5lclNsaWRlclV0aWxzID0gcmVxdWlyZShcIi4vdXRpbHMvaW5uZXJTbGlkZXJVdGlsc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbnZhciBnZXREb3RDb3VudCA9IGZ1bmN0aW9uIGdldERvdENvdW50KHNwZWMpIHtcbiAgdmFyIGRvdHM7XG5cbiAgaWYgKHNwZWMuaW5maW5pdGUpIHtcbiAgICBkb3RzID0gTWF0aC5jZWlsKHNwZWMuc2xpZGVDb3VudCAvIHNwZWMuc2xpZGVzVG9TY3JvbGwpO1xuICB9IGVsc2Uge1xuICAgIGRvdHMgPSBNYXRoLmNlaWwoKHNwZWMuc2xpZGVDb3VudCAtIHNwZWMuc2xpZGVzVG9TaG93KSAvIHNwZWMuc2xpZGVzVG9TY3JvbGwpICsgMTtcbiAgfVxuXG4gIHJldHVybiBkb3RzO1xufTtcblxudmFyIERvdHMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRQdXJlQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhEb3RzLCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihEb3RzKTtcblxuICBmdW5jdGlvbiBEb3RzKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEb3RzKTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEb3RzLCBbe1xuICAgIGtleTogXCJjbGlja0hhbmRsZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xpY2tIYW5kbGVyKG9wdGlvbnMsIGUpIHtcbiAgICAgIC8vIEluIEF1dG9wbGF5IHRoZSBmb2N1cyBzdGF5cyBvbiBjbGlja2VkIGJ1dHRvbiBldmVuIGFmdGVyIHRyYW5zaXRpb25cbiAgICAgIC8vIHRvIG5leHQgc2xpZGUuIFRoYXQgb25seSBnb2VzIGF3YXkgYnkgY2xpY2sgc29tZXdoZXJlIG91dHNpZGVcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMucHJvcHMuY2xpY2tIYW5kbGVyKG9wdGlvbnMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBvbk1vdXNlRW50ZXIgPSBfdGhpcyRwcm9wcy5vbk1vdXNlRW50ZXIsXG4gICAgICAgICAgb25Nb3VzZU92ZXIgPSBfdGhpcyRwcm9wcy5vbk1vdXNlT3ZlcixcbiAgICAgICAgICBvbk1vdXNlTGVhdmUgPSBfdGhpcyRwcm9wcy5vbk1vdXNlTGVhdmUsXG4gICAgICAgICAgaW5maW5pdGUgPSBfdGhpcyRwcm9wcy5pbmZpbml0ZSxcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbCA9IF90aGlzJHByb3BzLnNsaWRlc1RvU2Nyb2xsLFxuICAgICAgICAgIHNsaWRlc1RvU2hvdyA9IF90aGlzJHByb3BzLnNsaWRlc1RvU2hvdyxcbiAgICAgICAgICBzbGlkZUNvdW50ID0gX3RoaXMkcHJvcHMuc2xpZGVDb3VudCxcbiAgICAgICAgICBjdXJyZW50U2xpZGUgPSBfdGhpcyRwcm9wcy5jdXJyZW50U2xpZGU7XG4gICAgICB2YXIgZG90Q291bnQgPSBnZXREb3RDb3VudCh7XG4gICAgICAgIHNsaWRlQ291bnQ6IHNsaWRlQ291bnQsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiBzbGlkZXNUb1Njcm9sbCxcbiAgICAgICAgc2xpZGVzVG9TaG93OiBzbGlkZXNUb1Nob3csXG4gICAgICAgIGluZmluaXRlOiBpbmZpbml0ZVxuICAgICAgfSk7XG4gICAgICB2YXIgbW91c2VFdmVudHMgPSB7XG4gICAgICAgIG9uTW91c2VFbnRlcjogb25Nb3VzZUVudGVyLFxuICAgICAgICBvbk1vdXNlT3Zlcjogb25Nb3VzZU92ZXIsXG4gICAgICAgIG9uTW91c2VMZWF2ZTogb25Nb3VzZUxlYXZlXG4gICAgICB9O1xuICAgICAgdmFyIGRvdHMgPSBbXTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb3RDb3VudDsgaSsrKSB7XG4gICAgICAgIHZhciBfcmlnaHRCb3VuZCA9IChpICsgMSkgKiBzbGlkZXNUb1Njcm9sbCAtIDE7XG5cbiAgICAgICAgdmFyIHJpZ2h0Qm91bmQgPSBpbmZpbml0ZSA/IF9yaWdodEJvdW5kIDogKDAsIF9pbm5lclNsaWRlclV0aWxzLmNsYW1wKShfcmlnaHRCb3VuZCwgMCwgc2xpZGVDb3VudCAtIDEpO1xuXG4gICAgICAgIHZhciBfbGVmdEJvdW5kID0gcmlnaHRCb3VuZCAtIChzbGlkZXNUb1Njcm9sbCAtIDEpO1xuXG4gICAgICAgIHZhciBsZWZ0Qm91bmQgPSBpbmZpbml0ZSA/IF9sZWZ0Qm91bmQgOiAoMCwgX2lubmVyU2xpZGVyVXRpbHMuY2xhbXApKF9sZWZ0Qm91bmQsIDAsIHNsaWRlQ291bnQgLSAxKTtcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKHtcbiAgICAgICAgICBcInNsaWNrLWFjdGl2ZVwiOiBpbmZpbml0ZSA/IGN1cnJlbnRTbGlkZSA+PSBsZWZ0Qm91bmQgJiYgY3VycmVudFNsaWRlIDw9IHJpZ2h0Qm91bmQgOiBjdXJyZW50U2xpZGUgPT09IGxlZnRCb3VuZFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGRvdE9wdGlvbnMgPSB7XG4gICAgICAgICAgbWVzc2FnZTogXCJkb3RzXCIsXG4gICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IHNsaWRlc1RvU2Nyb2xsLFxuICAgICAgICAgIGN1cnJlbnRTbGlkZTogY3VycmVudFNsaWRlXG4gICAgICAgIH07XG4gICAgICAgIHZhciBvbkNsaWNrID0gdGhpcy5jbGlja0hhbmRsZXIuYmluZCh0aGlzLCBkb3RPcHRpb25zKTtcbiAgICAgICAgZG90cyA9IGRvdHMuY29uY2F0KCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwibGlcIiwge1xuICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuICAgICAgICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jbG9uZUVsZW1lbnQodGhpcy5wcm9wcy5jdXN0b21QYWdpbmcoaSksIHtcbiAgICAgICAgICBvbkNsaWNrOiBvbkNsaWNrXG4gICAgICAgIH0pKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jbG9uZUVsZW1lbnQodGhpcy5wcm9wcy5hcHBlbmREb3RzKGRvdHMpLCBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmRvdHNDbGFzc1xuICAgICAgfSwgbW91c2VFdmVudHMpKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRG90cztcbn0oX3JlYWN0W1wiZGVmYXVsdFwiXS5QdXJlQ29tcG9uZW50KTtcblxuZXhwb3J0cy5Eb3RzID0gRG90czsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3NsaWRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc2xpZGVyXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBfZGVmYXVsdCA9IF9zbGlkZXJbXCJkZWZhdWx0XCJdO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIGluaXRpYWxTdGF0ZSA9IHtcbiAgYW5pbWF0aW5nOiBmYWxzZSxcbiAgYXV0b3BsYXlpbmc6IG51bGwsXG4gIGN1cnJlbnREaXJlY3Rpb246IDAsXG4gIGN1cnJlbnRMZWZ0OiBudWxsLFxuICBjdXJyZW50U2xpZGU6IDAsXG4gIGRpcmVjdGlvbjogMSxcbiAgZHJhZ2dpbmc6IGZhbHNlLFxuICBlZGdlRHJhZ2dlZDogZmFsc2UsXG4gIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgbGF6eUxvYWRlZExpc3Q6IFtdLFxuICBsaXN0SGVpZ2h0OiBudWxsLFxuICBsaXN0V2lkdGg6IG51bGwsXG4gIHNjcm9sbGluZzogZmFsc2UsXG4gIHNsaWRlQ291bnQ6IG51bGwsXG4gIHNsaWRlSGVpZ2h0OiBudWxsLFxuICBzbGlkZVdpZHRoOiBudWxsLFxuICBzd2lwZUxlZnQ6IG51bGwsXG4gIHN3aXBlZDogZmFsc2UsXG4gIC8vIHVzZWQgYnkgc3dpcGVFdmVudC4gZGlmZmVyZW50aXRlcyBiZXR3ZWVuIHRvdWNoIGFuZCBzd2lwZS5cbiAgc3dpcGluZzogZmFsc2UsXG4gIHRvdWNoT2JqZWN0OiB7XG4gICAgc3RhcnRYOiAwLFxuICAgIHN0YXJ0WTogMCxcbiAgICBjdXJYOiAwLFxuICAgIGN1clk6IDBcbiAgfSxcbiAgdHJhY2tTdHlsZToge30sXG4gIHRyYWNrV2lkdGg6IDAsXG4gIHRhcmdldFNsaWRlOiAwXG59O1xudmFyIF9kZWZhdWx0ID0gaW5pdGlhbFN0YXRlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuSW5uZXJTbGlkZXIgPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfaW5pdGlhbFN0YXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9pbml0aWFsLXN0YXRlXCIpKTtcblxudmFyIF9sb2Rhc2ggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJsb2Rhc2guZGVib3VuY2VcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9pbm5lclNsaWRlclV0aWxzID0gcmVxdWlyZShcIi4vdXRpbHMvaW5uZXJTbGlkZXJVdGlsc1wiKTtcblxudmFyIF90cmFjayA9IHJlcXVpcmUoXCIuL3RyYWNrXCIpO1xuXG52YXIgX2RvdHMgPSByZXF1aXJlKFwiLi9kb3RzXCIpO1xuXG52YXIgX2Fycm93cyA9IHJlcXVpcmUoXCIuL2Fycm93c1wiKTtcblxudmFyIF9yZXNpemVPYnNlcnZlclBvbHlmaWxsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVzaXplLW9ic2VydmVyLXBvbHlmaWxsXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTsgdmFyIGtleSwgaTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBJbm5lclNsaWRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoSW5uZXJTbGlkZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoSW5uZXJTbGlkZXIpO1xuXG4gIGZ1bmN0aW9uIElubmVyU2xpZGVyKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElubmVyU2xpZGVyKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImxpc3RSZWZIYW5kbGVyXCIsIGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIHJldHVybiBfdGhpcy5saXN0ID0gcmVmO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInRyYWNrUmVmSGFuZGxlclwiLCBmdW5jdGlvbiAocmVmKSB7XG4gICAgICByZXR1cm4gX3RoaXMudHJhY2sgPSByZWY7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiYWRhcHRIZWlnaHRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLmFkYXB0aXZlSGVpZ2h0ICYmIF90aGlzLmxpc3QpIHtcbiAgICAgICAgdmFyIGVsZW0gPSBfdGhpcy5saXN0LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1pbmRleD1cXFwiXCIuY29uY2F0KF90aGlzLnN0YXRlLmN1cnJlbnRTbGlkZSwgXCJcXFwiXVwiKSk7XG5cbiAgICAgICAgX3RoaXMubGlzdC5zdHlsZS5oZWlnaHQgPSAoMCwgX2lubmVyU2xpZGVyVXRpbHMuZ2V0SGVpZ2h0KShlbGVtKSArIFwicHhcIjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjb21wb25lbnREaWRNb3VudFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5wcm9wcy5vbkluaXQgJiYgX3RoaXMucHJvcHMub25Jbml0KCk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5sYXp5TG9hZCkge1xuICAgICAgICB2YXIgc2xpZGVzVG9Mb2FkID0gKDAsIF9pbm5lclNsaWRlclV0aWxzLmdldE9uRGVtYW5kTGF6eVNsaWRlcykoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBfdGhpcy5wcm9wcyksIF90aGlzLnN0YXRlKSk7XG5cbiAgICAgICAgaWYgKHNsaWRlc1RvTG9hZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbGF6eUxvYWRlZExpc3Q6IHByZXZTdGF0ZS5sYXp5TG9hZGVkTGlzdC5jb25jYXQoc2xpZGVzVG9Mb2FkKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkxhenlMb2FkKSB7XG4gICAgICAgICAgICBfdGhpcy5wcm9wcy5vbkxhenlMb2FkKHNsaWRlc1RvTG9hZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBzcGVjID0gX29iamVjdFNwcmVhZCh7XG4gICAgICAgIGxpc3RSZWY6IF90aGlzLmxpc3QsXG4gICAgICAgIHRyYWNrUmVmOiBfdGhpcy50cmFja1xuICAgICAgfSwgX3RoaXMucHJvcHMpO1xuXG4gICAgICBfdGhpcy51cGRhdGVTdGF0ZShzcGVjLCB0cnVlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLmFkYXB0SGVpZ2h0KCk7XG5cbiAgICAgICAgX3RoaXMucHJvcHMuYXV0b3BsYXkgJiYgX3RoaXMuYXV0b1BsYXkoXCJ1cGRhdGVcIik7XG4gICAgICB9KTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLmxhenlMb2FkID09PSBcInByb2dyZXNzaXZlXCIpIHtcbiAgICAgICAgX3RoaXMubGF6eUxvYWRUaW1lciA9IHNldEludGVydmFsKF90aGlzLnByb2dyZXNzaXZlTGF6eUxvYWQsIDEwMDApO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5ybyA9IG5ldyBfcmVzaXplT2JzZXJ2ZXJQb2x5ZmlsbFtcImRlZmF1bHRcIl0oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMuc3RhdGUuYW5pbWF0aW5nKSB7XG4gICAgICAgICAgX3RoaXMub25XaW5kb3dSZXNpemVkKGZhbHNlKTsgLy8gZG9uJ3Qgc2V0IHRyYWNrU3R5bGUgaGVuY2UgZG9uJ3QgYnJlYWsgYW5pbWF0aW9uXG5cblxuICAgICAgICAgIF90aGlzLmNhbGxiYWNrVGltZXJzLnB1c2goc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMub25XaW5kb3dSZXNpemVkKCk7XG4gICAgICAgICAgfSwgX3RoaXMucHJvcHMuc3BlZWQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5vbldpbmRvd1Jlc2l6ZWQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLnJvLm9ic2VydmUoX3RoaXMubGlzdCk7XG5cbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGljay1zbGlkZVwiKSwgZnVuY3Rpb24gKHNsaWRlKSB7XG4gICAgICAgIHNsaWRlLm9uZm9jdXMgPSBfdGhpcy5wcm9wcy5wYXVzZU9uRm9jdXMgPyBfdGhpcy5vblNsaWRlRm9jdXMgOiBudWxsO1xuICAgICAgICBzbGlkZS5vbmJsdXIgPSBfdGhpcy5wcm9wcy5wYXVzZU9uRm9jdXMgPyBfdGhpcy5vblNsaWRlQmx1ciA6IG51bGw7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIF90aGlzLm9uV2luZG93UmVzaXplZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuYXR0YWNoRXZlbnQoXCJvbnJlc2l6ZVwiLCBfdGhpcy5vbldpbmRvd1Jlc2l6ZWQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5hbmltYXRpb25FbmRDYWxsYmFjaykge1xuICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMuYW5pbWF0aW9uRW5kQ2FsbGJhY2spO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMubGF6eUxvYWRUaW1lcikge1xuICAgICAgICBjbGVhckludGVydmFsKF90aGlzLmxhenlMb2FkVGltZXIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMuY2FsbGJhY2tUaW1lcnMubGVuZ3RoKSB7XG4gICAgICAgIF90aGlzLmNhbGxiYWNrVGltZXJzLmZvckVhY2goZnVuY3Rpb24gKHRpbWVyKSB7XG4gICAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF90aGlzLmNhbGxiYWNrVGltZXJzID0gW107XG4gICAgICB9XG5cbiAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBfdGhpcy5vbldpbmRvd1Jlc2l6ZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmRldGFjaEV2ZW50KFwib25yZXNpemVcIiwgX3RoaXMub25XaW5kb3dSZXNpemVkKTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLmF1dG9wbGF5VGltZXIpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChfdGhpcy5hdXRvcGxheVRpbWVyKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMucm8uZGlzY29ubmVjdCgpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNvbXBvbmVudERpZFVwZGF0ZVwiLCBmdW5jdGlvbiAocHJldlByb3BzKSB7XG4gICAgICBfdGhpcy5jaGVja0ltYWdlc0xvYWQoKTtcblxuICAgICAgX3RoaXMucHJvcHMub25SZUluaXQgJiYgX3RoaXMucHJvcHMub25SZUluaXQoKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLmxhenlMb2FkKSB7XG4gICAgICAgIHZhciBzbGlkZXNUb0xvYWQgPSAoMCwgX2lubmVyU2xpZGVyVXRpbHMuZ2V0T25EZW1hbmRMYXp5U2xpZGVzKShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIF90aGlzLnByb3BzKSwgX3RoaXMuc3RhdGUpKTtcblxuICAgICAgICBpZiAoc2xpZGVzVG9Mb2FkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBsYXp5TG9hZGVkTGlzdDogcHJldlN0YXRlLmxhenlMb2FkZWRMaXN0LmNvbmNhdChzbGlkZXNUb0xvYWQpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKF90aGlzLnByb3BzLm9uTGF6eUxvYWQpIHtcbiAgICAgICAgICAgIF90aGlzLnByb3BzLm9uTGF6eUxvYWQoc2xpZGVzVG9Mb2FkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gLy8gaWYgKHRoaXMucHJvcHMub25MYXp5TG9hZCkge1xuICAgICAgLy8gICB0aGlzLnByb3BzLm9uTGF6eUxvYWQoW2xlZnRNb3N0U2xpZGVdKVxuICAgICAgLy8gfVxuXG5cbiAgICAgIF90aGlzLmFkYXB0SGVpZ2h0KCk7XG5cbiAgICAgIHZhciBzcGVjID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgbGlzdFJlZjogX3RoaXMubGlzdCxcbiAgICAgICAgdHJhY2tSZWY6IF90aGlzLnRyYWNrXG4gICAgICB9LCBfdGhpcy5wcm9wcyksIF90aGlzLnN0YXRlKTtcblxuICAgICAgdmFyIHNldFRyYWNrU3R5bGUgPSBfdGhpcy5kaWRQcm9wc0NoYW5nZShwcmV2UHJvcHMpO1xuXG4gICAgICBzZXRUcmFja1N0eWxlICYmIF90aGlzLnVwZGF0ZVN0YXRlKHNwZWMsIHNldFRyYWNrU3R5bGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzLnN0YXRlLmN1cnJlbnRTbGlkZSA+PSBfcmVhY3RbXCJkZWZhdWx0XCJdLkNoaWxkcmVuLmNvdW50KF90aGlzLnByb3BzLmNoaWxkcmVuKSkge1xuICAgICAgICAgIF90aGlzLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiaW5kZXhcIixcbiAgICAgICAgICAgIGluZGV4OiBfcmVhY3RbXCJkZWZhdWx0XCJdLkNoaWxkcmVuLmNvdW50KF90aGlzLnByb3BzLmNoaWxkcmVuKSAtIF90aGlzLnByb3BzLnNsaWRlc1RvU2hvdyxcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZTogX3RoaXMuc3RhdGUuY3VycmVudFNsaWRlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX3RoaXMucHJvcHMuYXV0b3BsYXkpIHtcbiAgICAgICAgICBfdGhpcy5hdXRvUGxheShcInVwZGF0ZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5wYXVzZShcInBhdXNlZFwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25XaW5kb3dSZXNpemVkXCIsIGZ1bmN0aW9uIChzZXRUcmFja1N0eWxlKSB7XG4gICAgICBpZiAoX3RoaXMuZGVib3VuY2VkUmVzaXplKSBfdGhpcy5kZWJvdW5jZWRSZXNpemUuY2FuY2VsKCk7XG4gICAgICBfdGhpcy5kZWJvdW5jZWRSZXNpemUgPSAoMCwgX2xvZGFzaFtcImRlZmF1bHRcIl0pKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnJlc2l6ZVdpbmRvdyhzZXRUcmFja1N0eWxlKTtcbiAgICAgIH0sIDUwKTtcblxuICAgICAgX3RoaXMuZGVib3VuY2VkUmVzaXplKCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicmVzaXplV2luZG93XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzZXRUcmFja1N0eWxlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB0cnVlO1xuICAgICAgdmFyIGlzVHJhY2tNb3VudGVkID0gQm9vbGVhbihfdGhpcy50cmFjayAmJiBfdGhpcy50cmFjay5ub2RlKTsgLy8gcHJldmVudCB3YXJuaW5nOiBzZXR0aW5nIHN0YXRlIG9uIHVubW91bnRlZCBjb21wb25lbnQgKHNlcnZlciBzaWRlIHJlbmRlcmluZylcblxuICAgICAgaWYgKCFpc1RyYWNrTW91bnRlZCkgcmV0dXJuO1xuXG4gICAgICB2YXIgc3BlYyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7XG4gICAgICAgIGxpc3RSZWY6IF90aGlzLmxpc3QsXG4gICAgICAgIHRyYWNrUmVmOiBfdGhpcy50cmFja1xuICAgICAgfSwgX3RoaXMucHJvcHMpLCBfdGhpcy5zdGF0ZSk7XG5cbiAgICAgIF90aGlzLnVwZGF0ZVN0YXRlKHNwZWMsIHNldFRyYWNrU3R5bGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLmF1dG9wbGF5KSBfdGhpcy5hdXRvUGxheShcInVwZGF0ZVwiKTtlbHNlIF90aGlzLnBhdXNlKFwicGF1c2VkXCIpO1xuICAgICAgfSk7IC8vIGFuaW1hdGluZyBzdGF0ZSBzaG91bGQgYmUgY2xlYXJlZCB3aGlsZSByZXNpemluZywgb3RoZXJ3aXNlIGF1dG9wbGF5IHN0b3BzIHdvcmtpbmdcblxuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFuaW1hdGluZzogZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgICBjbGVhclRpbWVvdXQoX3RoaXMuYW5pbWF0aW9uRW5kQ2FsbGJhY2spO1xuICAgICAgZGVsZXRlIF90aGlzLmFuaW1hdGlvbkVuZENhbGxiYWNrO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInVwZGF0ZVN0YXRlXCIsIGZ1bmN0aW9uIChzcGVjLCBzZXRUcmFja1N0eWxlLCBjYWxsYmFjaykge1xuICAgICAgdmFyIHVwZGF0ZWRTdGF0ZSA9ICgwLCBfaW5uZXJTbGlkZXJVdGlscy5pbml0aWFsaXplZFN0YXRlKShzcGVjKTtcbiAgICAgIHNwZWMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgc3BlYyksIHVwZGF0ZWRTdGF0ZSksIHt9LCB7XG4gICAgICAgIHNsaWRlSW5kZXg6IHVwZGF0ZWRTdGF0ZS5jdXJyZW50U2xpZGVcbiAgICAgIH0pO1xuICAgICAgdmFyIHRhcmdldExlZnQgPSAoMCwgX2lubmVyU2xpZGVyVXRpbHMuZ2V0VHJhY2tMZWZ0KShzcGVjKTtcbiAgICAgIHNwZWMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHNwZWMpLCB7fSwge1xuICAgICAgICBsZWZ0OiB0YXJnZXRMZWZ0XG4gICAgICB9KTtcbiAgICAgIHZhciB0cmFja1N0eWxlID0gKDAsIF9pbm5lclNsaWRlclV0aWxzLmdldFRyYWNrQ1NTKShzcGVjKTtcblxuICAgICAgaWYgKHNldFRyYWNrU3R5bGUgfHwgX3JlYWN0W1wiZGVmYXVsdFwiXS5DaGlsZHJlbi5jb3VudChfdGhpcy5wcm9wcy5jaGlsZHJlbikgIT09IF9yZWFjdFtcImRlZmF1bHRcIl0uQ2hpbGRyZW4uY291bnQoc3BlYy5jaGlsZHJlbikpIHtcbiAgICAgICAgdXBkYXRlZFN0YXRlW1widHJhY2tTdHlsZVwiXSA9IHRyYWNrU3R5bGU7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHVwZGF0ZWRTdGF0ZSwgY2FsbGJhY2spO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInNzckluaXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLnZhcmlhYmxlV2lkdGgpIHtcbiAgICAgICAgdmFyIF90cmFja1dpZHRoID0gMCxcbiAgICAgICAgICAgIF90cmFja0xlZnQgPSAwO1xuICAgICAgICB2YXIgY2hpbGRyZW5XaWR0aHMgPSBbXTtcbiAgICAgICAgdmFyIHByZUNsb25lcyA9ICgwLCBfaW5uZXJTbGlkZXJVdGlscy5nZXRQcmVDbG9uZXMpKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBfdGhpcy5wcm9wcyksIF90aGlzLnN0YXRlKSwge30sIHtcbiAgICAgICAgICBzbGlkZUNvdW50OiBfdGhpcy5wcm9wcy5jaGlsZHJlbi5sZW5ndGhcbiAgICAgICAgfSkpO1xuICAgICAgICB2YXIgcG9zdENsb25lcyA9ICgwLCBfaW5uZXJTbGlkZXJVdGlscy5nZXRQb3N0Q2xvbmVzKShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgX3RoaXMucHJvcHMpLCBfdGhpcy5zdGF0ZSksIHt9LCB7XG4gICAgICAgICAgc2xpZGVDb3VudDogX3RoaXMucHJvcHMuY2hpbGRyZW4ubGVuZ3RoXG4gICAgICAgIH0pKTtcblxuICAgICAgICBfdGhpcy5wcm9wcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgIGNoaWxkcmVuV2lkdGhzLnB1c2goY2hpbGQucHJvcHMuc3R5bGUud2lkdGgpO1xuICAgICAgICAgIF90cmFja1dpZHRoICs9IGNoaWxkLnByb3BzLnN0eWxlLndpZHRoO1xuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByZUNsb25lczsgaSsrKSB7XG4gICAgICAgICAgX3RyYWNrTGVmdCArPSBjaGlsZHJlbldpZHRoc1tjaGlsZHJlbldpZHRocy5sZW5ndGggLSAxIC0gaV07XG4gICAgICAgICAgX3RyYWNrV2lkdGggKz0gY2hpbGRyZW5XaWR0aHNbY2hpbGRyZW5XaWR0aHMubGVuZ3RoIC0gMSAtIGldO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHBvc3RDbG9uZXM7IF9pKyspIHtcbiAgICAgICAgICBfdHJhY2tXaWR0aCArPSBjaGlsZHJlbldpZHRoc1tfaV07XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBfdGhpcy5zdGF0ZS5jdXJyZW50U2xpZGU7IF9pMisrKSB7XG4gICAgICAgICAgX3RyYWNrTGVmdCArPSBjaGlsZHJlbldpZHRoc1tfaTJdO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF90cmFja1N0eWxlID0ge1xuICAgICAgICAgIHdpZHRoOiBfdHJhY2tXaWR0aCArIFwicHhcIixcbiAgICAgICAgICBsZWZ0OiAtX3RyYWNrTGVmdCArIFwicHhcIlxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChfdGhpcy5wcm9wcy5jZW50ZXJNb2RlKSB7XG4gICAgICAgICAgdmFyIGN1cnJlbnRXaWR0aCA9IFwiXCIuY29uY2F0KGNoaWxkcmVuV2lkdGhzW190aGlzLnN0YXRlLmN1cnJlbnRTbGlkZV0sIFwicHhcIik7XG4gICAgICAgICAgX3RyYWNrU3R5bGUubGVmdCA9IFwiY2FsYyhcIi5jb25jYXQoX3RyYWNrU3R5bGUubGVmdCwgXCIgKyAoMTAwJSAtIFwiKS5jb25jYXQoY3VycmVudFdpZHRoLCBcIikgLyAyICkgXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0cmFja1N0eWxlOiBfdHJhY2tTdHlsZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB2YXIgY2hpbGRyZW5Db3VudCA9IF9yZWFjdFtcImRlZmF1bHRcIl0uQ2hpbGRyZW4uY291bnQoX3RoaXMucHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgICB2YXIgc3BlYyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBfdGhpcy5wcm9wcyksIF90aGlzLnN0YXRlKSwge30sIHtcbiAgICAgICAgc2xpZGVDb3VudDogY2hpbGRyZW5Db3VudFxuICAgICAgfSk7XG5cbiAgICAgIHZhciBzbGlkZUNvdW50ID0gKDAsIF9pbm5lclNsaWRlclV0aWxzLmdldFByZUNsb25lcykoc3BlYykgKyAoMCwgX2lubmVyU2xpZGVyVXRpbHMuZ2V0UG9zdENsb25lcykoc3BlYykgKyBjaGlsZHJlbkNvdW50O1xuICAgICAgdmFyIHRyYWNrV2lkdGggPSAxMDAgLyBfdGhpcy5wcm9wcy5zbGlkZXNUb1Nob3cgKiBzbGlkZUNvdW50O1xuICAgICAgdmFyIHNsaWRlV2lkdGggPSAxMDAgLyBzbGlkZUNvdW50O1xuICAgICAgdmFyIHRyYWNrTGVmdCA9IC1zbGlkZVdpZHRoICogKCgwLCBfaW5uZXJTbGlkZXJVdGlscy5nZXRQcmVDbG9uZXMpKHNwZWMpICsgX3RoaXMuc3RhdGUuY3VycmVudFNsaWRlKSAqIHRyYWNrV2lkdGggLyAxMDA7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5jZW50ZXJNb2RlKSB7XG4gICAgICAgIHRyYWNrTGVmdCArPSAoMTAwIC0gc2xpZGVXaWR0aCAqIHRyYWNrV2lkdGggLyAxMDApIC8gMjtcbiAgICAgIH1cblxuICAgICAgdmFyIHRyYWNrU3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOiB0cmFja1dpZHRoICsgXCIlXCIsXG4gICAgICAgIGxlZnQ6IHRyYWNrTGVmdCArIFwiJVwiXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2xpZGVXaWR0aDogc2xpZGVXaWR0aCArIFwiJVwiLFxuICAgICAgICB0cmFja1N0eWxlOiB0cmFja1N0eWxlXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNoZWNrSW1hZ2VzTG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaW1hZ2VzID0gX3RoaXMubGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWNrLXNsaWRlIGltZ1wiKTtcblxuICAgICAgdmFyIGltYWdlc0NvdW50ID0gaW1hZ2VzLmxlbmd0aCxcbiAgICAgICAgICBsb2FkZWRDb3VudCA9IDA7XG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGltYWdlcywgZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgICAgICByZXR1cm4gKytsb2FkZWRDb3VudCAmJiBsb2FkZWRDb3VudCA+PSBpbWFnZXNDb3VudCAmJiBfdGhpcy5vbldpbmRvd1Jlc2l6ZWQoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIWltYWdlLm9uY2xpY2spIHtcbiAgICAgICAgICBpbWFnZS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGltYWdlLnBhcmVudE5vZGUuZm9jdXMoKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBwcmV2Q2xpY2tIYW5kbGVyID0gaW1hZ2Uub25jbGljaztcblxuICAgICAgICAgIGltYWdlLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwcmV2Q2xpY2tIYW5kbGVyKCk7XG4gICAgICAgICAgICBpbWFnZS5wYXJlbnROb2RlLmZvY3VzKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaW1hZ2Uub25sb2FkKSB7XG4gICAgICAgICAgaWYgKF90aGlzLnByb3BzLmxhenlMb2FkKSB7XG4gICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIF90aGlzLmFkYXB0SGVpZ2h0KCk7XG5cbiAgICAgICAgICAgICAgX3RoaXMuY2FsbGJhY2tUaW1lcnMucHVzaChzZXRUaW1lb3V0KF90aGlzLm9uV2luZG93UmVzaXplZCwgX3RoaXMucHJvcHMuc3BlZWQpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9IGhhbmRsZXI7XG5cbiAgICAgICAgICAgIGltYWdlLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGhhbmRsZXIoKTtcbiAgICAgICAgICAgICAgX3RoaXMucHJvcHMub25MYXp5TG9hZEVycm9yICYmIF90aGlzLnByb3BzLm9uTGF6eUxvYWRFcnJvcigpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByb2dyZXNzaXZlTGF6eUxvYWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHNsaWRlc1RvTG9hZCA9IFtdO1xuXG4gICAgICB2YXIgc3BlYyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgX3RoaXMucHJvcHMpLCBfdGhpcy5zdGF0ZSk7XG5cbiAgICAgIGZvciAodmFyIGluZGV4ID0gX3RoaXMuc3RhdGUuY3VycmVudFNsaWRlOyBpbmRleCA8IF90aGlzLnN0YXRlLnNsaWRlQ291bnQgKyAoMCwgX2lubmVyU2xpZGVyVXRpbHMuZ2V0UG9zdENsb25lcykoc3BlYyk7IGluZGV4KyspIHtcbiAgICAgICAgaWYgKF90aGlzLnN0YXRlLmxhenlMb2FkZWRMaXN0LmluZGV4T2YoaW5kZXgpIDwgMCkge1xuICAgICAgICAgIHNsaWRlc1RvTG9hZC5wdXNoKGluZGV4KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfaW5kZXggPSBfdGhpcy5zdGF0ZS5jdXJyZW50U2xpZGUgLSAxOyBfaW5kZXggPj0gLSgwLCBfaW5uZXJTbGlkZXJVdGlscy5nZXRQcmVDbG9uZXMpKHNwZWMpOyBfaW5kZXgtLSkge1xuICAgICAgICBpZiAoX3RoaXMuc3RhdGUubGF6eUxvYWRlZExpc3QuaW5kZXhPZihfaW5kZXgpIDwgMCkge1xuICAgICAgICAgIHNsaWRlc1RvTG9hZC5wdXNoKF9pbmRleCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHNsaWRlc1RvTG9hZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsYXp5TG9hZGVkTGlzdDogc3RhdGUubGF6eUxvYWRlZExpc3QuY29uY2F0KHNsaWRlc1RvTG9hZClcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoX3RoaXMucHJvcHMub25MYXp5TG9hZCkge1xuICAgICAgICAgIF90aGlzLnByb3BzLm9uTGF6eUxvYWQoc2xpZGVzVG9Mb2FkKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKF90aGlzLmxhenlMb2FkVGltZXIpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKF90aGlzLmxhenlMb2FkVGltZXIpO1xuICAgICAgICAgIGRlbGV0ZSBfdGhpcy5sYXp5TG9hZFRpbWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic2xpZGVIYW5kbGVyXCIsIGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgdmFyIGRvbnRBbmltYXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGFzTmF2Rm9yID0gX3RoaXMkcHJvcHMuYXNOYXZGb3IsXG4gICAgICAgICAgYmVmb3JlQ2hhbmdlID0gX3RoaXMkcHJvcHMuYmVmb3JlQ2hhbmdlLFxuICAgICAgICAgIG9uTGF6eUxvYWQgPSBfdGhpcyRwcm9wcy5vbkxhenlMb2FkLFxuICAgICAgICAgIHNwZWVkID0gX3RoaXMkcHJvcHMuc3BlZWQsXG4gICAgICAgICAgYWZ0ZXJDaGFuZ2UgPSBfdGhpcyRwcm9wcy5hZnRlckNoYW5nZTsgLy8gY2FwdHVyZSBjdXJyZW50c2xpZGUgYmVmb3JlIHN0YXRlIGlzIHVwZGF0ZWRcblxuICAgICAgdmFyIGN1cnJlbnRTbGlkZSA9IF90aGlzLnN0YXRlLmN1cnJlbnRTbGlkZTtcblxuICAgICAgdmFyIF9zbGlkZUhhbmRsZXIgPSAoMCwgX2lubmVyU2xpZGVyVXRpbHMuc2xpZGVIYW5kbGVyKShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7XG4gICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgfSwgX3RoaXMucHJvcHMpLCBfdGhpcy5zdGF0ZSksIHt9LCB7XG4gICAgICAgIHRyYWNrUmVmOiBfdGhpcy50cmFjayxcbiAgICAgICAgdXNlQ1NTOiBfdGhpcy5wcm9wcy51c2VDU1MgJiYgIWRvbnRBbmltYXRlXG4gICAgICB9KSksXG4gICAgICAgICAgc3RhdGUgPSBfc2xpZGVIYW5kbGVyLnN0YXRlLFxuICAgICAgICAgIG5leHRTdGF0ZSA9IF9zbGlkZUhhbmRsZXIubmV4dFN0YXRlO1xuXG4gICAgICBpZiAoIXN0YXRlKSByZXR1cm47XG4gICAgICBiZWZvcmVDaGFuZ2UgJiYgYmVmb3JlQ2hhbmdlKGN1cnJlbnRTbGlkZSwgc3RhdGUuY3VycmVudFNsaWRlKTtcbiAgICAgIHZhciBzbGlkZXNUb0xvYWQgPSBzdGF0ZS5sYXp5TG9hZGVkTGlzdC5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5zdGF0ZS5sYXp5TG9hZGVkTGlzdC5pbmRleE9mKHZhbHVlKSA8IDA7XG4gICAgICB9KTtcbiAgICAgIG9uTGF6eUxvYWQgJiYgc2xpZGVzVG9Mb2FkLmxlbmd0aCA+IDAgJiYgb25MYXp5TG9hZChzbGlkZXNUb0xvYWQpO1xuXG4gICAgICBpZiAoIV90aGlzLnByb3BzLndhaXRGb3JBbmltYXRlICYmIF90aGlzLmFuaW1hdGlvbkVuZENhbGxiYWNrKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5hbmltYXRpb25FbmRDYWxsYmFjayk7XG4gICAgICAgIGFmdGVyQ2hhbmdlICYmIGFmdGVyQ2hhbmdlKGN1cnJlbnRTbGlkZSk7XG4gICAgICAgIGRlbGV0ZSBfdGhpcy5hbmltYXRpb25FbmRDYWxsYmFjaztcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc2V0U3RhdGUoc3RhdGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gYXNOYXZGb3JJbmRleCBjaGVjayBpcyB0byBhdm9pZCByZWN1cnNpdmUgY2FsbHMgb2Ygc2xpZGVIYW5kbGVyIGluIHdhaXRGb3JBbmltYXRlPWZhbHNlIG1vZGVcbiAgICAgICAgaWYgKGFzTmF2Rm9yICYmIF90aGlzLmFzTmF2Rm9ySW5kZXggIT09IGluZGV4KSB7XG4gICAgICAgICAgX3RoaXMuYXNOYXZGb3JJbmRleCA9IGluZGV4O1xuICAgICAgICAgIGFzTmF2Rm9yLmlubmVyU2xpZGVyLnNsaWRlSGFuZGxlcihpbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW5leHRTdGF0ZSkgcmV0dXJuO1xuICAgICAgICBfdGhpcy5hbmltYXRpb25FbmRDYWxsYmFjayA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBhbmltYXRpbmcgPSBuZXh0U3RhdGUuYW5pbWF0aW5nLFxuICAgICAgICAgICAgICBmaXJzdEJhdGNoID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG5leHRTdGF0ZSwgW1wiYW5pbWF0aW5nXCJdKTtcblxuICAgICAgICAgIF90aGlzLnNldFN0YXRlKGZpcnN0QmF0Y2gsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmNhbGxiYWNrVGltZXJzLnB1c2goc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW5nOiBhbmltYXRpbmdcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAxMCkpO1xuXG4gICAgICAgICAgICBhZnRlckNoYW5nZSAmJiBhZnRlckNoYW5nZShzdGF0ZS5jdXJyZW50U2xpZGUpO1xuICAgICAgICAgICAgZGVsZXRlIF90aGlzLmFuaW1hdGlvbkVuZENhbGxiYWNrO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LCBzcGVlZCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjaGFuZ2VTbGlkZVwiLCBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgdmFyIGRvbnRBbmltYXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcblxuICAgICAgdmFyIHNwZWMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIF90aGlzLnByb3BzKSwgX3RoaXMuc3RhdGUpO1xuXG4gICAgICB2YXIgdGFyZ2V0U2xpZGUgPSAoMCwgX2lubmVyU2xpZGVyVXRpbHMuY2hhbmdlU2xpZGUpKHNwZWMsIG9wdGlvbnMpO1xuICAgICAgaWYgKHRhcmdldFNsaWRlICE9PSAwICYmICF0YXJnZXRTbGlkZSkgcmV0dXJuO1xuXG4gICAgICBpZiAoZG9udEFuaW1hdGUgPT09IHRydWUpIHtcbiAgICAgICAgX3RoaXMuc2xpZGVIYW5kbGVyKHRhcmdldFNsaWRlLCBkb250QW5pbWF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5zbGlkZUhhbmRsZXIodGFyZ2V0U2xpZGUpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5wcm9wcy5hdXRvcGxheSAmJiBfdGhpcy5hdXRvUGxheShcInVwZGF0ZVwiKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLmZvY3VzT25TZWxlY3QpIHtcbiAgICAgICAgdmFyIG5vZGVzID0gX3RoaXMubGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWNrLWN1cnJlbnRcIik7XG5cbiAgICAgICAgbm9kZXNbMF0gJiYgbm9kZXNbMF0uZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjbGlja0hhbmRsZXJcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChfdGhpcy5jbGlja2FibGUgPT09IGZhbHNlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuY2xpY2thYmxlID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJrZXlIYW5kbGVyXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgZGlyID0gKDAsIF9pbm5lclNsaWRlclV0aWxzLmtleUhhbmRsZXIpKGUsIF90aGlzLnByb3BzLmFjY2Vzc2liaWxpdHksIF90aGlzLnByb3BzLnJ0bCk7XG4gICAgICBkaXIgIT09IFwiXCIgJiYgX3RoaXMuY2hhbmdlU2xpZGUoe1xuICAgICAgICBtZXNzYWdlOiBkaXJcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInNlbGVjdEhhbmRsZXJcIiwgZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgIF90aGlzLmNoYW5nZVNsaWRlKG9wdGlvbnMpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImRpc2FibGVCb2R5U2Nyb2xsXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGUpIHtcbiAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICB9O1xuXG4gICAgICB3aW5kb3cub250b3VjaG1vdmUgPSBwcmV2ZW50RGVmYXVsdDtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJlbmFibGVCb2R5U2Nyb2xsXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHdpbmRvdy5vbnRvdWNobW92ZSA9IG51bGw7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic3dpcGVTdGFydFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLnZlcnRpY2FsU3dpcGluZykge1xuICAgICAgICBfdGhpcy5kaXNhYmxlQm9keVNjcm9sbCgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3RhdGUgPSAoMCwgX2lubmVyU2xpZGVyVXRpbHMuc3dpcGVTdGFydCkoZSwgX3RoaXMucHJvcHMuc3dpcGUsIF90aGlzLnByb3BzLmRyYWdnYWJsZSk7XG4gICAgICBzdGF0ZSAhPT0gXCJcIiAmJiBfdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic3dpcGVNb3ZlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgc3RhdGUgPSAoMCwgX2lubmVyU2xpZGVyVXRpbHMuc3dpcGVNb3ZlKShlLCBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgX3RoaXMucHJvcHMpLCBfdGhpcy5zdGF0ZSksIHt9LCB7XG4gICAgICAgIHRyYWNrUmVmOiBfdGhpcy50cmFjayxcbiAgICAgICAgbGlzdFJlZjogX3RoaXMubGlzdCxcbiAgICAgICAgc2xpZGVJbmRleDogX3RoaXMuc3RhdGUuY3VycmVudFNsaWRlXG4gICAgICB9KSk7XG4gICAgICBpZiAoIXN0YXRlKSByZXR1cm47XG5cbiAgICAgIGlmIChzdGF0ZVtcInN3aXBpbmdcIl0pIHtcbiAgICAgICAgX3RoaXMuY2xpY2thYmxlID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzd2lwZUVuZFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHN0YXRlID0gKDAsIF9pbm5lclNsaWRlclV0aWxzLnN3aXBlRW5kKShlLCBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgX3RoaXMucHJvcHMpLCBfdGhpcy5zdGF0ZSksIHt9LCB7XG4gICAgICAgIHRyYWNrUmVmOiBfdGhpcy50cmFjayxcbiAgICAgICAgbGlzdFJlZjogX3RoaXMubGlzdCxcbiAgICAgICAgc2xpZGVJbmRleDogX3RoaXMuc3RhdGUuY3VycmVudFNsaWRlXG4gICAgICB9KSk7XG4gICAgICBpZiAoIXN0YXRlKSByZXR1cm47XG4gICAgICB2YXIgdHJpZ2dlclNsaWRlSGFuZGxlciA9IHN0YXRlW1widHJpZ2dlclNsaWRlSGFuZGxlclwiXTtcbiAgICAgIGRlbGV0ZSBzdGF0ZVtcInRyaWdnZXJTbGlkZUhhbmRsZXJcIl07XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHN0YXRlKTtcblxuICAgICAgaWYgKHRyaWdnZXJTbGlkZUhhbmRsZXIgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG4gICAgICBfdGhpcy5zbGlkZUhhbmRsZXIodHJpZ2dlclNsaWRlSGFuZGxlcik7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy52ZXJ0aWNhbFN3aXBpbmcpIHtcbiAgICAgICAgX3RoaXMuZW5hYmxlQm9keVNjcm9sbCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInRvdWNoRW5kXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBfdGhpcy5zd2lwZUVuZChlKTtcblxuICAgICAgX3RoaXMuY2xpY2thYmxlID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzbGlja1ByZXZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gdGhpcyBhbmQgZmVsbG93IG1ldGhvZHMgYXJlIHdyYXBwZWQgaW4gc2V0VGltZW91dFxuICAgICAgLy8gdG8gbWFrZSBzdXJlIGluaXRpYWxpemUgc2V0U3RhdGUgaGFzIGhhcHBlbmVkIGJlZm9yZVxuICAgICAgLy8gYW55IG9mIHN1Y2ggbWV0aG9kcyBhcmUgY2FsbGVkXG4gICAgICBfdGhpcy5jYWxsYmFja1RpbWVycy5wdXNoKHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuY2hhbmdlU2xpZGUoe1xuICAgICAgICAgIG1lc3NhZ2U6IFwicHJldmlvdXNcIlxuICAgICAgICB9KTtcbiAgICAgIH0sIDApKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzbGlja05leHRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuY2FsbGJhY2tUaW1lcnMucHVzaChzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICBtZXNzYWdlOiBcIm5leHRcIlxuICAgICAgICB9KTtcbiAgICAgIH0sIDApKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzbGlja0dvVG9cIiwgZnVuY3Rpb24gKHNsaWRlKSB7XG4gICAgICB2YXIgZG9udEFuaW1hdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICAgICAgc2xpZGUgPSBOdW1iZXIoc2xpZGUpO1xuICAgICAgaWYgKGlzTmFOKHNsaWRlKSkgcmV0dXJuIFwiXCI7XG5cbiAgICAgIF90aGlzLmNhbGxiYWNrVGltZXJzLnB1c2goc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgbWVzc2FnZTogXCJpbmRleFwiLFxuICAgICAgICAgIGluZGV4OiBzbGlkZSxcbiAgICAgICAgICBjdXJyZW50U2xpZGU6IF90aGlzLnN0YXRlLmN1cnJlbnRTbGlkZVxuICAgICAgICB9LCBkb250QW5pbWF0ZSk7XG4gICAgICB9LCAwKSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicGxheVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbmV4dEluZGV4O1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMucnRsKSB7XG4gICAgICAgIG5leHRJbmRleCA9IF90aGlzLnN0YXRlLmN1cnJlbnRTbGlkZSAtIF90aGlzLnByb3BzLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCgwLCBfaW5uZXJTbGlkZXJVdGlscy5jYW5Hb05leHQpKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgX3RoaXMucHJvcHMpLCBfdGhpcy5zdGF0ZSkpKSB7XG4gICAgICAgICAgbmV4dEluZGV4ID0gX3RoaXMuc3RhdGUuY3VycmVudFNsaWRlICsgX3RoaXMucHJvcHMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnNsaWRlSGFuZGxlcihuZXh0SW5kZXgpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImF1dG9QbGF5XCIsIGZ1bmN0aW9uIChwbGF5VHlwZSkge1xuICAgICAgaWYgKF90aGlzLmF1dG9wbGF5VGltZXIpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChfdGhpcy5hdXRvcGxheVRpbWVyKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGF1dG9wbGF5aW5nID0gX3RoaXMuc3RhdGUuYXV0b3BsYXlpbmc7XG5cbiAgICAgIGlmIChwbGF5VHlwZSA9PT0gXCJ1cGRhdGVcIikge1xuICAgICAgICBpZiAoYXV0b3BsYXlpbmcgPT09IFwiaG92ZXJlZFwiIHx8IGF1dG9wbGF5aW5nID09PSBcImZvY3VzZWRcIiB8fCBhdXRvcGxheWluZyA9PT0gXCJwYXVzZWRcIikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChwbGF5VHlwZSA9PT0gXCJsZWF2ZVwiKSB7XG4gICAgICAgIGlmIChhdXRvcGxheWluZyA9PT0gXCJwYXVzZWRcIiB8fCBhdXRvcGxheWluZyA9PT0gXCJmb2N1c2VkXCIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocGxheVR5cGUgPT09IFwiYmx1clwiKSB7XG4gICAgICAgIGlmIChhdXRvcGxheWluZyA9PT0gXCJwYXVzZWRcIiB8fCBhdXRvcGxheWluZyA9PT0gXCJob3ZlcmVkXCIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgX3RoaXMuYXV0b3BsYXlUaW1lciA9IHNldEludGVydmFsKF90aGlzLnBsYXksIF90aGlzLnByb3BzLmF1dG9wbGF5U3BlZWQgKyA1MCk7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYXV0b3BsYXlpbmc6IFwicGxheWluZ1wiXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwYXVzZVwiLCBmdW5jdGlvbiAocGF1c2VUeXBlKSB7XG4gICAgICBpZiAoX3RoaXMuYXV0b3BsYXlUaW1lcikge1xuICAgICAgICBjbGVhckludGVydmFsKF90aGlzLmF1dG9wbGF5VGltZXIpO1xuICAgICAgICBfdGhpcy5hdXRvcGxheVRpbWVyID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIGF1dG9wbGF5aW5nID0gX3RoaXMuc3RhdGUuYXV0b3BsYXlpbmc7XG5cbiAgICAgIGlmIChwYXVzZVR5cGUgPT09IFwicGF1c2VkXCIpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGF1dG9wbGF5aW5nOiBcInBhdXNlZFwiXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChwYXVzZVR5cGUgPT09IFwiZm9jdXNlZFwiKSB7XG4gICAgICAgIGlmIChhdXRvcGxheWluZyA9PT0gXCJob3ZlcmVkXCIgfHwgYXV0b3BsYXlpbmcgPT09IFwicGxheWluZ1wiKSB7XG4gICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYXV0b3BsYXlpbmc6IFwiZm9jdXNlZFwiXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHBhdXNlVHlwZSAgaXMgJ2hvdmVyZWQnXG4gICAgICAgIGlmIChhdXRvcGxheWluZyA9PT0gXCJwbGF5aW5nXCIpIHtcbiAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhdXRvcGxheWluZzogXCJob3ZlcmVkXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uRG90c092ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLmF1dG9wbGF5ICYmIF90aGlzLnBhdXNlKFwiaG92ZXJlZFwiKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbkRvdHNMZWF2ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMucHJvcHMuYXV0b3BsYXkgJiYgX3RoaXMuc3RhdGUuYXV0b3BsYXlpbmcgPT09IFwiaG92ZXJlZFwiICYmIF90aGlzLmF1dG9QbGF5KFwibGVhdmVcIik7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25UcmFja092ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLmF1dG9wbGF5ICYmIF90aGlzLnBhdXNlKFwiaG92ZXJlZFwiKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvblRyYWNrTGVhdmVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLmF1dG9wbGF5ICYmIF90aGlzLnN0YXRlLmF1dG9wbGF5aW5nID09PSBcImhvdmVyZWRcIiAmJiBfdGhpcy5hdXRvUGxheShcImxlYXZlXCIpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uU2xpZGVGb2N1c1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMucHJvcHMuYXV0b3BsYXkgJiYgX3RoaXMucGF1c2UoXCJmb2N1c2VkXCIpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uU2xpZGVCbHVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5hdXRvcGxheSAmJiBfdGhpcy5zdGF0ZS5hdXRvcGxheWluZyA9PT0gXCJmb2N1c2VkXCIgJiYgX3RoaXMuYXV0b1BsYXkoXCJibHVyXCIpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInJlbmRlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY2xhc3NOYW1lID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoXCJzbGljay1zbGlkZXJcIiwgX3RoaXMucHJvcHMuY2xhc3NOYW1lLCB7XG4gICAgICAgIFwic2xpY2stdmVydGljYWxcIjogX3RoaXMucHJvcHMudmVydGljYWwsXG4gICAgICAgIFwic2xpY2staW5pdGlhbGl6ZWRcIjogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIHZhciBzcGVjID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBfdGhpcy5wcm9wcyksIF90aGlzLnN0YXRlKTtcblxuICAgICAgdmFyIHRyYWNrUHJvcHMgPSAoMCwgX2lubmVyU2xpZGVyVXRpbHMuZXh0cmFjdE9iamVjdCkoc3BlYywgW1wiZmFkZVwiLCBcImNzc0Vhc2VcIiwgXCJzcGVlZFwiLCBcImluZmluaXRlXCIsIFwiY2VudGVyTW9kZVwiLCBcImZvY3VzT25TZWxlY3RcIiwgXCJjdXJyZW50U2xpZGVcIiwgXCJsYXp5TG9hZFwiLCBcImxhenlMb2FkZWRMaXN0XCIsIFwicnRsXCIsIFwic2xpZGVXaWR0aFwiLCBcInNsaWRlSGVpZ2h0XCIsIFwibGlzdEhlaWdodFwiLCBcInZlcnRpY2FsXCIsIFwic2xpZGVzVG9TaG93XCIsIFwic2xpZGVzVG9TY3JvbGxcIiwgXCJzbGlkZUNvdW50XCIsIFwidHJhY2tTdHlsZVwiLCBcInZhcmlhYmxlV2lkdGhcIiwgXCJ1bnNsaWNrXCIsIFwiY2VudGVyUGFkZGluZ1wiLCBcInRhcmdldFNsaWRlXCIsIFwidXNlQ1NTXCJdKTtcbiAgICAgIHZhciBwYXVzZU9uSG92ZXIgPSBfdGhpcy5wcm9wcy5wYXVzZU9uSG92ZXI7XG4gICAgICB0cmFja1Byb3BzID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB0cmFja1Byb3BzKSwge30sIHtcbiAgICAgICAgb25Nb3VzZUVudGVyOiBwYXVzZU9uSG92ZXIgPyBfdGhpcy5vblRyYWNrT3ZlciA6IG51bGwsXG4gICAgICAgIG9uTW91c2VMZWF2ZTogcGF1c2VPbkhvdmVyID8gX3RoaXMub25UcmFja0xlYXZlIDogbnVsbCxcbiAgICAgICAgb25Nb3VzZU92ZXI6IHBhdXNlT25Ib3ZlciA/IF90aGlzLm9uVHJhY2tPdmVyIDogbnVsbCxcbiAgICAgICAgZm9jdXNPblNlbGVjdDogX3RoaXMucHJvcHMuZm9jdXNPblNlbGVjdCAmJiBfdGhpcy5jbGlja2FibGUgPyBfdGhpcy5zZWxlY3RIYW5kbGVyIDogbnVsbFxuICAgICAgfSk7XG4gICAgICB2YXIgZG90cztcblxuICAgICAgaWYgKF90aGlzLnByb3BzLmRvdHMgPT09IHRydWUgJiYgX3RoaXMuc3RhdGUuc2xpZGVDb3VudCA+PSBfdGhpcy5wcm9wcy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgdmFyIGRvdFByb3BzID0gKDAsIF9pbm5lclNsaWRlclV0aWxzLmV4dHJhY3RPYmplY3QpKHNwZWMsIFtcImRvdHNDbGFzc1wiLCBcInNsaWRlQ291bnRcIiwgXCJzbGlkZXNUb1Nob3dcIiwgXCJjdXJyZW50U2xpZGVcIiwgXCJzbGlkZXNUb1Njcm9sbFwiLCBcImNsaWNrSGFuZGxlclwiLCBcImNoaWxkcmVuXCIsIFwiY3VzdG9tUGFnaW5nXCIsIFwiaW5maW5pdGVcIiwgXCJhcHBlbmREb3RzXCJdKTtcbiAgICAgICAgdmFyIHBhdXNlT25Eb3RzSG92ZXIgPSBfdGhpcy5wcm9wcy5wYXVzZU9uRG90c0hvdmVyO1xuICAgICAgICBkb3RQcm9wcyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgZG90UHJvcHMpLCB7fSwge1xuICAgICAgICAgIGNsaWNrSGFuZGxlcjogX3RoaXMuY2hhbmdlU2xpZGUsXG4gICAgICAgICAgb25Nb3VzZUVudGVyOiBwYXVzZU9uRG90c0hvdmVyID8gX3RoaXMub25Eb3RzTGVhdmUgOiBudWxsLFxuICAgICAgICAgIG9uTW91c2VPdmVyOiBwYXVzZU9uRG90c0hvdmVyID8gX3RoaXMub25Eb3RzT3ZlciA6IG51bGwsXG4gICAgICAgICAgb25Nb3VzZUxlYXZlOiBwYXVzZU9uRG90c0hvdmVyID8gX3RoaXMub25Eb3RzTGVhdmUgOiBudWxsXG4gICAgICAgIH0pO1xuICAgICAgICBkb3RzID0gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChfZG90cy5Eb3RzLCBkb3RQcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBwcmV2QXJyb3csIG5leHRBcnJvdztcbiAgICAgIHZhciBhcnJvd1Byb3BzID0gKDAsIF9pbm5lclNsaWRlclV0aWxzLmV4dHJhY3RPYmplY3QpKHNwZWMsIFtcImluZmluaXRlXCIsIFwiY2VudGVyTW9kZVwiLCBcImN1cnJlbnRTbGlkZVwiLCBcInNsaWRlQ291bnRcIiwgXCJzbGlkZXNUb1Nob3dcIiwgXCJwcmV2QXJyb3dcIiwgXCJuZXh0QXJyb3dcIl0pO1xuICAgICAgYXJyb3dQcm9wcy5jbGlja0hhbmRsZXIgPSBfdGhpcy5jaGFuZ2VTbGlkZTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLmFycm93cykge1xuICAgICAgICBwcmV2QXJyb3cgPSAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KF9hcnJvd3MuUHJldkFycm93LCBhcnJvd1Byb3BzKTtcbiAgICAgICAgbmV4dEFycm93ID0gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChfYXJyb3dzLk5leHRBcnJvdywgYXJyb3dQcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIHZhciB2ZXJ0aWNhbEhlaWdodFN0eWxlID0gbnVsbDtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLnZlcnRpY2FsKSB7XG4gICAgICAgIHZlcnRpY2FsSGVpZ2h0U3R5bGUgPSB7XG4gICAgICAgICAgaGVpZ2h0OiBfdGhpcy5zdGF0ZS5saXN0SGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHZhciBjZW50ZXJQYWRkaW5nU3R5bGUgPSBudWxsO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgIGlmIChfdGhpcy5wcm9wcy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgY2VudGVyUGFkZGluZ1N0eWxlID0ge1xuICAgICAgICAgICAgcGFkZGluZzogXCIwcHggXCIgKyBfdGhpcy5wcm9wcy5jZW50ZXJQYWRkaW5nXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICBjZW50ZXJQYWRkaW5nU3R5bGUgPSB7XG4gICAgICAgICAgICBwYWRkaW5nOiBfdGhpcy5wcm9wcy5jZW50ZXJQYWRkaW5nICsgXCIgMHB4XCJcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBsaXN0U3R5bGUgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZlcnRpY2FsSGVpZ2h0U3R5bGUpLCBjZW50ZXJQYWRkaW5nU3R5bGUpO1xuXG4gICAgICB2YXIgdG91Y2hNb3ZlID0gX3RoaXMucHJvcHMudG91Y2hNb3ZlO1xuICAgICAgdmFyIGxpc3RQcm9wcyA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiBcInNsaWNrLWxpc3RcIixcbiAgICAgICAgc3R5bGU6IGxpc3RTdHlsZSxcbiAgICAgICAgb25DbGljazogX3RoaXMuY2xpY2tIYW5kbGVyLFxuICAgICAgICBvbk1vdXNlRG93bjogdG91Y2hNb3ZlID8gX3RoaXMuc3dpcGVTdGFydCA6IG51bGwsXG4gICAgICAgIG9uTW91c2VNb3ZlOiBfdGhpcy5zdGF0ZS5kcmFnZ2luZyAmJiB0b3VjaE1vdmUgPyBfdGhpcy5zd2lwZU1vdmUgOiBudWxsLFxuICAgICAgICBvbk1vdXNlVXA6IHRvdWNoTW92ZSA/IF90aGlzLnN3aXBlRW5kIDogbnVsbCxcbiAgICAgICAgb25Nb3VzZUxlYXZlOiBfdGhpcy5zdGF0ZS5kcmFnZ2luZyAmJiB0b3VjaE1vdmUgPyBfdGhpcy5zd2lwZUVuZCA6IG51bGwsXG4gICAgICAgIG9uVG91Y2hTdGFydDogdG91Y2hNb3ZlID8gX3RoaXMuc3dpcGVTdGFydCA6IG51bGwsXG4gICAgICAgIG9uVG91Y2hNb3ZlOiBfdGhpcy5zdGF0ZS5kcmFnZ2luZyAmJiB0b3VjaE1vdmUgPyBfdGhpcy5zd2lwZU1vdmUgOiBudWxsLFxuICAgICAgICBvblRvdWNoRW5kOiB0b3VjaE1vdmUgPyBfdGhpcy50b3VjaEVuZCA6IG51bGwsXG4gICAgICAgIG9uVG91Y2hDYW5jZWw6IF90aGlzLnN0YXRlLmRyYWdnaW5nICYmIHRvdWNoTW92ZSA/IF90aGlzLnN3aXBlRW5kIDogbnVsbCxcbiAgICAgICAgb25LZXlEb3duOiBfdGhpcy5wcm9wcy5hY2Nlc3NpYmlsaXR5ID8gX3RoaXMua2V5SGFuZGxlciA6IG51bGxcbiAgICAgIH07XG4gICAgICB2YXIgaW5uZXJTbGlkZXJQcm9wcyA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIGRpcjogXCJsdHJcIixcbiAgICAgICAgc3R5bGU6IF90aGlzLnByb3BzLnN0eWxlXG4gICAgICB9O1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMudW5zbGljaykge1xuICAgICAgICBsaXN0UHJvcHMgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBcInNsaWNrLWxpc3RcIlxuICAgICAgICB9O1xuICAgICAgICBpbm5lclNsaWRlclByb3BzID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIGlubmVyU2xpZGVyUHJvcHMsICFfdGhpcy5wcm9wcy51bnNsaWNrID8gcHJldkFycm93IDogXCJcIiwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgICAgIHJlZjogX3RoaXMubGlzdFJlZkhhbmRsZXJcbiAgICAgIH0sIGxpc3RQcm9wcyksIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoX3RyYWNrLlRyYWNrLCBfZXh0ZW5kcyh7XG4gICAgICAgIHJlZjogX3RoaXMudHJhY2tSZWZIYW5kbGVyXG4gICAgICB9LCB0cmFja1Byb3BzKSwgX3RoaXMucHJvcHMuY2hpbGRyZW4pKSwgIV90aGlzLnByb3BzLnVuc2xpY2sgPyBuZXh0QXJyb3cgOiBcIlwiLCAhX3RoaXMucHJvcHMudW5zbGljayA/IGRvdHMgOiBcIlwiKTtcbiAgICB9KTtcblxuICAgIF90aGlzLmxpc3QgPSBudWxsO1xuICAgIF90aGlzLnRyYWNrID0gbnVsbDtcbiAgICBfdGhpcy5zdGF0ZSA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgX2luaXRpYWxTdGF0ZVtcImRlZmF1bHRcIl0pLCB7fSwge1xuICAgICAgY3VycmVudFNsaWRlOiBfdGhpcy5wcm9wcy5pbml0aWFsU2xpZGUsXG4gICAgICBzbGlkZUNvdW50OiBfcmVhY3RbXCJkZWZhdWx0XCJdLkNoaWxkcmVuLmNvdW50KF90aGlzLnByb3BzLmNoaWxkcmVuKVxuICAgIH0pO1xuICAgIF90aGlzLmNhbGxiYWNrVGltZXJzID0gW107XG4gICAgX3RoaXMuY2xpY2thYmxlID0gdHJ1ZTtcbiAgICBfdGhpcy5kZWJvdW5jZWRSZXNpemUgPSBudWxsO1xuXG4gICAgdmFyIHNzclN0YXRlID0gX3RoaXMuc3NySW5pdCgpO1xuXG4gICAgX3RoaXMuc3RhdGUgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIF90aGlzLnN0YXRlKSwgc3NyU3RhdGUpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhJbm5lclNsaWRlciwgW3tcbiAgICBrZXk6IFwiZGlkUHJvcHNDaGFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlkUHJvcHNDaGFuZ2UocHJldlByb3BzKSB7XG4gICAgICB2YXIgc2V0VHJhY2tTdHlsZSA9IGZhbHNlO1xuXG4gICAgICBmb3IgKHZhciBfaTMgPSAwLCBfT2JqZWN0JGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzKTsgX2kzIDwgX09iamVjdCRrZXlzLmxlbmd0aDsgX2kzKyspIHtcbiAgICAgICAgdmFyIGtleSA9IF9PYmplY3Qka2V5c1tfaTNdO1xuXG4gICAgICAgIGlmICghcHJldlByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBzZXRUcmFja1N0eWxlID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfdHlwZW9mKHByZXZQcm9wc1trZXldKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgcHJldlByb3BzW2tleV0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByZXZQcm9wc1trZXldICE9PSB0aGlzLnByb3BzW2tleV0pIHtcbiAgICAgICAgICBzZXRUcmFja1N0eWxlID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2V0VHJhY2tTdHlsZSB8fCBfcmVhY3RbXCJkZWZhdWx0XCJdLkNoaWxkcmVuLmNvdW50KHRoaXMucHJvcHMuY2hpbGRyZW4pICE9PSBfcmVhY3RbXCJkZWZhdWx0XCJdLkNoaWxkcmVuLmNvdW50KHByZXZQcm9wcy5jaGlsZHJlbik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIElubmVyU2xpZGVyO1xufShfcmVhY3RbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuSW5uZXJTbGlkZXIgPSBJbm5lclNsaWRlcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2lubmVyU2xpZGVyID0gcmVxdWlyZShcIi4vaW5uZXItc2xpZGVyXCIpO1xuXG52YXIgX2pzb24ybXEgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJqc29uMm1xXCIpKTtcblxudmFyIF9kZWZhdWx0UHJvcHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2RlZmF1bHQtcHJvcHNcIikpO1xuXG52YXIgX2lubmVyU2xpZGVyVXRpbHMgPSByZXF1aXJlKFwiLi91dGlscy9pbm5lclNsaWRlclV0aWxzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIGVucXVpcmUgPSAoMCwgX2lubmVyU2xpZGVyVXRpbHMuY2FuVXNlRE9NKSgpICYmIHJlcXVpcmUoXCJlbnF1aXJlLmpzXCIpO1xuXG52YXIgU2xpZGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhTbGlkZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoU2xpZGVyKTtcblxuICBmdW5jdGlvbiBTbGlkZXIocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2xpZGVyKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImlubmVyU2xpZGVyUmVmSGFuZGxlclwiLCBmdW5jdGlvbiAocmVmKSB7XG4gICAgICByZXR1cm4gX3RoaXMuaW5uZXJTbGlkZXIgPSByZWY7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic2xpY2tQcmV2XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5pbm5lclNsaWRlci5zbGlja1ByZXYoKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzbGlja05leHRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLmlubmVyU2xpZGVyLnNsaWNrTmV4dCgpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInNsaWNrR29Ub1wiLCBmdW5jdGlvbiAoc2xpZGUpIHtcbiAgICAgIHZhciBkb250QW5pbWF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gICAgICByZXR1cm4gX3RoaXMuaW5uZXJTbGlkZXIuc2xpY2tHb1RvKHNsaWRlLCBkb250QW5pbWF0ZSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic2xpY2tQYXVzZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMuaW5uZXJTbGlkZXIucGF1c2UoXCJwYXVzZWRcIik7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic2xpY2tQbGF5XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5pbm5lclNsaWRlci5hdXRvUGxheShcInBsYXlcIik7XG4gICAgfSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGJyZWFrcG9pbnQ6IG51bGxcbiAgICB9O1xuICAgIF90aGlzLl9yZXNwb25zaXZlTWVkaWFIYW5kbGVycyA9IFtdO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTbGlkZXIsIFt7XG4gICAga2V5OiBcIm1lZGlhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1lZGlhKHF1ZXJ5LCBoYW5kbGVyKSB7XG4gICAgICAvLyBqYXZhc2NyaXB0IGhhbmRsZXIgZm9yICBjc3MgbWVkaWEgcXVlcnlcbiAgICAgIGVucXVpcmUucmVnaXN0ZXIocXVlcnksIGhhbmRsZXIpO1xuXG4gICAgICB0aGlzLl9yZXNwb25zaXZlTWVkaWFIYW5kbGVycy5wdXNoKHtcbiAgICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgICBoYW5kbGVyOiBoYW5kbGVyXG4gICAgICB9KTtcbiAgICB9IC8vIGhhbmRsZXMgcmVzcG9uc2l2ZSBicmVha3BvaW50c1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgLy8gcGVyZm9ybWFuY2UgbW9uaXRvcmluZ1xuICAgICAgLy9pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy9jb25zdCB7IHdoeURpZFlvdVVwZGF0ZSB9ID0gcmVxdWlyZSgnd2h5LWRpZC15b3UtdXBkYXRlJylcbiAgICAgIC8vd2h5RGlkWW91VXBkYXRlKFJlYWN0KVxuICAgICAgLy99XG4gICAgICBpZiAodGhpcy5wcm9wcy5yZXNwb25zaXZlKSB7XG4gICAgICAgIHZhciBicmVha3BvaW50cyA9IHRoaXMucHJvcHMucmVzcG9uc2l2ZS5tYXAoZnVuY3Rpb24gKGJyZWFrcHQpIHtcbiAgICAgICAgICByZXR1cm4gYnJlYWtwdC5icmVha3BvaW50O1xuICAgICAgICB9KTsgLy8gc29ydCB0aGVtIGluIGluY3JlYXNpbmcgb3JkZXIgb2YgdGhlaXIgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgICAgYnJlYWtwb2ludHMuc29ydChmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICAgIHJldHVybiB4IC0geTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrcG9pbnRzLmZvckVhY2goZnVuY3Rpb24gKGJyZWFrcG9pbnQsIGluZGV4KSB7XG4gICAgICAgICAgLy8gbWVkaWEgcXVlcnkgZm9yIGVhY2ggYnJlYWtwb2ludFxuICAgICAgICAgIHZhciBiUXVlcnk7XG5cbiAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIGJRdWVyeSA9ICgwLCBfanNvbjJtcVtcImRlZmF1bHRcIl0pKHtcbiAgICAgICAgICAgICAgbWluV2lkdGg6IDAsXG4gICAgICAgICAgICAgIG1heFdpZHRoOiBicmVha3BvaW50XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYlF1ZXJ5ID0gKDAsIF9qc29uMm1xW1wiZGVmYXVsdFwiXSkoe1xuICAgICAgICAgICAgICBtaW5XaWR0aDogYnJlYWtwb2ludHNbaW5kZXggLSAxXSArIDEsXG4gICAgICAgICAgICAgIG1heFdpZHRoOiBicmVha3BvaW50XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IC8vIHdoZW4gbm90IHVzaW5nIHNlcnZlciBzaWRlIHJlbmRlcmluZ1xuXG5cbiAgICAgICAgICAoMCwgX2lubmVyU2xpZGVyVXRpbHMuY2FuVXNlRE9NKSgpICYmIF90aGlzMi5tZWRpYShiUXVlcnksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IGJyZWFrcG9pbnRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTsgLy8gUmVnaXN0ZXIgbWVkaWEgcXVlcnkgZm9yIGZ1bGwgc2NyZWVuLiBOZWVkIHRvIHN1cHBvcnQgcmVzaXplIGZyb20gc21hbGwgdG8gbGFyZ2VcbiAgICAgICAgLy8gY29udmVydCBqYXZhc2NyaXB0IG9iamVjdCB0byBtZWRpYSBxdWVyeSBzdHJpbmdcblxuICAgICAgICB2YXIgcXVlcnkgPSAoMCwgX2pzb24ybXFbXCJkZWZhdWx0XCJdKSh7XG4gICAgICAgICAgbWluV2lkdGg6IGJyZWFrcG9pbnRzLnNsaWNlKC0xKVswXVxuICAgICAgICB9KTtcbiAgICAgICAgKDAsIF9pbm5lclNsaWRlclV0aWxzLmNhblVzZURPTSkoKSAmJiB0aGlzLm1lZGlhKHF1ZXJ5LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IG51bGxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5fcmVzcG9uc2l2ZU1lZGlhSGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIGVucXVpcmUudW5yZWdpc3RlcihvYmoucXVlcnksIG9iai5oYW5kbGVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBzZXR0aW5ncztcbiAgICAgIHZhciBuZXdQcm9wcztcblxuICAgICAgaWYgKHRoaXMuc3RhdGUuYnJlYWtwb2ludCkge1xuICAgICAgICBuZXdQcm9wcyA9IHRoaXMucHJvcHMucmVzcG9uc2l2ZS5maWx0ZXIoZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICByZXR1cm4gcmVzcC5icmVha3BvaW50ID09PSBfdGhpczMuc3RhdGUuYnJlYWtwb2ludDtcbiAgICAgICAgfSk7XG4gICAgICAgIHNldHRpbmdzID0gbmV3UHJvcHNbMF0uc2V0dGluZ3MgPT09IFwidW5zbGlja1wiID8gXCJ1bnNsaWNrXCIgOiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgX2RlZmF1bHRQcm9wc1tcImRlZmF1bHRcIl0pLCB0aGlzLnByb3BzKSwgbmV3UHJvcHNbMF0uc2V0dGluZ3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0dGluZ3MgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIF9kZWZhdWx0UHJvcHNbXCJkZWZhdWx0XCJdKSwgdGhpcy5wcm9wcyk7XG4gICAgICB9IC8vIGZvcmNlIHNjcm9sbGluZyBieSBvbmUgaWYgY2VudGVyTW9kZSBpcyBvblxuXG5cbiAgICAgIGlmIChzZXR0aW5ncy5jZW50ZXJNb2RlKSB7XG4gICAgICAgIGlmIChzZXR0aW5ncy5zbGlkZXNUb1Njcm9sbCA+IDEgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwic2xpZGVzVG9TY3JvbGwgc2hvdWxkIGJlIGVxdWFsIHRvIDEgaW4gY2VudGVyTW9kZSwgeW91IGFyZSB1c2luZyBcIi5jb25jYXQoc2V0dGluZ3Muc2xpZGVzVG9TY3JvbGwpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldHRpbmdzLnNsaWRlc1RvU2Nyb2xsID0gMTtcbiAgICAgIH0gLy8gZm9yY2Ugc2hvd2luZyBvbmUgc2xpZGUgYW5kIHNjcm9sbGluZyBieSBvbmUgaWYgdGhlIGZhZGUgbW9kZSBpcyBvblxuXG5cbiAgICAgIGlmIChzZXR0aW5ncy5mYWRlKSB7XG4gICAgICAgIGlmIChzZXR0aW5ncy5zbGlkZXNUb1Nob3cgPiAxICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcInNsaWRlc1RvU2hvdyBzaG91bGQgYmUgZXF1YWwgdG8gMSB3aGVuIGZhZGUgaXMgdHJ1ZSwgeW91J3JlIHVzaW5nIFwiLmNvbmNhdChzZXR0aW5ncy5zbGlkZXNUb1Nob3cpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZXR0aW5ncy5zbGlkZXNUb1Njcm9sbCA+IDEgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwic2xpZGVzVG9TY3JvbGwgc2hvdWxkIGJlIGVxdWFsIHRvIDEgd2hlbiBmYWRlIGlzIHRydWUsIHlvdSdyZSB1c2luZyBcIi5jb25jYXQoc2V0dGluZ3Muc2xpZGVzVG9TY3JvbGwpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldHRpbmdzLnNsaWRlc1RvU2hvdyA9IDE7XG4gICAgICAgIHNldHRpbmdzLnNsaWRlc1RvU2Nyb2xsID0gMTtcbiAgICAgIH0gLy8gbWFrZXMgc3VyZSB0aGF0IGNoaWxkcmVuIGlzIGFuIGFycmF5LCBldmVuIHdoZW4gdGhlcmUgaXMgb25seSAxIGNoaWxkXG5cblxuICAgICAgdmFyIGNoaWxkcmVuID0gX3JlYWN0W1wiZGVmYXVsdFwiXS5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pOyAvLyBDaGlsZHJlbiBtYXkgY29udGFpbiBmYWxzZSBvciBudWxsLCBzbyB3ZSBzaG91bGQgZmlsdGVyIHRoZW1cbiAgICAgIC8vIGNoaWxkcmVuIG1heSBhbHNvIGNvbnRhaW4gc3RyaW5nIGZpbGxlZCB3aXRoIHNwYWNlcyAoaW4gY2VydGFpbiBjYXNlcyB3aGVyZSB3ZSB1c2UganN4IHN0cmluZ3MpXG5cblxuICAgICAgY2hpbGRyZW4gPSBjaGlsZHJlbi5maWx0ZXIoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICByZXR1cm4gISFjaGlsZC50cmltKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISFjaGlsZDtcbiAgICAgIH0pOyAvLyByb3dzIGFuZCBzbGlkZXNQZXJSb3cgbG9naWMgaXMgaGFuZGxlZCBoZXJlXG5cbiAgICAgIGlmIChzZXR0aW5ncy52YXJpYWJsZVdpZHRoICYmIChzZXR0aW5ncy5yb3dzID4gMSB8fCBzZXR0aW5ncy5zbGlkZXNQZXJSb3cgPiAxKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJ2YXJpYWJsZVdpZHRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gY2FzZSBvZiByb3dzID4gMSBvciBzbGlkZXNQZXJSb3cgPiAxXCIpO1xuICAgICAgICBzZXR0aW5ncy52YXJpYWJsZVdpZHRoID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBuZXdDaGlsZHJlbiA9IFtdO1xuICAgICAgdmFyIGN1cnJlbnRXaWR0aCA9IG51bGw7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpICs9IHNldHRpbmdzLnJvd3MgKiBzZXR0aW5ncy5zbGlkZXNQZXJSb3cpIHtcbiAgICAgICAgdmFyIG5ld1NsaWRlID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaiA9IGk7IGogPCBpICsgc2V0dGluZ3Mucm93cyAqIHNldHRpbmdzLnNsaWRlc1BlclJvdzsgaiArPSBzZXR0aW5ncy5zbGlkZXNQZXJSb3cpIHtcbiAgICAgICAgICB2YXIgcm93ID0gW107XG5cbiAgICAgICAgICBmb3IgKHZhciBrID0gajsgayA8IGogKyBzZXR0aW5ncy5zbGlkZXNQZXJSb3c7IGsgKz0gMSkge1xuICAgICAgICAgICAgaWYgKHNldHRpbmdzLnZhcmlhYmxlV2lkdGggJiYgY2hpbGRyZW5ba10ucHJvcHMuc3R5bGUpIHtcbiAgICAgICAgICAgICAgY3VycmVudFdpZHRoID0gY2hpbGRyZW5ba10ucHJvcHMuc3R5bGUud2lkdGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChrID49IGNoaWxkcmVuLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICByb3cucHVzaCggLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY2xvbmVFbGVtZW50KGNoaWxkcmVuW2tdLCB7XG4gICAgICAgICAgICAgIGtleTogMTAwICogaSArIDEwICogaiArIGssXG4gICAgICAgICAgICAgIHRhYkluZGV4OiAtMSxcbiAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogXCJcIi5jb25jYXQoMTAwIC8gc2V0dGluZ3Muc2xpZGVzUGVyUm93LCBcIiVcIiksXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV3U2xpZGUucHVzaCggLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgICBrZXk6IDEwICogaSArIGpcbiAgICAgICAgICB9LCByb3cpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZXR0aW5ncy52YXJpYWJsZVdpZHRoKSB7XG4gICAgICAgICAgbmV3Q2hpbGRyZW4ucHVzaCggLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgICBrZXk6IGksXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICB3aWR0aDogY3VycmVudFdpZHRoXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgbmV3U2xpZGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdDaGlsZHJlbi5wdXNoKCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgIGtleTogaVxuICAgICAgICAgIH0sIG5ld1NsaWRlKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHNldHRpbmdzID09PSBcInVuc2xpY2tcIikge1xuICAgICAgICB2YXIgY2xhc3NOYW1lID0gXCJyZWd1bGFyIHNsaWRlciBcIiArICh0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCBcIlwiKTtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gICAgICAgIH0sIGNoaWxkcmVuKTtcbiAgICAgIH0gZWxzZSBpZiAobmV3Q2hpbGRyZW4ubGVuZ3RoIDw9IHNldHRpbmdzLnNsaWRlc1RvU2hvdykge1xuICAgICAgICBzZXR0aW5ncy51bnNsaWNrID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoX2lubmVyU2xpZGVyLklubmVyU2xpZGVyLCBfZXh0ZW5kcyh7XG4gICAgICAgIHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlLFxuICAgICAgICByZWY6IHRoaXMuaW5uZXJTbGlkZXJSZWZIYW5kbGVyXG4gICAgICB9LCBzZXR0aW5ncyksIG5ld0NoaWxkcmVuKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU2xpZGVyO1xufShfcmVhY3RbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gU2xpZGVyOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5UcmFjayA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfaW5uZXJTbGlkZXJVdGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzL2lubmVyU2xpZGVyVXRpbHNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG4vLyBnaXZlbiBzcGVjaWZpY2F0aW9ucy9wcm9wcyBmb3IgYSBzbGlkZSwgZmV0Y2ggYWxsIHRoZSBjbGFzc2VzIHRoYXQgbmVlZCB0byBiZSBhcHBsaWVkIHRvIHRoZSBzbGlkZVxudmFyIGdldFNsaWRlQ2xhc3NlcyA9IGZ1bmN0aW9uIGdldFNsaWRlQ2xhc3NlcyhzcGVjKSB7XG4gIHZhciBzbGlja0FjdGl2ZSwgc2xpY2tDZW50ZXIsIHNsaWNrQ2xvbmVkO1xuICB2YXIgY2VudGVyT2Zmc2V0LCBpbmRleDtcblxuICBpZiAoc3BlYy5ydGwpIHtcbiAgICBpbmRleCA9IHNwZWMuc2xpZGVDb3VudCAtIDEgLSBzcGVjLmluZGV4O1xuICB9IGVsc2Uge1xuICAgIGluZGV4ID0gc3BlYy5pbmRleDtcbiAgfVxuXG4gIHNsaWNrQ2xvbmVkID0gaW5kZXggPCAwIHx8IGluZGV4ID49IHNwZWMuc2xpZGVDb3VudDtcblxuICBpZiAoc3BlYy5jZW50ZXJNb2RlKSB7XG4gICAgY2VudGVyT2Zmc2V0ID0gTWF0aC5mbG9vcihzcGVjLnNsaWRlc1RvU2hvdyAvIDIpO1xuICAgIHNsaWNrQ2VudGVyID0gKGluZGV4IC0gc3BlYy5jdXJyZW50U2xpZGUpICUgc3BlYy5zbGlkZUNvdW50ID09PSAwO1xuXG4gICAgaWYgKGluZGV4ID4gc3BlYy5jdXJyZW50U2xpZGUgLSBjZW50ZXJPZmZzZXQgLSAxICYmIGluZGV4IDw9IHNwZWMuY3VycmVudFNsaWRlICsgY2VudGVyT2Zmc2V0KSB7XG4gICAgICBzbGlja0FjdGl2ZSA9IHRydWU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHNsaWNrQWN0aXZlID0gc3BlYy5jdXJyZW50U2xpZGUgPD0gaW5kZXggJiYgaW5kZXggPCBzcGVjLmN1cnJlbnRTbGlkZSArIHNwZWMuc2xpZGVzVG9TaG93O1xuICB9XG5cbiAgdmFyIGZvY3VzZWRTbGlkZTtcblxuICBpZiAoc3BlYy50YXJnZXRTbGlkZSA8IDApIHtcbiAgICBmb2N1c2VkU2xpZGUgPSBzcGVjLnRhcmdldFNsaWRlICsgc3BlYy5zbGlkZUNvdW50O1xuICB9IGVsc2UgaWYgKHNwZWMudGFyZ2V0U2xpZGUgPj0gc3BlYy5zbGlkZUNvdW50KSB7XG4gICAgZm9jdXNlZFNsaWRlID0gc3BlYy50YXJnZXRTbGlkZSAtIHNwZWMuc2xpZGVDb3VudDtcbiAgfSBlbHNlIHtcbiAgICBmb2N1c2VkU2xpZGUgPSBzcGVjLnRhcmdldFNsaWRlO1xuICB9XG5cbiAgdmFyIHNsaWNrQ3VycmVudCA9IGluZGV4ID09PSBmb2N1c2VkU2xpZGU7XG4gIHJldHVybiB7XG4gICAgXCJzbGljay1zbGlkZVwiOiB0cnVlLFxuICAgIFwic2xpY2stYWN0aXZlXCI6IHNsaWNrQWN0aXZlLFxuICAgIFwic2xpY2stY2VudGVyXCI6IHNsaWNrQ2VudGVyLFxuICAgIFwic2xpY2stY2xvbmVkXCI6IHNsaWNrQ2xvbmVkLFxuICAgIFwic2xpY2stY3VycmVudFwiOiBzbGlja0N1cnJlbnQgLy8gZHViaW91cyBpbiBjYXNlIG9mIFJUTFxuXG4gIH07XG59O1xuXG52YXIgZ2V0U2xpZGVTdHlsZSA9IGZ1bmN0aW9uIGdldFNsaWRlU3R5bGUoc3BlYykge1xuICB2YXIgc3R5bGUgPSB7fTtcblxuICBpZiAoc3BlYy52YXJpYWJsZVdpZHRoID09PSB1bmRlZmluZWQgfHwgc3BlYy52YXJpYWJsZVdpZHRoID09PSBmYWxzZSkge1xuICAgIHN0eWxlLndpZHRoID0gc3BlYy5zbGlkZVdpZHRoO1xuICB9XG5cbiAgaWYgKHNwZWMuZmFkZSkge1xuICAgIHN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuXG4gICAgaWYgKHNwZWMudmVydGljYWwpIHtcbiAgICAgIHN0eWxlLnRvcCA9IC1zcGVjLmluZGV4ICogcGFyc2VJbnQoc3BlYy5zbGlkZUhlaWdodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmxlZnQgPSAtc3BlYy5pbmRleCAqIHBhcnNlSW50KHNwZWMuc2xpZGVXaWR0aCk7XG4gICAgfVxuXG4gICAgc3R5bGUub3BhY2l0eSA9IHNwZWMuY3VycmVudFNsaWRlID09PSBzcGVjLmluZGV4ID8gMSA6IDA7XG5cbiAgICBpZiAoc3BlYy51c2VDU1MpIHtcbiAgICAgIHN0eWxlLnRyYW5zaXRpb24gPSBcIm9wYWNpdHkgXCIgKyBzcGVjLnNwZWVkICsgXCJtcyBcIiArIHNwZWMuY3NzRWFzZSArIFwiLCBcIiArIFwidmlzaWJpbGl0eSBcIiArIHNwZWMuc3BlZWQgKyBcIm1zIFwiICsgc3BlYy5jc3NFYXNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn07XG5cbnZhciBnZXRLZXkgPSBmdW5jdGlvbiBnZXRLZXkoY2hpbGQsIGZhbGxiYWNrS2V5KSB7XG4gIHJldHVybiBjaGlsZC5rZXkgfHwgZmFsbGJhY2tLZXk7XG59O1xuXG52YXIgcmVuZGVyU2xpZGVzID0gZnVuY3Rpb24gcmVuZGVyU2xpZGVzKHNwZWMpIHtcbiAgdmFyIGtleTtcbiAgdmFyIHNsaWRlcyA9IFtdO1xuICB2YXIgcHJlQ2xvbmVTbGlkZXMgPSBbXTtcbiAgdmFyIHBvc3RDbG9uZVNsaWRlcyA9IFtdO1xuXG4gIHZhciBjaGlsZHJlbkNvdW50ID0gX3JlYWN0W1wiZGVmYXVsdFwiXS5DaGlsZHJlbi5jb3VudChzcGVjLmNoaWxkcmVuKTtcblxuICB2YXIgc3RhcnRJbmRleCA9ICgwLCBfaW5uZXJTbGlkZXJVdGlscy5sYXp5U3RhcnRJbmRleCkoc3BlYyk7XG4gIHZhciBlbmRJbmRleCA9ICgwLCBfaW5uZXJTbGlkZXJVdGlscy5sYXp5RW5kSW5kZXgpKHNwZWMpO1xuXG4gIF9yZWFjdFtcImRlZmF1bHRcIl0uQ2hpbGRyZW4uZm9yRWFjaChzcGVjLmNoaWxkcmVuLCBmdW5jdGlvbiAoZWxlbSwgaW5kZXgpIHtcbiAgICB2YXIgY2hpbGQ7XG4gICAgdmFyIGNoaWxkT25DbGlja09wdGlvbnMgPSB7XG4gICAgICBtZXNzYWdlOiBcImNoaWxkcmVuXCIsXG4gICAgICBpbmRleDogaW5kZXgsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogc3BlYy5zbGlkZXNUb1Njcm9sbCxcbiAgICAgIGN1cnJlbnRTbGlkZTogc3BlYy5jdXJyZW50U2xpZGVcbiAgICB9OyAvLyBpbiBjYXNlIG9mIGxhenlMb2FkLCB3aGV0aGVyIG9yIG5vdCB3ZSB3YW50IHRvIGZldGNoIHRoZSBzbGlkZVxuXG4gICAgaWYgKCFzcGVjLmxhenlMb2FkIHx8IHNwZWMubGF6eUxvYWQgJiYgc3BlYy5sYXp5TG9hZGVkTGlzdC5pbmRleE9mKGluZGV4KSA+PSAwKSB7XG4gICAgICBjaGlsZCA9IGVsZW07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkID0gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsKTtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGRTdHlsZSA9IGdldFNsaWRlU3R5bGUoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzcGVjKSwge30sIHtcbiAgICAgIGluZGV4OiBpbmRleFxuICAgIH0pKTtcbiAgICB2YXIgc2xpZGVDbGFzcyA9IGNoaWxkLnByb3BzLmNsYXNzTmFtZSB8fCBcIlwiO1xuICAgIHZhciBzbGlkZUNsYXNzZXMgPSBnZXRTbGlkZUNsYXNzZXMoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzcGVjKSwge30sIHtcbiAgICAgIGluZGV4OiBpbmRleFxuICAgIH0pKTsgLy8gcHVzaCBhIGNsb25lZCBlbGVtZW50IG9mIHRoZSBkZXNpcmVkIHNsaWRlXG5cbiAgICBzbGlkZXMucHVzaCggLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICBrZXk6IFwib3JpZ2luYWxcIiArIGdldEtleShjaGlsZCwgaW5kZXgpLFxuICAgICAgXCJkYXRhLWluZGV4XCI6IGluZGV4LFxuICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShzbGlkZUNsYXNzZXMsIHNsaWRlQ2xhc3MpLFxuICAgICAgdGFiSW5kZXg6IFwiLTFcIixcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogIXNsaWRlQ2xhc3Nlc1tcInNsaWNrLWFjdGl2ZVwiXSxcbiAgICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICBvdXRsaW5lOiBcIm5vbmVcIlxuICAgICAgfSwgY2hpbGQucHJvcHMuc3R5bGUgfHwge30pLCBjaGlsZFN0eWxlKSxcbiAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICBjaGlsZC5wcm9wcyAmJiBjaGlsZC5wcm9wcy5vbkNsaWNrICYmIGNoaWxkLnByb3BzLm9uQ2xpY2soZSk7XG5cbiAgICAgICAgaWYgKHNwZWMuZm9jdXNPblNlbGVjdCkge1xuICAgICAgICAgIHNwZWMuZm9jdXNPblNlbGVjdChjaGlsZE9uQ2xpY2tPcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pKTsgLy8gaWYgc2xpZGUgbmVlZHMgdG8gYmUgcHJlY2xvbmVkIG9yIHBvc3RjbG9uZWRcblxuICAgIGlmIChzcGVjLmluZmluaXRlICYmIHNwZWMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgIHZhciBwcmVDbG9uZU5vID0gY2hpbGRyZW5Db3VudCAtIGluZGV4O1xuXG4gICAgICBpZiAocHJlQ2xvbmVObyA8PSAoMCwgX2lubmVyU2xpZGVyVXRpbHMuZ2V0UHJlQ2xvbmVzKShzcGVjKSAmJiBjaGlsZHJlbkNvdW50ICE9PSBzcGVjLnNsaWRlc1RvU2hvdykge1xuICAgICAgICBrZXkgPSAtcHJlQ2xvbmVObztcblxuICAgICAgICBpZiAoa2V5ID49IHN0YXJ0SW5kZXgpIHtcbiAgICAgICAgICBjaGlsZCA9IGVsZW07XG4gICAgICAgIH1cblxuICAgICAgICBzbGlkZUNsYXNzZXMgPSBnZXRTbGlkZUNsYXNzZXMoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzcGVjKSwge30sIHtcbiAgICAgICAgICBpbmRleDoga2V5XG4gICAgICAgIH0pKTtcbiAgICAgICAgcHJlQ2xvbmVTbGlkZXMucHVzaCggLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgICAga2V5OiBcInByZWNsb25lZFwiICsgZ2V0S2V5KGNoaWxkLCBrZXkpLFxuICAgICAgICAgIFwiZGF0YS1pbmRleFwiOiBrZXksXG4gICAgICAgICAgdGFiSW5kZXg6IFwiLTFcIixcbiAgICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKHNsaWRlQ2xhc3Nlcywgc2xpZGVDbGFzcyksXG4gICAgICAgICAgXCJhcmlhLWhpZGRlblwiOiAhc2xpZGVDbGFzc2VzW1wic2xpY2stYWN0aXZlXCJdLFxuICAgICAgICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGNoaWxkLnByb3BzLnN0eWxlIHx8IHt9KSwgY2hpbGRTdHlsZSksXG4gICAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgICAgICBjaGlsZC5wcm9wcyAmJiBjaGlsZC5wcm9wcy5vbkNsaWNrICYmIGNoaWxkLnByb3BzLm9uQ2xpY2soZSk7XG5cbiAgICAgICAgICAgIGlmIChzcGVjLmZvY3VzT25TZWxlY3QpIHtcbiAgICAgICAgICAgICAgc3BlYy5mb2N1c09uU2VsZWN0KGNoaWxkT25DbGlja09wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGRyZW5Db3VudCAhPT0gc3BlYy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAga2V5ID0gY2hpbGRyZW5Db3VudCArIGluZGV4O1xuXG4gICAgICAgIGlmIChrZXkgPCBlbmRJbmRleCkge1xuICAgICAgICAgIGNoaWxkID0gZWxlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNsaWRlQ2xhc3NlcyA9IGdldFNsaWRlQ2xhc3Nlcyhfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHNwZWMpLCB7fSwge1xuICAgICAgICAgIGluZGV4OiBrZXlcbiAgICAgICAgfSkpO1xuICAgICAgICBwb3N0Q2xvbmVTbGlkZXMucHVzaCggLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgICAga2V5OiBcInBvc3RjbG9uZWRcIiArIGdldEtleShjaGlsZCwga2V5KSxcbiAgICAgICAgICBcImRhdGEtaW5kZXhcIjoga2V5LFxuICAgICAgICAgIHRhYkluZGV4OiBcIi0xXCIsXG4gICAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShzbGlkZUNsYXNzZXMsIHNsaWRlQ2xhc3MpLFxuICAgICAgICAgIFwiYXJpYS1oaWRkZW5cIjogIXNsaWRlQ2xhc3Nlc1tcInNsaWNrLWFjdGl2ZVwiXSxcbiAgICAgICAgICBzdHlsZTogX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBjaGlsZC5wcm9wcy5zdHlsZSB8fCB7fSksIGNoaWxkU3R5bGUpLFxuICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICAgICAgY2hpbGQucHJvcHMgJiYgY2hpbGQucHJvcHMub25DbGljayAmJiBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO1xuXG4gICAgICAgICAgICBpZiAoc3BlYy5mb2N1c09uU2VsZWN0KSB7XG4gICAgICAgICAgICAgIHNwZWMuZm9jdXNPblNlbGVjdChjaGlsZE9uQ2xpY2tPcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGlmIChzcGVjLnJ0bCkge1xuICAgIHJldHVybiBwcmVDbG9uZVNsaWRlcy5jb25jYXQoc2xpZGVzLCBwb3N0Q2xvbmVTbGlkZXMpLnJldmVyc2UoKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcHJlQ2xvbmVTbGlkZXMuY29uY2F0KHNsaWRlcywgcG9zdENsb25lU2xpZGVzKTtcbiAgfVxufTtcblxudmFyIFRyYWNrID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVHJhY2ssIF9SZWFjdCRQdXJlQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFRyYWNrKTtcblxuICBmdW5jdGlvbiBUcmFjaygpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhY2spO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJub2RlXCIsIG51bGwpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImhhbmRsZVJlZlwiLCBmdW5jdGlvbiAocmVmKSB7XG4gICAgICBfdGhpcy5ub2RlID0gcmVmO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFRyYWNrLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIHNsaWRlcyA9IHJlbmRlclNsaWRlcyh0aGlzLnByb3BzKTtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgb25Nb3VzZUVudGVyID0gX3RoaXMkcHJvcHMub25Nb3VzZUVudGVyLFxuICAgICAgICAgIG9uTW91c2VPdmVyID0gX3RoaXMkcHJvcHMub25Nb3VzZU92ZXIsXG4gICAgICAgICAgb25Nb3VzZUxlYXZlID0gX3RoaXMkcHJvcHMub25Nb3VzZUxlYXZlO1xuICAgICAgdmFyIG1vdXNlRXZlbnRzID0ge1xuICAgICAgICBvbk1vdXNlRW50ZXI6IG9uTW91c2VFbnRlcixcbiAgICAgICAgb25Nb3VzZU92ZXI6IG9uTW91c2VPdmVyLFxuICAgICAgICBvbk1vdXNlTGVhdmU6IG9uTW91c2VMZWF2ZVxuICAgICAgfTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICAgICAgcmVmOiB0aGlzLmhhbmRsZVJlZixcbiAgICAgICAgY2xhc3NOYW1lOiBcInNsaWNrLXRyYWNrXCIsXG4gICAgICAgIHN0eWxlOiB0aGlzLnByb3BzLnRyYWNrU3R5bGVcbiAgICAgIH0sIG1vdXNlRXZlbnRzKSwgc2xpZGVzKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVHJhY2s7XG59KF9yZWFjdFtcImRlZmF1bHRcIl0uUHVyZUNvbXBvbmVudCk7XG5cbmV4cG9ydHMuVHJhY2sgPSBUcmFjazsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2xhbXAgPSBjbGFtcDtcbmV4cG9ydHMuY2FuVXNlRE9NID0gZXhwb3J0cy5zbGlkZXNPbkxlZnQgPSBleHBvcnRzLnNsaWRlc09uUmlnaHQgPSBleHBvcnRzLnNpYmxpbmdEaXJlY3Rpb24gPSBleHBvcnRzLmdldFRvdGFsU2xpZGVzID0gZXhwb3J0cy5nZXRQb3N0Q2xvbmVzID0gZXhwb3J0cy5nZXRQcmVDbG9uZXMgPSBleHBvcnRzLmdldFRyYWNrTGVmdCA9IGV4cG9ydHMuZ2V0VHJhY2tBbmltYXRlQ1NTID0gZXhwb3J0cy5nZXRUcmFja0NTUyA9IGV4cG9ydHMuY2hlY2tTcGVjS2V5cyA9IGV4cG9ydHMuZ2V0U2xpZGVDb3VudCA9IGV4cG9ydHMuY2hlY2tOYXZpZ2FibGUgPSBleHBvcnRzLmdldE5hdmlnYWJsZUluZGV4ZXMgPSBleHBvcnRzLnN3aXBlRW5kID0gZXhwb3J0cy5zd2lwZU1vdmUgPSBleHBvcnRzLnN3aXBlU3RhcnQgPSBleHBvcnRzLmtleUhhbmRsZXIgPSBleHBvcnRzLmNoYW5nZVNsaWRlID0gZXhwb3J0cy5zbGlkZUhhbmRsZXIgPSBleHBvcnRzLmluaXRpYWxpemVkU3RhdGUgPSBleHBvcnRzLmV4dHJhY3RPYmplY3QgPSBleHBvcnRzLmNhbkdvTmV4dCA9IGV4cG9ydHMuZ2V0U3dpcGVEaXJlY3Rpb24gPSBleHBvcnRzLmdldEhlaWdodCA9IGV4cG9ydHMuZ2V0V2lkdGggPSBleHBvcnRzLmxhenlTbGlkZXNPblJpZ2h0ID0gZXhwb3J0cy5sYXp5U2xpZGVzT25MZWZ0ID0gZXhwb3J0cy5sYXp5RW5kSW5kZXggPSBleHBvcnRzLmxhenlTdGFydEluZGV4ID0gZXhwb3J0cy5nZXRSZXF1aXJlZExhenlTbGlkZXMgPSBleHBvcnRzLmdldE9uRGVtYW5kTGF6eVNsaWRlcyA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBjbGFtcChudW1iZXIsIGxvd2VyQm91bmQsIHVwcGVyQm91bmQpIHtcbiAgcmV0dXJuIE1hdGgubWF4KGxvd2VyQm91bmQsIE1hdGgubWluKG51bWJlciwgdXBwZXJCb3VuZCkpO1xufVxuXG52YXIgZ2V0T25EZW1hbmRMYXp5U2xpZGVzID0gZnVuY3Rpb24gZ2V0T25EZW1hbmRMYXp5U2xpZGVzKHNwZWMpIHtcbiAgdmFyIG9uRGVtYW5kU2xpZGVzID0gW107XG4gIHZhciBzdGFydEluZGV4ID0gbGF6eVN0YXJ0SW5kZXgoc3BlYyk7XG4gIHZhciBlbmRJbmRleCA9IGxhenlFbmRJbmRleChzcGVjKTtcblxuICBmb3IgKHZhciBzbGlkZUluZGV4ID0gc3RhcnRJbmRleDsgc2xpZGVJbmRleCA8IGVuZEluZGV4OyBzbGlkZUluZGV4KyspIHtcbiAgICBpZiAoc3BlYy5sYXp5TG9hZGVkTGlzdC5pbmRleE9mKHNsaWRlSW5kZXgpIDwgMCkge1xuICAgICAgb25EZW1hbmRTbGlkZXMucHVzaChzbGlkZUluZGV4KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb25EZW1hbmRTbGlkZXM7XG59OyAvLyByZXR1cm4gbGlzdCBvZiBzbGlkZXMgdGhhdCBuZWVkIHRvIGJlIHByZXNlbnRcblxuXG5leHBvcnRzLmdldE9uRGVtYW5kTGF6eVNsaWRlcyA9IGdldE9uRGVtYW5kTGF6eVNsaWRlcztcblxudmFyIGdldFJlcXVpcmVkTGF6eVNsaWRlcyA9IGZ1bmN0aW9uIGdldFJlcXVpcmVkTGF6eVNsaWRlcyhzcGVjKSB7XG4gIHZhciByZXF1aXJlZFNsaWRlcyA9IFtdO1xuICB2YXIgc3RhcnRJbmRleCA9IGxhenlTdGFydEluZGV4KHNwZWMpO1xuICB2YXIgZW5kSW5kZXggPSBsYXp5RW5kSW5kZXgoc3BlYyk7XG5cbiAgZm9yICh2YXIgc2xpZGVJbmRleCA9IHN0YXJ0SW5kZXg7IHNsaWRlSW5kZXggPCBlbmRJbmRleDsgc2xpZGVJbmRleCsrKSB7XG4gICAgcmVxdWlyZWRTbGlkZXMucHVzaChzbGlkZUluZGV4KTtcbiAgfVxuXG4gIHJldHVybiByZXF1aXJlZFNsaWRlcztcbn07IC8vIHN0YXJ0SW5kZXggdGhhdCBuZWVkcyB0byBiZSBwcmVzZW50XG5cblxuZXhwb3J0cy5nZXRSZXF1aXJlZExhenlTbGlkZXMgPSBnZXRSZXF1aXJlZExhenlTbGlkZXM7XG5cbnZhciBsYXp5U3RhcnRJbmRleCA9IGZ1bmN0aW9uIGxhenlTdGFydEluZGV4KHNwZWMpIHtcbiAgcmV0dXJuIHNwZWMuY3VycmVudFNsaWRlIC0gbGF6eVNsaWRlc09uTGVmdChzcGVjKTtcbn07XG5cbmV4cG9ydHMubGF6eVN0YXJ0SW5kZXggPSBsYXp5U3RhcnRJbmRleDtcblxudmFyIGxhenlFbmRJbmRleCA9IGZ1bmN0aW9uIGxhenlFbmRJbmRleChzcGVjKSB7XG4gIHJldHVybiBzcGVjLmN1cnJlbnRTbGlkZSArIGxhenlTbGlkZXNPblJpZ2h0KHNwZWMpO1xufTtcblxuZXhwb3J0cy5sYXp5RW5kSW5kZXggPSBsYXp5RW5kSW5kZXg7XG5cbnZhciBsYXp5U2xpZGVzT25MZWZ0ID0gZnVuY3Rpb24gbGF6eVNsaWRlc09uTGVmdChzcGVjKSB7XG4gIHJldHVybiBzcGVjLmNlbnRlck1vZGUgPyBNYXRoLmZsb29yKHNwZWMuc2xpZGVzVG9TaG93IC8gMikgKyAocGFyc2VJbnQoc3BlYy5jZW50ZXJQYWRkaW5nKSA+IDAgPyAxIDogMCkgOiAwO1xufTtcblxuZXhwb3J0cy5sYXp5U2xpZGVzT25MZWZ0ID0gbGF6eVNsaWRlc09uTGVmdDtcblxudmFyIGxhenlTbGlkZXNPblJpZ2h0ID0gZnVuY3Rpb24gbGF6eVNsaWRlc09uUmlnaHQoc3BlYykge1xuICByZXR1cm4gc3BlYy5jZW50ZXJNb2RlID8gTWF0aC5mbG9vcigoc3BlYy5zbGlkZXNUb1Nob3cgLSAxKSAvIDIpICsgMSArIChwYXJzZUludChzcGVjLmNlbnRlclBhZGRpbmcpID4gMCA/IDEgOiAwKSA6IHNwZWMuc2xpZGVzVG9TaG93O1xufTsgLy8gZ2V0IHdpZHRoIG9mIGFuIGVsZW1lbnRcblxuXG5leHBvcnRzLmxhenlTbGlkZXNPblJpZ2h0ID0gbGF6eVNsaWRlc09uUmlnaHQ7XG5cbnZhciBnZXRXaWR0aCA9IGZ1bmN0aW9uIGdldFdpZHRoKGVsZW0pIHtcbiAgcmV0dXJuIGVsZW0gJiYgZWxlbS5vZmZzZXRXaWR0aCB8fCAwO1xufTtcblxuZXhwb3J0cy5nZXRXaWR0aCA9IGdldFdpZHRoO1xuXG52YXIgZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gZ2V0SGVpZ2h0KGVsZW0pIHtcbiAgcmV0dXJuIGVsZW0gJiYgZWxlbS5vZmZzZXRIZWlnaHQgfHwgMDtcbn07XG5cbmV4cG9ydHMuZ2V0SGVpZ2h0ID0gZ2V0SGVpZ2h0O1xuXG52YXIgZ2V0U3dpcGVEaXJlY3Rpb24gPSBmdW5jdGlvbiBnZXRTd2lwZURpcmVjdGlvbih0b3VjaE9iamVjdCkge1xuICB2YXIgdmVydGljYWxTd2lwaW5nID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgdmFyIHhEaXN0LCB5RGlzdCwgciwgc3dpcGVBbmdsZTtcbiAgeERpc3QgPSB0b3VjaE9iamVjdC5zdGFydFggLSB0b3VjaE9iamVjdC5jdXJYO1xuICB5RGlzdCA9IHRvdWNoT2JqZWN0LnN0YXJ0WSAtIHRvdWNoT2JqZWN0LmN1clk7XG4gIHIgPSBNYXRoLmF0YW4yKHlEaXN0LCB4RGlzdCk7XG4gIHN3aXBlQW5nbGUgPSBNYXRoLnJvdW5kKHIgKiAxODAgLyBNYXRoLlBJKTtcblxuICBpZiAoc3dpcGVBbmdsZSA8IDApIHtcbiAgICBzd2lwZUFuZ2xlID0gMzYwIC0gTWF0aC5hYnMoc3dpcGVBbmdsZSk7XG4gIH1cblxuICBpZiAoc3dpcGVBbmdsZSA8PSA0NSAmJiBzd2lwZUFuZ2xlID49IDAgfHwgc3dpcGVBbmdsZSA8PSAzNjAgJiYgc3dpcGVBbmdsZSA+PSAzMTUpIHtcbiAgICByZXR1cm4gXCJsZWZ0XCI7XG4gIH1cblxuICBpZiAoc3dpcGVBbmdsZSA+PSAxMzUgJiYgc3dpcGVBbmdsZSA8PSAyMjUpIHtcbiAgICByZXR1cm4gXCJyaWdodFwiO1xuICB9XG5cbiAgaWYgKHZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgIGlmIChzd2lwZUFuZ2xlID49IDM1ICYmIHN3aXBlQW5nbGUgPD0gMTM1KSB7XG4gICAgICByZXR1cm4gXCJ1cFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJkb3duXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFwidmVydGljYWxcIjtcbn07IC8vIHdoZXRoZXIgb3Igbm90IHdlIGNhbiBnbyBuZXh0XG5cblxuZXhwb3J0cy5nZXRTd2lwZURpcmVjdGlvbiA9IGdldFN3aXBlRGlyZWN0aW9uO1xuXG52YXIgY2FuR29OZXh0ID0gZnVuY3Rpb24gY2FuR29OZXh0KHNwZWMpIHtcbiAgdmFyIGNhbkdvID0gdHJ1ZTtcblxuICBpZiAoIXNwZWMuaW5maW5pdGUpIHtcbiAgICBpZiAoc3BlYy5jZW50ZXJNb2RlICYmIHNwZWMuY3VycmVudFNsaWRlID49IHNwZWMuc2xpZGVDb3VudCAtIDEpIHtcbiAgICAgIGNhbkdvID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChzcGVjLnNsaWRlQ291bnQgPD0gc3BlYy5zbGlkZXNUb1Nob3cgfHwgc3BlYy5jdXJyZW50U2xpZGUgPj0gc3BlYy5zbGlkZUNvdW50IC0gc3BlYy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgIGNhbkdvID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNhbkdvO1xufTsgLy8gZ2l2ZW4gYW4gb2JqZWN0IGFuZCBhIGxpc3Qgb2Yga2V5cywgcmV0dXJuIG5ldyBvYmplY3Qgd2l0aCBnaXZlbiBrZXlzXG5cblxuZXhwb3J0cy5jYW5Hb05leHQgPSBjYW5Hb05leHQ7XG5cbnZhciBleHRyYWN0T2JqZWN0ID0gZnVuY3Rpb24gZXh0cmFjdE9iamVjdChzcGVjLCBrZXlzKSB7XG4gIHZhciBuZXdPYmplY3QgPSB7fTtcbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gbmV3T2JqZWN0W2tleV0gPSBzcGVjW2tleV07XG4gIH0pO1xuICByZXR1cm4gbmV3T2JqZWN0O1xufTsgLy8gZ2V0IGluaXRpYWxpemVkIHN0YXRlXG5cblxuZXhwb3J0cy5leHRyYWN0T2JqZWN0ID0gZXh0cmFjdE9iamVjdDtcblxudmFyIGluaXRpYWxpemVkU3RhdGUgPSBmdW5jdGlvbiBpbml0aWFsaXplZFN0YXRlKHNwZWMpIHtcbiAgLy8gc3BlYyBhbHNvIGNvbnRhaW5zIGxpc3RSZWYsIHRyYWNrUmVmXG4gIHZhciBzbGlkZUNvdW50ID0gX3JlYWN0W1wiZGVmYXVsdFwiXS5DaGlsZHJlbi5jb3VudChzcGVjLmNoaWxkcmVuKTtcblxuICB2YXIgbGlzdE5vZGUgPSBzcGVjLmxpc3RSZWY7XG4gIHZhciBsaXN0V2lkdGggPSBNYXRoLmNlaWwoZ2V0V2lkdGgobGlzdE5vZGUpKTtcbiAgdmFyIHRyYWNrTm9kZSA9IHNwZWMudHJhY2tSZWYgJiYgc3BlYy50cmFja1JlZi5ub2RlO1xuICB2YXIgdHJhY2tXaWR0aCA9IE1hdGguY2VpbChnZXRXaWR0aCh0cmFja05vZGUpKTtcbiAgdmFyIHNsaWRlV2lkdGg7XG5cbiAgaWYgKCFzcGVjLnZlcnRpY2FsKSB7XG4gICAgdmFyIGNlbnRlclBhZGRpbmdBZGogPSBzcGVjLmNlbnRlck1vZGUgJiYgcGFyc2VJbnQoc3BlYy5jZW50ZXJQYWRkaW5nKSAqIDI7XG5cbiAgICBpZiAodHlwZW9mIHNwZWMuY2VudGVyUGFkZGluZyA9PT0gXCJzdHJpbmdcIiAmJiBzcGVjLmNlbnRlclBhZGRpbmcuc2xpY2UoLTEpID09PSBcIiVcIikge1xuICAgICAgY2VudGVyUGFkZGluZ0FkaiAqPSBsaXN0V2lkdGggLyAxMDA7XG4gICAgfVxuXG4gICAgc2xpZGVXaWR0aCA9IE1hdGguY2VpbCgobGlzdFdpZHRoIC0gY2VudGVyUGFkZGluZ0FkaikgLyBzcGVjLnNsaWRlc1RvU2hvdyk7XG4gIH0gZWxzZSB7XG4gICAgc2xpZGVXaWR0aCA9IGxpc3RXaWR0aDtcbiAgfVxuXG4gIHZhciBzbGlkZUhlaWdodCA9IGxpc3ROb2RlICYmIGdldEhlaWdodChsaXN0Tm9kZS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1pbmRleD1cIjBcIl0nKSk7XG4gIHZhciBsaXN0SGVpZ2h0ID0gc2xpZGVIZWlnaHQgKiBzcGVjLnNsaWRlc1RvU2hvdztcbiAgdmFyIGN1cnJlbnRTbGlkZSA9IHNwZWMuY3VycmVudFNsaWRlID09PSB1bmRlZmluZWQgPyBzcGVjLmluaXRpYWxTbGlkZSA6IHNwZWMuY3VycmVudFNsaWRlO1xuXG4gIGlmIChzcGVjLnJ0bCAmJiBzcGVjLmN1cnJlbnRTbGlkZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY3VycmVudFNsaWRlID0gc2xpZGVDb3VudCAtIDEgLSBzcGVjLmluaXRpYWxTbGlkZTtcbiAgfVxuXG4gIHZhciBsYXp5TG9hZGVkTGlzdCA9IHNwZWMubGF6eUxvYWRlZExpc3QgfHwgW107XG4gIHZhciBzbGlkZXNUb0xvYWQgPSBnZXRPbkRlbWFuZExhenlTbGlkZXMoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzcGVjKSwge30sIHtcbiAgICBjdXJyZW50U2xpZGU6IGN1cnJlbnRTbGlkZSxcbiAgICBsYXp5TG9hZGVkTGlzdDogbGF6eUxvYWRlZExpc3RcbiAgfSkpO1xuICBsYXp5TG9hZGVkTGlzdC5jb25jYXQoc2xpZGVzVG9Mb2FkKTtcbiAgdmFyIHN0YXRlID0ge1xuICAgIHNsaWRlQ291bnQ6IHNsaWRlQ291bnQsXG4gICAgc2xpZGVXaWR0aDogc2xpZGVXaWR0aCxcbiAgICBsaXN0V2lkdGg6IGxpc3RXaWR0aCxcbiAgICB0cmFja1dpZHRoOiB0cmFja1dpZHRoLFxuICAgIGN1cnJlbnRTbGlkZTogY3VycmVudFNsaWRlLFxuICAgIHNsaWRlSGVpZ2h0OiBzbGlkZUhlaWdodCxcbiAgICBsaXN0SGVpZ2h0OiBsaXN0SGVpZ2h0LFxuICAgIGxhenlMb2FkZWRMaXN0OiBsYXp5TG9hZGVkTGlzdFxuICB9O1xuXG4gIGlmIChzcGVjLmF1dG9wbGF5aW5nID09PSBudWxsICYmIHNwZWMuYXV0b3BsYXkpIHtcbiAgICBzdGF0ZVtcImF1dG9wbGF5aW5nXCJdID0gXCJwbGF5aW5nXCI7XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59O1xuXG5leHBvcnRzLmluaXRpYWxpemVkU3RhdGUgPSBpbml0aWFsaXplZFN0YXRlO1xuXG52YXIgc2xpZGVIYW5kbGVyID0gZnVuY3Rpb24gc2xpZGVIYW5kbGVyKHNwZWMpIHtcbiAgdmFyIHdhaXRGb3JBbmltYXRlID0gc3BlYy53YWl0Rm9yQW5pbWF0ZSxcbiAgICAgIGFuaW1hdGluZyA9IHNwZWMuYW5pbWF0aW5nLFxuICAgICAgZmFkZSA9IHNwZWMuZmFkZSxcbiAgICAgIGluZmluaXRlID0gc3BlYy5pbmZpbml0ZSxcbiAgICAgIGluZGV4ID0gc3BlYy5pbmRleCxcbiAgICAgIHNsaWRlQ291bnQgPSBzcGVjLnNsaWRlQ291bnQsXG4gICAgICBsYXp5TG9hZGVkTGlzdCA9IHNwZWMubGF6eUxvYWRlZExpc3QsXG4gICAgICBsYXp5TG9hZCA9IHNwZWMubGF6eUxvYWQsXG4gICAgICBjdXJyZW50U2xpZGUgPSBzcGVjLmN1cnJlbnRTbGlkZSxcbiAgICAgIGNlbnRlck1vZGUgPSBzcGVjLmNlbnRlck1vZGUsXG4gICAgICBzbGlkZXNUb1Njcm9sbCA9IHNwZWMuc2xpZGVzVG9TY3JvbGwsXG4gICAgICBzbGlkZXNUb1Nob3cgPSBzcGVjLnNsaWRlc1RvU2hvdyxcbiAgICAgIHVzZUNTUyA9IHNwZWMudXNlQ1NTO1xuICBpZiAod2FpdEZvckFuaW1hdGUgJiYgYW5pbWF0aW5nKSByZXR1cm4ge307XG4gIHZhciBhbmltYXRpb25TbGlkZSA9IGluZGV4LFxuICAgICAgZmluYWxTbGlkZSxcbiAgICAgIGFuaW1hdGlvbkxlZnQsXG4gICAgICBmaW5hbExlZnQ7XG4gIHZhciBzdGF0ZSA9IHt9LFxuICAgICAgbmV4dFN0YXRlID0ge307XG4gIHZhciB0YXJnZXRTbGlkZSA9IGluZmluaXRlID8gaW5kZXggOiBjbGFtcChpbmRleCwgMCwgc2xpZGVDb3VudCAtIDEpO1xuXG4gIGlmIChmYWRlKSB7XG4gICAgaWYgKCFpbmZpbml0ZSAmJiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHNsaWRlQ291bnQpKSByZXR1cm4ge307XG5cbiAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICBhbmltYXRpb25TbGlkZSA9IGluZGV4ICsgc2xpZGVDb3VudDtcbiAgICB9IGVsc2UgaWYgKGluZGV4ID49IHNsaWRlQ291bnQpIHtcbiAgICAgIGFuaW1hdGlvblNsaWRlID0gaW5kZXggLSBzbGlkZUNvdW50O1xuICAgIH1cblxuICAgIGlmIChsYXp5TG9hZCAmJiBsYXp5TG9hZGVkTGlzdC5pbmRleE9mKGFuaW1hdGlvblNsaWRlKSA8IDApIHtcbiAgICAgIGxhenlMb2FkZWRMaXN0LnB1c2goYW5pbWF0aW9uU2xpZGUpO1xuICAgIH1cblxuICAgIHN0YXRlID0ge1xuICAgICAgYW5pbWF0aW5nOiB0cnVlLFxuICAgICAgY3VycmVudFNsaWRlOiBhbmltYXRpb25TbGlkZSxcbiAgICAgIGxhenlMb2FkZWRMaXN0OiBsYXp5TG9hZGVkTGlzdCxcbiAgICAgIHRhcmdldFNsaWRlOiBhbmltYXRpb25TbGlkZVxuICAgIH07XG4gICAgbmV4dFN0YXRlID0ge1xuICAgICAgYW5pbWF0aW5nOiBmYWxzZSxcbiAgICAgIHRhcmdldFNsaWRlOiBhbmltYXRpb25TbGlkZVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgZmluYWxTbGlkZSA9IGFuaW1hdGlvblNsaWRlO1xuXG4gICAgaWYgKGFuaW1hdGlvblNsaWRlIDwgMCkge1xuICAgICAgZmluYWxTbGlkZSA9IGFuaW1hdGlvblNsaWRlICsgc2xpZGVDb3VudDtcbiAgICAgIGlmICghaW5maW5pdGUpIGZpbmFsU2xpZGUgPSAwO2Vsc2UgaWYgKHNsaWRlQ291bnQgJSBzbGlkZXNUb1Njcm9sbCAhPT0gMCkgZmluYWxTbGlkZSA9IHNsaWRlQ291bnQgLSBzbGlkZUNvdW50ICUgc2xpZGVzVG9TY3JvbGw7XG4gICAgfSBlbHNlIGlmICghY2FuR29OZXh0KHNwZWMpICYmIGFuaW1hdGlvblNsaWRlID4gY3VycmVudFNsaWRlKSB7XG4gICAgICBhbmltYXRpb25TbGlkZSA9IGZpbmFsU2xpZGUgPSBjdXJyZW50U2xpZGU7XG4gICAgfSBlbHNlIGlmIChjZW50ZXJNb2RlICYmIGFuaW1hdGlvblNsaWRlID49IHNsaWRlQ291bnQpIHtcbiAgICAgIGFuaW1hdGlvblNsaWRlID0gaW5maW5pdGUgPyBzbGlkZUNvdW50IDogc2xpZGVDb3VudCAtIDE7XG4gICAgICBmaW5hbFNsaWRlID0gaW5maW5pdGUgPyAwIDogc2xpZGVDb3VudCAtIDE7XG4gICAgfSBlbHNlIGlmIChhbmltYXRpb25TbGlkZSA+PSBzbGlkZUNvdW50KSB7XG4gICAgICBmaW5hbFNsaWRlID0gYW5pbWF0aW9uU2xpZGUgLSBzbGlkZUNvdW50O1xuICAgICAgaWYgKCFpbmZpbml0ZSkgZmluYWxTbGlkZSA9IHNsaWRlQ291bnQgLSBzbGlkZXNUb1Nob3c7ZWxzZSBpZiAoc2xpZGVDb3VudCAlIHNsaWRlc1RvU2Nyb2xsICE9PSAwKSBmaW5hbFNsaWRlID0gMDtcbiAgICB9XG5cbiAgICBpZiAoIWluZmluaXRlICYmIGFuaW1hdGlvblNsaWRlICsgc2xpZGVzVG9TaG93ID49IHNsaWRlQ291bnQpIHtcbiAgICAgIGZpbmFsU2xpZGUgPSBzbGlkZUNvdW50IC0gc2xpZGVzVG9TaG93O1xuICAgIH1cblxuICAgIGFuaW1hdGlvbkxlZnQgPSBnZXRUcmFja0xlZnQoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzcGVjKSwge30sIHtcbiAgICAgIHNsaWRlSW5kZXg6IGFuaW1hdGlvblNsaWRlXG4gICAgfSkpO1xuICAgIGZpbmFsTGVmdCA9IGdldFRyYWNrTGVmdChfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHNwZWMpLCB7fSwge1xuICAgICAgc2xpZGVJbmRleDogZmluYWxTbGlkZVxuICAgIH0pKTtcblxuICAgIGlmICghaW5maW5pdGUpIHtcbiAgICAgIGlmIChhbmltYXRpb25MZWZ0ID09PSBmaW5hbExlZnQpIGFuaW1hdGlvblNsaWRlID0gZmluYWxTbGlkZTtcbiAgICAgIGFuaW1hdGlvbkxlZnQgPSBmaW5hbExlZnQ7XG4gICAgfVxuXG4gICAgbGF6eUxvYWQgJiYgbGF6eUxvYWRlZExpc3QuY29uY2F0KGdldE9uRGVtYW5kTGF6eVNsaWRlcyhfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHNwZWMpLCB7fSwge1xuICAgICAgY3VycmVudFNsaWRlOiBhbmltYXRpb25TbGlkZVxuICAgIH0pKSk7XG5cbiAgICBpZiAoIXVzZUNTUykge1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIGN1cnJlbnRTbGlkZTogZmluYWxTbGlkZSxcbiAgICAgICAgdHJhY2tTdHlsZTogZ2V0VHJhY2tDU1MoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzcGVjKSwge30sIHtcbiAgICAgICAgICBsZWZ0OiBmaW5hbExlZnRcbiAgICAgICAgfSkpLFxuICAgICAgICBsYXp5TG9hZGVkTGlzdDogbGF6eUxvYWRlZExpc3QsXG4gICAgICAgIHRhcmdldFNsaWRlOiB0YXJnZXRTbGlkZVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIGFuaW1hdGluZzogdHJ1ZSxcbiAgICAgICAgY3VycmVudFNsaWRlOiBmaW5hbFNsaWRlLFxuICAgICAgICB0cmFja1N0eWxlOiBnZXRUcmFja0FuaW1hdGVDU1MoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzcGVjKSwge30sIHtcbiAgICAgICAgICBsZWZ0OiBhbmltYXRpb25MZWZ0XG4gICAgICAgIH0pKSxcbiAgICAgICAgbGF6eUxvYWRlZExpc3Q6IGxhenlMb2FkZWRMaXN0LFxuICAgICAgICB0YXJnZXRTbGlkZTogdGFyZ2V0U2xpZGVcbiAgICAgIH07XG4gICAgICBuZXh0U3RhdGUgPSB7XG4gICAgICAgIGFuaW1hdGluZzogZmFsc2UsXG4gICAgICAgIGN1cnJlbnRTbGlkZTogZmluYWxTbGlkZSxcbiAgICAgICAgdHJhY2tTdHlsZTogZ2V0VHJhY2tDU1MoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzcGVjKSwge30sIHtcbiAgICAgICAgICBsZWZ0OiBmaW5hbExlZnRcbiAgICAgICAgfSkpLFxuICAgICAgICBzd2lwZUxlZnQ6IG51bGwsXG4gICAgICAgIHRhcmdldFNsaWRlOiB0YXJnZXRTbGlkZVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN0YXRlOiBzdGF0ZSxcbiAgICBuZXh0U3RhdGU6IG5leHRTdGF0ZVxuICB9O1xufTtcblxuZXhwb3J0cy5zbGlkZUhhbmRsZXIgPSBzbGlkZUhhbmRsZXI7XG5cbnZhciBjaGFuZ2VTbGlkZSA9IGZ1bmN0aW9uIGNoYW5nZVNsaWRlKHNwZWMsIG9wdGlvbnMpIHtcbiAgdmFyIGluZGV4T2Zmc2V0LCBwcmV2aW91c0ludCwgc2xpZGVPZmZzZXQsIHVuZXZlbk9mZnNldCwgdGFyZ2V0U2xpZGU7XG4gIHZhciBzbGlkZXNUb1Njcm9sbCA9IHNwZWMuc2xpZGVzVG9TY3JvbGwsXG4gICAgICBzbGlkZXNUb1Nob3cgPSBzcGVjLnNsaWRlc1RvU2hvdyxcbiAgICAgIHNsaWRlQ291bnQgPSBzcGVjLnNsaWRlQ291bnQsXG4gICAgICBjdXJyZW50U2xpZGUgPSBzcGVjLmN1cnJlbnRTbGlkZSxcbiAgICAgIHByZXZpb3VzVGFyZ2V0U2xpZGUgPSBzcGVjLnRhcmdldFNsaWRlLFxuICAgICAgbGF6eUxvYWQgPSBzcGVjLmxhenlMb2FkLFxuICAgICAgaW5maW5pdGUgPSBzcGVjLmluZmluaXRlO1xuICB1bmV2ZW5PZmZzZXQgPSBzbGlkZUNvdW50ICUgc2xpZGVzVG9TY3JvbGwgIT09IDA7XG4gIGluZGV4T2Zmc2V0ID0gdW5ldmVuT2Zmc2V0ID8gMCA6IChzbGlkZUNvdW50IC0gY3VycmVudFNsaWRlKSAlIHNsaWRlc1RvU2Nyb2xsO1xuXG4gIGlmIChvcHRpb25zLm1lc3NhZ2UgPT09IFwicHJldmlvdXNcIikge1xuICAgIHNsaWRlT2Zmc2V0ID0gaW5kZXhPZmZzZXQgPT09IDAgPyBzbGlkZXNUb1Njcm9sbCA6IHNsaWRlc1RvU2hvdyAtIGluZGV4T2Zmc2V0O1xuICAgIHRhcmdldFNsaWRlID0gY3VycmVudFNsaWRlIC0gc2xpZGVPZmZzZXQ7XG5cbiAgICBpZiAobGF6eUxvYWQgJiYgIWluZmluaXRlKSB7XG4gICAgICBwcmV2aW91c0ludCA9IGN1cnJlbnRTbGlkZSAtIHNsaWRlT2Zmc2V0O1xuICAgICAgdGFyZ2V0U2xpZGUgPSBwcmV2aW91c0ludCA9PT0gLTEgPyBzbGlkZUNvdW50IC0gMSA6IHByZXZpb3VzSW50O1xuICAgIH1cblxuICAgIGlmICghaW5maW5pdGUpIHtcbiAgICAgIHRhcmdldFNsaWRlID0gcHJldmlvdXNUYXJnZXRTbGlkZSAtIHNsaWRlc1RvU2Nyb2xsO1xuICAgIH1cbiAgfSBlbHNlIGlmIChvcHRpb25zLm1lc3NhZ2UgPT09IFwibmV4dFwiKSB7XG4gICAgc2xpZGVPZmZzZXQgPSBpbmRleE9mZnNldCA9PT0gMCA/IHNsaWRlc1RvU2Nyb2xsIDogaW5kZXhPZmZzZXQ7XG4gICAgdGFyZ2V0U2xpZGUgPSBjdXJyZW50U2xpZGUgKyBzbGlkZU9mZnNldDtcblxuICAgIGlmIChsYXp5TG9hZCAmJiAhaW5maW5pdGUpIHtcbiAgICAgIHRhcmdldFNsaWRlID0gKGN1cnJlbnRTbGlkZSArIHNsaWRlc1RvU2Nyb2xsKSAlIHNsaWRlQ291bnQgKyBpbmRleE9mZnNldDtcbiAgICB9XG5cbiAgICBpZiAoIWluZmluaXRlKSB7XG4gICAgICB0YXJnZXRTbGlkZSA9IHByZXZpb3VzVGFyZ2V0U2xpZGUgKyBzbGlkZXNUb1Njcm9sbDtcbiAgICB9XG4gIH0gZWxzZSBpZiAob3B0aW9ucy5tZXNzYWdlID09PSBcImRvdHNcIikge1xuICAgIC8vIENsaWNrIG9uIGRvdHNcbiAgICB0YXJnZXRTbGlkZSA9IG9wdGlvbnMuaW5kZXggKiBvcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICB9IGVsc2UgaWYgKG9wdGlvbnMubWVzc2FnZSA9PT0gXCJjaGlsZHJlblwiKSB7XG4gICAgLy8gQ2xpY2sgb24gdGhlIHNsaWRlc1xuICAgIHRhcmdldFNsaWRlID0gb3B0aW9ucy5pbmRleDtcblxuICAgIGlmIChpbmZpbml0ZSkge1xuICAgICAgdmFyIGRpcmVjdGlvbiA9IHNpYmxpbmdEaXJlY3Rpb24oX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzcGVjKSwge30sIHtcbiAgICAgICAgdGFyZ2V0U2xpZGU6IHRhcmdldFNsaWRlXG4gICAgICB9KSk7XG5cbiAgICAgIGlmICh0YXJnZXRTbGlkZSA+IG9wdGlvbnMuY3VycmVudFNsaWRlICYmIGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgdGFyZ2V0U2xpZGUgPSB0YXJnZXRTbGlkZSAtIHNsaWRlQ291bnQ7XG4gICAgICB9IGVsc2UgaWYgKHRhcmdldFNsaWRlIDwgb3B0aW9ucy5jdXJyZW50U2xpZGUgJiYgZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgdGFyZ2V0U2xpZGUgPSB0YXJnZXRTbGlkZSArIHNsaWRlQ291bnQ7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKG9wdGlvbnMubWVzc2FnZSA9PT0gXCJpbmRleFwiKSB7XG4gICAgdGFyZ2V0U2xpZGUgPSBOdW1iZXIob3B0aW9ucy5pbmRleCk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0U2xpZGU7XG59O1xuXG5leHBvcnRzLmNoYW5nZVNsaWRlID0gY2hhbmdlU2xpZGU7XG5cbnZhciBrZXlIYW5kbGVyID0gZnVuY3Rpb24ga2V5SGFuZGxlcihlLCBhY2Nlc3NpYmlsaXR5LCBydGwpIHtcbiAgaWYgKGUudGFyZ2V0LnRhZ05hbWUubWF0Y2goXCJURVhUQVJFQXxJTlBVVHxTRUxFQ1RcIikgfHwgIWFjY2Vzc2liaWxpdHkpIHJldHVybiBcIlwiO1xuICBpZiAoZS5rZXlDb2RlID09PSAzNykgcmV0dXJuIHJ0bCA/IFwibmV4dFwiIDogXCJwcmV2aW91c1wiO1xuICBpZiAoZS5rZXlDb2RlID09PSAzOSkgcmV0dXJuIHJ0bCA/IFwicHJldmlvdXNcIiA6IFwibmV4dFwiO1xuICByZXR1cm4gXCJcIjtcbn07XG5cbmV4cG9ydHMua2V5SGFuZGxlciA9IGtleUhhbmRsZXI7XG5cbnZhciBzd2lwZVN0YXJ0ID0gZnVuY3Rpb24gc3dpcGVTdGFydChlLCBzd2lwZSwgZHJhZ2dhYmxlKSB7XG4gIGUudGFyZ2V0LnRhZ05hbWUgPT09IFwiSU1HXCIgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAoIXN3aXBlIHx8ICFkcmFnZ2FibGUgJiYgZS50eXBlLmluZGV4T2YoXCJtb3VzZVwiKSAhPT0gLTEpIHJldHVybiBcIlwiO1xuICByZXR1cm4ge1xuICAgIGRyYWdnaW5nOiB0cnVlLFxuICAgIHRvdWNoT2JqZWN0OiB7XG4gICAgICBzdGFydFg6IGUudG91Y2hlcyA/IGUudG91Y2hlc1swXS5wYWdlWCA6IGUuY2xpZW50WCxcbiAgICAgIHN0YXJ0WTogZS50b3VjaGVzID8gZS50b3VjaGVzWzBdLnBhZ2VZIDogZS5jbGllbnRZLFxuICAgICAgY3VyWDogZS50b3VjaGVzID8gZS50b3VjaGVzWzBdLnBhZ2VYIDogZS5jbGllbnRYLFxuICAgICAgY3VyWTogZS50b3VjaGVzID8gZS50b3VjaGVzWzBdLnBhZ2VZIDogZS5jbGllbnRZXG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0cy5zd2lwZVN0YXJ0ID0gc3dpcGVTdGFydDtcblxudmFyIHN3aXBlTW92ZSA9IGZ1bmN0aW9uIHN3aXBlTW92ZShlLCBzcGVjKSB7XG4gIC8vIHNwZWMgYWxzbyBjb250YWlucywgdHJhY2tSZWYgYW5kIHNsaWRlSW5kZXhcbiAgdmFyIHNjcm9sbGluZyA9IHNwZWMuc2Nyb2xsaW5nLFxuICAgICAgYW5pbWF0aW5nID0gc3BlYy5hbmltYXRpbmcsXG4gICAgICB2ZXJ0aWNhbCA9IHNwZWMudmVydGljYWwsXG4gICAgICBzd2lwZVRvU2xpZGUgPSBzcGVjLnN3aXBlVG9TbGlkZSxcbiAgICAgIHZlcnRpY2FsU3dpcGluZyA9IHNwZWMudmVydGljYWxTd2lwaW5nLFxuICAgICAgcnRsID0gc3BlYy5ydGwsXG4gICAgICBjdXJyZW50U2xpZGUgPSBzcGVjLmN1cnJlbnRTbGlkZSxcbiAgICAgIGVkZ2VGcmljdGlvbiA9IHNwZWMuZWRnZUZyaWN0aW9uLFxuICAgICAgZWRnZURyYWdnZWQgPSBzcGVjLmVkZ2VEcmFnZ2VkLFxuICAgICAgb25FZGdlID0gc3BlYy5vbkVkZ2UsXG4gICAgICBzd2lwZWQgPSBzcGVjLnN3aXBlZCxcbiAgICAgIHN3aXBpbmcgPSBzcGVjLnN3aXBpbmcsXG4gICAgICBzbGlkZUNvdW50ID0gc3BlYy5zbGlkZUNvdW50LFxuICAgICAgc2xpZGVzVG9TY3JvbGwgPSBzcGVjLnNsaWRlc1RvU2Nyb2xsLFxuICAgICAgaW5maW5pdGUgPSBzcGVjLmluZmluaXRlLFxuICAgICAgdG91Y2hPYmplY3QgPSBzcGVjLnRvdWNoT2JqZWN0LFxuICAgICAgc3dpcGVFdmVudCA9IHNwZWMuc3dpcGVFdmVudCxcbiAgICAgIGxpc3RIZWlnaHQgPSBzcGVjLmxpc3RIZWlnaHQsXG4gICAgICBsaXN0V2lkdGggPSBzcGVjLmxpc3RXaWR0aDtcbiAgaWYgKHNjcm9sbGluZykgcmV0dXJuO1xuICBpZiAoYW5pbWF0aW5nKSByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAodmVydGljYWwgJiYgc3dpcGVUb1NsaWRlICYmIHZlcnRpY2FsU3dpcGluZykgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB2YXIgc3dpcGVMZWZ0LFxuICAgICAgc3RhdGUgPSB7fTtcbiAgdmFyIGN1ckxlZnQgPSBnZXRUcmFja0xlZnQoc3BlYyk7XG4gIHRvdWNoT2JqZWN0LmN1clggPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0ucGFnZVggOiBlLmNsaWVudFg7XG4gIHRvdWNoT2JqZWN0LmN1clkgPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0ucGFnZVkgOiBlLmNsaWVudFk7XG4gIHRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID0gTWF0aC5yb3VuZChNYXRoLnNxcnQoTWF0aC5wb3codG91Y2hPYmplY3QuY3VyWCAtIHRvdWNoT2JqZWN0LnN0YXJ0WCwgMikpKTtcbiAgdmFyIHZlcnRpY2FsU3dpcGVMZW5ndGggPSBNYXRoLnJvdW5kKE1hdGguc3FydChNYXRoLnBvdyh0b3VjaE9iamVjdC5jdXJZIC0gdG91Y2hPYmplY3Quc3RhcnRZLCAyKSkpO1xuXG4gIGlmICghdmVydGljYWxTd2lwaW5nICYmICFzd2lwaW5nICYmIHZlcnRpY2FsU3dpcGVMZW5ndGggPiAxMCkge1xuICAgIHJldHVybiB7XG4gICAgICBzY3JvbGxpbmc6IHRydWVcbiAgICB9O1xuICB9XG5cbiAgaWYgKHZlcnRpY2FsU3dpcGluZykgdG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPSB2ZXJ0aWNhbFN3aXBlTGVuZ3RoO1xuICB2YXIgcG9zaXRpb25PZmZzZXQgPSAoIXJ0bCA/IDEgOiAtMSkgKiAodG91Y2hPYmplY3QuY3VyWCA+IHRvdWNoT2JqZWN0LnN0YXJ0WCA/IDEgOiAtMSk7XG4gIGlmICh2ZXJ0aWNhbFN3aXBpbmcpIHBvc2l0aW9uT2Zmc2V0ID0gdG91Y2hPYmplY3QuY3VyWSA+IHRvdWNoT2JqZWN0LnN0YXJ0WSA/IDEgOiAtMTtcbiAgdmFyIGRvdENvdW50ID0gTWF0aC5jZWlsKHNsaWRlQ291bnQgLyBzbGlkZXNUb1Njcm9sbCk7XG4gIHZhciBzd2lwZURpcmVjdGlvbiA9IGdldFN3aXBlRGlyZWN0aW9uKHNwZWMudG91Y2hPYmplY3QsIHZlcnRpY2FsU3dpcGluZyk7XG4gIHZhciB0b3VjaFN3aXBlTGVuZ3RoID0gdG91Y2hPYmplY3Quc3dpcGVMZW5ndGg7XG5cbiAgaWYgKCFpbmZpbml0ZSkge1xuICAgIGlmIChjdXJyZW50U2xpZGUgPT09IDAgJiYgc3dpcGVEaXJlY3Rpb24gPT09IFwicmlnaHRcIiB8fCBjdXJyZW50U2xpZGUgKyAxID49IGRvdENvdW50ICYmIHN3aXBlRGlyZWN0aW9uID09PSBcImxlZnRcIiB8fCAhY2FuR29OZXh0KHNwZWMpICYmIHN3aXBlRGlyZWN0aW9uID09PSBcImxlZnRcIikge1xuICAgICAgdG91Y2hTd2lwZUxlbmd0aCA9IHRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoICogZWRnZUZyaWN0aW9uO1xuXG4gICAgICBpZiAoZWRnZURyYWdnZWQgPT09IGZhbHNlICYmIG9uRWRnZSkge1xuICAgICAgICBvbkVkZ2Uoc3dpcGVEaXJlY3Rpb24pO1xuICAgICAgICBzdGF0ZVtcImVkZ2VEcmFnZ2VkXCJdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoIXN3aXBlZCAmJiBzd2lwZUV2ZW50KSB7XG4gICAgc3dpcGVFdmVudChzd2lwZURpcmVjdGlvbik7XG4gICAgc3RhdGVbXCJzd2lwZWRcIl0gPSB0cnVlO1xuICB9XG5cbiAgaWYgKCF2ZXJ0aWNhbCkge1xuICAgIGlmICghcnRsKSB7XG4gICAgICBzd2lwZUxlZnQgPSBjdXJMZWZ0ICsgdG91Y2hTd2lwZUxlbmd0aCAqIHBvc2l0aW9uT2Zmc2V0O1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZUxlZnQgPSBjdXJMZWZ0IC0gdG91Y2hTd2lwZUxlbmd0aCAqIHBvc2l0aW9uT2Zmc2V0O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzd2lwZUxlZnQgPSBjdXJMZWZ0ICsgdG91Y2hTd2lwZUxlbmd0aCAqIChsaXN0SGVpZ2h0IC8gbGlzdFdpZHRoKSAqIHBvc2l0aW9uT2Zmc2V0O1xuICB9XG5cbiAgaWYgKHZlcnRpY2FsU3dpcGluZykge1xuICAgIHN3aXBlTGVmdCA9IGN1ckxlZnQgKyB0b3VjaFN3aXBlTGVuZ3RoICogcG9zaXRpb25PZmZzZXQ7XG4gIH1cblxuICBzdGF0ZSA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgc3RhdGUpLCB7fSwge1xuICAgIHRvdWNoT2JqZWN0OiB0b3VjaE9iamVjdCxcbiAgICBzd2lwZUxlZnQ6IHN3aXBlTGVmdCxcbiAgICB0cmFja1N0eWxlOiBnZXRUcmFja0NTUyhfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHNwZWMpLCB7fSwge1xuICAgICAgbGVmdDogc3dpcGVMZWZ0XG4gICAgfSkpXG4gIH0pO1xuXG4gIGlmIChNYXRoLmFicyh0b3VjaE9iamVjdC5jdXJYIC0gdG91Y2hPYmplY3Quc3RhcnRYKSA8IE1hdGguYWJzKHRvdWNoT2JqZWN0LmN1clkgLSB0b3VjaE9iamVjdC5zdGFydFkpICogMC44KSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgaWYgKHRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID4gMTApIHtcbiAgICBzdGF0ZVtcInN3aXBpbmdcIl0gPSB0cnVlO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn07XG5cbmV4cG9ydHMuc3dpcGVNb3ZlID0gc3dpcGVNb3ZlO1xuXG52YXIgc3dpcGVFbmQgPSBmdW5jdGlvbiBzd2lwZUVuZChlLCBzcGVjKSB7XG4gIHZhciBkcmFnZ2luZyA9IHNwZWMuZHJhZ2dpbmcsXG4gICAgICBzd2lwZSA9IHNwZWMuc3dpcGUsXG4gICAgICB0b3VjaE9iamVjdCA9IHNwZWMudG91Y2hPYmplY3QsXG4gICAgICBsaXN0V2lkdGggPSBzcGVjLmxpc3RXaWR0aCxcbiAgICAgIHRvdWNoVGhyZXNob2xkID0gc3BlYy50b3VjaFRocmVzaG9sZCxcbiAgICAgIHZlcnRpY2FsU3dpcGluZyA9IHNwZWMudmVydGljYWxTd2lwaW5nLFxuICAgICAgbGlzdEhlaWdodCA9IHNwZWMubGlzdEhlaWdodCxcbiAgICAgIHN3aXBlVG9TbGlkZSA9IHNwZWMuc3dpcGVUb1NsaWRlLFxuICAgICAgc2Nyb2xsaW5nID0gc3BlYy5zY3JvbGxpbmcsXG4gICAgICBvblN3aXBlID0gc3BlYy5vblN3aXBlLFxuICAgICAgdGFyZ2V0U2xpZGUgPSBzcGVjLnRhcmdldFNsaWRlLFxuICAgICAgY3VycmVudFNsaWRlID0gc3BlYy5jdXJyZW50U2xpZGUsXG4gICAgICBpbmZpbml0ZSA9IHNwZWMuaW5maW5pdGU7XG5cbiAgaWYgKCFkcmFnZ2luZykge1xuICAgIGlmIChzd2lwZSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIHZhciBtaW5Td2lwZSA9IHZlcnRpY2FsU3dpcGluZyA/IGxpc3RIZWlnaHQgLyB0b3VjaFRocmVzaG9sZCA6IGxpc3RXaWR0aCAvIHRvdWNoVGhyZXNob2xkO1xuICB2YXIgc3dpcGVEaXJlY3Rpb24gPSBnZXRTd2lwZURpcmVjdGlvbih0b3VjaE9iamVjdCwgdmVydGljYWxTd2lwaW5nKTsgLy8gcmVzZXQgdGhlIHN0YXRlIG9mIHRvdWNoIHJlbGF0ZWQgc3RhdGUgdmFyaWFibGVzLlxuXG4gIHZhciBzdGF0ZSA9IHtcbiAgICBkcmFnZ2luZzogZmFsc2UsXG4gICAgZWRnZURyYWdnZWQ6IGZhbHNlLFxuICAgIHNjcm9sbGluZzogZmFsc2UsXG4gICAgc3dpcGluZzogZmFsc2UsXG4gICAgc3dpcGVkOiBmYWxzZSxcbiAgICBzd2lwZUxlZnQ6IG51bGwsXG4gICAgdG91Y2hPYmplY3Q6IHt9XG4gIH07XG5cbiAgaWYgKHNjcm9sbGluZykge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGlmICghdG91Y2hPYmplY3Quc3dpcGVMZW5ndGgpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBpZiAodG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPiBtaW5Td2lwZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChvblN3aXBlKSB7XG4gICAgICBvblN3aXBlKHN3aXBlRGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICB2YXIgc2xpZGVDb3VudCwgbmV3U2xpZGU7XG4gICAgdmFyIGFjdGl2ZVNsaWRlID0gaW5maW5pdGUgPyBjdXJyZW50U2xpZGUgOiB0YXJnZXRTbGlkZTtcblxuICAgIHN3aXRjaCAoc3dpcGVEaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICBjYXNlIFwidXBcIjpcbiAgICAgICAgbmV3U2xpZGUgPSBhY3RpdmVTbGlkZSArIGdldFNsaWRlQ291bnQoc3BlYyk7XG4gICAgICAgIHNsaWRlQ291bnQgPSBzd2lwZVRvU2xpZGUgPyBjaGVja05hdmlnYWJsZShzcGVjLCBuZXdTbGlkZSkgOiBuZXdTbGlkZTtcbiAgICAgICAgc3RhdGVbXCJjdXJyZW50RGlyZWN0aW9uXCJdID0gMDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgY2FzZSBcImRvd25cIjpcbiAgICAgICAgbmV3U2xpZGUgPSBhY3RpdmVTbGlkZSAtIGdldFNsaWRlQ291bnQoc3BlYyk7XG4gICAgICAgIHNsaWRlQ291bnQgPSBzd2lwZVRvU2xpZGUgPyBjaGVja05hdmlnYWJsZShzcGVjLCBuZXdTbGlkZSkgOiBuZXdTbGlkZTtcbiAgICAgICAgc3RhdGVbXCJjdXJyZW50RGlyZWN0aW9uXCJdID0gMTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHNsaWRlQ291bnQgPSBhY3RpdmVTbGlkZTtcbiAgICB9XG5cbiAgICBzdGF0ZVtcInRyaWdnZXJTbGlkZUhhbmRsZXJcIl0gPSBzbGlkZUNvdW50O1xuICB9IGVsc2Uge1xuICAgIC8vIEFkanVzdCB0aGUgdHJhY2sgYmFjayB0byBpdCdzIG9yaWdpbmFsIHBvc2l0aW9uLlxuICAgIHZhciBjdXJyZW50TGVmdCA9IGdldFRyYWNrTGVmdChzcGVjKTtcbiAgICBzdGF0ZVtcInRyYWNrU3R5bGVcIl0gPSBnZXRUcmFja0FuaW1hdGVDU1MoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzcGVjKSwge30sIHtcbiAgICAgIGxlZnQ6IGN1cnJlbnRMZWZ0XG4gICAgfSkpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufTtcblxuZXhwb3J0cy5zd2lwZUVuZCA9IHN3aXBlRW5kO1xuXG52YXIgZ2V0TmF2aWdhYmxlSW5kZXhlcyA9IGZ1bmN0aW9uIGdldE5hdmlnYWJsZUluZGV4ZXMoc3BlYykge1xuICB2YXIgbWF4ID0gc3BlYy5pbmZpbml0ZSA/IHNwZWMuc2xpZGVDb3VudCAqIDIgOiBzcGVjLnNsaWRlQ291bnQ7XG4gIHZhciBicmVha3BvaW50ID0gc3BlYy5pbmZpbml0ZSA/IHNwZWMuc2xpZGVzVG9TaG93ICogLTEgOiAwO1xuICB2YXIgY291bnRlciA9IHNwZWMuaW5maW5pdGUgPyBzcGVjLnNsaWRlc1RvU2hvdyAqIC0xIDogMDtcbiAgdmFyIGluZGV4ZXMgPSBbXTtcblxuICB3aGlsZSAoYnJlYWtwb2ludCA8IG1heCkge1xuICAgIGluZGV4ZXMucHVzaChicmVha3BvaW50KTtcbiAgICBicmVha3BvaW50ID0gY291bnRlciArIHNwZWMuc2xpZGVzVG9TY3JvbGw7XG4gICAgY291bnRlciArPSBNYXRoLm1pbihzcGVjLnNsaWRlc1RvU2Nyb2xsLCBzcGVjLnNsaWRlc1RvU2hvdyk7XG4gIH1cblxuICByZXR1cm4gaW5kZXhlcztcbn07XG5cbmV4cG9ydHMuZ2V0TmF2aWdhYmxlSW5kZXhlcyA9IGdldE5hdmlnYWJsZUluZGV4ZXM7XG5cbnZhciBjaGVja05hdmlnYWJsZSA9IGZ1bmN0aW9uIGNoZWNrTmF2aWdhYmxlKHNwZWMsIGluZGV4KSB7XG4gIHZhciBuYXZpZ2FibGVzID0gZ2V0TmF2aWdhYmxlSW5kZXhlcyhzcGVjKTtcbiAgdmFyIHByZXZOYXZpZ2FibGUgPSAwO1xuXG4gIGlmIChpbmRleCA+IG5hdmlnYWJsZXNbbmF2aWdhYmxlcy5sZW5ndGggLSAxXSkge1xuICAgIGluZGV4ID0gbmF2aWdhYmxlc1tuYXZpZ2FibGVzLmxlbmd0aCAtIDFdO1xuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIG4gaW4gbmF2aWdhYmxlcykge1xuICAgICAgaWYgKGluZGV4IDwgbmF2aWdhYmxlc1tuXSkge1xuICAgICAgICBpbmRleCA9IHByZXZOYXZpZ2FibGU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBwcmV2TmF2aWdhYmxlID0gbmF2aWdhYmxlc1tuXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5kZXg7XG59O1xuXG5leHBvcnRzLmNoZWNrTmF2aWdhYmxlID0gY2hlY2tOYXZpZ2FibGU7XG5cbnZhciBnZXRTbGlkZUNvdW50ID0gZnVuY3Rpb24gZ2V0U2xpZGVDb3VudChzcGVjKSB7XG4gIHZhciBjZW50ZXJPZmZzZXQgPSBzcGVjLmNlbnRlck1vZGUgPyBzcGVjLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKHNwZWMuc2xpZGVzVG9TaG93IC8gMikgOiAwO1xuXG4gIGlmIChzcGVjLnN3aXBlVG9TbGlkZSkge1xuICAgIHZhciBzd2lwZWRTbGlkZTtcbiAgICB2YXIgc2xpY2tMaXN0ID0gc3BlYy5saXN0UmVmO1xuICAgIHZhciBzbGlkZXMgPSBzbGlja0xpc3QucXVlcnlTZWxlY3RvckFsbChcIi5zbGljay1zbGlkZVwiKTtcbiAgICBBcnJheS5mcm9tKHNsaWRlcykuZXZlcnkoZnVuY3Rpb24gKHNsaWRlKSB7XG4gICAgICBpZiAoIXNwZWMudmVydGljYWwpIHtcbiAgICAgICAgaWYgKHNsaWRlLm9mZnNldExlZnQgLSBjZW50ZXJPZmZzZXQgKyBnZXRXaWR0aChzbGlkZSkgLyAyID4gc3BlYy5zd2lwZUxlZnQgKiAtMSkge1xuICAgICAgICAgIHN3aXBlZFNsaWRlID0gc2xpZGU7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc2xpZGUub2Zmc2V0VG9wICsgZ2V0SGVpZ2h0KHNsaWRlKSAvIDIgPiBzcGVjLnN3aXBlTGVmdCAqIC0xKSB7XG4gICAgICAgICAgc3dpcGVkU2xpZGUgPSBzbGlkZTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG5cbiAgICBpZiAoIXN3aXBlZFNsaWRlKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICB2YXIgY3VycmVudEluZGV4ID0gc3BlYy5ydGwgPT09IHRydWUgPyBzcGVjLnNsaWRlQ291bnQgLSBzcGVjLmN1cnJlbnRTbGlkZSA6IHNwZWMuY3VycmVudFNsaWRlO1xuICAgIHZhciBzbGlkZXNUcmF2ZXJzZWQgPSBNYXRoLmFicyhzd2lwZWRTbGlkZS5kYXRhc2V0LmluZGV4IC0gY3VycmVudEluZGV4KSB8fCAxO1xuICAgIHJldHVybiBzbGlkZXNUcmF2ZXJzZWQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHNwZWMuc2xpZGVzVG9TY3JvbGw7XG4gIH1cbn07XG5cbmV4cG9ydHMuZ2V0U2xpZGVDb3VudCA9IGdldFNsaWRlQ291bnQ7XG5cbnZhciBjaGVja1NwZWNLZXlzID0gZnVuY3Rpb24gY2hlY2tTcGVjS2V5cyhzcGVjLCBrZXlzQXJyYXkpIHtcbiAgcmV0dXJuIGtleXNBcnJheS5yZWR1Y2UoZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgc3BlYy5oYXNPd25Qcm9wZXJ0eShrZXkpO1xuICB9LCB0cnVlKSA/IG51bGwgOiBjb25zb2xlLmVycm9yKFwiS2V5cyBNaXNzaW5nOlwiLCBzcGVjKTtcbn07XG5cbmV4cG9ydHMuY2hlY2tTcGVjS2V5cyA9IGNoZWNrU3BlY0tleXM7XG5cbnZhciBnZXRUcmFja0NTUyA9IGZ1bmN0aW9uIGdldFRyYWNrQ1NTKHNwZWMpIHtcbiAgY2hlY2tTcGVjS2V5cyhzcGVjLCBbXCJsZWZ0XCIsIFwidmFyaWFibGVXaWR0aFwiLCBcInNsaWRlQ291bnRcIiwgXCJzbGlkZXNUb1Nob3dcIiwgXCJzbGlkZVdpZHRoXCJdKTtcbiAgdmFyIHRyYWNrV2lkdGgsIHRyYWNrSGVpZ2h0O1xuICB2YXIgdHJhY2tDaGlsZHJlbiA9IHNwZWMuc2xpZGVDb3VudCArIDIgKiBzcGVjLnNsaWRlc1RvU2hvdztcblxuICBpZiAoIXNwZWMudmVydGljYWwpIHtcbiAgICB0cmFja1dpZHRoID0gZ2V0VG90YWxTbGlkZXMoc3BlYykgKiBzcGVjLnNsaWRlV2lkdGg7XG4gIH0gZWxzZSB7XG4gICAgdHJhY2tIZWlnaHQgPSB0cmFja0NoaWxkcmVuICogc3BlYy5zbGlkZUhlaWdodDtcbiAgfVxuXG4gIHZhciBzdHlsZSA9IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zaXRpb246IFwiXCIsXG4gICAgV2Via2l0VHJhbnNpdGlvbjogXCJcIlxuICB9O1xuXG4gIGlmIChzcGVjLnVzZVRyYW5zZm9ybSkge1xuICAgIHZhciBXZWJraXRUcmFuc2Zvcm0gPSAhc3BlYy52ZXJ0aWNhbCA/IFwidHJhbnNsYXRlM2QoXCIgKyBzcGVjLmxlZnQgKyBcInB4LCAwcHgsIDBweClcIiA6IFwidHJhbnNsYXRlM2QoMHB4LCBcIiArIHNwZWMubGVmdCArIFwicHgsIDBweClcIjtcbiAgICB2YXIgdHJhbnNmb3JtID0gIXNwZWMudmVydGljYWwgPyBcInRyYW5zbGF0ZTNkKFwiICsgc3BlYy5sZWZ0ICsgXCJweCwgMHB4LCAwcHgpXCIgOiBcInRyYW5zbGF0ZTNkKDBweCwgXCIgKyBzcGVjLmxlZnQgKyBcInB4LCAwcHgpXCI7XG4gICAgdmFyIG1zVHJhbnNmb3JtID0gIXNwZWMudmVydGljYWwgPyBcInRyYW5zbGF0ZVgoXCIgKyBzcGVjLmxlZnQgKyBcInB4KVwiIDogXCJ0cmFuc2xhdGVZKFwiICsgc3BlYy5sZWZ0ICsgXCJweClcIjtcbiAgICBzdHlsZSA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgc3R5bGUpLCB7fSwge1xuICAgICAgV2Via2l0VHJhbnNmb3JtOiBXZWJraXRUcmFuc2Zvcm0sXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgIG1zVHJhbnNmb3JtOiBtc1RyYW5zZm9ybVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGlmIChzcGVjLnZlcnRpY2FsKSB7XG4gICAgICBzdHlsZVtcInRvcFwiXSA9IHNwZWMubGVmdDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVbXCJsZWZ0XCJdID0gc3BlYy5sZWZ0O1xuICAgIH1cbiAgfVxuXG4gIGlmIChzcGVjLmZhZGUpIHN0eWxlID0ge1xuICAgIG9wYWNpdHk6IDFcbiAgfTtcbiAgaWYgKHRyYWNrV2lkdGgpIHN0eWxlLndpZHRoID0gdHJhY2tXaWR0aDtcbiAgaWYgKHRyYWNrSGVpZ2h0KSBzdHlsZS5oZWlnaHQgPSB0cmFja0hlaWdodDsgLy8gRmFsbGJhY2sgZm9yIElFOFxuXG4gIGlmICh3aW5kb3cgJiYgIXdpbmRvdy5hZGRFdmVudExpc3RlbmVyICYmIHdpbmRvdy5hdHRhY2hFdmVudCkge1xuICAgIGlmICghc3BlYy52ZXJ0aWNhbCkge1xuICAgICAgc3R5bGUubWFyZ2luTGVmdCA9IHNwZWMubGVmdCArIFwicHhcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUubWFyZ2luVG9wID0gc3BlYy5sZWZ0ICsgXCJweFwiO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn07XG5cbmV4cG9ydHMuZ2V0VHJhY2tDU1MgPSBnZXRUcmFja0NTUztcblxudmFyIGdldFRyYWNrQW5pbWF0ZUNTUyA9IGZ1bmN0aW9uIGdldFRyYWNrQW5pbWF0ZUNTUyhzcGVjKSB7XG4gIGNoZWNrU3BlY0tleXMoc3BlYywgW1wibGVmdFwiLCBcInZhcmlhYmxlV2lkdGhcIiwgXCJzbGlkZUNvdW50XCIsIFwic2xpZGVzVG9TaG93XCIsIFwic2xpZGVXaWR0aFwiLCBcInNwZWVkXCIsIFwiY3NzRWFzZVwiXSk7XG4gIHZhciBzdHlsZSA9IGdldFRyYWNrQ1NTKHNwZWMpOyAvLyB1c2VDU1MgaXMgdHJ1ZSBieSBkZWZhdWx0IHNvIGl0IGNhbiBiZSB1bmRlZmluZWRcblxuICBpZiAoc3BlYy51c2VUcmFuc2Zvcm0pIHtcbiAgICBzdHlsZS5XZWJraXRUcmFuc2l0aW9uID0gXCItd2Via2l0LXRyYW5zZm9ybSBcIiArIHNwZWMuc3BlZWQgKyBcIm1zIFwiICsgc3BlYy5jc3NFYXNlO1xuICAgIHN0eWxlLnRyYW5zaXRpb24gPSBcInRyYW5zZm9ybSBcIiArIHNwZWMuc3BlZWQgKyBcIm1zIFwiICsgc3BlYy5jc3NFYXNlO1xuICB9IGVsc2Uge1xuICAgIGlmIChzcGVjLnZlcnRpY2FsKSB7XG4gICAgICBzdHlsZS50cmFuc2l0aW9uID0gXCJ0b3AgXCIgKyBzcGVjLnNwZWVkICsgXCJtcyBcIiArIHNwZWMuY3NzRWFzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUudHJhbnNpdGlvbiA9IFwibGVmdCBcIiArIHNwZWMuc3BlZWQgKyBcIm1zIFwiICsgc3BlYy5jc3NFYXNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn07XG5cbmV4cG9ydHMuZ2V0VHJhY2tBbmltYXRlQ1NTID0gZ2V0VHJhY2tBbmltYXRlQ1NTO1xuXG52YXIgZ2V0VHJhY2tMZWZ0ID0gZnVuY3Rpb24gZ2V0VHJhY2tMZWZ0KHNwZWMpIHtcbiAgaWYgKHNwZWMudW5zbGljaykge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgY2hlY2tTcGVjS2V5cyhzcGVjLCBbXCJzbGlkZUluZGV4XCIsIFwidHJhY2tSZWZcIiwgXCJpbmZpbml0ZVwiLCBcImNlbnRlck1vZGVcIiwgXCJzbGlkZUNvdW50XCIsIFwic2xpZGVzVG9TaG93XCIsIFwic2xpZGVzVG9TY3JvbGxcIiwgXCJzbGlkZVdpZHRoXCIsIFwibGlzdFdpZHRoXCIsIFwidmFyaWFibGVXaWR0aFwiLCBcInNsaWRlSGVpZ2h0XCJdKTtcbiAgdmFyIHNsaWRlSW5kZXggPSBzcGVjLnNsaWRlSW5kZXgsXG4gICAgICB0cmFja1JlZiA9IHNwZWMudHJhY2tSZWYsXG4gICAgICBpbmZpbml0ZSA9IHNwZWMuaW5maW5pdGUsXG4gICAgICBjZW50ZXJNb2RlID0gc3BlYy5jZW50ZXJNb2RlLFxuICAgICAgc2xpZGVDb3VudCA9IHNwZWMuc2xpZGVDb3VudCxcbiAgICAgIHNsaWRlc1RvU2hvdyA9IHNwZWMuc2xpZGVzVG9TaG93LFxuICAgICAgc2xpZGVzVG9TY3JvbGwgPSBzcGVjLnNsaWRlc1RvU2Nyb2xsLFxuICAgICAgc2xpZGVXaWR0aCA9IHNwZWMuc2xpZGVXaWR0aCxcbiAgICAgIGxpc3RXaWR0aCA9IHNwZWMubGlzdFdpZHRoLFxuICAgICAgdmFyaWFibGVXaWR0aCA9IHNwZWMudmFyaWFibGVXaWR0aCxcbiAgICAgIHNsaWRlSGVpZ2h0ID0gc3BlYy5zbGlkZUhlaWdodCxcbiAgICAgIGZhZGUgPSBzcGVjLmZhZGUsXG4gICAgICB2ZXJ0aWNhbCA9IHNwZWMudmVydGljYWw7XG4gIHZhciBzbGlkZU9mZnNldCA9IDA7XG4gIHZhciB0YXJnZXRMZWZ0O1xuICB2YXIgdGFyZ2V0U2xpZGU7XG4gIHZhciB2ZXJ0aWNhbE9mZnNldCA9IDA7XG5cbiAgaWYgKGZhZGUgfHwgc3BlYy5zbGlkZUNvdW50ID09PSAxKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICB2YXIgc2xpZGVzVG9PZmZzZXQgPSAwO1xuXG4gIGlmIChpbmZpbml0ZSkge1xuICAgIHNsaWRlc1RvT2Zmc2V0ID0gLWdldFByZUNsb25lcyhzcGVjKTsgLy8gYnJpbmcgYWN0aXZlIHNsaWRlIHRvIHRoZSBiZWdpbm5pbmcgb2YgdmlzdWFsIGFyZWFcbiAgICAvLyBpZiBuZXh0IHNjcm9sbCBkb2Vzbid0IGhhdmUgZW5vdWdoIGNoaWxkcmVuLCBqdXN0IHJlYWNoIHRpbGwgdGhlIGVuZCBvZiBvcmlnaW5hbCBzbGlkZXMgaW5zdGVhZCBvZiBzaGlmdGluZyBzbGlkZXNUb1Njcm9sbCBjaGlsZHJlblxuXG4gICAgaWYgKHNsaWRlQ291bnQgJSBzbGlkZXNUb1Njcm9sbCAhPT0gMCAmJiBzbGlkZUluZGV4ICsgc2xpZGVzVG9TY3JvbGwgPiBzbGlkZUNvdW50KSB7XG4gICAgICBzbGlkZXNUb09mZnNldCA9IC0oc2xpZGVJbmRleCA+IHNsaWRlQ291bnQgPyBzbGlkZXNUb1Nob3cgLSAoc2xpZGVJbmRleCAtIHNsaWRlQ291bnQpIDogc2xpZGVDb3VudCAlIHNsaWRlc1RvU2Nyb2xsKTtcbiAgICB9IC8vIHNoaWZ0IGN1cnJlbnQgc2xpZGUgdG8gY2VudGVyIG9mIHRoZSBmcmFtZVxuXG5cbiAgICBpZiAoY2VudGVyTW9kZSkge1xuICAgICAgc2xpZGVzVG9PZmZzZXQgKz0gcGFyc2VJbnQoc2xpZGVzVG9TaG93IC8gMik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChzbGlkZUNvdW50ICUgc2xpZGVzVG9TY3JvbGwgIT09IDAgJiYgc2xpZGVJbmRleCArIHNsaWRlc1RvU2Nyb2xsID4gc2xpZGVDb3VudCkge1xuICAgICAgc2xpZGVzVG9PZmZzZXQgPSBzbGlkZXNUb1Nob3cgLSBzbGlkZUNvdW50ICUgc2xpZGVzVG9TY3JvbGw7XG4gICAgfVxuXG4gICAgaWYgKGNlbnRlck1vZGUpIHtcbiAgICAgIHNsaWRlc1RvT2Zmc2V0ID0gcGFyc2VJbnQoc2xpZGVzVG9TaG93IC8gMik7XG4gICAgfVxuICB9XG5cbiAgc2xpZGVPZmZzZXQgPSBzbGlkZXNUb09mZnNldCAqIHNsaWRlV2lkdGg7XG4gIHZlcnRpY2FsT2Zmc2V0ID0gc2xpZGVzVG9PZmZzZXQgKiBzbGlkZUhlaWdodDtcblxuICBpZiAoIXZlcnRpY2FsKSB7XG4gICAgdGFyZ2V0TGVmdCA9IHNsaWRlSW5kZXggKiBzbGlkZVdpZHRoICogLTEgKyBzbGlkZU9mZnNldDtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXRMZWZ0ID0gc2xpZGVJbmRleCAqIHNsaWRlSGVpZ2h0ICogLTEgKyB2ZXJ0aWNhbE9mZnNldDtcbiAgfVxuXG4gIGlmICh2YXJpYWJsZVdpZHRoID09PSB0cnVlKSB7XG4gICAgdmFyIHRhcmdldFNsaWRlSW5kZXg7XG4gICAgdmFyIHRyYWNrRWxlbSA9IHRyYWNrUmVmICYmIHRyYWNrUmVmLm5vZGU7XG4gICAgdGFyZ2V0U2xpZGVJbmRleCA9IHNsaWRlSW5kZXggKyBnZXRQcmVDbG9uZXMoc3BlYyk7XG4gICAgdGFyZ2V0U2xpZGUgPSB0cmFja0VsZW0gJiYgdHJhY2tFbGVtLmNoaWxkTm9kZXNbdGFyZ2V0U2xpZGVJbmRleF07XG4gICAgdGFyZ2V0TGVmdCA9IHRhcmdldFNsaWRlID8gdGFyZ2V0U2xpZGUub2Zmc2V0TGVmdCAqIC0xIDogMDtcblxuICAgIGlmIChjZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICB0YXJnZXRTbGlkZUluZGV4ID0gaW5maW5pdGUgPyBzbGlkZUluZGV4ICsgZ2V0UHJlQ2xvbmVzKHNwZWMpIDogc2xpZGVJbmRleDtcbiAgICAgIHRhcmdldFNsaWRlID0gdHJhY2tFbGVtICYmIHRyYWNrRWxlbS5jaGlsZHJlblt0YXJnZXRTbGlkZUluZGV4XTtcbiAgICAgIHRhcmdldExlZnQgPSAwO1xuXG4gICAgICBmb3IgKHZhciBzbGlkZSA9IDA7IHNsaWRlIDwgdGFyZ2V0U2xpZGVJbmRleDsgc2xpZGUrKykge1xuICAgICAgICB0YXJnZXRMZWZ0IC09IHRyYWNrRWxlbSAmJiB0cmFja0VsZW0uY2hpbGRyZW5bc2xpZGVdICYmIHRyYWNrRWxlbS5jaGlsZHJlbltzbGlkZV0ub2Zmc2V0V2lkdGg7XG4gICAgICB9XG5cbiAgICAgIHRhcmdldExlZnQgLT0gcGFyc2VJbnQoc3BlYy5jZW50ZXJQYWRkaW5nKTtcbiAgICAgIHRhcmdldExlZnQgKz0gdGFyZ2V0U2xpZGUgJiYgKGxpc3RXaWR0aCAtIHRhcmdldFNsaWRlLm9mZnNldFdpZHRoKSAvIDI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldExlZnQ7XG59O1xuXG5leHBvcnRzLmdldFRyYWNrTGVmdCA9IGdldFRyYWNrTGVmdDtcblxudmFyIGdldFByZUNsb25lcyA9IGZ1bmN0aW9uIGdldFByZUNsb25lcyhzcGVjKSB7XG4gIGlmIChzcGVjLnVuc2xpY2sgfHwgIXNwZWMuaW5maW5pdGUpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGlmIChzcGVjLnZhcmlhYmxlV2lkdGgpIHtcbiAgICByZXR1cm4gc3BlYy5zbGlkZUNvdW50O1xuICB9XG5cbiAgcmV0dXJuIHNwZWMuc2xpZGVzVG9TaG93ICsgKHNwZWMuY2VudGVyTW9kZSA/IDEgOiAwKTtcbn07XG5cbmV4cG9ydHMuZ2V0UHJlQ2xvbmVzID0gZ2V0UHJlQ2xvbmVzO1xuXG52YXIgZ2V0UG9zdENsb25lcyA9IGZ1bmN0aW9uIGdldFBvc3RDbG9uZXMoc3BlYykge1xuICBpZiAoc3BlYy51bnNsaWNrIHx8ICFzcGVjLmluZmluaXRlKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICByZXR1cm4gc3BlYy5zbGlkZUNvdW50O1xufTtcblxuZXhwb3J0cy5nZXRQb3N0Q2xvbmVzID0gZ2V0UG9zdENsb25lcztcblxudmFyIGdldFRvdGFsU2xpZGVzID0gZnVuY3Rpb24gZ2V0VG90YWxTbGlkZXMoc3BlYykge1xuICByZXR1cm4gc3BlYy5zbGlkZUNvdW50ID09PSAxID8gMSA6IGdldFByZUNsb25lcyhzcGVjKSArIHNwZWMuc2xpZGVDb3VudCArIGdldFBvc3RDbG9uZXMoc3BlYyk7XG59O1xuXG5leHBvcnRzLmdldFRvdGFsU2xpZGVzID0gZ2V0VG90YWxTbGlkZXM7XG5cbnZhciBzaWJsaW5nRGlyZWN0aW9uID0gZnVuY3Rpb24gc2libGluZ0RpcmVjdGlvbihzcGVjKSB7XG4gIGlmIChzcGVjLnRhcmdldFNsaWRlID4gc3BlYy5jdXJyZW50U2xpZGUpIHtcbiAgICBpZiAoc3BlYy50YXJnZXRTbGlkZSA+IHNwZWMuY3VycmVudFNsaWRlICsgc2xpZGVzT25SaWdodChzcGVjKSkge1xuICAgICAgcmV0dXJuIFwibGVmdFwiO1xuICAgIH1cblxuICAgIHJldHVybiBcInJpZ2h0XCI7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHNwZWMudGFyZ2V0U2xpZGUgPCBzcGVjLmN1cnJlbnRTbGlkZSAtIHNsaWRlc09uTGVmdChzcGVjKSkge1xuICAgICAgcmV0dXJuIFwicmlnaHRcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJsZWZ0XCI7XG4gIH1cbn07XG5cbmV4cG9ydHMuc2libGluZ0RpcmVjdGlvbiA9IHNpYmxpbmdEaXJlY3Rpb247XG5cbnZhciBzbGlkZXNPblJpZ2h0ID0gZnVuY3Rpb24gc2xpZGVzT25SaWdodChfcmVmKSB7XG4gIHZhciBzbGlkZXNUb1Nob3cgPSBfcmVmLnNsaWRlc1RvU2hvdyxcbiAgICAgIGNlbnRlck1vZGUgPSBfcmVmLmNlbnRlck1vZGUsXG4gICAgICBydGwgPSBfcmVmLnJ0bCxcbiAgICAgIGNlbnRlclBhZGRpbmcgPSBfcmVmLmNlbnRlclBhZGRpbmc7XG5cbiAgLy8gcmV0dXJucyBubyBvZiBzbGlkZXMgb24gdGhlIHJpZ2h0IG9mIGFjdGl2ZSBzbGlkZVxuICBpZiAoY2VudGVyTW9kZSkge1xuICAgIHZhciByaWdodCA9IChzbGlkZXNUb1Nob3cgLSAxKSAvIDIgKyAxO1xuICAgIGlmIChwYXJzZUludChjZW50ZXJQYWRkaW5nKSA+IDApIHJpZ2h0ICs9IDE7XG4gICAgaWYgKHJ0bCAmJiBzbGlkZXNUb1Nob3cgJSAyID09PSAwKSByaWdodCArPSAxO1xuICAgIHJldHVybiByaWdodDtcbiAgfVxuXG4gIGlmIChydGwpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHJldHVybiBzbGlkZXNUb1Nob3cgLSAxO1xufTtcblxuZXhwb3J0cy5zbGlkZXNPblJpZ2h0ID0gc2xpZGVzT25SaWdodDtcblxudmFyIHNsaWRlc09uTGVmdCA9IGZ1bmN0aW9uIHNsaWRlc09uTGVmdChfcmVmMikge1xuICB2YXIgc2xpZGVzVG9TaG93ID0gX3JlZjIuc2xpZGVzVG9TaG93LFxuICAgICAgY2VudGVyTW9kZSA9IF9yZWYyLmNlbnRlck1vZGUsXG4gICAgICBydGwgPSBfcmVmMi5ydGwsXG4gICAgICBjZW50ZXJQYWRkaW5nID0gX3JlZjIuY2VudGVyUGFkZGluZztcblxuICAvLyByZXR1cm5zIG5vIG9mIHNsaWRlcyBvbiB0aGUgbGVmdCBvZiBhY3RpdmUgc2xpZGVcbiAgaWYgKGNlbnRlck1vZGUpIHtcbiAgICB2YXIgbGVmdCA9IChzbGlkZXNUb1Nob3cgLSAxKSAvIDIgKyAxO1xuICAgIGlmIChwYXJzZUludChjZW50ZXJQYWRkaW5nKSA+IDApIGxlZnQgKz0gMTtcbiAgICBpZiAoIXJ0bCAmJiBzbGlkZXNUb1Nob3cgJSAyID09PSAwKSBsZWZ0ICs9IDE7XG4gICAgcmV0dXJuIGxlZnQ7XG4gIH1cblxuICBpZiAocnRsKSB7XG4gICAgcmV0dXJuIHNsaWRlc1RvU2hvdyAtIDE7XG4gIH1cblxuICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydHMuc2xpZGVzT25MZWZ0ID0gc2xpZGVzT25MZWZ0O1xuXG52YXIgY2FuVXNlRE9NID0gZnVuY3Rpb24gY2FuVXNlRE9NKCkge1xuICByZXR1cm4gISEodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xufTtcblxuZXhwb3J0cy5jYW5Vc2VET00gPSBjYW5Vc2VET007IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgZm9yd2FyZFJlZiwgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZUltcGVyYXRpdmVIYW5kbGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGlzID0ge1xuICBhcnI6IEFycmF5LmlzQXJyYXksXG4gIG9iajogYSA9PiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSkgPT09ICdbb2JqZWN0IE9iamVjdF0nLFxuICBmdW46IGEgPT4gdHlwZW9mIGEgPT09ICdmdW5jdGlvbicsXG4gIHN0cjogYSA9PiB0eXBlb2YgYSA9PT0gJ3N0cmluZycsXG4gIG51bTogYSA9PiB0eXBlb2YgYSA9PT0gJ251bWJlcicsXG4gIHVuZDogYSA9PiBhID09PSB2b2lkIDAsXG4gIG51bDogYSA9PiBhID09PSBudWxsLFxuICBzZXQ6IGEgPT4gYSBpbnN0YW5jZW9mIFNldCxcbiAgbWFwOiBhID0+IGEgaW5zdGFuY2VvZiBNYXAsXG5cbiAgZXF1KGEsIGIpIHtcbiAgICBpZiAodHlwZW9mIGEgIT09IHR5cGVvZiBiKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGlzLnN0cihhKSB8fCBpcy5udW0oYSkpIHJldHVybiBhID09PSBiO1xuICAgIGlmIChpcy5vYmooYSkgJiYgaXMub2JqKGIpICYmIE9iamVjdC5rZXlzKGEpLmxlbmd0aCArIE9iamVjdC5rZXlzKGIpLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHRydWU7XG4gICAgbGV0IGk7XG5cbiAgICBmb3IgKGkgaW4gYSkgaWYgKCEoaSBpbiBiKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yIChpIGluIGIpIGlmIChhW2ldICE9PSBiW2ldKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gaXMudW5kKGkpID8gYSA9PT0gYiA6IHRydWU7XG4gIH1cblxufTtcbmZ1bmN0aW9uIG1lcmdlKHRhcmdldCwgbG93ZXJjYXNlKSB7XG4gIGlmIChsb3dlcmNhc2UgPT09IHZvaWQgMCkge1xuICAgIGxvd2VyY2FzZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0ID0+IChpcy5hcnIob2JqZWN0KSA/IG9iamVjdCA6IE9iamVjdC5rZXlzKG9iamVjdCkpLnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qga2V5ID0gbG93ZXJjYXNlID8gZWxlbWVudFswXS50b0xvd2VyQ2FzZSgpICsgZWxlbWVudC5zdWJzdHJpbmcoMSkgOiBlbGVtZW50O1xuICAgIGFjY1trZXldID0gdGFyZ2V0KGtleSk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwgdGFyZ2V0KTtcbn1cbmZ1bmN0aW9uIHVzZUZvcmNlVXBkYXRlKCkge1xuICBjb25zdCBfdXNlU3RhdGUgPSB1c2VTdGF0ZShmYWxzZSksXG4gICAgICAgIGYgPSBfdXNlU3RhdGVbMV07XG5cbiAgY29uc3QgZm9yY2VVcGRhdGUgPSB1c2VDYWxsYmFjaygoKSA9PiBmKHYgPT4gIXYpLCBbXSk7XG4gIHJldHVybiBmb3JjZVVwZGF0ZTtcbn1cbmZ1bmN0aW9uIHdpdGhEZWZhdWx0KHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcbiAgcmV0dXJuIGlzLnVuZCh2YWx1ZSkgfHwgaXMubnVsKHZhbHVlKSA/IGRlZmF1bHRWYWx1ZSA6IHZhbHVlO1xufVxuZnVuY3Rpb24gdG9BcnJheShhKSB7XG4gIHJldHVybiAhaXMudW5kKGEpID8gaXMuYXJyKGEpID8gYSA6IFthXSA6IFtdO1xufVxuZnVuY3Rpb24gY2FsbFByb3Aob2JqKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBpcy5mdW4ob2JqKSA/IG9iaiguLi5hcmdzKSA6IG9iajtcbn1cblxuZnVuY3Rpb24gZ2V0Rm9yd2FyZFByb3BzKHByb3BzKSB7XG4gIGNvbnN0IHRvID0gcHJvcHMudG8sXG4gICAgICAgIGZyb20gPSBwcm9wcy5mcm9tLFxuICAgICAgICBjb25maWcgPSBwcm9wcy5jb25maWcsXG4gICAgICAgIG9uU3RhcnQgPSBwcm9wcy5vblN0YXJ0LFxuICAgICAgICBvblJlc3QgPSBwcm9wcy5vblJlc3QsXG4gICAgICAgIG9uRnJhbWUgPSBwcm9wcy5vbkZyYW1lLFxuICAgICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgICByZXNldCA9IHByb3BzLnJlc2V0LFxuICAgICAgICByZXZlcnNlID0gcHJvcHMucmV2ZXJzZSxcbiAgICAgICAgZm9yY2UgPSBwcm9wcy5mb3JjZSxcbiAgICAgICAgaW1tZWRpYXRlID0gcHJvcHMuaW1tZWRpYXRlLFxuICAgICAgICBkZWxheSA9IHByb3BzLmRlbGF5LFxuICAgICAgICBhdHRhY2ggPSBwcm9wcy5hdHRhY2gsXG4gICAgICAgIGRlc3Ryb3llZCA9IHByb3BzLmRlc3Ryb3llZCxcbiAgICAgICAgaW50ZXJwb2xhdGVUbyA9IHByb3BzLmludGVycG9sYXRlVG8sXG4gICAgICAgIHJlZiA9IHByb3BzLnJlZixcbiAgICAgICAgbGF6eSA9IHByb3BzLmxhenksXG4gICAgICAgIGZvcndhcmQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgW1widG9cIiwgXCJmcm9tXCIsIFwiY29uZmlnXCIsIFwib25TdGFydFwiLCBcIm9uUmVzdFwiLCBcIm9uRnJhbWVcIiwgXCJjaGlsZHJlblwiLCBcInJlc2V0XCIsIFwicmV2ZXJzZVwiLCBcImZvcmNlXCIsIFwiaW1tZWRpYXRlXCIsIFwiZGVsYXlcIiwgXCJhdHRhY2hcIiwgXCJkZXN0cm95ZWRcIiwgXCJpbnRlcnBvbGF0ZVRvXCIsIFwicmVmXCIsIFwibGF6eVwiXSk7XG5cbiAgcmV0dXJuIGZvcndhcmQ7XG59XG5cbmZ1bmN0aW9uIGludGVycG9sYXRlVG8ocHJvcHMpIHtcbiAgY29uc3QgZm9yd2FyZCA9IGdldEZvcndhcmRQcm9wcyhwcm9wcyk7XG4gIGlmIChpcy51bmQoZm9yd2FyZCkpIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgdG86IGZvcndhcmRcbiAgfSwgcHJvcHMpO1xuICBjb25zdCByZXN0ID0gT2JqZWN0LmtleXMocHJvcHMpLnJlZHVjZSgoYSwgaykgPT4gIWlzLnVuZChmb3J3YXJkW2tdKSA/IGEgOiBfZXh0ZW5kcyh7fSwgYSwge1xuICAgIFtrXTogcHJvcHNba11cbiAgfSksIHt9KTtcbiAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICB0bzogZm9yd2FyZFxuICB9LCByZXN0KTtcbn1cbmZ1bmN0aW9uIGhhbmRsZVJlZihyZWYsIGZvcndhcmQpIHtcbiAgaWYgKGZvcndhcmQpIHtcbiAgICAvLyBJZiBpdCdzIGEgZnVuY3Rpb24sIGFzc3VtZSBpdCdzIGEgcmVmIGNhbGxiYWNrXG4gICAgaWYgKGlzLmZ1bihmb3J3YXJkKSkgZm9yd2FyZChyZWYpO2Vsc2UgaWYgKGlzLm9iaihmb3J3YXJkKSkge1xuICAgICAgZm9yd2FyZC5jdXJyZW50ID0gcmVmO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWY7XG59XG5cbmNsYXNzIEFuaW1hdGVkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYXlsb2FkID0gdm9pZCAwO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgfVxuXG4gIGdldEFuaW1hdGVkVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoKTtcbiAgfVxuXG4gIGdldFBheWxvYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF5bG9hZCB8fCB0aGlzO1xuICB9XG5cbiAgYXR0YWNoKCkge31cblxuICBkZXRhY2goKSB7fVxuXG4gIGdldENoaWxkcmVuKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuO1xuICB9XG5cbiAgYWRkQ2hpbGQoY2hpbGQpIHtcbiAgICBpZiAodGhpcy5jaGlsZHJlbi5sZW5ndGggPT09IDApIHRoaXMuYXR0YWNoKCk7XG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgfVxuXG4gIHJlbW92ZUNoaWxkKGNoaWxkKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmNoaWxkcmVuLmluZGV4T2YoY2hpbGQpO1xuICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKTtcbiAgICBpZiAodGhpcy5jaGlsZHJlbi5sZW5ndGggPT09IDApIHRoaXMuZGV0YWNoKCk7XG4gIH1cblxufVxuY2xhc3MgQW5pbWF0ZWRBcnJheSBleHRlbmRzIEFuaW1hdGVkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLnBheWxvYWQgPSBbXTtcblxuICAgIHRoaXMuYXR0YWNoID0gKCkgPT4gdGhpcy5wYXlsb2FkLmZvckVhY2gocCA9PiBwIGluc3RhbmNlb2YgQW5pbWF0ZWQgJiYgcC5hZGRDaGlsZCh0aGlzKSk7XG5cbiAgICB0aGlzLmRldGFjaCA9ICgpID0+IHRoaXMucGF5bG9hZC5mb3JFYWNoKHAgPT4gcCBpbnN0YW5jZW9mIEFuaW1hdGVkICYmIHAucmVtb3ZlQ2hpbGQodGhpcykpO1xuICB9XG5cbn1cbmNsYXNzIEFuaW1hdGVkT2JqZWN0IGV4dGVuZHMgQW5pbWF0ZWQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIHRoaXMucGF5bG9hZCA9IHt9O1xuXG4gICAgdGhpcy5hdHRhY2ggPSAoKSA9PiBPYmplY3QudmFsdWVzKHRoaXMucGF5bG9hZCkuZm9yRWFjaChzID0+IHMgaW5zdGFuY2VvZiBBbmltYXRlZCAmJiBzLmFkZENoaWxkKHRoaXMpKTtcblxuICAgIHRoaXMuZGV0YWNoID0gKCkgPT4gT2JqZWN0LnZhbHVlcyh0aGlzLnBheWxvYWQpLmZvckVhY2gocyA9PiBzIGluc3RhbmNlb2YgQW5pbWF0ZWQgJiYgcy5yZW1vdmVDaGlsZCh0aGlzKSk7XG4gIH1cblxuICBnZXRWYWx1ZShhbmltYXRlZCkge1xuICAgIGlmIChhbmltYXRlZCA9PT0gdm9pZCAwKSB7XG4gICAgICBhbmltYXRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHBheWxvYWQgPSB7fTtcblxuICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMucGF5bG9hZCkge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnBheWxvYWRba2V5XTtcbiAgICAgIGlmIChhbmltYXRlZCAmJiAhKHZhbHVlIGluc3RhbmNlb2YgQW5pbWF0ZWQpKSBjb250aW51ZTtcbiAgICAgIHBheWxvYWRba2V5XSA9IHZhbHVlIGluc3RhbmNlb2YgQW5pbWF0ZWQgPyB2YWx1ZVthbmltYXRlZCA/ICdnZXRBbmltYXRlZFZhbHVlJyA6ICdnZXRWYWx1ZSddKCkgOiB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGF5bG9hZDtcbiAgfVxuXG4gIGdldEFuaW1hdGVkVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUodHJ1ZSk7XG4gIH1cblxufVxuXG5sZXQgYXBwbHlBbmltYXRlZFZhbHVlcztcbmZ1bmN0aW9uIGluamVjdEFwcGx5QW5pbWF0ZWRWYWx1ZXMoZm4sIHRyYW5zZm9ybSkge1xuICBhcHBseUFuaW1hdGVkVmFsdWVzID0ge1xuICAgIGZuLFxuICAgIHRyYW5zZm9ybVxuICB9O1xufVxubGV0IGNvbG9yTmFtZXM7XG5mdW5jdGlvbiBpbmplY3RDb2xvck5hbWVzKG5hbWVzKSB7XG4gIGNvbG9yTmFtZXMgPSBuYW1lcztcbn1cbmxldCByZXF1ZXN0RnJhbWUgPSBjYiA9PiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2IpIDogLTE7XG5sZXQgY2FuY2VsRnJhbWUgPSBpZCA9PiB7XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShpZCk7XG59O1xuZnVuY3Rpb24gaW5qZWN0RnJhbWUocmFmLCBjYWYpIHtcbiAgcmVxdWVzdEZyYW1lID0gcmFmO1xuICBjYW5jZWxGcmFtZSA9IGNhZjtcbn1cbmxldCBpbnRlcnBvbGF0aW9uO1xuZnVuY3Rpb24gaW5qZWN0U3RyaW5nSW50ZXJwb2xhdG9yKGZuKSB7XG4gIGludGVycG9sYXRpb24gPSBmbjtcbn1cbmxldCBub3cgPSAoKSA9PiBEYXRlLm5vdygpO1xuZnVuY3Rpb24gaW5qZWN0Tm93KG5vd0ZuKSB7XG4gIG5vdyA9IG5vd0ZuO1xufVxubGV0IGRlZmF1bHRFbGVtZW50O1xuZnVuY3Rpb24gaW5qZWN0RGVmYXVsdEVsZW1lbnQoZWwpIHtcbiAgZGVmYXVsdEVsZW1lbnQgPSBlbDtcbn1cbmxldCBhbmltYXRlZEFwaSA9IG5vZGUgPT4gbm9kZS5jdXJyZW50O1xuZnVuY3Rpb24gaW5qZWN0QW5pbWF0ZWRBcGkoZm4pIHtcbiAgYW5pbWF0ZWRBcGkgPSBmbjtcbn1cbmxldCBjcmVhdGVBbmltYXRlZFN0eWxlO1xuZnVuY3Rpb24gaW5qZWN0Q3JlYXRlQW5pbWF0ZWRTdHlsZShmYWN0b3J5KSB7XG4gIGNyZWF0ZUFuaW1hdGVkU3R5bGUgPSBmYWN0b3J5O1xufVxubGV0IG1hbnVhbEZyYW1lbG9vcDtcbmZ1bmN0aW9uIGluamVjdE1hbnVhbEZyYW1lbG9vcChjYWxsYmFjaykge1xuICBtYW51YWxGcmFtZWxvb3AgPSBjYWxsYmFjaztcbn1cblxudmFyIEdsb2JhbHMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gIGdldCBhcHBseUFuaW1hdGVkVmFsdWVzICgpIHsgcmV0dXJuIGFwcGx5QW5pbWF0ZWRWYWx1ZXM7IH0sXG4gIGluamVjdEFwcGx5QW5pbWF0ZWRWYWx1ZXM6IGluamVjdEFwcGx5QW5pbWF0ZWRWYWx1ZXMsXG4gIGdldCBjb2xvck5hbWVzICgpIHsgcmV0dXJuIGNvbG9yTmFtZXM7IH0sXG4gIGluamVjdENvbG9yTmFtZXM6IGluamVjdENvbG9yTmFtZXMsXG4gIGdldCByZXF1ZXN0RnJhbWUgKCkgeyByZXR1cm4gcmVxdWVzdEZyYW1lOyB9LFxuICBnZXQgY2FuY2VsRnJhbWUgKCkgeyByZXR1cm4gY2FuY2VsRnJhbWU7IH0sXG4gIGluamVjdEZyYW1lOiBpbmplY3RGcmFtZSxcbiAgZ2V0IGludGVycG9sYXRpb24gKCkgeyByZXR1cm4gaW50ZXJwb2xhdGlvbjsgfSxcbiAgaW5qZWN0U3RyaW5nSW50ZXJwb2xhdG9yOiBpbmplY3RTdHJpbmdJbnRlcnBvbGF0b3IsXG4gIGdldCBub3cgKCkgeyByZXR1cm4gbm93OyB9LFxuICBpbmplY3ROb3c6IGluamVjdE5vdyxcbiAgZ2V0IGRlZmF1bHRFbGVtZW50ICgpIHsgcmV0dXJuIGRlZmF1bHRFbGVtZW50OyB9LFxuICBpbmplY3REZWZhdWx0RWxlbWVudDogaW5qZWN0RGVmYXVsdEVsZW1lbnQsXG4gIGdldCBhbmltYXRlZEFwaSAoKSB7IHJldHVybiBhbmltYXRlZEFwaTsgfSxcbiAgaW5qZWN0QW5pbWF0ZWRBcGk6IGluamVjdEFuaW1hdGVkQXBpLFxuICBnZXQgY3JlYXRlQW5pbWF0ZWRTdHlsZSAoKSB7IHJldHVybiBjcmVhdGVBbmltYXRlZFN0eWxlOyB9LFxuICBpbmplY3RDcmVhdGVBbmltYXRlZFN0eWxlOiBpbmplY3RDcmVhdGVBbmltYXRlZFN0eWxlLFxuICBnZXQgbWFudWFsRnJhbWVsb29wICgpIHsgcmV0dXJuIG1hbnVhbEZyYW1lbG9vcDsgfSxcbiAgaW5qZWN0TWFudWFsRnJhbWVsb29wOiBpbmplY3RNYW51YWxGcmFtZWxvb3Bcbn0pO1xuXG4vKipcbiAqIFdyYXBzIHRoZSBgc3R5bGVgIHByb3BlcnR5IHdpdGggYEFuaW1hdGVkU3R5bGVgLlxuICovXG5cbmNsYXNzIEFuaW1hdGVkUHJvcHMgZXh0ZW5kcyBBbmltYXRlZE9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjYWxsYmFjaykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy51cGRhdGUgPSB2b2lkIDA7XG4gICAgdGhpcy5wYXlsb2FkID0gIXByb3BzLnN0eWxlID8gcHJvcHMgOiBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIHN0eWxlOiBjcmVhdGVBbmltYXRlZFN0eWxlKHByb3BzLnN0eWxlKVxuICAgIH0pO1xuICAgIHRoaXMudXBkYXRlID0gY2FsbGJhY2s7XG4gICAgdGhpcy5hdHRhY2goKTtcbiAgfVxuXG59XG5cbmNvbnN0IGlzRnVuY3Rpb25Db21wb25lbnQgPSB2YWwgPT4gaXMuZnVuKHZhbCkgJiYgISh2YWwucHJvdG90eXBlIGluc3RhbmNlb2YgUmVhY3QuQ29tcG9uZW50KTtcblxuY29uc3QgY3JlYXRlQW5pbWF0ZWRDb21wb25lbnQgPSBDb21wb25lbnQgPT4ge1xuICBjb25zdCBBbmltYXRlZENvbXBvbmVudCA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICBjb25zdCBmb3JjZVVwZGF0ZSA9IHVzZUZvcmNlVXBkYXRlKCk7XG4gICAgY29uc3QgbW91bnRlZCA9IHVzZVJlZih0cnVlKTtcbiAgICBjb25zdCBwcm9wc0FuaW1hdGVkID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IG5vZGUgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgYXR0YWNoUHJvcHMgPSB1c2VDYWxsYmFjayhwcm9wcyA9PiB7XG4gICAgICBjb25zdCBvbGRQcm9wc0FuaW1hdGVkID0gcHJvcHNBbmltYXRlZC5jdXJyZW50O1xuXG4gICAgICBjb25zdCBjYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgbGV0IGRpZFVwZGF0ZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChub2RlLmN1cnJlbnQpIHtcbiAgICAgICAgICBkaWRVcGRhdGUgPSBhcHBseUFuaW1hdGVkVmFsdWVzLmZuKG5vZGUuY3VycmVudCwgcHJvcHNBbmltYXRlZC5jdXJyZW50LmdldEFuaW1hdGVkVmFsdWUoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW5vZGUuY3VycmVudCB8fCBkaWRVcGRhdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgLy8gSWYgbm8gcmVmZXJlbmNlZCBub2RlIGhhcyBiZWVuIGZvdW5kLCBvciB0aGUgdXBkYXRlIHRhcmdldCBkaWRuJ3QgaGF2ZSBhXG4gICAgICAgICAgLy8gbmF0aXZlLXJlc3BvbmRlciwgdGhlbiBmb3JjZVVwZGF0ZSB0aGUgYW5pbWF0aW9uIC4uLlxuICAgICAgICAgIGZvcmNlVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHByb3BzQW5pbWF0ZWQuY3VycmVudCA9IG5ldyBBbmltYXRlZFByb3BzKHByb3BzLCBjYWxsYmFjayk7XG4gICAgICBvbGRQcm9wc0FuaW1hdGVkICYmIG9sZFByb3BzQW5pbWF0ZWQuZGV0YWNoKCk7XG4gICAgfSwgW10pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiAoKSA9PiB7XG4gICAgICBtb3VudGVkLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIHByb3BzQW5pbWF0ZWQuY3VycmVudCAmJiBwcm9wc0FuaW1hdGVkLmN1cnJlbnQuZGV0YWNoKCk7XG4gICAgfSwgW10pO1xuICAgIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiBhbmltYXRlZEFwaShub2RlLCBtb3VudGVkLCBmb3JjZVVwZGF0ZSkpO1xuICAgIGF0dGFjaFByb3BzKHByb3BzKTtcblxuICAgIGNvbnN0IF9nZXRWYWx1ZSA9IHByb3BzQW5pbWF0ZWQuY3VycmVudC5nZXRWYWx1ZSgpLFxuICAgICAgICAgIHNjcm9sbFRvcCA9IF9nZXRWYWx1ZS5zY3JvbGxUb3AsXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IF9nZXRWYWx1ZS5zY3JvbGxMZWZ0LFxuICAgICAgICAgIGFuaW1hdGVkUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfZ2V0VmFsdWUsIFtcInNjcm9sbFRvcFwiLCBcInNjcm9sbExlZnRcIl0pOyAvLyBGdW5jdGlvbnMgY2Fubm90IGhhdmUgcmVmcywgc2VlOlxuICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LXNwcmluZy9yZWFjdC1zcHJpbmcvaXNzdWVzLzU2OVxuXG5cbiAgICBjb25zdCByZWZGbiA9IGlzRnVuY3Rpb25Db21wb25lbnQoQ29tcG9uZW50KSA/IHVuZGVmaW5lZCA6IGNoaWxkUmVmID0+IG5vZGUuY3VycmVudCA9IGhhbmRsZVJlZihjaGlsZFJlZiwgcmVmKTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHt9LCBhbmltYXRlZFByb3BzLCB7XG4gICAgICByZWY6IHJlZkZuXG4gICAgfSkpO1xuICB9KTtcbiAgcmV0dXJuIEFuaW1hdGVkQ29tcG9uZW50O1xufTtcblxubGV0IGFjdGl2ZSA9IGZhbHNlO1xuY29uc3QgY29udHJvbGxlcnMgPSBuZXcgU2V0KCk7XG5cbmNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgaWYgKCFhY3RpdmUpIHJldHVybiBmYWxzZTtcbiAgbGV0IHRpbWUgPSBub3coKTtcblxuICBmb3IgKGxldCBjb250cm9sbGVyIG9mIGNvbnRyb2xsZXJzKSB7XG4gICAgbGV0IGlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBjb25maWdJZHggPSAwOyBjb25maWdJZHggPCBjb250cm9sbGVyLmNvbmZpZ3MubGVuZ3RoOyBjb25maWdJZHgrKykge1xuICAgICAgbGV0IGNvbmZpZyA9IGNvbnRyb2xsZXIuY29uZmlnc1tjb25maWdJZHhdO1xuICAgICAgbGV0IGVuZE9mQW5pbWF0aW9uLCBsYXN0VGltZTtcblxuICAgICAgZm9yIChsZXQgdmFsSWR4ID0gMDsgdmFsSWR4IDwgY29uZmlnLmFuaW1hdGVkVmFsdWVzLmxlbmd0aDsgdmFsSWR4KyspIHtcbiAgICAgICAgbGV0IGFuaW1hdGlvbiA9IGNvbmZpZy5hbmltYXRlZFZhbHVlc1t2YWxJZHhdOyAvLyBJZiBhbiBhbmltYXRpb24gaXMgZG9uZSwgc2tpcCwgdW50aWwgYWxsIG9mIHRoZW0gY29uY2x1ZGVcblxuICAgICAgICBpZiAoYW5pbWF0aW9uLmRvbmUpIGNvbnRpbnVlO1xuICAgICAgICBsZXQgZnJvbSA9IGNvbmZpZy5mcm9tVmFsdWVzW3ZhbElkeF07XG4gICAgICAgIGxldCB0byA9IGNvbmZpZy50b1ZhbHVlc1t2YWxJZHhdO1xuICAgICAgICBsZXQgcG9zaXRpb24gPSBhbmltYXRpb24ubGFzdFBvc2l0aW9uO1xuICAgICAgICBsZXQgaXNBbmltYXRlZCA9IHRvIGluc3RhbmNlb2YgQW5pbWF0ZWQ7XG4gICAgICAgIGxldCB2ZWxvY2l0eSA9IEFycmF5LmlzQXJyYXkoY29uZmlnLmluaXRpYWxWZWxvY2l0eSkgPyBjb25maWcuaW5pdGlhbFZlbG9jaXR5W3ZhbElkeF0gOiBjb25maWcuaW5pdGlhbFZlbG9jaXR5O1xuICAgICAgICBpZiAoaXNBbmltYXRlZCkgdG8gPSB0by5nZXRWYWx1ZSgpOyAvLyBDb25jbHVkZSBhbmltYXRpb24gaWYgaXQncyBlaXRoZXIgaW1tZWRpYXRlLCBvciBmcm9tLXZhbHVlcyBtYXRjaCBlbmQtc3RhdGVcblxuICAgICAgICBpZiAoY29uZmlnLmltbWVkaWF0ZSkge1xuICAgICAgICAgIGFuaW1hdGlvbi5zZXRWYWx1ZSh0byk7XG4gICAgICAgICAgYW5pbWF0aW9uLmRvbmUgPSB0cnVlO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IC8vIEJyZWFrIGFuaW1hdGlvbiB3aGVuIHN0cmluZyB2YWx1ZXMgYXJlIGludm9sdmVkXG5cblxuICAgICAgICBpZiAodHlwZW9mIGZyb20gPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0byA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBhbmltYXRpb24uc2V0VmFsdWUodG8pO1xuICAgICAgICAgIGFuaW1hdGlvbi5kb25lID0gdHJ1ZTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcuZHVyYXRpb24gIT09IHZvaWQgMCkge1xuICAgICAgICAgIC8qKiBEdXJhdGlvbiBlYXNpbmcgKi9cbiAgICAgICAgICBwb3NpdGlvbiA9IGZyb20gKyBjb25maWcuZWFzaW5nKCh0aW1lIC0gYW5pbWF0aW9uLnN0YXJ0VGltZSkgLyBjb25maWcuZHVyYXRpb24pICogKHRvIC0gZnJvbSk7XG4gICAgICAgICAgZW5kT2ZBbmltYXRpb24gPSB0aW1lID49IGFuaW1hdGlvbi5zdGFydFRpbWUgKyBjb25maWcuZHVyYXRpb247XG4gICAgICAgIH0gZWxzZSBpZiAoY29uZmlnLmRlY2F5KSB7XG4gICAgICAgICAgLyoqIERlY2F5IGVhc2luZyAqL1xuICAgICAgICAgIHBvc2l0aW9uID0gZnJvbSArIHZlbG9jaXR5IC8gKDEgLSAwLjk5OCkgKiAoMSAtIE1hdGguZXhwKC0oMSAtIDAuOTk4KSAqICh0aW1lIC0gYW5pbWF0aW9uLnN0YXJ0VGltZSkpKTtcbiAgICAgICAgICBlbmRPZkFuaW1hdGlvbiA9IE1hdGguYWJzKGFuaW1hdGlvbi5sYXN0UG9zaXRpb24gLSBwb3NpdGlvbikgPCAwLjE7XG4gICAgICAgICAgaWYgKGVuZE9mQW5pbWF0aW9uKSB0byA9IHBvc2l0aW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8qKiBTcHJpbmcgZWFzaW5nICovXG4gICAgICAgICAgbGFzdFRpbWUgPSBhbmltYXRpb24ubGFzdFRpbWUgIT09IHZvaWQgMCA/IGFuaW1hdGlvbi5sYXN0VGltZSA6IHRpbWU7XG4gICAgICAgICAgdmVsb2NpdHkgPSBhbmltYXRpb24ubGFzdFZlbG9jaXR5ICE9PSB2b2lkIDAgPyBhbmltYXRpb24ubGFzdFZlbG9jaXR5IDogY29uZmlnLmluaXRpYWxWZWxvY2l0eTsgLy8gSWYgd2UgbG9zdCBhIGxvdCBvZiBmcmFtZXMganVzdCBqdW1wIHRvIHRoZSBlbmQuXG5cbiAgICAgICAgICBpZiAodGltZSA+IGxhc3RUaW1lICsgNjQpIGxhc3RUaW1lID0gdGltZTsgLy8gaHR0cDovL2dhZmZlcm9uZ2FtZXMuY29tL2dhbWUtcGh5c2ljcy9maXgteW91ci10aW1lc3RlcC9cblxuICAgICAgICAgIGxldCBudW1TdGVwcyA9IE1hdGguZmxvb3IodGltZSAtIGxhc3RUaW1lKTtcblxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtU3RlcHM7ICsraSkge1xuICAgICAgICAgICAgbGV0IGZvcmNlID0gLWNvbmZpZy50ZW5zaW9uICogKHBvc2l0aW9uIC0gdG8pO1xuICAgICAgICAgICAgbGV0IGRhbXBpbmcgPSAtY29uZmlnLmZyaWN0aW9uICogdmVsb2NpdHk7XG4gICAgICAgICAgICBsZXQgYWNjZWxlcmF0aW9uID0gKGZvcmNlICsgZGFtcGluZykgLyBjb25maWcubWFzcztcbiAgICAgICAgICAgIHZlbG9jaXR5ID0gdmVsb2NpdHkgKyBhY2NlbGVyYXRpb24gKiAxIC8gMTAwMDtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gcG9zaXRpb24gKyB2ZWxvY2l0eSAqIDEgLyAxMDAwO1xuICAgICAgICAgIH0gLy8gQ29uZGl0aW9ucyBmb3Igc3RvcHBpbmcgdGhlIHNwcmluZyBhbmltYXRpb25cblxuXG4gICAgICAgICAgbGV0IGlzT3ZlcnNob290aW5nID0gY29uZmlnLmNsYW1wICYmIGNvbmZpZy50ZW5zaW9uICE9PSAwID8gZnJvbSA8IHRvID8gcG9zaXRpb24gPiB0byA6IHBvc2l0aW9uIDwgdG8gOiBmYWxzZTtcbiAgICAgICAgICBsZXQgaXNWZWxvY2l0eSA9IE1hdGguYWJzKHZlbG9jaXR5KSA8PSBjb25maWcucHJlY2lzaW9uO1xuICAgICAgICAgIGxldCBpc0Rpc3BsYWNlbWVudCA9IGNvbmZpZy50ZW5zaW9uICE9PSAwID8gTWF0aC5hYnModG8gLSBwb3NpdGlvbikgPD0gY29uZmlnLnByZWNpc2lvbiA6IHRydWU7XG4gICAgICAgICAgZW5kT2ZBbmltYXRpb24gPSBpc092ZXJzaG9vdGluZyB8fCBpc1ZlbG9jaXR5ICYmIGlzRGlzcGxhY2VtZW50O1xuICAgICAgICAgIGFuaW1hdGlvbi5sYXN0VmVsb2NpdHkgPSB2ZWxvY2l0eTtcbiAgICAgICAgICBhbmltYXRpb24ubGFzdFRpbWUgPSB0aW1lO1xuICAgICAgICB9IC8vIFRyYWlscyBhcmVuJ3QgZG9uZSB1bnRpbCB0aGVpciBwYXJlbnRzIGNvbmNsdWRlXG5cblxuICAgICAgICBpZiAoaXNBbmltYXRlZCAmJiAhY29uZmlnLnRvVmFsdWVzW3ZhbElkeF0uZG9uZSkgZW5kT2ZBbmltYXRpb24gPSBmYWxzZTtcblxuICAgICAgICBpZiAoZW5kT2ZBbmltYXRpb24pIHtcbiAgICAgICAgICAvLyBFbnN1cmUgdGhhdCB3ZSBlbmQgdXAgd2l0aCBhIHJvdW5kIHZhbHVlXG4gICAgICAgICAgaWYgKGFuaW1hdGlvbi52YWx1ZSAhPT0gdG8pIHBvc2l0aW9uID0gdG87XG4gICAgICAgICAgYW5pbWF0aW9uLmRvbmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaXNBY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIGFuaW1hdGlvbi5zZXRWYWx1ZShwb3NpdGlvbik7XG4gICAgICAgIGFuaW1hdGlvbi5sYXN0UG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgIH0gLy8gS2VlcCB0cmFjayBvZiB1cGRhdGVkIHZhbHVlcyBvbmx5IHdoZW4gbmVjZXNzYXJ5XG5cblxuICAgICAgaWYgKGNvbnRyb2xsZXIucHJvcHMub25GcmFtZSkgY29udHJvbGxlci52YWx1ZXNbY29uZmlnLm5hbWVdID0gY29uZmlnLmludGVycG9sYXRpb24uZ2V0VmFsdWUoKTtcbiAgICB9IC8vIFVwZGF0ZSBjYWxsYmFja3MgaW4gdGhlIGVuZCBvZiB0aGUgZnJhbWVcblxuXG4gICAgaWYgKGNvbnRyb2xsZXIucHJvcHMub25GcmFtZSkgY29udHJvbGxlci5wcm9wcy5vbkZyYW1lKGNvbnRyb2xsZXIudmFsdWVzKTsgLy8gRWl0aGVyIGNhbGwgb25FbmQgb3IgbmV4dCBmcmFtZVxuXG4gICAgaWYgKCFpc0FjdGl2ZSkge1xuICAgICAgY29udHJvbGxlcnMuZGVsZXRlKGNvbnRyb2xsZXIpO1xuICAgICAgY29udHJvbGxlci5zdG9wKHRydWUpO1xuICAgIH1cbiAgfSAvLyBMb29wIG92ZXIgYXMgbG9uZyBhcyB0aGVyZSBhcmUgY29udHJvbGxlcnMgLi4uXG5cblxuICBpZiAoY29udHJvbGxlcnMuc2l6ZSkge1xuICAgIGlmIChtYW51YWxGcmFtZWxvb3ApIG1hbnVhbEZyYW1lbG9vcCgpO2Vsc2UgcmVxdWVzdEZyYW1lKHVwZGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgYWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gYWN0aXZlO1xufTtcblxuY29uc3Qgc3RhcnQgPSBjb250cm9sbGVyID0+IHtcbiAgaWYgKCFjb250cm9sbGVycy5oYXMoY29udHJvbGxlcikpIGNvbnRyb2xsZXJzLmFkZChjb250cm9sbGVyKTtcblxuICBpZiAoIWFjdGl2ZSkge1xuICAgIGFjdGl2ZSA9IHRydWU7XG4gICAgaWYgKG1hbnVhbEZyYW1lbG9vcCkgcmVxdWVzdEZyYW1lKG1hbnVhbEZyYW1lbG9vcCk7ZWxzZSByZXF1ZXN0RnJhbWUodXBkYXRlKTtcbiAgfVxufTtcblxuY29uc3Qgc3RvcCA9IGNvbnRyb2xsZXIgPT4ge1xuICBpZiAoY29udHJvbGxlcnMuaGFzKGNvbnRyb2xsZXIpKSBjb250cm9sbGVycy5kZWxldGUoY29udHJvbGxlcik7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVJbnRlcnBvbGF0b3IocmFuZ2UsIG91dHB1dCwgZXh0cmFwb2xhdGUpIHtcbiAgaWYgKHR5cGVvZiByYW5nZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiByYW5nZTtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHJhbmdlKSkge1xuICAgIHJldHVybiBjcmVhdGVJbnRlcnBvbGF0b3Ioe1xuICAgICAgcmFuZ2UsXG4gICAgICBvdXRwdXQ6IG91dHB1dCxcbiAgICAgIGV4dHJhcG9sYXRlXG4gICAgfSk7XG4gIH1cblxuICBpZiAoaW50ZXJwb2xhdGlvbiAmJiB0eXBlb2YgcmFuZ2Uub3V0cHV0WzBdID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBpbnRlcnBvbGF0aW9uKHJhbmdlKTtcbiAgfVxuXG4gIGNvbnN0IGNvbmZpZyA9IHJhbmdlO1xuICBjb25zdCBvdXRwdXRSYW5nZSA9IGNvbmZpZy5vdXRwdXQ7XG4gIGNvbnN0IGlucHV0UmFuZ2UgPSBjb25maWcucmFuZ2UgfHwgWzAsIDFdO1xuICBjb25zdCBleHRyYXBvbGF0ZUxlZnQgPSBjb25maWcuZXh0cmFwb2xhdGVMZWZ0IHx8IGNvbmZpZy5leHRyYXBvbGF0ZSB8fCAnZXh0ZW5kJztcbiAgY29uc3QgZXh0cmFwb2xhdGVSaWdodCA9IGNvbmZpZy5leHRyYXBvbGF0ZVJpZ2h0IHx8IGNvbmZpZy5leHRyYXBvbGF0ZSB8fCAnZXh0ZW5kJztcblxuICBjb25zdCBlYXNpbmcgPSBjb25maWcuZWFzaW5nIHx8ICh0ID0+IHQpO1xuXG4gIHJldHVybiBpbnB1dCA9PiB7XG4gICAgY29uc3QgcmFuZ2UgPSBmaW5kUmFuZ2UoaW5wdXQsIGlucHV0UmFuZ2UpO1xuICAgIHJldHVybiBpbnRlcnBvbGF0ZShpbnB1dCwgaW5wdXRSYW5nZVtyYW5nZV0sIGlucHV0UmFuZ2VbcmFuZ2UgKyAxXSwgb3V0cHV0UmFuZ2VbcmFuZ2VdLCBvdXRwdXRSYW5nZVtyYW5nZSArIDFdLCBlYXNpbmcsIGV4dHJhcG9sYXRlTGVmdCwgZXh0cmFwb2xhdGVSaWdodCwgY29uZmlnLm1hcCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludGVycG9sYXRlKGlucHV0LCBpbnB1dE1pbiwgaW5wdXRNYXgsIG91dHB1dE1pbiwgb3V0cHV0TWF4LCBlYXNpbmcsIGV4dHJhcG9sYXRlTGVmdCwgZXh0cmFwb2xhdGVSaWdodCwgbWFwKSB7XG4gIGxldCByZXN1bHQgPSBtYXAgPyBtYXAoaW5wdXQpIDogaW5wdXQ7IC8vIEV4dHJhcG9sYXRlXG5cbiAgaWYgKHJlc3VsdCA8IGlucHV0TWluKSB7XG4gICAgaWYgKGV4dHJhcG9sYXRlTGVmdCA9PT0gJ2lkZW50aXR5JykgcmV0dXJuIHJlc3VsdDtlbHNlIGlmIChleHRyYXBvbGF0ZUxlZnQgPT09ICdjbGFtcCcpIHJlc3VsdCA9IGlucHV0TWluO1xuICB9XG5cbiAgaWYgKHJlc3VsdCA+IGlucHV0TWF4KSB7XG4gICAgaWYgKGV4dHJhcG9sYXRlUmlnaHQgPT09ICdpZGVudGl0eScpIHJldHVybiByZXN1bHQ7ZWxzZSBpZiAoZXh0cmFwb2xhdGVSaWdodCA9PT0gJ2NsYW1wJykgcmVzdWx0ID0gaW5wdXRNYXg7XG4gIH1cblxuICBpZiAob3V0cHV0TWluID09PSBvdXRwdXRNYXgpIHJldHVybiBvdXRwdXRNaW47XG4gIGlmIChpbnB1dE1pbiA9PT0gaW5wdXRNYXgpIHJldHVybiBpbnB1dCA8PSBpbnB1dE1pbiA/IG91dHB1dE1pbiA6IG91dHB1dE1heDsgLy8gSW5wdXQgUmFuZ2VcblxuICBpZiAoaW5wdXRNaW4gPT09IC1JbmZpbml0eSkgcmVzdWx0ID0gLXJlc3VsdDtlbHNlIGlmIChpbnB1dE1heCA9PT0gSW5maW5pdHkpIHJlc3VsdCA9IHJlc3VsdCAtIGlucHV0TWluO2Vsc2UgcmVzdWx0ID0gKHJlc3VsdCAtIGlucHV0TWluKSAvIChpbnB1dE1heCAtIGlucHV0TWluKTsgLy8gRWFzaW5nXG5cbiAgcmVzdWx0ID0gZWFzaW5nKHJlc3VsdCk7IC8vIE91dHB1dCBSYW5nZVxuXG4gIGlmIChvdXRwdXRNaW4gPT09IC1JbmZpbml0eSkgcmVzdWx0ID0gLXJlc3VsdDtlbHNlIGlmIChvdXRwdXRNYXggPT09IEluZmluaXR5KSByZXN1bHQgPSByZXN1bHQgKyBvdXRwdXRNaW47ZWxzZSByZXN1bHQgPSByZXN1bHQgKiAob3V0cHV0TWF4IC0gb3V0cHV0TWluKSArIG91dHB1dE1pbjtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZmluZFJhbmdlKGlucHV0LCBpbnB1dFJhbmdlKSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgaW5wdXRSYW5nZS5sZW5ndGggLSAxOyArK2kpIGlmIChpbnB1dFJhbmdlW2ldID49IGlucHV0KSBicmVhaztcblxuICByZXR1cm4gaSAtIDE7XG59XG5cbmNsYXNzIEFuaW1hdGVkSW50ZXJwb2xhdGlvbiBleHRlbmRzIEFuaW1hdGVkQXJyYXkge1xuICBjb25zdHJ1Y3RvcihwYXJlbnRzLCByYW5nZSwgb3V0cHV0LCBleHRyYXBvbGF0ZSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jYWxjID0gdm9pZCAwO1xuICAgIHRoaXMucGF5bG9hZCA9IHBhcmVudHMgaW5zdGFuY2VvZiBBbmltYXRlZEFycmF5ICYmICEocGFyZW50cyBpbnN0YW5jZW9mIEFuaW1hdGVkSW50ZXJwb2xhdGlvbikgPyBwYXJlbnRzLmdldFBheWxvYWQoKSA6IEFycmF5LmlzQXJyYXkocGFyZW50cykgPyBwYXJlbnRzIDogW3BhcmVudHNdO1xuICAgIHRoaXMuY2FsYyA9IGNyZWF0ZUludGVycG9sYXRvcihyYW5nZSwgb3V0cHV0LCBleHRyYXBvbGF0ZSk7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jYWxjKC4uLnRoaXMucGF5bG9hZC5tYXAodmFsdWUgPT4gdmFsdWUuZ2V0VmFsdWUoKSkpO1xuICB9XG5cbiAgdXBkYXRlQ29uZmlnKHJhbmdlLCBvdXRwdXQsIGV4dHJhcG9sYXRlKSB7XG4gICAgdGhpcy5jYWxjID0gY3JlYXRlSW50ZXJwb2xhdG9yKHJhbmdlLCBvdXRwdXQsIGV4dHJhcG9sYXRlKTtcbiAgfVxuXG4gIGludGVycG9sYXRlKHJhbmdlLCBvdXRwdXQsIGV4dHJhcG9sYXRlKSB7XG4gICAgcmV0dXJuIG5ldyBBbmltYXRlZEludGVycG9sYXRpb24odGhpcywgcmFuZ2UsIG91dHB1dCwgZXh0cmFwb2xhdGUpO1xuICB9XG5cbn1cblxuY29uc3QgaW50ZXJwb2xhdGUkMSA9IChwYXJlbnRzLCByYW5nZSwgb3V0cHV0KSA9PiBwYXJlbnRzICYmIG5ldyBBbmltYXRlZEludGVycG9sYXRpb24ocGFyZW50cywgcmFuZ2UsIG91dHB1dCk7XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgZGVmYXVsdDoge1xuICAgIHRlbnNpb246IDE3MCxcbiAgICBmcmljdGlvbjogMjZcbiAgfSxcbiAgZ2VudGxlOiB7XG4gICAgdGVuc2lvbjogMTIwLFxuICAgIGZyaWN0aW9uOiAxNFxuICB9LFxuICB3b2JibHk6IHtcbiAgICB0ZW5zaW9uOiAxODAsXG4gICAgZnJpY3Rpb246IDEyXG4gIH0sXG4gIHN0aWZmOiB7XG4gICAgdGVuc2lvbjogMjEwLFxuICAgIGZyaWN0aW9uOiAyMFxuICB9LFxuICBzbG93OiB7XG4gICAgdGVuc2lvbjogMjgwLFxuICAgIGZyaWN0aW9uOiA2MFxuICB9LFxuICBtb2xhc3Nlczoge1xuICAgIHRlbnNpb246IDI4MCxcbiAgICBmcmljdGlvbjogMTIwXG4gIH1cbn07XG5cbi8qKiBBUElcbiAqICB1c2VDaGFpbihyZWZlcmVuY2VzLCB0aW1lU3RlcHMsIHRpbWVGcmFtZSlcbiAqL1xuXG5mdW5jdGlvbiB1c2VDaGFpbihyZWZzLCB0aW1lU3RlcHMsIHRpbWVGcmFtZSkge1xuICBpZiAodGltZUZyYW1lID09PSB2b2lkIDApIHtcbiAgICB0aW1lRnJhbWUgPSAxMDAwO1xuICB9XG5cbiAgY29uc3QgcHJldmlvdXMgPSB1c2VSZWYoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXMuZXF1KHJlZnMsIHByZXZpb3VzLmN1cnJlbnQpKSByZWZzLmZvckVhY2goKF9yZWYpID0+IHtcbiAgICAgIGxldCBjdXJyZW50ID0gX3JlZi5jdXJyZW50O1xuICAgICAgcmV0dXJuIGN1cnJlbnQgJiYgY3VycmVudC5zdGFydCgpO1xuICAgIH0pO2Vsc2UgaWYgKHRpbWVTdGVwcykge1xuICAgICAgcmVmcy5mb3JFYWNoKChfcmVmMiwgaW5kZXgpID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBfcmVmMi5jdXJyZW50O1xuXG4gICAgICAgIGlmIChjdXJyZW50KSB7XG4gICAgICAgICAgY29uc3QgY3RybHMgPSBjdXJyZW50LmNvbnRyb2xsZXJzO1xuXG4gICAgICAgICAgaWYgKGN0cmxzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgdCA9IHRpbWVGcmFtZSAqIHRpbWVTdGVwc1tpbmRleF07XG4gICAgICAgICAgICBjdHJscy5mb3JFYWNoKGN0cmwgPT4ge1xuICAgICAgICAgICAgICBjdHJsLnF1ZXVlID0gY3RybC5xdWV1ZS5tYXAoZSA9PiBfZXh0ZW5kcyh7fSwgZSwge1xuICAgICAgICAgICAgICAgIGRlbGF5OiBlLmRlbGF5ICsgdFxuICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgIGN0cmwuc3RhcnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHJlZnMucmVkdWNlKChxLCBfcmVmMywgckkpID0+IHtcbiAgICAgIGxldCBjdXJyZW50ID0gX3JlZjMuY3VycmVudDtcbiAgICAgIHJldHVybiBxID0gcS50aGVuKCgpID0+IGN1cnJlbnQuc3RhcnQoKSk7XG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuICAgIHByZXZpb3VzLmN1cnJlbnQgPSByZWZzO1xuICB9KTtcbn1cblxuLyoqXG4gKiBBbmltYXRlZCB3b3JrcyBieSBidWlsZGluZyBhIGRpcmVjdGVkIGFjeWNsaWMgZ3JhcGggb2YgZGVwZW5kZW5jaWVzXG4gKiB0cmFuc3BhcmVudGx5IHdoZW4geW91IHJlbmRlciB5b3VyIEFuaW1hdGVkIGNvbXBvbmVudHMuXG4gKlxuICogICAgICAgICAgICAgICBuZXcgQW5pbWF0ZWQuVmFsdWUoMClcbiAqICAgICAuaW50ZXJwb2xhdGUoKSAgICAgICAgLmludGVycG9sYXRlKCkgICAgbmV3IEFuaW1hdGVkLlZhbHVlKDEpXG4gKiAgICAgICAgIG9wYWNpdHkgICAgICAgICAgICAgICB0cmFuc2xhdGVZICAgICAgc2NhbGVcbiAqICAgICAgICAgIHN0eWxlICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybVxuICogICAgICAgICBWaWV3IzIzNCAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcjMTIzXG4gKlxuICogQSkgVG9wIERvd24gcGhhc2VcbiAqIFdoZW4gYW4gQW5pbWF0ZWRWYWx1ZSBpcyB1cGRhdGVkLCB3ZSByZWN1cnNpdmVseSBnbyBkb3duIHRocm91Z2ggdGhpc1xuICogZ3JhcGggaW4gb3JkZXIgdG8gZmluZCBsZWFmIG5vZGVzOiB0aGUgdmlld3MgdGhhdCB3ZSBmbGFnIGFzIG5lZWRpbmdcbiAqIGFuIHVwZGF0ZS5cbiAqXG4gKiBCKSBCb3R0b20gVXAgcGhhc2VcbiAqIFdoZW4gYSB2aWV3IGlzIGZsYWdnZWQgYXMgbmVlZGluZyBhbiB1cGRhdGUsIHdlIHJlY3Vyc2l2ZWx5IGdvIGJhY2sgdXBcbiAqIGluIG9yZGVyIHRvIGJ1aWxkIHRoZSBuZXcgdmFsdWUgdGhhdCBpdCBuZWVkcy4gVGhlIHJlYXNvbiB3aHkgd2UgbmVlZFxuICogdGhpcyB0d28tcGhhc2VzIHByb2Nlc3MgaXMgdG8gZGVhbCB3aXRoIGNvbXBvc2l0ZSBwcm9wcyBzdWNoIGFzXG4gKiB0cmFuc2Zvcm0gd2hpY2ggY2FuIHJlY2VpdmUgdmFsdWVzIGZyb20gbXVsdGlwbGUgcGFyZW50cy5cbiAqL1xuZnVuY3Rpb24gYWRkQW5pbWF0ZWRTdHlsZXMobm9kZSwgc3R5bGVzKSB7XG4gIGlmICgndXBkYXRlJyBpbiBub2RlKSB7XG4gICAgc3R5bGVzLmFkZChub2RlKTtcbiAgfSBlbHNlIHtcbiAgICBub2RlLmdldENoaWxkcmVuKCkuZm9yRWFjaChjaGlsZCA9PiBhZGRBbmltYXRlZFN0eWxlcyhjaGlsZCwgc3R5bGVzKSk7XG4gIH1cbn1cblxuY2xhc3MgQW5pbWF0ZWRWYWx1ZSBleHRlbmRzIEFuaW1hdGVkIHtcbiAgY29uc3RydWN0b3IoX3ZhbHVlKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgc3VwZXIoKTtcbiAgICBfdGhpcyA9IHRoaXM7XG4gICAgdGhpcy5hbmltYXRlZFN0eWxlcyA9IG5ldyBTZXQoKTtcbiAgICB0aGlzLnZhbHVlID0gdm9pZCAwO1xuICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IHZvaWQgMDtcbiAgICB0aGlzLmxhc3RQb3NpdGlvbiA9IHZvaWQgMDtcbiAgICB0aGlzLmxhc3RWZWxvY2l0eSA9IHZvaWQgMDtcbiAgICB0aGlzLnN0YXJ0VGltZSA9IHZvaWQgMDtcbiAgICB0aGlzLmxhc3RUaW1lID0gdm9pZCAwO1xuICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgZmx1c2gpIHtcbiAgICAgIGlmIChmbHVzaCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGZsdXNoID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIGlmIChmbHVzaCkgX3RoaXMuZmx1c2goKTtcbiAgICB9O1xuXG4gICAgdGhpcy52YWx1ZSA9IF92YWx1ZTtcbiAgICB0aGlzLnN0YXJ0UG9zaXRpb24gPSBfdmFsdWU7XG4gICAgdGhpcy5sYXN0UG9zaXRpb24gPSBfdmFsdWU7XG4gIH1cblxuICBmbHVzaCgpIHtcbiAgICBpZiAodGhpcy5hbmltYXRlZFN0eWxlcy5zaXplID09PSAwKSB7XG4gICAgICBhZGRBbmltYXRlZFN0eWxlcyh0aGlzLCB0aGlzLmFuaW1hdGVkU3R5bGVzKTtcbiAgICB9XG5cbiAgICB0aGlzLmFuaW1hdGVkU3R5bGVzLmZvckVhY2goYW5pbWF0ZWRTdHlsZSA9PiBhbmltYXRlZFN0eWxlLnVwZGF0ZSgpKTtcbiAgfVxuXG4gIGNsZWFyU3R5bGVzKCkge1xuICAgIHRoaXMuYW5pbWF0ZWRTdHlsZXMuY2xlYXIoKTtcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgaW50ZXJwb2xhdGUocmFuZ2UsIG91dHB1dCwgZXh0cmFwb2xhdGUpIHtcbiAgICByZXR1cm4gbmV3IEFuaW1hdGVkSW50ZXJwb2xhdGlvbih0aGlzLCByYW5nZSwgb3V0cHV0LCBleHRyYXBvbGF0ZSk7XG4gIH1cblxufVxuXG5jbGFzcyBBbmltYXRlZFZhbHVlQXJyYXkgZXh0ZW5kcyBBbmltYXRlZEFycmF5IHtcbiAgY29uc3RydWN0b3IodmFsdWVzKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBheWxvYWQgPSB2YWx1ZXMubWFwKG4gPT4gbmV3IEFuaW1hdGVkVmFsdWUobikpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUsIGZsdXNoKSB7XG4gICAgaWYgKGZsdXNoID09PSB2b2lkIDApIHtcbiAgICAgIGZsdXNoID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IHRoaXMucGF5bG9hZC5sZW5ndGgpIHtcbiAgICAgICAgdmFsdWUuZm9yRWFjaCgodiwgaSkgPT4gdGhpcy5wYXlsb2FkW2ldLnNldFZhbHVlKHYsIGZsdXNoKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGF5bG9hZC5mb3JFYWNoKHAgPT4gcC5zZXRWYWx1ZSh2YWx1ZSwgZmx1c2gpKTtcbiAgICB9XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXlsb2FkLm1hcCh2ID0+IHYuZ2V0VmFsdWUoKSk7XG4gIH1cblxuICBpbnRlcnBvbGF0ZShyYW5nZSwgb3V0cHV0KSB7XG4gICAgcmV0dXJuIG5ldyBBbmltYXRlZEludGVycG9sYXRpb24odGhpcywgcmFuZ2UsIG91dHB1dCk7XG4gIH1cblxufVxuXG5sZXQgRyA9IDA7XG5cbmNsYXNzIENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmlkID0gdm9pZCAwO1xuICAgIHRoaXMuaWRsZSA9IHRydWU7XG4gICAgdGhpcy5oYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgdGhpcy5ndWlkID0gMDtcbiAgICB0aGlzLmxvY2FsID0gMDtcbiAgICB0aGlzLnByb3BzID0ge307XG4gICAgdGhpcy5tZXJnZWQgPSB7fTtcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSB7fTtcbiAgICB0aGlzLmludGVycG9sYXRpb25zID0ge307XG4gICAgdGhpcy52YWx1ZXMgPSB7fTtcbiAgICB0aGlzLmNvbmZpZ3MgPSBbXTtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICB0aGlzLmxvY2FsUXVldWUgPSB2b2lkIDA7XG5cbiAgICB0aGlzLmdldFZhbHVlcyA9ICgpID0+IHRoaXMuaW50ZXJwb2xhdGlvbnM7XG5cbiAgICB0aGlzLmlkID0gRysrO1xuICB9XG4gIC8qKiB1cGRhdGUocHJvcHMpXG4gICAqICBUaGlzIGZ1bmN0aW9uIGZpbHRlcnMgaW5wdXQgcHJvcHMgYW5kIGNyZWF0ZXMgYW4gYXJyYXkgb2YgdGFza3Mgd2hpY2ggYXJlIGV4ZWN1dGVkIGluIC5zdGFydCgpXG4gICAqICBFYWNoIHRhc2sgaXMgYWxsb3dlZCB0byBjYXJyeSBhIGRlbGF5LCB3aGljaCBtZWFucyBpdCBjYW4gZXhlY3V0ZSBhc255Y2hyb25lb3VzbHkgKi9cblxuXG4gIHVwZGF0ZShhcmdzKSB7XG4gICAgLy90aGlzLl9pZCA9IG4gKyB0aGlzLmlkXG4gICAgaWYgKCFhcmdzKSByZXR1cm4gdGhpczsgLy8gRXh0cmFjdCBkZWxheSBhbmQgdGhlIHRvLXByb3AgZnJvbSBwcm9wc1xuXG4gICAgY29uc3QgX3JlZiA9IGludGVycG9sYXRlVG8oYXJncyksXG4gICAgICAgICAgX3JlZiRkZWxheSA9IF9yZWYuZGVsYXksXG4gICAgICAgICAgZGVsYXkgPSBfcmVmJGRlbGF5ID09PSB2b2lkIDAgPyAwIDogX3JlZiRkZWxheSxcbiAgICAgICAgICB0byA9IF9yZWYudG8sXG4gICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbXCJkZWxheVwiLCBcInRvXCJdKTtcblxuICAgIGlmIChpcy5hcnIodG8pIHx8IGlzLmZ1bih0bykpIHtcbiAgICAgIC8vIElmIGNvbmZpZyBpcyBlaXRoZXIgYSBmdW5jdGlvbiBvciBhbiBhcnJheSBxdWV1ZSBpdCB1cCBhcyBpc1xuICAgICAgdGhpcy5xdWV1ZS5wdXNoKF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICBkZWxheSxcbiAgICAgICAgdG9cbiAgICAgIH0pKTtcbiAgICB9IGVsc2UgaWYgKHRvKSB7XG4gICAgICAvLyBPdGhlcndpc2UgZ28gdGhyb3VnaCBlYWNoIGtleSBzaW5jZSBpdCBjb3VsZCBiZSBkZWxheWVkIGluZGl2aWR1YWxseVxuICAgICAgbGV0IG9wcyA9IHt9O1xuICAgICAgT2JqZWN0LmVudHJpZXModG8pLmZvckVhY2goKF9yZWYyKSA9PiB7XG4gICAgICAgIGxldCBrID0gX3JlZjJbMF0sXG4gICAgICAgICAgICB2ID0gX3JlZjJbMV07XG5cbiAgICAgICAgLy8gRmV0Y2ggZGVsYXkgYW5kIGNyZWF0ZSBhbiBlbnRyeSwgY29uc2lzdGluZyBvZiB0aGUgdG8tcHJvcHMsIHRoZSBkZWxheSwgYW5kIGJhc2ljIHByb3BzXG4gICAgICAgIGNvbnN0IGVudHJ5ID0gX2V4dGVuZHMoe1xuICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICBba106IHZcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbGF5OiBjYWxsUHJvcChkZWxheSwgaylcbiAgICAgICAgfSwgcHJvcHMpO1xuXG4gICAgICAgIGNvbnN0IHByZXZpb3VzID0gb3BzW2VudHJ5LmRlbGF5XSAmJiBvcHNbZW50cnkuZGVsYXldLnRvO1xuICAgICAgICBvcHNbZW50cnkuZGVsYXldID0gX2V4dGVuZHMoe30sIG9wc1tlbnRyeS5kZWxheV0sIGVudHJ5LCB7XG4gICAgICAgICAgdG86IF9leHRlbmRzKHt9LCBwcmV2aW91cywgZW50cnkudG8pXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnF1ZXVlID0gT2JqZWN0LnZhbHVlcyhvcHMpO1xuICAgIH0gLy8gU29ydCBxdWV1ZSwgc28gdGhhdCBhc3luYyBjYWxscyBnbyBsYXN0XG5cblxuICAgIHRoaXMucXVldWUgPSB0aGlzLnF1ZXVlLnNvcnQoKGEsIGIpID0+IGEuZGVsYXkgLSBiLmRlbGF5KTsgLy8gRGlmZiB0aGUgcmVkdWNlZCBwcm9wcyBpbW1lZGlhdGVseSAodGhleSdsbCBjb250YWluIHRoZSBmcm9tLXByb3AgYW5kIHNvbWUgY29uZmlnKVxuXG4gICAgdGhpcy5kaWZmKHByb3BzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKiogc3RhcnQob25FbmQpXG4gICAqICBUaGlzIGZ1bmN0aW9uIGVpdGhlciBleGVjdXRlcyBhIHF1ZXVlLCBpZiBwcmVzZW50LCBvciBzdGFydHMgdGhlIGZyYW1lbG9vcCwgd2hpY2ggYW5pbWF0ZXMgKi9cblxuXG4gIHN0YXJ0KG9uRW5kKSB7XG4gICAgLy8gSWYgYSBxdWV1ZSBpcyBwcmVzZW50IHdlIG11c3QgZXhjZWN1dGUgaXRcbiAgICBpZiAodGhpcy5xdWV1ZS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuaWRsZSA9IGZhbHNlOyAvLyBVcGRhdGVzIGNhbiBpbnRlcnJ1cHQgdHJhaWxpbmcgcXVldWVzLCBpbiB0aGF0IGNhc2Ugd2UganVzdCBtZXJnZSB2YWx1ZXNcblxuICAgICAgaWYgKHRoaXMubG9jYWxRdWV1ZSkge1xuICAgICAgICB0aGlzLmxvY2FsUXVldWUuZm9yRWFjaCgoX3JlZjMpID0+IHtcbiAgICAgICAgICBsZXQgX3JlZjMkZnJvbSA9IF9yZWYzLmZyb20sXG4gICAgICAgICAgICAgIGZyb20gPSBfcmVmMyRmcm9tID09PSB2b2lkIDAgPyB7fSA6IF9yZWYzJGZyb20sXG4gICAgICAgICAgICAgIF9yZWYzJHRvID0gX3JlZjMudG8sXG4gICAgICAgICAgICAgIHRvID0gX3JlZjMkdG8gPT09IHZvaWQgMCA/IHt9IDogX3JlZjMkdG87XG4gICAgICAgICAgaWYgKGlzLm9iaihmcm9tKSkgdGhpcy5tZXJnZWQgPSBfZXh0ZW5kcyh7fSwgZnJvbSwgdGhpcy5tZXJnZWQpO1xuICAgICAgICAgIGlmIChpcy5vYmoodG8pKSB0aGlzLm1lcmdlZCA9IF9leHRlbmRzKHt9LCB0aGlzLm1lcmdlZCwgdG8pO1xuICAgICAgICB9KTtcbiAgICAgIH0gLy8gVGhlIGd1aWQgaGVscHMgdXMgdHJhY2tpbmcgZnJhbWVzLCBhIG5ldyBxdWV1ZSBvdmVyIGFuIG9sZCBvbmUgbWVhbnMgYW4gb3ZlcnJpZGVcbiAgICAgIC8vIFdlIGRpc2NhcmQgYXN5bmMgY2FsbHMgaW4gdGhhdCBjYXNlw41cblxuXG4gICAgICBjb25zdCBsb2NhbCA9IHRoaXMubG9jYWwgPSArK3RoaXMuZ3VpZDtcbiAgICAgIGNvbnN0IHF1ZXVlID0gdGhpcy5sb2NhbFF1ZXVlID0gdGhpcy5xdWV1ZTtcbiAgICAgIHRoaXMucXVldWUgPSBbXTsgLy8gR28gdGhyb3VnaCBlYWNoIGVudHJ5IGFuZCBleGVjdXRlIGl0XG5cbiAgICAgIHF1ZXVlLmZvckVhY2goKF9yZWY0LCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgZGVsYXkgPSBfcmVmNC5kZWxheSxcbiAgICAgICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjQsIFtcImRlbGF5XCJdKTtcblxuICAgICAgICBjb25zdCBjYiA9IGZpbmlzaGVkID0+IHtcbiAgICAgICAgICBpZiAoaW5kZXggPT09IHF1ZXVlLmxlbmd0aCAtIDEgJiYgbG9jYWwgPT09IHRoaXMuZ3VpZCAmJiBmaW5pc2hlZCkge1xuICAgICAgICAgICAgdGhpcy5pZGxlID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uUmVzdCkgdGhpcy5wcm9wcy5vblJlc3QodGhpcy5tZXJnZWQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChvbkVuZCkgb25FbmQoKTtcbiAgICAgICAgfTsgLy8gRW50cmllcyBjYW4gYmUgZGVsYXllZCwgYW5zeWMgb3IgaW1tZWRpYXRlXG5cblxuICAgICAgICBsZXQgYXN5bmMgPSBpcy5hcnIocHJvcHMudG8pIHx8IGlzLmZ1bihwcm9wcy50byk7XG5cbiAgICAgICAgaWYgKGRlbGF5KSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAobG9jYWwgPT09IHRoaXMuZ3VpZCkge1xuICAgICAgICAgICAgICBpZiAoYXN5bmMpIHRoaXMucnVuQXN5bmMocHJvcHMsIGNiKTtlbHNlIHRoaXMuZGlmZihwcm9wcykuc3RhcnQoY2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgfSBlbHNlIGlmIChhc3luYykgdGhpcy5ydW5Bc3luYyhwcm9wcywgY2IpO2Vsc2UgdGhpcy5kaWZmKHByb3BzKS5zdGFydChjYik7XG4gICAgICB9KTtcbiAgICB9IC8vIE90aGVyd2lzZSB3ZSBraWNrIG9mIHRoZSBmcmFtZWxvb3BcbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGlzLmZ1bihvbkVuZCkpIHRoaXMubGlzdGVuZXJzLnB1c2gob25FbmQpO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblN0YXJ0KSB0aGlzLnByb3BzLm9uU3RhcnQoKTtcbiAgICAgICAgc3RhcnQodGhpcyk7XG4gICAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHN0b3AoZmluaXNoZWQpIHtcbiAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKG9uRW5kID0+IG9uRW5kKGZpbmlzaGVkKSk7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKiogUGF1c2Ugc2V0cyBvbkVuZCBsaXN0ZW5lcnMgZnJlZSwgYnV0IGFsc28gcmVtb3ZlcyB0aGUgY29udHJvbGxlciBmcm9tIHRoZSBmcmFtZWxvb3AgKi9cblxuXG4gIHBhdXNlKGZpbmlzaGVkKSB7XG4gICAgdGhpcy5zdG9wKHRydWUpO1xuICAgIGlmIChmaW5pc2hlZCkgc3RvcCh0aGlzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJ1bkFzeW5jKF9yZWY1LCBvbkVuZCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBsZXQgZGVsYXkgPSBfcmVmNS5kZWxheSxcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmNSwgW1wiZGVsYXlcIl0pO1xuXG4gICAgY29uc3QgbG9jYWwgPSB0aGlzLmxvY2FsOyAvLyBJZiBcInRvXCIgaXMgZWl0aGVyIGEgZnVuY3Rpb24gb3IgYW4gYXJyYXkgaXQgd2lsbCBiZSBwcm9jZXNzZWQgYXN5bmMsIHRoZXJlZm9yIFwidG9cIiBzaG91bGQgYmUgZW1wdHkgcmlnaHQgbm93XG4gICAgLy8gSWYgdGhlIHZpZXcgcmVsaWVzIG9uIGNlcnRhaW4gdmFsdWVzIFwiZnJvbVwiIGhhcyB0byBiZSBwcmVzZW50XG5cbiAgICBsZXQgcXVldWUgPSBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcblxuICAgIGlmIChpcy5hcnIocHJvcHMudG8pKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLnRvLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaTtcblxuICAgICAgICBjb25zdCBmcmVzaCA9IF9leHRlbmRzKHt9LCBwcm9wcywgaW50ZXJwb2xhdGVUbyhwcm9wcy50b1tpbmRleF0pKTtcblxuICAgICAgICBpZiAoaXMuYXJyKGZyZXNoLmNvbmZpZykpIGZyZXNoLmNvbmZpZyA9IGZyZXNoLmNvbmZpZ1tpbmRleF07XG4gICAgICAgIHF1ZXVlID0gcXVldWUudGhlbigoKSA9PiB7XG4gICAgICAgICAgLy90aGlzLnN0b3AoKVxuICAgICAgICAgIGlmIChsb2NhbCA9PT0gdGhpcy5ndWlkKSByZXR1cm4gbmV3IFByb21pc2UociA9PiB0aGlzLmRpZmYoZnJlc2gpLnN0YXJ0KHIpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpcy5mdW4ocHJvcHMudG8pKSB7XG4gICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgbGV0IGxhc3Q7XG4gICAgICBxdWV1ZSA9IHF1ZXVlLnRoZW4oKCkgPT4gcHJvcHMudG8oIC8vIG5leHQocHJvcHMpXG4gICAgICBwID0+IHtcbiAgICAgICAgY29uc3QgZnJlc2ggPSBfZXh0ZW5kcyh7fSwgcHJvcHMsIGludGVycG9sYXRlVG8ocCkpO1xuXG4gICAgICAgIGlmIChpcy5hcnIoZnJlc2guY29uZmlnKSkgZnJlc2guY29uZmlnID0gZnJlc2guY29uZmlnW2luZGV4XTtcbiAgICAgICAgaW5kZXgrKzsgLy90aGlzLnN0b3AoKVxuXG4gICAgICAgIGlmIChsb2NhbCA9PT0gdGhpcy5ndWlkKSByZXR1cm4gbGFzdCA9IG5ldyBQcm9taXNlKHIgPT4gdGhpcy5kaWZmKGZyZXNoKS5zdGFydChyKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0sIC8vIGNhbmNlbCgpXG4gICAgICBmdW5jdGlvbiAoZmluaXNoZWQpIHtcbiAgICAgICAgaWYgKGZpbmlzaGVkID09PSB2b2lkIDApIHtcbiAgICAgICAgICBmaW5pc2hlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX3RoaXMuc3RvcChmaW5pc2hlZCk7XG4gICAgICB9KS50aGVuKCgpID0+IGxhc3QpKTtcbiAgICB9XG5cbiAgICBxdWV1ZS50aGVuKG9uRW5kKTtcbiAgfVxuXG4gIGRpZmYocHJvcHMpIHtcbiAgICB0aGlzLnByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHByb3BzKTtcbiAgICBsZXQgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBfdGhpcyRwcm9wcyRmcm9tID0gX3RoaXMkcHJvcHMuZnJvbSxcbiAgICAgICAgZnJvbSA9IF90aGlzJHByb3BzJGZyb20gPT09IHZvaWQgMCA/IHt9IDogX3RoaXMkcHJvcHMkZnJvbSxcbiAgICAgICAgX3RoaXMkcHJvcHMkdG8gPSBfdGhpcyRwcm9wcy50byxcbiAgICAgICAgdG8gPSBfdGhpcyRwcm9wcyR0byA9PT0gdm9pZCAwID8ge30gOiBfdGhpcyRwcm9wcyR0byxcbiAgICAgICAgX3RoaXMkcHJvcHMkY29uZmlnID0gX3RoaXMkcHJvcHMuY29uZmlnLFxuICAgICAgICBjb25maWcgPSBfdGhpcyRwcm9wcyRjb25maWcgPT09IHZvaWQgMCA/IHt9IDogX3RoaXMkcHJvcHMkY29uZmlnLFxuICAgICAgICByZXZlcnNlID0gX3RoaXMkcHJvcHMucmV2ZXJzZSxcbiAgICAgICAgYXR0YWNoID0gX3RoaXMkcHJvcHMuYXR0YWNoLFxuICAgICAgICByZXNldCA9IF90aGlzJHByb3BzLnJlc2V0LFxuICAgICAgICBpbW1lZGlhdGUgPSBfdGhpcyRwcm9wcy5pbW1lZGlhdGU7IC8vIFJldmVyc2UgdmFsdWVzIHdoZW4gcmVxdWVzdGVkXG5cbiAgICBpZiAocmV2ZXJzZSkge1xuICAgICAgdmFyIF9yZWY2ID0gW3RvLCBmcm9tXTtcbiAgICAgIGZyb20gPSBfcmVmNlswXTtcbiAgICAgIHRvID0gX3JlZjZbMV07XG4gICAgfSAvLyBUaGlzIHdpbGwgY29sbGVjdCBhbGwgcHJvcHMgdGhhdCB3ZXJlIGV2ZXIgc2V0LCByZXNldCBtZXJnZWQgcHJvcHMgd2hlbiBuZWNlc3NhcnlcblxuXG4gICAgdGhpcy5tZXJnZWQgPSBfZXh0ZW5kcyh7fSwgZnJvbSwgdGhpcy5tZXJnZWQsIHRvKTtcbiAgICB0aGlzLmhhc0NoYW5nZWQgPSBmYWxzZTsgLy8gQXR0YWNobWVudCBoYW5kbGluZywgdHJhaWxlZCBzcHJpbmdzIGNhbiBcImF0dGFjaFwiIHRoZW1zZWx2ZXMgdG8gYSBwcmV2aW91cyBzcHJpbmdcblxuICAgIGxldCB0YXJnZXQgPSBhdHRhY2ggJiYgYXR0YWNoKHRoaXMpOyAvLyBSZWR1Y2VzIGlucHV0IHsgbmFtZTogdmFsdWUgfSBwYWlycyBpbnRvIGFuaW1hdGVkIHZhbHVlc1xuXG4gICAgdGhpcy5hbmltYXRpb25zID0gT2JqZWN0LmVudHJpZXModGhpcy5tZXJnZWQpLnJlZHVjZSgoYWNjLCBfcmVmNykgPT4ge1xuICAgICAgbGV0IG5hbWUgPSBfcmVmN1swXSxcbiAgICAgICAgICB2YWx1ZSA9IF9yZWY3WzFdO1xuICAgICAgLy8gSXNzdWUgY2FjaGVkIGVudHJpZXMsIGV4Y2VwdCBvbiByZXNldFxuICAgICAgbGV0IGVudHJ5ID0gYWNjW25hbWVdIHx8IHt9OyAvLyBGaWd1cmUgb3V0IHdoYXQgdGhlIHZhbHVlIGlzIHN1cHBvc2VkIHRvIGJlXG5cbiAgICAgIGNvbnN0IGlzTnVtYmVyID0gaXMubnVtKHZhbHVlKTtcbiAgICAgIGNvbnN0IGlzU3RyaW5nID0gaXMuc3RyKHZhbHVlKSAmJiAhdmFsdWUuc3RhcnRzV2l0aCgnIycpICYmICEvXFxkLy50ZXN0KHZhbHVlKSAmJiAhY29sb3JOYW1lc1t2YWx1ZV07XG4gICAgICBjb25zdCBpc0FycmF5ID0gaXMuYXJyKHZhbHVlKTtcbiAgICAgIGNvbnN0IGlzSW50ZXJwb2xhdGlvbiA9ICFpc051bWJlciAmJiAhaXNBcnJheSAmJiAhaXNTdHJpbmc7XG4gICAgICBsZXQgZnJvbVZhbHVlID0gIWlzLnVuZChmcm9tW25hbWVdKSA/IGZyb21bbmFtZV0gOiB2YWx1ZTtcbiAgICAgIGxldCB0b1ZhbHVlID0gaXNOdW1iZXIgfHwgaXNBcnJheSA/IHZhbHVlIDogaXNTdHJpbmcgPyB2YWx1ZSA6IDE7XG4gICAgICBsZXQgdG9Db25maWcgPSBjYWxsUHJvcChjb25maWcsIG5hbWUpO1xuICAgICAgaWYgKHRhcmdldCkgdG9WYWx1ZSA9IHRhcmdldC5hbmltYXRpb25zW25hbWVdLnBhcmVudDtcbiAgICAgIGxldCBwYXJlbnQgPSBlbnRyeS5wYXJlbnQsXG4gICAgICAgICAgaW50ZXJwb2xhdGlvbiQkMSA9IGVudHJ5LmludGVycG9sYXRpb24sXG4gICAgICAgICAgdG9WYWx1ZXMgPSB0b0FycmF5KHRhcmdldCA/IHRvVmFsdWUuZ2V0UGF5bG9hZCgpIDogdG9WYWx1ZSksXG4gICAgICAgICAgYW5pbWF0ZWRWYWx1ZXM7XG4gICAgICBsZXQgbmV3VmFsdWUgPSB2YWx1ZTtcbiAgICAgIGlmIChpc0ludGVycG9sYXRpb24pIG5ld1ZhbHVlID0gaW50ZXJwb2xhdGlvbih7XG4gICAgICAgIHJhbmdlOiBbMCwgMV0sXG4gICAgICAgIG91dHB1dDogW3ZhbHVlLCB2YWx1ZV1cbiAgICAgIH0pKDEpO1xuICAgICAgbGV0IGN1cnJlbnRWYWx1ZSA9IGludGVycG9sYXRpb24kJDEgJiYgaW50ZXJwb2xhdGlvbiQkMS5nZXRWYWx1ZSgpOyAvLyBDaGFuZ2UgZGV0ZWN0aW9uIGZsYWdzXG5cbiAgICAgIGNvbnN0IGlzRmlyc3QgPSBpcy51bmQocGFyZW50KTtcbiAgICAgIGNvbnN0IGlzQWN0aXZlID0gIWlzRmlyc3QgJiYgZW50cnkuYW5pbWF0ZWRWYWx1ZXMuc29tZSh2ID0+ICF2LmRvbmUpO1xuICAgICAgY29uc3QgY3VycmVudFZhbHVlRGlmZmVyc0Zyb21Hb2FsID0gIWlzLmVxdShuZXdWYWx1ZSwgY3VycmVudFZhbHVlKTtcbiAgICAgIGNvbnN0IGhhc05ld0dvYWwgPSAhaXMuZXF1KG5ld1ZhbHVlLCBlbnRyeS5wcmV2aW91cyk7XG4gICAgICBjb25zdCBoYXNOZXdDb25maWcgPSAhaXMuZXF1KHRvQ29uZmlnLCBlbnRyeS5jb25maWcpOyAvLyBDaGFuZ2UgYW5pbWF0aW9uIHByb3BzIHdoZW4gcHJvcHMgaW5kaWNhdGUgYSBuZXcgZ29hbCAobmV3IHZhbHVlIGRpZmZlcnMgZnJvbSBwcmV2aW91cyBvbmUpXG4gICAgICAvLyBhbmQgY3VycmVudCB2YWx1ZXMgZGlmZmVyIGZyb20gaXQuIENvbmZpZyBjaGFuZ2VzIHRyaWdnZXIgYSBuZXcgdXBkYXRlIGFzIHdlbGwgKHRob3VnaCBwcm9iYWJseSBzaG91bGRuJ3Q/KVxuXG4gICAgICBpZiAocmVzZXQgfHwgaGFzTmV3R29hbCAmJiBjdXJyZW50VmFsdWVEaWZmZXJzRnJvbUdvYWwgfHwgaGFzTmV3Q29uZmlnKSB7XG4gICAgICAgIC8vIENvbnZlcnQgcmVndWxhciB2YWx1ZXMgaW50byBhbmltYXRlZCB2YWx1ZXMsIEFMV0FZUyByZS11c2UgaWYgcG9zc2libGVcbiAgICAgICAgaWYgKGlzTnVtYmVyIHx8IGlzU3RyaW5nKSBwYXJlbnQgPSBpbnRlcnBvbGF0aW9uJCQxID0gZW50cnkucGFyZW50IHx8IG5ldyBBbmltYXRlZFZhbHVlKGZyb21WYWx1ZSk7ZWxzZSBpZiAoaXNBcnJheSkgcGFyZW50ID0gaW50ZXJwb2xhdGlvbiQkMSA9IGVudHJ5LnBhcmVudCB8fCBuZXcgQW5pbWF0ZWRWYWx1ZUFycmF5KGZyb21WYWx1ZSk7ZWxzZSBpZiAoaXNJbnRlcnBvbGF0aW9uKSB7XG4gICAgICAgICAgbGV0IHByZXYgPSBlbnRyeS5pbnRlcnBvbGF0aW9uICYmIGVudHJ5LmludGVycG9sYXRpb24uY2FsYyhlbnRyeS5wYXJlbnQudmFsdWUpO1xuICAgICAgICAgIHByZXYgPSBwcmV2ICE9PSB2b2lkIDAgJiYgIXJlc2V0ID8gcHJldiA6IGZyb21WYWx1ZTtcblxuICAgICAgICAgIGlmIChlbnRyeS5wYXJlbnQpIHtcbiAgICAgICAgICAgIHBhcmVudCA9IGVudHJ5LnBhcmVudDtcbiAgICAgICAgICAgIHBhcmVudC5zZXRWYWx1ZSgwLCBmYWxzZSk7XG4gICAgICAgICAgfSBlbHNlIHBhcmVudCA9IG5ldyBBbmltYXRlZFZhbHVlKDApO1xuXG4gICAgICAgICAgY29uc3QgcmFuZ2UgPSB7XG4gICAgICAgICAgICBvdXRwdXQ6IFtwcmV2LCB2YWx1ZV1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKGVudHJ5LmludGVycG9sYXRpb24pIHtcbiAgICAgICAgICAgIGludGVycG9sYXRpb24kJDEgPSBlbnRyeS5pbnRlcnBvbGF0aW9uO1xuICAgICAgICAgICAgZW50cnkuaW50ZXJwb2xhdGlvbi51cGRhdGVDb25maWcocmFuZ2UpO1xuICAgICAgICAgIH0gZWxzZSBpbnRlcnBvbGF0aW9uJCQxID0gcGFyZW50LmludGVycG9sYXRlKHJhbmdlKTtcbiAgICAgICAgfVxuICAgICAgICB0b1ZhbHVlcyA9IHRvQXJyYXkodGFyZ2V0ID8gdG9WYWx1ZS5nZXRQYXlsb2FkKCkgOiB0b1ZhbHVlKTtcbiAgICAgICAgYW5pbWF0ZWRWYWx1ZXMgPSB0b0FycmF5KHBhcmVudC5nZXRQYXlsb2FkKCkpO1xuICAgICAgICBpZiAocmVzZXQgJiYgIWlzSW50ZXJwb2xhdGlvbikgcGFyZW50LnNldFZhbHVlKGZyb21WYWx1ZSwgZmFsc2UpO1xuICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSB0cnVlOyAvLyBSZXNldCBhbmltYXRlZCB2YWx1ZXNcblxuICAgICAgICBhbmltYXRlZFZhbHVlcy5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgICB2YWx1ZS5zdGFydFBvc2l0aW9uID0gdmFsdWUudmFsdWU7XG4gICAgICAgICAgdmFsdWUubGFzdFBvc2l0aW9uID0gdmFsdWUudmFsdWU7XG4gICAgICAgICAgdmFsdWUubGFzdFZlbG9jaXR5ID0gaXNBY3RpdmUgPyB2YWx1ZS5sYXN0VmVsb2NpdHkgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgdmFsdWUubGFzdFRpbWUgPSBpc0FjdGl2ZSA/IHZhbHVlLmxhc3RUaW1lIDogdW5kZWZpbmVkO1xuICAgICAgICAgIHZhbHVlLnN0YXJ0VGltZSA9IG5vdygpO1xuICAgICAgICAgIHZhbHVlLmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICB2YWx1ZS5hbmltYXRlZFN0eWxlcy5jbGVhcigpO1xuICAgICAgICB9KTsgLy8gU2V0IGltbWVkaWF0ZSB2YWx1ZXNcblxuICAgICAgICBpZiAoY2FsbFByb3AoaW1tZWRpYXRlLCBuYW1lKSkge1xuICAgICAgICAgIHBhcmVudC5zZXRWYWx1ZShpc0ludGVycG9sYXRpb24gPyB0b1ZhbHVlIDogdmFsdWUsIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgYWNjLCB7XG4gICAgICAgICAgW25hbWVdOiBfZXh0ZW5kcyh7fSwgZW50cnksIHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBwYXJlbnQsXG4gICAgICAgICAgICBpbnRlcnBvbGF0aW9uOiBpbnRlcnBvbGF0aW9uJCQxLFxuICAgICAgICAgICAgYW5pbWF0ZWRWYWx1ZXMsXG4gICAgICAgICAgICB0b1ZhbHVlcyxcbiAgICAgICAgICAgIHByZXZpb3VzOiBuZXdWYWx1ZSxcbiAgICAgICAgICAgIGNvbmZpZzogdG9Db25maWcsXG4gICAgICAgICAgICBmcm9tVmFsdWVzOiB0b0FycmF5KHBhcmVudC5nZXRWYWx1ZSgpKSxcbiAgICAgICAgICAgIGltbWVkaWF0ZTogY2FsbFByb3AoaW1tZWRpYXRlLCBuYW1lKSxcbiAgICAgICAgICAgIGluaXRpYWxWZWxvY2l0eTogd2l0aERlZmF1bHQodG9Db25maWcudmVsb2NpdHksIDApLFxuICAgICAgICAgICAgY2xhbXA6IHdpdGhEZWZhdWx0KHRvQ29uZmlnLmNsYW1wLCBmYWxzZSksXG4gICAgICAgICAgICBwcmVjaXNpb246IHdpdGhEZWZhdWx0KHRvQ29uZmlnLnByZWNpc2lvbiwgMC4wMSksXG4gICAgICAgICAgICB0ZW5zaW9uOiB3aXRoRGVmYXVsdCh0b0NvbmZpZy50ZW5zaW9uLCAxNzApLFxuICAgICAgICAgICAgZnJpY3Rpb246IHdpdGhEZWZhdWx0KHRvQ29uZmlnLmZyaWN0aW9uLCAyNiksXG4gICAgICAgICAgICBtYXNzOiB3aXRoRGVmYXVsdCh0b0NvbmZpZy5tYXNzLCAxKSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiB0b0NvbmZpZy5kdXJhdGlvbixcbiAgICAgICAgICAgIGVhc2luZzogd2l0aERlZmF1bHQodG9Db25maWcuZWFzaW5nLCB0ID0+IHQpLFxuICAgICAgICAgICAgZGVjYXk6IHRvQ29uZmlnLmRlY2F5XG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWN1cnJlbnRWYWx1ZURpZmZlcnNGcm9tR29hbCkge1xuICAgICAgICAgIC8vIFNvIC4uLiB0aGUgY3VycmVudCB0YXJnZXQgdmFsdWUgKG5ld1ZhbHVlKSBhcHBlYXJzIHRvIGJlIGRpZmZlcmVudCBmcm9tIHRoZSBwcmV2aW91cyB2YWx1ZSxcbiAgICAgICAgICAvLyB3aGljaCBub3JtYWxseSBjb25zdGl0dXRlcyBhbiB1cGRhdGUsIGJ1dCB0aGUgYWN0dWFsIHZhbHVlIChjdXJyZW50VmFsdWUpIG1hdGNoZXMgdGhlIHRhcmdldCFcbiAgICAgICAgICAvLyBJbiBvcmRlciB0byByZXNvbHZlIHRoaXMgd2l0aG91dCBjYXVzaW5nIGFuIGFuaW1hdGlvbiB1cGRhdGUgd2Ugc2lsZW50bHkgZmxhZyB0aGUgYW5pbWF0aW9uIGFzIGRvbmUsXG4gICAgICAgICAgLy8gd2hpY2ggaXQgdGVjaG5pY2FsbHkgaXMuIEludGVycG9sYXRpb25zIGFsc28gbmVlZHMgYSBjb25maWcgdXBkYXRlIHdpdGggdGhlaXIgdGFyZ2V0IHNldCB0byAxLlxuICAgICAgICAgIGlmIChpc0ludGVycG9sYXRpb24pIHtcbiAgICAgICAgICAgIHBhcmVudC5zZXRWYWx1ZSgxLCBmYWxzZSk7XG4gICAgICAgICAgICBpbnRlcnBvbGF0aW9uJCQxLnVwZGF0ZUNvbmZpZyh7XG4gICAgICAgICAgICAgIG91dHB1dDogW25ld1ZhbHVlLCBuZXdWYWx1ZV1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHBhcmVudC5kb25lID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgYWNjLCB7XG4gICAgICAgICAgICBbbmFtZV06IF9leHRlbmRzKHt9LCBhY2NbbmFtZV0sIHtcbiAgICAgICAgICAgICAgcHJldmlvdXM6IG5ld1ZhbHVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH1cbiAgICB9LCB0aGlzLmFuaW1hdGlvbnMpO1xuXG4gICAgaWYgKHRoaXMuaGFzQ2hhbmdlZCkge1xuICAgICAgLy8gTWFrZSBhbmltYXRpb25zIGF2YWlsYWJsZSB0byBmcmFtZWxvb3BcbiAgICAgIHRoaXMuY29uZmlncyA9IE9iamVjdC52YWx1ZXModGhpcy5hbmltYXRpb25zKTtcbiAgICAgIHRoaXMudmFsdWVzID0ge307XG4gICAgICB0aGlzLmludGVycG9sYXRpb25zID0ge307XG5cbiAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmFuaW1hdGlvbnMpIHtcbiAgICAgICAgdGhpcy5pbnRlcnBvbGF0aW9uc1trZXldID0gdGhpcy5hbmltYXRpb25zW2tleV0uaW50ZXJwb2xhdGlvbjtcbiAgICAgICAgdGhpcy52YWx1ZXNba2V5XSA9IHRoaXMuYW5pbWF0aW9uc1trZXldLmludGVycG9sYXRpb24uZ2V0VmFsdWUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdG9wKCk7XG4gICAgdGhpcy5wcm9wcyA9IHt9O1xuICAgIHRoaXMubWVyZ2VkID0ge307XG4gICAgdGhpcy5hbmltYXRpb25zID0ge307XG4gICAgdGhpcy5pbnRlcnBvbGF0aW9ucyA9IHt9O1xuICAgIHRoaXMudmFsdWVzID0ge307XG4gICAgdGhpcy5jb25maWdzID0gW107XG4gICAgdGhpcy5sb2NhbCA9IDA7XG4gIH1cblxufVxuXG4vKiogQVBJXG4gKiBjb25zdCBwcm9wcyA9IHVzZVNwcmluZ3MobnVtYmVyLCBbeyAuLi4gfSwgeyAuLi4gfSwgLi4uXSlcbiAqIGNvbnN0IFtwcm9wcywgc2V0XSA9IHVzZVNwcmluZ3MobnVtYmVyLCAoaSwgY29udHJvbGxlcikgPT4gKHsgLi4uIH0pKVxuICovXG5cbmNvbnN0IHVzZVNwcmluZ3MgPSAobGVuZ3RoLCBwcm9wcykgPT4ge1xuICBjb25zdCBtb3VudGVkID0gdXNlUmVmKGZhbHNlKTtcbiAgY29uc3QgY3RybCA9IHVzZVJlZigpO1xuICBjb25zdCBpc0ZuID0gaXMuZnVuKHByb3BzKTsgLy8gVGhlIGNvbnRyb2xsZXIgbWFpbnRhaW5zIHRoZSBhbmltYXRpb24gdmFsdWVzLCBzdGFydHMgYW5kIHN0b3BzIGFuaW1hdGlvbnNcblxuICBjb25zdCBfdXNlTWVtbyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIC8vIFJlbW92ZSBvbGQgY29udHJvbGxlcnNcbiAgICBpZiAoY3RybC5jdXJyZW50KSB7XG4gICAgICBjdHJsLmN1cnJlbnQubWFwKGMgPT4gYy5kZXN0cm95KCkpO1xuICAgICAgY3RybC5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGxldCByZWY7XG4gICAgcmV0dXJuIFtuZXcgQXJyYXkobGVuZ3RoKS5maWxsKCkubWFwKChfLCBpKSA9PiB7XG4gICAgICBjb25zdCBjdHJsID0gbmV3IENvbnRyb2xsZXIoKTtcbiAgICAgIGNvbnN0IG5ld1Byb3BzID0gaXNGbiA/IGNhbGxQcm9wKHByb3BzLCBpLCBjdHJsKSA6IHByb3BzW2ldO1xuICAgICAgaWYgKGkgPT09IDApIHJlZiA9IG5ld1Byb3BzLnJlZjtcbiAgICAgIGN0cmwudXBkYXRlKG5ld1Byb3BzKTtcbiAgICAgIGlmICghcmVmKSBjdHJsLnN0YXJ0KCk7XG4gICAgICByZXR1cm4gY3RybDtcbiAgICB9KSwgcmVmXTtcbiAgfSwgW2xlbmd0aF0pLFxuICAgICAgICBjb250cm9sbGVycyA9IF91c2VNZW1vWzBdLFxuICAgICAgICByZWYgPSBfdXNlTWVtb1sxXTtcblxuICBjdHJsLmN1cnJlbnQgPSBjb250cm9sbGVyczsgLy8gVGhlIGhvb2tzIHJlZmVyZW5jZSBhcGkgZ2V0cyBkZWZpbmVkIGhlcmUgLi4uXG5cbiAgY29uc3QgYXBpID0gdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+ICh7XG4gICAgc3RhcnQ6ICgpID0+IFByb21pc2UuYWxsKGN0cmwuY3VycmVudC5tYXAoYyA9PiBuZXcgUHJvbWlzZShyID0+IGMuc3RhcnQocikpKSksXG4gICAgc3RvcDogZmluaXNoZWQgPT4gY3RybC5jdXJyZW50LmZvckVhY2goYyA9PiBjLnN0b3AoZmluaXNoZWQpKSxcblxuICAgIGdldCBjb250cm9sbGVycygpIHtcbiAgICAgIHJldHVybiBjdHJsLmN1cnJlbnQ7XG4gICAgfVxuXG4gIH0pKTsgLy8gVGhpcyBmdW5jdGlvbiB1cGRhdGVzIHRoZSBjb250cm9sbGVyc1xuXG4gIGNvbnN0IHVwZGF0ZUN0cmwgPSB1c2VNZW1vKCgpID0+IHVwZGF0ZVByb3BzID0+IGN0cmwuY3VycmVudC5tYXAoKGMsIGkpID0+IHtcbiAgICBjLnVwZGF0ZShpc0ZuID8gY2FsbFByb3AodXBkYXRlUHJvcHMsIGksIGMpIDogdXBkYXRlUHJvcHNbaV0pO1xuICAgIGlmICghcmVmKSBjLnN0YXJ0KCk7XG4gIH0pLCBbbGVuZ3RoXSk7IC8vIFVwZGF0ZSBjb250cm9sbGVyIGlmIHByb3BzIGFyZW4ndCBmdW5jdGlvbmFsXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobW91bnRlZC5jdXJyZW50KSB7XG4gICAgICBpZiAoIWlzRm4pIHVwZGF0ZUN0cmwocHJvcHMpO1xuICAgIH0gZWxzZSBpZiAoIXJlZikgY3RybC5jdXJyZW50LmZvckVhY2goYyA9PiBjLnN0YXJ0KCkpO1xuICB9KTsgLy8gVXBkYXRlIG1vdW50ZWQgZmxhZyBhbmQgZGVzdHJveSBjb250cm9sbGVyIG9uIHVubW91bnRcblxuICB1c2VFZmZlY3QoKCkgPT4gKG1vdW50ZWQuY3VycmVudCA9IHRydWUsICgpID0+IGN0cmwuY3VycmVudC5mb3JFYWNoKGMgPT4gYy5kZXN0cm95KCkpKSwgW10pOyAvLyBSZXR1cm4gYW5pbWF0ZWQgcHJvcHMsIG9yLCBhbmltLXByb3BzICsgdGhlIHVwZGF0ZS1zZXR0ZXIgYWJvdmVcblxuICBjb25zdCBwcm9wVmFsdWVzID0gY3RybC5jdXJyZW50Lm1hcChjID0+IGMuZ2V0VmFsdWVzKCkpO1xuICByZXR1cm4gaXNGbiA/IFtwcm9wVmFsdWVzLCB1cGRhdGVDdHJsLCBmaW5pc2hlZCA9PiBjdHJsLmN1cnJlbnQuZm9yRWFjaChjID0+IGMucGF1c2UoZmluaXNoZWQpKV0gOiBwcm9wVmFsdWVzO1xufTtcblxuLyoqIEFQSVxuICogY29uc3QgcHJvcHMgPSB1c2VTcHJpbmcoeyAuLi4gfSlcbiAqIGNvbnN0IFtwcm9wcywgc2V0XSA9IHVzZVNwcmluZygoKSA9PiAoeyAuLi4gfSkpXG4gKi9cblxuY29uc3QgdXNlU3ByaW5nID0gcHJvcHMgPT4ge1xuICBjb25zdCBpc0ZuID0gaXMuZnVuKHByb3BzKTtcblxuICBjb25zdCBfdXNlU3ByaW5ncyA9IHVzZVNwcmluZ3MoMSwgaXNGbiA/IHByb3BzIDogW3Byb3BzXSksXG4gICAgICAgIHJlc3VsdCA9IF91c2VTcHJpbmdzWzBdLFxuICAgICAgICBzZXQgPSBfdXNlU3ByaW5nc1sxXSxcbiAgICAgICAgcGF1c2UgPSBfdXNlU3ByaW5nc1syXTtcblxuICByZXR1cm4gaXNGbiA/IFtyZXN1bHRbMF0sIHNldCwgcGF1c2VdIDogcmVzdWx0O1xufTtcblxuLyoqIEFQSVxuICogY29uc3QgdHJhaWxzID0gdXNlVHJhaWwobnVtYmVyLCB7IC4uLiB9KVxuICogY29uc3QgW3RyYWlscywgc2V0XSA9IHVzZVRyYWlsKG51bWJlciwgKCkgPT4gKHsgLi4uIH0pKVxuICovXG5cbmNvbnN0IHVzZVRyYWlsID0gKGxlbmd0aCwgcHJvcHMpID0+IHtcbiAgY29uc3QgbW91bnRlZCA9IHVzZVJlZihmYWxzZSk7XG4gIGNvbnN0IGlzRm4gPSBpcy5mdW4ocHJvcHMpO1xuICBjb25zdCB1cGRhdGVQcm9wcyA9IGNhbGxQcm9wKHByb3BzKTtcbiAgY29uc3QgaW5zdGFuY2VzID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgX3VzZVNwcmluZ3MgPSB1c2VTcHJpbmdzKGxlbmd0aCwgKGksIGN0cmwpID0+IHtcbiAgICBpZiAoaSA9PT0gMCkgaW5zdGFuY2VzLmN1cnJlbnQgPSBbXTtcbiAgICBpbnN0YW5jZXMuY3VycmVudC5wdXNoKGN0cmwpO1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgdXBkYXRlUHJvcHMsIHtcbiAgICAgIGNvbmZpZzogY2FsbFByb3AodXBkYXRlUHJvcHMuY29uZmlnLCBpKSxcbiAgICAgIGF0dGFjaDogaSA+IDAgJiYgKCgpID0+IGluc3RhbmNlcy5jdXJyZW50W2kgLSAxXSlcbiAgICB9KTtcbiAgfSksXG4gICAgICAgIHJlc3VsdCA9IF91c2VTcHJpbmdzWzBdLFxuICAgICAgICBzZXQgPSBfdXNlU3ByaW5nc1sxXSxcbiAgICAgICAgcGF1c2UgPSBfdXNlU3ByaW5nc1syXTsgLy8gU2V0IHVwIGZ1bmN0aW9uIHRvIHVwZGF0ZSBjb250cm9sbGVyXG5cblxuICBjb25zdCB1cGRhdGVDdHJsID0gdXNlTWVtbygoKSA9PiBwcm9wcyA9PiBzZXQoKGksIGN0cmwpID0+IHtcbiAgICBjb25zdCBsYXN0ID0gcHJvcHMucmV2ZXJzZSA/IGkgPT09IDAgOiBsZW5ndGggLSAxID09PSBpO1xuICAgIGNvbnN0IGF0dGFjaElkeCA9IHByb3BzLnJldmVyc2UgPyBpICsgMSA6IGkgLSAxO1xuICAgIGNvbnN0IGF0dGFjaENvbnRyb2xsZXIgPSBpbnN0YW5jZXMuY3VycmVudFthdHRhY2hJZHhdO1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIGNvbmZpZzogY2FsbFByb3AocHJvcHMuY29uZmlnIHx8IHVwZGF0ZVByb3BzLmNvbmZpZywgaSksXG4gICAgICBhdHRhY2g6IGF0dGFjaENvbnRyb2xsZXIgJiYgKCgpID0+IGF0dGFjaENvbnRyb2xsZXIpXG4gICAgfSk7XG4gIH0pLCBbbGVuZ3RoLCB1cGRhdGVQcm9wcy5yZXZlcnNlXSk7IC8vIFVwZGF0ZSBjb250cm9sbGVyIGlmIHByb3BzIGFyZW4ndCBmdW5jdGlvbmFsXG5cbiAgdXNlRWZmZWN0KCgpID0+IHZvaWQgKG1vdW50ZWQuY3VycmVudCAmJiAhaXNGbiAmJiB1cGRhdGVDdHJsKHByb3BzKSkpOyAvLyBVcGRhdGUgbW91bnRlZCBmbGFnIGFuZCBkZXN0cm95IGNvbnRyb2xsZXIgb24gdW5tb3VudFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB2b2lkIChtb3VudGVkLmN1cnJlbnQgPSB0cnVlKSwgW10pO1xuICByZXR1cm4gaXNGbiA/IFtyZXN1bHQsIHVwZGF0ZUN0cmwsIHBhdXNlXSA6IHJlc3VsdDtcbn07XG5cbi8qKiBBUElcbiAqIGNvbnN0IHRyYW5zaXRpb25zID0gdXNlVHJhbnNpdGlvbihpdGVtcywgaXRlbUtleXMsIHsgLi4uIH0pXG4gKiBjb25zdCBbdHJhbnNpdGlvbnMsIHVwZGF0ZV0gPSB1c2VUcmFuc2l0aW9uKGl0ZW1zLCBpdGVtS2V5cywgKCkgPT4gKHsgLi4uIH0pKVxuICovXG5cbmxldCBndWlkID0gMDtcbmNvbnN0IEVOVEVSID0gJ2VudGVyJztcbmNvbnN0IExFQVZFID0gJ2xlYXZlJztcbmNvbnN0IFVQREFURSA9ICd1cGRhdGUnO1xuXG5jb25zdCBtYXBLZXlzID0gKGl0ZW1zLCBrZXlzKSA9PiAodHlwZW9mIGtleXMgPT09ICdmdW5jdGlvbicgPyBpdGVtcy5tYXAoa2V5cykgOiB0b0FycmF5KGtleXMpKS5tYXAoU3RyaW5nKTtcblxuY29uc3QgZ2V0ID0gcHJvcHMgPT4ge1xuICBsZXQgaXRlbXMgPSBwcm9wcy5pdGVtcyxcbiAgICAgIF9wcm9wcyRrZXlzID0gcHJvcHMua2V5cyxcbiAgICAgIGtleXMgPSBfcHJvcHMka2V5cyA9PT0gdm9pZCAwID8gaXRlbSA9PiBpdGVtIDogX3Byb3BzJGtleXMsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIFtcIml0ZW1zXCIsIFwia2V5c1wiXSk7XG5cbiAgaXRlbXMgPSB0b0FycmF5KGl0ZW1zICE9PSB2b2lkIDAgPyBpdGVtcyA6IG51bGwpO1xuICByZXR1cm4gX2V4dGVuZHMoe1xuICAgIGl0ZW1zLFxuICAgIGtleXM6IG1hcEtleXMoaXRlbXMsIGtleXMpXG4gIH0sIHJlc3QpO1xufTtcblxuZnVuY3Rpb24gdXNlVHJhbnNpdGlvbihpbnB1dCwga2V5VHJhbnNmb3JtLCBjb25maWcpIHtcbiAgY29uc3QgcHJvcHMgPSBfZXh0ZW5kcyh7XG4gICAgaXRlbXM6IGlucHV0LFxuICAgIGtleXM6IGtleVRyYW5zZm9ybSB8fCAoaSA9PiBpKVxuICB9LCBjb25maWcpO1xuXG4gIGNvbnN0IF9nZXQgPSBnZXQocHJvcHMpLFxuICAgICAgICBfZ2V0JGxhenkgPSBfZ2V0LmxhenksXG4gICAgICAgIGxhenkgPSBfZ2V0JGxhenkgPT09IHZvaWQgMCA/IGZhbHNlIDogX2dldCRsYXp5LFxuICAgICAgICBfZ2V0JHVuaXF1ZSA9IF9nZXQudW5pcXVlLFxuICAgICAgICBfZ2V0JHJlc2V0ID0gX2dldC5yZXNldCxcbiAgICAgICAgcmVzZXQgPSBfZ2V0JHJlc2V0ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9nZXQkcmVzZXQsXG4gICAgICAgIGVudGVyID0gX2dldC5lbnRlcixcbiAgICAgICAgbGVhdmUgPSBfZ2V0LmxlYXZlLFxuICAgICAgICB1cGRhdGUgPSBfZ2V0LnVwZGF0ZSxcbiAgICAgICAgb25EZXN0cm95ZWQgPSBfZ2V0Lm9uRGVzdHJveWVkLFxuICAgICAgICBrZXlzID0gX2dldC5rZXlzLFxuICAgICAgICBpdGVtcyA9IF9nZXQuaXRlbXMsXG4gICAgICAgIG9uRnJhbWUgPSBfZ2V0Lm9uRnJhbWUsXG4gICAgICAgIF9vblJlc3QgPSBfZ2V0Lm9uUmVzdCxcbiAgICAgICAgb25TdGFydCA9IF9nZXQub25TdGFydCxcbiAgICAgICAgcmVmID0gX2dldC5yZWYsXG4gICAgICAgIGV4dHJhID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX2dldCwgW1wibGF6eVwiLCBcInVuaXF1ZVwiLCBcInJlc2V0XCIsIFwiZW50ZXJcIiwgXCJsZWF2ZVwiLCBcInVwZGF0ZVwiLCBcIm9uRGVzdHJveWVkXCIsIFwia2V5c1wiLCBcIml0ZW1zXCIsIFwib25GcmFtZVwiLCBcIm9uUmVzdFwiLCBcIm9uU3RhcnRcIiwgXCJyZWZcIl0pO1xuXG4gIGNvbnN0IGZvcmNlVXBkYXRlID0gdXNlRm9yY2VVcGRhdGUoKTtcbiAgY29uc3QgbW91bnRlZCA9IHVzZVJlZihmYWxzZSk7XG4gIGNvbnN0IHN0YXRlID0gdXNlUmVmKHtcbiAgICBtb3VudGVkOiBmYWxzZSxcbiAgICBmaXJzdDogdHJ1ZSxcbiAgICBkZWxldGVkOiBbXSxcbiAgICBjdXJyZW50OiB7fSxcbiAgICB0cmFuc2l0aW9uczogW10sXG4gICAgcHJldlByb3BzOiB7fSxcbiAgICBwYXVzZWQ6ICEhcHJvcHMucmVmLFxuICAgIGluc3RhbmNlczogIW1vdW50ZWQuY3VycmVudCAmJiBuZXcgTWFwKCksXG4gICAgZm9yY2VVcGRhdGVcbiAgfSk7XG4gIHVzZUltcGVyYXRpdmVIYW5kbGUocHJvcHMucmVmLCAoKSA9PiAoe1xuICAgIHN0YXJ0OiAoKSA9PiBQcm9taXNlLmFsbChBcnJheS5mcm9tKHN0YXRlLmN1cnJlbnQuaW5zdGFuY2VzKS5tYXAoKF9yZWYpID0+IHtcbiAgICAgIGxldCBjID0gX3JlZlsxXTtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyID0+IGMuc3RhcnQocikpO1xuICAgIH0pKSxcbiAgICBzdG9wOiBmaW5pc2hlZCA9PiBBcnJheS5mcm9tKHN0YXRlLmN1cnJlbnQuaW5zdGFuY2VzKS5mb3JFYWNoKChfcmVmMikgPT4ge1xuICAgICAgbGV0IGMgPSBfcmVmMlsxXTtcbiAgICAgIHJldHVybiBjLnN0b3AoZmluaXNoZWQpO1xuICAgIH0pLFxuXG4gICAgZ2V0IGNvbnRyb2xsZXJzKCkge1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20oc3RhdGUuY3VycmVudC5pbnN0YW5jZXMpLm1hcCgoX3JlZjMpID0+IHtcbiAgICAgICAgbGV0IGMgPSBfcmVmM1sxXTtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfSkpOyAvLyBVcGRhdGUgc3RhdGVcblxuICBzdGF0ZS5jdXJyZW50ID0gZGlmZkl0ZW1zKHN0YXRlLmN1cnJlbnQsIHByb3BzKTtcblxuICBpZiAoc3RhdGUuY3VycmVudC5jaGFuZ2VkKSB7XG4gICAgLy8gVXBkYXRlIHN0YXRlXG4gICAgc3RhdGUuY3VycmVudC50cmFuc2l0aW9ucy5mb3JFYWNoKHRyYW5zaXRpb24gPT4ge1xuICAgICAgY29uc3Qgc2xvdCA9IHRyYW5zaXRpb24uc2xvdCxcbiAgICAgICAgICAgIGZyb20gPSB0cmFuc2l0aW9uLmZyb20sXG4gICAgICAgICAgICB0byA9IHRyYW5zaXRpb24udG8sXG4gICAgICAgICAgICBjb25maWcgPSB0cmFuc2l0aW9uLmNvbmZpZyxcbiAgICAgICAgICAgIHRyYWlsID0gdHJhbnNpdGlvbi50cmFpbCxcbiAgICAgICAgICAgIGtleSA9IHRyYW5zaXRpb24ua2V5LFxuICAgICAgICAgICAgaXRlbSA9IHRyYW5zaXRpb24uaXRlbTtcbiAgICAgIGlmICghc3RhdGUuY3VycmVudC5pbnN0YW5jZXMuaGFzKGtleSkpIHN0YXRlLmN1cnJlbnQuaW5zdGFuY2VzLnNldChrZXksIG5ldyBDb250cm9sbGVyKCkpOyAvLyB1cGRhdGUgdGhlIG1hcCBvYmplY3RcblxuICAgICAgY29uc3QgY3RybCA9IHN0YXRlLmN1cnJlbnQuaW5zdGFuY2VzLmdldChrZXkpO1xuXG4gICAgICBjb25zdCBuZXdQcm9wcyA9IF9leHRlbmRzKHt9LCBleHRyYSwge1xuICAgICAgICB0byxcbiAgICAgICAgZnJvbSxcbiAgICAgICAgY29uZmlnLFxuICAgICAgICByZWYsXG4gICAgICAgIG9uUmVzdDogdmFsdWVzID0+IHtcbiAgICAgICAgICBpZiAoc3RhdGUuY3VycmVudC5tb3VudGVkKSB7XG4gICAgICAgICAgICBpZiAodHJhbnNpdGlvbi5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgICAgLy8gSWYgbm8gcmVmIGlzIGdpdmVuIGRlbGV0ZSBkZXN0cm95ZWQgaXRlbXMgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgICAgaWYgKCFyZWYgJiYgIWxhenkpIGNsZWFuVXAoc3RhdGUsIGtleSk7XG4gICAgICAgICAgICAgIGlmIChvbkRlc3Ryb3llZCkgb25EZXN0cm95ZWQoaXRlbSk7XG4gICAgICAgICAgICB9IC8vIEEgdHJhbnNpdGlvbiBjb21lcyB0byByZXN0IG9uY2UgYWxsIGl0cyBzcHJpbmdzIGNvbmNsdWRlXG5cblxuICAgICAgICAgICAgY29uc3QgY3VySW5zdGFuY2VzID0gQXJyYXkuZnJvbShzdGF0ZS5jdXJyZW50Lmluc3RhbmNlcyk7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmUgPSBjdXJJbnN0YW5jZXMuc29tZSgoX3JlZjQpID0+IHtcbiAgICAgICAgICAgICAgbGV0IGMgPSBfcmVmNFsxXTtcbiAgICAgICAgICAgICAgcmV0dXJuICFjLmlkbGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghYWN0aXZlICYmIChyZWYgfHwgbGF6eSkgJiYgc3RhdGUuY3VycmVudC5kZWxldGVkLmxlbmd0aCA+IDApIGNsZWFuVXAoc3RhdGUpO1xuICAgICAgICAgICAgaWYgKF9vblJlc3QpIF9vblJlc3QoaXRlbSwgc2xvdCwgdmFsdWVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uU3RhcnQ6IG9uU3RhcnQgJiYgKCgpID0+IG9uU3RhcnQoaXRlbSwgc2xvdCkpLFxuICAgICAgICBvbkZyYW1lOiBvbkZyYW1lICYmICh2YWx1ZXMgPT4gb25GcmFtZShpdGVtLCBzbG90LCB2YWx1ZXMpKSxcbiAgICAgICAgZGVsYXk6IHRyYWlsLFxuICAgICAgICByZXNldDogcmVzZXQgJiYgc2xvdCA9PT0gRU5URVIgLy8gVXBkYXRlIGNvbnRyb2xsZXJcblxuICAgICAgfSk7XG5cbiAgICAgIGN0cmwudXBkYXRlKG5ld1Byb3BzKTtcbiAgICAgIGlmICghc3RhdGUuY3VycmVudC5wYXVzZWQpIGN0cmwuc3RhcnQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc3RhdGUuY3VycmVudC5tb3VudGVkID0gbW91bnRlZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc3RhdGUuY3VycmVudC5tb3VudGVkID0gbW91bnRlZC5jdXJyZW50ID0gZmFsc2U7XG4gICAgICBBcnJheS5mcm9tKHN0YXRlLmN1cnJlbnQuaW5zdGFuY2VzKS5tYXAoKF9yZWY1KSA9PiB7XG4gICAgICAgIGxldCBjID0gX3JlZjVbMV07XG4gICAgICAgIHJldHVybiBjLmRlc3Ryb3koKTtcbiAgICAgIH0pO1xuICAgICAgc3RhdGUuY3VycmVudC5pbnN0YW5jZXMuY2xlYXIoKTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHJldHVybiBzdGF0ZS5jdXJyZW50LnRyYW5zaXRpb25zLm1hcCgoX3JlZjYpID0+IHtcbiAgICBsZXQgaXRlbSA9IF9yZWY2Lml0ZW0sXG4gICAgICAgIHNsb3QgPSBfcmVmNi5zbG90LFxuICAgICAgICBrZXkgPSBfcmVmNi5rZXk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW0sXG4gICAgICBrZXksXG4gICAgICBzdGF0ZTogc2xvdCxcbiAgICAgIHByb3BzOiBzdGF0ZS5jdXJyZW50Lmluc3RhbmNlcy5nZXQoa2V5KS5nZXRWYWx1ZXMoKVxuICAgIH07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjbGVhblVwKHN0YXRlLCBmaWx0ZXJLZXkpIHtcbiAgY29uc3QgZGVsZXRlZCA9IHN0YXRlLmN1cnJlbnQuZGVsZXRlZDtcblxuICBmb3IgKGxldCBfcmVmNyBvZiBkZWxldGVkKSB7XG4gICAgbGV0IGtleSA9IF9yZWY3LmtleTtcblxuICAgIGNvbnN0IGZpbHRlciA9IHQgPT4gdC5rZXkgIT09IGtleTtcblxuICAgIGlmIChpcy51bmQoZmlsdGVyS2V5KSB8fCBmaWx0ZXJLZXkgPT09IGtleSkge1xuICAgICAgc3RhdGUuY3VycmVudC5pbnN0YW5jZXMuZGVsZXRlKGtleSk7XG4gICAgICBzdGF0ZS5jdXJyZW50LnRyYW5zaXRpb25zID0gc3RhdGUuY3VycmVudC50cmFuc2l0aW9ucy5maWx0ZXIoZmlsdGVyKTtcbiAgICAgIHN0YXRlLmN1cnJlbnQuZGVsZXRlZCA9IHN0YXRlLmN1cnJlbnQuZGVsZXRlZC5maWx0ZXIoZmlsdGVyKTtcbiAgICB9XG4gIH1cblxuICBzdGF0ZS5jdXJyZW50LmZvcmNlVXBkYXRlKCk7XG59XG5cbmZ1bmN0aW9uIGRpZmZJdGVtcyhfcmVmOCwgcHJvcHMpIHtcbiAgbGV0IGZpcnN0ID0gX3JlZjguZmlyc3QsXG4gICAgICBwcmV2UHJvcHMgPSBfcmVmOC5wcmV2UHJvcHMsXG4gICAgICBzdGF0ZSA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWY4LCBbXCJmaXJzdFwiLCBcInByZXZQcm9wc1wiXSk7XG5cbiAgbGV0IF9nZXQyID0gZ2V0KHByb3BzKSxcbiAgICAgIGl0ZW1zID0gX2dldDIuaXRlbXMsXG4gICAgICBrZXlzID0gX2dldDIua2V5cyxcbiAgICAgIGluaXRpYWwgPSBfZ2V0Mi5pbml0aWFsLFxuICAgICAgZnJvbSA9IF9nZXQyLmZyb20sXG4gICAgICBlbnRlciA9IF9nZXQyLmVudGVyLFxuICAgICAgbGVhdmUgPSBfZ2V0Mi5sZWF2ZSxcbiAgICAgIHVwZGF0ZSA9IF9nZXQyLnVwZGF0ZSxcbiAgICAgIF9nZXQyJHRyYWlsID0gX2dldDIudHJhaWwsXG4gICAgICB0cmFpbCA9IF9nZXQyJHRyYWlsID09PSB2b2lkIDAgPyAwIDogX2dldDIkdHJhaWwsXG4gICAgICB1bmlxdWUgPSBfZ2V0Mi51bmlxdWUsXG4gICAgICBjb25maWcgPSBfZ2V0Mi5jb25maWcsXG4gICAgICBfZ2V0MiRvcmRlciA9IF9nZXQyLm9yZGVyLFxuICAgICAgb3JkZXIgPSBfZ2V0MiRvcmRlciA9PT0gdm9pZCAwID8gW0VOVEVSLCBMRUFWRSwgVVBEQVRFXSA6IF9nZXQyJG9yZGVyO1xuXG4gIGxldCBfZ2V0MyA9IGdldChwcmV2UHJvcHMpLFxuICAgICAgX2tleXMgPSBfZ2V0My5rZXlzLFxuICAgICAgX2l0ZW1zID0gX2dldDMuaXRlbXM7XG5cbiAgbGV0IGN1cnJlbnQgPSBfZXh0ZW5kcyh7fSwgc3RhdGUuY3VycmVudCk7XG5cbiAgbGV0IGRlbGV0ZWQgPSBbLi4uc3RhdGUuZGVsZXRlZF07IC8vIENvbXBhcmUgbmV4dCBrZXlzIHdpdGggY3VycmVudCBrZXlzXG5cbiAgbGV0IGN1cnJlbnRLZXlzID0gT2JqZWN0LmtleXMoY3VycmVudCk7XG4gIGxldCBjdXJyZW50U2V0ID0gbmV3IFNldChjdXJyZW50S2V5cyk7XG4gIGxldCBuZXh0U2V0ID0gbmV3IFNldChrZXlzKTtcbiAgbGV0IGFkZGVkID0ga2V5cy5maWx0ZXIoaXRlbSA9PiAhY3VycmVudFNldC5oYXMoaXRlbSkpO1xuICBsZXQgcmVtb3ZlZCA9IHN0YXRlLnRyYW5zaXRpb25zLmZpbHRlcihpdGVtID0+ICFpdGVtLmRlc3Ryb3llZCAmJiAhbmV4dFNldC5oYXMoaXRlbS5vcmlnaW5hbEtleSkpLm1hcChpID0+IGkub3JpZ2luYWxLZXkpO1xuICBsZXQgdXBkYXRlZCA9IGtleXMuZmlsdGVyKGl0ZW0gPT4gY3VycmVudFNldC5oYXMoaXRlbSkpO1xuICBsZXQgZGVsYXkgPSAtdHJhaWw7XG5cbiAgd2hpbGUgKG9yZGVyLmxlbmd0aCkge1xuICAgIGNvbnN0IGNoYW5nZVR5cGUgPSBvcmRlci5zaGlmdCgpO1xuXG4gICAgc3dpdGNoIChjaGFuZ2VUeXBlKSB7XG4gICAgICBjYXNlIEVOVEVSOlxuICAgICAgICB7XG4gICAgICAgICAgYWRkZWQuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgLy8gSW4gdW5pcXVlIG1vZGUsIHJlbW92ZSBmYWRpbmcgb3V0IHRyYW5zaXRpb25zIGlmIHRoZWlyIGtleSBjb21lcyBpbiBhZ2FpblxuICAgICAgICAgICAgaWYgKHVuaXF1ZSAmJiBkZWxldGVkLmZpbmQoZCA9PiBkLm9yaWdpbmFsS2V5ID09PSBrZXkpKSBkZWxldGVkID0gZGVsZXRlZC5maWx0ZXIodCA9PiB0Lm9yaWdpbmFsS2V5ICE9PSBrZXkpO1xuICAgICAgICAgICAgY29uc3Qga2V5SW5kZXggPSBrZXlzLmluZGV4T2Yoa2V5KTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1trZXlJbmRleF07XG4gICAgICAgICAgICBjb25zdCBzbG90ID0gZmlyc3QgJiYgaW5pdGlhbCAhPT0gdm9pZCAwID8gJ2luaXRpYWwnIDogRU5URVI7XG4gICAgICAgICAgICBjdXJyZW50W2tleV0gPSB7XG4gICAgICAgICAgICAgIHNsb3QsXG4gICAgICAgICAgICAgIG9yaWdpbmFsS2V5OiBrZXksXG4gICAgICAgICAgICAgIGtleTogdW5pcXVlID8gU3RyaW5nKGtleSkgOiBndWlkKyssXG4gICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgIHRyYWlsOiBkZWxheSA9IGRlbGF5ICsgdHJhaWwsXG4gICAgICAgICAgICAgIGNvbmZpZzogY2FsbFByb3AoY29uZmlnLCBpdGVtLCBzbG90KSxcbiAgICAgICAgICAgICAgZnJvbTogY2FsbFByb3AoZmlyc3QgPyBpbml0aWFsICE9PSB2b2lkIDAgPyBpbml0aWFsIHx8IHt9IDogZnJvbSA6IGZyb20sIGl0ZW0pLFxuICAgICAgICAgICAgICB0bzogY2FsbFByb3AoZW50ZXIsIGl0ZW0pXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgTEVBVkU6XG4gICAgICAgIHtcbiAgICAgICAgICByZW1vdmVkLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGtleUluZGV4ID0gX2tleXMuaW5kZXhPZihrZXkpO1xuXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gX2l0ZW1zW2tleUluZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IHNsb3QgPSBMRUFWRTtcbiAgICAgICAgICAgIGRlbGV0ZWQudW5zaGlmdChfZXh0ZW5kcyh7fSwgY3VycmVudFtrZXldLCB7XG4gICAgICAgICAgICAgIHNsb3QsXG4gICAgICAgICAgICAgIGRlc3Ryb3llZDogdHJ1ZSxcbiAgICAgICAgICAgICAgbGVmdDogX2tleXNbTWF0aC5tYXgoMCwga2V5SW5kZXggLSAxKV0sXG4gICAgICAgICAgICAgIHJpZ2h0OiBfa2V5c1tNYXRoLm1pbihfa2V5cy5sZW5ndGgsIGtleUluZGV4ICsgMSldLFxuICAgICAgICAgICAgICB0cmFpbDogZGVsYXkgPSBkZWxheSArIHRyYWlsLFxuICAgICAgICAgICAgICBjb25maWc6IGNhbGxQcm9wKGNvbmZpZywgaXRlbSwgc2xvdCksXG4gICAgICAgICAgICAgIHRvOiBjYWxsUHJvcChsZWF2ZSwgaXRlbSlcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIGRlbGV0ZSBjdXJyZW50W2tleV07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSBVUERBVEU6XG4gICAgICAgIHtcbiAgICAgICAgICB1cGRhdGVkLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGtleUluZGV4ID0ga2V5cy5pbmRleE9mKGtleSk7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gaXRlbXNba2V5SW5kZXhdO1xuICAgICAgICAgICAgY29uc3Qgc2xvdCA9IFVQREFURTtcbiAgICAgICAgICAgIGN1cnJlbnRba2V5XSA9IF9leHRlbmRzKHt9LCBjdXJyZW50W2tleV0sIHtcbiAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgc2xvdCxcbiAgICAgICAgICAgICAgdHJhaWw6IGRlbGF5ID0gZGVsYXkgKyB0cmFpbCxcbiAgICAgICAgICAgICAgY29uZmlnOiBjYWxsUHJvcChjb25maWcsIGl0ZW0sIHNsb3QpLFxuICAgICAgICAgICAgICB0bzogY2FsbFByb3AodXBkYXRlLCBpdGVtKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICBsZXQgb3V0ID0ga2V5cy5tYXAoa2V5ID0+IGN1cnJlbnRba2V5XSk7IC8vIFRoaXMgdHJpZXMgdG8gcmVzdG9yZSBvcmRlciBmb3IgZGVsZXRlZCBpdGVtcyBieSBmaW5kaW5nIHRoZWlyIGxhc3Qga25vd24gc2libGluZ3NcbiAgLy8gb25seSB1c2luZyB0aGUgbGVmdCBzaWJsaW5nIHRvIGtlZXAgb3JkZXIgcGxhY2VtZW50IGNvbnNpc3RlbnQgZm9yIGFsbCBkZWxldGVkIGl0ZW1zXG5cbiAgZGVsZXRlZC5mb3JFYWNoKChfcmVmOSkgPT4ge1xuICAgIGxldCBsZWZ0ID0gX3JlZjkubGVmdCxcbiAgICAgICAgcmlnaHQgPSBfcmVmOS5yaWdodCxcbiAgICAgICAgaXRlbSA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWY5LCBbXCJsZWZ0XCIsIFwicmlnaHRcIl0pO1xuXG4gICAgbGV0IHBvczsgLy8gV2FzIGl0IHRoZSBlbGVtZW50IG9uIHRoZSBsZWZ0LCBpZiB5ZXMsIG1vdmUgdGhlcmUgLi4uXG5cbiAgICBpZiAoKHBvcyA9IG91dC5maW5kSW5kZXgodCA9PiB0Lm9yaWdpbmFsS2V5ID09PSBsZWZ0KSkgIT09IC0xKSBwb3MgKz0gMTsgLy8gQW5kIGlmIG5vdGhpbmcgZWxzZSBoZWxwcywgbW92ZSBpdCB0byB0aGUgc3RhcnQgwq9cXF8o44OEKV8vwq9cblxuICAgIHBvcyA9IE1hdGgubWF4KDAsIHBvcyk7XG4gICAgb3V0ID0gWy4uLm91dC5zbGljZSgwLCBwb3MpLCBpdGVtLCAuLi5vdXQuc2xpY2UocG9zKV07XG4gIH0pO1xuICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgY2hhbmdlZDogYWRkZWQubGVuZ3RoIHx8IHJlbW92ZWQubGVuZ3RoIHx8IHVwZGF0ZWQubGVuZ3RoLFxuICAgIGZpcnN0OiBmaXJzdCAmJiBhZGRlZC5sZW5ndGggPT09IDAsXG4gICAgdHJhbnNpdGlvbnM6IG91dCxcbiAgICBjdXJyZW50LFxuICAgIGRlbGV0ZWQsXG4gICAgcHJldlByb3BzOiBwcm9wc1xuICB9KTtcbn1cblxuY2xhc3MgQW5pbWF0ZWRTdHlsZSBleHRlbmRzIEFuaW1hdGVkT2JqZWN0IHtcbiAgY29uc3RydWN0b3Ioc3R5bGUpIHtcbiAgICBpZiAoc3R5bGUgPT09IHZvaWQgMCkge1xuICAgICAgc3R5bGUgPSB7fTtcbiAgICB9XG5cbiAgICBzdXBlcigpO1xuXG4gICAgaWYgKHN0eWxlLnRyYW5zZm9ybSAmJiAhKHN0eWxlLnRyYW5zZm9ybSBpbnN0YW5jZW9mIEFuaW1hdGVkKSkge1xuICAgICAgc3R5bGUgPSBhcHBseUFuaW1hdGVkVmFsdWVzLnRyYW5zZm9ybShzdHlsZSk7XG4gICAgfVxuXG4gICAgdGhpcy5wYXlsb2FkID0gc3R5bGU7XG4gIH1cblxufVxuXG4vLyBodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLWNvbG9yLyNzdmctY29sb3JcbmNvbnN0IGNvbG9ycyA9IHtcbiAgdHJhbnNwYXJlbnQ6IDB4MDAwMDAwMDAsXG4gIGFsaWNlYmx1ZTogMHhmMGY4ZmZmZixcbiAgYW50aXF1ZXdoaXRlOiAweGZhZWJkN2ZmLFxuICBhcXVhOiAweDAwZmZmZmZmLFxuICBhcXVhbWFyaW5lOiAweDdmZmZkNGZmLFxuICBhenVyZTogMHhmMGZmZmZmZixcbiAgYmVpZ2U6IDB4ZjVmNWRjZmYsXG4gIGJpc3F1ZTogMHhmZmU0YzRmZixcbiAgYmxhY2s6IDB4MDAwMDAwZmYsXG4gIGJsYW5jaGVkYWxtb25kOiAweGZmZWJjZGZmLFxuICBibHVlOiAweDAwMDBmZmZmLFxuICBibHVldmlvbGV0OiAweDhhMmJlMmZmLFxuICBicm93bjogMHhhNTJhMmFmZixcbiAgYnVybHl3b29kOiAweGRlYjg4N2ZmLFxuICBidXJudHNpZW5uYTogMHhlYTdlNWRmZixcbiAgY2FkZXRibHVlOiAweDVmOWVhMGZmLFxuICBjaGFydHJldXNlOiAweDdmZmYwMGZmLFxuICBjaG9jb2xhdGU6IDB4ZDI2OTFlZmYsXG4gIGNvcmFsOiAweGZmN2Y1MGZmLFxuICBjb3JuZmxvd2VyYmx1ZTogMHg2NDk1ZWRmZixcbiAgY29ybnNpbGs6IDB4ZmZmOGRjZmYsXG4gIGNyaW1zb246IDB4ZGMxNDNjZmYsXG4gIGN5YW46IDB4MDBmZmZmZmYsXG4gIGRhcmtibHVlOiAweDAwMDA4YmZmLFxuICBkYXJrY3lhbjogMHgwMDhiOGJmZixcbiAgZGFya2dvbGRlbnJvZDogMHhiODg2MGJmZixcbiAgZGFya2dyYXk6IDB4YTlhOWE5ZmYsXG4gIGRhcmtncmVlbjogMHgwMDY0MDBmZixcbiAgZGFya2dyZXk6IDB4YTlhOWE5ZmYsXG4gIGRhcmtraGFraTogMHhiZGI3NmJmZixcbiAgZGFya21hZ2VudGE6IDB4OGIwMDhiZmYsXG4gIGRhcmtvbGl2ZWdyZWVuOiAweDU1NmIyZmZmLFxuICBkYXJrb3JhbmdlOiAweGZmOGMwMGZmLFxuICBkYXJrb3JjaGlkOiAweDk5MzJjY2ZmLFxuICBkYXJrcmVkOiAweDhiMDAwMGZmLFxuICBkYXJrc2FsbW9uOiAweGU5OTY3YWZmLFxuICBkYXJrc2VhZ3JlZW46IDB4OGZiYzhmZmYsXG4gIGRhcmtzbGF0ZWJsdWU6IDB4NDgzZDhiZmYsXG4gIGRhcmtzbGF0ZWdyYXk6IDB4MmY0ZjRmZmYsXG4gIGRhcmtzbGF0ZWdyZXk6IDB4MmY0ZjRmZmYsXG4gIGRhcmt0dXJxdW9pc2U6IDB4MDBjZWQxZmYsXG4gIGRhcmt2aW9sZXQ6IDB4OTQwMGQzZmYsXG4gIGRlZXBwaW5rOiAweGZmMTQ5M2ZmLFxuICBkZWVwc2t5Ymx1ZTogMHgwMGJmZmZmZixcbiAgZGltZ3JheTogMHg2OTY5NjlmZixcbiAgZGltZ3JleTogMHg2OTY5NjlmZixcbiAgZG9kZ2VyYmx1ZTogMHgxZTkwZmZmZixcbiAgZmlyZWJyaWNrOiAweGIyMjIyMmZmLFxuICBmbG9yYWx3aGl0ZTogMHhmZmZhZjBmZixcbiAgZm9yZXN0Z3JlZW46IDB4MjI4YjIyZmYsXG4gIGZ1Y2hzaWE6IDB4ZmYwMGZmZmYsXG4gIGdhaW5zYm9ybzogMHhkY2RjZGNmZixcbiAgZ2hvc3R3aGl0ZTogMHhmOGY4ZmZmZixcbiAgZ29sZDogMHhmZmQ3MDBmZixcbiAgZ29sZGVucm9kOiAweGRhYTUyMGZmLFxuICBncmF5OiAweDgwODA4MGZmLFxuICBncmVlbjogMHgwMDgwMDBmZixcbiAgZ3JlZW55ZWxsb3c6IDB4YWRmZjJmZmYsXG4gIGdyZXk6IDB4ODA4MDgwZmYsXG4gIGhvbmV5ZGV3OiAweGYwZmZmMGZmLFxuICBob3RwaW5rOiAweGZmNjliNGZmLFxuICBpbmRpYW5yZWQ6IDB4Y2Q1YzVjZmYsXG4gIGluZGlnbzogMHg0YjAwODJmZixcbiAgaXZvcnk6IDB4ZmZmZmYwZmYsXG4gIGtoYWtpOiAweGYwZTY4Y2ZmLFxuICBsYXZlbmRlcjogMHhlNmU2ZmFmZixcbiAgbGF2ZW5kZXJibHVzaDogMHhmZmYwZjVmZixcbiAgbGF3bmdyZWVuOiAweDdjZmMwMGZmLFxuICBsZW1vbmNoaWZmb246IDB4ZmZmYWNkZmYsXG4gIGxpZ2h0Ymx1ZTogMHhhZGQ4ZTZmZixcbiAgbGlnaHRjb3JhbDogMHhmMDgwODBmZixcbiAgbGlnaHRjeWFuOiAweGUwZmZmZmZmLFxuICBsaWdodGdvbGRlbnJvZHllbGxvdzogMHhmYWZhZDJmZixcbiAgbGlnaHRncmF5OiAweGQzZDNkM2ZmLFxuICBsaWdodGdyZWVuOiAweDkwZWU5MGZmLFxuICBsaWdodGdyZXk6IDB4ZDNkM2QzZmYsXG4gIGxpZ2h0cGluazogMHhmZmI2YzFmZixcbiAgbGlnaHRzYWxtb246IDB4ZmZhMDdhZmYsXG4gIGxpZ2h0c2VhZ3JlZW46IDB4MjBiMmFhZmYsXG4gIGxpZ2h0c2t5Ymx1ZTogMHg4N2NlZmFmZixcbiAgbGlnaHRzbGF0ZWdyYXk6IDB4Nzc4ODk5ZmYsXG4gIGxpZ2h0c2xhdGVncmV5OiAweDc3ODg5OWZmLFxuICBsaWdodHN0ZWVsYmx1ZTogMHhiMGM0ZGVmZixcbiAgbGlnaHR5ZWxsb3c6IDB4ZmZmZmUwZmYsXG4gIGxpbWU6IDB4MDBmZjAwZmYsXG4gIGxpbWVncmVlbjogMHgzMmNkMzJmZixcbiAgbGluZW46IDB4ZmFmMGU2ZmYsXG4gIG1hZ2VudGE6IDB4ZmYwMGZmZmYsXG4gIG1hcm9vbjogMHg4MDAwMDBmZixcbiAgbWVkaXVtYXF1YW1hcmluZTogMHg2NmNkYWFmZixcbiAgbWVkaXVtYmx1ZTogMHgwMDAwY2RmZixcbiAgbWVkaXVtb3JjaGlkOiAweGJhNTVkM2ZmLFxuICBtZWRpdW1wdXJwbGU6IDB4OTM3MGRiZmYsXG4gIG1lZGl1bXNlYWdyZWVuOiAweDNjYjM3MWZmLFxuICBtZWRpdW1zbGF0ZWJsdWU6IDB4N2I2OGVlZmYsXG4gIG1lZGl1bXNwcmluZ2dyZWVuOiAweDAwZmE5YWZmLFxuICBtZWRpdW10dXJxdW9pc2U6IDB4NDhkMWNjZmYsXG4gIG1lZGl1bXZpb2xldHJlZDogMHhjNzE1ODVmZixcbiAgbWlkbmlnaHRibHVlOiAweDE5MTk3MGZmLFxuICBtaW50Y3JlYW06IDB4ZjVmZmZhZmYsXG4gIG1pc3R5cm9zZTogMHhmZmU0ZTFmZixcbiAgbW9jY2FzaW46IDB4ZmZlNGI1ZmYsXG4gIG5hdmFqb3doaXRlOiAweGZmZGVhZGZmLFxuICBuYXZ5OiAweDAwMDA4MGZmLFxuICBvbGRsYWNlOiAweGZkZjVlNmZmLFxuICBvbGl2ZTogMHg4MDgwMDBmZixcbiAgb2xpdmVkcmFiOiAweDZiOGUyM2ZmLFxuICBvcmFuZ2U6IDB4ZmZhNTAwZmYsXG4gIG9yYW5nZXJlZDogMHhmZjQ1MDBmZixcbiAgb3JjaGlkOiAweGRhNzBkNmZmLFxuICBwYWxlZ29sZGVucm9kOiAweGVlZThhYWZmLFxuICBwYWxlZ3JlZW46IDB4OThmYjk4ZmYsXG4gIHBhbGV0dXJxdW9pc2U6IDB4YWZlZWVlZmYsXG4gIHBhbGV2aW9sZXRyZWQ6IDB4ZGI3MDkzZmYsXG4gIHBhcGF5YXdoaXA6IDB4ZmZlZmQ1ZmYsXG4gIHBlYWNocHVmZjogMHhmZmRhYjlmZixcbiAgcGVydTogMHhjZDg1M2ZmZixcbiAgcGluazogMHhmZmMwY2JmZixcbiAgcGx1bTogMHhkZGEwZGRmZixcbiAgcG93ZGVyYmx1ZTogMHhiMGUwZTZmZixcbiAgcHVycGxlOiAweDgwMDA4MGZmLFxuICByZWJlY2NhcHVycGxlOiAweDY2MzM5OWZmLFxuICByZWQ6IDB4ZmYwMDAwZmYsXG4gIHJvc3licm93bjogMHhiYzhmOGZmZixcbiAgcm95YWxibHVlOiAweDQxNjllMWZmLFxuICBzYWRkbGVicm93bjogMHg4YjQ1MTNmZixcbiAgc2FsbW9uOiAweGZhODA3MmZmLFxuICBzYW5keWJyb3duOiAweGY0YTQ2MGZmLFxuICBzZWFncmVlbjogMHgyZThiNTdmZixcbiAgc2Vhc2hlbGw6IDB4ZmZmNWVlZmYsXG4gIHNpZW5uYTogMHhhMDUyMmRmZixcbiAgc2lsdmVyOiAweGMwYzBjMGZmLFxuICBza3libHVlOiAweDg3Y2VlYmZmLFxuICBzbGF0ZWJsdWU6IDB4NmE1YWNkZmYsXG4gIHNsYXRlZ3JheTogMHg3MDgwOTBmZixcbiAgc2xhdGVncmV5OiAweDcwODA5MGZmLFxuICBzbm93OiAweGZmZmFmYWZmLFxuICBzcHJpbmdncmVlbjogMHgwMGZmN2ZmZixcbiAgc3RlZWxibHVlOiAweDQ2ODJiNGZmLFxuICB0YW46IDB4ZDJiNDhjZmYsXG4gIHRlYWw6IDB4MDA4MDgwZmYsXG4gIHRoaXN0bGU6IDB4ZDhiZmQ4ZmYsXG4gIHRvbWF0bzogMHhmZjYzNDdmZixcbiAgdHVycXVvaXNlOiAweDQwZTBkMGZmLFxuICB2aW9sZXQ6IDB4ZWU4MmVlZmYsXG4gIHdoZWF0OiAweGY1ZGViM2ZmLFxuICB3aGl0ZTogMHhmZmZmZmZmZixcbiAgd2hpdGVzbW9rZTogMHhmNWY1ZjVmZixcbiAgeWVsbG93OiAweGZmZmYwMGZmLFxuICB5ZWxsb3dncmVlbjogMHg5YWNkMzJmZlxufTtcblxuLy8gY29uc3QgSU5URUdFUiA9ICdbLStdP1xcXFxkKyc7XG5jb25zdCBOVU1CRVIgPSAnWy0rXT9cXFxcZCpcXFxcLj9cXFxcZCsnO1xuY29uc3QgUEVSQ0VOVEFHRSA9IE5VTUJFUiArICclJztcblxuZnVuY3Rpb24gY2FsbCgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcnRzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHBhcnRzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuICdcXFxcKFxcXFxzKignICsgcGFydHMuam9pbignKVxcXFxzKixcXFxccyooJykgKyAnKVxcXFxzKlxcXFwpJztcbn1cblxuY29uc3QgcmdiID0gbmV3IFJlZ0V4cCgncmdiJyArIGNhbGwoTlVNQkVSLCBOVU1CRVIsIE5VTUJFUikpO1xuY29uc3QgcmdiYSA9IG5ldyBSZWdFeHAoJ3JnYmEnICsgY2FsbChOVU1CRVIsIE5VTUJFUiwgTlVNQkVSLCBOVU1CRVIpKTtcbmNvbnN0IGhzbCA9IG5ldyBSZWdFeHAoJ2hzbCcgKyBjYWxsKE5VTUJFUiwgUEVSQ0VOVEFHRSwgUEVSQ0VOVEFHRSkpO1xuY29uc3QgaHNsYSA9IG5ldyBSZWdFeHAoJ2hzbGEnICsgY2FsbChOVU1CRVIsIFBFUkNFTlRBR0UsIFBFUkNFTlRBR0UsIE5VTUJFUikpO1xuY29uc3QgaGV4MyA9IC9eIyhbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KSQvO1xuY29uc3QgaGV4NCA9IC9eIyhbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkkLztcbmNvbnN0IGhleDYgPSAvXiMoWzAtOWEtZkEtRl17Nn0pJC87XG5jb25zdCBoZXg4ID0gL14jKFswLTlhLWZBLUZdezh9KSQvO1xuXG4vKlxuaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbW11bml0eS9ub3JtYWxpemUtY3NzLWNvbG9yXG5cbkJTRCAzLUNsYXVzZSBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgMjAxNiwgUmVhY3QgQ29tbXVuaXR5XG5BbGwgcmlnaHRzIHJlc2VydmVkLlxuXG5SZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbm1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuXG4qIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuICBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cblxuKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb25cbiAgYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG5cbiogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgY29weXJpZ2h0IGhvbGRlciBub3IgdGhlIG5hbWVzIG9mIGl0c1xuICBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbVxuICB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuXG5USElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRVxuSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFXG5ESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFXG5GT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTFxuREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1JcblNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSXG5DQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLFxuT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0Vcbk9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuZnVuY3Rpb24gbm9ybWFsaXplQ29sb3IoY29sb3IpIHtcbiAgbGV0IG1hdGNoO1xuXG4gIGlmICh0eXBlb2YgY29sb3IgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGNvbG9yID4+PiAwID09PSBjb2xvciAmJiBjb2xvciA+PSAwICYmIGNvbG9yIDw9IDB4ZmZmZmZmZmYgPyBjb2xvciA6IG51bGw7XG4gIH0gLy8gT3JkZXJlZCBiYXNlZCBvbiBvY2N1cnJlbmNlcyBvbiBGYWNlYm9vayBjb2RlYmFzZVxuXG5cbiAgaWYgKG1hdGNoID0gaGV4Ni5leGVjKGNvbG9yKSkgcmV0dXJuIHBhcnNlSW50KG1hdGNoWzFdICsgJ2ZmJywgMTYpID4+PiAwO1xuICBpZiAoY29sb3JzLmhhc093blByb3BlcnR5KGNvbG9yKSkgcmV0dXJuIGNvbG9yc1tjb2xvcl07XG5cbiAgaWYgKG1hdGNoID0gcmdiLmV4ZWMoY29sb3IpKSB7XG4gICAgcmV0dXJuIChwYXJzZTI1NShtYXRjaFsxXSkgPDwgMjQgfCAvLyByXG4gICAgcGFyc2UyNTUobWF0Y2hbMl0pIDw8IDE2IHwgLy8gZ1xuICAgIHBhcnNlMjU1KG1hdGNoWzNdKSA8PCA4IHwgLy8gYlxuICAgIDB4MDAwMDAwZmYpID4+PiAvLyBhXG4gICAgMDtcbiAgfVxuXG4gIGlmIChtYXRjaCA9IHJnYmEuZXhlYyhjb2xvcikpIHtcbiAgICByZXR1cm4gKHBhcnNlMjU1KG1hdGNoWzFdKSA8PCAyNCB8IC8vIHJcbiAgICBwYXJzZTI1NShtYXRjaFsyXSkgPDwgMTYgfCAvLyBnXG4gICAgcGFyc2UyNTUobWF0Y2hbM10pIDw8IDggfCAvLyBiXG4gICAgcGFyc2UxKG1hdGNoWzRdKSkgPj4+IC8vIGFcbiAgICAwO1xuICB9XG5cbiAgaWYgKG1hdGNoID0gaGV4My5leGVjKGNvbG9yKSkge1xuICAgIHJldHVybiBwYXJzZUludChtYXRjaFsxXSArIG1hdGNoWzFdICsgLy8gclxuICAgIG1hdGNoWzJdICsgbWF0Y2hbMl0gKyAvLyBnXG4gICAgbWF0Y2hbM10gKyBtYXRjaFszXSArIC8vIGJcbiAgICAnZmYnLCAvLyBhXG4gICAgMTYpID4+PiAwO1xuICB9IC8vIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtY29sb3ItNC8jaGV4LW5vdGF0aW9uXG5cblxuICBpZiAobWF0Y2ggPSBoZXg4LmV4ZWMoY29sb3IpKSByZXR1cm4gcGFyc2VJbnQobWF0Y2hbMV0sIDE2KSA+Pj4gMDtcblxuICBpZiAobWF0Y2ggPSBoZXg0LmV4ZWMoY29sb3IpKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KG1hdGNoWzFdICsgbWF0Y2hbMV0gKyAvLyByXG4gICAgbWF0Y2hbMl0gKyBtYXRjaFsyXSArIC8vIGdcbiAgICBtYXRjaFszXSArIG1hdGNoWzNdICsgLy8gYlxuICAgIG1hdGNoWzRdICsgbWF0Y2hbNF0sIC8vIGFcbiAgICAxNikgPj4+IDA7XG4gIH1cblxuICBpZiAobWF0Y2ggPSBoc2wuZXhlYyhjb2xvcikpIHtcbiAgICByZXR1cm4gKGhzbFRvUmdiKHBhcnNlMzYwKG1hdGNoWzFdKSwgLy8gaFxuICAgIHBhcnNlUGVyY2VudGFnZShtYXRjaFsyXSksIC8vIHNcbiAgICBwYXJzZVBlcmNlbnRhZ2UobWF0Y2hbM10pIC8vIGxcbiAgICApIHwgMHgwMDAwMDBmZikgPj4+IC8vIGFcbiAgICAwO1xuICB9XG5cbiAgaWYgKG1hdGNoID0gaHNsYS5leGVjKGNvbG9yKSkge1xuICAgIHJldHVybiAoaHNsVG9SZ2IocGFyc2UzNjAobWF0Y2hbMV0pLCAvLyBoXG4gICAgcGFyc2VQZXJjZW50YWdlKG1hdGNoWzJdKSwgLy8gc1xuICAgIHBhcnNlUGVyY2VudGFnZShtYXRjaFszXSkgLy8gbFxuICAgICkgfCBwYXJzZTEobWF0Y2hbNF0pKSA+Pj4gLy8gYVxuICAgIDA7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gaHVlMnJnYihwLCBxLCB0KSB7XG4gIGlmICh0IDwgMCkgdCArPSAxO1xuICBpZiAodCA+IDEpIHQgLT0gMTtcbiAgaWYgKHQgPCAxIC8gNikgcmV0dXJuIHAgKyAocSAtIHApICogNiAqIHQ7XG4gIGlmICh0IDwgMSAvIDIpIHJldHVybiBxO1xuICBpZiAodCA8IDIgLyAzKSByZXR1cm4gcCArIChxIC0gcCkgKiAoMiAvIDMgLSB0KSAqIDY7XG4gIHJldHVybiBwO1xufVxuXG5mdW5jdGlvbiBoc2xUb1JnYihoLCBzLCBsKSB7XG4gIGNvbnN0IHEgPSBsIDwgMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzO1xuICBjb25zdCBwID0gMiAqIGwgLSBxO1xuICBjb25zdCByID0gaHVlMnJnYihwLCBxLCBoICsgMSAvIDMpO1xuICBjb25zdCBnID0gaHVlMnJnYihwLCBxLCBoKTtcbiAgY29uc3QgYiA9IGh1ZTJyZ2IocCwgcSwgaCAtIDEgLyAzKTtcbiAgcmV0dXJuIE1hdGgucm91bmQociAqIDI1NSkgPDwgMjQgfCBNYXRoLnJvdW5kKGcgKiAyNTUpIDw8IDE2IHwgTWF0aC5yb3VuZChiICogMjU1KSA8PCA4O1xufVxuXG5mdW5jdGlvbiBwYXJzZTI1NShzdHIpIHtcbiAgY29uc3QgaW50ID0gcGFyc2VJbnQoc3RyLCAxMCk7XG4gIGlmIChpbnQgPCAwKSByZXR1cm4gMDtcbiAgaWYgKGludCA+IDI1NSkgcmV0dXJuIDI1NTtcbiAgcmV0dXJuIGludDtcbn1cblxuZnVuY3Rpb24gcGFyc2UzNjAoc3RyKSB7XG4gIGNvbnN0IGludCA9IHBhcnNlRmxvYXQoc3RyKTtcbiAgcmV0dXJuIChpbnQgJSAzNjAgKyAzNjApICUgMzYwIC8gMzYwO1xufVxuXG5mdW5jdGlvbiBwYXJzZTEoc3RyKSB7XG4gIGNvbnN0IG51bSA9IHBhcnNlRmxvYXQoc3RyKTtcbiAgaWYgKG51bSA8IDApIHJldHVybiAwO1xuICBpZiAobnVtID4gMSkgcmV0dXJuIDI1NTtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtICogMjU1KTtcbn1cblxuZnVuY3Rpb24gcGFyc2VQZXJjZW50YWdlKHN0cikge1xuICAvLyBwYXJzZUZsb2F0IGNvbnZlbmllbnRseSBpZ25vcmVzIHRoZSBmaW5hbCAlXG4gIGNvbnN0IGludCA9IHBhcnNlRmxvYXQoc3RyKTtcbiAgaWYgKGludCA8IDApIHJldHVybiAwO1xuICBpZiAoaW50ID4gMTAwKSByZXR1cm4gMTtcbiAgcmV0dXJuIGludCAvIDEwMDtcbn1cblxuZnVuY3Rpb24gY29sb3JUb1JnYmEoaW5wdXQpIHtcbiAgbGV0IGludDMyQ29sb3IgPSBub3JtYWxpemVDb2xvcihpbnB1dCk7XG4gIGlmIChpbnQzMkNvbG9yID09PSBudWxsKSByZXR1cm4gaW5wdXQ7XG4gIGludDMyQ29sb3IgPSBpbnQzMkNvbG9yIHx8IDA7XG4gIGxldCByID0gKGludDMyQ29sb3IgJiAweGZmMDAwMDAwKSA+Pj4gMjQ7XG4gIGxldCBnID0gKGludDMyQ29sb3IgJiAweDAwZmYwMDAwKSA+Pj4gMTY7XG4gIGxldCBiID0gKGludDMyQ29sb3IgJiAweDAwMDBmZjAwKSA+Pj4gODtcbiAgbGV0IGEgPSAoaW50MzJDb2xvciAmIDB4MDAwMDAwZmYpIC8gMjU1O1xuICByZXR1cm4gYHJnYmEoJHtyfSwgJHtnfSwgJHtifSwgJHthfSlgO1xufSAvLyBQcm9ibGVtOiBodHRwczovL2dpdGh1Yi5jb20vYW5pbWF0ZWRqcy9hbmltYXRlZC9wdWxsLzEwMlxuLy8gU29sdXRpb246IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzYzODU2NS9wYXJzaW5nLXNjaWVudGlmaWMtbm90YXRpb24tc2Vuc2libHkvNjU4NjYyXG5cblxuY29uc3Qgc3RyaW5nU2hhcGVSZWdleCA9IC9bK1xcLV0/KD86MHxbMS05XVxcZCopKD86XFwuXFxkKik/KD86W2VFXVsrXFwtXT9cXGQrKT8vZzsgLy8gQ292ZXJzIHJnYiwgcmdiYSwgaHNsLCBoc2xhXG4vLyBUYWtlbiBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL29sbW9rcmFtZXIvODJjY2NlNjczZjg2ZGI3Y2RhNWVcblxuY29uc3QgY29sb3JSZWdleCA9IC8oIyg/OlswLTlhLWZdezJ9KXsyLDR9fCgjWzAtOWEtZl17M30pfChyZ2J8aHNsKWE/XFwoKC0/XFxkKyU/WyxcXHNdKyl7MiwzfVxccypbXFxkXFwuXSslP1xcKSkvZ2k7IC8vIENvdmVycyBjb2xvciBuYW1lcyAodHJhbnNwYXJlbnQsIGJsdWUsIGV0Yy4pXG5cbmNvbnN0IGNvbG9yTmFtZXNSZWdleCA9IG5ldyBSZWdFeHAoYCgke09iamVjdC5rZXlzKGNvbG9ycykuam9pbignfCcpfSlgLCAnZycpO1xuLyoqXG4gKiBTdXBwb3J0cyBzdHJpbmcgc2hhcGVzIGJ5IGV4dHJhY3RpbmcgbnVtYmVycyBzbyBuZXcgdmFsdWVzIGNhbiBiZSBjb21wdXRlZCxcbiAqIGFuZCByZWNvbWJpbmVzIHRob3NlIHZhbHVlcyBpbnRvIG5ldyBzdHJpbmdzIG9mIHRoZSBzYW1lIHNoYXBlLiAgU3VwcG9ydHNcbiAqIHRoaW5ncyBsaWtlOlxuICpcbiAqICAgcmdiYSgxMjMsIDQyLCA5OSwgMC4zNikgICAgICAgICAgIC8vIGNvbG9yc1xuICogICAtNDVkZWcgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmFsdWVzIHdpdGggdW5pdHNcbiAqICAgMCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpIC8vIGJveCBzaGFkb3dzXG4gKi9cblxuY29uc3QgY3JlYXRlU3RyaW5nSW50ZXJwb2xhdG9yID0gY29uZmlnID0+IHtcbiAgLy8gUmVwbGFjZSBjb2xvcnMgd2l0aCByZ2JhXG4gIGNvbnN0IG91dHB1dFJhbmdlID0gY29uZmlnLm91dHB1dC5tYXAocmFuZ2VWYWx1ZSA9PiByYW5nZVZhbHVlLnJlcGxhY2UoY29sb3JSZWdleCwgY29sb3JUb1JnYmEpKS5tYXAocmFuZ2VWYWx1ZSA9PiByYW5nZVZhbHVlLnJlcGxhY2UoY29sb3JOYW1lc1JlZ2V4LCBjb2xvclRvUmdiYSkpO1xuICBjb25zdCBvdXRwdXRSYW5nZXMgPSBvdXRwdXRSYW5nZVswXS5tYXRjaChzdHJpbmdTaGFwZVJlZ2V4KS5tYXAoKCkgPT4gW10pO1xuICBvdXRwdXRSYW5nZS5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICB2YWx1ZS5tYXRjaChzdHJpbmdTaGFwZVJlZ2V4KS5mb3JFYWNoKChudW1iZXIsIGkpID0+IG91dHB1dFJhbmdlc1tpXS5wdXNoKCtudW1iZXIpKTtcbiAgfSk7XG4gIGNvbnN0IGludGVycG9sYXRpb25zID0gb3V0cHV0UmFuZ2VbMF0ubWF0Y2goc3RyaW5nU2hhcGVSZWdleCkubWFwKChfdmFsdWUsIGkpID0+IGNyZWF0ZUludGVycG9sYXRvcihfZXh0ZW5kcyh7fSwgY29uZmlnLCB7XG4gICAgb3V0cHV0OiBvdXRwdXRSYW5nZXNbaV1cbiAgfSkpKTtcbiAgcmV0dXJuIGlucHV0ID0+IHtcbiAgICBsZXQgaSA9IDA7XG4gICAgcmV0dXJuIG91dHB1dFJhbmdlWzBdIC8vICdyZ2JhKDAsIDEwMCwgMjAwLCAwKSdcbiAgICAvLyAtPlxuICAgIC8vICdyZ2JhKCR7aW50ZXJwb2xhdGlvbnNbMF0oaW5wdXQpfSwgJHtpbnRlcnBvbGF0aW9uc1sxXShpbnB1dCl9LCAuLi4nXG4gICAgLnJlcGxhY2Uoc3RyaW5nU2hhcGVSZWdleCwgKCkgPT4gaW50ZXJwb2xhdGlvbnNbaSsrXShpbnB1dCkpIC8vIHJnYmEgcmVxdWlyZXMgdGhhdCB0aGUgcixnLGIgYXJlIGludGVnZXJzLi4uLiBzbyB3ZSB3YW50IHRvIHJvdW5kIHRoZW0sIGJ1dCB3ZSAqZG9udCogd2FudCB0b1xuICAgIC8vIHJvdW5kIHRoZSBvcGFjaXR5ICg0dGggY29sdW1uKS5cbiAgICAucmVwbGFjZSgvcmdiYVxcKChbMC05XFwuLV0rKSwgKFswLTlcXC4tXSspLCAoWzAtOVxcLi1dKyksIChbMC05XFwuLV0rKVxcKS9naSwgKF8sIHAxLCBwMiwgcDMsIHA0KSA9PiBgcmdiYSgke01hdGgucm91bmQocDEpfSwgJHtNYXRoLnJvdW5kKHAyKX0sICR7TWF0aC5yb3VuZChwMyl9LCAke3A0fSlgKTtcbiAgfTtcbn07XG5cbmxldCBpc1VuaXRsZXNzTnVtYmVyID0ge1xuICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogdHJ1ZSxcbiAgYm9yZGVySW1hZ2VPdXRzZXQ6IHRydWUsXG4gIGJvcmRlckltYWdlU2xpY2U6IHRydWUsXG4gIGJvcmRlckltYWdlV2lkdGg6IHRydWUsXG4gIGJveEZsZXg6IHRydWUsXG4gIGJveEZsZXhHcm91cDogdHJ1ZSxcbiAgYm94T3JkaW5hbEdyb3VwOiB0cnVlLFxuICBjb2x1bW5Db3VudDogdHJ1ZSxcbiAgY29sdW1uczogdHJ1ZSxcbiAgZmxleDogdHJ1ZSxcbiAgZmxleEdyb3c6IHRydWUsXG4gIGZsZXhQb3NpdGl2ZTogdHJ1ZSxcbiAgZmxleFNocmluazogdHJ1ZSxcbiAgZmxleE5lZ2F0aXZlOiB0cnVlLFxuICBmbGV4T3JkZXI6IHRydWUsXG4gIGdyaWRSb3c6IHRydWUsXG4gIGdyaWRSb3dFbmQ6IHRydWUsXG4gIGdyaWRSb3dTcGFuOiB0cnVlLFxuICBncmlkUm93U3RhcnQ6IHRydWUsXG4gIGdyaWRDb2x1bW46IHRydWUsXG4gIGdyaWRDb2x1bW5FbmQ6IHRydWUsXG4gIGdyaWRDb2x1bW5TcGFuOiB0cnVlLFxuICBncmlkQ29sdW1uU3RhcnQ6IHRydWUsXG4gIGZvbnRXZWlnaHQ6IHRydWUsXG4gIGxpbmVDbGFtcDogdHJ1ZSxcbiAgbGluZUhlaWdodDogdHJ1ZSxcbiAgb3BhY2l0eTogdHJ1ZSxcbiAgb3JkZXI6IHRydWUsXG4gIG9ycGhhbnM6IHRydWUsXG4gIHRhYlNpemU6IHRydWUsXG4gIHdpZG93czogdHJ1ZSxcbiAgekluZGV4OiB0cnVlLFxuICB6b29tOiB0cnVlLFxuICAvLyBTVkctcmVsYXRlZCBwcm9wZXJ0aWVzXG4gIGZpbGxPcGFjaXR5OiB0cnVlLFxuICBmbG9vZE9wYWNpdHk6IHRydWUsXG4gIHN0b3BPcGFjaXR5OiB0cnVlLFxuICBzdHJva2VEYXNoYXJyYXk6IHRydWUsXG4gIHN0cm9rZURhc2hvZmZzZXQ6IHRydWUsXG4gIHN0cm9rZU1pdGVybGltaXQ6IHRydWUsXG4gIHN0cm9rZU9wYWNpdHk6IHRydWUsXG4gIHN0cm9rZVdpZHRoOiB0cnVlXG59O1xuXG5jb25zdCBwcmVmaXhLZXkgPSAocHJlZml4LCBrZXkpID0+IHByZWZpeCArIGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zdWJzdHJpbmcoMSk7XG5cbmNvbnN0IHByZWZpeGVzID0gWydXZWJraXQnLCAnTXMnLCAnTW96JywgJ08nXTtcbmlzVW5pdGxlc3NOdW1iZXIgPSBPYmplY3Qua2V5cyhpc1VuaXRsZXNzTnVtYmVyKS5yZWR1Y2UoKGFjYywgcHJvcCkgPT4ge1xuICBwcmVmaXhlcy5mb3JFYWNoKHByZWZpeCA9PiBhY2NbcHJlZml4S2V5KHByZWZpeCwgcHJvcCldID0gYWNjW3Byb3BdKTtcbiAgcmV0dXJuIGFjYztcbn0sIGlzVW5pdGxlc3NOdW1iZXIpO1xuXG5mdW5jdGlvbiBkYW5nZXJvdXNTdHlsZVZhbHVlKG5hbWUsIHZhbHVlLCBpc0N1c3RvbVByb3BlcnR5KSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nIHx8IHZhbHVlID09PSAnJykgcmV0dXJuICcnO1xuICBpZiAoIWlzQ3VzdG9tUHJvcGVydHkgJiYgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB2YWx1ZSAhPT0gMCAmJiAhKGlzVW5pdGxlc3NOdW1iZXIuaGFzT3duUHJvcGVydHkobmFtZSkgJiYgaXNVbml0bGVzc051bWJlcltuYW1lXSkpIHJldHVybiB2YWx1ZSArICdweCc7IC8vIFByZXN1bWVzIGltcGxpY2l0ICdweCcgc3VmZml4IGZvciB1bml0bGVzcyBudW1iZXJzXG5cbiAgcmV0dXJuICgnJyArIHZhbHVlKS50cmltKCk7XG59XG5cbmNvbnN0IGF0dHJpYnV0ZUNhY2hlID0ge307XG5pbmplY3RDcmVhdGVBbmltYXRlZFN0eWxlKHN0eWxlID0+IG5ldyBBbmltYXRlZFN0eWxlKHN0eWxlKSk7XG5pbmplY3REZWZhdWx0RWxlbWVudCgnZGl2Jyk7XG5pbmplY3RTdHJpbmdJbnRlcnBvbGF0b3IoY3JlYXRlU3RyaW5nSW50ZXJwb2xhdG9yKTtcbmluamVjdENvbG9yTmFtZXMoY29sb3JzKTtcbmluamVjdEFwcGx5QW5pbWF0ZWRWYWx1ZXMoKGluc3RhbmNlLCBwcm9wcykgPT4ge1xuICBpZiAoaW5zdGFuY2Uubm9kZVR5cGUgJiYgaW5zdGFuY2Uuc2V0QXR0cmlidXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgc2Nyb2xsVG9wID0gcHJvcHMuc2Nyb2xsVG9wLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSBwcm9wcy5zY3JvbGxMZWZ0LFxuICAgICAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgW1wic3R5bGVcIiwgXCJjaGlsZHJlblwiLCBcInNjcm9sbFRvcFwiLCBcInNjcm9sbExlZnRcIl0pO1xuXG4gICAgY29uc3QgZmlsdGVyID0gaW5zdGFuY2Uubm9kZU5hbWUgPT09ICdmaWx0ZXInIHx8IGluc3RhbmNlLnBhcmVudE5vZGUgJiYgaW5zdGFuY2UucGFyZW50Tm9kZS5ub2RlTmFtZSA9PT0gJ2ZpbHRlcic7XG4gICAgaWYgKHNjcm9sbFRvcCAhPT0gdm9pZCAwKSBpbnN0YW5jZS5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG4gICAgaWYgKHNjcm9sbExlZnQgIT09IHZvaWQgMCkgaW5zdGFuY2Uuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7IC8vIFNldCB0ZXh0Q29udGVudCwgaWYgY2hpbGRyZW4gaXMgYW4gYW5pbWF0YWJsZSB2YWx1ZVxuXG4gICAgaWYgKGNoaWxkcmVuICE9PSB2b2lkIDApIGluc3RhbmNlLnRleHRDb250ZW50ID0gY2hpbGRyZW47IC8vIFNldCBzdHlsZXMgLi4uXG5cbiAgICBmb3IgKGxldCBzdHlsZU5hbWUgaW4gc3R5bGUpIHtcbiAgICAgIGlmICghc3R5bGUuaGFzT3duUHJvcGVydHkoc3R5bGVOYW1lKSkgY29udGludWU7XG4gICAgICB2YXIgaXNDdXN0b21Qcm9wZXJ0eSA9IHN0eWxlTmFtZS5pbmRleE9mKCctLScpID09PSAwO1xuICAgICAgdmFyIHN0eWxlVmFsdWUgPSBkYW5nZXJvdXNTdHlsZVZhbHVlKHN0eWxlTmFtZSwgc3R5bGVbc3R5bGVOYW1lXSwgaXNDdXN0b21Qcm9wZXJ0eSk7XG4gICAgICBpZiAoc3R5bGVOYW1lID09PSAnZmxvYXQnKSBzdHlsZU5hbWUgPSAnY3NzRmxvYXQnO1xuICAgICAgaWYgKGlzQ3VzdG9tUHJvcGVydHkpIGluc3RhbmNlLnN0eWxlLnNldFByb3BlcnR5KHN0eWxlTmFtZSwgc3R5bGVWYWx1ZSk7ZWxzZSBpbnN0YW5jZS5zdHlsZVtzdHlsZU5hbWVdID0gc3R5bGVWYWx1ZTtcbiAgICB9IC8vIFNldCBhdHRyaWJ1dGVzIC4uLlxuXG5cbiAgICBmb3IgKGxldCBuYW1lIGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgIC8vIEF0dHJpYnV0ZXMgYXJlIHdyaXR0ZW4gaW4gZGFzaCBjYXNlXG4gICAgICBjb25zdCBkYXNoQ2FzZSA9IGZpbHRlciA/IG5hbWUgOiBhdHRyaWJ1dGVDYWNoZVtuYW1lXSB8fCAoYXR0cmlidXRlQ2FjaGVbbmFtZV0gPSBuYW1lLnJlcGxhY2UoLyhbQS1aXSkvZywgbiA9PiAnLScgKyBuLnRvTG93ZXJDYXNlKCkpKTtcbiAgICAgIGlmICh0eXBlb2YgaW5zdGFuY2UuZ2V0QXR0cmlidXRlKGRhc2hDYXNlKSAhPT0gJ3VuZGVmaW5lZCcpIGluc3RhbmNlLnNldEF0dHJpYnV0ZShkYXNoQ2FzZSwgYXR0cmlidXRlc1tuYW1lXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xufSwgc3R5bGUgPT4gc3R5bGUpO1xuXG5jb25zdCBkb21FbGVtZW50cyA9IFsnYScsICdhYmJyJywgJ2FkZHJlc3MnLCAnYXJlYScsICdhcnRpY2xlJywgJ2FzaWRlJywgJ2F1ZGlvJywgJ2InLCAnYmFzZScsICdiZGknLCAnYmRvJywgJ2JpZycsICdibG9ja3F1b3RlJywgJ2JvZHknLCAnYnInLCAnYnV0dG9uJywgJ2NhbnZhcycsICdjYXB0aW9uJywgJ2NpdGUnLCAnY29kZScsICdjb2wnLCAnY29sZ3JvdXAnLCAnZGF0YScsICdkYXRhbGlzdCcsICdkZCcsICdkZWwnLCAnZGV0YWlscycsICdkZm4nLCAnZGlhbG9nJywgJ2RpdicsICdkbCcsICdkdCcsICdlbScsICdlbWJlZCcsICdmaWVsZHNldCcsICdmaWdjYXB0aW9uJywgJ2ZpZ3VyZScsICdmb290ZXInLCAnZm9ybScsICdoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdoZWFkJywgJ2hlYWRlcicsICdoZ3JvdXAnLCAnaHInLCAnaHRtbCcsICdpJywgJ2lmcmFtZScsICdpbWcnLCAnaW5wdXQnLCAnaW5zJywgJ2tiZCcsICdrZXlnZW4nLCAnbGFiZWwnLCAnbGVnZW5kJywgJ2xpJywgJ2xpbmsnLCAnbWFpbicsICdtYXAnLCAnbWFyaycsICdtZW51JywgJ21lbnVpdGVtJywgJ21ldGEnLCAnbWV0ZXInLCAnbmF2JywgJ25vc2NyaXB0JywgJ29iamVjdCcsICdvbCcsICdvcHRncm91cCcsICdvcHRpb24nLCAnb3V0cHV0JywgJ3AnLCAncGFyYW0nLCAncGljdHVyZScsICdwcmUnLCAncHJvZ3Jlc3MnLCAncScsICdycCcsICdydCcsICdydWJ5JywgJ3MnLCAnc2FtcCcsICdzY3JpcHQnLCAnc2VjdGlvbicsICdzZWxlY3QnLCAnc21hbGwnLCAnc291cmNlJywgJ3NwYW4nLCAnc3Ryb25nJywgJ3N0eWxlJywgJ3N1YicsICdzdW1tYXJ5JywgJ3N1cCcsICd0YWJsZScsICd0Ym9keScsICd0ZCcsICd0ZXh0YXJlYScsICd0Zm9vdCcsICd0aCcsICd0aGVhZCcsICd0aW1lJywgJ3RpdGxlJywgJ3RyJywgJ3RyYWNrJywgJ3UnLCAndWwnLCAndmFyJywgJ3ZpZGVvJywgJ3dicicsIC8vIFNWR1xuJ2NpcmNsZScsICdjbGlwUGF0aCcsICdkZWZzJywgJ2VsbGlwc2UnLCAnZm9yZWlnbk9iamVjdCcsICdnJywgJ2ltYWdlJywgJ2xpbmUnLCAnbGluZWFyR3JhZGllbnQnLCAnbWFzaycsICdwYXRoJywgJ3BhdHRlcm4nLCAncG9seWdvbicsICdwb2x5bGluZScsICdyYWRpYWxHcmFkaWVudCcsICdyZWN0JywgJ3N0b3AnLCAnc3ZnJywgJ3RleHQnLCAndHNwYW4nXTtcbi8vIEV4dGVuZCBhbmltYXRlZCB3aXRoIGFsbCB0aGUgYXZhaWxhYmxlIFRIUkVFIGVsZW1lbnRzXG5jb25zdCBhcHBseSA9IG1lcmdlKGNyZWF0ZUFuaW1hdGVkQ29tcG9uZW50LCBmYWxzZSk7XG5jb25zdCBleHRlbmRlZEFuaW1hdGVkID0gYXBwbHkoZG9tRWxlbWVudHMpO1xuXG5leHBvcnQgeyBhcHBseSwgY29uZmlnLCB1cGRhdGUsIGV4dGVuZGVkQW5pbWF0ZWQgYXMgYW5pbWF0ZWQsIGV4dGVuZGVkQW5pbWF0ZWQgYXMgYSwgaW50ZXJwb2xhdGUkMSBhcyBpbnRlcnBvbGF0ZSwgR2xvYmFscywgdXNlU3ByaW5nLCB1c2VUcmFpbCwgdXNlVHJhbnNpdGlvbiwgdXNlQ2hhaW4sIHVzZVNwcmluZ3MgfTtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzJyk7XG5cbnZhciBSZWFjdFZlcnNpb24gPSAnMTYuMTMuMSc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTsgLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgZGlzcGF0Y2hlci5cbiAqL1xudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBiYXRjaCdzIGNvbmZpZ3VyYXRpb24gc3VjaCBhcyBob3cgbG9uZyBhbiB1cGRhdGVcbiAqIHNob3VsZCBzdXNwZW5kIGZvciBpZiBpdCBuZWVkcyB0by5cbiAqL1xudmFyIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnID0ge1xuICBzdXNwZW5zZTogbnVsbFxufTtcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBvd25lci5cbiAqXG4gKiBUaGUgY3VycmVudCBvd25lciBpcyB0aGUgY29tcG9uZW50IHdobyBzaG91bGQgb3duIGFueSBjb21wb25lbnRzIHRoYXQgYXJlXG4gKiBjdXJyZW50bHkgYmVpbmcgY29uc3RydWN0ZWQuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG52YXIgQkVGT1JFX1NMQVNIX1JFID0gL14oLiopW1xcXFxcXC9dLztcbmZ1bmN0aW9uIGRlc2NyaWJlQ29tcG9uZW50RnJhbWUgKG5hbWUsIHNvdXJjZSwgb3duZXJOYW1lKSB7XG4gIHZhciBzb3VyY2VJbmZvID0gJyc7XG5cbiAgaWYgKHNvdXJjZSkge1xuICAgIHZhciBwYXRoID0gc291cmNlLmZpbGVOYW1lO1xuICAgIHZhciBmaWxlTmFtZSA9IHBhdGgucmVwbGFjZShCRUZPUkVfU0xBU0hfUkUsICcnKTtcblxuICAgIHtcbiAgICAgIC8vIEluIERFViwgaW5jbHVkZSBjb2RlIGZvciBhIGNvbW1vbiBzcGVjaWFsIGNhc2U6XG4gICAgICAvLyBwcmVmZXIgXCJmb2xkZXIvaW5kZXguanNcIiBpbnN0ZWFkIG9mIGp1c3QgXCJpbmRleC5qc1wiLlxuICAgICAgaWYgKC9eaW5kZXhcXC4vLnRlc3QoZmlsZU5hbWUpKSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHBhdGgubWF0Y2goQkVGT1JFX1NMQVNIX1JFKTtcblxuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICB2YXIgcGF0aEJlZm9yZVNsYXNoID0gbWF0Y2hbMV07XG5cbiAgICAgICAgICBpZiAocGF0aEJlZm9yZVNsYXNoKSB7XG4gICAgICAgICAgICB2YXIgZm9sZGVyTmFtZSA9IHBhdGhCZWZvcmVTbGFzaC5yZXBsYWNlKEJFRk9SRV9TTEFTSF9SRSwgJycpO1xuICAgICAgICAgICAgZmlsZU5hbWUgPSBmb2xkZXJOYW1lICsgJy8nICsgZmlsZU5hbWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc291cmNlSW5mbyA9ICcgKGF0ICcgKyBmaWxlTmFtZSArICc6JyArIHNvdXJjZS5saW5lTnVtYmVyICsgJyknO1xuICB9IGVsc2UgaWYgKG93bmVyTmFtZSkge1xuICAgIHNvdXJjZUluZm8gPSAnIChjcmVhdGVkIGJ5ICcgKyBvd25lck5hbWUgKyAnKSc7XG4gIH1cblxuICByZXR1cm4gJ1xcbiAgICBpbiAnICsgKG5hbWUgfHwgJ1Vua25vd24nKSArIHNvdXJjZUluZm87XG59XG5cbnZhciBSZXNvbHZlZCA9IDE7XG5mdW5jdGlvbiByZWZpbmVSZXNvbHZlZExhenlDb21wb25lbnQobGF6eUNvbXBvbmVudCkge1xuICByZXR1cm4gbGF6eUNvbXBvbmVudC5fc3RhdHVzID09PSBSZXNvbHZlZCA/IGxhenlDb21wb25lbnQuX3Jlc3VsdCA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiBcIlByb2ZpbGVyXCI7XG5cbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICByZXR1cm4gJ0NvbnRleHQuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHJldHVybiAnQ29udGV4dC5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIHRoZW5hYmxlID0gdHlwZTtcbiAgICAgICAgICB2YXIgcmVzb2x2ZWRUaGVuYWJsZSA9IHJlZmluZVJlc29sdmVkTGF6eUNvbXBvbmVudCh0aGVuYWJsZSk7XG5cbiAgICAgICAgICBpZiAocmVzb2x2ZWRUaGVuYWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUocmVzb2x2ZWRUaGVuYWJsZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSB7fTtcbnZhciBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCA9IG51bGw7XG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cbn1cblxue1xuICAvLyBTdGFjayBpbXBsZW1lbnRhdGlvbiBpbmplY3RlZCBieSB0aGUgY3VycmVudCByZW5kZXJlci5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2sgPSBudWxsO1xuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhY2sgPSAnJzsgLy8gQWRkIGFuIGV4dHJhIHRvcCBmcmFtZSB3aGlsZSBhbiBlbGVtZW50IGlzIGJlaW5nIHZhbGlkYXRlZFxuXG4gICAgaWYgKGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQudHlwZSk7XG4gICAgICB2YXIgb3duZXIgPSBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudC5fb3duZXI7XG4gICAgICBzdGFjayArPSBkZXNjcmliZUNvbXBvbmVudEZyYW1lKG5hbWUsIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50Ll9zb3VyY2UsIG93bmVyICYmIGdldENvbXBvbmVudE5hbWUob3duZXIudHlwZSkpO1xuICAgIH0gLy8gRGVsZWdhdGUgdG8gdGhlIGluamVjdGVkIHJlbmRlcmVyLXNwZWNpZmljIGltcGxlbWVudGF0aW9uXG5cblxuICAgIHZhciBpbXBsID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2s7XG5cbiAgICBpZiAoaW1wbCkge1xuICAgICAgc3RhY2sgKz0gaW1wbCgpIHx8ICcnO1xuICAgIH1cblxuICAgIHJldHVybiBzdGFjaztcbiAgfTtcbn1cblxuLyoqXG4gKiBVc2VkIGJ5IGFjdCgpIHRvIHRyYWNrIHdoZXRoZXIgeW91J3JlIGluc2lkZSBhbiBhY3QoKSBzY29wZS5cbiAqL1xudmFyIElzU29tZVJlbmRlcmVyQWN0aW5nID0ge1xuICBjdXJyZW50OiBmYWxzZVxufTtcblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0ge1xuICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyOiBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLFxuICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZzogUmVhY3RDdXJyZW50QmF0Y2hDb25maWcsXG4gIFJlYWN0Q3VycmVudE93bmVyOiBSZWFjdEN1cnJlbnRPd25lcixcbiAgSXNTb21lUmVuZGVyZXJBY3Rpbmc6IElzU29tZVJlbmRlcmVyQWN0aW5nLFxuICAvLyBVc2VkIGJ5IHJlbmRlcmVycyB0byBhdm9pZCBidW5kbGluZyBvYmplY3QtYXNzaWduIHR3aWNlIGluIFVNRCBidW5kbGVzOlxuICBhc3NpZ246IF9hc3NpZ25cbn07XG5cbntcbiAgX2Fzc2lnbihSZWFjdFNoYXJlZEludGVybmFscywge1xuICAgIC8vIFRoZXNlIHNob3VsZCBub3QgYmUgaW5jbHVkZWQgaW4gcHJvZHVjdGlvbi5cbiAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lOiBSZWFjdERlYnVnQ3VycmVudEZyYW1lLFxuICAgIC8vIFNoaW0gZm9yIFJlYWN0IERPTSAxNi4wLjAgd2hpY2ggc3RpbGwgZGVzdHJ1Y3R1cmVkIChidXQgbm90IHVzZWQpIHRoaXMuXG4gICAgLy8gVE9ETzogcmVtb3ZlIGluIFJlYWN0IDE3LjAuXG4gICAgUmVhY3RDb21wb25lbnRUcmVlSG9vazoge31cbiAgfSk7XG59XG5cbi8vIGJ5IGNhbGxzIHRvIHRoZXNlIG1ldGhvZHMgYnkgYSBCYWJlbCBwbHVnaW4uXG4vL1xuLy8gSW4gUFJPRCAob3IgaW4gcGFja2FnZXMgd2l0aG91dCBhY2Nlc3MgdG8gUmVhY3QgaW50ZXJuYWxzKSxcbi8vIHRoZXkgYXJlIGxlZnQgYXMgdGhleSBhcmUgaW5zdGVhZC5cblxuZnVuY3Rpb24gd2Fybihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnd2FybicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIGhhc0V4aXN0aW5nU3RhY2sgPSBhcmdzLmxlbmd0aCA+IDAgJiYgdHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9PT0gJ3N0cmluZycgJiYgYXJnc1thcmdzLmxlbmd0aCAtIDFdLmluZGV4T2YoJ1xcbiAgICBpbicpID09PSAwO1xuXG4gICAgaWYgKCFoYXNFeGlzdGluZ1N0YWNrKSB7XG4gICAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gJycgKyBpdGVtO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG5cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9XG59XG5cbnZhciBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnQgPSB7fTtcblxuZnVuY3Rpb24gd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIGNhbGxlck5hbWUpIHtcbiAge1xuICAgIHZhciBfY29uc3RydWN0b3IgPSBwdWJsaWNJbnN0YW5jZS5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IF9jb25zdHJ1Y3RvciAmJiAoX2NvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IF9jb25zdHJ1Y3Rvci5uYW1lKSB8fCAnUmVhY3RDbGFzcyc7XG4gICAgdmFyIHdhcm5pbmdLZXkgPSBjb21wb25lbnROYW1lICsgXCIuXCIgKyBjYWxsZXJOYW1lO1xuXG4gICAgaWYgKGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVycm9yKFwiQ2FuJ3QgY2FsbCAlcyBvbiBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCB5ZXQgbW91bnRlZC4gXCIgKyAnVGhpcyBpcyBhIG5vLW9wLCBidXQgaXQgbWlnaHQgaW5kaWNhdGUgYSBidWcgaW4geW91ciBhcHBsaWNhdGlvbi4gJyArICdJbnN0ZWFkLCBhc3NpZ24gdG8gYHRoaXMuc3RhdGVgIGRpcmVjdGx5IG9yIGRlZmluZSBhIGBzdGF0ZSA9IHt9O2AgJyArICdjbGFzcyBwcm9wZXJ0eSB3aXRoIHRoZSBkZXNpcmVkIHN0YXRlIGluIHRoZSAlcyBjb21wb25lbnQuJywgY2FsbGVyTmFtZSwgY29tcG9uZW50TmFtZSk7XG5cbiAgICBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0gPSB0cnVlO1xuICB9XG59XG4vKipcbiAqIFRoaXMgaXMgdGhlIGFic3RyYWN0IEFQSSBmb3IgYW4gdXBkYXRlIHF1ZXVlLlxuICovXG5cblxudmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0ge1xuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHRoaXMgY29tcG9zaXRlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB3ZSB3YW50IHRvIHRlc3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbW91bnRlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBmaW5hbFxuICAgKi9cbiAgaXNNb3VudGVkOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAgICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gICAqXG4gICAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAgICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gICAqXG4gICAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAgICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVGb3JjZVVwZGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnZm9yY2VVcGRhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVwbGFjZXMgYWxsIG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIG9yIGBzZXRTdGF0ZWAgdG8gbXV0YXRlIHN0YXRlLlxuICAgKiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gICAqXG4gICAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gICAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29tcGxldGVTdGF0ZSBOZXh0IHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlUmVwbGFjZVN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNvbXBsZXRlU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdyZXBsYWNlU3RhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIFRoaXMgb25seSBleGlzdHMgYmVjYXVzZSBfcGVuZGluZ1N0YXRlIGlzXG4gICAqIGludGVybmFsLiBUaGlzIHByb3ZpZGVzIGEgbWVyZ2luZyBzdHJhdGVneSB0aGF0IGlzIG5vdCBhdmFpbGFibGUgdG8gZGVlcFxuICAgKiBwcm9wZXJ0aWVzIHdoaWNoIGlzIGNvbmZ1c2luZy4gVE9ETzogRXhwb3NlIHBlbmRpbmdTdGF0ZSBvciBkb24ndCB1c2UgaXRcbiAgICogZHVyaW5nIHRoZSBtZXJnZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IE5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVNldFN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3NldFN0YXRlJyk7XG4gIH1cbn07XG5cbnZhciBlbXB0eU9iamVjdCA9IHt9O1xuXG57XG4gIE9iamVjdC5mcmVlemUoZW1wdHlPYmplY3QpO1xufVxuLyoqXG4gKiBCYXNlIGNsYXNzIGhlbHBlcnMgZm9yIHRoZSB1cGRhdGluZyBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqL1xuXG5cbmZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0OyAvLyBXZSBpbml0aWFsaXplIHRoZSBkZWZhdWx0IHVwZGF0ZXIgYnV0IHRoZSByZWFsIG9uZSBnZXRzIGluamVjdGVkIGJ5IHRoZVxuICAvLyByZW5kZXJlci5cblxuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG5Db21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB7fTtcbi8qKlxuICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyB0byBtdXRhdGVcbiAqIHN0YXRlLiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgY2FsbHMgdG8gYHNldFN0YXRlYCB3aWxsIHJ1biBzeW5jaHJvbm91c2x5LFxuICogYXMgdGhleSBtYXkgZXZlbnR1YWxseSBiZSBiYXRjaGVkIHRvZ2V0aGVyLiAgWW91IGNhbiBwcm92aWRlIGFuIG9wdGlvbmFsXG4gKiBjYWxsYmFjayB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgY2FsbCB0byBzZXRTdGF0ZSBpcyBhY3R1YWxseVxuICogY29tcGxldGVkLlxuICpcbiAqIFdoZW4gYSBmdW5jdGlvbiBpcyBwcm92aWRlZCB0byBzZXRTdGF0ZSwgaXQgd2lsbCBiZSBjYWxsZWQgYXQgc29tZSBwb2ludCBpblxuICogdGhlIGZ1dHVyZSAobm90IHN5bmNocm9ub3VzbHkpLiBJdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSB1cCB0byBkYXRlXG4gKiBjb21wb25lbnQgYXJndW1lbnRzIChzdGF0ZSwgcHJvcHMsIGNvbnRleHQpLiBUaGVzZSB2YWx1ZXMgY2FuIGJlIGRpZmZlcmVudFxuICogZnJvbSB0aGlzLiogYmVjYXVzZSB5b3VyIGZ1bmN0aW9uIG1heSBiZSBjYWxsZWQgYWZ0ZXIgcmVjZWl2ZVByb3BzIGJ1dCBiZWZvcmVcbiAqIHNob3VsZENvbXBvbmVudFVwZGF0ZSwgYW5kIHRoaXMgbmV3IHN0YXRlLCBwcm9wcywgYW5kIGNvbnRleHQgd2lsbCBub3QgeWV0IGJlXG4gKiBhc3NpZ25lZCB0byB0aGlzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIG9yIGZ1bmN0aW9uIHRvXG4gKiAgICAgICAgcHJvZHVjZSBuZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggY3VycmVudCBzdGF0ZS5cbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgc3RhdGUgaXMgdXBkYXRlZC5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAocGFydGlhbFN0YXRlLCBjYWxsYmFjaykge1xuICBpZiAoISh0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnZnVuY3Rpb24nIHx8IHBhcnRpYWxTdGF0ZSA9PSBudWxsKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcInNldFN0YXRlKC4uLik6IHRha2VzIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMgdG8gdXBkYXRlIG9yIGEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzLlwiICk7XG4gICAgfVxuICB9XG5cbiAgdGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCAnc2V0U3RhdGUnKTtcbn07XG4vKipcbiAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICpcbiAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICpcbiAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gKlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciB1cGRhdGUgaXMgY29tcGxldGUuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgdGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLCBjYWxsYmFjaywgJ2ZvcmNlVXBkYXRlJyk7XG59O1xuLyoqXG4gKiBEZXByZWNhdGVkIEFQSXMuIFRoZXNlIEFQSXMgdXNlZCB0byBleGlzdCBvbiBjbGFzc2ljIFJlYWN0IGNsYXNzZXMgYnV0IHNpbmNlXG4gKiB3ZSB3b3VsZCBsaWtlIHRvIGRlcHJlY2F0ZSB0aGVtLCB3ZSdyZSBub3QgZ29pbmcgdG8gbW92ZSB0aGVtIG92ZXIgdG8gdGhpc1xuICogbW9kZXJuIGJhc2UgY2xhc3MuIEluc3RlYWQsIHdlIGRlZmluZSBhIGdldHRlciB0aGF0IHdhcm5zIGlmIGl0J3MgYWNjZXNzZWQuXG4gKi9cblxuXG57XG4gIHZhciBkZXByZWNhdGVkQVBJcyA9IHtcbiAgICBpc01vdW50ZWQ6IFsnaXNNb3VudGVkJywgJ0luc3RlYWQsIG1ha2Ugc3VyZSB0byBjbGVhbiB1cCBzdWJzY3JpcHRpb25zIGFuZCBwZW5kaW5nIHJlcXVlc3RzIGluICcgKyAnY29tcG9uZW50V2lsbFVubW91bnQgdG8gcHJldmVudCBtZW1vcnkgbGVha3MuJ10sXG4gICAgcmVwbGFjZVN0YXRlOiBbJ3JlcGxhY2VTdGF0ZScsICdSZWZhY3RvciB5b3VyIGNvZGUgdG8gdXNlIHNldFN0YXRlIGluc3RlYWQgKHNlZSAnICsgJ2h0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMzIzNikuJ11cbiAgfTtcblxuICB2YXIgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUsIGluZm8pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29tcG9uZW50LnByb3RvdHlwZSwgbWV0aG9kTmFtZSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJyVzKC4uLikgaXMgZGVwcmVjYXRlZCBpbiBwbGFpbiBKYXZhU2NyaXB0IFJlYWN0IGNsYXNzZXMuICVzJywgaW5mb1swXSwgaW5mb1sxXSk7XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBmb3IgKHZhciBmbk5hbWUgaW4gZGVwcmVjYXRlZEFQSXMpIHtcbiAgICBpZiAoZGVwcmVjYXRlZEFQSXMuaGFzT3duUHJvcGVydHkoZm5OYW1lKSkge1xuICAgICAgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nKGZuTmFtZSwgZGVwcmVjYXRlZEFQSXNbZm5OYW1lXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIENvbXBvbmVudER1bW15KCkge31cblxuQ29tcG9uZW50RHVtbXkucHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbi8qKlxuICogQ29udmVuaWVuY2UgY29tcG9uZW50IHdpdGggZGVmYXVsdCBzaGFsbG93IGVxdWFsaXR5IGNoZWNrIGZvciBzQ1UuXG4gKi9cblxuZnVuY3Rpb24gUHVyZUNvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG52YXIgcHVyZUNvbXBvbmVudFByb3RvdHlwZSA9IFB1cmVDb21wb25lbnQucHJvdG90eXBlID0gbmV3IENvbXBvbmVudER1bW15KCk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUHVyZUNvbXBvbmVudDsgLy8gQXZvaWQgYW4gZXh0cmEgcHJvdG90eXBlIGp1bXAgZm9yIHRoZXNlIG1ldGhvZHMuXG5cbl9hc3NpZ24ocHVyZUNvbXBvbmVudFByb3RvdHlwZSwgQ29tcG9uZW50LnByb3RvdHlwZSk7XG5cbnB1cmVDb21wb25lbnRQcm90b3R5cGUuaXNQdXJlUmVhY3RDb21wb25lbnQgPSB0cnVlO1xuXG4vLyBhbiBpbW11dGFibGUgb2JqZWN0IHdpdGggYSBzaW5nbGUgbXV0YWJsZSB2YWx1ZVxuZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuICB2YXIgcmVmT2JqZWN0ID0ge1xuICAgIGN1cnJlbnQ6IG51bGxcbiAgfTtcblxuICB7XG4gICAgT2JqZWN0LnNlYWwocmVmT2JqZWN0KTtcbiAgfVxuXG4gIHJldHVybiByZWZPYmplY3Q7XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duLCBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biwgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcblxue1xuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vZmIubWUvcmVhY3Qtc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vZmIubWUvcmVhY3Qtc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBjb25maWcuX19zZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBjb25maWcuX19zZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL2ZiLm1lL3JlYWN0LXN0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSksIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IG9mIHRoZSBnaXZlbiB0eXBlLlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjcmVhdGVlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gIHZhciBwcm9wcyA9IHt9O1xuICB2YXIga2V5ID0gbnVsbDtcbiAgdmFyIHJlZiA9IG51bGw7XG4gIHZhciBzZWxmID0gbnVsbDtcbiAgdmFyIHNvdXJjZSA9IG51bGw7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG5cbiAgICAgIHtcbiAgICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBzZWxmID0gY29uZmlnLl9fc2VsZiA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NlbGY7XG4gICAgc291cmNlID0gY29uZmlnLl9fc291cmNlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc291cmNlOyAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuXG5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG5cbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuXG4gICAge1xuICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZEFycmF5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB7XG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG59XG5mdW5jdGlvbiBjbG9uZUFuZFJlcGxhY2VLZXkob2xkRWxlbWVudCwgbmV3S2V5KSB7XG4gIHZhciBuZXdFbGVtZW50ID0gUmVhY3RFbGVtZW50KG9sZEVsZW1lbnQudHlwZSwgbmV3S2V5LCBvbGRFbGVtZW50LnJlZiwgb2xkRWxlbWVudC5fc2VsZiwgb2xkRWxlbWVudC5fc291cmNlLCBvbGRFbGVtZW50Ll9vd25lciwgb2xkRWxlbWVudC5wcm9wcyk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuLyoqXG4gKiBDbG9uZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCB1c2luZyBlbGVtZW50IGFzIHRoZSBzdGFydGluZyBwb2ludC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY2xvbmVlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gY2xvbmVFbGVtZW50KGVsZW1lbnQsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgaWYgKCEhKGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdW5kZWZpbmVkKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIlJlYWN0LmNsb25lRWxlbWVudCguLi4pOiBUaGUgYXJndW1lbnQgbXVzdCBiZSBhIFJlYWN0IGVsZW1lbnQsIGJ1dCB5b3UgcGFzc2VkIFwiICsgZWxlbWVudCArIFwiLlwiICk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHByb3BOYW1lOyAvLyBPcmlnaW5hbCBwcm9wcyBhcmUgY29waWVkXG5cbiAgdmFyIHByb3BzID0gX2Fzc2lnbih7fSwgZWxlbWVudC5wcm9wcyk7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuXG4gIHZhciBrZXkgPSBlbGVtZW50LmtleTtcbiAgdmFyIHJlZiA9IGVsZW1lbnQucmVmOyAvLyBTZWxmIGlzIHByZXNlcnZlZCBzaW5jZSB0aGUgb3duZXIgaXMgcHJlc2VydmVkLlxuXG4gIHZhciBzZWxmID0gZWxlbWVudC5fc2VsZjsgLy8gU291cmNlIGlzIHByZXNlcnZlZCBzaW5jZSBjbG9uZUVsZW1lbnQgaXMgdW5saWtlbHkgdG8gYmUgdGFyZ2V0ZWQgYnkgYVxuICAvLyB0cmFuc3BpbGVyLCBhbmQgdGhlIG9yaWdpbmFsIHNvdXJjZSBpcyBwcm9iYWJseSBhIGJldHRlciBpbmRpY2F0b3Igb2YgdGhlXG4gIC8vIHRydWUgb3duZXIuXG5cbiAgdmFyIHNvdXJjZSA9IGVsZW1lbnQuX3NvdXJjZTsgLy8gT3duZXIgd2lsbCBiZSBwcmVzZXJ2ZWQsIHVubGVzcyByZWYgaXMgb3ZlcnJpZGRlblxuXG4gIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICAvLyBTaWxlbnRseSBzdGVhbCB0aGUgcmVmIGZyb20gdGhlIHBhcmVudC5cbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICBvd25lciA9IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIG92ZXJyaWRlIGV4aXN0aW5nIHByb3BzXG5cblxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG5cbiAgICBpZiAoZWxlbWVudC50eXBlICYmIGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIGRlZmF1bHRQcm9wcyA9IGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgfVxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgaWYgKGNvbmZpZ1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCAmJiBkZWZhdWx0UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuXG5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG5cbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudChlbGVtZW50LnR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcyk7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuXG52YXIgU0VQQVJBVE9SID0gJy4nO1xudmFyIFNVQlNFUEFSQVRPUiA9ICc6Jztcbi8qKlxuICogRXNjYXBlIGFuZCB3cmFwIGtleSBzbyBpdCBpcyBzYWZlIHRvIHVzZSBhcyBhIHJlYWN0aWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRvIGJlIGVzY2FwZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBlc2NhcGVkIGtleS5cbiAqL1xuXG5mdW5jdGlvbiBlc2NhcGUoa2V5KSB7XG4gIHZhciBlc2NhcGVSZWdleCA9IC9bPTpdL2c7XG4gIHZhciBlc2NhcGVyTG9va3VwID0ge1xuICAgICc9JzogJz0wJyxcbiAgICAnOic6ICc9MidcbiAgfTtcbiAgdmFyIGVzY2FwZWRTdHJpbmcgPSAoJycgKyBrZXkpLnJlcGxhY2UoZXNjYXBlUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiBlc2NhcGVyTG9va3VwW21hdGNoXTtcbiAgfSk7XG4gIHJldHVybiAnJCcgKyBlc2NhcGVkU3RyaW5nO1xufVxuLyoqXG4gKiBUT0RPOiBUZXN0IHRoYXQgYSBzaW5nbGUgY2hpbGQgYW5kIGFuIGFycmF5IHdpdGggb25lIGl0ZW0gaGF2ZSB0aGUgc2FtZSBrZXlcbiAqIHBhdHRlcm4uXG4gKi9cblxuXG52YXIgZGlkV2FybkFib3V0TWFwcyA9IGZhbHNlO1xudmFyIHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4ID0gL1xcLysvZztcblxuZnVuY3Rpb24gZXNjYXBlVXNlclByb3ZpZGVkS2V5KHRleHQpIHtcbiAgcmV0dXJuICgnJyArIHRleHQpLnJlcGxhY2UodXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgsICckJi8nKTtcbn1cblxudmFyIFBPT0xfU0laRSA9IDEwO1xudmFyIHRyYXZlcnNlQ29udGV4dFBvb2wgPSBbXTtcblxuZnVuY3Rpb24gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KG1hcFJlc3VsdCwga2V5UHJlZml4LCBtYXBGdW5jdGlvbiwgbWFwQ29udGV4dCkge1xuICBpZiAodHJhdmVyc2VDb250ZXh0UG9vbC5sZW5ndGgpIHtcbiAgICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gdHJhdmVyc2VDb250ZXh0UG9vbC5wb3AoKTtcbiAgICB0cmF2ZXJzZUNvbnRleHQucmVzdWx0ID0gbWFwUmVzdWx0O1xuICAgIHRyYXZlcnNlQ29udGV4dC5rZXlQcmVmaXggPSBrZXlQcmVmaXg7XG4gICAgdHJhdmVyc2VDb250ZXh0LmZ1bmMgPSBtYXBGdW5jdGlvbjtcbiAgICB0cmF2ZXJzZUNvbnRleHQuY29udGV4dCA9IG1hcENvbnRleHQ7XG4gICAgdHJhdmVyc2VDb250ZXh0LmNvdW50ID0gMDtcbiAgICByZXR1cm4gdHJhdmVyc2VDb250ZXh0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICByZXN1bHQ6IG1hcFJlc3VsdCxcbiAgICAgIGtleVByZWZpeDoga2V5UHJlZml4LFxuICAgICAgZnVuYzogbWFwRnVuY3Rpb24sXG4gICAgICBjb250ZXh0OiBtYXBDb250ZXh0LFxuICAgICAgY291bnQ6IDBcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KSB7XG4gIHRyYXZlcnNlQ29udGV4dC5yZXN1bHQgPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQua2V5UHJlZml4ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmZ1bmMgPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuY29udGV4dCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5jb3VudCA9IDA7XG5cbiAgaWYgKHRyYXZlcnNlQ29udGV4dFBvb2wubGVuZ3RoIDwgUE9PTF9TSVpFKSB7XG4gICAgdHJhdmVyc2VDb250ZXh0UG9vbC5wdXNoKHRyYXZlcnNlQ29udGV4dCk7XG4gIH1cbn1cbi8qKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0geyFzdHJpbmd9IG5hbWVTb0ZhciBOYW1lIG9mIHRoZSBrZXkgcGF0aCBzbyBmYXIuXG4gKiBAcGFyYW0geyFmdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gaW52b2tlIHdpdGggZWFjaCBjaGlsZCBmb3VuZC5cbiAqIEBwYXJhbSB7Pyp9IHRyYXZlcnNlQ29udGV4dCBVc2VkIHRvIHBhc3MgaW5mb3JtYXRpb24gdGhyb3VnaG91dCB0aGUgdHJhdmVyc2FsXG4gKiBwcm9jZXNzLlxuICogQHJldHVybiB7IW51bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbiBpbiB0aGlzIHN1YnRyZWUuXG4gKi9cblxuXG5mdW5jdGlvbiB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZHJlbiwgbmFtZVNvRmFyLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIGNoaWxkcmVuO1xuXG4gIGlmICh0eXBlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAvLyBBbGwgb2YgdGhlIGFib3ZlIGFyZSBwZXJjZWl2ZWQgYXMgbnVsbC5cbiAgICBjaGlsZHJlbiA9IG51bGw7XG4gIH1cblxuICB2YXIgaW52b2tlQ2FsbGJhY2sgPSBmYWxzZTtcblxuICBpZiAoY2hpbGRyZW4gPT09IG51bGwpIHtcbiAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgc3dpdGNoIChjaGlsZHJlbi4kJHR5cGVvZikge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIGlmIChpbnZva2VDYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKHRyYXZlcnNlQ29udGV4dCwgY2hpbGRyZW4sIC8vIElmIGl0J3MgdGhlIG9ubHkgY2hpbGQsIHRyZWF0IHRoZSBuYW1lIGFzIGlmIGl0IHdhcyB3cmFwcGVkIGluIGFuIGFycmF5XG4gICAgLy8gc28gdGhhdCBpdCdzIGNvbnNpc3RlbnQgaWYgdGhlIG51bWJlciBvZiBjaGlsZHJlbiBncm93cy5cbiAgICBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkcmVuLCAwKSA6IG5hbWVTb0Zhcik7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICB2YXIgY2hpbGQ7XG4gIHZhciBuZXh0TmFtZTtcbiAgdmFyIHN1YnRyZWVDb3VudCA9IDA7IC8vIENvdW50IG9mIGNoaWxkcmVuIGZvdW5kIGluIHRoZSBjdXJyZW50IHN1YnRyZWUuXG5cbiAgdmFyIG5leHROYW1lUHJlZml4ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiA6IG5hbWVTb0ZhciArIFNVQlNFUEFSQVRPUjtcblxuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldENvbXBvbmVudEtleShjaGlsZCwgaSk7XG4gICAgICBzdWJ0cmVlQ291bnQgKz0gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGQsIG5leHROYW1lLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKGNoaWxkcmVuKTtcblxuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuXG4gICAgICB7XG4gICAgICAgIC8vIFdhcm4gYWJvdXQgdXNpbmcgTWFwcyBhcyBjaGlsZHJlblxuICAgICAgICBpZiAoaXRlcmF0b3JGbiA9PT0gY2hpbGRyZW4uZW50cmllcykge1xuICAgICAgICAgIGlmICghZGlkV2FybkFib3V0TWFwcykge1xuICAgICAgICAgICAgd2FybignVXNpbmcgTWFwcyBhcyBjaGlsZHJlbiBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBDb25zaWRlciBjb252ZXJ0aW5nIGNoaWxkcmVuIHRvICcgKyAnYW4gYXJyYXkgb2Yga2V5ZWQgUmVhY3RFbGVtZW50cyBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpZFdhcm5BYm91dE1hcHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChjaGlsZHJlbik7XG4gICAgICB2YXIgc3RlcDtcbiAgICAgIHZhciBpaSA9IDA7XG5cbiAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgY2hpbGQgPSBzdGVwLnZhbHVlO1xuICAgICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkLCBpaSsrKTtcbiAgICAgICAgc3VidHJlZUNvdW50ICs9IHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkLCBuZXh0TmFtZSwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGFkZGVuZHVtID0gJyc7XG5cbiAgICAgIHtcbiAgICAgICAgYWRkZW5kdW0gPSAnIElmIHlvdSBtZWFudCB0byByZW5kZXIgYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuLCB1c2UgYW4gYXJyYXkgJyArICdpbnN0ZWFkLicgKyBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNoaWxkcmVuU3RyaW5nID0gJycgKyBjaGlsZHJlbjtcblxuICAgICAge1xuICAgICAgICB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoIFwiT2JqZWN0cyBhcmUgbm90IHZhbGlkIGFzIGEgUmVhY3QgY2hpbGQgKGZvdW5kOiBcIiArIChjaGlsZHJlblN0cmluZyA9PT0gJ1tvYmplY3QgT2JqZWN0XScgPyAnb2JqZWN0IHdpdGgga2V5cyB7JyArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKCcsICcpICsgJ30nIDogY2hpbGRyZW5TdHJpbmcpICsgXCIpLlwiICsgYWRkZW5kdW0gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJ0cmVlQ291bnQ7XG59XG4vKipcbiAqIFRyYXZlcnNlcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAsIGJ1dFxuICogbWlnaHQgYWxzbyBiZSBzcGVjaWZpZWQgdGhyb3VnaCBhdHRyaWJ1dGVzOlxuICpcbiAqIC0gYHRyYXZlcnNlQWxsQ2hpbGRyZW4odGhpcy5wcm9wcy5jaGlsZHJlbiwgLi4uKWBcbiAqIC0gYHRyYXZlcnNlQWxsQ2hpbGRyZW4odGhpcy5wcm9wcy5sZWZ0UGFuZWxDaGlsZHJlbiwgLi4uKWBcbiAqXG4gKiBUaGUgYHRyYXZlcnNlQ29udGV4dGAgaXMgYW4gb3B0aW9uYWwgYXJndW1lbnQgdGhhdCBpcyBwYXNzZWQgdGhyb3VnaCB0aGVcbiAqIGVudGlyZSB0cmF2ZXJzYWwuIEl0IGNhbiBiZSB1c2VkIHRvIHN0b3JlIGFjY3VtdWxhdGlvbnMgb3IgYW55dGhpbmcgZWxzZSB0aGF0XG4gKiB0aGUgY2FsbGJhY2sgbWlnaHQgZmluZCByZWxldmFudC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIG9iamVjdC5cbiAqIEBwYXJhbSB7IWZ1bmN0aW9ufSBjYWxsYmFjayBUbyBpbnZva2UgdXBvbiB0cmF2ZXJzaW5nIGVhY2ggY2hpbGQuXG4gKiBAcGFyYW0gez8qfSB0cmF2ZXJzZUNvbnRleHQgQ29udGV4dCBmb3IgdHJhdmVyc2FsLlxuICogQHJldHVybiB7IW51bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbiBpbiB0aGlzIHN1YnRyZWUuXG4gKi9cblxuXG5mdW5jdGlvbiB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICByZXR1cm4gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGRyZW4sICcnLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KTtcbn1cbi8qKlxuICogR2VuZXJhdGUgYSBrZXkgc3RyaW5nIHRoYXQgaWRlbnRpZmllcyBhIGNvbXBvbmVudCB3aXRoaW4gYSBzZXQuXG4gKlxuICogQHBhcmFtIHsqfSBjb21wb25lbnQgQSBjb21wb25lbnQgdGhhdCBjb3VsZCBjb250YWluIGEgbWFudWFsIGtleS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCB0aGF0IGlzIHVzZWQgaWYgYSBtYW51YWwga2V5IGlzIG5vdCBwcm92aWRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudEtleShjb21wb25lbnQsIGluZGV4KSB7XG4gIC8vIERvIHNvbWUgdHlwZWNoZWNraW5nIGhlcmUgc2luY2Ugd2UgY2FsbCB0aGlzIGJsaW5kbHkuIFdlIHdhbnQgdG8gZW5zdXJlXG4gIC8vIHRoYXQgd2UgZG9uJ3QgYmxvY2sgcG90ZW50aWFsIGZ1dHVyZSBFUyBBUElzLlxuICBpZiAodHlwZW9mIGNvbXBvbmVudCA9PT0gJ29iamVjdCcgJiYgY29tcG9uZW50ICE9PSBudWxsICYmIGNvbXBvbmVudC5rZXkgIT0gbnVsbCkge1xuICAgIC8vIEV4cGxpY2l0IGtleVxuICAgIHJldHVybiBlc2NhcGUoY29tcG9uZW50LmtleSk7XG4gIH0gLy8gSW1wbGljaXQga2V5IGRldGVybWluZWQgYnkgdGhlIGluZGV4IGluIHRoZSBzZXRcblxuXG4gIHJldHVybiBpbmRleC50b1N0cmluZygzNik7XG59XG5cbmZ1bmN0aW9uIGZvckVhY2hTaW5nbGVDaGlsZChib29rS2VlcGluZywgY2hpbGQsIG5hbWUpIHtcbiAgdmFyIGZ1bmMgPSBib29rS2VlcGluZy5mdW5jLFxuICAgICAgY29udGV4dCA9IGJvb2tLZWVwaW5nLmNvbnRleHQ7XG4gIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgYm9va0tlZXBpbmcuY291bnQrKyk7XG59XG4vKipcbiAqIEl0ZXJhdGVzIHRocm91Z2ggY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmZvcmVhY2hcbiAqXG4gKiBUaGUgcHJvdmlkZWQgZm9yRWFjaEZ1bmMoY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZm9yRWFjaEZ1bmNcbiAqIEBwYXJhbSB7Kn0gZm9yRWFjaENvbnRleHQgQ29udGV4dCBmb3IgZm9yRWFjaENvbnRleHQuXG4gKi9cblxuXG5mdW5jdGlvbiBmb3JFYWNoQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuXG4gIHZhciB0cmF2ZXJzZUNvbnRleHQgPSBnZXRQb29sZWRUcmF2ZXJzZUNvbnRleHQobnVsbCwgbnVsbCwgZm9yRWFjaEZ1bmMsIGZvckVhY2hDb250ZXh0KTtcbiAgdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaFNpbmdsZUNoaWxkLCB0cmF2ZXJzZUNvbnRleHQpO1xuICByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIG1hcFNpbmdsZUNoaWxkSW50b0NvbnRleHQoYm9va0tlZXBpbmcsIGNoaWxkLCBjaGlsZEtleSkge1xuICB2YXIgcmVzdWx0ID0gYm9va0tlZXBpbmcucmVzdWx0LFxuICAgICAga2V5UHJlZml4ID0gYm9va0tlZXBpbmcua2V5UHJlZml4LFxuICAgICAgZnVuYyA9IGJvb2tLZWVwaW5nLmZ1bmMsXG4gICAgICBjb250ZXh0ID0gYm9va0tlZXBpbmcuY29udGV4dDtcbiAgdmFyIG1hcHBlZENoaWxkID0gZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBib29rS2VlcGluZy5jb3VudCsrKTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShtYXBwZWRDaGlsZCkpIHtcbiAgICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKG1hcHBlZENoaWxkLCByZXN1bHQsIGNoaWxkS2V5LCBmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuIGM7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAobWFwcGVkQ2hpbGQgIT0gbnVsbCkge1xuICAgIGlmIChpc1ZhbGlkRWxlbWVudChtYXBwZWRDaGlsZCkpIHtcbiAgICAgIG1hcHBlZENoaWxkID0gY2xvbmVBbmRSZXBsYWNlS2V5KG1hcHBlZENoaWxkLCAvLyBLZWVwIGJvdGggdGhlIChtYXBwZWQpIGFuZCBvbGQga2V5cyBpZiB0aGV5IGRpZmZlciwganVzdCBhc1xuICAgICAgLy8gdHJhdmVyc2VBbGxDaGlsZHJlbiB1c2VkIHRvIGRvIGZvciBvYmplY3RzIGFzIGNoaWxkcmVuXG4gICAgICBrZXlQcmVmaXggKyAobWFwcGVkQ2hpbGQua2V5ICYmICghY2hpbGQgfHwgY2hpbGQua2V5ICE9PSBtYXBwZWRDaGlsZC5rZXkpID8gZXNjYXBlVXNlclByb3ZpZGVkS2V5KG1hcHBlZENoaWxkLmtleSkgKyAnLycgOiAnJykgKyBjaGlsZEtleSk7XG4gICAgfVxuXG4gICAgcmVzdWx0LnB1c2gobWFwcGVkQ2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoY2hpbGRyZW4sIGFycmF5LCBwcmVmaXgsIGZ1bmMsIGNvbnRleHQpIHtcbiAgdmFyIGVzY2FwZWRQcmVmaXggPSAnJztcblxuICBpZiAocHJlZml4ICE9IG51bGwpIHtcbiAgICBlc2NhcGVkUHJlZml4ID0gZXNjYXBlVXNlclByb3ZpZGVkS2V5KHByZWZpeCkgKyAnLyc7XG4gIH1cblxuICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KGFycmF5LCBlc2NhcGVkUHJlZml4LCBmdW5jLCBjb250ZXh0KTtcbiAgdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgbWFwU2luZ2xlQ2hpbGRJbnRvQ29udGV4dCwgdHJhdmVyc2VDb250ZXh0KTtcbiAgcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpO1xufVxuLyoqXG4gKiBNYXBzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5tYXBcbiAqXG4gKiBUaGUgcHJvdmlkZWQgbWFwRnVuY3Rpb24oY2hpbGQsIGtleSwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmdW5jIFRoZSBtYXAgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgQ29udGV4dCBmb3IgbWFwRnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtvYmplY3R9IE9iamVjdCBjb250YWluaW5nIHRoZSBvcmRlcmVkIG1hcCBvZiByZXN1bHRzLlxuICovXG5cblxuZnVuY3Rpb24gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gW107XG4gIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoY2hpbGRyZW4sIHJlc3VsdCwgbnVsbCwgZnVuYywgY29udGV4dCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIENvdW50IHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhc1xuICogYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5jb3VudFxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuLlxuICovXG5cblxuZnVuY3Rpb24gY291bnRDaGlsZHJlbihjaGlsZHJlbikge1xuICByZXR1cm4gdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9LCBudWxsKTtcbn1cbi8qKlxuICogRmxhdHRlbiBhIGNoaWxkcmVuIG9iamVjdCAodHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gKSBhbmRcbiAqIHJldHVybiBhbiBhcnJheSB3aXRoIGFwcHJvcHJpYXRlbHkgcmUta2V5ZWQgY2hpbGRyZW4uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVudG9hcnJheVxuICovXG5cblxuZnVuY3Rpb24gdG9BcnJheShjaGlsZHJlbikge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoY2hpbGRyZW4sIHJlc3VsdCwgbnVsbCwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgY2hpbGQgaW4gYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuIGFuZCB2ZXJpZmllcyB0aGF0IHRoZXJlXG4gKiBpcyBvbmx5IG9uZSBjaGlsZCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5vbmx5XG4gKlxuICogVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgYSBzaW5nbGUgY2hpbGQgZ2V0c1xuICogcGFzc2VkIHdpdGhvdXQgYSB3cmFwcGVyLCBidXQgdGhlIHB1cnBvc2Ugb2YgdGhpcyBoZWxwZXIgZnVuY3Rpb24gaXMgdG9cbiAqIGFic3RyYWN0IGF3YXkgdGhlIHBhcnRpY3VsYXIgc3RydWN0dXJlIG9mIGNoaWxkcmVuLlxuICpcbiAqIEBwYXJhbSB7P29iamVjdH0gY2hpbGRyZW4gQ2hpbGQgY29sbGVjdGlvbiBzdHJ1Y3R1cmUuXG4gKiBAcmV0dXJuIHtSZWFjdEVsZW1lbnR9IFRoZSBmaXJzdCBhbmQgb25seSBgUmVhY3RFbGVtZW50YCBjb250YWluZWQgaW4gdGhlXG4gKiBzdHJ1Y3R1cmUuXG4gKi9cblxuXG5mdW5jdGlvbiBvbmx5Q2hpbGQoY2hpbGRyZW4pIHtcbiAgaWYgKCFpc1ZhbGlkRWxlbWVudChjaGlsZHJlbikpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJSZWFjdC5DaGlsZHJlbi5vbmx5IGV4cGVjdGVkIHRvIHJlY2VpdmUgYSBzaW5nbGUgUmVhY3QgZWxlbWVudCBjaGlsZC5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUsIGNhbGN1bGF0ZUNoYW5nZWRCaXRzKSB7XG4gIGlmIChjYWxjdWxhdGVDaGFuZ2VkQml0cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPSBudWxsO1xuICB9IGVsc2Uge1xuICAgIHtcbiAgICAgIGlmIChjYWxjdWxhdGVDaGFuZ2VkQml0cyAhPT0gbnVsbCAmJiB0eXBlb2YgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZXJyb3IoJ2NyZWF0ZUNvbnRleHQ6IEV4cGVjdGVkIHRoZSBvcHRpb25hbCBzZWNvbmQgYXJndW1lbnQgdG8gYmUgYSAnICsgJ2Z1bmN0aW9uLiBJbnN0ZWFkIHJlY2VpdmVkOiAlcycsIGNhbGN1bGF0ZUNoYW5nZWRCaXRzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgY29udGV4dCA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgIF9jYWxjdWxhdGVDaGFuZ2VkQml0czogY2FsY3VsYXRlQ2hhbmdlZEJpdHMsXG4gICAgLy8gQXMgYSB3b3JrYXJvdW5kIHRvIHN1cHBvcnQgbXVsdGlwbGUgY29uY3VycmVudCByZW5kZXJlcnMsIHdlIGNhdGVnb3JpemVcbiAgICAvLyBzb21lIHJlbmRlcmVycyBhcyBwcmltYXJ5IGFuZCBvdGhlcnMgYXMgc2Vjb25kYXJ5LiBXZSBvbmx5IGV4cGVjdFxuICAgIC8vIHRoZXJlIHRvIGJlIHR3byBjb25jdXJyZW50IHJlbmRlcmVycyBhdCBtb3N0OiBSZWFjdCBOYXRpdmUgKHByaW1hcnkpIGFuZFxuICAgIC8vIEZhYnJpYyAoc2Vjb25kYXJ5KTsgUmVhY3QgRE9NIChwcmltYXJ5KSBhbmQgUmVhY3QgQVJUIChzZWNvbmRhcnkpLlxuICAgIC8vIFNlY29uZGFyeSByZW5kZXJlcnMgc3RvcmUgdGhlaXIgY29udGV4dCB2YWx1ZXMgb24gc2VwYXJhdGUgZmllbGRzLlxuICAgIF9jdXJyZW50VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICBfY3VycmVudFZhbHVlMjogZGVmYXVsdFZhbHVlLFxuICAgIC8vIFVzZWQgdG8gdHJhY2sgaG93IG1hbnkgY29uY3VycmVudCByZW5kZXJlcnMgdGhpcyBjb250ZXh0IGN1cnJlbnRseVxuICAgIC8vIHN1cHBvcnRzIHdpdGhpbiBpbiBhIHNpbmdsZSByZW5kZXJlci4gU3VjaCBhcyBwYXJhbGxlbCBzZXJ2ZXIgcmVuZGVyaW5nLlxuICAgIF90aHJlYWRDb3VudDogMCxcbiAgICAvLyBUaGVzZSBhcmUgY2lyY3VsYXJcbiAgICBQcm92aWRlcjogbnVsbCxcbiAgICBDb25zdW1lcjogbnVsbFxuICB9O1xuICBjb250ZXh0LlByb3ZpZGVyID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9QUk9WSURFUl9UWVBFLFxuICAgIF9jb250ZXh0OiBjb250ZXh0XG4gIH07XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSBmYWxzZTtcblxuICB7XG4gICAgLy8gQSBzZXBhcmF0ZSBvYmplY3QsIGJ1dCBwcm94aWVzIGJhY2sgdG8gdGhlIG9yaWdpbmFsIGNvbnRleHQgb2JqZWN0IGZvclxuICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBJdCBoYXMgYSBkaWZmZXJlbnQgJCR0eXBlb2YsIHNvIHdlIGNhbiBwcm9wZXJseVxuICAgIC8vIHdhcm4gZm9yIHRoZSBpbmNvcnJlY3QgdXNhZ2Ugb2YgQ29udGV4dCBhcyBhIENvbnN1bWVyLlxuICAgIHZhciBDb25zdW1lciA9IHtcbiAgICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgICBfY29udGV4dDogY29udGV4dCxcbiAgICAgIF9jYWxjdWxhdGVDaGFuZ2VkQml0czogY29udGV4dC5fY2FsY3VsYXRlQ2hhbmdlZEJpdHNcbiAgICB9OyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBub3Qgc2V0dGluZyBhIHZhbHVlLCB3aGljaCBpcyBpbnRlbnRpb25hbCBoZXJlXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhDb25zdW1lciwge1xuICAgICAgUHJvdmlkZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlcikge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLlByb3ZpZGVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LlByb3ZpZGVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LlByb3ZpZGVyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfUHJvdmlkZXIpIHtcbiAgICAgICAgICBjb250ZXh0LlByb3ZpZGVyID0gX1Byb3ZpZGVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlID0gX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWUyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlMikge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTIgPSBfY3VycmVudFZhbHVlMjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF90aHJlYWRDb3VudDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fdGhyZWFkQ291bnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF90aHJlYWRDb3VudCkge1xuICAgICAgICAgIGNvbnRleHQuX3RocmVhZENvdW50ID0gX3RocmVhZENvdW50O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgQ29uc3VtZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycykge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLkNvbnN1bWVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LkNvbnN1bWVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LkNvbnN1bWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG1pc3NpbmcgcHJvcGVydGllcyBiZWNhdXNlIGl0IGRvZXNuJ3QgdW5kZXJzdGFuZCBkZWZpbmVQcm9wZXJ0eVxuXG4gICAgY29udGV4dC5Db25zdW1lciA9IENvbnN1bWVyO1xuICB9XG5cbiAge1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlciA9IG51bGw7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyMiA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cblxuZnVuY3Rpb24gbGF6eShjdG9yKSB7XG4gIHZhciBsYXp5VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTEFaWV9UWVBFLFxuICAgIF9jdG9yOiBjdG9yLFxuICAgIC8vIFJlYWN0IHVzZXMgdGhlc2UgZmllbGRzIHRvIHN0b3JlIHRoZSByZXN1bHQuXG4gICAgX3N0YXR1czogLTEsXG4gICAgX3Jlc3VsdDogbnVsbFxuICB9O1xuXG4gIHtcbiAgICAvLyBJbiBwcm9kdWN0aW9uLCB0aGlzIHdvdWxkIGp1c3Qgc2V0IGl0IG9uIHRoZSBvYmplY3QuXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcbiAgICB2YXIgcHJvcFR5cGVzO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGxhenlUeXBlLCB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZGVmYXVsdFByb3BzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdEZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgZGVmYXVsdFByb3BzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgZGVmYXVsdFByb3BzID0gbmV3RGVmYXVsdFByb3BzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ2RlZmF1bHRQcm9wcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByb3BUeXBlczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBwcm9wVHlwZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld1Byb3BUeXBlcykge1xuICAgICAgICAgIGVycm9yKCdSZWFjdC5sYXp5KC4uLik6IEl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gYXNzaWduIGBwcm9wVHlwZXNgIHRvICcgKyAnYSBsYXp5IGNvbXBvbmVudCBpbXBvcnQuIEVpdGhlciBzcGVjaWZ5IHRoZW0gd2hlcmUgdGhlIGNvbXBvbmVudCAnICsgJ2lzIGRlZmluZWQsIG9yIGNyZWF0ZSBhIHdyYXBwaW5nIGNvbXBvbmVudCBhcm91bmQgaXQuJyk7XG5cbiAgICAgICAgICBwcm9wVHlwZXMgPSBuZXdQcm9wVHlwZXM7IC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxuXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxhenlUeXBlLCAncHJvcFR5cGVzJywge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbGF6eVR5cGU7XG59XG5cbmZ1bmN0aW9uIGZvcndhcmRSZWYocmVuZGVyKSB7XG4gIHtcbiAgICBpZiAocmVuZGVyICE9IG51bGwgJiYgcmVuZGVyLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpIHtcbiAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCByZWNlaXZlZCBhIGBtZW1vYCAnICsgJ2NvbXBvbmVudC4gSW5zdGVhZCBvZiBmb3J3YXJkUmVmKG1lbW8oLi4uKSksIHVzZSAnICsgJ21lbW8oZm9yd2FyZFJlZiguLi4pKS4nKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiByZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCB3YXMgZ2l2ZW4gJXMuJywgcmVuZGVyID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHJlbmRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChyZW5kZXIubGVuZ3RoICE9PSAwICYmIHJlbmRlci5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBhY2NlcHQgZXhhY3RseSB0d28gcGFyYW1ldGVyczogcHJvcHMgYW5kIHJlZi4gJXMnLCByZW5kZXIubGVuZ3RoID09PSAxID8gJ0RpZCB5b3UgZm9yZ2V0IHRvIHVzZSB0aGUgcmVmIHBhcmFtZXRlcj8nIDogJ0FueSBhZGRpdGlvbmFsIHBhcmFtZXRlciB3aWxsIGJlIHVuZGVmaW5lZC4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVuZGVyICE9IG51bGwpIHtcbiAgICAgIGlmIChyZW5kZXIuZGVmYXVsdFByb3BzICE9IG51bGwgfHwgcmVuZGVyLnByb3BUeXBlcyAhPSBudWxsKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgZG8gbm90IHN1cHBvcnQgcHJvcFR5cGVzIG9yIGRlZmF1bHRQcm9wcy4gJyArICdEaWQgeW91IGFjY2lkZW50YWxseSBwYXNzIGEgUmVhY3QgY29tcG9uZW50PycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUsXG4gICAgcmVuZGVyOiByZW5kZXJcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gbWVtbyh0eXBlLCBjb21wYXJlKSB7XG4gIHtcbiAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSkge1xuICAgICAgZXJyb3IoJ21lbW86IFRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgY29tcG9uZW50LiBJbnN0ZWFkICcgKyAncmVjZWl2ZWQ6ICVzJywgdHlwZSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiB0eXBlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9NRU1PX1RZUEUsXG4gICAgdHlwZTogdHlwZSxcbiAgICBjb21wYXJlOiBjb21wYXJlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29tcGFyZVxuICB9O1xufVxuXG5mdW5jdGlvbiByZXNvbHZlRGlzcGF0Y2hlcigpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7XG5cbiAgaWYgKCEoZGlzcGF0Y2hlciAhPT0gbnVsbCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJJbnZhbGlkIGhvb2sgY2FsbC4gSG9va3MgY2FuIG9ubHkgYmUgY2FsbGVkIGluc2lkZSBvZiB0aGUgYm9keSBvZiBhIGZ1bmN0aW9uIGNvbXBvbmVudC4gVGhpcyBjb3VsZCBoYXBwZW4gZm9yIG9uZSBvZiB0aGUgZm9sbG93aW5nIHJlYXNvbnM6XFxuMS4gWW91IG1pZ2h0IGhhdmUgbWlzbWF0Y2hpbmcgdmVyc2lvbnMgb2YgUmVhY3QgYW5kIHRoZSByZW5kZXJlciAoc3VjaCBhcyBSZWFjdCBET00pXFxuMi4gWW91IG1pZ2h0IGJlIGJyZWFraW5nIHRoZSBSdWxlcyBvZiBIb29rc1xcbjMuIFlvdSBtaWdodCBoYXZlIG1vcmUgdGhhbiBvbmUgY29weSBvZiBSZWFjdCBpbiB0aGUgc2FtZSBhcHBcXG5TZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC1pbnZhbGlkLWhvb2stY2FsbCBmb3IgdGlwcyBhYm91dCBob3cgdG8gZGVidWcgYW5kIGZpeCB0aGlzIHByb2JsZW0uXCIgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlzcGF0Y2hlcjtcbn1cblxuZnVuY3Rpb24gdXNlQ29udGV4dChDb250ZXh0LCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuXG4gIHtcbiAgICBpZiAodW5zdGFibGVfb2JzZXJ2ZWRCaXRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yKCd1c2VDb250ZXh0KCkgc2Vjb25kIGFyZ3VtZW50IGlzIHJlc2VydmVkIGZvciBmdXR1cmUgJyArICd1c2UgaW4gUmVhY3QuIFBhc3NpbmcgaXQgaXMgbm90IHN1cHBvcnRlZC4gJyArICdZb3UgcGFzc2VkOiAlcy4lcycsIHVuc3RhYmxlX29ic2VydmVkQml0cywgdHlwZW9mIHVuc3RhYmxlX29ic2VydmVkQml0cyA9PT0gJ251bWJlcicgJiYgQXJyYXkuaXNBcnJheShhcmd1bWVudHNbMl0pID8gJ1xcblxcbkRpZCB5b3UgY2FsbCBhcnJheS5tYXAodXNlQ29udGV4dCk/ICcgKyAnQ2FsbGluZyBIb29rcyBpbnNpZGUgYSBsb29wIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnTGVhcm4gbW9yZSBhdCBodHRwczovL2ZiLm1lL3J1bGVzLW9mLWhvb2tzJyA6ICcnKTtcbiAgICB9IC8vIFRPRE86IGFkZCBhIG1vcmUgZ2VuZXJpYyB3YXJuaW5nIGZvciBpbnZhbGlkIHZhbHVlcy5cblxuXG4gICAgaWYgKENvbnRleHQuX2NvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHJlYWxDb250ZXh0ID0gQ29udGV4dC5fY29udGV4dDsgLy8gRG9uJ3QgZGVkdXBsaWNhdGUgYmVjYXVzZSB0aGlzIGxlZ2l0aW1hdGVseSBjYXVzZXMgYnVnc1xuICAgICAgLy8gYW5kIG5vYm9keSBzaG91bGQgYmUgdXNpbmcgdGhpcyBpbiBleGlzdGluZyBjb2RlLlxuXG4gICAgICBpZiAocmVhbENvbnRleHQuQ29uc3VtZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LkNvbnN1bWVyKSBpcyBub3Qgc3VwcG9ydGVkLCBtYXkgY2F1c2UgYnVncywgYW5kIHdpbGwgYmUgJyArICdyZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH0gZWxzZSBpZiAocmVhbENvbnRleHQuUHJvdmlkZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LlByb3ZpZGVyKSBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0RpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDb250ZXh0KENvbnRleHQsIHVuc3RhYmxlX29ic2VydmVkQml0cyk7XG59XG5mdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xufVxuZnVuY3Rpb24gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KTtcbn1cbmZ1bmN0aW9uIHVzZVJlZihpbml0aWFsVmFsdWUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWYoaW5pdGlhbFZhbHVlKTtcbn1cbmZ1bmN0aW9uIHVzZUVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlTWVtbyhjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VNZW1vKGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbikge1xuICB7XG4gICAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICAgIHJldHVybiBkaXNwYXRjaGVyLnVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKTtcbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICBpZiAoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhlbGVtZW50UHJvcHMpIHtcbiAgaWYgKGVsZW1lbnRQcm9wcyAhPT0gbnVsbCAmJiBlbGVtZW50UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShlbGVtZW50UHJvcHMuX19zb3VyY2UpO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gIGlmICghaW5mbykge1xuICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5mbztcbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgfVxuXG4gIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gIHtcbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG4gIH1cblxuICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgfVxuICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSk7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBuYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGZyYWdtZW50KTtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICBpZiAoIXZhbGlkVHlwZSkge1xuICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMocHJvcHMpO1xuXG4gICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICB9IGVsc2Uge1xuICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICB9XG5cbiAgICB2YXIgdHlwZVN0cmluZztcblxuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgfVxuXG4gICAge1xuICAgICAgZXJyb3IoJ1JlYWN0LmNyZWF0ZUVsZW1lbnQ6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gIGlmICh2YWxpZFR5cGUpIHtcbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCB0eXBlKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSkge1xuICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxudmFyIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5ID0gZmFsc2U7XG5mdW5jdGlvbiBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24odHlwZSkge1xuICB2YXIgdmFsaWRhdGVkRmFjdG9yeSA9IGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbi5iaW5kKG51bGwsIHR5cGUpO1xuICB2YWxpZGF0ZWRGYWN0b3J5LnR5cGUgPSB0eXBlO1xuXG4gIHtcbiAgICBpZiAoIWRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5KSB7XG4gICAgICBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IHRydWU7XG5cbiAgICAgIHdhcm4oJ1JlYWN0LmNyZWF0ZUZhY3RvcnkoKSBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBDb25zaWRlciB1c2luZyBKU1ggJyArICdvciB1c2UgUmVhY3QuY3JlYXRlRWxlbWVudCgpIGRpcmVjdGx5IGluc3RlYWQuJyk7XG4gICAgfSAvLyBMZWdhY3kgaG9vazogcmVtb3ZlIGl0XG5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWxpZGF0ZWRGYWN0b3J5LCAndHlwZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJ0ZhY3RvcnkudHlwZSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdGhlIGNsYXNzIGRpcmVjdGx5ICcgKyAnYmVmb3JlIHBhc3NpbmcgaXQgdG8gY3JlYXRlRmFjdG9yeS4nKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3R5cGUnLCB7XG4gICAgICAgICAgdmFsdWU6IHR5cGVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbGlkYXRlZEZhY3Rvcnk7XG59XG5mdW5jdGlvbiBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbihlbGVtZW50LCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBjbG9uZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgbmV3RWxlbWVudC50eXBlKTtcbiAgfVxuXG4gIHZhbGlkYXRlUHJvcFR5cGVzKG5ld0VsZW1lbnQpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxue1xuXG4gIHRyeSB7XG4gICAgdmFyIGZyb3plbk9iamVjdCA9IE9iamVjdC5mcmVlemUoe30pO1xuICAgIHZhciB0ZXN0TWFwID0gbmV3IE1hcChbW2Zyb3plbk9iamVjdCwgbnVsbF1dKTtcbiAgICB2YXIgdGVzdFNldCA9IG5ldyBTZXQoW2Zyb3plbk9iamVjdF0pOyAvLyBUaGlzIGlzIG5lY2Vzc2FyeSBmb3IgUm9sbHVwIHRvIG5vdCBjb25zaWRlciB0aGVzZSB1bnVzZWQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JvbGx1cC9yb2xsdXAvaXNzdWVzLzE3NzFcbiAgICAvLyBUT0RPOiB3ZSBjYW4gcmVtb3ZlIHRoZXNlIGlmIFJvbGx1cCBmaXhlcyB0aGUgYnVnLlxuXG4gICAgdGVzdE1hcC5zZXQoMCwgMCk7XG4gICAgdGVzdFNldC5hZGQoMCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgfVxufVxuXG52YXIgY3JlYXRlRWxlbWVudCQxID0gIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbiA7XG52YXIgY2xvbmVFbGVtZW50JDEgPSAgY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNyZWF0ZUZhY3RvcnkgPSAgY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uIDtcbnZhciBDaGlsZHJlbiA9IHtcbiAgbWFwOiBtYXBDaGlsZHJlbixcbiAgZm9yRWFjaDogZm9yRWFjaENoaWxkcmVuLFxuICBjb3VudDogY291bnRDaGlsZHJlbixcbiAgdG9BcnJheTogdG9BcnJheSxcbiAgb25seTogb25seUNoaWxkXG59O1xuXG5leHBvcnRzLkNoaWxkcmVuID0gQ2hpbGRyZW47XG5leHBvcnRzLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbmV4cG9ydHMuRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xuZXhwb3J0cy5Qcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG5leHBvcnRzLlB1cmVDb21wb25lbnQgPSBQdXJlQ29tcG9uZW50O1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xuZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzO1xuZXhwb3J0cy5jbG9uZUVsZW1lbnQgPSBjbG9uZUVsZW1lbnQkMTtcbmV4cG9ydHMuY3JlYXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ7XG5leHBvcnRzLmNyZWF0ZUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUZhY3RvcnkgPSBjcmVhdGVGYWN0b3J5O1xuZXhwb3J0cy5jcmVhdGVSZWYgPSBjcmVhdGVSZWY7XG5leHBvcnRzLmZvcndhcmRSZWYgPSBmb3J3YXJkUmVmO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudCA9IGlzVmFsaWRFbGVtZW50O1xuZXhwb3J0cy5sYXp5ID0gbGF6eTtcbmV4cG9ydHMubWVtbyA9IG1lbW87XG5leHBvcnRzLnVzZUNhbGxiYWNrID0gdXNlQ2FsbGJhY2s7XG5leHBvcnRzLnVzZUNvbnRleHQgPSB1c2VDb250ZXh0O1xuZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlID0gdXNlRGVidWdWYWx1ZTtcbmV4cG9ydHMudXNlRWZmZWN0ID0gdXNlRWZmZWN0O1xuZXhwb3J0cy51c2VJbXBlcmF0aXZlSGFuZGxlID0gdXNlSW1wZXJhdGl2ZUhhbmRsZTtcbmV4cG9ydHMudXNlTGF5b3V0RWZmZWN0ID0gdXNlTGF5b3V0RWZmZWN0O1xuZXhwb3J0cy51c2VNZW1vID0gdXNlTWVtbztcbmV4cG9ydHMudXNlUmVkdWNlciA9IHVzZVJlZHVjZXI7XG5leHBvcnRzLnVzZVJlZiA9IHVzZVJlZjtcbmV4cG9ydHMudXNlU3RhdGUgPSB1c2VTdGF0ZTtcbmV4cG9ydHMudmVyc2lvbiA9IFJlYWN0VmVyc2lvbjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyoqXHJcbiAqIEEgY29sbGVjdGlvbiBvZiBzaGltcyB0aGF0IHByb3ZpZGUgbWluaW1hbCBmdW5jdGlvbmFsaXR5IG9mIHRoZSBFUzYgY29sbGVjdGlvbnMuXHJcbiAqXHJcbiAqIFRoZXNlIGltcGxlbWVudGF0aW9ucyBhcmUgbm90IG1lYW50IHRvIGJlIHVzZWQgb3V0c2lkZSBvZiB0aGUgUmVzaXplT2JzZXJ2ZXJcclxuICogbW9kdWxlcyBhcyB0aGV5IGNvdmVyIG9ubHkgYSBsaW1pdGVkIHJhbmdlIG9mIHVzZSBjYXNlcy5cclxuICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlcXVpcmUtanNkb2MsIHZhbGlkLWpzZG9jICovXHJcbnZhciBNYXBTaGltID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0eXBlb2YgTWFwICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiBNYXA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgaW5kZXggaW4gcHJvdmlkZWQgYXJyYXkgdGhhdCBtYXRjaGVzIHRoZSBzcGVjaWZpZWQga2V5LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7QXJyYXk8QXJyYXk+fSBhcnJcclxuICAgICAqIEBwYXJhbSB7Kn0ga2V5XHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRJbmRleChhcnIsIGtleSkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSAtMTtcclxuICAgICAgICBhcnIuc29tZShmdW5jdGlvbiAoZW50cnksIGluZGV4KSB7XHJcbiAgICAgICAgICAgIGlmIChlbnRyeVswXSA9PT0ga2V5KSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBpbmRleDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiBjbGFzc18xKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9fZW50cmllc19fID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLnByb3RvdHlwZSwgXCJzaXplXCIsIHtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fX2VudHJpZXNfXy5sZW5ndGg7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0ga2V5XHJcbiAgICAgICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBnZXRJbmRleCh0aGlzLl9fZW50cmllc19fLCBrZXkpO1xyXG4gICAgICAgICAgICB2YXIgZW50cnkgPSB0aGlzLl9fZW50cmllc19fW2luZGV4XTtcclxuICAgICAgICAgICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5WzFdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAgICAgKiBAcGFyYW0geyp9IHZhbHVlXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXgodGhpcy5fX2VudHJpZXNfXywga2V5KTtcclxuICAgICAgICAgICAgaWYgKH5pbmRleCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2VudHJpZXNfX1tpbmRleF1bMV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19lbnRyaWVzX18ucHVzaChba2V5LCB2YWx1ZV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcGFyYW0geyp9IGtleVxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzXzEucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgdmFyIGVudHJpZXMgPSB0aGlzLl9fZW50cmllc19fO1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBnZXRJbmRleChlbnRyaWVzLCBrZXkpO1xyXG4gICAgICAgICAgICBpZiAofmluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBlbnRyaWVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0ga2V5XHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gISF+Z2V0SW5kZXgodGhpcy5fX2VudHJpZXNfXywga2V5KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzXzEucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9fZW50cmllc19fLnNwbGljZSgwKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbY3R4PW51bGxdXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgY3R4KSB7XHJcbiAgICAgICAgICAgIGlmIChjdHggPT09IHZvaWQgMCkgeyBjdHggPSBudWxsOyB9XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLl9fZW50cmllc19fOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gX2FbX2ldO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChjdHgsIGVudHJ5WzFdLCBlbnRyeVswXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBjbGFzc18xO1xyXG4gICAgfSgpKTtcclxufSkoKTtcblxuLyoqXHJcbiAqIERldGVjdHMgd2hldGhlciB3aW5kb3cgYW5kIGRvY3VtZW50IG9iamVjdHMgYXJlIGF2YWlsYWJsZSBpbiBjdXJyZW50IGVudmlyb25tZW50LlxyXG4gKi9cclxudmFyIGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ID09PSBkb2N1bWVudDtcblxuLy8gUmV0dXJucyBnbG9iYWwgb2JqZWN0IG9mIGEgY3VycmVudCBlbnZpcm9ubWVudC5cclxudmFyIGdsb2JhbCQxID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWwuTWF0aCA9PT0gTWF0aCkge1xyXG4gICAgICAgIHJldHVybiBnbG9iYWw7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PT0gTWF0aCkge1xyXG4gICAgICAgIHJldHVybiBzZWxmO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09PSBNYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcclxuICAgIH1cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xyXG4gICAgcmV0dXJuIEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XHJcbn0pKCk7XG5cbi8qKlxyXG4gKiBBIHNoaW0gZm9yIHRoZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgd2hpY2ggZmFsbHMgYmFjayB0byB0aGUgc2V0VGltZW91dCBpZlxyXG4gKiBmaXJzdCBvbmUgaXMgbm90IHN1cHBvcnRlZC5cclxuICpcclxuICogQHJldHVybnMge251bWJlcn0gUmVxdWVzdHMnIGlkZW50aWZpZXIuXHJcbiAqL1xyXG52YXIgcmVxdWVzdEFuaW1hdGlvbkZyYW1lJDEgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAvLyBJdCdzIHJlcXVpcmVkIHRvIHVzZSBhIGJvdW5kZWQgZnVuY3Rpb24gYmVjYXVzZSBJRSBzb21ldGltZXMgdGhyb3dzXHJcbiAgICAgICAgLy8gYW4gXCJJbnZhbGlkIGNhbGxpbmcgb2JqZWN0XCIgZXJyb3IgaWYgckFGIGlzIGludm9rZWQgd2l0aG91dCB0aGUgZ2xvYmFsXHJcbiAgICAgICAgLy8gb2JqZWN0IG9uIHRoZSBsZWZ0IGhhbmQgc2lkZS5cclxuICAgICAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmJpbmQoZ2xvYmFsJDEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjYWxsYmFjaykgeyByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBjYWxsYmFjayhEYXRlLm5vdygpKTsgfSwgMTAwMCAvIDYwKTsgfTtcclxufSkoKTtcblxuLy8gRGVmaW5lcyBtaW5pbXVtIHRpbWVvdXQgYmVmb3JlIGFkZGluZyBhIHRyYWlsaW5nIGNhbGwuXHJcbnZhciB0cmFpbGluZ1RpbWVvdXQgPSAyO1xyXG4vKipcclxuICogQ3JlYXRlcyBhIHdyYXBwZXIgZnVuY3Rpb24gd2hpY2ggZW5zdXJlcyB0aGF0IHByb3ZpZGVkIGNhbGxiYWNrIHdpbGwgYmVcclxuICogaW52b2tlZCBvbmx5IG9uY2UgZHVyaW5nIHRoZSBzcGVjaWZpZWQgZGVsYXkgcGVyaW9kLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIEZ1bmN0aW9uIHRvIGJlIGludm9rZWQgYWZ0ZXIgdGhlIGRlbGF5IHBlcmlvZC5cclxuICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5IC0gRGVsYXkgYWZ0ZXIgd2hpY2ggdG8gaW52b2tlIGNhbGxiYWNrLlxyXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XHJcbiAqL1xyXG5mdW5jdGlvbiB0aHJvdHRsZSAoY2FsbGJhY2ssIGRlbGF5KSB7XHJcbiAgICB2YXIgbGVhZGluZ0NhbGwgPSBmYWxzZSwgdHJhaWxpbmdDYWxsID0gZmFsc2UsIGxhc3RDYWxsVGltZSA9IDA7XHJcbiAgICAvKipcclxuICAgICAqIEludm9rZXMgdGhlIG9yaWdpbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIGFuZCBzY2hlZHVsZXMgbmV3IGludm9jYXRpb24gaWZcclxuICAgICAqIHRoZSBcInByb3h5XCIgd2FzIGNhbGxlZCBkdXJpbmcgY3VycmVudCByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiByZXNvbHZlUGVuZGluZygpIHtcclxuICAgICAgICBpZiAobGVhZGluZ0NhbGwpIHtcclxuICAgICAgICAgICAgbGVhZGluZ0NhbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRyYWlsaW5nQ2FsbCkge1xyXG4gICAgICAgICAgICBwcm94eSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGJhY2sgaW52b2tlZCBhZnRlciB0aGUgc3BlY2lmaWVkIGRlbGF5LiBJdCB3aWxsIGZ1cnRoZXIgcG9zdHBvbmVcclxuICAgICAqIGludm9jYXRpb24gb2YgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIGRlbGVnYXRpbmcgaXQgdG8gdGhlXHJcbiAgICAgKiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHRpbWVvdXRDYWxsYmFjaygpIHtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUkMShyZXNvbHZlUGVuZGluZyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNjaGVkdWxlcyBpbnZvY2F0aW9uIG9mIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gcHJveHkoKSB7XHJcbiAgICAgICAgdmFyIHRpbWVTdGFtcCA9IERhdGUubm93KCk7XHJcbiAgICAgICAgaWYgKGxlYWRpbmdDYWxsKSB7XHJcbiAgICAgICAgICAgIC8vIFJlamVjdCBpbW1lZGlhdGVseSBmb2xsb3dpbmcgY2FsbHMuXHJcbiAgICAgICAgICAgIGlmICh0aW1lU3RhbXAgLSBsYXN0Q2FsbFRpbWUgPCB0cmFpbGluZ1RpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBTY2hlZHVsZSBuZXcgY2FsbCB0byBiZSBpbiBpbnZva2VkIHdoZW4gdGhlIHBlbmRpbmcgb25lIGlzIHJlc29sdmVkLlxyXG4gICAgICAgICAgICAvLyBUaGlzIGlzIGltcG9ydGFudCBmb3IgXCJ0cmFuc2l0aW9uc1wiIHdoaWNoIG5ldmVyIGFjdHVhbGx5IHN0YXJ0XHJcbiAgICAgICAgICAgIC8vIGltbWVkaWF0ZWx5IHNvIHRoZXJlIGlzIGEgY2hhbmNlIHRoYXQgd2UgbWlnaHQgbWlzcyBvbmUgaWYgY2hhbmdlXHJcbiAgICAgICAgICAgIC8vIGhhcHBlbnMgYW1pZHMgdGhlIHBlbmRpbmcgaW52b2NhdGlvbi5cclxuICAgICAgICAgICAgdHJhaWxpbmdDYWxsID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxlYWRpbmdDYWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgdHJhaWxpbmdDYWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQodGltZW91dENhbGxiYWNrLCBkZWxheSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxhc3RDYWxsVGltZSA9IHRpbWVTdGFtcDtcclxuICAgIH1cclxuICAgIHJldHVybiBwcm94eTtcclxufVxuXG4vLyBNaW5pbXVtIGRlbGF5IGJlZm9yZSBpbnZva2luZyB0aGUgdXBkYXRlIG9mIG9ic2VydmVycy5cclxudmFyIFJFRlJFU0hfREVMQVkgPSAyMDtcclxuLy8gQSBsaXN0IG9mIHN1YnN0cmluZ3Mgb2YgQ1NTIHByb3BlcnRpZXMgdXNlZCB0byBmaW5kIHRyYW5zaXRpb24gZXZlbnRzIHRoYXRcclxuLy8gbWlnaHQgYWZmZWN0IGRpbWVuc2lvbnMgb2Ygb2JzZXJ2ZWQgZWxlbWVudHMuXHJcbnZhciB0cmFuc2l0aW9uS2V5cyA9IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0JywgJ3dpZHRoJywgJ2hlaWdodCcsICdzaXplJywgJ3dlaWdodCddO1xyXG4vLyBDaGVjayBpZiBNdXRhdGlvbk9ic2VydmVyIGlzIGF2YWlsYWJsZS5cclxudmFyIG11dGF0aW9uT2JzZXJ2ZXJTdXBwb3J0ZWQgPSB0eXBlb2YgTXV0YXRpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XHJcbi8qKlxyXG4gKiBTaW5nbGV0b24gY29udHJvbGxlciBjbGFzcyB3aGljaCBoYW5kbGVzIHVwZGF0ZXMgb2YgUmVzaXplT2JzZXJ2ZXIgaW5zdGFuY2VzLlxyXG4gKi9cclxudmFyIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyKCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEluZGljYXRlcyB3aGV0aGVyIERPTSBsaXN0ZW5lcnMgaGF2ZSBiZWVuIGFkZGVkLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGUge2Jvb2xlYW59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5jb25uZWN0ZWRfID0gZmFsc2U7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGVsbHMgdGhhdCBjb250cm9sbGVyIGhhcyBzdWJzY3JpYmVkIGZvciBNdXRhdGlvbiBFdmVudHMuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7Ym9vbGVhbn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm11dGF0aW9uRXZlbnRzQWRkZWRfID0gZmFsc2U7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogS2VlcHMgcmVmZXJlbmNlIHRvIHRoZSBpbnN0YW5jZSBvZiBNdXRhdGlvbk9ic2VydmVyLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGUge011dGF0aW9uT2JzZXJ2ZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8gPSBudWxsO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEEgbGlzdCBvZiBjb25uZWN0ZWQgb2JzZXJ2ZXJzLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGUge0FycmF5PFJlc2l6ZU9ic2VydmVyU1BJPn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm9ic2VydmVyc18gPSBbXTtcclxuICAgICAgICB0aGlzLm9uVHJhbnNpdGlvbkVuZF8gPSB0aGlzLm9uVHJhbnNpdGlvbkVuZF8uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2ggPSB0aHJvdHRsZSh0aGlzLnJlZnJlc2guYmluZCh0aGlzKSwgUkVGUkVTSF9ERUxBWSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgb2JzZXJ2ZXIgdG8gb2JzZXJ2ZXJzIGxpc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtSZXNpemVPYnNlcnZlclNQSX0gb2JzZXJ2ZXIgLSBPYnNlcnZlciB0byBiZSBhZGRlZC5cclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLmFkZE9ic2VydmVyID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XHJcbiAgICAgICAgaWYgKCF+dGhpcy5vYnNlcnZlcnNfLmluZGV4T2Yob2JzZXJ2ZXIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzXy5wdXNoKG9ic2VydmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWRkIGxpc3RlbmVycyBpZiB0aGV5IGhhdmVuJ3QgYmVlbiBhZGRlZCB5ZXQuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbm5lY3RlZF8pIHtcclxuICAgICAgICAgICAgdGhpcy5jb25uZWN0XygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgb2JzZXJ2ZXIgZnJvbSBvYnNlcnZlcnMgbGlzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1Jlc2l6ZU9ic2VydmVyU1BJfSBvYnNlcnZlciAtIE9ic2VydmVyIHRvIGJlIHJlbW92ZWQuXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5yZW1vdmVPYnNlcnZlciA9IGZ1bmN0aW9uIChvYnNlcnZlcikge1xyXG4gICAgICAgIHZhciBvYnNlcnZlcnMgPSB0aGlzLm9ic2VydmVyc187XHJcbiAgICAgICAgdmFyIGluZGV4ID0gb2JzZXJ2ZXJzLmluZGV4T2Yob2JzZXJ2ZXIpO1xyXG4gICAgICAgIC8vIFJlbW92ZSBvYnNlcnZlciBpZiBpdCdzIHByZXNlbnQgaW4gcmVnaXN0cnkuXHJcbiAgICAgICAgaWYgKH5pbmRleCkge1xyXG4gICAgICAgICAgICBvYnNlcnZlcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUmVtb3ZlIGxpc3RlbmVycyBpZiBjb250cm9sbGVyIGhhcyBubyBjb25uZWN0ZWQgb2JzZXJ2ZXJzLlxyXG4gICAgICAgIGlmICghb2JzZXJ2ZXJzLmxlbmd0aCAmJiB0aGlzLmNvbm5lY3RlZF8pIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNjb25uZWN0XygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEludm9rZXMgdGhlIHVwZGF0ZSBvZiBvYnNlcnZlcnMuIEl0IHdpbGwgY29udGludWUgcnVubmluZyB1cGRhdGVzIGluc29mYXJcclxuICAgICAqIGl0IGRldGVjdHMgY2hhbmdlcy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjaGFuZ2VzRGV0ZWN0ZWQgPSB0aGlzLnVwZGF0ZU9ic2VydmVyc18oKTtcclxuICAgICAgICAvLyBDb250aW51ZSBydW5uaW5nIHVwZGF0ZXMgaWYgY2hhbmdlcyBoYXZlIGJlZW4gZGV0ZWN0ZWQgYXMgdGhlcmUgbWlnaHRcclxuICAgICAgICAvLyBiZSBmdXR1cmUgb25lcyBjYXVzZWQgYnkgQ1NTIHRyYW5zaXRpb25zLlxyXG4gICAgICAgIGlmIChjaGFuZ2VzRGV0ZWN0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyBldmVyeSBvYnNlcnZlciBmcm9tIG9ic2VydmVycyBsaXN0IGFuZCBub3RpZmllcyB0aGVtIG9mIHF1ZXVlZFxyXG4gICAgICogZW50cmllcy5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgXCJ0cnVlXCIgaWYgYW55IG9ic2VydmVyIGhhcyBkZXRlY3RlZCBjaGFuZ2VzIGluXHJcbiAgICAgKiAgICAgIGRpbWVuc2lvbnMgb2YgaXQncyBlbGVtZW50cy5cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS51cGRhdGVPYnNlcnZlcnNfID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIENvbGxlY3Qgb2JzZXJ2ZXJzIHRoYXQgaGF2ZSBhY3RpdmUgb2JzZXJ2YXRpb25zLlxyXG4gICAgICAgIHZhciBhY3RpdmVPYnNlcnZlcnMgPSB0aGlzLm9ic2VydmVyc18uZmlsdGVyKGZ1bmN0aW9uIChvYnNlcnZlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gb2JzZXJ2ZXIuZ2F0aGVyQWN0aXZlKCksIG9ic2VydmVyLmhhc0FjdGl2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIERlbGl2ZXIgbm90aWZpY2F0aW9ucyBpbiBhIHNlcGFyYXRlIGN5Y2xlIGluIG9yZGVyIHRvIGF2b2lkIGFueVxyXG4gICAgICAgIC8vIGNvbGxpc2lvbnMgYmV0d2VlbiBvYnNlcnZlcnMsIGUuZy4gd2hlbiBtdWx0aXBsZSBpbnN0YW5jZXMgb2ZcclxuICAgICAgICAvLyBSZXNpemVPYnNlcnZlciBhcmUgdHJhY2tpbmcgdGhlIHNhbWUgZWxlbWVudCBhbmQgdGhlIGNhbGxiYWNrIG9mIG9uZVxyXG4gICAgICAgIC8vIG9mIHRoZW0gY2hhbmdlcyBjb250ZW50IGRpbWVuc2lvbnMgb2YgdGhlIG9ic2VydmVkIHRhcmdldC4gU29tZXRpbWVzXHJcbiAgICAgICAgLy8gdGhpcyBtYXkgcmVzdWx0IGluIG5vdGlmaWNhdGlvbnMgYmVpbmcgYmxvY2tlZCBmb3IgdGhlIHJlc3Qgb2Ygb2JzZXJ2ZXJzLlxyXG4gICAgICAgIGFjdGl2ZU9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIChvYnNlcnZlcikgeyByZXR1cm4gb2JzZXJ2ZXIuYnJvYWRjYXN0QWN0aXZlKCk7IH0pO1xyXG4gICAgICAgIHJldHVybiBhY3RpdmVPYnNlcnZlcnMubGVuZ3RoID4gMDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIERPTSBsaXN0ZW5lcnMuXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLmNvbm5lY3RfID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgcnVubmluZyBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50IG9yIGlmIGxpc3RlbmVyc1xyXG4gICAgICAgIC8vIGhhdmUgYmVlbiBhbHJlYWR5IGFkZGVkLlxyXG4gICAgICAgIGlmICghaXNCcm93c2VyIHx8IHRoaXMuY29ubmVjdGVkXykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFN1YnNjcmlwdGlvbiB0byB0aGUgXCJUcmFuc2l0aW9uZW5kXCIgZXZlbnQgaXMgdXNlZCBhcyBhIHdvcmthcm91bmQgZm9yXHJcbiAgICAgICAgLy8gZGVsYXllZCB0cmFuc2l0aW9ucy4gVGhpcyB3YXkgaXQncyBwb3NzaWJsZSB0byBjYXB0dXJlIGF0IGxlYXN0IHRoZVxyXG4gICAgICAgIC8vIGZpbmFsIHN0YXRlIG9mIGFuIGVsZW1lbnQuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMub25UcmFuc2l0aW9uRW5kXyk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVmcmVzaCk7XHJcbiAgICAgICAgaWYgKG11dGF0aW9uT2JzZXJ2ZXJTdXBwb3J0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8gPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLnJlZnJlc2gpO1xyXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uc09ic2VydmVyXy5vYnNlcnZlKGRvY3VtZW50LCB7XHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01TdWJ0cmVlTW9kaWZpZWQnLCB0aGlzLnJlZnJlc2gpO1xyXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uRXZlbnRzQWRkZWRfID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25uZWN0ZWRfID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgRE9NIGxpc3RlbmVycy5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUuZGlzY29ubmVjdF8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gRG8gbm90aGluZyBpZiBydW5uaW5nIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQgb3IgaWYgbGlzdGVuZXJzXHJcbiAgICAgICAgLy8gaGF2ZSBiZWVuIGFscmVhZHkgcmVtb3ZlZC5cclxuICAgICAgICBpZiAoIWlzQnJvd3NlciB8fCAhdGhpcy5jb25uZWN0ZWRfKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMub25UcmFuc2l0aW9uRW5kXyk7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVmcmVzaCk7XHJcbiAgICAgICAgaWYgKHRoaXMubXV0YXRpb25zT2JzZXJ2ZXJfKSB7XHJcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25zT2JzZXJ2ZXJfLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubXV0YXRpb25FdmVudHNBZGRlZF8pIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NU3VidHJlZU1vZGlmaWVkJywgdGhpcy5yZWZyZXNoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8gPSBudWxsO1xyXG4gICAgICAgIHRoaXMubXV0YXRpb25FdmVudHNBZGRlZF8gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RlZF8gPSBmYWxzZTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFwiVHJhbnNpdGlvbmVuZFwiIGV2ZW50IGhhbmRsZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBwYXJhbSB7VHJhbnNpdGlvbkV2ZW50fSBldmVudFxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUub25UcmFuc2l0aW9uRW5kXyA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIHZhciBfYiA9IF9hLnByb3BlcnR5TmFtZSwgcHJvcGVydHlOYW1lID0gX2IgPT09IHZvaWQgMCA/ICcnIDogX2I7XHJcbiAgICAgICAgLy8gRGV0ZWN0IHdoZXRoZXIgdHJhbnNpdGlvbiBtYXkgYWZmZWN0IGRpbWVuc2lvbnMgb2YgYW4gZWxlbWVudC5cclxuICAgICAgICB2YXIgaXNSZWZsb3dQcm9wZXJ0eSA9IHRyYW5zaXRpb25LZXlzLnNvbWUoZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gISF+cHJvcGVydHlOYW1lLmluZGV4T2Yoa2V5KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoaXNSZWZsb3dQcm9wZXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGluc3RhbmNlIG9mIHRoZSBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge1Jlc2l6ZU9ic2VydmVyQ29udHJvbGxlcn1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZV8pIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZV8gPSBuZXcgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlXztcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEhvbGRzIHJlZmVyZW5jZSB0byB0aGUgY29udHJvbGxlcidzIGluc3RhbmNlLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlIHtSZXNpemVPYnNlcnZlckNvbnRyb2xsZXJ9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5pbnN0YW5jZV8gPSBudWxsO1xyXG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlcjtcclxufSgpKTtcblxuLyoqXHJcbiAqIERlZmluZXMgbm9uLXdyaXRhYmxlL2VudW1lcmFibGUgcHJvcGVydGllcyBvZiB0aGUgcHJvdmlkZWQgdGFyZ2V0IG9iamVjdC5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHRhcmdldCAtIE9iamVjdCBmb3Igd2hpY2ggdG8gZGVmaW5lIHByb3BlcnRpZXMuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyAtIFByb3BlcnRpZXMgdG8gYmUgZGVmaW5lZC5cclxuICogQHJldHVybnMge09iamVjdH0gVGFyZ2V0IG9iamVjdC5cclxuICovXHJcbnZhciBkZWZpbmVDb25maWd1cmFibGUgPSAoZnVuY3Rpb24gKHRhcmdldCwgcHJvcHMpIHtcclxuICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3Qua2V5cyhwcm9wcyk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9hW19pXTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHtcclxuICAgICAgICAgICAgdmFsdWU6IHByb3BzW2tleV0sXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRhcmdldDtcclxufSk7XG5cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBnbG9iYWwgb2JqZWN0IGFzc29jaWF0ZWQgd2l0aCBwcm92aWRlZCBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XHJcbiAqIEByZXR1cm5zIHtPYmplY3R9XHJcbiAqL1xyXG52YXIgZ2V0V2luZG93T2YgPSAoZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgLy8gQXNzdW1lIHRoYXQgdGhlIGVsZW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgTm9kZSwgd2hpY2ggbWVhbnMgdGhhdCBpdFxyXG4gICAgLy8gaGFzIHRoZSBcIm93bmVyRG9jdW1lbnRcIiBwcm9wZXJ0eSBmcm9tIHdoaWNoIHdlIGNhbiByZXRyaWV2ZSBhXHJcbiAgICAvLyBjb3JyZXNwb25kaW5nIGdsb2JhbCBvYmplY3QuXHJcbiAgICB2YXIgb3duZXJHbG9iYWwgPSB0YXJnZXQgJiYgdGFyZ2V0Lm93bmVyRG9jdW1lbnQgJiYgdGFyZ2V0Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XHJcbiAgICAvLyBSZXR1cm4gdGhlIGxvY2FsIGdsb2JhbCBvYmplY3QgaWYgaXQncyBub3QgcG9zc2libGUgZXh0cmFjdCBvbmUgZnJvbVxyXG4gICAgLy8gcHJvdmlkZWQgZWxlbWVudC5cclxuICAgIHJldHVybiBvd25lckdsb2JhbCB8fCBnbG9iYWwkMTtcclxufSk7XG5cbi8vIFBsYWNlaG9sZGVyIG9mIGFuIGVtcHR5IGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG52YXIgZW1wdHlSZWN0ID0gY3JlYXRlUmVjdEluaXQoMCwgMCwgMCwgMCk7XHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBwcm92aWRlZCBzdHJpbmcgdG8gYSBudW1iZXIuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gdmFsdWVcclxuICogQHJldHVybnMge251bWJlcn1cclxuICovXHJcbmZ1bmN0aW9uIHRvRmxvYXQodmFsdWUpIHtcclxuICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKSB8fCAwO1xyXG59XHJcbi8qKlxyXG4gKiBFeHRyYWN0cyBib3JkZXJzIHNpemUgZnJvbSBwcm92aWRlZCBzdHlsZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Q1NTU3R5bGVEZWNsYXJhdGlvbn0gc3R5bGVzXHJcbiAqIEBwYXJhbSB7Li4uc3RyaW5nfSBwb3NpdGlvbnMgLSBCb3JkZXJzIHBvc2l0aW9ucyAodG9wLCByaWdodCwgLi4uKVxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzKSB7XHJcbiAgICB2YXIgcG9zaXRpb25zID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHBvc2l0aW9uc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIHJldHVybiBwb3NpdGlvbnMucmVkdWNlKGZ1bmN0aW9uIChzaXplLCBwb3NpdGlvbikge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHN0eWxlc1snYm9yZGVyLScgKyBwb3NpdGlvbiArICctd2lkdGgnXTtcclxuICAgICAgICByZXR1cm4gc2l6ZSArIHRvRmxvYXQodmFsdWUpO1xyXG4gICAgfSwgMCk7XHJcbn1cclxuLyoqXHJcbiAqIEV4dHJhY3RzIHBhZGRpbmdzIHNpemVzIGZyb20gcHJvdmlkZWQgc3R5bGVzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0NTU1N0eWxlRGVjbGFyYXRpb259IHN0eWxlc1xyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBQYWRkaW5ncyBib3guXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRQYWRkaW5ncyhzdHlsZXMpIHtcclxuICAgIHZhciBwb3NpdGlvbnMgPSBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddO1xyXG4gICAgdmFyIHBhZGRpbmdzID0ge307XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIHBvc2l0aW9uc18xID0gcG9zaXRpb25zOyBfaSA8IHBvc2l0aW9uc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBwb3NpdGlvbiA9IHBvc2l0aW9uc18xW19pXTtcclxuICAgICAgICB2YXIgdmFsdWUgPSBzdHlsZXNbJ3BhZGRpbmctJyArIHBvc2l0aW9uXTtcclxuICAgICAgICBwYWRkaW5nc1twb3NpdGlvbl0gPSB0b0Zsb2F0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwYWRkaW5ncztcclxufVxyXG4vKipcclxuICogQ2FsY3VsYXRlcyBjb250ZW50IHJlY3RhbmdsZSBvZiBwcm92aWRlZCBTVkcgZWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtTVkdHcmFwaGljc0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgY29udGVudCByZWN0YW5nbGUgb2Ygd2hpY2ggbmVlZHNcclxuICogICAgICB0byBiZSBjYWxjdWxhdGVkLlxyXG4gKiBAcmV0dXJucyB7RE9NUmVjdEluaXR9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRTVkdDb250ZW50UmVjdCh0YXJnZXQpIHtcclxuICAgIHZhciBiYm94ID0gdGFyZ2V0LmdldEJCb3goKTtcclxuICAgIHJldHVybiBjcmVhdGVSZWN0SW5pdCgwLCAwLCBiYm94LndpZHRoLCBiYm94LmhlaWdodCk7XHJcbn1cclxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgY29udGVudCByZWN0YW5nbGUgb2YgcHJvdmlkZWQgSFRNTEVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgZm9yIHdoaWNoIHRvIGNhbGN1bGF0ZSB0aGUgY29udGVudCByZWN0YW5nbGUuXHJcbiAqIEByZXR1cm5zIHtET01SZWN0SW5pdH1cclxuICovXHJcbmZ1bmN0aW9uIGdldEhUTUxFbGVtZW50Q29udGVudFJlY3QodGFyZ2V0KSB7XHJcbiAgICAvLyBDbGllbnQgd2lkdGggJiBoZWlnaHQgcHJvcGVydGllcyBjYW4ndCBiZVxyXG4gICAgLy8gdXNlZCBleGNsdXNpdmVseSBhcyB0aGV5IHByb3ZpZGUgcm91bmRlZCB2YWx1ZXMuXHJcbiAgICB2YXIgY2xpZW50V2lkdGggPSB0YXJnZXQuY2xpZW50V2lkdGgsIGNsaWVudEhlaWdodCA9IHRhcmdldC5jbGllbnRIZWlnaHQ7XHJcbiAgICAvLyBCeSB0aGlzIGNvbmRpdGlvbiB3ZSBjYW4gY2F0Y2ggYWxsIG5vbi1yZXBsYWNlZCBpbmxpbmUsIGhpZGRlbiBhbmRcclxuICAgIC8vIGRldGFjaGVkIGVsZW1lbnRzLiBUaG91Z2ggZWxlbWVudHMgd2l0aCB3aWR0aCAmIGhlaWdodCBwcm9wZXJ0aWVzIGxlc3NcclxuICAgIC8vIHRoYW4gMC41IHdpbGwgYmUgZGlzY2FyZGVkIGFzIHdlbGwuXHJcbiAgICAvL1xyXG4gICAgLy8gV2l0aG91dCBpdCB3ZSB3b3VsZCBuZWVkIHRvIGltcGxlbWVudCBzZXBhcmF0ZSBtZXRob2RzIGZvciBlYWNoIG9mXHJcbiAgICAvLyB0aG9zZSBjYXNlcyBhbmQgaXQncyBub3QgcG9zc2libGUgdG8gcGVyZm9ybSBhIHByZWNpc2UgYW5kIHBlcmZvcm1hbmNlXHJcbiAgICAvLyBlZmZlY3RpdmUgdGVzdCBmb3IgaGlkZGVuIGVsZW1lbnRzLiBFLmcuIGV2ZW4galF1ZXJ5J3MgJzp2aXNpYmxlJyBmaWx0ZXJcclxuICAgIC8vIGdpdmVzIHdyb25nIHJlc3VsdHMgZm9yIGVsZW1lbnRzIHdpdGggd2lkdGggJiBoZWlnaHQgbGVzcyB0aGFuIDAuNS5cclxuICAgIGlmICghY2xpZW50V2lkdGggJiYgIWNsaWVudEhlaWdodCkge1xyXG4gICAgICAgIHJldHVybiBlbXB0eVJlY3Q7XHJcbiAgICB9XHJcbiAgICB2YXIgc3R5bGVzID0gZ2V0V2luZG93T2YodGFyZ2V0KS5nZXRDb21wdXRlZFN0eWxlKHRhcmdldCk7XHJcbiAgICB2YXIgcGFkZGluZ3MgPSBnZXRQYWRkaW5ncyhzdHlsZXMpO1xyXG4gICAgdmFyIGhvcml6UGFkID0gcGFkZGluZ3MubGVmdCArIHBhZGRpbmdzLnJpZ2h0O1xyXG4gICAgdmFyIHZlcnRQYWQgPSBwYWRkaW5ncy50b3AgKyBwYWRkaW5ncy5ib3R0b207XHJcbiAgICAvLyBDb21wdXRlZCBzdHlsZXMgb2Ygd2lkdGggJiBoZWlnaHQgYXJlIGJlaW5nIHVzZWQgYmVjYXVzZSB0aGV5IGFyZSB0aGVcclxuICAgIC8vIG9ubHkgZGltZW5zaW9ucyBhdmFpbGFibGUgdG8gSlMgdGhhdCBjb250YWluIG5vbi1yb3VuZGVkIHZhbHVlcy4gSXQgY291bGRcclxuICAgIC8vIGJlIHBvc3NpYmxlIHRvIHV0aWxpemUgdGhlIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBpZiBvbmx5IGl0J3MgZGF0YSB3YXNuJ3RcclxuICAgIC8vIGFmZmVjdGVkIGJ5IENTUyB0cmFuc2Zvcm1hdGlvbnMgbGV0IGFsb25lIHBhZGRpbmdzLCBib3JkZXJzIGFuZCBzY3JvbGwgYmFycy5cclxuICAgIHZhciB3aWR0aCA9IHRvRmxvYXQoc3R5bGVzLndpZHRoKSwgaGVpZ2h0ID0gdG9GbG9hdChzdHlsZXMuaGVpZ2h0KTtcclxuICAgIC8vIFdpZHRoICYgaGVpZ2h0IGluY2x1ZGUgcGFkZGluZ3MgYW5kIGJvcmRlcnMgd2hlbiB0aGUgJ2JvcmRlci1ib3gnIGJveFxyXG4gICAgLy8gbW9kZWwgaXMgYXBwbGllZCAoZXhjZXB0IGZvciBJRSkuXHJcbiAgICBpZiAoc3R5bGVzLmJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnKSB7XHJcbiAgICAgICAgLy8gRm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIHJlcXVpcmVkIHRvIGhhbmRsZSBJbnRlcm5ldCBFeHBsb3JlciB3aGljaFxyXG4gICAgICAgIC8vIGRvZXNuJ3QgaW5jbHVkZSBwYWRkaW5ncyBhbmQgYm9yZGVycyB0byBjb21wdXRlZCBDU1MgZGltZW5zaW9ucy5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFdlIGNhbiBzYXkgdGhhdCBpZiBDU1MgZGltZW5zaW9ucyArIHBhZGRpbmdzIGFyZSBlcXVhbCB0byB0aGUgXCJjbGllbnRcIlxyXG4gICAgICAgIC8vIHByb3BlcnRpZXMgdGhlbiBpdCdzIGVpdGhlciBJRSwgYW5kIHRodXMgd2UgZG9uJ3QgbmVlZCB0byBzdWJ0cmFjdFxyXG4gICAgICAgIC8vIGFueXRoaW5nLCBvciBhbiBlbGVtZW50IG1lcmVseSBkb2Vzbid0IGhhdmUgcGFkZGluZ3MvYm9yZGVycyBzdHlsZXMuXHJcbiAgICAgICAgaWYgKE1hdGgucm91bmQod2lkdGggKyBob3JpelBhZCkgIT09IGNsaWVudFdpZHRoKSB7XHJcbiAgICAgICAgICAgIHdpZHRoIC09IGdldEJvcmRlcnNTaXplKHN0eWxlcywgJ2xlZnQnLCAncmlnaHQnKSArIGhvcml6UGFkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoTWF0aC5yb3VuZChoZWlnaHQgKyB2ZXJ0UGFkKSAhPT0gY2xpZW50SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIGhlaWdodCAtPSBnZXRCb3JkZXJzU2l6ZShzdHlsZXMsICd0b3AnLCAnYm90dG9tJykgKyB2ZXJ0UGFkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIEZvbGxvd2luZyBzdGVwcyBjYW4ndCBiZSBhcHBsaWVkIHRvIHRoZSBkb2N1bWVudCdzIHJvb3QgZWxlbWVudCBhcyBpdHNcclxuICAgIC8vIGNsaWVudFtXaWR0aC9IZWlnaHRdIHByb3BlcnRpZXMgcmVwcmVzZW50IHZpZXdwb3J0IGFyZWEgb2YgdGhlIHdpbmRvdy5cclxuICAgIC8vIEJlc2lkZXMsIGl0J3MgYXMgd2VsbCBub3QgbmVjZXNzYXJ5IGFzIHRoZSA8aHRtbD4gaXRzZWxmIG5laXRoZXIgaGFzXHJcbiAgICAvLyByZW5kZXJlZCBzY3JvbGwgYmFycyBub3IgaXQgY2FuIGJlIGNsaXBwZWQuXHJcbiAgICBpZiAoIWlzRG9jdW1lbnRFbGVtZW50KHRhcmdldCkpIHtcclxuICAgICAgICAvLyBJbiBzb21lIGJyb3dzZXJzIChvbmx5IGluIEZpcmVmb3gsIGFjdHVhbGx5KSBDU1Mgd2lkdGggJiBoZWlnaHRcclxuICAgICAgICAvLyBpbmNsdWRlIHNjcm9sbCBiYXJzIHNpemUgd2hpY2ggY2FuIGJlIHJlbW92ZWQgYXQgdGhpcyBzdGVwIGFzIHNjcm9sbFxyXG4gICAgICAgIC8vIGJhcnMgYXJlIHRoZSBvbmx5IGRpZmZlcmVuY2UgYmV0d2VlbiByb3VuZGVkIGRpbWVuc2lvbnMgKyBwYWRkaW5nc1xyXG4gICAgICAgIC8vIGFuZCBcImNsaWVudFwiIHByb3BlcnRpZXMsIHRob3VnaCB0aGF0IGlzIG5vdCBhbHdheXMgdHJ1ZSBpbiBDaHJvbWUuXHJcbiAgICAgICAgdmFyIHZlcnRTY3JvbGxiYXIgPSBNYXRoLnJvdW5kKHdpZHRoICsgaG9yaXpQYWQpIC0gY2xpZW50V2lkdGg7XHJcbiAgICAgICAgdmFyIGhvcml6U2Nyb2xsYmFyID0gTWF0aC5yb3VuZChoZWlnaHQgKyB2ZXJ0UGFkKSAtIGNsaWVudEhlaWdodDtcclxuICAgICAgICAvLyBDaHJvbWUgaGFzIGEgcmF0aGVyIHdlaXJkIHJvdW5kaW5nIG9mIFwiY2xpZW50XCIgcHJvcGVydGllcy5cclxuICAgICAgICAvLyBFLmcuIGZvciBhbiBlbGVtZW50IHdpdGggY29udGVudCB3aWR0aCBvZiAzMTQuMnB4IGl0IHNvbWV0aW1lcyBnaXZlc1xyXG4gICAgICAgIC8vIHRoZSBjbGllbnQgd2lkdGggb2YgMzE1cHggYW5kIGZvciB0aGUgd2lkdGggb2YgMzE0LjdweCBpdCBtYXkgZ2l2ZVxyXG4gICAgICAgIC8vIDMxNHB4LiBBbmQgaXQgZG9lc24ndCBoYXBwZW4gYWxsIHRoZSB0aW1lLiBTbyBqdXN0IGlnbm9yZSB0aGlzIGRlbHRhXHJcbiAgICAgICAgLy8gYXMgYSBub24tcmVsZXZhbnQuXHJcbiAgICAgICAgaWYgKE1hdGguYWJzKHZlcnRTY3JvbGxiYXIpICE9PSAxKSB7XHJcbiAgICAgICAgICAgIHdpZHRoIC09IHZlcnRTY3JvbGxiYXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChNYXRoLmFicyhob3JpelNjcm9sbGJhcikgIT09IDEpIHtcclxuICAgICAgICAgICAgaGVpZ2h0IC09IGhvcml6U2Nyb2xsYmFyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjcmVhdGVSZWN0SW5pdChwYWRkaW5ncy5sZWZ0LCBwYWRkaW5ncy50b3AsIHdpZHRoLCBoZWlnaHQpO1xyXG59XHJcbi8qKlxyXG4gKiBDaGVja3Mgd2hldGhlciBwcm92aWRlZCBlbGVtZW50IGlzIGFuIGluc3RhbmNlIG9mIHRoZSBTVkdHcmFwaGljc0VsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBiZSBjaGVja2VkLlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbnZhciBpc1NWR0dyYXBoaWNzRWxlbWVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBTb21lIGJyb3dzZXJzLCBuYW1lbHkgSUUgYW5kIEVkZ2UsIGRvbid0IGhhdmUgdGhlIFNWR0dyYXBoaWNzRWxlbWVudFxyXG4gICAgLy8gaW50ZXJmYWNlLlxyXG4gICAgaWYgKHR5cGVvZiBTVkdHcmFwaGljc0VsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHsgcmV0dXJuIHRhcmdldCBpbnN0YW5jZW9mIGdldFdpbmRvd09mKHRhcmdldCkuU1ZHR3JhcGhpY3NFbGVtZW50OyB9O1xyXG4gICAgfVxyXG4gICAgLy8gSWYgaXQncyBzbywgdGhlbiBjaGVjayB0aGF0IGVsZW1lbnQgaXMgYXQgbGVhc3QgYW4gaW5zdGFuY2Ugb2YgdGhlXHJcbiAgICAvLyBTVkdFbGVtZW50IGFuZCB0aGF0IGl0IGhhcyB0aGUgXCJnZXRCQm94XCIgbWV0aG9kLlxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dHJhLXBhcmVuc1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHsgcmV0dXJuICh0YXJnZXQgaW5zdGFuY2VvZiBnZXRXaW5kb3dPZih0YXJnZXQpLlNWR0VsZW1lbnQgJiZcclxuICAgICAgICB0eXBlb2YgdGFyZ2V0LmdldEJCb3ggPT09ICdmdW5jdGlvbicpOyB9O1xyXG59KSgpO1xyXG4vKipcclxuICogQ2hlY2tzIHdoZXRoZXIgcHJvdmlkZWQgZWxlbWVudCBpcyBhIGRvY3VtZW50IGVsZW1lbnQgKDxodG1sPikuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBiZSBjaGVja2VkLlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIGlzRG9jdW1lbnRFbGVtZW50KHRhcmdldCkge1xyXG4gICAgcmV0dXJuIHRhcmdldCA9PT0gZ2V0V2luZG93T2YodGFyZ2V0KS5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbn1cclxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgYW4gYXBwcm9wcmlhdGUgY29udGVudCByZWN0YW5nbGUgZm9yIHByb3ZpZGVkIGh0bWwgb3Igc3ZnIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCBjb250ZW50IHJlY3RhbmdsZSBvZiB3aGljaCBuZWVkcyB0byBiZSBjYWxjdWxhdGVkLlxyXG4gKiBAcmV0dXJucyB7RE9NUmVjdEluaXR9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRDb250ZW50UmVjdCh0YXJnZXQpIHtcclxuICAgIGlmICghaXNCcm93c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIGVtcHR5UmVjdDtcclxuICAgIH1cclxuICAgIGlmIChpc1NWR0dyYXBoaWNzRWxlbWVudCh0YXJnZXQpKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFNWR0NvbnRlbnRSZWN0KHRhcmdldCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZ2V0SFRNTEVsZW1lbnRDb250ZW50UmVjdCh0YXJnZXQpO1xyXG59XHJcbi8qKlxyXG4gKiBDcmVhdGVzIHJlY3RhbmdsZSB3aXRoIGFuIGludGVyZmFjZSBvZiB0aGUgRE9NUmVjdFJlYWRPbmx5LlxyXG4gKiBTcGVjOiBodHRwczovL2RyYWZ0cy5meHRmLm9yZy9nZW9tZXRyeS8jZG9tcmVjdHJlYWRvbmx5XHJcbiAqXHJcbiAqIEBwYXJhbSB7RE9NUmVjdEluaXR9IHJlY3RJbml0IC0gT2JqZWN0IHdpdGggcmVjdGFuZ2xlJ3MgeC95IGNvb3JkaW5hdGVzIGFuZCBkaW1lbnNpb25zLlxyXG4gKiBAcmV0dXJucyB7RE9NUmVjdFJlYWRPbmx5fVxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlUmVhZE9ubHlSZWN0KF9hKSB7XHJcbiAgICB2YXIgeCA9IF9hLngsIHkgPSBfYS55LCB3aWR0aCA9IF9hLndpZHRoLCBoZWlnaHQgPSBfYS5oZWlnaHQ7XHJcbiAgICAvLyBJZiBET01SZWN0UmVhZE9ubHkgaXMgYXZhaWxhYmxlIHVzZSBpdCBhcyBhIHByb3RvdHlwZSBmb3IgdGhlIHJlY3RhbmdsZS5cclxuICAgIHZhciBDb25zdHIgPSB0eXBlb2YgRE9NUmVjdFJlYWRPbmx5ICE9PSAndW5kZWZpbmVkJyA/IERPTVJlY3RSZWFkT25seSA6IE9iamVjdDtcclxuICAgIHZhciByZWN0ID0gT2JqZWN0LmNyZWF0ZShDb25zdHIucHJvdG90eXBlKTtcclxuICAgIC8vIFJlY3RhbmdsZSdzIHByb3BlcnRpZXMgYXJlIG5vdCB3cml0YWJsZSBhbmQgbm9uLWVudW1lcmFibGUuXHJcbiAgICBkZWZpbmVDb25maWd1cmFibGUocmVjdCwge1xyXG4gICAgICAgIHg6IHgsIHk6IHksIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICAgICAgdG9wOiB5LFxyXG4gICAgICAgIHJpZ2h0OiB4ICsgd2lkdGgsXHJcbiAgICAgICAgYm90dG9tOiBoZWlnaHQgKyB5LFxyXG4gICAgICAgIGxlZnQ6IHhcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlY3Q7XHJcbn1cclxuLyoqXHJcbiAqIENyZWF0ZXMgRE9NUmVjdEluaXQgb2JqZWN0IGJhc2VkIG9uIHRoZSBwcm92aWRlZCBkaW1lbnNpb25zIGFuZCB0aGUgeC95IGNvb3JkaW5hdGVzLlxyXG4gKiBTcGVjOiBodHRwczovL2RyYWZ0cy5meHRmLm9yZy9nZW9tZXRyeS8jZGljdGRlZi1kb21yZWN0aW5pdFxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0geCAtIFggY29vcmRpbmF0ZS5cclxuICogQHBhcmFtIHtudW1iZXJ9IHkgLSBZIGNvb3JkaW5hdGUuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAtIFJlY3RhbmdsZSdzIHdpZHRoLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IC0gUmVjdGFuZ2xlJ3MgaGVpZ2h0LlxyXG4gKiBAcmV0dXJucyB7RE9NUmVjdEluaXR9XHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVSZWN0SW5pdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICByZXR1cm4geyB4OiB4LCB5OiB5LCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH07XHJcbn1cblxuLyoqXHJcbiAqIENsYXNzIHRoYXQgaXMgcmVzcG9uc2libGUgZm9yIGNvbXB1dGF0aW9ucyBvZiB0aGUgY29udGVudCByZWN0YW5nbGUgb2ZcclxuICogcHJvdmlkZWQgRE9NIGVsZW1lbnQgYW5kIGZvciBrZWVwaW5nIHRyYWNrIG9mIGl0J3MgY2hhbmdlcy5cclxuICovXHJcbnZhciBSZXNpemVPYnNlcnZhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBSZXNpemVPYnNlcnZhdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgdG8gYmUgb2JzZXJ2ZWQuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmF0aW9uKHRhcmdldCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEJyb2FkY2FzdGVkIHdpZHRoIG9mIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmJyb2FkY2FzdFdpZHRoID0gMDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBCcm9hZGNhc3RlZCBoZWlnaHQgb2YgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuYnJvYWRjYXN0SGVpZ2h0ID0gMDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZWZlcmVuY2UgdG8gdGhlIGxhc3Qgb2JzZXJ2ZWQgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7RE9NUmVjdEluaXR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5jb250ZW50UmVjdF8gPSBjcmVhdGVSZWN0SW5pdCgwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyBjb250ZW50IHJlY3RhbmdsZSBhbmQgdGVsbHMgd2hldGhlciBpdCdzIHdpZHRoIG9yIGhlaWdodCBwcm9wZXJ0aWVzXHJcbiAgICAgKiBoYXZlIGNoYW5nZWQgc2luY2UgdGhlIGxhc3QgYnJvYWRjYXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZhdGlvbi5wcm90b3R5cGUuaXNBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHJlY3QgPSBnZXRDb250ZW50UmVjdCh0aGlzLnRhcmdldCk7XHJcbiAgICAgICAgdGhpcy5jb250ZW50UmVjdF8gPSByZWN0O1xyXG4gICAgICAgIHJldHVybiAocmVjdC53aWR0aCAhPT0gdGhpcy5icm9hZGNhc3RXaWR0aCB8fFxyXG4gICAgICAgICAgICByZWN0LmhlaWdodCAhPT0gdGhpcy5icm9hZGNhc3RIZWlnaHQpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyAnYnJvYWRjYXN0V2lkdGgnIGFuZCAnYnJvYWRjYXN0SGVpZ2h0JyBwcm9wZXJ0aWVzIHdpdGggYSBkYXRhXHJcbiAgICAgKiBmcm9tIHRoZSBjb3JyZXNwb25kaW5nIHByb3BlcnRpZXMgb2YgdGhlIGxhc3Qgb2JzZXJ2ZWQgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge0RPTVJlY3RJbml0fSBMYXN0IG9ic2VydmVkIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZhdGlvbi5wcm90b3R5cGUuYnJvYWRjYXN0UmVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcmVjdCA9IHRoaXMuY29udGVudFJlY3RfO1xyXG4gICAgICAgIHRoaXMuYnJvYWRjYXN0V2lkdGggPSByZWN0LndpZHRoO1xyXG4gICAgICAgIHRoaXMuYnJvYWRjYXN0SGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XHJcbiAgICAgICAgcmV0dXJuIHJlY3Q7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmF0aW9uO1xyXG59KCkpO1xuXG52YXIgUmVzaXplT2JzZXJ2ZXJFbnRyeSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBSZXNpemVPYnNlcnZlckVudHJ5LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0aGF0IGlzIGJlaW5nIG9ic2VydmVkLlxyXG4gICAgICogQHBhcmFtIHtET01SZWN0SW5pdH0gcmVjdEluaXQgLSBEYXRhIG9mIHRoZSBlbGVtZW50J3MgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyRW50cnkodGFyZ2V0LCByZWN0SW5pdCkge1xyXG4gICAgICAgIHZhciBjb250ZW50UmVjdCA9IGNyZWF0ZVJlYWRPbmx5UmVjdChyZWN0SW5pdCk7XHJcbiAgICAgICAgLy8gQWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uIGZvbGxvd2luZyBwcm9wZXJ0aWVzIGFyZSBub3Qgd3JpdGFibGVcclxuICAgICAgICAvLyBhbmQgYXJlIGFsc28gbm90IGVudW1lcmFibGUgaW4gdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbi5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFByb3BlcnR5IGFjY2Vzc29ycyBhcmUgbm90IGJlaW5nIHVzZWQgYXMgdGhleSdkIHJlcXVpcmUgdG8gZGVmaW5lIGFcclxuICAgICAgICAvLyBwcml2YXRlIFdlYWtNYXAgc3RvcmFnZSB3aGljaCBtYXkgY2F1c2UgbWVtb3J5IGxlYWtzIGluIGJyb3dzZXJzIHRoYXRcclxuICAgICAgICAvLyBkb24ndCBzdXBwb3J0IHRoaXMgdHlwZSBvZiBjb2xsZWN0aW9ucy5cclxuICAgICAgICBkZWZpbmVDb25maWd1cmFibGUodGhpcywgeyB0YXJnZXQ6IHRhcmdldCwgY29udGVudFJlY3Q6IGNvbnRlbnRSZWN0IH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyRW50cnk7XHJcbn0oKSk7XG5cbnZhciBSZXNpemVPYnNlcnZlclNQSSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBSZXNpemVPYnNlcnZlci5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1Jlc2l6ZU9ic2VydmVyQ2FsbGJhY2t9IGNhbGxiYWNrIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBpcyBpbnZva2VkXHJcbiAgICAgKiAgICAgIHdoZW4gb25lIG9mIHRoZSBvYnNlcnZlZCBlbGVtZW50cyBjaGFuZ2VzIGl0J3MgY29udGVudCBkaW1lbnNpb25zLlxyXG4gICAgICogQHBhcmFtIHtSZXNpemVPYnNlcnZlckNvbnRyb2xsZXJ9IGNvbnRyb2xsZXIgLSBDb250cm9sbGVyIGluc3RhbmNlIHdoaWNoXHJcbiAgICAgKiAgICAgIGlzIHJlc3BvbnNpYmxlIGZvciB0aGUgdXBkYXRlcyBvZiBvYnNlcnZlci5cclxuICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJ9IGNhbGxiYWNrQ3R4IC0gUmVmZXJlbmNlIHRvIHRoZSBwdWJsaWNcclxuICAgICAqICAgICAgUmVzaXplT2JzZXJ2ZXIgaW5zdGFuY2Ugd2hpY2ggd2lsbCBiZSBwYXNzZWQgdG8gY2FsbGJhY2sgZnVuY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyU1BJKGNhbGxiYWNrLCBjb250cm9sbGVyLCBjYWxsYmFja0N0eCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENvbGxlY3Rpb24gb2YgcmVzaXplIG9ic2VydmF0aW9ucyB0aGF0IGhhdmUgZGV0ZWN0ZWQgY2hhbmdlcyBpbiBkaW1lbnNpb25zXHJcbiAgICAgICAgICogb2YgZWxlbWVudHMuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7QXJyYXk8UmVzaXplT2JzZXJ2YXRpb24+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuYWN0aXZlT2JzZXJ2YXRpb25zXyA9IFtdO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlZ2lzdHJ5IG9mIHRoZSBSZXNpemVPYnNlcnZhdGlvbiBpbnN0YW5jZXMuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7TWFwPEVsZW1lbnQsIFJlc2l6ZU9ic2VydmF0aW9uPn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm9ic2VydmF0aW9uc18gPSBuZXcgTWFwU2hpbSgpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGNhbGxiYWNrIHByb3ZpZGVkIGFzIHBhcmFtZXRlciAxIGlzIG5vdCBhIGZ1bmN0aW9uLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbGxiYWNrXyA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlcl8gPSBjb250cm9sbGVyO1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tDdHhfID0gY2FsbGJhY2tDdHg7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0cyBvYnNlcnZpbmcgcHJvdmlkZWQgZWxlbWVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgdG8gYmUgb2JzZXJ2ZWQuXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJzEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRG8gbm90aGluZyBpZiBjdXJyZW50IGVudmlyb25tZW50IGRvZXNuJ3QgaGF2ZSB0aGUgRWxlbWVudCBpbnRlcmZhY2UuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBFbGVtZW50ID09PSAndW5kZWZpbmVkJyB8fCAhKEVsZW1lbnQgaW5zdGFuY2VvZiBPYmplY3QpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCEodGFyZ2V0IGluc3RhbmNlb2YgZ2V0V2luZG93T2YodGFyZ2V0KS5FbGVtZW50KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdwYXJhbWV0ZXIgMSBpcyBub3Qgb2YgdHlwZSBcIkVsZW1lbnRcIi4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG9ic2VydmF0aW9ucyA9IHRoaXMub2JzZXJ2YXRpb25zXztcclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIGVsZW1lbnQgaXMgYWxyZWFkeSBiZWluZyBvYnNlcnZlZC5cclxuICAgICAgICBpZiAob2JzZXJ2YXRpb25zLmhhcyh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JzZXJ2YXRpb25zLnNldCh0YXJnZXQsIG5ldyBSZXNpemVPYnNlcnZhdGlvbih0YXJnZXQpKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJfLmFkZE9ic2VydmVyKHRoaXMpO1xyXG4gICAgICAgIC8vIEZvcmNlIHRoZSB1cGRhdGUgb2Ygb2JzZXJ2YXRpb25zLlxyXG4gICAgICAgIHRoaXMuY29udHJvbGxlcl8ucmVmcmVzaCgpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogU3RvcHMgb2JzZXJ2aW5nIHByb3ZpZGVkIGVsZW1lbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRvIHN0b3Agb2JzZXJ2aW5nLlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS51bm9ic2VydmUgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJzEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRG8gbm90aGluZyBpZiBjdXJyZW50IGVudmlyb25tZW50IGRvZXNuJ3QgaGF2ZSB0aGUgRWxlbWVudCBpbnRlcmZhY2UuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBFbGVtZW50ID09PSAndW5kZWZpbmVkJyB8fCAhKEVsZW1lbnQgaW5zdGFuY2VvZiBPYmplY3QpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCEodGFyZ2V0IGluc3RhbmNlb2YgZ2V0V2luZG93T2YodGFyZ2V0KS5FbGVtZW50KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdwYXJhbWV0ZXIgMSBpcyBub3Qgb2YgdHlwZSBcIkVsZW1lbnRcIi4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG9ic2VydmF0aW9ucyA9IHRoaXMub2JzZXJ2YXRpb25zXztcclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIGVsZW1lbnQgaXMgbm90IGJlaW5nIG9ic2VydmVkLlxyXG4gICAgICAgIGlmICghb2JzZXJ2YXRpb25zLmhhcyh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JzZXJ2YXRpb25zLmRlbGV0ZSh0YXJnZXQpO1xyXG4gICAgICAgIGlmICghb2JzZXJ2YXRpb25zLnNpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyXy5yZW1vdmVPYnNlcnZlcih0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9wcyBvYnNlcnZpbmcgYWxsIGVsZW1lbnRzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNsZWFyQWN0aXZlKCk7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZhdGlvbnNfLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyXy5yZW1vdmVPYnNlcnZlcih0aGlzKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENvbGxlY3RzIG9ic2VydmF0aW9uIGluc3RhbmNlcyB0aGUgYXNzb2NpYXRlZCBlbGVtZW50IG9mIHdoaWNoIGhhcyBjaGFuZ2VkXHJcbiAgICAgKiBpdCdzIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuZ2F0aGVyQWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jbGVhckFjdGl2ZSgpO1xyXG4gICAgICAgIHRoaXMub2JzZXJ2YXRpb25zXy5mb3JFYWNoKGZ1bmN0aW9uIChvYnNlcnZhdGlvbikge1xyXG4gICAgICAgICAgICBpZiAob2JzZXJ2YXRpb24uaXNBY3RpdmUoKSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuYWN0aXZlT2JzZXJ2YXRpb25zXy5wdXNoKG9ic2VydmF0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSW52b2tlcyBpbml0aWFsIGNhbGxiYWNrIGZ1bmN0aW9uIHdpdGggYSBsaXN0IG9mIFJlc2l6ZU9ic2VydmVyRW50cnlcclxuICAgICAqIGluc3RhbmNlcyBjb2xsZWN0ZWQgZnJvbSBhY3RpdmUgcmVzaXplIG9ic2VydmF0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLmJyb2FkY2FzdEFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIG9ic2VydmVyIGRvZXNuJ3QgaGF2ZSBhY3RpdmUgb2JzZXJ2YXRpb25zLlxyXG4gICAgICAgIGlmICghdGhpcy5oYXNBY3RpdmUoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjdHggPSB0aGlzLmNhbGxiYWNrQ3R4XztcclxuICAgICAgICAvLyBDcmVhdGUgUmVzaXplT2JzZXJ2ZXJFbnRyeSBpbnN0YW5jZSBmb3IgZXZlcnkgYWN0aXZlIG9ic2VydmF0aW9uLlxyXG4gICAgICAgIHZhciBlbnRyaWVzID0gdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfLm1hcChmdW5jdGlvbiAob2JzZXJ2YXRpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZXNpemVPYnNlcnZlckVudHJ5KG9ic2VydmF0aW9uLnRhcmdldCwgb2JzZXJ2YXRpb24uYnJvYWRjYXN0UmVjdCgpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrXy5jYWxsKGN0eCwgZW50cmllcywgY3R4KTtcclxuICAgICAgICB0aGlzLmNsZWFyQWN0aXZlKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDbGVhcnMgdGhlIGNvbGxlY3Rpb24gb2YgYWN0aXZlIG9ic2VydmF0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLmNsZWFyQWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlT2JzZXJ2YXRpb25zXy5zcGxpY2UoMCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUZWxscyB3aGV0aGVyIG9ic2VydmVyIGhhcyBhY3RpdmUgb2JzZXJ2YXRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuaGFzQWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZU9ic2VydmF0aW9uc18ubGVuZ3RoID4gMDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJTUEk7XHJcbn0oKSk7XG5cbi8vIFJlZ2lzdHJ5IG9mIGludGVybmFsIG9ic2VydmVycy4gSWYgV2Vha01hcCBpcyBub3QgYXZhaWxhYmxlIHVzZSBjdXJyZW50IHNoaW1cclxuLy8gZm9yIHRoZSBNYXAgY29sbGVjdGlvbiBhcyBpdCBoYXMgYWxsIHJlcXVpcmVkIG1ldGhvZHMgYW5kIGJlY2F1c2UgV2Vha01hcFxyXG4vLyBjYW4ndCBiZSBmdWxseSBwb2x5ZmlsbGVkIGFueXdheS5cclxudmFyIG9ic2VydmVycyA9IHR5cGVvZiBXZWFrTWFwICE9PSAndW5kZWZpbmVkJyA/IG5ldyBXZWFrTWFwKCkgOiBuZXcgTWFwU2hpbSgpO1xyXG4vKipcclxuICogUmVzaXplT2JzZXJ2ZXIgQVBJLiBFbmNhcHN1bGF0ZXMgdGhlIFJlc2l6ZU9ic2VydmVyIFNQSSBpbXBsZW1lbnRhdGlvblxyXG4gKiBleHBvc2luZyBvbmx5IHRob3NlIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMgdGhhdCBhcmUgZGVmaW5lZCBpbiB0aGUgc3BlYy5cclxuICovXHJcbnZhciBSZXNpemVPYnNlcnZlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBSZXNpemVPYnNlcnZlci5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1Jlc2l6ZU9ic2VydmVyQ2FsbGJhY2t9IGNhbGxiYWNrIC0gQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW5cclxuICAgICAqICAgICAgZGltZW5zaW9ucyBvZiB0aGUgb2JzZXJ2ZWQgZWxlbWVudHMgY2hhbmdlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlcihjYWxsYmFjaykge1xyXG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSZXNpemVPYnNlcnZlcikpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY29udHJvbGxlciA9IFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIHZhciBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlclNQSShjYWxsYmFjaywgY29udHJvbGxlciwgdGhpcyk7XHJcbiAgICAgICAgb2JzZXJ2ZXJzLnNldCh0aGlzLCBvYnNlcnZlcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXI7XHJcbn0oKSk7XHJcbi8vIEV4cG9zZSBwdWJsaWMgbWV0aG9kcyBvZiBSZXNpemVPYnNlcnZlci5cclxuW1xyXG4gICAgJ29ic2VydmUnLFxyXG4gICAgJ3Vub2JzZXJ2ZScsXHJcbiAgICAnZGlzY29ubmVjdCdcclxuXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcclxuICAgIFJlc2l6ZU9ic2VydmVyLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICByZXR1cm4gKF9hID0gb2JzZXJ2ZXJzLmdldCh0aGlzKSlbbWV0aG9kXS5hcHBseShfYSwgYXJndW1lbnRzKTtcclxuICAgIH07XHJcbn0pO1xuXG52YXIgaW5kZXggPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gRXhwb3J0IGV4aXN0aW5nIGltcGxlbWVudGF0aW9uIGlmIGF2YWlsYWJsZS5cclxuICAgIGlmICh0eXBlb2YgZ2xvYmFsJDEuUmVzaXplT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuIGdsb2JhbCQxLlJlc2l6ZU9ic2VydmVyO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyO1xyXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiIsInZhciBjYW1lbDJoeXBoZW4gPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiBzdHJcbiAgICAgICAgICAucmVwbGFjZSgvW0EtWl0vZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gJy0nICsgbWF0Y2gudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjYW1lbDJoeXBoZW47IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNwcmluZywgdXNlVHJhbnNpdGlvbiwgYW5pbWF0ZWQsIGNvbmZpZyB9IGZyb20gXCJyZWFjdC1zcHJpbmdcIjtcclxuXHJcbmltcG9ydCBCcmllZmluZ1NlY3Rpb24gZnJvbSBcIi4vcGFnZV9zZWN0aW9ucy9icmllZlNlY3Rpb25cIjtcclxuaW1wb3J0IFRlYW0gZnJvbSBcIi4vcGFnZV9zZWN0aW9ucy9tZWV0VGhlVGVhbVwiO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIGNvbnN0IHByb3BzID0gdXNlU3ByaW5nKHsgb3BhY2l0eTogMiwgZnJvbTogeyBvcGFjaXR5OiAwIH0gfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxhbmltYXRlZC5kaXYgc3R5bGU9e3Byb3BzfT5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwib3BlbmluZ0hlYWRcIj5XZWxjb21lIHRvIHNwb3J0cyBBdmFsYW5jaGU8L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cIm9wZW5pbmdUZXh0XCI+XHJcbiAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2RcclxuICAgICAgICB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXRcclxuICAgICAgPC9wPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImN1c3RvbS1idXR0b25cIj5HZXQgU3RhcnRlZDwvYnV0dG9uPlxyXG4gICAgPC9hbmltYXRlZC5kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc2xpZGVzID0gW1xyXG4gIHtcclxuICAgIGlkOiAwLFxyXG4gICAgdXJsOlxyXG4gICAgICBcInBob3RvLTE1NDQ1MTE5MTYtMDE0OGNjZGViODc3P2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmdz0xOTAxJnE9ODBpXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHVybDpcclxuICAgICAgXCJwaG90by0xNTQ0NTcyNTcxLWFiOTRmZDg3MmNlND9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5Jnc9MTUzNCZxPTgwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHVybDogXCJyZXNlcnZlL2JuVzFUdVRWMllHY29oMUh5V05RX0lNR18wMjA3LkpQRz9peGxpYj1yYi0xLjIuMSZ3PTE1MzQmcT04MFwiLFxyXG4gIH0sXHJcbiAgeyBpZDogMywgdXJsOiBcInBob3RvLTE1NDAyMDYzOTUtNjg4MDg1NzIzMzJmP2l4bGliPXJiLTEuMi4xJnc9MTE4MSZxPTgwXCIgfSxcclxuXTtcclxuXHJcbi8vIGNvbnN0IEltYWdlVHJhbnNpdGlvbiA9ICgpID0+IHtcclxuLy8gICBjb25zdCBbaW5kZXgsIHNldF0gPSB1c2VTdGF0ZSgwKTtcclxuLy8gICBjb25zdCB0cmFuc2l0aW9ucyA9IHVzZVRyYW5zaXRpb24oc2xpZGVzW2luZGV4XSwgKGl0ZW0pID0+IGl0ZW0uaWQsIHtcclxuLy8gICAgIGZyb206IHsgb3BhY2l0eTogMCB9LFxyXG4vLyAgICAgZW50ZXI6IHsgb3BhY2l0eTogMSB9LFxyXG4vLyAgICAgbGVhdmU6IHsgb3BhY2l0eTogMCB9LFxyXG4vLyAgICAgY29uZmlnOiBjb25maWcubW9sYXNzZXMsXHJcbi8vICAgfSk7XHJcbi8vICAgdXNlRWZmZWN0KFxyXG4vLyAgICAgKCkgPT4gdm9pZCBzZXRJbnRlcnZhbCgoKSA9PiBzZXQoKHN0YXRlKSA9PiAoc3RhdGUgKyAxKSAlIDQpLCAyMDAwKSxcclxuLy8gICAgIFtdXHJcbi8vICAgKTtcclxuLy8gICByZXR1cm4gdHJhbnNpdGlvbnMubWFwKCh7IGl0ZW0sIHByb3BzLCBrZXkgfSkgPT4gKFxyXG4vLyAgICAgPGFuaW1hdGVkLmRpdlxyXG4vLyAgICAgICBrZXk9e2tleX1cclxuLy8gICAgICAgY2xhc3M9XCJiZ1wiXHJcbi8vICAgICAgIHN0eWxlPXt7XHJcbi8vICAgICAgICAgLi4ucHJvcHMsXHJcbi8vICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS8ke2l0ZW0udXJsfSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcClgLFxyXG4vLyAgICAgICB9fVxyXG4vLyAgICAgLz5cclxuLy8gICApKTtcclxuLy8gfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRoZU1haW4oKSB7XHJcbiAgY29uc3QgcHJvcHMgPSB1c2VTcHJpbmcoeyBvcGFjaXR5OiAyLCBmcm9tOiB7IG9wYWNpdHk6IDAgfSB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJCb3hcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoaWZ0Qm94XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtZ3JpZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cclxuICAgICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJUZXh0LXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJUZXh0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJUZXh0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNlbnRlclRleHQtY29udGFpbmVyLWhlYWRlclwiPldobyBhcmUgd2U8L2gzPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIDxUZWFtIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXR0ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtZ3JpZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoM3RleHRcIj5Mb3JlbSBJcHN1bTwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUZXh0XCI+XHJcbiAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvXHJcbiAgICAgICAgICAgICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXRcclxuICAgICAgICAgICAgICBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXNcclxuICAgICAgICAgICAgICBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpblxyXG4gICAgICAgICAgICAgIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICBzPGRpdiBjbGFzc05hbWU9XCJmaXR0ZXJcIj5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJUZXh0LXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJUZXh0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJUZXh0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNlbnRlclRleHQtY29udGFpbmVyLWhlYWRlclwiPldobyBhcmUgd2U8L2gzPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgICAgICA8YW5pbWF0ZWQuZGl2IHN0eWxlPXtwcm9wc30+XHJcbiAgICAgICAgICA8QnJpZWZpbmdTZWN0aW9uIC8+XHJcbiAgICAgICAgPC9hbmltYXRlZC5kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXR0ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtZ3JpZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoM3RleHRcIj5Mb3JlbSBJcHN1bTwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUZXh0XCI+XHJcbiAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvXHJcbiAgICAgICAgICAgICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXRcclxuICAgICAgICAgICAgICBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXNcclxuICAgICAgICAgICAgICBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpblxyXG4gICAgICAgICAgICAgIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lnblVwLXNlY3Rpb25cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lnblVwLWZpZWxkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lnblVwLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzaWduVXAtY29udGFpbmVyLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgU3RhcnQgU2VsbGluZyBPbmxpbmUgZm9yIEZyZWVcclxuICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvdmVuZG9yLXNpZ251cFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzaWduVXAtYnV0dG9uXCI+R2V0IHN0YXJ0ZWQgZm9yIGZyZWU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXR0ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtZ3JpZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoM3RleHRcIj5Mb3JlbSBJcHN1bTwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUZXh0XCI+XHJcbiAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvXHJcbiAgICAgICAgICAgICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXRcclxuICAgICAgICAgICAgICBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXNcclxuICAgICAgICAgICAgICBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpblxyXG4gICAgICAgICAgICAgIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsIlxyXG5jb25zdCBpY29uMSA9ICdodHRwczovL3ByaXNtaWMtaW8uczMuYW1hem9uYXdzLmNvbS93d3ctc3RhdGljLzQwODNiNDA5LTVlNjUtNDQwMy04NmE4LTdlZDhmNTAxYTBkOF9pY29uLXRhc2stbGlzdC1tdWx0aXBsZS5zdmcnXHJcbmNvbnN0IGljb24yID0gJ2h0dHBzOi8vcHJpc21pYy1pby5zMy5hbWF6b25hd3MuY29tL3d3dy1zdGF0aWMvMWM3OTFiMTQtODMzZi00MTkwLWE4NjUtYTU1ZTExMDU1ZmMwX2ljb24tY2VydGlmaWVkLWNlcnRpZmljYXRlLnN2ZydcclxuY29uc3QgaWNvbjMgPSAnaHR0cHM6Ly9wcmlzbWljLWlvLnMzLmFtYXpvbmF3cy5jb20vd3d3LXN0YXRpYy8xYzc5MWIxNC04MzNmLTQxOTAtYTg2NS1hNTVlMTEwNTVmYzBfaWNvbi1jZXJ0aWZpZWQtY2VydGlmaWNhdGUuc3ZnJ1xyXG5jb25zdCBpY29uNCA9ICdodHRwczovL3ByaXNtaWMtaW8uczMuYW1hem9uYXdzLmNvbS93d3ctc3RhdGljLzFjNzkxYjE0LTgzM2YtNDE5MC1hODY1LWE1NWUxMTA1NWZjMF9pY29uLWNlcnRpZmllZC1jZXJ0aWZpY2F0ZS5zdmcnXHJcblxyXG5jb25zdCBCcmllZmluZ1NlY3Rpb24gPSgpPT57XHJcbiAgICBjb25zdCBicmllZnRUZXh0ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvcmluY2lkaWR1bnQgcXVpcydcclxuICAgIHJldHVybihcclxuICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRpc3BsYXlCb3hlcy1ib3hcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRpc3BsYXlCb3hlcy1saXN0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNwbGF5Qm94ZXMtdGV4dC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc3BsYXlCb3hlcy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpY29uMX0gY2xhc3NOYW1lPVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGlzcGxheUJveGVzLWhlYWRpbmdcIj5Mb3JlbTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRpc3BsYXlCb3hlcy10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2JyaWVmdFRleHR9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGlzcGxheUJveGVzLWxpc3RcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc3BsYXlCb3hlcy10ZXh0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheUJveGVzLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ljb24yfSBjbGFzc05hbWU9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkaXNwbGF5Qm94ZXMtaGVhZGluZ1wiPkxvcmVtPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGlzcGxheUJveGVzLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7YnJpZWZ0VGV4dH1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkaXNwbGF5Qm94ZXMtbGlzdFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheUJveGVzLXRleHQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNwbGF5Qm94ZXMtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aWNvbjN9IGNsYXNzTmFtZT1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRpc3BsYXlCb3hlcy1oZWFkaW5nXCI+TG9yZW08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkaXNwbGF5Qm94ZXMtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHticmllZnRUZXh0fVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRpc3BsYXlCb3hlcy1saXN0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNwbGF5Qm94ZXMtdGV4dC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc3BsYXlCb3hlcy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpY29uNH0gY2xhc3NOYW1lPVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGlzcGxheUJveGVzLWhlYWRpbmdcIj5Mb3JlbTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRpc3BsYXlCb3hlcy10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2JyaWVmdFRleHR9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICBcclxuICAgICAgICAgIDwvdWw+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBCcmllZmluZ1NlY3Rpb25cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG4xXHJcblxyXG5jb25zdCBpY29uMSA9ICdodHRwczovL3ByaXNtaWMtaW8uczMuYW1hem9uYXdzLmNvbS93d3ctc3RhdGljLzQwODNiNDA5LTVlNjUtNDQwMy04NmE4LTdlZDhmNTAxYTBkOF9pY29uLXRhc2stbGlzdC1tdWx0aXBsZS5zdmcnXHJcbmNvbnN0IGljb24yID0gJ2h0dHBzOi8vcHJpc21pYy1pby5zMy5hbWF6b25hd3MuY29tL3d3dy1zdGF0aWMvMWM3OTFiMTQtODMzZi00MTkwLWE4NjUtYTU1ZTExMDU1ZmMwX2ljb24tY2VydGlmaWVkLWNlcnRpZmljYXRlLnN2ZydcclxuY29uc3QgaWNvbjMgPSAnaHR0cHM6Ly9wcmlzbWljLWlvLnMzLmFtYXpvbmF3cy5jb20vd3d3LXN0YXRpYy8xYzc5MWIxNC04MzNmLTQxOTAtYTg2NS1hNTVlMTEwNTVmYzBfaWNvbi1jZXJ0aWZpZWQtY2VydGlmaWNhdGUuc3ZnJ1xyXG5jb25zdCBpY29uNCA9ICdodHRwczovL3ByaXNtaWMtaW8uczMuYW1hem9uYXdzLmNvbS93d3ctc3RhdGljLzFjNzkxYjE0LTgzM2YtNDE5MC1hODY1LWE1NWUxMTA1NWZjMF9pY29uLWNlcnRpZmllZC1jZXJ0aWZpY2F0ZS5zdmcnXHJcbmNvbnN0IGJyaWVmdFRleHQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMnXHJcblxyXG5cclxuY29uc3QgaW1hZ2UxID0gJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA2Nzk0Nzc4MjAyLWNhZDg0Y2Y0NWYxZD9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NTAwJnE9NjAnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZWFtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtLWNvbnRhaW5lci1maXRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW0tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtLWxpc3QtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS1ib3gtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS11c2VyLWF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRlYW0tdXNlci1hdmF0YXItaW1hZ2VcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtLXRleHQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGVhbS10ZXh0LWhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgRGlyZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRlYW0tdGV4dFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgIFxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS1saXN0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW0tYm94LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW0tdXNlci1hdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZWFtLXVzZXItYXZhdGFyLWltYWdlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS10ZXh0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRlYW0tdGV4dC1oZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIE1jVGhlZWJ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICBcclxuICAgXHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtLWxpc3QtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS1ib3gtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS11c2VyLWF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRlYW0tdXNlci1hdmF0YXItaW1hZ2VcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtLXRleHQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGVhbS10ZXh0LWhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgTWNUaGVlYnpcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS1saXN0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW0tYm94LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW0tdXNlci1hdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZWFtLXVzZXItYXZhdGFyLWltYWdlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS10ZXh0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRlYW0tdGV4dC1oZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIE1jVGhlZWJ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=