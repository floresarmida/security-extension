import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
//  Redux Actions
// import { executeScript } from '../../../ducks/scripts'
// import { scriptGroups } from '../../../flux/selectors'
//  Styles

@connect(
  state => ({
    scripts: state.scripts
  })
  // dispatch => {
  //   const actions = { executeScript }
  //   return { actions: bindActionCreators(actions, dispatch) }
  // }
)
class Submit extends Component {
  static propTypes = {
    scripts: PropTypes.array.isRequired
    // actions: PropTypes.object.isRequired
  }
  static defaultProps = {
    scripts: []
  }
  render () {
    const { scripts } = this.props
    return (
      <section>
        Submit.js
      </section>
    )
  }
}
export default Submit
