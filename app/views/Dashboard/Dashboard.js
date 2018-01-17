import React from 'react'
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
    scripts: state.scripts
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)
export default class Dashboard extends React.Component {
  // static propTypes = {
  //   scripts: PropTypes.array.isRequired
  // }
  render ({ scripts } = this.props) {
    console.log('Dashboard loaded scripts', scripts)
    return (
      <section>
        Includes at a glance metrics for the application, scripts that ran on this page, logged output, etc.
      </section>
    )
  }
}
/*
<section className={style.normal}>
  Dashboard View
</section>
*/
