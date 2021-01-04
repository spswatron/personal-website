module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./analytics/analytics.js":
/*!********************************!*\
  !*** ./analytics/analytics.js ***!
  \********************************/
/*! exports provided: initGA, logPageView, logEvent, logException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initGA\", function() { return initGA; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logPageView\", function() { return logPageView; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logEvent\", function() { return logEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logException\", function() { return logException; });\n/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ga */ \"react-ga\");\n/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initGA = () => {\n  console.log('GA init');\n  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.initialize('G-SN3Y9WVG38');\n};\nconst logPageView = () => {\n  console.log(`Logging pageview for ${window.location.pathname}`);\n  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.set({\n    page: window.location.pathname\n  });\n  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.pageview(window.location.pathname);\n};\nconst logEvent = (category = '', action = '') => {\n  if (category && action) {\n    react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.event({\n      category,\n      action\n    });\n  }\n};\nconst logException = (description = '', fatal = false) => {\n  if (description) {\n    react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.exception({\n      description,\n      fatal\n    });\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hbmFseXRpY3MvYW5hbHl0aWNzLmpzPzgyYTMiXSwibmFtZXMiOlsiaW5pdEdBIiwiY29uc29sZSIsImxvZyIsIlJlYWN0R0EiLCJpbml0aWFsaXplIiwibG9nUGFnZVZpZXciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic2V0IiwicGFnZSIsInBhZ2V2aWV3IiwibG9nRXZlbnQiLCJjYXRlZ29yeSIsImFjdGlvbiIsImV2ZW50IiwibG9nRXhjZXB0aW9uIiwiZGVzY3JpcHRpb24iLCJmYXRhbCIsImV4Y2VwdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLE1BQU0sR0FBRyxNQUFNO0FBQzFCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0FDLGlEQUFPLENBQUNDLFVBQVIsQ0FBbUIsY0FBbkI7QUFDRCxDQUhNO0FBSUEsTUFBTUMsV0FBVyxHQUFHLE1BQU07QUFDL0JKLFNBQU8sQ0FBQ0MsR0FBUixDQUFhLHdCQUF1QkksTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUFTLEVBQTdEO0FBQ0FMLGlEQUFPLENBQUNNLEdBQVIsQ0FBWTtBQUFFQyxRQUFJLEVBQUVKLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkM7QUFBeEIsR0FBWjtBQUNBTCxpREFBTyxDQUFDUSxRQUFSLENBQWlCTCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQWpDO0FBQ0QsQ0FKTTtBQUtBLE1BQU1JLFFBQVEsR0FBRyxDQUFDQyxRQUFRLEdBQUcsRUFBWixFQUFnQkMsTUFBTSxHQUFHLEVBQXpCLEtBQWdDO0FBQ3RELE1BQUlELFFBQVEsSUFBSUMsTUFBaEIsRUFBd0I7QUFDdEJYLG1EQUFPLENBQUNZLEtBQVIsQ0FBYztBQUFFRixjQUFGO0FBQVlDO0FBQVosS0FBZDtBQUNEO0FBQ0YsQ0FKTTtBQUtBLE1BQU1FLFlBQVksR0FBRyxDQUFDQyxXQUFXLEdBQUcsRUFBZixFQUFtQkMsS0FBSyxHQUFHLEtBQTNCLEtBQXFDO0FBQy9ELE1BQUlELFdBQUosRUFBaUI7QUFDZmQsbURBQU8sQ0FBQ2dCLFNBQVIsQ0FBa0I7QUFBRUYsaUJBQUY7QUFBZUM7QUFBZixLQUFsQjtBQUNEO0FBQ0YsQ0FKTSIsImZpbGUiOiIuL2FuYWx5dGljcy9hbmFseXRpY3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RHQSBmcm9tICdyZWFjdC1nYSdcblxuZXhwb3J0IGNvbnN0IGluaXRHQSA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coJ0dBIGluaXQnKVxuICBSZWFjdEdBLmluaXRpYWxpemUoJ0ctU04zWTlXVkczOCcpXG59XG5leHBvcnQgY29uc3QgbG9nUGFnZVZpZXcgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBMb2dnaW5nIHBhZ2V2aWV3IGZvciAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX1gKVxuICBSZWFjdEdBLnNldCh7IHBhZ2U6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSB9KVxuICBSZWFjdEdBLnBhZ2V2aWV3KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSlcbn1cbmV4cG9ydCBjb25zdCBsb2dFdmVudCA9IChjYXRlZ29yeSA9ICcnLCBhY3Rpb24gPSAnJykgPT4ge1xuICBpZiAoY2F0ZWdvcnkgJiYgYWN0aW9uKSB7XG4gICAgUmVhY3RHQS5ldmVudCh7IGNhdGVnb3J5LCBhY3Rpb24gfSlcbiAgfVxufVxuZXhwb3J0IGNvbnN0IGxvZ0V4Y2VwdGlvbiA9IChkZXNjcmlwdGlvbiA9ICcnLCBmYXRhbCA9IGZhbHNlKSA9PiB7XG4gIGlmIChkZXNjcmlwdGlvbikge1xuICAgIFJlYWN0R0EuZXhjZXB0aW9uKHsgZGVzY3JpcHRpb24sIGZhdGFsIH0pXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./analytics/analytics.js\n");

