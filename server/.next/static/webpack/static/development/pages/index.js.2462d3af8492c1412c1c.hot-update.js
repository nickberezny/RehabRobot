webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Pages/SettingsPage.jsx":
/*!*******************************************!*\
  !*** ./components/Pages/SettingsPage.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/Radio/index.js");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "./node_modules/@material-ui/core/RadioGroup/index.js");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/FormControl/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormLabel */ "./node_modules/@material-ui/core/FormLabel/index.js");
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/actions */ "./src/actions.js");
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










var SettingsPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SettingsPage, _React$Component);

  function SettingsPage(props) {
    var _this;

    _classCallCheck(this, SettingsPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SettingsPage).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (event) {
      console.log(parseInt(event.target.value));

      _this.props.setUser(parseInt(event.target.value));
    });

    return _this;
  }

  _createClass(SettingsPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4___default.a, {
        component: "fieldset"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        component: "legend"
      }, "User Setting"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_3___default.a, {
        "aria-label": "User",
        name: "user1",
        value: this.props.u_value,
        onChange: this.handleChange
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
        value: "1",
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_2___default.a, {
          color: "secondary"
        }),
        label: "Developer"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
        value: "2",
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_2___default.a, {
          color: "secondary"
        }),
        label: "User"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
        value: "3",
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_2___default.a, {
          color: "secondary"
        }),
        label: "Expriment"
      })));
    }
  }]);

  return SettingsPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

function mapStateToProps(state) {
  return {
    u_value: state.user.toString()
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  setUser: _src_actions__WEBPACK_IMPORTED_MODULE_7__["setUser"]
})(SettingsPage));

/***/ })

})
//# sourceMappingURL=index.js.2462d3af8492c1412c1c.hot-update.js.map