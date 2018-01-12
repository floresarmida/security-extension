import { combineReducers } from 'redux'
import config from '../ducks/config'
import labels from '../ducks/labels'
import scripts from '../ducks/scripts'
import todos from '../ducks/todos'

export default combineReducers({
  config,
  labels,
  scripts,
  todos
})
