import React from 'react'
// import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
//  Redux Actions
import { addScript, editScript } from '../../ducks/scripts'
const actions = { addScript, editScript }

import '../../styles/Settings.css'

import { FormGroup, Switch, Tag, Intent } from '@blueprintjs/core'

@connect(
  state => ({
    scripts: state.scripts,
    config: state.config
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)
class Settings extends React.Component {
  render ({ scripts } = this.props) {
    console.log('Settings loaded scripts', scripts)
    return (
      <section>
        <FormGroup
          helperText='Warning: This is good for a test environment, but will have a performance impact.'
          label='Auto-Run Scripts'
        >
          <Switch checked={true} key='autorun' label='Enabled' onChange={this.handleActiveChange} />
          <p>
            Select Element here for choosing autorun scripts
          </p>
          <Tag onRemove={this.deleteTag}>Done</Tag>
        </FormGroup>
      </section>
    )
  }
}
export default Settings
