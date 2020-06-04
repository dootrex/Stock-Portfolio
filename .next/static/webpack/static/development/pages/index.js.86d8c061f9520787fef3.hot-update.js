webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\avigill\\Desktop\\Work\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var Index = function Index(_ref) {
  _s();

  var posts = _ref.posts;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      count = _useState[0],
      setCount = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("h1", {
    onClick: function onClick() {
      return setCount(count + 1);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, count), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, "  ", posts.map(function (post) {
    return __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 21
      }
    }, post);
  })));
};

_s(Index, "RpyMek13f3iNeQO0Gs9DEYmHKoY=");

_c = Index;
Index.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data, xValue, yValue, key;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=15min&apikey=V6PMYFQGMDIY3Y1P");

        case 2:
          res = _context.sent;
          //console.log(res);
          data = res.data;
          xValue = [];
          yValue = [];

          for (key in data['Time Series (15min)']) {
            xValue.push(key);
            yValue.push(data['Time Series (15min)'][key]['4. close']);
          }

          return _context.abrupt("return", {
            posts: xValue
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInBvc3RzIiwidXNlU3RhdGUiLCJjb3VudCIsInNldENvdW50IiwibWFwIiwicG9zdCIsImdldEluaXRpYWxQcm9wcyIsImF4aW9zIiwiZ2V0IiwicmVzIiwiZGF0YSIsInhWYWx1ZSIsInlWYWx1ZSIsImtleSIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFhO0FBQUE7O0FBQUEsTUFBWEMsS0FBVyxRQUFYQSxLQUFXOztBQUFBLGtCQUNFQyxzREFBUSxDQUFDLENBQUQsQ0FEVjtBQUFBLE1BQ2hCQyxLQURnQjtBQUFBLE1BQ1ZDLFFBRFU7O0FBRXZCLFNBQ0ksbUVBQ0o7QUFBSSxXQUFPLEVBQUc7QUFBQSxhQUFNQSxRQUFRLENBQUNELEtBQUssR0FBRyxDQUFULENBQWQ7QUFBQSxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMENBLEtBQTFDLENBREksRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQU9GLEtBQUssQ0FBQ0ksR0FBTixDQUFVLFVBQUFDLElBQUk7QUFBQSxXQUNYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0EsSUFBTCxDQURXO0FBQUEsR0FBZCxDQUFQLENBRkYsQ0FESjtBQVNILENBWEQ7O0dBQU1OLEs7O0tBQUFBLEs7QUFZTkEsS0FBSyxDQUFDTyxlQUFOLGlNQUF3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNSQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVUsbUhBQVYsQ0FEUTs7QUFBQTtBQUNwQkMsYUFEb0I7QUFFeEI7QUFDTUMsY0FIa0IsR0FHWEQsR0FBRyxDQUFDQyxJQUhPO0FBSXBCQyxnQkFKb0IsR0FJWixFQUpZO0FBS3BCQyxnQkFMb0IsR0FLWixFQUxZOztBQU14QixlQUFRQyxHQUFSLElBQWVILElBQUksQ0FBQyxxQkFBRCxDQUFuQixFQUEyQztBQUN2Q0Msa0JBQU0sQ0FBQ0csSUFBUCxDQUFZRCxHQUFaO0FBQ0FELGtCQUFNLENBQUNFLElBQVAsQ0FBWUosSUFBSSxDQUFDLHFCQUFELENBQUosQ0FBNEJHLEdBQTVCLEVBQWlDLFVBQWpDLENBQVo7QUFDSDs7QUFUdUIsMkNBV2pCO0FBQUNiLGlCQUFLLEVBQUVXO0FBQVIsV0FYaUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBeEI7QUFhZVosb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjg2ZDhjMDYxZjk1MjA3ODdmZWYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IEluZGV4ID0gKHtwb3N0c30pID0+IHtcclxuICAgIGNvbnN0IFtjb3VudCxzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgIDxoMSBvbkNsaWNrPSB7KCkgPT4gc2V0Q291bnQoY291bnQgKyAxKX0+e2NvdW50fTwvaDE+XHJcbiAgICAgICAgICA8dWw+ICB7cG9zdHMubWFwKHBvc3QgPT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+e3Bvc3R9PC9saT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG5sZXQgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly93d3cuYWxwaGF2YW50YWdlLmNvL3F1ZXJ5P2Z1bmN0aW9uPVRJTUVfU0VSSUVTX0lOVFJBREFZJnN5bWJvbD1JQk0maW50ZXJ2YWw9MTVtaW4mYXBpa2V5PVY2UE1ZRlFHTURJWTNZMVBcIik7XHJcbi8vY29uc29sZS5sb2cocmVzKTtcclxuY29uc3QgZGF0YSA9IHJlcy5kYXRhXHJcbmxldCB4VmFsdWUgPVtdO1xyXG5sZXQgeVZhbHVlID1bXTtcclxuZm9yKGxldCBrZXkgaW4gZGF0YVsnVGltZSBTZXJpZXMgKDE1bWluKSddKXtcclxuICAgIHhWYWx1ZS5wdXNoKGtleSk7XHJcbiAgICB5VmFsdWUucHVzaChkYXRhWydUaW1lIFNlcmllcyAoMTVtaW4pJ11ba2V5XVsnNC4gY2xvc2UnXSk7XHJcbn1cclxuXHJcbnJldHVybiB7cG9zdHM6IHhWYWx1ZSwgfTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9