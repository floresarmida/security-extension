import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import App from './App'

class Root extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  render () {
    const { store } = this.props
    return (
      <Provider store={store}>
        {store && <App />}
      </Provider>
    )
  }
}
export default Root
