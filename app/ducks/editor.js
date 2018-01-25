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
const exampleScript = `const extensionScript = {
  intro: 'This is your first script - welcome!',
  details: 'Write any code you write and it will execute at the deepest execution environment possible, running alongside the active page',
  executionEnvironment: 'Core DOM (lower level than Chrome DevTools or the chrome extension API). The "isolated worlds" of chrome are circumvented',
  supportedFeatures: ['Promises', 'ES6', 'ES7', 'async/await']
}

console.warn('Security Extension was here!', extensionScript)

//  To finish out your script, use RETURN(val) or ERROR(err)
//  This callback will bubble an event with your value back to the extension, e.g.
//  RETURN({ success: true, summary: extensionScript })

//  And here's an async function, we're going to run this one for real.
setTimeout(
  () => RETURN({ success: true, summary: extensionScript }),
  2000
)`

const initialState = {
  input: exampleScript,
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
