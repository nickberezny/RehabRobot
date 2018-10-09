/*
 * action types
 */
export const CHANGE_TEXT = 'CHANGE_TEXT'
export const TOGGLE_DRAWER = 'TOGGLE_DRAWER'
export const OPEN_PAGE = 'OPEN_PAGE'
export const SELECT_CONTROLLER = 'SELECT_CONTROLLER'
export const SET_SPRING = 'SET_SPRING'
export const SET_DAMPING = 'SET_DAMPING'
export const RUN_ROBOT = 'RUN_ROBOT'


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

export const selectController = controller => ({
  type: SELECT_CONTROLLER,
  controller: controller
});

export const setSpring = param => ({
  type: SET_SPRING,
  kParam: param
});

export const setDamping = param => ({
  type: SET_DAMPING,
  bParam: param
});

export function runRobot() {
  return { type: RUN_ROBOT }
}