import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
//  Redux Actions
import { changeView } from '../ducks/config'
const actions = { changeView }

import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Tabs, Tab} from 'material-ui/Tabs'
import muiTheme from '../styles/MUI'
import '../styles/App.css'

import Dashboard from '../views/Dashboard/Dashboard'
import Execution from '../views/Execution/Execution'
import Composition from '../views/Composition/Composition'
import Settings from '../views/Settings/Settings'

@connect(
  state => ({
    view: state.config.view
  }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)
class App extends React.Component {
  static propTypes = {
    view: PropTypes.string.isRequired
  }
  componentDidMount () {
    console.log('APP:', chrome)
  }

  render () {
    const { view, actions } = this.props
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div id='body'>
          <AppBar title='Security Extension' showMenuIconButton={false} />
          <Tabs value={view} onChange={actions.changeView}>
            <Tab value='dashboard' label='Dashboard' >
              <Dashboard />
            </Tab>
            <Tab value='execution' label='Execution' >
              <Execution />
            </Tab>
            <Tab value='composition' label='Composition' >
              <Composition />
            </Tab>
            <Tab value='settings' label='Settings' >
              <Settings />
            </Tab>
          </Tabs>
        </div>
      </MuiThemeProvider>
    )
  }
}
export default App
