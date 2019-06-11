webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Pages/VisualsPage.jsx":
/*!******************************************!*\
  !*** ./components/Pages/VisualsPage.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _games_Follow_traj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../games/Follow_traj */ "./games/Follow_traj.js");
/* harmony import */ var _games_Follow_vel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../games/Follow_vel */ "./games/Follow_vel.js");
/* harmony import */ var _games_Follow_game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../games/Follow_game */ "./games/Follow_game.js");
/* harmony import */ var _games_Race_game__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../games/Race_game */ "./games/Race_game.js");
/* harmony import */ var _games_Balance_game__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../games/Balance_game */ "./games/Balance_game.js");
/* harmony import */ var _games_Gait_game__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../games/Gait_game */ "./games/Gait_game.js");
/* harmony import */ var _Instructions_FollowTraj_Instruction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Instructions/FollowTraj_Instruction */ "./components/Instructions/FollowTraj_Instruction.jsx");
/* harmony import */ var _Instructions_FollowVel_Instruction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Instructions/FollowVel_Instruction */ "./components/Instructions/FollowVel_Instruction.jsx");
/* harmony import */ var _Instructions_Race_Instruction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Instructions/Race_Instruction */ "./components/Instructions/Race_Instruction.jsx");
/* harmony import */ var _Instructions_Gait_Instruction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Instructions/Gait_Instruction */ "./components/Instructions/Gait_Instruction.jsx");
/* harmony import */ var _Instructions_Balance_Instruction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Instructions/Balance_Instruction */ "./components/Instructions/Balance_Instruction.jsx");
/* harmony import */ var _games_Test_timer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../games/Test_timer */ "./games/Test_timer.js");
/* harmony import */ var _Generic_RunButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Generic/RunButton */ "./components/Generic/RunButton.jsx");
/* harmony import */ var _Generic_HomeButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Generic/HomeButton */ "./components/Generic/HomeButton.jsx");
/* harmony import */ var _src_actions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../src/actions */ "./src/actions.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



















var VisualsPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VisualsPage, _React$Component);

  function VisualsPage(props) {
    var _this;

    _classCallCheck(this, VisualsPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VisualsPage).call(this, props));
    _this.state = {
      content: null
    };
    return _this;
  }

  _createClass(VisualsPage, [{
    key: "render",
    value: function render() {
      if (this.props.run) {
        switch (this.props.game) {
          case 1:
            this.state.content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_games_Follow_game__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_games_Follow_traj__WEBPACK_IMPORTED_MODULE_2__["default"], null));
            break;

          case 2:
            this.state.content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              style: {
                display: 'inline-flex'
              }
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_games_Follow_vel__WEBPACK_IMPORTED_MODULE_3__["default"], null));
            break;

          case 3:
            this.state.content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              style: {
                display: 'inline-flex'
              }
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_games_Follow_game__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_games_Follow_traj__WEBPACK_IMPORTED_MODULE_2__["default"], null));
            break;

          case 4:
            this.state.content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              style: {
                display: 'inline-flex'
              }
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_games_Race_game__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_games_Follow_vel__WEBPACK_IMPORTED_MODULE_3__["default"], null));
            break;

          case 5:
            this.state.content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              style: {
                display: 'inline-flex'
              }
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_games_Balance_game__WEBPACK_IMPORTED_MODULE_6__["default"], null));
            break;

          case 6:
            this.state.content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              style: {
                display: 'inline-flex'
              }
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_games_Gait_game__WEBPACK_IMPORTED_MODULE_7__["default"], null));

          default:
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, " Game load failed ");
        }
      } else {
        switch (this.props.game) {
          case 1:
            this.state.content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Instructions_FollowTraj_Instruction__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              style: {
                display: 'inline-flex'
              }
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Generic_HomeButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
              text: "Home"
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Generic_RunButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
              text: "Run"
            })));
            break;

          case 2:
            this.state.content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Instructions_FollowVel_Instruction__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              style: {
                display: 'inline-flex'
              }
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Generic_HomeButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
              text: "Home"
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Generic_RunButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
              text: "Run"
            })));
            break;

          case 3:
            this.state.content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Instructions_Race_Instruction__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              style: {
                display: 'inline-flex'
              }
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Generic_HomeButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
              text: "Home"
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Generic_RunButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
              text: "Run"
            })));
            break;

          case 4:
            this.state.content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Instructions_Race_Instruction__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              style: {
                display: 'inline-flex'
              }
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Generic_HomeButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
              text: "Home"
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Generic_RunButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
              text: "Run"
            })));
            break;

          case 5:
            this.state.content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Instructions_Balance_Instruction__WEBPACK_IMPORTED_MODULE_12__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              style: {
                display: 'inline-flex'
              }
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Generic_HomeButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
              text: "Home"
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Generic_RunButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
              text: "Run"
            })));
            break;

          case 6:
            this.state.content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Instructions_Gait_Instruction__WEBPACK_IMPORTED_MODULE_11__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              style: {
                display: 'inline-flex'
              }
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Generic_HomeButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
              text: "Home"
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Generic_RunButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
              text: "Run"
            })));
            break;

          default:
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, " Game load failed ");
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.state.content);
    }
  }]);

  return VisualsPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

function mapStateToProps(state) {
  return {
    game: state.game,
    run: state.run,
    stage: state.stage
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  setParam: _src_actions__WEBPACK_IMPORTED_MODULE_16__["setParam"]
})(VisualsPage));

/***/ })

})
//# sourceMappingURL=index.js.e2fc12e0d4bd92833a1a.hot-update.js.map