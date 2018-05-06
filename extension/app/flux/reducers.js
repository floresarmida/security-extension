/*
REDUX REDUCERS
Each reducer is a node in state that can be altered
*/
import { combineReducers } from 'redux'
import scripts from '../ducks/scripts'
import groups from '../ducks/groups'
import editor from '../ducks/editor'
import config from '../ducks/config'

export default combineReducers({
  scripts,
  groups,
  editor,
  config
})
