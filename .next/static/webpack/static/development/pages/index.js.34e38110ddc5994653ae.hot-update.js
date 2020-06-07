webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ "./components/list.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Avi\\Downloads\\Work\\stocky\\Stock-Portfolio\\components\\Search.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Search() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      searchTerm = _useState[0],
      setSearchTerm = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      searchResults = _useState2[0],
      setSearchResults = _useState2[1];

  var handleChange = function handleChange(event) {
    setSearchTerm(event.target.value);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var results = _list__WEBPACK_IMPORTED_MODULE_1__["default"].filter(function (item) {
      return item.toLowerCase().includes(searchTerm);
    });

    var _short = results.length > 5 ? results.slice(0, 5) : results;

    setSearchResults(_short);
  }, [searchTerm]);
  return __jsx("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "text",
    placeholder: "Search",
    value: searchTerm,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, searchResults.map(function (item) {
    return __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 15
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/stock?ticker=".concat(item.split('-')[0]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 19
      }
    }, item.split('-')[0]));
  })));
}

_s(Search, "Af2CDQMM4Y1+fVvuu3xx07w0R6E=");

_c = Search;
/* harmony default export */ __webpack_exports__["default"] = (Search);

var _c;

$RefreshReg$(_c, "Search");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJ1c2VTdGF0ZSIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwic2VhcmNoUmVzdWx0cyIsInNldFNlYXJjaFJlc3VsdHMiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwidXNlRWZmZWN0IiwicmVzdWx0cyIsInNlYXJjaEJhbmsiLCJmaWx0ZXIiLCJpdGVtIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNob3J0IiwibGVuZ3RoIiwic2xpY2UiLCJtYXAiLCJzcGxpdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxHQUFpQjtBQUFBOztBQUFBOztBQUFBLGtCQUN1QkMsc0RBQVEsQ0FBQyxFQUFELENBRC9CO0FBQUEsTUFDTkMsVUFETTtBQUFBLE1BQ01DLGFBRE47O0FBQUEsbUJBRTRCRixzREFBUSxDQUFDLEVBQUQsQ0FGcEM7QUFBQSxNQUVORyxhQUZNO0FBQUEsTUFFUUMsZ0JBRlI7O0FBR2IsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsS0FBSyxFQUFJO0FBQzFCSixpQkFBYSxDQUFDSSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQUFiO0FBQ0QsR0FGSDs7QUFHQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsT0FBTyxHQUFHQyw2Q0FBVSxDQUFDQyxNQUFYLENBQWtCLFVBQUFDLElBQUk7QUFBQSxhQUNwQ0EsSUFBSSxDQUFDQyxXQUFMLEdBQW1CQyxRQUFuQixDQUE0QmQsVUFBNUIsQ0FEb0M7QUFBQSxLQUF0QixDQUFoQjs7QUFHQSxRQUFNZSxNQUFLLEdBQUdOLE9BQU8sQ0FBQ08sTUFBUixHQUFpQixDQUFqQixHQUFxQlAsT0FBTyxDQUFDUSxLQUFSLENBQWMsQ0FBZCxFQUFnQixDQUFoQixDQUFyQixHQUEwQ1IsT0FBeEQ7O0FBQ0FOLG9CQUFnQixDQUFDWSxNQUFELENBQWhCO0FBQ0QsR0FOTSxFQU1KLENBQUNmLFVBQUQsQ0FOSSxDQUFUO0FBUUUsU0FDRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsZUFBVyxFQUFDLFFBRmQ7QUFHRSxTQUFLLEVBQUVBLFVBSFQ7QUFJRSxZQUFRLEVBQUVJLFlBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJRixhQUFhLENBQUNnQixHQUFkLENBQWtCLFVBQUFOLElBQUk7QUFBQSxXQUV0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUksTUFBQyxnREFBRDtBQUFNLFVBQUksMEJBQW1CQSxJQUFJLENBQUNPLEtBQUwsQ0FBVyxHQUFYLEVBQWdCLENBQWhCLENBQW5CLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFvRFAsSUFBSSxDQUFDTyxLQUFMLENBQVcsR0FBWCxFQUFnQixDQUFoQixDQUFwRCxDQUFKLENBRnNCO0FBQUEsR0FBdEIsQ0FESixDQVBGLENBREY7QUFnQkw7O0dBOUJRckIsTTs7S0FBQUEsTTtBQStCTUEscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjM0ZTM4MTEwZGRjNTk5NDY1M2FlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc2VhcmNoQmFuayBmcm9tICcuL2xpc3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5mdW5jdGlvbiBTZWFyY2goKXtcclxuICAgIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzZWFyY2hSZXN1bHRzLHNldFNlYXJjaFJlc3VsdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIHNldFNlYXJjaFRlcm0oZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgfTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IHNlYXJjaEJhbmsuZmlsdGVyKGl0ZW0gPT5cclxuICAgICAgICAgIGl0ZW0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3Qgc2hvcnQgPSByZXN1bHRzLmxlbmd0aCA+IDUgPyByZXN1bHRzLnNsaWNlKDAsNSkgOiByZXN1bHRzXHJcbiAgICAgICAgc2V0U2VhcmNoUmVzdWx0cyhzaG9ydCk7XHJcbiAgICAgIH0sIFtzZWFyY2hUZXJtXSk7XHJcbiAgICBcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICB2YWx1ZT17c2VhcmNoVGVybX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICB7c2VhcmNoUmVzdWx0cy5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e2Avc3RvY2s/dGlja2VyPSR7aXRlbS5zcGxpdCgnLScpWzBdfWB9PntpdGVtLnNwbGl0KCctJylbMF19PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7Il0sInNvdXJjZVJvb3QiOiIifQ==