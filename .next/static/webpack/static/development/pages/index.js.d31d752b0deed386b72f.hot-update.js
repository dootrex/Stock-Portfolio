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
      lineNumber: 19,
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
      lineNumber: 20,
      columnNumber: 11
    }
  }), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, searchResults.map(function (item) {
    __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 15
      }
    }, item);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJ1c2VTdGF0ZSIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwic2VhcmNoUmVzdWx0cyIsInNldFNlYXJjaFJlc3VsdHMiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwidXNlRWZmZWN0IiwicmVzdWx0cyIsInNlYXJjaEJhbmsiLCJmaWx0ZXIiLCJpdGVtIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNob3J0IiwibGVuZ3RoIiwic2xpY2UiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxHQUFpQjtBQUFBOztBQUFBOztBQUFBLGtCQUN1QkMsc0RBQVEsQ0FBQyxFQUFELENBRC9CO0FBQUEsTUFDTkMsVUFETTtBQUFBLE1BQ01DLGFBRE47O0FBQUEsbUJBRTRCRixzREFBUSxDQUFDLEVBQUQsQ0FGcEM7QUFBQSxNQUVORyxhQUZNO0FBQUEsTUFFUUMsZ0JBRlI7O0FBR2IsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsS0FBSyxFQUFJO0FBQzFCSixpQkFBYSxDQUFDSSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQUFiO0FBQ0QsR0FGSDs7QUFHQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsT0FBTyxHQUFHQyw2Q0FBVSxDQUFDQyxNQUFYLENBQWtCLFVBQUFDLElBQUk7QUFBQSxhQUNwQ0EsSUFBSSxDQUFDQyxXQUFMLEdBQW1CQyxRQUFuQixDQUE0QmQsVUFBNUIsQ0FEb0M7QUFBQSxLQUF0QixDQUFoQjs7QUFHQSxRQUFNZSxNQUFLLEdBQUdOLE9BQU8sQ0FBQ08sTUFBUixHQUFpQixDQUFqQixHQUFxQlAsT0FBTyxDQUFDUSxLQUFSLENBQWMsQ0FBZCxFQUFnQixDQUFoQixDQUFyQixHQUEwQ1IsT0FBeEQ7O0FBQ0FOLG9CQUFnQixDQUFDWSxNQUFELENBQWhCO0FBQ0QsR0FOTSxFQU1KLENBQUNmLFVBQUQsQ0FOSSxDQUFUO0FBUUUsU0FDRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsZUFBVyxFQUFDLFFBRmQ7QUFHRSxTQUFLLEVBQUVBLFVBSFQ7QUFJRSxZQUFRLEVBQUVJLFlBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJRixhQUFhLENBQUNnQixHQUFkLENBQWtCLFVBQUFOLElBQUksRUFBSTtBQUUxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtBLElBQUwsQ0FGMkI7QUFHM0IsR0FIQSxDQURKLENBUEYsQ0FERjtBQWdCTDs7R0E5QlFkLE07O0tBQUFBLE07QUErQk1BLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5kMzFkNzUyYjBkZWVkMzg2YjcyZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3QsdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHNlYXJjaEJhbmsgZnJvbSAnLi9saXN0JztcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaCgpe1xyXG4gICAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlYXJjaFJlc3VsdHMsc2V0U2VhcmNoUmVzdWx0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XHJcbiAgICAgICAgc2V0U2VhcmNoVGVybShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICB9O1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCByZXN1bHRzID0gc2VhcmNoQmFuay5maWx0ZXIoaXRlbSA9PlxyXG4gICAgICAgICAgaXRlbS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBzaG9ydCA9IHJlc3VsdHMubGVuZ3RoID4gNSA/IHJlc3VsdHMuc2xpY2UoMCw1KSA6IHJlc3VsdHNcclxuICAgICAgICBzZXRTZWFyY2hSZXN1bHRzKHNob3J0KTtcclxuICAgICAgfSwgW3NlYXJjaFRlcm1dKTtcclxuICAgIFxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXJtfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgIHtzZWFyY2hSZXN1bHRzLm1hcChpdGVtID0+IHsoXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGxpPntpdGVtfTwvbGk+XHJcbiAgICAgICAgICAgICl9KX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoOyJdLCJzb3VyY2VSb290IjoiIn0=