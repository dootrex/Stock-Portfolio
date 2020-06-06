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

  var hello = createData();
  console.log(hello);
  var datas = [{
    id: "IBM",
    data: hello
  }];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("h1", {
    onClick: function onClick() {
      return setCount(count + 1);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
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
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(_nivo_line__WEBPACK_IMPORTED_MODULE_4__["Line"], {
    data: datas,
    width: 400,
    height: 400,
    colors: {
      scheme: "nivo"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInBvc3RzIiwicHJpY2UiLCJ1c2VTdGF0ZSIsImNvdW50Iiwic2V0Q291bnQiLCJjcmVhdGVEYXRhIiwiYXJyIiwiaSIsImxlbmd0aCIsInVpdWkiLCJ4IiwieSIsInB1c2giLCJoZWxsbyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhcyIsImlkIiwiZGF0YSIsImhlaWdodCIsIndpZHRoIiwic2NoZW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwiYXhpb3MiLCJnZXQiLCJyZXMiLCJ4VmFsdWUiLCJ5VmFsdWUiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFzQjtBQUFBOztBQUFBLE1BQW5CQyxLQUFtQixRQUFuQkEsS0FBbUI7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQUEsa0JBQ1JDLHNEQUFRLENBQUMsQ0FBRCxDQURBO0FBQUEsTUFDM0JDLEtBRDJCO0FBQUEsTUFDcEJDLFFBRG9COztBQUVsQyxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCLFFBQUlDLEdBQUcsR0FBRyxFQUFWOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1AsS0FBSyxDQUFDUSxNQUExQixFQUFrQ0QsQ0FBQyxFQUFuQyxFQUF1QztBQUNyQyxVQUFJRSxJQUFJLEdBQUc7QUFBRUMsU0FBQyxFQUFFVixLQUFLLENBQUNPLENBQUQsQ0FBVjtBQUFlSSxTQUFDLEVBQUVWLEtBQUssQ0FBQ00sQ0FBRDtBQUF2QixPQUFYO0FBQ0FELFNBQUcsQ0FBQ00sSUFBSixDQUFTSCxJQUFUO0FBQ0Q7O0FBQ0QsV0FBT0gsR0FBUDtBQUNELEdBUEQ7O0FBUUEsTUFBTU8sS0FBSyxHQUFHUixVQUFVLEVBQXhCO0FBQ0FTLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0EsTUFBSUcsS0FBSyxHQUFHLENBQ1Y7QUFDRUMsTUFBRSxFQUFFLEtBRE47QUFFRUMsUUFBSSxFQUFFTDtBQUZSLEdBRFUsQ0FBWjtBQU1BLFNBQ0UsbUVBQ0U7QUFBSSxXQUFPLEVBQUU7QUFBQSxhQUFNVCxRQUFRLENBQUNELEtBQUssR0FBRyxDQUFULENBQWQ7QUFBQSxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeUNBLEtBQXpDLENBREYsRUFFRTtBQUFLLFNBQUssRUFBRTtBQUFFZ0IsWUFBTSxFQUFFLEdBQVY7QUFBZUMsV0FBSyxFQUFFO0FBQXRCLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0NBQUQ7QUFDRSxRQUFJLEVBQUVKLEtBRFI7QUFFRSxTQUFLLEVBQUUsR0FGVDtBQUdFLFVBQU0sRUFBRSxHQUhWO0FBSUUsVUFBTSxFQUFFO0FBQUVLLFlBQU0sRUFBRTtBQUFWLEtBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRkYsQ0FERjtBQWFELENBL0JEOztHQUFNdEIsSzs7S0FBQUEsSztBQWdDTkEsS0FBSyxDQUFDdUIsZUFBTixpTUFBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDTkMsNENBQUssQ0FBQ0MsR0FBTixDQUNkLG1IQURjLENBRE07O0FBQUE7QUFDbEJDLGFBRGtCO0FBSXRCO0FBQ01QLGNBTGdCLEdBS1RPLEdBQUcsQ0FBQ1AsSUFMSztBQU1sQlEsZ0JBTmtCLEdBTVQsRUFOUztBQU9sQkMsZ0JBUGtCLEdBT1QsRUFQUzs7QUFRdEIsZUFBU0MsR0FBVCxJQUFnQlYsSUFBSSxDQUFDLHFCQUFELENBQXBCLEVBQTZDO0FBQzNDUSxrQkFBTSxDQUFDZCxJQUFQLENBQVlnQixHQUFaO0FBQ0FELGtCQUFNLENBQUNmLElBQVAsQ0FBWU0sSUFBSSxDQUFDLHFCQUFELENBQUosQ0FBNEJVLEdBQTVCLEVBQWlDLFVBQWpDLENBQVo7QUFDRDs7QUFYcUIsMkNBYWY7QUFBRTVCLGlCQUFLLEVBQUUwQixNQUFUO0FBQWlCekIsaUJBQUssRUFBRTBCO0FBQXhCLFdBYmU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBeEI7QUFlZTVCLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5iMDBlNWU3YzhjMDcwNGE1MjFmMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgTGluZSB9IGZyb20gXCJAbml2by9saW5lXCI7XHJcblxyXG5jb25zdCBJbmRleCA9ICh7IHBvc3RzLCBwcmljZSB9KSA9PiB7XHJcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBjcmVhdGVEYXRhID0gKCkgPT4ge1xyXG4gICAgbGV0IGFyciA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3N0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgdWl1aSA9IHsgeDogcG9zdHNbaV0sIHk6IHByaWNlW2ldIH07XHJcbiAgICAgIGFyci5wdXNoKHVpdWkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycjtcclxuICB9O1xyXG4gIGNvbnN0IGhlbGxvID0gY3JlYXRlRGF0YSgpO1xyXG4gIGNvbnNvbGUubG9nKGhlbGxvKTtcclxuICBsZXQgZGF0YXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiBcIklCTVwiLFxyXG4gICAgICBkYXRhOiBoZWxsbyxcclxuICAgIH0sXHJcbiAgXTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgxIG9uQ2xpY2s9eygpID0+IHNldENvdW50KGNvdW50ICsgMSl9Pntjb3VudH08L2gxPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogNTAwLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgIDxMaW5lXHJcbiAgICAgICAgICBkYXRhPXtkYXRhc31cclxuICAgICAgICAgIHdpZHRoPXs0MDB9XHJcbiAgICAgICAgICBoZWlnaHQ9ezQwMH1cclxuICAgICAgICAgIGNvbG9ycz17eyBzY2hlbWU6IFwibml2b1wiIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgIFwiaHR0cHM6Ly93d3cuYWxwaGF2YW50YWdlLmNvL3F1ZXJ5P2Z1bmN0aW9uPVRJTUVfU0VSSUVTX0lOVFJBREFZJnN5bWJvbD1JQk0maW50ZXJ2YWw9MTVtaW4mYXBpa2V5PVY2UE1ZRlFHTURJWTNZMVBcIlxyXG4gICk7XHJcbiAgLy9jb25zb2xlLmxvZyhyZXMpO1xyXG4gIGNvbnN0IGRhdGEgPSByZXMuZGF0YTtcclxuICBsZXQgeFZhbHVlID0gW107XHJcbiAgbGV0IHlWYWx1ZSA9IFtdO1xyXG4gIGZvciAobGV0IGtleSBpbiBkYXRhW1wiVGltZSBTZXJpZXMgKDE1bWluKVwiXSkge1xyXG4gICAgeFZhbHVlLnB1c2goa2V5KTtcclxuICAgIHlWYWx1ZS5wdXNoKGRhdGFbXCJUaW1lIFNlcmllcyAoMTVtaW4pXCJdW2tleV1bXCI0LiBjbG9zZVwiXSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBwb3N0czogeFZhbHVlLCBwcmljZTogeVZhbHVlIH07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9