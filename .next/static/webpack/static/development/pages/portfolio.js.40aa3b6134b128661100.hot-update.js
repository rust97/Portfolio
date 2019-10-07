webpackHotUpdate("static\\development\\pages\\portfolio.js",{

/***/ "./pages/portfolio/components/Project/Project.js":
/*!*******************************************************!*\
  !*** ./pages/portfolio/components/Project/Project.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Project; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\web-dev\\resume-potfolio\\pages\\portfolio\\components\\Project\\Project.js";


function Project(_ref) {
  var item = _ref.item;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(360),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      fullHeight = _useState2[0],
      setHeight = _useState2[1];

  var demo = item.link.content[0].content[1].content[0].value;
  var demoLink = item.link.content[0].content[1].data.uri; // const code = item.link.content[1].content[1].content[0].value
  // const codeLink = item.link.content[1].content[1].data.uri
  // console.log(item.link.content[1].content[1].content[0].value);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "project__wrap mb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: item.preview.fields.file.url,
    style: {
      top: "-".concat(fullHeight - 360, "px"),
      width: "360px"
    },
    onMouseEnter: function onMouseEnter(e) {
      return setHeight(e.target.clientHeight);
    },
    onMouseLeave: function onMouseLeave() {
      return setHeight(265);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "project__hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: demoLink,
    className: "project__open-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, demo), item.link.content[1].content[1].data.uri ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: item.link.content[1].content[1].data.uri,
    className: "project__open-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, item.link.content[1].content[1].content[0].value) : "")));
}

/***/ })

})
//# sourceMappingURL=portfolio.js.40aa3b6134b128661100.hot-update.js.map