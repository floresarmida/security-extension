/*
REDUX SELECTORS
Allows you to memoize (it's like caching) state nodes,
preventing components from re-rendering unneccesarily.
*/
import { createSelector } from 'reselect'

const select = {
  scripts: (state) => state.scripts || [],
  groups: (state) => state.groups || [],
  config: (state) => state.config || {}
}

export const scriptGroups = createSelector(
  [select.scripts, select.config],
  (scripts, config) => {
    let map = {}
    for (let group of config.groups) {
      map[group] = scripts.filter(script => script.group === group)
    }
    return map
  }
)
