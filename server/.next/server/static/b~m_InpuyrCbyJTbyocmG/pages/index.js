module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("three");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Radio");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronLeft");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Build");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Movie");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Settings");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/RadioGroup");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormLabel");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(44);


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("react-websocket");

/***/ }),
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(22);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(2);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(8);

// CONCATENATED MODULE: ./src/actions.js
/*
 * action types
 */
var CHANGE_TEXT = 'CHANGE_TEXT';
var TOGGLE_DRAWER = 'TOGGLE_DRAWER';
var OPEN_PAGE = 'OPEN_PAGE';
var SELECT_CONTROLLER = 'SELECT_CONTROLLER';
var SET_PARAM = 'SET_PARAM';
var RUN_ROBOT = 'RUN_ROBOT';
var SET_SOCKET = 'SET_SOCKET';
var SET_USER = 'SET_USER';
var SET_GAME = 'SET_GAME';
var SET_VALUE = 'SET_VALUE';
/*
 * action creators
 */

function changeText() {
  return {
    type: CHANGE_TEXT,
    text: "Click!"
  };
}
function toggleDrawer() {
  return {
    type: TOGGLE_DRAWER
  };
}
function openPage(id) {
  return {
    type: OPEN_PAGE,
    id: id
  };
}
function setParam(id, param) {
  return {
    type: SET_PARAM,
    param: param,
    id: id
  };
}
var selectController = function selectController(controller) {
  return {
    type: SELECT_CONTROLLER,
    controller: controller
  };
};
function runRobot() {
  return {
    type: RUN_ROBOT
  };
}
function setSocket(socket) {
  return {
    type: SET_SOCKET,
    socket: socket
  };
}
function setUser(value) {
  return {
    type: SET_USER,
    value: value
  };
}
function setGame(game) {
  return {
    type: SET_GAME,
    game: game
  };
}
function setValue(id, value) {
  return {
    type: SET_VALUE,
    id: id,
    value: value
  };
}
// CONCATENATED MODULE: ./src/reducers.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var initState = {
  user: 3,
  menuOpen: false,
  activePage: 1,
  socket: null,
  run: 0,
  P: 2,
  D: 1,
  xdes: 0,
  K: 10,
  B: 0.5,
  M: 0.09,
  x: 0.5,
  v: 0,
  vdes: 0,
  game: 1,
  xmax: 100.0,
  vmax: 0.0,
  k_contact: 0.0,
  m_contact: 0.0,
  k_assist: 0.0,
  k_floor: 0.0,
  k_gravity: 0.0,
  exp: 1,
  stage: 1,
  home: 0,
  x_ball: 0.0
};

function todoApp() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case TOGGLE_DRAWER:
      return Object.assign({}, state, {
        menuOpen: !state.menuOpen
      });
      break;

    case OPEN_PAGE:
      return Object.assign({}, state, {
        activePage: action.id
      });
      break;

    case SELECT_CONTROLLER:
      console.log(action.controller);
      return Object.assign({}, state, {
        controller: action.controller
      });
      break;

    case SET_PARAM:
      console.log(action.id);
      console.log(action.param);
      return Object.assign({}, state, _defineProperty({}, action.id, action.param));
      break;

    case RUN_ROBOT:
      console.log("Run!");
      return Object.assign({}, state, {
        run: 1
      });
      break;

    case SET_SOCKET:
      return Object.assign({}, state, {
        socket: action.socket
      });
      break;

    case SET_USER:
      return Object.assign({}, state, {
        user: action.value
      });
      break;

    case SET_GAME:
      return Object.assign({}, state, {
        game: action.game
      });
      break;

    case SET_VALUE:
      return Object.assign({}, state, _defineProperty({}, action.id, action.value));
      break;

    default:
      return state;
  }
}

/* harmony default export */ var reducers = (todoApp);
// EXTERNAL MODULE: external "@material-ui/core/Drawer"
var Drawer_ = __webpack_require__(23);
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_);

// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__(17);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "@material-ui/core/Toolbar"
var Toolbar_ = __webpack_require__(18);
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);

// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__(9);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);

// EXTERNAL MODULE: external "@material-ui/core/MenuItem"
var MenuItem_ = __webpack_require__(5);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__(4);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/TextField"
var TextField_ = __webpack_require__(19);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);

// EXTERNAL MODULE: external "@material-ui/core/Divider"
var Divider_ = __webpack_require__(20);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__(10);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/icons/Menu"
var Menu_ = __webpack_require__(21);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);

// EXTERNAL MODULE: external "@material-ui/icons/ChevronLeft"
var ChevronLeft_ = __webpack_require__(24);
var ChevronLeft_default = /*#__PURE__*/__webpack_require__.n(ChevronLeft_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(7);

// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__(12);
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemIcon"
var ListItemIcon_ = __webpack_require__(13);
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemText"
var ListItemText_ = __webpack_require__(14);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);

// EXTERNAL MODULE: external "@material-ui/icons/Build"
var Build_ = __webpack_require__(25);
var Build_default = /*#__PURE__*/__webpack_require__.n(Build_);

// EXTERNAL MODULE: external "@material-ui/icons/Movie"
var Movie_ = __webpack_require__(26);
var Movie_default = /*#__PURE__*/__webpack_require__.n(Movie_);

// EXTERNAL MODULE: external "@material-ui/icons/Settings"
var Settings_ = __webpack_require__(27);
var Settings_default = /*#__PURE__*/__webpack_require__.n(Settings_);

// CONCATENATED MODULE: ./components/DrawerList.jsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }













var ListStyles = {
  width: 230,
  maxWidth: 360
};

var DrawerList_DrawerList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DrawerList, _React$Component);

  function DrawerList(props) {
    var _this;

    _classCallCheck(this, DrawerList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DrawerList).call(this, props));
    _this.pageOne = _this.pageOne.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.pageTwo = _this.pageTwo.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.pageThree = _this.pageThree.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(DrawerList, [{
    key: "pageOne",
    value: function pageOne() {
      this.props.openPage(1);
    }
  }, {
    key: "pageTwo",
    value: function pageTwo() {
      this.props.openPage(2);
    }
  }, {
    key: "pageThree",
    value: function pageThree() {
      this.props.openPage(3);
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        style: ListStyles
      }, external_react_default.a.createElement(List_default.a, {
        component: "nav"
      }, external_react_default.a.createElement(ListItem_default.a, {
        button: true,
        onClick: this.pageOne
      }, external_react_default.a.createElement(ListItemIcon_default.a, null, external_react_default.a.createElement(Build_default.a, null)), external_react_default.a.createElement(ListItemText_default.a, {
        primary: "Setup"
      })), external_react_default.a.createElement(ListItem_default.a, {
        button: true,
        onClick: this.pageTwo
      }, external_react_default.a.createElement(ListItemIcon_default.a, null, external_react_default.a.createElement(Movie_default.a, null)), external_react_default.a.createElement(ListItemText_default.a, {
        primary: "Game"
      })), external_react_default.a.createElement(ListItem_default.a, {
        button: true,
        onClick: this.pageThree
      }, external_react_default.a.createElement(ListItemIcon_default.a, null, external_react_default.a.createElement(Settings_default.a, null)), external_react_default.a.createElement(ListItemText_default.a, {
        primary: "Settings"
      }))));
    }
  }]);

  return DrawerList;
}(external_react_default.a.Component);

function mapStateToProps(state) {
  return {};
}

/* harmony default export */ var components_DrawerList = (Object(external_react_redux_["connect"])(mapStateToProps, {
  openPage: openPage
})(DrawerList_DrawerList));
// CONCATENATED MODULE: ./components/Drawer.jsx
function Drawer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Drawer_typeof = function _typeof(obj) { return typeof obj; }; } else { Drawer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Drawer_typeof(obj); }

function Drawer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Drawer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Drawer_createClass(Constructor, protoProps, staticProps) { if (protoProps) Drawer_defineProperties(Constructor.prototype, protoProps); if (staticProps) Drawer_defineProperties(Constructor, staticProps); return Constructor; }

function Drawer_possibleConstructorReturn(self, call) { if (call && (Drawer_typeof(call) === "object" || typeof call === "function")) { return call; } return Drawer_assertThisInitialized(self); }

function Drawer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Drawer_getPrototypeOf(o) { Drawer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Drawer_getPrototypeOf(o); }

function Drawer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Drawer_setPrototypeOf(subClass, superClass); }

function Drawer_setPrototypeOf(o, p) { Drawer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Drawer_setPrototypeOf(o, p); }
















var drawerHeader = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '0 8px',
  width: 240
};
var drawerContent = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-mid',
  padding: '0 8px',
  width: 240
};

var Drawer_DrawerMenu =
/*#__PURE__*/
function (_React$Component) {
  Drawer_inherits(DrawerMenu, _React$Component);

  function DrawerMenu(props) {
    Drawer_classCallCheck(this, DrawerMenu);

    return Drawer_possibleConstructorReturn(this, Drawer_getPrototypeOf(DrawerMenu).call(this, props));
  }

  Drawer_createClass(DrawerMenu, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(Drawer_default.a, {
        variant: "persistent",
        anchor: "left",
        open: this.props.menuOpen
      }, external_react_default.a.createElement("div", {
        style: drawerHeader
      }, external_react_default.a.createElement(IconButton_default.a, {
        onClick: this.props.toggleDrawer
      }, external_react_default.a.createElement(ChevronLeft_default.a, null))), external_react_default.a.createElement(Divider_default.a, null), external_react_default.a.createElement("div", {
        style: drawerContent
      }, external_react_default.a.createElement(List_default.a, null, external_react_default.a.createElement(components_DrawerList, null))));
    }
  }]);

  return DrawerMenu;
}(external_react_default.a.Component);

function Drawer_mapStateToProps(state) {
  return {
    menuOpen: state.menuOpen
  };
}

/* harmony default export */ var Drawer = (Object(external_react_redux_["connect"])(Drawer_mapStateToProps, {
  toggleDrawer: toggleDrawer
})(Drawer_DrawerMenu));
// CONCATENATED MODULE: ./components/Topbar.jsx
function Topbar_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Topbar_typeof = function _typeof(obj) { return typeof obj; }; } else { Topbar_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Topbar_typeof(obj); }

function Topbar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Topbar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Topbar_createClass(Constructor, protoProps, staticProps) { if (protoProps) Topbar_defineProperties(Constructor.prototype, protoProps); if (staticProps) Topbar_defineProperties(Constructor, staticProps); return Constructor; }

function Topbar_possibleConstructorReturn(self, call) { if (call && (Topbar_typeof(call) === "object" || typeof call === "function")) { return call; } return Topbar_assertThisInitialized(self); }

function Topbar_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Topbar_getPrototypeOf(o) { Topbar_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Topbar_getPrototypeOf(o); }

function Topbar_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Topbar_setPrototypeOf(subClass, superClass); }

function Topbar_setPrototypeOf(o, p) { Topbar_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Topbar_setPrototypeOf(o, p); }










var Topbar_Topbar =
/*#__PURE__*/
function (_React$Component) {
  Topbar_inherits(Topbar, _React$Component);

  function Topbar(props) {
    var _this;

    Topbar_classCallCheck(this, Topbar);

    _this = Topbar_possibleConstructorReturn(this, Topbar_getPrototypeOf(Topbar).call(this, props));
    _this.state = {
      menuIconStyle: {
        marginLeft: 6,
        marginRight: 20
      },
      appbarStyle: {
        display: 'flex',
        flexGrow: 1
      }
    };
    return _this;
  }

  Topbar_createClass(Topbar, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(AppBar_default.a, {
        position: "fixed",
        style: this.state.appbarStyle
      }, external_react_default.a.createElement(Toolbar_default.a, null, external_react_default.a.createElement(IconButton_default.a, {
        color: "inherit",
        "aria-label": "Menu",
        style: this.state.menuIconStyle,
        onClick: this.props.toggleDrawer
      }, external_react_default.a.createElement(Menu_default.a, null)), external_react_default.a.createElement(Typography_default.a, {
        variant: "title",
        color: "inherit"
      }, this.props.title)));
    }
  }]);

  return Topbar;
}(external_react_default.a.Component);

function Topbar_mapStateToProps(state) {
  //map state variables to the component's state 
  return {};
}

/* harmony default export */ var components_Topbar = (Object(external_react_redux_["connect"])(Topbar_mapStateToProps, {
  toggleDrawer: toggleDrawer //add importing action functions here

})(Topbar_Topbar));
// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(3);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "socket.io-client"
var external_socket_io_client_ = __webpack_require__(6);
var external_socket_io_client_default = /*#__PURE__*/__webpack_require__.n(external_socket_io_client_);

// CONCATENATED MODULE: ./components/Generic/SetButton.jsx
function SetButton_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SetButton_typeof = function _typeof(obj) { return typeof obj; }; } else { SetButton_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SetButton_typeof(obj); }

function SetButton_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SetButton_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SetButton_createClass(Constructor, protoProps, staticProps) { if (protoProps) SetButton_defineProperties(Constructor.prototype, protoProps); if (staticProps) SetButton_defineProperties(Constructor, staticProps); return Constructor; }

function SetButton_possibleConstructorReturn(self, call) { if (call && (SetButton_typeof(call) === "object" || typeof call === "function")) { return call; } return SetButton_assertThisInitialized(self); }

function SetButton_getPrototypeOf(o) { SetButton_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SetButton_getPrototypeOf(o); }

function SetButton_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SetButton_setPrototypeOf(subClass, superClass); }

function SetButton_setPrototypeOf(o, p) { SetButton_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SetButton_setPrototypeOf(o, p); }

function SetButton_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var SetButton_RunButton =
/*#__PURE__*/
function (_React$Component) {
  SetButton_inherits(RunButton, _React$Component);

  function RunButton(props) {
    var _this;

    SetButton_classCallCheck(this, RunButton);

    _this = SetButton_possibleConstructorReturn(this, SetButton_getPrototypeOf(RunButton).call(this, props));
    _this.run = _this.run.bind(SetButton_assertThisInitialized(SetButton_assertThisInitialized(_this)));
    return _this;
  }

  SetButton_createClass(RunButton, [{
    key: "run",
    value: function run() {
      //change this to send different data

      /*
      let dataToSend = 'SET_P' + this.props.P + '_D' + this.props.D + '_xdes' + this.props.xdes +
                       '_xmax' + this.props.xmax + '_vmax' + this.props.vmax +  
                       '_K' + this.props.K + '_B' + this.props.B +'_M' + this.props.M + '_GAME' + this.props.game + '_END';
      */
      var dataToSend = 'SET_exp' + this.props.exp + '_';
      console.log(dataToSend);
      this.props.socket.emit('START_ROBOT', dataToSend);

      if (this.props.exp == 3) {
        this.props.setParam('game', 3);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        style: {
          padding: 12
        }
      }, external_react_default.a.createElement(Button_default.a, {
        variant: "contained",
        color: "primary",
        onClick: this.run
      }, this.props.text));
    }
  }]);

  return RunButton;
}(external_react_default.a.Component);

function SetButton_mapStateToProps(state) {
  return {
    socket: state.socket,
    P: state.P,
    D: state.D,
    xdes: state.xdes,
    K: state.K,
    B: state.B,
    M: state.M,
    game: state.game,
    exp: state.exp
  };
}

/* harmony default export */ var SetButton = (Object(external_react_redux_["connect"])(SetButton_mapStateToProps, {
  runRobot: runRobot,
  setParam: setParam
})(SetButton_RunButton)); //
// CONCATENATED MODULE: ./components/Generic/RunButton.jsx
function RunButton_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { RunButton_typeof = function _typeof(obj) { return typeof obj; }; } else { RunButton_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return RunButton_typeof(obj); }

function RunButton_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function RunButton_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function RunButton_createClass(Constructor, protoProps, staticProps) { if (protoProps) RunButton_defineProperties(Constructor.prototype, protoProps); if (staticProps) RunButton_defineProperties(Constructor, staticProps); return Constructor; }

