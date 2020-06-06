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
/* harmony import */ var _nivo_line__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nivo/line */ "./node_modules/@nivo/line/dist/nivo-line.esm.js");



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

  var createData = function createData() {
    var arr = [];

    for (var i = 0; i < posts.length; i++) {
      var uiui = {
        x: posts[i],
        y: price[i]
      };
      arr.push(uiui);
    }

    return arr;
  };

  var datas = [{
    id: "IBM",
    data: createData()
  }];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("h1", {
    onClick: function onClick() {
      return setCount(count + 1);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, count), __jsx("div", {
    style: {
      height: 500,
      width: 500
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(_nivo_line__WEBPACK_IMPORTED_MODULE_4__["ResponsiveLine"], {
    data: datas,
    width: 400,
    height: 400,
    colors: {
      scheme: "nivo"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  })));
};

_s(Index, "oDgYfYHkD9Wkv4hrAPCkI/ev3YU=");

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

          for (key in data["Time Series (15min)"]) {
            xValue.push(key);
            yValue.push(data["Time Series (15min)"][key]["4. close"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInBvc3RzIiwicHJpY2UiLCJ1c2VTdGF0ZSIsImNvdW50Iiwic2V0Q291bnQiLCJjcmVhdGVEYXRhIiwiYXJyIiwiaSIsImxlbmd0aCIsInVpdWkiLCJ4IiwieSIsInB1c2giLCJkYXRhcyIsImlkIiwiZGF0YSIsImhlaWdodCIsIndpZHRoIiwic2NoZW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwiYXhpb3MiLCJnZXQiLCJyZXMiLCJ4VmFsdWUiLCJ5VmFsdWUiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFzQjtBQUFBOztBQUFBLE1BQW5CQyxLQUFtQixRQUFuQkEsS0FBbUI7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQUEsa0JBQ1JDLHNEQUFRLENBQUMsQ0FBRCxDQURBO0FBQUEsTUFDM0JDLEtBRDJCO0FBQUEsTUFDcEJDLFFBRG9COztBQUVsQyxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCLFFBQUlDLEdBQUcsR0FBRyxFQUFWOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1AsS0FBSyxDQUFDUSxNQUExQixFQUFrQ0QsQ0FBQyxFQUFuQyxFQUF1QztBQUNyQyxVQUFJRSxJQUFJLEdBQUc7QUFBRUMsU0FBQyxFQUFFVixLQUFLLENBQUNPLENBQUQsQ0FBVjtBQUFlSSxTQUFDLEVBQUVWLEtBQUssQ0FBQ00sQ0FBRDtBQUF2QixPQUFYO0FBQ0FELFNBQUcsQ0FBQ00sSUFBSixDQUFTSCxJQUFUO0FBQ0Q7O0FBQ0QsV0FBT0gsR0FBUDtBQUNELEdBUEQ7O0FBUUEsTUFBSU8sS0FBSyxHQUFHLENBQ1Y7QUFDRUMsTUFBRSxFQUFFLEtBRE47QUFFRUMsUUFBSSxFQUFFVixVQUFVO0FBRmxCLEdBRFUsQ0FBWjtBQU1BLFNBQ0UsbUVBQ0U7QUFBSSxXQUFPLEVBQUU7QUFBQSxhQUFNRCxRQUFRLENBQUNELEtBQUssR0FBRyxDQUFULENBQWQ7QUFBQSxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeUNBLEtBQXpDLENBREYsRUFFRTtBQUFLLFNBQUssRUFBRTtBQUFFYSxZQUFNLEVBQUUsR0FBVjtBQUFlQyxXQUFLLEVBQUU7QUFBdEIsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUNFLFFBQUksRUFBRUosS0FEUjtBQUVFLFNBQUssRUFBRSxHQUZUO0FBR0UsVUFBTSxFQUFFLEdBSFY7QUFJRSxVQUFNLEVBQUU7QUFBRUssWUFBTSxFQUFFO0FBQVYsS0FKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixDQURGO0FBYUQsQ0E3QkQ7O0dBQU1uQixLOztLQUFBQSxLO0FBOEJOQSxLQUFLLENBQUNvQixlQUFOLGlNQUF3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNOQyw0Q0FBSyxDQUFDQyxHQUFOLENBQ2QsbUhBRGMsQ0FETTs7QUFBQTtBQUNsQkMsYUFEa0I7QUFJdEI7QUFDTVAsY0FMZ0IsR0FLVE8sR0FBRyxDQUFDUCxJQUxLO0FBTWxCUSxnQkFOa0IsR0FNVCxFQU5TO0FBT2xCQyxnQkFQa0IsR0FPVCxFQVBTOztBQVF0QixlQUFTQyxHQUFULElBQWdCVixJQUFJLENBQUMscUJBQUQsQ0FBcEIsRUFBNkM7QUFDM0NRLGtCQUFNLENBQUNYLElBQVAsQ0FBWWEsR0FBWjtBQUNBRCxrQkFBTSxDQUFDWixJQUFQLENBQVlHLElBQUksQ0FBQyxxQkFBRCxDQUFKLENBQTRCVSxHQUE1QixFQUFpQyxVQUFqQyxDQUFaO0FBQ0Q7O0FBWHFCLDJDQWFmO0FBQUV6QixpQkFBSyxFQUFFdUIsTUFBVDtBQUFpQnRCLGlCQUFLLEVBQUV1QjtBQUF4QixXQWJlOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXhCO0FBZWV6QixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMzRjNzlhODJmYTY4NDhjZTQ2MmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IFJlc3BvbnNpdmVMaW5lIH0gZnJvbSBcIkBuaXZvL2xpbmVcIjtcclxuXHJcbmNvbnN0IEluZGV4ID0gKHsgcG9zdHMsIHByaWNlIH0pID0+IHtcclxuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IGNyZWF0ZURhdGEgPSAoKSA9PiB7XHJcbiAgICBsZXQgYXJyID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCB1aXVpID0geyB4OiBwb3N0c1tpXSwgeTogcHJpY2VbaV0gfTtcclxuICAgICAgYXJyLnB1c2godWl1aSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyO1xyXG4gIH07XHJcbiAgbGV0IGRhdGFzID0gW1xyXG4gICAge1xyXG4gICAgICBpZDogXCJJQk1cIixcclxuICAgICAgZGF0YTogY3JlYXRlRGF0YSgpLFxyXG4gICAgfSxcclxuICBdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDEgb25DbGljaz17KCkgPT4gc2V0Q291bnQoY291bnQgKyAxKX0+e2NvdW50fTwvaDE+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiA1MDAsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgPFJlc3BvbnNpdmVMaW5lXHJcbiAgICAgICAgICBkYXRhPXtkYXRhc31cclxuICAgICAgICAgIHdpZHRoPXs0MDB9XHJcbiAgICAgICAgICBoZWlnaHQ9ezQwMH1cclxuICAgICAgICAgIGNvbG9ycz17eyBzY2hlbWU6IFwibml2b1wiIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgIFwiaHR0cHM6Ly93d3cuYWxwaGF2YW50YWdlLmNvL3F1ZXJ5P2Z1bmN0aW9uPVRJTUVfU0VSSUVTX0lOVFJBREFZJnN5bWJvbD1JQk0maW50ZXJ2YWw9MTVtaW4mYXBpa2V5PVY2UE1ZRlFHTURJWTNZMVBcIlxyXG4gICk7XHJcbiAgLy9jb25zb2xlLmxvZyhyZXMpO1xyXG4gIGNvbnN0IGRhdGEgPSByZXMuZGF0YTtcclxuICBsZXQgeFZhbHVlID0gW107XHJcbiAgbGV0IHlWYWx1ZSA9IFtdO1xyXG4gIGZvciAobGV0IGtleSBpbiBkYXRhW1wiVGltZSBTZXJpZXMgKDE1bWluKVwiXSkge1xyXG4gICAgeFZhbHVlLnB1c2goa2V5KTtcclxuICAgIHlWYWx1ZS5wdXNoKGRhdGFbXCJUaW1lIFNlcmllcyAoMTVtaW4pXCJdW2tleV1bXCI0LiBjbG9zZVwiXSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBwb3N0czogeFZhbHVlLCBwcmljZTogeVZhbHVlIH07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9