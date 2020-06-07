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
    return __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJ1c2VTdGF0ZSIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwic2VhcmNoUmVzdWx0cyIsInNldFNlYXJjaFJlc3VsdHMiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwidXNlRWZmZWN0IiwicmVzdWx0cyIsInNlYXJjaEJhbmsiLCJmaWx0ZXIiLCJpdGVtIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNob3J0IiwibGVuZ3RoIiwic2xpY2UiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxHQUFpQjtBQUFBOztBQUFBOztBQUFBLGtCQUN1QkMsc0RBQVEsQ0FBQyxFQUFELENBRC9CO0FBQUEsTUFDTkMsVUFETTtBQUFBLE1BQ01DLGFBRE47O0FBQUEsbUJBRTRCRixzREFBUSxDQUFDLEVBQUQsQ0FGcEM7QUFBQSxNQUVORyxhQUZNO0FBQUEsTUFFUUMsZ0JBRlI7O0FBR2IsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsS0FBSyxFQUFJO0FBQzFCSixpQkFBYSxDQUFDSSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQUFiO0FBQ0QsR0FGSDs7QUFHQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsT0FBTyxHQUFHQyw2Q0FBVSxDQUFDQyxNQUFYLENBQWtCLFVBQUFDLElBQUk7QUFBQSxhQUNwQ0EsSUFBSSxDQUFDQyxXQUFMLEdBQW1CQyxRQUFuQixDQUE0QmQsVUFBNUIsQ0FEb0M7QUFBQSxLQUF0QixDQUFoQjs7QUFHQSxRQUFNZSxNQUFLLEdBQUdOLE9BQU8sQ0FBQ08sTUFBUixHQUFpQixDQUFqQixHQUFxQlAsT0FBTyxDQUFDUSxLQUFSLENBQWMsQ0FBZCxFQUFnQixDQUFoQixDQUFyQixHQUEwQ1IsT0FBeEQ7O0FBQ0FOLG9CQUFnQixDQUFDWSxNQUFELENBQWhCO0FBQ0QsR0FOTSxFQU1KLENBQUNmLFVBQUQsQ0FOSSxDQUFUO0FBUUUsU0FDRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsZUFBVyxFQUFDLFFBRmQ7QUFHRSxTQUFLLEVBQUVBLFVBSFQ7QUFJRSxZQUFRLEVBQUVJLFlBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJRixhQUFhLENBQUNnQixHQUFkLENBQWtCLFVBQUFOLElBQUk7QUFBQSxXQUN0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtBLElBQUwsQ0FEc0I7QUFBQSxHQUF0QixDQURKLENBUEYsQ0FERjtBQWVMOztHQTdCUWQsTTs7S0FBQUEsTTtBQThCTUEscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmUwODEwYWZjYjgyZTU5ZDlkNmRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc2VhcmNoQmFuayBmcm9tICcuL2xpc3QnO1xyXG5cclxuZnVuY3Rpb24gU2VhcmNoKCl7XHJcbiAgICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc2VhcmNoUmVzdWx0cyxzZXRTZWFyY2hSZXN1bHRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcclxuICAgICAgICBzZXRTZWFyY2hUZXJtKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgIH07XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBzZWFyY2hCYW5rLmZpbHRlcihpdGVtID0+XHJcbiAgICAgICAgICBpdGVtLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHNob3J0ID0gcmVzdWx0cy5sZW5ndGggPiA1ID8gcmVzdWx0cy5zbGljZSgwLDUpIDogcmVzdWx0c1xyXG4gICAgICAgIHNldFNlYXJjaFJlc3VsdHMoc2hvcnQpO1xyXG4gICAgICB9LCBbc2VhcmNoVGVybV0pO1xyXG4gICAgXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRlcm19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAge3NlYXJjaFJlc3VsdHMubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgIDxsaT57aXRlbX08L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoOyJdLCJzb3VyY2VSb290IjoiIn0=