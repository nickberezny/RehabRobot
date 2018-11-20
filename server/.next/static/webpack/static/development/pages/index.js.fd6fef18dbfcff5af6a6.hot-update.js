webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _Pages_UserPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pages/UserPage */ "./components/Pages/UserPage.jsx");
/* harmony import */ var _Pages_VisualsPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Pages/VisualsPage */ "./components/Pages/VisualsPage.jsx");
/* harmony import */ var _Pages_SettingsPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Pages/SettingsPage */ "./components/Pages/SettingsPage.jsx");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/actions */ "./src/actions.js");
var _jsxFileName = "/home/rehab/Documents/RehabRobot/server/components/ContentWindow.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var WindowContent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(WindowContent, _React$Component);

  function WindowContent(props) {
    var _this;

    _classCallCheck(this, WindowContent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WindowContent).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMessage", function (message) {
      console.log(message);
      console.log('recieved');
    });

    _this.state = {
      content: null,
      style: null
    };
    return _this;
  }

  _createClass(WindowContent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var socketio = socket_io_client__WEBPACK_IMPORTED_MODULE_8___default()('http://192.168.2.205:3000');
      socketio.on('message', this.handleMessage);
      console.log(socketio);
      this.props.setSocket(socketio);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log('unmount');
      this.state.socket.close();
    }
  }, {
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
              lineNumber: 63
            },
            __self: this
          }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_SetupPage__WEBPACK_IMPORTED_MODULE_4__["default"], {
            socket: this.state.socket,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            },
            __self: this
          }), " ");
          break;

        case 2:
          this.state.content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: this.state.style,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            },
            __self: this
          }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_VisualsPage__WEBPACK_IMPORTED_MODULE_6__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            },
            __self: this
          }), " ");
          break;

        default:
          this.state.content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: this.state.style,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            },
            __self: this
          }, " Page Load Failed ");
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
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
    menuOpen: state.menuOpen,
    socket: state.socket
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  setSocket: _src_actions__WEBPACK_IMPORTED_MODULE_9__["setSocket"] //add importing action functions here

})(WindowContent));

/***/ })

})
//# sourceMappingURL=index.js.fd6fef18dbfcff5af6a6.hot-update.js.map