function RunButton_possibleConstructorReturn(self, call) { if (call && (RunButton_typeof(call) === "object" || typeof call === "function")) { return call; } return RunButton_assertThisInitialized(self); }

function RunButton_getPrototypeOf(o) { RunButton_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return RunButton_getPrototypeOf(o); }

function RunButton_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) RunButton_setPrototypeOf(subClass, superClass); }

function RunButton_setPrototypeOf(o, p) { RunButton_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return RunButton_setPrototypeOf(o, p); }

function RunButton_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var RunButton_RunButton =
/*#__PURE__*/
function (_React$Component) {
  RunButton_inherits(RunButton, _React$Component);

  function RunButton(props) {
    var _this;

    RunButton_classCallCheck(this, RunButton);

    _this = RunButton_possibleConstructorReturn(this, RunButton_getPrototypeOf(RunButton).call(this, props));
    _this.run = _this.run.bind(RunButton_assertThisInitialized(RunButton_assertThisInitialized(_this)));
    return _this;
  }

  RunButton_createClass(RunButton, [{
    key: "run",
    value: function run() {
      //change this to send different data
      if (this.props.home == 1) {
        var dataToSend = 'RUN';
        console.log(dataToSend);
        this.props.socket.emit('START_ROBOT', dataToSend);
        this.props.setValue('run', 1);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        style: {
          padding: 12
        }
      }, external_react_default.a.createElement(Button_default.a, {
        variant: "contained",
        color: "primary",
        onClick: this.run
      }, this.props.text));
    }
  }]);

  return RunButton;
}(external_react_default.a.Component);

function RunButton_mapStateToProps(state) {
  return {
    socket: state.socket,
    stage: state.stage,
    home: state.home
  };
}

/* harmony default export */ var Generic_RunButton = (Object(external_react_redux_["connect"])(RunButton_mapStateToProps, {
  runRobot: runRobot,
  setValue: setValue
})(RunButton_RunButton)); //
// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__(33);

// CONCATENATED MODULE: ./components/Generic/InputText.jsx
function InputText_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { InputText_typeof = function _typeof(obj) { return typeof obj; }; } else { InputText_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return InputText_typeof(obj); }

function InputText_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function InputText_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function InputText_createClass(Constructor, protoProps, staticProps) { if (protoProps) InputText_defineProperties(Constructor.prototype, protoProps); if (staticProps) InputText_defineProperties(Constructor, staticProps); return Constructor; }

function InputText_possibleConstructorReturn(self, call) { if (call && (InputText_typeof(call) === "object" || typeof call === "function")) { return call; } return InputText_assertThisInitialized(self); }

function InputText_getPrototypeOf(o) { InputText_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return InputText_getPrototypeOf(o); }

function InputText_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) InputText_setPrototypeOf(subClass, superClass); }

function InputText_setPrototypeOf(o, p) { InputText_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return InputText_setPrototypeOf(o, p); }

function InputText_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function InputText_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var InputText_InputText =
/*#__PURE__*/
function (_React$Component) {
  InputText_inherits(InputText, _React$Component);

  function InputText(props) {
    var _this;

    InputText_classCallCheck(this, InputText);

    _this = InputText_possibleConstructorReturn(this, InputText_getPrototypeOf(InputText).call(this, props));

    InputText_defineProperty(InputText_assertThisInitialized(InputText_assertThisInitialized(_this)), "onInputChange", function (event) {
      console.log("New parameter");
      var name = _this.props.paramName;

      _this.props.setParam(name, event.target.value);
    });

    return _this;
  }

  InputText_createClass(InputText, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(TextField_default.a, {
        id: "TextInput",
        label: this.props.text,
        value: this.props.textValue,
        onChange: this.onInputChange,
        margin: "normal"
      }));
    }
  }]);

  return InputText;
}(external_react_default.a.Component);

function InputText_mapStateToProps(state) {
  return {};
}

/* harmony default export */ var Generic_InputText = (Object(external_react_redux_["connect"])(InputText_mapStateToProps, {
  setParam: setParam
})(InputText_InputText));
// EXTERNAL MODULE: external "@material-ui/core/Select"
var Select_ = __webpack_require__(28);
var Select_default = /*#__PURE__*/__webpack_require__.n(Select_);

// EXTERNAL MODULE: external "@material-ui/core/FormControl"
var FormControl_ = __webpack_require__(11);
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);

// EXTERNAL MODULE: external "@material-ui/core/InputLabel"
var InputLabel_ = __webpack_require__(29);
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel_);

// CONCATENATED MODULE: ./components/Generic/Dropdown.jsx
function Dropdown_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Dropdown_typeof = function _typeof(obj) { return typeof obj; }; } else { Dropdown_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Dropdown_typeof(obj); }

function Dropdown_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Dropdown_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Dropdown_createClass(Constructor, protoProps, staticProps) { if (protoProps) Dropdown_defineProperties(Constructor.prototype, protoProps); if (staticProps) Dropdown_defineProperties(Constructor, staticProps); return Constructor; }

function Dropdown_possibleConstructorReturn(self, call) { if (call && (Dropdown_typeof(call) === "object" || typeof call === "function")) { return call; } return Dropdown_assertThisInitialized(self); }

function Dropdown_getPrototypeOf(o) { Dropdown_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Dropdown_getPrototypeOf(o); }

function Dropdown_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Dropdown_setPrototypeOf(subClass, superClass); }

function Dropdown_setPrototypeOf(o, p) { Dropdown_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Dropdown_setPrototypeOf(o, p); }

function Dropdown_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var Dropdown_Dropdown =
/*#__PURE__*/
function (_React$Component) {
  Dropdown_inherits(Dropdown, _React$Component);

  function Dropdown(props) {
    var _this;

    Dropdown_classCallCheck(this, Dropdown);

    _this = Dropdown_possibleConstructorReturn(this, Dropdown_getPrototypeOf(Dropdown).call(this, props));
    _this.handleChange = _this.handleChange.bind(Dropdown_assertThisInitialized(Dropdown_assertThisInitialized(_this)));
    return _this;
  }

  Dropdown_createClass(Dropdown, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.props.setValue(this.props.id, event.target.value);
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        style: {
          padding: 12
        }
      }, external_react_default.a.createElement(FormControl_default.a, null, external_react_default.a.createElement(InputLabel_default.a, null, this.props.text), external_react_default.a.createElement(Select_default.a, {
        value: this.props.value,
        onChange: this.handleChange
      }, external_react_default.a.createElement(MenuItem_default.a, {
        value: ""
      }, external_react_default.a.createElement("em", null, "None")), external_react_default.a.createElement(MenuItem_default.a, {
        value: 1
      }, this.props.select1), external_react_default.a.createElement(MenuItem_default.a, {
        value: 2
      }, this.props.select2), external_react_default.a.createElement(MenuItem_default.a, {
        value: 3
      }, this.props.select3))));
    }
  }]);

  return Dropdown;
}(external_react_default.a.Component);

function Dropdown_mapStateToProps(state) {
  return {
    game: state.game
  };
}

/* harmony default export */ var Generic_Dropdown = (Object(external_react_redux_["connect"])(Dropdown_mapStateToProps, {
  setValue: setValue
})(Dropdown_Dropdown));
// CONCATENATED MODULE: ./components/Setups/FollowTraj_Dev.jsx
function FollowTraj_Dev_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FollowTraj_Dev_typeof = function _typeof(obj) { return typeof obj; }; } else { FollowTraj_Dev_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FollowTraj_Dev_typeof(obj); }

function FollowTraj_Dev_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FollowTraj_Dev_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FollowTraj_Dev_createClass(Constructor, protoProps, staticProps) { if (protoProps) FollowTraj_Dev_defineProperties(Constructor.prototype, protoProps); if (staticProps) FollowTraj_Dev_defineProperties(Constructor, staticProps); return Constructor; }

function FollowTraj_Dev_possibleConstructorReturn(self, call) { if (call && (FollowTraj_Dev_typeof(call) === "object" || typeof call === "function")) { return call; } return FollowTraj_Dev_assertThisInitialized(self); }

function FollowTraj_Dev_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function FollowTraj_Dev_getPrototypeOf(o) { FollowTraj_Dev_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return FollowTraj_Dev_getPrototypeOf(o); }

function FollowTraj_Dev_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) FollowTraj_Dev_setPrototypeOf(subClass, superClass); }

function FollowTraj_Dev_setPrototypeOf(o, p) { FollowTraj_Dev_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return FollowTraj_Dev_setPrototypeOf(o, p); }






var FollowTraj_Dev_FollowTraj_Dev =
/*#__PURE__*/
function (_React$Component) {
  FollowTraj_Dev_inherits(FollowTraj_Dev, _React$Component);

  function FollowTraj_Dev(props) {
    FollowTraj_Dev_classCallCheck(this, FollowTraj_Dev);

    return FollowTraj_Dev_possibleConstructorReturn(this, FollowTraj_Dev_getPrototypeOf(FollowTraj_Dev).call(this, props));
  }

  FollowTraj_Dev_createClass(FollowTraj_Dev, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Generic_InputText, {
        text: "Max Velocity",
        textValue: this.props.vmax,
        paramName: "vmax"
      }), external_react_default.a.createElement(Generic_InputText, {
        text: "Max Position",
        textValue: this.props.xmax,
        paramName: "xmax"
      }), external_react_default.a.createElement(Generic_InputText, {
        text: "Admittance K",
        textValue: this.props.K,
        paramName: "K"
      }), external_react_default.a.createElement(Generic_InputText, {
        text: "Admittance B",
        textValue: this.props.B,
        paramName: "B"
      }), external_react_default.a.createElement(Generic_InputText, {
        text: "Admittance M",
        textValue: this.props.M,
        paramName: "M"
      }), external_react_default.a.createElement(Generic_InputText, {
        text: "P Gain",
        textValue: this.props.P,
        paramName: "P"
      }), external_react_default.a.createElement(Generic_InputText, {
        text: "D Gain",
        textValue: this.props.D,
        paramName: "D"
      }));
    }
  }]);

  return FollowTraj_Dev;
}(external_react_default.a.Component);

function FollowTraj_Dev_mapStateToProps(state) {
  return {
    P: state.P,
    D: state.D,
    xmax: state.xmax,
    vmax: state.vmax,
    K: state.K,
    B: state.B,
    M: state.M
  };
}

/* harmony default export */ var Setups_FollowTraj_Dev = (Object(external_react_redux_["connect"])(FollowTraj_Dev_mapStateToProps, {})(FollowTraj_Dev_FollowTraj_Dev)); //
// CONCATENATED MODULE: ./components/Setups/FollowVel_Dev.jsx
function FollowVel_Dev_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FollowVel_Dev_typeof = function _typeof(obj) { return typeof obj; }; } else { FollowVel_Dev_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FollowVel_Dev_typeof(obj); }

function FollowVel_Dev_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FollowVel_Dev_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FollowVel_Dev_createClass(Constructor, protoProps, staticProps) { if (protoProps) FollowVel_Dev_defineProperties(Constructor.prototype, protoProps); if (staticProps) FollowVel_Dev_defineProperties(Constructor, staticProps); return Constructor; }

function FollowVel_Dev_possibleConstructorReturn(self, call) { if (call && (FollowVel_Dev_typeof(call) === "object" || typeof call === "function")) { return call; } return FollowVel_Dev_assertThisInitialized(self); }

function FollowVel_Dev_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function FollowVel_Dev_getPrototypeOf(o) { FollowVel_Dev_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return FollowVel_Dev_getPrototypeOf(o); }

function FollowVel_Dev_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) FollowVel_Dev_setPrototypeOf(subClass, superClass); }

function FollowVel_Dev_setPrototypeOf(o, p) { FollowVel_Dev_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return FollowVel_Dev_setPrototypeOf(o, p); }






var FollowVel_Dev_FollowVel_Dev =
/*#__PURE__*/
function (_React$Component) {
  FollowVel_Dev_inherits(FollowVel_Dev, _React$Component);

  function FollowVel_Dev(props) {
    FollowVel_Dev_classCallCheck(this, FollowVel_Dev);

    return FollowVel_Dev_possibleConstructorReturn(this, FollowVel_Dev_getPrototypeOf(FollowVel_Dev).call(this, props));
  }

  FollowVel_Dev_createClass(FollowVel_Dev, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Generic_InputText, {
        text: "Desired Velocity",
        textValue: this.props.vmax,
        paramName: "vmax"
      }), external_react_default.a.createElement(Generic_InputText, {
        text: "Max Position",
        textValue: this.props.xmax,
        paramName: "xmax"
      }), external_react_default.a.createElement(Generic_InputText, {
        text: "Admittance K",
        textValue: this.props.K,
        paramName: "K"
      }), external_react_default.a.createElement(Generic_InputText, {
        text: "Admittance B",
        textValue: this.props.B,
        paramName: "B"
      }), external_react_default.a.createElement(Generic_InputText, {
        text: "Admittance M",
        textValue: this.props.M,
        paramName: "M"
      }), external_react_default.a.createElement(Generic_InputText, {
        text: "P Gain",
        textValue: this.props.P,
        paramName: "P"
      }), external_react_default.a.createElement(Generic_InputText, {
        text: "D Gain",
        textValue: this.props.D,
        paramName: "D"
      }));
    }
  }]);

  return FollowVel_Dev;
}(external_react_default.a.Component);

function FollowVel_Dev_mapStateToProps(state) {
  return {
    P: state.P,
    D: state.D,
    xmax: state.xmax,
    vmax: state.vmax,
    K: state.K,
    B: state.B,
    M: state.M
  };
}

/* harmony default export */ var Setups_FollowVel_Dev = (Object(external_react_redux_["connect"])(FollowVel_Dev_mapStateToProps, {})(FollowVel_Dev_FollowVel_Dev)); //
// CONCATENATED MODULE: ./components/Setups/Balance_Dev.jsx
function Balance_Dev_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Balance_Dev_typeof = function _typeof(obj) { return typeof obj; }; } else { Balance_Dev_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Balance_Dev_typeof(obj); }

function Balance_Dev_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Balance_Dev_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Balance_Dev_createClass(Constructor, protoProps, staticProps) { if (protoProps) Balance_Dev_defineProperties(Constructor.prototype, protoProps); if (staticProps) Balance_Dev_defineProperties(Constructor, staticProps); return Constructor; }

function Balance_Dev_possibleConstructorReturn(self, call) { if (call && (Balance_Dev_typeof(call) === "object" || typeof call === "function")) { return call; } return Balance_Dev_assertThisInitialized(self); }

function Balance_Dev_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Balance_Dev_getPrototypeOf(o) { Balance_Dev_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Balance_Dev_getPrototypeOf(o); }

function Balance_Dev_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Balance_Dev_setPrototypeOf(subClass, superClass); }

function Balance_Dev_setPrototypeOf(o, p) { Balance_Dev_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Balance_Dev_setPrototypeOf(o, p); }






var Balance_Dev_FollowVel_Dev =
/*#__PURE__*/
function (_React$Component) {
  Balance_Dev_inherits(FollowVel_Dev, _React$Component);

  function FollowVel_Dev(props) {
    Balance_Dev_classCallCheck(this, FollowVel_Dev);

    return Balance_Dev_possibleConstructorReturn(this, Balance_Dev_getPrototypeOf(FollowVel_Dev).call(this, props));
  }

  Balance_Dev_createClass(FollowVel_Dev, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Generic_InputText, {
        text: "Max Position",
        textValue: this.props.xmax,
        paramName: "xmax"
      }), external_react_default.a.createElement(Generic_InputText, {
        text: "Contact Stiffness",
        textValue: this.props.k_contact,
        paramName: "k_contact"
      }), external_react_default.a.createElement(Generic_InputText, {
        text: "Contact Object mass",
        textValue: this.props.m_contact,
        paramName: "m_contact"
      }), external_react_default.a.createElement(Generic_InputText, {
        text: "Admittance B",
        textValue: this.props.B,
        paramName: "B"
      }), external_react_default.a.createElement(Generic_InputText, {
        text: "Admittance M",
        textValue: this.props.M,
        paramName: "M"
      }), external_react_default.a.createElement(Generic_InputText, {
        text: "P Gain",
        textValue: this.props.P,
        paramName: "P"
      }), external_react_default.a.createElement(Generic_InputText, {
        text: "D Gain",
        textValue: this.props.D,
        paramName: "D"
      }));
    }
  }]);

  return FollowVel_Dev;
}(external_react_default.a.Component);

