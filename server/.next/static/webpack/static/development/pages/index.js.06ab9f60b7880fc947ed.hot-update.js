webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./games/Follow_traj.js":
/*!******************************!*\
  !*** ./games/Follow_traj.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _src_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/actions */ "./src/actions.js");
/* harmony import */ var _components_Generic_RunButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Generic/RunButton */ "./components/Generic/RunButton.jsx");
var _jsxFileName = "C:\\Users\\nicho_000\\Documents\\RehabRobot\\server\\games\\Follow_traj.js";

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

var Follow_traj =
/*#__PURE__*/
function (_Component) {
  _inherits(Follow_traj, _Component);

  function Follow_traj(props) {
    var _this;

    _classCallCheck(this, Follow_traj);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Follow_traj).call(this, props));
    _this.start = _this.start.bind(_assertThisInitialized(_this));
    _this.stop = _this.stop.bind(_assertThisInitialized(_this));
    _this.animate = _this.animate.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Follow_traj, [{
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
      var geometry = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](70, 70, 70);
      var plateMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({
        color: 0x86a5d6
      });
      var barMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({
        color: 0xd1d1d1
      });
      var desMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({
        color: 0xff7272,
        transparent: true,
        opacity: 0.5
      });
      var plate = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, plateMaterial);
      var bar = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, barMaterial);
      var desPos = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, desMaterial);
      plate.position.set(0.0, 0.0, 0.0);
      plate.scale.set(1.25, 0.25, 1.0);
      bar.position.set(0.0, 0.0, -25);
      bar.scale.set(0.75, 4.0, 1.0);
      desPos.position.set(0.0, 0.0, 50);
      desPos.scale.set(1.5, 0.5, 1.0);
      var spotLight1 = new three__WEBPACK_IMPORTED_MODULE_2__["SpotLight"](0xffffff, 1);
      spotLight1.position.set(-width / 3, 200, 200);
      var light = new three__WEBPACK_IMPORTED_MODULE_2__["HemisphereLight"](0xffffff, 0xffffff, 1);
      scene.add(light);
      scene.add(spotLight1); //group.add( plate );

      scene.add(bar);
      scene.add(desPos);
      scene.add(plate);
      this.scene = scene;
      this.camera = camera;
      this.renderer = renderer;
      this.plate = plate;
      this.bar = bar;
      this.desPos = desPos; //this.group = group;

      this.points = points;
      container = createElement('div');
      this.mount.appendChild(container); //this.mount.appendChild(this.renderer.domElement)

      this.start();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stop();
      this.mount.removeChild(container);
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
      this.desPos.position.y = 0.7 * this.props.xdes - 140.0;
      this.plate.position.y = 0.7 * this.props.x - 140.0;
      console.log(this.plate.position.y);
      /*
          this.cube.position.x = this.props.xdes 
          this.cube2.position.x = this.props.x 
      
          if(this.cube2.position.x > this.cube.position.x - 50 && this.cube2.position.x < this.cube.position.x + 50){
            this.points += 1;
            console.log(this.points);
          }
       */

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
          width: '300px',
          height: '400px'
        },
        ref: function ref(mount) {
          _this2.mount = mount;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, "Hello");
    }
  }]);

  return Follow_traj;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function mapStateToProps(state) {
  //map state variables to the component's state 
  return {
    x: state.x,
    xdes: state.xdes
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {} //add importing action functions here
)(Follow_traj));

/***/ })

})
//# sourceMappingURL=index.js.06ab9f60b7880fc947ed.hot-update.js.map