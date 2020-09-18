webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./site */ "./reducers/site.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var intialState = {};
var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])({
  index: function index() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : intialState;
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]:
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_3__["default"],
  site: _site__WEBPACK_IMPORTED_MODULE_4__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

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

/***/ "./reducers/post.js":
false,

/***/ "./reducers/site.js":
/*!**************************!*\
  !*** ./reducers/site.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./actions/index.js");


var initialState = {
  Websites: [],
  getSitesLoading: false,
  // 로그인 로딩
  getSitesDone: false,
  getSitesError: null
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["produce"])(state, function (draft) {
    switch (action.type) {
      case _actions__WEBPACK_IMPORTED_MODULE_1__["GET_SITES_REQUEST"]:
        draft.getSitesLoading = true;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_1__["GET_SITES_SUCCESS"]:
        draft.getSitesLoading = false;
        draft.getSitesDone = true;
        draft.Websites = action.data;
        break;

      case _actions__WEBPACK_IMPORTED_MODULE_1__["GET_SITES_FAILURE"]:
        draft.getSitesLoading = false;
        draft.getSitesError = action.data;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3JlZHVjZXJzL3NpdGUuanMiXSwibmFtZXMiOlsiaW50aWFsU3RhdGUiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4Iiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsInBheWxvYWQiLCJ1c2VyIiwic2l0ZSIsImluaXRpYWxTdGF0ZSIsIldlYnNpdGVzIiwiZ2V0U2l0ZXNMb2FkaW5nIiwiZ2V0U2l0ZXNEb25lIiwiZ2V0U2l0ZXNFcnJvciIsInJlZHVjZXIiLCJwcm9kdWNlIiwiZHJhZnQiLCJHRVRfU0lURVNfUkVRVUVTVCIsIkdFVF9TSVRFU19TVUNDRVNTIiwiZGF0YSIsIkdFVF9TSVRFU19GQUlMVVJFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUcsRUFBcEI7QUFFQSxJQUFNQyxXQUFXLEdBQUdDLDZEQUFlLENBQUM7QUFDbENDLE9BQUssRUFBRSxpQkFBaUM7QUFBQSxRQUFoQ0MsS0FBZ0MsdUVBQXhCSixXQUF3QjtBQUFBLFFBQVhLLE1BQVc7O0FBQ3RDLFlBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFdBQUtDLDBEQUFMO0FBQ0UsK0NBQ0tILEtBREwsR0FFS0MsTUFBTSxDQUFDRyxPQUZaOztBQUtGO0FBQ0UsZUFBT0osS0FBUDtBQVJKO0FBVUQsR0FaaUM7QUFhbENLLE1BQUksRUFBSkEsNkNBYmtDO0FBY2xDQyxNQUFJLEVBQUpBLDZDQUFJQTtBQWQ4QixDQUFELENBQW5DO0FBaUJlVCwwRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxJQUFNVSxZQUFZLEdBQUc7QUFDbkJDLFVBQVEsRUFBRSxFQURTO0FBRW5CQyxpQkFBZSxFQUFFLEtBRkU7QUFFSztBQUN4QkMsY0FBWSxFQUFFLEtBSEs7QUFJbkJDLGVBQWEsRUFBRTtBQUpJLENBQXJCOztBQU9BLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWtDO0FBQUEsTUFBakNaLEtBQWlDLHVFQUF6Qk8sWUFBeUI7QUFBQSxNQUFYTixNQUFXO0FBQ2hELFNBQU9ZLHFEQUFPLENBQUNiLEtBQUQsRUFBUSxVQUFDYyxLQUFELEVBQVc7QUFDL0IsWUFBUWIsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsV0FBS2EsMERBQUw7QUFDRUQsYUFBSyxDQUFDTCxlQUFOLEdBQXdCLElBQXhCO0FBQ0E7O0FBQ0YsV0FBS08sMERBQUw7QUFDRUYsYUFBSyxDQUFDTCxlQUFOLEdBQXdCLEtBQXhCO0FBQ0FLLGFBQUssQ0FBQ0osWUFBTixHQUFxQixJQUFyQjtBQUNBSSxhQUFLLENBQUNOLFFBQU4sR0FBaUJQLE1BQU0sQ0FBQ2dCLElBQXhCO0FBQ0E7O0FBQ0YsV0FBS0MsMERBQUw7QUFDRUosYUFBSyxDQUFDTCxlQUFOLEdBQXdCLEtBQXhCO0FBQ0FLLGFBQUssQ0FBQ0gsYUFBTixHQUFzQlYsTUFBTSxDQUFDZ0IsSUFBN0I7O0FBQ0Y7QUFDRTtBQWJKO0FBZUQsR0FoQmEsQ0FBZDtBQWlCRCxDQWxCRDs7QUFvQmVMLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYmVmMzNlMTIyZGVjYTVjOTQ4YTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5cclxuaW1wb3J0IHVzZXIgZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgc2l0ZSBmcm9tIFwiLi9zaXRlXCI7XHJcblxyXG5jb25zdCBpbnRpYWxTdGF0ZSA9IHt9O1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIGluZGV4OiAoc3RhdGUgPSBpbnRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgfSxcclxuICB1c2VyLFxyXG4gIHNpdGUsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImltcG9ydCB7IHByb2R1Y2UgfSBmcm9tIFwiaW1tZXJcIjtcclxuaW1wb3J0IHsgR0VUX1NJVEVTX0ZBSUxVUkUsIEdFVF9TSVRFU19SRVFVRVNULCBHRVRfU0lURVNfU1VDQ0VTUyB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgV2Vic2l0ZXM6IFtdLFxyXG4gIGdldFNpdGVzTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDroZzrlKlcclxuICBnZXRTaXRlc0RvbmU6IGZhbHNlLFxyXG4gIGdldFNpdGVzRXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgR0VUX1NJVEVTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuZ2V0U2l0ZXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBHRVRfU0lURVNfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5nZXRTaXRlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5nZXRTaXRlc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LldlYnNpdGVzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgR0VUX1NJVEVTX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuZ2V0U2l0ZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZ2V0U2l0ZXNFcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==