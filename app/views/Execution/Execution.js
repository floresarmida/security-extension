import React from 'react'
// import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
//  Redux Actions
import { addScript, editScript } from '../../ducks/scripts'
const actions = { addScript, editScript }
//  Styles
import style from '../../styles/Execution.css'

@connect(
  state => ({
    scripts: state.scripts
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)
export default class Execution extends React.Component {
  // static propTypes = {
  //   scripts: PropTypes.array.isRequired
  // }
  render ({ scripts } = this.props) {
    console.log('Execution loaded scripts', scripts)
    return (
      <section className={style.normal}>
        Execution View
      </section>
    )
  }
}
