import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//  Redux Actions
import { editorInput, executeEditorScript } from '../../../ducks/editor'
import { executeScript } from '../../../ducks/scripts'
//  Styles
import AceEditor from 'react-ace'
//  Ace styles - must be imported here
import 'brace'
import 'brace/mode/javascript'
import 'brace/theme/github'
import 'brace/theme/monokai'

import FlatButton from 'material-ui/FlatButton'

@connect(
  state => ({
    input: state.editor.input,
    packages: state.editor.packages,
    config: state.config.editor
  }),
  dispatch => {
    const actions = { editorInput, executeScript, executeEditorScript }
    return { actions: bindActionCreators(actions, dispatch) }
  }
)
class Editor extends React.Component {
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
  /*
  TODO: Event listeners for save/autosave
  - add onFocus and onUnfocus event listeners
  - Store the focus status in component state
  - If focused, use setTimeout(cb(), 5000) to save every few secs
  - Make saving an onClick event?
  */
  render (
    { input, packages, config, actions } = this.props
  ) {
    return (
      <section>
        {config && <AceEditor
          name='composer'
          mode='javascript'
          theme='monokai'
          {...config}
          value={input}
          width='100%'
          height='400px'
          onChange={(input) => actions.editorInput(input)}
        />}
        <FlatButton
          secondary
          fullWidth
          label='Execute'
          onClick={() => actions.executeEditorScript(input)}
        />
      </section>
    )
  }
}
export default Editor
