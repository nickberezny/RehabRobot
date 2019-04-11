webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Generic/RunButton.jsx":
/*!******************************************!*\
  !*** ./components/Generic/RunButton.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/actions */ "./src/actions.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var RunButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RunButton, _React$Component);

  function RunButton(props) {
    var _this;

    _classCallCheck(this, RunButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RunButton).call(this, props));
    _this.run = _this.run.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(RunButton, [{
    key: "run",
    value: function (_run) {
      function run() {
        return _run.apply(this, arguments);
      }

      run.toString = function () {
        return _run.toString();
      };

      return run;
    }(function () {
      //change this to send different data
      var dataToSend = 'RUN';
      console.log(dataToSend);
      this.props.socket.emit('START_ROBOT', dataToSend);
      this.props.setValue(run, 1);
    })
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        variant: "contained",
        color: "primary",
        onClick: this.run
      }, this.props.text);
    }
  }]);

  return RunButton;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

function mapStateToProps(state) {
  return {
    socket: state.socket
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  runRobot: _src_actions__WEBPACK_IMPORTED_MODULE_3__["runRobot"],
  setValue: _src_actions__WEBPACK_IMPORTED_MODULE_3__["setValue"]
})(RunButton)); //

/***/ })

})
//# sourceMappingURL=index.js.615e907e38fc585eb66f.hot-update.js.map