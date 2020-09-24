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

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\jjmml\\Documents\\GitHub\\5th-mini-team3-web\\team3_mini\\Frontend\\components\\Card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const StyledCard = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  a{
    color: #767676
  }
  margin: 20px;
  h3 {
    position: absolute;
    z-index: 50;
    background: #767676;
    color: white;
    padding: 3px 15px;
  }
  img {
    width: 300px;
    height: 130px;
  }
  ul {
    padding: 0;
    margin: 0;
    margin-top: 10px;
    border-right: none;
    list-style-type: square;
    margin-left: 20px;
    min-height: 100px;
    li {
      max-width: 280px;
      font-size: 15px;
      margin-bottom: 0px;
    }
  }
`;

const Card = ({
  href,
  title,
  imgsrc,
  content
}) => {
  return __jsx(StyledCard, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: href,
    target: "_blank",
    rel: "noreferrer noopener",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, title), __jsx("img", {
    src: imgsrc,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, content[0] ? content.map((data, index) => __jsx("li", {
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 54
    }
  }, data)) : __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 86
    }
  }, "\uB0B4\uC6A9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."))));
};

Card.PropTypes = {
  href: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  imgsrc: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Card */ "./components/Card.js");
var _jsxFileName = "C:\\Users\\jjmml\\Documents\\GitHub\\5th-mini-team3-web\\team3_mini\\Frontend\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const StyledHome = _emotion_styled__WEBPACK_IMPORTED_MODULE_4___default.a.div`
  font-family: Noto Sans CJK KR;
  margin-top: 200px;
  color: #767676;
  .main {
    padding-left: 50px;
    > h2 {
      font-size: 15px;
      margin-bottom: 20px;
    }
    h1 {
      font-weight: bolder;
    }
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    border-right: 1px solid #bbbbbb;
    li {
      font-size: 18px;
      margin-bottom: 30px;
    }
  }
