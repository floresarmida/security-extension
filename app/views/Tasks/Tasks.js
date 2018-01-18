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

import Script from './Script'

const sample = {
  'string': 'this is a test string',
  'integer': 42,
  'array': [
    1,
    2,
    3,
    'test',
    null
  ],
  'float': 3.14159,
  'object': {
    'first-child': true,
    'second-child': false,
    'last-child': null
  },
  'string_number': '1234',
  'date': '2018-01-18T03:52:38.533Z'
}

@connect(
  state => ({
    groups: scriptGroups(state)
  }),
  dispatch => {
    const actions = { executeScript }
    return { actions: bindActionCreators(actions, dispatch) }
  }
)
class Editor extends Component {
  static propTypes = {
    groups: PropTypes.object.isRequired
  }
  static defaultProps = {
    groups: {}
  }
  render () {
    const { groups } = this.props
    console.warn('TASKS:', this.props, Object.keys(groups))
    return (
      <section>
        {Object.keys(groups).map(key => (
          <Card key={key} style={{ marginBottom: 16 }}>
            <CardTitle title={key} style={{ paddingBottom: 0 }}/>
            <List>
              {groups[key].map(script => (
                <Script key={script.id} {...script} output={sample} />
              ))}
            </List>
            <FlatButton secondary fullWidth label={`Execute Group`} />
          </Card>
        ))}
      </section>
    )
  }
}
export default Editor
