webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/reducers.js":
/*!*************************!*\
  !*** ./src/reducers.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/actions.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var initState = {
  menuOpen: false,
  activePage: 1,
  socket: null,
  P: 0,
  D: 0,
  xdes: 0
};

function todoApp() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["TOGGLE_DRAWER"]:
      return Object.assign({}, state, {
        menuOpen: !state.menuOpen
      });
      break;

    case _actions__WEBPACK_IMPORTED_MODULE_1__["OPEN_PAGE"]:
      return Object.assign({}, state, {
        activePage: action.id
      });
      break;

    case _actions__WEBPACK_IMPORTED_MODULE_1__["SELECT_CONTROLLER"]:
      console.log(action.controller);
      return Object.assign({}, state, {
        controller: action.controller
      });
      break;

    case _actions__WEBPACK_IMPORTED_MODULE_1__["SET_PARAM"]:
      console.log(action.id);
      console.log(action.param);
      return Object.assign({}, state, _defineProperty({}, action.id, action.param));
      break;

    case _actions__WEBPACK_IMPORTED_MODULE_1__["RUN_ROBOT"]:
      console.log("Run!");
      break;

    case _actions__WEBPACK_IMPORTED_MODULE_1__["SET_SOCKET"]:
      return Object.assign({}, state, {
        socket: action.socket
      });
      break;

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (todoApp);

/***/ })

})
//# sourceMappingURL=index.js.e21765bfeca5d3eda94f.hot-update.js.map