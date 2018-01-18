import React, { PropTypes } from 'react'
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
      autorun
    }
  },
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)
class Settings extends React.Component {
  static propTypes = {
    autorun: PropTypes.bool.isRequired
  }
  render () {
    const { autorun, actions } = this.props
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
