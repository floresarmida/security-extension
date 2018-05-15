import React, { Component, PropTypes } from 'react'
// import PropTypes from 'prop-types'
import { compose, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
//  Redux Actions
import { executeScript } from '../../ducks/scripts'
import { scriptGroups } from '../../flux/selectors'
//  Styles
import '../../styles/Tasks.css'

import { Card, CardTitle } from 'material-ui/Card'
import { List } from 'material-ui/List'
import FlatButton from 'material-ui/FlatButton'

import Script from './Script/Script'
import get from 'lodash/get'

/*
TASKS VIEW:
Shows groups & individual tasks that can be executed ad-hoc
*/
@compose(
  firebaseConnect(['scripts']),
  connect(
    state => {
      // TODO: Hydrate with installed scripts (user/id/scripts)
      const scripts = get(state, 'db.data.scripts.core', [])
      let groups = {}
      for (let script of scripts) {
        Array.isArray(groups[script.group])
          ? groups[script.group].push(script)
          : groups[script.group] = [script]
      }
      console.log('Script collection:', scripts)
      console.log('Groups:', groups)

      chrome.tabs.query(
        {currentWindow: true, active: true},
        (tabs) => {
          const { id, index, url, title } = tabs[0]
          console.log('ACTIVE TAB:', tabs, id, index, url, title)
        }
      )

      return {
        groups: groups,
        inspectorConfig: state.config.inspector
      }
    },
    dispatch => {
      const actions = { executeScript }
      return { actions: bindActionCreators(actions, dispatch) }
    }
  )
)
class Tasks extends Component {
  static propTypes = {
    groups: PropTypes.object.isRequired,
    inspectorConfig: PropTypes.object.isRequired
    // actions: PropTypes.object.isRequired
  }
  static defaultProps = {
    groups: {},
    inspectorConfig: {}
  }
  render (
    { groups, inspectorConfig, actions } = this.props
  ) {
    return (
      <section>
        {/* {JSON.stringify(groups)} */}
        {Object.keys(groups).map(key => (
          <Card key={key} style={{ marginBottom: 16 }}>
            <CardTitle title={key} style={{ paddingBottom: 0 }} />
            <List>
              {groups[key].map(script => (
                <Script key={script.id} {...script} executeScript={actions.executeScript} inspectorConfig={inspectorConfig} />
              ))}
            </List>
            <FlatButton secondary fullWidth label={`Execute Group`} />
          </Card>
        ))}
      </section>
    )
  }
}
export default Tasks
