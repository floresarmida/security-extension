import React from 'react'
// import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
//  Redux Actions
import { addScript, editScript } from '../../ducks/scripts'
const actions = { addScript, editScript }
//  Styles
import '../../styles/Composition.css'

import AceEditor from 'react-ace'

import 'brace'
import 'brace/mode/javascript'
import 'brace/theme/github'
import 'brace/theme/monokai'

@connect(
  state => ({
    scripts: state.scripts,
    editor: state.config.editor
  }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)
export default class Composition extends React.Component {
  // static propTypes = {
  //   scripts: PropTypes.array.isRequired
  // }
  render ({ scripts, editor } = this.props) {
    console.log('Composition loaded config', editor)
    return (
      <section>
        <AceEditor
          name='composer'
          mode='javascript'
          theme={editor.theme}
          // onLoad={this.onLoad}
          // onChange={this.onChange}
          fontSize={editor.fontSize}
          setOptions={editor.options}
          showPrintMargin
          showGutter
          highlightActiveLine
          value={editor.value}
        />
      </section>
    )
  }
}
