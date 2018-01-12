import React from 'react'
// import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
//  Redux Actions
import { addScript, editScript } from '../../ducks/scripts'
const actions = { addScript, editScript }
//  Styles
import style from '../../styles/Settings.css'

@connect(
  state => ({
    scripts: state.scripts
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)
export default class Settings extends React.Component {
  // static propTypes = {
  //   scripts: PropTypes.array.isRequired
  // }
  render ({ scripts } = this.props) {
    console.log('Settings loaded scripts', scripts)
    return (
      <section className={style.normal}>
        Settings View
      </section>
    )
  }
}
