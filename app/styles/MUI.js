import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
//  Run getMuiTheme here to prevent unnecessary rerenders in App.js
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const Theme = getMuiTheme(
  Object.assign({}, lightBaseTheme, {})
)

export default Theme
