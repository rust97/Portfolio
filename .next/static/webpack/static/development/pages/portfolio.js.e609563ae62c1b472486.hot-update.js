webpackHotUpdate("static\\development\\pages\\portfolio.js",{

/***/ "./pages/portfolio/index.js":
/*!**********************************!*\
  !*** ./pages/portfolio/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Porfolio; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout/index.js");
/* harmony import */ var _components_Project_Project__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Project/Project */ "./pages/portfolio/components/Project/Project.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Spinner */ "./components/Spinner/index.js");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/index.css */ "./styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _portfolio_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./portfolio.css */ "./pages/portfolio/portfolio.css");
/* harmony import */ var _portfolio_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_portfolio_css__WEBPACK_IMPORTED_MODULE_9__);




var _jsxFileName = "D:\\web-dev\\resume-potfolio\\pages\\portfolio\\index.js";








var client = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js").createClient({
  space: "sc9ok02q0vxo",
  accessToken: "wWLPUyf9LFpFrck9Ke7ZBcZj5g2OvicRPB7ET3VyROQ"
});

function Porfolio() {
  function fetchEntriesForContentType(_x) {
    return _fetchEntriesForContentType.apply(this, arguments);
  }

  function _fetchEntriesForContentType() {
    _fetchEntriesForContentType = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(contentType) {
      var entries;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return client.getEntries({
                content_type: contentType
              });

            case 2:
              entries = _context2.sent;

              if (!entries.items) {
                _context2.next = 5;
                break;
              }

              return _context2.abrupt("return", entries.items);

            case 5:
              console.log("Error getting Entries for ".concat(contentType.name, "."));

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _fetchEntriesForContentType.apply(this, arguments);
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    function getdata() {
      return _getdata.apply(this, arguments);
    }

    function _getdata() {
      _getdata = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var portfolio;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetchEntriesForContentType("portfolio");

              case 2:
                portfolio = _context.sent;
                setData(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(portfolio));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _getdata.apply(this, arguments);
    }

    getdata();
  }, []);
  console.log(data);

  if (data.length === 0) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "portfolio__quote",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "If you find a bug, just remember that it\u2019s not a bug. It\u2019s an undocumented feature!"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "flex flex-row justify-around items-start flex-wrap portfolio__wrap ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, data.map(function (item) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Project_Project__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: item.sys.id,
        item: item.fields,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      });
    })));
  }
}

/***/ })

})
//# sourceMappingURL=portfolio.js.e609563ae62c1b472486.hot-update.js.map