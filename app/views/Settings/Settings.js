import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
//  Redux Actions
import { editConfig } from '../../ducks/config'
const actions = { editConfig }

//  UI
import '../../styles/Settings.css'

import { Card, CardTitle } from 'material-ui/Card'
import Toggle from 'material-ui/Toggle'

@connect(
  state => ({
    autorun: state.config.autorun,
    editor: state.config.editor,
    inspector: state.config.inspector
  }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)
class Settings extends Component {
  static propTypes = {
    autorun: PropTypes.bool.isRequired,
    editor: PropTypes.object.isRequired,
    inspector: PropTypes.object.isRequired
  }
  static defaultProps = {
    autorun: false,
    editor: {},
    inspector: {}
  }
  render () {
    const { autorun, editor, inspector, actions } = this.props
    return (
      <section>
        <Toggle toggled={autorun}
          onToggle={(e, autorun) => actions.editConfig({ autorun })}
          label='AutoRun on Page Load'
          labelPosition='right'
        />
        <Card key='editor' style={{ marginBottom: 16 }}>
          <CardTitle title='Editor' style={{ paddingBottom: 0 }} />
          <p>Theme: {editor.theme}</p>
          <p>Font Size: {editor.fontSize}</p>
          <p>Tab Size: {editor.tabSize}</p>
          <p>Line Numbering: {editor.showLineNumbers}</p>
          <p>Basic AutoCompletion: {editor.enableBasicAutocompletion}</p>
          <p>Live AutoCompletion: {editor.enableLiveAutocompletion}</p>
          <p>Snippets: {editor.enableSnippets}</p>
        </Card>
        <Card key='inspector' style={{ marginBottom: 16 }}>
          <CardTitle title='Inspector' style={{ paddingBottom: 0 }} />
          <p>Theme: {inspector.theme}</p>
          <p>Tab Size: {inspector.indentWidth}</p>
          <p>Show Data Types: {inspector.displayDataTypes}</p>
          <p>Show Object Sizes: {inspector.displayObjectSize}</p>
          <p>String Preview Length: {inspector.collapseStringsAfterLength}</p>
          <p>Click-to-Copy: {inspector.enableClipboard}</p>
        </Card>
      </section>
    )
  }
}
export default Settings
