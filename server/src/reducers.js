import { combineReducers } from 'redux'
import {
  TOGGLE_DRAWER,
  OPEN_PAGE,
  SELECT_CONTROLLER,
  SET_PARAM,
  RUN_ROBOT,
  SET_SOCKET,
  SET_USER,
} from './actions'

var initState = {user: 1, menuOpen: false, activePage: 1, socket: null, P: 2, D:1, xdes: 0, K:10, B:0.5, M:0.09, x:0.5 };

function todoApp(state = initState, action) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return Object.assign({}, state, {
        menuOpen: !state.menuOpen,
      })
      break;

    case OPEN_PAGE:
      return Object.assign({}, state, {
        activePage: action.id
      })
      break;

    case SELECT_CONTROLLER:
      console.log(action.controller)
      return Object.assign({}, state, {
        controller: action.controller,
      })
      break;

    case SET_PARAM:
      console.log(action.id)
      console.log(action.param)
      return Object.assign({}, state, {
        [action.id]: action.param,
      })
      break;
 
    case RUN_ROBOT:
      console.log("Run!")
      break;

    case SET_SOCKET:
      return Object.assign({}, state, {
        socket: action.socket,
      })
      break;

    case SET_USER:
      return Object.assign({}, state, {
        user: action.value,
      })
      break;
      
    default:
      return state
  }
}

export default todoApp


