import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
//  Redux Actions
import { addScript, editScript } from '../../ducks/scripts'
const actions = { addScript, editScript }
//  Styles
import '../../styles/Dashboard.css'

/*
DASHBOARD VIEW:
Shows groups & individual tasks that can be executed ad-hoc
*/
@connect(
  state => ({
    scripts: state.scripts
  }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)
class Dashboard extends Component {
  static propTypes = {
    scripts: PropTypes.array.isRequired
  }
  static defaultProps = {
    scripts: []
  }
  render (
    { scripts } = this.props
  ) {
    return (
      <section>
        Includes at a glance metrics for the application, scripts that ran on this page, logged output, etc.
      </section>
    )
  }
}
export default Dashboard
