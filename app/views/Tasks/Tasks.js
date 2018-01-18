import React, { Component, PropTypes } from 'react'
// import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
//  Redux Actions
import { executeScript } from '../../ducks/scripts'
import { scriptGroups } from '../../flux/selectors'
//  Styles
import '../../styles/Execution.css'

import { Card, CardActions, CardTitle, CardHeader, CardText } from 'material-ui/Card'
import { List, ListItem } from 'material-ui/List'
import FlatButton from 'material-ui/FlatButton'

import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';

import Script from './Script'

@connect(
  state => ({
    groups: scriptGroups(state)
  }),
  dispatch => {
    const actions = { executeScript }
    return { actions: bindActionCreators(actions, dispatch) }
  }
)
class Editor extends Component {
  static propTypes = {
    groups: PropTypes.object.isRequired
  }
  static defaultProps = {
    groups: {}
  }
  render () {
    const { groups } = this.props
    console.warn('TASKS:', this.props, Object.keys(groups))
    return (
      <section>
        {Object.keys(groups).map(key => (
          <Card key={key} style={{ marginBottom: 16 }}>
            <CardTitle
              title={key}
              actAsExpander
              showExpandableButton
            />
            <FlatButton primary fullWidth label={`Execute Group`} />
            <List>
              {groups[key].map(script => (
                <Script key={script.id} {...script} />
              ))}
            </List>
            <CardText expandable >
              <code>
                [SCRIPT OUTPUT HERE]
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </code>
            </CardText>
          </Card>
        ))}
      </section>
    )
  }
}
export default Editor
