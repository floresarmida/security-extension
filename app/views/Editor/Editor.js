import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//  Redux Actions
import { editConfig } from '../../ducks/config'
//  Styles
import '../../styles/Editor.css'

import AceEditor from 'react-ace'
import 'brace'
import 'brace/mode/javascript'
import 'brace/theme/github'
import 'brace/theme/monokai'

@connect(
  state => ({
    // editor: state.config.editor
    settings: state.editor.settings,
    input: state.editor.input,
    output: state.editor.output,
    packages: state.editor.packages
  }),
  dispatch => ({ actions: bindActionCreators({ editConfig }, dispatch) })
)
class Editor extends Component {
  static propTypes = {
    settings: PropTypes.object.isRequired
  }
  static defaultProps = {
    settings: {}
  }
  render ({ input, output, settings: { theme, fontSize, options } } = this.props) {
    return (
      <section>
        <AceEditor
          name='composer'
          mode='javascript'
          theme={theme}
          fontSize={fontSize}
          setOptions={options}
          showPrintMargin
          showGutter
          highlightActiveLine
          wrapEnabled
          collapsed={false}
          displayDataTypes={false}
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
