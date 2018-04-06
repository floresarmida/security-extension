/*
SCRIPT DUCK:
Used for ad-hoc execution of single scripts
Contains the redux actions for single script execution
*/
import cuid from 'cuid'
/*
CORE SCRIPTS
These are scripts built into the extension that can be automatically executed
*/
import { findComments, getBoundFunctions, getGlobalState, getInlineValues, revealHiddenElements } from '../core/scripts'
import { RAW_DOM_INJECTION } from '../core/DOM'

/*
CONSTANTS
*/
const ADD_SCRIPT = 'ADD_SCRIPT'
const DELETE_SCRIPT = 'DELETE_SCRIPT'
const EDIT_SCRIPT = 'EDIT_SCRIPT'
const SCRIPT_EXECUTED_SUCCESS = 'SCRIPT_EXECUTED_SUCCESS'
const SCRIPT_EXECUTED_FAILURE = 'SCRIPT_EXECUTED_FAILURE'
const EXECUTE_GROUP = 'EXECUTE_GROUP'
const CLEAR_EXECUTED = 'CLEAR_EXECUTED'
//  Legacy
export const SHOW_ALL = 'SHOW_ALL'
export const SHOW_EXECUTED = 'SHOW_EXECUTED'
export const SHOW_ACTIVE = 'SHOW_ACTIVE'

/*
ACTIONS
  Anonymous Functions: Asyncronous, returns an action creator
  Normal Functions: Are "Thunks", AKA functions that return a function that gets resolved by middleware. Used for async actions.

*/
export const addScript = (title) => ({ type: ADD_SCRIPT, title })
export const deleteScript = (id) => ({ type: DELETE_SCRIPT, id })
export const editScript = (id, title) => ({ type: EDIT_SCRIPT, id, title })
//  https://stackoverflow.com/questions/4532236/how-to-access-the-webpage-dom-rather-than-the-extension-page-dom

export const executeScript = (id, body) => {
  return async function (dispatch) {
    const script = { id, title: 'title', body }
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
        ? dispatch({ type: SCRIPT_EXECUTED_SUCCESS, id, output })
        : dispatch({ type: SCRIPT_EXECUTED_SUCCESS, id, output: 'No Output' })
    } catch (err) {
      console.warn('Security Extension Error w/ Script:', err)
      dispatch({ type: SCRIPT_EXECUTED_FAILURE, id, output: err })
    }
  }
}
export const executeGroup = (group) => ({ type: EXECUTE_GROUP, group })
export const clearExecuted = (id) => ({ type: CLEAR_EXECUTED, id })
//  clearAllExecuted

/*
REDUCER
*/
const initialState = [
  {
    id: cuid(),
    group: 'Inspection',
    title: 'Get Global State',
    description: 'Unsecured top-level variables',
    body: getGlobalState,
    executed: false,
    output: ''
  }, {
    id: cuid(),
    group: 'Inspection',
    title: 'Get Inline Form Values',
    description: 'Form IDs, hardcoded values, etc.',
    body: getInlineValues,
    executed: false,
    output: ''
  }, {
    id: cuid(),
    group: 'Inspection',
    title: 'Get Bound Functions',
    description: 'Client-side events you can trigger, e.g. onClick(e)',
    body: getBoundFunctions,
    executed: false,
    output: ''
  }, {
    id: cuid(),
    group: 'Static Analysis',
    title: 'Find Inline Comments',
    description: '',
    body: findComments,
    executed: false,
    output: ''
  }, {
    id: cuid(),
    group: 'Document Manipulation',
    title: 'Reveal Hidden Elements',
    description: 'Forces hidden buttons to render, outlines them in red',
    body: revealHiddenElements,
    executed: false,
    output: ''
  }
]

const actionsMap = {
  [ADD_SCRIPT] (state, action) {
    return [{
      id: cuid(),
      group: 'Uncategorized',
      title: action.title,
      description: action.description,
      body: action.body,
      executed: false,
      output: ''
    }, ...state]
  },
  [DELETE_SCRIPT] (state, action) {
    return state.filter(script => script.id !== action.id)
  },
  [EDIT_SCRIPT] (state, action) {
    return state.map(script =>
      (script.id === action.id
        ? Object.assign({}, script, { title: action.title })
        : script
      )
    )
  },
  [SCRIPT_EXECUTED_SUCCESS] (state, action) {
    return state.map(script =>
      (script.id === action.id)
        ? Object.assign({}, script, { executed: true, output: action.output })
        : script
    )
  },
  [SCRIPT_EXECUTED_FAILURE] (state, action) {
    //  Code is identical for now
    return state.map(script =>
      (script.id === action.id)
        ? Object.assign({}, script, { executed: true, output: action.output })
        : script
    )
  },
  //  TODO: Refactor to include queries.
  [EXECUTE_GROUP] (state, action) {
    return state.map(script =>
      (script.group === action.group)
        ? Object.assign({}, script, { executed: true })
        : script
    )
  },
  [CLEAR_EXECUTED] (state/*, action */) {
    return state.map(script =>
      Object.assign({}, script, { executed: false })
    )
  }
}

export default function scripts (state = initialState, action) {
  const reduceFn = actionsMap[action.type]
  if (!reduceFn) return state
  return reduceFn(state, action)
}
