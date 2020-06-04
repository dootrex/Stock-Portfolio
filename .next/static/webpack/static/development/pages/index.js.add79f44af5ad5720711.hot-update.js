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

  var posts = _ref.posts,
      price = _ref.price;

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
  })), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, "  ", price.map(function (post) {
    return __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
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
            posts: xValue,
            price: yValue
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInBvc3RzIiwicHJpY2UiLCJ1c2VTdGF0ZSIsImNvdW50Iiwic2V0Q291bnQiLCJtYXAiLCJwb3N0IiwiZ2V0SW5pdGlhbFByb3BzIiwiYXhpb3MiLCJnZXQiLCJyZXMiLCJkYXRhIiwieFZhbHVlIiwieVZhbHVlIiwia2V5IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQW1CO0FBQUE7O0FBQUEsTUFBakJDLEtBQWlCLFFBQWpCQSxLQUFpQjtBQUFBLE1BQVhDLEtBQVcsUUFBWEEsS0FBVzs7QUFBQSxrQkFDSkMsc0RBQVEsQ0FBQyxDQUFELENBREo7QUFBQSxNQUN0QkMsS0FEc0I7QUFBQSxNQUNoQkMsUUFEZ0I7O0FBRTdCLFNBQ0ksbUVBQ0o7QUFBSSxXQUFPLEVBQUc7QUFBQSxhQUFNQSxRQUFRLENBQUNELEtBQUssR0FBRyxDQUFULENBQWQ7QUFBQSxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMENBLEtBQTFDLENBREksRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQU9ILEtBQUssQ0FBQ0ssR0FBTixDQUFVLFVBQUFDLElBQUk7QUFBQSxXQUNYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0EsSUFBTCxDQURXO0FBQUEsR0FBZCxDQUFQLENBRkYsRUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQU9MLEtBQUssQ0FBQ0ksR0FBTixDQUFVLFVBQUFDLElBQUk7QUFBQSxXQUNiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0EsSUFBTCxDQURhO0FBQUEsR0FBZCxDQUFQLENBTkosQ0FESjtBQWFILENBZkQ7O0dBQU1QLEs7O0tBQUFBLEs7QUFnQk5BLEtBQUssQ0FBQ1EsZUFBTixpTUFBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDUkMsNENBQUssQ0FBQ0MsR0FBTixDQUFVLG1IQUFWLENBRFE7O0FBQUE7QUFDcEJDLGFBRG9CO0FBRXhCO0FBQ01DLGNBSGtCLEdBR1hELEdBQUcsQ0FBQ0MsSUFITztBQUlwQkMsZ0JBSm9CLEdBSVosRUFKWTtBQUtwQkMsZ0JBTG9CLEdBS1osRUFMWTs7QUFNeEIsZUFBUUMsR0FBUixJQUFlSCxJQUFJLENBQUMscUJBQUQsQ0FBbkIsRUFBMkM7QUFDdkNDLGtCQUFNLENBQUNHLElBQVAsQ0FBWUQsR0FBWjtBQUNBRCxrQkFBTSxDQUFDRSxJQUFQLENBQVlKLElBQUksQ0FBQyxxQkFBRCxDQUFKLENBQTRCRyxHQUE1QixFQUFpQyxVQUFqQyxDQUFaO0FBQ0g7O0FBVHVCLDJDQVdqQjtBQUFDZCxpQkFBSyxFQUFFWSxNQUFSO0FBQWdCWCxpQkFBSyxFQUFFWTtBQUF2QixXQVhpQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF4QjtBQWFlZCxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYWRkNzlmNDRhZjVhZDU3MjA3MTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgSW5kZXggPSAoe3Bvc3RzLHByaWNlfSkgPT4ge1xyXG4gICAgY29uc3QgW2NvdW50LHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgPGgxIG9uQ2xpY2s9IHsoKSA9PiBzZXRDb3VudChjb3VudCArIDEpfT57Y291bnR9PC9oMT5cclxuICAgICAgICAgIDx1bD4gIHtwb3N0cy5tYXAocG9zdCA9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT57cG9zdH08L2xpPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHVsPiAge3ByaWNlLm1hcChwb3N0ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPntwb3N0fTwvbGk+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxubGV0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vd3d3LmFscGhhdmFudGFnZS5jby9xdWVyeT9mdW5jdGlvbj1USU1FX1NFUklFU19JTlRSQURBWSZzeW1ib2w9SUJNJmludGVydmFsPTE1bWluJmFwaWtleT1WNlBNWUZRR01ESVkzWTFQXCIpO1xyXG4vL2NvbnNvbGUubG9nKHJlcyk7XHJcbmNvbnN0IGRhdGEgPSByZXMuZGF0YVxyXG5sZXQgeFZhbHVlID1bXTtcclxubGV0IHlWYWx1ZSA9W107XHJcbmZvcihsZXQga2V5IGluIGRhdGFbJ1RpbWUgU2VyaWVzICgxNW1pbiknXSl7XHJcbiAgICB4VmFsdWUucHVzaChrZXkpO1xyXG4gICAgeVZhbHVlLnB1c2goZGF0YVsnVGltZSBTZXJpZXMgKDE1bWluKSddW2tleV1bJzQuIGNsb3NlJ10pO1xyXG59XHJcblxyXG5yZXR1cm4ge3Bvc3RzOiB4VmFsdWUsIHByaWNlOiB5VmFsdWV9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=