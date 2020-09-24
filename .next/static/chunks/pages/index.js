_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["pages/index"],{

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
var _jsxFileName = "C:\\Users\\D\\Downloads\\Theebz\\Projects\\Avalanche\\avalanchenext\\pages\\index.js",
    _s = $RefreshSig$(),
    _this = undefined,
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
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: "openingHead",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, "Welcome to sports Avalanche"), __jsx("p", {
    className: "openingText",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"), __jsx("button", {
    className: "custom-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
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
}];

var BriefingSection = function BriefingSection() {
  var brieftText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis';
  return __jsx("ul", {
    className: "displayBoxes-box",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 10
    }
  }, __jsx("li", {
    className: "displayBoxes-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "displayBoxes-text-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "displayBoxes-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "",
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 19
    }
  })), __jsx("p", {
    className: "displayBoxes-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, "Lorem"), __jsx("p", {
    className: "displayBoxes-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, brieftText))), __jsx("li", {
    className: "displayBoxes-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "displayBoxes-text-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "displayBoxes-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "",
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 19
    }
  })), __jsx("p", {
    className: "displayBoxes-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, "Lorem"), __jsx("p", {
    className: "displayBoxes-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, brieftText))), __jsx("li", {
    className: "displayBoxes-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "displayBoxes-text-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "displayBoxes-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "",
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 19
    }
  })), __jsx("p", {
    className: "displayBoxes-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, "Lorem"), __jsx("p", {
    className: "displayBoxes-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, brieftText))), __jsx("li", {
    className: "displayBoxes-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "displayBoxes-text-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "displayBoxes-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "",
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 19
    }
  })), __jsx("p", {
    className: "displayBoxes-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, "Lorem"), __jsx("p", {
    className: "displayBoxes-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, brieftText))), __jsx("li", {
    className: "displayBoxes-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "displayBoxes-text-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "displayBoxes-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "",
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 19
    }
  })), __jsx("p", {
    className: "displayBoxes-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, "Lorem"), __jsx("p", {
    className: "displayBoxes-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, brieftText))), __jsx("li", {
    className: "displayBoxes-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "displayBoxes-text-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "displayBoxes-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "",
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 19
    }
  })), __jsx("p", {
    className: "displayBoxes-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, "Lorem"), __jsx("p", {
    className: "displayBoxes-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, brieftText))));
}; // const ImageTransition = () => {
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


_c2 = BriefingSection;
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
      lineNumber: 143,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "shiftBox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "page-grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }, __jsx(Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: "fitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "centerText-section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "centerText-field",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "centerText-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "centerText-container-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }
  }, "Who are we"))))), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div, {
    style: props,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 9
    }
  }, __jsx(BriefingSection, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 10
    }
  }))), __jsx("div", {
    className: "fitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "page-grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "h3text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 17
    }
  }, "Lorem Ipsum"), __jsx("p", {
    className: "pText",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore")), __jsx("div", {
    className: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "fitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "page-grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "h3text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 11
    }
  }, "Lorem Ipsum"), __jsx("p", {
    className: "pText",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore")))), __jsx("div", {
    className: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "signUp-section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "signUp-field",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "signUp-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "signUp-container-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 13
    }
  }, "Start Selling Online for Free"), __jsx("a", {
    href: "/vendor-signup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "signUp-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 15
    }
  }, "Get started for free")))))), __jsx("div", {
    className: "fitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "page-grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "h3text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 17
    }
  }, "Lorem Ipsum"), __jsx("p", {
    className: "pText",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore")), __jsx("div", {
    className: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 11
    }
  }))));
}