/***/ }),

/***/ "./analytics/layout.js":
/*!*****************************!*\
  !*** ./analytics/layout.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Layout; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analytics */ \"./analytics/analytics.js\");\n\nvar _jsxFileName = \"/Users/ashleychang/PycharmProjects/from-scratch/analytics/layout.js\";\n// components/layout.js\n\n\nclass Layout extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  componentDidMount() {\n    if (!window.GA_INITIALIZED) {\n      Object(_analytics__WEBPACK_IMPORTED_MODULE_2__[\"initGA\"])();\n      window.GA_INITIALIZED = true;\n    }\n\n    Object(_analytics__WEBPACK_IMPORTED_MODULE_2__[\"logPageView\"])();\n  }\n\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: this.props.children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hbmFseXRpY3MvbGF5b3V0LmpzPzhhMjUiXSwibmFtZXMiOlsiTGF5b3V0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb21wb25lbnREaWRNb3VudCIsIndpbmRvdyIsIkdBX0lOSVRJQUxJWkVEIiwiaW5pdEdBIiwibG9nUGFnZVZpZXciLCJyZW5kZXIiLCJwcm9wcyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDZSxNQUFNQSxNQUFOLFNBQXFCQyw0Q0FBSyxDQUFDQyxTQUEzQixDQUFxQztBQUNsREMsbUJBQWlCLEdBQUk7QUFDbkIsUUFBSSxDQUFDQyxNQUFNLENBQUNDLGNBQVosRUFBNEI7QUFDMUJDLCtEQUFNO0FBQ05GLFlBQU0sQ0FBQ0MsY0FBUCxHQUF3QixJQUF4QjtBQUNEOztBQUNERSxrRUFBVztBQUNaOztBQUNEQyxRQUFNLEdBQUk7QUFDUix3QkFDRTtBQUFBLGdCQUNHLEtBQUtDLEtBQUwsQ0FBV0M7QUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFLRDs7QUFkaUQiLCJmaWxlIjoiLi9hbmFseXRpY3MvbGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9sYXlvdXQuanNcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGluaXRHQSwgbG9nUGFnZVZpZXcgfSBmcm9tICcuL2FuYWx5dGljcydcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBpZiAoIXdpbmRvdy5HQV9JTklUSUFMSVpFRCkge1xuICAgICAgaW5pdEdBKClcbiAgICAgIHdpbmRvdy5HQV9JTklUSUFMSVpFRCA9IHRydWVcbiAgICB9XG4gICAgbG9nUGFnZVZpZXcoKVxuICB9XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./analytics/layout.js\n");

/***/ }),

/***/ "./css/App.scss":
/*!**********************!*\
  !*** ./css/App.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2Nzcy9BcHAuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./css/App.scss\n");

/***/ }),

/***/ "./css/Contact.scss":
/*!**************************!*\
  !*** ./css/Contact.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2Nzcy9Db250YWN0LnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./css/Contact.scss\n");

/***/ }),

