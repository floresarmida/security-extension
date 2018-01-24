import React, { Component, PropTypes } from 'react'
// import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
//  Redux Actions
import { addScript, editScript } from '../../ducks/scripts'
import { EVALUATE } from '../../core/DOM'
const actions = { addScript, editScript }
//  Styles
import '../../styles/Dashboard.css'

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
  componentDidMount () {
    // function EVALUATE (script) {
    //   try {
    //     const site = { active: true, currentWindow: true }
    //     chrome.tabs.query(site, (tabs) => {
    //       chrome.tabs.sendMessage(tabs[0].id, { script }, (response) => {
    //         console.warn('Script | Response:', `\n${script}\n`, response)
    //       })
    //     })
    //   } catch (err) {
    //     console.warn('EVALUATE: Failed - ', err)
    //   }
    // }
    EVALUATE('console.log("hello world script!")')
  }

  render () {
    const { scripts } = this.props
    console.warn('DASHBOARD:', this.props)
    return (
      <section>
        Includes at a glance metrics for the application, scripts that ran on this page, logged output, etc.
      </section>
    )
  }
}
export default Dashboard
