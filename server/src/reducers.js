import { combineReducers } from 'redux'
import {
  TOGGLE_DRAWER,
  OPEN_PAGE,
  SELECT_CONTROLLER,
  SET_SPRING,
  SET_DAMPING,
  RUN_ROBOT,
} from './actions'

var initState = {menuOpen: false, activePage: 1, controller: 0, kParam: 0, bParam: 0};

function todoApp(state = initState, action) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return Object.assign({}, state, {
        menuOpen: !state.menuOpen,
      })
    case OPEN_PAGE:
      return Object.assign({}, state, {
        activePage: action.id,
      })
    case SELECT_CONTROLLER:
      console.log(action.controller)
      return Object.assign({}, state, {
        controller: action.controller,
      })
    case SET_SPRING:
      console.log(action.kParam)
      return Object.assign({}, state, {
        kParam: action.kParam,
      })
    case SET_DAMPING:
      console.log(action.bParam)
      return Object.assign({}, state, {
        bParam: action.bParam,
      })
    case RUN_ROBOT:
      console.log("Run!")
      
    default:
      return state
  }
}

export default todoApp


