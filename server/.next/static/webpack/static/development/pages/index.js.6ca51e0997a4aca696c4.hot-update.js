webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _src_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/actions */ "./src/actions.js");
/* harmony import */ var _Generic_SetButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Generic/SetButton */ "./components/Generic/SetButton.jsx");
/* harmony import */ var _Generic_RunButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Generic/RunButton */ "./components/Generic/RunButton.jsx");
/* harmony import */ var _Generic_InputText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Generic/InputText */ "./components/Generic/InputText.jsx");
/* harmony import */ var _Generic_Dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Generic/Dropdown */ "./components/Generic/Dropdown.jsx");
/* harmony import */ var _Setups_FollowTraj__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Setups/FollowTraj */ "./components/Setups/FollowTraj.jsx");
/* harmony import */ var _Setups_FollowVel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Setups/FollowVel */ "./components/Setups/FollowVel.jsx");
/* harmony import */ var _Setups_Balance__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Setups/Balance */ "./components/Setups/Balance.jsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__);
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
    var _this;

    _classCallCheck(this, SetupPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SetupPage).call(this, props));
    _this.state = {
      contents: null
    };
    return _this;
  }

  _createClass(SetupPage, [{
    key: "render",
    value: function render() {
      switch (this.props.game) {
        case 1:
          this.state.contents = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Setups_FollowTraj__WEBPACK_IMPORTED_MODULE_7__["default"], null), " ");
          break;

        case 2:
          this.state.contents = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Setups_FollowVel__WEBPACK_IMPORTED_MODULE_8__["default"], null), " ");
          break;

        case 3:
          this.state.contents = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Setups_Balance__WEBPACK_IMPORTED_MODULE_9__["default"], null), " ");
          break;

        default:
          this.state.contents = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, " Select a Game ");
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
        variant: "display1",
        gutterBottom: true
      }, "Set Up a Session"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          padding: 24
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Generic_Dropdown__WEBPACK_IMPORTED_MODULE_6__["default"], {
        text: "Game",
        select1: "Follow Trajectory",
        select2: "Racing",
        select3: "Balance"
      }), this.state.contents), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          padding: 12
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Generic_SetButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
        text: "Set"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          padding: 12
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Generic_RunButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
        text: "Run"
      })));
    }
  }]);

  return SetupPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

function mapStateToProps(state) {
  return {
    P: state.P,
    D: state.D,
    xdes: state.xdes,
    K: state.K,
    B: state.B,
    M: state.M,
    game: state.game
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {})(SetupPage));

/***/ })

})
//# sourceMappingURL=index.js.6ca51e0997a4aca696c4.hot-update.js.map