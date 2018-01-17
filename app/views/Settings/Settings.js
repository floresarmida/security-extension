import React from 'react'
// import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
//  Redux Actions
import { editConfig } from '../../ducks/config'
const actions = { editConfig }

//  UI
import '../../styles/Settings.css'
import Toggle from 'material-ui/Toggle'

@connect(
  state => {
    const { autorun } = state.config
    return {
      scripts: state.scripts,
      autorun
    }
  },
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)
class Settings extends React.Component {
  render ({ scripts, autorun, actions } = this.props) {
    console.log('Settings loaded scripts', scripts, actions)
    return (
      <section>
        <Toggle toggled={autorun}
          onToggle={(e, autorun) => actions.editConfig({ autorun })}
          label='AutoRun on Page Load'
          labelPosition='right'
        />
      </section>
    )
  }
}
export default Settings
