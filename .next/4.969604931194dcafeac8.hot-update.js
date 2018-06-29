webpackHotUpdate(4,{

/***/ "./components/case-studies/CaseStudies.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CaseStudies_css__ = __webpack_require__("./components/case-studies/CaseStudies.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CaseStudies_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__CaseStudies_css__);
var _jsxFileName = "/Users/Nermin/Desktop/sherlock/sherlockapp/components/case-studies/CaseStudies.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var CaseWrapper =
/*#__PURE__*/
function (_Component) {
  _inherits(CaseWrapper, _Component);

  function CaseWrapper(props) {
    var _this;

    _classCallCheck(this, CaseWrapper);

    _this = _possibleConstructorReturn(this, (CaseWrapper.__proto__ || Object.getPrototypeOf(CaseWrapper)).call(this, props));
    _this.state = {
      id: 1,
      title: "Coffe Branding",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      href: "#"
    };
    return _this;
  }

  _createClass(CaseWrapper, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_1__CaseStudies_css__["default"].caseGrid,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_1__CaseStudies_css__["default"].itemA,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CaseImage, {
        title: this.state.title,
        body: this.state.body,
        href: this.state.href,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CaseNavigation, {
        id: this.state.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }));
    }
  }]);

  return CaseWrapper;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

;

var CaseImage = function CaseImage(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__CaseStudies_css__["default"].itemB,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CaseDescription, {
    title: props.title,
    body: props.body,
    href: props.href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }));
};

var CaseDescription = function CaseDescription(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__CaseStudies_css__["default"].desc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__CaseStudies_css__["default"].heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, props.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, props.body), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: props.href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "view case"));
};

var CaseNavigation = function CaseNavigation(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__CaseStudies_css__["default"].itemC,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "http://",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, "0".concat(props.id))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "http://",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, "02")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "http://",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, "03")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "http://",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, "04"))));
};

/* harmony default export */ __webpack_exports__["a"] = (CaseWrapper);

/***/ })

})
//# sourceMappingURL=4.969604931194dcafeac8.hot-update.js.map