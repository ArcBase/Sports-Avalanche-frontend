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
/* harmony import */ var _page_sections_briefSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page_sections/briefSection */ "./pages/page_sections/briefSection.js");
/* harmony import */ var _page_sections_meetTheTeam__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page_sections/meetTheTeam */ "./pages/page_sections/meetTheTeam.js");
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

/***/ }),

/***/ "./pages/page_sections/briefSection.js":
/*!*********************************************!*\
  !*** ./pages/page_sections/briefSection.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\D\\Downloads\\Theebz\\Projects\\Avalanche\\avalanchenext\\pages\\page_sections\\briefSection.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
const icon1 = 'https://prismic-io.s3.amazonaws.com/www-static/4083b409-5e65-4403-86a8-7ed8f501a0d8_icon-task-list-multiple.svg';
const icon2 = 'https://prismic-io.s3.amazonaws.com/www-static/1c791b14-833f-4190-a865-a55e11055fc0_icon-certified-certificate.svg';
const icon3 = 'https://prismic-io.s3.amazonaws.com/www-static/1c791b14-833f-4190-a865-a55e11055fc0_icon-certified-certificate.svg';
const icon4 = 'https://prismic-io.s3.amazonaws.com/www-static/1c791b14-833f-4190-a865-a55e11055fc0_icon-certified-certificate.svg';

const BriefingSection = () => {
  const brieftText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt quis';
  return __jsx("ul", {
    className: "displayBoxes-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 10
    }
  }, __jsx("li", {
    className: "displayBoxes-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "displayBoxes-text-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "displayBoxes-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: icon1,
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 19
    }
  })), __jsx("p", {
    className: "displayBoxes-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, "Lorem"), __jsx("p", {
    className: "displayBoxes-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, brieftText))), __jsx("li", {
    className: "displayBoxes-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "displayBoxes-text-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "displayBoxes-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: icon2,
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 19
    }
  })), __jsx("p", {
    className: "displayBoxes-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, "Lorem"), __jsx("p", {
    className: "displayBoxes-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, brieftText))), __jsx("li", {
    className: "displayBoxes-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "displayBoxes-text-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "displayBoxes-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: icon3,
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 19
    }
  })), __jsx("p", {
    className: "displayBoxes-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, "Lorem"), __jsx("p", {
    className: "displayBoxes-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, brieftText))), __jsx("li", {
    className: "displayBoxes-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "displayBoxes-text-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "displayBoxes-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: icon4,
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 19
    }
  })), __jsx("p", {
    className: "displayBoxes-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, "Lorem"), __jsx("p", {
    className: "displayBoxes-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, brieftText))));
};

/* harmony default export */ __webpack_exports__["default"] = (BriefingSection);

/***/ }),

