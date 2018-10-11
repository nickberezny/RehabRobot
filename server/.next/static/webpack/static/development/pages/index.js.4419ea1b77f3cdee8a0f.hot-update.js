webpackHotUpdate("static\\development\\pages\\index.js",{

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


var initState = {
  menuOpen: true,
  activePage: 2,
  controller: 0,
  kParam: 0,
  bParam: 0
};

function todoApp() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["TOGGLE_DRAWER"]:
      return Object.assign({}, state, {
        menuOpen: !state.menuOpen
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["OPEN_PAGE"]:
      console.log("Opening");
      return Object.assign({}, state, {
        activePage: action.id
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["SELECT_CONTROLLER"]:
      console.log(action.controller);
      return Object.assign({}, state, {
        controller: action.controller
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["SET_SPRING"]:
      console.log(action.kParam);
      return Object.assign({}, state, {
        kParam: action.kParam
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["SET_DAMPING"]:
      console.log(action.bParam);
      return Object.assign({}, state, {
        bParam: action.bParam
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["RUN_ROBOT"]:
      console.log("Run!");

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (todoApp);

/***/ })

})
//# sourceMappingURL=index.js.4419ea1b77f3cdee8a0f.hot-update.js.map