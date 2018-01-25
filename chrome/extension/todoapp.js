import React from 'react'
import ReactDOM from 'react-dom'
import Root from '../../app/containers/Root'
import './todoapp.css'

chrome.storage.local.get('state', (obj) => {
  const { state } = obj
  const initialState = JSON.parse(state || '{}')

  const createStore = require('../../app/flux/store')
  console.warn('createStore', createStore)

  //  Chrome async API support
  require('./transform/chrome-extension-async')
  require('./transform/execute-async-function')

  ReactDOM.render(
    <Root store={createStore(initialState)} />,
    document.querySelector('#root')
  )
})
