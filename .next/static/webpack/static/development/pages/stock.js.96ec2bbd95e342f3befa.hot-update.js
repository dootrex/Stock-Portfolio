webpackHotUpdate("static\\development\\pages\\stock.js",{

/***/ "./pages/stock.js":
/*!************************!*\
  !*** ./pages/stock.js ***!
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
/* harmony import */ var _components_Chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Chart */ "./components/Chart.js");
/* harmony import */ var _components_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/list */ "./components/list.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\Avi\\Downloads\\Work\\stocky\\Stock-Portfolio\\pages\\stock.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var Stock = function Stock(_ref) {
  var stuff = _ref.stuff,
      ticker = _ref.ticker;
  console.log(_components_list__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_Chart__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: stuff,
    ticker: ticker,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }));
};

_c = Stock;

Stock.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var query, res, data, xValue, yValue, stuff, key;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref2.query;
            console.log(query.ticker);
            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=".concat(query.ticker, "&interval=15min&apikey=V6PMYFQGMDIY3Y1P"));

          case 4:
            res = _context.sent;
            data = res.data;
            xValue = [];
            yValue = [];
            stuff = [];

            for (key in data["Time Series (15min)"]) {
              xValue.push(key);
              yValue.push(data["Time Series (15min)"][key]["4. close"]);
              stuff.push({
                x: key,
                y: data["Time Series (15min)"][key]["4. close"]
              });
            }

            return _context.abrupt("return", {
              stuff: stuff,
              ticker: query.ticker
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Stock);

var _c;

$RefreshReg$(_c, "Stock");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zdG9jay5qcyJdLCJuYW1lcyI6WyJTdG9jayIsInN0dWZmIiwidGlja2VyIiwiY29uc29sZSIsImxvZyIsIm5ld0xpc3QiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsImF4aW9zIiwiZ2V0IiwicmVzIiwiZGF0YSIsInhWYWx1ZSIsInlWYWx1ZSIsImtleSIsInB1c2giLCJ4IiwieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUF1QjtBQUFBLE1BQXBCQyxLQUFvQixRQUFwQkEsS0FBb0I7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDbkNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQyx3REFBWjtBQUNBLFNBQ0UsbUVBQ0UsTUFBQyx5REFBRDtBQUFPLFFBQUksRUFBRUosS0FBYjtBQUFvQixVQUFNLEVBQUVDLE1BQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGO0FBS0QsQ0FQRDs7S0FBTUYsSzs7QUFRTkEsS0FBSyxDQUFDTSxlQUFOO0FBQUEsK0xBQXdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTQyxpQkFBVCxTQUFTQSxLQUFUO0FBQ3RCSixtQkFBTyxDQUFDQyxHQUFSLENBQVlHLEtBQUssQ0FBQ0wsTUFBbEI7QUFEc0I7QUFBQSxtQkFFTk0sNENBQUssQ0FBQ0MsR0FBTixrRkFDNERGLEtBQUssQ0FBQ0wsTUFEbEUsNkNBRk07O0FBQUE7QUFFbEJRLGVBRmtCO0FBS2hCQyxnQkFMZ0IsR0FLVEQsR0FBRyxDQUFDQyxJQUxLO0FBTWxCQyxrQkFOa0IsR0FNVCxFQU5TO0FBT2xCQyxrQkFQa0IsR0FPVCxFQVBTO0FBUWxCWixpQkFSa0IsR0FRVixFQVJVOztBQVN0QixpQkFBU2EsR0FBVCxJQUFnQkgsSUFBSSxDQUFDLHFCQUFELENBQXBCLEVBQTZDO0FBQzNDQyxvQkFBTSxDQUFDRyxJQUFQLENBQVlELEdBQVo7QUFDQUQsb0JBQU0sQ0FBQ0UsSUFBUCxDQUFZSixJQUFJLENBQUMscUJBQUQsQ0FBSixDQUE0QkcsR0FBNUIsRUFBaUMsVUFBakMsQ0FBWjtBQUNBYixtQkFBSyxDQUFDYyxJQUFOLENBQVc7QUFBRUMsaUJBQUMsRUFBRUYsR0FBTDtBQUFVRyxpQkFBQyxFQUFFTixJQUFJLENBQUMscUJBQUQsQ0FBSixDQUE0QkcsR0FBNUIsRUFBaUMsVUFBakM7QUFBYixlQUFYO0FBQ0Q7O0FBYnFCLDZDQWNmO0FBQUViLG1CQUFLLEVBQUVBLEtBQVQ7QUFBZ0JDLG9CQUFNLEVBQUVLLEtBQUssQ0FBQ0w7QUFBOUIsYUFkZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFnQmVGLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxzdG9jay5qcy45NmVjMmJiZDk1ZTM0MmYzYmVmYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hhcnRcIjtcclxuaW1wb3J0IG5ld0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9saXN0JztcclxuXHJcbmNvbnN0IFN0b2NrID0gKHsgc3R1ZmYsIHRpY2tlciB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2cobmV3TGlzdCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDaGFydCBkYXRhPXtzdHVmZn0gdGlja2VyPXt0aWNrZXJ9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5TdG9jay5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBxdWVyeSB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2cocXVlcnkudGlja2VyKTtcclxuICBsZXQgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgYGh0dHBzOi8vd3d3LmFscGhhdmFudGFnZS5jby9xdWVyeT9mdW5jdGlvbj1USU1FX1NFUklFU19JTlRSQURBWSZzeW1ib2w9JHtxdWVyeS50aWNrZXJ9JmludGVydmFsPTE1bWluJmFwaWtleT1WNlBNWUZRR01ESVkzWTFQYFxyXG4gICk7XHJcbiAgY29uc3QgZGF0YSA9IHJlcy5kYXRhO1xyXG4gIGxldCB4VmFsdWUgPSBbXTtcclxuICBsZXQgeVZhbHVlID0gW107XHJcbiAgbGV0IHN0dWZmID0gW107XHJcbiAgZm9yIChsZXQga2V5IGluIGRhdGFbXCJUaW1lIFNlcmllcyAoMTVtaW4pXCJdKSB7XHJcbiAgICB4VmFsdWUucHVzaChrZXkpO1xyXG4gICAgeVZhbHVlLnB1c2goZGF0YVtcIlRpbWUgU2VyaWVzICgxNW1pbilcIl1ba2V5XVtcIjQuIGNsb3NlXCJdKTtcclxuICAgIHN0dWZmLnB1c2goeyB4OiBrZXksIHk6IGRhdGFbXCJUaW1lIFNlcmllcyAoMTVtaW4pXCJdW2tleV1bXCI0LiBjbG9zZVwiXSB9KTtcclxuICB9XHJcbiAgcmV0dXJuIHsgc3R1ZmY6IHN0dWZmLCB0aWNrZXI6IHF1ZXJ5LnRpY2tlciB9O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTdG9jaztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==