/***/ "./css/Sidebar.scss":
/*!**************************!*\
  !*** ./css/Sidebar.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2Nzcy9TaWRlYmFyLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./css/Sidebar.scss\n");

/***/ }),

/***/ "./css/TimeLine.scss":
/*!***************************!*\
  !*** ./css/TimeLine.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2Nzcy9UaW1lTGluZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./css/TimeLine.scss\n");

/***/ }),

/***/ "./css/modal.scss":
/*!************************!*\
  !*** ./css/modal.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2Nzcy9tb2RhbC5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./css/modal.scss\n");

/***/ }),

/***/ "./css/spinkit.min.css":
/*!*****************************!*\
  !*** ./css/spinkit.min.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2Nzcy9zcGlua2l0Lm1pbi5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./css/spinkit.min.css\n");

/***/ }),

/***/ "./css/stars.css":
/*!***********************!*\
  !*** ./css/stars.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2Nzcy9zdGFycy5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./css/stars.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_spinkit_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/spinkit.min.css */ \"./css/spinkit.min.css\");\n/* harmony import */ var _css_spinkit_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_spinkit_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _css_TimeLine_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/TimeLine.scss */ \"./css/TimeLine.scss\");\n/* harmony import */ var _css_TimeLine_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_TimeLine_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _css_Sidebar_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/Sidebar.scss */ \"./css/Sidebar.scss\");\n/* harmony import */ var _css_Sidebar_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_Sidebar_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _css_modal_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/modal.scss */ \"./css/modal.scss\");\n/* harmony import */ var _css_modal_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_modal_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _css_stars_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/stars.css */ \"./css/stars.css\");\n/* harmony import */ var _css_stars_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_stars_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _css_App_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/App.scss */ \"./css/App.scss\");\n/* harmony import */ var _css_App_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_App_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _css_Contact_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/Contact.scss */ \"./css/Contact.scss\");\n/* harmony import */ var _css_Contact_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_Contact_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-seo */ \"next-seo\");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _analytics_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../analytics/layout */ \"./analytics/layout.js\");\n\nvar _jsxFileName = \"/Users/ashleychang/PycharmProjects/from-scratch/pages/_app.js\";\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  // document.getElementById(\"__next\").width = '100%';\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_analytics_layout__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_seo__WEBPACK_IMPORTED_MODULE_10__[\"NextSeo\"], {\n      description: \"The personal website and portfolio of Ashley Chang, who is a student of Computer Science at Brown University.\",\n      nofollow: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/apple-touch-icon.png\",\n        className: \"jsx-789584226\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"style\", {\n        children: \"@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        href: \"https://fonts.gstatic.com/\",\n        className: \"jsx-789584226\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        href: \"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\",\n        rel: \"stylesheet\",\n        className: \"jsx-789584226\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        className: \"jsx-789584226\",\n        children: \"Ashley Chang\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"789584226\",\n      children: \"#__next{width:100%;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2hsZXljaGFuZy9QeWNoYXJtUHJvamVjdHMvZnJvbS1zY3JhdGNoL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0N5QixBQUdzQixXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9hc2hsZXljaGFuZy9QeWNoYXJtUHJvamVjdHMvZnJvbS1zY3JhdGNoL3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBcIi4uL2Nzcy9zcGlua2l0Lm1pbi5jc3NcIjtcbmltcG9ydCBcIi4uL2Nzcy9UaW1lTGluZS5zY3NzXCI7XG5pbXBvcnQgXCIuLi9jc3MvU2lkZWJhci5zY3NzXCI7XG5pbXBvcnQgXCIuLi9jc3MvbW9kYWwuc2Nzc1wiO1xuaW1wb3J0IFwiLi4vY3NzL3N0YXJzLmNzc1wiO1xuaW1wb3J0IFwiLi4vY3NzL0FwcC5zY3NzXCI7XG5pbXBvcnQgXCIuLi9jc3MvQ29udGFjdC5zY3NzXCI7XG5pbXBvcnQgeyBOZXh0U2VvIH0gZnJvbSBcIm5leHQtc2VvXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9hbmFseXRpY3MvbGF5b3V0XCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIl9fbmV4dFwiKS53aWR0aCA9ICcxMDAlJztcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPE5leHRTZW9cbiAgICAgICAgZGVzY3JpcHRpb249XCJUaGUgcGVyc29uYWwgd2Vic2l0ZSBhbmQgcG9ydGZvbGlvIG9mIEFzaGxleSBDaGFuZyxcbiAgICAgIHdobyBpcyBhIHN0dWRlbnQgb2YgQ29tcHV0ZXIgU2NpZW5jZSBhdCBCcm93biBVbml2ZXJzaXR5LlwiXG4gICAgICAgIG5vZm9sbG93PXt0cnVlfVxuICAgICAgLz5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiIC8+XG5cbiAgICAgICAgPHN0eWxlPlxuICAgICAgICAgIEBpbXBvcnRcbiAgICAgICAgICB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXAnKTtcbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgICAgPHRpdGxlPkFzaGxleSBDaGFuZzwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAjX19uZXh0IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdfQ== */\\n/*@ sourceURL=/Users/ashleychang/PycharmProjects/from-scratch/pages/_app.js */\"\n    }, void 0, false, void 0, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread(_objectSpread({}, pageProps), {}, {\n      className: \"jsx-789584226\" + \" \" + (pageProps && pageProps.className != null && pageProps.className || \"\")\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUN2QztBQUNBLHNCQUNFLHFFQUFDLDBEQUFEO0FBQUEsNEJBQ0UscUVBQUMsaURBQUQ7QUFDRSxpQkFBVyxFQUFDLCtHQURkO0FBR0UsY0FBUSxFQUFFO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUUscUVBQUMsaURBQUQ7QUFBQSw4QkFDRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQyx1QkFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFPRTtBQUFNLFlBQUksRUFBQyw0QkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLGVBUUU7QUFDRSxZQUFJLEVBQUMsNkVBRFA7QUFFRSxXQUFHLEVBQUMsWUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGLGVBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBLGtEQXlCRSxxRUFBQyxTQUFELGtDQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNkJEOztBQUVjRixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBcIi4uL2Nzcy9zcGlua2l0Lm1pbi5jc3NcIjtcbmltcG9ydCBcIi4uL2Nzcy9UaW1lTGluZS5zY3NzXCI7XG5pbXBvcnQgXCIuLi9jc3MvU2lkZWJhci5zY3NzXCI7XG5pbXBvcnQgXCIuLi9jc3MvbW9kYWwuc2Nzc1wiO1xuaW1wb3J0IFwiLi4vY3NzL3N0YXJzLmNzc1wiO1xuaW1wb3J0IFwiLi4vY3NzL0FwcC5zY3NzXCI7XG5pbXBvcnQgXCIuLi9jc3MvQ29udGFjdC5zY3NzXCI7XG5pbXBvcnQgeyBOZXh0U2VvIH0gZnJvbSBcIm5leHQtc2VvXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9hbmFseXRpY3MvbGF5b3V0XCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIl9fbmV4dFwiKS53aWR0aCA9ICcxMDAlJztcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPE5leHRTZW9cbiAgICAgICAgZGVzY3JpcHRpb249XCJUaGUgcGVyc29uYWwgd2Vic2l0ZSBhbmQgcG9ydGZvbGlvIG9mIEFzaGxleSBDaGFuZyxcbiAgICAgIHdobyBpcyBhIHN0dWRlbnQgb2YgQ29tcHV0ZXIgU2NpZW5jZSBhdCBCcm93biBVbml2ZXJzaXR5LlwiXG4gICAgICAgIG5vZm9sbG93PXt0cnVlfVxuICAgICAgLz5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiIC8+XG5cbiAgICAgICAgPHN0eWxlPlxuICAgICAgICAgIEBpbXBvcnRcbiAgICAgICAgICB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXAnKTtcbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgICAgPHRpdGxlPkFzaGxleSBDaGFuZzwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAjX19uZXh0IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9nbG9iYWxzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/globals.css\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-seo\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXNlb1wiPzJjYmUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC1zZW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXNlb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-seo\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-ga\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1nYVwiPzI1OGYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtZ2EuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1nYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-ga\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });