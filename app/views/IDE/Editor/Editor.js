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
    // editor: state.config.editor
    input: state.editor.input,
    config: state.config.editor
    // packages: state.editor.packages
  })
)
class Editor extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired
  }
  static defaultProps = {
    config: {}
  }
  render ({ input, config: { theme, fontSize, options } } = this.props) {
    // console.warn('EDITOR', config)
    return (
      <section>
        <AceEditor
          name='composer'
          mode='javascript'
          theme={theme}
          fontSize={fontSize}
          // setOptions={options}
          // showPrintMargin
          // showGutter
          // highlightActiveLine
          // wrapEnabled
          // collapsed={false}
          // displayDataTypes={false}
          value={input}
          width='100%'
          height='400px'
          // onLoad={this.onLoad}
          // onChange={this.onChange}
        />
      </section>
    )
  }
}
export default Editor