function Balance_Dev_mapStateToProps(state) {
  return {
    P: state.P,
    D: state.D,
    xmax: state.xmax,
    vmax: state.vmax,
    K: state.K,
    B: state.B,
    M: state.M,
    m_contact: state.m_contact,
    k_contact: state.k_contact
  };
}

/* harmony default export */ var Balance_Dev = (Object(external_react_redux_["connect"])(Balance_Dev_mapStateToProps, {})(Balance_Dev_FollowVel_Dev)); //
// CONCATENATED MODULE: ./components/Setups/Gait_Dev.jsx
function Gait_Dev_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Gait_Dev_typeof = function _typeof(obj) { return typeof obj; }; } else { Gait_Dev_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Gait_Dev_typeof(obj); }

function Gait_Dev_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Gait_Dev_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Gait_Dev_createClass(Constructor, protoProps, staticProps) { if (protoProps) Gait_Dev_defineProperties(Constructor.prototype, protoProps); if (staticProps) Gait_Dev_defineProperties(Constructor, staticProps); return Constructor; }

function Gait_Dev_possibleConstructorReturn(self, call) { if (call && (Gait_Dev_typeof(call) === "object" || typeof call === "function")) { return call; } return Gait_Dev_assertThisInitialized(self); }

function Gait_Dev_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Gait_Dev_getPrototypeOf(o) { Gait_Dev_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Gait_Dev_getPrototypeOf(o); }

function Gait_Dev_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Gait_Dev_setPrototypeOf(subClass, superClass); }

function Gait_Dev_setPrototypeOf(o, p) { Gait_Dev_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Gait_Dev_setPrototypeOf(o, p); }






var Gait_Dev_Gait_Dev =
/*#__PURE__*/
function (_React$Component) {
  Gait_Dev_inherits(Gait_Dev, _React$Component);

  function Gait_Dev(props) {
    Gait_Dev_classCallCheck(this, Gait_Dev);

    return Gait_Dev_possibleConstructorReturn(this, Gait_Dev_getPrototypeOf(Gait_Dev).call(this, props));
  }

  Gait_Dev_createClass(Gait_Dev, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Generic_InputText, {
        text: "Assistance Stiffness",
        textValue: this.props.k_assist,
        paramName: "k_assist"
      }), external_react_default.a.createElement(Generic_InputText, {
        text: "Floor Stiffness",
        textValue: this.props.k_floor,
        paramName: "k_floor"
      }), external_react_default.a.createElement(Generic_InputText, {
        text: "Gravity Stiffness",
        textValue: this.props.k_gravity,
        paramName: "k_gravity"
      }), external_react_default.a.createElement(Generic_InputText, {
        text: "Admittance B",
        textValue: this.props.B,
        paramName: "B"
      }), external_react_default.a.createElement(Generic_InputText, {
        text: "Admittance M",
        textValue: this.props.M,
        paramName: "M"
      }), external_react_default.a.createElement(Generic_InputText, {
        text: "P Gain",
        textValue: this.props.P,
        paramName: "P"
      }), external_react_default.a.createElement(Generic_InputText, {
        text: "D Gain",
        textValue: this.props.D,
        paramName: "D"
      }));
    }
  }]);

  return Gait_Dev;
}(external_react_default.a.Component);

function Gait_Dev_mapStateToProps(state) {
  return {
    P: state.P,
    D: state.D,
    k_assist: state.k_assist,
    k_floor: state.k_floor,
    k_gravity: state.k_gravity,
    B: state.B,
    M: state.M
  };
}

/* harmony default export */ var Setups_Gait_Dev = (Object(external_react_redux_["connect"])(Gait_Dev_mapStateToProps, {})(Gait_Dev_Gait_Dev)); //
// CONCATENATED MODULE: ./components/Setups/FollowTraj.jsx
function FollowTraj_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FollowTraj_typeof = function _typeof(obj) { return typeof obj; }; } else { FollowTraj_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FollowTraj_typeof(obj); }

function FollowTraj_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FollowTraj_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FollowTraj_createClass(Constructor, protoProps, staticProps) { if (protoProps) FollowTraj_defineProperties(Constructor.prototype, protoProps); if (staticProps) FollowTraj_defineProperties(Constructor, staticProps); return Constructor; }

function FollowTraj_possibleConstructorReturn(self, call) { if (call && (FollowTraj_typeof(call) === "object" || typeof call === "function")) { return call; } return FollowTraj_assertThisInitialized(self); }

function FollowTraj_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function FollowTraj_getPrototypeOf(o) { FollowTraj_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return FollowTraj_getPrototypeOf(o); }

function FollowTraj_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) FollowTraj_setPrototypeOf(subClass, superClass); }

function FollowTraj_setPrototypeOf(o, p) { FollowTraj_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return FollowTraj_setPrototypeOf(o, p); }






var FollowTraj_FollowTraj =
/*#__PURE__*/
function (_React$Component) {
  FollowTraj_inherits(FollowTraj, _React$Component);

  function FollowTraj(props) {
    FollowTraj_classCallCheck(this, FollowTraj);

    return FollowTraj_possibleConstructorReturn(this, FollowTraj_getPrototypeOf(FollowTraj).call(this, props));
  }

  FollowTraj_createClass(FollowTraj, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Generic_InputText, {
        text: "Max Velocity",
        textValue: this.props.vmax,
        paramName: "vmax"
      }), external_react_default.a.createElement(Generic_InputText, {
        text: "Max Position",
        textValue: this.props.xmax,
        paramName: "xmax"
      }), external_react_default.a.createElement(Generic_InputText, {
        text: "Stiffness",
        textValue: this.props.K,
        paramName: "K"
      }));
    }
  }]);

  return FollowTraj;
}(external_react_default.a.Component);

function FollowTraj_mapStateToProps(state) {
  return {
    P: state.P,
    D: state.D,
    xmax: state.xmax,
    vmax: state.vmax,
    K: state.K,
    B: state.B,
    M: state.M
  };
}

/* harmony default export */ var Setups_FollowTraj = (Object(external_react_redux_["connect"])(FollowTraj_mapStateToProps, {})(FollowTraj_FollowTraj)); //
// CONCATENATED MODULE: ./components/Setups/FollowVel.jsx
function FollowVel_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FollowVel_typeof = function _typeof(obj) { return typeof obj; }; } else { FollowVel_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FollowVel_typeof(obj); }

function FollowVel_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FollowVel_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FollowVel_createClass(Constructor, protoProps, staticProps) { if (protoProps) FollowVel_defineProperties(Constructor.prototype, protoProps); if (staticProps) FollowVel_defineProperties(Constructor, staticProps); return Constructor; }

function FollowVel_possibleConstructorReturn(self, call) { if (call && (FollowVel_typeof(call) === "object" || typeof call === "function")) { return call; } return FollowVel_assertThisInitialized(self); }

function FollowVel_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function FollowVel_getPrototypeOf(o) { FollowVel_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return FollowVel_getPrototypeOf(o); }

function FollowVel_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) FollowVel_setPrototypeOf(subClass, superClass); }

function FollowVel_setPrototypeOf(o, p) { FollowVel_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return FollowVel_setPrototypeOf(o, p); }






var FollowVel_FollowVel =
/*#__PURE__*/
function (_React$Component) {
  FollowVel_inherits(FollowVel, _React$Component);

  function FollowVel(props) {
    FollowVel_classCallCheck(this, FollowVel);

    return FollowVel_possibleConstructorReturn(this, FollowVel_getPrototypeOf(FollowVel).call(this, props));
  }

  FollowVel_createClass(FollowVel, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Generic_InputText, {
        text: "Desired Velocity",
        textValue: this.props.vmax,
        paramName: "vmax"
      }), external_react_default.a.createElement(Generic_InputText, {
        text: "Max Position",
        textValue: this.props.xmax,
        paramName: "xmax"
      }), external_react_default.a.createElement(Generic_InputText, {
        text: "Stiffness",
        textValue: this.props.K,
        paramName: "K"
      }), external_react_default.a.createElement(Generic_InputText, {
        text: "Viscosity",
        textValue: this.props.B,
        paramName: "B"
      }));
    }
  }]);

  return FollowVel;
}(external_react_default.a.Component);

function FollowVel_mapStateToProps(state) {
  return {
    P: state.P,
    D: state.D,
    xmax: state.xmax,
    vmax: state.vmax,
    K: state.K,
    B: state.B,
    M: state.M
  };
}

/* harmony default export */ var Setups_FollowVel = (Object(external_react_redux_["connect"])(FollowVel_mapStateToProps, {})(FollowVel_FollowVel)); //
// CONCATENATED MODULE: ./components/Setups/Balance.jsx
function Balance_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Balance_typeof = function _typeof(obj) { return typeof obj; }; } else { Balance_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Balance_typeof(obj); }

function Balance_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Balance_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Balance_createClass(Constructor, protoProps, staticProps) { if (protoProps) Balance_defineProperties(Constructor.prototype, protoProps); if (staticProps) Balance_defineProperties(Constructor, staticProps); return Constructor; }

function Balance_possibleConstructorReturn(self, call) { if (call && (Balance_typeof(call) === "object" || typeof call === "function")) { return call; } return Balance_assertThisInitialized(self); }

function Balance_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Balance_getPrototypeOf(o) { Balance_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Balance_getPrototypeOf(o); }

function Balance_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Balance_setPrototypeOf(subClass, superClass); }

function Balance_setPrototypeOf(o, p) { Balance_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Balance_setPrototypeOf(o, p); }






var Balance_FollowVel =
/*#__PURE__*/
function (_React$Component) {
  Balance_inherits(FollowVel, _React$Component);

  function FollowVel(props) {
    Balance_classCallCheck(this, FollowVel);

    return Balance_possibleConstructorReturn(this, Balance_getPrototypeOf(FollowVel).call(this, props));
  }

  Balance_createClass(FollowVel, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Generic_InputText, {
        text: "Max Position",
        textValue: this.props.xmax,
        paramName: "xmax"
      }), external_react_default.a.createElement(Generic_InputText, {
        text: "Stiffness",
        textValue: this.props.K,
        paramName: "K"
      }), external_react_default.a.createElement(Generic_InputText, {
        text: "Viscosity",
        textValue: this.props.B,
        paramName: "B"
      }));
    }
  }]);

  return FollowVel;
}(external_react_default.a.Component);

function Balance_mapStateToProps(state) {
  return {
    P: state.P,
    D: state.D,
    xmax: state.xmax,
    vmax: state.vmax,
    K: state.K,
    B: state.B,
    M: state.M
  };
}

/* harmony default export */ var Balance = (Object(external_react_redux_["connect"])(Balance_mapStateToProps, {})(Balance_FollowVel)); //
// CONCATENATED MODULE: ./components/Setups/Gait.jsx
function Gait_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Gait_typeof = function _typeof(obj) { return typeof obj; }; } else { Gait_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Gait_typeof(obj); }

function Gait_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Gait_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Gait_createClass(Constructor, protoProps, staticProps) { if (protoProps) Gait_defineProperties(Constructor.prototype, protoProps); if (staticProps) Gait_defineProperties(Constructor, staticProps); return Constructor; }

function Gait_possibleConstructorReturn(self, call) { if (call && (Gait_typeof(call) === "object" || typeof call === "function")) { return call; } return Gait_assertThisInitialized(self); }

function Gait_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Gait_getPrototypeOf(o) { Gait_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Gait_getPrototypeOf(o); }

function Gait_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Gait_setPrototypeOf(subClass, superClass); }

function Gait_setPrototypeOf(o, p) { Gait_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Gait_setPrototypeOf(o, p); }






var Gait_Gait =
/*#__PURE__*/
function (_React$Component) {
  Gait_inherits(Gait, _React$Component);

  function Gait(props) {
    Gait_classCallCheck(this, Gait);

    return Gait_possibleConstructorReturn(this, Gait_getPrototypeOf(Gait).call(this, props));
  }

  Gait_createClass(Gait, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Generic_InputText, {
        text: "Assistance Stiffness",
        textValue: this.props.k_assist,
        paramName: "k_assist"
      }), external_react_default.a.createElement(Generic_InputText, {
        text: "Floor Stiffness",
        textValue: this.props.k_floor,
        paramName: "k_floor"
      }), external_react_default.a.createElement(Generic_InputText, {
        text: "Gravity Stiffness",
        textValue: this.props.k_gravity,
        paramName: "k_gravity"
      }), external_react_default.a.createElement(Generic_InputText, {
        text: "Admittance B",
        textValue: this.props.B,
        paramName: "B"
      }), external_react_default.a.createElement(Generic_InputText, {
        text: "Admittance M",
        textValue: this.props.M,
        paramName: "M"
      }), external_react_default.a.createElement(Generic_InputText, {
        text: "P Gain",
        textValue: this.props.P,
        paramName: "P"
      }), external_react_default.a.createElement(Generic_InputText, {
        text: "D Gain",
        textValue: this.props.D,
        paramName: "D"
      }));
    }
  }]);

  return Gait;
}(external_react_default.a.Component);

function Gait_mapStateToProps(state) {
  return {
    P: state.P,
    D: state.D,
    k_assist: state.k_assist,
    k_floor: state.k_floor,
    k_gravity: state.k_gravity,
    B: state.B,
    M: state.M
  };
}

/* harmony default export */ var Setups_Gait = (Object(external_react_redux_["connect"])(Gait_mapStateToProps, {})(Gait_Gait)); //
// CONCATENATED MODULE: ./components/Pages/SetupPage.jsx
function SetupPage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SetupPage_typeof = function _typeof(obj) { return typeof obj; }; } else { SetupPage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SetupPage_typeof(obj); }

function SetupPage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SetupPage_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SetupPage_createClass(Constructor, protoProps, staticProps) { if (protoProps) SetupPage_defineProperties(Constructor.prototype, protoProps); if (staticProps) SetupPage_defineProperties(Constructor, staticProps); return Constructor; }

function SetupPage_possibleConstructorReturn(self, call) { if (call && (SetupPage_typeof(call) === "object" || typeof call === "function")) { return call; } return SetupPage_assertThisInitialized(self); }

function SetupPage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SetupPage_getPrototypeOf(o) { SetupPage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SetupPage_getPrototypeOf(o); }

function SetupPage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SetupPage_setPrototypeOf(subClass, superClass); }

function SetupPage_setPrototypeOf(o, p) { SetupPage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SetupPage_setPrototypeOf(o, p); }



















