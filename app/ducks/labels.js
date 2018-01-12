/*
CONSTANTS
*/
const ADD_LABEL = 'ADD_LABEL'
const DELETE_LABEL = 'DELETE_LABEL'
const EDIT_LABEL = 'EDIT_LABEL'

/*
ACTIONS
*/
export const addLabel = (text) => ({ type: ADD_LABEL, text })
export const deleteLabel = (id) => ({ type: DELETE_LABEL, id })
export const editLabel = (id, text) => ({ type: EDIT_LABEL, id, text })

/*
REDUCER
*/
const initialState = [{
  text: 'Redux',
  id: 0
}]

const actionsMap = {
  [ADD_LABEL] (state, action) {
    return [{
      id: state.reduce((maxId, label) => Math.max(label.id, maxId), -1) + 1,
      text: action.text
    }, ...state]
  },
  [DELETE_LABEL] (state, action) {
    return state.filter(label =>
      label.id !== action.id
    )
  },
  [EDIT_LABEL] (state, action) {
    return state.map(label =>
      (label.id === action.id
        ? Object.assign({}, label, { ...action })
        : label
      )
    )
  }
}

export default function labels (state = initialState, action) {
  const reduceFn = actionsMap[action.type]
  if (!reduceFn) return state
  return reduceFn(state, action)
}
