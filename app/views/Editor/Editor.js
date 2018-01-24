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
    editor: state.config.editor
  }),
  dispatch => ({ actions: bindActionCreators({ editConfig }, dispatch) })
)
class Editor extends Component {
  static propTypes = {
    editor: PropTypes.object.isRequired
  }
  static defaultProps = {
    editor: {}
  }
  render () {
    const { editor } = this.props
    return (
      <section>
        <AceEditor
          name='composer'
          mode='javascript'
          theme={editor.theme}
          fontSize={editor.fontSize}
          setOptions={editor.options}
          showPrintMargin
          showGutter
          highlightActiveLine
          wrapEnabled
          collapsed={false}
          displayDataTypes={false}
          value={editor.value}
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
