webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var _games_Follow_game2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../games/Follow_game2 */ "./games/Follow_game2.js");
/* harmony import */ var _games_Race_game__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../games/Race_game */ "./games/Race_game.js");
/* harmony import */ var _games_Balance_game__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../games/Balance_game */ "./games/Balance_game.js");
/* harmony import */ var _games_Gait_game__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../games/Gait_game */ "./games/Gait_game.js");
/* harmony import */ var _Instructions_FollowTraj_Instruction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Instructions/FollowTraj_Instruction */ "./components/Instructions/FollowTraj_Instruction.jsx");
/* harmony import */ var _Instructions_FollowVel_Instruction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Instructions/FollowVel_Instruction */ "./components/Instructions/FollowVel_Instruction.jsx");
/* harmony import */ var _Instructions_Race_Instruction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Instructions/Race_Instruction */ "./components/Instructions/Race_Instruction.jsx");
/* harmony import */ var _Instructions_Gait_Instruction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Instructions/Gait_Instruction */ "./components/Instructions/Gait_Instruction.jsx");
/* harmony import */ var _Instructions_Balance_Instruction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Instructions/Balance_Instruction */ "./components/Instructions/Balance_Instruction.jsx");
/* harmony import */ var _games_Test_timer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../games/Test_timer */ "./games/Test_timer.js");
/* harmony import */ var _Generic_RunButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Generic/RunButton */ "./components/Generic/RunButton.jsx");
/* harmony import */ var _Generic_HomeButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Generic/HomeButton */ "./components/Generic/HomeButton.jsx");
/* harmony import */ var _src_actions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../src/actions */ "./src/actions.js");
var _jsxFileName = "C:\\Users\\nicho_000\\Documents\\RehabRobot\\server\\components\\Pages\\VisualsPage.jsx";

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
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_games_Follow_traj__WEBPACK_IMPORTED_MODULE_2__["default"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              },
              __self: this
            }));
            break;

          case 2:
            this.state.content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 48
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_games_Follow_traj__WEBPACK_IMPORTED_MODULE_2__["default"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 51
              },
              __self: this
            }));
            break;

          case 3:
            this.state.content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 56
              },
              __self: this
            }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_games_Follow_game2__WEBPACK_IMPORTED_MODULE_5__["default"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 58
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_games_Follow_traj__WEBPACK_IMPORTED_MODULE_2__["default"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 59
              },
              __self: this
            }));
            break;

          case 4:
            this.state.content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 64
              },
              __self: this
            }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_games_Race_game__WEBPACK_IMPORTED_MODULE_6__["default"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 66
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_games_Follow_traj__WEBPACK_IMPORTED_MODULE_2__["default"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              },
              __self: this
            }));
            break;

          case 5:
            this.state.content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 72
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_games_Balance_game__WEBPACK_IMPORTED_MODULE_7__["default"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 75
              },
              __self: this
            }));
            break;

          case 6:
            this.state.content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 80
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_games_Gait_game__WEBPACK_IMPORTED_MODULE_8__["default"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 83
              },
              __self: this
            }));

          default:
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 86
              },
              __self: this
            }, " Game load failed ");
        }
      } else {
        switch (this.props.game) {
          case 1:
            this.state.content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 94
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Instructions_FollowTraj_Instruction__WEBPACK_IMPORTED_MODULE_9__["default"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 95
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              style: {
                display: 'inline-flex'
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 96
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Generic_HomeButton__WEBPACK_IMPORTED_MODULE_16__["default"], {
              text: "Home",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 96
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Generic_RunButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
              text: "Run",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 96
              },
              __self: this
            })));
            break;

          case 2:
            this.state.content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 101
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Instructions_FollowVel_Instruction__WEBPACK_IMPORTED_MODULE_10__["default"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 102
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              style: {
                display: 'inline-flex'
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 103
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Generic_HomeButton__WEBPACK_IMPORTED_MODULE_16__["default"], {
              text: "Home",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 103
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Generic_RunButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
              text: "Run",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 103
              },
              __self: this
            })));
            break;

          case 3:
            this.state.content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 108
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Instructions_Race_Instruction__WEBPACK_IMPORTED_MODULE_11__["default"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 109
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              style: {
                display: 'inline-flex'
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 110
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Generic_HomeButton__WEBPACK_IMPORTED_MODULE_16__["default"], {
              text: "Home",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 110
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Generic_RunButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
              text: "Run",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 110
              },
              __self: this
            })));
            break;

          case 4:
            this.state.content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 115
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Instructions_Race_Instruction__WEBPACK_IMPORTED_MODULE_11__["default"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 116
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              style: {
                display: 'inline-flex'
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 117
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Generic_HomeButton__WEBPACK_IMPORTED_MODULE_16__["default"], {
              text: "Home",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 117
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Generic_RunButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
              text: "Run",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 117
              },
              __self: this
            })));
            break;

          case 5:
            this.state.content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 122
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Instructions_Balance_Instruction__WEBPACK_IMPORTED_MODULE_13__["default"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 123
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              style: {
                display: 'inline-flex'
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 124
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Generic_HomeButton__WEBPACK_IMPORTED_MODULE_16__["default"], {
              text: "Home",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 124
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Generic_RunButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
              text: "Run",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 124
              },
              __self: this
            })));
            break;

          case 6:
            this.state.content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 129
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Instructions_Gait_Instruction__WEBPACK_IMPORTED_MODULE_12__["default"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 130
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              style: {
                display: 'inline-flex'
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 131
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Generic_HomeButton__WEBPACK_IMPORTED_MODULE_16__["default"], {
              text: "Home",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 131
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Generic_RunButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
              text: "Run",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 131
              },
              __self: this
            })));
            break;

          default:
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 135
              },
              __self: this
            }, " Game load failed ");
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, this.state.content);
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
  setParam: _src_actions__WEBPACK_IMPORTED_MODULE_17__["setParam"]
})(VisualsPage));

