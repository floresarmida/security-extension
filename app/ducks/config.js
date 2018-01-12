/*
CONSTANTS
*/
const CHANGE_VIEW = 'CHANGE_VIEW'
const EDIT_CONFIG = 'EDIT_CONFIG'

/*
ACTIONS
*/
export const changeView = (view) => ({ type: CHANGE_VIEW, view })
export const editConfig = (id, text) => ({ type: EDIT_CONFIG, id, text })

/*
REDUCER
*/
const initialState = {
  view: {},
  defaultView: 'dashboard',
  autoRun: false
}

const actionsMap = {
  [CHANGE_VIEW] (state, action) {
    return Object.assign({}, state, { view: action.view })
  },
  [EDIT_CONFIG] (state, action) {
    return Object.assign({}, state, { ...action })
  }
}

export default function config (state = initialState, action) {
  const reduceFn = actionsMap[action.type]
  if (!reduceFn) return state
  return reduceFn(state, action)
}