`;
const cardDataDummy = Array(10).fill(0).map(() => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
  title: faker__WEBPACK_IMPORTED_MODULE_3___default.a.name.findName(),
  imgsrc: faker__WEBPACK_IMPORTED_MODULE_3___default.a.image.image(510, 136),
  content: Array(faker__WEBPACK_IMPORTED_MODULE_3___default.a.random.number(3)).fill(0).map(() => faker__WEBPACK_IMPORTED_MODULE_3___default.a.lorem.sentence()),
  href: faker__WEBPACK_IMPORTED_MODULE_3___default.a.internet.url()
}));

const Home = () => {
  return __jsx(StyledHome, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, __jsx("li", {
    style: {
      fontWeight: "bolder"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, "ALL"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, "\uACFC\uC81C/\uBC1C\uD45C"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, "\uB17C\uBB38"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, "\uB514\uC790\uC778"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, "\uC1FC\uD551"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, "\uC5EC\uD589"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, "\uCD94\uAC00"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "main",
    md: 20,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, "\uAE40\uC0BC\uC0BC\uB2D8\uC758 \uC0AC\uC774\uD2B8"), __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, "ALL"), __jsx("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      minWidth: "700px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, cardDataDummy.map(data => __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: data.id,
    href: data.href,
    content: data.content,
    title: data.title,
    imgsrc: data.imgsrc,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 19
    }
  })))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBlbW90aW9uL3N0eWxlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYWtlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNob3J0aWRcIiJdLCJuYW1lcyI6WyJTdHlsZWRDYXJkIiwic3R5bGVkIiwiZGl2IiwiQ2FyZCIsImhyZWYiLCJ0aXRsZSIsImltZ3NyYyIsImNvbnRlbnQiLCJtYXAiLCJkYXRhIiwiaW5kZXgiLCJQcm9wVHlwZXMiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYXJyYXkiLCJTdHlsZWRIb21lIiwiY2FyZERhdGFEdW1teSIsIkFycmF5IiwiZmlsbCIsImlkIiwic2hvcnRpZCIsImdlbmVyYXRlIiwiZmFrZXIiLCJuYW1lIiwiZmluZE5hbWUiLCJpbWFnZSIsInJhbmRvbSIsIm51bWJlciIsImxvcmVtIiwic2VudGVuY2UiLCJpbnRlcm5ldCIsInVybCIsIkhvbWUiLCJmb250V2VpZ2h0IiwiZGlzcGxheSIsImZsZXhXcmFwIiwibWluV2lkdGgiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsVUFBVSxHQUFHQyxzREFBTSxDQUFDQyxHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBOUI7O0FBZ0NBLE1BQU1DLElBQUksR0FBRyxDQUFDO0FBQUVDLE1BQUY7QUFBUUMsT0FBUjtBQUFlQyxRQUFmO0FBQXVCQztBQUF2QixDQUFELEtBQXNDO0FBQ2pELFNBQ0UsTUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBRUgsSUFBVDtBQUFlLFVBQU0sRUFBQyxRQUF0QjtBQUErQixPQUFHLEVBQUMscUJBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtDLEtBQUwsQ0FERixFQUVFO0FBQUssT0FBRyxFQUFFQyxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0MsT0FBTyxDQUFDLENBQUQsQ0FBUCxHQUFhQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUFDQyxJQUFELEVBQU1DLEtBQU4sS0FBaUI7QUFBSSxPQUFHLEVBQUVBLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpQkQsSUFBakIsQ0FBN0IsQ0FBYixHQUEwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9EQUQ3RSxDQUhGLENBREYsQ0FERjtBQVlELENBYkQ7O0FBZUFOLElBQUksQ0FBQ1EsU0FBTCxHQUFpQjtBQUNmUCxNQUFJLEVBQUVRLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBRFI7QUFFZlQsT0FBSyxFQUFFTyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQUZUO0FBR2ZSLFFBQU0sRUFBRU0saURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFIVjtBQUlmUCxTQUFPLEVBQUVLLGlEQUFTLENBQUNHLEtBQVYsQ0FBZ0JEO0FBSlYsQ0FBakI7QUFPZVgsbUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsTUFBTWEsVUFBVSxHQUFHZixzREFBTSxDQUFDQyxHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBOUI7QUEwQkEsTUFBTWUsYUFBYSxHQUFHQyxLQUFLLENBQUMsRUFBRCxDQUFMLENBQ25CQyxJQURtQixDQUNkLENBRGMsRUFFbkJYLEdBRm1CLENBRWYsT0FBTztBQUNWWSxJQUFFLEVBQUVDLDhDQUFPLENBQUNDLFFBQVIsRUFETTtBQUVWakIsT0FBSyxFQUFFa0IsNENBQUssQ0FBQ0MsSUFBTixDQUFXQyxRQUFYLEVBRkc7QUFHVm5CLFFBQU0sRUFBRWlCLDRDQUFLLENBQUNHLEtBQU4sQ0FBWUEsS0FBWixDQUFrQixHQUFsQixFQUF1QixHQUF2QixDQUhFO0FBSVZuQixTQUFPLEVBQUVXLEtBQUssQ0FBQ0ssNENBQUssQ0FBQ0ksTUFBTixDQUFhQyxNQUFiLENBQW9CLENBQXBCLENBQUQsQ0FBTCxDQUE4QlQsSUFBOUIsQ0FBbUMsQ0FBbkMsRUFBc0NYLEdBQXRDLENBQTBDLE1BQ2pEZSw0Q0FBSyxDQUFDTSxLQUFOLENBQVlDLFFBQVosRUFETyxDQUpDO0FBT1YxQixNQUFJLEVBQUVtQiw0Q0FBSyxDQUFDUSxRQUFOLENBQWVDLEdBQWY7QUFQSSxDQUFQLENBRmUsQ0FBdEI7O0FBWUEsTUFBTUMsSUFBSSxHQUFHLE1BQU07QUFDakIsU0FDRSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0NBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0NBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksU0FBSyxFQUFFO0FBQUVDLGdCQUFVLEVBQUU7QUFBZCxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFKRixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTEYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU5GLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFQRixDQURGLENBREYsRUFZRSxNQUFDLHdDQUFEO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBc0IsTUFBRSxFQUFFLEVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlEQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZGLEVBR0U7QUFBSyxTQUFLLEVBQUU7QUFDVkMsYUFBTyxFQUFFLE1BREM7QUFFVkMsY0FBUSxFQUFFLE1BRkE7QUFHVkMsY0FBUSxFQUFFO0FBSEEsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0dwQixhQUFhLENBQUNULEdBQWQsQ0FBbUJDLElBQUQsSUFDakIsTUFBQyx3REFBRDtBQUFNLE9BQUcsRUFBRUEsSUFBSSxDQUFDVyxFQUFoQjtBQUFvQixRQUFJLEVBQUVYLElBQUksQ0FBQ0wsSUFBL0I7QUFBcUMsV0FBTyxFQUFFSyxJQUFJLENBQUNGLE9BQW5EO0FBQTRELFNBQUssRUFBRUUsSUFBSSxDQUFDSixLQUF4RTtBQUErRSxVQUFNLEVBQUVJLElBQUksQ0FBQ0gsTUFBNUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBTEgsQ0FIRixDQVpGLENBREYsQ0FGRixFQThCRSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTlCRixDQURGLENBREY7QUFvQ0QsQ0FyQ0Q7O0FBdUNlMkIsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUNyRkEsNEM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5cclxuY29uc3QgU3R5bGVkQ2FyZCA9IHN0eWxlZC5kaXZgXHJcbiAgYXtcclxuICAgIGNvbG9yOiAjNzY3Njc2XHJcbiAgfVxyXG4gIG1hcmdpbjogMjBweDtcclxuICBoMyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA1MDtcclxuICAgIGJhY2tncm91bmQ6ICM3Njc2NzY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAzcHggMTVweDtcclxuICB9XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMTMwcHg7XHJcbiAgfVxyXG4gIHVsIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBzcXVhcmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgbGkge1xyXG4gICAgICBtYXgtd2lkdGg6IDI4MHB4O1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDYXJkID0gKHsgaHJlZiAsdGl0bGUsIGltZ3NyYywgY29udGVudCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRDYXJkPlxyXG4gICAgICA8YSBocmVmPXtocmVmfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCI+XHJcbiAgICAgICAgPGgzPnt0aXRsZX08L2gzPlxyXG4gICAgICAgIDxpbWcgc3JjPXtpbWdzcmN9IC8+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAge2NvbnRlbnRbMF0gPyBjb250ZW50Lm1hcCgoZGF0YSxpbmRleCkgPT4gKDxsaSBrZXk9e2luZGV4fT57ZGF0YX08L2xpPikpIDogPHNwYW4+64K07Jqp7J20IOyXhuyKteuLiOuLpC48L3NwYW4+fVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvYT5cclxuXHJcbiAgICA8L1N0eWxlZENhcmQ+XHJcbiAgKTtcclxufTtcclxuXHJcbkNhcmQuUHJvcFR5cGVzID0ge1xyXG4gIGhyZWY6IHByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB0aXRsZTogcHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGltZ3NyYzogcHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGNvbnRlbnQ6IHByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgc2hvcnRpZCBmcm9tIFwic2hvcnRpZFwiO1xyXG5pbXBvcnQgZmFrZXIgZnJvbSBcImZha2VyXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZFwiO1xyXG5cclxuY29uc3QgU3R5bGVkSG9tZSA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1mYW1pbHk6IE5vdG8gU2FucyBDSksgS1I7XHJcbiAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbiAgY29sb3I6ICM3Njc2NzY7XHJcbiAgLm1haW4ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgPiBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICAgIGgxIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIH1cclxuICB9XHJcbiAgdWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiYmJiYmI7XHJcbiAgICBsaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBjYXJkRGF0YUR1bW15ID0gQXJyYXkoMTApXHJcbiAgLmZpbGwoMClcclxuICAubWFwKCgpID0+ICh7XHJcbiAgICBpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxyXG4gICAgdGl0bGU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICAgIGltZ3NyYzogZmFrZXIuaW1hZ2UuaW1hZ2UoNTEwLCAxMzYpLFxyXG4gICAgY29udGVudDogQXJyYXkoZmFrZXIucmFuZG9tLm51bWJlcigzKSkuZmlsbCgwKS5tYXAoKCkgPT4gKFxyXG4gICAgICBmYWtlci5sb3JlbS5zZW50ZW5jZSgpXHJcbiAgICApKSxcclxuICAgIGhyZWY6IGZha2VyLmludGVybmV0LnVybCgpXHJcbiAgfSkpO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZEhvbWU+XHJcbiAgICAgIDxSb3c+XHJcbiAgICAgICAgPENvbCBtZD17Nn0+PC9Db2w+XHJcbiAgICAgICAgPENvbCBtZD17MTJ9PlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCBtZD17NH0+XHJcbiAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZGVyXCIgfX0+QUxMPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT7qs7zsoJwv67Cc7ZGcPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT7rhbzrrLg8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPuuUlOyekOyduDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+7Ie87ZWRPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT7sl6ztlok8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPuy2lOqwgDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibWFpblwiIG1kPXsyMH0+XHJcbiAgICAgICAgICAgICAgPGgyPuq5gOyCvOyCvOuLmOydmCDsgqzsnbTtirg8L2gyPlxyXG4gICAgICAgICAgICAgIDxoMT5BTEw8L2gxPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IFwiNzAwcHhcIlxyXG4gICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAge2NhcmREYXRhRHVtbXkubWFwKChkYXRhKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkIGtleT17ZGF0YS5pZH0gaHJlZj17ZGF0YS5ocmVmfSBjb250ZW50PXtkYXRhLmNvbnRlbnR9IHRpdGxlPXtkYXRhLnRpdGxlfSBpbWdzcmM9e2RhdGEuaW1nc3JjfSAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBtZD17Nn0+PC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9TdHlsZWRIb21lPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9zdHlsZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYWtlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNob3J0aWRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==