/*
CONSTANTS
*/
const EDITOR_INPUT = 'EDITOR_INPUT'

/*
ACTIONS
*/
export const editorInput = (view) => ({ type: EDITOR_INPUT, view })

/*
REDUCER
*/
const initialState = {
  settings: {
    theme: 'github',
    fontSize: 16,
    options: {
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      enableSnippets: true,
      showLineNumbers: true,
      tabSize: 2
    }
  },
  input: `function onLoad(editor) {
  console.log('Loading complete!');
}`,
  output: '',
  packages: []
}

const actionsMap = {
  [EDITOR_INPUT] (state, action) {
    return Object.assign({}, state, { input: action.input })
  }
}

export default function editor (state = initialState, action) {
  const reduceFn = actionsMap[action.type]
  if (!reduceFn) return state
  return reduceFn(state, action)
}
