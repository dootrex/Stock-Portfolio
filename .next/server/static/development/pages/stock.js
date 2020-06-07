module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Chart.js":
/*!*****************************!*\
  !*** ./components/Chart.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nivo_line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nivo/line */ "@nivo/line");
/* harmony import */ var _nivo_line__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nivo_line__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Avi\\Downloads\\Work\\stocky\\Stock-Portfolio\\components\\Chart.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Chart({
  data,
  ticker
}) {
  let datas = [{
    id: ticker,
    data: data
  }];
  return __jsx("div", {
    style: {
      height: 500,
      width: 500
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(_nivo_line__WEBPACK_IMPORTED_MODULE_1__["ResponsiveLine"], {
    data: datas,
    width: 500,
    height: 400,
    margin: {
      top: 50,
      right: 110,
      bottom: 50,
      left: 60
    },
    xScale: {
      type: "point"
    },
    yScale: {
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false
    },
    axisTop: null,
    axisRight: null,
    axisBottom: {
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Time",
      legendOffset: 36,
      legendPosition: "middle"
    },
    axisLeft: {
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Price",
      legendOffset: -40,
      legendPosition: "middle"
    },
    colors: {
      scheme: "nivo"
    },
    pointSize: 10,
    pointColor: {
      theme: "background"
    },
    pointBorderWidth: 2,
    pointBorderColor: {
      from: "serieColor"
    },
    pointLabel: "y",
    pointLabelYOffset: -12,
    useMesh: true,
    legends: [{
      anchor: "bottom-right",
      direction: "column",
      justify: false,
      translateX: 100,
      translateY: 0,
      itemsSpacing: 0,
      itemDirection: "left-to-right",
      itemWidth: 80,
      itemHeight: 20,
      itemOpacity: 0.75,
      symbolSize: 12,
      symbolShape: "circle",
      symbolBorderColor: "rgba(0, 0, 0, .5)",
      effects: [{
        on: "hover",
        style: {
          itemBackground: "rgba(0, 0, 0, .03)",
          itemOpacity: 1
        }
      }]
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Chart);

/***/ }),

/***/ "./pages/stock.js":
/*!************************!*\
  !*** ./pages/stock.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Chart */ "./components/Chart.js");
var _jsxFileName = "C:\\Users\\Avi\\Downloads\\Work\\stocky\\Stock-Portfolio\\pages\\stock.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Stock = ({
  stuff,
  ticker
}) => {
  console.log(stuff);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "fdfd", __jsx(_components_Chart__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: stuff,
    ticker: ticker,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }));
};

