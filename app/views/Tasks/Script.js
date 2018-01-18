import React, { PropTypes } from 'react'

import { ListItem } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'

import ActionInfo from 'material-ui/svg-icons/action/info'
import Avatar from 'material-ui/Avatar'
import FileFolder from 'material-ui/svg-icons/file/folder'

const Script = ({ title, description }) => (
  <ListItem
    leftCheckbox={<Checkbox />}
    rightIcon={<ActionInfo />}
    primaryText={title}
    secondaryText={description}
  />
)

Script.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
}
Script.defaultProps = {
  description: ''
}

export default Script
