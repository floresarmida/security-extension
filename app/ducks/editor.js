/*
EDITOR DUCK:
Tracks the state of the editor (user input, script output, etc)
*/

/*
IMPORTS
*/
import { RAW_DOM_INJECTION } from '../core/DOM'
// TODO: DRY execution function
// import { executeScript } from './scripts'

/*
CONSTANTS
*/
const EDITOR_INPUT = 'EDITOR_INPUT'
// const EXECUTE_EDITOR_SCRIPT = 'EXECUTE_EDITOR_SCRIPT'
const EDITOR_EXECUTED_SUCCESS = 'EDITOR_EXECUTED_SUCCESS'
const EDITOR_EXECUTED_FAILURE = 'EDITOR_EXECUTED_FAILURE'
// UUID / enum for editor scripts
const EDITOR_SCRIPT_ID = 'EDITOR_SCRIPT'

/*
ACTIONS
*/
export const editorInput = (input) => ({ type: EDITOR_INPUT, input })
// export const editorExecute = (body) => ({ type: EDITOR_EXECUTE, body })
export const executeEditorScript = (body) => {
  return async function (dispatch) {
    const script = { id: EDITOR_SCRIPT_ID, title: 'Editor Script', body }
    try {
      const tabs = await chrome.tabs
        .query({ active: true, currentWindow: true })
      const activeTab = tabs[0].id
      /*
      EXECUTION ENVIRONMENT: (traverses several worlds)
        BACKGROUND -> CONTENT SCRIPT
        CONTENT SCRIPT -> RAW DOM
        RAW DOM -> CONTENT SCRIPT
        CONTENT SCRIPT -> BACKGROUND
      */
      let output = await chrome
        .tabs.executeAsyncFunction(activeTab, RAW_DOM_INJECTION, script)
      console.log('DOM output:', output)
      //  Turn strings/ints into array form for JSON view
      if (output && typeof output !== 'object') output = [output]
      output
        ? dispatch({ type: EDITOR_EXECUTED_SUCCESS, output })
        : dispatch({ type: EDITOR_EXECUTED_SUCCESS, output: 'No Output' })
    } catch (err) {
      console.warn('Security Extension Error w/ Script:', err)
      dispatch({ type: EDITOR_EXECUTED_FAILURE, output: err })
    }
  }
}

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

export const initialState = {
  input: exampleScript,
  output: '',
  packages: []
}

const actionsMap = {
  [EDITOR_INPUT] (state, action) {
    return Object.assign({}, state, { input: action.input })
  },
  [EDITOR_EXECUTED_SUCCESS] (state, action) {
    return Object.assign({}, state, { output: action.output })
  },
  [EDITOR_EXECUTED_FAILURE] (state, action) {
    return Object.assign({}, state, { output: action.output })
  }
}

export default function editor (state = initialState, action) {
  const reduceFn = actionsMap[action.type]
  if (!reduceFn) return state
  return reduceFn(state, action)
}
