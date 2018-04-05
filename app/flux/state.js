/*
INITIAL STATE
This is the default state of the application,
as used by reducers and todoapp.js
*/
import { initialState as scripts } from '../ducks/scripts'
import { initialState as groups } from '../ducks/groups'
import { initialState as editor } from '../ducks/editor'
import { initialState as config } from '../ducks/config'

export default {
  scripts,
  groups,
  editor,
  config
}
