import { combineReducers } from 'redux'
import {
  TOGGLE_DRAWER,
  OPEN_PAGE,
  SELECT_CONTROLLER,
  SET_PARAM,
  RUN_ROBOT,

  SET_SOCKET,
  SET_USER,
  SET_GAME,
  SET_VALUE,
} from './actions'

var initState = {user: 3, menuOpen: false, activePage: 1, socket: null, run: 0,
                    P: 2, D:1, xdes: 0, K:10, B:0.5, M:0.09, 
                    x:0.5, v:0, vdes:0, game:1, xmax: 100.0, vmax: 0.0,  
                    k_contact: 0.0, m_contact: 0.0, k_assist: 0.0, k_floor: 0.0, k_gravity: 0.0,
                    exp: 1, stage: 1, home: 0, x_ball: 0.0, x_end: 400.0,
                };

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
      return Object.assign({}, state, {
        run: 1,
      })
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
    case SET_GAME:
      return Object.assign({}, state, {
        game: action.game,
      })
      break;
      
    case SET_VALUE:
      return Object.assign({}, state, {
        [action.id]: action.value,
      })
      break;
      
    default:
      return state
  }
}

export default todoApp


