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
  menuOpen: false,
  activePage: 1,
  controller: 0,
  kParam: 0,
  bParam: 0
};

function todoApp() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["TOGGLE_DRAWER"]:
      console.log('toggle');
      return Object.assign({}, state, {
        menuOpen: !state.menuOpen
      });
      break;

    case _actions__WEBPACK_IMPORTED_MODULE_1__["OPEN_PAGE"]:
      console.log('open page');
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

    case _actions__WEBPACK_IMPORTED_MODULE_1__["SET_SPRING"]:
      console.log(action.kParam);
      return Object.assign({}, state, {
        kParam: action.kParam
      });
      break;

    case _actions__WEBPACK_IMPORTED_MODULE_1__["SET_DAMPING"]:
      console.log(action.bParam);
      return Object.assign({}, state, {
        bParam: action.bParam
      });
      break;

    case _actions__WEBPACK_IMPORTED_MODULE_1__["RUN_ROBOT"]:
      console.log("Run!");
      break;

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (todoApp);

/***/ })

})
//# sourceMappingURL=index.js.f895000c4eb7e8964e1a.hot-update.js.map