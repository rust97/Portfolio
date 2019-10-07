webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index/index.js":
/*!******************************!*\
  !*** ./pages/index/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout/index.js");
/* harmony import */ var _index_components_HelloSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../index/components/HelloSection */ "./pages/index/components/HelloSection/index.js");
/* harmony import */ var _index_components_AboutSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../index/components/AboutSection */ "./pages/index/components/AboutSection/index.js");
/* harmony import */ var _components_AffairsSection_AffairsSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/AffairsSection/AffairsSection */ "./pages/index/components/AffairsSection/AffairsSection.js");
/* harmony import */ var _components_ContactSection_ContactSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ContactSection/ContactSection */ "./pages/index/components/ContactSection/ContactSection.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Spinner */ "./components/Spinner/index.js");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../styles/index.css */ "./styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_11__);




var _jsxFileName = "D:\\web-dev\\resume-potfolio\\pages\\index\\index.js";










var client = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js").createClient({
  space: "sc9ok02q0vxo",
  accessToken: "wWLPUyf9LFpFrck9Ke7ZBcZj5g2OvicRPB7ET3VyROQ"
});

/* harmony default export */ __webpack_exports__["default"] = (function () {
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
        var about, whatIDo, contact;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetchEntriesForContentType("about");

              case 2:
                about = _context.sent;
                _context.next = 5;
                return fetchEntriesForContentType("whatIDo");

              case 5:
                whatIDo = _context.sent;
                _context.next = 8;
                return fetchEntriesForContentType("contact");

              case 8:
                contact = _context.sent;
                setData([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(about), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(whatIDo), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(contact)));

              case 10:
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
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    });
  } else {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_index_components_HelloSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_index_components_AboutSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
      title: data[0].fields.title,
      intro: data[0].fields.intro.content[0].content[0].value,
      info: data[0].fields.info.content[0].content[0].value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "main__dash w-full block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_AffairsSection_AffairsSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
      title: data[1].fields.title,
      dev: data[1].fields.development,
      devText: data[1].fields.developmentText.content[0].content[0].value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "main__dash w-full block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_ContactSection_ContactSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
      title: data[2].fields.title,
      email: data[2].fields.email.content[0].content,
      otherContacts: data[2].fields.otherContacts.content[0].content,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }));
  }
});

/***/ })

})
//# sourceMappingURL=index.js.d1e1f08a49e628622e08.hot-update.js.map