var SetupPage_SetupPage =
/*#__PURE__*/
function (_React$Component) {
  SetupPage_inherits(SetupPage, _React$Component);

  function SetupPage(props) {
    var _this;

    SetupPage_classCallCheck(this, SetupPage);

    _this = SetupPage_possibleConstructorReturn(this, SetupPage_getPrototypeOf(SetupPage).call(this, props));
    _this.state = {
      contents: null
    };
    return _this;
  }

  SetupPage_createClass(SetupPage, [{
    key: "render",
    value: function render() {
      if (this.props.user == 1) {
        switch (this.props.game) {
          case 1:
            this.state.contents = external_react_default.a.createElement("div", null, " ", external_react_default.a.createElement(Setups_FollowTraj_Dev, null), " ");
            break;

          case 2:
            this.state.contents = external_react_default.a.createElement("div", null, " ", external_react_default.a.createElement(Setups_FollowVel_Dev, null), " ");
            break;

          case 3:
            this.state.contents = external_react_default.a.createElement("div", null, " ", external_react_default.a.createElement(Balance_Dev, null), " ");
            break;

          case 4:
            this.state.contents = external_react_default.a.createElement("div", null, " ", external_react_default.a.createElement(Setups_Gait_Dev, null), " ");
            break;

          default:
            this.state.contents = external_react_default.a.createElement("div", null, " Select a Game ");
        }
      } else if (this.props.user == 2) {
        switch (this.props.game) {
          case 1:
            this.state.contents = external_react_default.a.createElement("div", null, " ", external_react_default.a.createElement(Setups_FollowTraj, null), " ");
            break;

          case 2:
            this.state.contents = external_react_default.a.createElement("div", null, " ", external_react_default.a.createElement(Setups_FollowVel, null), " ");
            break;

          case 3:
            this.state.contents = external_react_default.a.createElement("div", null, " ", external_react_default.a.createElement(Balance, null), " ");
            break;

          case 4:
            this.state.contents = external_react_default.a.createElement("div", null, " ", external_react_default.a.createElement(Setups_Gait, null), " ");
            break;

          default:
            this.state.contents = external_react_default.a.createElement("div", null, " Select a Game ");
        }
      }

      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Typography_default.a, {
        variant: "display1",
        gutterBottom: true
      }, "Set Up a Session"), external_react_default.a.createElement("div", {
        style: {
          display: 'inline-flex'
        }
      }, external_react_default.a.createElement(Generic_Dropdown, {
        text: "Game",
        id: "game",
        value: this.props.game,
        select1: "Follow Trajectory",
        select2: "Racing",
        select3: "Balance"
      }), this.state.contents, external_react_default.a.createElement("div", null, external_react_default.a.createElement(SetButton, {
        text: "Set"
      }))));
    }
  }]);

  return SetupPage;
}(external_react_default.a.Component);

function SetupPage_mapStateToProps(state) {
  return {
    P: state.P,
    D: state.D,
    xdes: state.xdes,
    K: state.K,
    B: state.B,
    M: state.M,
    game: state.game,
    user: state.user
  };
}

/* harmony default export */ var Pages_SetupPage = (Object(external_react_redux_["connect"])(SetupPage_mapStateToProps, {})(SetupPage_SetupPage));
// CONCATENATED MODULE: ./components/Pages/UserPage.jsx
function UserPage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { UserPage_typeof = function _typeof(obj) { return typeof obj; }; } else { UserPage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return UserPage_typeof(obj); }

function UserPage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function UserPage_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function UserPage_createClass(Constructor, protoProps, staticProps) { if (protoProps) UserPage_defineProperties(Constructor.prototype, protoProps); if (staticProps) UserPage_defineProperties(Constructor, staticProps); return Constructor; }

function UserPage_possibleConstructorReturn(self, call) { if (call && (UserPage_typeof(call) === "object" || typeof call === "function")) { return call; } return UserPage_assertThisInitialized(self); }

function UserPage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function UserPage_getPrototypeOf(o) { UserPage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return UserPage_getPrototypeOf(o); }

function UserPage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) UserPage_setPrototypeOf(subClass, superClass); }

function UserPage_setPrototypeOf(o, p) { UserPage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return UserPage_setPrototypeOf(o, p); }




var UserPage_UserPage =
/*#__PURE__*/
function (_React$Component) {
  UserPage_inherits(UserPage, _React$Component);

  function UserPage(props) {
    UserPage_classCallCheck(this, UserPage);

    return UserPage_possibleConstructorReturn(this, UserPage_getPrototypeOf(UserPage).call(this, props));
  }

  UserPage_createClass(UserPage, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, " Test ");
    }
  }]);

  return UserPage;
}(external_react_default.a.Component);

function UserPage_mapStateToProps(state) {
  return {};
}

/* harmony default export */ var Pages_UserPage = (Object(external_react_redux_["connect"])(UserPage_mapStateToProps, {})(UserPage_UserPage));
// EXTERNAL MODULE: external "three"
var external_three_ = __webpack_require__(1);

// CONCATENATED MODULE: ./games/Follow_traj.js
function Follow_traj_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Follow_traj_typeof = function _typeof(obj) { return typeof obj; }; } else { Follow_traj_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Follow_traj_typeof(obj); }

function Follow_traj_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Follow_traj_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Follow_traj_createClass(Constructor, protoProps, staticProps) { if (protoProps) Follow_traj_defineProperties(Constructor.prototype, protoProps); if (staticProps) Follow_traj_defineProperties(Constructor, staticProps); return Constructor; }

function Follow_traj_possibleConstructorReturn(self, call) { if (call && (Follow_traj_typeof(call) === "object" || typeof call === "function")) { return call; } return Follow_traj_assertThisInitialized(self); }

function Follow_traj_getPrototypeOf(o) { Follow_traj_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Follow_traj_getPrototypeOf(o); }

function Follow_traj_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Follow_traj_setPrototypeOf(subClass, superClass); }

function Follow_traj_setPrototypeOf(o, p) { Follow_traj_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Follow_traj_setPrototypeOf(o, p); }

function Follow_traj_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



 //import * as OBJLoader from 'three-obj-loader';

 //OBJLoader(THREE);

 //require("/home/rehab/Documents/RehabRobot/server/games/sprite/crosshair.png")
//require("/home/rehab/Documents/RehabRobot/server/games/sprite/crosshair_yellow.png" );

var Follow_traj_Follow_traj =
/*#__PURE__*/
function (_Component) {
  Follow_traj_inherits(Follow_traj, _Component);

  function Follow_traj(props) {
    var _this;

    Follow_traj_classCallCheck(this, Follow_traj);

    _this = Follow_traj_possibleConstructorReturn(this, Follow_traj_getPrototypeOf(Follow_traj).call(this, props));
    _this.start = _this.start.bind(Follow_traj_assertThisInitialized(Follow_traj_assertThisInitialized(_this)));
    _this.stop = _this.stop.bind(Follow_traj_assertThisInitialized(Follow_traj_assertThisInitialized(_this)));
    _this.animate = _this.animate.bind(Follow_traj_assertThisInitialized(Follow_traj_assertThisInitialized(_this)));
    return _this;
  }

  Follow_traj_createClass(Follow_traj, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var points = 0;
      var maxStroke = 200;
      var text;
      var group = new external_three_["Group"]();
      var width = this.mount.clientWidth;
      var height = this.mount.clientHeight;
      var scene = new external_three_["Scene"]();
      scene.background = new external_three_["Color"](0xf7fdff);
      var camera = new external_three_["OrthographicCamera"](-width / 2, width / 2, height / 2, -height / 2, -100, 500000);
      camera.position.set(0, 0, 5);
      scene.add(camera);
      var renderer = new external_three_["WebGLRenderer"]({
        antialias: true
      });
      renderer.setSize(width, height);
      var geometry = new external_three_["BoxGeometry"](70, 70, 70);
      var plateMaterial = new external_three_["MeshBasicMaterial"]({
        color: 0x86a5d6
      });
      var barMaterial = new external_three_["MeshBasicMaterial"]({
        color: 0xd1d1d1
      });
      var desMaterial = new external_three_["MeshBasicMaterial"]({
        color: 0xff7272,
        transparent: true,
        opacity: 0.5
      });
      var plate = new external_three_["Mesh"](geometry, plateMaterial);
      var bar = new external_three_["Mesh"](geometry, barMaterial);
      var desPos = new external_three_["Mesh"](geometry, desMaterial);
      plate.position.set(0.0, 0.0, 0.0);
      plate.scale.set(1.25, 0.25, 1.0);
      bar.position.set(0.0, 0.0, -200);
      bar.scale.set(0.75, 4.0, 1.0);
      desPos.position.set(0.0, 0.0, 50);
      desPos.scale.set(1.5, 0.5, 1.0);
      var spotLight1 = new external_three_["SpotLight"](0xffffff, 1);
      spotLight1.position.set(-width / 3, 200, 200);
      var light = new external_three_["HemisphereLight"](0xffffff, 0xffffff, 1);
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
      this.desPos = desPos;
      this.points = points;
      this.mount.appendChild(this.renderer.domElement);
      console.log('Component Mount');
      this.start();
      console.log('Component Mount Done');
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
      this.desPos.position.y = 0.7 * this.props.xdes - 140.0;
      this.plate.position.y = 0.7 * this.props.x - 140.0;
      console.log(this.plate.position.y);

      if (this.plate.position.y > this.desPos.position.y - 20.0 && this.plate.position.y < this.desPos.position.y + 20.0) {
        this.desPos.material.color.setHex(0x7fffa3);
      } else {
        this.desPos.material.color.setHex(0xff7272);
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

      return external_react_default.a.createElement("div", {
        style: {
          width: '600px',
          height: '800px'
        },
        ref: function ref(mount) {
          _this2.mount = mount;
        }
      });
    }
  }]);

  return Follow_traj;
}(external_react_["Component"]);

function Follow_traj_mapStateToProps(state) {
  //map state variables to the component's state 
  return {
    x: state.x,
    xdes: state.xdes
  };
}

/* harmony default export */ var games_Follow_traj = (Object(external_react_redux_["connect"])(Follow_traj_mapStateToProps, {} //add importing action functions here
)(Follow_traj_Follow_traj));
// CONCATENATED MODULE: ./games/Follow_vel.js
function Follow_vel_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Follow_vel_typeof = function _typeof(obj) { return typeof obj; }; } else { Follow_vel_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Follow_vel_typeof(obj); }

function Follow_vel_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Follow_vel_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Follow_vel_createClass(Constructor, protoProps, staticProps) { if (protoProps) Follow_vel_defineProperties(Constructor.prototype, protoProps); if (staticProps) Follow_vel_defineProperties(Constructor, staticProps); return Constructor; }

function Follow_vel_possibleConstructorReturn(self, call) { if (call && (Follow_vel_typeof(call) === "object" || typeof call === "function")) { return call; } return Follow_vel_assertThisInitialized(self); }

function Follow_vel_getPrototypeOf(o) { Follow_vel_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Follow_vel_getPrototypeOf(o); }

function Follow_vel_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Follow_vel_setPrototypeOf(subClass, superClass); }

function Follow_vel_setPrototypeOf(o, p) { Follow_vel_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Follow_vel_setPrototypeOf(o, p); }

function Follow_vel_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



 //import * as OBJLoader from 'three-obj-loader';

 //OBJLoader(THREE);
//require("/home/rehab/Documents/RehabRobot/server/games/sprite/crosshair.png")
//require("/home/rehab/Documents/RehabRobot/server/games/sprite/crosshair_yellow.png" );

var Follow_vel_Follow_vel =
/*#__PURE__*/
function (_Component) {
  Follow_vel_inherits(Follow_vel, _Component);

  function Follow_vel(props) {
    var _this;

    Follow_vel_classCallCheck(this, Follow_vel);

    _this = Follow_vel_possibleConstructorReturn(this, Follow_vel_getPrototypeOf(Follow_vel).call(this, props));
    _this.start = _this.start.bind(Follow_vel_assertThisInitialized(Follow_vel_assertThisInitialized(_this)));
    _this.stop = _this.stop.bind(Follow_vel_assertThisInitialized(Follow_vel_assertThisInitialized(_this)));
    _this.animate = _this.animate.bind(Follow_vel_assertThisInitialized(Follow_vel_assertThisInitialized(_this)));
    return _this;
  }

  Follow_vel_createClass(Follow_vel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var bar_width = 75.0;
      var bar_height = 200.0;
      var init = 0;
      var falling = 0;
      var fall_dir = 0;
      var fall_speed = 0;
      var bar;
      var group = new external_three_["Group"]();
      var width = this.mount.clientWidth;
      var height = this.mount.clientHeight;
      var scene = new external_three_["Scene"]();
      scene.background = new external_three_["Color"](0x99ccff);
      var camera = new external_three_["OrthographicCamera"](-width / 2, width / 2, height / 2, -height / 2, -100, 500000);
      camera.position.set(0, 0, 10);
      var renderer = new external_three_["WebGLRenderer"]({
        antialias: true
      });
      renderer.setSize(width, height);
      scene.add(camera);
      var blockGeometry = new external_three_["BoxGeometry"](bar_width, bar_height, 200);
      var blockMaterial = new external_three_["MeshLambertMaterial"]({
        color: 0x51677F
      });
      var block = new external_three_["Mesh"](blockGeometry, blockMaterial);
      var blockGeometry2 = new external_three_["BoxGeometry"](bar_width - 25, bar_height - 25, 200);
      var blockMaterial2 = new external_three_["MeshLambertMaterial"]({
        color: 0xFEFFD1
      });
      var block2 = new external_three_["Mesh"](blockGeometry2, blockMaterial2);
      var blockGeometry3 = new external_three_["BoxGeometry"](bar_width - 25, 5, 200);
      var blockMaterial3 = new external_three_["MeshLambertMaterial"]({
        color: 0x000000
      });
      var block3 = new external_three_["Mesh"](blockGeometry3, blockMaterial3);
      var barGeometry = new external_three_["BoxGeometry"](bar_width - 25, 1, 210);
      var barMaterial = new external_three_["MeshLambertMaterial"]({
        color: 0x458B74
      });
      bar = new external_three_["Mesh"](barGeometry, barMaterial);
      block.position.set(0.0, 0.0, 0.0);
      scene.add(block);
      block2.position.set(0.0, 0.0, 0.0);
      scene.add(block2);
      block3.position.set(0.0, 0.0, 0.0);
      scene.add(block3);
      bar.position.set(0.0, 0.0, 0.0);
      scene.add(bar);
      var spotLight1 = new external_three_["SpotLight"](0xffffff, 1);
      spotLight1.position.set(-width / 3, 200, 200);
      var spotLight2 = new external_three_["SpotLight"](0xffffff, 1);
      spotLight2.position.set(-width / 3, -200, 200);
      spotLight2.rotation.set(-180, 0, 0); //var directionalLight = new THREE.DirectionalLight( 0xffffff, 2 );
      //scene.add( directionalLight );

      var light = new external_three_["HemisphereLight"](0xffffff, 0xffffff, 1);
      scene.add(light);
      scene.add(spotLight1);
      this.scene = scene;
      this.camera = camera;
      this.renderer = renderer;
      this.bar = bar;
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
      var bar_set = Math.abs(this.props.v - this.props.vdes);
      this.bar.scale.set(1, bar_set + 0.01, 1);
      this.bar.position.set(0, bar_set / 2.0, 0);
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

      return external_react_default.a.createElement("div", {
        style: {
          width: '300px',
          height: '400px'
        },
        ref: function ref(mount) {
          _this2.mount = mount;
        }
      });
    }
  }]);

  return Follow_vel;
}(external_react_["Component"]);

function Follow_vel_mapStateToProps(state) {
  //map state variables to the component's state 
  return {
    v: state.v,
    vdes: state.vdes
  };
}

/* harmony default export */ var games_Follow_vel = (Object(external_react_redux_["connect"])(Follow_vel_mapStateToProps, {} //add importing action functions here
)(Follow_vel_Follow_vel));
// CONCATENATED MODULE: ./games/Follow_game.js
function Follow_game_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Follow_game_typeof = function _typeof(obj) { return typeof obj; }; } else { Follow_game_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Follow_game_typeof(obj); }

function Follow_game_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Follow_game_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Follow_game_createClass(Constructor, protoProps, staticProps) { if (protoProps) Follow_game_defineProperties(Constructor.prototype, protoProps); if (staticProps) Follow_game_defineProperties(Constructor, staticProps); return Constructor; }

function Follow_game_possibleConstructorReturn(self, call) { if (call && (Follow_game_typeof(call) === "object" || typeof call === "function")) { return call; } return Follow_game_assertThisInitialized(self); }

function Follow_game_getPrototypeOf(o) { Follow_game_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Follow_game_getPrototypeOf(o); }

function Follow_game_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Follow_game_setPrototypeOf(subClass, superClass); }

function Follow_game_setPrototypeOf(o, p) { Follow_game_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Follow_game_setPrototypeOf(o, p); }

function Follow_game_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



 //import * as OBJLoader from 'three-obj-loader';

 //OBJLoader(THREE);
