import React, { PropTypes } from 'react'

import { ListItem } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import ActionInfo from 'material-ui/svg-icons/action/info'

import Inspector from 'react-json-view'

/*
SCRIPT COMPONENT
Renders a script's metadata w/ code preview
*/
const Script = ({ executeScript, id, name, description, code, executed, output, inspectorConfig }) => (
  <div>
    <ListItem
      primaryText={name}
      secondaryText={description}
      disabled={false}
      leftCheckbox={<Checkbox disabled={false}
        onClick={() => executeScript(id, code)}
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
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  body: PropTypes.body,
  // executed: PropTypes.bool.isRequired,
  executeScript: PropTypes.func.isRequired,
  output: PropTypes.any //  Should be array
}
Script.defaultProps = {
  description: ''
}

export default Script
