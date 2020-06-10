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
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
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
  return __jsx("div", {
    className: _Search_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _Search_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.searchContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx("form", {
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
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
      lineNumber: 32,
      columnNumber: 21
    }
  }), __jsx("datalist", {
    id: "tickers",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 22
    }
  }, searchResults.map(function (item) {
    return __jsx("option", {
      key: item,
      value: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 29
      }
    }, item);
  })), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "success",
    size: "lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
    }
  }, "Something"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwic2VhcmNoUmVzdWx0cyIsInNldFNlYXJjaFJlc3VsdHMiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJocmVmIiwic3BsaXQiLCJwdXNoIiwidXNlRWZmZWN0IiwicmVzdWx0cyIsInNlYXJjaEJhbmsiLCJmaWx0ZXIiLCJpdGVtIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNob3J0IiwibGVuZ3RoIiwic2xpY2UiLCJzdHlsZXMiLCJjb250YWluZXIiLCJzZWFyY2hDb250YWluZXIiLCJpbnB1dCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsR0FBaUI7QUFBQTs7QUFBQTs7QUFDYixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURhLGtCQUV1QkMsc0RBQVEsQ0FBQyxFQUFELENBRi9CO0FBQUEsTUFFTkMsVUFGTTtBQUFBLE1BRU1DLGFBRk47O0FBQUEsbUJBRzRCRixzREFBUSxDQUFDLEVBQUQsQ0FIcEM7QUFBQSxNQUdORyxhQUhNO0FBQUEsTUFHUUMsZ0JBSFI7O0FBSWIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsS0FBSyxFQUFJO0FBQzFCSixpQkFBYSxDQUFDSSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQUFiO0FBQ0QsR0FGSDs7QUFHRSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBSCxLQUFLLEVBQUk7QUFDMUJBLFNBQUssQ0FBQ0ksY0FBTjtBQUNBLFFBQU1DLElBQUksMkJBQWtCVixVQUFVLENBQUNXLEtBQVgsQ0FBaUIsR0FBakIsRUFBc0IsQ0FBdEIsQ0FBbEIsbUJBQW1EWCxVQUFVLENBQUNXLEtBQVgsQ0FBaUIsR0FBakIsRUFBc0IsQ0FBdEIsQ0FBbkQsQ0FBVjtBQUNBZCxVQUFNLENBQUNlLElBQVAsQ0FBWUYsSUFBWjtBQUNILEdBSkQ7O0FBS0ZHLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU1DLE9BQU8sR0FBR0MsNkNBQVUsQ0FBQ0MsTUFBWCxDQUFrQixVQUFBQyxJQUFJO0FBQUEsYUFDcENBLElBQUksQ0FBQ0MsV0FBTCxHQUFtQkMsUUFBbkIsQ0FBNEJuQixVQUE1QixDQURvQztBQUFBLEtBQXRCLENBQWhCOztBQUdBLFFBQU1vQixNQUFLLEdBQUdOLE9BQU8sQ0FBQ08sTUFBUixHQUFpQixDQUFqQixHQUFxQlAsT0FBTyxDQUFDUSxLQUFSLENBQWMsQ0FBZCxFQUFnQixDQUFoQixDQUFyQixHQUEwQ1IsT0FBeEQ7O0FBQ0FYLG9CQUFnQixDQUFDaUIsTUFBRCxDQUFoQjtBQUNELEdBTk0sRUFNSixDQUFDcEIsVUFBRCxDQU5JLENBQVQ7QUFTRSxTQUNFO0FBQUssYUFBUyxFQUFFdUIseURBQU0sQ0FBQ0MsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFFRCx5REFBTSxDQUFDRSxlQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTSxZQUFRLEVBQUVqQixZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxhQUFTLEVBQUVlLHlEQUFNLENBQUNHLEtBQXpCO0FBQ0EsUUFBSSxFQUFDLE1BREw7QUFFQSxlQUFXLEVBQUMsV0FGWjtBQUdBLFNBQUssRUFBRTFCLFVBSFA7QUFJQSxZQUFRLEVBQUVJLFlBSlY7QUFLQSxRQUFJLEVBQUMsU0FMTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFRSztBQUFVLE1BQUUsRUFBQyxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSUYsYUFBYSxDQUFDeUIsR0FBZCxDQUFrQixVQUFBVixJQUFJO0FBQUEsV0FDbkI7QUFBUyxTQUFHLEVBQUVBLElBQWQ7QUFBb0IsV0FBSyxFQUFFQSxJQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWtDQSxJQUFsQyxDQURtQjtBQUFBLEdBQXRCLENBREosQ0FSTCxFQWFRLE1BQUMsOERBQUQ7QUFBUSxTQUFLLEVBQUMsU0FBZDtBQUF3QixRQUFJLEVBQUMsSUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiUixDQURKLENBREosQ0FERjtBQXNCTDs7R0EzQ1FyQixNO1VBQ1VFLHFEOzs7S0FEVkYsTTtBQTRDTUEscUVBQWYsRSxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBQzs7OztBQUdTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy43YTE0NzNmZjBjNWVhYTlhZDYyYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3QsdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHNlYXJjaEJhbmsgZnJvbSAnLi9saXN0JztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NlYXJjaC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaCgpe1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzZWFyY2hSZXN1bHRzLHNldFNlYXJjaFJlc3VsdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIHNldFNlYXJjaFRlcm0oZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgaGFuZGxlU3VibWl0ID0gZXZlbnQgPT4ge1xyXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIGNvbnN0IGhyZWY9YC9zdG9jaz90aWNrZXI9JHtzZWFyY2hUZXJtLnNwbGl0KCctJylbMF19Jm5hbWU9JHtzZWFyY2hUZXJtLnNwbGl0KCctJylbMV19YDtcclxuICAgICAgICAgIHJvdXRlci5wdXNoKGhyZWYpO1xyXG4gICAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBzZWFyY2hCYW5rLmZpbHRlcihpdGVtID0+XHJcbiAgICAgICAgICBpdGVtLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHNob3J0ID0gcmVzdWx0cy5sZW5ndGggPiA1ID8gcmVzdWx0cy5zbGljZSgwLDUpIDogcmVzdWx0cztcclxuICAgICAgICBzZXRTZWFyY2hSZXN1bHRzKHNob3J0KTtcclxuICAgICAgfSwgW3NlYXJjaFRlcm1dKTtcclxuICAgXHJcbiAgICBcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXJtfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdD0ndGlja2VycydcclxuICAgICAgICAgICAgICAgICAgICAgLz4gIFxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGF0YWxpc3QgaWQ9XCJ0aWNrZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZWFyY2hSZXN1bHRzLm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gIGtleT17aXRlbX0gdmFsdWU9e2l0ZW19PntpdGVtfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGF0YWxpc3Q+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwic3VjY2Vzc1wiIHNpemU9XCJsZ1wiID5Tb21ldGhpbmc8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlN1Ym1pdCEhITwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcclxuLy8ge3NlYXJjaFRlcm0ubGVuZ3RoID4gMCAgJiYgPGRhdGFsaXN0IGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9IC8+XHJcbi8vIHtzZWFyY2hSZXN1bHRzLmxlbmd0aCA+IDAgPyBzZWFyY2hSZXN1bHRzLm1hcChpdGVtID0+ICggIFxyXG4vLyAgPG9wdGlvbiBrZXk9e2l0ZW0uc3BsaXQoJy0nKVswXX0gY2xhc3NOYW1lPXtzdHlsZXMubGlzdEl0ZW19IHZhbHVlPXs8TGluayBocmVmPXtgL3N0b2NrP3RpY2tlcj0ke2l0ZW0uc3BsaXQoJy0nKVswXX0mbmFtZT0ke2l0ZW0uc3BsaXQoJy0nKVsxXX1gfT57aXRlbX08L0xpbms+fSAvPlxyXG4vLyApKSA6IDxwPk5vIGl0ZW0gbWF0Y2hpbmcgc2VhcmNoIHBhcmFtZXRlciE8L3A+fVxyXG4vLyB9XHJcbnsvKiA8ZGF0YWxpc3QgLz5cclxuICAgIHNlYXJjaFJlc3VsdHMubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJoZWhlXCIgLz5cclxuICAgICkpICovfSJdLCJzb3VyY2VSb290IjoiIn0=