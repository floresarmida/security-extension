import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Dashboard from '../views/Dashboard/Dashboard'
import Execution from '../views/Execution/Execution'
import Composition from '../views/Composition/Composition'
import Settings from '../views/Settings/Settings'
import '../styles/App.css'

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
      <article>
        <div id='placeholder-for-tabs-component'>
          <Dashboard />
          <Execution />
          <Composition />
          <Settings />
        </div>
      </article>
    )
  }
}
