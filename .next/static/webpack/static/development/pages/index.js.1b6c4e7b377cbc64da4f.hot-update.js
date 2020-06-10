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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Search_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Search.module.css */ "./components/Search.module.css");
/* harmony import */ var _Search_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Search_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Avi\\Downloads\\Work\\stocky\\Stock-Portfolio\\components\\Search.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function Search() {
  _s();

  var _this = this;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      searchTerm = _useState[0],
      setSearchTerm = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      searchResults = _useState2[0],
      setSearchResults = _useState2[1];

  var handleChange = function handleChange(event) {
    setSearchTerm(event.target.value);
  };

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    var href = "/stock?ticker=".concat(searchTerm.split('-')[0], "&name=").concat(searchTerm.split('-')[1]);
    router.push(href);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var results = _list__WEBPACK_IMPORTED_MODULE_1__["default"].filter(function (item) {
      return item.toLowerCase().includes(searchTerm);
    });

    var _short = results.length > 5 ? results.slice(0, 5) : results;

    setSearchResults(_short);
  }, [searchTerm]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
    integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
    crossorigin: "anonymous",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: _Search_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _Search_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.searchContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("form", {
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx("input", {
    className: _Search_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.input,
    type: "text",
    placeholder: "Search...",
    value: searchTerm,
    onChange: handleChange,
    list: "tickers",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }), __jsx("datalist", {
    id: "tickers",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 22
    }
  }, searchResults.map(function (item) {
    return __jsx("option", {
      key: item,
      value: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 29
      }
    }, item);
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    color: "success",
    size: "md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }, "Something")))));
}

_s(Search, "StWoqLVez0PxJzSiGGbjmS0vTTk=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Search;
/* harmony default export */ __webpack_exports__["default"] = (Search); // {searchTerm.length > 0  && <datalist className={styles.list} />
// {searchResults.length > 0 ? searchResults.map(item => (  
//  <option key={item.split('-')[0]} className={styles.listItem} value={<Link href={`/stock?ticker=${item.split('-')[0]}&name=${item.split('-')[1]}`}>{item}</Link>} />
// )) : <p>No item matching search parameter!</p>}
// }

{
  /* <datalist />
     searchResults.map(item => (
         <option value="hehe" />
     )) */
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwic2VhcmNoUmVzdWx0cyIsInNldFNlYXJjaFJlc3VsdHMiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJocmVmIiwic3BsaXQiLCJwdXNoIiwidXNlRWZmZWN0IiwicmVzdWx0cyIsInNlYXJjaEJhbmsiLCJmaWx0ZXIiLCJpdGVtIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNob3J0IiwibGVuZ3RoIiwic2xpY2UiLCJzdHlsZXMiLCJjb250YWluZXIiLCJzZWFyY2hDb250YWluZXIiLCJpbnB1dCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULEdBQWlCO0FBQUE7O0FBQUE7O0FBQ2IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEYSxrQkFFdUJDLHNEQUFRLENBQUMsRUFBRCxDQUYvQjtBQUFBLE1BRU5DLFVBRk07QUFBQSxNQUVNQyxhQUZOOztBQUFBLG1CQUc0QkYsc0RBQVEsQ0FBQyxFQUFELENBSHBDO0FBQUEsTUFHTkcsYUFITTtBQUFBLE1BR1FDLGdCQUhSOztBQUliLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLEtBQUssRUFBSTtBQUMxQkosaUJBQWEsQ0FBQ0ksS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBYjtBQUNELEdBRkg7O0FBR0UsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUgsS0FBSyxFQUFJO0FBQzFCQSxTQUFLLENBQUNJLGNBQU47QUFDQSxRQUFNQyxJQUFJLDJCQUFrQlYsVUFBVSxDQUFDVyxLQUFYLENBQWlCLEdBQWpCLEVBQXNCLENBQXRCLENBQWxCLG1CQUFtRFgsVUFBVSxDQUFDVyxLQUFYLENBQWlCLEdBQWpCLEVBQXNCLENBQXRCLENBQW5ELENBQVY7QUFDQWQsVUFBTSxDQUFDZSxJQUFQLENBQVlGLElBQVo7QUFDSCxHQUpEOztBQUtGRyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxPQUFPLEdBQUdDLDZDQUFVLENBQUNDLE1BQVgsQ0FBa0IsVUFBQUMsSUFBSTtBQUFBLGFBQ3BDQSxJQUFJLENBQUNDLFdBQUwsR0FBbUJDLFFBQW5CLENBQTRCbkIsVUFBNUIsQ0FEb0M7QUFBQSxLQUF0QixDQUFoQjs7QUFHQSxRQUFNb0IsTUFBSyxHQUFHTixPQUFPLENBQUNPLE1BQVIsR0FBaUIsQ0FBakIsR0FBcUJQLE9BQU8sQ0FBQ1EsS0FBUixDQUFjLENBQWQsRUFBZ0IsQ0FBaEIsQ0FBckIsR0FBMENSLE9BQXhEOztBQUNBWCxvQkFBZ0IsQ0FBQ2lCLE1BQUQsQ0FBaEI7QUFDRCxHQU5NLEVBTUosQ0FBQ3BCLFVBQUQsQ0FOSSxDQUFUO0FBU0UsU0FDSSxtRUFDQSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNOLE9BQUcsRUFBQyxZQURFO0FBRU4sUUFBSSxFQUFDLHVFQUZDO0FBR04sYUFBUyxFQUFDLHlFQUhKO0FBSU4sZUFBVyxFQUFDLFdBSk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREEsRUFTRjtBQUFLLGFBQVMsRUFBRXVCLHlEQUFNLENBQUNDLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRUQseURBQU0sQ0FBQ0UsZUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU0sWUFBUSxFQUFFakIsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sYUFBUyxFQUFFZSx5REFBTSxDQUFDRyxLQUF6QjtBQUNBLFFBQUksRUFBQyxNQURMO0FBRUEsZUFBVyxFQUFDLFdBRlo7QUFHQSxTQUFLLEVBQUUxQixVQUhQO0FBSUEsWUFBUSxFQUFFSSxZQUpWO0FBS0EsUUFBSSxFQUFDLFNBTEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBUUs7QUFBVSxNQUFFLEVBQUMsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0lGLGFBQWEsQ0FBQ3lCLEdBQWQsQ0FBa0IsVUFBQVYsSUFBSTtBQUFBLFdBQ25CO0FBQVMsU0FBRyxFQUFFQSxJQUFkO0FBQW9CLFdBQUssRUFBRUEsSUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFrQ0EsSUFBbEMsQ0FEbUI7QUFBQSxHQUF0QixDQURKLENBUkwsRUFhUSxNQUFDLHNEQUFEO0FBQVEsU0FBSyxFQUFDLFNBQWQ7QUFBd0IsUUFBSSxFQUFDLElBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYlIsQ0FESixDQURKLENBVEUsQ0FESjtBQWdDTDs7R0FyRFFyQixNO1VBQ1VFLHFEOzs7S0FEVkYsTTtBQXNETUEscUVBQWYsRSxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBQzs7OztBQUdTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4xYjZjNGU3YjM3N2NiYzY0ZGE0Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3QsdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHNlYXJjaEJhbmsgZnJvbSAnLi9saXN0JztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NlYXJjaC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHtCdXR0b259IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2goKXtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc2VhcmNoUmVzdWx0cyxzZXRTZWFyY2hSZXN1bHRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcclxuICAgICAgICBzZXRTZWFyY2hUZXJtKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGV2ZW50ID0+IHtcclxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBjb25zdCBocmVmPWAvc3RvY2s/dGlja2VyPSR7c2VhcmNoVGVybS5zcGxpdCgnLScpWzBdfSZuYW1lPSR7c2VhcmNoVGVybS5zcGxpdCgnLScpWzFdfWA7XHJcbiAgICAgICAgICByb3V0ZXIucHVzaChocmVmKTtcclxuICAgICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCByZXN1bHRzID0gc2VhcmNoQmFuay5maWx0ZXIoaXRlbSA9PlxyXG4gICAgICAgICAgaXRlbS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBzaG9ydCA9IHJlc3VsdHMubGVuZ3RoID4gNSA/IHJlc3VsdHMuc2xpY2UoMCw1KSA6IHJlc3VsdHM7XHJcbiAgICAgICAgc2V0U2VhcmNoUmVzdWx0cyhzaG9ydCk7XHJcbiAgICAgIH0sIFtzZWFyY2hUZXJtXSk7XHJcbiAgIFxyXG4gICAgXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtZ2dPeVIwaVhDYk1RdjNYaXBtYTM0TUQrZEgvMWZRNzg0L2o2Y1kvaUpUUVVPaGNXcjd4OUp2b1J4VDJNWncxVFwiXHJcbiAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAvPlxyXG4gICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRlcm19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBsaXN0PSd0aWNrZXJzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAvPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgIDxkYXRhbGlzdCBpZD1cInRpY2tlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NlYXJjaFJlc3VsdHMubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAga2V5PXtpdGVtfSB2YWx1ZT17aXRlbX0+e2l0ZW19PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kYXRhbGlzdD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJzdWNjZXNzXCIgc2l6ZT1cIm1kXCIgPlNvbWV0aGluZzwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+U3VibWl0ISEhPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xyXG4vLyB7c2VhcmNoVGVybS5sZW5ndGggPiAwICAmJiA8ZGF0YWxpc3QgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0gLz5cclxuLy8ge3NlYXJjaFJlc3VsdHMubGVuZ3RoID4gMCA/IHNlYXJjaFJlc3VsdHMubWFwKGl0ZW0gPT4gKCAgXHJcbi8vICA8b3B0aW9uIGtleT17aXRlbS5zcGxpdCgnLScpWzBdfSBjbGFzc05hbWU9e3N0eWxlcy5saXN0SXRlbX0gdmFsdWU9ezxMaW5rIGhyZWY9e2Avc3RvY2s/dGlja2VyPSR7aXRlbS5zcGxpdCgnLScpWzBdfSZuYW1lPSR7aXRlbS5zcGxpdCgnLScpWzFdfWB9PntpdGVtfTwvTGluaz59IC8+XHJcbi8vICkpIDogPHA+Tm8gaXRlbSBtYXRjaGluZyBzZWFyY2ggcGFyYW1ldGVyITwvcD59XHJcbi8vIH1cclxuey8qIDxkYXRhbGlzdCAvPlxyXG4gICAgc2VhcmNoUmVzdWx0cy5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhlaGVcIiAvPlxyXG4gICAgKSkgKi99Il0sInNvdXJjZVJvb3QiOiIifQ==