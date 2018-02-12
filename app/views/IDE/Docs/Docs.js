import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

@connect(state => ({
  config: state.config
}))
class Docs extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired
  }
  static defaultProps = {
    config: {}
  }
  render ({ config } = this.props) {
    return (
      <section>
        Placeholder for API docs (the "how-to")
      </section>
    )
  }
}
export default Docs
