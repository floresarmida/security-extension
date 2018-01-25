import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
//  Redux Actions
// import { editConfig } from '../../../ducks/config'
//  Styles

import AceEditor from 'react-ace'
import 'brace'
import 'brace/mode/javascript'
import 'brace/theme/github'
import 'brace/theme/monokai'

@connect(
  state => ({
    input: state.editor.input,
    packages: state.editor.packages,
    config: state.config.editor
  })
)
class Editor extends Component {
  static propTypes = {
    input: PropTypes.string.isRequired,
    packages: PropTypes.array.isRequired,
    config: PropTypes.object.isRequired
  }
  static defaultProps = {
    input: '',
    packages: [],
    config: {}
  }
  render ({ input, packages, config } = this.props) {
    // console.warn('EDITOR', config)
    return (
      <section>
        TEST
        {config && <AceEditor
          name='composer'
          mode='javascript'
          theme='monokai'
          // tabSize={2}
          {...config}
          value={input}
          width='100%'
          height='400px'
        />}
      </section>
    )
  }
}
export default Editor
