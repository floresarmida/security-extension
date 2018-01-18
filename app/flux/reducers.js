import { combineReducers } from 'redux'
import config from '../ducks/config'
import groups from '../ducks/groups'
import scripts from '../ducks/scripts'
import todos from '../ducks/todos'

export default combineReducers({
  config,
  groups,
  scripts,
  todos
})
