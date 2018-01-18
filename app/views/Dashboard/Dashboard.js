import React, { PropTypes } from 'react'
// import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
//  Redux Actions
import { addScript, editScript } from '../../ducks/scripts'
const actions = { addScript, editScript }
//  Styles
import '../../styles/Dashboard.css'

@connect(
  state => ({
    scripts: state.scripts || []
  }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)
class Dashboard extends React.Component {
  static propTypes = {
    scripts: PropTypes.array.isRequired
  }
  render () {
    const { scripts } = this.props
    return (
      <section>
        Includes at a glance metrics for the application, scripts that ran on this page, logged output, etc.
      </section>
    )
  }
}
export default Dashboard
