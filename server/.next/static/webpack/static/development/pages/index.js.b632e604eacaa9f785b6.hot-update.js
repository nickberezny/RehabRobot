webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./games/Race_game.js":
/*!****************************!*\
  !*** ./games/Race_game.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _src_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/actions */ "./src/actions.js");
var _jsxFileName = "C:\\Users\\nicho_000\\Documents\\RehabRobot\\server\\games\\Race_game.js";

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

var Race_game =
/*#__PURE__*/
function (_Component) {
  _inherits(Race_game, _Component);

  function Race_game(props) {
    var _this;

    _classCallCheck(this, Race_game);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Race_game).call(this, props));
    _this.start = _this.start.bind(_assertThisInitialized(_this));
    _this.stop = _this.stop.bind(_assertThisInitialized(_this));
    _this.animate = _this.animate.bind(_assertThisInitialized(_this));
    _this.move_object = _this.move_object.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Race_game, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var theta1 = 0.0;
      var theta2 = 0.0;
      var theta3 = 0.0;
      var race_speed1 = 0.5;
      var race_speed2 = 0.55;
      var race_speed3 = 0.48;
      var prev_x;
      var prev_time;
      var curr_time;
      var group = new three__WEBPACK_IMPORTED_MODULE_2__["Group"]();
      var width = this.mount.clientWidth;
      var height = this.mount.clientHeight;
      var scene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
      scene.background = new three__WEBPACK_IMPORTED_MODULE_2__["Color"](0x99ccff);
      var camera = new three__WEBPACK_IMPORTED_MODULE_2__["PerspectiveCamera"](90, window.innerWidth / window.innerHeight, 0.1, 800);
      camera.position.set(-95, -50, 30); //camera.rotation.set(1.5,0.0,0.0);

      scene.add(camera);
      var renderer = new three__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"]({
        antialias: true
      });
      renderer.setSize(width, height);
      var plateMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({
        color: 0xcc6600
      });
      var plateMaterial2 = new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({
        color: 0x009933
      });
      var other1Material = new three__WEBPACK_IMPORTED_MODULE_2__["MeshLambertMaterial"]({
        color: 0xff7272
      });
      var mainMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshLambertMaterial"]({
        color: 0xFFA500
      });
      var other2Material = new three__WEBPACK_IMPORTED_MODULE_2__["MeshLambertMaterial"]({
        color: 0xD4D1C8
      });
      var boxMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshLambertMaterial"]({
        color: 0x99ccff
      });
      var textureLoader = new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]();
      var texture_grass = textureLoader.load("static/textures/grass.jpg");
      var material_grass = new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({
        color: 0xffffff,
        map: texture_grass
      });
      var texture_track = textureLoader.load("static/textures/track.jpg");
      var material_track = new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({
        color: 0xffffff,
        map: texture_track
      });
      texture_grass.wrapS = texture_grass.wrapT = three__WEBPACK_IMPORTED_MODULE_2__["RepeatWrapping"];
      texture_grass.repeat.set(64, 64);
      var texture_grass2 = textureLoader.load("static/textures/grass.jpg");
      texture_grass2.wrapS = texture_grass2.wrapT = three__WEBPACK_IMPORTED_MODULE_2__["RepeatWrapping"];
      texture_grass2.repeat.set(4, 4);
      var material_grass2 = new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({
        color: 0xffffff,
        map: texture_grass2
      });
      texture_track.wrapS = texture_track.wrapT = three__WEBPACK_IMPORTED_MODULE_2__["RepeatWrapping"];
      texture_track.repeat.set(8, 8);
      var circle = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["CircleBufferGeometry"](100, 20, 0, Math.PI * 2), material_track);
      circle.position.set(0, -100, 0);
      scene.add(circle);
      var circle2 = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["CircleBufferGeometry"](100, 20, 0, Math.PI * 2), material_track);
      circle2.position.set(0, 100, 0);
      scene.add(circle2);
      var plate = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["PlaneBufferGeometry"](200, 200, 4, 4), material_track);
      plate.position.set(0, 0, 0);
      scene.add(plate);
      var circle3 = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["CircleBufferGeometry"](60, 20, 0, Math.PI * 2), material_grass2);
      circle3.position.set(0, -100, 0.11);
      scene.add(circle3);
      var circle4 = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["CircleBufferGeometry"](60, 20, 0, Math.PI * 2), material_grass2);
      circle4.position.set(0, 100, 0.11);
      scene.add(circle4);
      var plate2 = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["PlaneBufferGeometry"](120, 200, 4, 4), material_grass2);
      plate2.position.set(0, 0, 0.10);
      scene.add(plate2);
      var ground = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["PlaneBufferGeometry"](2000, 2000, 4, 4), material_grass);
      ground.position.set(0, 0, -0.1);
      scene.add(ground);
      var character = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["TetrahedronBufferGeometry"](5, 0), mainMaterial);
      character.position.set(-80, 0, 5);
      scene.add(character);
      var other = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["BoxBufferGeometry"](5, 5, 5, 4, 4, 4), other1Material);
      other.position.set(-90, 0, 5);
      scene.add(other);
      var other2 = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["BoxBufferGeometry"](5, 5, 5, 4, 4, 4), other2Material);
      other2.position.set(-70, 0, 5);
      scene.add(other2);
      var box1 = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["BoxBufferGeometry"](5000, 5, 1000), boxMaterial);
      box1.position.set(0, 350, 0);
      scene.add(box1);
      var spotLight1 = new three__WEBPACK_IMPORTED_MODULE_2__["SpotLight"](0xffffff, 1);
      spotLight1.position.set(-width / 3, 200, 200);
      var light = new three__WEBPACK_IMPORTED_MODULE_2__["HemisphereLight"](0xffffff, 0xffffff, 1);
      scene.add(light);
      scene.add(spotLight1);
      scene.add(camera);
      this.character = character;
      this.other = other;
      this.other2 = other2;
      this.scene = scene;
      this.camera = camera;
      this.renderer = renderer;
      this.theta1 = theta1;
      this.theta2 = theta2;
      this.theta3 = theta3;
      this.race_speed1 = race_speed1;
      this.race_speed2 = race_speed2;
      this.race_speed3 = race_speed3;
      this.prev_x = prev_x;
      this.prev_time = prev_time;
      this.curr_time = curr_time;
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
    key: "move_object",
    value: function move_object(object, theta, radius, race_speed) {
      if (object.position.x > 0) {
        var race_dir = 1.0;
      } else {
        var race_dir = -1.0;
      }

      if (object.position.y > 0) {
        var turn_dir = 1.0;
      } else {
        var turn_dir = -1.0;
      }

      if (Math.abs(object.position.y) < 100) {
        object.position.y -= race_speed * race_dir;
      } else {
        object.position.x = -turn_dir * radius * Math.cos(theta);
        object.position.y = turn_dir * (100.0 + radius * Math.sin(theta));
        object.rotation.z += theta;
      }
    }
  }, {
    key: "animate",
    value: function animate() {
      this.race_speed1 = (200.0 - Math.abs(this.props.v - this.props.vdes)) / 300.0;

      if (Math.abs(this.character.position.y) >= 100) {
        this.theta1 += this.race_speed1 / 90.0;
      } else {
        this.theta1 = 0.0;
      }

      if (Math.abs(this.other.position.y) >= 100) {
        this.theta2 += this.race_speed2 / 90.0;
      } else {
        this.theta2 = 0.0;
      }

      if (Math.abs(this.other2.position.y) >= 100) {
        this.theta3 += this.race_speed3 / 90.0;
      } else {
        this.theta3 = 0.0;
      }

      this.move_object(this.character, this.theta1, 80.0, this.race_speed1);
      this.move_object(this.other, this.theta2, 90.0, this.race_speed2);
      this.move_object(this.other2, this.theta3, 70.0, this.race_speed3);
      this.camera.position.x = this.character.position.x - 40.0 * Math.sin(this.character.rotation.z);
      this.camera.position.y = this.character.position.y - 40.0 * Math.cos(this.character.rotation.z);
      console.log(this.character.rotation.z);
      this.character.rotation.x += 0.1;
      this.character.rotation.y += 0.05;
      this.other.rotation.x += 0.1;
      this.other.rotation.y += 0.05;
      this.other2.rotation.x += 0.1;
      this.other2.rotation.y += 0.05;
      this.camera.up = new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 1);
      this.camera.lookAt(this.character.position);
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
          width: '900px',
          height: '400px'
        },
        ref: function ref(mount) {
          _this2.mount = mount;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      });
    }
  }]);

  return Race_game;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function mapStateToProps(state) {
  //map state variables to the component's state 
  return {
    x: state.x,
    xdes: state.xdes,
    v: state.v,
    vdes: state.vdes
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {} //add importing action functions here
)(Race_game));

/***/ })

})
//# sourceMappingURL=index.js.b632e604eacaa9f785b6.hot-update.js.map