_s2(theMain, "2eLh5p/G96FiNolTD5G7yAACzvw=", false, function () {
  return [react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"]];
});

var _c, _c2;

$RefreshReg$(_c, "Header");
$RefreshReg$(_c2, "BriefingSection");

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

/***/ })

},[["./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5CD%5CDownloads%5CTheebz%5CProjects%5CAvalanche%5Cavalanchenext%5Cpages%5Cindex.js!./","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy9vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zcHJpbmcvd2ViLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8od2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSGVhZGVyIiwicHJvcHMiLCJ1c2VTcHJpbmciLCJvcGFjaXR5IiwiZnJvbSIsInNsaWRlcyIsImlkIiwidXJsIiwiQnJpZWZpbmdTZWN0aW9uIiwiYnJpZWZ0VGV4dCIsInRoZU1haW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxt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O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNFQUFzRSxhQUFhO0FBQ25GO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixF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Q0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsY0FBYztBQUN6QixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTtBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvRUFBb0U7O0FBRXBFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOzs7QUFHSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWU7O0FBRWYsd0JBQXdCLGlCQUFpQjs7O0FBR3pDO0FBQ0Esd0JBQXdCOztBQUV4QiwyQkFBMkI7QUFDM0I7QUFDQTs7QUFFQSwrQkFBK0I7O0FBRS9COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLE9BQU87QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLFdBQVcsUUFBUTtBQUNuQixXQUFXLFVBQVU7QUFDckIsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxZQUFZLFFBQVE7QUFDcEI7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCOztBQUV2Qjs7QUFFQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHNJQUFzSSx5Q0FBeUM7QUFDL0s7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxXQUFXLFVBQVU7QUFDckIsV0FBVyxHQUFHO0FBQ2QsWUFBWSxRQUFRO0FBQ3BCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLFdBQVcsaUJBQWlCO0FBQzVCLFdBQVcsRUFBRTtBQUNiOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxXQUFXLGlCQUFpQjtBQUM1QixXQUFXLEVBQUU7QUFDYixZQUFZLE9BQU87QUFDbkI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsWUFBWSxPQUFPO0FBQ25COzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLGFBQWE7QUFDekI7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSx5Q0FBeUM7O0FBRXpDO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSxtQ0FBbUM7O0FBRW5DO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBLHlDQUF5QztBQUN6Qzs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsRUFBRTtBQUNiOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwREFBMEQ7QUFDMUQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixXQUFXLEVBQUU7QUFDYjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4Qjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4Qjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUN2M0RhOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQztBQUNELG1CQUFtQixtQkFBTyxDQUFDLGlGQUE0QjtBQUN2RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTs7QUFFQSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQ2hCLE1BQU1DLEtBQUss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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyx5QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQURGLEVBSUU7QUFBRyxRQUFJLEVBQUMsZ0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsYUFBUyxFQUFDLGVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsQ0FKRixDQURGLENBREYsQ0FEQSxDQTFFRixFQTJGRTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFTTtBQUFJLGFBQVMsRUFBQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRk4sRUFLTTtBQUFHLGFBQVMsRUFBQyxPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNFRBTE4sQ0FERixFQWNFO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRGLENBREYsQ0EzRkYsQ0FERjtBQWtIRDs7SUFwSHVCUyxPO1VBQ1JSLHNEIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsIlwidXNlIHN0cmljdFwiO3ZhciBhc3NpZ249T2JqZWN0LmFzc2lnbi5iaW5kKE9iamVjdCk7bW9kdWxlLmV4cG9ydHM9YXNzaWduO21vZHVsZS5leHBvcnRzLmRlZmF1bHQ9bW9kdWxlLmV4cG9ydHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vYmplY3QtYXNzaWduLmpzLm1hcCIsIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcRFxcXFxEb3dubG9hZHNcXFxcVGhlZWJ6XFxcXFByb2plY3RzXFxcXEF2YWxhbmNoZVxcXFxhdmFsYW5jaGVuZXh0XFxcXHBhZ2VzXFxcXGluZGV4LmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAgICAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciAmJiAhKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJyArXG4gICAgICAgICAgICBsb2NhdGlvbiArICcgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICcgKyB0eXBlb2YgZXJyb3IgKyAnLiAnICtcbiAgICAgICAgICAgICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgK1xuICAgICAgICAgICAgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ZhaWxlZCAnICsgbG9jYXRpb24gKyAnIHR5cGU6ICcgKyBlcnJvci5tZXNzYWdlICsgKHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldHMgd2FybmluZyBjYWNoZSB3aGVuIHRlc3RpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCBmb3J3YXJkUmVmLCB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlSW1wZXJhdGl2ZUhhbmRsZSwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgaXMgPSB7XG4gIGFycjogQXJyYXkuaXNBcnJheSxcbiAgb2JqOiBhID0+IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScsXG4gIGZ1bjogYSA9PiB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJyxcbiAgc3RyOiBhID0+IHR5cGVvZiBhID09PSAnc3RyaW5nJyxcbiAgbnVtOiBhID0+IHR5cGVvZiBhID09PSAnbnVtYmVyJyxcbiAgdW5kOiBhID0+IGEgPT09IHZvaWQgMCxcbiAgbnVsOiBhID0+IGEgPT09IG51bGwsXG4gIHNldDogYSA9PiBhIGluc3RhbmNlb2YgU2V0LFxuICBtYXA6IGEgPT4gYSBpbnN0YW5jZW9mIE1hcCxcblxuICBlcXUoYSwgYikge1xuICAgIGlmICh0eXBlb2YgYSAhPT0gdHlwZW9mIGIpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoaXMuc3RyKGEpIHx8IGlzLm51bShhKSkgcmV0dXJuIGEgPT09IGI7XG4gICAgaWYgKGlzLm9iaihhKSAmJiBpcy5vYmooYikgJiYgT2JqZWN0LmtleXMoYSkubGVuZ3RoICsgT2JqZWN0LmtleXMoYikubGVuZ3RoID09PSAwKSByZXR1cm4gdHJ1ZTtcbiAgICBsZXQgaTtcblxuICAgIGZvciAoaSBpbiBhKSBpZiAoIShpIGluIGIpKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGkgaW4gYikgaWYgKGFbaV0gIT09IGJbaV0pIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiBpcy51bmQoaSkgPyBhID09PSBiIDogdHJ1ZTtcbiAgfVxuXG59O1xuZnVuY3Rpb24gbWVyZ2UodGFyZ2V0LCBsb3dlcmNhc2UpIHtcbiAgaWYgKGxvd2VyY2FzZSA9PT0gdm9pZCAwKSB7XG4gICAgbG93ZXJjYXNlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmplY3QgPT4gKGlzLmFycihvYmplY3QpID8gb2JqZWN0IDogT2JqZWN0LmtleXMob2JqZWN0KSkucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBrZXkgPSBsb3dlcmNhc2UgPyBlbGVtZW50WzBdLnRvTG93ZXJDYXNlKCkgKyBlbGVtZW50LnN1YnN0cmluZygxKSA6IGVsZW1lbnQ7XG4gICAgYWNjW2tleV0gPSB0YXJnZXQoa2V5KTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB0YXJnZXQpO1xufVxuZnVuY3Rpb24gdXNlRm9yY2VVcGRhdGUoKSB7XG4gIGNvbnN0IF91c2VTdGF0ZSA9IHVzZVN0YXRlKGZhbHNlKSxcbiAgICAgICAgZiA9IF91c2VTdGF0ZVsxXTtcblxuICBjb25zdCBmb3JjZVVwZGF0ZSA9IHVzZUNhbGxiYWNrKCgpID0+IGYodiA9PiAhdiksIFtdKTtcbiAgcmV0dXJuIGZvcmNlVXBkYXRlO1xufVxuZnVuY3Rpb24gd2l0aERlZmF1bHQodmFsdWUsIGRlZmF1bHRWYWx1ZSkge1xuICByZXR1cm4gaXMudW5kKHZhbHVlKSB8fCBpcy5udWwodmFsdWUpID8gZGVmYXVsdFZhbHVlIDogdmFsdWU7XG59XG5mdW5jdGlvbiB0b0FycmF5KGEpIHtcbiAgcmV0dXJuICFpcy51bmQoYSkgPyBpcy5hcnIoYSkgPyBhIDogW2FdIDogW107XG59XG5mdW5jdGlvbiBjYWxsUHJvcChvYmopIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGlzLmZ1bihvYmopID8gb2JqKC4uLmFyZ3MpIDogb2JqO1xufVxuXG5mdW5jdGlvbiBnZXRGb3J3YXJkUHJvcHMocHJvcHMpIHtcbiAgY29uc3QgdG8gPSBwcm9wcy50byxcbiAgICAgICAgZnJvbSA9IHByb3BzLmZyb20sXG4gICAgICAgIGNvbmZpZyA9IHByb3BzLmNvbmZpZyxcbiAgICAgICAgb25TdGFydCA9IHByb3BzLm9uU3RhcnQsXG4gICAgICAgIG9uUmVzdCA9IHByb3BzLm9uUmVzdCxcbiAgICAgICAgb25GcmFtZSA9IHByb3BzLm9uRnJhbWUsXG4gICAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIHJlc2V0ID0gcHJvcHMucmVzZXQsXG4gICAgICAgIHJldmVyc2UgPSBwcm9wcy5yZXZlcnNlLFxuICAgICAgICBmb3JjZSA9IHByb3BzLmZvcmNlLFxuICAgICAgICBpbW1lZGlhdGUgPSBwcm9wcy5pbW1lZGlhdGUsXG4gICAgICAgIGRlbGF5ID0gcHJvcHMuZGVsYXksXG4gICAgICAgIGF0dGFjaCA9IHByb3BzLmF0dGFjaCxcbiAgICAgICAgZGVzdHJveWVkID0gcHJvcHMuZGVzdHJveWVkLFxuICAgICAgICBpbnRlcnBvbGF0ZVRvID0gcHJvcHMuaW50ZXJwb2xhdGVUbyxcbiAgICAgICAgcmVmID0gcHJvcHMucmVmLFxuICAgICAgICBsYXp5ID0gcHJvcHMubGF6eSxcbiAgICAgICAgZm9yd2FyZCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBbXCJ0b1wiLCBcImZyb21cIiwgXCJjb25maWdcIiwgXCJvblN0YXJ0XCIsIFwib25SZXN0XCIsIFwib25GcmFtZVwiLCBcImNoaWxkcmVuXCIsIFwicmVzZXRcIiwgXCJyZXZlcnNlXCIsIFwiZm9yY2VcIiwgXCJpbW1lZGlhdGVcIiwgXCJkZWxheVwiLCBcImF0dGFjaFwiLCBcImRlc3Ryb3llZFwiLCBcImludGVycG9sYXRlVG9cIiwgXCJyZWZcIiwgXCJsYXp5XCJdKTtcblxuICByZXR1cm4gZm9yd2FyZDtcbn1cblxuZnVuY3Rpb24gaW50ZXJwb2xhdGVUbyhwcm9wcykge1xuICBjb25zdCBmb3J3YXJkID0gZ2V0Rm9yd2FyZFByb3BzKHByb3BzKTtcbiAgaWYgKGlzLnVuZChmb3J3YXJkKSkgcmV0dXJuIF9leHRlbmRzKHtcbiAgICB0bzogZm9yd2FyZFxuICB9LCBwcm9wcyk7XG4gIGNvbnN0IHJlc3QgPSBPYmplY3Qua2V5cyhwcm9wcykucmVkdWNlKChhLCBrKSA9PiAhaXMudW5kKGZvcndhcmRba10pID8gYSA6IF9leHRlbmRzKHt9LCBhLCB7XG4gICAgW2tdOiBwcm9wc1trXVxuICB9KSwge30pO1xuICByZXR1cm4gX2V4dGVuZHMoe1xuICAgIHRvOiBmb3J3YXJkXG4gIH0sIHJlc3QpO1xufVxuZnVuY3Rpb24gaGFuZGxlUmVmKHJlZiwgZm9yd2FyZCkge1xuICBpZiAoZm9yd2FyZCkge1xuICAgIC8vIElmIGl0J3MgYSBmdW5jdGlvbiwgYXNzdW1lIGl0J3MgYSByZWYgY2FsbGJhY2tcbiAgICBpZiAoaXMuZnVuKGZvcndhcmQpKSBmb3J3YXJkKHJlZik7ZWxzZSBpZiAoaXMub2JqKGZvcndhcmQpKSB7XG4gICAgICBmb3J3YXJkLmN1cnJlbnQgPSByZWY7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlZjtcbn1cblxuY2xhc3MgQW5pbWF0ZWQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBheWxvYWQgPSB2b2lkIDA7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICB9XG5cbiAgZ2V0QW5pbWF0ZWRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZSgpO1xuICB9XG5cbiAgZ2V0UGF5bG9hZCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXlsb2FkIHx8IHRoaXM7XG4gIH1cblxuICBhdHRhY2goKSB7fVxuXG4gIGRldGFjaCgpIHt9XG5cbiAgZ2V0Q2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW47XG4gIH1cblxuICBhZGRDaGlsZChjaGlsZCkge1xuICAgIGlmICh0aGlzLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkgdGhpcy5hdHRhY2goKTtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICB9XG5cbiAgcmVtb3ZlQ2hpbGQoY2hpbGQpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuY2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XG4gICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGlmICh0aGlzLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkgdGhpcy5kZXRhY2goKTtcbiAgfVxuXG59XG5jbGFzcyBBbmltYXRlZEFycmF5IGV4dGVuZHMgQW5pbWF0ZWQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIHRoaXMucGF5bG9hZCA9IFtdO1xuXG4gICAgdGhpcy5hdHRhY2ggPSAoKSA9PiB0aGlzLnBheWxvYWQuZm9yRWFjaChwID0+IHAgaW5zdGFuY2VvZiBBbmltYXRlZCAmJiBwLmFkZENoaWxkKHRoaXMpKTtcblxuICAgIHRoaXMuZGV0YWNoID0gKCkgPT4gdGhpcy5wYXlsb2FkLmZvckVhY2gocCA9PiBwIGluc3RhbmNlb2YgQW5pbWF0ZWQgJiYgcC5yZW1vdmVDaGlsZCh0aGlzKSk7XG4gIH1cblxufVxuY2xhc3MgQW5pbWF0ZWRPYmplY3QgZXh0ZW5kcyBBbmltYXRlZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgdGhpcy5wYXlsb2FkID0ge307XG5cbiAgICB0aGlzLmF0dGFjaCA9ICgpID0+IE9iamVjdC52YWx1ZXModGhpcy5wYXlsb2FkKS5mb3JFYWNoKHMgPT4gcyBpbnN0YW5jZW9mIEFuaW1hdGVkICYmIHMuYWRkQ2hpbGQodGhpcykpO1xuXG4gICAgdGhpcy5kZXRhY2ggPSAoKSA9PiBPYmplY3QudmFsdWVzKHRoaXMucGF5bG9hZCkuZm9yRWFjaChzID0+IHMgaW5zdGFuY2VvZiBBbmltYXRlZCAmJiBzLnJlbW92ZUNoaWxkKHRoaXMpKTtcbiAgfVxuXG4gIGdldFZhbHVlKGFuaW1hdGVkKSB7XG4gICAgaWYgKGFuaW1hdGVkID09PSB2b2lkIDApIHtcbiAgICAgIGFuaW1hdGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgcGF5bG9hZCA9IHt9O1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5wYXlsb2FkKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucGF5bG9hZFtrZXldO1xuICAgICAgaWYgKGFuaW1hdGVkICYmICEodmFsdWUgaW5zdGFuY2VvZiBBbmltYXRlZCkpIGNvbnRpbnVlO1xuICAgICAgcGF5bG9hZFtrZXldID0gdmFsdWUgaW5zdGFuY2VvZiBBbmltYXRlZCA/IHZhbHVlW2FuaW1hdGVkID8gJ2dldEFuaW1hdGVkVmFsdWUnIDogJ2dldFZhbHVlJ10oKSA6IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBwYXlsb2FkO1xuICB9XG5cbiAgZ2V0QW5pbWF0ZWRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZSh0cnVlKTtcbiAgfVxuXG59XG5cbmxldCBhcHBseUFuaW1hdGVkVmFsdWVzO1xuZnVuY3Rpb24gaW5qZWN0QXBwbHlBbmltYXRlZFZhbHVlcyhmbiwgdHJhbnNmb3JtKSB7XG4gIGFwcGx5QW5pbWF0ZWRWYWx1ZXMgPSB7XG4gICAgZm4sXG4gICAgdHJhbnNmb3JtXG4gIH07XG59XG5sZXQgY29sb3JOYW1lcztcbmZ1bmN0aW9uIGluamVjdENvbG9yTmFtZXMobmFtZXMpIHtcbiAgY29sb3JOYW1lcyA9IG5hbWVzO1xufVxubGV0IHJlcXVlc3RGcmFtZSA9IGNiID0+IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShjYikgOiAtMTtcbmxldCBjYW5jZWxGcmFtZSA9IGlkID0+IHtcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGlkKTtcbn07XG5mdW5jdGlvbiBpbmplY3RGcmFtZShyYWYsIGNhZikge1xuICByZXF1ZXN0RnJhbWUgPSByYWY7XG4gIGNhbmNlbEZyYW1lID0gY2FmO1xufVxubGV0IGludGVycG9sYXRpb247XG5mdW5jdGlvbiBpbmplY3RTdHJpbmdJbnRlcnBvbGF0b3IoZm4pIHtcbiAgaW50ZXJwb2xhdGlvbiA9IGZuO1xufVxubGV0IG5vdyA9ICgpID0+IERhdGUubm93KCk7XG5mdW5jdGlvbiBpbmplY3ROb3cobm93Rm4pIHtcbiAgbm93ID0gbm93Rm47XG59XG5sZXQgZGVmYXVsdEVsZW1lbnQ7XG5mdW5jdGlvbiBpbmplY3REZWZhdWx0RWxlbWVudChlbCkge1xuICBkZWZhdWx0RWxlbWVudCA9IGVsO1xufVxubGV0IGFuaW1hdGVkQXBpID0gbm9kZSA9PiBub2RlLmN1cnJlbnQ7XG5mdW5jdGlvbiBpbmplY3RBbmltYXRlZEFwaShmbikge1xuICBhbmltYXRlZEFwaSA9IGZuO1xufVxubGV0IGNyZWF0ZUFuaW1hdGVkU3R5bGU7XG5mdW5jdGlvbiBpbmplY3RDcmVhdGVBbmltYXRlZFN0eWxlKGZhY3RvcnkpIHtcbiAgY3JlYXRlQW5pbWF0ZWRTdHlsZSA9IGZhY3Rvcnk7XG59XG5sZXQgbWFudWFsRnJhbWVsb29wO1xuZnVuY3Rpb24gaW5qZWN0TWFudWFsRnJhbWVsb29wKGNhbGxiYWNrKSB7XG4gIG1hbnVhbEZyYW1lbG9vcCA9IGNhbGxiYWNrO1xufVxuXG52YXIgR2xvYmFscyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgZ2V0IGFwcGx5QW5pbWF0ZWRWYWx1ZXMgKCkgeyByZXR1cm4gYXBwbHlBbmltYXRlZFZhbHVlczsgfSxcbiAgaW5qZWN0QXBwbHlBbmltYXRlZFZhbHVlczogaW5qZWN0QXBwbHlBbmltYXRlZFZhbHVlcyxcbiAgZ2V0IGNvbG9yTmFtZXMgKCkgeyByZXR1cm4gY29sb3JOYW1lczsgfSxcbiAgaW5qZWN0Q29sb3JOYW1lczogaW5qZWN0Q29sb3JOYW1lcyxcbiAgZ2V0IHJlcXVlc3RGcmFtZSAoKSB7IHJldHVybiByZXF1ZXN0RnJhbWU7IH0sXG4gIGdldCBjYW5jZWxGcmFtZSAoKSB7IHJldHVybiBjYW5jZWxGcmFtZTsgfSxcbiAgaW5qZWN0RnJhbWU6IGluamVjdEZyYW1lLFxuICBnZXQgaW50ZXJwb2xhdGlvbiAoKSB7IHJldHVybiBpbnRlcnBvbGF0aW9uOyB9LFxuICBpbmplY3RTdHJpbmdJbnRlcnBvbGF0b3I6IGluamVjdFN0cmluZ0ludGVycG9sYXRvcixcbiAgZ2V0IG5vdyAoKSB7IHJldHVybiBub3c7IH0sXG4gIGluamVjdE5vdzogaW5qZWN0Tm93LFxuICBnZXQgZGVmYXVsdEVsZW1lbnQgKCkgeyByZXR1cm4gZGVmYXVsdEVsZW1lbnQ7IH0sXG4gIGluamVjdERlZmF1bHRFbGVtZW50OiBpbmplY3REZWZhdWx0RWxlbWVudCxcbiAgZ2V0IGFuaW1hdGVkQXBpICgpIHsgcmV0dXJuIGFuaW1hdGVkQXBpOyB9LFxuICBpbmplY3RBbmltYXRlZEFwaTogaW5qZWN0QW5pbWF0ZWRBcGksXG4gIGdldCBjcmVhdGVBbmltYXRlZFN0eWxlICgpIHsgcmV0dXJuIGNyZWF0ZUFuaW1hdGVkU3R5bGU7IH0sXG4gIGluamVjdENyZWF0ZUFuaW1hdGVkU3R5bGU6IGluamVjdENyZWF0ZUFuaW1hdGVkU3R5bGUsXG4gIGdldCBtYW51YWxGcmFtZWxvb3AgKCkgeyByZXR1cm4gbWFudWFsRnJhbWVsb29wOyB9LFxuICBpbmplY3RNYW51YWxGcmFtZWxvb3A6IGluamVjdE1hbnVhbEZyYW1lbG9vcFxufSk7XG5cbi8qKlxuICogV3JhcHMgdGhlIGBzdHlsZWAgcHJvcGVydHkgd2l0aCBgQW5pbWF0ZWRTdHlsZWAuXG4gKi9cblxuY2xhc3MgQW5pbWF0ZWRQcm9wcyBleHRlbmRzIEFuaW1hdGVkT2JqZWN0IHtcbiAgY29uc3RydWN0b3IocHJvcHMsIGNhbGxiYWNrKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnVwZGF0ZSA9IHZvaWQgMDtcbiAgICB0aGlzLnBheWxvYWQgPSAhcHJvcHMuc3R5bGUgPyBwcm9wcyA6IF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgc3R5bGU6IGNyZWF0ZUFuaW1hdGVkU3R5bGUocHJvcHMuc3R5bGUpXG4gICAgfSk7XG4gICAgdGhpcy51cGRhdGUgPSBjYWxsYmFjaztcbiAgICB0aGlzLmF0dGFjaCgpO1xuICB9XG5cbn1cblxuY29uc3QgaXNGdW5jdGlvbkNvbXBvbmVudCA9IHZhbCA9PiBpcy5mdW4odmFsKSAmJiAhKHZhbC5wcm90b3R5cGUgaW5zdGFuY2VvZiBSZWFjdC5Db21wb25lbnQpO1xuXG5jb25zdCBjcmVhdGVBbmltYXRlZENvbXBvbmVudCA9IENvbXBvbmVudCA9PiB7XG4gIGNvbnN0IEFuaW1hdGVkQ29tcG9uZW50ID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIGNvbnN0IGZvcmNlVXBkYXRlID0gdXNlRm9yY2VVcGRhdGUoKTtcbiAgICBjb25zdCBtb3VudGVkID0gdXNlUmVmKHRydWUpO1xuICAgIGNvbnN0IHByb3BzQW5pbWF0ZWQgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3Qgbm9kZSA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBhdHRhY2hQcm9wcyA9IHVzZUNhbGxiYWNrKHByb3BzID0+IHtcbiAgICAgIGNvbnN0IG9sZFByb3BzQW5pbWF0ZWQgPSBwcm9wc0FuaW1hdGVkLmN1cnJlbnQ7XG5cbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICBsZXQgZGlkVXBkYXRlID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKG5vZGUuY3VycmVudCkge1xuICAgICAgICAgIGRpZFVwZGF0ZSA9IGFwcGx5QW5pbWF0ZWRWYWx1ZXMuZm4obm9kZS5jdXJyZW50LCBwcm9wc0FuaW1hdGVkLmN1cnJlbnQuZ2V0QW5pbWF0ZWRWYWx1ZSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbm9kZS5jdXJyZW50IHx8IGRpZFVwZGF0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAvLyBJZiBubyByZWZlcmVuY2VkIG5vZGUgaGFzIGJlZW4gZm91bmQsIG9yIHRoZSB1cGRhdGUgdGFyZ2V0IGRpZG4ndCBoYXZlIGFcbiAgICAgICAgICAvLyBuYXRpdmUtcmVzcG9uZGVyLCB0aGVuIGZvcmNlVXBkYXRlIHRoZSBhbmltYXRpb24gLi4uXG4gICAgICAgICAgZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcHJvcHNBbmltYXRlZC5jdXJyZW50ID0gbmV3IEFuaW1hdGVkUHJvcHMocHJvcHMsIGNhbGxiYWNrKTtcbiAgICAgIG9sZFByb3BzQW5pbWF0ZWQgJiYgb2xkUHJvcHNBbmltYXRlZC5kZXRhY2goKTtcbiAgICB9LCBbXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+ICgpID0+IHtcbiAgICAgIG1vdW50ZWQuY3VycmVudCA9IGZhbHNlO1xuICAgICAgcHJvcHNBbmltYXRlZC5jdXJyZW50ICYmIHByb3BzQW5pbWF0ZWQuY3VycmVudC5kZXRhY2goKTtcbiAgICB9LCBbXSk7XG4gICAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+IGFuaW1hdGVkQXBpKG5vZGUsIG1vdW50ZWQsIGZvcmNlVXBkYXRlKSk7XG4gICAgYXR0YWNoUHJvcHMocHJvcHMpO1xuXG4gICAgY29uc3QgX2dldFZhbHVlID0gcHJvcHNBbmltYXRlZC5jdXJyZW50LmdldFZhbHVlKCksXG4gICAgICAgICAgc2Nyb2xsVG9wID0gX2dldFZhbHVlLnNjcm9sbFRvcCxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gX2dldFZhbHVlLnNjcm9sbExlZnQsXG4gICAgICAgICAgYW5pbWF0ZWRQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9nZXRWYWx1ZSwgW1wic2Nyb2xsVG9wXCIsIFwic2Nyb2xsTGVmdFwiXSk7IC8vIEZ1bmN0aW9ucyBjYW5ub3QgaGF2ZSByZWZzLCBzZWU6XG4gICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Qtc3ByaW5nL3JlYWN0LXNwcmluZy9pc3N1ZXMvNTY5XG5cblxuICAgIGNvbnN0IHJlZkZuID0gaXNGdW5jdGlvbkNvbXBvbmVudChDb21wb25lbnQpID8gdW5kZWZpbmVkIDogY2hpbGRSZWYgPT4gbm9kZS5jdXJyZW50ID0gaGFuZGxlUmVmKGNoaWxkUmVmLCByZWYpO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe30sIGFuaW1hdGVkUHJvcHMsIHtcbiAgICAgIHJlZjogcmVmRm5cbiAgICB9KSk7XG4gIH0pO1xuICByZXR1cm4gQW5pbWF0ZWRDb21wb25lbnQ7XG59O1xuXG5sZXQgYWN0aXZlID0gZmFsc2U7XG5jb25zdCBjb250cm9sbGVycyA9IG5ldyBTZXQoKTtcblxuY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICBpZiAoIWFjdGl2ZSkgcmV0dXJuIGZhbHNlO1xuICBsZXQgdGltZSA9IG5vdygpO1xuXG4gIGZvciAobGV0IGNvbnRyb2xsZXIgb2YgY29udHJvbGxlcnMpIHtcbiAgICBsZXQgaXNBY3RpdmUgPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGNvbmZpZ0lkeCA9IDA7IGNvbmZpZ0lkeCA8IGNvbnRyb2xsZXIuY29uZmlncy5sZW5ndGg7IGNvbmZpZ0lkeCsrKSB7XG4gICAgICBsZXQgY29uZmlnID0gY29udHJvbGxlci5jb25maWdzW2NvbmZpZ0lkeF07XG4gICAgICBsZXQgZW5kT2ZBbmltYXRpb24sIGxhc3RUaW1lO1xuXG4gICAgICBmb3IgKGxldCB2YWxJZHggPSAwOyB2YWxJZHggPCBjb25maWcuYW5pbWF0ZWRWYWx1ZXMubGVuZ3RoOyB2YWxJZHgrKykge1xuICAgICAgICBsZXQgYW5pbWF0aW9uID0gY29uZmlnLmFuaW1hdGVkVmFsdWVzW3ZhbElkeF07IC8vIElmIGFuIGFuaW1hdGlvbiBpcyBkb25lLCBza2lwLCB1bnRpbCBhbGwgb2YgdGhlbSBjb25jbHVkZVxuXG4gICAgICAgIGlmIChhbmltYXRpb24uZG9uZSkgY29udGludWU7XG4gICAgICAgIGxldCBmcm9tID0gY29uZmlnLmZyb21WYWx1ZXNbdmFsSWR4XTtcbiAgICAgICAgbGV0IHRvID0gY29uZmlnLnRvVmFsdWVzW3ZhbElkeF07XG4gICAgICAgIGxldCBwb3NpdGlvbiA9IGFuaW1hdGlvbi5sYXN0UG9zaXRpb247XG4gICAgICAgIGxldCBpc0FuaW1hdGVkID0gdG8gaW5zdGFuY2VvZiBBbmltYXRlZDtcbiAgICAgICAgbGV0IHZlbG9jaXR5ID0gQXJyYXkuaXNBcnJheShjb25maWcuaW5pdGlhbFZlbG9jaXR5KSA/IGNvbmZpZy5pbml0aWFsVmVsb2NpdHlbdmFsSWR4XSA6IGNvbmZpZy5pbml0aWFsVmVsb2NpdHk7XG4gICAgICAgIGlmIChpc0FuaW1hdGVkKSB0byA9IHRvLmdldFZhbHVlKCk7IC8vIENvbmNsdWRlIGFuaW1hdGlvbiBpZiBpdCdzIGVpdGhlciBpbW1lZGlhdGUsIG9yIGZyb20tdmFsdWVzIG1hdGNoIGVuZC1zdGF0ZVxuXG4gICAgICAgIGlmIChjb25maWcuaW1tZWRpYXRlKSB7XG4gICAgICAgICAgYW5pbWF0aW9uLnNldFZhbHVlKHRvKTtcbiAgICAgICAgICBhbmltYXRpb24uZG9uZSA9IHRydWU7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gLy8gQnJlYWsgYW5pbWF0aW9uIHdoZW4gc3RyaW5nIHZhbHVlcyBhcmUgaW52b2x2ZWRcblxuXG4gICAgICAgIGlmICh0eXBlb2YgZnJvbSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHRvID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGFuaW1hdGlvbi5zZXRWYWx1ZSh0byk7XG4gICAgICAgICAgYW5pbWF0aW9uLmRvbmUgPSB0cnVlO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5kdXJhdGlvbiAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgLyoqIER1cmF0aW9uIGVhc2luZyAqL1xuICAgICAgICAgIHBvc2l0aW9uID0gZnJvbSArIGNvbmZpZy5lYXNpbmcoKHRpbWUgLSBhbmltYXRpb24uc3RhcnRUaW1lKSAvIGNvbmZpZy5kdXJhdGlvbikgKiAodG8gLSBmcm9tKTtcbiAgICAgICAgICBlbmRPZkFuaW1hdGlvbiA9IHRpbWUgPj0gYW5pbWF0aW9uLnN0YXJ0VGltZSArIGNvbmZpZy5kdXJhdGlvbjtcbiAgICAgICAgfSBlbHNlIGlmIChjb25maWcuZGVjYXkpIHtcbiAgICAgICAgICAvKiogRGVjYXkgZWFzaW5nICovXG4gICAgICAgICAgcG9zaXRpb24gPSBmcm9tICsgdmVsb2NpdHkgLyAoMSAtIDAuOTk4KSAqICgxIC0gTWF0aC5leHAoLSgxIC0gMC45OTgpICogKHRpbWUgLSBhbmltYXRpb24uc3RhcnRUaW1lKSkpO1xuICAgICAgICAgIGVuZE9mQW5pbWF0aW9uID0gTWF0aC5hYnMoYW5pbWF0aW9uLmxhc3RQb3NpdGlvbiAtIHBvc2l0aW9uKSA8IDAuMTtcbiAgICAgICAgICBpZiAoZW5kT2ZBbmltYXRpb24pIHRvID0gcG9zaXRpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLyoqIFNwcmluZyBlYXNpbmcgKi9cbiAgICAgICAgICBsYXN0VGltZSA9IGFuaW1hdGlvbi5sYXN0VGltZSAhPT0gdm9pZCAwID8gYW5pbWF0aW9uLmxhc3RUaW1lIDogdGltZTtcbiAgICAgICAgICB2ZWxvY2l0eSA9IGFuaW1hdGlvbi5sYXN0VmVsb2NpdHkgIT09IHZvaWQgMCA/IGFuaW1hdGlvbi5sYXN0VmVsb2NpdHkgOiBjb25maWcuaW5pdGlhbFZlbG9jaXR5OyAvLyBJZiB3ZSBsb3N0IGEgbG90IG9mIGZyYW1lcyBqdXN0IGp1bXAgdG8gdGhlIGVuZC5cblxuICAgICAgICAgIGlmICh0aW1lID4gbGFzdFRpbWUgKyA2NCkgbGFzdFRpbWUgPSB0aW1lOyAvLyBodHRwOi8vZ2FmZmVyb25nYW1lcy5jb20vZ2FtZS1waHlzaWNzL2ZpeC15b3VyLXRpbWVzdGVwL1xuXG4gICAgICAgICAgbGV0IG51bVN0ZXBzID0gTWF0aC5mbG9vcih0aW1lIC0gbGFzdFRpbWUpO1xuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1TdGVwczsgKytpKSB7XG4gICAgICAgICAgICBsZXQgZm9yY2UgPSAtY29uZmlnLnRlbnNpb24gKiAocG9zaXRpb24gLSB0byk7XG4gICAgICAgICAgICBsZXQgZGFtcGluZyA9IC1jb25maWcuZnJpY3Rpb24gKiB2ZWxvY2l0eTtcbiAgICAgICAgICAgIGxldCBhY2NlbGVyYXRpb24gPSAoZm9yY2UgKyBkYW1waW5nKSAvIGNvbmZpZy5tYXNzO1xuICAgICAgICAgICAgdmVsb2NpdHkgPSB2ZWxvY2l0eSArIGFjY2VsZXJhdGlvbiAqIDEgLyAxMDAwO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbiArIHZlbG9jaXR5ICogMSAvIDEwMDA7XG4gICAgICAgICAgfSAvLyBDb25kaXRpb25zIGZvciBzdG9wcGluZyB0aGUgc3ByaW5nIGFuaW1hdGlvblxuXG5cbiAgICAgICAgICBsZXQgaXNPdmVyc2hvb3RpbmcgPSBjb25maWcuY2xhbXAgJiYgY29uZmlnLnRlbnNpb24gIT09IDAgPyBmcm9tIDwgdG8gPyBwb3NpdGlvbiA+IHRvIDogcG9zaXRpb24gPCB0byA6IGZhbHNlO1xuICAgICAgICAgIGxldCBpc1ZlbG9jaXR5ID0gTWF0aC5hYnModmVsb2NpdHkpIDw9IGNvbmZpZy5wcmVjaXNpb247XG4gICAgICAgICAgbGV0IGlzRGlzcGxhY2VtZW50ID0gY29uZmlnLnRlbnNpb24gIT09IDAgPyBNYXRoLmFicyh0byAtIHBvc2l0aW9uKSA8PSBjb25maWcucHJlY2lzaW9uIDogdHJ1ZTtcbiAgICAgICAgICBlbmRPZkFuaW1hdGlvbiA9IGlzT3ZlcnNob290aW5nIHx8IGlzVmVsb2NpdHkgJiYgaXNEaXNwbGFjZW1lbnQ7XG4gICAgICAgICAgYW5pbWF0aW9uLmxhc3RWZWxvY2l0eSA9IHZlbG9jaXR5O1xuICAgICAgICAgIGFuaW1hdGlvbi5sYXN0VGltZSA9IHRpbWU7XG4gICAgICAgIH0gLy8gVHJhaWxzIGFyZW4ndCBkb25lIHVudGlsIHRoZWlyIHBhcmVudHMgY29uY2x1ZGVcblxuXG4gICAgICAgIGlmIChpc0FuaW1hdGVkICYmICFjb25maWcudG9WYWx1ZXNbdmFsSWR4XS5kb25lKSBlbmRPZkFuaW1hdGlvbiA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChlbmRPZkFuaW1hdGlvbikge1xuICAgICAgICAgIC8vIEVuc3VyZSB0aGF0IHdlIGVuZCB1cCB3aXRoIGEgcm91bmQgdmFsdWVcbiAgICAgICAgICBpZiAoYW5pbWF0aW9uLnZhbHVlICE9PSB0bykgcG9zaXRpb24gPSB0bztcbiAgICAgICAgICBhbmltYXRpb24uZG9uZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpc0FjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgYW5pbWF0aW9uLnNldFZhbHVlKHBvc2l0aW9uKTtcbiAgICAgICAgYW5pbWF0aW9uLmxhc3RQb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgfSAvLyBLZWVwIHRyYWNrIG9mIHVwZGF0ZWQgdmFsdWVzIG9ubHkgd2hlbiBuZWNlc3NhcnlcblxuXG4gICAgICBpZiAoY29udHJvbGxlci5wcm9wcy5vbkZyYW1lKSBjb250cm9sbGVyLnZhbHVlc1tjb25maWcubmFtZV0gPSBjb25maWcuaW50ZXJwb2xhdGlvbi5nZXRWYWx1ZSgpO1xuICAgIH0gLy8gVXBkYXRlIGNhbGxiYWNrcyBpbiB0aGUgZW5kIG9mIHRoZSBmcmFtZVxuXG5cbiAgICBpZiAoY29udHJvbGxlci5wcm9wcy5vbkZyYW1lKSBjb250cm9sbGVyLnByb3BzLm9uRnJhbWUoY29udHJvbGxlci52YWx1ZXMpOyAvLyBFaXRoZXIgY2FsbCBvbkVuZCBvciBuZXh0IGZyYW1lXG5cbiAgICBpZiAoIWlzQWN0aXZlKSB7XG4gICAgICBjb250cm9sbGVycy5kZWxldGUoY29udHJvbGxlcik7XG4gICAgICBjb250cm9sbGVyLnN0b3AodHJ1ZSk7XG4gICAgfVxuICB9IC8vIExvb3Agb3ZlciBhcyBsb25nIGFzIHRoZXJlIGFyZSBjb250cm9sbGVycyAuLi5cblxuXG4gIGlmIChjb250cm9sbGVycy5zaXplKSB7XG4gICAgaWYgKG1hbnVhbEZyYW1lbG9vcCkgbWFudWFsRnJhbWVsb29wKCk7ZWxzZSByZXF1ZXN0RnJhbWUodXBkYXRlKTtcbiAgfSBlbHNlIHtcbiAgICBhY3RpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBhY3RpdmU7XG59O1xuXG5jb25zdCBzdGFydCA9IGNvbnRyb2xsZXIgPT4ge1xuICBpZiAoIWNvbnRyb2xsZXJzLmhhcyhjb250cm9sbGVyKSkgY29udHJvbGxlcnMuYWRkKGNvbnRyb2xsZXIpO1xuXG4gIGlmICghYWN0aXZlKSB7XG4gICAgYWN0aXZlID0gdHJ1ZTtcbiAgICBpZiAobWFudWFsRnJhbWVsb29wKSByZXF1ZXN0RnJhbWUobWFudWFsRnJhbWVsb29wKTtlbHNlIHJlcXVlc3RGcmFtZSh1cGRhdGUpO1xuICB9XG59O1xuXG5jb25zdCBzdG9wID0gY29udHJvbGxlciA9PiB7XG4gIGlmIChjb250cm9sbGVycy5oYXMoY29udHJvbGxlcikpIGNvbnRyb2xsZXJzLmRlbGV0ZShjb250cm9sbGVyKTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUludGVycG9sYXRvcihyYW5nZSwgb3V0cHV0LCBleHRyYXBvbGF0ZSkge1xuICBpZiAodHlwZW9mIHJhbmdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHJhbmdlO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkocmFuZ2UpKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUludGVycG9sYXRvcih7XG4gICAgICByYW5nZSxcbiAgICAgIG91dHB1dDogb3V0cHV0LFxuICAgICAgZXh0cmFwb2xhdGVcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChpbnRlcnBvbGF0aW9uICYmIHR5cGVvZiByYW5nZS5vdXRwdXRbMF0gPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGludGVycG9sYXRpb24ocmFuZ2UpO1xuICB9XG5cbiAgY29uc3QgY29uZmlnID0gcmFuZ2U7XG4gIGNvbnN0IG91dHB1dFJhbmdlID0gY29uZmlnLm91dHB1dDtcbiAgY29uc3QgaW5wdXRSYW5nZSA9IGNvbmZpZy5yYW5nZSB8fCBbMCwgMV07XG4gIGNvbnN0IGV4dHJhcG9sYXRlTGVmdCA9IGNvbmZpZy5leHRyYXBvbGF0ZUxlZnQgfHwgY29uZmlnLmV4dHJhcG9sYXRlIHx8ICdleHRlbmQnO1xuICBjb25zdCBleHRyYXBvbGF0ZVJpZ2h0ID0gY29uZmlnLmV4dHJhcG9sYXRlUmlnaHQgfHwgY29uZmlnLmV4dHJhcG9sYXRlIHx8ICdleHRlbmQnO1xuXG4gIGNvbnN0IGVhc2luZyA9IGNvbmZpZy5lYXNpbmcgfHwgKHQgPT4gdCk7XG5cbiAgcmV0dXJuIGlucHV0ID0+IHtcbiAgICBjb25zdCByYW5nZSA9IGZpbmRSYW5nZShpbnB1dCwgaW5wdXRSYW5nZSk7XG4gICAgcmV0dXJuIGludGVycG9sYXRlKGlucHV0LCBpbnB1dFJhbmdlW3JhbmdlXSwgaW5wdXRSYW5nZVtyYW5nZSArIDFdLCBvdXRwdXRSYW5nZVtyYW5nZV0sIG91dHB1dFJhbmdlW3JhbmdlICsgMV0sIGVhc2luZywgZXh0cmFwb2xhdGVMZWZ0LCBleHRyYXBvbGF0ZVJpZ2h0LCBjb25maWcubWFwKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW50ZXJwb2xhdGUoaW5wdXQsIGlucHV0TWluLCBpbnB1dE1heCwgb3V0cHV0TWluLCBvdXRwdXRNYXgsIGVhc2luZywgZXh0cmFwb2xhdGVMZWZ0LCBleHRyYXBvbGF0ZVJpZ2h0LCBtYXApIHtcbiAgbGV0IHJlc3VsdCA9IG1hcCA/IG1hcChpbnB1dCkgOiBpbnB1dDsgLy8gRXh0cmFwb2xhdGVcblxuICBpZiAocmVzdWx0IDwgaW5wdXRNaW4pIHtcbiAgICBpZiAoZXh0cmFwb2xhdGVMZWZ0ID09PSAnaWRlbnRpdHknKSByZXR1cm4gcmVzdWx0O2Vsc2UgaWYgKGV4dHJhcG9sYXRlTGVmdCA9PT0gJ2NsYW1wJykgcmVzdWx0ID0gaW5wdXRNaW47XG4gIH1cblxuICBpZiAocmVzdWx0ID4gaW5wdXRNYXgpIHtcbiAgICBpZiAoZXh0cmFwb2xhdGVSaWdodCA9PT0gJ2lkZW50aXR5JykgcmV0dXJuIHJlc3VsdDtlbHNlIGlmIChleHRyYXBvbGF0ZVJpZ2h0ID09PSAnY2xhbXAnKSByZXN1bHQgPSBpbnB1dE1heDtcbiAgfVxuXG4gIGlmIChvdXRwdXRNaW4gPT09IG91dHB1dE1heCkgcmV0dXJuIG91dHB1dE1pbjtcbiAgaWYgKGlucHV0TWluID09PSBpbnB1dE1heCkgcmV0dXJuIGlucHV0IDw9IGlucHV0TWluID8gb3V0cHV0TWluIDogb3V0cHV0TWF4OyAvLyBJbnB1dCBSYW5nZVxuXG4gIGlmIChpbnB1dE1pbiA9PT0gLUluZmluaXR5KSByZXN1bHQgPSAtcmVzdWx0O2Vsc2UgaWYgKGlucHV0TWF4ID09PSBJbmZpbml0eSkgcmVzdWx0ID0gcmVzdWx0IC0gaW5wdXRNaW47ZWxzZSByZXN1bHQgPSAocmVzdWx0IC0gaW5wdXRNaW4pIC8gKGlucHV0TWF4IC0gaW5wdXRNaW4pOyAvLyBFYXNpbmdcblxuICByZXN1bHQgPSBlYXNpbmcocmVzdWx0KTsgLy8gT3V0cHV0IFJhbmdlXG5cbiAgaWYgKG91dHB1dE1pbiA9PT0gLUluZmluaXR5KSByZXN1bHQgPSAtcmVzdWx0O2Vsc2UgaWYgKG91dHB1dE1heCA9PT0gSW5maW5pdHkpIHJlc3VsdCA9IHJlc3VsdCArIG91dHB1dE1pbjtlbHNlIHJlc3VsdCA9IHJlc3VsdCAqIChvdXRwdXRNYXggLSBvdXRwdXRNaW4pICsgb3V0cHV0TWluO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBmaW5kUmFuZ2UoaW5wdXQsIGlucHV0UmFuZ2UpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBpbnB1dFJhbmdlLmxlbmd0aCAtIDE7ICsraSkgaWYgKGlucHV0UmFuZ2VbaV0gPj0gaW5wdXQpIGJyZWFrO1xuXG4gIHJldHVybiBpIC0gMTtcbn1cblxuY2xhc3MgQW5pbWF0ZWRJbnRlcnBvbGF0aW9uIGV4dGVuZHMgQW5pbWF0ZWRBcnJheSB7XG4gIGNvbnN0cnVjdG9yKHBhcmVudHMsIHJhbmdlLCBvdXRwdXQsIGV4dHJhcG9sYXRlKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNhbGMgPSB2b2lkIDA7XG4gICAgdGhpcy5wYXlsb2FkID0gcGFyZW50cyBpbnN0YW5jZW9mIEFuaW1hdGVkQXJyYXkgJiYgIShwYXJlbnRzIGluc3RhbmNlb2YgQW5pbWF0ZWRJbnRlcnBvbGF0aW9uKSA/IHBhcmVudHMuZ2V0UGF5bG9hZCgpIDogQXJyYXkuaXNBcnJheShwYXJlbnRzKSA/IHBhcmVudHMgOiBbcGFyZW50c107XG4gICAgdGhpcy5jYWxjID0gY3JlYXRlSW50ZXJwb2xhdG9yKHJhbmdlLCBvdXRwdXQsIGV4dHJhcG9sYXRlKTtcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmNhbGMoLi4udGhpcy5wYXlsb2FkLm1hcCh2YWx1ZSA9PiB2YWx1ZS5nZXRWYWx1ZSgpKSk7XG4gIH1cblxuICB1cGRhdGVDb25maWcocmFuZ2UsIG91dHB1dCwgZXh0cmFwb2xhdGUpIHtcbiAgICB0aGlzLmNhbGMgPSBjcmVhdGVJbnRlcnBvbGF0b3IocmFuZ2UsIG91dHB1dCwgZXh0cmFwb2xhdGUpO1xuICB9XG5cbiAgaW50ZXJwb2xhdGUocmFuZ2UsIG91dHB1dCwgZXh0cmFwb2xhdGUpIHtcbiAgICByZXR1cm4gbmV3IEFuaW1hdGVkSW50ZXJwb2xhdGlvbih0aGlzLCByYW5nZSwgb3V0cHV0LCBleHRyYXBvbGF0ZSk7XG4gIH1cblxufVxuXG5jb25zdCBpbnRlcnBvbGF0ZSQxID0gKHBhcmVudHMsIHJhbmdlLCBvdXRwdXQpID0+IHBhcmVudHMgJiYgbmV3IEFuaW1hdGVkSW50ZXJwb2xhdGlvbihwYXJlbnRzLCByYW5nZSwgb3V0cHV0KTtcblxuY29uc3QgY29uZmlnID0ge1xuICBkZWZhdWx0OiB7XG4gICAgdGVuc2lvbjogMTcwLFxuICAgIGZyaWN0aW9uOiAyNlxuICB9LFxuICBnZW50bGU6IHtcbiAgICB0ZW5zaW9uOiAxMjAsXG4gICAgZnJpY3Rpb246IDE0XG4gIH0sXG4gIHdvYmJseToge1xuICAgIHRlbnNpb246IDE4MCxcbiAgICBmcmljdGlvbjogMTJcbiAgfSxcbiAgc3RpZmY6IHtcbiAgICB0ZW5zaW9uOiAyMTAsXG4gICAgZnJpY3Rpb246IDIwXG4gIH0sXG4gIHNsb3c6IHtcbiAgICB0ZW5zaW9uOiAyODAsXG4gICAgZnJpY3Rpb246IDYwXG4gIH0sXG4gIG1vbGFzc2VzOiB7XG4gICAgdGVuc2lvbjogMjgwLFxuICAgIGZyaWN0aW9uOiAxMjBcbiAgfVxufTtcblxuLyoqIEFQSVxuICogIHVzZUNoYWluKHJlZmVyZW5jZXMsIHRpbWVTdGVwcywgdGltZUZyYW1lKVxuICovXG5cbmZ1bmN0aW9uIHVzZUNoYWluKHJlZnMsIHRpbWVTdGVwcywgdGltZUZyYW1lKSB7XG4gIGlmICh0aW1lRnJhbWUgPT09IHZvaWQgMCkge1xuICAgIHRpbWVGcmFtZSA9IDEwMDA7XG4gIH1cblxuICBjb25zdCBwcmV2aW91cyA9IHVzZVJlZigpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpcy5lcXUocmVmcywgcHJldmlvdXMuY3VycmVudCkpIHJlZnMuZm9yRWFjaCgoX3JlZikgPT4ge1xuICAgICAgbGV0IGN1cnJlbnQgPSBfcmVmLmN1cnJlbnQ7XG4gICAgICByZXR1cm4gY3VycmVudCAmJiBjdXJyZW50LnN0YXJ0KCk7XG4gICAgfSk7ZWxzZSBpZiAodGltZVN0ZXBzKSB7XG4gICAgICByZWZzLmZvckVhY2goKF9yZWYyLCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgY3VycmVudCA9IF9yZWYyLmN1cnJlbnQ7XG5cbiAgICAgICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgICAgICBjb25zdCBjdHJscyA9IGN1cnJlbnQuY29udHJvbGxlcnM7XG5cbiAgICAgICAgICBpZiAoY3RybHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCB0ID0gdGltZUZyYW1lICogdGltZVN0ZXBzW2luZGV4XTtcbiAgICAgICAgICAgIGN0cmxzLmZvckVhY2goY3RybCA9PiB7XG4gICAgICAgICAgICAgIGN0cmwucXVldWUgPSBjdHJsLnF1ZXVlLm1hcChlID0+IF9leHRlbmRzKHt9LCBlLCB7XG4gICAgICAgICAgICAgICAgZGVsYXk6IGUuZGVsYXkgKyB0XG4gICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgY3RybC5zdGFydCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgcmVmcy5yZWR1Y2UoKHEsIF9yZWYzLCBySSkgPT4ge1xuICAgICAgbGV0IGN1cnJlbnQgPSBfcmVmMy5jdXJyZW50O1xuICAgICAgcmV0dXJuIHEgPSBxLnRoZW4oKCkgPT4gY3VycmVudC5zdGFydCgpKTtcbiAgICB9LCBQcm9taXNlLnJlc29sdmUoKSk7XG4gICAgcHJldmlvdXMuY3VycmVudCA9IHJlZnM7XG4gIH0pO1xufVxuXG4vKipcbiAqIEFuaW1hdGVkIHdvcmtzIGJ5IGJ1aWxkaW5nIGEgZGlyZWN0ZWQgYWN5Y2xpYyBncmFwaCBvZiBkZXBlbmRlbmNpZXNcbiAqIHRyYW5zcGFyZW50bHkgd2hlbiB5b3UgcmVuZGVyIHlvdXIgQW5pbWF0ZWQgY29tcG9uZW50cy5cbiAqXG4gKiAgICAgICAgICAgICAgIG5ldyBBbmltYXRlZC5WYWx1ZSgwKVxuICogICAgIC5pbnRlcnBvbGF0ZSgpICAgICAgICAuaW50ZXJwb2xhdGUoKSAgICBuZXcgQW5pbWF0ZWQuVmFsdWUoMSlcbiAqICAgICAgICAgb3BhY2l0eSAgICAgICAgICAgICAgIHRyYW5zbGF0ZVkgICAgICBzY2FsZVxuICogICAgICAgICAgc3R5bGUgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtXG4gKiAgICAgICAgIFZpZXcjMjM0ICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlldyMxMjNcbiAqXG4gKiBBKSBUb3AgRG93biBwaGFzZVxuICogV2hlbiBhbiBBbmltYXRlZFZhbHVlIGlzIHVwZGF0ZWQsIHdlIHJlY3Vyc2l2ZWx5IGdvIGRvd24gdGhyb3VnaCB0aGlzXG4gKiBncmFwaCBpbiBvcmRlciB0byBmaW5kIGxlYWYgbm9kZXM6IHRoZSB2aWV3cyB0aGF0IHdlIGZsYWcgYXMgbmVlZGluZ1xuICogYW4gdXBkYXRlLlxuICpcbiAqIEIpIEJvdHRvbSBVcCBwaGFzZVxuICogV2hlbiBhIHZpZXcgaXMgZmxhZ2dlZCBhcyBuZWVkaW5nIGFuIHVwZGF0ZSwgd2UgcmVjdXJzaXZlbHkgZ28gYmFjayB1cFxuICogaW4gb3JkZXIgdG8gYnVpbGQgdGhlIG5ldyB2YWx1ZSB0aGF0IGl0IG5lZWRzLiBUaGUgcmVhc29uIHdoeSB3ZSBuZWVkXG4gKiB0aGlzIHR3by1waGFzZXMgcHJvY2VzcyBpcyB0byBkZWFsIHdpdGggY29tcG9zaXRlIHByb3BzIHN1Y2ggYXNcbiAqIHRyYW5zZm9ybSB3aGljaCBjYW4gcmVjZWl2ZSB2YWx1ZXMgZnJvbSBtdWx0aXBsZSBwYXJlbnRzLlxuICovXG5mdW5jdGlvbiBhZGRBbmltYXRlZFN0eWxlcyhub2RlLCBzdHlsZXMpIHtcbiAgaWYgKCd1cGRhdGUnIGluIG5vZGUpIHtcbiAgICBzdHlsZXMuYWRkKG5vZGUpO1xuICB9IGVsc2Uge1xuICAgIG5vZGUuZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKGNoaWxkID0+IGFkZEFuaW1hdGVkU3R5bGVzKGNoaWxkLCBzdHlsZXMpKTtcbiAgfVxufVxuXG5jbGFzcyBBbmltYXRlZFZhbHVlIGV4dGVuZHMgQW5pbWF0ZWQge1xuICBjb25zdHJ1Y3RvcihfdmFsdWUpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBzdXBlcigpO1xuICAgIF90aGlzID0gdGhpcztcbiAgICB0aGlzLmFuaW1hdGVkU3R5bGVzID0gbmV3IFNldCgpO1xuICAgIHRoaXMudmFsdWUgPSB2b2lkIDA7XG4gICAgdGhpcy5zdGFydFBvc2l0aW9uID0gdm9pZCAwO1xuICAgIHRoaXMubGFzdFBvc2l0aW9uID0gdm9pZCAwO1xuICAgIHRoaXMubGFzdFZlbG9jaXR5ID0gdm9pZCAwO1xuICAgIHRoaXMuc3RhcnRUaW1lID0gdm9pZCAwO1xuICAgIHRoaXMubGFzdFRpbWUgPSB2b2lkIDA7XG4gICAgdGhpcy5kb25lID0gZmFsc2U7XG5cbiAgICB0aGlzLnNldFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBmbHVzaCkge1xuICAgICAgaWYgKGZsdXNoID09PSB2b2lkIDApIHtcbiAgICAgICAgZmx1c2ggPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKGZsdXNoKSBfdGhpcy5mbHVzaCgpO1xuICAgIH07XG5cbiAgICB0aGlzLnZhbHVlID0gX3ZhbHVlO1xuICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IF92YWx1ZTtcbiAgICB0aGlzLmxhc3RQb3NpdGlvbiA9IF92YWx1ZTtcbiAgfVxuXG4gIGZsdXNoKCkge1xuICAgIGlmICh0aGlzLmFuaW1hdGVkU3R5bGVzLnNpemUgPT09IDApIHtcbiAgICAgIGFkZEFuaW1hdGVkU3R5bGVzKHRoaXMsIHRoaXMuYW5pbWF0ZWRTdHlsZXMpO1xuICAgIH1cblxuICAgIHRoaXMuYW5pbWF0ZWRTdHlsZXMuZm9yRWFjaChhbmltYXRlZFN0eWxlID0+IGFuaW1hdGVkU3R5bGUudXBkYXRlKCkpO1xuICB9XG5cbiAgY2xlYXJTdHlsZXMoKSB7XG4gICAgdGhpcy5hbmltYXRlZFN0eWxlcy5jbGVhcigpO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICBpbnRlcnBvbGF0ZShyYW5nZSwgb3V0cHV0LCBleHRyYXBvbGF0ZSkge1xuICAgIHJldHVybiBuZXcgQW5pbWF0ZWRJbnRlcnBvbGF0aW9uKHRoaXMsIHJhbmdlLCBvdXRwdXQsIGV4dHJhcG9sYXRlKTtcbiAgfVxuXG59XG5cbmNsYXNzIEFuaW1hdGVkVmFsdWVBcnJheSBleHRlbmRzIEFuaW1hdGVkQXJyYXkge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZXMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGF5bG9hZCA9IHZhbHVlcy5tYXAobiA9PiBuZXcgQW5pbWF0ZWRWYWx1ZShuKSk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSwgZmx1c2gpIHtcbiAgICBpZiAoZmx1c2ggPT09IHZvaWQgMCkge1xuICAgICAgZmx1c2ggPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gdGhpcy5wYXlsb2FkLmxlbmd0aCkge1xuICAgICAgICB2YWx1ZS5mb3JFYWNoKCh2LCBpKSA9PiB0aGlzLnBheWxvYWRbaV0uc2V0VmFsdWUodiwgZmx1c2gpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYXlsb2FkLmZvckVhY2gocCA9PiBwLnNldFZhbHVlKHZhbHVlLCBmbHVzaCkpO1xuICAgIH1cbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnBheWxvYWQubWFwKHYgPT4gdi5nZXRWYWx1ZSgpKTtcbiAgfVxuXG4gIGludGVycG9sYXRlKHJhbmdlLCBvdXRwdXQpIHtcbiAgICByZXR1cm4gbmV3IEFuaW1hdGVkSW50ZXJwb2xhdGlvbih0aGlzLCByYW5nZSwgb3V0cHV0KTtcbiAgfVxuXG59XG5cbmxldCBHID0gMDtcblxuY2xhc3MgQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaWQgPSB2b2lkIDA7XG4gICAgdGhpcy5pZGxlID0gdHJ1ZTtcbiAgICB0aGlzLmhhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICB0aGlzLmd1aWQgPSAwO1xuICAgIHRoaXMubG9jYWwgPSAwO1xuICAgIHRoaXMucHJvcHMgPSB7fTtcbiAgICB0aGlzLm1lcmdlZCA9IHt9O1xuICAgIHRoaXMuYW5pbWF0aW9ucyA9IHt9O1xuICAgIHRoaXMuaW50ZXJwb2xhdGlvbnMgPSB7fTtcbiAgICB0aGlzLnZhbHVlcyA9IHt9O1xuICAgIHRoaXMuY29uZmlncyA9IFtdO1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgdGhpcy5xdWV1ZSA9IFtdO1xuICAgIHRoaXMubG9jYWxRdWV1ZSA9IHZvaWQgMDtcblxuICAgIHRoaXMuZ2V0VmFsdWVzID0gKCkgPT4gdGhpcy5pbnRlcnBvbGF0aW9ucztcblxuICAgIHRoaXMuaWQgPSBHKys7XG4gIH1cbiAgLyoqIHVwZGF0ZShwcm9wcylcbiAgICogIFRoaXMgZnVuY3Rpb24gZmlsdGVycyBpbnB1dCBwcm9wcyBhbmQgY3JlYXRlcyBhbiBhcnJheSBvZiB0YXNrcyB3aGljaCBhcmUgZXhlY3V0ZWQgaW4gLnN0YXJ0KClcbiAgICogIEVhY2ggdGFzayBpcyBhbGxvd2VkIHRvIGNhcnJ5IGEgZGVsYXksIHdoaWNoIG1lYW5zIGl0IGNhbiBleGVjdXRlIGFzbnljaHJvbmVvdXNseSAqL1xuXG5cbiAgdXBkYXRlKGFyZ3MpIHtcbiAgICAvL3RoaXMuX2lkID0gbiArIHRoaXMuaWRcbiAgICBpZiAoIWFyZ3MpIHJldHVybiB0aGlzOyAvLyBFeHRyYWN0IGRlbGF5IGFuZCB0aGUgdG8tcHJvcCBmcm9tIHByb3BzXG5cbiAgICBjb25zdCBfcmVmID0gaW50ZXJwb2xhdGVUbyhhcmdzKSxcbiAgICAgICAgICBfcmVmJGRlbGF5ID0gX3JlZi5kZWxheSxcbiAgICAgICAgICBkZWxheSA9IF9yZWYkZGVsYXkgPT09IHZvaWQgMCA/IDAgOiBfcmVmJGRlbGF5LFxuICAgICAgICAgIHRvID0gX3JlZi50byxcbiAgICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtcImRlbGF5XCIsIFwidG9cIl0pO1xuXG4gICAgaWYgKGlzLmFycih0bykgfHwgaXMuZnVuKHRvKSkge1xuICAgICAgLy8gSWYgY29uZmlnIGlzIGVpdGhlciBhIGZ1bmN0aW9uIG9yIGFuIGFycmF5IHF1ZXVlIGl0IHVwIGFzIGlzXG4gICAgICB0aGlzLnF1ZXVlLnB1c2goX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgIGRlbGF5LFxuICAgICAgICB0b1xuICAgICAgfSkpO1xuICAgIH0gZWxzZSBpZiAodG8pIHtcbiAgICAgIC8vIE90aGVyd2lzZSBnbyB0aHJvdWdoIGVhY2gga2V5IHNpbmNlIGl0IGNvdWxkIGJlIGRlbGF5ZWQgaW5kaXZpZHVhbGx5XG4gICAgICBsZXQgb3BzID0ge307XG4gICAgICBPYmplY3QuZW50cmllcyh0bykuZm9yRWFjaCgoX3JlZjIpID0+IHtcbiAgICAgICAgbGV0IGsgPSBfcmVmMlswXSxcbiAgICAgICAgICAgIHYgPSBfcmVmMlsxXTtcblxuICAgICAgICAvLyBGZXRjaCBkZWxheSBhbmQgY3JlYXRlIGFuIGVudHJ5LCBjb25zaXN0aW5nIG9mIHRoZSB0by1wcm9wcywgdGhlIGRlbGF5LCBhbmQgYmFzaWMgcHJvcHNcbiAgICAgICAgY29uc3QgZW50cnkgPSBfZXh0ZW5kcyh7XG4gICAgICAgICAgdG86IHtcbiAgICAgICAgICAgIFtrXTogdlxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsYXk6IGNhbGxQcm9wKGRlbGF5LCBrKVxuICAgICAgICB9LCBwcm9wcyk7XG5cbiAgICAgICAgY29uc3QgcHJldmlvdXMgPSBvcHNbZW50cnkuZGVsYXldICYmIG9wc1tlbnRyeS5kZWxheV0udG87XG4gICAgICAgIG9wc1tlbnRyeS5kZWxheV0gPSBfZXh0ZW5kcyh7fSwgb3BzW2VudHJ5LmRlbGF5XSwgZW50cnksIHtcbiAgICAgICAgICB0bzogX2V4dGVuZHMoe30sIHByZXZpb3VzLCBlbnRyeS50bylcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMucXVldWUgPSBPYmplY3QudmFsdWVzKG9wcyk7XG4gICAgfSAvLyBTb3J0IHF1ZXVlLCBzbyB0aGF0IGFzeW5jIGNhbGxzIGdvIGxhc3RcblxuXG4gICAgdGhpcy5xdWV1ZSA9IHRoaXMucXVldWUuc29ydCgoYSwgYikgPT4gYS5kZWxheSAtIGIuZGVsYXkpOyAvLyBEaWZmIHRoZSByZWR1Y2VkIHByb3BzIGltbWVkaWF0ZWx5ICh0aGV5J2xsIGNvbnRhaW4gdGhlIGZyb20tcHJvcCBhbmQgc29tZSBjb25maWcpXG5cbiAgICB0aGlzLmRpZmYocHJvcHMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKiBzdGFydChvbkVuZClcbiAgICogIFRoaXMgZnVuY3Rpb24gZWl0aGVyIGV4ZWN1dGVzIGEgcXVldWUsIGlmIHByZXNlbnQsIG9yIHN0YXJ0cyB0aGUgZnJhbWVsb29wLCB3aGljaCBhbmltYXRlcyAqL1xuXG5cbiAgc3RhcnQob25FbmQpIHtcbiAgICAvLyBJZiBhIHF1ZXVlIGlzIHByZXNlbnQgd2UgbXVzdCBleGNlY3V0ZSBpdFxuICAgIGlmICh0aGlzLnF1ZXVlLmxlbmd0aCkge1xuICAgICAgdGhpcy5pZGxlID0gZmFsc2U7IC8vIFVwZGF0ZXMgY2FuIGludGVycnVwdCB0cmFpbGluZyBxdWV1ZXMsIGluIHRoYXQgY2FzZSB3ZSBqdXN0IG1lcmdlIHZhbHVlc1xuXG4gICAgICBpZiAodGhpcy5sb2NhbFF1ZXVlKSB7XG4gICAgICAgIHRoaXMubG9jYWxRdWV1ZS5mb3JFYWNoKChfcmVmMykgPT4ge1xuICAgICAgICAgIGxldCBfcmVmMyRmcm9tID0gX3JlZjMuZnJvbSxcbiAgICAgICAgICAgICAgZnJvbSA9IF9yZWYzJGZyb20gPT09IHZvaWQgMCA/IHt9IDogX3JlZjMkZnJvbSxcbiAgICAgICAgICAgICAgX3JlZjMkdG8gPSBfcmVmMy50byxcbiAgICAgICAgICAgICAgdG8gPSBfcmVmMyR0byA9PT0gdm9pZCAwID8ge30gOiBfcmVmMyR0bztcbiAgICAgICAgICBpZiAoaXMub2JqKGZyb20pKSB0aGlzLm1lcmdlZCA9IF9leHRlbmRzKHt9LCBmcm9tLCB0aGlzLm1lcmdlZCk7XG4gICAgICAgICAgaWYgKGlzLm9iaih0bykpIHRoaXMubWVyZ2VkID0gX2V4dGVuZHMoe30sIHRoaXMubWVyZ2VkLCB0byk7XG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBUaGUgZ3VpZCBoZWxwcyB1cyB0cmFja2luZyBmcmFtZXMsIGEgbmV3IHF1ZXVlIG92ZXIgYW4gb2xkIG9uZSBtZWFucyBhbiBvdmVycmlkZVxuICAgICAgLy8gV2UgZGlzY2FyZCBhc3luYyBjYWxscyBpbiB0aGF0IGNhc2XDjVxuXG5cbiAgICAgIGNvbnN0IGxvY2FsID0gdGhpcy5sb2NhbCA9ICsrdGhpcy5ndWlkO1xuICAgICAgY29uc3QgcXVldWUgPSB0aGlzLmxvY2FsUXVldWUgPSB0aGlzLnF1ZXVlO1xuICAgICAgdGhpcy5xdWV1ZSA9IFtdOyAvLyBHbyB0aHJvdWdoIGVhY2ggZW50cnkgYW5kIGV4ZWN1dGUgaXRcblxuICAgICAgcXVldWUuZm9yRWFjaCgoX3JlZjQsIGluZGV4KSA9PiB7XG4gICAgICAgIGxldCBkZWxheSA9IF9yZWY0LmRlbGF5LFxuICAgICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmNCwgW1wiZGVsYXlcIl0pO1xuXG4gICAgICAgIGNvbnN0IGNiID0gZmluaXNoZWQgPT4ge1xuICAgICAgICAgIGlmIChpbmRleCA9PT0gcXVldWUubGVuZ3RoIC0gMSAmJiBsb2NhbCA9PT0gdGhpcy5ndWlkICYmIGZpbmlzaGVkKSB7XG4gICAgICAgICAgICB0aGlzLmlkbGUgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25SZXN0KSB0aGlzLnByb3BzLm9uUmVzdCh0aGlzLm1lcmdlZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG9uRW5kKSBvbkVuZCgpO1xuICAgICAgICB9OyAvLyBFbnRyaWVzIGNhbiBiZSBkZWxheWVkLCBhbnN5YyBvciBpbW1lZGlhdGVcblxuXG4gICAgICAgIGxldCBhc3luYyA9IGlzLmFycihwcm9wcy50bykgfHwgaXMuZnVuKHByb3BzLnRvKTtcblxuICAgICAgICBpZiAoZGVsYXkpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChsb2NhbCA9PT0gdGhpcy5ndWlkKSB7XG4gICAgICAgICAgICAgIGlmIChhc3luYykgdGhpcy5ydW5Bc3luYyhwcm9wcywgY2IpO2Vsc2UgdGhpcy5kaWZmKHByb3BzKS5zdGFydChjYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICB9IGVsc2UgaWYgKGFzeW5jKSB0aGlzLnJ1bkFzeW5jKHByb3BzLCBjYik7ZWxzZSB0aGlzLmRpZmYocHJvcHMpLnN0YXJ0KGNiKTtcbiAgICAgIH0pO1xuICAgIH0gLy8gT3RoZXJ3aXNlIHdlIGtpY2sgb2YgdGhlIGZyYW1lbG9vcFxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoaXMuZnVuKG9uRW5kKSkgdGhpcy5saXN0ZW5lcnMucHVzaChvbkVuZCk7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uU3RhcnQpIHRoaXMucHJvcHMub25TdGFydCgpO1xuICAgICAgICBzdGFydCh0aGlzKTtcbiAgICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3RvcChmaW5pc2hlZCkge1xuICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2gob25FbmQgPT4gb25FbmQoZmluaXNoZWQpKTtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKiBQYXVzZSBzZXRzIG9uRW5kIGxpc3RlbmVycyBmcmVlLCBidXQgYWxzbyByZW1vdmVzIHRoZSBjb250cm9sbGVyIGZyb20gdGhlIGZyYW1lbG9vcCAqL1xuXG5cbiAgcGF1c2UoZmluaXNoZWQpIHtcbiAgICB0aGlzLnN0b3AodHJ1ZSk7XG4gICAgaWYgKGZpbmlzaGVkKSBzdG9wKHRoaXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcnVuQXN5bmMoX3JlZjUsIG9uRW5kKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGxldCBkZWxheSA9IF9yZWY1LmRlbGF5LFxuICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWY1LCBbXCJkZWxheVwiXSk7XG5cbiAgICBjb25zdCBsb2NhbCA9IHRoaXMubG9jYWw7IC8vIElmIFwidG9cIiBpcyBlaXRoZXIgYSBmdW5jdGlvbiBvciBhbiBhcnJheSBpdCB3aWxsIGJlIHByb2Nlc3NlZCBhc3luYywgdGhlcmVmb3IgXCJ0b1wiIHNob3VsZCBiZSBlbXB0eSByaWdodCBub3dcbiAgICAvLyBJZiB0aGUgdmlldyByZWxpZXMgb24gY2VydGFpbiB2YWx1ZXMgXCJmcm9tXCIgaGFzIHRvIGJlIHByZXNlbnRcblxuICAgIGxldCBxdWV1ZSA9IFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xuXG4gICAgaWYgKGlzLmFycihwcm9wcy50bykpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMudG8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBpO1xuXG4gICAgICAgIGNvbnN0IGZyZXNoID0gX2V4dGVuZHMoe30sIHByb3BzLCBpbnRlcnBvbGF0ZVRvKHByb3BzLnRvW2luZGV4XSkpO1xuXG4gICAgICAgIGlmIChpcy5hcnIoZnJlc2guY29uZmlnKSkgZnJlc2guY29uZmlnID0gZnJlc2guY29uZmlnW2luZGV4XTtcbiAgICAgICAgcXVldWUgPSBxdWV1ZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAvL3RoaXMuc3RvcCgpXG4gICAgICAgICAgaWYgKGxvY2FsID09PSB0aGlzLmd1aWQpIHJldHVybiBuZXcgUHJvbWlzZShyID0+IHRoaXMuZGlmZihmcmVzaCkuc3RhcnQocikpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzLmZ1bihwcm9wcy50bykpIHtcbiAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICBsZXQgbGFzdDtcbiAgICAgIHF1ZXVlID0gcXVldWUudGhlbigoKSA9PiBwcm9wcy50byggLy8gbmV4dChwcm9wcylcbiAgICAgIHAgPT4ge1xuICAgICAgICBjb25zdCBmcmVzaCA9IF9leHRlbmRzKHt9LCBwcm9wcywgaW50ZXJwb2xhdGVUbyhwKSk7XG5cbiAgICAgICAgaWYgKGlzLmFycihmcmVzaC5jb25maWcpKSBmcmVzaC5jb25maWcgPSBmcmVzaC5jb25maWdbaW5kZXhdO1xuICAgICAgICBpbmRleCsrOyAvL3RoaXMuc3RvcCgpXG5cbiAgICAgICAgaWYgKGxvY2FsID09PSB0aGlzLmd1aWQpIHJldHVybiBsYXN0ID0gbmV3IFByb21pc2UociA9PiB0aGlzLmRpZmYoZnJlc2gpLnN0YXJ0KHIpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSwgLy8gY2FuY2VsKClcbiAgICAgIGZ1bmN0aW9uIChmaW5pc2hlZCkge1xuICAgICAgICBpZiAoZmluaXNoZWQgPT09IHZvaWQgMCkge1xuICAgICAgICAgIGZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfdGhpcy5zdG9wKGZpbmlzaGVkKTtcbiAgICAgIH0pLnRoZW4oKCkgPT4gbGFzdCkpO1xuICAgIH1cblxuICAgIHF1ZXVlLnRoZW4ob25FbmQpO1xuICB9XG5cbiAgZGlmZihwcm9wcykge1xuICAgIHRoaXMucHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgcHJvcHMpO1xuICAgIGxldCBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIF90aGlzJHByb3BzJGZyb20gPSBfdGhpcyRwcm9wcy5mcm9tLFxuICAgICAgICBmcm9tID0gX3RoaXMkcHJvcHMkZnJvbSA9PT0gdm9pZCAwID8ge30gOiBfdGhpcyRwcm9wcyRmcm9tLFxuICAgICAgICBfdGhpcyRwcm9wcyR0byA9IF90aGlzJHByb3BzLnRvLFxuICAgICAgICB0byA9IF90aGlzJHByb3BzJHRvID09PSB2b2lkIDAgPyB7fSA6IF90aGlzJHByb3BzJHRvLFxuICAgICAgICBfdGhpcyRwcm9wcyRjb25maWcgPSBfdGhpcyRwcm9wcy5jb25maWcsXG4gICAgICAgIGNvbmZpZyA9IF90aGlzJHByb3BzJGNvbmZpZyA9PT0gdm9pZCAwID8ge30gOiBfdGhpcyRwcm9wcyRjb25maWcsXG4gICAgICAgIHJldmVyc2UgPSBfdGhpcyRwcm9wcy5yZXZlcnNlLFxuICAgICAgICBhdHRhY2ggPSBfdGhpcyRwcm9wcy5hdHRhY2gsXG4gICAgICAgIHJlc2V0ID0gX3RoaXMkcHJvcHMucmVzZXQsXG4gICAgICAgIGltbWVkaWF0ZSA9IF90aGlzJHByb3BzLmltbWVkaWF0ZTsgLy8gUmV2ZXJzZSB2YWx1ZXMgd2hlbiByZXF1ZXN0ZWRcblxuICAgIGlmIChyZXZlcnNlKSB7XG4gICAgICB2YXIgX3JlZjYgPSBbdG8sIGZyb21dO1xuICAgICAgZnJvbSA9IF9yZWY2WzBdO1xuICAgICAgdG8gPSBfcmVmNlsxXTtcbiAgICB9IC8vIFRoaXMgd2lsbCBjb2xsZWN0IGFsbCBwcm9wcyB0aGF0IHdlcmUgZXZlciBzZXQsIHJlc2V0IG1lcmdlZCBwcm9wcyB3aGVuIG5lY2Vzc2FyeVxuXG5cbiAgICB0aGlzLm1lcmdlZCA9IF9leHRlbmRzKHt9LCBmcm9tLCB0aGlzLm1lcmdlZCwgdG8pO1xuICAgIHRoaXMuaGFzQ2hhbmdlZCA9IGZhbHNlOyAvLyBBdHRhY2htZW50IGhhbmRsaW5nLCB0cmFpbGVkIHNwcmluZ3MgY2FuIFwiYXR0YWNoXCIgdGhlbXNlbHZlcyB0byBhIHByZXZpb3VzIHNwcmluZ1xuXG4gICAgbGV0IHRhcmdldCA9IGF0dGFjaCAmJiBhdHRhY2godGhpcyk7IC8vIFJlZHVjZXMgaW5wdXQgeyBuYW1lOiB2YWx1ZSB9IHBhaXJzIGludG8gYW5pbWF0ZWQgdmFsdWVzXG5cbiAgICB0aGlzLmFuaW1hdGlvbnMgPSBPYmplY3QuZW50cmllcyh0aGlzLm1lcmdlZCkucmVkdWNlKChhY2MsIF9yZWY3KSA9PiB7XG4gICAgICBsZXQgbmFtZSA9IF9yZWY3WzBdLFxuICAgICAgICAgIHZhbHVlID0gX3JlZjdbMV07XG4gICAgICAvLyBJc3N1ZSBjYWNoZWQgZW50cmllcywgZXhjZXB0IG9uIHJlc2V0XG4gICAgICBsZXQgZW50cnkgPSBhY2NbbmFtZV0gfHwge307IC8vIEZpZ3VyZSBvdXQgd2hhdCB0aGUgdmFsdWUgaXMgc3VwcG9zZWQgdG8gYmVcblxuICAgICAgY29uc3QgaXNOdW1iZXIgPSBpcy5udW0odmFsdWUpO1xuICAgICAgY29uc3QgaXNTdHJpbmcgPSBpcy5zdHIodmFsdWUpICYmICF2YWx1ZS5zdGFydHNXaXRoKCcjJykgJiYgIS9cXGQvLnRlc3QodmFsdWUpICYmICFjb2xvck5hbWVzW3ZhbHVlXTtcbiAgICAgIGNvbnN0IGlzQXJyYXkgPSBpcy5hcnIodmFsdWUpO1xuICAgICAgY29uc3QgaXNJbnRlcnBvbGF0aW9uID0gIWlzTnVtYmVyICYmICFpc0FycmF5ICYmICFpc1N0cmluZztcbiAgICAgIGxldCBmcm9tVmFsdWUgPSAhaXMudW5kKGZyb21bbmFtZV0pID8gZnJvbVtuYW1lXSA6IHZhbHVlO1xuICAgICAgbGV0IHRvVmFsdWUgPSBpc051bWJlciB8fCBpc0FycmF5ID8gdmFsdWUgOiBpc1N0cmluZyA/IHZhbHVlIDogMTtcbiAgICAgIGxldCB0b0NvbmZpZyA9IGNhbGxQcm9wKGNvbmZpZywgbmFtZSk7XG4gICAgICBpZiAodGFyZ2V0KSB0b1ZhbHVlID0gdGFyZ2V0LmFuaW1hdGlvbnNbbmFtZV0ucGFyZW50O1xuICAgICAgbGV0IHBhcmVudCA9IGVudHJ5LnBhcmVudCxcbiAgICAgICAgICBpbnRlcnBvbGF0aW9uJCQxID0gZW50cnkuaW50ZXJwb2xhdGlvbixcbiAgICAgICAgICB0b1ZhbHVlcyA9IHRvQXJyYXkodGFyZ2V0ID8gdG9WYWx1ZS5nZXRQYXlsb2FkKCkgOiB0b1ZhbHVlKSxcbiAgICAgICAgICBhbmltYXRlZFZhbHVlcztcbiAgICAgIGxldCBuZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKGlzSW50ZXJwb2xhdGlvbikgbmV3VmFsdWUgPSBpbnRlcnBvbGF0aW9uKHtcbiAgICAgICAgcmFuZ2U6IFswLCAxXSxcbiAgICAgICAgb3V0cHV0OiBbdmFsdWUsIHZhbHVlXVxuICAgICAgfSkoMSk7XG4gICAgICBsZXQgY3VycmVudFZhbHVlID0gaW50ZXJwb2xhdGlvbiQkMSAmJiBpbnRlcnBvbGF0aW9uJCQxLmdldFZhbHVlKCk7IC8vIENoYW5nZSBkZXRlY3Rpb24gZmxhZ3NcblxuICAgICAgY29uc3QgaXNGaXJzdCA9IGlzLnVuZChwYXJlbnQpO1xuICAgICAgY29uc3QgaXNBY3RpdmUgPSAhaXNGaXJzdCAmJiBlbnRyeS5hbmltYXRlZFZhbHVlcy5zb21lKHYgPT4gIXYuZG9uZSk7XG4gICAgICBjb25zdCBjdXJyZW50VmFsdWVEaWZmZXJzRnJvbUdvYWwgPSAhaXMuZXF1KG5ld1ZhbHVlLCBjdXJyZW50VmFsdWUpO1xuICAgICAgY29uc3QgaGFzTmV3R29hbCA9ICFpcy5lcXUobmV3VmFsdWUsIGVudHJ5LnByZXZpb3VzKTtcbiAgICAgIGNvbnN0IGhhc05ld0NvbmZpZyA9ICFpcy5lcXUodG9Db25maWcsIGVudHJ5LmNvbmZpZyk7IC8vIENoYW5nZSBhbmltYXRpb24gcHJvcHMgd2hlbiBwcm9wcyBpbmRpY2F0ZSBhIG5ldyBnb2FsIChuZXcgdmFsdWUgZGlmZmVycyBmcm9tIHByZXZpb3VzIG9uZSlcbiAgICAgIC8vIGFuZCBjdXJyZW50IHZhbHVlcyBkaWZmZXIgZnJvbSBpdC4gQ29uZmlnIGNoYW5nZXMgdHJpZ2dlciBhIG5ldyB1cGRhdGUgYXMgd2VsbCAodGhvdWdoIHByb2JhYmx5IHNob3VsZG4ndD8pXG5cbiAgICAgIGlmIChyZXNldCB8fCBoYXNOZXdHb2FsICYmIGN1cnJlbnRWYWx1ZURpZmZlcnNGcm9tR29hbCB8fCBoYXNOZXdDb25maWcpIHtcbiAgICAgICAgLy8gQ29udmVydCByZWd1bGFyIHZhbHVlcyBpbnRvIGFuaW1hdGVkIHZhbHVlcywgQUxXQVlTIHJlLXVzZSBpZiBwb3NzaWJsZVxuICAgICAgICBpZiAoaXNOdW1iZXIgfHwgaXNTdHJpbmcpIHBhcmVudCA9IGludGVycG9sYXRpb24kJDEgPSBlbnRyeS5wYXJlbnQgfHwgbmV3IEFuaW1hdGVkVmFsdWUoZnJvbVZhbHVlKTtlbHNlIGlmIChpc0FycmF5KSBwYXJlbnQgPSBpbnRlcnBvbGF0aW9uJCQxID0gZW50cnkucGFyZW50IHx8IG5ldyBBbmltYXRlZFZhbHVlQXJyYXkoZnJvbVZhbHVlKTtlbHNlIGlmIChpc0ludGVycG9sYXRpb24pIHtcbiAgICAgICAgICBsZXQgcHJldiA9IGVudHJ5LmludGVycG9sYXRpb24gJiYgZW50cnkuaW50ZXJwb2xhdGlvbi5jYWxjKGVudHJ5LnBhcmVudC52YWx1ZSk7XG4gICAgICAgICAgcHJldiA9IHByZXYgIT09IHZvaWQgMCAmJiAhcmVzZXQgPyBwcmV2IDogZnJvbVZhbHVlO1xuXG4gICAgICAgICAgaWYgKGVudHJ5LnBhcmVudCkge1xuICAgICAgICAgICAgcGFyZW50ID0gZW50cnkucGFyZW50O1xuICAgICAgICAgICAgcGFyZW50LnNldFZhbHVlKDAsIGZhbHNlKTtcbiAgICAgICAgICB9IGVsc2UgcGFyZW50ID0gbmV3IEFuaW1hdGVkVmFsdWUoMCk7XG5cbiAgICAgICAgICBjb25zdCByYW5nZSA9IHtcbiAgICAgICAgICAgIG91dHB1dDogW3ByZXYsIHZhbHVlXVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAoZW50cnkuaW50ZXJwb2xhdGlvbikge1xuICAgICAgICAgICAgaW50ZXJwb2xhdGlvbiQkMSA9IGVudHJ5LmludGVycG9sYXRpb247XG4gICAgICAgICAgICBlbnRyeS5pbnRlcnBvbGF0aW9uLnVwZGF0ZUNvbmZpZyhyYW5nZSk7XG4gICAgICAgICAgfSBlbHNlIGludGVycG9sYXRpb24kJDEgPSBwYXJlbnQuaW50ZXJwb2xhdGUocmFuZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHRvVmFsdWVzID0gdG9BcnJheSh0YXJnZXQgPyB0b1ZhbHVlLmdldFBheWxvYWQoKSA6IHRvVmFsdWUpO1xuICAgICAgICBhbmltYXRlZFZhbHVlcyA9IHRvQXJyYXkocGFyZW50LmdldFBheWxvYWQoKSk7XG4gICAgICAgIGlmIChyZXNldCAmJiAhaXNJbnRlcnBvbGF0aW9uKSBwYXJlbnQuc2V0VmFsdWUoZnJvbVZhbHVlLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7IC8vIFJlc2V0IGFuaW1hdGVkIHZhbHVlc1xuXG4gICAgICAgIGFuaW1hdGVkVmFsdWVzLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgIHZhbHVlLnN0YXJ0UG9zaXRpb24gPSB2YWx1ZS52YWx1ZTtcbiAgICAgICAgICB2YWx1ZS5sYXN0UG9zaXRpb24gPSB2YWx1ZS52YWx1ZTtcbiAgICAgICAgICB2YWx1ZS5sYXN0VmVsb2NpdHkgPSBpc0FjdGl2ZSA/IHZhbHVlLmxhc3RWZWxvY2l0eSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICB2YWx1ZS5sYXN0VGltZSA9IGlzQWN0aXZlID8gdmFsdWUubGFzdFRpbWUgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgdmFsdWUuc3RhcnRUaW1lID0gbm93KCk7XG4gICAgICAgICAgdmFsdWUuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHZhbHVlLmFuaW1hdGVkU3R5bGVzLmNsZWFyKCk7XG4gICAgICAgIH0pOyAvLyBTZXQgaW1tZWRpYXRlIHZhbHVlc1xuXG4gICAgICAgIGlmIChjYWxsUHJvcChpbW1lZGlhdGUsIG5hbWUpKSB7XG4gICAgICAgICAgcGFyZW50LnNldFZhbHVlKGlzSW50ZXJwb2xhdGlvbiA/IHRvVmFsdWUgOiB2YWx1ZSwgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBhY2MsIHtcbiAgICAgICAgICBbbmFtZV06IF9leHRlbmRzKHt9LCBlbnRyeSwge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHBhcmVudCxcbiAgICAgICAgICAgIGludGVycG9sYXRpb246IGludGVycG9sYXRpb24kJDEsXG4gICAgICAgICAgICBhbmltYXRlZFZhbHVlcyxcbiAgICAgICAgICAgIHRvVmFsdWVzLFxuICAgICAgICAgICAgcHJldmlvdXM6IG5ld1ZhbHVlLFxuICAgICAgICAgICAgY29uZmlnOiB0b0NvbmZpZyxcbiAgICAgICAgICAgIGZyb21WYWx1ZXM6IHRvQXJyYXkocGFyZW50LmdldFZhbHVlKCkpLFxuICAgICAgICAgICAgaW1tZWRpYXRlOiBjYWxsUHJvcChpbW1lZGlhdGUsIG5hbWUpLFxuICAgICAgICAgICAgaW5pdGlhbFZlbG9jaXR5OiB3aXRoRGVmYXVsdCh0b0NvbmZpZy52ZWxvY2l0eSwgMCksXG4gICAgICAgICAgICBjbGFtcDogd2l0aERlZmF1bHQodG9Db25maWcuY2xhbXAsIGZhbHNlKSxcbiAgICAgICAgICAgIHByZWNpc2lvbjogd2l0aERlZmF1bHQodG9Db25maWcucHJlY2lzaW9uLCAwLjAxKSxcbiAgICAgICAgICAgIHRlbnNpb246IHdpdGhEZWZhdWx0KHRvQ29uZmlnLnRlbnNpb24sIDE3MCksXG4gICAgICAgICAgICBmcmljdGlvbjogd2l0aERlZmF1bHQodG9Db25maWcuZnJpY3Rpb24sIDI2KSxcbiAgICAgICAgICAgIG1hc3M6IHdpdGhEZWZhdWx0KHRvQ29uZmlnLm1hc3MsIDEpLFxuICAgICAgICAgICAgZHVyYXRpb246IHRvQ29uZmlnLmR1cmF0aW9uLFxuICAgICAgICAgICAgZWFzaW5nOiB3aXRoRGVmYXVsdCh0b0NvbmZpZy5lYXNpbmcsIHQgPT4gdCksXG4gICAgICAgICAgICBkZWNheTogdG9Db25maWcuZGVjYXlcbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghY3VycmVudFZhbHVlRGlmZmVyc0Zyb21Hb2FsKSB7XG4gICAgICAgICAgLy8gU28gLi4uIHRoZSBjdXJyZW50IHRhcmdldCB2YWx1ZSAobmV3VmFsdWUpIGFwcGVhcnMgdG8gYmUgZGlmZmVyZW50IGZyb20gdGhlIHByZXZpb3VzIHZhbHVlLFxuICAgICAgICAgIC8vIHdoaWNoIG5vcm1hbGx5IGNvbnN0aXR1dGVzIGFuIHVwZGF0ZSwgYnV0IHRoZSBhY3R1YWwgdmFsdWUgKGN1cnJlbnRWYWx1ZSkgbWF0Y2hlcyB0aGUgdGFyZ2V0IVxuICAgICAgICAgIC8vIEluIG9yZGVyIHRvIHJlc29sdmUgdGhpcyB3aXRob3V0IGNhdXNpbmcgYW4gYW5pbWF0aW9uIHVwZGF0ZSB3ZSBzaWxlbnRseSBmbGFnIHRoZSBhbmltYXRpb24gYXMgZG9uZSxcbiAgICAgICAgICAvLyB3aGljaCBpdCB0ZWNobmljYWxseSBpcy4gSW50ZXJwb2xhdGlvbnMgYWxzbyBuZWVkcyBhIGNvbmZpZyB1cGRhdGUgd2l0aCB0aGVpciB0YXJnZXQgc2V0IHRvIDEuXG4gICAgICAgICAgaWYgKGlzSW50ZXJwb2xhdGlvbikge1xuICAgICAgICAgICAgcGFyZW50LnNldFZhbHVlKDEsIGZhbHNlKTtcbiAgICAgICAgICAgIGludGVycG9sYXRpb24kJDEudXBkYXRlQ29uZmlnKHtcbiAgICAgICAgICAgICAgb3V0cHV0OiBbbmV3VmFsdWUsIG5ld1ZhbHVlXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGFyZW50LmRvbmUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBhY2MsIHtcbiAgICAgICAgICAgIFtuYW1lXTogX2V4dGVuZHMoe30sIGFjY1tuYW1lXSwge1xuICAgICAgICAgICAgICBwcmV2aW91czogbmV3VmFsdWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfVxuICAgIH0sIHRoaXMuYW5pbWF0aW9ucyk7XG5cbiAgICBpZiAodGhpcy5oYXNDaGFuZ2VkKSB7XG4gICAgICAvLyBNYWtlIGFuaW1hdGlvbnMgYXZhaWxhYmxlIHRvIGZyYW1lbG9vcFxuICAgICAgdGhpcy5jb25maWdzID0gT2JqZWN0LnZhbHVlcyh0aGlzLmFuaW1hdGlvbnMpO1xuICAgICAgdGhpcy52YWx1ZXMgPSB7fTtcbiAgICAgIHRoaXMuaW50ZXJwb2xhdGlvbnMgPSB7fTtcblxuICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuYW5pbWF0aW9ucykge1xuICAgICAgICB0aGlzLmludGVycG9sYXRpb25zW2tleV0gPSB0aGlzLmFuaW1hdGlvbnNba2V5XS5pbnRlcnBvbGF0aW9uO1xuICAgICAgICB0aGlzLnZhbHVlc1trZXldID0gdGhpcy5hbmltYXRpb25zW2tleV0uaW50ZXJwb2xhdGlvbi5nZXRWYWx1ZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLnN0b3AoKTtcbiAgICB0aGlzLnByb3BzID0ge307XG4gICAgdGhpcy5tZXJnZWQgPSB7fTtcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSB7fTtcbiAgICB0aGlzLmludGVycG9sYXRpb25zID0ge307XG4gICAgdGhpcy52YWx1ZXMgPSB7fTtcbiAgICB0aGlzLmNvbmZpZ3MgPSBbXTtcbiAgICB0aGlzLmxvY2FsID0gMDtcbiAgfVxuXG59XG5cbi8qKiBBUElcbiAqIGNvbnN0IHByb3BzID0gdXNlU3ByaW5ncyhudW1iZXIsIFt7IC4uLiB9LCB7IC4uLiB9LCAuLi5dKVxuICogY29uc3QgW3Byb3BzLCBzZXRdID0gdXNlU3ByaW5ncyhudW1iZXIsIChpLCBjb250cm9sbGVyKSA9PiAoeyAuLi4gfSkpXG4gKi9cblxuY29uc3QgdXNlU3ByaW5ncyA9IChsZW5ndGgsIHByb3BzKSA9PiB7XG4gIGNvbnN0IG1vdW50ZWQgPSB1c2VSZWYoZmFsc2UpO1xuICBjb25zdCBjdHJsID0gdXNlUmVmKCk7XG4gIGNvbnN0IGlzRm4gPSBpcy5mdW4ocHJvcHMpOyAvLyBUaGUgY29udHJvbGxlciBtYWludGFpbnMgdGhlIGFuaW1hdGlvbiB2YWx1ZXMsIHN0YXJ0cyBhbmQgc3RvcHMgYW5pbWF0aW9uc1xuXG4gIGNvbnN0IF91c2VNZW1vID0gdXNlTWVtbygoKSA9PiB7XG4gICAgLy8gUmVtb3ZlIG9sZCBjb250cm9sbGVyc1xuICAgIGlmIChjdHJsLmN1cnJlbnQpIHtcbiAgICAgIGN0cmwuY3VycmVudC5tYXAoYyA9PiBjLmRlc3Ryb3koKSk7XG4gICAgICBjdHJsLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgbGV0IHJlZjtcbiAgICByZXR1cm4gW25ldyBBcnJheShsZW5ndGgpLmZpbGwoKS5tYXAoKF8sIGkpID0+IHtcbiAgICAgIGNvbnN0IGN0cmwgPSBuZXcgQ29udHJvbGxlcigpO1xuICAgICAgY29uc3QgbmV3UHJvcHMgPSBpc0ZuID8gY2FsbFByb3AocHJvcHMsIGksIGN0cmwpIDogcHJvcHNbaV07XG4gICAgICBpZiAoaSA9PT0gMCkgcmVmID0gbmV3UHJvcHMucmVmO1xuICAgICAgY3RybC51cGRhdGUobmV3UHJvcHMpO1xuICAgICAgaWYgKCFyZWYpIGN0cmwuc3RhcnQoKTtcbiAgICAgIHJldHVybiBjdHJsO1xuICAgIH0pLCByZWZdO1xuICB9LCBbbGVuZ3RoXSksXG4gICAgICAgIGNvbnRyb2xsZXJzID0gX3VzZU1lbW9bMF0sXG4gICAgICAgIHJlZiA9IF91c2VNZW1vWzFdO1xuXG4gIGN0cmwuY3VycmVudCA9IGNvbnRyb2xsZXJzOyAvLyBUaGUgaG9va3MgcmVmZXJlbmNlIGFwaSBnZXRzIGRlZmluZWQgaGVyZSAuLi5cblxuICBjb25zdCBhcGkgPSB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gKHtcbiAgICBzdGFydDogKCkgPT4gUHJvbWlzZS5hbGwoY3RybC5jdXJyZW50Lm1hcChjID0+IG5ldyBQcm9taXNlKHIgPT4gYy5zdGFydChyKSkpKSxcbiAgICBzdG9wOiBmaW5pc2hlZCA9PiBjdHJsLmN1cnJlbnQuZm9yRWFjaChjID0+IGMuc3RvcChmaW5pc2hlZCkpLFxuXG4gICAgZ2V0IGNvbnRyb2xsZXJzKCkge1xuICAgICAgcmV0dXJuIGN0cmwuY3VycmVudDtcbiAgICB9XG5cbiAgfSkpOyAvLyBUaGlzIGZ1bmN0aW9uIHVwZGF0ZXMgdGhlIGNvbnRyb2xsZXJzXG5cbiAgY29uc3QgdXBkYXRlQ3RybCA9IHVzZU1lbW8oKCkgPT4gdXBkYXRlUHJvcHMgPT4gY3RybC5jdXJyZW50Lm1hcCgoYywgaSkgPT4ge1xuICAgIGMudXBkYXRlKGlzRm4gPyBjYWxsUHJvcCh1cGRhdGVQcm9wcywgaSwgYykgOiB1cGRhdGVQcm9wc1tpXSk7XG4gICAgaWYgKCFyZWYpIGMuc3RhcnQoKTtcbiAgfSksIFtsZW5ndGhdKTsgLy8gVXBkYXRlIGNvbnRyb2xsZXIgaWYgcHJvcHMgYXJlbid0IGZ1bmN0aW9uYWxcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChtb3VudGVkLmN1cnJlbnQpIHtcbiAgICAgIGlmICghaXNGbikgdXBkYXRlQ3RybChwcm9wcyk7XG4gICAgfSBlbHNlIGlmICghcmVmKSBjdHJsLmN1cnJlbnQuZm9yRWFjaChjID0+IGMuc3RhcnQoKSk7XG4gIH0pOyAvLyBVcGRhdGUgbW91bnRlZCBmbGFnIGFuZCBkZXN0cm95IGNvbnRyb2xsZXIgb24gdW5tb3VudFxuXG4gIHVzZUVmZmVjdCgoKSA9PiAobW91bnRlZC5jdXJyZW50ID0gdHJ1ZSwgKCkgPT4gY3RybC5jdXJyZW50LmZvckVhY2goYyA9PiBjLmRlc3Ryb3koKSkpLCBbXSk7IC8vIFJldHVybiBhbmltYXRlZCBwcm9wcywgb3IsIGFuaW0tcHJvcHMgKyB0aGUgdXBkYXRlLXNldHRlciBhYm92ZVxuXG4gIGNvbnN0IHByb3BWYWx1ZXMgPSBjdHJsLmN1cnJlbnQubWFwKGMgPT4gYy5nZXRWYWx1ZXMoKSk7XG4gIHJldHVybiBpc0ZuID8gW3Byb3BWYWx1ZXMsIHVwZGF0ZUN0cmwsIGZpbmlzaGVkID0+IGN0cmwuY3VycmVudC5mb3JFYWNoKGMgPT4gYy5wYXVzZShmaW5pc2hlZCkpXSA6IHByb3BWYWx1ZXM7XG59O1xuXG4vKiogQVBJXG4gKiBjb25zdCBwcm9wcyA9IHVzZVNwcmluZyh7IC4uLiB9KVxuICogY29uc3QgW3Byb3BzLCBzZXRdID0gdXNlU3ByaW5nKCgpID0+ICh7IC4uLiB9KSlcbiAqL1xuXG5jb25zdCB1c2VTcHJpbmcgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IGlzRm4gPSBpcy5mdW4ocHJvcHMpO1xuXG4gIGNvbnN0IF91c2VTcHJpbmdzID0gdXNlU3ByaW5ncygxLCBpc0ZuID8gcHJvcHMgOiBbcHJvcHNdKSxcbiAgICAgICAgcmVzdWx0ID0gX3VzZVNwcmluZ3NbMF0sXG4gICAgICAgIHNldCA9IF91c2VTcHJpbmdzWzFdLFxuICAgICAgICBwYXVzZSA9IF91c2VTcHJpbmdzWzJdO1xuXG4gIHJldHVybiBpc0ZuID8gW3Jlc3VsdFswXSwgc2V0LCBwYXVzZV0gOiByZXN1bHQ7XG59O1xuXG4vKiogQVBJXG4gKiBjb25zdCB0cmFpbHMgPSB1c2VUcmFpbChudW1iZXIsIHsgLi4uIH0pXG4gKiBjb25zdCBbdHJhaWxzLCBzZXRdID0gdXNlVHJhaWwobnVtYmVyLCAoKSA9PiAoeyAuLi4gfSkpXG4gKi9cblxuY29uc3QgdXNlVHJhaWwgPSAobGVuZ3RoLCBwcm9wcykgPT4ge1xuICBjb25zdCBtb3VudGVkID0gdXNlUmVmKGZhbHNlKTtcbiAgY29uc3QgaXNGbiA9IGlzLmZ1bihwcm9wcyk7XG4gIGNvbnN0IHVwZGF0ZVByb3BzID0gY2FsbFByb3AocHJvcHMpO1xuICBjb25zdCBpbnN0YW5jZXMgPSB1c2VSZWYoKTtcblxuICBjb25zdCBfdXNlU3ByaW5ncyA9IHVzZVNwcmluZ3MobGVuZ3RoLCAoaSwgY3RybCkgPT4ge1xuICAgIGlmIChpID09PSAwKSBpbnN0YW5jZXMuY3VycmVudCA9IFtdO1xuICAgIGluc3RhbmNlcy5jdXJyZW50LnB1c2goY3RybCk7XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCB1cGRhdGVQcm9wcywge1xuICAgICAgY29uZmlnOiBjYWxsUHJvcCh1cGRhdGVQcm9wcy5jb25maWcsIGkpLFxuICAgICAgYXR0YWNoOiBpID4gMCAmJiAoKCkgPT4gaW5zdGFuY2VzLmN1cnJlbnRbaSAtIDFdKVxuICAgIH0pO1xuICB9KSxcbiAgICAgICAgcmVzdWx0ID0gX3VzZVNwcmluZ3NbMF0sXG4gICAgICAgIHNldCA9IF91c2VTcHJpbmdzWzFdLFxuICAgICAgICBwYXVzZSA9IF91c2VTcHJpbmdzWzJdOyAvLyBTZXQgdXAgZnVuY3Rpb24gdG8gdXBkYXRlIGNvbnRyb2xsZXJcblxuXG4gIGNvbnN0IHVwZGF0ZUN0cmwgPSB1c2VNZW1vKCgpID0+IHByb3BzID0+IHNldCgoaSwgY3RybCkgPT4ge1xuICAgIGNvbnN0IGxhc3QgPSBwcm9wcy5yZXZlcnNlID8gaSA9PT0gMCA6IGxlbmd0aCAtIDEgPT09IGk7XG4gICAgY29uc3QgYXR0YWNoSWR4ID0gcHJvcHMucmV2ZXJzZSA/IGkgKyAxIDogaSAtIDE7XG4gICAgY29uc3QgYXR0YWNoQ29udHJvbGxlciA9IGluc3RhbmNlcy5jdXJyZW50W2F0dGFjaElkeF07XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgY29uZmlnOiBjYWxsUHJvcChwcm9wcy5jb25maWcgfHwgdXBkYXRlUHJvcHMuY29uZmlnLCBpKSxcbiAgICAgIGF0dGFjaDogYXR0YWNoQ29udHJvbGxlciAmJiAoKCkgPT4gYXR0YWNoQ29udHJvbGxlcilcbiAgICB9KTtcbiAgfSksIFtsZW5ndGgsIHVwZGF0ZVByb3BzLnJldmVyc2VdKTsgLy8gVXBkYXRlIGNvbnRyb2xsZXIgaWYgcHJvcHMgYXJlbid0IGZ1bmN0aW9uYWxcblxuICB1c2VFZmZlY3QoKCkgPT4gdm9pZCAobW91bnRlZC5jdXJyZW50ICYmICFpc0ZuICYmIHVwZGF0ZUN0cmwocHJvcHMpKSk7IC8vIFVwZGF0ZSBtb3VudGVkIGZsYWcgYW5kIGRlc3Ryb3kgY29udHJvbGxlciBvbiB1bm1vdW50XG5cbiAgdXNlRWZmZWN0KCgpID0+IHZvaWQgKG1vdW50ZWQuY3VycmVudCA9IHRydWUpLCBbXSk7XG4gIHJldHVybiBpc0ZuID8gW3Jlc3VsdCwgdXBkYXRlQ3RybCwgcGF1c2VdIDogcmVzdWx0O1xufTtcblxuLyoqIEFQSVxuICogY29uc3QgdHJhbnNpdGlvbnMgPSB1c2VUcmFuc2l0aW9uKGl0ZW1zLCBpdGVtS2V5cywgeyAuLi4gfSlcbiAqIGNvbnN0IFt0cmFuc2l0aW9ucywgdXBkYXRlXSA9IHVzZVRyYW5zaXRpb24oaXRlbXMsIGl0ZW1LZXlzLCAoKSA9PiAoeyAuLi4gfSkpXG4gKi9cblxubGV0IGd1aWQgPSAwO1xuY29uc3QgRU5URVIgPSAnZW50ZXInO1xuY29uc3QgTEVBVkUgPSAnbGVhdmUnO1xuY29uc3QgVVBEQVRFID0gJ3VwZGF0ZSc7XG5cbmNvbnN0IG1hcEtleXMgPSAoaXRlbXMsIGtleXMpID0+ICh0eXBlb2Yga2V5cyA9PT0gJ2Z1bmN0aW9uJyA/IGl0ZW1zLm1hcChrZXlzKSA6IHRvQXJyYXkoa2V5cykpLm1hcChTdHJpbmcpO1xuXG5jb25zdCBnZXQgPSBwcm9wcyA9PiB7XG4gIGxldCBpdGVtcyA9IHByb3BzLml0ZW1zLFxuICAgICAgX3Byb3BzJGtleXMgPSBwcm9wcy5rZXlzLFxuICAgICAga2V5cyA9IF9wcm9wcyRrZXlzID09PSB2b2lkIDAgPyBpdGVtID0+IGl0ZW0gOiBfcHJvcHMka2V5cyxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgW1wiaXRlbXNcIiwgXCJrZXlzXCJdKTtcblxuICBpdGVtcyA9IHRvQXJyYXkoaXRlbXMgIT09IHZvaWQgMCA/IGl0ZW1zIDogbnVsbCk7XG4gIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgaXRlbXMsXG4gICAga2V5czogbWFwS2V5cyhpdGVtcywga2V5cylcbiAgfSwgcmVzdCk7XG59O1xuXG5mdW5jdGlvbiB1c2VUcmFuc2l0aW9uKGlucHV0LCBrZXlUcmFuc2Zvcm0sIGNvbmZpZykge1xuICBjb25zdCBwcm9wcyA9IF9leHRlbmRzKHtcbiAgICBpdGVtczogaW5wdXQsXG4gICAga2V5czoga2V5VHJhbnNmb3JtIHx8IChpID0+IGkpXG4gIH0sIGNvbmZpZyk7XG5cbiAgY29uc3QgX2dldCA9IGdldChwcm9wcyksXG4gICAgICAgIF9nZXQkbGF6eSA9IF9nZXQubGF6eSxcbiAgICAgICAgbGF6eSA9IF9nZXQkbGF6eSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfZ2V0JGxhenksXG4gICAgICAgIF9nZXQkdW5pcXVlID0gX2dldC51bmlxdWUsXG4gICAgICAgIF9nZXQkcmVzZXQgPSBfZ2V0LnJlc2V0LFxuICAgICAgICByZXNldCA9IF9nZXQkcmVzZXQgPT09IHZvaWQgMCA/IGZhbHNlIDogX2dldCRyZXNldCxcbiAgICAgICAgZW50ZXIgPSBfZ2V0LmVudGVyLFxuICAgICAgICBsZWF2ZSA9IF9nZXQubGVhdmUsXG4gICAgICAgIHVwZGF0ZSA9IF9nZXQudXBkYXRlLFxuICAgICAgICBvbkRlc3Ryb3llZCA9IF9nZXQub25EZXN0cm95ZWQsXG4gICAgICAgIGtleXMgPSBfZ2V0LmtleXMsXG4gICAgICAgIGl0ZW1zID0gX2dldC5pdGVtcyxcbiAgICAgICAgb25GcmFtZSA9IF9nZXQub25GcmFtZSxcbiAgICAgICAgX29uUmVzdCA9IF9nZXQub25SZXN0LFxuICAgICAgICBvblN0YXJ0ID0gX2dldC5vblN0YXJ0LFxuICAgICAgICByZWYgPSBfZ2V0LnJlZixcbiAgICAgICAgZXh0cmEgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfZ2V0LCBbXCJsYXp5XCIsIFwidW5pcXVlXCIsIFwicmVzZXRcIiwgXCJlbnRlclwiLCBcImxlYXZlXCIsIFwidXBkYXRlXCIsIFwib25EZXN0cm95ZWRcIiwgXCJrZXlzXCIsIFwiaXRlbXNcIiwgXCJvbkZyYW1lXCIsIFwib25SZXN0XCIsIFwib25TdGFydFwiLCBcInJlZlwiXSk7XG5cbiAgY29uc3QgZm9yY2VVcGRhdGUgPSB1c2VGb3JjZVVwZGF0ZSgpO1xuICBjb25zdCBtb3VudGVkID0gdXNlUmVmKGZhbHNlKTtcbiAgY29uc3Qgc3RhdGUgPSB1c2VSZWYoe1xuICAgIG1vdW50ZWQ6IGZhbHNlLFxuICAgIGZpcnN0OiB0cnVlLFxuICAgIGRlbGV0ZWQ6IFtdLFxuICAgIGN1cnJlbnQ6IHt9LFxuICAgIHRyYW5zaXRpb25zOiBbXSxcbiAgICBwcmV2UHJvcHM6IHt9LFxuICAgIHBhdXNlZDogISFwcm9wcy5yZWYsXG4gICAgaW5zdGFuY2VzOiAhbW91bnRlZC5jdXJyZW50ICYmIG5ldyBNYXAoKSxcbiAgICBmb3JjZVVwZGF0ZVxuICB9KTtcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZShwcm9wcy5yZWYsICgpID0+ICh7XG4gICAgc3RhcnQ6ICgpID0+IFByb21pc2UuYWxsKEFycmF5LmZyb20oc3RhdGUuY3VycmVudC5pbnN0YW5jZXMpLm1hcCgoX3JlZikgPT4ge1xuICAgICAgbGV0IGMgPSBfcmVmWzFdO1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHIgPT4gYy5zdGFydChyKSk7XG4gICAgfSkpLFxuICAgIHN0b3A6IGZpbmlzaGVkID0+IEFycmF5LmZyb20oc3RhdGUuY3VycmVudC5pbnN0YW5jZXMpLmZvckVhY2goKF9yZWYyKSA9PiB7XG4gICAgICBsZXQgYyA9IF9yZWYyWzFdO1xuICAgICAgcmV0dXJuIGMuc3RvcChmaW5pc2hlZCk7XG4gICAgfSksXG5cbiAgICBnZXQgY29udHJvbGxlcnMoKSB7XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbShzdGF0ZS5jdXJyZW50Lmluc3RhbmNlcykubWFwKChfcmVmMykgPT4ge1xuICAgICAgICBsZXQgYyA9IF9yZWYzWzFdO1xuICAgICAgICByZXR1cm4gYztcbiAgICAgIH0pO1xuICAgIH1cblxuICB9KSk7IC8vIFVwZGF0ZSBzdGF0ZVxuXG4gIHN0YXRlLmN1cnJlbnQgPSBkaWZmSXRlbXMoc3RhdGUuY3VycmVudCwgcHJvcHMpO1xuXG4gIGlmIChzdGF0ZS5jdXJyZW50LmNoYW5nZWQpIHtcbiAgICAvLyBVcGRhdGUgc3RhdGVcbiAgICBzdGF0ZS5jdXJyZW50LnRyYW5zaXRpb25zLmZvckVhY2godHJhbnNpdGlvbiA9PiB7XG4gICAgICBjb25zdCBzbG90ID0gdHJhbnNpdGlvbi5zbG90LFxuICAgICAgICAgICAgZnJvbSA9IHRyYW5zaXRpb24uZnJvbSxcbiAgICAgICAgICAgIHRvID0gdHJhbnNpdGlvbi50byxcbiAgICAgICAgICAgIGNvbmZpZyA9IHRyYW5zaXRpb24uY29uZmlnLFxuICAgICAgICAgICAgdHJhaWwgPSB0cmFuc2l0aW9uLnRyYWlsLFxuICAgICAgICAgICAga2V5ID0gdHJhbnNpdGlvbi5rZXksXG4gICAgICAgICAgICBpdGVtID0gdHJhbnNpdGlvbi5pdGVtO1xuICAgICAgaWYgKCFzdGF0ZS5jdXJyZW50Lmluc3RhbmNlcy5oYXMoa2V5KSkgc3RhdGUuY3VycmVudC5pbnN0YW5jZXMuc2V0KGtleSwgbmV3IENvbnRyb2xsZXIoKSk7IC8vIHVwZGF0ZSB0aGUgbWFwIG9iamVjdFxuXG4gICAgICBjb25zdCBjdHJsID0gc3RhdGUuY3VycmVudC5pbnN0YW5jZXMuZ2V0KGtleSk7XG5cbiAgICAgIGNvbnN0IG5ld1Byb3BzID0gX2V4dGVuZHMoe30sIGV4dHJhLCB7XG4gICAgICAgIHRvLFxuICAgICAgICBmcm9tLFxuICAgICAgICBjb25maWcsXG4gICAgICAgIHJlZixcbiAgICAgICAgb25SZXN0OiB2YWx1ZXMgPT4ge1xuICAgICAgICAgIGlmIChzdGF0ZS5jdXJyZW50Lm1vdW50ZWQpIHtcbiAgICAgICAgICAgIGlmICh0cmFuc2l0aW9uLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgICAvLyBJZiBubyByZWYgaXMgZ2l2ZW4gZGVsZXRlIGRlc3Ryb3llZCBpdGVtcyBpbW1lZGlhdGVseVxuICAgICAgICAgICAgICBpZiAoIXJlZiAmJiAhbGF6eSkgY2xlYW5VcChzdGF0ZSwga2V5KTtcbiAgICAgICAgICAgICAgaWYgKG9uRGVzdHJveWVkKSBvbkRlc3Ryb3llZChpdGVtKTtcbiAgICAgICAgICAgIH0gLy8gQSB0cmFuc2l0aW9uIGNvbWVzIHRvIHJlc3Qgb25jZSBhbGwgaXRzIHNwcmluZ3MgY29uY2x1ZGVcblxuXG4gICAgICAgICAgICBjb25zdCBjdXJJbnN0YW5jZXMgPSBBcnJheS5mcm9tKHN0YXRlLmN1cnJlbnQuaW5zdGFuY2VzKTtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZSA9IGN1ckluc3RhbmNlcy5zb21lKChfcmVmNCkgPT4ge1xuICAgICAgICAgICAgICBsZXQgYyA9IF9yZWY0WzFdO1xuICAgICAgICAgICAgICByZXR1cm4gIWMuaWRsZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFhY3RpdmUgJiYgKHJlZiB8fCBsYXp5KSAmJiBzdGF0ZS5jdXJyZW50LmRlbGV0ZWQubGVuZ3RoID4gMCkgY2xlYW5VcChzdGF0ZSk7XG4gICAgICAgICAgICBpZiAoX29uUmVzdCkgX29uUmVzdChpdGVtLCBzbG90LCB2YWx1ZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25TdGFydDogb25TdGFydCAmJiAoKCkgPT4gb25TdGFydChpdGVtLCBzbG90KSksXG4gICAgICAgIG9uRnJhbWU6IG9uRnJhbWUgJiYgKHZhbHVlcyA9PiBvbkZyYW1lKGl0ZW0sIHNsb3QsIHZhbHVlcykpLFxuICAgICAgICBkZWxheTogdHJhaWwsXG4gICAgICAgIHJlc2V0OiByZXNldCAmJiBzbG90ID09PSBFTlRFUiAvLyBVcGRhdGUgY29udHJvbGxlclxuXG4gICAgICB9KTtcblxuICAgICAgY3RybC51cGRhdGUobmV3UHJvcHMpO1xuICAgICAgaWYgKCFzdGF0ZS5jdXJyZW50LnBhdXNlZCkgY3RybC5zdGFydCgpO1xuICAgIH0pO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzdGF0ZS5jdXJyZW50Lm1vdW50ZWQgPSBtb3VudGVkLmN1cnJlbnQgPSB0cnVlO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzdGF0ZS5jdXJyZW50Lm1vdW50ZWQgPSBtb3VudGVkLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIEFycmF5LmZyb20oc3RhdGUuY3VycmVudC5pbnN0YW5jZXMpLm1hcCgoX3JlZjUpID0+IHtcbiAgICAgICAgbGV0IGMgPSBfcmVmNVsxXTtcbiAgICAgICAgcmV0dXJuIGMuZGVzdHJveSgpO1xuICAgICAgfSk7XG4gICAgICBzdGF0ZS5jdXJyZW50Lmluc3RhbmNlcy5jbGVhcigpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIHN0YXRlLmN1cnJlbnQudHJhbnNpdGlvbnMubWFwKChfcmVmNikgPT4ge1xuICAgIGxldCBpdGVtID0gX3JlZjYuaXRlbSxcbiAgICAgICAgc2xvdCA9IF9yZWY2LnNsb3QsXG4gICAgICAgIGtleSA9IF9yZWY2LmtleTtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbSxcbiAgICAgIGtleSxcbiAgICAgIHN0YXRlOiBzbG90LFxuICAgICAgcHJvcHM6IHN0YXRlLmN1cnJlbnQuaW5zdGFuY2VzLmdldChrZXkpLmdldFZhbHVlcygpXG4gICAgfTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFuVXAoc3RhdGUsIGZpbHRlcktleSkge1xuICBjb25zdCBkZWxldGVkID0gc3RhdGUuY3VycmVudC5kZWxldGVkO1xuXG4gIGZvciAobGV0IF9yZWY3IG9mIGRlbGV0ZWQpIHtcbiAgICBsZXQga2V5ID0gX3JlZjcua2V5O1xuXG4gICAgY29uc3QgZmlsdGVyID0gdCA9PiB0LmtleSAhPT0ga2V5O1xuXG4gICAgaWYgKGlzLnVuZChmaWx0ZXJLZXkpIHx8IGZpbHRlcktleSA9PT0ga2V5KSB7XG4gICAgICBzdGF0ZS5jdXJyZW50Lmluc3RhbmNlcy5kZWxldGUoa2V5KTtcbiAgICAgIHN0YXRlLmN1cnJlbnQudHJhbnNpdGlvbnMgPSBzdGF0ZS5jdXJyZW50LnRyYW5zaXRpb25zLmZpbHRlcihmaWx0ZXIpO1xuICAgICAgc3RhdGUuY3VycmVudC5kZWxldGVkID0gc3RhdGUuY3VycmVudC5kZWxldGVkLmZpbHRlcihmaWx0ZXIpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlLmN1cnJlbnQuZm9yY2VVcGRhdGUoKTtcbn1cblxuZnVuY3Rpb24gZGlmZkl0ZW1zKF9yZWY4LCBwcm9wcykge1xuICBsZXQgZmlyc3QgPSBfcmVmOC5maXJzdCxcbiAgICAgIHByZXZQcm9wcyA9IF9yZWY4LnByZXZQcm9wcyxcbiAgICAgIHN0YXRlID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjgsIFtcImZpcnN0XCIsIFwicHJldlByb3BzXCJdKTtcblxuICBsZXQgX2dldDIgPSBnZXQocHJvcHMpLFxuICAgICAgaXRlbXMgPSBfZ2V0Mi5pdGVtcyxcbiAgICAgIGtleXMgPSBfZ2V0Mi5rZXlzLFxuICAgICAgaW5pdGlhbCA9IF9nZXQyLmluaXRpYWwsXG4gICAgICBmcm9tID0gX2dldDIuZnJvbSxcbiAgICAgIGVudGVyID0gX2dldDIuZW50ZXIsXG4gICAgICBsZWF2ZSA9IF9nZXQyLmxlYXZlLFxuICAgICAgdXBkYXRlID0gX2dldDIudXBkYXRlLFxuICAgICAgX2dldDIkdHJhaWwgPSBfZ2V0Mi50cmFpbCxcbiAgICAgIHRyYWlsID0gX2dldDIkdHJhaWwgPT09IHZvaWQgMCA/IDAgOiBfZ2V0MiR0cmFpbCxcbiAgICAgIHVuaXF1ZSA9IF9nZXQyLnVuaXF1ZSxcbiAgICAgIGNvbmZpZyA9IF9nZXQyLmNvbmZpZyxcbiAgICAgIF9nZXQyJG9yZGVyID0gX2dldDIub3JkZXIsXG4gICAgICBvcmRlciA9IF9nZXQyJG9yZGVyID09PSB2b2lkIDAgPyBbRU5URVIsIExFQVZFLCBVUERBVEVdIDogX2dldDIkb3JkZXI7XG5cbiAgbGV0IF9nZXQzID0gZ2V0KHByZXZQcm9wcyksXG4gICAgICBfa2V5cyA9IF9nZXQzLmtleXMsXG4gICAgICBfaXRlbXMgPSBfZ2V0My5pdGVtcztcblxuICBsZXQgY3VycmVudCA9IF9leHRlbmRzKHt9LCBzdGF0ZS5jdXJyZW50KTtcblxuICBsZXQgZGVsZXRlZCA9IFsuLi5zdGF0ZS5kZWxldGVkXTsgLy8gQ29tcGFyZSBuZXh0IGtleXMgd2l0aCBjdXJyZW50IGtleXNcblxuICBsZXQgY3VycmVudEtleXMgPSBPYmplY3Qua2V5cyhjdXJyZW50KTtcbiAgbGV0IGN1cnJlbnRTZXQgPSBuZXcgU2V0KGN1cnJlbnRLZXlzKTtcbiAgbGV0IG5leHRTZXQgPSBuZXcgU2V0KGtleXMpO1xuICBsZXQgYWRkZWQgPSBrZXlzLmZpbHRlcihpdGVtID0+ICFjdXJyZW50U2V0LmhhcyhpdGVtKSk7XG4gIGxldCByZW1vdmVkID0gc3RhdGUudHJhbnNpdGlvbnMuZmlsdGVyKGl0ZW0gPT4gIWl0ZW0uZGVzdHJveWVkICYmICFuZXh0U2V0LmhhcyhpdGVtLm9yaWdpbmFsS2V5KSkubWFwKGkgPT4gaS5vcmlnaW5hbEtleSk7XG4gIGxldCB1cGRhdGVkID0ga2V5cy5maWx0ZXIoaXRlbSA9PiBjdXJyZW50U2V0LmhhcyhpdGVtKSk7XG4gIGxldCBkZWxheSA9IC10cmFpbDtcblxuICB3aGlsZSAob3JkZXIubGVuZ3RoKSB7XG4gICAgY29uc3QgY2hhbmdlVHlwZSA9IG9yZGVyLnNoaWZ0KCk7XG5cbiAgICBzd2l0Y2ggKGNoYW5nZVR5cGUpIHtcbiAgICAgIGNhc2UgRU5URVI6XG4gICAgICAgIHtcbiAgICAgICAgICBhZGRlZC5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAvLyBJbiB1bmlxdWUgbW9kZSwgcmVtb3ZlIGZhZGluZyBvdXQgdHJhbnNpdGlvbnMgaWYgdGhlaXIga2V5IGNvbWVzIGluIGFnYWluXG4gICAgICAgICAgICBpZiAodW5pcXVlICYmIGRlbGV0ZWQuZmluZChkID0+IGQub3JpZ2luYWxLZXkgPT09IGtleSkpIGRlbGV0ZWQgPSBkZWxldGVkLmZpbHRlcih0ID0+IHQub3JpZ2luYWxLZXkgIT09IGtleSk7XG4gICAgICAgICAgICBjb25zdCBrZXlJbmRleCA9IGtleXMuaW5kZXhPZihrZXkpO1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zW2tleUluZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IHNsb3QgPSBmaXJzdCAmJiBpbml0aWFsICE9PSB2b2lkIDAgPyAnaW5pdGlhbCcgOiBFTlRFUjtcbiAgICAgICAgICAgIGN1cnJlbnRba2V5XSA9IHtcbiAgICAgICAgICAgICAgc2xvdCxcbiAgICAgICAgICAgICAgb3JpZ2luYWxLZXk6IGtleSxcbiAgICAgICAgICAgICAga2V5OiB1bmlxdWUgPyBTdHJpbmcoa2V5KSA6IGd1aWQrKyxcbiAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgdHJhaWw6IGRlbGF5ID0gZGVsYXkgKyB0cmFpbCxcbiAgICAgICAgICAgICAgY29uZmlnOiBjYWxsUHJvcChjb25maWcsIGl0ZW0sIHNsb3QpLFxuICAgICAgICAgICAgICBmcm9tOiBjYWxsUHJvcChmaXJzdCA/IGluaXRpYWwgIT09IHZvaWQgMCA/IGluaXRpYWwgfHwge30gOiBmcm9tIDogZnJvbSwgaXRlbSksXG4gICAgICAgICAgICAgIHRvOiBjYWxsUHJvcChlbnRlciwgaXRlbSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSBMRUFWRTpcbiAgICAgICAge1xuICAgICAgICAgIHJlbW92ZWQuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3Qga2V5SW5kZXggPSBfa2V5cy5pbmRleE9mKGtleSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBfaXRlbXNba2V5SW5kZXhdO1xuICAgICAgICAgICAgY29uc3Qgc2xvdCA9IExFQVZFO1xuICAgICAgICAgICAgZGVsZXRlZC51bnNoaWZ0KF9leHRlbmRzKHt9LCBjdXJyZW50W2tleV0sIHtcbiAgICAgICAgICAgICAgc2xvdCxcbiAgICAgICAgICAgICAgZGVzdHJveWVkOiB0cnVlLFxuICAgICAgICAgICAgICBsZWZ0OiBfa2V5c1tNYXRoLm1heCgwLCBrZXlJbmRleCAtIDEpXSxcbiAgICAgICAgICAgICAgcmlnaHQ6IF9rZXlzW01hdGgubWluKF9rZXlzLmxlbmd0aCwga2V5SW5kZXggKyAxKV0sXG4gICAgICAgICAgICAgIHRyYWlsOiBkZWxheSA9IGRlbGF5ICsgdHJhaWwsXG4gICAgICAgICAgICAgIGNvbmZpZzogY2FsbFByb3AoY29uZmlnLCBpdGVtLCBzbG90KSxcbiAgICAgICAgICAgICAgdG86IGNhbGxQcm9wKGxlYXZlLCBpdGVtKVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgZGVsZXRlIGN1cnJlbnRba2V5XTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFVQREFURTpcbiAgICAgICAge1xuICAgICAgICAgIHVwZGF0ZWQuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3Qga2V5SW5kZXggPSBrZXlzLmluZGV4T2Yoa2V5KTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1trZXlJbmRleF07XG4gICAgICAgICAgICBjb25zdCBzbG90ID0gVVBEQVRFO1xuICAgICAgICAgICAgY3VycmVudFtrZXldID0gX2V4dGVuZHMoe30sIGN1cnJlbnRba2V5XSwge1xuICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICBzbG90LFxuICAgICAgICAgICAgICB0cmFpbDogZGVsYXkgPSBkZWxheSArIHRyYWlsLFxuICAgICAgICAgICAgICBjb25maWc6IGNhbGxQcm9wKGNvbmZpZywgaXRlbSwgc2xvdCksXG4gICAgICAgICAgICAgIHRvOiBjYWxsUHJvcCh1cGRhdGUsIGl0ZW0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxldCBvdXQgPSBrZXlzLm1hcChrZXkgPT4gY3VycmVudFtrZXldKTsgLy8gVGhpcyB0cmllcyB0byByZXN0b3JlIG9yZGVyIGZvciBkZWxldGVkIGl0ZW1zIGJ5IGZpbmRpbmcgdGhlaXIgbGFzdCBrbm93biBzaWJsaW5nc1xuICAvLyBvbmx5IHVzaW5nIHRoZSBsZWZ0IHNpYmxpbmcgdG8ga2VlcCBvcmRlciBwbGFjZW1lbnQgY29uc2lzdGVudCBmb3IgYWxsIGRlbGV0ZWQgaXRlbXNcblxuICBkZWxldGVkLmZvckVhY2goKF9yZWY5KSA9PiB7XG4gICAgbGV0IGxlZnQgPSBfcmVmOS5sZWZ0LFxuICAgICAgICByaWdodCA9IF9yZWY5LnJpZ2h0LFxuICAgICAgICBpdGVtID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjksIFtcImxlZnRcIiwgXCJyaWdodFwiXSk7XG5cbiAgICBsZXQgcG9zOyAvLyBXYXMgaXQgdGhlIGVsZW1lbnQgb24gdGhlIGxlZnQsIGlmIHllcywgbW92ZSB0aGVyZSAuLi5cblxuICAgIGlmICgocG9zID0gb3V0LmZpbmRJbmRleCh0ID0+IHQub3JpZ2luYWxLZXkgPT09IGxlZnQpKSAhPT0gLTEpIHBvcyArPSAxOyAvLyBBbmQgaWYgbm90aGluZyBlbHNlIGhlbHBzLCBtb3ZlIGl0IHRvIHRoZSBzdGFydCDCr1xcXyjjg4QpXy/Cr1xuXG4gICAgcG9zID0gTWF0aC5tYXgoMCwgcG9zKTtcbiAgICBvdXQgPSBbLi4ub3V0LnNsaWNlKDAsIHBvcyksIGl0ZW0sIC4uLm91dC5zbGljZShwb3MpXTtcbiAgfSk7XG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICBjaGFuZ2VkOiBhZGRlZC5sZW5ndGggfHwgcmVtb3ZlZC5sZW5ndGggfHwgdXBkYXRlZC5sZW5ndGgsXG4gICAgZmlyc3Q6IGZpcnN0ICYmIGFkZGVkLmxlbmd0aCA9PT0gMCxcbiAgICB0cmFuc2l0aW9uczogb3V0LFxuICAgIGN1cnJlbnQsXG4gICAgZGVsZXRlZCxcbiAgICBwcmV2UHJvcHM6IHByb3BzXG4gIH0pO1xufVxuXG5jbGFzcyBBbmltYXRlZFN0eWxlIGV4dGVuZHMgQW5pbWF0ZWRPYmplY3Qge1xuICBjb25zdHJ1Y3RvcihzdHlsZSkge1xuICAgIGlmIChzdHlsZSA9PT0gdm9pZCAwKSB7XG4gICAgICBzdHlsZSA9IHt9O1xuICAgIH1cblxuICAgIHN1cGVyKCk7XG5cbiAgICBpZiAoc3R5bGUudHJhbnNmb3JtICYmICEoc3R5bGUudHJhbnNmb3JtIGluc3RhbmNlb2YgQW5pbWF0ZWQpKSB7XG4gICAgICBzdHlsZSA9IGFwcGx5QW5pbWF0ZWRWYWx1ZXMudHJhbnNmb3JtKHN0eWxlKTtcbiAgICB9XG5cbiAgICB0aGlzLnBheWxvYWQgPSBzdHlsZTtcbiAgfVxuXG59XG5cbi8vIGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtY29sb3IvI3N2Zy1jb2xvclxuY29uc3QgY29sb3JzID0ge1xuICB0cmFuc3BhcmVudDogMHgwMDAwMDAwMCxcbiAgYWxpY2VibHVlOiAweGYwZjhmZmZmLFxuICBhbnRpcXVld2hpdGU6IDB4ZmFlYmQ3ZmYsXG4gIGFxdWE6IDB4MDBmZmZmZmYsXG4gIGFxdWFtYXJpbmU6IDB4N2ZmZmQ0ZmYsXG4gIGF6dXJlOiAweGYwZmZmZmZmLFxuICBiZWlnZTogMHhmNWY1ZGNmZixcbiAgYmlzcXVlOiAweGZmZTRjNGZmLFxuICBibGFjazogMHgwMDAwMDBmZixcbiAgYmxhbmNoZWRhbG1vbmQ6IDB4ZmZlYmNkZmYsXG4gIGJsdWU6IDB4MDAwMGZmZmYsXG4gIGJsdWV2aW9sZXQ6IDB4OGEyYmUyZmYsXG4gIGJyb3duOiAweGE1MmEyYWZmLFxuICBidXJseXdvb2Q6IDB4ZGViODg3ZmYsXG4gIGJ1cm50c2llbm5hOiAweGVhN2U1ZGZmLFxuICBjYWRldGJsdWU6IDB4NWY5ZWEwZmYsXG4gIGNoYXJ0cmV1c2U6IDB4N2ZmZjAwZmYsXG4gIGNob2NvbGF0ZTogMHhkMjY5MWVmZixcbiAgY29yYWw6IDB4ZmY3ZjUwZmYsXG4gIGNvcm5mbG93ZXJibHVlOiAweDY0OTVlZGZmLFxuICBjb3Juc2lsazogMHhmZmY4ZGNmZixcbiAgY3JpbXNvbjogMHhkYzE0M2NmZixcbiAgY3lhbjogMHgwMGZmZmZmZixcbiAgZGFya2JsdWU6IDB4MDAwMDhiZmYsXG4gIGRhcmtjeWFuOiAweDAwOGI4YmZmLFxuICBkYXJrZ29sZGVucm9kOiAweGI4ODYwYmZmLFxuICBkYXJrZ3JheTogMHhhOWE5YTlmZixcbiAgZGFya2dyZWVuOiAweDAwNjQwMGZmLFxuICBkYXJrZ3JleTogMHhhOWE5YTlmZixcbiAgZGFya2toYWtpOiAweGJkYjc2YmZmLFxuICBkYXJrbWFnZW50YTogMHg4YjAwOGJmZixcbiAgZGFya29saXZlZ3JlZW46IDB4NTU2YjJmZmYsXG4gIGRhcmtvcmFuZ2U6IDB4ZmY4YzAwZmYsXG4gIGRhcmtvcmNoaWQ6IDB4OTkzMmNjZmYsXG4gIGRhcmtyZWQ6IDB4OGIwMDAwZmYsXG4gIGRhcmtzYWxtb246IDB4ZTk5NjdhZmYsXG4gIGRhcmtzZWFncmVlbjogMHg4ZmJjOGZmZixcbiAgZGFya3NsYXRlYmx1ZTogMHg0ODNkOGJmZixcbiAgZGFya3NsYXRlZ3JheTogMHgyZjRmNGZmZixcbiAgZGFya3NsYXRlZ3JleTogMHgyZjRmNGZmZixcbiAgZGFya3R1cnF1b2lzZTogMHgwMGNlZDFmZixcbiAgZGFya3Zpb2xldDogMHg5NDAwZDNmZixcbiAgZGVlcHBpbms6IDB4ZmYxNDkzZmYsXG4gIGRlZXBza3libHVlOiAweDAwYmZmZmZmLFxuICBkaW1ncmF5OiAweDY5Njk2OWZmLFxuICBkaW1ncmV5OiAweDY5Njk2OWZmLFxuICBkb2RnZXJibHVlOiAweDFlOTBmZmZmLFxuICBmaXJlYnJpY2s6IDB4YjIyMjIyZmYsXG4gIGZsb3JhbHdoaXRlOiAweGZmZmFmMGZmLFxuICBmb3Jlc3RncmVlbjogMHgyMjhiMjJmZixcbiAgZnVjaHNpYTogMHhmZjAwZmZmZixcbiAgZ2FpbnNib3JvOiAweGRjZGNkY2ZmLFxuICBnaG9zdHdoaXRlOiAweGY4ZjhmZmZmLFxuICBnb2xkOiAweGZmZDcwMGZmLFxuICBnb2xkZW5yb2Q6IDB4ZGFhNTIwZmYsXG4gIGdyYXk6IDB4ODA4MDgwZmYsXG4gIGdyZWVuOiAweDAwODAwMGZmLFxuICBncmVlbnllbGxvdzogMHhhZGZmMmZmZixcbiAgZ3JleTogMHg4MDgwODBmZixcbiAgaG9uZXlkZXc6IDB4ZjBmZmYwZmYsXG4gIGhvdHBpbms6IDB4ZmY2OWI0ZmYsXG4gIGluZGlhbnJlZDogMHhjZDVjNWNmZixcbiAgaW5kaWdvOiAweDRiMDA4MmZmLFxuICBpdm9yeTogMHhmZmZmZjBmZixcbiAga2hha2k6IDB4ZjBlNjhjZmYsXG4gIGxhdmVuZGVyOiAweGU2ZTZmYWZmLFxuICBsYXZlbmRlcmJsdXNoOiAweGZmZjBmNWZmLFxuICBsYXduZ3JlZW46IDB4N2NmYzAwZmYsXG4gIGxlbW9uY2hpZmZvbjogMHhmZmZhY2RmZixcbiAgbGlnaHRibHVlOiAweGFkZDhlNmZmLFxuICBsaWdodGNvcmFsOiAweGYwODA4MGZmLFxuICBsaWdodGN5YW46IDB4ZTBmZmZmZmYsXG4gIGxpZ2h0Z29sZGVucm9keWVsbG93OiAweGZhZmFkMmZmLFxuICBsaWdodGdyYXk6IDB4ZDNkM2QzZmYsXG4gIGxpZ2h0Z3JlZW46IDB4OTBlZTkwZmYsXG4gIGxpZ2h0Z3JleTogMHhkM2QzZDNmZixcbiAgbGlnaHRwaW5rOiAweGZmYjZjMWZmLFxuICBsaWdodHNhbG1vbjogMHhmZmEwN2FmZixcbiAgbGlnaHRzZWFncmVlbjogMHgyMGIyYWFmZixcbiAgbGlnaHRza3libHVlOiAweDg3Y2VmYWZmLFxuICBsaWdodHNsYXRlZ3JheTogMHg3Nzg4OTlmZixcbiAgbGlnaHRzbGF0ZWdyZXk6IDB4Nzc4ODk5ZmYsXG4gIGxpZ2h0c3RlZWxibHVlOiAweGIwYzRkZWZmLFxuICBsaWdodHllbGxvdzogMHhmZmZmZTBmZixcbiAgbGltZTogMHgwMGZmMDBmZixcbiAgbGltZWdyZWVuOiAweDMyY2QzMmZmLFxuICBsaW5lbjogMHhmYWYwZTZmZixcbiAgbWFnZW50YTogMHhmZjAwZmZmZixcbiAgbWFyb29uOiAweDgwMDAwMGZmLFxuICBtZWRpdW1hcXVhbWFyaW5lOiAweDY2Y2RhYWZmLFxuICBtZWRpdW1ibHVlOiAweDAwMDBjZGZmLFxuICBtZWRpdW1vcmNoaWQ6IDB4YmE1NWQzZmYsXG4gIG1lZGl1bXB1cnBsZTogMHg5MzcwZGJmZixcbiAgbWVkaXVtc2VhZ3JlZW46IDB4M2NiMzcxZmYsXG4gIG1lZGl1bXNsYXRlYmx1ZTogMHg3YjY4ZWVmZixcbiAgbWVkaXVtc3ByaW5nZ3JlZW46IDB4MDBmYTlhZmYsXG4gIG1lZGl1bXR1cnF1b2lzZTogMHg0OGQxY2NmZixcbiAgbWVkaXVtdmlvbGV0cmVkOiAweGM3MTU4NWZmLFxuICBtaWRuaWdodGJsdWU6IDB4MTkxOTcwZmYsXG4gIG1pbnRjcmVhbTogMHhmNWZmZmFmZixcbiAgbWlzdHlyb3NlOiAweGZmZTRlMWZmLFxuICBtb2NjYXNpbjogMHhmZmU0YjVmZixcbiAgbmF2YWpvd2hpdGU6IDB4ZmZkZWFkZmYsXG4gIG5hdnk6IDB4MDAwMDgwZmYsXG4gIG9sZGxhY2U6IDB4ZmRmNWU2ZmYsXG4gIG9saXZlOiAweDgwODAwMGZmLFxuICBvbGl2ZWRyYWI6IDB4NmI4ZTIzZmYsXG4gIG9yYW5nZTogMHhmZmE1MDBmZixcbiAgb3JhbmdlcmVkOiAweGZmNDUwMGZmLFxuICBvcmNoaWQ6IDB4ZGE3MGQ2ZmYsXG4gIHBhbGVnb2xkZW5yb2Q6IDB4ZWVlOGFhZmYsXG4gIHBhbGVncmVlbjogMHg5OGZiOThmZixcbiAgcGFsZXR1cnF1b2lzZTogMHhhZmVlZWVmZixcbiAgcGFsZXZpb2xldHJlZDogMHhkYjcwOTNmZixcbiAgcGFwYXlhd2hpcDogMHhmZmVmZDVmZixcbiAgcGVhY2hwdWZmOiAweGZmZGFiOWZmLFxuICBwZXJ1OiAweGNkODUzZmZmLFxuICBwaW5rOiAweGZmYzBjYmZmLFxuICBwbHVtOiAweGRkYTBkZGZmLFxuICBwb3dkZXJibHVlOiAweGIwZTBlNmZmLFxuICBwdXJwbGU6IDB4ODAwMDgwZmYsXG4gIHJlYmVjY2FwdXJwbGU6IDB4NjYzMzk5ZmYsXG4gIHJlZDogMHhmZjAwMDBmZixcbiAgcm9zeWJyb3duOiAweGJjOGY4ZmZmLFxuICByb3lhbGJsdWU6IDB4NDE2OWUxZmYsXG4gIHNhZGRsZWJyb3duOiAweDhiNDUxM2ZmLFxuICBzYWxtb246IDB4ZmE4MDcyZmYsXG4gIHNhbmR5YnJvd246IDB4ZjRhNDYwZmYsXG4gIHNlYWdyZWVuOiAweDJlOGI1N2ZmLFxuICBzZWFzaGVsbDogMHhmZmY1ZWVmZixcbiAgc2llbm5hOiAweGEwNTIyZGZmLFxuICBzaWx2ZXI6IDB4YzBjMGMwZmYsXG4gIHNreWJsdWU6IDB4ODdjZWViZmYsXG4gIHNsYXRlYmx1ZTogMHg2YTVhY2RmZixcbiAgc2xhdGVncmF5OiAweDcwODA5MGZmLFxuICBzbGF0ZWdyZXk6IDB4NzA4MDkwZmYsXG4gIHNub3c6IDB4ZmZmYWZhZmYsXG4gIHNwcmluZ2dyZWVuOiAweDAwZmY3ZmZmLFxuICBzdGVlbGJsdWU6IDB4NDY4MmI0ZmYsXG4gIHRhbjogMHhkMmI0OGNmZixcbiAgdGVhbDogMHgwMDgwODBmZixcbiAgdGhpc3RsZTogMHhkOGJmZDhmZixcbiAgdG9tYXRvOiAweGZmNjM0N2ZmLFxuICB0dXJxdW9pc2U6IDB4NDBlMGQwZmYsXG4gIHZpb2xldDogMHhlZTgyZWVmZixcbiAgd2hlYXQ6IDB4ZjVkZWIzZmYsXG4gIHdoaXRlOiAweGZmZmZmZmZmLFxuICB3aGl0ZXNtb2tlOiAweGY1ZjVmNWZmLFxuICB5ZWxsb3c6IDB4ZmZmZjAwZmYsXG4gIHllbGxvd2dyZWVuOiAweDlhY2QzMmZmXG59O1xuXG4vLyBjb25zdCBJTlRFR0VSID0gJ1stK10/XFxcXGQrJztcbmNvbnN0IE5VTUJFUiA9ICdbLStdP1xcXFxkKlxcXFwuP1xcXFxkKyc7XG5jb25zdCBQRVJDRU5UQUdFID0gTlVNQkVSICsgJyUnO1xuXG5mdW5jdGlvbiBjYWxsKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcGFydHMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcGFydHNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gJ1xcXFwoXFxcXHMqKCcgKyBwYXJ0cy5qb2luKCcpXFxcXHMqLFxcXFxzKignKSArICcpXFxcXHMqXFxcXCknO1xufVxuXG5jb25zdCByZ2IgPSBuZXcgUmVnRXhwKCdyZ2InICsgY2FsbChOVU1CRVIsIE5VTUJFUiwgTlVNQkVSKSk7XG5jb25zdCByZ2JhID0gbmV3IFJlZ0V4cCgncmdiYScgKyBjYWxsKE5VTUJFUiwgTlVNQkVSLCBOVU1CRVIsIE5VTUJFUikpO1xuY29uc3QgaHNsID0gbmV3IFJlZ0V4cCgnaHNsJyArIGNhbGwoTlVNQkVSLCBQRVJDRU5UQUdFLCBQRVJDRU5UQUdFKSk7XG5jb25zdCBoc2xhID0gbmV3IFJlZ0V4cCgnaHNsYScgKyBjYWxsKE5VTUJFUiwgUEVSQ0VOVEFHRSwgUEVSQ0VOVEFHRSwgTlVNQkVSKSk7XG5jb25zdCBoZXgzID0gL14jKFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pJC87XG5jb25zdCBoZXg0ID0gL14jKFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KSQvO1xuY29uc3QgaGV4NiA9IC9eIyhbMC05YS1mQS1GXXs2fSkkLztcbmNvbnN0IGhleDggPSAvXiMoWzAtOWEtZkEtRl17OH0pJC87XG5cbi8qXG5odHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tbXVuaXR5L25vcm1hbGl6ZS1jc3MtY29sb3JcblxuQlNEIDMtQ2xhdXNlIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSAyMDE2LCBSZWFjdCBDb21tdW5pdHlcbkFsbCByaWdodHMgcmVzZXJ2ZWQuXG5cblJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxubW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG5cbiogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4gIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuXG4qIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvblxuICBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cblxuKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBjb3B5cmlnaHQgaG9sZGVyIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4gIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tXG4gIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG5cblRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiXG5BTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG5JTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkVcbkRJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEVcbkZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMXG5EQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUlxuU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVJcbkNBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksXG5PUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxuT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiovXG5mdW5jdGlvbiBub3JtYWxpemVDb2xvcihjb2xvcikge1xuICBsZXQgbWF0Y2g7XG5cbiAgaWYgKHR5cGVvZiBjb2xvciA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gY29sb3IgPj4+IDAgPT09IGNvbG9yICYmIGNvbG9yID49IDAgJiYgY29sb3IgPD0gMHhmZmZmZmZmZiA/IGNvbG9yIDogbnVsbDtcbiAgfSAvLyBPcmRlcmVkIGJhc2VkIG9uIG9jY3VycmVuY2VzIG9uIEZhY2Vib29rIGNvZGViYXNlXG5cblxuICBpZiAobWF0Y2ggPSBoZXg2LmV4ZWMoY29sb3IpKSByZXR1cm4gcGFyc2VJbnQobWF0Y2hbMV0gKyAnZmYnLCAxNikgPj4+IDA7XG4gIGlmIChjb2xvcnMuaGFzT3duUHJvcGVydHkoY29sb3IpKSByZXR1cm4gY29sb3JzW2NvbG9yXTtcblxuICBpZiAobWF0Y2ggPSByZ2IuZXhlYyhjb2xvcikpIHtcbiAgICByZXR1cm4gKHBhcnNlMjU1KG1hdGNoWzFdKSA8PCAyNCB8IC8vIHJcbiAgICBwYXJzZTI1NShtYXRjaFsyXSkgPDwgMTYgfCAvLyBnXG4gICAgcGFyc2UyNTUobWF0Y2hbM10pIDw8IDggfCAvLyBiXG4gICAgMHgwMDAwMDBmZikgPj4+IC8vIGFcbiAgICAwO1xuICB9XG5cbiAgaWYgKG1hdGNoID0gcmdiYS5leGVjKGNvbG9yKSkge1xuICAgIHJldHVybiAocGFyc2UyNTUobWF0Y2hbMV0pIDw8IDI0IHwgLy8gclxuICAgIHBhcnNlMjU1KG1hdGNoWzJdKSA8PCAxNiB8IC8vIGdcbiAgICBwYXJzZTI1NShtYXRjaFszXSkgPDwgOCB8IC8vIGJcbiAgICBwYXJzZTEobWF0Y2hbNF0pKSA+Pj4gLy8gYVxuICAgIDA7XG4gIH1cblxuICBpZiAobWF0Y2ggPSBoZXgzLmV4ZWMoY29sb3IpKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KG1hdGNoWzFdICsgbWF0Y2hbMV0gKyAvLyByXG4gICAgbWF0Y2hbMl0gKyBtYXRjaFsyXSArIC8vIGdcbiAgICBtYXRjaFszXSArIG1hdGNoWzNdICsgLy8gYlxuICAgICdmZicsIC8vIGFcbiAgICAxNikgPj4+IDA7XG4gIH0gLy8gaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy1jb2xvci00LyNoZXgtbm90YXRpb25cblxuXG4gIGlmIChtYXRjaCA9IGhleDguZXhlYyhjb2xvcikpIHJldHVybiBwYXJzZUludChtYXRjaFsxXSwgMTYpID4+PiAwO1xuXG4gIGlmIChtYXRjaCA9IGhleDQuZXhlYyhjb2xvcikpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQobWF0Y2hbMV0gKyBtYXRjaFsxXSArIC8vIHJcbiAgICBtYXRjaFsyXSArIG1hdGNoWzJdICsgLy8gZ1xuICAgIG1hdGNoWzNdICsgbWF0Y2hbM10gKyAvLyBiXG4gICAgbWF0Y2hbNF0gKyBtYXRjaFs0XSwgLy8gYVxuICAgIDE2KSA+Pj4gMDtcbiAgfVxuXG4gIGlmIChtYXRjaCA9IGhzbC5leGVjKGNvbG9yKSkge1xuICAgIHJldHVybiAoaHNsVG9SZ2IocGFyc2UzNjAobWF0Y2hbMV0pLCAvLyBoXG4gICAgcGFyc2VQZXJjZW50YWdlKG1hdGNoWzJdKSwgLy8gc1xuICAgIHBhcnNlUGVyY2VudGFnZShtYXRjaFszXSkgLy8gbFxuICAgICkgfCAweDAwMDAwMGZmKSA+Pj4gLy8gYVxuICAgIDA7XG4gIH1cblxuICBpZiAobWF0Y2ggPSBoc2xhLmV4ZWMoY29sb3IpKSB7XG4gICAgcmV0dXJuIChoc2xUb1JnYihwYXJzZTM2MChtYXRjaFsxXSksIC8vIGhcbiAgICBwYXJzZVBlcmNlbnRhZ2UobWF0Y2hbMl0pLCAvLyBzXG4gICAgcGFyc2VQZXJjZW50YWdlKG1hdGNoWzNdKSAvLyBsXG4gICAgKSB8IHBhcnNlMShtYXRjaFs0XSkpID4+PiAvLyBhXG4gICAgMDtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBodWUycmdiKHAsIHEsIHQpIHtcbiAgaWYgKHQgPCAwKSB0ICs9IDE7XG4gIGlmICh0ID4gMSkgdCAtPSAxO1xuICBpZiAodCA8IDEgLyA2KSByZXR1cm4gcCArIChxIC0gcCkgKiA2ICogdDtcbiAgaWYgKHQgPCAxIC8gMikgcmV0dXJuIHE7XG4gIGlmICh0IDwgMiAvIDMpIHJldHVybiBwICsgKHEgLSBwKSAqICgyIC8gMyAtIHQpICogNjtcbiAgcmV0dXJuIHA7XG59XG5cbmZ1bmN0aW9uIGhzbFRvUmdiKGgsIHMsIGwpIHtcbiAgY29uc3QgcSA9IGwgPCAwLjUgPyBsICogKDEgKyBzKSA6IGwgKyBzIC0gbCAqIHM7XG4gIGNvbnN0IHAgPSAyICogbCAtIHE7XG4gIGNvbnN0IHIgPSBodWUycmdiKHAsIHEsIGggKyAxIC8gMyk7XG4gIGNvbnN0IGcgPSBodWUycmdiKHAsIHEsIGgpO1xuICBjb25zdCBiID0gaHVlMnJnYihwLCBxLCBoIC0gMSAvIDMpO1xuICByZXR1cm4gTWF0aC5yb3VuZChyICogMjU1KSA8PCAyNCB8IE1hdGgucm91bmQoZyAqIDI1NSkgPDwgMTYgfCBNYXRoLnJvdW5kKGIgKiAyNTUpIDw8IDg7XG59XG5cbmZ1bmN0aW9uIHBhcnNlMjU1KHN0cikge1xuICBjb25zdCBpbnQgPSBwYXJzZUludChzdHIsIDEwKTtcbiAgaWYgKGludCA8IDApIHJldHVybiAwO1xuICBpZiAoaW50ID4gMjU1KSByZXR1cm4gMjU1O1xuICByZXR1cm4gaW50O1xufVxuXG5mdW5jdGlvbiBwYXJzZTM2MChzdHIpIHtcbiAgY29uc3QgaW50ID0gcGFyc2VGbG9hdChzdHIpO1xuICByZXR1cm4gKGludCAlIDM2MCArIDM2MCkgJSAzNjAgLyAzNjA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlMShzdHIpIHtcbiAgY29uc3QgbnVtID0gcGFyc2VGbG9hdChzdHIpO1xuICBpZiAobnVtIDwgMCkgcmV0dXJuIDA7XG4gIGlmIChudW0gPiAxKSByZXR1cm4gMjU1O1xuICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiAyNTUpO1xufVxuXG5mdW5jdGlvbiBwYXJzZVBlcmNlbnRhZ2Uoc3RyKSB7XG4gIC8vIHBhcnNlRmxvYXQgY29udmVuaWVudGx5IGlnbm9yZXMgdGhlIGZpbmFsICVcbiAgY29uc3QgaW50ID0gcGFyc2VGbG9hdChzdHIpO1xuICBpZiAoaW50IDwgMCkgcmV0dXJuIDA7XG4gIGlmIChpbnQgPiAxMDApIHJldHVybiAxO1xuICByZXR1cm4gaW50IC8gMTAwO1xufVxuXG5mdW5jdGlvbiBjb2xvclRvUmdiYShpbnB1dCkge1xuICBsZXQgaW50MzJDb2xvciA9IG5vcm1hbGl6ZUNvbG9yKGlucHV0KTtcbiAgaWYgKGludDMyQ29sb3IgPT09IG51bGwpIHJldHVybiBpbnB1dDtcbiAgaW50MzJDb2xvciA9IGludDMyQ29sb3IgfHwgMDtcbiAgbGV0IHIgPSAoaW50MzJDb2xvciAmIDB4ZmYwMDAwMDApID4+PiAyNDtcbiAgbGV0IGcgPSAoaW50MzJDb2xvciAmIDB4MDBmZjAwMDApID4+PiAxNjtcbiAgbGV0IGIgPSAoaW50MzJDb2xvciAmIDB4MDAwMGZmMDApID4+PiA4O1xuICBsZXQgYSA9IChpbnQzMkNvbG9yICYgMHgwMDAwMDBmZikgLyAyNTU7XG4gIHJldHVybiBgcmdiYSgke3J9LCAke2d9LCAke2J9LCAke2F9KWA7XG59IC8vIFByb2JsZW06IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmltYXRlZGpzL2FuaW1hdGVkL3B1bGwvMTAyXG4vLyBTb2x1dGlvbjogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjM4NTY1L3BhcnNpbmctc2NpZW50aWZpYy1ub3RhdGlvbi1zZW5zaWJseS82NTg2NjJcblxuXG5jb25zdCBzdHJpbmdTaGFwZVJlZ2V4ID0gL1srXFwtXT8oPzowfFsxLTldXFxkKikoPzpcXC5cXGQqKT8oPzpbZUVdWytcXC1dP1xcZCspPy9nOyAvLyBDb3ZlcnMgcmdiLCByZ2JhLCBoc2wsIGhzbGFcbi8vIFRha2VuIGZyb20gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vb2xtb2tyYW1lci84MmNjY2U2NzNmODZkYjdjZGE1ZVxuXG5jb25zdCBjb2xvclJlZ2V4ID0gLygjKD86WzAtOWEtZl17Mn0pezIsNH18KCNbMC05YS1mXXszfSl8KHJnYnxoc2wpYT9cXCgoLT9cXGQrJT9bLFxcc10rKXsyLDN9XFxzKltcXGRcXC5dKyU/XFwpKS9naTsgLy8gQ292ZXJzIGNvbG9yIG5hbWVzICh0cmFuc3BhcmVudCwgYmx1ZSwgZXRjLilcblxuY29uc3QgY29sb3JOYW1lc1JlZ2V4ID0gbmV3IFJlZ0V4cChgKCR7T2JqZWN0LmtleXMoY29sb3JzKS5qb2luKCd8Jyl9KWAsICdnJyk7XG4vKipcbiAqIFN1cHBvcnRzIHN0cmluZyBzaGFwZXMgYnkgZXh0cmFjdGluZyBudW1iZXJzIHNvIG5ldyB2YWx1ZXMgY2FuIGJlIGNvbXB1dGVkLFxuICogYW5kIHJlY29tYmluZXMgdGhvc2UgdmFsdWVzIGludG8gbmV3IHN0cmluZ3Mgb2YgdGhlIHNhbWUgc2hhcGUuICBTdXBwb3J0c1xuICogdGhpbmdzIGxpa2U6XG4gKlxuICogICByZ2JhKDEyMywgNDIsIDk5LCAwLjM2KSAgICAgICAgICAgLy8gY29sb3JzXG4gKiAgIC00NWRlZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB2YWx1ZXMgd2l0aCB1bml0c1xuICogICAwIDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMikgLy8gYm94IHNoYWRvd3NcbiAqL1xuXG5jb25zdCBjcmVhdGVTdHJpbmdJbnRlcnBvbGF0b3IgPSBjb25maWcgPT4ge1xuICAvLyBSZXBsYWNlIGNvbG9ycyB3aXRoIHJnYmFcbiAgY29uc3Qgb3V0cHV0UmFuZ2UgPSBjb25maWcub3V0cHV0Lm1hcChyYW5nZVZhbHVlID0+IHJhbmdlVmFsdWUucmVwbGFjZShjb2xvclJlZ2V4LCBjb2xvclRvUmdiYSkpLm1hcChyYW5nZVZhbHVlID0+IHJhbmdlVmFsdWUucmVwbGFjZShjb2xvck5hbWVzUmVnZXgsIGNvbG9yVG9SZ2JhKSk7XG4gIGNvbnN0IG91dHB1dFJhbmdlcyA9IG91dHB1dFJhbmdlWzBdLm1hdGNoKHN0cmluZ1NoYXBlUmVnZXgpLm1hcCgoKSA9PiBbXSk7XG4gIG91dHB1dFJhbmdlLmZvckVhY2godmFsdWUgPT4ge1xuICAgIHZhbHVlLm1hdGNoKHN0cmluZ1NoYXBlUmVnZXgpLmZvckVhY2goKG51bWJlciwgaSkgPT4gb3V0cHV0UmFuZ2VzW2ldLnB1c2goK251bWJlcikpO1xuICB9KTtcbiAgY29uc3QgaW50ZXJwb2xhdGlvbnMgPSBvdXRwdXRSYW5nZVswXS5tYXRjaChzdHJpbmdTaGFwZVJlZ2V4KS5tYXAoKF92YWx1ZSwgaSkgPT4gY3JlYXRlSW50ZXJwb2xhdG9yKF9leHRlbmRzKHt9LCBjb25maWcsIHtcbiAgICBvdXRwdXQ6IG91dHB1dFJhbmdlc1tpXVxuICB9KSkpO1xuICByZXR1cm4gaW5wdXQgPT4ge1xuICAgIGxldCBpID0gMDtcbiAgICByZXR1cm4gb3V0cHV0UmFuZ2VbMF0gLy8gJ3JnYmEoMCwgMTAwLCAyMDAsIDApJ1xuICAgIC8vIC0+XG4gICAgLy8gJ3JnYmEoJHtpbnRlcnBvbGF0aW9uc1swXShpbnB1dCl9LCAke2ludGVycG9sYXRpb25zWzFdKGlucHV0KX0sIC4uLidcbiAgICAucmVwbGFjZShzdHJpbmdTaGFwZVJlZ2V4LCAoKSA9PiBpbnRlcnBvbGF0aW9uc1tpKytdKGlucHV0KSkgLy8gcmdiYSByZXF1aXJlcyB0aGF0IHRoZSByLGcsYiBhcmUgaW50ZWdlcnMuLi4uIHNvIHdlIHdhbnQgdG8gcm91bmQgdGhlbSwgYnV0IHdlICpkb250KiB3YW50IHRvXG4gICAgLy8gcm91bmQgdGhlIG9wYWNpdHkgKDR0aCBjb2x1bW4pLlxuICAgIC5yZXBsYWNlKC9yZ2JhXFwoKFswLTlcXC4tXSspLCAoWzAtOVxcLi1dKyksIChbMC05XFwuLV0rKSwgKFswLTlcXC4tXSspXFwpL2dpLCAoXywgcDEsIHAyLCBwMywgcDQpID0+IGByZ2JhKCR7TWF0aC5yb3VuZChwMSl9LCAke01hdGgucm91bmQocDIpfSwgJHtNYXRoLnJvdW5kKHAzKX0sICR7cDR9KWApO1xuICB9O1xufTtcblxubGV0IGlzVW5pdGxlc3NOdW1iZXIgPSB7XG4gIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiB0cnVlLFxuICBib3JkZXJJbWFnZU91dHNldDogdHJ1ZSxcbiAgYm9yZGVySW1hZ2VTbGljZTogdHJ1ZSxcbiAgYm9yZGVySW1hZ2VXaWR0aDogdHJ1ZSxcbiAgYm94RmxleDogdHJ1ZSxcbiAgYm94RmxleEdyb3VwOiB0cnVlLFxuICBib3hPcmRpbmFsR3JvdXA6IHRydWUsXG4gIGNvbHVtbkNvdW50OiB0cnVlLFxuICBjb2x1bW5zOiB0cnVlLFxuICBmbGV4OiB0cnVlLFxuICBmbGV4R3JvdzogdHJ1ZSxcbiAgZmxleFBvc2l0aXZlOiB0cnVlLFxuICBmbGV4U2hyaW5rOiB0cnVlLFxuICBmbGV4TmVnYXRpdmU6IHRydWUsXG4gIGZsZXhPcmRlcjogdHJ1ZSxcbiAgZ3JpZFJvdzogdHJ1ZSxcbiAgZ3JpZFJvd0VuZDogdHJ1ZSxcbiAgZ3JpZFJvd1NwYW46IHRydWUsXG4gIGdyaWRSb3dTdGFydDogdHJ1ZSxcbiAgZ3JpZENvbHVtbjogdHJ1ZSxcbiAgZ3JpZENvbHVtbkVuZDogdHJ1ZSxcbiAgZ3JpZENvbHVtblNwYW46IHRydWUsXG4gIGdyaWRDb2x1bW5TdGFydDogdHJ1ZSxcbiAgZm9udFdlaWdodDogdHJ1ZSxcbiAgbGluZUNsYW1wOiB0cnVlLFxuICBsaW5lSGVpZ2h0OiB0cnVlLFxuICBvcGFjaXR5OiB0cnVlLFxuICBvcmRlcjogdHJ1ZSxcbiAgb3JwaGFuczogdHJ1ZSxcbiAgdGFiU2l6ZTogdHJ1ZSxcbiAgd2lkb3dzOiB0cnVlLFxuICB6SW5kZXg6IHRydWUsXG4gIHpvb206IHRydWUsXG4gIC8vIFNWRy1yZWxhdGVkIHByb3BlcnRpZXNcbiAgZmlsbE9wYWNpdHk6IHRydWUsXG4gIGZsb29kT3BhY2l0eTogdHJ1ZSxcbiAgc3RvcE9wYWNpdHk6IHRydWUsXG4gIHN0cm9rZURhc2hhcnJheTogdHJ1ZSxcbiAgc3Ryb2tlRGFzaG9mZnNldDogdHJ1ZSxcbiAgc3Ryb2tlTWl0ZXJsaW1pdDogdHJ1ZSxcbiAgc3Ryb2tlT3BhY2l0eTogdHJ1ZSxcbiAgc3Ryb2tlV2lkdGg6IHRydWVcbn07XG5cbmNvbnN0IHByZWZpeEtleSA9IChwcmVmaXgsIGtleSkgPT4gcHJlZml4ICsga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnN1YnN0cmluZygxKTtcblxuY29uc3QgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsICdNcycsICdNb3onLCAnTyddO1xuaXNVbml0bGVzc051bWJlciA9IE9iamVjdC5rZXlzKGlzVW5pdGxlc3NOdW1iZXIpLnJlZHVjZSgoYWNjLCBwcm9wKSA9PiB7XG4gIHByZWZpeGVzLmZvckVhY2gocHJlZml4ID0+IGFjY1twcmVmaXhLZXkocHJlZml4LCBwcm9wKV0gPSBhY2NbcHJvcF0pO1xuICByZXR1cm4gYWNjO1xufSwgaXNVbml0bGVzc051bWJlcik7XG5cbmZ1bmN0aW9uIGRhbmdlcm91c1N0eWxlVmFsdWUobmFtZSwgdmFsdWUsIGlzQ3VzdG9tUHJvcGVydHkpIHtcbiAgaWYgKHZhbHVlID09IG51bGwgfHwgdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgfHwgdmFsdWUgPT09ICcnKSByZXR1cm4gJyc7XG4gIGlmICghaXNDdXN0b21Qcm9wZXJ0eSAmJiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIHZhbHVlICE9PSAwICYmICEoaXNVbml0bGVzc051bWJlci5oYXNPd25Qcm9wZXJ0eShuYW1lKSAmJiBpc1VuaXRsZXNzTnVtYmVyW25hbWVdKSkgcmV0dXJuIHZhbHVlICsgJ3B4JzsgLy8gUHJlc3VtZXMgaW1wbGljaXQgJ3B4JyBzdWZmaXggZm9yIHVuaXRsZXNzIG51bWJlcnNcblxuICByZXR1cm4gKCcnICsgdmFsdWUpLnRyaW0oKTtcbn1cblxuY29uc3QgYXR0cmlidXRlQ2FjaGUgPSB7fTtcbmluamVjdENyZWF0ZUFuaW1hdGVkU3R5bGUoc3R5bGUgPT4gbmV3IEFuaW1hdGVkU3R5bGUoc3R5bGUpKTtcbmluamVjdERlZmF1bHRFbGVtZW50KCdkaXYnKTtcbmluamVjdFN0cmluZ0ludGVycG9sYXRvcihjcmVhdGVTdHJpbmdJbnRlcnBvbGF0b3IpO1xuaW5qZWN0Q29sb3JOYW1lcyhjb2xvcnMpO1xuaW5qZWN0QXBwbHlBbmltYXRlZFZhbHVlcygoaW5zdGFuY2UsIHByb3BzKSA9PiB7XG4gIGlmIChpbnN0YW5jZS5ub2RlVHlwZSAmJiBpbnN0YW5jZS5zZXRBdHRyaWJ1dGUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBzY3JvbGxUb3AgPSBwcm9wcy5zY3JvbGxUb3AsXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHByb3BzLnNjcm9sbExlZnQsXG4gICAgICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBbXCJzdHlsZVwiLCBcImNoaWxkcmVuXCIsIFwic2Nyb2xsVG9wXCIsIFwic2Nyb2xsTGVmdFwiXSk7XG5cbiAgICBjb25zdCBmaWx0ZXIgPSBpbnN0YW5jZS5ub2RlTmFtZSA9PT0gJ2ZpbHRlcicgfHwgaW5zdGFuY2UucGFyZW50Tm9kZSAmJiBpbnN0YW5jZS5wYXJlbnROb2RlLm5vZGVOYW1lID09PSAnZmlsdGVyJztcbiAgICBpZiAoc2Nyb2xsVG9wICE9PSB2b2lkIDApIGluc3RhbmNlLnNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcbiAgICBpZiAoc2Nyb2xsTGVmdCAhPT0gdm9pZCAwKSBpbnN0YW5jZS5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdDsgLy8gU2V0IHRleHRDb250ZW50LCBpZiBjaGlsZHJlbiBpcyBhbiBhbmltYXRhYmxlIHZhbHVlXG5cbiAgICBpZiAoY2hpbGRyZW4gIT09IHZvaWQgMCkgaW5zdGFuY2UudGV4dENvbnRlbnQgPSBjaGlsZHJlbjsgLy8gU2V0IHN0eWxlcyAuLi5cblxuICAgIGZvciAobGV0IHN0eWxlTmFtZSBpbiBzdHlsZSkge1xuICAgICAgaWYgKCFzdHlsZS5oYXNPd25Qcm9wZXJ0eShzdHlsZU5hbWUpKSBjb250aW51ZTtcbiAgICAgIHZhciBpc0N1c3RvbVByb3BlcnR5ID0gc3R5bGVOYW1lLmluZGV4T2YoJy0tJykgPT09IDA7XG4gICAgICB2YXIgc3R5bGVWYWx1ZSA9IGRhbmdlcm91c1N0eWxlVmFsdWUoc3R5bGVOYW1lLCBzdHlsZVtzdHlsZU5hbWVdLCBpc0N1c3RvbVByb3BlcnR5KTtcbiAgICAgIGlmIChzdHlsZU5hbWUgPT09ICdmbG9hdCcpIHN0eWxlTmFtZSA9ICdjc3NGbG9hdCc7XG4gICAgICBpZiAoaXNDdXN0b21Qcm9wZXJ0eSkgaW5zdGFuY2Uuc3R5bGUuc2V0UHJvcGVydHkoc3R5bGVOYW1lLCBzdHlsZVZhbHVlKTtlbHNlIGluc3RhbmNlLnN0eWxlW3N0eWxlTmFtZV0gPSBzdHlsZVZhbHVlO1xuICAgIH0gLy8gU2V0IGF0dHJpYnV0ZXMgLi4uXG5cblxuICAgIGZvciAobGV0IG5hbWUgaW4gYXR0cmlidXRlcykge1xuICAgICAgLy8gQXR0cmlidXRlcyBhcmUgd3JpdHRlbiBpbiBkYXNoIGNhc2VcbiAgICAgIGNvbnN0IGRhc2hDYXNlID0gZmlsdGVyID8gbmFtZSA6IGF0dHJpYnV0ZUNhY2hlW25hbWVdIHx8IChhdHRyaWJ1dGVDYWNoZVtuYW1lXSA9IG5hbWUucmVwbGFjZSgvKFtBLVpdKS9nLCBuID0+ICctJyArIG4udG9Mb3dlckNhc2UoKSkpO1xuICAgICAgaWYgKHR5cGVvZiBpbnN0YW5jZS5nZXRBdHRyaWJ1dGUoZGFzaENhc2UpICE9PSAndW5kZWZpbmVkJykgaW5zdGFuY2Uuc2V0QXR0cmlidXRlKGRhc2hDYXNlLCBhdHRyaWJ1dGVzW25hbWVdKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH0gZWxzZSByZXR1cm4gZmFsc2U7XG59LCBzdHlsZSA9PiBzdHlsZSk7XG5cbmNvbnN0IGRvbUVsZW1lbnRzID0gWydhJywgJ2FiYnInLCAnYWRkcmVzcycsICdhcmVhJywgJ2FydGljbGUnLCAnYXNpZGUnLCAnYXVkaW8nLCAnYicsICdiYXNlJywgJ2JkaScsICdiZG8nLCAnYmlnJywgJ2Jsb2NrcXVvdGUnLCAnYm9keScsICdicicsICdidXR0b24nLCAnY2FudmFzJywgJ2NhcHRpb24nLCAnY2l0ZScsICdjb2RlJywgJ2NvbCcsICdjb2xncm91cCcsICdkYXRhJywgJ2RhdGFsaXN0JywgJ2RkJywgJ2RlbCcsICdkZXRhaWxzJywgJ2RmbicsICdkaWFsb2cnLCAnZGl2JywgJ2RsJywgJ2R0JywgJ2VtJywgJ2VtYmVkJywgJ2ZpZWxkc2V0JywgJ2ZpZ2NhcHRpb24nLCAnZmlndXJlJywgJ2Zvb3RlcicsICdmb3JtJywgJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ2hlYWQnLCAnaGVhZGVyJywgJ2hncm91cCcsICdocicsICdodG1sJywgJ2knLCAnaWZyYW1lJywgJ2ltZycsICdpbnB1dCcsICdpbnMnLCAna2JkJywgJ2tleWdlbicsICdsYWJlbCcsICdsZWdlbmQnLCAnbGknLCAnbGluaycsICdtYWluJywgJ21hcCcsICdtYXJrJywgJ21lbnUnLCAnbWVudWl0ZW0nLCAnbWV0YScsICdtZXRlcicsICduYXYnLCAnbm9zY3JpcHQnLCAnb2JqZWN0JywgJ29sJywgJ29wdGdyb3VwJywgJ29wdGlvbicsICdvdXRwdXQnLCAncCcsICdwYXJhbScsICdwaWN0dXJlJywgJ3ByZScsICdwcm9ncmVzcycsICdxJywgJ3JwJywgJ3J0JywgJ3J1YnknLCAncycsICdzYW1wJywgJ3NjcmlwdCcsICdzZWN0aW9uJywgJ3NlbGVjdCcsICdzbWFsbCcsICdzb3VyY2UnLCAnc3BhbicsICdzdHJvbmcnLCAnc3R5bGUnLCAnc3ViJywgJ3N1bW1hcnknLCAnc3VwJywgJ3RhYmxlJywgJ3Rib2R5JywgJ3RkJywgJ3RleHRhcmVhJywgJ3Rmb290JywgJ3RoJywgJ3RoZWFkJywgJ3RpbWUnLCAndGl0bGUnLCAndHInLCAndHJhY2snLCAndScsICd1bCcsICd2YXInLCAndmlkZW8nLCAnd2JyJywgLy8gU1ZHXG4nY2lyY2xlJywgJ2NsaXBQYXRoJywgJ2RlZnMnLCAnZWxsaXBzZScsICdmb3JlaWduT2JqZWN0JywgJ2cnLCAnaW1hZ2UnLCAnbGluZScsICdsaW5lYXJHcmFkaWVudCcsICdtYXNrJywgJ3BhdGgnLCAncGF0dGVybicsICdwb2x5Z29uJywgJ3BvbHlsaW5lJywgJ3JhZGlhbEdyYWRpZW50JywgJ3JlY3QnLCAnc3RvcCcsICdzdmcnLCAndGV4dCcsICd0c3BhbiddO1xuLy8gRXh0ZW5kIGFuaW1hdGVkIHdpdGggYWxsIHRoZSBhdmFpbGFibGUgVEhSRUUgZWxlbWVudHNcbmNvbnN0IGFwcGx5ID0gbWVyZ2UoY3JlYXRlQW5pbWF0ZWRDb21wb25lbnQsIGZhbHNlKTtcbmNvbnN0IGV4dGVuZGVkQW5pbWF0ZWQgPSBhcHBseShkb21FbGVtZW50cyk7XG5cbmV4cG9ydCB7IGFwcGx5LCBjb25maWcsIHVwZGF0ZSwgZXh0ZW5kZWRBbmltYXRlZCBhcyBhbmltYXRlZCwgZXh0ZW5kZWRBbmltYXRlZCBhcyBhLCBpbnRlcnBvbGF0ZSQxIGFzIGludGVycG9sYXRlLCBHbG9iYWxzLCB1c2VTcHJpbmcsIHVzZVRyYWlsLCB1c2VUcmFuc2l0aW9uLCB1c2VDaGFpbiwgdXNlU3ByaW5ncyB9O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMnKTtcblxudmFyIFJlYWN0VmVyc2lvbiA9ICcxNi4xMy4xJztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3JhcnlcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKSA6IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5ibG9jaycpIDogMHhlYWQ5O1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpIDogMHhlYWQ1O1xudmFyIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucmVzcG9uZGVyJykgOiAweGVhZDY7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnNjb3BlJykgOiAweGVhZDc7XG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBkaXNwYXRjaGVyLlxuICovXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGJhdGNoJ3MgY29uZmlndXJhdGlvbiBzdWNoIGFzIGhvdyBsb25nIGFuIHVwZGF0ZVxuICogc2hvdWxkIHN1c3BlbmQgZm9yIGlmIGl0IG5lZWRzIHRvLlxuICovXG52YXIgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcgPSB7XG4gIHN1c3BlbnNlOiBudWxsXG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IG93bmVyLlxuICpcbiAqIFRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBjb21wb25lbnQgd2hvIHNob3VsZCBvd24gYW55IGNvbXBvbmVudHMgdGhhdCBhcmVcbiAqIGN1cnJlbnRseSBiZWluZyBjb25zdHJ1Y3RlZC5cbiAqL1xudmFyIFJlYWN0Q3VycmVudE93bmVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbnZhciBCRUZPUkVfU0xBU0hfUkUgPSAvXiguKilbXFxcXFxcL10vO1xuZnVuY3Rpb24gZGVzY3JpYmVDb21wb25lbnRGcmFtZSAobmFtZSwgc291cmNlLCBvd25lck5hbWUpIHtcbiAgdmFyIHNvdXJjZUluZm8gPSAnJztcblxuICBpZiAoc291cmNlKSB7XG4gICAgdmFyIHBhdGggPSBzb3VyY2UuZmlsZU5hbWU7XG4gICAgdmFyIGZpbGVOYW1lID0gcGF0aC5yZXBsYWNlKEJFRk9SRV9TTEFTSF9SRSwgJycpO1xuXG4gICAge1xuICAgICAgLy8gSW4gREVWLCBpbmNsdWRlIGNvZGUgZm9yIGEgY29tbW9uIHNwZWNpYWwgY2FzZTpcbiAgICAgIC8vIHByZWZlciBcImZvbGRlci9pbmRleC5qc1wiIGluc3RlYWQgb2YganVzdCBcImluZGV4LmpzXCIuXG4gICAgICBpZiAoL15pbmRleFxcLi8udGVzdChmaWxlTmFtZSkpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gcGF0aC5tYXRjaChCRUZPUkVfU0xBU0hfUkUpO1xuXG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgIHZhciBwYXRoQmVmb3JlU2xhc2ggPSBtYXRjaFsxXTtcblxuICAgICAgICAgIGlmIChwYXRoQmVmb3JlU2xhc2gpIHtcbiAgICAgICAgICAgIHZhciBmb2xkZXJOYW1lID0gcGF0aEJlZm9yZVNsYXNoLnJlcGxhY2UoQkVGT1JFX1NMQVNIX1JFLCAnJyk7XG4gICAgICAgICAgICBmaWxlTmFtZSA9IGZvbGRlck5hbWUgKyAnLycgKyBmaWxlTmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzb3VyY2VJbmZvID0gJyAoYXQgJyArIGZpbGVOYW1lICsgJzonICsgc291cmNlLmxpbmVOdW1iZXIgKyAnKSc7XG4gIH0gZWxzZSBpZiAob3duZXJOYW1lKSB7XG4gICAgc291cmNlSW5mbyA9ICcgKGNyZWF0ZWQgYnkgJyArIG93bmVyTmFtZSArICcpJztcbiAgfVxuXG4gIHJldHVybiAnXFxuICAgIGluICcgKyAobmFtZSB8fCAnVW5rbm93bicpICsgc291cmNlSW5mbztcbn1cblxudmFyIFJlc29sdmVkID0gMTtcbmZ1bmN0aW9uIHJlZmluZVJlc29sdmVkTGF6eUNvbXBvbmVudChsYXp5Q29tcG9uZW50KSB7XG4gIHJldHVybiBsYXp5Q29tcG9uZW50Ll9zdGF0dXMgPT09IFJlc29sdmVkID8gbGF6eUNvbXBvbmVudC5fcmVzdWx0IDogbnVsbDtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBvdXRlclR5cGUuZGlzcGxheU5hbWUgfHwgKGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuIFwiUHJvZmlsZXJcIjtcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHJldHVybiAnQ29udGV4dC5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgcmV0dXJuICdDb250ZXh0LlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgdGhlbmFibGUgPSB0eXBlO1xuICAgICAgICAgIHZhciByZXNvbHZlZFRoZW5hYmxlID0gcmVmaW5lUmVzb2x2ZWRMYXp5Q29tcG9uZW50KHRoZW5hYmxlKTtcblxuICAgICAgICAgIGlmIChyZXNvbHZlZFRoZW5hYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZShyZXNvbHZlZFRoZW5hYmxlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IHt9O1xudmFyIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gbnVsbDtcbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gZWxlbWVudDtcbiAgfVxufVxuXG57XG4gIC8vIFN0YWNrIGltcGxlbWVudGF0aW9uIGluamVjdGVkIGJ5IHRoZSBjdXJyZW50IHJlbmRlcmVyLlxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjayA9IG51bGw7XG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGFjayA9ICcnOyAvLyBBZGQgYW4gZXh0cmEgdG9wIGZyYW1lIHdoaWxlIGFuIGVsZW1lbnQgaXMgYmVpbmcgdmFsaWRhdGVkXG5cbiAgICBpZiAoY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudC50eXBlKTtcbiAgICAgIHZhciBvd25lciA9IGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50Ll9vd25lcjtcbiAgICAgIHN0YWNrICs9IGRlc2NyaWJlQ29tcG9uZW50RnJhbWUobmFtZSwgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQuX3NvdXJjZSwgb3duZXIgJiYgZ2V0Q29tcG9uZW50TmFtZShvd25lci50eXBlKSk7XG4gICAgfSAvLyBEZWxlZ2F0ZSB0byB0aGUgaW5qZWN0ZWQgcmVuZGVyZXItc3BlY2lmaWMgaW1wbGVtZW50YXRpb25cblxuXG4gICAgdmFyIGltcGwgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjaztcblxuICAgIGlmIChpbXBsKSB7XG4gICAgICBzdGFjayArPSBpbXBsKCkgfHwgJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YWNrO1xuICB9O1xufVxuXG4vKipcbiAqIFVzZWQgYnkgYWN0KCkgdG8gdHJhY2sgd2hldGhlciB5b3UncmUgaW5zaWRlIGFuIGFjdCgpIHNjb3BlLlxuICovXG52YXIgSXNTb21lUmVuZGVyZXJBY3RpbmcgPSB7XG4gIGN1cnJlbnQ6IGZhbHNlXG59O1xuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSB7XG4gIFJlYWN0Q3VycmVudERpc3BhdGNoZXI6IFJlYWN0Q3VycmVudERpc3BhdGNoZXIsXG4gIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnOiBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyxcbiAgUmVhY3RDdXJyZW50T3duZXI6IFJlYWN0Q3VycmVudE93bmVyLFxuICBJc1NvbWVSZW5kZXJlckFjdGluZzogSXNTb21lUmVuZGVyZXJBY3RpbmcsXG4gIC8vIFVzZWQgYnkgcmVuZGVyZXJzIHRvIGF2b2lkIGJ1bmRsaW5nIG9iamVjdC1hc3NpZ24gdHdpY2UgaW4gVU1EIGJ1bmRsZXM6XG4gIGFzc2lnbjogX2Fzc2lnblxufTtcblxue1xuICBfYXNzaWduKFJlYWN0U2hhcmVkSW50ZXJuYWxzLCB7XG4gICAgLy8gVGhlc2Ugc2hvdWxkIG5vdCBiZSBpbmNsdWRlZCBpbiBwcm9kdWN0aW9uLlxuICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWU6IFJlYWN0RGVidWdDdXJyZW50RnJhbWUsXG4gICAgLy8gU2hpbSBmb3IgUmVhY3QgRE9NIDE2LjAuMCB3aGljaCBzdGlsbCBkZXN0cnVjdHVyZWQgKGJ1dCBub3QgdXNlZCkgdGhpcy5cbiAgICAvLyBUT0RPOiByZW1vdmUgaW4gUmVhY3QgMTcuMC5cbiAgICBSZWFjdENvbXBvbmVudFRyZWVIb29rOiB7fVxuICB9KTtcbn1cblxuLy8gYnkgY2FsbHMgdG8gdGhlc2UgbWV0aG9kcyBieSBhIEJhYmVsIHBsdWdpbi5cbi8vXG4vLyBJbiBQUk9EIChvciBpbiBwYWNrYWdlcyB3aXRob3V0IGFjY2VzcyB0byBSZWFjdCBpbnRlcm5hbHMpLFxuLy8gdGhleSBhcmUgbGVmdCBhcyB0aGV5IGFyZSBpbnN0ZWFkLlxuXG5mdW5jdGlvbiB3YXJuKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCd3YXJuJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgaGFzRXhpc3RpbmdTdGFjayA9IGFyZ3MubGVuZ3RoID4gMCAmJiB0eXBlb2YgYXJnc1thcmdzLmxlbmd0aCAtIDFdID09PSAnc3RyaW5nJyAmJiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0uaW5kZXhPZignXFxuICAgIGluJykgPT09IDA7XG5cbiAgICBpZiAoIWhhc0V4aXN0aW5nU3RhY2spIHtcbiAgICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiAnJyArIGl0ZW07XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcblxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH1cbn1cblxudmFyIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudCA9IHt9O1xuXG5mdW5jdGlvbiB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgY2FsbGVyTmFtZSkge1xuICB7XG4gICAgdmFyIF9jb25zdHJ1Y3RvciA9IHB1YmxpY0luc3RhbmNlLmNvbnN0cnVjdG9yO1xuICAgIHZhciBjb21wb25lbnROYW1lID0gX2NvbnN0cnVjdG9yICYmIChfY29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgX2NvbnN0cnVjdG9yLm5hbWUpIHx8ICdSZWFjdENsYXNzJztcbiAgICB2YXIgd2FybmluZ0tleSA9IGNvbXBvbmVudE5hbWUgKyBcIi5cIiArIGNhbGxlck5hbWU7XG5cbiAgICBpZiAoZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXJyb3IoXCJDYW4ndCBjYWxsICVzIG9uIGEgY29tcG9uZW50IHRoYXQgaXMgbm90IHlldCBtb3VudGVkLiBcIiArICdUaGlzIGlzIGEgbm8tb3AsIGJ1dCBpdCBtaWdodCBpbmRpY2F0ZSBhIGJ1ZyBpbiB5b3VyIGFwcGxpY2F0aW9uLiAnICsgJ0luc3RlYWQsIGFzc2lnbiB0byBgdGhpcy5zdGF0ZWAgZGlyZWN0bHkgb3IgZGVmaW5lIGEgYHN0YXRlID0ge307YCAnICsgJ2NsYXNzIHByb3BlcnR5IHdpdGggdGhlIGRlc2lyZWQgc3RhdGUgaW4gdGhlICVzIGNvbXBvbmVudC4nLCBjYWxsZXJOYW1lLCBjb21wb25lbnROYW1lKTtcblxuICAgIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSA9IHRydWU7XG4gIH1cbn1cbi8qKlxuICogVGhpcyBpcyB0aGUgYWJzdHJhY3QgQVBJIGZvciBhbiB1cGRhdGUgcXVldWUuXG4gKi9cblxuXG52YXIgUmVhY3ROb29wVXBkYXRlUXVldWUgPSB7XG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3QgdGhpcyBjb21wb3NpdGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHdlIHdhbnQgdG8gdGVzdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtb3VudGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQGZpbmFsXG4gICAqL1xuICBpc01vdW50ZWQ6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICAgKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAgICpcbiAgICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICAgKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAgICpcbiAgICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICAgKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZUZvcmNlVXBkYXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdmb3JjZVVwZGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyBhbGwgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgb3IgYHNldFN0YXRlYCB0byBtdXRhdGUgc3RhdGUuXG4gICAqIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAgICpcbiAgICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAgICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb21wbGV0ZVN0YXRlIE5leHQgc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVSZXBsYWNlU3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY29tcGxldGVTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3JlcGxhY2VTdGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gVGhpcyBvbmx5IGV4aXN0cyBiZWNhdXNlIF9wZW5kaW5nU3RhdGUgaXNcbiAgICogaW50ZXJuYWwuIFRoaXMgcHJvdmlkZXMgYSBtZXJnaW5nIHN0cmF0ZWd5IHRoYXQgaXMgbm90IGF2YWlsYWJsZSB0byBkZWVwXG4gICAqIHByb3BlcnRpZXMgd2hpY2ggaXMgY29uZnVzaW5nLiBUT0RPOiBFeHBvc2UgcGVuZGluZ1N0YXRlIG9yIGRvbid0IHVzZSBpdFxuICAgKiBkdXJpbmcgdGhlIG1lcmdlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gTmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlU2V0U3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnc2V0U3RhdGUnKTtcbiAgfVxufTtcblxudmFyIGVtcHR5T2JqZWN0ID0ge307XG5cbntcbiAgT2JqZWN0LmZyZWV6ZShlbXB0eU9iamVjdCk7XG59XG4vKipcbiAqIEJhc2UgY2xhc3MgaGVscGVycyBmb3IgdGhlIHVwZGF0aW5nIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICovXG5cblxuZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDsgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG5cbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7IC8vIFdlIGluaXRpYWxpemUgdGhlIGRlZmF1bHQgdXBkYXRlciBidXQgdGhlIHJlYWwgb25lIGdldHMgaW5qZWN0ZWQgYnkgdGhlXG4gIC8vIHJlbmRlcmVyLlxuXG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbkNvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCA9IHt9O1xuLyoqXG4gKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIHRvIG11dGF0ZVxuICogc3RhdGUuIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBjYWxscyB0byBgc2V0U3RhdGVgIHdpbGwgcnVuIHN5bmNocm9ub3VzbHksXG4gKiBhcyB0aGV5IG1heSBldmVudHVhbGx5IGJlIGJhdGNoZWQgdG9nZXRoZXIuICBZb3UgY2FuIHByb3ZpZGUgYW4gb3B0aW9uYWxcbiAqIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCB3aGVuIHRoZSBjYWxsIHRvIHNldFN0YXRlIGlzIGFjdHVhbGx5XG4gKiBjb21wbGV0ZWQuXG4gKlxuICogV2hlbiBhIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIHRvIHNldFN0YXRlLCBpdCB3aWxsIGJlIGNhbGxlZCBhdCBzb21lIHBvaW50IGluXG4gKiB0aGUgZnV0dXJlIChub3Qgc3luY2hyb25vdXNseSkuIEl0IHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIHVwIHRvIGRhdGVcbiAqIGNvbXBvbmVudCBhcmd1bWVudHMgKHN0YXRlLCBwcm9wcywgY29udGV4dCkuIFRoZXNlIHZhbHVlcyBjYW4gYmUgZGlmZmVyZW50XG4gKiBmcm9tIHRoaXMuKiBiZWNhdXNlIHlvdXIgZnVuY3Rpb24gbWF5IGJlIGNhbGxlZCBhZnRlciByZWNlaXZlUHJvcHMgYnV0IGJlZm9yZVxuICogc2hvdWxkQ29tcG9uZW50VXBkYXRlLCBhbmQgdGhpcyBuZXcgc3RhdGUsIHByb3BzLCBhbmQgY29udGV4dCB3aWxsIG5vdCB5ZXQgYmVcbiAqIGFzc2lnbmVkIHRvIHRoaXMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgb3IgZnVuY3Rpb24gdG9cbiAqICAgICAgICBwcm9kdWNlIG5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBjdXJyZW50IHN0YXRlLlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBzdGF0ZSBpcyB1cGRhdGVkLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrKSB7XG4gIGlmICghKHR5cGVvZiBwYXJ0aWFsU3RhdGUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBwYXJ0aWFsU3RhdGUgPT09ICdmdW5jdGlvbicgfHwgcGFydGlhbFN0YXRlID09IG51bGwpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwic2V0U3RhdGUoLi4uKTogdGFrZXMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcyB0byB1cGRhdGUgb3IgYSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMuXCIgKTtcbiAgICB9XG4gIH1cblxuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssICdzZXRTdGF0ZScpO1xufTtcbi8qKlxuICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gKlxuICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gKlxuICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAqXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHVwZGF0ZSBpcyBjb21wbGV0ZS5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5cblxuQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsIGNhbGxiYWNrLCAnZm9yY2VVcGRhdGUnKTtcbn07XG4vKipcbiAqIERlcHJlY2F0ZWQgQVBJcy4gVGhlc2UgQVBJcyB1c2VkIHRvIGV4aXN0IG9uIGNsYXNzaWMgUmVhY3QgY2xhc3NlcyBidXQgc2luY2VcbiAqIHdlIHdvdWxkIGxpa2UgdG8gZGVwcmVjYXRlIHRoZW0sIHdlJ3JlIG5vdCBnb2luZyB0byBtb3ZlIHRoZW0gb3ZlciB0byB0aGlzXG4gKiBtb2Rlcm4gYmFzZSBjbGFzcy4gSW5zdGVhZCwgd2UgZGVmaW5lIGEgZ2V0dGVyIHRoYXQgd2FybnMgaWYgaXQncyBhY2Nlc3NlZC5cbiAqL1xuXG5cbntcbiAgdmFyIGRlcHJlY2F0ZWRBUElzID0ge1xuICAgIGlzTW91bnRlZDogWydpc01vdW50ZWQnLCAnSW5zdGVhZCwgbWFrZSBzdXJlIHRvIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnMgYW5kIHBlbmRpbmcgcmVxdWVzdHMgaW4gJyArICdjb21wb25lbnRXaWxsVW5tb3VudCB0byBwcmV2ZW50IG1lbW9yeSBsZWFrcy4nXSxcbiAgICByZXBsYWNlU3RhdGU6IFsncmVwbGFjZVN0YXRlJywgJ1JlZmFjdG9yIHlvdXIgY29kZSB0byB1c2Ugc2V0U3RhdGUgaW5zdGVhZCAoc2VlICcgKyAnaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8zMjM2KS4nXVxuICB9O1xuXG4gIHZhciBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcgPSBmdW5jdGlvbiAobWV0aG9kTmFtZSwgaW5mbykge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb21wb25lbnQucHJvdG90eXBlLCBtZXRob2ROYW1lLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2FybignJXMoLi4uKSBpcyBkZXByZWNhdGVkIGluIHBsYWluIEphdmFTY3JpcHQgUmVhY3QgY2xhc3Nlcy4gJXMnLCBpbmZvWzBdLCBpbmZvWzFdKTtcblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGZvciAodmFyIGZuTmFtZSBpbiBkZXByZWNhdGVkQVBJcykge1xuICAgIGlmIChkZXByZWNhdGVkQVBJcy5oYXNPd25Qcm9wZXJ0eShmbk5hbWUpKSB7XG4gICAgICBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcoZm5OYW1lLCBkZXByZWNhdGVkQVBJc1tmbk5hbWVdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gQ29tcG9uZW50RHVtbXkoKSB7fVxuXG5Db21wb25lbnREdW1teS5wcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuLyoqXG4gKiBDb252ZW5pZW5jZSBjb21wb25lbnQgd2l0aCBkZWZhdWx0IHNoYWxsb3cgZXF1YWxpdHkgY2hlY2sgZm9yIHNDVS5cbiAqL1xuXG5mdW5jdGlvbiBQdXJlQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDsgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG5cbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbnZhciBwdXJlQ29tcG9uZW50UHJvdG90eXBlID0gUHVyZUNvbXBvbmVudC5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50RHVtbXkoKTtcbnB1cmVDb21wb25lbnRQcm90b3R5cGUuY29uc3RydWN0b3IgPSBQdXJlQ29tcG9uZW50OyAvLyBBdm9pZCBhbiBleHRyYSBwcm90b3R5cGUganVtcCBmb3IgdGhlc2UgbWV0aG9kcy5cblxuX2Fzc2lnbihwdXJlQ29tcG9uZW50UHJvdG90eXBlLCBDb21wb25lbnQucHJvdG90eXBlKTtcblxucHVyZUNvbXBvbmVudFByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudCA9IHRydWU7XG5cbi8vIGFuIGltbXV0YWJsZSBvYmplY3Qgd2l0aCBhIHNpbmdsZSBtdXRhYmxlIHZhbHVlXG5mdW5jdGlvbiBjcmVhdGVSZWYoKSB7XG4gIHZhciByZWZPYmplY3QgPSB7XG4gICAgY3VycmVudDogbnVsbFxuICB9O1xuXG4gIHtcbiAgICBPYmplY3Quc2VhbChyZWZPYmplY3QpO1xuICB9XG5cbiAgcmV0dXJuIHJlZk9iamVjdDtcbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24sIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duLCBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9mYi5tZS9yZWFjdC1zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9mYi5tZS9yZWFjdC1zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZykge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIGNvbmZpZy5fX3NlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IGNvbmZpZy5fX3NlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vZmIubWUvcmVhY3Qtc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2NyZWF0ZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgdmFyIHByb3BzID0ge307XG4gIHZhciBrZXkgPSBudWxsO1xuICB2YXIgcmVmID0gbnVsbDtcbiAgdmFyIHNlbGYgPSBudWxsO1xuICB2YXIgc291cmNlID0gbnVsbDtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcblxuICAgICAge1xuICAgICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIHNlbGYgPSBjb25maWcuX19zZWxmID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc2VsZjtcbiAgICBzb3VyY2UgPSBjb25maWcuX19zb3VyY2UgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zb3VyY2U7IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkQXJyYXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHtcbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbn1cbmZ1bmN0aW9uIGNsb25lQW5kUmVwbGFjZUtleShvbGRFbGVtZW50LCBuZXdLZXkpIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBSZWFjdEVsZW1lbnQob2xkRWxlbWVudC50eXBlLCBuZXdLZXksIG9sZEVsZW1lbnQucmVmLCBvbGRFbGVtZW50Ll9zZWxmLCBvbGRFbGVtZW50Ll9zb3VyY2UsIG9sZEVsZW1lbnQuX293bmVyLCBvbGRFbGVtZW50LnByb3BzKTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG4vKipcbiAqIENsb25lIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IHVzaW5nIGVsZW1lbnQgYXMgdGhlIHN0YXJ0aW5nIHBvaW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjbG9uZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjbG9uZUVsZW1lbnQoZWxlbWVudCwgY29uZmlnLCBjaGlsZHJlbikge1xuICBpZiAoISEoZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSB1bmRlZmluZWQpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3QuY2xvbmVFbGVtZW50KC4uLik6IFRoZSBhcmd1bWVudCBtdXN0IGJlIGEgUmVhY3QgZWxlbWVudCwgYnV0IHlvdSBwYXNzZWQgXCIgKyBlbGVtZW50ICsgXCIuXCIgKTtcbiAgICB9XG4gIH1cblxuICB2YXIgcHJvcE5hbWU7IC8vIE9yaWdpbmFsIHByb3BzIGFyZSBjb3BpZWRcblxuICB2YXIgcHJvcHMgPSBfYXNzaWduKHt9LCBlbGVtZW50LnByb3BzKTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG5cbiAgdmFyIGtleSA9IGVsZW1lbnQua2V5O1xuICB2YXIgcmVmID0gZWxlbWVudC5yZWY7IC8vIFNlbGYgaXMgcHJlc2VydmVkIHNpbmNlIHRoZSBvd25lciBpcyBwcmVzZXJ2ZWQuXG5cbiAgdmFyIHNlbGYgPSBlbGVtZW50Ll9zZWxmOyAvLyBTb3VyY2UgaXMgcHJlc2VydmVkIHNpbmNlIGNsb25lRWxlbWVudCBpcyB1bmxpa2VseSB0byBiZSB0YXJnZXRlZCBieSBhXG4gIC8vIHRyYW5zcGlsZXIsIGFuZCB0aGUgb3JpZ2luYWwgc291cmNlIGlzIHByb2JhYmx5IGEgYmV0dGVyIGluZGljYXRvciBvZiB0aGVcbiAgLy8gdHJ1ZSBvd25lci5cblxuICB2YXIgc291cmNlID0gZWxlbWVudC5fc291cmNlOyAvLyBPd25lciB3aWxsIGJlIHByZXNlcnZlZCwgdW5sZXNzIHJlZiBpcyBvdmVycmlkZGVuXG5cbiAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIC8vIFNpbGVudGx5IHN0ZWFsIHRoZSByZWYgZnJvbSB0aGUgcGFyZW50LlxuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIG93bmVyID0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudDtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgb3ZlcnJpZGUgZXhpc3RpbmcgcHJvcHNcblxuXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcblxuICAgIGlmIChlbGVtZW50LnR5cGUgJiYgZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgZGVmYXVsdFByb3BzID0gZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcztcbiAgICB9XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBpZiAoY29uZmlnW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkICYmIGRlZmF1bHRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KGVsZW1lbnQudHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5cbnZhciBTRVBBUkFUT1IgPSAnLic7XG52YXIgU1VCU0VQQVJBVE9SID0gJzonO1xuLyoqXG4gKiBFc2NhcGUgYW5kIHdyYXAga2V5IHNvIGl0IGlzIHNhZmUgdG8gdXNlIGFzIGEgcmVhY3RpZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gYmUgZXNjYXBlZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGVzY2FwZWQga2V5LlxuICovXG5cbmZ1bmN0aW9uIGVzY2FwZShrZXkpIHtcbiAgdmFyIGVzY2FwZVJlZ2V4ID0gL1s9Ol0vZztcbiAgdmFyIGVzY2FwZXJMb29rdXAgPSB7XG4gICAgJz0nOiAnPTAnLFxuICAgICc6JzogJz0yJ1xuICB9O1xuICB2YXIgZXNjYXBlZFN0cmluZyA9ICgnJyArIGtleSkucmVwbGFjZShlc2NhcGVSZWdleCwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuIGVzY2FwZXJMb29rdXBbbWF0Y2hdO1xuICB9KTtcbiAgcmV0dXJuICckJyArIGVzY2FwZWRTdHJpbmc7XG59XG4vKipcbiAqIFRPRE86IFRlc3QgdGhhdCBhIHNpbmdsZSBjaGlsZCBhbmQgYW4gYXJyYXkgd2l0aCBvbmUgaXRlbSBoYXZlIHRoZSBzYW1lIGtleVxuICogcGF0dGVybi5cbiAqL1xuXG5cbnZhciBkaWRXYXJuQWJvdXRNYXBzID0gZmFsc2U7XG52YXIgdXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXggPSAvXFwvKy9nO1xuXG5mdW5jdGlvbiBlc2NhcGVVc2VyUHJvdmlkZWRLZXkodGV4dCkge1xuICByZXR1cm4gKCcnICsgdGV4dCkucmVwbGFjZSh1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCwgJyQmLycpO1xufVxuXG52YXIgUE9PTF9TSVpFID0gMTA7XG52YXIgdHJhdmVyc2VDb250ZXh0UG9vbCA9IFtdO1xuXG5mdW5jdGlvbiBnZXRQb29sZWRUcmF2ZXJzZUNvbnRleHQobWFwUmVzdWx0LCBrZXlQcmVmaXgsIG1hcEZ1bmN0aW9uLCBtYXBDb250ZXh0KSB7XG4gIGlmICh0cmF2ZXJzZUNvbnRleHRQb29sLmxlbmd0aCkge1xuICAgIHZhciB0cmF2ZXJzZUNvbnRleHQgPSB0cmF2ZXJzZUNvbnRleHRQb29sLnBvcCgpO1xuICAgIHRyYXZlcnNlQ29udGV4dC5yZXN1bHQgPSBtYXBSZXN1bHQ7XG4gICAgdHJhdmVyc2VDb250ZXh0LmtleVByZWZpeCA9IGtleVByZWZpeDtcbiAgICB0cmF2ZXJzZUNvbnRleHQuZnVuYyA9IG1hcEZ1bmN0aW9uO1xuICAgIHRyYXZlcnNlQ29udGV4dC5jb250ZXh0ID0gbWFwQ29udGV4dDtcbiAgICB0cmF2ZXJzZUNvbnRleHQuY291bnQgPSAwO1xuICAgIHJldHVybiB0cmF2ZXJzZUNvbnRleHQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3VsdDogbWFwUmVzdWx0LFxuICAgICAga2V5UHJlZml4OiBrZXlQcmVmaXgsXG4gICAgICBmdW5jOiBtYXBGdW5jdGlvbixcbiAgICAgIGNvbnRleHQ6IG1hcENvbnRleHQsXG4gICAgICBjb3VudDogMFxuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpIHtcbiAgdHJhdmVyc2VDb250ZXh0LnJlc3VsdCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5rZXlQcmVmaXggPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuZnVuYyA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5jb250ZXh0ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmNvdW50ID0gMDtcblxuICBpZiAodHJhdmVyc2VDb250ZXh0UG9vbC5sZW5ndGggPCBQT09MX1NJWkUpIHtcbiAgICB0cmF2ZXJzZUNvbnRleHRQb29sLnB1c2godHJhdmVyc2VDb250ZXh0KTtcbiAgfVxufVxuLyoqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7IXN0cmluZ30gbmFtZVNvRmFyIE5hbWUgb2YgdGhlIGtleSBwYXRoIHNvIGZhci5cbiAqIEBwYXJhbSB7IWZ1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFjayB0byBpbnZva2Ugd2l0aCBlYWNoIGNoaWxkIGZvdW5kLlxuICogQHBhcmFtIHs/Kn0gdHJhdmVyc2VDb250ZXh0IFVzZWQgdG8gcGFzcyBpbmZvcm1hdGlvbiB0aHJvdWdob3V0IHRoZSB0cmF2ZXJzYWxcbiAqIHByb2Nlc3MuXG4gKiBAcmV0dXJuIHshbnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuIGluIHRoaXMgc3VidHJlZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCBuYW1lU29GYXIsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgY2hpbGRyZW47XG5cbiAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdib29sZWFuJykge1xuICAgIC8vIEFsbCBvZiB0aGUgYWJvdmUgYXJlIHBlcmNlaXZlZCBhcyBudWxsLlxuICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgfVxuXG4gIHZhciBpbnZva2VDYWxsYmFjayA9IGZhbHNlO1xuXG4gIGlmIChjaGlsZHJlbiA9PT0gbnVsbCkge1xuICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBzd2l0Y2ggKGNoaWxkcmVuLiQkdHlwZW9mKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgaWYgKGludm9rZUNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sodHJhdmVyc2VDb250ZXh0LCBjaGlsZHJlbiwgLy8gSWYgaXQncyB0aGUgb25seSBjaGlsZCwgdHJlYXQgdGhlIG5hbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gYW4gYXJyYXlcbiAgICAvLyBzbyB0aGF0IGl0J3MgY29uc2lzdGVudCBpZiB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIGdyb3dzLlxuICAgIG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgKyBnZXRDb21wb25lbnRLZXkoY2hpbGRyZW4sIDApIDogbmFtZVNvRmFyKTtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHZhciBjaGlsZDtcbiAgdmFyIG5leHROYW1lO1xuICB2YXIgc3VidHJlZUNvdW50ID0gMDsgLy8gQ291bnQgb2YgY2hpbGRyZW4gZm91bmQgaW4gdGhlIGN1cnJlbnQgc3VidHJlZS5cblxuICB2YXIgbmV4dE5hbWVQcmVmaXggPSBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SIDogbmFtZVNvRmFyICsgU1VCU0VQQVJBVE9SO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkLCBpKTtcbiAgICAgIHN1YnRyZWVDb3VudCArPSB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZCwgbmV4dE5hbWUsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4oY2hpbGRyZW4pO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG5cbiAgICAgIHtcbiAgICAgICAgLy8gV2FybiBhYm91dCB1c2luZyBNYXBzIGFzIGNoaWxkcmVuXG4gICAgICAgIGlmIChpdGVyYXRvckZuID09PSBjaGlsZHJlbi5lbnRyaWVzKSB7XG4gICAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXRNYXBzKSB7XG4gICAgICAgICAgICB3YXJuKCdVc2luZyBNYXBzIGFzIGNoaWxkcmVuIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIENvbnNpZGVyIGNvbnZlcnRpbmcgY2hpbGRyZW4gdG8gJyArICdhbiBhcnJheSBvZiBrZXllZCBSZWFjdEVsZW1lbnRzIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGlkV2FybkFib3V0TWFwcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKGNoaWxkcmVuKTtcbiAgICAgIHZhciBzdGVwO1xuICAgICAgdmFyIGlpID0gMDtcblxuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICBjaGlsZCA9IHN0ZXAudmFsdWU7XG4gICAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRDb21wb25lbnRLZXkoY2hpbGQsIGlpKyspO1xuICAgICAgICBzdWJ0cmVlQ291bnQgKz0gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGQsIG5leHROYW1lLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YXIgYWRkZW5kdW0gPSAnJztcblxuICAgICAge1xuICAgICAgICBhZGRlbmR1bSA9ICcgSWYgeW91IG1lYW50IHRvIHJlbmRlciBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIHVzZSBhbiBhcnJheSAnICsgJ2luc3RlYWQuJyArIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2hpbGRyZW5TdHJpbmcgPSAnJyArIGNoaWxkcmVuO1xuXG4gICAgICB7XG4gICAgICAgIHtcbiAgICAgICAgICB0aHJvdyBFcnJvciggXCJPYmplY3RzIGFyZSBub3QgdmFsaWQgYXMgYSBSZWFjdCBjaGlsZCAoZm91bmQ6IFwiICsgKGNoaWxkcmVuU3RyaW5nID09PSAnW29iamVjdCBPYmplY3RdJyA/ICdvYmplY3Qgd2l0aCBrZXlzIHsnICsgT2JqZWN0LmtleXMoY2hpbGRyZW4pLmpvaW4oJywgJykgKyAnfScgOiBjaGlsZHJlblN0cmluZykgKyBcIikuXCIgKyBhZGRlbmR1bSApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YnRyZWVDb3VudDtcbn1cbi8qKlxuICogVHJhdmVyc2VzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCwgYnV0XG4gKiBtaWdodCBhbHNvIGJlIHNwZWNpZmllZCB0aHJvdWdoIGF0dHJpYnV0ZXM6XG4gKlxuICogLSBgdHJhdmVyc2VBbGxDaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuLCAuLi4pYFxuICogLSBgdHJhdmVyc2VBbGxDaGlsZHJlbih0aGlzLnByb3BzLmxlZnRQYW5lbENoaWxkcmVuLCAuLi4pYFxuICpcbiAqIFRoZSBgdHJhdmVyc2VDb250ZXh0YCBpcyBhbiBvcHRpb25hbCBhcmd1bWVudCB0aGF0IGlzIHBhc3NlZCB0aHJvdWdoIHRoZVxuICogZW50aXJlIHRyYXZlcnNhbC4gSXQgY2FuIGJlIHVzZWQgdG8gc3RvcmUgYWNjdW11bGF0aW9ucyBvciBhbnl0aGluZyBlbHNlIHRoYXRcbiAqIHRoZSBjYWxsYmFjayBtaWdodCBmaW5kIHJlbGV2YW50LlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgb2JqZWN0LlxuICogQHBhcmFtIHshZnVuY3Rpb259IGNhbGxiYWNrIFRvIGludm9rZSB1cG9uIHRyYXZlcnNpbmcgZWFjaCBjaGlsZC5cbiAqIEBwYXJhbSB7Pyp9IHRyYXZlcnNlQ29udGV4dCBDb250ZXh0IGZvciB0cmF2ZXJzYWwuXG4gKiBAcmV0dXJuIHshbnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuIGluIHRoaXMgc3VidHJlZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHJldHVybiB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZHJlbiwgJycsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xufVxuLyoqXG4gKiBHZW5lcmF0ZSBhIGtleSBzdHJpbmcgdGhhdCBpZGVudGlmaWVzIGEgY29tcG9uZW50IHdpdGhpbiBhIHNldC5cbiAqXG4gKiBAcGFyYW0geyp9IGNvbXBvbmVudCBBIGNvbXBvbmVudCB0aGF0IGNvdWxkIGNvbnRhaW4gYSBtYW51YWwga2V5LlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IEluZGV4IHRoYXQgaXMgdXNlZCBpZiBhIG1hbnVhbCBrZXkgaXMgbm90IHByb3ZpZGVkLlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50S2V5KGNvbXBvbmVudCwgaW5kZXgpIHtcbiAgLy8gRG8gc29tZSB0eXBlY2hlY2tpbmcgaGVyZSBzaW5jZSB3ZSBjYWxsIHRoaXMgYmxpbmRseS4gV2Ugd2FudCB0byBlbnN1cmVcbiAgLy8gdGhhdCB3ZSBkb24ndCBibG9jayBwb3RlbnRpYWwgZnV0dXJlIEVTIEFQSXMuXG4gIGlmICh0eXBlb2YgY29tcG9uZW50ID09PSAnb2JqZWN0JyAmJiBjb21wb25lbnQgIT09IG51bGwgJiYgY29tcG9uZW50LmtleSAhPSBudWxsKSB7XG4gICAgLy8gRXhwbGljaXQga2V5XG4gICAgcmV0dXJuIGVzY2FwZShjb21wb25lbnQua2V5KTtcbiAgfSAvLyBJbXBsaWNpdCBrZXkgZGV0ZXJtaW5lZCBieSB0aGUgaW5kZXggaW4gdGhlIHNldFxuXG5cbiAgcmV0dXJuIGluZGV4LnRvU3RyaW5nKDM2KTtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaFNpbmdsZUNoaWxkKGJvb2tLZWVwaW5nLCBjaGlsZCwgbmFtZSkge1xuICB2YXIgZnVuYyA9IGJvb2tLZWVwaW5nLmZ1bmMsXG4gICAgICBjb250ZXh0ID0gYm9va0tlZXBpbmcuY29udGV4dDtcbiAgZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBib29rS2VlcGluZy5jb3VudCsrKTtcbn1cbi8qKlxuICogSXRlcmF0ZXMgdGhyb3VnaCBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuZm9yZWFjaFxuICpcbiAqIFRoZSBwcm92aWRlZCBmb3JFYWNoRnVuYyhjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmb3JFYWNoRnVuY1xuICogQHBhcmFtIHsqfSBmb3JFYWNoQ29udGV4dCBDb250ZXh0IGZvciBmb3JFYWNoQ29udGV4dC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGZvckVhY2hDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaEZ1bmMsIGZvckVhY2hDb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChudWxsLCBudWxsLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpO1xuICB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoU2luZ2xlQ2hpbGQsIHRyYXZlcnNlQ29udGV4dCk7XG4gIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gbWFwU2luZ2xlQ2hpbGRJbnRvQ29udGV4dChib29rS2VlcGluZywgY2hpbGQsIGNoaWxkS2V5KSB7XG4gIHZhciByZXN1bHQgPSBib29rS2VlcGluZy5yZXN1bHQsXG4gICAgICBrZXlQcmVmaXggPSBib29rS2VlcGluZy5rZXlQcmVmaXgsXG4gICAgICBmdW5jID0gYm9va0tlZXBpbmcuZnVuYyxcbiAgICAgIGNvbnRleHQgPSBib29rS2VlcGluZy5jb250ZXh0O1xuICB2YXIgbWFwcGVkQ2hpbGQgPSBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGJvb2tLZWVwaW5nLmNvdW50KyspO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KG1hcHBlZENoaWxkKSkge1xuICAgIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwobWFwcGVkQ2hpbGQsIHJlc3VsdCwgY2hpbGRLZXksIGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gYztcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChtYXBwZWRDaGlsZCAhPSBudWxsKSB7XG4gICAgaWYgKGlzVmFsaWRFbGVtZW50KG1hcHBlZENoaWxkKSkge1xuICAgICAgbWFwcGVkQ2hpbGQgPSBjbG9uZUFuZFJlcGxhY2VLZXkobWFwcGVkQ2hpbGQsIC8vIEtlZXAgYm90aCB0aGUgKG1hcHBlZCkgYW5kIG9sZCBrZXlzIGlmIHRoZXkgZGlmZmVyLCBqdXN0IGFzXG4gICAgICAvLyB0cmF2ZXJzZUFsbENoaWxkcmVuIHVzZWQgdG8gZG8gZm9yIG9iamVjdHMgYXMgY2hpbGRyZW5cbiAgICAgIGtleVByZWZpeCArIChtYXBwZWRDaGlsZC5rZXkgJiYgKCFjaGlsZCB8fCBjaGlsZC5rZXkgIT09IG1hcHBlZENoaWxkLmtleSkgPyBlc2NhcGVVc2VyUHJvdmlkZWRLZXkobWFwcGVkQ2hpbGQua2V5KSArICcvJyA6ICcnKSArIGNoaWxkS2V5KTtcbiAgICB9XG5cbiAgICByZXN1bHQucHVzaChtYXBwZWRDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgYXJyYXksIHByZWZpeCwgZnVuYywgY29udGV4dCkge1xuICB2YXIgZXNjYXBlZFByZWZpeCA9ICcnO1xuXG4gIGlmIChwcmVmaXggIT0gbnVsbCkge1xuICAgIGVzY2FwZWRQcmVmaXggPSBlc2NhcGVVc2VyUHJvdmlkZWRLZXkocHJlZml4KSArICcvJztcbiAgfVxuXG4gIHZhciB0cmF2ZXJzZUNvbnRleHQgPSBnZXRQb29sZWRUcmF2ZXJzZUNvbnRleHQoYXJyYXksIGVzY2FwZWRQcmVmaXgsIGZ1bmMsIGNvbnRleHQpO1xuICB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0LCB0cmF2ZXJzZUNvbnRleHQpO1xuICByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCk7XG59XG4vKipcbiAqIE1hcHMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm1hcFxuICpcbiAqIFRoZSBwcm92aWRlZCBtYXBGdW5jdGlvbihjaGlsZCwga2V5LCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZ1bmMgVGhlIG1hcCBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBDb250ZXh0IGZvciBtYXBGdW5jdGlvbi5cbiAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9yZGVyZWQgbWFwIG9mIHJlc3VsdHMuXG4gKi9cblxuXG5mdW5jdGlvbiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgcmVzdWx0LCBudWxsLCBmdW5jLCBjb250ZXh0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogQ291bnQgdGhlIG51bWJlciBvZiBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzXG4gKiBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmNvdW50XG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4uXG4gKi9cblxuXG5mdW5jdGlvbiBjb3VudENoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIHJldHVybiB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sIG51bGwpO1xufVxuLyoqXG4gKiBGbGF0dGVuIGEgY2hpbGRyZW4gb2JqZWN0ICh0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmApIGFuZFxuICogcmV0dXJuIGFuIGFycmF5IHdpdGggYXBwcm9wcmlhdGVseSByZS1rZXllZCBjaGlsZHJlbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW50b2FycmF5XG4gKi9cblxuXG5mdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgcmVzdWx0LCBudWxsLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBjaGlsZCBpbiBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4gYW5kIHZlcmlmaWVzIHRoYXQgdGhlcmVcbiAqIGlzIG9ubHkgb25lIGNoaWxkIGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm9ubHlcbiAqXG4gKiBUaGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIGZ1bmN0aW9uIGFzc3VtZXMgdGhhdCBhIHNpbmdsZSBjaGlsZCBnZXRzXG4gKiBwYXNzZWQgd2l0aG91dCBhIHdyYXBwZXIsIGJ1dCB0aGUgcHVycG9zZSBvZiB0aGlzIGhlbHBlciBmdW5jdGlvbiBpcyB0b1xuICogYWJzdHJhY3QgYXdheSB0aGUgcGFydGljdWxhciBzdHJ1Y3R1cmUgb2YgY2hpbGRyZW4uXG4gKlxuICogQHBhcmFtIHs/b2JqZWN0fSBjaGlsZHJlbiBDaGlsZCBjb2xsZWN0aW9uIHN0cnVjdHVyZS5cbiAqIEByZXR1cm4ge1JlYWN0RWxlbWVudH0gVGhlIGZpcnN0IGFuZCBvbmx5IGBSZWFjdEVsZW1lbnRgIGNvbnRhaW5lZCBpbiB0aGVcbiAqIHN0cnVjdHVyZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIG9ubHlDaGlsZChjaGlsZHJlbikge1xuICBpZiAoIWlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIlJlYWN0LkNoaWxkcmVuLm9ubHkgZXhwZWN0ZWQgdG8gcmVjZWl2ZSBhIHNpbmdsZSBSZWFjdCBlbGVtZW50IGNoaWxkLlwiICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSwgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpIHtcbiAgaWYgKGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxjdWxhdGVDaGFuZ2VkQml0cyA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAge1xuICAgICAgaWYgKGNhbGN1bGF0ZUNoYW5nZWRCaXRzICE9PSBudWxsICYmIHR5cGVvZiBjYWxjdWxhdGVDaGFuZ2VkQml0cyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBlcnJvcignY3JlYXRlQ29udGV4dDogRXhwZWN0ZWQgdGhlIG9wdGlvbmFsIHNlY29uZCBhcmd1bWVudCB0byBiZSBhICcgKyAnZnVuY3Rpb24uIEluc3RlYWQgcmVjZWl2ZWQ6ICVzJywgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBjb250ZXh0ID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBjYWxjdWxhdGVDaGFuZ2VkQml0cyxcbiAgICAvLyBBcyBhIHdvcmthcm91bmQgdG8gc3VwcG9ydCBtdWx0aXBsZSBjb25jdXJyZW50IHJlbmRlcmVycywgd2UgY2F0ZWdvcml6ZVxuICAgIC8vIHNvbWUgcmVuZGVyZXJzIGFzIHByaW1hcnkgYW5kIG90aGVycyBhcyBzZWNvbmRhcnkuIFdlIG9ubHkgZXhwZWN0XG4gICAgLy8gdGhlcmUgdG8gYmUgdHdvIGNvbmN1cnJlbnQgcmVuZGVyZXJzIGF0IG1vc3Q6IFJlYWN0IE5hdGl2ZSAocHJpbWFyeSkgYW5kXG4gICAgLy8gRmFicmljIChzZWNvbmRhcnkpOyBSZWFjdCBET00gKHByaW1hcnkpIGFuZCBSZWFjdCBBUlQgKHNlY29uZGFyeSkuXG4gICAgLy8gU2Vjb25kYXJ5IHJlbmRlcmVycyBzdG9yZSB0aGVpciBjb250ZXh0IHZhbHVlcyBvbiBzZXBhcmF0ZSBmaWVsZHMuXG4gICAgX2N1cnJlbnRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgIF9jdXJyZW50VmFsdWUyOiBkZWZhdWx0VmFsdWUsXG4gICAgLy8gVXNlZCB0byB0cmFjayBob3cgbWFueSBjb25jdXJyZW50IHJlbmRlcmVycyB0aGlzIGNvbnRleHQgY3VycmVudGx5XG4gICAgLy8gc3VwcG9ydHMgd2l0aGluIGluIGEgc2luZ2xlIHJlbmRlcmVyLiBTdWNoIGFzIHBhcmFsbGVsIHNlcnZlciByZW5kZXJpbmcuXG4gICAgX3RocmVhZENvdW50OiAwLFxuICAgIC8vIFRoZXNlIGFyZSBjaXJjdWxhclxuICAgIFByb3ZpZGVyOiBudWxsLFxuICAgIENvbnN1bWVyOiBudWxsXG4gIH07XG4gIGNvbnRleHQuUHJvdmlkZXIgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX1BST1ZJREVSX1RZUEUsXG4gICAgX2NvbnRleHQ6IGNvbnRleHRcbiAgfTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gZmFsc2U7XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IGZhbHNlO1xuXG4gIHtcbiAgICAvLyBBIHNlcGFyYXRlIG9iamVjdCwgYnV0IHByb3hpZXMgYmFjayB0byB0aGUgb3JpZ2luYWwgY29udGV4dCBvYmplY3QgZm9yXG4gICAgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuIEl0IGhhcyBhIGRpZmZlcmVudCAkJHR5cGVvZiwgc28gd2UgY2FuIHByb3Blcmx5XG4gICAgLy8gd2FybiBmb3IgdGhlIGluY29ycmVjdCB1c2FnZSBvZiBDb250ZXh0IGFzIGEgQ29uc3VtZXIuXG4gICAgdmFyIENvbnN1bWVyID0ge1xuICAgICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICAgIF9jb250ZXh0OiBjb250ZXh0LFxuICAgICAgX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBjb250ZXh0Ll9jYWxjdWxhdGVDaGFuZ2VkQml0c1xuICAgIH07IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG5vdCBzZXR0aW5nIGEgdmFsdWUsIHdoaWNoIGlzIGludGVudGlvbmFsIGhlcmVcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKENvbnN1bWVyLCB7XG4gICAgICBQcm92aWRlcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IHRydWU7XG5cbiAgICAgICAgICAgIGVycm9yKCdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuUHJvdmlkZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuUHJvdmlkZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuUHJvdmlkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9Qcm92aWRlcikge1xuICAgICAgICAgIGNvbnRleHQuUHJvdmlkZXIgPSBfUHJvdmlkZXI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUgPSBfY3VycmVudFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZTI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUyKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlMiA9IF9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX3RocmVhZENvdW50OiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll90aHJlYWRDb3VudDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX3RocmVhZENvdW50KSB7XG4gICAgICAgICAgY29udGV4dC5fdGhyZWFkQ291bnQgPSBfdGhyZWFkQ291bnQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBDb25zdW1lcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IHRydWU7XG5cbiAgICAgICAgICAgIGVycm9yKCdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuQ29uc3VtZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuQ29uc3VtZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuQ29uc3VtZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbWlzc2luZyBwcm9wZXJ0aWVzIGJlY2F1c2UgaXQgZG9lc24ndCB1bmRlcnN0YW5kIGRlZmluZVByb3BlcnR5XG5cbiAgICBjb250ZXh0LkNvbnN1bWVyID0gQ29uc3VtZXI7XG4gIH1cblxuICB7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyID0gbnVsbDtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIyID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG5mdW5jdGlvbiBsYXp5KGN0b3IpIHtcbiAgdmFyIGxhenlUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9MQVpZX1RZUEUsXG4gICAgX2N0b3I6IGN0b3IsXG4gICAgLy8gUmVhY3QgdXNlcyB0aGVzZSBmaWVsZHMgdG8gc3RvcmUgdGhlIHJlc3VsdC5cbiAgICBfc3RhdHVzOiAtMSxcbiAgICBfcmVzdWx0OiBudWxsXG4gIH07XG5cbiAge1xuICAgIC8vIEluIHByb2R1Y3Rpb24sIHRoaXMgd291bGQganVzdCBzZXQgaXQgb24gdGhlIG9iamVjdC5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuICAgIHZhciBwcm9wVHlwZXM7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobGF6eVR5cGUsIHtcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBkZWZhdWx0UHJvcHM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld0RlZmF1bHRQcm9wcykge1xuICAgICAgICAgIGVycm9yKCdSZWFjdC5sYXp5KC4uLik6IEl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gYXNzaWduIGBkZWZhdWx0UHJvcHNgIHRvICcgKyAnYSBsYXp5IGNvbXBvbmVudCBpbXBvcnQuIEVpdGhlciBzcGVjaWZ5IHRoZW0gd2hlcmUgdGhlIGNvbXBvbmVudCAnICsgJ2lzIGRlZmluZWQsIG9yIGNyZWF0ZSBhIHdyYXBwaW5nIGNvbXBvbmVudCBhcm91bmQgaXQuJyk7XG5cbiAgICAgICAgICBkZWZhdWx0UHJvcHMgPSBuZXdEZWZhdWx0UHJvcHM7IC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxuXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxhenlUeXBlLCAnZGVmYXVsdFByb3BzJywge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BUeXBlcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3UHJvcFR5cGVzKSB7XG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYHByb3BUeXBlc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcblxuICAgICAgICAgIHByb3BUeXBlcyA9IG5ld1Byb3BUeXBlczsgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdwcm9wVHlwZXMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBsYXp5VHlwZTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZFJlZihyZW5kZXIpIHtcbiAge1xuICAgIGlmIChyZW5kZXIgIT0gbnVsbCAmJiByZW5kZXIuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHJlY2VpdmVkIGEgYG1lbW9gICcgKyAnY29tcG9uZW50LiBJbnN0ZWFkIG9mIGZvcndhcmRSZWYobWVtbyguLi4pKSwgdXNlICcgKyAnbWVtbyhmb3J3YXJkUmVmKC4uLikpLicpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHdhcyBnaXZlbiAlcy4nLCByZW5kZXIgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcmVuZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHJlbmRlci5sZW5ndGggIT09IDAgJiYgcmVuZGVyLmxlbmd0aCAhPT0gMikge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGFjY2VwdCBleGFjdGx5IHR3byBwYXJhbWV0ZXJzOiBwcm9wcyBhbmQgcmVmLiAlcycsIHJlbmRlci5sZW5ndGggPT09IDEgPyAnRGlkIHlvdSBmb3JnZXQgdG8gdXNlIHRoZSByZWYgcGFyYW1ldGVyPycgOiAnQW55IGFkZGl0aW9uYWwgcGFyYW1ldGVyIHdpbGwgYmUgdW5kZWZpbmVkLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZW5kZXIgIT0gbnVsbCkge1xuICAgICAgaWYgKHJlbmRlci5kZWZhdWx0UHJvcHMgIT0gbnVsbCB8fCByZW5kZXIucHJvcFR5cGVzICE9IG51bGwpIHtcbiAgICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBkbyBub3Qgc3VwcG9ydCBwcm9wVHlwZXMgb3IgZGVmYXVsdFByb3BzLiAnICsgJ0RpZCB5b3UgYWNjaWRlbnRhbGx5IHBhc3MgYSBSZWFjdCBjb21wb25lbnQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSxcbiAgICByZW5kZXI6IHJlbmRlclxuICB9O1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xufVxuXG5mdW5jdGlvbiBtZW1vKHR5cGUsIGNvbXBhcmUpIHtcbiAge1xuICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpKSB7XG4gICAgICBlcnJvcignbWVtbzogVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBjb21wb25lbnQuIEluc3RlYWQgJyArICdyZWNlaXZlZDogJXMnLCB0eXBlID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX01FTU9fVFlQRSxcbiAgICB0eXBlOiB0eXBlLFxuICAgIGNvbXBhcmU6IGNvbXBhcmUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb21wYXJlXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEaXNwYXRjaGVyKCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDtcblxuICBpZiAoIShkaXNwYXRjaGVyICE9PSBudWxsKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIkludmFsaWQgaG9vayBjYWxsLiBIb29rcyBjYW4gb25seSBiZSBjYWxsZWQgaW5zaWRlIG9mIHRoZSBib2R5IG9mIGEgZnVuY3Rpb24gY29tcG9uZW50LiBUaGlzIGNvdWxkIGhhcHBlbiBmb3Igb25lIG9mIHRoZSBmb2xsb3dpbmcgcmVhc29uczpcXG4xLiBZb3UgbWlnaHQgaGF2ZSBtaXNtYXRjaGluZyB2ZXJzaW9ucyBvZiBSZWFjdCBhbmQgdGhlIHJlbmRlcmVyIChzdWNoIGFzIFJlYWN0IERPTSlcXG4yLiBZb3UgbWlnaHQgYmUgYnJlYWtpbmcgdGhlIFJ1bGVzIG9mIEhvb2tzXFxuMy4gWW91IG1pZ2h0IGhhdmUgbW9yZSB0aGFuIG9uZSBjb3B5IG9mIFJlYWN0IGluIHRoZSBzYW1lIGFwcFxcblNlZSBodHRwczovL2ZiLm1lL3JlYWN0LWludmFsaWQtaG9vay1jYWxsIGZvciB0aXBzIGFib3V0IGhvdyB0byBkZWJ1ZyBhbmQgZml4IHRoaXMgcHJvYmxlbS5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXNwYXRjaGVyO1xufVxuXG5mdW5jdGlvbiB1c2VDb250ZXh0KENvbnRleHQsIHVuc3RhYmxlX29ic2VydmVkQml0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG5cbiAge1xuICAgIGlmICh1bnN0YWJsZV9vYnNlcnZlZEJpdHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IoJ3VzZUNvbnRleHQoKSBzZWNvbmQgYXJndW1lbnQgaXMgcmVzZXJ2ZWQgZm9yIGZ1dHVyZSAnICsgJ3VzZSBpbiBSZWFjdC4gUGFzc2luZyBpdCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ1lvdSBwYXNzZWQ6ICVzLiVzJywgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzLCB0eXBlb2YgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzID09PSAnbnVtYmVyJyAmJiBBcnJheS5pc0FycmF5KGFyZ3VtZW50c1syXSkgPyAnXFxuXFxuRGlkIHlvdSBjYWxsIGFycmF5Lm1hcCh1c2VDb250ZXh0KT8gJyArICdDYWxsaW5nIEhvb2tzIGluc2lkZSBhIGxvb3AgaXMgbm90IHN1cHBvcnRlZC4gJyArICdMZWFybiBtb3JlIGF0IGh0dHBzOi8vZmIubWUvcnVsZXMtb2YtaG9va3MnIDogJycpO1xuICAgIH0gLy8gVE9ETzogYWRkIGEgbW9yZSBnZW5lcmljIHdhcm5pbmcgZm9yIGludmFsaWQgdmFsdWVzLlxuXG5cbiAgICBpZiAoQ29udGV4dC5fY29udGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgcmVhbENvbnRleHQgPSBDb250ZXh0Ll9jb250ZXh0OyAvLyBEb24ndCBkZWR1cGxpY2F0ZSBiZWNhdXNlIHRoaXMgbGVnaXRpbWF0ZWx5IGNhdXNlcyBidWdzXG4gICAgICAvLyBhbmQgbm9ib2R5IHNob3VsZCBiZSB1c2luZyB0aGlzIGluIGV4aXN0aW5nIGNvZGUuXG5cbiAgICAgIGlmIChyZWFsQ29udGV4dC5Db25zdW1lciA9PT0gQ29udGV4dCkge1xuICAgICAgICBlcnJvcignQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuQ29uc3VtZXIpIGlzIG5vdCBzdXBwb3J0ZWQsIG1heSBjYXVzZSBidWdzLCBhbmQgd2lsbCBiZSAnICsgJ3JlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkPycpO1xuICAgICAgfSBlbHNlIGlmIChyZWFsQ29udGV4dC5Qcm92aWRlciA9PT0gQ29udGV4dCkge1xuICAgICAgICBlcnJvcignQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuUHJvdmlkZXIpIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkPycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKTtcbn1cbmZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG59XG5mdW5jdGlvbiB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpO1xufVxuZnVuY3Rpb24gdXNlUmVmKGluaXRpYWxWYWx1ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZihpbml0aWFsVmFsdWUpO1xufVxuZnVuY3Rpb24gdXNlRWZmZWN0KGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUVmZmVjdChjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUxheW91dEVmZmVjdChjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VNZW1vKGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZU1lbW8oY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKSB7XG4gIHtcbiAgICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gICAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pO1xuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIGlmIChSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICBpZiAobmFtZSkge1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKGVsZW1lbnRQcm9wcykge1xuICBpZiAoZWxlbWVudFByb3BzICE9PSBudWxsICYmIGVsZW1lbnRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKGVsZW1lbnRQcm9wcy5fX3NvdXJjZSk7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgaWYgKCFpbmZvKSB7XG4gICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbmZvO1xufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICB9XG5cbiAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAge1xuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcbiAgfVxuXG4gIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobm9kZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKTtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIG5hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZnJhZ21lbnQpO1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgfVxufVxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gIGlmICghdmFsaWRUeXBlKSB7XG4gICAgdmFyIGluZm8gPSAnJztcblxuICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhwcm9wcyk7XG5cbiAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgIH1cblxuICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBlcnJvcignUmVhY3QuY3JlYXRlRWxlbWVudDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgaWYgKHZhbGlkVHlwZSkge1xuICAgIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFKSB7XG4gICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG52YXIgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSBmYWxzZTtcbmZ1bmN0aW9uIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbih0eXBlKSB7XG4gIHZhciB2YWxpZGF0ZWRGYWN0b3J5ID0gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uLmJpbmQobnVsbCwgdHlwZSk7XG4gIHZhbGlkYXRlZEZhY3RvcnkudHlwZSA9IHR5cGU7XG5cbiAge1xuICAgIGlmICghZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkpIHtcbiAgICAgIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5ID0gdHJ1ZTtcblxuICAgICAgd2FybignUmVhY3QuY3JlYXRlRmFjdG9yeSgpIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIENvbnNpZGVyIHVzaW5nIEpTWCAnICsgJ29yIHVzZSBSZWFjdC5jcmVhdGVFbGVtZW50KCkgZGlyZWN0bHkgaW5zdGVhZC4nKTtcbiAgICB9IC8vIExlZ2FjeSBob29rOiByZW1vdmUgaXRcblxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbGlkYXRlZEZhY3RvcnksICd0eXBlJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2FybignRmFjdG9yeS50eXBlIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB0aGUgY2xhc3MgZGlyZWN0bHkgJyArICdiZWZvcmUgcGFzc2luZyBpdCB0byBjcmVhdGVGYWN0b3J5LicpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAndHlwZScsIHtcbiAgICAgICAgICB2YWx1ZTogdHlwZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsaWRhdGVkRmFjdG9yeTtcbn1cbmZ1bmN0aW9uIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uKGVsZW1lbnQsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgbmV3RWxlbWVudCA9IGNsb25lRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCBuZXdFbGVtZW50LnR5cGUpO1xuICB9XG5cbiAgdmFsaWRhdGVQcm9wVHlwZXMobmV3RWxlbWVudCk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG57XG5cbiAgdHJ5IHtcbiAgICB2YXIgZnJvemVuT2JqZWN0ID0gT2JqZWN0LmZyZWV6ZSh7fSk7XG4gICAgdmFyIHRlc3RNYXAgPSBuZXcgTWFwKFtbZnJvemVuT2JqZWN0LCBudWxsXV0pO1xuICAgIHZhciB0ZXN0U2V0ID0gbmV3IFNldChbZnJvemVuT2JqZWN0XSk7IC8vIFRoaXMgaXMgbmVjZXNzYXJ5IGZvciBSb2xsdXAgdG8gbm90IGNvbnNpZGVyIHRoZXNlIHVudXNlZC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcm9sbHVwL3JvbGx1cC9pc3N1ZXMvMTc3MVxuICAgIC8vIFRPRE86IHdlIGNhbiByZW1vdmUgdGhlc2UgaWYgUm9sbHVwIGZpeGVzIHRoZSBidWcuXG5cbiAgICB0ZXN0TWFwLnNldCgwLCAwKTtcbiAgICB0ZXN0U2V0LmFkZCgwKTtcbiAgfSBjYXRjaCAoZSkge1xuICB9XG59XG5cbnZhciBjcmVhdGVFbGVtZW50JDEgPSAgY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjbG9uZUVsZW1lbnQkMSA9ICBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbiA7XG52YXIgY3JlYXRlRmFjdG9yeSA9ICBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24gO1xudmFyIENoaWxkcmVuID0ge1xuICBtYXA6IG1hcENoaWxkcmVuLFxuICBmb3JFYWNoOiBmb3JFYWNoQ2hpbGRyZW4sXG4gIGNvdW50OiBjb3VudENoaWxkcmVuLFxuICB0b0FycmF5OiB0b0FycmF5LFxuICBvbmx5OiBvbmx5Q2hpbGRcbn07XG5cbmV4cG9ydHMuQ2hpbGRyZW4gPSBDaGlsZHJlbjtcbmV4cG9ydHMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuZXhwb3J0cy5GcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG5leHBvcnRzLlByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbmV4cG9ydHMuUHVyZUNvbXBvbmVudCA9IFB1cmVDb21wb25lbnQ7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG5leHBvcnRzLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEID0gUmVhY3RTaGFyZWRJbnRlcm5hbHM7XG5leHBvcnRzLmNsb25lRWxlbWVudCA9IGNsb25lRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDtcbmV4cG9ydHMuY3JlYXRlRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQkMTtcbmV4cG9ydHMuY3JlYXRlRmFjdG9yeSA9IGNyZWF0ZUZhY3Rvcnk7XG5leHBvcnRzLmNyZWF0ZVJlZiA9IGNyZWF0ZVJlZjtcbmV4cG9ydHMuZm9yd2FyZFJlZiA9IGZvcndhcmRSZWY7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50ID0gaXNWYWxpZEVsZW1lbnQ7XG5leHBvcnRzLmxhenkgPSBsYXp5O1xuZXhwb3J0cy5tZW1vID0gbWVtbztcbmV4cG9ydHMudXNlQ2FsbGJhY2sgPSB1c2VDYWxsYmFjaztcbmV4cG9ydHMudXNlQ29udGV4dCA9IHVzZUNvbnRleHQ7XG5leHBvcnRzLnVzZURlYnVnVmFsdWUgPSB1c2VEZWJ1Z1ZhbHVlO1xuZXhwb3J0cy51c2VFZmZlY3QgPSB1c2VFZmZlY3Q7XG5leHBvcnRzLnVzZUltcGVyYXRpdmVIYW5kbGUgPSB1c2VJbXBlcmF0aXZlSGFuZGxlO1xuZXhwb3J0cy51c2VMYXlvdXRFZmZlY3QgPSB1c2VMYXlvdXRFZmZlY3Q7XG5leHBvcnRzLnVzZU1lbW8gPSB1c2VNZW1vO1xuZXhwb3J0cy51c2VSZWR1Y2VyID0gdXNlUmVkdWNlcjtcbmV4cG9ydHMudXNlUmVmID0gdXNlUmVmO1xuZXhwb3J0cy51c2VTdGF0ZSA9IHVzZVN0YXRlO1xuZXhwb3J0cy52ZXJzaW9uID0gUmVhY3RWZXJzaW9uO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3ByaW5nLCB1c2VUcmFuc2l0aW9uLCBhbmltYXRlZCwgY29uZmlnIH0gZnJvbSBcInJlYWN0LXNwcmluZ1wiO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIGNvbnN0IHByb3BzID0gdXNlU3ByaW5nKHsgb3BhY2l0eTogMiwgZnJvbTogeyBvcGFjaXR5OiAwIH0gfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxhbmltYXRlZC5kaXYgc3R5bGU9e3Byb3BzfT5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwib3BlbmluZ0hlYWRcIj5XZWxjb21lIHRvIHNwb3J0cyBBdmFsYW5jaGU8L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cIm9wZW5pbmdUZXh0XCI+XHJcbiAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2RcclxuICAgICAgICB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXRcclxuICAgICAgPC9wPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImN1c3RvbS1idXR0b25cIj5HZXQgU3RhcnRlZDwvYnV0dG9uPlxyXG4gICAgPC9hbmltYXRlZC5kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc2xpZGVzID0gW1xyXG4gIHtcclxuICAgIGlkOiAwLFxyXG4gICAgdXJsOlxyXG4gICAgICBcInBob3RvLTE1NDQ1MTE5MTYtMDE0OGNjZGViODc3P2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmdz0xOTAxJnE9ODBpXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHVybDpcclxuICAgICAgXCJwaG90by0xNTQ0NTcyNTcxLWFiOTRmZDg3MmNlND9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5Jnc9MTUzNCZxPTgwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHVybDogXCJyZXNlcnZlL2JuVzFUdVRWMllHY29oMUh5V05RX0lNR18wMjA3LkpQRz9peGxpYj1yYi0xLjIuMSZ3PTE1MzQmcT04MFwiLFxyXG4gIH0sXHJcbiAgeyBpZDogMywgdXJsOiBcInBob3RvLTE1NDAyMDYzOTUtNjg4MDg1NzIzMzJmP2l4bGliPXJiLTEuMi4xJnc9MTE4MSZxPTgwXCIgfSxcclxuXTtcclxuXHJcbmNvbnN0IEJyaWVmaW5nU2VjdGlvbiA9KCk9PntcclxuICAgIGNvbnN0IGJyaWVmdFRleHQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMnXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkaXNwbGF5Qm94ZXMtYm94XCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkaXNwbGF5Qm94ZXMtbGlzdFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheUJveGVzLXRleHQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNwbGF5Qm94ZXMtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIlwiIGNsYXNzTmFtZT1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRpc3BsYXlCb3hlcy1oZWFkaW5nXCI+TG9yZW08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkaXNwbGF5Qm94ZXMtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHticmllZnRUZXh0fVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRpc3BsYXlCb3hlcy1saXN0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNwbGF5Qm94ZXMtdGV4dC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc3BsYXlCb3hlcy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgY2xhc3NOYW1lPVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGlzcGxheUJveGVzLWhlYWRpbmdcIj5Mb3JlbTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRpc3BsYXlCb3hlcy10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2JyaWVmdFRleHR9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGlzcGxheUJveGVzLWxpc3RcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc3BsYXlCb3hlcy10ZXh0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheUJveGVzLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJcIiBjbGFzc05hbWU9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkaXNwbGF5Qm94ZXMtaGVhZGluZ1wiPkxvcmVtPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGlzcGxheUJveGVzLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7YnJpZWZ0VGV4dH1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkaXNwbGF5Qm94ZXMtbGlzdFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheUJveGVzLXRleHQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNwbGF5Qm94ZXMtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIlwiIGNsYXNzTmFtZT1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRpc3BsYXlCb3hlcy1oZWFkaW5nXCI+TG9yZW08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkaXNwbGF5Qm94ZXMtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHticmllZnRUZXh0fVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRpc3BsYXlCb3hlcy1saXN0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNwbGF5Qm94ZXMtdGV4dC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc3BsYXlCb3hlcy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgY2xhc3NOYW1lPVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGlzcGxheUJveGVzLWhlYWRpbmdcIj5Mb3JlbTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRpc3BsYXlCb3hlcy10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2JyaWVmdFRleHR9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGlzcGxheUJveGVzLWxpc3RcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc3BsYXlCb3hlcy10ZXh0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheUJveGVzLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJcIiBjbGFzc05hbWU9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkaXNwbGF5Qm94ZXMtaGVhZGluZ1wiPkxvcmVtPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGlzcGxheUJveGVzLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7YnJpZWZ0VGV4dH1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICApXHJcbn1cclxuXHJcbi8vIGNvbnN0IEltYWdlVHJhbnNpdGlvbiA9ICgpID0+IHtcclxuLy8gICBjb25zdCBbaW5kZXgsIHNldF0gPSB1c2VTdGF0ZSgwKTtcclxuLy8gICBjb25zdCB0cmFuc2l0aW9ucyA9IHVzZVRyYW5zaXRpb24oc2xpZGVzW2luZGV4XSwgKGl0ZW0pID0+IGl0ZW0uaWQsIHtcclxuLy8gICAgIGZyb206IHsgb3BhY2l0eTogMCB9LFxyXG4vLyAgICAgZW50ZXI6IHsgb3BhY2l0eTogMSB9LFxyXG4vLyAgICAgbGVhdmU6IHsgb3BhY2l0eTogMCB9LFxyXG4vLyAgICAgY29uZmlnOiBjb25maWcubW9sYXNzZXMsXHJcbi8vICAgfSk7XHJcbi8vICAgdXNlRWZmZWN0KFxyXG4vLyAgICAgKCkgPT4gdm9pZCBzZXRJbnRlcnZhbCgoKSA9PiBzZXQoKHN0YXRlKSA9PiAoc3RhdGUgKyAxKSAlIDQpLCAyMDAwKSxcclxuLy8gICAgIFtdXHJcbi8vICAgKTtcclxuLy8gICByZXR1cm4gdHJhbnNpdGlvbnMubWFwKCh7IGl0ZW0sIHByb3BzLCBrZXkgfSkgPT4gKFxyXG4vLyAgICAgPGFuaW1hdGVkLmRpdlxyXG4vLyAgICAgICBrZXk9e2tleX1cclxuLy8gICAgICAgY2xhc3M9XCJiZ1wiXHJcbi8vICAgICAgIHN0eWxlPXt7XHJcbi8vICAgICAgICAgLi4ucHJvcHMsXHJcbi8vICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS8ke2l0ZW0udXJsfSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcClgLFxyXG4vLyAgICAgICB9fVxyXG4vLyAgICAgLz5cclxuLy8gICApKTtcclxuLy8gfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRoZU1haW4oKSB7XHJcbiAgY29uc3QgcHJvcHMgPSB1c2VTcHJpbmcoeyBvcGFjaXR5OiAyLCBmcm9tOiB7IG9wYWNpdHk6IDAgfSB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJCb3hcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoaWZ0Qm94XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtZ3JpZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cclxuICAgICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXR0ZXJcIj5cclxuXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJUZXh0LXNlY3Rpb25cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclRleHQtZmllbGRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJUZXh0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2VudGVyVGV4dC1jb250YWluZXItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICBXaG8gYXJlIHdlXHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC8+XHJcblxyXG4gICAgICAgIDxhbmltYXRlZC5kaXYgc3R5bGU9e3Byb3BzfT5cclxuICAgICAgICAgPEJyaWVmaW5nU2VjdGlvbi8+XHJcbiAgICAgICAgPC9hbmltYXRlZC5kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXR0ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtZ3JpZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImgzdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIExvcmVtIElwc3VtXHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFRleHRcIj5cclxuICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvclxyXG4gICAgICAgICAgICBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpc1xyXG4gICAgICAgICAgICBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LlxyXG4gICAgICAgICAgICBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXR0ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtZ3JpZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XHJcblxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaDN0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTG9yZW0gSXBzdW1cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yXHJcbiAgICAgICAgICAgIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzXHJcbiAgICAgICAgICAgIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuXHJcbiAgICAgICAgICAgIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmVcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWduVXAtc2VjdGlvblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lnblVwLWZpZWxkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ25VcC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInNpZ25VcC1jb250YWluZXItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgU3RhcnQgU2VsbGluZyBPbmxpbmUgZm9yIEZyZWVcclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi92ZW5kb3Itc2lnbnVwXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzaWduVXAtYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICBHZXQgc3RhcnRlZCBmb3IgZnJlZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXR0ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtZ3JpZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImgzdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIExvcmVtIElwc3VtXHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFRleHRcIj5cclxuICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvclxyXG4gICAgICAgICAgICBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpc1xyXG4gICAgICAgICAgICBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LlxyXG4gICAgICAgICAgICBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=