//require("/home/rehab/Documents/RehabRobot/server/games/sprite/crosshair.png")
//require("/home/rehab/Documents/RehabRobot/server/games/sprite/crosshair_yellow.png" );

var Follow_game_Follow_game =
/*#__PURE__*/
function (_Component) {
  Follow_game_inherits(Follow_game, _Component);

  function Follow_game(props) {
    var _this;

    Follow_game_classCallCheck(this, Follow_game);

    _this = Follow_game_possibleConstructorReturn(this, Follow_game_getPrototypeOf(Follow_game).call(this, props));
    _this.start = _this.start.bind(Follow_game_assertThisInitialized(Follow_game_assertThisInitialized(_this)));
    _this.stop = _this.stop.bind(Follow_game_assertThisInitialized(Follow_game_assertThisInitialized(_this)));
    _this.animate = _this.animate.bind(Follow_game_assertThisInitialized(Follow_game_assertThisInitialized(_this)));
    return _this;
  }

  Follow_game_createClass(Follow_game, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var points = 0;
      var maxStroke = 200;
      var text;
      var group = new external_three_["Group"]();
      var width = this.mount.clientWidth;
      var height = this.mount.clientHeight;
      var scene = new external_three_["Scene"]();
      scene.background = new external_three_["Color"](0xf7fdff);
      var camera = new external_three_["OrthographicCamera"](-width / 2, width / 2, height / 2, -height / 2, -100, 500000);
      camera.position.set(0, 0, 5);
      scene.add(camera);
      var renderer = new external_three_["WebGLRenderer"]({
        antialias: true
      });
      renderer.setSize(width, height);
      var geometry = new external_three_["BoxGeometry"](100, 100, 100);
      var cubeMaterial = new external_three_["MeshLambertMaterial"]({
        color: 0x86a5d6
      });
      var cube = new external_three_["Mesh"](geometry, cubeMaterial);
      cube.position.set(0.0, 0.0, 0.0);
      var spotLight1 = new external_three_["SpotLight"](0xffffff, 1);
      spotLight1.position.set(-width / 3, 200, 200);
      var light = new external_three_["HemisphereLight"](0xffffff, 0xffffff, 1);
      scene.add(light);
      scene.add(spotLight1);
      scene.add(cube);
      this.scene = scene;
      this.camera = camera;
      this.renderer = renderer;
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
      if (this.props.x > this.props.xdes - 30 && this.props.x < this.props.xdes + 30) {
        this.points += 1;
        this.cube.rotation.x += 0.008;
        this.cube.rotation.y += 0.008;
        this.cube.rotation.z += 0.008;
      }
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

      return external_react_default.a.createElement("div", {
        style: {
          width: '600px',
          height: '400px'
        },
        ref: function ref(mount) {
          _this2.mount = mount;
        }
      });
    }
  }]);

  return Follow_game;
}(external_react_["Component"]);

function Follow_game_mapStateToProps(state) {
  //map state variables to the component's state 
  return {
    x: state.x,
    xdes: state.xdes
  };
}

/* harmony default export */ var games_Follow_game = (Object(external_react_redux_["connect"])(Follow_game_mapStateToProps, {} //add importing action functions here
)(Follow_game_Follow_game));
// CONCATENATED MODULE: ./games/Race_game.js
function Race_game_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Race_game_typeof = function _typeof(obj) { return typeof obj; }; } else { Race_game_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Race_game_typeof(obj); }

function Race_game_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Race_game_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Race_game_createClass(Constructor, protoProps, staticProps) { if (protoProps) Race_game_defineProperties(Constructor.prototype, protoProps); if (staticProps) Race_game_defineProperties(Constructor, staticProps); return Constructor; }

function Race_game_possibleConstructorReturn(self, call) { if (call && (Race_game_typeof(call) === "object" || typeof call === "function")) { return call; } return Race_game_assertThisInitialized(self); }

function Race_game_getPrototypeOf(o) { Race_game_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Race_game_getPrototypeOf(o); }

function Race_game_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Race_game_setPrototypeOf(subClass, superClass); }

function Race_game_setPrototypeOf(o, p) { Race_game_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Race_game_setPrototypeOf(o, p); }

function Race_game_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



 //import * as OBJLoader from 'three-obj-loader';

 //OBJLoader(THREE);
//require("/home/rehab/Documents/RehabRobot/server/games/sprite/crosshair.png")
//require("/home/rehab/Documents/RehabRobot/server/games/sprite/crosshair_yellow.png" );

var Race_game_Race_game =
/*#__PURE__*/
function (_Component) {
  Race_game_inherits(Race_game, _Component);

  function Race_game(props) {
    var _this;

    Race_game_classCallCheck(this, Race_game);

    _this = Race_game_possibleConstructorReturn(this, Race_game_getPrototypeOf(Race_game).call(this, props));
    _this.start = _this.start.bind(Race_game_assertThisInitialized(Race_game_assertThisInitialized(_this)));
    _this.stop = _this.stop.bind(Race_game_assertThisInitialized(Race_game_assertThisInitialized(_this)));
    _this.animate = _this.animate.bind(Race_game_assertThisInitialized(Race_game_assertThisInitialized(_this)));
    _this.move_object = _this.move_object.bind(Race_game_assertThisInitialized(Race_game_assertThisInitialized(_this)));
    return _this;
  }

  Race_game_createClass(Race_game, [{
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
      var group = new external_three_["Group"]();
      var width = this.mount.clientWidth;
      var height = this.mount.clientHeight;
      var scene = new external_three_["Scene"]();
      var fogColor = new external_three_["Color"](0x99ccff);
      scene.background = fogColor;
      scene.background = new external_three_["Color"](fogColor); //scene.fog = new THREE.Fog(fogColor, 0.0025, 500);

      var camera = new external_three_["PerspectiveCamera"](90, window.innerWidth / window.innerHeight, 0.1, 800);
      camera.position.set(-95, -50, 30); //camera.rotation.set(1.5,0.0,0.0);

      scene.add(camera);
      var renderer = new external_three_["WebGLRenderer"]({
        antialias: true
      });
      renderer.setSize(width, height);
      var plateMaterial = new external_three_["MeshBasicMaterial"]({
        color: 0xcc6600
      });
      var plateMaterial2 = new external_three_["MeshBasicMaterial"]({
        color: 0x009933
      });
      var other1Material = new external_three_["MeshLambertMaterial"]({
        color: 0xff7272
      });
      var mainMaterial = new external_three_["MeshLambertMaterial"]({
        color: 0xFFA500
      });
      var other2Material = new external_three_["MeshLambertMaterial"]({
        color: 0xD4D1C8
      });
      var boxMaterial = new external_three_["MeshLambertMaterial"]({
        color: 0x99ccff
      });
      var textureLoader = new external_three_["TextureLoader"]();
      var texture_grass = textureLoader.load("static/textures/grass.jpg");
      var material_grass = new external_three_["MeshBasicMaterial"]({
        color: 0xffffff,
        map: texture_grass
      });
      var texture_track = textureLoader.load("static/textures/track.jpg");
      var material_track = new external_three_["MeshBasicMaterial"]({
        color: 0xffffff,
        map: texture_track
      });
      texture_grass.wrapS = texture_grass.wrapT = external_three_["RepeatWrapping"];
      texture_grass.repeat.set(64, 64);
      var texture_grass2 = textureLoader.load("static/textures/grass.jpg");
      texture_grass2.wrapS = texture_grass2.wrapT = external_three_["RepeatWrapping"];
      texture_grass2.repeat.set(4, 4);
      var material_grass2 = new external_three_["MeshBasicMaterial"]({
        color: 0xffffff,
        map: texture_grass2
      });
      texture_track.wrapS = texture_track.wrapT = external_three_["RepeatWrapping"];
      texture_track.repeat.set(8, 8);
      var circle = new external_three_["Mesh"](new external_three_["CircleBufferGeometry"](100, 20, 0, Math.PI * 2), material_track);
      circle.position.set(0, -100, 0);
      scene.add(circle);
      var circle2 = new external_three_["Mesh"](new external_three_["CircleBufferGeometry"](100, 20, 0, Math.PI * 2), material_track);
      circle2.position.set(0, 100, 0);
      scene.add(circle2);
      var plate = new external_three_["Mesh"](new external_three_["PlaneBufferGeometry"](200, 200, 4, 4), material_track);
      plate.position.set(0, 0, 0);
      scene.add(plate);
      var circle3 = new external_three_["Mesh"](new external_three_["CircleBufferGeometry"](60, 20, 0, Math.PI * 2), material_grass2);
      circle3.position.set(0, -100, 0.11);
      scene.add(circle3);
      var circle4 = new external_three_["Mesh"](new external_three_["CircleBufferGeometry"](60, 20, 0, Math.PI * 2), material_grass2);
      circle4.position.set(0, 100, 0.11);
      scene.add(circle4);
      var plate2 = new external_three_["Mesh"](new external_three_["PlaneBufferGeometry"](120, 200, 4, 4), material_grass2);
      plate2.position.set(0, 0, 0.10);
      scene.add(plate2);
      var ground = new external_three_["Mesh"](new external_three_["PlaneBufferGeometry"](5000, 5000, 4, 4), material_grass);
      ground.position.set(-500, -500, -0.1);
      scene.add(ground);
      var character = new external_three_["Mesh"](new external_three_["TetrahedronBufferGeometry"](5, 0), mainMaterial);
      character.position.set(-80, 0, 5);
      scene.add(character);
      var other = new external_three_["Mesh"](new external_three_["BoxBufferGeometry"](5, 5, 5, 4, 4, 4), other1Material);
      other.position.set(-90, 0, 5);
      scene.add(other);
      var other2 = new external_three_["Mesh"](new external_three_["BoxBufferGeometry"](5, 5, 5, 4, 4, 4), other2Material);
      other2.position.set(-70, 0, 5);
      scene.add(other2);
      var box1 = new external_three_["Mesh"](new external_three_["BoxBufferGeometry"](5000, 5, 1000), boxMaterial);
      box1.position.set(0, 350, 0);
      scene.add(box1);
      var spotLight1 = new external_three_["SpotLight"](0xffffff, 1);
      spotLight1.position.set(-width / 3, 200, 200);
      var light = new external_three_["HemisphereLight"](0xffffff, 0xffffff, 1);
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
      this.clock = new external_three_["Clock"]();
      this.begin = 0;
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
        object.rotation.z = theta;
      }
    }
  }, {
    key: "animate",
    value: function animate() {
      //wait for 10 sec before beginning 
      this.timer += this.clock.getDelta();
      if (this.timer >= 0.1) this.begin = 1; //if(!this.begin) return;

      this.race_speed1 = (200.0 - Math.abs(this.props.v - this.props.vdes)) / 300.0;

      if (this.character.position.y >= 100) {
        this.theta1 += this.race_speed1 / 90.0;
        this.camera.position.x = this.character.position.x - 40.0 * Math.sin(this.theta1);
        this.camera.position.y = this.character.position.y - 40.0 * Math.cos(this.theta1);
      } else if (this.character.position.y <= -100) {
        this.theta1 += this.race_speed1 / 90.0;
        this.camera.position.x = this.character.position.x + 40.0 * Math.sin(this.theta1);
        this.camera.position.y = this.character.position.y + 40.0 * Math.cos(this.theta1);
      } else if (this.character.position.x > 10) {
        this.theta1 = 0.0;
        this.camera.position.x = this.character.position.x + 40.0 * Math.sin(this.theta1);
        this.camera.position.y = this.character.position.y + 40.0 * Math.cos(this.theta1);
      } else {
        this.theta1 = 0.0;
        this.camera.position.x = this.character.position.x - 40.0 * Math.sin(this.theta1);
        this.camera.position.y = this.character.position.y - 40.0 * Math.cos(this.theta1);
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
      console.log(this.character.rotation.z);
      this.character.rotation.x += 0.1;
      this.character.rotation.y += 0.05;
      this.other.rotation.x += 0.1;
      this.other.rotation.y += 0.05;
      this.other2.rotation.x += 0.1;
      this.other2.rotation.y += 0.05;
      this.camera.up = new external_three_["Vector3"](0, 0, 1);
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

      return external_react_default.a.createElement("div", {
        style: {
          width: '800px',
          height: '400px'
        },
        ref: function ref(mount) {
          _this2.mount = mount;
        }
      });
    }
  }]);

  return Race_game;
}(external_react_["Component"]);

function Race_game_mapStateToProps(state) {
  //map state variables to the component's state 
  return {
    x: state.x,
    xdes: state.xdes,
    v: state.v,
    vdes: state.vdes
  };
}

/* harmony default export */ var games_Race_game = (Object(external_react_redux_["connect"])(Race_game_mapStateToProps, {} //add importing action functions here
)(Race_game_Race_game));
// CONCATENATED MODULE: ./games/Balance_game.js
function Balance_game_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Balance_game_typeof = function _typeof(obj) { return typeof obj; }; } else { Balance_game_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Balance_game_typeof(obj); }

function Balance_game_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Balance_game_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Balance_game_createClass(Constructor, protoProps, staticProps) { if (protoProps) Balance_game_defineProperties(Constructor.prototype, protoProps); if (staticProps) Balance_game_defineProperties(Constructor, staticProps); return Constructor; }

function Balance_game_possibleConstructorReturn(self, call) { if (call && (Balance_game_typeof(call) === "object" || typeof call === "function")) { return call; } return Balance_game_assertThisInitialized(self); }

function Balance_game_getPrototypeOf(o) { Balance_game_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Balance_game_getPrototypeOf(o); }

function Balance_game_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Balance_game_setPrototypeOf(subClass, superClass); }

function Balance_game_setPrototypeOf(o, p) { Balance_game_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Balance_game_setPrototypeOf(o, p); }

function Balance_game_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



 //import * as OBJLoader from 'three-obj-loader';

 //OBJLoader(THREE);
//require("/home/rehab/Documents/RehabRobot/server/games/sprite/crosshair.png")
//require("/home/rehab/Documents/RehabRobot/server/games/sprite/crosshair_yellow.png" );

var Balance_game_Balance_game =
/*#__PURE__*/
function (_Component) {
  Balance_game_inherits(Balance_game, _Component);

  function Balance_game(props) {
    var _this;

    Balance_game_classCallCheck(this, Balance_game);

    _this = Balance_game_possibleConstructorReturn(this, Balance_game_getPrototypeOf(Balance_game).call(this, props));
    _this.start = _this.start.bind(Balance_game_assertThisInitialized(Balance_game_assertThisInitialized(_this)));
    _this.stop = _this.stop.bind(Balance_game_assertThisInitialized(Balance_game_assertThisInitialized(_this)));
    _this.animate = _this.animate.bind(Balance_game_assertThisInitialized(Balance_game_assertThisInitialized(_this)));
    return _this;
  }

  Balance_game_createClass(Balance_game, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var width = this.mount.clientWidth;
      var height = this.mount.clientHeight;
      var scene = new external_three_["Scene"]();
      scene.background = new external_three_["Color"](0x99ccff);
      var camera = new external_three_["OrthographicCamera"](-width / 2, width / 2, height / 2, -height / 2, -100, 500000);
      camera.position.set(0, 0, 5);
      scene.add(camera);
      var renderer = new external_three_["WebGLRenderer"]({
        antialias: true
      });
      renderer.setSize(width, height);
      var columnMaterial = new external_three_["MeshBasicMaterial"]({
        color: 0xAFAFAF
      });
      var groundMaterial = new external_three_["MeshBasicMaterial"]({
        color: 0x137200
      });
      var characterMaterial = new external_three_["MeshBasicMaterial"]({
        color: 0x6400CF
      });
      var ballMaterial = new external_three_["MeshBasicMaterial"]({
        color: 0x00239B
      });
      var column = new external_three_["Mesh"](new external_three_["BoxBufferGeometry"](50, 200, 10), columnMaterial);
      column.position.set(0, -100, 0);
      scene.add(column);
      var ground = new external_three_["Mesh"](new external_three_["BoxBufferGeometry"](1000, 50, 10), groundMaterial);
      ground.position.set(0, -175, 0);
      scene.add(ground);
      var character = new external_three_["Mesh"](new external_three_["CircleBufferGeometry"](25, 32), characterMaterial);
      character.position.set(0, 25, 0);
      scene.add(character);
      var ball = new external_three_["Mesh"](new external_three_["CircleBufferGeometry"](10, 32), ballMaterial);
      ball.position.set(100, 25, 0);
      scene.add(ball);
      var spotLight1 = new external_three_["SpotLight"](0xffffff, 1);
      spotLight1.position.set(-width / 3, 200, 200);
      var light = new external_three_["HemisphereLight"](0xffffff, 0xffffff, 1);
      scene.add(light);
      scene.add(spotLight1);
      scene.add(camera);
      this.scene = scene;
      this.camera = camera;
      this.renderer = renderer;
      this.character = character;
      this.ball = ball;
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
      this.character.position.x = this.props.x - this.props.xdes;
      this.ball.position.x = this.props.x_ball - this.props.xdes;

      if (Math.abs(this.character.position.x) > 40) {
        //ball should fall, game over
        console.log('fall');
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

      return external_react_default.a.createElement("div", {
        style: {
          width: '900px',
          height: '400px'
        },
        ref: function ref(mount) {
          _this2.mount = mount;
        }
      });
    }
  }]);

  return Balance_game;
}(external_react_["Component"]);

