import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//  Redux Actions
// import { editConfig } from '../../ducks/config'
//  Styles
import '../../styles/IDE.css'
import Editor from './Editor/Editor'
import Output from './Output/Output'
import Docs from './Docs/Docs'

@connect(
  state => ({
    config: state.config
  })
  // dispatch => ({ actions: bindActionCreators({ editConfig }, dispatch) })
)
class IDE extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired
  }
  static defaultProps = {
    config: {}
  }
  render ({ config } = this.props) {
    return (
      <section>
        <Editor />
        <Output />
        <Docs />
        <p>TODO: Bottom nav for these</p>
      </section>
    )
  }
}
export default IDE