/***/ }),

/***/ "./games/Follow_game2.js":
/*!*******************************!*\
  !*** ./games/Follow_game2.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _src_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/actions */ "./src/actions.js");
var _jsxFileName = "C:\\Users\\nicho_000\\Documents\\RehabRobot\\server\\games\\Follow_game2.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 //import * as OBJLoader from 'three-obj-loader';

 //OBJLoader(THREE);
//require("/home/rehab/Documents/RehabRobot/server/games/sprite/crosshair.png")
//require("/home/rehab/Documents/RehabRobot/server/games/sprite/crosshair_yellow.png" );

var Follow_game =
/*#__PURE__*/
function (_Component) {
  _inherits(Follow_game, _Component);

  function Follow_game(props) {
    var _this;

    _classCallCheck(this, Follow_game);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Follow_game).call(this, props));
    _this.start = _this.start.bind(_assertThisInitialized(_this));
    _this.stop = _this.stop.bind(_assertThisInitialized(_this));
    _this.animate = _this.animate.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Follow_game, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var points = 0;
      var maxStroke = 200;
      var text;
      var group = new three__WEBPACK_IMPORTED_MODULE_2__["Group"]();
      var width = this.mount.clientWidth;
      var height = this.mount.clientHeight;
      var scene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
      scene.background = new three__WEBPACK_IMPORTED_MODULE_2__["Color"](0xf7fdff);
      var camera = new three__WEBPACK_IMPORTED_MODULE_2__["OrthographicCamera"](-width / 2, width / 2, height / 2, -height / 2, -100, 500000);
      camera.position.set(0, 0, 5);
      scene.add(camera);
      var renderer = new three__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"]({
        antialias: true
      });
      renderer.setSize(width, height);
      var geometry = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](100, 100, 100);
      var cubeMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshLambertMaterial"]({
        color: 0xE86D00
      });
      var cube = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, cubeMaterial);
      cube.position.set(0.0, 0.0, -70);
      var spotLight1 = new three__WEBPACK_IMPORTED_MODULE_2__["SpotLight"](0xffffff, 1);
      spotLight1.position.set(-width / 3, 200, 200);
      var light = new three__WEBPACK_IMPORTED_MODULE_2__["HemisphereLight"](0xffffff, 0xffffff, 1);
      scene.add(light);
      scene.add(spotLight1);
      scene.add(cube);
      this.scene = scene;
      this.camera = camera;
      this.renderer = renderer;
      this.clock = new three__WEBPACK_IMPORTED_MODULE_2__["Clock"]();
      this.timer = 0;
      this.start_game = 0;
      this.cube = cube; //this.group = group;

      this.points = points;
      this.mount.appendChild(this.renderer.domElement);
      this.start();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stop();
      this.mount.removeChild(this.renderer.domElement);
    }
  }, {
    key: "start",
    value: function start() {
      if (!this.frameId) {
        this.frameId = requestAnimationFrame(this.animate);
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      cancelAnimationFrame(this.frameId);
    }
  }, {
    key: "animate",
    value: function animate() {
      if (!this.start_game) {
        this.timer += this.clock.getDelta();
        var current_time = Math.round(5.8 - this.timer).toString();
        var textMaterial = this.textMaterial;

        if (this.timer > 4.9) {
          this.start_game = 1;
        }
      } else {
        this.factor = 280.0 / this.props.x_end;
        console.log('x_end' + this.props.x_end);
        console.log('x cube' + this.factor * this.props.x);
        console.log('xdes cube' + this.factor * this.props.xdes);

        if (this.factor * this.props.x > this.factor * this.props.xdes - this.props.range && this.factor * this.props.x < this.factor * this.props.xdes + this.props.range) {
          if (this.points < 6000) this.points += 1; //this.cube.rotation.x += 0.02;
          //this.cube.rotation.y += 0.01;
          //this.cube.rotation.z += 0.015;
        } else {
          if (this.points > 0) this.points -= 3;
        }

        this.cube.rotation.x += 0.02 * this.points / 2000;
        this.cube.rotation.y += 0.01 * this.points / 2000;
        this.cube.rotation.z += 0.015 * this.points / 2000;
        this.cube.scale.set(1 + this.points / 3000, 1 + this.points / 3000, 1 + this.points / 3000);
      }

      this.renderScene();
      this.frameId = window.requestAnimationFrame(this.animate);
    }
  }, {
    key: "renderScene",
    value: function renderScene() {
      this.renderer.render(this.scene, this.camera);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          width: '800px',
          height: '800px'
        },
        ref: function ref(mount) {
          _this2.mount = mount;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      });
    }
  }]);

  return Follow_game;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function mapStateToProps(state) {
  //map state variables to the component's state 
  return {
    x: state.x,
    xdes: state.xdes,
    x_end: state.x_end,
    range: state.range
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {} //add importing action functions here
)(Follow_game));

/***/ })

})
//# sourceMappingURL=index.js.cf873a5d517b54e407e4.hot-update.js.map