function Balance_game_mapStateToProps(state) {
  //map state variables to the component's state 
  return {
    x: state.x,
    x_ball: state.x_ball,
    xdes: state.xdes
  };
}

/* harmony default export */ var games_Balance_game = (Object(external_react_redux_["connect"])(Balance_game_mapStateToProps, {} //add importing action functions here
)(Balance_game_Balance_game));
// CONCATENATED MODULE: ./games/Gait_game.js
function Gait_game_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Gait_game_typeof = function _typeof(obj) { return typeof obj; }; } else { Gait_game_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Gait_game_typeof(obj); }

function Gait_game_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Gait_game_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Gait_game_createClass(Constructor, protoProps, staticProps) { if (protoProps) Gait_game_defineProperties(Constructor.prototype, protoProps); if (staticProps) Gait_game_defineProperties(Constructor, staticProps); return Constructor; }

function Gait_game_possibleConstructorReturn(self, call) { if (call && (Gait_game_typeof(call) === "object" || typeof call === "function")) { return call; } return Gait_game_assertThisInitialized(self); }

function Gait_game_getPrototypeOf(o) { Gait_game_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Gait_game_getPrototypeOf(o); }

function Gait_game_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Gait_game_setPrototypeOf(subClass, superClass); }

function Gait_game_setPrototypeOf(o, p) { Gait_game_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Gait_game_setPrototypeOf(o, p); }

function Gait_game_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



 //import * as OBJLoader from 'three-obj-loader';

 //OBJLoader(THREE);
//require("/home/rehab/Documents/RehabRobot/server/games/sprite/crosshair.png")
//require("/home/rehab/Documents/RehabRobot/server/games/sprite/crosshair_yellow.png" );

var Gait_game_Gait_game =
/*#__PURE__*/
function (_Component) {
  Gait_game_inherits(Gait_game, _Component);

  function Gait_game(props) {
    var _this;

    Gait_game_classCallCheck(this, Gait_game);

    _this = Gait_game_possibleConstructorReturn(this, Gait_game_getPrototypeOf(Gait_game).call(this, props));
    _this.start = _this.start.bind(Gait_game_assertThisInitialized(Gait_game_assertThisInitialized(_this)));
    _this.stop = _this.stop.bind(Gait_game_assertThisInitialized(Gait_game_assertThisInitialized(_this)));
    _this.animate = _this.animate.bind(Gait_game_assertThisInitialized(Gait_game_assertThisInitialized(_this)));
    _this.move_object = _this.move_object.bind(Gait_game_assertThisInitialized(Gait_game_assertThisInitialized(_this)));
    return _this;
  }

  Gait_game_createClass(Gait_game, [{
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
      var group = new external_three_["Group"]();
      var width = this.mount.clientWidth;
      var height = this.mount.clientHeight;
      var scene = new external_three_["Scene"]();
      scene.background = new external_three_["Color"](0x99ccff);
      var camera = new external_three_["PerspectiveCamera"](90, window.innerWidth / window.innerHeight, 0.1, 800);
      camera.position.set(-95, -50, 30);
      camera.rotation.set(1.5, 0.0, 0.0);
      scene.add(camera);
      var renderer = new external_three_["WebGLRenderer"]({
        antialias: true
      });
      renderer.setSize(width, height);
      var plateMaterial = new external_three_["MeshBasicMaterial"]({
        color: 0xcc6600
      });
      var plateMaterial2 = new external_three_["MeshBasicMaterial"]({
        color: 0x009933
      });
      var other1Material = new external_three_["MeshLambertMaterial"]({
        color: 0xff7272
      });
      var mainMaterial = new external_three_["MeshLambertMaterial"]({
        color: 0xFFA500
      });
      var other2Material = new external_three_["MeshLambertMaterial"]({
        color: 0xD4D1C8
      });
      var boxMaterial = new external_three_["MeshLambertMaterial"]({
        color: 0x99ccff
      });
      var circle = new external_three_["Mesh"](new external_three_["CircleBufferGeometry"](100, 20, 0, Math.PI * 2), plateMaterial);
      circle.position.set(0, -100, 0);
      scene.add(circle);
      var circle2 = new external_three_["Mesh"](new external_three_["CircleBufferGeometry"](100, 20, 0, Math.PI * 2), plateMaterial);
      circle2.position.set(0, 100, 0);
      scene.add(circle2);
      var plate = new external_three_["Mesh"](new external_three_["PlaneBufferGeometry"](200, 200, 4, 4), plateMaterial);
      plate.position.set(0, 0, 0);
      scene.add(plate);
      var circle3 = new external_three_["Mesh"](new external_three_["CircleBufferGeometry"](60, 20, 0, Math.PI * 2), plateMaterial2);
      circle3.position.set(0, -100, 0.1);
      scene.add(circle3);
      var circle4 = new external_three_["Mesh"](new external_three_["CircleBufferGeometry"](60, 20, 0, Math.PI * 2), plateMaterial2);
      circle4.position.set(0, 100, 0.1);
      scene.add(circle4);
      var plate2 = new external_three_["Mesh"](new external_three_["PlaneBufferGeometry"](120, 200, 4, 4), plateMaterial2);
      plate2.position.set(0, 0, 0.1);
      scene.add(plate2);
      var ground = new external_three_["Mesh"](new external_three_["PlaneBufferGeometry"](2000, 2000, 4, 4), plateMaterial2);
      ground.position.set(0, 0, -0.1);
      scene.add(ground);
      var character = new external_three_["Mesh"](new external_three_["TetrahedronBufferGeometry"](5, 0), mainMaterial);
      character.position.set(-80, 0, 5);
      scene.add(character);
      var other = new external_three_["Mesh"](new external_three_["BoxBufferGeometry"](5, 5, 5, 4, 4, 4), other1Material);
      other.position.set(-90, 0, 5);
      scene.add(other);
      var other2 = new external_three_["Mesh"](new external_three_["BoxBufferGeometry"](5, 5, 5, 4, 4, 4), other2Material);
      other2.position.set(-70, 0, 5);
      scene.add(other2);
      var box1 = new external_three_["Mesh"](new external_three_["BoxBufferGeometry"](5000, 5, 1000), boxMaterial);
      box1.position.set(0, 350, 0);
      scene.add(box1);
      var spotLight1 = new external_three_["SpotLight"](0xffffff, 1);
      spotLight1.position.set(-width / 3, 200, 200);
      var light = new external_three_["HemisphereLight"](0xffffff, 0xffffff, 1);
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
        object.rotation.z = theta;
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
      this.camera.position.x = this.character.position.x;
      this.camera.position.y = this.character.position.y - 40.0;
      this.character.rotation.x += 0.1;
      this.character.rotation.y += 0.05;
      this.other.rotation.x += 0.1;
      this.other.rotation.y += 0.05;
      this.other2.rotation.x += 0.1;
      this.other2.rotation.y += 0.05;
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

      return external_react_default.a.createElement("div", {
        style: {
          width: '900px',
          height: '400px'
        },
        ref: function ref(mount) {
          _this2.mount = mount;
        }
      });
    }
  }]);

  return Gait_game;
}(external_react_["Component"]);

function Gait_game_mapStateToProps(state) {
  //map state variables to the component's state 
  return {
    x: state.x,
    xdes: state.xdes,
    v: state.v,
    vdes: state.vdes
  };
}

/* harmony default export */ var games_Gait_game = (Object(external_react_redux_["connect"])(Gait_game_mapStateToProps, {} //add importing action functions here
)(Gait_game_Gait_game));
// CONCATENATED MODULE: ./components/Instructions/FollowTraj_Instruction.jsx
function FollowTraj_Instruction_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FollowTraj_Instruction_typeof = function _typeof(obj) { return typeof obj; }; } else { FollowTraj_Instruction_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FollowTraj_Instruction_typeof(obj); }

function FollowTraj_Instruction_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FollowTraj_Instruction_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FollowTraj_Instruction_createClass(Constructor, protoProps, staticProps) { if (protoProps) FollowTraj_Instruction_defineProperties(Constructor.prototype, protoProps); if (staticProps) FollowTraj_Instruction_defineProperties(Constructor, staticProps); return Constructor; }

function FollowTraj_Instruction_possibleConstructorReturn(self, call) { if (call && (FollowTraj_Instruction_typeof(call) === "object" || typeof call === "function")) { return call; } return FollowTraj_Instruction_assertThisInitialized(self); }

function FollowTraj_Instruction_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function FollowTraj_Instruction_getPrototypeOf(o) { FollowTraj_Instruction_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return FollowTraj_Instruction_getPrototypeOf(o); }

function FollowTraj_Instruction_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) FollowTraj_Instruction_setPrototypeOf(subClass, superClass); }

function FollowTraj_Instruction_setPrototypeOf(o, p) { FollowTraj_Instruction_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return FollowTraj_Instruction_setPrototypeOf(o, p); }




var FollowTraj_Instruction_FollowTraj_Instruction =
/*#__PURE__*/
function (_React$Component) {
  FollowTraj_Instruction_inherits(FollowTraj_Instruction, _React$Component);

  function FollowTraj_Instruction(props) {
    FollowTraj_Instruction_classCallCheck(this, FollowTraj_Instruction);

    return FollowTraj_Instruction_possibleConstructorReturn(this, FollowTraj_Instruction_getPrototypeOf(FollowTraj_Instruction).call(this, props));
  }

  FollowTraj_Instruction_createClass(FollowTraj_Instruction, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, "Follow the trajectory displayed on screen as closely as possible. Points are earned by staying close to the desired point.");
    }
  }]);

  return FollowTraj_Instruction;
}(external_react_default.a.Component);

function FollowTraj_Instruction_mapStateToProps(state) {
  return {};
}

/* harmony default export */ var Instructions_FollowTraj_Instruction = (Object(external_react_redux_["connect"])(FollowTraj_Instruction_mapStateToProps, {})(FollowTraj_Instruction_FollowTraj_Instruction));
// CONCATENATED MODULE: ./components/Instructions/FollowVel_Instruction.jsx
function FollowVel_Instruction_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FollowVel_Instruction_typeof = function _typeof(obj) { return typeof obj; }; } else { FollowVel_Instruction_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FollowVel_Instruction_typeof(obj); }

function FollowVel_Instruction_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FollowVel_Instruction_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FollowVel_Instruction_createClass(Constructor, protoProps, staticProps) { if (protoProps) FollowVel_Instruction_defineProperties(Constructor.prototype, protoProps); if (staticProps) FollowVel_Instruction_defineProperties(Constructor, staticProps); return Constructor; }

function FollowVel_Instruction_possibleConstructorReturn(self, call) { if (call && (FollowVel_Instruction_typeof(call) === "object" || typeof call === "function")) { return call; } return FollowVel_Instruction_assertThisInitialized(self); }

function FollowVel_Instruction_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function FollowVel_Instruction_getPrototypeOf(o) { FollowVel_Instruction_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return FollowVel_Instruction_getPrototypeOf(o); }

function FollowVel_Instruction_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) FollowVel_Instruction_setPrototypeOf(subClass, superClass); }

function FollowVel_Instruction_setPrototypeOf(o, p) { FollowVel_Instruction_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return FollowVel_Instruction_setPrototypeOf(o, p); }




var FollowVel_Instruction_FollowVel_Instruction =
/*#__PURE__*/
function (_React$Component) {
  FollowVel_Instruction_inherits(FollowVel_Instruction, _React$Component);

  function FollowVel_Instruction(props) {
    FollowVel_Instruction_classCallCheck(this, FollowVel_Instruction);

    return FollowVel_Instruction_possibleConstructorReturn(this, FollowVel_Instruction_getPrototypeOf(FollowVel_Instruction).call(this, props));
  }

  FollowVel_Instruction_createClass(FollowVel_Instruction, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, "Move at the desired velocity as closely as possible. The display bar will rise if you are moving too fast, a and will lower if you are going too slow.");
    }
  }]);

  return FollowVel_Instruction;
}(external_react_default.a.Component);

function FollowVel_Instruction_mapStateToProps(state) {
  return {};
}

/* harmony default export */ var Instructions_FollowVel_Instruction = (Object(external_react_redux_["connect"])(FollowVel_Instruction_mapStateToProps, {})(FollowVel_Instruction_FollowVel_Instruction));
// CONCATENATED MODULE: ./components/Instructions/Race_Instruction.jsx
function Race_Instruction_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Race_Instruction_typeof = function _typeof(obj) { return typeof obj; }; } else { Race_Instruction_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Race_Instruction_typeof(obj); }

function Race_Instruction_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Race_Instruction_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Race_Instruction_createClass(Constructor, protoProps, staticProps) { if (protoProps) Race_Instruction_defineProperties(Constructor.prototype, protoProps); if (staticProps) Race_Instruction_defineProperties(Constructor, staticProps); return Constructor; }

function Race_Instruction_possibleConstructorReturn(self, call) { if (call && (Race_Instruction_typeof(call) === "object" || typeof call === "function")) { return call; } return Race_Instruction_assertThisInitialized(self); }

function Race_Instruction_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Race_Instruction_getPrototypeOf(o) { Race_Instruction_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Race_Instruction_getPrototypeOf(o); }

function Race_Instruction_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Race_Instruction_setPrototypeOf(subClass, superClass); }

function Race_Instruction_setPrototypeOf(o, p) { Race_Instruction_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Race_Instruction_setPrototypeOf(o, p); }




var Race_Instruction_Race_Instruction =
/*#__PURE__*/
function (_React$Component) {
  Race_Instruction_inherits(Race_Instruction, _React$Component);

  function Race_Instruction(props) {
    Race_Instruction_classCallCheck(this, Race_Instruction);

    return Race_Instruction_possibleConstructorReturn(this, Race_Instruction_getPrototypeOf(Race_Instruction).call(this, props));
  }

  Race_Instruction_createClass(Race_Instruction, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, "Race");
    }
  }]);

  return Race_Instruction;
}(external_react_default.a.Component);

function Race_Instruction_mapStateToProps(state) {
  return {};
}

/* harmony default export */ var Instructions_Race_Instruction = (Object(external_react_redux_["connect"])(Race_Instruction_mapStateToProps, {})(Race_Instruction_Race_Instruction));
// CONCATENATED MODULE: ./components/Instructions/Gait_Instruction.jsx
function Gait_Instruction_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Gait_Instruction_typeof = function _typeof(obj) { return typeof obj; }; } else { Gait_Instruction_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Gait_Instruction_typeof(obj); }

function Gait_Instruction_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Gait_Instruction_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Gait_Instruction_createClass(Constructor, protoProps, staticProps) { if (protoProps) Gait_Instruction_defineProperties(Constructor.prototype, protoProps); if (staticProps) Gait_Instruction_defineProperties(Constructor, staticProps); return Constructor; }

