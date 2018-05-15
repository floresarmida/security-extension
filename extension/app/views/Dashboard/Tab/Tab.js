import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
//  Redux Actions
//  Styles
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar'

@connect(
  (state, props) => ({
    scripts: state.tabs
  })
)
class Tab extends Component {
  static propTypes = {
    id: PropTypes.number,
    index: PropTypes.number,
    url: PropTypes.string,
    title: PropTypes.string
  }
  static defaultProps = {
    id: NaN,
    index: NaN,
    url: 'chrome://newtab/',
    title: 'Tab'
  }
  render (
    { id, index, url, title } = this.props
  ) {
    return (
      <Card>
        <CardHeader
          title={title}
          subtitle={url}
          avatar={<Avatar size={64}>{id}</Avatar>}
        />
        {/* <CardTitle title='Card title' subtitle='Card subtitle' /> */}
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <FlatButton label='Action1' />
          <FlatButton label='Action2' />
        </CardActions>
      </Card>
    )
  }
}
export default Tab
