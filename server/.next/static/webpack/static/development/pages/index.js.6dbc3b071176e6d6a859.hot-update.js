webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ContentWindow.jsx":
/*!**************************************!*\
  !*** ./components/ContentWindow.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Pages_SetupPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pages/SetupPage */ "./components/Pages/SetupPage.jsx");
var _jsxFileName = "C:\\Users\\nickb\\Documents\\RehabRobot\\server\\components\\ContentWindow.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var WindowContent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(WindowContent, _React$Component);

  function WindowContent(props) {
    var _this;

    _classCallCheck(this, WindowContent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WindowContent).call(this, props));
    _this.state = {
      content: null,
      style: null
    };
    return _this;
  }

  _createClass(WindowContent, [{
    key: "render",
    value: function render() {
      if (this.props.menuOpen) {
        this.state.style = {
          transition: 'marginLeft 6',
          marginLeft: 255,
          padding: 20
        };
      } else {
        this.state.style = {
          transition: 'marginLeft 6',
          marginLeft: 0,
          padding: 20
        };
      }

      switch (this.props.activePage) {
        case 1:
          this.state.content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: this.state.style,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          }, " Page 1 ");
          break;

        case 2:
          this.state.content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: this.state.style,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: this
          }, " Page 2 ");
          break;

        default:
          this.state.content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: this.state.style,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          }, " Page Load Failed ");
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, this.state.content);
    }
  }]);

  return WindowContent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

function mapStateToProps(state) {
  //map state variables to the component's state 
  return {
    activePage: state.activePage,
    menuOpen: state.menuOpen
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {} //add importing action functions here
)(WindowContent));

/***/ }),

/***/ "./components/Pages/SetupPage.jsx":
/*!****************************************!*\
  !*** ./components/Pages/SetupPage.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "C:\\Users\\nickb\\Documents\\RehabRobot\\server\\components\\Pages\\SetupPage.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var SetupPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SetupPage, _React$Component);

  function SetupPage(props) {
    _classCallCheck(this, SetupPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(SetupPage).call(this, props));
  }

  _createClass(SetupPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: style,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Typography, {
        variant: "display1",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "Set Up a Session"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dropdown, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputK, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputB, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RunButton, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }));
    }
  }]);

  return SetupPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

function mapStateToProps(state) {
  return {};
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {})(App));

/***/ })

})
//# sourceMappingURL=index.js.6dbc3b071176e6d6a859.hot-update.js.map