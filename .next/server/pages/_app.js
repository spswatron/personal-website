/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function () {
  var exports = {};
  exports.id = "pages/_app";
  exports.ids = ["pages/_app"];
  exports.modules = {
    /***/ "./analytics/analytics.js":
      /*!********************************!*\
  !*** ./analytics/analytics.js ***!
  \********************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "initGA": function() { return /* binding */ initGA; },\n/* harmony export */   "logPageView": function() { return /* binding */ logPageView; },\n/* harmony export */   "logEvent": function() { return /* binding */ logEvent; },\n/* harmony export */   "logException": function() { return /* binding */ logException; }\n/* harmony export */ });\n/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ga */ "react-ga");\n/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initGA = () => {\n  console.log("GA init");\n  react_ga__WEBPACK_IMPORTED_MODULE_0___default().initialize("G-SN3Y9WVG38");\n};\nconst logPageView = () => {\n  console.log(`Logging pageview for ${window.location.pathname}`);\n  react_ga__WEBPACK_IMPORTED_MODULE_0___default().set({\n    page: window.location.pathname\n  });\n  react_ga__WEBPACK_IMPORTED_MODULE_0___default().pageview(window.location.pathname);\n};\nconst logEvent = (category = "", action = "") => {\n  if (category && action) {\n    react_ga__WEBPACK_IMPORTED_MODULE_0___default().event({\n      category,\n      action\n    });\n  }\n};\nconst logException = (description = "", fatal = false) => {\n  if (description) {\n    react_ga__WEBPACK_IMPORTED_MODULE_0___default().exception({\n      description,\n      fatal\n    });\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLW5leHQvLi9hbmFseXRpY3MvYW5hbHl0aWNzLmpzPzgyYTMiXSwibmFtZXMiOlsiaW5pdEdBIiwiY29uc29sZSIsImxvZyIsIlJlYWN0R0EiLCJsb2dQYWdlVmlldyIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJwYWdlIiwibG9nRXZlbnQiLCJjYXRlZ29yeSIsImFjdGlvbiIsImxvZ0V4Y2VwdGlvbiIsImRlc2NyaXB0aW9uIiwiZmF0YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRU8sTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFDMUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDQUMsNERBQUEsQ0FBbUIsY0FBbkI7QUFDRCxDQUhNO0FBSUEsTUFBTUMsV0FBVyxHQUFHLE1BQU07QUFDL0JILFNBQU8sQ0FBQ0MsR0FBUixDQUFhLHdCQUF1QkcsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUFTLEVBQTdEO0FBQ0FKLHFEQUFBLENBQVk7QUFBRUssUUFBSSxFQUFFSCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDO0FBQXhCLEdBQVo7QUFDQUosMERBQUEsQ0FBaUJFLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBakM7QUFDRCxDQUpNO0FBS0EsTUFBTUUsUUFBUSxHQUFHLENBQUNDLFFBQVEsR0FBRyxFQUFaLEVBQWdCQyxNQUFNLEdBQUcsRUFBekIsS0FBZ0M7QUFDdEQsTUFBSUQsUUFBUSxJQUFJQyxNQUFoQixFQUF3QjtBQUN0QlIseURBQUEsQ0FBYztBQUFFTyxjQUFGO0FBQVlDO0FBQVosS0FBZDtBQUNEO0FBQ0YsQ0FKTTtBQUtBLE1BQU1DLFlBQVksR0FBRyxDQUFDQyxXQUFXLEdBQUcsRUFBZixFQUFtQkMsS0FBSyxHQUFHLEtBQTNCLEtBQXFDO0FBQy9ELE1BQUlELFdBQUosRUFBaUI7QUFDZlYsNkRBQUEsQ0FBa0I7QUFBRVUsaUJBQUY7QUFBZUM7QUFBZixLQUFsQjtBQUNEO0FBQ0YsQ0FKTSIsImZpbGUiOiIuL2FuYWx5dGljcy9hbmFseXRpY3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RHQSBmcm9tIFwicmVhY3QtZ2FcIjtcblxuZXhwb3J0IGNvbnN0IGluaXRHQSA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coXCJHQSBpbml0XCIpO1xuICBSZWFjdEdBLmluaXRpYWxpemUoXCJHLVNOM1k5V1ZHMzhcIik7XG59O1xuZXhwb3J0IGNvbnN0IGxvZ1BhZ2VWaWV3ID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgTG9nZ2luZyBwYWdldmlldyBmb3IgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9YCk7XG4gIFJlYWN0R0Euc2V0KHsgcGFnZTogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lIH0pO1xuICBSZWFjdEdBLnBhZ2V2aWV3KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG59O1xuZXhwb3J0IGNvbnN0IGxvZ0V2ZW50ID0gKGNhdGVnb3J5ID0gXCJcIiwgYWN0aW9uID0gXCJcIikgPT4ge1xuICBpZiAoY2F0ZWdvcnkgJiYgYWN0aW9uKSB7XG4gICAgUmVhY3RHQS5ldmVudCh7IGNhdGVnb3J5LCBhY3Rpb24gfSk7XG4gIH1cbn07XG5leHBvcnQgY29uc3QgbG9nRXhjZXB0aW9uID0gKGRlc2NyaXB0aW9uID0gXCJcIiwgZmF0YWwgPSBmYWxzZSkgPT4ge1xuICBpZiAoZGVzY3JpcHRpb24pIHtcbiAgICBSZWFjdEdBLmV4Y2VwdGlvbih7IGRlc2NyaXB0aW9uLCBmYXRhbCB9KTtcbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./analytics/analytics.js\n'
        );

        /***/
      },

    /***/ "./analytics/layout.js":
      /*!*****************************!*\
  !*** ./analytics/layout.js ***!
  \*****************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analytics */ "./analytics/analytics.js");\n\nvar _jsxFileName = "/Users/ashleychang/PycharmProjects/from-scratch/analytics/layout.js";\n// components/layout.js\n\n\nclass Layout extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n  componentDidMount() {\n    if (!window.GA_INITIALIZED) {\n      (0,_analytics__WEBPACK_IMPORTED_MODULE_2__.initGA)();\n      window.GA_INITIALIZED = true;\n    }\n\n    (0,_analytics__WEBPACK_IMPORTED_MODULE_2__.logPageView)();\n  }\n\n  render() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n      children: this.props.children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 12\n    }, this);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLW5leHQvLi9hbmFseXRpY3MvbGF5b3V0LmpzPzhhMjUiXSwibmFtZXMiOlsiTGF5b3V0IiwiUmVhY3QiLCJjb21wb25lbnREaWRNb3VudCIsIndpbmRvdyIsIkdBX0lOSVRJQUxJWkVEIiwiaW5pdEdBIiwibG9nUGFnZVZpZXciLCJyZW5kZXIiLCJwcm9wcyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNlLE1BQU1BLE1BQU4sU0FBcUJDLHdEQUFyQixDQUFxQztBQUNsREMsbUJBQWlCLEdBQUc7QUFDbEIsUUFBSSxDQUFDQyxNQUFNLENBQUNDLGNBQVosRUFBNEI7QUFDMUJDLHdEQUFNO0FBQ05GLFlBQU0sQ0FBQ0MsY0FBUCxHQUF3QixJQUF4QjtBQUNEOztBQUNERSwyREFBVztBQUNaOztBQUNEQyxRQUFNLEdBQUc7QUFDUCx3QkFBTztBQUFBLGdCQUFNLEtBQUtDLEtBQUwsQ0FBV0M7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBVmlEIiwiZmlsZSI6Ii4vYW5hbHl0aWNzL2xheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvbGF5b3V0LmpzXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpbml0R0EsIGxvZ1BhZ2VWaWV3IH0gZnJvbSBcIi4vYW5hbHl0aWNzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAoIXdpbmRvdy5HQV9JTklUSUFMSVpFRCkge1xuICAgICAgaW5pdEdBKCk7XG4gICAgICB3aW5kb3cuR0FfSU5JVElBTElaRUQgPSB0cnVlO1xuICAgIH1cbiAgICBsb2dQYWdlVmlldygpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdj57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Rpdj47XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./analytics/layout.js\n'
        );

        /***/
      },

    /***/ "./pages/_app.js":
      /*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_spinkit_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/spinkit.min.css */ "./css/spinkit.min.css");\n/* harmony import */ var _css_spinkit_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_spinkit_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _css_TimeLine_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/TimeLine.scss */ "./css/TimeLine.scss");\n/* harmony import */ var _css_TimeLine_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_TimeLine_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _css_Sidebar_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/Sidebar.scss */ "./css/Sidebar.scss");\n/* harmony import */ var _css_Sidebar_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_Sidebar_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _css_modal_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/modal.scss */ "./css/modal.scss");\n/* harmony import */ var _css_modal_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_modal_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _css_stars_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/stars.css */ "./css/stars.css");\n/* harmony import */ var _css_stars_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_stars_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _css_App_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/App.scss */ "./css/App.scss");\n/* harmony import */ var _css_App_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_App_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _css_Contact_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/Contact.scss */ "./css/Contact.scss");\n/* harmony import */ var _css_Contact_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_Contact_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-seo */ "next-seo");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "next/head");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _analytics_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../analytics/layout */ "./analytics/layout.js");\n\nvar _jsxFileName = "/Users/ashleychang/PycharmProjects/from-scratch/pages/_app.js";\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  // document.getElementById("__next").width = \'100%\';\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_analytics_layout__WEBPACK_IMPORTED_MODULE_13__.default, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_10__.NextSeo, {\n      description: "The personal website and portfolio of Ashley Chang, who is a student of Computer Science at Brown University.",\n      nofollow: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_11___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {\n        rel: "icon",\n        href: "/apple-touch-icon.png",\n        className: "jsx-789584226"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("style", {\n        children: "@import url(\'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap\');"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {\n        href: "https://fonts.gstatic.com/",\n        className: "jsx-789584226"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {\n        href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",\n        rel: "stylesheet",\n        className: "jsx-789584226"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {\n        className: "jsx-789584226",\n        children: "Ashley Chang"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n      id: "789584226",\n      children: "#__next{width:100%;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2hsZXljaGFuZy9QeWNoYXJtUHJvamVjdHMvZnJvbS1zY3JhdGNoL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0N5QixBQUdzQixXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9hc2hsZXljaGFuZy9QeWNoYXJtUHJvamVjdHMvZnJvbS1zY3JhdGNoL3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBcIi4uL2Nzcy9zcGlua2l0Lm1pbi5jc3NcIjtcbmltcG9ydCBcIi4uL2Nzcy9UaW1lTGluZS5zY3NzXCI7XG5pbXBvcnQgXCIuLi9jc3MvU2lkZWJhci5zY3NzXCI7XG5pbXBvcnQgXCIuLi9jc3MvbW9kYWwuc2Nzc1wiO1xuaW1wb3J0IFwiLi4vY3NzL3N0YXJzLmNzc1wiO1xuaW1wb3J0IFwiLi4vY3NzL0FwcC5zY3NzXCI7XG5pbXBvcnQgXCIuLi9jc3MvQ29udGFjdC5zY3NzXCI7XG5pbXBvcnQgeyBOZXh0U2VvIH0gZnJvbSBcIm5leHQtc2VvXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9hbmFseXRpY3MvbGF5b3V0XCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIl9fbmV4dFwiKS53aWR0aCA9ICcxMDAlJztcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPE5leHRTZW9cbiAgICAgICAgZGVzY3JpcHRpb249XCJUaGUgcGVyc29uYWwgd2Vic2l0ZSBhbmQgcG9ydGZvbGlvIG9mIEFzaGxleSBDaGFuZyxcbiAgICAgIHdobyBpcyBhIHN0dWRlbnQgb2YgQ29tcHV0ZXIgU2NpZW5jZSBhdCBCcm93biBVbml2ZXJzaXR5LlwiXG4gICAgICAgIG5vZm9sbG93PXt0cnVlfVxuICAgICAgLz5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiIC8+XG5cbiAgICAgICAgPHN0eWxlPlxuICAgICAgICAgIEBpbXBvcnRcbiAgICAgICAgICB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDQwMDs1MDAmZGlzcGxheT1zd2FwJyk7XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL1wiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIC8+XG4gICAgICAgIDx0aXRsZT5Bc2hsZXkgQ2hhbmc8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgI19fbmV4dCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXX0= */\\n/*@ sourceURL=/Users/ashleychang/PycharmProjects/from-scratch/pages/_app.js */"\n    }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread(_objectSpread({}, pageProps), {}, {\n      className: "jsx-789584226" + " " + (pageProps && pageProps.className != null && pageProps.className || "")\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLW5leHQvLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUN2QztBQUNBLHNCQUNFLDhEQUFDLHVEQUFEO0FBQUEsNEJBQ0UsOERBQUMsOENBQUQ7QUFDRSxpQkFBVyxFQUFDLCtHQURkO0FBR0UsY0FBUSxFQUFFO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUUsOERBQUMsbURBQUQ7QUFBQSw4QkFDRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQyx1QkFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFPRTtBQUFNLFlBQUksRUFBQyw0QkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLGVBUUU7QUFDRSxZQUFJLEVBQUMsNkVBRFA7QUFFRSxXQUFHLEVBQUMsWUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGLGVBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBLGtEQXlCRSw4REFBQyxTQUFELGtDQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNkJEOztBQUVELCtEQUFlRixLQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IFwiLi4vY3NzL3NwaW5raXQubWluLmNzc1wiO1xuaW1wb3J0IFwiLi4vY3NzL1RpbWVMaW5lLnNjc3NcIjtcbmltcG9ydCBcIi4uL2Nzcy9TaWRlYmFyLnNjc3NcIjtcbmltcG9ydCBcIi4uL2Nzcy9tb2RhbC5zY3NzXCI7XG5pbXBvcnQgXCIuLi9jc3Mvc3RhcnMuY3NzXCI7XG5pbXBvcnQgXCIuLi9jc3MvQXBwLnNjc3NcIjtcbmltcG9ydCBcIi4uL2Nzcy9Db250YWN0LnNjc3NcIjtcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tIFwibmV4dC1zZW9cIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2FuYWx5dGljcy9sYXlvdXRcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiX19uZXh0XCIpLndpZHRoID0gJzEwMCUnO1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8TmV4dFNlb1xuICAgICAgICBkZXNjcmlwdGlvbj1cIlRoZSBwZXJzb25hbCB3ZWJzaXRlIGFuZCBwb3J0Zm9saW8gb2YgQXNobGV5IENoYW5nLFxuICAgICAgd2hvIGlzIGEgc3R1ZGVudCBvZiBDb21wdXRlciBTY2llbmNlIGF0IEJyb3duIFVuaXZlcnNpdHkuXCJcbiAgICAgICAgbm9mb2xsb3c9e3RydWV9XG4gICAgICAvPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2FwcGxlLXRvdWNoLWljb24ucG5nXCIgLz5cblxuICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgQGltcG9ydFxuICAgICAgICAgIHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRANDAwOzUwMCZkaXNwbGF5PXN3YXAnKTtcbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgICAgPHRpdGxlPkFzaGxleSBDaGFuZzwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAjX19uZXh0IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n'
        );

        /***/
      },

    /***/ "./css/App.scss":
      /*!**********************!*\
  !*** ./css/App.scss ***!
  \**********************/
      /***/ function () {
        /***/
      },

    /***/ "./css/Contact.scss":
      /*!**************************!*\
  !*** ./css/Contact.scss ***!
  \**************************/
      /***/ function () {
        /***/
      },

    /***/ "./css/Sidebar.scss":
      /*!**************************!*\
  !*** ./css/Sidebar.scss ***!
  \**************************/
      /***/ function () {
        /***/
      },

    /***/ "./css/TimeLine.scss":
      /*!***************************!*\
  !*** ./css/TimeLine.scss ***!
  \***************************/
      /***/ function () {
        /***/
      },

    /***/ "./css/modal.scss":
      /*!************************!*\
  !*** ./css/modal.scss ***!
  \************************/
      /***/ function () {
        /***/
      },

    /***/ "./css/spinkit.min.css":
      /*!*****************************!*\
  !*** ./css/spinkit.min.css ***!
  \*****************************/
      /***/ function () {
        /***/
      },

    /***/ "./css/stars.css":
      /*!***********************!*\
  !*** ./css/stars.css ***!
  \***********************/
      /***/ function () {
        /***/
      },

    /***/ "./styles/globals.css":
      /*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
      /***/ function () {
        /***/
      },

    /***/ "next-seo":
      /*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
      /***/ function (module) {
        "use strict";
        module.exports = require("next-seo");

        /***/
      },

    /***/ "next/head":
      /*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
      /***/ function (module) {
        "use strict";
        module.exports = require("next/head");

        /***/
      },

    /***/ react:
      /*!************************!*\
  !*** external "react" ***!
  \************************/
      /***/ function (module) {
        "use strict";
        module.exports = require("react");

        /***/
      },

    /***/ "react-ga":
      /*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
      /***/ function (module) {
        "use strict";
        module.exports = require("react-ga");

        /***/
      },

    /***/ "react/jsx-dev-runtime":
      /*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
      /***/ function (module) {
        "use strict";
        module.exports = require("react/jsx-dev-runtime");

        /***/
      },

    /***/ "styled-jsx/style":
      /*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
      /***/ function (module) {
        "use strict";
        module.exports = require("styled-jsx/style");

        /***/
      },
  };
  // load runtime
  var __webpack_require__ = require("../webpack-runtime.js");
  __webpack_require__.C(exports);
  var __webpack_exec__ = function (moduleId) {
    return __webpack_require__((__webpack_require__.s = moduleId));
  };
  var __webpack_exports__ = __webpack_exec__("./pages/_app.js");
  module.exports = __webpack_exports__;
})();
