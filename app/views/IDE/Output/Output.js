import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Inspector from 'react-json-view'

@connect(state => ({
  output: state.editor.output,
  inspectorConfig: state.config.inspector
}))
class Output extends Component {
  static propTypes = {
    output: PropTypes.object.isRequired,
    inspectorConfig: PropTypes.object
  }
  static defaultProps = {
    output: { 0: 'No output' },
    inspectorConfig: {}
  }
  render (
    { output, inspectorConfig } = this.props
  ) {
    return (
      <section>
        <Inspector
          src={output}
          name={null}
          collapsed={2}
          iconStyle='square'
          {...inspectorConfig}
        />
      </section>
    )
  }
}
export default Output
