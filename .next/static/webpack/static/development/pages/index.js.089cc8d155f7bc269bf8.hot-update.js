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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout/index.js");
/* harmony import */ var _index_components_HelloSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../index/components/HelloSection */ "./pages/index/components/HelloSection/index.js");
/* harmony import */ var _index_components_AboutSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../index/components/AboutSection */ "./pages/index/components/AboutSection/index.js");
/* harmony import */ var _components_AffairsSection_AffairsSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/AffairsSection/AffairsSection */ "./pages/index/components/AffairsSection/AffairsSection.js");
/* harmony import */ var _components_ContactSection_ContactSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ContactSection/ContactSection */ "./pages/index/components/ContactSection/ContactSection.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Spinner */ "./components/Spinner/index.js");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../styles/index.css */ "./styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_10__);



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
    _fetchEntriesForContentType = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      posts = _useState2[0],
      setPosts = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    function getPosts() {
      return _getPosts.apply(this, arguments);
    }

    function _getPosts() {
      _getPosts = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var allPosts;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetchEntriesForContentType("about");

              case 2:
                allPosts = _context.sent;
                setPosts(allPosts);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _getPosts.apply(this, arguments);
    }

    getPosts();
  }, []);
  console.log(posts);

  if (posts.length === 0) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    });
  } else {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_index_components_HelloSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_index_components_AboutSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: posts[0].fields.title,
      intro: posts[0].fields.intro.content[0].content[0].value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "main__dash w-full block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_AffairsSection_AffairsSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "main__dash w-full block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_ContactSection_ContactSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, posts[0].fields.title));
  }
});

/***/ })

})
//# sourceMappingURL=index.js.089cc8d155f7bc269bf8.hot-update.js.map