function Gait_Instruction_possibleConstructorReturn(self, call) { if (call && (Gait_Instruction_typeof(call) === "object" || typeof call === "function")) { return call; } return Gait_Instruction_assertThisInitialized(self); }

function Gait_Instruction_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Gait_Instruction_getPrototypeOf(o) { Gait_Instruction_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Gait_Instruction_getPrototypeOf(o); }

function Gait_Instruction_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Gait_Instruction_setPrototypeOf(subClass, superClass); }

function Gait_Instruction_setPrototypeOf(o, p) { Gait_Instruction_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Gait_Instruction_setPrototypeOf(o, p); }




var Gait_Instruction_Gait_Instruction =
/*#__PURE__*/
function (_React$Component) {
  Gait_Instruction_inherits(Gait_Instruction, _React$Component);

  function Gait_Instruction(props) {
    Gait_Instruction_classCallCheck(this, Gait_Instruction);

    return Gait_Instruction_possibleConstructorReturn(this, Gait_Instruction_getPrototypeOf(Gait_Instruction).call(this, props));
  }

  Gait_Instruction_createClass(Gait_Instruction, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, "Gait");
    }
  }]);

  return Gait_Instruction;
}(external_react_default.a.Component);

function Gait_Instruction_mapStateToProps(state) {
  return {};
}

/* harmony default export */ var Instructions_Gait_Instruction = (Object(external_react_redux_["connect"])(Gait_Instruction_mapStateToProps, {})(Gait_Instruction_Gait_Instruction));
// CONCATENATED MODULE: ./components/Instructions/Balance_Instruction.jsx
function Balance_Instruction_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Balance_Instruction_typeof = function _typeof(obj) { return typeof obj; }; } else { Balance_Instruction_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Balance_Instruction_typeof(obj); }

function Balance_Instruction_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Balance_Instruction_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Balance_Instruction_createClass(Constructor, protoProps, staticProps) { if (protoProps) Balance_Instruction_defineProperties(Constructor.prototype, protoProps); if (staticProps) Balance_Instruction_defineProperties(Constructor, staticProps); return Constructor; }

function Balance_Instruction_possibleConstructorReturn(self, call) { if (call && (Balance_Instruction_typeof(call) === "object" || typeof call === "function")) { return call; } return Balance_Instruction_assertThisInitialized(self); }

function Balance_Instruction_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Balance_Instruction_getPrototypeOf(o) { Balance_Instruction_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Balance_Instruction_getPrototypeOf(o); }

function Balance_Instruction_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Balance_Instruction_setPrototypeOf(subClass, superClass); }

function Balance_Instruction_setPrototypeOf(o, p) { Balance_Instruction_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Balance_Instruction_setPrototypeOf(o, p); }




var Balance_Instruction_Balance_Instruction =
/*#__PURE__*/
function (_React$Component) {
  Balance_Instruction_inherits(Balance_Instruction, _React$Component);

  function Balance_Instruction(props) {
    Balance_Instruction_classCallCheck(this, Balance_Instruction);

    return Balance_Instruction_possibleConstructorReturn(this, Balance_Instruction_getPrototypeOf(Balance_Instruction).call(this, props));
  }

  Balance_Instruction_createClass(Balance_Instruction, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, "Move at the desired velocity as closely as possible. The display bar will rise if you are moving too fast, a and will lower if you are going too slow.");
    }
  }]);

  return Balance_Instruction;
}(external_react_default.a.Component);

function Balance_Instruction_mapStateToProps(state) {
  return {};
}

/* harmony default export */ var Instructions_Balance_Instruction = (Object(external_react_redux_["connect"])(Balance_Instruction_mapStateToProps, {})(Balance_Instruction_Balance_Instruction));
// CONCATENATED MODULE: ./games/Test_timer.js
function Test_timer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Test_timer_typeof = function _typeof(obj) { return typeof obj; }; } else { Test_timer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Test_timer_typeof(obj); }

function Test_timer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Test_timer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Test_timer_createClass(Constructor, protoProps, staticProps) { if (protoProps) Test_timer_defineProperties(Constructor.prototype, protoProps); if (staticProps) Test_timer_defineProperties(Constructor, staticProps); return Constructor; }

function Test_timer_possibleConstructorReturn(self, call) { if (call && (Test_timer_typeof(call) === "object" || typeof call === "function")) { return call; } return Test_timer_assertThisInitialized(self); }

function Test_timer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Test_timer_getPrototypeOf(o) { Test_timer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Test_timer_getPrototypeOf(o); }

function Test_timer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Test_timer_setPrototypeOf(subClass, superClass); }

function Test_timer_setPrototypeOf(o, p) { Test_timer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Test_timer_setPrototypeOf(o, p); }



 //OBJLoader(THREE);

 //require("/home/rehab/Documents/RehabRobot/server/games/sprite/crosshair.png")
//require("/home/rehab/Documents/RehabRobot/server/games/sprite/crosshair_yellow.png" );

var Test_timer_Test_timer =
/*#__PURE__*/
function (_Component) {
  Test_timer_inherits(Test_timer, _Component);

  function Test_timer(props) {
    Test_timer_classCallCheck(this, Test_timer);

    return Test_timer_possibleConstructorReturn(this, Test_timer_getPrototypeOf(Test_timer).call(this, props));
  }

  Test_timer_createClass(Test_timer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      this.timerID = setInterval(function () {
        return _this.tick();
      }, 50);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timerID);
    }
  }, {
    key: "tick",
    value: function tick() {
      this.props.setParam('x', this.props.x + 3);
      this.props.setParam('xdes', this.props.xdes + 3);
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, "Test Timer Active");
    }
  }]);

  return Test_timer;
}(external_react_["Component"]);

function Test_timer_mapStateToProps(state) {
  //map state variables to the component's state 
  return {
    x: state.x,
    xdes: state.xdes
  };
}

/* harmony default export */ var games_Test_timer = (Object(external_react_redux_["connect"])(Test_timer_mapStateToProps, {
  setParam: setParam //add importing action functions here

})(Test_timer_Test_timer));
// CONCATENATED MODULE: ./components/Generic/HomeButton.jsx
function HomeButton_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { HomeButton_typeof = function _typeof(obj) { return typeof obj; }; } else { HomeButton_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return HomeButton_typeof(obj); }

function HomeButton_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function HomeButton_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function HomeButton_createClass(Constructor, protoProps, staticProps) { if (protoProps) HomeButton_defineProperties(Constructor.prototype, protoProps); if (staticProps) HomeButton_defineProperties(Constructor, staticProps); return Constructor; }

function HomeButton_possibleConstructorReturn(self, call) { if (call && (HomeButton_typeof(call) === "object" || typeof call === "function")) { return call; } return HomeButton_assertThisInitialized(self); }

function HomeButton_getPrototypeOf(o) { HomeButton_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return HomeButton_getPrototypeOf(o); }

function HomeButton_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) HomeButton_setPrototypeOf(subClass, superClass); }

function HomeButton_setPrototypeOf(o, p) { HomeButton_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return HomeButton_setPrototypeOf(o, p); }

function HomeButton_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var HomeButton_HomeButton =
/*#__PURE__*/
function (_React$Component) {
  HomeButton_inherits(HomeButton, _React$Component);

  function HomeButton(props) {
    var _this;

    HomeButton_classCallCheck(this, HomeButton);

    _this = HomeButton_possibleConstructorReturn(this, HomeButton_getPrototypeOf(HomeButton).call(this, props));
    _this.run = _this.run.bind(HomeButton_assertThisInitialized(HomeButton_assertThisInitialized(_this)));
    return _this;
  }

  HomeButton_createClass(HomeButton, [{
    key: "run",
    value: function run() {
      //change this to send different data
      var dataToSend = 'HOME';
      console.log(dataToSend);
      this.props.socket.emit('START_ROBOT', dataToSend);
      this.props.setValue('home', 1);
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        style: {
          padding: 12
        }
      }, external_react_default.a.createElement(Button_default.a, {
        variant: "contained",
        color: "primary",
        onClick: this.run
      }, this.props.text));
    }
  }]);

  return HomeButton;
}(external_react_default.a.Component);

function HomeButton_mapStateToProps(state) {
  return {
    socket: state.socket
  };
}

/* harmony default export */ var Generic_HomeButton = (Object(external_react_redux_["connect"])(HomeButton_mapStateToProps, {
  runRobot: runRobot,
  setValue: setValue
})(HomeButton_HomeButton)); //
// CONCATENATED MODULE: ./components/Pages/VisualsPage.jsx
function VisualsPage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VisualsPage_typeof = function _typeof(obj) { return typeof obj; }; } else { VisualsPage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VisualsPage_typeof(obj); }

function VisualsPage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VisualsPage_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VisualsPage_createClass(Constructor, protoProps, staticProps) { if (protoProps) VisualsPage_defineProperties(Constructor.prototype, protoProps); if (staticProps) VisualsPage_defineProperties(Constructor, staticProps); return Constructor; }

function VisualsPage_possibleConstructorReturn(self, call) { if (call && (VisualsPage_typeof(call) === "object" || typeof call === "function")) { return call; } return VisualsPage_assertThisInitialized(self); }

function VisualsPage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VisualsPage_getPrototypeOf(o) { VisualsPage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VisualsPage_getPrototypeOf(o); }

function VisualsPage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VisualsPage_setPrototypeOf(subClass, superClass); }

function VisualsPage_setPrototypeOf(o, p) { VisualsPage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VisualsPage_setPrototypeOf(o, p); }



















var VisualsPage_VisualsPage =
/*#__PURE__*/
function (_React$Component) {
  VisualsPage_inherits(VisualsPage, _React$Component);

  function VisualsPage(props) {
    var _this;

    VisualsPage_classCallCheck(this, VisualsPage);

    _this = VisualsPage_possibleConstructorReturn(this, VisualsPage_getPrototypeOf(VisualsPage).call(this, props));
    _this.state = {
      content: null
    };
    return _this;
  }

  VisualsPage_createClass(VisualsPage, [{
    key: "render",
    value: function render() {
      if (this.props.run) {
        switch (this.props.game) {
          case 1:
            this.state.content = external_react_default.a.createElement("div", {
              style: {
                display: 'inline-flex'
              }
            }, external_react_default.a.createElement(games_Race_game, null));
            break;

          case 2:
            this.state.content = external_react_default.a.createElement("div", {
              style: {
                display: 'inline-flex'
              }
            }, external_react_default.a.createElement(games_Follow_vel, null));
            break;

          case 3:
            this.state.content = external_react_default.a.createElement("div", {
              style: {
                display: 'inline-flex'
              }
            }, external_react_default.a.createElement(games_Race_game, null), external_react_default.a.createElement(games_Follow_traj, null));
            break;

          case 4:
            this.state.content = external_react_default.a.createElement("div", {
              style: {
                display: 'inline-flex'
              }
            }, external_react_default.a.createElement(games_Race_game, null), external_react_default.a.createElement(games_Follow_vel, null));
            break;

          case 5:
            this.state.content = external_react_default.a.createElement("div", {
              style: {
                display: 'inline-flex'
              }
            }, external_react_default.a.createElement(games_Balance_game, null));
            break;

          case 6:
            this.state.content = external_react_default.a.createElement("div", {
              style: {
                display: 'inline-flex'
              }
            }, external_react_default.a.createElement(games_Gait_game, null));

          default:
            external_react_default.a.createElement("div", null, " Game load failed ");
        }
      } else {
        switch (this.props.game) {
          case 1:
            this.state.content = external_react_default.a.createElement("div", null, external_react_default.a.createElement(Instructions_FollowTraj_Instruction, null), external_react_default.a.createElement("div", {
              style: {
                display: 'inline-flex'
              }
            }, external_react_default.a.createElement(Generic_HomeButton, {
              text: "Home"
            }), external_react_default.a.createElement(Generic_RunButton, {
              text: "Run"
            })));
            break;

          case 2:
            this.state.content = external_react_default.a.createElement("div", null, external_react_default.a.createElement(Instructions_FollowVel_Instruction, null), external_react_default.a.createElement("div", {
              style: {
                display: 'inline-flex'
              }
            }, external_react_default.a.createElement(Generic_HomeButton, {
              text: "Home"
            }), external_react_default.a.createElement(Generic_RunButton, {
              text: "Run"
            })));
            break;

          case 3:
            this.state.content = external_react_default.a.createElement("div", null, external_react_default.a.createElement(Instructions_Race_Instruction, null), external_react_default.a.createElement("div", {
              style: {
                display: 'inline-flex'
              }
            }, external_react_default.a.createElement(Generic_HomeButton, {
              text: "Home"
            }), external_react_default.a.createElement(Generic_RunButton, {
              text: "Run"
            })));
            break;

          case 4:
            this.state.content = external_react_default.a.createElement("div", null, external_react_default.a.createElement(Instructions_Race_Instruction, null), external_react_default.a.createElement("div", {
              style: {
                display: 'inline-flex'
              }
            }, external_react_default.a.createElement(Generic_HomeButton, {
              text: "Home"
            }), external_react_default.a.createElement(Generic_RunButton, {
              text: "Run"
            })));
            break;

          case 5:
            this.state.content = external_react_default.a.createElement("div", null, external_react_default.a.createElement(Instructions_Balance_Instruction, null), external_react_default.a.createElement("div", {
              style: {
                display: 'inline-flex'
              }
            }, external_react_default.a.createElement(Generic_HomeButton, {
              text: "Home"
            }), external_react_default.a.createElement(Generic_RunButton, {
              text: "Run"
            })));
            break;

          case 6:
            this.state.content = external_react_default.a.createElement("div", null, external_react_default.a.createElement(Instructions_Gait_Instruction, null), external_react_default.a.createElement("div", {
              style: {
                display: 'inline-flex'
              }
            }, external_react_default.a.createElement(Generic_HomeButton, {
              text: "Home"
            }), external_react_default.a.createElement(Generic_RunButton, {
              text: "Run"
            })));
            break;

          default:
            external_react_default.a.createElement("div", null, " Game load failed ");
        }
      }

      return external_react_default.a.createElement("div", null, this.state.content);
    }
  }]);

  return VisualsPage;
}(external_react_default.a.Component);

function VisualsPage_mapStateToProps(state) {
  return {
    game: state.game,
    run: state.run,
    stage: state.stage
  };
}

/* harmony default export */ var Pages_VisualsPage = (Object(external_react_redux_["connect"])(VisualsPage_mapStateToProps, {
  setParam: setParam
})(VisualsPage_VisualsPage));
// EXTERNAL MODULE: external "@material-ui/core/Radio"
var Radio_ = __webpack_require__(15);
var Radio_default = /*#__PURE__*/__webpack_require__.n(Radio_);

// EXTERNAL MODULE: external "@material-ui/core/RadioGroup"
var RadioGroup_ = __webpack_require__(30);
var RadioGroup_default = /*#__PURE__*/__webpack_require__.n(RadioGroup_);

// EXTERNAL MODULE: external "@material-ui/core/FormControlLabel"
var FormControlLabel_ = __webpack_require__(16);
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel_);

// EXTERNAL MODULE: external "@material-ui/core/FormLabel"
var FormLabel_ = __webpack_require__(31);
var FormLabel_default = /*#__PURE__*/__webpack_require__.n(FormLabel_);

// CONCATENATED MODULE: ./components/Pages/SettingsPage.jsx
function SettingsPage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SettingsPage_typeof = function _typeof(obj) { return typeof obj; }; } else { SettingsPage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SettingsPage_typeof(obj); }

function SettingsPage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SettingsPage_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SettingsPage_createClass(Constructor, protoProps, staticProps) { if (protoProps) SettingsPage_defineProperties(Constructor.prototype, protoProps); if (staticProps) SettingsPage_defineProperties(Constructor, staticProps); return Constructor; }

