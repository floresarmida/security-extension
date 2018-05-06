import React, { Component, PropTypes } from 'react'
// import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
//  Redux Actions
import { executeScript } from '../../ducks/scripts'
import { scriptGroups } from '../../flux/selectors'
//  Styles
import '../../styles/Tasks.css'

import { Card, CardTitle } from 'material-ui/Card'
import { List } from 'material-ui/List'
import FlatButton from 'material-ui/FlatButton'

import Script from './Script/Script'

/*
TASKS VIEW:
Shows groups & individual tasks that can be executed ad-hoc
*/
@connect(
  state => ({
    groups: scriptGroups(state),
    inspectorConfig: state.config.inspector
  }),
  dispatch => {
    const actions = { executeScript }
    return { actions: bindActionCreators(actions, dispatch) }
  }
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
