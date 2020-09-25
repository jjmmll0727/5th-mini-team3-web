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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\user\\Desktop\\NodeJS\\5th-mini-team3-web\\team3_mini\\Frontend\\pages\\login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Login = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
  style: {
    textAlign: "center"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }
}, __jsx("label", {
  style: {
    fontsize: "40px",
    color: "#767676",
    font: "normal normal 900 40px/59px Noto Sans CJK KR",
    letterspacing: "-1px",
    opacity: 1
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 11
  }
}, "\uB85C\uADF8\uC778"), __jsx("div", {
  style: {
    fontsize: "22px",
    marginTop: "75px"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 11
  }
}, __jsx("div", {
  style: {
    color: "#BBBBBB"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 13
  }
}, __jsx("input", {
  style: {
    border: "none",
    borderBottom: "1px solid #767676",
    font: "normal normal normal 22px/33px Noto Sans CJK KR",
    letterspacing: "-0.55px",
    width: "575px",
    height: "75px"
  },
  type: "text",
  placeholder: "\uC544\uC774\uB514",
  name: "id",
  id: "id",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 15
  }
}), " ", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 28
  }
}), __jsx("input", {
  style: {
    border: "none",
    borderBottom: "1px solid #767676",
    font: "normal normal normal 22px/33px Noto Sans CJK KR",
    letterspacing: "-0.55px",
    width: "575px",
    height: "75px"
  },
  type: "password",
  placeholder: "\uBE44\uBC00\uBC88\uD638",
  name: "pw",
  id: "pw",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 15
  }
}), " ", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 28
  }
})), __jsx("button", {
  style: {
    width: "575px",
    height: " 75px",
    backgroundColor: "#767676",
    border: "none",
    borderRadius: "10px",
    opacity: 1,
    color: "#FFFFFF",
    font: "normal normal bold 22px/33px Noto Sans CJK KR",
    marginTop: "75px"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 11
  }
}, "\uB85C\uADF8\uC778")), __jsx("p", {
  style: {
    fontsize: "18px",
    font: "normal normal normal 18px/27px Noto Sans CJK KR",
    marginTop: "75px"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 11
  }
}, __jsx("span", {
  style: {
    letterspacing: "-0.45px",
    color: "#BBBBBB"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 13
  }
}, "\uC544\uC9C1 \uD68C\uC6D0\uC774 \uC544\uB2C8\uC2E0\uAC00\uC694?"), __jsx("span", {
  style: {
    letterspacing: "-0.45px",
    color: "#707070"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 13
  }
}, "\uD68C\uC6D0\uAC00\uC785"))));

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJMb2dpbiIsInRleHRBbGlnbiIsImZvbnRzaXplIiwiY29sb3IiLCJmb250IiwibGV0dGVyc3BhY2luZyIsIm9wYWNpdHkiLCJtYXJnaW5Ub3AiLCJib3JkZXIiLCJib3JkZXJCb3R0b20iLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBOztBQUdBLE1BQU1BLEtBQUssR0FBRyxNQUtSLG1FQUFFO0FBQUssT0FBSyxFQUFFO0FBQUVDLGFBQVMsRUFBRTtBQUFiLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQU8sT0FBSyxFQUFFO0FBQ1pDLFlBQVEsRUFBQyxNQURHO0FBRVpDLFNBQUssRUFBQyxTQUZNO0FBR1pDLFFBQUksRUFBRSw4Q0FITTtBQUlaQyxpQkFBYSxFQUFFLE1BSkg7QUFLWkMsV0FBTyxFQUFFO0FBTEcsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLEVBVUU7QUFBSyxPQUFLLEVBQUU7QUFDVkosWUFBUSxFQUFDLE1BREM7QUFFVkssYUFBUyxFQUFFO0FBRkQsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBR0U7QUFBSyxPQUFLLEVBQUU7QUFDVkosU0FBSyxFQUFFO0FBREcsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBR0U7QUFBTyxPQUFLLEVBQUU7QUFDUkssVUFBTSxFQUFFLE1BREE7QUFFUkMsZ0JBQVksRUFBRSxtQkFGTjtBQUdSTCxRQUFJLEVBQUUsaURBSEU7QUFJUkMsaUJBQWEsRUFBRSxTQUpQO0FBS1JLLFNBQUssRUFBRSxPQUxDO0FBTVJDLFVBQU0sRUFBRTtBQU5BLEdBQWQ7QUFPRSxNQUFJLEVBQUMsTUFQUDtBQVFFLGFBQVcsRUFBQyxvQkFSZDtBQVNFLE1BQUksRUFBQyxJQVRQO0FBVUUsSUFBRSxFQUFDLElBVkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUhGLE9BYWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQWJmLEVBY0U7QUFBTyxPQUFLLEVBQUU7QUFDUkgsVUFBTSxFQUFFLE1BREE7QUFFUkMsZ0JBQVksRUFBRSxtQkFGTjtBQUdSTCxRQUFJLEVBQUUsaURBSEU7QUFJUkMsaUJBQWEsRUFBRSxTQUpQO0FBS1JLLFNBQUssRUFBRSxPQUxDO0FBTVJDLFVBQU0sRUFBRTtBQU5BLEdBQWQ7QUFPRSxNQUFJLEVBQUMsVUFQUDtBQVFFLGFBQVcsRUFBQywwQkFSZDtBQVNFLE1BQUksRUFBQyxJQVRQO0FBVUUsSUFBRSxFQUFDLElBVkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQWRGLE9Bd0JlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUF4QmYsQ0FIRixFQTZCQTtBQUFRLE9BQUssRUFBRTtBQUNiRCxTQUFLLEVBQUUsT0FETTtBQUViQyxVQUFNLEVBQUUsT0FGSztBQUdiQyxtQkFBZSxFQUFFLFNBSEo7QUFJYkosVUFBTSxFQUFFLE1BSks7QUFLYkssZ0JBQVksRUFBRSxNQUxEO0FBTWJQLFdBQU8sRUFBQyxDQU5LO0FBT2JILFNBQUssRUFBRSxTQVBNO0FBUWJDLFFBQUksRUFBRSwrQ0FSTztBQVNiRyxhQUFTLEVBQUU7QUFURSxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBN0JBLENBVkYsRUFxREU7QUFBRyxPQUFLLEVBQUU7QUFDSkwsWUFBUSxFQUFDLE1BREw7QUFFSkUsUUFBSSxFQUFFLGlEQUZGO0FBR0pHLGFBQVMsRUFBRTtBQUhQLEdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUtFO0FBQU0sT0FBSyxFQUFFO0FBQ1RGLGlCQUFhLEVBQUUsU0FETjtBQUVURixTQUFLLEVBQUU7QUFGRSxHQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUVBTEYsRUFVRTtBQUFNLE9BQUssRUFBRTtBQUNYRSxpQkFBYSxFQUFFLFNBREo7QUFFWEYsU0FBSyxFQUFFO0FBRkksR0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQVZGLENBckRGLENBQUYsQ0FMTjs7QUFnRmVILG9FQUFmLEU7Ozs7Ozs7Ozs7O0FDbkZBLGtDIiwiZmlsZSI6InBhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9sb2dpbi5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PihcclxuICAgICAgICAgXHJcblxyXG4gICAgXHJcbiAgICAgIFxyXG4gICAgICA8PjxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgPGxhYmVsIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGZvbnRzaXplOlwiNDBweFwiLFxyXG4gICAgICAgICAgICBjb2xvcjpcIiM3Njc2NzZcIixcclxuICAgICAgICAgICAgZm9udDogXCJub3JtYWwgbm9ybWFsIDkwMCA0MHB4LzU5cHggTm90byBTYW5zIENKSyBLUlwiLFxyXG4gICAgICAgICAgICBsZXR0ZXJzcGFjaW5nOiBcIi0xcHhcIixcclxuICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAg66Gc6re47J24IFxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgZm9udHNpemU6XCIyMnB4XCIsXHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCI3NXB4XCJ9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiNCQkJCQkJcIixcclxuICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgIzc2NzY3NlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IFwibm9ybWFsIG5vcm1hbCBub3JtYWwgMjJweC8zM3B4IE5vdG8gU2FucyBDSksgS1JcIixcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXJzcGFjaW5nOiBcIi0wLjU1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI1NzVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI3NXB4XCIsfX0gXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLslYTsnbTrlJRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImlkXCIgXHJcbiAgICAgICAgICAgICAgICBpZD1cImlkXCIgLz4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICM3Njc2NzZcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250OiBcIm5vcm1hbCBub3JtYWwgbm9ybWFsIDIycHgvMzNweCBOb3RvIFNhbnMgQ0pLIEtSXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyc3BhY2luZzogXCItMC41NXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNTc1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNzVweFwiLH19XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi4XCIgXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicHdcIiBcclxuICAgICAgICAgICAgICAgIGlkPVwicHdcIiAvPiA8YnIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBzdHlsZT17e1xyXG4gICAgICAgICAgICB3aWR0aDogXCI1NzVweFwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiIDc1cHhcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM3Njc2NzZcIixcclxuICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgb3BhY2l0eToxLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIjRkZGRkZGXCIsXHJcbiAgICAgICAgICAgIGZvbnQ6IFwibm9ybWFsIG5vcm1hbCBib2xkIDIycHgvMzNweCBOb3RvIFNhbnMgQ0pLIEtSXCIsXHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCI3NXB4XCJcclxuICAgICAgICAgICAgfX0+IFxyXG4gICAgICAgICAgICDroZzqt7jsnbhcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxwIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBmb250c2l6ZTpcIjE4cHhcIixcclxuICAgICAgICAgICAgICAgIGZvbnQ6IFwibm9ybWFsIG5vcm1hbCBub3JtYWwgMThweC8yN3B4IE5vdG8gU2FucyBDSksgS1JcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI3NXB4XCJcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyc3BhY2luZzogXCItMC40NXB4XCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjQkJCQkJCXCJ9fT4gXHJcbiAgICAgICAgICAgICAgICDslYTsp4Eg7ZqM7JuQ7J20IOyVhOuLiOyLoOqwgOyalD8gXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tcclxuICAgICAgICAgICAgICBsZXR0ZXJzcGFjaW5nOiBcIi0wLjQ1cHhcIixcclxuICAgICAgICAgICAgICBjb2xvcjogXCIjNzA3MDcwXCJ9fT5cclxuICAgICAgICAgICAgICDtmozsm5DqsIDsnoVcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIFxyXG4pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=