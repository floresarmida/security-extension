import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import App from './App'

export default class Root extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render () {
    const { store } = this.props
    console.log('Root got store:', store)
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
