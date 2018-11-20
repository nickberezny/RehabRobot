webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/actions.js":
/*!************************!*\
  !*** ./src/actions.js ***!
  \************************/
/*! exports provided: CHANGE_TEXT, TOGGLE_DRAWER, OPEN_PAGE, SELECT_CONTROLLER, SET_PARAM, RUN_ROBOT, SET_SOCKET, changeText, toggleDrawer, openPage, setParam, selectController, runRobot, setSocket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_TEXT", function() { return CHANGE_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_DRAWER", function() { return TOGGLE_DRAWER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_PAGE", function() { return OPEN_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_CONTROLLER", function() { return SELECT_CONTROLLER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PARAM", function() { return SET_PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RUN_ROBOT", function() { return RUN_ROBOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SOCKET", function() { return SET_SOCKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeText", function() { return changeText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleDrawer", function() { return toggleDrawer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openPage", function() { return openPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setParam", function() { return setParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectController", function() { return selectController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runRobot", function() { return runRobot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSocket", function() { return setSocket; });
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
function setSocket() {
  return {
    type: RUN_ROBOT,
    socket: socket
  };
}

/***/ })

})
//# sourceMappingURL=index.js.8b9b28669fe0f1860e0b.hot-update.js.map