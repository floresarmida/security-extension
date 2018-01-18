/*
CONSTANTS
*/
const CHANGE_VIEW = 'CHANGE_VIEW'
const EDIT_CONFIG = 'EDIT_CONFIG'

/*
ACTIONS
*/
export const changeView = (view) => ({ type: CHANGE_VIEW, view })
export const editConfig = (edits) => ({ type: EDIT_CONFIG, edits })

/*
REDUCER
*/
const initialState = {
  view: 'dashboard',
  autorun: false,
  editor: {
    theme: 'github',
    fontSize: 16,
    options: {
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      enableSnippets: true,
      showLineNumbers: true,
      tabSize: 2
    },
    value: `function onLoad(editor) {
  console.log('Loading complete!');
}`
  }
}

const actionsMap = {
  [CHANGE_VIEW] (state, action) {
    return Object.assign({}, state, { view: action.view })
  },
  [EDIT_CONFIG] (state, action) {
    return Object.assign({}, state, { ...action.edits })
  }
}

export default function config (state = initialState, action) {
  const reduceFn = actionsMap[action.type]
  if (!reduceFn) return state
  return reduceFn(state, action)
}