/***/ "./pages/page_sections/meetTheTeam.js":
/*!********************************************!*\
  !*** ./pages/page_sections/meetTheTeam.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Team; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\D\\Downloads\\Theebz\\Projects\\Avalanche\\avalanchenext\\pages\\page_sections\\meetTheTeam.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


1;
const icon1 = 'https://prismic-io.s3.amazonaws.com/www-static/4083b409-5e65-4403-86a8-7ed8f501a0d8_icon-task-list-multiple.svg';
const icon2 = 'https://prismic-io.s3.amazonaws.com/www-static/1c791b14-833f-4190-a865-a55e11055fc0_icon-certified-certificate.svg';
const icon3 = 'https://prismic-io.s3.amazonaws.com/www-static/1c791b14-833f-4190-a865-a55e11055fc0_icon-certified-certificate.svg';
const icon4 = 'https://prismic-io.s3.amazonaws.com/www-static/1c791b14-833f-4190-a865-a55e11055fc0_icon-certified-certificate.svg';
const brieftText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis';
const image1 = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';
class Team extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
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

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcGFnZV9zZWN0aW9ucy9icmllZlNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcGFnZV9zZWN0aW9ucy9tZWV0VGhlVGVhbS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNsaWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3ByaW5nXCIiXSwibmFtZXMiOlsiSGVhZGVyIiwicHJvcHMiLCJ1c2VTcHJpbmciLCJvcGFjaXR5IiwiZnJvbSIsInNsaWRlcyIsImlkIiwidXJsIiwidGhlTWFpbiIsImljb24xIiwiaWNvbjIiLCJpY29uMyIsImljb240IiwiQnJpZWZpbmdTZWN0aW9uIiwiYnJpZWZ0VGV4dCIsImltYWdlMSIsIlRlYW0iLCJSZWFjdCIsIkNvbXBvbmVudCIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxHQUFrQjtBQUNoQixRQUFNQyxLQUFLLEdBQUdDLDhEQUFTLENBQUM7QUFBRUMsV0FBTyxFQUFFLENBQVg7QUFBY0MsUUFBSSxFQUFFO0FBQUVELGFBQU8sRUFBRTtBQUFYO0FBQXBCLEdBQUQsQ0FBdkI7QUFDQSxTQUNFLE1BQUMscURBQUQsQ0FBVSxHQUFWO0FBQWMsU0FBSyxFQUFFRixLQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURGLEVBRUU7QUFBRyxhQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhHQUZGLEVBTUU7QUFBUSxhQUFTLEVBQUMsZUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORixDQURGO0FBVUQ7O0FBRUQsTUFBTUksTUFBTSxHQUFHLENBQ2I7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsS0FBRyxFQUNEO0FBSEosQ0FEYSxFQU1iO0FBQ0VELElBQUUsRUFBRSxDQUROO0FBRUVDLEtBQUcsRUFDRDtBQUhKLENBTmEsRUFXYjtBQUNFRCxJQUFFLEVBQUUsQ0FETjtBQUVFQyxLQUFHLEVBQUU7QUFGUCxDQVhhLEVBZWI7QUFBRUQsSUFBRSxFQUFFLENBQU47QUFBU0MsS0FBRyxFQUFFO0FBQWQsQ0FmYSxDQUFmLEMsQ0FrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQyxPQUFULEdBQW1CO0FBQ2hDLFFBQU1QLEtBQUssR0FBR0MsOERBQVMsQ0FBQztBQUFFQyxXQUFPLEVBQUUsQ0FBWDtBQUFjQyxRQUFJLEVBQUU7QUFBRUQsYUFBTyxFQUFFO0FBQVg7QUFBcEIsR0FBRCxDQUF2QjtBQUNBLFNBQ0UsbUVBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBS0U7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FERixDQURGLENBREYsRUFhRTtBQUFLLGFBQVMsRUFBQyxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxtRUFDRTtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyw2QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLENBREYsQ0FERixDQURGLENBREYsRUFVRSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixDQWJGLEVBMEJFO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVFO0FBQUcsYUFBUyxFQUFDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0VEFGRixDQURGLEVBV0U7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsQ0FERixDQTFCRixPQTBDRztBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxtRUFDRTtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyw2QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLENBREYsQ0FERixDQURGLENBREQsRUFXQyxNQUFDLHFEQUFELENBQVUsR0FBVjtBQUFjLFNBQUssRUFBRUYsS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBWEQsQ0ExQ0gsRUEwREU7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFRTtBQUFHLGFBQVMsRUFBQyxPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNFRBRkYsQ0FGRixDQURGLENBMURGLEVBMEVFO0FBQUssYUFBUyxFQUFDLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMseUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FERixFQUlFO0FBQUcsUUFBSSxFQUFDLGdCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLGFBQVMsRUFBQyxlQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURGLENBSkYsQ0FERixDQURGLENBREYsQ0ExRUYsRUF5RkU7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBRUU7QUFBRyxhQUFTLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRUQUZGLENBREYsRUFXRTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixDQURGLENBekZGLENBREY7QUEyR0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUtELE1BQU1RLEtBQUssR0FBRyxpSEFBZDtBQUNBLE1BQU1DLEtBQUssR0FBRyxvSEFBZDtBQUNBLE1BQU1DLEtBQUssR0FBRyxvSEFBZDtBQUNBLE1BQU1DLEtBQUssR0FBRyxvSEFBZDs7QUFFQSxNQUFNQyxlQUFlLEdBQUUsTUFBSTtBQUN2QixRQUFNQyxVQUFVLEdBQUcsK0ZBQW5CO0FBQ0EsU0FDSztBQUFJLGFBQVMsRUFBQyxrQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0c7QUFBSSxhQUFTLEVBQUMsbUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVMLEtBQVY7QUFBaUIsYUFBUyxFQUFDLEVBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBRyxhQUFTLEVBQUMsc0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLEVBS0U7QUFBRyxhQUFTLEVBQUMsbUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLSyxVQURMLENBTEYsQ0FERixDQURILEVBYUc7QUFBSSxhQUFTLEVBQUMsbUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVKLEtBQVY7QUFBaUIsYUFBUyxFQUFDLEVBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBRyxhQUFTLEVBQUMsc0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLEVBS0U7QUFBRyxhQUFTLEVBQUMsbUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLSSxVQURMLENBTEYsQ0FERixDQWJILEVBeUJHO0FBQUksYUFBUyxFQUFDLG1CQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQywyQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFFSCxLQUFWO0FBQWlCLGFBQVMsRUFBQyxFQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUcsYUFBUyxFQUFDLHNCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixFQUtFO0FBQUcsYUFBUyxFQUFDLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0csVUFETCxDQUxGLENBREYsQ0F6QkgsRUFxQ0c7QUFBSSxhQUFTLEVBQUMsbUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVGLEtBQVY7QUFBaUIsYUFBUyxFQUFDLEVBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBRyxhQUFTLEVBQUMsc0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLEVBS0U7QUFBRyxhQUFTLEVBQUMsbUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLRSxVQURMLENBTEYsQ0FERixDQXJDSCxDQURMO0FBcURILENBdkREOztBQTBEZUQsOEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBO0FBRUEsTUFBTUosS0FBSyxHQUFHLGlIQUFkO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLG9IQUFkO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLG9IQUFkO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLG9IQUFkO0FBQ0EsTUFBTUUsVUFBVSxHQUFHLDBKQUFuQjtBQUdBLE1BQU1DLE1BQU0sR0FBRyx1SUFBZjtBQUVlLE1BQU1DLElBQU4sU0FBbUJDLDRDQUFLLENBQUNDLFNBQXpCLENBQW1DO0FBQ2hEQyxRQUFNLEdBQUc7QUFFUCxXQUNFLG1FQUVFO0FBQUssZUFBUyxFQUFDLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQTtBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BS007QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ087QUFBSyxlQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsRUFBRUosTUFBVjtBQUNBLGVBQVMsRUFBQyx3QkFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FERixFQU1FO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBQyxtQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBSUU7QUFBRyxlQUFTLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSkYsQ0FORixDQURQLENBTE4sRUF1QlM7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxlQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsRUFBRUEsTUFBVjtBQUNBLGVBQVMsRUFBQyx3QkFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FERixFQU1FO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBQyxtQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLENBTkYsQ0FESixDQXZCVCxFQXVDUztBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLGVBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssU0FBRyxFQUFFQSxNQUFWO0FBQ0EsZUFBUyxFQUFDLHdCQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGLEVBTUU7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsZUFBUyxFQUFDLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsQ0FORixDQURKLENBdkNULEVBc0RTO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxTQUFHLEVBQUVBLE1BQVY7QUFDQSxlQUFTLEVBQUMsd0JBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREYsRUFNRTtBQUFLLGVBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxlQUFTLEVBQUMsbUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixDQU5GLENBREosQ0F0RFQsQ0FEQSxDQUZGLENBREY7QUE4RUQ7O0FBakYrQyxDOzs7Ozs7Ozs7OztBQ2JsRCxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTcHJpbmcsIHVzZVRyYW5zaXRpb24sIGFuaW1hdGVkLCBjb25maWcgfSBmcm9tIFwicmVhY3Qtc3ByaW5nXCI7XHJcblxyXG5pbXBvcnQgQnJpZWZpbmdTZWN0aW9uIGZyb20gXCIuL3BhZ2Vfc2VjdGlvbnMvYnJpZWZTZWN0aW9uXCI7XHJcbmltcG9ydCBUZWFtIGZyb20gXCIuL3BhZ2Vfc2VjdGlvbnMvbWVldFRoZVRlYW1cIjtcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICBjb25zdCBwcm9wcyA9IHVzZVNwcmluZyh7IG9wYWNpdHk6IDIsIGZyb206IHsgb3BhY2l0eTogMCB9IH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YW5pbWF0ZWQuZGl2IHN0eWxlPXtwcm9wc30+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cIm9wZW5pbmdIZWFkXCI+V2VsY29tZSB0byBzcG9ydHMgQXZhbGFuY2hlPC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJvcGVuaW5nVGV4dFwiPlxyXG4gICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kXHJcbiAgICAgICAgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0XHJcbiAgICAgIDwvcD5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjdXN0b20tYnV0dG9uXCI+R2V0IFN0YXJ0ZWQ8L2J1dHRvbj5cclxuICAgIDwvYW5pbWF0ZWQuZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHNsaWRlcyA9IFtcclxuICB7XHJcbiAgICBpZDogMCxcclxuICAgIHVybDpcclxuICAgICAgXCJwaG90by0xNTQ0NTExOTE2LTAxNDhjY2RlYjg3Nz9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5Jnc9MTkwMSZxPTgwaVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICB1cmw6XHJcbiAgICAgIFwicGhvdG8tMTU0NDU3MjU3MS1hYjk0ZmQ4NzJjZTQ/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZ3PTE1MzQmcT04MFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICB1cmw6IFwicmVzZXJ2ZS9iblcxVHVUVjJZR2NvaDFIeVdOUV9JTUdfMDIwNy5KUEc/aXhsaWI9cmItMS4yLjEmdz0xNTM0JnE9ODBcIixcclxuICB9LFxyXG4gIHsgaWQ6IDMsIHVybDogXCJwaG90by0xNTQwMjA2Mzk1LTY4ODA4NTcyMzMyZj9peGxpYj1yYi0xLjIuMSZ3PTExODEmcT04MFwiIH0sXHJcbl07XHJcblxyXG4vLyBjb25zdCBJbWFnZVRyYW5zaXRpb24gPSAoKSA9PiB7XHJcbi8vICAgY29uc3QgW2luZGV4LCBzZXRdID0gdXNlU3RhdGUoMCk7XHJcbi8vICAgY29uc3QgdHJhbnNpdGlvbnMgPSB1c2VUcmFuc2l0aW9uKHNsaWRlc1tpbmRleF0sIChpdGVtKSA9PiBpdGVtLmlkLCB7XHJcbi8vICAgICBmcm9tOiB7IG9wYWNpdHk6IDAgfSxcclxuLy8gICAgIGVudGVyOiB7IG9wYWNpdHk6IDEgfSxcclxuLy8gICAgIGxlYXZlOiB7IG9wYWNpdHk6IDAgfSxcclxuLy8gICAgIGNvbmZpZzogY29uZmlnLm1vbGFzc2VzLFxyXG4vLyAgIH0pO1xyXG4vLyAgIHVzZUVmZmVjdChcclxuLy8gICAgICgpID0+IHZvaWQgc2V0SW50ZXJ2YWwoKCkgPT4gc2V0KChzdGF0ZSkgPT4gKHN0YXRlICsgMSkgJSA0KSwgMjAwMCksXHJcbi8vICAgICBbXVxyXG4vLyAgICk7XHJcbi8vICAgcmV0dXJuIHRyYW5zaXRpb25zLm1hcCgoeyBpdGVtLCBwcm9wcywga2V5IH0pID0+IChcclxuLy8gICAgIDxhbmltYXRlZC5kaXZcclxuLy8gICAgICAga2V5PXtrZXl9XHJcbi8vICAgICAgIGNsYXNzPVwiYmdcIlxyXG4vLyAgICAgICBzdHlsZT17e1xyXG4vLyAgICAgICAgIC4uLnByb3BzLFxyXG4vLyAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vJHtpdGVtLnVybH0mYXV0bz1mb3JtYXQmZml0PWNyb3ApYCxcclxuLy8gICAgICAgfX1cclxuLy8gICAgIC8+XHJcbi8vICAgKSk7XHJcbi8vIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aGVNYWluKCkge1xyXG4gIGNvbnN0IHByb3BzID0gdXNlU3ByaW5nKHsgb3BhY2l0eTogMiwgZnJvbTogeyBvcGFjaXR5OiAwIH0gfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyQm94XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGlmdEJveFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWdyaWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyVGV4dC1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyVGV4dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyVGV4dC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjZW50ZXJUZXh0LWNvbnRhaW5lci1oZWFkZXJcIj5XaG8gYXJlIHdlPC9oMz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgICA8VGVhbSAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml0dGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWdyaWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaDN0ZXh0XCI+TG9yZW0gSXBzdW08L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVGV4dFwiPlxyXG4gICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkb1xyXG4gICAgICAgICAgICAgIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0XHJcbiAgICAgICAgICAgICAgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzXHJcbiAgICAgICAgICAgICAgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW5cclxuICAgICAgICAgICAgICByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmVcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgczxkaXYgY2xhc3NOYW1lPVwiZml0dGVyXCI+XHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyVGV4dC1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyVGV4dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyVGV4dC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjZW50ZXJUZXh0LWNvbnRhaW5lci1oZWFkZXJcIj5XaG8gYXJlIHdlPC9oMz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICAgICAgPGFuaW1hdGVkLmRpdiBzdHlsZT17cHJvcHN9PlxyXG4gICAgICAgICAgPEJyaWVmaW5nU2VjdGlvbiAvPlxyXG4gICAgICAgIDwvYW5pbWF0ZWQuZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml0dGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWdyaWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaDN0ZXh0XCI+TG9yZW0gSXBzdW08L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVGV4dFwiPlxyXG4gICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkb1xyXG4gICAgICAgICAgICAgIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0XHJcbiAgICAgICAgICAgICAgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzXHJcbiAgICAgICAgICAgICAgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW5cclxuICAgICAgICAgICAgICByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmVcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ25VcC1zZWN0aW9uXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ25VcC1maWVsZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ25VcC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwic2lnblVwLWNvbnRhaW5lci1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIFN0YXJ0IFNlbGxpbmcgT25saW5lIGZvciBGcmVlXHJcbiAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiL3ZlbmRvci1zaWdudXBcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2lnblVwLWJ1dHRvblwiPkdldCBzdGFydGVkIGZvciBmcmVlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml0dGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWdyaWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaDN0ZXh0XCI+TG9yZW0gSXBzdW08L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVGV4dFwiPlxyXG4gICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkb1xyXG4gICAgICAgICAgICAgIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0XHJcbiAgICAgICAgICAgICAgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzXHJcbiAgICAgICAgICAgICAgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW5cclxuICAgICAgICAgICAgICByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmVcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJcclxuY29uc3QgaWNvbjEgPSAnaHR0cHM6Ly9wcmlzbWljLWlvLnMzLmFtYXpvbmF3cy5jb20vd3d3LXN0YXRpYy80MDgzYjQwOS01ZTY1LTQ0MDMtODZhOC03ZWQ4ZjUwMWEwZDhfaWNvbi10YXNrLWxpc3QtbXVsdGlwbGUuc3ZnJ1xyXG5jb25zdCBpY29uMiA9ICdodHRwczovL3ByaXNtaWMtaW8uczMuYW1hem9uYXdzLmNvbS93d3ctc3RhdGljLzFjNzkxYjE0LTgzM2YtNDE5MC1hODY1LWE1NWUxMTA1NWZjMF9pY29uLWNlcnRpZmllZC1jZXJ0aWZpY2F0ZS5zdmcnXHJcbmNvbnN0IGljb24zID0gJ2h0dHBzOi8vcHJpc21pYy1pby5zMy5hbWF6b25hd3MuY29tL3d3dy1zdGF0aWMvMWM3OTFiMTQtODMzZi00MTkwLWE4NjUtYTU1ZTExMDU1ZmMwX2ljb24tY2VydGlmaWVkLWNlcnRpZmljYXRlLnN2ZydcclxuY29uc3QgaWNvbjQgPSAnaHR0cHM6Ly9wcmlzbWljLWlvLnMzLmFtYXpvbmF3cy5jb20vd3d3LXN0YXRpYy8xYzc5MWIxNC04MzNmLTQxOTAtYTg2NS1hNTVlMTEwNTVmYzBfaWNvbi1jZXJ0aWZpZWQtY2VydGlmaWNhdGUuc3ZnJ1xyXG5cclxuY29uc3QgQnJpZWZpbmdTZWN0aW9uID0oKT0+e1xyXG4gICAgY29uc3QgYnJpZWZ0VGV4dCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3JpbmNpZGlkdW50IHF1aXMnXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkaXNwbGF5Qm94ZXMtYm94XCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkaXNwbGF5Qm94ZXMtbGlzdFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheUJveGVzLXRleHQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNwbGF5Qm94ZXMtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aWNvbjF9IGNsYXNzTmFtZT1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRpc3BsYXlCb3hlcy1oZWFkaW5nXCI+TG9yZW08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkaXNwbGF5Qm94ZXMtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHticmllZnRUZXh0fVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRpc3BsYXlCb3hlcy1saXN0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNwbGF5Qm94ZXMtdGV4dC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc3BsYXlCb3hlcy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpY29uMn0gY2xhc3NOYW1lPVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGlzcGxheUJveGVzLWhlYWRpbmdcIj5Mb3JlbTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRpc3BsYXlCb3hlcy10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2JyaWVmdFRleHR9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGlzcGxheUJveGVzLWxpc3RcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc3BsYXlCb3hlcy10ZXh0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheUJveGVzLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ljb24zfSBjbGFzc05hbWU9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkaXNwbGF5Qm94ZXMtaGVhZGluZ1wiPkxvcmVtPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGlzcGxheUJveGVzLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7YnJpZWZ0VGV4dH1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkaXNwbGF5Qm94ZXMtbGlzdFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheUJveGVzLXRleHQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNwbGF5Qm94ZXMtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aWNvbjR9IGNsYXNzTmFtZT1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRpc3BsYXlCb3hlcy1oZWFkaW5nXCI+TG9yZW08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkaXNwbGF5Qm94ZXMtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHticmllZnRUZXh0fVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgXHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnJpZWZpbmdTZWN0aW9uXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuMVxyXG5cclxuY29uc3QgaWNvbjEgPSAnaHR0cHM6Ly9wcmlzbWljLWlvLnMzLmFtYXpvbmF3cy5jb20vd3d3LXN0YXRpYy80MDgzYjQwOS01ZTY1LTQ0MDMtODZhOC03ZWQ4ZjUwMWEwZDhfaWNvbi10YXNrLWxpc3QtbXVsdGlwbGUuc3ZnJ1xyXG5jb25zdCBpY29uMiA9ICdodHRwczovL3ByaXNtaWMtaW8uczMuYW1hem9uYXdzLmNvbS93d3ctc3RhdGljLzFjNzkxYjE0LTgzM2YtNDE5MC1hODY1LWE1NWUxMTA1NWZjMF9pY29uLWNlcnRpZmllZC1jZXJ0aWZpY2F0ZS5zdmcnXHJcbmNvbnN0IGljb24zID0gJ2h0dHBzOi8vcHJpc21pYy1pby5zMy5hbWF6b25hd3MuY29tL3d3dy1zdGF0aWMvMWM3OTFiMTQtODMzZi00MTkwLWE4NjUtYTU1ZTExMDU1ZmMwX2ljb24tY2VydGlmaWVkLWNlcnRpZmljYXRlLnN2ZydcclxuY29uc3QgaWNvbjQgPSAnaHR0cHM6Ly9wcmlzbWljLWlvLnMzLmFtYXpvbmF3cy5jb20vd3d3LXN0YXRpYy8xYzc5MWIxNC04MzNmLTQxOTAtYTg2NS1hNTVlMTEwNTVmYzBfaWNvbi1jZXJ0aWZpZWQtY2VydGlmaWNhdGUuc3ZnJ1xyXG5jb25zdCBicmllZnRUZXh0ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvcmluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzJ1xyXG5cclxuXHJcbmNvbnN0IGltYWdlMSA9ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUwNjc5NDc3ODIwMi1jYWQ4NGNmNDVmMWQ/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTUwMCZxPTYwJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVhbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS1jb250YWluZXItZml0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICBcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS1saXN0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW0tYm94LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW0tdXNlci1hdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZWFtLXVzZXItYXZhdGFyLWltYWdlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS10ZXh0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRlYW0tdGV4dC1oZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIERpcmVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZWFtLXRleHRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICBcclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW0tbGlzdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtLWJveC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtLXVzZXItYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2UxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGVhbS11c2VyLWF2YXRhci1pbWFnZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICBcclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW0tdGV4dC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZWFtLXRleHQtaGVhZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBNY1RoZWVielxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgXHJcbiAgIFxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS1saXN0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW0tYm94LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW0tdXNlci1hdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZWFtLXVzZXItYXZhdGFyLWltYWdlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS10ZXh0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRlYW0tdGV4dC1oZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIE1jVGhlZWJ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW0tbGlzdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtLWJveC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtLXVzZXItYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2UxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGVhbS11c2VyLWF2YXRhci1pbWFnZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICBcclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW0tdGV4dC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZWFtLXRleHQtaGVhZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBNY1RoZWVielxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuXHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zbGlja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zcHJpbmdcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==