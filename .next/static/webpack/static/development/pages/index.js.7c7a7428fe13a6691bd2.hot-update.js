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
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "success",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwic2VhcmNoUmVzdWx0cyIsInNldFNlYXJjaFJlc3VsdHMiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJocmVmIiwic3BsaXQiLCJwdXNoIiwidXNlRWZmZWN0IiwicmVzdWx0cyIsInNlYXJjaEJhbmsiLCJmaWx0ZXIiLCJpdGVtIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNob3J0IiwibGVuZ3RoIiwic2xpY2UiLCJzdHlsZXMiLCJjb250YWluZXIiLCJzZWFyY2hDb250YWluZXIiLCJpbnB1dCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsR0FBaUI7QUFBQTs7QUFBQTs7QUFDYixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURhLGtCQUV1QkMsc0RBQVEsQ0FBQyxFQUFELENBRi9CO0FBQUEsTUFFTkMsVUFGTTtBQUFBLE1BRU1DLGFBRk47O0FBQUEsbUJBRzRCRixzREFBUSxDQUFDLEVBQUQsQ0FIcEM7QUFBQSxNQUdORyxhQUhNO0FBQUEsTUFHUUMsZ0JBSFI7O0FBSWIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsS0FBSyxFQUFJO0FBQzFCSixpQkFBYSxDQUFDSSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQUFiO0FBQ0QsR0FGSDs7QUFHRSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBSCxLQUFLLEVBQUk7QUFDMUJBLFNBQUssQ0FBQ0ksY0FBTjtBQUNBLFFBQU1DLElBQUksMkJBQWtCVixVQUFVLENBQUNXLEtBQVgsQ0FBaUIsR0FBakIsRUFBc0IsQ0FBdEIsQ0FBbEIsbUJBQW1EWCxVQUFVLENBQUNXLEtBQVgsQ0FBaUIsR0FBakIsRUFBc0IsQ0FBdEIsQ0FBbkQsQ0FBVjtBQUNBZCxVQUFNLENBQUNlLElBQVAsQ0FBWUYsSUFBWjtBQUNILEdBSkQ7O0FBS0ZHLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU1DLE9BQU8sR0FBR0MsNkNBQVUsQ0FBQ0MsTUFBWCxDQUFrQixVQUFBQyxJQUFJO0FBQUEsYUFDcENBLElBQUksQ0FBQ0MsV0FBTCxHQUFtQkMsUUFBbkIsQ0FBNEJuQixVQUE1QixDQURvQztBQUFBLEtBQXRCLENBQWhCOztBQUdBLFFBQU1vQixNQUFLLEdBQUdOLE9BQU8sQ0FBQ08sTUFBUixHQUFpQixDQUFqQixHQUFxQlAsT0FBTyxDQUFDUSxLQUFSLENBQWMsQ0FBZCxFQUFnQixDQUFoQixDQUFyQixHQUEwQ1IsT0FBeEQ7O0FBQ0FYLG9CQUFnQixDQUFDaUIsTUFBRCxDQUFoQjtBQUNELEdBTk0sRUFNSixDQUFDcEIsVUFBRCxDQU5JLENBQVQ7QUFTRSxTQUNFO0FBQUssYUFBUyxFQUFFdUIseURBQU0sQ0FBQ0MsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFFRCx5REFBTSxDQUFDRSxlQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTSxZQUFRLEVBQUVqQixZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxhQUFTLEVBQUVlLHlEQUFNLENBQUNHLEtBQXpCO0FBQ0EsUUFBSSxFQUFDLE1BREw7QUFFQSxlQUFXLEVBQUMsV0FGWjtBQUdBLFNBQUssRUFBRTFCLFVBSFA7QUFJQSxZQUFRLEVBQUVJLFlBSlY7QUFLQSxRQUFJLEVBQUMsU0FMTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFRSztBQUFVLE1BQUUsRUFBQyxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSUYsYUFBYSxDQUFDeUIsR0FBZCxDQUFrQixVQUFBVixJQUFJO0FBQUEsV0FDbkI7QUFBUyxTQUFHLEVBQUVBLElBQWQ7QUFBb0IsV0FBSyxFQUFFQSxJQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWtDQSxJQUFsQyxDQURtQjtBQUFBLEdBQXRCLENBREosQ0FSTCxFQWFRLE1BQUMsc0RBQUQ7QUFBUSxXQUFPLEVBQUMsU0FBaEI7QUFBMEIsUUFBSSxFQUFDLElBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYlIsQ0FESixDQURKLENBREY7QUFzQkw7O0dBM0NRckIsTTtVQUNVRSxxRDs7O0tBRFZGLE07QUE0Q01BLHFFQUFmLEUsQ0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQUM7Ozs7QUFHUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuN2M3YTc0MjhmZTEzYTY2OTFiZDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzZWFyY2hCYW5rIGZyb20gJy4vbGlzdCc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TZWFyY2gubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuZnVuY3Rpb24gU2VhcmNoKCl7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlYXJjaFJlc3VsdHMsc2V0U2VhcmNoUmVzdWx0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XHJcbiAgICAgICAgc2V0U2VhcmNoVGVybShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBldmVudCA9PiB7XHJcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgY29uc3QgaHJlZj1gL3N0b2NrP3RpY2tlcj0ke3NlYXJjaFRlcm0uc3BsaXQoJy0nKVswXX0mbmFtZT0ke3NlYXJjaFRlcm0uc3BsaXQoJy0nKVsxXX1gO1xyXG4gICAgICAgICAgcm91dGVyLnB1c2goaHJlZik7XHJcbiAgICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IHNlYXJjaEJhbmsuZmlsdGVyKGl0ZW0gPT5cclxuICAgICAgICAgIGl0ZW0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3Qgc2hvcnQgPSByZXN1bHRzLmxlbmd0aCA+IDUgPyByZXN1bHRzLnNsaWNlKDAsNSkgOiByZXN1bHRzO1xyXG4gICAgICAgIHNldFNlYXJjaFJlc3VsdHMoc2hvcnQpO1xyXG4gICAgICB9LCBbc2VhcmNoVGVybV0pO1xyXG4gICBcclxuICAgIFxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRlcm19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBsaXN0PSd0aWNrZXJzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAvPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgIDxkYXRhbGlzdCBpZD1cInRpY2tlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NlYXJjaFJlc3VsdHMubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAga2V5PXtpdGVtfSB2YWx1ZT17aXRlbX0+e2l0ZW19PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kYXRhbGlzdD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInN1Y2Nlc3NcIiBzaXplPVwibGdcIiA+U29tZXRoaW5nPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5TdWJtaXQhISE8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XHJcbi8vIHtzZWFyY2hUZXJtLmxlbmd0aCA+IDAgICYmIDxkYXRhbGlzdCBjbGFzc05hbWU9e3N0eWxlcy5saXN0fSAvPlxyXG4vLyB7c2VhcmNoUmVzdWx0cy5sZW5ndGggPiAwID8gc2VhcmNoUmVzdWx0cy5tYXAoaXRlbSA9PiAoICBcclxuLy8gIDxvcHRpb24ga2V5PXtpdGVtLnNwbGl0KCctJylbMF19IGNsYXNzTmFtZT17c3R5bGVzLmxpc3RJdGVtfSB2YWx1ZT17PExpbmsgaHJlZj17YC9zdG9jaz90aWNrZXI9JHtpdGVtLnNwbGl0KCctJylbMF19Jm5hbWU9JHtpdGVtLnNwbGl0KCctJylbMV19YH0+e2l0ZW19PC9MaW5rPn0gLz5cclxuLy8gKSkgOiA8cD5ObyBpdGVtIG1hdGNoaW5nIHNlYXJjaCBwYXJhbWV0ZXIhPC9wPn1cclxuLy8gfVxyXG57LyogPGRhdGFsaXN0IC8+XHJcbiAgICBzZWFyY2hSZXN1bHRzLm1hcChpdGVtID0+IChcclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGVoZVwiIC8+XHJcbiAgICApKSAqL30iXSwic291cmNlUm9vdCI6IiJ9