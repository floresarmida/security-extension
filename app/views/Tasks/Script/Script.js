import React, { PropTypes } from 'react'

import { ListItem } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import ActionInfo from 'material-ui/svg-icons/action/info'

import Inspector from 'react-json-view'

const Script = ({ executeScript, id, title, description, body, executed, output, inspectorConfig }) => (
  <div>
    <ListItem
      primaryText={title}
      secondaryText={description}
      disabled={false}
      leftCheckbox={<Checkbox disabled={false}
        onClick={() => executeScript(id, body)}
      />}
      rightIcon={<ActionInfo />}
      style={{ paddingBottom: 4 }}
    />
    {output && <Inspector
      src={output}
      name={null}
      collapsed={2}
      iconStyle='square'
      {...inspectorConfig}
    />}
  </div>
)

Script.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  executed: PropTypes.bool.isRequired,
  executeScript: PropTypes.func.isRequired
  // output: PropTypes.array
}
Script.defaultProps = {
  description: ''
}

export default Script
