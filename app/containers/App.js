import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Dashboard from '../views/Dashboard/Dashboard'
import Execution from '../views/Execution/Execution'
import Composition from '../views/Composition/Composition'
import Settings from '../views/Settings/Settings'
import '../styles/App.css'

import { Tabs2, Tab2 } from '@blueprintjs/core'

@connect(
  state => ({
    view: state.config.view
  })
  // dispatch => ({
  //   actions: bindActionCreators(TodoActions, dispatch)
  // })
)
export default class App extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired
  }
  componentDidMount () {
    console.log('APP:', chrome)
  }

  render () {
    // TODO: Switch statement for rendering view components
    return (
      <Tabs2 id='app' onChange={this.handleTabChange}>
        <Tab2 id='dashboard' title='Dashboard' panel={<Dashboard />} />
        <Tab2 id='execution' title='Execution' panel={<Execution />} />
        <Tab2 id='composition' title='Composition' panel={<Composition />} />
        <Tab2 id='settings' title='Settings' panel={<Settings />} />
      </Tabs2>
    )
  }
}
