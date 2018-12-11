/*
 * action types
 */
export const CHANGE_TEXT = 'CHANGE_TEXT'
export const TOGGLE_DRAWER = 'TOGGLE_DRAWER'
export const OPEN_PAGE = 'OPEN_PAGE'
export const SELECT_CONTROLLER = 'SELECT_CONTROLLER'
export const SET_PARAM = 'SET_PARAM'
export const RUN_ROBOT = 'RUN_ROBOT'
export const SET_SOCKET = 'SET_SOCKET'
export const SET_USER = 'SET_USER'


/*
 * action creators
 */

export function changeText() {
  return { type: CHANGE_TEXT, text: "Click!"}
}

export function toggleDrawer() {
  return { type: TOGGLE_DRAWER}
}

export function openPage(id) {
  return { type: OPEN_PAGE, id}
}

export function setParam(id, param) {
  return {
  type: SET_PARAM,
  param,
  id }
}

export const selectController = controller => ({
  type: SELECT_CONTROLLER,
  controller: controller
})


export function runRobot() {
  return { type: RUN_ROBOT }
}

export function setSocket(socket) {
  return { type: SET_SOCKET, socket }
}

export function setUser(value) {
  return { type: SET_USER, value }
}