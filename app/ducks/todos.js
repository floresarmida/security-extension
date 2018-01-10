/*
CONSTANTS
*/
const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
const EDIT_TODO = 'EDIT_TODO'
const COMPLETE_TODO = 'COMPLETE_TODO'
const COMPLETE_ALL = 'COMPLETE_ALL'
const CLEAR_COMPLETED = 'CLEAR_COMPLETED'
//  Legacy
export const SHOW_ALL = 'SHOW_ALL'
export const SHOW_COMPLETED = 'SHOW_COMPLETED'
export const SHOW_ACTIVE = 'SHOW_ACTIVE'

/*
ACTIONS
*/
export const addTodo = (text) => ({ type: ADD_TODO, text })
export const deleteTodo = (id) => ({ type: DELETE_TODO, id })
export const editTodo = (id, text) => ({ type: EDIT_TODO, id, text })
export const completeTodo = (id) => ({ type: COMPLETE_TODO, id })
export const completeAll = (text) => ({ type: COMPLETE_ALL })
export const clearCompleted = (text) => ({ type: CLEAR_COMPLETED })

/*
REDUCER
*/
const initialState = [{
  text: 'Use Redux',
  completed: false,
  id: 0
}]

const actionsMap = {
  [ADD_TODO] (state, action) {
    return [{
      id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      completed: false,
      text: action.text
    }, ...state]
  },
  [DELETE_TODO] (state, action) {
    return state.filter(todo =>
      todo.id !== action.id
    )
  },
  [EDIT_TODO] (state, action) {
    return state.map(todo =>
      (todo.id === action.id
        ? Object.assign({}, todo, { text: action.text })
        : todo
      )
    )
  },
  [COMPLETE_TODO] (state, action) {
    return state.map(todo =>
      (todo.id === action.id
        ? Object.assign({}, todo, { completed: !todo.completed })
        : todo
      )
    )
  },
  [COMPLETE_ALL] (state/*, action */) {
    const areAllCompleted = state.every(todo => todo.completed)
    return state.map(todo => Object.assign({}, todo, {
      completed: !areAllCompleted
    }))
  },
  [CLEAR_COMPLETED] (state/*, action */) {
    return state.filter(todo => todo.completed === false)
  }
}

export default function todos (state = initialState, action) {
  const reduceFn = actionsMap[action.type]
  if (!reduceFn) return state
  return reduceFn(state, action)
}
