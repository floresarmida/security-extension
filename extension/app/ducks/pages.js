/*
SCRIPT DUCK:
Used for ad-hoc execution of single scripts
Contains the redux actions for single script execution
*/
/*
CORE SCRIPTS
These are scripts built into the extension that can be automatically executed
*/
import uuid from 'uuid/v4'
import { RAW_DOM_INJECTION } from '../core/DOM'

/*
CONSTANTS
*/
const EXECUTE_SCRIPT = 'EXECUTE_SCRIPT'
const SCRIPT_EXECUTED_SUCCESS = 'SCRIPT_EXECUTED_SUCCESS'
const SCRIPT_EXECUTED_FAILURE = 'SCRIPT_EXECUTED_FAILURE'
const EXECUTE_SCRIPT_GROUP = 'EXECUTE_SCRIPT_GROUP'
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
export const executeScript = (tab, script) => {
  return async function (dispatch) {
    try {
      dispatch({ type: EXECUTE_SCRIPT, tab, script })
      console.log('EXECUTING (for debugging, check whitespaces):', script)
      /*
      EXECUTION ENVIRONMENT: (traverses several worlds)
      BACKGROUND -> CONTENT SCRIPT
      CONTENT SCRIPT -> RAW DOM
      RAW DOM -> CONTENT SCRIPT
      CONTENT SCRIPT -> BACKGROUND
      */
      let output = await chrome
        .tabs.executeAsyncFunction(tab.id, RAW_DOM_INJECTION, script)
      // For the sake of being able to stringify later
      if (output && typeof output !== 'object') output = [output]
      dispatch({ type: SCRIPT_EXECUTED_SUCCESS, tab, script, output })
    } catch (err) {
      console.warn('Security Extension Error w/ Script:', err)
      dispatch({ type: SCRIPT_EXECUTED_FAILURE, tab, script, output: err })
    }
  }
}
export const executeGroup = (group) => ({ type: EXECUTE_SCRIPT_GROUP, group })
export const clearExecuted = (id) => ({ type: CLEAR_EXECUTED, id })
//  clearAllExecuted

/*
REDUCER
*/
const initialState = []

const actionsMap = {
  [SCRIPT_EXECUTED_SUCCESS] (state, action) {
    const { tab, script, output = 'No Output' } = action
    let pages = Object.assign({}, state)
    // Initialize a new node by tab ID if necessary
    // TODO: Abstract out to a new function that also discards old nodes
    if (!pages[tab.id]) {
      const { id, index, title, url } = tab
      pages[tab.id] = { id, index, title, url, analysis: {} }
    }
    // Return the results of the script in the tab "analysis" prop
    pages[tab.id]['analysis'][script.id] = { ...script, output, date: Date.now() }
    return pages
  },
  [SCRIPT_EXECUTED_FAILURE] (state, action) {
    const { tab, script, output = 'An unknown error occured' } = action
    let pages = Object.assign({}, state)
    // Initialize a new node by tab ID if necessary
    // TODO: Abstract out to a new function that also discards old nodes
    if (!pages[tab.id]) {
      const { id, index, title, url } = tab
      pages[tab.id] = { id, index, title, url, analysis: {} }
    }
    //  Code is identical for now
    pages[tab.id]['analysis'][script.id] = { ...script, output, date: Date.now() }
    return pages
  },
  //  TODO: Refactor to include queries.
  [EXECUTE_SCRIPT_GROUP] (state, action) {
    return state
  },
  [CLEAR_EXECUTED] (state/*, action */) {
    return state
  }
}

export default function scripts (state = initialState, action) {
  const reduceFn = actionsMap[action.type]
  if (!reduceFn) return state
  return reduceFn(state, action)
}
