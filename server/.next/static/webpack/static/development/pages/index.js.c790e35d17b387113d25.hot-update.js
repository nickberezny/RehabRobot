webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/actions.js":
/*!************************!*\
  !*** ./src/actions.js ***!
  \************************/
/*! exports provided: CHANGE_TEXT, TOGGLE_DRAWER, OPEN_PAGE, SELECT_CONTROLLER, SET_SPRING, SET_DAMPING, RUN_ROBOT, changeText, toggleDrawer, openPage, selectController, setSpring, setDamping, runRobot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_TEXT", function() { return CHANGE_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_DRAWER", function() { return TOGGLE_DRAWER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_PAGE", function() { return OPEN_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_CONTROLLER", function() { return SELECT_CONTROLLER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SPRING", function() { return SET_SPRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_DAMPING", function() { return SET_DAMPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RUN_ROBOT", function() { return RUN_ROBOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeText", function() { return changeText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleDrawer", function() { return toggleDrawer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openPage", function() { return openPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectController", function() { return selectController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSpring", function() { return setSpring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDamping", function() { return setDamping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runRobot", function() { return runRobot; });
/*
 * action types
 */
var CHANGE_TEXT = 'CHANGE_TEXT';
var TOGGLE_DRAWER = 'TOGGLE_DRAWER';
var OPEN_PAGE = 'OPEN_PAGE';
var SELECT_CONTROLLER = 'SELECT_CONTROLLER';
var SET_SPRING = 'SET_SPRING';
var SET_DAMPING = 'SET_DAMPING';
var RUN_ROBOT = 'RUN_ROBOT';
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
function openPage() {
  return {
    type: OPEN_PAGE
  };
}
var selectController = function selectController(controller) {
  return {
    type: SELECT_CONTROLLER,
    controller: controller
  };
};
var setSpring = function setSpring(param) {
  return {
    type: SET_SPRING,
    kParam: param
  };
};
var setDamping = function setDamping(param) {
  return {
    type: SET_DAMPING,
    bParam: param
  };
};
function runRobot() {
  return {
    type: RUN_ROBOT
  };
}

/***/ })

})
//# sourceMappingURL=index.js.c790e35d17b387113d25.hot-update.js.map