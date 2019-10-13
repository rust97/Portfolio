webpackHotUpdate("static\\development\\pages\\works.js",{

/***/ "./pages/works/index.js":
/*!******************************!*\
  !*** ./pages/works/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "D:\\web-dev\\resume-potfolio-netlify\\pages\\works\\index.js";




function Porfolio(_ref) {
  var portfolio = _ref.portfolio;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Frontend Developer")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "portfolio__quote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "If you find a bug, just remember that it\u2019s not a bug. It\u2019s an undocumented feature!"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "flex flex-row justify-around items-start flex-wrap portfolio__wrap ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, portfolio["default"].map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "project__wrap mb-5",
      key: item.sys.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: item.fields.preview.fields.file.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "project__hidden",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: item.fields.link.content[0].content[1].data.uri,
      className: "project__open-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, item.fields.link.content[0].content[1].content[0].value), item.fields.link.content.length > 1 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: item.fields.link.content[1].content[1].data.uri,
      className: "project__open-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, item.fields.link.content[1].content[1].content[0].value) : ""));
  })));
}

Porfolio.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var req, portfolio;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref2.req;
            _context.next = 3;
            return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.t.bind(null, /*! ../../static/portfolio.json */ "./static/portfolio.json", 3));

          case 3:
            portfolio = _context.sent;
            return _context.abrupt("return", {
              portfolio: portfolio
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Porfolio);

/***/ })

})
//# sourceMappingURL=works.js.384a03d85ac211ab8f71.hot-update.js.map