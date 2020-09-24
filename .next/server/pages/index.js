module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return theMain; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\D\\Downloads\\Theebz\\Projects\\Avalanche\\avalanchenext\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Header() {
  const props = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({
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

const slides = [{
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

const BriefingSection = () => {
  const brieftText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis';
  return __jsx("ul", {
    className: "displayBoxes-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 10
    }
  }, __jsx("li", {
    className: "displayBoxes-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "displayBoxes-text-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "displayBoxes-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "",
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 19
    }
  })), __jsx("p", {
    className: "displayBoxes-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, "Lorem"), __jsx("p", {
    className: "displayBoxes-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, brieftText))), __jsx("li", {
    className: "displayBoxes-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "displayBoxes-text-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "displayBoxes-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "",
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 19
    }
  })), __jsx("p", {
    className: "displayBoxes-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, "Lorem"), __jsx("p", {
    className: "displayBoxes-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, brieftText))), __jsx("li", {
    className: "displayBoxes-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "displayBoxes-text-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "displayBoxes-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "",
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 19
    }
  })), __jsx("p", {
    className: "displayBoxes-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, "Lorem"), __jsx("p", {
    className: "displayBoxes-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, brieftText))), __jsx("li", {
    className: "displayBoxes-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "displayBoxes-text-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "displayBoxes-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "",
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 19
    }
  })), __jsx("p", {
    className: "displayBoxes-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, "Lorem"), __jsx("p", {
    className: "displayBoxes-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, brieftText))), __jsx("li", {
    className: "displayBoxes-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "displayBoxes-text-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "displayBoxes-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "",
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 19
    }
  })), __jsx("p", {
    className: "displayBoxes-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, "Lorem"), __jsx("p", {
    className: "displayBoxes-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, brieftText))), __jsx("li", {
    className: "displayBoxes-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "displayBoxes-text-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "displayBoxes-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "",
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 19
    }
  })), __jsx("p", {
    className: "displayBoxes-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, "Lorem"), __jsx("p", {
    className: "displayBoxes-text",
    __self: undefined,
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


function theMain() {
  const props = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({
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

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-spring":
/*!*******************************!*\
  !*** external "react-spring" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zcHJpbmdcIiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJwcm9wcyIsInVzZVNwcmluZyIsIm9wYWNpdHkiLCJmcm9tIiwic2xpZGVzIiwiaWQiLCJ1cmwiLCJCcmllZmluZ1NlY3Rpb24iLCJicmllZnRUZXh0IiwidGhlTWFpbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxHQUFrQjtBQUNoQixRQUFNQyxLQUFLLEdBQUdDLDhEQUFTLENBQUM7QUFBRUMsV0FBTyxF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SyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRU07QUFBSSxhQUFTLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZOLEVBS007QUFBRyxhQUFTLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRUQUxOLENBREYsRUFjRTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkRixDQURGLENBakNGLEVBb0RFO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBS0U7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSSxhQUFTLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURBLEVBSU07QUFBRyxhQUFTLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRUQUpOLENBTEYsQ0FERixDQXBERixFQTBFRTtBQUFLLGFBQVMsRUFBQyxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLHlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBREYsRUFJRTtBQUFHLFFBQUksRUFBQyxnQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxhQUFTLEVBQUMsZUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixDQUpGLENBREYsQ0FERixDQURBLENBMUVGLEVBMkZFO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVNO0FBQUksYUFBUyxFQUFDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGTixFQUtNO0FBQUcsYUFBUyxFQUFDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0VEFMTixDQURGLEVBY0U7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEYsQ0FERixDQTNGRixDQURGO0FBa0hELEM7Ozs7Ozs7Ozs7O0FDOVBELGtDOzs7Ozs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNwcmluZywgdXNlVHJhbnNpdGlvbiwgYW5pbWF0ZWQsIGNvbmZpZyB9IGZyb20gXCJyZWFjdC1zcHJpbmdcIjtcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICBjb25zdCBwcm9wcyA9IHVzZVNwcmluZyh7IG9wYWNpdHk6IDIsIGZyb206IHsgb3BhY2l0eTogMCB9IH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YW5pbWF0ZWQuZGl2IHN0eWxlPXtwcm9wc30+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cIm9wZW5pbmdIZWFkXCI+V2VsY29tZSB0byBzcG9ydHMgQXZhbGFuY2hlPC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJvcGVuaW5nVGV4dFwiPlxyXG4gICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kXHJcbiAgICAgICAgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0XHJcbiAgICAgIDwvcD5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjdXN0b20tYnV0dG9uXCI+R2V0IFN0YXJ0ZWQ8L2J1dHRvbj5cclxuICAgIDwvYW5pbWF0ZWQuZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHNsaWRlcyA9IFtcclxuICB7XHJcbiAgICBpZDogMCxcclxuICAgIHVybDpcclxuICAgICAgXCJwaG90by0xNTQ0NTExOTE2LTAxNDhjY2RlYjg3Nz9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5Jnc9MTkwMSZxPTgwaVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICB1cmw6XHJcbiAgICAgIFwicGhvdG8tMTU0NDU3MjU3MS1hYjk0ZmQ4NzJjZTQ/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZ3PTE1MzQmcT04MFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICB1cmw6IFwicmVzZXJ2ZS9iblcxVHVUVjJZR2NvaDFIeVdOUV9JTUdfMDIwNy5KUEc/aXhsaWI9cmItMS4yLjEmdz0xNTM0JnE9ODBcIixcclxuICB9LFxyXG4gIHsgaWQ6IDMsIHVybDogXCJwaG90by0xNTQwMjA2Mzk1LTY4ODA4NTcyMzMyZj9peGxpYj1yYi0xLjIuMSZ3PTExODEmcT04MFwiIH0sXHJcbl07XHJcblxyXG5jb25zdCBCcmllZmluZ1NlY3Rpb24gPSgpPT57XHJcbiAgICBjb25zdCBicmllZnRUZXh0ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvcmluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzJ1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZGlzcGxheUJveGVzLWJveFwiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGlzcGxheUJveGVzLWxpc3RcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc3BsYXlCb3hlcy10ZXh0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheUJveGVzLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJcIiBjbGFzc05hbWU9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkaXNwbGF5Qm94ZXMtaGVhZGluZ1wiPkxvcmVtPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGlzcGxheUJveGVzLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7YnJpZWZ0VGV4dH1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkaXNwbGF5Qm94ZXMtbGlzdFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheUJveGVzLXRleHQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNwbGF5Qm94ZXMtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIlwiIGNsYXNzTmFtZT1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRpc3BsYXlCb3hlcy1oZWFkaW5nXCI+TG9yZW08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkaXNwbGF5Qm94ZXMtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHticmllZnRUZXh0fVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRpc3BsYXlCb3hlcy1saXN0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNwbGF5Qm94ZXMtdGV4dC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc3BsYXlCb3hlcy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgY2xhc3NOYW1lPVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGlzcGxheUJveGVzLWhlYWRpbmdcIj5Mb3JlbTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRpc3BsYXlCb3hlcy10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2JyaWVmdFRleHR9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGlzcGxheUJveGVzLWxpc3RcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc3BsYXlCb3hlcy10ZXh0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheUJveGVzLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJcIiBjbGFzc05hbWU9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkaXNwbGF5Qm94ZXMtaGVhZGluZ1wiPkxvcmVtPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGlzcGxheUJveGVzLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7YnJpZWZ0VGV4dH1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkaXNwbGF5Qm94ZXMtbGlzdFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheUJveGVzLXRleHQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNwbGF5Qm94ZXMtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIlwiIGNsYXNzTmFtZT1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRpc3BsYXlCb3hlcy1oZWFkaW5nXCI+TG9yZW08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkaXNwbGF5Qm94ZXMtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHticmllZnRUZXh0fVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRpc3BsYXlCb3hlcy1saXN0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNwbGF5Qm94ZXMtdGV4dC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc3BsYXlCb3hlcy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgY2xhc3NOYW1lPVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGlzcGxheUJveGVzLWhlYWRpbmdcIj5Mb3JlbTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRpc3BsYXlCb3hlcy10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2JyaWVmdFRleHR9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgKVxyXG59XHJcblxyXG4vLyBjb25zdCBJbWFnZVRyYW5zaXRpb24gPSAoKSA9PiB7XHJcbi8vICAgY29uc3QgW2luZGV4LCBzZXRdID0gdXNlU3RhdGUoMCk7XHJcbi8vICAgY29uc3QgdHJhbnNpdGlvbnMgPSB1c2VUcmFuc2l0aW9uKHNsaWRlc1tpbmRleF0sIChpdGVtKSA9PiBpdGVtLmlkLCB7XHJcbi8vICAgICBmcm9tOiB7IG9wYWNpdHk6IDAgfSxcclxuLy8gICAgIGVudGVyOiB7IG9wYWNpdHk6IDEgfSxcclxuLy8gICAgIGxlYXZlOiB7IG9wYWNpdHk6IDAgfSxcclxuLy8gICAgIGNvbmZpZzogY29uZmlnLm1vbGFzc2VzLFxyXG4vLyAgIH0pO1xyXG4vLyAgIHVzZUVmZmVjdChcclxuLy8gICAgICgpID0+IHZvaWQgc2V0SW50ZXJ2YWwoKCkgPT4gc2V0KChzdGF0ZSkgPT4gKHN0YXRlICsgMSkgJSA0KSwgMjAwMCksXHJcbi8vICAgICBbXVxyXG4vLyAgICk7XHJcbi8vICAgcmV0dXJuIHRyYW5zaXRpb25zLm1hcCgoeyBpdGVtLCBwcm9wcywga2V5IH0pID0+IChcclxuLy8gICAgIDxhbmltYXRlZC5kaXZcclxuLy8gICAgICAga2V5PXtrZXl9XHJcbi8vICAgICAgIGNsYXNzPVwiYmdcIlxyXG4vLyAgICAgICBzdHlsZT17e1xyXG4vLyAgICAgICAgIC4uLnByb3BzLFxyXG4vLyAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vJHtpdGVtLnVybH0mYXV0bz1mb3JtYXQmZml0PWNyb3ApYCxcclxuLy8gICAgICAgfX1cclxuLy8gICAgIC8+XHJcbi8vICAgKSk7XHJcbi8vIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aGVNYWluKCkge1xyXG4gIGNvbnN0IHByb3BzID0gdXNlU3ByaW5nKHsgb3BhY2l0eTogMiwgZnJvbTogeyBvcGFjaXR5OiAwIH0gfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyQm94XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGlmdEJveFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWdyaWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml0dGVyXCI+XHJcblxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyVGV4dC1zZWN0aW9uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJUZXh0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyVGV4dC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNlbnRlclRleHQtY29udGFpbmVyLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgV2hvIGFyZSB3ZVxyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvPlxyXG5cclxuICAgICAgICA8YW5pbWF0ZWQuZGl2IHN0eWxlPXtwcm9wc30+XHJcbiAgICAgICAgIDxCcmllZmluZ1NlY3Rpb24vPlxyXG4gICAgICAgIDwvYW5pbWF0ZWQuZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml0dGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWdyaWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoM3RleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICBMb3JlbSBJcHN1bVxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUZXh0XCI+XHJcbiAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3JcclxuICAgICAgICAgICAgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXNcclxuICAgICAgICAgICAgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC5cclxuICAgICAgICAgICAgRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml0dGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWdyaWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImgzdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIExvcmVtIElwc3VtXHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFRleHRcIj5cclxuICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvclxyXG4gICAgICAgICAgICBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpc1xyXG4gICAgICAgICAgICBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LlxyXG4gICAgICAgICAgICBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lnblVwLXNlY3Rpb25cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ25VcC1maWVsZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWduVXAtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzaWduVXAtY29udGFpbmVyLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIFN0YXJ0IFNlbGxpbmcgT25saW5lIGZvciBGcmVlXHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvdmVuZG9yLXNpZ251cFwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2lnblVwLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgR2V0IHN0YXJ0ZWQgZm9yIGZyZWVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml0dGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWdyaWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoM3RleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICBMb3JlbSBJcHN1bVxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUZXh0XCI+XHJcbiAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3JcclxuICAgICAgICAgICAgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXNcclxuICAgICAgICAgICAgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC5cclxuICAgICAgICAgICAgRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zcHJpbmdcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==