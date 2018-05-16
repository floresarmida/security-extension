import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Inspector from 'react-json-view'

/*
IDE > OUTPUT PANE
Shows the output of a command
*/
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
          name='Editor Script Output'
          collapsed={Object.keys(output).length >= 20}
          {...inspectorConfig}
        />
      </section>
    )
  }
}
export default Output