Stock.getInitialProps = async ({
  query
}) => {
  console.log(query.ticker);
  let res = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${query.ticker}&interval=15min&apikey=V6PMYFQGMDIY3Y1P`);
  console.log(res.data);
  const data = res.data;
  let xValue = [];
  let yValue = [];
  let stuff = [];

  for (let key in data["Time Series (15min)"]) {
    xValue.push(key);
    yValue.push(data["Time Series (15min)"][key]["4. close"]);
    stuff.push({
      x: key,
      y: data["Time Series (15min)"][key]["4. close"]
    });
  }

  console.log(stuff);
  return {
    stuff: stuff,
    ticker: query.ticker
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Stock);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/stock.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Avi\Downloads\Work\stocky\Stock-Portfolio\pages\stock.js */"./pages/stock.js");


/***/ }),

/***/ "@nivo/line":
/*!*****************************!*\
  !*** external "@nivo/line" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nivo/line");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGFydC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9zdG9jay5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbml2by9saW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIkNoYXJ0IiwiZGF0YSIsInRpY2tlciIsImRhdGFzIiwiaWQiLCJoZWlnaHQiLCJ3aWR0aCIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsInR5cGUiLCJtaW4iLCJtYXgiLCJzdGFja2VkIiwicmV2ZXJzZSIsIm9yaWVudCIsInRpY2tTaXplIiwidGlja1BhZGRpbmciLCJ0aWNrUm90YXRpb24iLCJsZWdlbmQiLCJsZWdlbmRPZmZzZXQiLCJsZWdlbmRQb3NpdGlvbiIsInNjaGVtZSIsInRoZW1lIiwiZnJvbSIsImFuY2hvciIsImRpcmVjdGlvbiIsImp1c3RpZnkiLCJ0cmFuc2xhdGVYIiwidHJhbnNsYXRlWSIsIml0ZW1zU3BhY2luZyIsIml0ZW1EaXJlY3Rpb24iLCJpdGVtV2lkdGgiLCJpdGVtSGVpZ2h0IiwiaXRlbU9wYWNpdHkiLCJzeW1ib2xTaXplIiwic3ltYm9sU2hhcGUiLCJzeW1ib2xCb3JkZXJDb2xvciIsImVmZmVjdHMiLCJvbiIsInN0eWxlIiwiaXRlbUJhY2tncm91bmQiLCJTdG9jayIsInN0dWZmIiwiY29uc29sZSIsImxvZyIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwicmVzIiwiYXhpb3MiLCJnZXQiLCJ4VmFsdWUiLCJ5VmFsdWUiLCJrZXkiLCJwdXNoIiwieCIsInkiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFD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QUFJLEdBQUdnRCxHQUFHLENBQUNoRCxJQUFqQjtBQUNBLE1BQUltRCxNQUFNLEdBQUcsRUFBYjtBQUNBLE1BQUlDLE1BQU0sR0FBRyxFQUFiO0FBQ0EsTUFBSVQsS0FBSyxHQUFHLEVBQVo7O0FBQ0EsT0FBSyxJQUFJVSxHQUFULElBQWdCckQsSUFBSSxDQUFDLHFCQUFELENBQXBCLEVBQTZDO0FBQzNDbUQsVUFBTSxDQUFDRyxJQUFQLENBQVlELEdBQVo7QUFDQUQsVUFBTSxDQUFDRSxJQUFQLENBQVl0RCxJQUFJLENBQUMscUJBQUQsQ0FBSixDQUE0QnFELEdBQTVCLEVBQWlDLFVBQWpDLENBQVo7QUFDQVYsU0FBSyxDQUFDVyxJQUFOLENBQVc7QUFBRUMsT0FBQyxFQUFFRixHQUFMO0FBQVVHLE9BQUMsRUFBRXhELElBQUksQ0FBQyxxQkFBRCxDQUFKLENBQTRCcUQsR0FBNUIsRUFBaUMsVUFBakM7QUFBYixLQUFYO0FBQ0Q7O0FBQ0RULFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0EsU0FBTztBQUFFQSxTQUFLLEVBQUVBLEtBQVQ7QUFBZ0IxQyxVQUFNLEVBQUU4QyxLQUFLLENBQUM5QztBQUE5QixHQUFQO0FBQ0QsQ0FqQkQ7O0FBa0JleUMsb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHN0b2NrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiaW1wb3J0IHsgUmVzcG9uc2l2ZUxpbmUgfSBmcm9tIFwiQG5pdm8vbGluZVwiO1xyXG5cclxuZnVuY3Rpb24gQ2hhcnQoeyBkYXRhLCB0aWNrZXIgfSkge1xyXG4gIGxldCBkYXRhcyA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6IHRpY2tlcixcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgIH0sXHJcbiAgXTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IDUwMCwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgPFJlc3BvbnNpdmVMaW5lXHJcbiAgICAgICAgZGF0YT17ZGF0YXN9XHJcbiAgICAgICAgd2lkdGg9ezUwMH1cclxuICAgICAgICBoZWlnaHQ9ezQwMH1cclxuICAgICAgICBtYXJnaW49e3sgdG9wOiA1MCwgcmlnaHQ6IDExMCwgYm90dG9tOiA1MCwgbGVmdDogNjAgfX1cclxuICAgICAgICB4U2NhbGU9e3sgdHlwZTogXCJwb2ludFwiIH19XHJcbiAgICAgICAgeVNjYWxlPXt7XHJcbiAgICAgICAgICB0eXBlOiBcImxpbmVhclwiLFxyXG4gICAgICAgICAgbWluOiBcImF1dG9cIixcclxuICAgICAgICAgIG1heDogXCJhdXRvXCIsXHJcbiAgICAgICAgICBzdGFja2VkOiB0cnVlLFxyXG4gICAgICAgICAgcmV2ZXJzZTogZmFsc2UsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBheGlzVG9wPXtudWxsfVxyXG4gICAgICAgIGF4aXNSaWdodD17bnVsbH1cclxuICAgICAgICBheGlzQm90dG9tPXt7XHJcbiAgICAgICAgICBvcmllbnQ6IFwiYm90dG9tXCIsXHJcbiAgICAgICAgICB0aWNrU2l6ZTogNSxcclxuICAgICAgICAgIHRpY2tQYWRkaW5nOiA1LFxyXG4gICAgICAgICAgdGlja1JvdGF0aW9uOiAwLFxyXG4gICAgICAgICAgbGVnZW5kOiBcIlRpbWVcIixcclxuICAgICAgICAgIGxlZ2VuZE9mZnNldDogMzYsXHJcbiAgICAgICAgICBsZWdlbmRQb3NpdGlvbjogXCJtaWRkbGVcIixcclxuICAgICAgICB9fVxyXG4gICAgICAgIGF4aXNMZWZ0PXt7XHJcbiAgICAgICAgICBvcmllbnQ6IFwibGVmdFwiLFxyXG4gICAgICAgICAgdGlja1NpemU6IDUsXHJcbiAgICAgICAgICB0aWNrUGFkZGluZzogNSxcclxuICAgICAgICAgIHRpY2tSb3RhdGlvbjogMCxcclxuICAgICAgICAgIGxlZ2VuZDogXCJQcmljZVwiLFxyXG4gICAgICAgICAgbGVnZW5kT2Zmc2V0OiAtNDAsXHJcbiAgICAgICAgICBsZWdlbmRQb3NpdGlvbjogXCJtaWRkbGVcIixcclxuICAgICAgICB9fVxyXG4gICAgICAgIGNvbG9ycz17eyBzY2hlbWU6IFwibml2b1wiIH19XHJcbiAgICAgICAgcG9pbnRTaXplPXsxMH1cclxuICAgICAgICBwb2ludENvbG9yPXt7IHRoZW1lOiBcImJhY2tncm91bmRcIiB9fVxyXG4gICAgICAgIHBvaW50Qm9yZGVyV2lkdGg9ezJ9XHJcbiAgICAgICAgcG9pbnRCb3JkZXJDb2xvcj17eyBmcm9tOiBcInNlcmllQ29sb3JcIiB9fVxyXG4gICAgICAgIHBvaW50TGFiZWw9XCJ5XCJcclxuICAgICAgICBwb2ludExhYmVsWU9mZnNldD17LTEyfVxyXG4gICAgICAgIHVzZU1lc2g9e3RydWV9XHJcbiAgICAgICAgbGVnZW5kcz17W1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBhbmNob3I6IFwiYm90dG9tLXJpZ2h0XCIsXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAganVzdGlmeTogZmFsc2UsXHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVg6IDEwMCxcclxuICAgICAgICAgICAgdHJhbnNsYXRlWTogMCxcclxuICAgICAgICAgICAgaXRlbXNTcGFjaW5nOiAwLFxyXG4gICAgICAgICAgICBpdGVtRGlyZWN0aW9uOiBcImxlZnQtdG8tcmlnaHRcIixcclxuICAgICAgICAgICAgaXRlbVdpZHRoOiA4MCxcclxuICAgICAgICAgICAgaXRlbUhlaWdodDogMjAsXHJcbiAgICAgICAgICAgIGl0ZW1PcGFjaXR5OiAwLjc1LFxyXG4gICAgICAgICAgICBzeW1ib2xTaXplOiAxMixcclxuICAgICAgICAgICAgc3ltYm9sU2hhcGU6IFwiY2lyY2xlXCIsXHJcbiAgICAgICAgICAgIHN5bWJvbEJvcmRlckNvbG9yOiBcInJnYmEoMCwgMCwgMCwgLjUpXCIsXHJcbiAgICAgICAgICAgIGVmZmVjdHM6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvbjogXCJob3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgaXRlbUJhY2tncm91bmQ6IFwicmdiYSgwLCAwLCAwLCAuMDMpXCIsXHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1PcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhcnQ7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IENoYXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL0NoYXJ0XCI7XHJcbmNvbnN0IFN0b2NrID0gKHsgc3R1ZmYsIHRpY2tlciB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coc3R1ZmYpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICBmZGZkXHJcbiAgICAgIDxDaGFydCBkYXRhPXtzdHVmZn0gdGlja2VyPXt0aWNrZXJ9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5TdG9jay5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBxdWVyeSB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2cocXVlcnkudGlja2VyKTtcclxuICBsZXQgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgYGh0dHBzOi8vd3d3LmFscGhhdmFudGFnZS5jby9xdWVyeT9mdW5jdGlvbj1USU1FX1NFUklFU19JTlRSQURBWSZzeW1ib2w9JHtxdWVyeS50aWNrZXJ9JmludGVydmFsPTE1bWluJmFwaWtleT1WNlBNWUZRR01ESVkzWTFQYFxyXG4gICk7XHJcbiAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gIGNvbnN0IGRhdGEgPSByZXMuZGF0YTtcclxuICBsZXQgeFZhbHVlID0gW107XHJcbiAgbGV0IHlWYWx1ZSA9IFtdO1xyXG4gIGxldCBzdHVmZiA9IFtdO1xyXG4gIGZvciAobGV0IGtleSBpbiBkYXRhW1wiVGltZSBTZXJpZXMgKDE1bWluKVwiXSkge1xyXG4gICAgeFZhbHVlLnB1c2goa2V5KTtcclxuICAgIHlWYWx1ZS5wdXNoKGRhdGFbXCJUaW1lIFNlcmllcyAoMTVtaW4pXCJdW2tleV1bXCI0LiBjbG9zZVwiXSk7XHJcbiAgICBzdHVmZi5wdXNoKHsgeDoga2V5LCB5OiBkYXRhW1wiVGltZSBTZXJpZXMgKDE1bWluKVwiXVtrZXldW1wiNC4gY2xvc2VcIl0gfSk7XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKHN0dWZmKTtcclxuICByZXR1cm4geyBzdHVmZjogc3R1ZmYsIHRpY2tlcjogcXVlcnkudGlja2VyIH07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFN0b2NrO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbml2by9saW5lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=