/*
CONFIG DUCK:
Contains top-level preferences for the app, IDE and JSON inspector
Allows users to tweak preferences such as font size, autocomplete, etc.
*/

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
  dark: true,
  groups: ['Inspection', 'Static Analysis', 'Document Manipulation'],
  editor: {
    theme: 'monokai',
    fontSize: 16,
    tabSize: 2,
    wrapEnabled: true,
    showPrintMargin: true,
    showGutter: true,
    showLineNumbers: true,
    highlightActiveLine: true,
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
    enableSnippets: true,
    displayDataTypes: true
  },
  inspector: {
    theme: 'monokai',
    indentWidth: 4,
    collapsed: true,
    displayDataTypes: true,
    displayObjectSize: true,
    collapseStringsAfterLength: 25,
    enableClipboard: true
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
