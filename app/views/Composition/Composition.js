import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//  Redux Actions
import { editConfig } from '../../ducks/config'
const actions = { editConfig }
//  Styles
import '../../styles/Composition.css'

// import AceEditor from 'react-ace'

// import 'brace'
// import 'brace/mode/javascript'
// import 'brace/theme/github'
// import 'brace/theme/monokai'

@connect(
  state => {
    const { editor } = state.config
    return {
      editor
    }
  },
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)
class Composition extends Component {
  static propTypes = {
    editor: PropTypes.object.isRequired
  }
  render () {
    // const { config } = this.props
    console.log('Composition Props', this.props)
    return (
      <section>
        Placeholder for t/s
      </section>
    )
  }
}
export default Composition

/*
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
*/