function SettingsPage_possibleConstructorReturn(self, call) { if (call && (SettingsPage_typeof(call) === "object" || typeof call === "function")) { return call; } return SettingsPage_assertThisInitialized(self); }

function SettingsPage_getPrototypeOf(o) { SettingsPage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SettingsPage_getPrototypeOf(o); }

function SettingsPage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SettingsPage_setPrototypeOf(subClass, superClass); }

function SettingsPage_setPrototypeOf(o, p) { SettingsPage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SettingsPage_setPrototypeOf(o, p); }

function SettingsPage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SettingsPage_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var SettingsPage_SettingsPage =
/*#__PURE__*/
function (_React$Component) {
  SettingsPage_inherits(SettingsPage, _React$Component);

  function SettingsPage(props) {
    var _this;

    SettingsPage_classCallCheck(this, SettingsPage);

    _this = SettingsPage_possibleConstructorReturn(this, SettingsPage_getPrototypeOf(SettingsPage).call(this, props));

    SettingsPage_defineProperty(SettingsPage_assertThisInitialized(SettingsPage_assertThisInitialized(_this)), "handleChange", function (event) {
      console.log(parseInt(event.target.value));

      _this.props.setUser(parseInt(event.target.value));
    });

    return _this;
  }

  SettingsPage_createClass(SettingsPage, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(FormControl_default.a, {
        component: "fieldset"
      }, external_react_default.a.createElement(FormLabel_default.a, {
        component: "legend"
      }, "User Setting"), external_react_default.a.createElement(RadioGroup_default.a, {
        "aria-label": "User",
        name: "user1",
        value: this.props.u_value,
        onChange: this.handleChange
      }, external_react_default.a.createElement(FormControlLabel_default.a, {
        value: "1",
        control: external_react_default.a.createElement(Radio_default.a, {
          color: "secondary"
        }),
        label: "Developer"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        value: "2",
        control: external_react_default.a.createElement(Radio_default.a, {
          color: "secondary"
        }),
        label: "User"
      }), external_react_default.a.createElement(FormControlLabel_default.a, {
        value: "3",
        control: external_react_default.a.createElement(Radio_default.a, {
          color: "secondary"
        }),
        label: "Expriment"
      })));
    }
  }]);

  return SettingsPage;
}(external_react_default.a.Component);

function SettingsPage_mapStateToProps(state) {
  return {
    u_value: state.user.toString()
  };
}

/* harmony default export */ var Pages_SettingsPage = (Object(external_react_redux_["connect"])(SettingsPage_mapStateToProps, {
  setUser: setUser
})(SettingsPage_SettingsPage));
// CONCATENATED MODULE: ./components/Pages/BasicSetupPage.jsx
function BasicSetupPage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { BasicSetupPage_typeof = function _typeof(obj) { return typeof obj; }; } else { BasicSetupPage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return BasicSetupPage_typeof(obj); }

function BasicSetupPage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BasicSetupPage_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function BasicSetupPage_createClass(Constructor, protoProps, staticProps) { if (protoProps) BasicSetupPage_defineProperties(Constructor.prototype, protoProps); if (staticProps) BasicSetupPage_defineProperties(Constructor, staticProps); return Constructor; }

function BasicSetupPage_possibleConstructorReturn(self, call) { if (call && (BasicSetupPage_typeof(call) === "object" || typeof call === "function")) { return call; } return BasicSetupPage_assertThisInitialized(self); }

function BasicSetupPage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function BasicSetupPage_getPrototypeOf(o) { BasicSetupPage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return BasicSetupPage_getPrototypeOf(o); }

function BasicSetupPage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) BasicSetupPage_setPrototypeOf(subClass, superClass); }

function BasicSetupPage_setPrototypeOf(o, p) { BasicSetupPage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return BasicSetupPage_setPrototypeOf(o, p); }










var BasicSetupPage_BasicSetupPage =
/*#__PURE__*/
function (_React$Component) {
  BasicSetupPage_inherits(BasicSetupPage, _React$Component);

  function BasicSetupPage(props) {
    BasicSetupPage_classCallCheck(this, BasicSetupPage);

    return BasicSetupPage_possibleConstructorReturn(this, BasicSetupPage_getPrototypeOf(BasicSetupPage).call(this, props));
  }

  BasicSetupPage_createClass(BasicSetupPage, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Typography_default.a, {
        variant: "display1",
        gutterBottom: true
      }, "Set Up a Session"), external_react_default.a.createElement("div", {
        style: {
          padding: 24
        }
      }, external_react_default.a.createElement(Generic_InputText, {
        text: "Resistance Level",
        textValue: this.props.P,
        paramName: "P"
      })), external_react_default.a.createElement("div", {
        style: {
          padding: 12
        }
      }, external_react_default.a.createElement(SetButton, {
        text: "Set"
      })), external_react_default.a.createElement("div", {
        style: {
          padding: 12
        }
      }, external_react_default.a.createElement(Generic_RunButton, {
        text: "Run"
      })));
    }
  }]);

  return BasicSetupPage;
}(external_react_default.a.Component);

function BasicSetupPage_mapStateToProps(state) {
  return {
    P: state.P,
    D: state.D,
    xdes: state.xdes,
    K: state.K,
    B: state.B,
    M: state.M
  };
}

/* harmony default export */ var Pages_BasicSetupPage = (Object(external_react_redux_["connect"])(BasicSetupPage_mapStateToProps, {})(BasicSetupPage_BasicSetupPage));
// CONCATENATED MODULE: ./components/Setups/Experiment2019.jsx
function Experiment2019_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Experiment2019_typeof = function _typeof(obj) { return typeof obj; }; } else { Experiment2019_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Experiment2019_typeof(obj); }

function Experiment2019_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Experiment2019_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Experiment2019_createClass(Constructor, protoProps, staticProps) { if (protoProps) Experiment2019_defineProperties(Constructor.prototype, protoProps); if (staticProps) Experiment2019_defineProperties(Constructor, staticProps); return Constructor; }

function Experiment2019_possibleConstructorReturn(self, call) { if (call && (Experiment2019_typeof(call) === "object" || typeof call === "function")) { return call; } return Experiment2019_assertThisInitialized(self); }

function Experiment2019_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Experiment2019_getPrototypeOf(o) { Experiment2019_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Experiment2019_getPrototypeOf(o); }

function Experiment2019_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Experiment2019_setPrototypeOf(subClass, superClass); }

function Experiment2019_setPrototypeOf(o, p) { Experiment2019_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Experiment2019_setPrototypeOf(o, p); }











var Experiment2019_Experiment2019 =
/*#__PURE__*/
function (_React$Component) {
  Experiment2019_inherits(Experiment2019, _React$Component);

  function Experiment2019(props) {
    Experiment2019_classCallCheck(this, Experiment2019);

    return Experiment2019_possibleConstructorReturn(this, Experiment2019_getPrototypeOf(Experiment2019).call(this, props));
  }

  Experiment2019_createClass(Experiment2019, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        style: {
          padding: 24
        }
      }, external_react_default.a.createElement(Typography_default.a, {
        variant: "display1",
        gutterBottom: true
      }, "Set Up a Session"), external_react_default.a.createElement(Generic_Dropdown, {
        text: "Experiment",
        id: "exp",
        value: this.props.exp,
        select1: "Expirment A",
        select2: "Expirment B",
        select3: "Expirment C"
      }), external_react_default.a.createElement(SetButton, {
        text: "Set"
      }));
    }
  }]);

  return Experiment2019;
}(external_react_default.a.Component);

function Experiment2019_mapStateToProps(state) {
  return {
    exp: state.exp
  };
}

/* harmony default export */ var Setups_Experiment2019 = (Object(external_react_redux_["connect"])(Experiment2019_mapStateToProps, {})(Experiment2019_Experiment2019)); //
// CONCATENATED MODULE: ./components/ContentWindow.jsx
function ContentWindow_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ContentWindow_typeof = function _typeof(obj) { return typeof obj; }; } else { ContentWindow_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ContentWindow_typeof(obj); }

function ContentWindow_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ContentWindow_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ContentWindow_createClass(Constructor, protoProps, staticProps) { if (protoProps) ContentWindow_defineProperties(Constructor.prototype, protoProps); if (staticProps) ContentWindow_defineProperties(Constructor, staticProps); return Constructor; }

function ContentWindow_possibleConstructorReturn(self, call) { if (call && (ContentWindow_typeof(call) === "object" || typeof call === "function")) { return call; } return ContentWindow_assertThisInitialized(self); }

function ContentWindow_getPrototypeOf(o) { ContentWindow_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ContentWindow_getPrototypeOf(o); }

function ContentWindow_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ContentWindow_setPrototypeOf(subClass, superClass); }

function ContentWindow_setPrototypeOf(o, p) { ContentWindow_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ContentWindow_setPrototypeOf(o, p); }

function ContentWindow_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ContentWindow_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














var WIRELESS = 1;

var ContentWindow_WindowContent =
/*#__PURE__*/
function (_React$Component) {
  ContentWindow_inherits(WindowContent, _React$Component);

  function WindowContent(props) {
    var _this;

    ContentWindow_classCallCheck(this, WindowContent);

    _this = ContentWindow_possibleConstructorReturn(this, ContentWindow_getPrototypeOf(WindowContent).call(this, props));

    ContentWindow_defineProperty(ContentWindow_assertThisInitialized(ContentWindow_assertThisInitialized(_this)), "handleMessage", function (message) {
      console.log('Message Recieved: ' + message);
      var res = message.split(",");

      _this.props.setParam('x', res[0]);

      _this.props.setParam('xdes', res[1]);

      _this.props.setParam('v', res[2]);

      _this.props.setParam('vdes', res[3]);

      _this.props.setParam('x_ball', res[4]);
    });

    ContentWindow_defineProperty(ContentWindow_assertThisInitialized(ContentWindow_assertThisInitialized(_this)), "handleEndStage", function (message) {
      console.log('Stage Ended');

      _this.props.setParam('stage', _this.props.stage + 1);

      _this.props.setParam('run', 0);

      switch (_this.props.exp) {
        case 1:
          if (_this.props.stage > 5) {
            _this.props.setParam('game', 2);
          }

          break;

        case 2:
          if (_this.props.stage > 1) {
            _this.props.setParam('game', 2);
          }

          if (_this.props.stage > 2) {
            _this.props.setParam('game', 1);
          }

          break;

        case 3:
          switch (_this.props.stage) {
            case 1:
              _this.props.setParam('game', 3);

              break;

            case 2:
              _this.props.setParam('game', 4);

              break;

            case 3:
              _this.props.setParam('game', 5);

              break;

            case 4:
              _this.props.setParam('game', 6);

              break;
          }

          break;
      }
    });

    _this.state = {
      content: null,
      style: null
    };
    return _this;
  }

  ContentWindow_createClass(WindowContent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var socketio = external_socket_io_client_default()();
      socketio.on('message', this.handleMessage);
      socketio.on('END_STAGE', this.handleEndStage);
      console.log(socketio);
      this.props.setSocket(socketio);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log('unmount');
      this.props.socket.close();
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
          if (this.props.user == 1) {
            this.state.content = external_react_default.a.createElement("div", {
              style: this.state.style
            }, " ", external_react_default.a.createElement(Pages_SetupPage, null), " ");
          }

          if (this.props.user == 2) {
            this.state.content = external_react_default.a.createElement("div", {
              style: this.state.style
            }, " ", external_react_default.a.createElement(Pages_SetupPage, null), " ");
          }

          if (this.props.user == 3) {
            this.state.content = external_react_default.a.createElement("div", {
              style: this.state.style
            }, " ", external_react_default.a.createElement(Setups_Experiment2019, null), " ");
          }

          break;

        case 2:
          this.state.content = external_react_default.a.createElement("div", {
            style: this.state.style
          }, " ", external_react_default.a.createElement(Pages_VisualsPage, null), " ");
          break;

        case 3:
          this.state.content = external_react_default.a.createElement("div", {
            style: this.state.style
          }, " ", external_react_default.a.createElement(Pages_SettingsPage, null), " ");
          break;

        default:
          this.state.content = external_react_default.a.createElement("div", {
            style: this.state.style
          }, " Page Load Failed ");
      }

      return external_react_default.a.createElement("div", null, this.state.content);
    }
  }]);

  return WindowContent;
}(external_react_default.a.Component);

function ContentWindow_mapStateToProps(state) {
  //map state variables to the component's state 
  return {
    activePage: state.activePage,
    menuOpen: state.menuOpen,
    socket: state.socket,
    user: state.user,
    stage: state.stage,
    exp: state.exp
  };
}

/* harmony default export */ var ContentWindow = (Object(external_react_redux_["connect"])(ContentWindow_mapStateToProps, {
  setSocket: setSocket,
  setParam: setParam //add importing action functions here

})(ContentWindow_WindowContent));
// EXTERNAL MODULE: external "react-websocket"
var external_react_websocket_ = __webpack_require__(34);

// CONCATENATED MODULE: ./components/App.jsx
function App_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { App_typeof = function _typeof(obj) { return typeof obj; }; } else { App_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return App_typeof(obj); }

function App_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function App_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function App_createClass(Constructor, protoProps, staticProps) { if (protoProps) App_defineProperties(Constructor.prototype, protoProps); if (staticProps) App_defineProperties(Constructor, staticProps); return Constructor; }

function App_possibleConstructorReturn(self, call) { if (call && (App_typeof(call) === "object" || typeof call === "function")) { return call; } return App_assertThisInitialized(self); }

function App_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function App_getPrototypeOf(o) { App_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return App_getPrototypeOf(o); }

function App_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) App_setPrototypeOf(subClass, superClass); }

function App_setPrototypeOf(o, p) { App_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return App_setPrototypeOf(o, p); }






/*
import TopbarCont from '../containers/TopbarCont'
import ContentCont from '../containers/ContentCont'
import SocketCont from '../containers/socketCont'

<TopbarCont />
<br/><br/><br/><br/>
<ContentCont />
				
*/



var App_App =
/*#__PURE__*/
function (_React$Component) {
  App_inherits(App, _React$Component);

  function App(props) {
    App_classCallCheck(this, App);

    return App_possibleConstructorReturn(this, App_getPrototypeOf(App).call(this, props));
  }

  App_createClass(App, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Drawer, null), external_react_default.a.createElement(components_Topbar, {
        title: "Rehab Robot"
      }), external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), external_react_default.a.createElement(ContentWindow, null));
    }
  }]);

  return App;
}(external_react_default.a.Component);

function App_mapStateToProps(state) {
  return {};
}

/* harmony default export */ var components_App = (Object(external_react_redux_["connect"])(App_mapStateToProps, {})(App_App));
// CONCATENATED MODULE: ./pages/index.jsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pages_default; });
function pages_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages_typeof = function _typeof(obj) { return typeof obj; }; } else { pages_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages_typeof(obj); }

function pages_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages_createClass(Constructor, protoProps, staticProps) { if (protoProps) pages_defineProperties(Constructor.prototype, protoProps); if (staticProps) pages_defineProperties(Constructor, staticProps); return Constructor; }

function pages_possibleConstructorReturn(self, call) { if (call && (pages_typeof(call) === "object" || typeof call === "function")) { return call; } return pages_assertThisInitialized(self); }

function pages_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pages_getPrototypeOf(o) { pages_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return pages_getPrototypeOf(o); }

function pages_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) pages_setPrototypeOf(subClass, superClass); }

function pages_setPrototypeOf(o, p) { pages_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return pages_setPrototypeOf(o, p); }










var store = Object(external_redux_["createStore"])(reducers);

var pages_default =
/*#__PURE__*/
function (_React$Component) {
  pages_inherits(_default, _React$Component);

  function _default() {
    pages_classCallCheck(this, _default);

    return pages_possibleConstructorReturn(this, pages_getPrototypeOf(_default).apply(this, arguments));
  }

  pages_createClass(_default, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_react_redux_["Provider"], {
        store: store
      }, external_react_default.a.createElement(components_App, null));
    }
  }]);

  return _default;
}(external_react_default.a.Component);



/***/ })
/******/ ]);