import React from 'react'
// import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
//  Redux Actions
import { addScript, editScript } from '../../ducks/scripts'
const actions = { addScript, editScript }
//  Styles
import '../../styles/Execution.css'

@connect(
  state => ({
    scripts: state.scripts
  }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)
class Execution extends React.Component {
  // static propTypes = {
  //   scripts: PropTypes.array.isRequired
  // }
  render ({ scripts } = this.props) {
    console.log('Execution loaded scripts', scripts)
    return (
      <section>
        A view for running ad-hoc commands and assigning labels to scripts.
      </section>
    )
  }
}
export default Execution
