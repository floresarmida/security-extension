import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
//  Run getMuiTheme here to prevent unnecessary rerenders in App.js
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const Theme = getMuiTheme(
  Object.assign({}, darkBaseTheme, {})
)

export default Theme
